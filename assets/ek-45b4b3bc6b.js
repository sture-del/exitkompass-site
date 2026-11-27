
/* Valuation engine shared by Index and Success */
/* ---------- Country settings ---------- */
const COUNTRIES = {
  SE: { cur: "SEK", unit: "TSEK", chargeRate: 0.3142, example: "Nordisk Installation AB", hash: "se" },
  NO: { cur: "NOK", unit: "TNOK", chargeRate: 0.141, example: "Nordisk Installasjon AS", hash: "no" },
  /* Poland: amounts in thousands of PLN ("tys. PLN"), employer ZUS contributions about 20.5 % (emerytalne 9.76, rentowe 6.5,
     wypadkowe 1.67, FP 2.45, FGŚP 0.10). mUnit is the million suffix used by fmtM. */
  PL: { cur: "PLN", unit: "tys. PLN", mUnit: " mln PLN", chargeRate: 0.2048, example: "Instalbud Sp. z o.o.", hash: "pl" },
  /* Lithuania: euro, amounts in thousands ("tūkst. EUR"); employer social insurance about 1.77 % since the 2019 tax reform */
  LT: { cur: "EUR", unit: "tūkst. EUR", mUnit: " mln. EUR", chargeRate: 0.0177, example: "Baltijos instaliacija, UAB", hash: "lt" },
  /* The Netherlands: euro, amounts in thousands; employer charges (WW, ZVW, WIA/WAO, Aof) about 18 % before pension */
  NL: { cur: "EUR", unit: "duizend EUR", mUnit: " mln EUR", chargeRate: 0.18, example: "Hollandse Installatie B.V.", hash: "nl" },
  /* Finland: euro, amounts in thousands ("t€"); employer charges (TyEL pension, social security, unemployment and accident insurance) about 21 % */
  FI: { cur: "EUR", unit: "t€", mUnit: " milj. €", chargeRate: 0.21, example: "Pohjolan Asennus Oy", hash: "fi" }
};
/* Country adjustment of the Nordic deal multiples: there is no published survey of Polish SME transaction multiples, so Polish
   companies get the Nordic industry multiple times this factor (Adsco's assessment of the lower Polish SME deal levels). It is shown
   as its own step ("country") in the multiple bridge so the user sees it. */
const COUNTRY_MULT = { SE: 1, NO: 1, PL: 0.85, LT: 0.85, NL: 1.10, FI: 1 }; /* Finland is part of the Nordic deal survey, so no adjustment */
/* PLN and EUR amounts are written the way each language writes them (thousands, millions); SEK/NOK keep TSEK/TNOK */
const UNIT_L = {
  PLN: { PL: ["tys. PLN", " mln PLN"], EN: ["PLN '000", " PLN m"], SE: ["TPLN", " MPLN"], NO: ["TPLN", " MPLN"], LT: ["tūkst. PLN", " mln. PLN"], NL: ["duizend PLN", " mln PLN"], FI: ["t PLN", " milj. PLN"] },
  EUR: { LT: ["tūkst. EUR", " mln. EUR"], EN: ["EUR '000", " EUR m"], SE: ["TEUR", " MEUR"], NO: ["TEUR", " MEUR"], PL: ["tys. EUR", " mln EUR"], NL: ["duizend EUR", " mln EUR"], FI: ["t€", " milj. €"] }
};
["PL", "LT", "NL", "FI"].forEach(cc => { const c = COUNTRIES[cc], u = UNIT_L[c.cur];
  Object.defineProperty(c, "unit", { get: () => (u[lang] || u.EN)[0] });
  Object.defineProperty(c, "mUnit", { get: () => (u[lang] || u.EN)[1] }); });
