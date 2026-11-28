
/* Exitkompass – paid report generator (Swedish / Norwegian PDF via pdfmake) */
(function () {
  const PDFMAKE = "https://cdnjs.cloudflare.com/ajax/libs/pdfmake/0.2.7/";
  const INK = "#17252b", MUTED = "#5b6a70", LINE = "#dde3e2", ACCENT = "#0f5c63", SOFT = "#e3efee", BRASS = "#a8741f",
        GOOD = "#2f7a3e", WARN = "#b0700f", BAD = "#b23a2e";

  const T = {
    SE: {
      loc: "sv-SE", by: "av Adsco Capital Partners", title: "Värdering och exitberedskap", subtitle: "Exit Readiness-rapport",
      preparedFor: "Upprättad för", date: "Datum", org: "Org.nr", industry: "Bransch", confidential: "Konfidentiellt",
      s1: "1. Sammanfattning",
      kpi: ["Aktievärde (bas)", "Intervall", "Företagsvärde (EV)", "Normaliserad EBITDA", "EV/EBITDA-multipel", "Exitberedskap", "Aktievärde om exitklar"],
      levels: ["god", "medel", "låg"],
      msgVal: (n, eq, lo, hi, norm, m) => `Vi bedömer aktievärdet för ${n} till ${eq} (intervall ${lo}–${hi}), baserat på en normaliserad EBITDA på ${norm} och en multipel på ${m}.`,
      msgScore: (s, l) => `Exitberedskapen är ${s} av 100 (${l}).`,
      msgTop: (t, u) => `Den åtgärd som har störst effekt är ”${t}”, som kan öka aktievärdet med cirka ${u}.`,
      msgGap: (i, g) => `Om bolaget åtgärdar de svagheter som en köpare kommer att identifiera kan aktievärdet öka till cirka ${i} vid dagens resultatnivå, en ökning med ${g}.`,
      s2: "2. Värdering",
      method: "Värderingen bygger på en multipelvärdering, den vanligaste metoden vid försäljning av små och medelstora onoterade bolag i Norden. Företagsvärdet (EV) beräknas som normaliserad EBITDA multiplicerad med en EV/EBITDA-multipel. Multipeln utgår från en basnivå för branschen och justeras för storlek, risk och kvalitet. Aktievärdet är företagsvärdet minus räntebärande nettoskuld.",
      normTitle: "2.1 Normaliserad EBITDA",
      normRows: ["Nettoomsättning", "Rapporterad EBITDA", "EBITDA-marginal", "Engångskostnader (återläggs)", "Vikt", "Viktad EBITDA", "Justering av ägarlön till marknadsnivå", "Normaliserad EBITDA"],
      ltmCol: "LTM", ltmNote: (n, p) => `LTM = senaste tolv månader enligt månadsrapporterna (${n} månader hittills i år${p ? ", jämfört med samma period i fjol" : ", övriga månader proportionerade från senaste året"}). Med LTM viktas LTM 3, senaste året 2 och året före 1.`,
      basisHist: "Underlag: historiska siffror från årsredovisningarna. Inga månadsrapporter, budget eller affärsplan har lämnats, så värderingen speglar inte tillväxtplaner.",
      basisDocs: l => `Underlag: historiska siffror från årsredovisningarna kompletterade med ${l}.`, docN: { ltm: "månadsrapporter", budget: "budget", plan: "affärsplan" },
      gwTitle: "Viktning av tillväxtvärdet", gwRows: ["Historisk värdering (aktievärde)", "Tillväxtvärde (aktievärde i dag)", "Vikt för tillväxtvärdet", "Sammanvägt aktievärde", "Sammanvägt intervall"],
      gwPart: { budget: "Budget: 20 %", plan: "Affärsplan som förklarar budgeten: +5 %", onTrack: p => `Utfall hittills i år ${p} av budgeterad takt: +10 %`, behind: p => `Utfall hittills i år ${p} av budgeterad takt: −10 %`, stretch: (b, h) => `Budgeterad tillväxt ${b} per år mot historiskt ${h}: vikten halveras` },
      gwNote: "Historiska siffror är grunden eftersom köpare betalar för bevisat resultat. Budgeten vägs in med 20 %, plus 5 % om en affärsplan förklarar den och plus 10 % om utfallet hittills i år följer budgeten (minus 10 % om det ligger mer än 15 % efter). Om budgeten växer mer än 15 procentenheter snabbare än historiken halveras vikten. Vikten är högst 35 %.",
      kpiBlend: "Aktievärde sammanvägt med budget", msgBlend: (eq, w, h) => `Sammanvägt med budgeten (vikt ${w}) bedömer vi aktievärdet till ${eq}, jämfört med ${h} på enbart historiska siffror (avsnitt 2.7).`,
      dealsTitle: n => `${n} Genomförda affärer i liknande bolag`, dealsIntro: (k, m) => `Affärer som Adsco Capital Partners har följt i samma bransch och av liknande storlek (normaliserad EBITDA mellan en tredjedel och tre gånger bolagets). Uppgifterna är anonymiserade. ${k} affärer, median ${m}.`,
      dealsCols: ["År", "Land", "Storlek (EBITDA)", "Betald EV/EBITDA"], dealsCmp: (m, med) => `Bolagets multipel i den här värderingen är ${m}, mot en median på ${med} i jämförbara affärer.`, dealsCc: { SE: "Sverige", NO: "Norge" },
      sampleWm: "EXEMPEL", sampleNote: "Exempelrapport för ett påhittat bolag. Siffror, namn och bedömningar är fiktiva och visar bara hur rapporten ser ut.",
      normNote: "Åren viktas 1:2:3 med störst vikt på det senaste året. Ägarlönen justeras till vad det skulle kosta att anställa en extern VD, inklusive arbetsgivaravgifter.",
      bridgeTitle: "2.2 Multipelbrygga", bridgeCols: ["Faktor", "Justering", "Multipel"], base: "Branschens basmultipel", final: "Bolagets multipel", floor: " (golv)",
      adj: { size: "Storlek", owner: "Ägarberoende", mgmt: "Ledningsgrupp", cust: "Kundkoncentration", recur: "Återkommande intäkter", growth: "Omsättningstillväxt", trend: "Resultatutveckling", reporting: "Finansiell rapportering", contracts: "Skriftliga avtal", text: "Årsredovisningens text", bench: "Marginal jämfört med branschen", rate: "Räntenivå", cycle: "Konjunkturläge i branschen" },
      tf: { gc: "Revisorn pekar på väsentlig osäkerhet om fortsatt drift.", qual: "Revisionsberättelsen innehåller reservation eller avstående från uttalande.", kbr: "Eget kapital under hälften av aktiekapitalet (kontrollbalansräkning).", dispute: "Årsredovisningen nämner tvist eller rättslig process.", custdep: "Årsredovisningen nämner beroende av enskilda stora kunder.", recur: "Årsredovisningen nämner abonnemang, licenser eller serviceavtal.", growth: "Årsredovisningen nämner expansion eller ökad efterfrågan." },
      eqTitle: "2.4 Från företagsvärde till aktievärde", eqRows: ["Företagsvärde (EV)", "Räntebärande skulder", "Likvida medel", "Aktievärde"],
      scenTitle: "2.5 Scenarier", scenCols: ["Låg", "Bas", "Hög"], scenRows: ["Multipel", "Företagsvärde", "Aktievärde"],
      blendTitle: "2.3 Sammanvägning av resultat och omsättning", blendCols: ["Metod", "Multipel", "Värde", "Vikt"],
      blendRows: ["Rörelseresultat före avskrivningar (EV/EBITDA)", "Omsättning (EV/omsättning, senaste året)", "Företagsvärde (EV), sammanvägt", "Rörelseresultat efter avskrivningar (EV/EBIT)"],
      blendImp: m => "Sammanvägt motsvarar företagsvärdet " + [m[0] && m[0] + " EBITDA", m[1] && m[1] + " EBIT", m[2] && m[2] + " omsättningen"].filter(Boolean).join(", ") + ".",
      blendNote: "Värdet bygger på de tre multiplar som är vanligast vid företagsförvärv. Resultatdelen räknas till 60 % på EBITDA och 40 % på EBIT, där EBIT tar hänsyn till bolagets egna avskrivningar: kapitalkrävande bolag värderas därför lägre än kapitallätta. Omsättningsmetoden väger tyngre när marginalen är låg: 50 % vid marginal under 5 %, 35 % vid 5–10 % och 20 % däröver.",
      gvTitle: "2.7 Tillväxtvärdering utifrån affärsplanen", gvIntro: "Värdet om bolaget når sin affärsplan, beräknat med samma modell på budgetåret 3 och diskonterat tillbaka till i dag med avkastningskravet. Det förutsätter att planen nås och ska läsas bredvid den historiska värderingen, inte i stället för den.",
      gvCols: ["", "Budget"], gvRows: ["Omsättning", "EBITDA (antagen marginal)"],
      gvVal: ["Företagsvärde år 3", "Avkastningskrav per år", "Diskonteringsfaktor (3 år)", "Företagsvärde i dag", "Aktievärde i dag (efter nettoskuld)", "Intervall (±25 %)", "Jämfört med historisk värdering"],
      msgGv: (lo, hi) => `Om affärsplanen nås motsvarar det ett aktievärde på ${lo} – ${hi} i dag (avsnitt 2.7).`,
      sensTitle: "2.6 Känslighetsanalys: aktievärde", sensNote: "Aktievärde vid olika EBITDA-multiplar (kolumner) och EBITDA-nivåer (rader). Omsättningsdelen av värderingen hålls oförändrad.",
      s3: "3. Exitberedskap",
      s3intro: "Poängen visar hur en köpares due diligence-team skulle bedöma bolaget i dag. Varje område viktas efter hur mycket det brukar påverka pris och villkor.",
      s3cols: ["Område", "Poäng", "Max", "Bedömning"],
      factors: ["Oberoende av ägaren", "Ledningens djup", "Kundspridning", "Återkommande intäkter", "Rapporteringskvalitet", "Avtalsdokumentation", "Tillväxt", "Resultatstabilitet"],
      grade: ["Stark", "Godtagbar", "Svag"],
      s4: "4. Vad en köpare kommer att lyfta fram", s4cols: ["Fynd", "Betydelse och åtgärd"],
      f: {
        ownerHigh: ["Verksamheten är beroende av dig som ägare.", "Köpare sänker priset eller kräver en lång tilläggsköpeskilling (earn-out) och att du stannar kvar i 2–3 år. Börja överlämna kundrelationer och beslut nu."],
        ownerMed: ["Visst ägarberoende.", "Var beredd att visa vem som äger de viktigaste kundrelationerna. Dokumentera roller och processer."],
        custHigh: x => [`Största kunden står för ${x} % av omsättningen.`, "Köpare prissätter risken att tappa kunden. Teckna fleråriga ramavtal och bredda kundbasen."],
        custMed: x => [`Största kunden står för ${x} % av omsättningen.`, "Köpare kommer att begära avtalet och granska villkoren vid ägarbyte (change of control)."],
        salary: (x, u) => ["Ägarlönen ligger under marknadsnivå.", `En köpare måste anställa en VD, vilket sänker EBITDA med ${x} ${u}. Justeringen är redan gjord i den normaliserade EBITDA:n. Var beredd att motivera den.`],
        repAnnual: ["Endast årsbokslut.", "Utan månadsrapporter tar due diligence längre tid och köpare skyddar sig med garantier och deposition. Inför månadsbokslut med budgetuppföljning."],
        conVerbal: ["Avtalen är till största delen muntliga.", "Köparen kan inte verifiera intäkternas kvalitet. Skriv avtal med de viktigaste kunderna och leverantörerna."],
        conMixed: ["Delvis skriftliga avtal.", "Gå igenom de största avtalen och kontrollera klausuler om ägarbyte och uppsägning."],
        mgmtNone: ["Ingen ledning under ägaren.", "De flesta finansiella köpare går inte vidare utan en ledning på plats. Rekrytera eller utse nyckelpersoner."],
        mgmtPart: ["Begränsad ledningsgrupp.", "Säkra nyckelpersonerna med incitamentsavtal och tydliga mandat inför en försäljning."],
        trend: x => [`EBITDA minskade med ${x} % det senaste året.`, "Köpare utgår från den svagare siffran. Förklara orsaken och visa att den är tillfällig."],
        netDebt: ["Hög nettoskuld i förhållande till företagsvärdet.", "Lite av köpeskillingen når ägaren. Överväg att amortera skulder före försäljningen."],
        recurLow: x => [`Låg andel återkommande intäkter (${x} %).`, "Köpare betalar mer för förutsägbara intäkter. Utveckla serviceavtal."],
        growth: x => [`Omsättningen växer med ${x} % per år.`, "Stödjer värderingen. Ta fram en trovärdig plan som visar hur tillväxten fortsätter."],
        recurOk: x => [`${x} % återkommande intäkter.`, "Gör framtida resultat lättare att bedöma för köparen."],
        buyers: (b, m) => [`Aktiva köpare i branschen: ${b}.`, `Börsnoterade serieförvärvare som köper bolag av den här typen; de betalar oftast 5–8x EBITA. Marknadens median för onoterade medelstora bolag i Europa var ${m} enligt Argos Index.`],
        cycWeak: c => [`Konjunkturen i branschen (${c.label.toLowerCase()}) är svagare än normalt (${c.src}, ${c.period}).`, "Köpare räknar med lägre multiplar när branschen går svagt. Om försäljningen kan vänta kan bättre tider ge ett högre pris."],
        cycStrong: c => [`Konjunkturen i branschen (${c.label.toLowerCase()}) är starkare än normalt (${c.src}, ${c.period}).`, "Ett bra läge att sälja: köpare är mer optimistiska när branschen går bra."],
        benchTop: b => [`Rörelsemarginalen (${b.mg} %) hör till den bästa fjärdedelen i branschen.`, `Jämfört med ${b.n} företag i ${b.label} (SCB ${b.year}, median ${b.ref} %). Lyft fram lönsamheten i försäljningsunderlaget.`],
        benchLow: b => [`Rörelsemarginalen (${b.mg} %) ligger i den svagaste fjärdedelen i branschen.`, `Median för jämförbara företag är ${b.ref} % (SCB ${b.year}). Köparen frågar varför; visa vad som drar ner marginalen och hur den kan förbättras.`],
        benchOk: b => [`Rörelsemarginalen (${b.mg} %) ligger i linje med branschen.`, `Median för ${b.n} jämförbara företag i ${b.label} är ${b.ref} % (SCB ${b.year}).`]
      },
      s5: "5. Värdeskapandeplan",
      s5intro: i => `Åtgärderna är rangordnade efter hur mycket var och en ökar aktievärdet vid dagens resultatnivå. Effekterna kan inte summeras fullt ut, men tillsammans kan de lyfta aktievärdet till cirka ${i}.`,
      s5fields: ["Värdeökning", "Tidsram"], months: "månader",
      actions: {
        owner: ["Minska ägarberoendet", ["Kartlägg vilka kunder, leverantörer och beslut som går via dig.", "Utse ansvariga för varje nyckelkund och introducera dem i relationerna.", "Dokumentera processer och delegera beslutsmandat skriftligt."]],
        mgmt: ["Bygg en ledningsgrupp", ["Utse eller rekrytera en operativ chef och en ekonomichef.", "Ge tydliga mandat och mål, och följ upp dem månadsvis.", "Teckna incitamentsavtal som binder nyckelpersonerna genom en försäljning."]],
        cust: ["Minska kundkoncentrationen", ["Sätt ett mål om att ingen kund ska överstiga 15 % av omsättningen.", "Satsa säljresurser på medelstora kunder och nya segment.", "Teckna fleråriga ramavtal med de största kunderna."]],
        recur: ["Öka andelen återkommande intäkter", ["Identifiera tjänster som kan säljas som löpande service- eller underhållsavtal.", "Erbjud befintliga kunder avtal med automatisk förlängning.", "Följ upp andelen återkommande intäkter som ett nyckeltal."]],
        reporting: ["Förbättra den finansiella rapporteringen", ["Inför månadsbokslut inom 15 dagar efter månadsskiftet.", "Ta fram en budget och följ upp utfall mot budget varje månad.", "Rapportera nyckeltal: marginal per kund eller projekt, orderstock och kassaflöde."]],
        contracts: ["Skriftliggör avtalen", ["Lista de 20 största kunderna och leverantörerna och avtalens status.", "Skriv avtal där sådana saknas och kontrollera klausuler om ägarbyte.", "Se över anställningsavtal för nyckelpersoner, inklusive konkurrens- och värvningsklausuler."]]
      },
      roadTitle: "5.1 Färdplan", roadCols: ["Period", "Åtgärder"], roadPeriods: ["0–6 månader", "6–18 månader", "12–36 månader"],
      s6: "6. Köpartyper och indikativa multiplar",
      s6intro: "Olika köpare betalar för olika saker. Multiplarna nedan är indikativa och utgår från bolagets egen multipel.",
      s6cols: ["Köpartyp", "Vad de betalar för", "Typisk struktur", "Multipel", "Passform"],
      buyers: [
        ["Strategisk köpare (branschaktör)", "Synergier, kunder, geografi och kompetens", "Större del kontant, kortare earn-out"],
        ["Private equity / serieförvärvare", "Stabilt kassaflöde, ledning på plats, tillväxtplattform", "Kontant + återinvestering (10–30 %), ibland earn-out"],
        ["Privat köpare / sökfond", "Ett välskött bolag att driva själv", "Banklån + säljarrevers, ofta earn-out"],
        ["Ledningen (MBO)", "Kontinuitet och känd verksamhet", "Säljarrevers och stegvis betalning"]
      ],
      fit: ["Hög", "Medel", "Låg"],
      s7: "7. Affärsstruktur och villkor", s7intro: "Priset är bara en del av affären. Villkoren avgör hur mycket du får, och när.",
      terms: [
        ["Tilläggsköpeskilling (earn-out)", "En del av priset betalas senare om bolaget når uppsatta mål, ofta under 1–3 år. Vanligt när resultatet är beroende av ägaren eller har varierat."],
        ["Säljarrevers", "Du lånar ut en del av köpeskillingen till köparen. Vanligt vid privata köpare och MBO."],
        ["Återinvestering", "Du behåller eller återinvesterar en minoritetsandel, vanligt med private equity. Ger möjlighet till en andra exit."],
        ["Garantier och deposition", "Säljaren lämnar garantier om bolaget, och en del av priset kan hållas på spärrat konto. Bättre dokumentation ger mildare villkor."],
        ["Rörelsekapital och nettoskuld", "Priset anges oftast kassa- och skuldfritt med en normal nivå av rörelsekapital. Avvikelser justerar köpeskillingen."]
      ],
      personal: {
        high: n => `För ${n} bör du räkna med att en betydande del av priset, ofta 20–40 %, villkoras genom earn-out och att du förväntas stanna kvar i 2–3 år.`,
        medium: n => `För ${n} bör du räkna med en mindre tilläggsköpeskilling och en övergångsperiod på 6–12 månader.`,
        low: n => `För ${n} kan huvuddelen av priset sannolikt betalas kontant vid tillträdet.`
      },
      s8: "8. Checklista för due diligence",
      dd: [
        ["Ekonomi", ["Årsredovisningar för de senaste 3–5 åren", "Månadsrapporter och budget för innevarande och föregående år", "Specifikation av engångsposter och ägarrelaterade kostnader", "Rörelsekapital per månad", "Orderstock och pipeline"]],
        ["Juridik", ["Bolagsordning, aktiebok och styrelseprotokoll", "Väsentliga kund- och leverantörsavtal", "Hyresavtal", "Pågående eller befarade tvister", "Tillstånd och certifieringar"]],
        ["Kunder", ["Omsättning per kund de senaste tre åren", "Kundavtal och villkor vid ägarbyte", "Kundförluster och reklamationer"]],
        ["Personal", ["Organisationsschema", "Anställningsavtal för nyckelpersoner", "Kollektivavtal och pensionsåtaganden", "Personalomsättning och sjukfrånvaro"]],
        ["Skatt", ["Inkomstdeklarationer och eventuella skatterevisioner", "Moms- och arbetsgivardeklarationer"]],
        ["IT och övrigt", ["System för ekonomi och verksamhet", "Immateriella rättigheter och domäner", "Försäkringar"]]
      ],
      s9: "9. Försäljningsprocessen", s9cols: ["Fas", "Tid", "Innehåll"],
      phases: [
        ["Förberedelse", "1–3 mån", "Värdering, åtgärder från planen, sammanställning av material"],
        ["Marknadsföring", "1–2 mån", "Anonym teaser, sekretessavtal (NDA), informationsmemorandum till utvalda köpare"],
        ["Indikativa bud", "3–6 veckor", "Köpare lämnar bud, val av köpare, avsiktsförklaring (LOI)"],
        ["Due diligence", "1–2 mån", "Köparen granskar bolaget med stöd av ett datarum"],
        ["Avtal och tillträde", "3–6 veckor", "Förhandling av aktieöverlåtelseavtal (SPA), signering och tillträde"]
      ],
      s9total: "Total tid: normalt 6–9 månader från start till tillträde.",
      s10: "10. Nästa steg",
      next: ["Börja med åtgärderna med kortast tidsram: rapportering och avtal.", "Gör om värderingen på exitkompass.se var sjätte månad för att följa utvecklingen.", "Boka en genomgång med en partner på Adsco Capital Partners för att granska normaliseringen och planera processen."],
      discTitle: "Viktig information",
      disc: "Denna rapport är en indikativ värdering baserad på förenklade marknadsmultiplar och de uppgifter som lämnats. Den visar värdet vid en försäljning till en köpare och är inte avsedd för bodelning, bouppteckning, tvist, inlösen eller skatteändamål, där substansvärde eller andra metoder kan krävas. Den utgör inte en fairness opinion, investeringsrådgivning eller en formell värdering. Faktiskt pris beror på köpare, affärsstruktur, rörelsekapital och resultatet av due diligence. Exitkompass tillhandahålls av Adsco Capital Partners.",
      industries: { saas: "Mjukvara / SaaS", healthtech: "Healthtech / medicinteknik", itcons: "IT-konsulting", health: "Vård och omsorg", bizserv: "Företagstjänster och konsulting", manuf: "Tillverkning och industri", install: "Bygg och installation (VVS, el)", whole: "Partihandel och distribution", transport: "Transport och logistik", retail: "Detaljhandel och e-handel", hosp: "Restaurang och besöksnäring" },
      file: "Exitkompass-rapport"
    },
    NO: {
      loc: "nb-NO", by: "av Adsco Capital Partners", title: "Verdivurdering og salgsklarhet", subtitle: "Exit Readiness-rapport",
      preparedFor: "Utarbeidet for", date: "Dato", org: "Org.nr.", industry: "Bransje", confidential: "Konfidensielt",
      s1: "1. Sammendrag",
      kpi: ["Aksjeverdi (basis)", "Intervall", "Selskapsverdi (EV)", "Normalisert EBITDA", "EV/EBITDA-multippel", "Salgsklarhet", "Aksjeverdi ved full salgsklarhet"],
      levels: ["god", "middels", "lav"],
      msgVal: (n, eq, lo, hi, norm, m) => `Vi vurderer aksjeverdien for ${n} til ${eq} (intervall ${lo}–${hi}), basert på en normalisert EBITDA på ${norm} og en multippel på ${m}.`,
      msgScore: (s, l) => `Salgsklarheten er ${s} av 100 (${l}).`,
      msgTop: (t, u) => `Tiltaket med størst effekt er «${t}», som kan øke aksjeverdien med om lag ${u}.`,
      msgGap: (i, g) => `Dersom selskapet utbedrer svakhetene en kjøper vil avdekke, kan aksjeverdien øke til om lag ${i} på dagens resultatnivå, en økning på ${g}.`,
      s2: "2. Verdivurdering",
      method: "Verdivurderingen bygger på en multippelmetode, den vanligste metoden ved salg av små og mellomstore unoterte selskaper i Norden. Selskapsverdien (EV) beregnes som normalisert EBITDA multiplisert med en EV/EBITDA-multippel. Multippelen tar utgangspunkt i et basisnivå for bransjen og justeres for størrelse, risiko og kvalitet. Aksjeverdien er selskapsverdien fratrukket rentebærende netto gjeld.",
      normTitle: "2.1 Normalisert EBITDA",
      normRows: ["Driftsinntekter", "Rapportert EBITDA", "EBITDA-margin", "Engangskostnader (tilbakeført)", "Vekt", "Vektet EBITDA", "Justering av eierlønn til markedsnivå", "Normalisert EBITDA"],
      ltmCol: "LTM", ltmNote: (n, p) => `LTM = siste tolv måneder ifølge månedsrapportene (${n} måneder hittil i år${p ? ", sammenlignet med samme periode i fjor" : ", øvrige måneder proporsjonert fra siste år"}). Med LTM vektes LTM 3, siste år 2 og året før 1.`,
      basisHist: "Grunnlag: historiske tall fra årsregnskapene. Det er ikke levert månedsrapporter, budsjett eller forretningsplan, så verdivurderingen gjenspeiler ikke vekstplaner.",
      basisDocs: l => `Grunnlag: historiske tall fra årsregnskapene supplert med ${l}.`, docN: { ltm: "månedsrapporter", budget: "budsjett", plan: "forretningsplan" },
      gwTitle: "Vekting av vekstverdien", gwRows: ["Historisk verdivurdering (aksjeverdi)", "Vekstverdi (aksjeverdi i dag)", "Vekt for vekstverdien", "Samlet aksjeverdi", "Samlet intervall"],
      gwPart: { budget: "Budsjett: 20 %", plan: "Forretningsplan som forklarer budsjettet: +5 %", onTrack: p => `Resultat hittil i år ${p} av budsjettert takt: +10 %`, behind: p => `Resultat hittil i år ${p} av budsjettert takt: −10 %`, stretch: (b, h) => `Budsjettert vekst ${b} per år mot historisk ${h}: vekten halveres` },
      gwNote: "Historiske tall er grunnlaget fordi kjøpere betaler for dokumentert resultat. Budsjettet vektes inn med 20 %, pluss 5 % hvis en forretningsplan forklarer det og pluss 10 % hvis resultatet hittil i år følger budsjettet (minus 10 % hvis det ligger mer enn 15 % etter). Hvis budsjettet vokser mer enn 15 prosentpoeng raskere enn historikken, halveres vekten. Vekten er høyst 35 %.",
      kpiBlend: "Aksjeverdi vektet med budsjett", msgBlend: (eq, w, h) => `Vektet med budsjettet (vekt ${w}) vurderer vi aksjeverdien til ${eq}, sammenlignet med ${h} på bare historiske tall (avsnitt 2.7).`,
      dealsTitle: n => `${n} Gjennomførte transaksjoner i lignende selskaper`, dealsIntro: (k, m) => `Transaksjoner Adsco Capital Partners har fulgt i samme bransje og av lignende størrelse (normalisert EBITDA mellom en tredjedel og tre ganger selskapets). Opplysningene er anonymisert. ${k} transaksjoner, median ${m}.`,
      dealsCols: ["År", "Land", "Størrelse (EBITDA)", "Betalt EV/EBITDA"], dealsCmp: (m, med) => `Selskapets multippel i denne verdivurderingen er ${m}, mot en median på ${med} i sammenlignbare transaksjoner.`, dealsCc: { SE: "Sverige", NO: "Norge" },
      sampleWm: "EKSEMPEL", sampleNote: "Eksempelrapport for et oppdiktet selskap. Tall, navn og vurderinger er fiktive og viser bare hvordan rapporten ser ut.",
      normNote: "Årene vektes 1:2:3 med størst vekt på siste år. Eierlønnen justeres til hva det ville kostet å ansette en ekstern daglig leder, inkludert arbeidsgiveravgift.",
      bridgeTitle: "2.2 Multippelbro", bridgeCols: ["Faktor", "Justering", "Multippel"], base: "Bransjens basismultippel", final: "Selskapets multippel", floor: " (gulv)",
      adj: { size: "Størrelse", owner: "Eieravhengighet", mgmt: "Ledergruppe", cust: "Kundekonsentrasjon", recur: "Gjentakende inntekter", growth: "Omsetningsvekst", trend: "Resultatutvikling", reporting: "Finansiell rapportering", contracts: "Skriftlige avtaler", text: "Årsregnskapets tekst", bench: "Margin sammenlignet med næringen", rate: "Rentenivå", cycle: "Konjunktur i bransjen" },
      tf: { gc: "Revisor peker på vesentlig usikkerhet om fortsatt drift.", qual: "Revisjonsberetningen har forbehold eller ingen konklusjon.", kbr: "Egenkapitalen er under halvparten av aksjekapitalen.", dispute: "Årsregnskapet nevner tvist eller rettssak.", custdep: "Årsregnskapet nevner avhengighet av enkelte store kunder.", recur: "Årsregnskapet nevner abonnement, lisenser eller serviceavtaler.", growth: "Årsregnskapet nevner ekspansjon eller økt etterspørsel." },
      eqTitle: "2.4 Fra selskapsverdi til aksjeverdi", eqRows: ["Selskapsverdi (EV)", "Rentebærende gjeld", "Bankinnskudd og kontanter", "Aksjeverdi"],
      scenTitle: "2.5 Scenarioer", scenCols: ["Lav", "Basis", "Høy"], scenRows: ["Multippel", "Selskapsverdi", "Aksjeverdi"],
      blendTitle: "2.3 Sammenveiing av resultat og omsetning", blendCols: ["Metode", "Multippel", "Verdi", "Vekt"],
      blendRows: ["Driftsresultat før avskrivninger (EV/EBITDA)", "Omsetning (EV/omsetning, siste år)", "Selskapsverdi (EV), sammenveid", "Driftsresultat etter avskrivninger (EV/EBIT)"],
      blendImp: m => "Samlet tilsvarer selskapsverdien " + [m[0] && m[0] + " EBITDA", m[1] && m[1] + " EBIT", m[2] && m[2] + " omsetningen"].filter(Boolean).join(", ") + ".",
      blendNote: "Verdien bygger på de tre multiplene som er vanligst ved oppkjøp. Resultatdelen regnes 60 % på EBITDA og 40 % på EBIT, der EBIT tar hensyn til selskapets egne avskrivninger: kapitalkrevende selskaper verdsettes derfor lavere enn kapitallette. Omsetningsmetoden veier tyngre når marginen er lav: 50 % ved margin under 5 %, 35 % ved 5–10 % og 20 % over det.",
      gvTitle: "2.7 Vekstverdivurdering ut fra forretningsplanen", gvIntro: "Verdien hvis selskapet når forretningsplanen, beregnet med samme modell på budsjettår 3 og diskontert tilbake til i dag med avkastningskravet. Den forutsetter at planen nås og bør leses ved siden av den historiske verdivurderingen, ikke i stedet for den.",
      gvCols: ["", "Budsjett"], gvRows: ["Omsetning", "EBITDA (antatt margin)"],
      gvVal: ["Selskapsverdi år 3", "Avkastningskrav per år", "Diskonteringsfaktor (3 år)", "Selskapsverdi i dag", "Aksjeverdi i dag (etter netto gjeld)", "Intervall (±25 %)", "Sammenlignet med historisk verdivurdering"],
      msgGv: (lo, hi) => `Hvis forretningsplanen nås, tilsvarer det en aksjeverdi på ${lo} – ${hi} i dag (avsnitt 2.7).`,
      sensTitle: "2.6 Sensitivitetsanalyse: aksjeverdi", sensNote: "Aksjeverdi ved ulike EBITDA-multipler (kolonner) og EBITDA-nivåer (rader). Omsetningsdelen av verdivurderingen holdes uendret.",
      s3: "3. Salgsklarhet",
      s3intro: "Poengsummen viser hvordan en kjøpers due diligence-team ville vurdert selskapet i dag. Hvert område vektes etter hvor mye det vanligvis påvirker pris og vilkår.",
      s3cols: ["Område", "Poeng", "Maks", "Vurdering"],
      factors: ["Uavhengighet av eier", "Ledelsens dybde", "Kundespredning", "Gjentakende inntekter", "Rapporteringskvalitet", "Avtaledokumentasjon", "Vekst", "Resultatstabilitet"],
      grade: ["Sterk", "Akseptabel", "Svak"],
      s4: "4. Hva en kjøper vil påpeke", s4cols: ["Funn", "Betydning og tiltak"],
      f: {
        ownerHigh: ["Virksomheten er avhengig av deg som eier.", "Kjøpere reduserer prisen eller krever et langt tilleggsvederlag (earn-out) og at du blir værende i 2–3 år. Begynn å overføre kunderelasjoner og beslutninger nå."],
        ownerMed: ["Noe eieravhengighet.", "Vær forberedt på å vise hvem som eier de viktigste kunderelasjonene. Dokumenter roller og prosesser."],
        custHigh: x => [`Største kunde står for ${x} % av omsetningen.`, "Kjøpere priser inn risikoen for å miste kunden. Inngå flerårige rammeavtaler og utvid kundebasen."],
        custMed: x => [`Største kunde står for ${x} % av omsetningen.`, "Kjøpere vil be om avtalen og se på vilkårene ved eierskifte (change of control)."],
        salary: (x, u) => ["Eierlønnen er under markedsnivå.", `En kjøper må ansette en daglig leder, noe som reduserer EBITDA med ${x} ${u}. Justeringen er allerede gjort i normalisert EBITDA. Vær forberedt på å begrunne den.`],
        repAnnual: ["Kun årsregnskap.", "Uten månedsrapporter tar due diligence lengre tid, og kjøpere beskytter seg med garantier og deponering. Innfør månedlige regnskapsavslutninger med budsjettoppfølging."],
        conVerbal: ["Avtalene er i hovedsak muntlige.", "Kjøper kan ikke verifisere kvaliteten på inntektene. Inngå skriftlige avtaler med de viktigste kundene og leverandørene."],
        conMixed: ["Delvis skriftlige avtaler.", "Gå gjennom de største avtalene og kontroller klausuler om eierskifte og oppsigelse."],
        mgmtNone: ["Ingen ledelse under eier.", "De fleste finansielle kjøpere går ikke videre uten en ledelse på plass. Rekrutter eller utpek nøkkelpersoner."],
        mgmtPart: ["Begrenset ledergruppe.", "Sikre nøkkelpersonene med incentivavtaler og tydelige mandater før et salg."],
        trend: x => [`EBITDA falt med ${x} % siste år.`, "Kjøpere tar utgangspunkt i det svakere tallet. Forklar årsaken og vis at den er midlertidig."],
        netDebt: ["Høy netto gjeld i forhold til selskapsverdien.", "Lite av kjøpesummen tilfaller eier. Vurder å nedbetale gjeld før salget."],
        recurLow: x => [`Lav andel gjentakende inntekter (${x} %).`, "Kjøpere betaler mer for forutsigbare inntekter. Utvikle serviceavtaler."],
        growth: x => [`Omsetningen vokser med ${x} % per år.`, "Støtter verdivurderingen. Utarbeid en troverdig plan som viser hvordan veksten fortsetter."],
        recurOk: x => [`${x} % gjentakende inntekter.`, "Gjør fremtidige resultater enklere å vurdere for kjøper."],
        buyers: (b, m) => [`Aktive kjøpere i bransjen: ${b}.`, `Børsnoterte serieoppkjøpere som kjøper selskaper av denne typen; de betaler oftest 5–8x EBITA. Medianen for unoterte mellomstore selskaper i Europa var ${m} ifølge Argos Index.`],
        cycWeak: c => [`Konjunkturen i ${c.label.toLowerCase()} er svakere enn normalt (${c.src}, ${c.period}).`, "Kjøpere regner med lavere multipler når bransjen går svakt. Kan salget vente, kan bedre tider gi høyere pris."],
        cycStrong: c => [`Konjunkturen i ${c.label.toLowerCase()} er sterkere enn normalt (${c.src}, ${c.period}).`, "Et godt tidspunkt å selge: kjøpere er mer optimistiske når bransjen går godt."],
        benchTop: b => [`Driftsmarginen (${b.mg} %) ligger klart over snittet i næringen.`, `Snittet for ${b.n} aksjeselskaper i ${b.label} er ${b.ref} % (SSB ${b.year}). Løft frem lønnsomheten i salgsmaterialet.`],
        benchLow: b => [`Driftsmarginen (${b.mg} %) ligger klart under snittet i næringen.`, `Snittet i næringen er ${b.ref} % (SSB ${b.year}). Kjøper vil spørre hvorfor; vis hva som trekker marginen ned og hvordan den kan bedres.`],
        benchOk: b => [`Driftsmarginen (${b.mg} %) er på nivå med næringen.`, `Snittet for ${b.n} aksjeselskaper i ${b.label} er ${b.ref} % (SSB ${b.year}).`]
      },
      s5: "5. Verdiskapingsplan",
      s5intro: i => `Tiltakene er rangert etter hvor mye hvert av dem øker aksjeverdien på dagens resultatnivå. Effektene kan ikke summeres fullt ut, men samlet kan de løfte aksjeverdien til om lag ${i}.`,
      s5fields: ["Verdiøkning", "Tidsramme"], months: "måneder",
      actions: {
        owner: ["Reduser eieravhengigheten", ["Kartlegg hvilke kunder, leverandører og beslutninger som går via deg.", "Utpek ansvarlige for hver nøkkelkunde og introduser dem i relasjonene.", "Dokumenter prosesser og deleger beslutningsmyndighet skriftlig."]],
        mgmt: ["Bygg en ledergruppe", ["Utpek eller rekrutter en driftsleder og en økonomisjef.", "Gi tydelige mandater og mål, og følg dem opp månedlig.", "Inngå incentivavtaler som binder nøkkelpersonene gjennom et salg."]],
        cust: ["Reduser kundekonsentrasjonen", ["Sett et mål om at ingen kunde skal overstige 15 % av omsetningen.", "Sats salgsressurser på mellomstore kunder og nye segmenter.", "Inngå flerårige rammeavtaler med de største kundene."]],
        recur: ["Øk andelen gjentakende inntekter", ["Identifiser tjenester som kan selges som løpende service- eller vedlikeholdsavtaler.", "Tilby eksisterende kunder avtaler med automatisk fornyelse.", "Følg opp andelen gjentakende inntekter som et nøkkeltall."]],
        reporting: ["Forbedre den finansielle rapporteringen", ["Innfør månedlig regnskapsavslutning innen 15 dager etter månedsskiftet.", "Utarbeid budsjett og følg opp resultat mot budsjett hver måned.", "Rapporter nøkkeltall: margin per kunde eller prosjekt, ordrereserve og kontantstrøm."]],
        contracts: ["Få avtalene på skrift", ["List opp de 20 største kundene og leverandørene og status for avtalene.", "Inngå avtaler der de mangler, og kontroller klausuler om eierskifte.", "Gå gjennom arbeidsavtaler for nøkkelpersoner, inkludert konkurranse- og kundeklausuler."]]
      },
      roadTitle: "5.1 Veikart", roadCols: ["Periode", "Tiltak"], roadPeriods: ["0–6 måneder", "6–18 måneder", "12–36 måneder"],
      s6: "6. Kjøpertyper og indikative multipler",
      s6intro: "Ulike kjøpere betaler for ulike ting. Multiplene nedenfor er indikative og tar utgangspunkt i selskapets egen multippel.",
      s6cols: ["Kjøpertype", "Hva de betaler for", "Typisk struktur", "Multippel", "Egnethet"],
      buyers: [
        ["Strategisk kjøper (bransjeaktør)", "Synergier, kunder, geografi og kompetanse", "Større kontantandel, kortere earn-out"],
        ["Private equity / serieoppkjøper", "Stabil kontantstrøm, ledelse på plass, vekstplattform", "Kontant + reinvestering (10–30 %), iblant earn-out"],
        ["Privat kjøper / søkefond", "Et veldrevet selskap å drive selv", "Banklån + selgerkreditt, ofte earn-out"],
        ["Ledelsen (MBO)", "Kontinuitet og kjent virksomhet", "Selgerkreditt og trinnvis betaling"]
      ],
      fit: ["Høy", "Middels", "Lav"],
      s7: "7. Transaksjonsstruktur og vilkår", s7intro: "Prisen er bare én del av avtalen. Vilkårene avgjør hvor mye du får, og når.",
      terms: [
        ["Tilleggsvederlag (earn-out)", "En del av prisen betales senere dersom selskapet når avtalte mål, ofte over 1–3 år. Vanlig når resultatet er avhengig av eier eller har variert."],
        ["Selgerkreditt", "Du låner ut en del av kjøpesummen til kjøper. Vanlig ved private kjøpere og MBO."],
        ["Reinvestering", "Du beholder eller reinvesterer en minoritetsandel, vanlig med private equity. Gir mulighet for en ny exit."],
        ["Garantier og deponering", "Selger gir garantier om selskapet, og en del av prisen kan holdes på sperret konto. Bedre dokumentasjon gir mildere vilkår."],
        ["Arbeidskapital og netto gjeld", "Prisen angis som regel kontant- og gjeldfritt med et normalt nivå av arbeidskapital. Avvik justerer kjøpesummen."]
      ],
      personal: {
        high: n => `For ${n} bør du regne med at en betydelig del av prisen, ofte 20–40 %, gjøres betinget gjennom earn-out, og at du forventes å bli værende i 2–3 år.`,
        medium: n => `For ${n} bør du regne med et mindre tilleggsvederlag og en overgangsperiode på 6–12 måneder.`,
        low: n => `For ${n} kan hoveddelen av prisen trolig betales kontant ved gjennomføring.`
      },
      s8: "8. Sjekkliste for due diligence",
      dd: [
        ["Økonomi", ["Årsregnskap for de siste 3–5 årene", "Månedsrapporter og budsjett for inneværende og forrige år", "Spesifikasjon av engangsposter og eierrelaterte kostnader", "Arbeidskapital per måned", "Ordrereserve og pipeline"]],
        ["Juridisk", ["Vedtekter, aksjeeierbok og styreprotokoller", "Vesentlige kunde- og leverandøravtaler", "Leieavtaler", "Pågående eller truende tvister", "Tillatelser og sertifiseringer"]],
        ["Kunder", ["Omsetning per kunde de siste tre årene", "Kundeavtaler og vilkår ved eierskifte", "Tap på fordringer og reklamasjoner"]],
        ["Ansatte", ["Organisasjonskart", "Arbeidsavtaler for nøkkelpersoner", "Tariffavtaler og pensjonsforpliktelser (OTP)", "Turnover og sykefravær"]],
        ["Skatt", ["Skattemeldinger og eventuelle bokettersyn", "MVA-meldinger og a-meldinger"]],
        ["IT og annet", ["Økonomi- og fagsystemer", "Immaterielle rettigheter og domener", "Forsikringer"]]
      ],
      s9: "9. Salgsprosessen", s9cols: ["Fase", "Tid", "Innhold"],
      phases: [
        ["Forberedelse", "1–3 mnd", "Verdivurdering, tiltak fra planen, sammenstilling av materiale"],
        ["Markedsføring", "1–2 mnd", "Anonym teaser, konfidensialitetsavtale (NDA), informasjonsmemorandum til utvalgte kjøpere"],
        ["Indikative bud", "3–6 uker", "Kjøpere gir bud, valg av kjøper, intensjonsavtale (LOI)"],
        ["Due diligence", "1–2 mnd", "Kjøper gjennomgår selskapet med støtte av et datarom"],
        ["Avtale og gjennomføring", "3–6 uker", "Forhandling av aksjekjøpsavtale (SPA), signering og gjennomføring (closing)"]
      ],
      s9total: "Total tid: normalt 6–9 måneder fra start til gjennomføring.",
      s10: "10. Neste steg",
      next: ["Start med tiltakene med kortest tidsramme: rapportering og avtaler.", "Gjør verdivurderingen på nytt på exitkompass.se hver sjette måned for å følge utviklingen.", "Book en gjennomgang med en partner i Adsco Capital Partners for å kvalitetssikre normaliseringen og planlegge prosessen."],
      discTitle: "Viktig informasjon",
      disc: "Denne rapporten er en indikativ verdivurdering basert på forenklede markedsmultipler og opplysningene som er gitt. Den viser verdien ved et salg til en kjøper og er ikke ment for skifte, arveoppgjør, tvist, innløsning eller skatteformål, der substansverdi eller andre metoder kan kreves. Den er ikke en fairness opinion, investeringsrådgivning eller en formell verdivurdering. Faktisk pris avhenger av kjøper, transaksjonsstruktur, arbeidskapital og resultatet av due diligence. Exitkompass leveres av Adsco Capital Partners.",
      industries: { saas: "Programvare / SaaS", healthtech: "Helseteknologi / medtech", itcons: "IT-konsulenter", health: "Helse og omsorg", bizserv: "Forretningstjenester og rådgivning", manuf: "Produksjon og industri", install: "Bygg og installasjon (VVS, elektro)", whole: "Engros og distribusjon", transport: "Transport og logistikk", retail: "Detaljhandel og netthandel", hosp: "Restaurant og reiseliv" },
      file: "Exitkompass-rapport"
    }
  };


  /* Benchmark findings when the report language differs from the company's country (SCB quartiles for SE, SSB averages for NO) */
  T.SE.fx = { NO: {
    benchTop: b => [`Rörelsemarginalen (${b.mg} %) ligger klart över snittet i branschen.`, `Snittet för ${b.n} aktiebolag i ${b.label} är ${b.ref} % (SSB ${b.year}). Lyft fram lönsamheten i försäljningsunderlaget.`],
    benchLow: b => [`Rörelsemarginalen (${b.mg} %) ligger klart under snittet i branschen.`, `Snittet i branschen är ${b.ref} % (SSB ${b.year}). Köparen frågar varför; visa vad som drar ner marginalen och hur den kan förbättras.`],
    benchOk: b => [`Rörelsemarginalen (${b.mg} %) ligger i linje med branschen.`, `Snittet för ${b.n} aktiebolag i ${b.label} är ${b.ref} % (SSB ${b.year}).`] } };
  T.NO.fx = { SE: {
    benchTop: b => [`Driftsmarginen (${b.mg} %) er blant den beste fjerdedelen i bransjen.`, `Sammenlignet med ${b.n} foretak i ${b.label} (SCB ${b.year}, median ${b.ref} %). Løft frem lønnsomheten i salgsmaterialet.`],
    benchLow: b => [`Driftsmarginen (${b.mg} %) er blant den svakeste fjerdedelen i bransjen.`, `Medianen for sammenlignbare foretak er ${b.ref} % (SCB ${b.year}). Kjøper vil spørre hvorfor; vis hva som trekker marginen ned og hvordan den kan bedres.`],
    benchOk: b => [`Driftsmarginen (${b.mg} %) er på nivå med bransjen.`, `Medianen for ${b.n} sammenlignbare foretak i ${b.label} er ${b.ref} % (SCB ${b.year}).`] } };


  /* Strategic value (section 6.1) */
  Object.assign(T.SE, {
    svTitle: "6.1 Strategiskt värde",
    svLevel: ["lågt", "måttligt", "högt"],
    svIntro: l => `Vi bedömer det strategiska intresset för bolaget som ${l}. En strategisk köpare – en konkurrent, kund, leverantör eller serieförvärvare – kan betala mer än det finansiella värdet när bolaget ger synergier i form av kunder, marknader, produkter, teknik eller kompetens.`,
    svDrv: { ind: n => `Branschen (${n}) har köpare som aktivt förvärvar och betalar för synergier.`, recur: "Återkommande intäkter som en köpare kan bygga vidare på.", growth: "Tillväxt som stärker en köpares egen plattform.", margin: "Marginal i branschens bästa fjärdedel.", cust: "En bred kundbas utan beroende av enskilda kunder.", buyers: "Aktiva serieförvärvare köper bolag i branschen." },
    svPrem: (r, a) => `Indikativt strategiskt påslag: ${r} över företagsvärdet, motsvarande ${a}.`,
    svNote: "Påslaget ingår inte i värderingen i avsnitt 2. Det förutsätter rätt köpare och en försäljningsprocess med flera intressenter, och betalas ofta delvis som tilläggsköpeskilling.",
    msgSv: (l, r) => `Det strategiska intresset bedöms som ${l}; en strategisk köpare kan betala cirka ${r} över företagsvärdet (avsnitt 6.1).`
  });
  Object.assign(T.NO, {
    svTitle: "6.1 Strategisk verdi",
    svLevel: ["lav", "moderat", "høy"],
    svIntro: l => `Vi vurderer den strategiske interessen for selskapet som ${l}. En strategisk kjøper – en konkurrent, kunde, leverandør eller serieoppkjøper – kan betale mer enn den finansielle verdien når selskapet gir synergier i form av kunder, markeder, produkter, teknologi eller kompetanse.`,
    svDrv: { ind: n => `Bransjen (${n}) har kjøpere som aktivt kjøper opp og betaler for synergier.`, recur: "Gjentakende inntekter som en kjøper kan bygge videre på.", growth: "Vekst som styrker kjøperens egen plattform.", margin: "Margin blant den beste fjerdedelen i bransjen.", cust: "En bred kundebase uten avhengighet av enkeltkunder.", buyers: "Aktive serieoppkjøpere kjøper selskaper i bransjen." },
    svPrem: (r, a) => `Indikativt strategisk påslag: ${r} over selskapsverdien, tilsvarende ${a}.`,
    svNote: "Påslaget er ikke med i verdivurderingen i avsnitt 2. Det forutsetter riktig kjøper og en salgsprosess med flere interessenter, og betales ofte delvis som tilleggsvederlag (earn-out).",
    msgSv: (l, r) => `Den strategiske interessen vurderes som ${l}; en strategisk kjøper kan betale om lag ${r} over selskapsverdien (avsnitt 6.1).`
  });


  /* Source of the base multiples and the size curve */
  const MON = { SE: ["januari","februari","mars","april","maj","juni","juli","augusti","september","oktober","november","december"], NO: ["januar","februar","mars","april","mai","juni","juli","august","september","oktober","november","desember"] };
  const ed = (m, l) => { const [y, mo] = String(m.edition).split("-"); return MON[l][Number(mo) - 1] + " " + y; };
  T.SE.srcLine = m => `Källa för branschmultiplar och storlekskurva: ${m.name} (${ed(m, "SE")}, enkät till nordiska M&A-rådgivare om affärer under ${m.period.replace("H1-", "första halvåret ").replace("H2-", "andra halvåret ")}). Vård och omsorg samt healthtech, omsättningsmultiplarna och justeringarna för bolagets egenskaper är Adsco Capital Partners bedömning.`;
  T.NO.srcLine = m => `Kilde for bransjemultipler og størrelseskurve: ${m.name} (${ed(m, "NO")}, undersøkelse blant nordiske M&A-rådgivere om transaksjoner i ${m.period.replace("H1-", "første halvår ").replace("H2-", "andre halvår ")}). Helse og omsorg samt helseteknologi, omsetningsmultiplene og justeringene for selskapets egenskaper er Adsco Capital Partners' vurdering.`;

  function clean(s) { return String(s).replace(/[  ]/g, " ").replace(/−/g, "-"); }

  function loadScript(src) {
    return new Promise((res, rej) => { const s = document.createElement("script"); s.src = src; s.onload = res; s.onerror = () => rej(new Error("Could not load " + src)); document.head.appendChild(s); });
  }
  let ready = null;
  function loadPdfMake() {
    if (!ready) ready = loadScript(PDFMAKE + "pdfmake.min.js").then(() => loadScript(PDFMAKE + "vfs_fonts.js")).then(() => window.pdfMake);
    return ready;
  }

  function findings(L, S) {
    const d = S.d, v = S.v, out = [];
    (d.textFlags || []).filter(f => f.sev !== "ok").forEach(f => L.tf && L.tf[f.key] && out.push([f.sev, L.tf[f.key]]));
    if (d.owner === "high") out.push(["bad", L.f.ownerHigh]); else if (d.owner === "medium") out.push(["warn", L.f.ownerMed]);
    if (d.mgmt === "none") out.push(["bad", L.f.mgmtNone]); else if (d.mgmt === "partial") out.push(["warn", L.f.mgmtPart]);
    if (d.topcust > 30) out.push(["bad", L.f.custHigh(d.topcust)]); else if (d.topcust > 15) out.push(["warn", L.f.custMed(d.topcust)]);
    if (d.contracts === "verbal") out.push(["bad", L.f.conVerbal]); else if (d.contracts === "mixed") out.push(["warn", L.f.conMixed]);
    const trend = d.eb[1] > 0 ? d.eb[2] / d.eb[1] - 1 : 0;
    if (trend < -0.1) out.push(["bad", L.f.trend(Math.round(-trend * 100))]);
    if (v.netDebt > v.ev * 0.5 && v.ev > 0) out.push(["bad", L.f.netDebt]);
    if (d.reporting === "annual") out.push(["warn", L.f.repAnnual]);
    if (v.salaryAdj < 0) out.push(["warn", L.f.salary(S.fmtT(-v.salaryAdj), S.unit)]);
    if (d.recur < 30) out.push(["warn", L.f.recurLow(d.recur)]);
    if (S.growth > 0.05) out.push(["ok", L.f.growth(Math.round(S.growth * 100))]);
    if (d.recur >= 30) out.push(["ok", L.f.recurOk(d.recur)]);
    if (d.buyers && d.buyers.length && L.f.buyers) out.push(["ok", L.f.buyers(d.buyers.join(", "), d.market || "")]);
    if (d.cycle && L.f.cycWeak) { if (d.cycle.state <= 1) out.push(["warn", L.f.cycWeak(d.cycle)]); else if (d.cycle.state >= 3) out.push(["ok", L.f.cycStrong(d.cycle)]); }
    const bm = d.bench;
    if (bm && bm.margin != null && bm.pos != null && L.f.benchTop) {
      const loc = L.loc || (bm.cc === "NO" ? "nb-NO" : "sv-SE"), f1 = x => (Math.round(x * 10) / 10).toLocaleString(loc);
      const bx = { mg: f1(bm.margin), ref: f1(bm.cc === "SE" ? bm.m[1] : bm.avg), n: Number(bm.n).toLocaleString(loc), label: bm.label, year: bm.year };
      const fb = (L.fx && L.fx[bm.cc]) || L.f;
      if (bm.pos === 3) out.push(["ok", fb.benchTop(bx)]); else if (bm.pos === 0) out.push(["warn", fb.benchLow(bx)]); else out.push(["ok", fb.benchOk(bx)]);
    }
    (d.textFlags || []).filter(f => f.sev === "ok").forEach(f => L.tf && L.tf[f.key] && out.push(["ok", L.tf[f.key]]));
    return out;
  }

  const tableLayout = {
    hLineWidth: (i, node) => (i === 0 ? 0 : 0.6), vLineWidth: () => 0,
    hLineColor: () => LINE, paddingTop: () => 5, paddingBottom: () => 5, paddingLeft: () => 4, paddingRight: () => 4
  };

  function buildDoc(S) {
    const L = S.lang === "EN" && T.EN ? (T.EN[S.country] || T.EN.SE) : T[S.lang || S.country];
    const loc = L.loc, cur = S.cur, unit = S.unit, MU = S.munit || " M" + cur, TU = S.munit ? unit : "T" + cur;
    const M = t => clean((t / 1000).toLocaleString(loc, { minimumFractionDigits: 1, maximumFractionDigits: 1 }) + MU);
    const N = t => clean(Math.round(t).toLocaleString(loc));
    const X = x => clean(x.toLocaleString(loc, { minimumFractionDigits: 1, maximumFractionDigits: 1 }) + "x");
    const SX = x => (x > 0 ? "+" : x < 0 ? "-" : "") + clean(Math.abs(x).toLocaleString(loc, { minimumFractionDigits: 2, maximumFractionDigits: 2 })) + "x";
    const P = x => clean(x.toLocaleString(loc, { minimumFractionDigits: 1, maximumFractionDigits: 1 })) + (L.pct || " %");
    S.fmtT = N;
    const d = S.d, v = S.v, name = d.name;
    const score = Math.round(S.fs.reduce((s, f) => s + f.w * f.s, 0));
    const level = score >= 70 ? 0 : score >= 45 ? 1 : 2;
    const today = clean(new Date().toLocaleDateString(loc, { year: "numeric", month: "long", day: "numeric" }));
    const H = right => ({ text: right, style: "th", alignment: "right" });
    const R = t => ({ text: t, alignment: "right" });
    const content = [];

    /* Cover */
    content.push(
      { text: [{ text: "Exit", color: INK }, { text: "kompass", color: ACCENT }], fontSize: 22, bold: true, margin: [0, 40, 0, 2] },
      { text: L.by, fontSize: 10, color: MUTED, margin: [0, 0, 0, 120] },
      { text: L.subtitle.toUpperCase(), fontSize: 10, color: BRASS, bold: true, characterSpacing: 1.5 },
      { text: L.title, fontSize: 30, bold: true, margin: [0, 6, 0, 6] },
      { text: name, fontSize: 18, color: ACCENT, margin: [0, 0, 0, S.sample ? 8 : 40] },
      ...(S.sample ? [{ text: L.sampleNote || "", fontSize: 10, color: BRASS, bold: true, margin: [0, 0, 0, 24] }] : []),
      {
        table: { widths: [120, "*"], body: [
          [{ text: L.industry, color: MUTED }, L.industries[d.industry]],
          ...(S.orgNumber ? [[{ text: L.org, color: MUTED }, S.orgNumber]] : []),
          [{ text: L.date, color: MUTED }, today],
          ...(S.email ? [[{ text: L.preparedFor, color: MUTED }, S.email]] : [])
        ] }, layout: tableLayout
      },
      { text: L.confidential.toUpperCase(), fontSize: 9, color: MUTED, characterSpacing: 1.5, margin: [0, 160, 0, 0], pageBreak: "after" }
    );

    /* 1 Summary */
    const kv = [
      [L.kpi[0], M(v.eq)], [L.kpi[1], M(v.eqLo) + " – " + M(v.eqHi)], [L.kpi[2], M(v.ev)],
      [L.kpi[3], N(v.norm) + " " + TU], [L.kpi[4], X(v.mult)], [L.kpi[5], score + " / 100"], [L.kpi[6], M(S.ideal.eq)]
    ];
    if (S.blend && L.kpiBlend) kv.splice(2, 0, [L.kpiBlend, M(S.blend.eq)]);
    content.push({ text: L.s1, style: "h1" });
    content.push({
      table: { widths: ["*", "*"], body: kv.map(([k, val], i) => [{ text: k, color: MUTED }, { text: val, bold: i === 0 || i === kv.length - 1 || k === L.kpiBlend, alignment: "right", color: i === kv.length - 1 ? GOOD : INK }]) },
      layout: tableLayout, margin: [0, 0, 0, 14]
    });
    const msgs = [L.msgVal(name, M(v.eq), M(v.eqLo), M(v.eqHi), N(v.norm) + " " + TU, X(v.mult)), L.msgScore(score, L.levels[level])];
    if (S.plan.length) msgs.push(L.msgTop(L.actions[S.plan[0].key][0], M(S.plan[0].uplift)));
    if (S.ideal.eq - v.eq > 0) msgs.push(L.msgGap(M(S.ideal.eq), M(S.ideal.eq - v.eq)));
    if (S.blend && L.msgBlend) msgs.splice(1, 0, L.msgBlend(M(S.blend.eq), Math.round(S.blend.w * 100) + (L.pct || " %"), M(v.eq)));
    else if (S.gv) msgs.push(L.msgGv(M(S.gv.eqLo), M(S.gv.eqHi)));
    const svr = S.sv && L.svTitle ? Math.round(S.sv.prem[0] * 100) + "–" + Math.round(S.sv.prem[1] * 100) + (L.pct || " %") : "";
    if (svr && S.sv.level > 0) msgs.push(L.msgSv(L.svLevel[S.sv.level], svr));
    content.push({ ul: msgs, margin: [0, 0, 0, 0], style: "body" });

    /* 2 Valuation */
    content.push({ text: L.s2, style: "h1", pageBreak: "before" }, { text: L.method, style: "body" });
    if (L.srcLine && typeof MULT_SRC !== "undefined") content.push({ text: L.srcLine(MULT_SRC), style: "note" });
    if (L.basisHist) {
      const docs = [d.ltm && "ltm", S.gv && "budget", S.gw && S.gw.parts && S.gw.parts.some(p => p[0] === "plan") && "plan"].filter(Boolean).map(k => L.docN[k]);
      const lj = docs.length > 1 ? docs.slice(0, -1).join(", ") + (L.andWord || (S.lang === "EN" || L.loc === "en-GB" ? " and " : S.lang === "NO" ? " og " : " och ")) + docs[docs.length - 1] : docs[0];
      content.push({ text: docs.length ? L.basisDocs(lj) : L.basisHist, style: "body", margin: [0, 6, 0, 0] });
    }
    const margin = i => d.rev[i] > 0 ? P(d.eb[i] / d.rev[i] * 100) : "–";
    const nr = L.normRows, lt = d.ltm, E = lt ? [""] : [];
    const ltm = x => lt ? [x] : [];
    content.push({ text: L.normTitle + " (" + TU + ")", style: "h2" }, {
      table: { headerRows: 1, widths: ["*", 70, 70, 70].concat(lt ? [70] : []), body: [
        [{ text: "", style: "th" }, ...S.years.map(y => H(String(y))), ...ltm(H(L.ltmCol || "LTM"))],
        [nr[0], ...d.rev.map(x => R(N(x))), ...ltm(R(N(lt && lt.rev)))],
        [nr[1], ...d.eb.map(x => R(N(x))), ...ltm(R(N(lt && lt.eb)))],
        [nr[2], R(margin(0)), R(margin(1)), R(margin(2)), ...ltm(R(lt && lt.rev > 0 ? P(lt.eb / lt.rev * 100) : "–"))],
        [nr[3], R("–"), R("–"), R(N(d.oneoff)), ...E],
        lt ? [nr[4], R("–"), R("1"), R("2"), R("3")] : [nr[4], R("1"), R("2"), R("3")],
        [nr[5], "", "", ...E, R(N(v.weighted))],
        [nr[6], "", "", ...E, R((v.salaryAdj >= 0 ? "+" : "-") + N(Math.abs(v.salaryAdj)))],
        [{ text: nr[7], bold: true }, "", "", ...E, { text: N(v.norm), bold: true, alignment: "right" }]
      ] }, layout: tableLayout
    }, { text: L.normNote, style: "note" });
    if (lt && L.ltmNote) content.push({ text: L.ltmNote(lt.n, lt.prior), style: "note" });

    let run = v.base;
    const bridgeBody = [[{ text: L.bridgeCols[0], style: "th" }, H(L.bridgeCols[1]), H(L.bridgeCols[2])], [L.base, R(""), R(X(v.base))]];
    v.adj.filter(a => a.v !== 0).forEach(a => {
      run += a.v;
      bridgeBody.push([L.adj[a.key] + (a.key === "growth" ? " (" + P(S.growth * 100) + ")" : a.key === "rate" && S.d.rate ? " (" + (L.rateWord || (S.d.rate.src === "Norges Bank" ? "styringsrente " : "styrränta ")) + P(S.d.rate.rate) + ")" : a.key === "cycle" && S.d.cycle ? " (" + S.d.cycle.label.toLowerCase() + ")" : ""), { text: SX(a.v), alignment: "right", color: a.v > 0 ? GOOD : BAD }, R(X(run))]);
    });
    bridgeBody.push([{ text: L.final + (v.mult === 2.0 && run < 2.0 ? L.floor : ""), bold: true }, R(""), { text: X(v.mult), bold: true, alignment: "right" }]);
    content.push({ unbreakable: true, stack: [{ text: L.bridgeTitle, style: "h2" }, { table: { headerRows: 1, widths: ["*", 80, 80], body: bridgeBody }, layout: tableLayout }] });

    const RX = x => clean(x.toLocaleString(loc, { minimumFractionDigits: 2, maximumFractionDigits: 2 }) + "x");
    content.push({ unbreakable: true, stack: [{ text: L.blendTitle + " (" + TU + ")", style: "h2" }, {
      table: { headerRows: 1, widths: ["*", 70, 80, 50], body: [
        [{ text: L.blendCols[0], style: "th" }, H(L.blendCols[1]), H(L.blendCols[2]), H(L.blendCols[3])],
        [L.blendRows[0], R(X(v.mult)), R(N(v.evEb)), R(P(v.wEbitda * 100))],
        [L.blendRows[3], R(X(v.multEbit)), R(N(v.evEbit)), R(P(v.wEbit * 100))],
        [L.blendRows[1], R(RX(v.revMult)), R(N(v.evRev)), R(P(v.wRev * 100))],
        [{ text: L.blendRows[2], bold: true }, "", { text: N(v.ev), bold: true, alignment: "right" }, ""]
      ] }, layout: tableLayout }, { text: L.blendImp([v.norm > 0 && v.ev / v.norm <= v.mult * 2 ? X(v.ev / v.norm) : null, v.ebit > 0 && v.ev / v.ebit <= v.multEbit * 2 ? X(v.ev / v.ebit) : null, d.rev[2] > 0 ? RX(v.ev / d.rev[2]) : null]), style: "note", bold: true }, { text: L.blendNote, style: "note" }] });

    content.push({ unbreakable: true, stack: [{ text: L.eqTitle + " (" + TU + ")", style: "h2" }, {
      table: { widths: ["*", 100], body: [
        [L.eqRows[0], R(N(v.ev))], [L.eqRows[1], R("-" + N(d.debt))], [L.eqRows[2], R("+" + N(d.cash))],
        [{ text: L.eqRows[3], bold: true }, { text: N(v.eq), bold: true, alignment: "right" }]
      ] }, layout: tableLayout }] });

    const lowM = Math.max(1.5, v.mult - 0.75), highM = v.mult + 0.75;
    content.push({ unbreakable: true, stack: [{ text: L.scenTitle, style: "h2" }, {
      table: { headerRows: 1, widths: ["*", 90, 90, 90], body: [
        [{ text: "", style: "th" }, H(L.scenCols[0]), H(L.scenCols[1]), H(L.scenCols[2])],
        [L.scenRows[0], R(X(lowM)), R(X(v.mult)), R(X(highM))],
        [L.scenRows[1], R(M(v.evLo)), R(M(v.ev)), R(M(v.evHi))],
        [{ text: L.scenRows[2], bold: true }, { text: M(v.eqLo), alignment: "right", bold: true }, { text: M(v.eq), alignment: "right", bold: true }, { text: M(v.eqHi), alignment: "right", bold: true }]
      ] }, layout: tableLayout }] });

    const mults = [-1, -0.5, 0, 0.5, 1].map(x => Math.max(1.5, v.mult + x));
    const ebs = [-0.1, 0, 0.1];
    content.push({ unbreakable: true, stack: [{ text: L.sensTitle, style: "h2" }, {
      table: { headerRows: 1, widths: ["*", 66, 66, 66, 66, 66], body: [
        [{ text: "EBITDA", style: "th" }, ...mults.map(m => H(X(m)))],
        ...ebs.map(e => [
          (e > 0 ? "+" : e < 0 ? "-" : "±") + Math.abs(e * 100) + " %  (" + N(v.norm * (1 + e)) + ")",
          ...mults.map((m, j) => ({ text: M(Math.max(0, (1 - v.wRev) * Math.max(0, v.norm * (1 + e)) * m * v.k + v.wRev * v.evRev - v.netDebt)), alignment: "right", bold: e === 0 && j === 2, fillColor: e === 0 && j === 2 ? SOFT : null }))
        ])
      ] }, layout: tableLayout, fontSize: 9 }, { text: L.sensNote, style: "note" }] });

    if (S.gv) {
      const g = S.gv, yy = S.years[2];
      content.push({ unbreakable: true, stack: [{ text: L.gvTitle, style: "h2" }, { text: L.gvIntro, style: "body" }, {
        table: { headerRows: 1, widths: ["*", 80, 80, 80], body: [
          [{ text: TU, style: "th" }, H(String(yy + 1)), H(String(yy + 2)), H(String(yy + 3))],
          [L.gvRows[0], ...g.rev.map(x => R(N(x)))],
          [L.gvRows[1] + " " + P(g.margin * 100), ...g.rev.map(x => R(N(x * g.margin)))]
        ] }, layout: tableLayout, margin: [0, 4, 0, 8] }, {
        table: { widths: ["*", 110], body: [
          [L.gvVal[0], R(M(g.evExit))],
          [L.gvVal[1], R(P(g.rate * 100))],
          [L.gvVal[2], R(clean(g.disc.toLocaleString(loc, { maximumFractionDigits: 2 })))],
          [L.gvVal[3], R(M(g.pv))],
          [{ text: L.gvVal[4], bold: true }, { text: M(g.eq), bold: true, alignment: "right", color: GOOD }],
          [L.gvVal[5], R(M(g.eqLo) + " – " + M(g.eqHi))],
          [L.gvVal[6], R(M(v.eq))]
        ] }, layout: tableLayout }] });
      if (S.blend && L.gwTitle) {
        const b = S.blend, pc = x => Math.round(x * 100) + (L.pct || " %");
        const parts = S.gw.parts.map(p => { const f = L.gwPart[p[0]]; return typeof f === "function" ? (p[0] === "stretch" ? f(pc(p[2]), pc(Math.max(0, p[3]))) : f(pc(p[2]))) : f; });
        content.push({ unbreakable: true, stack: [{ text: L.gwTitle, bold: true, fontSize: 10.5, margin: [0, 10, 0, 4] }, {
          table: { widths: ["*", 110], body: [
            [L.gwRows[0], R(M(v.eq))],
            [L.gwRows[1], R(M(g.eq))],
            [L.gwRows[2], R(pc(b.w))],
            [{ text: L.gwRows[3], bold: true }, { text: M(b.eq), bold: true, alignment: "right", color: GOOD }],
            [L.gwRows[4], R(M(b.eqLo) + " – " + M(b.eqHi))]
          ] }, layout: tableLayout }, { ul: parts, style: "note", margin: [0, 4, 0, 2] }, { text: L.gwNote, style: "note" }] });
      }
    }

    if (S.deals && S.deals.deals && S.deals.deals.length >= 3 && L.dealsTitle) {
      const dl = S.deals, band = e => { const m = e / 1000, b = [[0, 1], [1, 2], [2, 5], [5, 10], [10, 25], [25, 50], [50, 100]].find(x => m < x[1]) || [100, null];
        return b[1] ? b[0] + "–" + b[1] + MU : "> 100" + MU; };
      content.push({ unbreakable: true, stack: [{ text: L.dealsTitle(S.gv ? "2.8" : "2.7"), style: "h2" }, { text: L.dealsIntro(dl.n, X(dl.median)), style: "body" }, {
        table: { headerRows: 1, widths: [50, "*", "*", 90], body: [
          [{ text: L.dealsCols[0], style: "th" }, { text: L.dealsCols[1], style: "th" }, { text: L.dealsCols[2], style: "th" }, H(L.dealsCols[3])],
          ...dl.deals.map(x => [String(x.year || "–"), L.dealsCc[x.cc] || x.cc || "–", band(x.ebitda), R(X(x.mult))])
        ] }, layout: tableLayout, margin: [0, 4, 0, 6] }, { text: L.dealsCmp(X(v.mult), X(dl.median)), style: "note" }] });
    }

    /* 3 Readiness */
    content.push({ text: L.s3, style: "h1", pageBreak: "before" }, { text: L.s3intro, style: "body" });
    content.push({ text: [{ text: String(score), fontSize: 36, bold: true, color: level === 0 ? GOOD : level === 1 ? WARN : BAD }, { text: " / 100", fontSize: 14, color: MUTED }], margin: [0, 4, 0, 10] });
    content.push({
      table: { headerRows: 1, widths: ["*", 50, 50, 90], body: [
        [{ text: L.s3cols[0], style: "th" }, H(L.s3cols[1]), H(L.s3cols[2]), { text: L.s3cols[3], style: "th" }],
        ...S.fs.map((f, i) => {
          const g = f.s >= 0.75 ? 0 : f.s >= 0.45 ? 1 : 2;
          return [L.factors[i], R(String(Math.round(f.w * f.s))), R(String(f.w)), { text: L.grade[g], color: [GOOD, WARN, BAD][g], bold: true }];
        })
      ] }, layout: tableLayout
    });

    /* 4 Findings */
    content.push({ text: L.s4, style: "h1" });
    const fl = findings(L, S);
    content.push({
      table: { headerRows: 1, widths: [150, "*"], body: [
        [{ text: L.s4cols[0], style: "th" }, { text: L.s4cols[1], style: "th" }],
        ...fl.map(([k, [t, a]]) => [{ text: t, bold: true, color: k === "bad" ? BAD : k === "warn" ? WARN : GOOD }, a])
      ] }, layout: tableLayout
    });

    /* 5 Value plan */
    content.push({ text: L.s5, style: "h1", pageBreak: "before" }, { text: L.s5intro(M(S.ideal.eq)), style: "body" });
    S.plan.forEach((p, idx) => {
      const [title, steps] = L.actions[p.key];
      content.push({
        unbreakable: true, margin: [0, 6, 0, 6], stack: [
          { columns: [
            { text: (idx + 1) + ". " + title, bold: true, fontSize: 12, width: "*" },
            { text: "+" + M(p.uplift), bold: true, color: GOOD, alignment: "right", width: 100 }
          ] },
          { text: L.s5fields[1] + ": " + p.time.replace("months", L.months), color: MUTED, fontSize: 9, margin: [0, 2, 0, 4] },
          { ol: steps, style: "body", margin: [0, 0, 0, 0] }
        ]
      });
    });
    const phaseOf = { reporting: 0, contracts: 0, owner: 1, mgmt: 1, recur: 1, cust: 2 };
    const road = [[], [], []];
    S.plan.forEach(p => road[phaseOf[p.key]].push(L.actions[p.key][0]));
    content.push({ unbreakable: true, stack: [{ text: L.roadTitle, style: "h2" }, {
      table: { headerRows: 1, widths: [110, "*"], body: [
        [{ text: L.roadCols[0], style: "th" }, { text: L.roadCols[1], style: "th" }],
        ...road.map((items, i) => [{ text: L.roadPeriods[i], bold: true }, items.length ? items.join(", ") : "–"])
      ] }, layout: tableLayout }] });

    /* 6 Buyers */
    const n = v.norm, mg = d.mgmt;
    const fits = [
      n >= 2000 ? 0 : 1,
      n >= 10000 && mg === "full" ? 0 : n >= 5000 && mg !== "none" ? 1 : 2,
      n < 8000 ? 0 : 1,
      mg === "full" ? 0 : mg === "partial" ? 1 : 2
    ];
    const deltas = [0.5, 0, -0.5, -0.75];
    content.push({ text: L.s6, style: "h1", pageBreak: "before" }, { text: L.s6intro, style: "body" }, {
      table: { headerRows: 1, widths: [100, "*", "*", 55, 50], body: [
        L.s6cols.map((c, i) => ({ text: c, style: "th", alignment: i === 3 ? "right" : "left" })),
        ...L.buyers.map((b, i) => [{ text: b[0], bold: true }, b[1], b[2], R(X(Math.max(1.5, v.mult + deltas[i]))), { text: L.fit[fits[i]], bold: true, color: [GOOD, WARN, BAD][fits[i]] }])
      ] }, layout: tableLayout, fontSize: 9
    });

    if (svr) {
      content.push({ text: L.svTitle, style: "h2" }, { text: L.svIntro(L.svLevel[S.sv.level]), style: "body" });
      if (S.sv.drivers.length) content.push({ ul: S.sv.drivers.map(k => typeof L.svDrv[k] === "function" ? L.svDrv[k](L.industries[d.industry]) : L.svDrv[k]), margin: [0, 0, 0, 8] });
      content.push({ text: L.svPrem(svr, M(S.sv.evLo) + " – " + M(S.sv.evHi)), bold: true, margin: [0, 0, 0, 4] }, { text: L.svNote, style: "note" });
    }

    /* 7 Structure */
    content.push({ text: L.s7, style: "h1" }, { text: L.s7intro, style: "body" }, {
      table: { widths: [140, "*"], body: L.terms.map(([k, t]) => [{ text: k, bold: true }, t]) }, layout: tableLayout
    }, { text: L.personal[d.owner](name), style: "callout" });

    /* 8 DD checklist */
    content.push({ text: L.s8, style: "h1", pageBreak: "before" });
    L.dd.forEach(([g, items]) => content.push(
      { text: g, style: "h2" },
      { ul: items, style: "body", margin: [0, 0, 0, 0] }
    ));

    /* 9 Process */
    content.push({ text: L.s9, style: "h1", pageBreak: "before" }, {
      table: { headerRows: 1, widths: [110, 70, "*"], body: [
        L.s9cols.map(c => ({ text: c, style: "th" })),
        ...L.phases.map(p => [{ text: p[0], bold: true }, p[1], p[2]])
      ] }, layout: tableLayout
    }, { text: L.s9total, style: "note" });

    /* 10 Next steps + disclaimer */
    content.push({ text: L.s10, style: "h1" }, { ol: L.next, style: "body" },
      { text: L.discTitle, style: "h2", margin: [0, 30, 0, 4] }, { text: L.disc, style: "note" });

    return {
      pageSize: "A4", pageMargins: [50, 56, 50, 60],
      ...(S.sample ? { watermark: { text: L.sampleWm || "EXEMPEL", color: "#0f3b45", opacity: 0.06, bold: true, angle: -45 } } : {}),
      info: { title: L.file + " – " + name, author: "Exitkompass" },
      footer: (p, total) => p === 1 ? null : ({
        columns: [{ text: "Exitkompass " + L.by + " · exitkompass.se · " + L.confidential, color: MUTED, fontSize: 8 }, { text: p + " / " + total, alignment: "right", color: MUTED, fontSize: 8 }],
        margin: [50, 24, 50, 0]
      }),
      content,
      styles: {
        h1: { fontSize: 18, bold: true, color: ACCENT, margin: [0, 0, 0, 10] },
        h2: { fontSize: 12, bold: true, margin: [0, 16, 0, 6] },
        th: { fontSize: 8, bold: true, color: MUTED },
        body: { margin: [0, 0, 0, 8] },
        note: { fontSize: 8.5, color: MUTED, margin: [0, 6, 0, 0] },
        callout: { margin: [0, 12, 0, 0], color: BRASS, bold: true }
      },
      defaultStyle: { font: "Roboto", fontSize: 10, lineHeight: 1.3, color: INK }
    };
  }

  window.ExitkompassReport = {
    async generate(S) {
      const pm = await loadPdfMake();
      const doc = buildDoc(S);
      const blob = await new Promise((res, rej) => { try { pm.createPdf(doc).getBlob(res); } catch (e) { rej(e); } });
      const safe = S.d.name.replace(/[^\p{L}\p{N} _-]/gu, "").trim().replace(/\s+/g, "-") || "rapport";
      return { blob, filename: (S.lang === "EN" && T.EN ? (T.EN[S.country] || T.EN.SE) : T[S.lang || S.country]).file + "-" + safe + ".pdf" };
    },
    _buildDoc: buildDoc,
    T,
    findings
  };
})();

