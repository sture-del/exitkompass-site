
/* Exitkompass annual report reader: finds key figures in the text layer of a Swedish or Norwegian annual report.
   Works on pages of positioned text items (pdf.js getTextContent). Values returned in thousands (TSEK/TNOK). */
(function (root) {
  const NUM_RE = /^\(?[-−–]?\s?\d{1,3}(?:[   ]\d{3})*(?:,\d+)?\)?$|^\(?[-−–]?\d+(?:,\d+)?\)?$/;

  function toNum(s) {
    let t = s.replace(/[   ]/g, "").replace(/[−–]/g, "-");
    let neg = false;
    if (/^\(.*\)$/.test(t)) { neg = true; t = t.slice(1, -1); }
    if (t.startsWith("-")) { neg = !neg; t = t.slice(1); }
    t = t.replace(",", ".");
    const v = parseFloat(t);
    return isFinite(v) ? (neg ? -v : v) : null;
  }

  /* Group items into rows by y, merge split thousands groups, separate label from numbers. */
  function rowsOf(items) {
    const rows = [];
    const sorted = items.filter(i => i.str && i.str.trim()).sort((a, b) => b.y - a.y || a.x - b.x);
    for (const it of sorted) {
      const tol = Math.max(2, (it.h || 8) * 0.45);
      let r = rows.find(r => Math.abs(r.y - it.y) <= tol);
      if (!r) { r = { y: it.y, items: [] }; rows.push(r); }
      r.items.push(it);
    }
    rows.sort((a, b) => b.y - a.y);
    return rows.map(r => {
      const its = r.items.sort((a, b) => a.x - b.x);
      // pdf.js sometimes splits "12 345" into "12" and "345"; merge digit groups that sit close together
      const toks = [];
      for (const it of its) {
        const s = it.str.trim();
        const prev = toks[toks.length - 1];
        if (prev && prev.isNum && /^\d{3}$/.test(s) && it.x - prev.xEnd < (it.h || 8) * 0.8 && /\d$/.test(prev.s)) {
          prev.s += " " + s; prev.xEnd = it.x + (it.w || 0); continue;
        }
        toks.push({ s, x: it.x, xEnd: it.x + (it.w || 0), isNum: NUM_RE.test(s) });
      }
      const label = toks.filter(t => !t.isNum).map(t => t.s).join(" ").replace(/\s+/g, " ").trim();
      const nums = toks.filter(t => t.isNum).map(t => ({ v: toNum(t.s), x: t.x, raw: t.s }));
      return { label, low: label.toLowerCase(), nums, text: toks.map(t => t.s).join(" ") };
    });
  }

  const LANG = {
    SE: {
      is: /^resultaträkning/, bs: /^balansräkning/,
      rev: [/^nettoomsättning/], revAlt: [/^summa rörelseintäkter/, /^rörelsens intäkter/],
      ebit: [/^rörelseresultat/],
      dep: [/^av- och nedskrivningar/, /^avskrivningar/, /^avskrivning/],
      cash: [/^kassa och bank/, /^likvida medel/, /^kassa och banktillgodohavanden/],
      debt: [/skulder till kreditinstitut/, /^checkräkningskredit/],
      thousand: /\b(tkr|tsek|ksek|tusental kronor|tusentals kronor|belopp i tusen)\b/,
      org: /\b(\d{6}-\d{4})\b/
    },
    NO: {
      is: /^resultatregnskap/, bs: /^balanse/,
      rev: [/^sum driftsinntekter/], revAlt: [/^driftsinntekter$/, /^salgsinntekt/],
      ebit: [/^driftsresultat/],
      dep: [/^avskrivning/, /^av- og nedskrivning/, /^nedskrivning/],
      cash: [/^bankinnskudd, kontanter/, /^sum bankinnskudd/, /^bankinnskudd/],
      debt: [/gjeld til kredittinstitusjoner/, /^kassekreditt/],
      thousand: /\b(tnok|knok|tusen kroner|i tusen|nok 1000|nok 1 000|beløp i 1000)\b/,
      org: /\b(?:org(?:anisasjons)?\.?\s*n(?:umme)?r\.?:?\s*)?(\d{3}\s?\d{3}\s?\d{3})\b/
    },
    FI: {
      is: /^tuloslaskelma/, bs: /^tase\b/,
      rev: [/^liikevaihto/], revAlt: [/^liiketoiminnan tuotot/],
      ebit: [/^liikevoitto/, /^liiketulos/, /^liiketappio/, /^liikevoitto\/-tappio/],
      dep: [/^suunnitelman mukaiset poistot/, /^poistot ja arvonalentumiset/, /^poistot/],
      cash: [/^rahat ja pankkisaamiset/, /^rahavarat/],
      debt: [/lainat rahoituslaitoksilta/, /^pankkilainat/],
      thousand: /(\bt€|\bteur\b|1 ?000 ?€|\btuhatta euroa\b|\btuhansina euroina\b)/,
      org: /\b(\d{7}-\d)\b/
    }
  };

  function detectLang(allLow) {
    const se = (allLow.match(/nettoomsättning|resultaträkning|balansräkning|rörelseresultat/g) || []).length;
    const no = (allLow.match(/driftsinntekter|resultatregnskap|driftsresultat|årsregnskap/g) || []).length;
    const fi = (allLow.match(/liikevaihto|tuloslaskelma|liikevoitto|liiketulos|tilinpäätös/g) || []).length;
    if (!se && !no && !fi) return null;
    if (fi > se && fi > no) return "FI";
    return se >= no ? "SE" : "NO";
  }

  /* Years of the column headers, read from the rows just below a statement heading. */
  function headerYears(rows, start) {
    for (let i = start; i < Math.min(rows.length, start + 8); i++) {
      const t = rows[i].text;
      const ranges = [...t.matchAll(/(20\d\d)-\d\d-\d\d\s*[-–]\s*(20\d\d)-\d\d-\d\d/g)].map(m => +m[2]);
      if (!ranges.length) ranges.push(...[...t.matchAll(/\d{1,2}\.\d{1,2}\.(20\d\d)\s*[-–]\s*\d{1,2}\.\d{1,2}\.(20\d\d)/g)].map(m => +m[2]));
      if (ranges.length >= 1) return ranges;
      const ys = [...t.matchAll(/\b(20\d\d)(?:-\d\d-\d\d)?\b/g)].map(m => +m[1]);
      const uniq = ys.filter((y, k) => ys.indexOf(y) === k);
      if (uniq.length >= 2) return uniq;
      if (uniq.length === 1 && i + 1 < rows.length) {
        const nxt = [...rows[i + 1].text.matchAll(/\b(20\d\d)(?:-\d\d-\d\d)?\b/g)].map(m => +m[1]);
        if (nxt.length) return [uniq[0], nxt[0]];
        return uniq;
      }
    }
    return null;
  }

  function cols(nums) {
    // Columns are [note?] current prior. Notes are small integers in front.
    const vals = nums.map(n => n.v).filter(v => v != null);
    if (vals.length >= 2) return [vals[vals.length - 2], vals[vals.length - 1]];
    if (vals.length === 1) return [vals[0], null];
    return null;
  }

  /* Scan one statement section, joining labels that wrap onto a second line. */
  function scan(rows, from, to, wanted) {
    const out = {};
    let pending = "";
    for (let i = from; i < to; i++) {
      const r = rows[i];
      if (!r.nums.length || (r.nums.length && !r.label && !pending)) { pending = r.label ? r.low : ""; continue; }
      const low = (pending && /^[a-zåäöæø]/.test(r.label) ? pending + " " + r.low : r.low).trim();
      pending = "";
      if (/^20\d\d/.test(low) || /^not\b|^note\b/.test(low)) continue;
      for (const [key, res, multi] of wanted) {
        if (!multi && out[key]) continue;
        if (res.some(re => re.test(low))) {
          const c = cols(r.nums);
          if (!c) continue;
          if (multi) (out[key] = out[key] || []).push(c); else out[key] = c;
        }
      }
    }
    return out;
  }

  function parsePages(pages) {
    const rows = [];
    pages.forEach(items => rowsOf(items).forEach(r => rows.push(r)));
    const allLow = rows.map(r => r.low + " " + r.text.toLowerCase()).join("\n");
    const lang = detectLang(allLow);
    if (!lang) return { ok: false, reason: rows.length < 5 ? "NO_TEXT" : "NO_STATEMENTS" };
    const L = LANG[lang];
    const isIdx = rows.findIndex(r => L.is.test(r.low) && r.nums.length === 0);
    let bsIdx = rows.findIndex((r, i) => i > isIdx && L.bs.test(r.low) && r.nums.length === 0);
    if (isIdx < 0) return { ok: false, lang, reason: "NO_STATEMENTS" };
    const isEnd = bsIdx > isIdx ? bsIdx : rows.length;
    if (bsIdx < 0) bsIdx = rows.length;

    const yrs = headerYears(rows, isIdx + 1) || [];
    const unitWindow = rows.slice(isIdx, isIdx + 6).map(r => r.low).join(" ");
    const is = scan(rows, isIdx + 1, isEnd, [["rev", L.rev], ["revAlt", L.revAlt], ["ebit", L.ebit], ["dep", L.dep]]);
    const bs = scan(rows, bsIdx + 1, rows.length, [["cash", L.cash], ["debt", L.debt, true]]);
    const rev = is.rev || is.revAlt;
    if (!rev && !is.ebit) return { ok: false, lang, reason: "NO_FIGURES" };

    let thousands = L.thousand.test(unitWindow);
    /* Finnish statements are almost always in whole euros (with cents) unless a thousands unit is stated */
    if (!thousands && lang !== "FI" && !/belopp i kr|beløp i nok|belopp i kronor|beløp i kroner/.test(unitWindow)) {
      // No unit stated: assume whole kronor if revenue looks like it (SMEs rarely exceed 1 bn in thousands)
      thousands = rev && Math.abs(rev[0]) < 1e6;
    }
    const k = v => v == null ? null : Math.round(thousands ? v : v / 1000);

    const cy = yrs[0] || null, py = yrs[1] || (cy ? cy - 1 : null);
    const ebitda = i => is.ebit && is.ebit[i] != null ? is.ebit[i] + (is.dep && is.dep[i] != null ? Math.abs(is.dep[i]) : 0) : null;
    const yearsOut = [];
    [0, 1].forEach(i => {
      const y = i === 0 ? cy : py;
      if (!y) return;
      yearsOut.push({ year: y, revenue: rev ? k(rev[i]) : null, ebitda: k(ebitda(i)), depFound: !!(is.dep && is.dep[i] != null), primary: i === 0 });
    });

    const debt = bs.debt ? bs.debt.reduce((s, c) => s + Math.abs(c[0] || 0), 0) : null;
    const orgM = allLow.match(L.org);
    let org = orgM ? orgM[1].replace(/\s/g, "") : null;
    if (lang === "NO" && org) org = org.replace(/(\d{3})(\d{3})(\d{3})/, "$1 $2 $3");
    const nameRow = rows.slice(0, 40).find(r => lang === "SE" ? /\b(AB|Aktiebolag)(\s*\(publ\))?$/.test(r.label) : lang === "FI" ? /\b(Oy|Oyj|Ab|Ltd)$/i.test(r.label) : /\b(AS|ASA)$/.test(r.label));
    let name = nameRow ? nameRow.label.replace(/^(årsredovisning|årsregnskap|tilinpäätös)\s+(för\s+)?/i, "").trim() : null;
    if (name && name.length > 70) name = null;

    return {
      ok: true, lang, fiscalYear: cy, years: yearsOut,
      cash: bs.cash ? k(bs.cash[0]) : null,
      debt: debt != null ? k(debt) : null,
      name, org, unitThousands: thousands,
      text: rows.map(r => r.text).join("\n").slice(0, 60000)
    };
  }

  /* Merge several reports into the latest three years; values from the year's own report win. */
  function merge(results) {
    const ok = results.filter(r => r && r.ok);
    if (!ok.length) return null;
    const byYear = {};
    ok.forEach(r => r.years.forEach(y => {
      const cur = byYear[y.year];
      if (!cur || (y.primary && !cur.primary)) byYear[y.year] = y;
    }));
    const ys = Object.keys(byYear).map(Number).sort((a, b) => a - b).slice(-3);
    const latest = ok.slice().sort((a, b) => (b.fiscalYear || 0) - (a.fiscalYear || 0))[0];
    return {
      lang: latest.lang, years: ys.map(y => byYear[y]),
      cash: latest.cash, debt: latest.debt,
      name: ok.map(r => r.name).find(Boolean) || null,
      org: ok.map(r => r.org).find(Boolean) || null,
      text: latest.text || "", textYear: latest.fiscalYear || null
    };
  }

  async function readPdf(pdfjs, data) {
    const doc = await pdfjs.getDocument({ data, isEvalSupported: false }).promise;
    const pages = [];
    const n = Math.min(doc.numPages, 40);
    for (let p = 1; p <= n; p++) {
      const page = await doc.getPage(p);
      const tc = await page.getTextContent();
      pages.push(tc.items.map(i => ({ str: i.str, x: i.transform[4], y: i.transform[5], w: i.width, h: i.height || Math.abs(i.transform[3]) })));
    }
    return parsePages(pages);
  }

  root.ExitkompassParse = { parsePages, merge, readPdf, _rowsOf: rowsOf };
})(typeof window !== "undefined" ? window : globalThis);