let country = "SE";
/* UI language: "SE" Swedish, "NO" Norwegian, "EN" English – independent of the country (registry, currency, VAT) */
let lang = "SE";
const LK = () => lang;
let years = [2023, 2024, 2025];
const C = () => COUNTRIES[country];
const RT = () => lang === "EN" ? (window.ExitkompassReport.T.EN[country] || window.ExitkompassReport.T.EN.SE) : window.ExitkompassReport.T[lang];
/* base = EV/EBITDA per industry. Source: Dealsuite Nordic M&A Monitor (August 2026, H1-2026 survey, 95 of 295 Nordic M&A advisers,
   mid-market companies with revenue EUR 1-200 million). Health care services and healthtech are Adsco's assessment (Dealsuite reports
   Healthcare & Pharmaceuticals together: average 7.8, range 7.1-8.4; healthtech uses the top of that range). rev = EV/revenue (Adsco's assessment, no published Nordic SME source).
   da = typical depreciation share of EBITDA in the industry, which turns the EBITDA multiple into the matching EV/EBIT multiple */
const MULT_SRC = { name: "Dealsuite Nordic M&A Monitor", edition: "2026-08", period: "H1-2026", avg: 5.4,
  url: "https://www.dealsuite.com/en/resources/reports/nordics-monitor" };
const INDUSTRIES = {
  saas: { base: 7.9, rev: 2.0, da: 0.15 }, healthtech: { base: 8.4, rev: 1.5, da: 0.15 }, itcons: { base: 7.1, rev: 0.8, da: 0.08 }, health: { base: 6.5, rev: 0.9, da: 0.15 },
  bizserv: { base: 5.9, rev: 0.7, da: 0.10 }, manuf: { base: 5.0, rev: 0.6, da: 0.30 }, install: { base: 4.5, rev: 0.45, da: 0.12 }, whole: { base: 4.4, rev: 0.35, da: 0.12 },
  transport: { base: 4.4, rev: 0.4, da: 0.40 }, retail: { base: 3.8, rev: 0.3, da: 0.20 }, hosp: { base: 4.0, rev: 0.5, da: 0.25 }
};
/* Size: Dealsuite's average EV/EBITDA by normalised EBITDA (EUR million), same edition, interpolated on a log scale and held flat
   outside the published range (EUR 0.2-10 million). Applied proportionally: the industry multiple is scaled by curve / overall average,
   so a low-multiple industry is not penalised more in absolute terms than a high-multiple one. */
const SIZE_CURVE = [[0.2, 3.6], [0.5, 4.1], [1, 4.5], [2, 5.2], [5, 6.0], [10, 7.2]];
const EUR_FX = { SE: 11.0, NO: 11.7, PL: 4.25, LT: 1, NL: 1, FI: 1 }; /* SEK, NOK and PLN per EUR, approximate */
function sizeAdj(normK, base) {
  const m = Math.max(0, normK) / EUR_FX[country] / 1000, c = SIZE_CURVE;
  let v;
  if (m <= c[0][0]) v = c[0][1];
  else if (m >= c[c.length - 1][0]) v = c[c.length - 1][1];
  else for (let i = 1; i < c.length; i++) if (m <= c[i][0]) { const t = Math.log(m / c[i - 1][0]) / Math.log(c[i][0] / c[i - 1][0]); v = c[i - 1][1] + t * (c[i][1] - c[i - 1][1]); break; }
  return Math.round(base * (v / MULT_SRC.avg - 1) * 20) / 20;
}
/* The profit part of the value uses two multiples, as buyers do: EV/EBITDA (60 %) and EV/EBIT (40 %).
   EBIT = normalised EBITDA less the company's own depreciation share (from its accounts; the industry's typical share if unknown).
   k is the profit value relative to EBITDA alone: a company that depreciates less than its industry gets k > 1. */
const W_EBIT = 0.4;
function ebitFactor(d) {
  const dI = INDUSTRIES[d.industry].da, dC = d.da != null && isFinite(d.da) ? Math.min(0.8, Math.max(0, d.da)) : dI;
  return { dI, dC, k: (1 - W_EBIT) + W_EBIT * (1 - dC) / (1 - dI) };
}

