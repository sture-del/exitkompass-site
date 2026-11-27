
/* Exitkompass – reads Polish financial statements in the Ministry of Finance XML format (e-sprawozdania), as downloaded from the
   court register's Repozytorium Dokumentów Finansowych (RDF). Handles plain .xml, signed files (.xml / .xades, the statement inline
   or base64 inside ds:Object) and .zip packages. Returns the same shape as ExitkompassParse.parsePages, so merge() works unchanged.

   Structures (ustawa o rachunkowości, załącznik 1, 4 and 5): every amount element has children KwotaA (current year) and KwotaB
   (previous year). Element names follow the statutory numbering:
     RZiSPor (comparative variant):  A = przychody netto, B_I = amortyzacja, F = zysk (strata) z działalności operacyjnej
     RZiSKalk (cost-of-sales variant): A = przychody netto, I = zysk (strata) z działalności operacyjnej
     Cash flow: A_II_1 = amortyzacja (indirect method)
     Bilans: Aktywa_B_III_1_C = środki pieniężne; Pasywa_B_II_3_A / Pasywa_B_III_3_A = kredyty i pożyczki (long / short term)
   The parser matches on local names and paths, so namespace versions (2018, 2025 schemas; W złotych / W tysiącach) do not matter. */
(function (root) {
  /* Shorten the legal form the way it is written in everyday use: "… SPÓŁKA Z OGRANICZONĄ ODPOWIEDZIALNOŚCIĄ" → "… Sp. z o.o." */
  const plForm = n => n ? String(n).trim().replace(/\s+SPÓŁKA Z OGRANICZONĄ ODPOWIEDZIALNOŚCIĄ(\s+SPÓŁKA KOMANDYTOWA)?$/i, (m, k) => k ? " Sp. z o.o. sp.k." : " Sp. z o.o.")
    .replace(/\s+PROSTA SPÓŁKA AKCYJNA$/i, " P.S.A.").replace(/\s+SPÓŁKA AKCYJNA$/i, " S.A.").replace(/\s+SPÓŁKA KOMANDYTOWA$/i, " sp.k.") : n;
  const num = s => { if (s == null) return null; const v = parseFloat(String(s).replace(/\s/g, "").replace(",", ".")); return isFinite(v) ? v : null; };
  const kids = el => Array.from(el.children || []);
  const ln = el => el.localName || el.nodeName.replace(/^.*:/, "");

  /* Walk the tree once: every element with KwotaA/KwotaB becomes { path, a, b } */
  function collect(doc) {
    const out = [];
    (function walk(el, path) {
      const ch = kids(el);
      const ka = ch.find(c => ln(c) === "KwotaA"), kb = ch.find(c => ln(c) === "KwotaB");
      const p = path.concat(ln(el));
      if (ka || kb) out.push({ path: p, name: ln(el), a: ka ? num(ka.textContent) : null, b: kb ? num(kb.textContent) : null });
      ch.forEach(c => { if (ln(c) !== "KwotaA" && ln(c) !== "KwotaB") walk(c, p); });
    })(doc.documentElement, []);
    return out;
  }
  const first = (doc, name) => { const all = doc.getElementsByTagName("*"); for (let i = 0; i < all.length; i++) if (ln(all[i]) === name) return all[i].textContent.trim(); return null; };

  function parseDoc(doc) {
    const items = collect(doc);
    const inSec = (it, re) => it.path.some(x => re.test(x));
    const pick = (secRe, name) => items.find(it => it.name === name && inSec(it, secRe));
    const isPor = items.some(it => inSec(it, /^RZiSPor$/)), isKalk = items.some(it => inSec(it, /^RZiSKalk$/));
    const rzis = /^RZiS/;
    const rev = pick(rzis, "A");
    let op = isPor ? pick(/^RZiSPor$/, "F") : isKalk ? pick(/^RZiSKalk$/, "I") : null;
    let dep = isPor ? pick(/^RZiSPor$/, "B_I") : null;
    if (!dep || (dep.a == null && dep.b == null)) dep = items.find(it => it.name === "A_II_1" && inSec(it, /Przeplyw/i)) || dep;
    const cash = items.find(it => it.name === "Aktywa_B_III_1_C") || null;
    const loans = items.filter(it => /^Pasywa_B_(II|III)_3_A$/.test(it.name));
    if (!rev && !op) return null;
    const rootName = ln(doc.documentElement) + " " + (doc.documentElement.namespaceURI || "");
    const thousands = /Tysiac/i.test(rootName) || /Tysiac/i.test(first(doc, "KodSprawozdania") || "");
    const k = v => v == null ? null : Math.round(thousands ? v : v / 1000);
    const to = first(doc, "OkresDo") || first(doc, "DataDo");
    const cy = to ? +to.slice(0, 4) : null;
    const micro = /Mikro/i.test(rootName) || (!isPor && !isKalk);
    const ebitda = key => op && op[key] != null ? op[key] + (dep && dep[key] != null ? Math.abs(dep[key]) : 0) : null;
    const years = [];
    if (cy) {
      years.push({ year: cy, revenue: rev ? k(rev.a) : null, ebitda: k(ebitda("a")), depFound: !!(dep && dep.a != null), primary: true });
      years.push({ year: cy - 1, revenue: rev ? k(rev.b) : null, ebitda: k(ebitda("b")), depFound: !!(dep && dep.b != null), primary: false });
    }
    const debt = loans.length ? loans.reduce((s, x) => s + Math.abs(x.a || 0), 0) : null;
    const nip = first(doc, "P_1D") || first(doc, "NIP");
    const krs = first(doc, "P_1E") || first(doc, "KRS");
    return {
      ok: !!cy && years.some(y => y.revenue != null || y.ebitda != null), lang: "PL", fiscalYear: cy, years,
      cash: cash ? k(cash.a) : null, debt: debt != null ? k(debt) : null,
      name: plForm(first(doc, "NazwaFirmy")) || null, org: krs || nip || null, nip, krs,
      unitThousands: thousands, micro, noOp: !op, variant: isPor ? "por" : isKalk ? "kalk" : "other", text: ""
    };
  }

  function b64utf8(s) {
    const bin = atob(s.replace(/\s/g, "")), bytes = new Uint8Array(bin.length);
    for (let i = 0; i < bin.length; i++) bytes[i] = bin.charCodeAt(i);
    return new TextDecoder("utf-8").decode(bytes);
  }
  function parseText(xml) {
    const doc = new DOMParser().parseFromString(xml.replace(/^﻿/, ""), "application/xml");
    if (doc.getElementsByTagName("parsererror").length) return { ok: false, reason: "XML" };
    let r = parseDoc(doc);
    if (r) return r;
    /* Signed package: the statement may be base64 inside ds:Object */
    const all = doc.getElementsByTagName("*");
    for (let i = 0; i < all.length; i++) {
      if (ln(all[i]) !== "Object" || all[i].children.length) continue;
      const t = all[i].textContent.trim();
      if (t.length < 200) continue;
      try { const inner = b64utf8(t); if (/<\?xml|<[A-Za-z]/.test(inner.slice(0, 200))) { const r2 = parseText(inner); if (r2 && r2.ok) return r2; } } catch (e) {}
    }
    return { ok: false, reason: "NO_FIGURES" };
  }
  let zipLib = null;
  function loadZip() {
    if (window.JSZip) return Promise.resolve(window.JSZip);
    if (zipLib) return zipLib;
    zipLib = new Promise((res, rej) => { const s = document.createElement("script"); s.src = "https://cdnjs.cloudflare.com/ajax/libs/jszip/3.10.1/jszip.min.js"; s.onload = () => res(window.JSZip); s.onerror = rej; document.head.appendChild(s); });
    return zipLib;
  }
  async function readFile(file) {
    const isZip = /\.zip$/i.test(file.name) || file.type === "application/zip";
    if (isZip) {
      const JSZip = await loadZip(), z = await JSZip.loadAsync(await file.arrayBuffer());
      const names = Object.keys(z.files).filter(n => /\.(xml|xades)$/i.test(n) && !/metry|metrics|upo/i.test(n));
      for (const n of names) { const r = parseText(await z.files[n].async("string")); if (r.ok) return r; }
      return { ok: false, reason: "NO_FIGURES" };
    }
    const buf = await file.arrayBuffer();
    let txt = new TextDecoder("utf-8").decode(buf);
    const enc = (txt.slice(0, 200).match(/encoding="([^"]+)"/i) || [])[1];
    if (enc && !/utf-?8/i.test(enc)) { try { txt = new TextDecoder(enc.toLowerCase()).decode(buf); } catch (e) {} }
    return parseText(txt);
  }
  const isXml = f => /\.(xml|xades|zip)$/i.test(f.name) || /xml|zip/.test(f.type || "");
  root.ExitkompassParsePL = { readFile, parseText, isXml };
})(typeof window !== "undefined" ? window : globalThis);
