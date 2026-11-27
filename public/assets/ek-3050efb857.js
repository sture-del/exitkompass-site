
/* Exitkompass – English texts for the PDF report, one set per country */
(function () {
  function mk(cc) {
    const S = cc === "SE";
    const ST = S ? "Statistics Sweden" : "Statistics Norway";
    return {
      loc: "en-GB", pct: "%", by: "by Adsco Capital Partners", title: "Valuation and exit readiness", subtitle: "Exit Readiness report",
      preparedFor: "Prepared for", date: "Date", org: "Reg. no.", industry: "Industry", confidential: "Confidential",
      s1: "1. Summary",
      kpi: ["Equity value (base)", "Range", "Enterprise value (EV)", "Normalised EBITDA", "EV/EBITDA multiple", "Exit readiness", "Equity value if exit-ready"],
      levels: ["good", "medium", "low"],
      msgVal: (n, eq, lo, hi, norm, m) => `We estimate the equity value of ${n} at ${eq} (range ${lo}–${hi}), based on normalised EBITDA of ${norm} and a multiple of ${m}.`,
      msgScore: (s, l) => `Exit readiness is ${s} out of 100 (${l}).`,
      msgTop: (t, u) => `The action with the greatest effect is “${t}”, which could increase the equity value by about ${u}.`,
      msgGap: (i, g) => `If the company addresses the weaknesses a buyer will identify, the equity value could rise to about ${i} at today's earnings, an increase of ${g}.`,
      s2: "2. Valuation",
      method: "The valuation uses a multiple approach, the most common method when selling small and medium-sized unlisted companies in the Nordics. Enterprise value (EV) is normalised EBITDA multiplied by an EV/EBITDA multiple. The multiple starts from a base level for the industry and is adjusted for size, risk and quality. Equity value is enterprise value less interest-bearing net debt.",
      normTitle: "2.1 Normalised EBITDA",
      normRows: ["Net revenue", "Reported EBITDA", "EBITDA margin", "One-off costs (added back)", "Weight", "Weighted EBITDA", "Owner's salary adjusted to market level", "Normalised EBITDA"],
      ltmCol: "LTM", ltmNote: (n, p) => `LTM = last twelve months from the monthly reports (${n} months year to date${p ? ", compared with the same period last year" : ", remaining months pro rata from the latest year"}). With LTM, the weights are LTM 3, latest year 2 and the year before 1.`,
      basisHist: "Basis: historical figures from the annual reports. No monthly reports, budget or business plan were provided, so the valuation does not reflect growth plans.",
      basisDocs: l => `Basis: historical figures from the annual reports, supplemented with ${l}.`, docN: { ltm: "monthly reports", budget: "a budget", plan: "a business plan" },
      gwTitle: "Weighting of the growth value", gwRows: ["Historical valuation (equity value)", "Growth value (equity value today)", "Weight of the growth value", "Blended equity value", "Blended range"],
      gwPart: { budget: "Budget: 20%", plan: "Business plan explaining the budget: +5%", onTrack: p => `Results year to date at ${p} of budgeted pace: +10%`, behind: p => `Results year to date at ${p} of budgeted pace: −10%`, stretch: (b, h) => `Budgeted growth ${b} a year against ${h} historically: weight halved` },
      gwNote: "Historical figures are the base because buyers pay for proven earnings. The budget is weighted in at 20%, plus 5% if a business plan explains it and plus 10% if results so far this year are on budget (minus 10% if more than 15% behind). If the budget grows more than 15 percentage points faster than history, the weight is halved. The weight is at most 35%.",
      kpiBlend: "Equity value blended with budget", msgBlend: (eq, w, h) => `Blended with the budget (weight ${w}), we assess the equity value at ${eq}, compared with ${h} on historical figures alone (section 2.7).`,
      dealsTitle: n => `${n} Completed deals in similar companies`, dealsIntro: (k, m) => `Deals Adsco Capital Partners has followed in the same industry and of similar size (normalised EBITDA between a third and three times the company's). The data is anonymised. ${k} deals, median ${m}.`,
      dealsCols: ["Year", "Country", "Size (EBITDA)", "EV/EBITDA paid"], dealsCmp: (m, med) => `The company's multiple in this valuation is ${m}, against a median of ${med} in comparable deals.`, dealsCc: { SE: "Sweden", NO: "Norway" },
      sampleWm: "SAMPLE", sampleNote: "Sample report for a fictitious company. Figures, names and assessments are invented and only show what the report looks like.",
      normNote: "The years are weighted 1:2:3, with the most weight on the latest year. The owner's salary is adjusted to what it would cost to hire an external CEO, including employer's contributions.",
      bridgeTitle: "2.2 Multiple bridge", bridgeCols: ["Factor", "Adjustment", "Multiple"], base: "Industry base multiple", final: "Company multiple", floor: " (floor)",
      adj: { size: "Size", owner: "Owner dependency", mgmt: "Management team", cust: "Customer concentration", recur: "Recurring revenue", growth: "Revenue growth", trend: "Earnings trend", reporting: "Financial reporting", contracts: "Written contracts", text: "Annual report text", bench: "Margin compared with the industry", rate: "Interest rates", cycle: "Business cycle in the industry" },
      tf: { gc: "The auditor points to material uncertainty about going concern.", qual: "The auditor's report contains a qualification or a disclaimer of opinion.", kbr: "Equity is below half of the share capital (capital deficiency).", dispute: "The annual report mentions a dispute or legal proceedings.", custdep: "The annual report mentions dependence on individual large customers.", recur: "The annual report mentions subscriptions, licences or service contracts.", growth: "The annual report mentions expansion or growing demand." },
      eqTitle: "2.4 From enterprise value to equity value", eqRows: ["Enterprise value (EV)", "Interest-bearing debt", "Cash and equivalents", "Equity value"],
      scenTitle: "2.5 Scenarios", scenCols: ["Low", "Base", "High"], scenRows: ["Multiple", "Enterprise value", "Equity value"],
      blendTitle: "2.3 Blending earnings and revenue", blendCols: ["Method", "Multiple", "Value", "Weight"],
      blendRows: ["Earnings before depreciation (EV/EBITDA)", "Revenue (EV/revenue, latest year)", "Enterprise value (EV), blended", "Earnings after depreciation (EV/EBIT)"],
      blendImp: m => "Blended, the enterprise value corresponds to " + [m[0] && m[0] + " EBITDA", m[1] && m[1] + " EBIT", m[2] && m[2] + " revenue"].filter(Boolean).join(", ") + ".",
      blendNote: "The value is based on the three multiples most used in acquisitions. The earnings part is 60% EBITDA and 40% EBIT, where EBIT reflects the company's own depreciation: capital-intensive companies are therefore valued lower than asset-light ones. The revenue method weighs more when the margin is low: 50% at a margin below 5%, 35% at 5–10% and 20% above that.",
      gvTitle: "2.7 Growth valuation based on the business plan", gvIntro: "The value if the company meets its business plan, calculated with the same model on budget year 3 and discounted back to today at the required return. It assumes the plan is met and should be read alongside the historical valuation, not instead of it.",
      gvCols: ["", "Budget"], gvRows: ["Revenue", "EBITDA (assumed margin)"],
      gvVal: ["Enterprise value year 3", "Required return per year", "Discount factor (3 years)", "Enterprise value today", "Equity value today (after net debt)", "Range (±25%)", "Compared with the historical valuation"],
      msgGv: (lo, hi) => `If the business plan is met, this corresponds to an equity value of ${lo} – ${hi} today (section 2.7).`,
      sensTitle: "2.6 Sensitivity analysis: equity value", sensNote: "Equity value at different EBITDA multiples (columns) and EBITDA levels (rows). The revenue part of the valuation is held constant.",
      s3: "3. Exit readiness",
      s3intro: "The score shows how a buyer's due diligence team would rate the company today. Each area is weighted by how much it usually affects price and terms.",
      s3cols: ["Area", "Score", "Max", "Assessment"],
      factors: ["Independence from the owner", "Depth of management", "Customer spread", "Recurring revenue", "Reporting quality", "Contract documentation", "Growth", "Earnings stability"],
      grade: ["Strong", "Acceptable", "Weak"],
      s4: "4. What a buyer will point out", s4cols: ["Finding", "Significance and action"],
      f: {
        ownerHigh: ["The business depends on you as the owner.", "Buyers lower the price or require a long earn-out and that you stay on for 2–3 years. Start handing over customer relationships and decisions now."],
        ownerMed: ["Some owner dependency.", "Be ready to show who owns the most important customer relationships. Document roles and processes."],
        custHigh: x => [`The largest customer accounts for ${x}% of revenue.`, "Buyers price in the risk of losing the customer. Sign multi-year framework agreements and broaden the customer base."],
        custMed: x => [`The largest customer accounts for ${x}% of revenue.`, "Buyers will ask for the contract and review the change-of-control terms."],
        salary: (x, u) => ["The owner's salary is below market level.", `A buyer has to hire a CEO, which lowers EBITDA by ${x} ${u}. The adjustment is already made in normalised EBITDA. Be ready to justify it.`],
        repAnnual: ["Annual accounts only.", "Without monthly reports, due diligence takes longer and buyers protect themselves with warranties and escrow. Introduce monthly closing with budget follow-up."],
        conVerbal: ["Contracts are mostly verbal.", "The buyer cannot verify the quality of the revenue. Put contracts in place with the most important customers and suppliers."],
        conMixed: ["Contracts are partly written.", "Review the largest contracts and check change-of-control and termination clauses."],
        mgmtNone: ["No management below the owner.", "Most financial buyers will not proceed without a management team in place. Recruit or appoint key people."],
        mgmtPart: ["Limited management team.", "Secure key people with incentive agreements and clear mandates ahead of a sale."],
        trend: x => [`EBITDA fell by ${x}% last year.`, "Buyers will start from the weaker figure. Explain the cause and show that it is temporary."],
        netDebt: ["High net debt relative to enterprise value.", "Little of the purchase price reaches the owner. Consider paying down debt before the sale."],
        recurLow: x => [`Low share of recurring revenue (${x}%).`, "Buyers pay more for predictable revenue. Develop service contracts."],
        growth: x => [`Revenue is growing by ${x}% a year.`, "Supports the valuation. Prepare a credible plan showing how growth continues."],
        recurOk: x => [`${x}% recurring revenue.`, "Makes future earnings easier for the buyer to assess."],
        buyers: (b, m) => [`Active buyers in the industry: ${b}.`, `Listed serial acquirers that buy companies of this type; they typically pay 5–8x EBITA. The market median for unlisted mid-sized European companies was ${m} according to the Argos Index.`],
        cycWeak: c => [`The business cycle in the industry (${c.label.toLowerCase()}) is weaker than normal (${c.src}, ${c.period}).`, "Buyers expect lower multiples when the industry is weak. If the sale can wait, better times may give a higher price."],
        cycStrong: c => [`The business cycle in the industry (${c.label.toLowerCase()}) is stronger than normal (${c.src}, ${c.period}).`, "A good time to sell: buyers are more optimistic when the industry is doing well."],
        benchTop: b => S ? [`The operating margin (${b.mg}%) is in the top quarter of the industry.`, `Compared with ${b.n} companies in ${b.label} (${ST} ${b.year}, median ${b.ref}%). Highlight profitability in the sale material.`]
                         : [`The operating margin (${b.mg}%) is clearly above the industry average.`, `The average for ${b.n} limited companies in ${b.label} is ${b.ref}% (${ST} ${b.year}). Highlight profitability in the sale material.`],
        benchLow: b => S ? [`The operating margin (${b.mg}%) is in the weakest quarter of the industry.`, `The median for comparable companies is ${b.ref}% (${ST} ${b.year}). The buyer will ask why; show what holds the margin down and how it can improve.`]
                         : [`The operating margin (${b.mg}%) is clearly below the industry average.`, `The industry average is ${b.ref}% (${ST} ${b.year}). The buyer will ask why; show what holds the margin down and how it can improve.`],
        benchOk: b => S ? [`The operating margin (${b.mg}%) is in line with the industry.`, `The median for ${b.n} comparable companies in ${b.label} is ${b.ref}% (${ST} ${b.year}).`]
                        : [`The operating margin (${b.mg}%) is in line with the industry.`, `The average for ${b.n} limited companies in ${b.label} is ${b.ref}% (${ST} ${b.year}).`]
      },
      s5: "5. Value creation plan",
      s5intro: i => `The actions are ranked by how much each one raises the equity value at today's earnings. The effects cannot be fully added up, but together they could lift the equity value to about ${i}.`,
      s5fields: ["Value uplift", "Timeframe"], months: "months",
      actions: {
        owner: ["Reduce owner dependency", ["Map which customers, suppliers and decisions go through you.", "Appoint an owner for each key customer and introduce them to the relationship.", "Document processes and delegate decision rights in writing."]],
        mgmt: ["Build a management team", ["Appoint or recruit an operations manager and a finance manager.", "Set clear mandates and targets, and follow them up monthly.", "Put incentive agreements in place that keep key people through a sale."]],
        cust: ["Reduce customer concentration", ["Set a target that no customer exceeds 15% of revenue.", "Focus sales resources on mid-sized customers and new segments.", "Sign multi-year framework agreements with the largest customers."]],
        recur: ["Increase recurring revenue", ["Identify services that can be sold as ongoing service or maintenance contracts.", "Offer existing customers contracts that renew automatically.", "Track the share of recurring revenue as a key ratio."]],
        reporting: ["Improve financial reporting", ["Close the books monthly within 15 days of month-end.", "Prepare a budget and follow up actuals against budget every month.", "Report key ratios: margin per customer or project, order book and cash flow."]],
        contracts: ["Put contracts in writing", ["List the 20 largest customers and suppliers and the status of their contracts.", "Write contracts where they are missing and check change-of-control clauses.", "Review employment contracts for key people, including non-compete and non-solicitation clauses."]]
      },
      roadTitle: "5.1 Roadmap", roadCols: ["Period", "Actions"], roadPeriods: ["0–6 months", "6–18 months", "12–36 months"],
      s6: "6. Buyer types and indicative multiples",
      s6intro: "Different buyers pay for different things. The multiples below are indicative and start from the company's own multiple.",
      s6cols: ["Buyer type", "What they pay for", "Typical structure", "Multiple", "Fit"],
      buyers: [
        ["Strategic buyer (industry player)", "Synergies, customers, geography and know-how", "Mostly cash, shorter earn-out"],
        ["Private equity / serial acquirer", "Stable cash flow, management in place, growth platform", "Cash + reinvestment (10–30%), sometimes earn-out"],
        ["Private buyer / search fund", "A well-run company to operate themselves", "Bank loan + vendor note, often earn-out"],
        ["Management (MBO)", "Continuity and a familiar business", "Vendor note and staged payment"]
      ],
      fit: ["High", "Medium", "Low"],
      s7: "7. Deal structure and terms", s7intro: "Price is only part of the deal. The terms decide how much you receive, and when.",
      terms: [
        ["Earn-out", "Part of the price is paid later if the company meets agreed targets, often over 1–3 years. Common when earnings depend on the owner or have varied."],
        ["Vendor note", "You lend part of the purchase price to the buyer. Common with private buyers and MBOs."],
        ["Reinvestment", "You keep or reinvest a minority stake, common with private equity. Gives the chance of a second exit."],
        ["Warranties and escrow", "The seller gives warranties about the company, and part of the price may be held in escrow. Better documentation gives milder terms."],
        ["Working capital and net debt", "The price is usually stated cash-free and debt-free with a normal level of working capital. Deviations adjust the purchase price."]
      ],
      personal: {
        high: n => `For ${n} you should expect a significant part of the price, often 20–40%, to be conditional through an earn-out, and that you will be expected to stay on for 2–3 years.`,
        medium: n => `For ${n} you should expect a smaller earn-out and a transition period of 6–12 months.`,
        low: n => `For ${n} most of the price can probably be paid in cash at closing.`
      },
      s8: "8. Due diligence checklist",
      dd: [
        ["Finance", ["Annual reports for the last 3–5 years", "Monthly reports and budget for the current and previous year", "Breakdown of one-off items and owner-related costs", "Working capital by month", "Order book and pipeline"]],
        ["Legal", ["Articles of association, share register and board minutes", "Material customer and supplier contracts", "Leases", "Ongoing or threatened disputes", "Permits and certifications"]],
        ["Customers", ["Revenue per customer for the last three years", "Customer contracts and change-of-control terms", "Customer losses and complaints"]],
        ["People", ["Organisation chart", "Employment contracts for key people", "Collective agreements and pension commitments", "Staff turnover and sick leave"]],
        ["Tax", ["Tax returns and any tax audits", "VAT and payroll tax returns"]],
        ["IT and other", ["Finance and operating systems", "Intellectual property and domains", "Insurance"]]
      ],
      s9: "9. The sale process", s9cols: ["Phase", "Time", "Content"],
      phases: [
        ["Preparation", "1–3 months", "Valuation, actions from the plan, compiling material"],
        ["Marketing", "1–2 months", "Anonymous teaser, non-disclosure agreement (NDA), information memorandum to selected buyers"],
        ["Indicative bids", "3–6 weeks", "Buyers submit bids, choice of buyer, letter of intent (LOI)"],
        ["Due diligence", "1–2 months", "The buyer reviews the company with the help of a data room"],
        ["Agreement and closing", "3–6 weeks", "Negotiation of the share purchase agreement (SPA), signing and closing"]
      ],
      s9total: "Total time: normally 6–9 months from start to closing.",
      s10: "10. Next steps",
      next: ["Start with the actions with the shortest timeframe: reporting and contracts.", "Redo the valuation at exitkompass.se every six months to follow progress.", "Book a review with a partner at Adsco Capital Partners to check the normalisation and plan the process."],
      discTitle: "Important information",
      disc: "This report is an indicative valuation based on simplified market multiples and the information provided. It shows the value in a sale to a buyer and is not intended for divorce, estate settlement, disputes, buy-outs or tax purposes, where net asset value or other methods may be required. It is not a fairness opinion, investment advice or a formal valuation. The actual price depends on the buyer, deal structure, working capital and the outcome of due diligence. Exitkompass is provided by Adsco Capital Partners.",
      industries: { saas: "Software / SaaS", healthtech: "Healthtech / medtech", itcons: "IT consulting", health: "Health and social care", bizserv: "Business services and consulting", manuf: "Manufacturing and industry", install: "Construction and installation (HVAC, electrical)", whole: "Wholesale and distribution", transport: "Transport and logistics", retail: "Retail and e-commerce", hosp: "Restaurants and hospitality" },
      svTitle: "6.1 Strategic value",
      svLevel: ["low", "moderate", "high"],
      svIntro: l => `We assess strategic interest in the company as ${l}. A strategic buyer – a competitor, customer, supplier or serial acquirer – may pay more than the financial value when the company brings synergies in customers, markets, products, technology or skills.`,
      svDrv: { ind: n => `The industry (${n}) has buyers that actively acquire and pay for synergies.`, recur: "Recurring revenue a buyer can build on.", growth: "Growth that strengthens a buyer's own platform.", margin: "A margin in the industry's top quarter.", cust: "A broad customer base without dependence on single customers.", buyers: "Active serial acquirers buy companies in the industry." },
      svPrem: (r, a) => `Indicative strategic premium: ${r} above the enterprise value, equal to ${a}.`,
      svNote: "The premium is not included in the valuation in section 2. It requires the right buyer and a sale process with several bidders, and is often paid partly as an earn-out.",
      msgSv: (l, r) => `Strategic interest is assessed as ${l}; a strategic buyer could pay about ${r} above the enterprise value (section 6.1).`,
      srcLine: m => `Source for industry multiples and the size curve: ${m.name} (${["January","February","March","April","May","June","July","August","September","October","November","December"][Number(String(m.edition).split("-")[1]) - 1]} ${String(m.edition).split("-")[0]}, survey of Nordic M&A advisers on deals in ${m.period.replace("H1-", "the first half of ").replace("H2-", "the second half of ")}). Health care services and healthtech, the revenue multiples and the adjustments for the company's characteristics are Adsco Capital Partners' assessment.`,
      file: "Exitkompass-report"
    };
  }
  window.ExitkompassReport.T.EN = { SE: mk("SE"), NO: mk("NO") };
})();