/* ---------- Strategic value: how much more a strategic buyer could pay than the financial (multiple) value ----------
   Scored from what typically drives synergies and competition among trade buyers. Not part of the base valuation. */
const STRAT_IND = { saas: 2, healthtech: 2, itcons: 1, health: 1, bizserv: 1, manuf: 1, install: 1, whole: 1, transport: 1, retail: 0, hosp: 0 };
function strategicValue(d, v) {
  const g = growth(d), drivers = [];
  let pts = 0;
  const add = (k, p) => { if (p > 0) { pts += p; drivers.push(k); } };
  add("ind", STRAT_IND[d.industry] || 0);
  add("recur", d.recur >= 60 ? 2 : d.recur >= 30 ? 1 : 0);
  add("growth", g > 0.15 ? 2 : g > 0.05 ? 1 : 0);
  add("margin", d.bench && d.bench.pos === 3 ? 1 : 0);
  add("cust", d.topcust < 15 ? 1 : 0);
  add("buyers", d.buyers && d.buyers.length ? 1 : 0);
  const level = pts >= 6 ? 2 : pts >= 3 ? 1 : 0;
  const prem = [[0, 0.05], [0.05, 0.15], [0.15, 0.30]][level];
  const ev = v && v.ev > 0 ? v.ev : 0;
  return { level, pts, drivers, prem, evLo: ev * prem[0], evHi: ev * prem[1] };
}
/* ---------- Valuation engine (pure) ---------- */
function normalise(d) {
  const latestAdj = d.eb[2] + d.oneoff;
  /* With monthly reports the last twelve months (LTM) take the largest weight and the oldest year drops out: LTM 3, latest year 2, the year before 1 */
  const weighted = d.ltm ? (d.ltm.eb * 3 + latestAdj * 2 + d.eb[1]) / 6 : (latestAdj * 3 + d.eb[1] * 2 + d.eb[0]) / 6;
  const salaryAdj = d.ownsal - d.mktsal;
  return { latestAdj, weighted, salaryAdj, norm: weighted + salaryAdj };
}
function growth(d) {
  if (d.rev[0] <= 0 || d.rev[2] <= 0) return 0;
  return Math.pow(d.rev[2] / d.rev[0], 1 / 2) - 1;
}
function adjustments(d, norm) {
  const adj = [];
  adj.push({ key: "size", label: "Size (EBITDA " + fmtM(norm) + ")", v: sizeAdj(norm, INDUSTRIES[d.industry].base) });
  adj.push({ key: "owner", label: "Owner dependency", v: { high: -0.75, medium: -0.25, low: 0.25 }[d.owner] });
  adj.push({ key: "mgmt", label: "Management team", v: { none: -0.5, partial: 0, full: 0.3 }[d.mgmt] });
  const c = d.topcust;
  adj.push({ key: "cust", label: "Customer concentration", v: c > 30 ? -0.75 : c > 15 ? -0.3 : c < 5 ? 0.2 : 0 });
  const r = d.recur;
  adj.push({ key: "recur", label: "Recurring revenue", v: r >= 60 ? 0.75 : r >= 30 ? 0.3 : 0 });
  const g = growth(d);
  adj.push({ key: "growth", label: "Revenue growth (" + (g * 100).toFixed(0) + "% p.a.)", v: g > 0.15 ? 0.75 : g > 0.05 ? 0.3 : g >= 0 ? 0 : -0.75 });
  const trend = d.eb[1] > 0 ? d.eb[2] / d.eb[1] - 1 : 0;
  adj.push({ key: "trend", label: "Earnings trend", v: trend < -0.1 ? -0.5 : 0 });
  adj.push({ key: "reporting", label: "Financial reporting", v: { annual: -0.25, quarterly: 0, monthly: 0.2 }[d.reporting] });
  adj.push({ key: "contracts", label: "Written agreements", v: { verbal: -0.4, mixed: 0, written: 0.2 }[d.contracts] });
  if (d.textAdj) adj.push({ key: "text", label: "Annual report text", v: d.textAdj });
  if (d.rateAdj) adj.push({ key: "rate", label: "Interest rate level", v: d.rateAdj });
  if (d.cycleAdj) adj.push({ key: "cycle", label: "Business cycle in the industry", v: d.cycleAdj });
  if (d.benchAdj) adj.push({ key: "bench", label: "Margin vs industry peers", v: d.benchAdj });
  const cf = COUNTRY_MULT[country] || 1;
  if (cf !== 1) adj.push({ key: "country", label: "Country (" + country + ")", v: Math.round(INDUSTRIES[d.industry].base * (cf - 1) * 20) / 20 });
  return adj;
}
/* Revenue multiple: industry level, adjusted for recurring share, growth, owner dependency, concentration and losses */
function revMultiple(d, norm) {
  let m = INDUSTRIES[d.industry].rev * (COUNTRY_MULT[country] || 1);
  const r = d.recur, g = growth(d);
  m *= r >= 60 ? 1.4 : r >= 30 ? 1.15 : 1;
  m *= g > 0.15 ? 1.3 : g > 0.05 ? 1.1 : g < 0 ? 0.85 : 1;
  m *= { high: 0.85, medium: 0.95, low: 1.05 }[d.owner];
  if (d.topcust > 30) m *= 0.85;
  if (norm < 0) m *= 0.7;
  if (d.rateAdj) m *= 1 + d.rateAdj / INDUSTRIES[d.industry].base;
  if (d.cycleAdj) m *= 1 + d.cycleAdj / INDUSTRIES[d.industry].base;
  return m;
}
/* Weight on the revenue method: higher when margins are thin, since EBITDA then says little about what a buyer gets */
function revWeight(d, norm) {
  const rev = d.rev[2];
  if (!(rev > 0)) return 0;
  if (d.noEb) return 1; /* no earnings figures at all: value on revenue only */
  const margin = norm / rev;
  return margin < 0.05 ? 0.5 : margin < 0.10 ? 0.35 : 0.2;
}
function value(d) {
  const n = normalise(d);
  const base = INDUSTRIES[d.industry].base;
  const adj = adjustments(d, n.norm);
  const mult = Math.max(2.0, base + adj.reduce((s, a) => s + a.v, 0));
  const netDebt = d.debt - d.cash;
  const e = Math.max(0, n.norm);
  const rev = Math.max(0, d.rev[2]);
  const revMult = revMultiple(d, n.norm), wRev = revWeight(d, n.norm), wEb = 1 - wRev;
  const ef = ebitFactor(d), k = ef.k;
  const multEbit = mult / (1 - ef.dI), ebit = n.norm * (1 - ef.dC);
  const evEb = e * mult, evEbit = Math.max(0, ebit) * multEbit, evRev = rev * revMult;
  const ev = wEb * evEb * k + wRev * evRev;
  const span = d.noEb ? 0.35 : 0.2; /* revenue only: the margin is unknown, so a wider range */
  const evLo = wEb * e * Math.max(1.5, mult - 0.75) * k + wRev * evRev * (1 - span);
  const evHi = wEb * e * (mult + 0.75) * k + wRev * evRev * (1 + span);
  return { ...n, base, adj, mult, revMult, wRev, evEb, evRev, netDebt, ev, evLo, evHi, k, ebit, multEbit, evEbit, daC: ef.dC, daI: ef.dI, wEbit: wEb * W_EBIT, wEbitda: wEb * (1 - W_EBIT),
    eq: Math.max(0, ev - netDebt), eqLo: Math.max(0, evLo - netDebt), eqHi: Math.max(0, evHi - netDebt) };
}
/* ---------- Uploaded material: monthly reports (LTM) and budget / business plan ----------
   Historical figures from the annual reports are the base. Monthly reports update the earnings base (LTM).
   A budget gives a growth value that is weighted into the valuation by how credible it is:
   budget 20 %, business plan explaining it +5, actuals so far this year on budget pace +10 (more than 15 % behind: -10),
   budget growth more than 15 percentage points above the historical growth: weight halved. Never above 35 %. */
const GW = { budget: 0.20, plan: 0.05, onTrack: 0.10, behind: -0.10, stretchPp: 0.15, max: 0.35, minMonths: 3 };
function ltmOf(d, y) {
  if (!y || !(y.n >= GW.minMonths && y.n <= 12) || !isFinite(y.eb) || !isFinite(y.rev)) return null;
  const prior = isFinite(y.ebPrev) && isFinite(y.revPrev);
  const f = (12 - y.n) / 12;
  return { n: y.n, prior, revYtd: y.rev, ebYtd: y.eb,
    rev: prior ? d.rev[2] + y.rev - y.revPrev : d.rev[2] * f + y.rev,
    eb: prior ? d.eb[2] + d.oneoff + y.eb - y.ebPrev : (d.eb[2] + d.oneoff) * f + y.eb };
}
function growthWeight(d, gp, ctx) {
  if (!gp || !(gp.rev[2] > 0)) return { w: 0, parts: [] };
  const parts = [["budget", GW.budget]];
  if (ctx && ctx.plan) parts.push(["plan", GW.plan]);
  const y = d.ltm;
  if (y && gp.rev[0] > 0) {
    const pace = y.revYtd / (gp.rev[0] * y.n / 12);
    if (pace >= 0.95) parts.push(["onTrack", GW.onTrack, pace]);
    else if (pace < 0.85) parts.push(["behind", GW.behind, pace]);
  }
  let w = parts.reduce((s, p) => s + p[1], 0);
  const hist = d.rev[0] > 0 && d.rev[2] > 0 ? Math.pow(d.rev[2] / d.rev[0], 1 / 2) - 1 : 0;
  const base = y ? y.rev : d.rev[2];
  const bud = base > 0 ? Math.pow(gp.rev[2] / base, 1 / 3) - 1 : 0;
  if (bud > Math.max(0, hist) + GW.stretchPp) { parts.push(["stretch", -w / 2, bud, hist]); w /= 2; }
  return { w: Math.max(0, Math.min(GW.max, w)), parts, hist, bud };
}
function blended(v, gv, gw) {
  if (!gv || !gw || !(gw.w > 0)) return null;
  const w = gw.w, mix = (a, b) => (1 - w) * a + w * b;
  return { w, eq: mix(v.eq, gv.eq), eqLo: mix(v.eqLo, gv.eqLo), eqHi: mix(v.eqHi, gv.eqHi) };
}
/* Growth case: value in year 3 from the budget (same engine, same qualitative answers), discounted back to today */
function growthValue(d, gp) {
  if (!gp || !(gp.rev[2] > 0)) return null;
  const m = (isFinite(gp.margin) ? gp.margin : 15) / 100;
  const rate = (isFinite(gp.rate) && gp.rate > 0 ? gp.rate : 20) / 100;
  const rev = gp.rev.map((r, i) => r > 0 ? r : (i ? gp.rev[i - 1] : d.rev[2]) || 0);
  const f = { ...d, rev, eb: rev.map(r => r * m), oneoff: 0, ownsal: 0, mktsal: 0, debt: 0, cash: 0 };
  const vf = value(f);
  const disc = Math.pow(1 + rate, 3);
  const pv = vf.ev / disc, netDebt = d.debt - d.cash;
  return { rev, margin: m, rate, evExit: vf.ev, multExit: vf.mult, revMultExit: vf.revMult, wRevExit: vf.wRev, disc, pv,
    eq: Math.max(0, pv - netDebt), eqLo: Math.max(0, pv * 0.75 - netDebt), eqHi: Math.max(0, pv * 1.25 - netDebt) };
}
/* ---------- Reading the text of an annual report ----------
   Signals from the directors' report, notes and audit report. Risk signals move the multiple; the others are shown
   to the user as pointers next to the questions they relate to (the user's own answers stay decisive). */
const TEXT_RULES = [
  { key: "gc", sev: "bad", adj: -1.0, re: /väsentlig osäkerhetsfaktor avseende (antagandet om )?fortsatt drift|vesentlig usikkerhet (knyttet til|ved|vedrørende) fortsatt drift|material uncertainty related to going concern/i },
  { key: "qual", sev: "bad", adj: -0.5, re: /uttalanden? med reservation|avstående från uttalanden?|konklusjon med forbehold|grunnlag for konklusjon med forbehold|ingen konklusjon|qualified opinion/i },
  { key: "kbr", sev: "bad", adj: -0.5, re: /kontrollbalansräkning|egna kapitalet understiger hälften av (det registrerade )?aktiekapitalet|egenkapitalet er (blitt )?lavere enn halvparten av aksjekapitalen/i },
  { key: "dispute", sev: "warn", adj: -0.25, re: /\btvist(er|en|erna)?\b|skiljeförfarande|rättsprocess|rättegång|\brettssak|voldgiftssak/i },
  { key: "custdep", sev: "warn", adj: 0, re: /största kund(en)?|enskild(a)? kund|beroende av (ett fåtal|en|några få) (större )?kund|største kunde|avhengig av (én|en|få) (store )?kunde/i },
  { key: "recur", sev: "ok", adj: 0, re: /abonnemang|prenumeration|licensintäkter|återkommande intäkter|serviceavtal|förvaltningsavtal|\bsaas\b|abonnement|lisensinntekter|gjentakende inntekter|serviceavtaler/i },
  { key: "growth", sev: "ok", adj: 0, re: /expansion|nya marknader|ökad efterfrågan|rekordår|nya kunder|nye markeder|økt etterspørsel|ekspansjon|nye kunder/i }
];
function sentenceAround(t, i) {
  const a = Math.max(0, t.lastIndexOf(". ", i) + 2, i - 180), b = t.indexOf(". ", i);
  return t.slice(a, b > 0 ? Math.min(b + 1, i + 200) : i + 200).replace(/\s+/g, " ").trim();
}
function analyzeText(text, extra) {
  const t = String(text || "").replace(/\s+/g, " ");
  if (t.length < 200) return null;
  const flags = [];
  TEXT_RULES.forEach(r => { const m = r.re.exec(t); if (m) flags.push({ key: r.key, sev: r.sev, adj: r.adj, quote: sentenceAround(t, m.index) }); });
  const adj = Math.max(-1.5, flags.reduce((s, f) => s + f.adj, 0));
  let employees = extra && extra.employees != null ? extra.employees : null;
  if (employees == null) {
    const e = /medelantal(et)? (anställda|anstallda)|gjennomsnittlig antall (ansatte|årsverk)/i.exec(t);
    if (e) {
      const win = t.slice(e.index + e[0].length, e.index + e[0].length + 120);
      const n = (win.match(/\b\d{1,5}\b/g) || []).map(Number).find(x => !(x >= 1990 && x <= 2100));
      if (n != null) employees = n;
    }
  }
  /* Business description: the paragraph after the first matching heading, up to the next heading */
  const STOP = /(viktiga förändringar|viktiga förhållanden|vesentlige endringer|väsentliga händelser|flerårsöversikt|ägarförhållanden|resultatdisposition|förväntad framtida utveckling|framtida utveckling|fortsatt drift|forskning och utveckling|förändringar i eget kapital|redegjørelse|fremtidig utvikling|arbeidsmiljø)/i;
  let about = "";
  for (const h of [/verksamhetens art och inriktning/i, /allmänt om verksamheten/i, /information om verksamheten/i, /virksomhetens art/i, /hva virksomheten driver med/i, /\bverksamheten\b/i]) {
    const m = h.exec(t); if (!m) continue;
    let seg = t.slice(m.index + m[0].length, m.index + m[0].length + 900).replace(/^[\s:.\-–]+/, "");
    const st = STOP.exec(seg); if (st && st.index >= 40) seg = seg.slice(0, st.index);
    if (seg.length < 40) continue;
    if (seg.length > 480) { const cut = seg.lastIndexOf(". ", 480); seg = cut > 120 ? seg.slice(0, cut + 1) : seg.slice(0, 477) + "…"; }
    about = seg.trim(); break;
  }
  return { flags, adj, employees, about, year: extra && extra.year || null, source: extra && extra.source || "" };
}
function readiness(d) {
  const g = growth(d);
  const trend = d.eb[1] > 0 ? d.eb[2] / d.eb[1] - 1 : 0;
  return [
    { label: "Owner independence", w: 25, s: { high: 0.15, medium: 0.6, low: 1 }[d.owner] },
    { label: "Management depth", w: 15, s: { none: 0.1, partial: 0.55, full: 1 }[d.mgmt] },
    { label: "Customer spread", w: 15, s: d.topcust > 30 ? 0.2 : d.topcust > 15 ? 0.55 : 1 },
    { label: "Recurring revenue", w: 10, s: Math.min(1, d.recur / 60) },
    { label: "Reporting quality", w: 10, s: { annual: 0.25, quarterly: 0.65, monthly: 1 }[d.reporting] },
    { label: "Contract documentation", w: 10, s: { verbal: 0.1, mixed: 0.5, written: 1 }[d.contracts] },
    { label: "Growth", w: 10, s: g > 0.15 ? 1 : g > 0.05 ? 0.7 : g >= 0 ? 0.4 : 0.1 },
    { label: "Earnings stability", w: 5, s: trend < -0.1 ? 0.2 : 1 }
  ];
}

function improvements() {
  return [
    { key: "owner", to: { owner: "low" }, when: d => d.owner !== "low", time: "12–24" },
    { key: "mgmt", to: { mgmt: "full" }, when: d => d.mgmt !== "full", time: "12–18" },
    { key: "cust", to: { topcust: 12 }, when: d => d.topcust > 15, time: "12–36" },
    { key: "recur", to: { recur: 60 }, when: d => d.recur < 60, time: "12–24" },
    { key: "reporting", to: { reporting: "monthly" }, when: d => d.reporting !== "monthly", time: "3–6" },
    { key: "contracts", to: { contracts: "written" }, when: d => d.contracts !== "written", time: "3–6" }
  ].map(i => ({ ...i, time: i.time + " months" }));
}
function plan(d, v) {
  return improvements().filter(i => i.when(d)).map(i => ({ ...i, uplift: value({ ...d, ...i.to }).eq - v.eq }))
    .filter(i => i.uplift > 0).sort((a, b) => b.uplift - a.uplift);
}
function idealOf(d) { return value({ ...d, owner: "low", mgmt: "full", topcust: Math.min(d.topcust, 12), recur: Math.max(d.recur, 60), reporting: "monthly", contracts: "written" }); }

/* ---------- Formatting (locale-aware) ---------- */
const LOC = () => RT().loc;
function fmtM(t) { return (t / 1000).toLocaleString(LOC(), { minimumFractionDigits: 1, maximumFractionDigits: 1 }) + (C().mUnit || " M" + C().cur); }
function fmtT(t) { return Math.round(t).toLocaleString(LOC()); }
function fmtX(x) { return x.toLocaleString(LOC(), { minimumFractionDigits: 1, maximumFractionDigits: 1 }) + "x"; }
function sign(x) { return (x > 0 ? "+" : x < 0 ? "−" : "±") + Math.abs(x).toLocaleString(LOC(), { minimumFractionDigits: 2, maximumFractionDigits: 2 }) + "x"; }
function esc(s) { return String(s).replace(/[&<>"]/g, ch => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[ch])); }
function months(t) { return t.replace("months", RT().months); }
