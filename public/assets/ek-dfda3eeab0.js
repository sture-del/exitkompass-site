
/* ---------- UI texts: Swedish and Norwegian ---------- */
const UI = {
  SE: {
    html: "sv", by: "av Adsco Capital Partners",
    h1: "Vad är ditt företag värt för en köpare, och hur höjer du värdet?",
    heroP: "Ladda upp din årsredovisning eller fyll i tre års siffror och svara på sju frågor. Du får ett indikativt värdeintervall, en poäng för exitberedskap och de åtgärder som höjer värdet mest inför en försäljning.",
    step1: "Ladda upp årsredovisningen (PDF) eller fyll i omsättning och EBITDA i TSEK.",
    step2: "Svara på köparens frågor om ägarberoende, kunder och avtal.",
    step3: "Läs din värdering och beställ den fullständiga rapporten.",
    dropTitle: "Ladda upp din årsredovisning (PDF)",
    dropSub: "Vi läser av omsättning, EBITDA, kassa, skulder och VD-lön för upp till tre år. Dra filen hit eller klicka för att välja.",
    or: "eller fyll i siffrorna själv",
    legCompany: "Företag", name: "Företagsnamn", industry: "Bransch",
    legFin: "Siffror (TSEK)", yYear: "År", yRev: "Omsättning",
    ownsal: "Utbetald ägarlön", mktsal: "Marknadslön för VD",
    oneoff: y => `Engångskostnader ${y} (återläggs)`,
    debt: "Räntebärande skulder", cash: "Likvida medel",
    salHint: "Lönerna anges inklusive arbetsgivaravgifter.",
    legBuyer: "Köparens frågor",
    topcust: "Största kund, % av omsättningen", recur: "Återkommande intäkter, %",
    ownerQ: "Om du var borta i tre månader skulle verksamheten…",
    owner: ["Få problem: viktiga kunder och beslut går via mig", "Klara sig, med vissa störningar", "Fungera som vanligt"],
    mgmtQ: "Ledning under ägaren", mgmt: ["Ingen, jag leder allt", "Delvis: en eller två nyckelpersoner", "Fullständig ledningsgrupp med tydliga roller"],
    repQ: "Finansiell rapportering", reporting: ["Endast årsbokslut", "Kvartalsrapporter", "Månadsrapporter med budgetuppföljning"],
    conQ: "Avtal med kunder och leverantörer", contracts: ["Mest muntliga eller informella", "Blandat", "Skriftliga och överförbara till en ny ägare"],
    update: "Uppdatera värderingen", example: "Visa exempel",
    rTitle: n => `${n}: värdering`, rMeta: (i, u) => `${i} · belopp i ${u} om inget annat anges`,
    kEq: "Aktievärde (till ägaren)", kEqSub: (m, nd) => `Mittpunkt ${m} efter nettoskuld på ${nd}`,
    kEv: "Företagsvärde", kEvSub: "Före nettoskuld. Multipel och justeringar finns i rapporten.",
    kPot: "Värde om exitklar", kPotSub: g => `+${g} vid dagens resultat`, kPotNone: "Redan nära bästa nivå",
    scoreH: "Exitberedskap", scoreHint: "Så skulle en köpares due diligence-team bedöma bolaget i dag, av 100.",
    flagsH: "Det här kommer en köpare att lyfta fram", flagsHint: "De tre viktigaste fynden. Rapporten tar upp alla, med åtgärder för vart och ett.",
    more: n => `+ ${n} fynd till i <a href="#order" target="_self">den fullständiga rapporten</a>.`,
    noFlags: "Inga större varningsflaggor utifrån de uppgifter du lämnat.",
    planH: "Värdeskapandeplan", planHint: "Din mest värdefulla åtgärd visas gratis. Rapporten rangordnar alla åtgärder med värde, steg och tidsplan.",
    planCols: ["Åtgärd", "Tidsram", "Värdeökning"], inReport: "I rapporten",
    planNone: "Bolaget har redan god nivå på de viktigaste värdedrivarna. Nästa steg är att förbereda försäljningsprocessen.",
    buildH: "Så är värderingen uppbyggd", buildHint: "Från branschens basmultipel för svenska bolag till ditt bolags multipel, och normaliseringen av EBITDA.",
    veil: "Multipelbrygga och normaliserad EBITDA finns i rapporten",
    yours: "Din multipel", floor: " (golv)",
    sizeLbl: n => `Storlek (EBITDA ${n})`, growthLbl: p => `Omsättningstillväxt (${p} % per år)`,
    upsellH: "Beställ den fullständiga rapporten",
    upsellP: "En PDF-rapport på svenska från Adsco Capital Partners: fullständig värdering med scenarier och känslighetsanalys, alla köparens fynd, en värdeskapandeplan med steg och tidsplan, köpartyper, affärsstruktur, checklista för due diligence och försäljningsprocessen.",
    cmpFree: "Gratis", freeList: ["Intervall för aktievärdet", "Poäng för exitberedskap", "De tre viktigaste fynden", "Din mest värdefulla åtgärd"],
    cmpPaid: p => `Rapport · ${p}`,
    paidList: ["Punktvärdering med låg-, bas- och högscenario", "Känslighetsanalys", "Multipelbrygga och normalisering av EBITDA", "Alla fynd med åtgärder", "Komplett värdeskapandeplan med steg och tidsplan", "Köpartyper, vad de betalar för och indikativa multiplar", "Checklista för due diligence", "Försäljningsprocess och affärsstruktur"],
    emailPh: "du@foretag.se", order: p => `Beställ rapporten · ${p}`,
    pricingH: "Priser", vat: "exkl. moms", free: "Gratis", prices: ["2 995 kr", "6 995 kr"],
    plans: [
      ["Snabbvärdering", ["Ladda upp årsredovisningen", "Indikativt värdeintervall", "Poäng för exitberedskap"]],
      ["Rapport", ["Allt i snabbvärderingen", "PDF-rapport på svenska", "Värdeskapandeplan på 12–24 månader", "Köpartyper och försäljningsprocess"]],
      ["Rapport + genomgång med partner", ["Allt i rapporten", "60 minuter med en partner på Adsco Capital Partners", "Granskning av dina normaliseringar"]]
    ],
    aboutH: "Seniora rådgivare bakom varje värdering",
    aboutP: "Exitkompass är utvecklat av Adsco Capital Partners, en partnerägd och oberoende rådgivningsfirma inom M&A och kapitalmarknad med huvudkontor i Stockholm. Vi arbetar med ägare, grundare och investerare på den nordiska mellanmarknaden, från första strategiska samtal till tillträde.",
    stats: [["60+", "års samlad erfarenhet av kapitalmarknaden"], ["5", "nordiska börsnoteringar ledda, 2016–2022"], ["2", "seniora partners i varje affär"], ["Oberoende", "partnerägt, utan utlåning eller analys"]],
    aboutCta: "Funderar du på att sälja?", aboutLink: "Boka ett kostnadsfritt, konfidentiellt möte med en partner →",
    disc: "Exitkompass ger indikativa värderingar baserade på förenklade marknadsmultiplar och de uppgifter du lämnar. Det är inte en fairness opinion, investeringsrådgivning eller en formell värdering. Det faktiska priset beror på köpare, affärsstruktur (tilläggsköpeskilling, säljarrevers), rörelsekapital och resultatet av due diligence.",
    privacy: "Uppladdade årsredovisningar skickas krypterat till AI-tjänsten Claude (Anthropic) enbart för att läsa av siffrorna och sparas inte av Exitkompass. Betalning hanteras av Stripe.",
    foot: "Exitkompass av Adsco Capital Partners · Stockholm",
    st: {
      preparing: "Förbereder betalningen…",
      pay: "Öppna beställningsformuläret →",
      payNote: e => `Du betalar med kort via Stripe. Rapporten skickas till ${e} direkt efter betalningen.`,
      checkoutFail: "Det gick inte att starta betalningen. Försök igen om en stund.",
      tooBig: "Filen är för stor. Ladda upp en PDF på högst 20 MB.",
      config: "Tjänsten är inte färdigkonfigurerad. Kontakta Adsco Capital Partners.",
      reading: f => `Läser <strong>${f}</strong>…`, scan: "PDF:en är inskannad. Läser sidorna som bilder…", finding: "Letar efter omsättning, EBITDA, kassa och skulder…",
      noReader: "Uppladdning fungerar inte i den här vyn. Fyll i siffrorna i formuläret i stället.",
      scanNoImg: "PDF:en är inskannad och bildläsning är inte tillgänglig här. Fyll i siffrorna manuellt.",
      badType: "Ladda upp en PDF eller ett foto (PNG eller JPG) av resultaträkningen.",
      notGranted: "Uppladdning kräver ditt godkännande. Ladda upp filen igen och tillåt det, eller fyll i siffrorna manuellt.",
      rate: "För många uppladdningar på kort tid. Vänta en minut och försök igen.",
      generic: "Något gick fel när rapporten lästes. Fyll i siffrorna manuellt.",
      unreadable: "Rapporten kunde inte läsas. Fyll i siffrorna manuellt.",
      noFigures: "Inga siffror från resultaträkningen hittades. Kontrollera att det är hela årsredovisningen, eller fyll i siffrorna manuellt.",
      got: (n, o) => `Siffror hämtade ur årsredovisningen${n ? " för " + n : ""}${o ? " (" + o + ")" : ""}.`,
      green: "Gröna fält kommer från rapporten.",
      missing: l => `Gula fält fanns inte i rapporten och har kopierats från närmaste år: ${l}.`,
      salary: p => `Ägarlönen inkluderar arbetsgivaravgifter på cirka ${p} %.`,
      check: "Kontrollera siffrorna och svara sedan på köparens frågor.",
      revL: "Omsättning",
      badEmail: e => `Ange en giltig e-postadress, till exempel ${e}.`,
      building: e => `Prototyp: ingen betalning tas. Skapar rapporten som skulle skickas till ${e}…`,
      done: f => `Rapporten är klar: ${f}. I den skarpa versionen skickas den via e-post efter betalning.`,
      declined: "Nedladdningen avbröts. Klicka på knappen igen för att spara rapporten.",
      noDl: "Nedladdning är inte tillgänglig i den här vyn.",
      buildFail: "Rapporten kunde inte skapas."
    }
  },
  NO: {
    html: "nb", by: "av Adsco Capital Partners",
    h1: "Hva er selskapet ditt verdt for en kjøper, og hvordan øker du verdien?",
    heroP: "Last opp årsregnskapet eller fyll inn tre års tall og svar på sju spørsmål. Du får et indikativt verdiintervall, en poengsum for salgsklarhet og tiltakene som øker verdien mest før et salg.",
    step1: "Last opp årsregnskapet (PDF) eller fyll inn driftsinntekter og EBITDA i TNOK.",
    step2: "Svar på kjøperens spørsmål om eieravhengighet, kunder og avtaler.",
    step3: "Les verdivurderingen og bestill den fullstendige rapporten.",
    dropTitle: "Last opp årsregnskapet (PDF)",
    dropSub: "Vi henter ut driftsinntekter, EBITDA, bankinnskudd, gjeld og lønn til daglig leder for opptil tre år. Dra filen hit eller klikk for å velge.",
    or: "eller fyll inn tallene selv",
    legCompany: "Selskap", name: "Selskapsnavn", industry: "Bransje",
    legFin: "Tall (TNOK)", yYear: "År", yRev: "Driftsinntekter",
    ownsal: "Utbetalt eierlønn", mktsal: "Markedslønn for daglig leder",
    oneoff: y => `Engangskostnader ${y} (tilbakeføres)`,
    debt: "Rentebærende gjeld", cash: "Bankinnskudd og kontanter",
    salHint: "Lønn oppgis inkludert arbeidsgiveravgift.",
    legBuyer: "Kjøperens spørsmål",
    topcust: "Største kunde, % av omsetningen", recur: "Gjentakende inntekter, %",
    ownerQ: "Hvis du var borte i tre måneder, ville virksomheten…",
    owner: ["Få problemer: viktige kunder og beslutninger går via meg", "Klare seg, med noen forstyrrelser", "Gå som normalt"],
    mgmtQ: "Ledelse under eier", mgmt: ["Ingen, jeg leder alt", "Delvis: én eller to nøkkelpersoner", "Full ledergruppe med tydelige roller"],
    repQ: "Finansiell rapportering", reporting: ["Kun årsregnskap", "Kvartalsrapporter", "Månedsrapporter med budsjettoppfølging"],
    conQ: "Avtaler med kunder og leverandører", contracts: ["Stort sett muntlige eller uformelle", "Blandet", "Skriftlige og overførbare til en ny eier"],
    update: "Oppdater verdivurderingen", example: "Vis eksempel",
    rTitle: n => `${n}: verdivurdering`, rMeta: (i, u) => `${i} · beløp i ${u} hvis ikke annet er oppgitt`,
    kEq: "Aksjeverdi (til eier)", kEqSub: (m, nd) => `Midtpunkt ${m} etter netto gjeld på ${nd}`,
    kEv: "Selskapsverdi", kEvSub: "Før netto gjeld. Multippel og justeringer finnes i rapporten.",
    kPot: "Verdi ved full salgsklarhet", kPotSub: g => `+${g} på dagens resultat`, kPotNone: "Allerede nær beste nivå",
    scoreH: "Salgsklarhet", scoreHint: "Slik ville en kjøpers due diligence-team vurdert selskapet i dag, av 100.",
    flagsH: "Dette vil en kjøper påpeke", flagsHint: "De tre viktigste funnene. Rapporten tar for seg alle, med tiltak for hvert av dem.",
    more: n => `+ ${n} funn til i <a href="#order" target="_self">den fullstendige rapporten</a>.`,
    noFlags: "Ingen store varsellamper ut fra opplysningene du har gitt.",
    planH: "Verdiskapingsplan", planHint: "Det mest verdifulle tiltaket vises gratis. Rapporten rangerer alle tiltak med verdi, trinn og tidsplan.",
    planCols: ["Tiltak", "Tidsramme", "Verdiøkning"], inReport: "I rapporten",
    planNone: "Selskapet scorer allerede godt på de viktigste verdidriverne. Neste steg er å forberede salgsprosessen.",
    buildH: "Slik er verdivurderingen bygget opp", buildHint: "Fra bransjens basismultippel for norske selskaper til selskapets multippel, og normaliseringen av EBITDA.",
    veil: "Multippelbro og normalisert EBITDA finnes i rapporten",
    yours: "Din multippel", floor: " (gulv)",
    sizeLbl: n => `Størrelse (EBITDA ${n})`, growthLbl: p => `Omsetningsvekst (${p} % per år)`,
    upsellH: "Bestill den fullstendige rapporten",
    upsellP: "En PDF-rapport på norsk fra Adsco Capital Partners: fullstendig verdivurdering med scenarioer og sensitivitetsanalyse, alle kjøperens funn, en verdiskapingsplan med trinn og tidsplan, kjøpertyper, transaksjonsstruktur, sjekkliste for due diligence og salgsprosessen.",
    cmpFree: "Gratis", freeList: ["Intervall for aksjeverdien", "Poengsum for salgsklarhet", "De tre viktigste funnene", "Det mest verdifulle tiltaket"],
    cmpPaid: p => `Rapport · ${p}`,
    paidList: ["Punktverdi med lavt, basis- og høyt scenario", "Sensitivitetsanalyse", "Multippelbro og normalisering av EBITDA", "Alle funn med tiltak", "Komplett verdiskapingsplan med trinn og tidsplan", "Kjøpertyper, hva de betaler for og indikative multipler", "Sjekkliste for due diligence", "Salgsprosess og transaksjonsstruktur"],
    emailPh: "deg@selskap.no", order: p => `Bestill rapporten · ${p}`,
    pricingH: "Priser", vat: "eks. mva.", free: "Gratis", prices: ["2 995 kr", "6 995 kr"],
    plans: [
      ["Hurtigvurdering", ["Last opp årsregnskapet", "Indikativt verdiintervall", "Poengsum for salgsklarhet"]],
      ["Rapport", ["Alt i hurtigvurderingen", "PDF-rapport på norsk", "Verdiskapingsplan for 12–24 måneder", "Kjøpertyper og salgsprosess"]],
      ["Rapport + gjennomgang med partner", ["Alt i rapporten", "60 minutter med en partner i Adsco Capital Partners", "Gjennomgang av normaliseringene dine"]]
    ],
    aboutH: "Seniore rådgivere bak hver verdivurdering",
    aboutP: "Exitkompass er utviklet av Adsco Capital Partners, et partnereid og uavhengig rådgivningsselskap innen M&A og kapitalmarkeder med hovedkontor i Stockholm. Vi arbeider med eiere, gründere og investorer i det nordiske mellommarkedet, fra den første strategiske samtalen til gjennomføring.",
    stats: [["60+", "års samlet erfaring fra kapitalmarkedet"], ["5", "nordiske børsnoteringer ledet, 2016–2022"], ["2", "seniorpartnere i hver transaksjon"], ["Uavhengig", "partnereid, uten utlån eller analyse"]],
    aboutCta: "Vurderer du å selge?", aboutLink: "Bestill et kostnadsfritt, konfidensielt møte med en partner →",
    disc: "Exitkompass gir indikative verdivurderinger basert på forenklede markedsmultipler og opplysningene du gir. Det er ikke en fairness opinion, investeringsrådgivning eller en formell verdivurdering. Faktisk pris avhenger av kjøper, transaksjonsstruktur (tilleggsvederlag, selgerkreditt), arbeidskapital og resultatet av due diligence.",
    privacy: "Opplastede årsregnskap sendes kryptert til AI-tjenesten Claude (Anthropic) kun for å hente ut tallene og lagres ikke av Exitkompass. Betaling håndteres av Stripe.",
    foot: "Exitkompass av Adsco Capital Partners · Stockholm",
    st: {
      preparing: "Forbereder betalingen…",
      pay: "Åpne bestillingsskjemaet →",
      payNote: e => `Du betaler med kort via Stripe. Rapporten sendes til ${e} rett etter betalingen.`,
      checkoutFail: "Kunne ikke starte betalingen. Prøv igjen om litt.",
      tooBig: "Filen er for stor. Last opp en PDF på maks 20 MB.",
      config: "Tjenesten er ikke ferdig konfigurert. Kontakt Adsco Capital Partners.",
      reading: f => `Leser <strong>${f}</strong>…`, scan: "PDF-en er skannet. Leser sidene som bilder…", finding: "Leter etter driftsinntekter, EBITDA, bankinnskudd og gjeld…",
      noReader: "Opplasting fungerer ikke i denne visningen. Fyll inn tallene i skjemaet i stedet.",
      scanNoImg: "PDF-en er skannet, og bildelesing er ikke tilgjengelig her. Fyll inn tallene manuelt.",
      badType: "Last opp en PDF eller et bilde (PNG eller JPG) av resultatregnskapet.",
      notGranted: "Opplasting krever din godkjenning. Last opp filen på nytt og tillat det, eller fyll inn tallene manuelt.",
      rate: "For mange opplastinger på kort tid. Vent et minutt og prøv igjen.",
      generic: "Noe gikk galt da rapporten ble lest. Fyll inn tallene manuelt.",
      unreadable: "Rapporten kunne ikke leses. Fyll inn tallene manuelt.",
      noFigures: "Fant ingen tall fra resultatregnskapet. Sjekk at det er hele årsregnskapet, eller fyll inn tallene manuelt.",
      got: (n, o) => `Tall hentet fra årsregnskapet${n ? " for " + n : ""}${o ? " (" + o + ")" : ""}.`,
      green: "Grønne felt kommer fra rapporten.",
      missing: l => `Gule felt fantes ikke i rapporten og er kopiert fra nærmeste år: ${l}.`,
      salary: p => `Eierlønnen inkluderer arbeidsgiveravgift på om lag ${p} %.`,
      check: "Kontroller tallene, og svar deretter på kjøperens spørsmål.",
      revL: "Driftsinntekter",
      badEmail: e => `Oppgi en gyldig e-postadresse, for eksempel ${e}.`,
      building: e => `Prototyp: ingen betaling trekkes. Lager rapporten som ville blitt sendt til ${e}…`,
      done: f => `Rapporten er klar: ${f}. I den ferdige versjonen sendes den på e-post etter betaling.`,
      declined: "Nedlastingen ble avbrutt. Klikk på knappen igjen for å lagre rapporten.",
      noDl: "Nedlasting er ikke tilgjengelig i denne visningen.",
      buildFail: "Rapporten kunne ikke lages."
    }
  }
};
/* ---------- Wizard texts (added to UI) ---------- */
Object.assign(UI.SE, {
  kEq: "Aktievärde – historiska siffror",
  h1: "Vad är ditt företag värt för en köpare?",
  heroP: "Gratis indikativ värdering på cirka tre minuter. Vi hämtar årsredovisningarna åt dig, du svarar på sju frågor och får värdeintervall, exitpoäng och de åtgärder som höjer värdet mest.",
  heroTrust: ["Gratis", "Ingen registrering", "Cirka 3 minuter", "Nordiska transaktionsmultiplar"],
  nav1: "Underlag", nav1s: "Organisationsnummer och årsredovisningar",
  nav2: "Siffror och frågor", nav2s: "Kontrollera och komplettera",
  nav3: "Resultat", nav3s: "Värdering och åtgärder",
  s1Eye: "Steg 1 av 3", s1H: "Sök upp ditt bolag",
  s1P: "Ange organisationsnumret så hämtar vi årsredovisningarna och fyller i siffrorna åt dig. Går de inte att hämta laddar du upp dem som PDF.",
  slotY: ["Senaste året", "Året innan", "Två år sedan"],
  slotEmpty: "Välj PDF eller dra hit", slotBusy: "Läser och laddar upp…", slotSaving: "Laddar upp…",
  slotFound: (y, r) => `Räkenskapsår ${y}` + (r ? ` · omsättning ${r}` : ""),
  pillOk: "Uppladdad och läst", pillManual: "Uppladdad", pillErr: "Fel", pillBusy: "Läser…",
  slotManual: "Siffrorna kunde inte läsas automatiskt. Vi läser dokumentet manuellt.",
  remove: "Ta bort",
  extraH: "Ladda upp ytterligare information (valfritt)",
  extraP: "T.ex. senaste månadsrapport, budget eller affärsplan. Inget krav, men det ger en bättre bedömning.",
  extraGrowth: "Är ditt bolag i tillväxtfas? Lägg gärna med affärsplanen för en bättre värdering.",
  extra3H: "Har ni affärsplan eller budget? Ladda upp den här",
  extra3P: "Värderingen ovan bygger enbart på historiska siffror från årsredovisningarna. Laddar du upp månadsrapporter, budget eller affärsplan vägs de in i rapporten: månadsrapporterna uppdaterar resultatbasen och budgeten vägs in med 20–35 % beroende på hur väl den stöds. Valfritt.",
  extraBtn: "Ladda upp filer",
  chipUp: "laddar upp…", chipOk: "sparad", chipErr: "misslyckades",
  leadH: "Spara resultatet", leadP: "Inte redo att sälja än? Få en kopia av värderingen på e-post, eller en påminnelse när det är dags att uppdatera den. Frivilligt och kostnadsfritt.",
  leadCopy: "Skicka en kopia av resultatet till min e-post", leadRemind: "Påminn mig om att uppdatera värderingen om 6 månader", leadConsent: "Jag godkänner att Adsco Capital Partners sparar min e-post för detta.",
  leadBtn: "Skicka", leadBusy: "Skickar…", leadNeed: "Ange en giltig e-postadress, välj minst ett alternativ och godkänn villkoret.", leadErr: "Det gick inte att skicka just nu. Försök igen om en stund.",
  leadOk: (c, r, e) => (c ? `Klart! Kopian är skickad till ${e}.` : "Klart!") + (r ? " Vi påminner dig om sex månader." : ""),
  topActH: "Din viktigaste åtgärd", topActMore: n => `${n} ${n === 1 ? "åtgärd till" : "åtgärder till"} med effekt och tidsplan finns i värdeskapandeplanen i rapporten.`,
  normH: "Din normaliserade EBITDA", normRow1: "EBITDA, viktat snitt 3 år (engångsposter återlagda)", normRowLtm: "EBITDA, viktat med senaste 12 månaderna (engångsposter återlagda)", normRow2: "Justering av ägarlön till marknadslön", normRow3: "Normaliserad EBITDA – det köpare räknar på",
  normHighSal: (own, mkt, d) => `Du tar ut ${own} i lön, mer än de ${mkt} en extern vd skulle kosta. En köpare räknar med marknadslönen, så ${d} läggs tillbaka på resultatet. Det höjer värdet jämfört med en vanlig multipel på bokförd EBITDA.`,
  normLowSal: (own, mkt, d) => `Du tar ut ${own} i lön, mindre än de ${mkt} en extern vd skulle kosta, till exempel för att ta ut mer som utdelning. En köpare måste anställa en vd, så ${d} dras av från resultatet. Det är därför resultatet här är lägre än i bokslutet.`,
  normEqSal: own => `Din lön på ${own} motsvarar marknadslön för en vd, så ingen justering behövs.`,
  normNoSal: "Ingen ägarlön angiven. Om du tar ut lön eller utdelning som skiljer sig från marknadslön för en vd, fyll i det i steg 2 så justeras resultatet som en köpare skulle göra.", chipReading: "läser…", chipRead: "siffror lästa", chipNoRead: "läses av rådgivaren",
  docH: "Inläst underlag:", docBud: (y, r) => `budget ${y} med omsättning ${r}.`, docYtd: (n, r, e) => `Månadsrapport: ${n} månader, omsättning ${r}, EBITDA ${e}.`,
  docW: w => `Budgeten vägs in med ${w} % i rapporten. Sammanvägt aktievärde:`, docOnlyYtd: "Månadsrapporterna uppdaterar resultatbasen i rapporten.",
  next1: n => n ? `Fortsätt med ${n} ${n === 1 ? "dokument" : "dokument"}` : "Fortsätt",
  skip: "Inga dokument till hands? Fyll i siffrorna själv",
  s1Fine: "Dokumenten lagras krypterat hos Adsco Capital Partners, används bara för din värdering och raderas på begäran. Vi delar dem aldrig med någon.",
  howH: "Så går det till",
  how: [["Ange organisationsnummer eller företagsnamn", "Vi hämtar årsredovisningarna. Ladda gärna upp dem manuellt som PDF för en bättre analys."], ["Få resultatet direkt", "Värdeintervall, exitpoäng och de viktigaste åtgärderna."]],
  ticks: ["Tar cirka tre minuter", "Gratis och utan registrering"],
  quote: "Köpare betalar för det de kan verifiera. Ett väl förberett bolag får både högre pris och bättre villkor.",
  quoteBy: "Adsco Capital Partners",
  drvH: "Det här tittar en köpare på",
  drivers: [["Lönsamhet och tillväxt", "Normaliserad EBITDA och trend över tre år styr basvärdet."], ["Ägarberoende", "Klarar sig bolaget utan dig? Det påverkar både pris och villkor."], ["Återkommande intäkter", "Avtal och löpande kunder gör framtida intäkter förutsägbara."], ["Dokumentation", "Rapportering och skriftliga avtal gör due diligence smidig."]],
  tipsH: "Bra att veta",
  tips: [["Var hittar jag EBITDA?", "Rörelseresultatet plus av- och nedskrivningar i resultaträkningen. Vi räknar ut det åt dig ur årsredovisningen."], ["Ägarlön och marknadslön", "Om du tar ut mer eller mindre än en anställd VD skulle kosta justeras resultatet med skillnaden."], ["Engångskostnader", "Kostnader som inte återkommer, till exempel en flytt eller en tvist, läggs tillbaka på resultatet."]],
  whyH: "Varför frågar vi det här?",
  whyP: "Två bolag med samma resultat kan få helt olika pris. Köparen betalar mer när intäkterna är spridda och återkommande och när verksamheten fungerar utan ägaren. Svaren justerar multipeln uppåt eller nedåt.",
  orgL: "Organisationsnummer eller företagsnamn", orgPh: "556677-8899 eller Företaget AB",
  srchLooking: "Söker…", srchPick: "Välj bolaget i listan.", srchNone: "Hittade inget bolag med det namnet. Prova ett annat namn eller ange organisationsnumret.", srchShort: "Skriv minst tre bokstäver av namnet.", orgGo: "Hämta årsredovisningar",
  orgEmpty: "Fyll i organisationsnumret först och klicka på Hämta.",
  ctaH: "Klart! Hur vill du gå vidare?", freeBtn: "Se din gratis värdering →", ctaSub: "Svara på sju korta frågor, resultatet visas direkt. Eller beställ rapporten direkt:",
  mktLine: (q, med, pe, st) => `Marknadsläget: onoterade medelstora bolag i Europa såldes för i median ${med} EBITDA (Argos Index, ${q}). Fonder betalade ${pe} och industriella köpare ${st}. Mindre bolag säljs normalt lägre; nordiska serieförvärvare betalar oftast 5–8x EBITA.`,
  mktBuyers: b => `Aktiva köpare i branschen: ${b}.`,
  cycH: "Konjunkturen i branschen", cycLbl: l => `Konjunkturen (${l.toLowerCase()})`,
  cycState: ["Mycket svagare än normalt", "Svagare än normalt", "Normalt läge", "Starkare än normalt", "Mycket starkare än normalt"],
  cycLine: (c, v, adj) => c.src === "SSB" ? `SSB:s konjunkturindikator för ${c.label.toLowerCase()} ${c.period}: ${v}.` : `Konjunkturinstitutets barometer för ${c.label.toLowerCase()}, ${c.period}: ${v} (normalt 100). ` + (adj ? `Det ger ${adj} på multipeln.` : "Påverkar inte multipeln."),
  gpIntro: "Utan underlag bygger rapporten på historiska siffror. Med underlag gör rådgivaren så här: månadsrapporter ger de senaste tolv månaderna, som får störst vikt i resultatbasen. Budgeten ger ett tillväxtvärde som vägs in med 20 %, upp till 35 % om en affärsplan förklarar den och utfallet hittills i år följer den. Allt är valfritt och behandlas konfidentiellt.",
  gpPlanH: "Affärsplan", gpPlanP: "Strategi, marknad och mål. PDF, Word eller PowerPoint.",
  gpBudH: "Budget eller prognos", gpBudP: "De kommande 1–3 åren. Excel eller PDF.",
  gpMonH: "Senaste månadsrapporter", gpMonP: "Resultat- och balansräkning hittills i år.",
  gpPick: "Välj filer", gpNote: "Du kan också gå vidare utan underlag och skicka det senare.",
  gpGo: n => n ? `Gå vidare till beställning (${n} dokument) →` : "Gå vidare till beställning →",
  kindLbl: { plan: "Affärsplan", budget: "Budget", monthly: "Månadsrapport" },
  rateLbl: r => `Räntenivå (styrränta ${r} %)`,
  rateLine: (r, src, dt, adj, ref) => `Multiplarna är justerade för räntenivån: ${src}s styrränta är ${r} % (${dt}). ` + (adj ? `Jämfört med en normal nivå på ${ref} % ger det ${adj} på multipeln.` : `Det ligger nära en normal nivå på ${ref} % och påverkar inte multipeln.`),
  bH: "Jämfört med branschen", bSrc: b => `SCB:s branschnyckeltal ${b.year} · ${b.code} ${b.label} · ${b.size === "TOT" ? "alla storlekar" : b.size === "001" ? "0 anställda" : b.size.replace("+", "minst ").replace("-", "–") + " anställda"} · ${b.n.toLocaleString("sv-SE")} företag`,
  bYou: y => `Ditt företag ${y}`, bMed: "Branschens median (kvartiler)", bMedS: "Branschens median", bAvg: "Branschens snitt", bMargin: "Rörelsemarginal", bGrowth: "Omsättningstillväxt", bPerEmp: "Omsättning per anställd (tkr)",
  bPos: ["Svagaste fjärdedelen", "Under median", "Över median", "Bästa fjärdedelen"], bAbove: "Klart över snittet", bBelow: "Klart under snittet", bNear: "Nära snittet",
  bAdj: x => `Marginalen jämfört med branschen ger ${x} på multipeln.`, bNoAdj: "Marginalen ligger inom branschens normala spann och påverkar inte multipeln. Tillväxten räknas redan in separat.",
 arH: y => `Vad årsredovisningen ${y} säger`, arSrcBV: "Vi har läst förvaltningsberättelsen, noterna och revisionsberättelsen från Bolagsverket. Riskflaggor påverkar värderingen; övriga punkter hjälper dig att svara rätt på frågorna ovan.", arSrcPdf: "Vi har läst texten i den uppladdade årsredovisningen. Riskflaggor påverkar värderingen; övriga punkter hjälper dig att svara rätt på frågorna ovan.",
  arAbout: "Verksamheten:", arEmp: n => `Medelantal anställda: ${n}`, arAdj: x => `${x} på multipeln`, arNone: "Inga riskflaggor i texten (fortsatt drift, revisionsanmärkning, kontrollbalansräkning, tvister).",
  tf: { gc: "Revisorn pekar på väsentlig osäkerhet om fortsatt drift", qual: "Revisionsberättelsen innehåller reservation eller avstående", kbr: "Eget kapital under hälften av aktiekapitalet / kontrollbalansräkning", dispute: "Tvist eller rättslig process nämns", custdep: "Beroende av en eller några stora kunder nämns – kontrollera svaret om största kund", recur: "Abonnemang, licenser eller serviceavtal nämns – räkna in dem i andelen återkommande intäkter", growth: "Expansion eller ökad efterfrågan nämns" },
  docFail: "Dokumentet kunde inte visas just nu. Försök igen om en stund.",
  repLoadingBV: "Hämtar årsredovisningarna från Bolagsverket…", noBV: "Inga digitala årsredovisningar fanns hos Bolagsverket för bolaget. Ladda upp de senaste årsredovisningarna som PDF (gärna 3–5 år) så blir värderingen säkrare:", repSavedBV: n => `${n} årsredovisningar hämtade från Bolagsverket och sparade till din värdering:`, repItem: y => `Årsredovisning ${y}`, repOpen: "Öppna",
  repLoading: "Hämtar de fullständiga årsredovisningarna…", repSaved: n => `${n} fullständiga årsredovisningar hämtade och sparade till rapporten:`,
  manualUp: "Har du inte numret till hands? Ladda upp årsredovisningarna direkt",
  addUp: "Ladda även upp årsredovisningarna som PDF (ger avskrivningar och skulder)",
  listedH: ex => `Börsnoterat bolag – ${ex}`,
  listedP: "För ett noterat bolag är börsvärdet (aktiekurs × antal aktier) marknadens aktuella värdering av eget kapital. Vid ett uppköp av hela bolaget betalas normalt en budpremie över börskursen, ofta 20–40 %. Vår värdering nedan bygger på jämförbara transaktioner för onoterade bolag och ska ses som en kontroll, inte som ersättning för börskursen.",
  listedLink: "Se aktuellt börsvärde →",
  listedQ: "börsvärde",
  upAskNO: "Registret ger bara nyckeltal. Ladda upp de tre senaste årsredovisningarna som PDF för en mer exakt analys:",
  noReports: "Vi hittade inga bokslut för bolaget. Ladda upp de tre senaste årsredovisningarna som PDF här:",
  fetchedH: n => `Hämtat: ${n}`, fetchedSrc: "Från Bolagsverket (TSEK). Siffrorna är ifyllda i nästa steg.", ebitL: "Rörelseresultat",
  fetchedSrcAB: "Från årsredovisningarna hos Bolagsverket (TSEK). Siffrorna är ifyllda i nästa steg.", fetchedGroup: "Koncernsiffror (koncernredovisningen).",
  pdfLink: "Ladda ner årsredovisningarna som PDF på Allabolag och ladda gärna upp dem här →",
  noDep: "",
  orgBad: "Kontrollera organisationsnumret (10 siffror, till exempel 556677-8899).",
  orgOkSE: "Tack. Organisationsnumret skickas med din beställning.",
  orgLooking: "Hämtar uppgifter…", orgNotFound: "Hittade inget bolag med det numret.", orgFail: "Kunde inte hämta uppgifter just nu. Fortsätt med att ladda upp årsredovisningarna.",
  orgFound: (n, y) => `${n}: siffror för ${y} hämtade. Ladda gärna upp årsredovisningarna också.`, orgFoundName: n => `${n} hittat.`,
  pkgH: "Välj nivå – börja gratis eller beställ direkt",
  discSum: "Indikativ värdering – inte rådgivning. Läs viktig information",
  disc: [
    ["Indikativ värdering.", "Exitkompass ger ett ungefärligt värdeintervall baserat på förenklade branschmultiplar och de uppgifter som hämtas eller lämnas. Det är inte ett värderingsutlåtande, en fairness opinion eller investerings-, skatte-, redovisnings- eller juridisk rådgivning."],
    ["Värde vid försäljning, inte för juridiska ändamål.", "Exitkompass visar vad bolaget kan vara värt för en köpare vid en försäljning (marknadsvärde vid fortsatt drift, baserat på multiplar). Det är inte en substansvärdering, likvidationsvärdering eller en värdering för bodelning, bouppteckning, arvskifte, tvist, inlösen av minoritetsaktier eller skatteändamål. I sådana fall krävs en formell värdering med den metod som ändamålet kräver."],
    ["Faktiskt pris kan avvika väsentligt.", "Vad en köpare betalar beror bland annat på marknadsläge, köpartyp, finansiering, due diligence, avtalsvillkor och bolagets framtidsutsikter. Fatta inte beslut enbart på grundval av verktyget."],
    ["Källor.", "Siffror och årsredovisningar hämtas från offentliga register och tjänster (Bolagsverket och Allabolag/UC AB i Sverige, Brønnøysundregistrene i Norge) eller lämnas av dig. Siffror och text i årsredovisningarna tolkas automatiskt och kan bli felaktiga eller ofullständiga. Vi kontrollerar inte uppgifterna och ansvarar inte för fel i källorna. Jämför alltid med bolagets årsredovisning."],
    ["Inget uppdrag.", "Att använda verktyget eller beställa en rapport innebär inte att ett rådgivningsuppdrag uppstår. Ett sådant kräver ett skriftligt avtal med Adsco Capital Partners. Adsco ansvarar inte för förluster till följd av beslut som fattas med stöd av verktyget eller rapporten."],
    ["Dina uppgifter.", "Organisationsnummer, siffror och dokument du laddar upp lagras hos Adsco Capital Partners (Google Workspace) och används endast för att ta fram din värdering och rapport. Vi delar dem inte med tredje part och raderar dem på begäran."]
  ],
  adH: "Om Adsco Capital Partners",
  adLead: "Exitkompass är utvecklat av Adsco Capital Partners, en partnerägd och oberoende rådgivningsfirma inom M&A och kapitalmarknad med huvudkontor i Stockholm. Vi arbetar med grundar-, familje- och PE-ägda bolag på den nordiska mellanmarknaden, från första strategiska samtal till tillträde.",
  adStats: [["60+", "års samlad erfarenhet av kapitalmarknaden"], ["5", "nordiska börsnoteringar ledda 2016–2022"], ["Sedan 1996", "erfarenhet av investment banking"], ["2", "seniora partners i varje affär, hela vägen"]],
  adTeam: [["Sture Stölen", "Grundande partner", "20+ år inom IR och M&A · ledde 5 nordiska börsnoteringar 2016–2022"], ["Lars Carlson", "Grundande partner", "25+ år i branschen, bland annat ECM och M&A · investment banker sedan 1996"]],
  adIndep: "Oberoende: ingen långivning och ingen research. Bara ditt resultat räknas.",
  pkgs: [
    { name: "Snabbvärdering", items: ["Värdeintervall direkt på sidan", "Poäng för exitberedskap", "De tre viktigaste fynden"] },
    { name: "Rapport", tag: "Rekommenderas", items: ["Fullständig PDF-rapport på svenska", "Scenarier och känslighetsanalys", "Värdeskapandeplan på 12–24 månader", "Tillväxtvärdering utifrån er affärsplan", "Köpartyper och försäljningsprocess", "Granskas av en senior rådgivare, levereras inom 1–2 arbetsdagar"] },
    { name: "Rapport + genomgång", tag: "Med partner", items: ["Allt i rapporten", "60 minuter med en partner på Adsco Capital Partners", "Genomgång av normaliseringar och nästa steg"] }
  ],
  startFree: "Börja gratis", choose: ["Välj rapport", "Välj med genomgång"], buy: ["Köp rapporten", "Köp med genomgång"], haveFree: "Du har den här ✓",
  chosen: n => `Du har valt ${n}. Börja med underlaget nedan, du beställer efter att ha sett din värdering.`,
  emailL: "Din e-post", opened: "Beställningsformuläret öppnades i en ny flik. Skicka det så hör vi av oss med betalning och leverans.",
  s2Eye: "Steg 2 av 3", s2H: "Kontrollera siffrorna",
  s2PAuto: "Gröna fält har vi läst ur dina årsredovisningar. Rätta det som ser fel ut, fyll i det som saknas och svara på köparens frågor.",
  s2PManual: "Fyll i omsättning och EBITDA för de tre senaste åren i TSEK och svara på köparens frågor.",
  keyGreen: "Läst ur årsredovisningen", keyYellow: "Saknades, kontrollera",
  to3: "Visa min värdering", back1: "Tillbaka till underlaget",
  need: "Fyll i omsättning och EBITDA för minst det senaste året.",
  orgGo: "Starta värdering →", micro1: "Tar cirka tre minuter", micro2: "Gratis och utan registrering",
  lockH: "Ingår i den fullständiga rapporten", lockP: "Exitberedskap per område, strategiskt värde, känslighetsanalys, hela värdeskapandeplanen för 12–24 månader och vilka köpare som betalar mest för ett bolag som ditt.",
  lockExit: "Exitberedskap per område", lockStrat: "Strategiskt värde", lockSvPrem: "Strategiskt påslag", lockSvVal: "Värde med påslag", lockSvDrv: "Värdedrivare", lockSens: "Känslighetsanalys", lockPlan: "Värdeskapandeplan 12–24 mån", lockBuyers: "Köpartyper och multiplar",
  lockBtn: p => `Lås upp i rapporten · ${p}`, lockDeliv: "Levereras inom 1–2 arbetsdagar, granskad av en senior rådgivare.",
  delivPaid: "⏱ Levereras inom 1–2 arbetsdagar", delivFree: "⚡ Direkt på sidan",
  largeH: "Ert bolag är större än vad Exitkompass är byggt för",
  largeP: (r, e) => `Med en omsättning på ${r} och EBITDA på ${e} sätts värdet av noterade jämförelsebolag och strategiska transaktioner, inte av multiplar för små och medelstora bolag. En automatisk siffra här skulle bli missvisande, oftast kraftigt för låg, så vi visar ingen.`,
  largeP2: "Boka ett kostnadsfritt och konfidentiellt möte med en partner på Adsco Capital Partners. Vi går igenom värderingsläget, köparbilden och era strategiska alternativ.",
  largeNote: "Exitberedskapen och fynden nedan gäller fullt ut även för större bolag.",
  largeBtn: "Boka möte med en partner →",
  mName: "Möte med en partner", mPrice: "Kostnadsfritt", mTag: "Konfidentiellt",
  mItems: ["Värderingsläge utifrån noterade jämförelsebolag och transaktioner", "Köparbild: strategiska köpare och private equity", "Strategiska alternativ och tidsplan", "60 minuter med en senior partner"],
  mH: "Boka möte med en partner", mP: "Fyll i dina uppgifter så hör vi av oss inom en arbetsdag för att boka en tid. Allt hanteras konfidentiellt.",
  mSend: "Skicka mötesförfrågan", mDoneH: n => `Tack${n ? ", " + n : ""}! Vi har tagit emot din förfrågan.`, mDoneP: e => `Vi kontaktar dig på ${e} inom en arbetsdag för att boka mötet.`,
  mFine: "Kostnadsfritt och utan förpliktelser.", mWhen: "Svar", mWhenV: "Inom en arbetsdag",
  oEye: "Beställning", oH: "Beställ din rapport",
  oP: "Fyll i dina uppgifter så återkommer vi inom en arbetsdag. Dina siffror och uppladdade dokument skickas med automatiskt.",
  oBack: "Tillbaka", oName: "Ditt namn *", oEmail: "E-post *", oPhone: "Telefon", oCompany: "Företag *", oOrg: "Organisationsnummer",
  oMsg: "Meddelande (valfritt)",
  oConsent: "Jag godkänner köpvillkoren och att Adsco Capital Partners behandlar mina uppgifter och dokument för att ta fram rapporten och kontakta mig om beställningen.",
  oFine: "Ingen betalning nu. Faktura skickas tillsammans med rapporten, 10 dagars betalningsvillkor. Moms tillkommer.",
  oSend: p => `Skicka beställning · ${p}`, oSending: "Skickar beställningen…",
  oNeed: "Fyll i namn, en giltig e-postadress och företag.", oNeedOk: "Bekräfta att vi får behandla uppgifterna.",
  oFail: "Beställningen kunde inte skickas just nu.", oFailLink: "Skicka via vårt formulär i stället →",
  oDocs: n => `${n} dokument och din värdering skickas med beställningen.`,
  oDelivery: "Leverans", oDeliveryV: "1–2 arbetsdagar", oPayL: "Betalning", oPayV: "Faktura, 10 dagar + moms", oDocsL: "Underlag", oDocsV: n => n ? `${n} dokument` : "Kan skickas senare",
  oWho: "Granskas av en senior rådgivare på Adsco Capital Partners.",
  oDoneH: n => `Tack${n ? ", " + n : ""}! Beställningen är mottagen.`,
  oDoneP: e => `Vi återkommer till ${e} inom en arbetsdag med bekräftelse och nästa steg. Ange ordernumret om du kontaktar oss.`,
  oDoneBack: "Tillbaka till värderingen",
  basis: "Värdet bygger på historiska siffror från årsredovisningarna och är en golvnivå. Månadsrapporter, budget och affärsplan vägs in först i rapporten. Modellen ser inte tillväxtplaner, teknik, avtal eller vad bolaget är strategiskt värt för en köpare.",
  upsideH: "Ert bolag kan vara värt mer än siffrorna visar",
  upsideP: "Köpare betalar ofta mer för bolag med det här, och det fångas bara delvis av historiska siffror:",
  upsideP2: "Med affärsplan, budget och senaste månadsrapporter värderar vi tillväxtcaset i rapporten och väger in det i värderingen, med 20–35 % beroende på hur väl budgeten stöds.",
  upUpload: "Ladda upp affärsplan eller budget",
  upsideBtn: "Få en värdering av tillväxtpotentialen →",
  upGrowth: g => `Stark tillväxt: ${g} % per år de senaste åren`,
  upRecur: r => `Hög andel återkommande intäkter: ${r} %`,
  upMargin: "Etablerad intäktsbas med låg marginal i dag, där värdet ligger i att skala",
  upTech: n => `En bransch där köpare betalar för teknik och skalbarhet (${n})`,
  advH: "Tillväxtplan (rådgivare)",
  advP: "Budgeterad omsättning i TSEK för de kommande tre åren, förväntad EBITDA-marginal år 3 och avkastningskrav. Ger en tillväxtvärdering i rapporten.",
  advY: y => `Omsättning ${y}`,
  advM: "EBITDA-marginal år 3, %",
  advR: "Avkastningskrav, %",
  advPlanChk: "Affärsplan som förklarar budgeten finns", advYtdP: "Månadsrapporter (TSEK, hittills i år). Ger de senaste tolv månaderna (LTM) och kontrollerar om bolaget följer budgeten. Minst 3 månader.",
  advYtN: "Antal månader", advYtR: "Omsättning hittills i år", advYtE: "EBITDA hittills i år", advYtRp: "Omsättning samma period i fjol", advYtEp: "EBITDA samma period i fjol",
  advLtm: x => `EBITDA senaste tolv månader: ${x}.`, advBlend: (w, x) => `Budgeten vägs in med ${w} %: sammanvägt aktievärde ${x}.`,
  advPdf: "Skapa PDF-rapport",
  advBusy: "Skapar rapporten…",
  advDone: "Klar, rapporten har laddats ner.",
  advErr: "Rapporten kunde inte skapas.",
  gvLine: (lo, hi) => `Med er affärsplan: ${lo} – ${hi} i aktievärde i dag (om planen nås).`,
  fetchedInd: n => `Bransch: ${n}. Stämmer det inte kan du ändra i nästa steg.`,
  kEvMethod: (a, x, b, y, c, z) => `Före nettoskuld. Sammanvägt av EBITDA-, EBIT- och omsättningsmultipel, se nedan.`,
  blFree: "Multiplar, värde per metod, vikter och vilken multipel det motsvarar redovisas i rapporten.",
  bFree: "Branschens nivåer och hur jämförelsen påverkar multipeln redovisas i rapporten.",
  brFree: "Riktningen visas här. Hur mycket varje faktor höjer eller sänker multipeln redovisas i rapporten.",
  rateFree: (r, src) => `Multiplarna är justerade för räntenivån (${src}s styrränta ${r} %).`,
  cycFree: c => `Källa: ${c.src === "SSB" ? "SSB" : "Konjunkturinstitutets konjunkturbarometer"} för ${c.label.toLowerCase()}. Indikatorvärde och påverkan på multipeln redovisas i rapporten.`,
  mktFree: n => "Marknadsläget för onoterade bolag (Argos Index) och " + (n ? `${n} namngivna, aktiva köpare i din bransch` : "aktiva köpare i branschen") + " redovisas i rapporten.",
  blH: "Värdering med tre multiplar", blBasis: "Bolagets siffra", blMult: "Multipel", blVal: "Värde (EV)", blW: "Vikt",
  blEbitda: "EV/EBITDA", blEbit: "EV/EBIT", blRev: "EV/omsättning", blSum: "Sammanvägt företagsvärde",
  blImp: (a, b, c) => "Sammanvägt motsvarar det " + [a && a + " EBITDA", b && b + " EBIT", c && c + " omsättningen"].filter(Boolean).join(", ") + ". Spannet ovan är ±0,75x på resultatmultiplarna.",
  needQ: "Fyll i största kundens andel och andelen återkommande intäkter (0–100 %). De påverkar värderingen mycket.",
  s3Eye: "Steg 3 av 3 · Ditt resultat", back2: "Ändra uppgifter",
  upEye: "Fullständig rapport",
  upShort: "En PDF-rapport på svenska från Adsco Capital Partners, baserad på dina siffror och dokument och granskad av en rådgivare.",
  docsN: n => n ? `Dina ${n} uppladdade dokument skickas med beställningen och granskas av en rådgivare.` : "Du kan skicka årsredovisningar och annat underlag efter beställningen.",
  s1Read: (n, o, ys) => `Vi har läst ${ys} för ${n || "bolaget"}${o ? " (" + o + ")" : ""}.`,
  s1NoRead: "Dokumenten är uppladdade, men siffrorna kunde inte läsas automatiskt (de kan vara inskannade). Fyll i dem i nästa steg. Vi läser dokumenten manuellt när du beställer rapporten.",
  s1Partial: "Några dokument kunde inte läsas automatiskt. Kontrollera siffrorna i nästa steg.",
  upFail: "Ett dokument kunde inte laddas upp. Försök igen eller fortsätt utan det.",
  badType: "Den filtypen stöds inte. Använd PDF, Word, Excel, PowerPoint eller bild.",
  badTypeAnnual: "Ladda upp årsredovisningen som PDF (eller som bild om du bara har en inskannad kopia).",
  tooBig: "Filen är för stor. Högsta storlek är 20 MB.",
  tooMany: "Du har laddat upp maximalt antal dokument.",
  privacy: "Uppgifter och dokument som hämtas eller laddas upp lagras i Adsco Capital Partners Google Workspace och används bara för att ta fram din värdering och rapport. Kontakta oss för att få dem raderade."
});
Object.assign(UI.NO, {
  vat: "uten mva.",
  kEq: "Aksjeverdi – historiske tall",
  h1: "Hva er selskapet ditt verdt for en kjøper?",
  heroP: "Gratis indikativ verdivurdering på rundt tre minutter. Vi henter årsregnskapene for deg, du svarer på sju spørsmål og får verdiintervall, salgsklarhetspoeng og tiltakene som øker verdien mest.",
  heroTrust: ["Gratis", "Ingen registrering", "Rundt 3 minutter", "Nordiske transaksjonsmultipler"],
  nav1: "Underlag", nav1s: "Organisasjonsnummer og årsregnskap",
  nav2: "Tall og spørsmål", nav2s: "Kontroller og fyll ut",
  nav3: "Resultat", nav3s: "Verdivurdering og tiltak",
  s1Eye: "Steg 1 av 3", s1H: "Finn selskapet ditt",
  s1P: "Skriv inn organisasjonsnummeret, så henter vi regnskapstallene og fyller dem inn for deg. Finner vi dem ikke, laster du opp årsregnskapene som PDF.",
  slotY: ["Siste år", "Året før", "To år siden"],
  slotEmpty: "Velg PDF eller dra hit", slotBusy: "Leser og laster opp…", slotSaving: "Laster opp…",
  slotFound: (y, r) => `Regnskapsår ${y}` + (r ? ` · driftsinntekter ${r}` : ""),
  pillOk: "Lastet opp og lest", pillManual: "Lastet opp", pillErr: "Feil", pillBusy: "Leser…",
  slotManual: "Tallene kunne ikke leses automatisk. Vi leser dokumentet manuelt.",
  remove: "Fjern",
  extraH: "Last opp ytterligere informasjon (valgfritt)",
  extraP: "F.eks. siste månedsrapport, budsjett eller forretningsplan. Ikke et krav, men det gir en bedre vurdering.",
  extraGrowth: "Er selskapet ditt i vekstfase? Legg gjerne ved forretningsplanen for en bedre verdivurdering.",
  extra3H: "Har dere forretningsplan eller budsjett? Last den opp her",
  extra3P: "Verdivurderingen over bygger bare på historiske tall fra årsregnskapene. Laster du opp månedsrapporter, budsjett eller forretningsplan, vektes de inn i rapporten: månedsrapportene oppdaterer resultatgrunnlaget og budsjettet vektes inn med 20–35 % avhengig av hvor godt det er underbygget. Valgfritt.",
  extraBtn: "Last opp filer",
  chipUp: "laster opp…", chipOk: "lagret", chipErr: "mislyktes",
  leadH: "Lagre resultatet", leadP: "Ikke klar til å selge ennå? Få en kopi av verdivurderingen på e-post, eller en påminnelse når det er på tide å oppdatere den. Frivillig og gratis.",
  leadCopy: "Send en kopi av resultatet til e-posten min", leadRemind: "Minn meg på å oppdatere verdivurderingen om 6 måneder", leadConsent: "Jeg godtar at Adsco Capital Partners lagrer e-posten min for dette.",
  leadBtn: "Send", leadBusy: "Sender…", leadNeed: "Oppgi en gyldig e-postadresse, velg minst ett alternativ og godta vilkåret.", leadErr: "Det gikk ikke å sende akkurat nå. Prøv igjen om litt.",
  leadOk: (c, r, e) => (c ? `Ferdig! Kopien er sendt til ${e}.` : "Ferdig!") + (r ? " Vi minner deg på det om seks måneder." : ""),
  topActH: "Ditt viktigste tiltak", topActMore: n => `${n} ${n === 1 ? "tiltak til" : "tiltak til"} med effekt og tidsplan finnes i verdiskapingsplanen i rapporten.`,
  normH: "Din normaliserte EBITDA", normRow1: "EBITDA, vektet snitt 3 år (engangsposter lagt tilbake)", normRowLtm: "EBITDA, vektet med siste 12 måneder (engangsposter lagt tilbake)", normRow2: "Justering av eierlønn til markedslønn", normRow3: "Normalisert EBITDA – det kjøpere regner på",
  normHighSal: (own, mkt, d) => `Du tar ut ${own} i lønn, mer enn de ${mkt} en ekstern daglig leder ville kostet. En kjøper regner med markedslønnen, så ${d} legges tilbake på resultatet. Det øker verdien sammenlignet med en vanlig multippel på bokført EBITDA.`,
  normLowSal: (own, mkt, d) => `Du tar ut ${own} i lønn, mindre enn de ${mkt} en ekstern daglig leder ville kostet, for eksempel for å ta ut mer som utbytte. En kjøper må ansette en daglig leder, så ${d} trekkes fra resultatet. Derfor er resultatet her lavere enn i regnskapet.`,
  normEqSal: own => `Lønnen din på ${own} tilsvarer markedslønn for en daglig leder, så ingen justering trengs.`,
  normNoSal: "Ingen eierlønn oppgitt. Hvis du tar ut lønn eller utbytte som avviker fra markedslønn for en daglig leder, fyll det inn i steg 2, så justeres resultatet slik en kjøper ville gjort.", chipReading: "leser…", chipRead: "tall lest", chipNoRead: "leses av rådgiveren",
  docH: "Innlest underlag:", docBud: (y, r) => `budsjett ${y} med omsetning ${r}.`, docYtd: (n, r, e) => `Månedsrapport: ${n} måneder, omsetning ${r}, EBITDA ${e}.`,
  docW: w => `Budsjettet vektes inn med ${w} % i rapporten. Samlet aksjeverdi:`, docOnlyYtd: "Månedsrapportene oppdaterer resultatgrunnlaget i rapporten.",
  next1: n => n ? `Fortsett med ${n} dokument${n === 1 ? "" : "er"}` : "Fortsett",
  skip: "Ingen dokumenter for hånden? Fyll inn tallene selv",
  s1Fine: "Dokumentene lagres kryptert hos Adsco Capital Partners, brukes bare til din verdivurdering og slettes på forespørsel. Vi deler dem aldri med noen.",
  howH: "Slik fungerer det",
  how: [["Skriv inn organisasjonsnummer eller selskapsnavn", "Vi henter regnskapstallene. Last gjerne opp årsrapportene manuelt i PDF for bedre analyse."], ["Få resultatet med en gang", "Verdiintervall, salgsklarhet og de viktigste tiltakene."]],
  ticks: ["Tar om lag tre minutter", "Gratis og uten registrering"],
  quote: "Kjøpere betaler for det de kan verifisere. Et godt forberedt selskap får både høyere pris og bedre vilkår.",
  quoteBy: "Adsco Capital Partners",
  drvH: "Dette ser en kjøper på",
  drivers: [["Lønnsomhet og vekst", "Normalisert EBITDA og utvikling over tre år styrer basisverdien."], ["Eieravhengighet", "Klarer selskapet seg uten deg? Det påvirker både pris og vilkår."], ["Gjentakende inntekter", "Avtaler og faste kunder gjør fremtidige inntekter forutsigbare."], ["Dokumentasjon", "Rapportering og skriftlige avtaler gjør due diligence smidig."]],
  tipsH: "Greit å vite",
  tips: [["Hvor finner jeg EBITDA?", "Driftsresultatet pluss av- og nedskrivninger i resultatregnskapet. Vi regner det ut for deg fra årsregnskapet."], ["Eierlønn og markedslønn", "Tar du ut mer eller mindre enn en ansatt daglig leder ville kostet, justeres resultatet med differansen."], ["Engangskostnader", "Kostnader som ikke kommer igjen, for eksempel en flytting eller en tvist, legges tilbake til resultatet."]],
  whyH: "Hvorfor spør vi om dette?",
  whyP: "To selskaper med samme resultat kan få helt ulik pris. Kjøperen betaler mer når inntektene er spredt og gjentakende, og når virksomheten fungerer uten eieren. Svarene justerer multippelen opp eller ned.",
  orgL: "Organisasjonsnummer eller selskapsnavn", orgPh: "912 345 678 eller Selskapet AS",
  srchLooking: "Søker…", srchPick: "Velg selskapet i listen.", srchNone: "Fant ikke noe selskap med det navnet. Prøv et annet navn eller skriv inn organisasjonsnummeret.", srchShort: "Skriv minst tre bokstaver av navnet.", orgGo: "Hent årsregnskap",
  orgEmpty: "Fyll inn organisasjonsnummeret først og klikk på Hent.",
  ctaH: "Klart! Hvordan vil du gå videre?", freeBtn: "Se din gratis verdivurdering →", ctaSub: "Svar på sju korte spørsmål, resultatet vises med en gang. Eller bestill rapporten direkte:",
  mktLine: (q, med, pe, st) => `Markedet: unoterte mellomstore selskaper i Europa ble solgt for median ${med} EBITDA (Argos Index, ${q}). Fond betalte ${pe} og industrielle kjøpere ${st}. Mindre selskaper selges normalt lavere; nordiske serieoppkjøpere betaler oftest 5–8x EBITA.`,
  mktBuyers: b => `Aktive kjøpere i bransjen: ${b}.`,
  cycH: "Konjunkturen i bransjen", cycLbl: l => `Konjunktur (${l.toLowerCase()})`,
  cycState: ["Mye svakere enn normalt", "Svakere enn normalt", "Normalt", "Sterkere enn normalt", "Mye sterkere enn normalt"],
  cycLine: (c, v, adj) => `SSBs sammensatte konjunkturindikator for ${c.label.toLowerCase()}, ${c.period}: ${v} (snitt over tid ${(Math.round(c.mean * 10) / 10).toLocaleString("nb-NO")}). ` + (adj ? `Det gir ${adj} på multippelen.` : "Påvirker ikke multippelen."),
  gpIntro: "Uten underlag bygger rapporten på historiske tall. Med underlag gjør rådgiveren slik: månedsrapporter gir de siste tolv månedene, som får størst vekt i resultatgrunnlaget. Budsjettet gir en vekstverdi som vektes inn med 20 %, opptil 35 % hvis en forretningsplan forklarer det og resultatet hittil i år følger det. Alt er valgfritt og behandles konfidensielt.",
  gpPlanH: "Forretningsplan", gpPlanP: "Strategi, marked og mål. PDF, Word eller PowerPoint.",
  gpBudH: "Budsjett eller prognose", gpBudP: "De neste 1–3 årene. Excel eller PDF.",
  gpMonH: "Siste månedsrapporter", gpMonP: "Resultat og balanse hittil i år.",
  gpPick: "Velg filer", gpNote: "Du kan også gå videre uten underlag og sende det senere.",
  gpGo: n => n ? `Gå videre til bestilling (${n} dokumenter) →` : "Gå videre til bestilling →",
  kindLbl: { plan: "Forretningsplan", budget: "Budsjett", monthly: "Månedsrapport" },
  rateLbl: r => `Rentenivå (styringsrente ${r} %)`,
  rateLine: (r, src, dt, adj, ref) => `Multiplene er justert for rentenivået: ${src}s styringsrente er ${r} % (${dt}). ` + (adj ? `Sammenlignet med et normalt nivå på ${ref} % gir det ${adj} på multippelen.` : `Det ligger nær et normalt nivå på ${ref} % og påvirker ikke multippelen.`),
  bH: "Sammenlignet med bransjen", bSrc: b => `SSBs nøkkeltall for aksjeselskaper ${b.year} · ${b.label} · ${b.n.toLocaleString("nb-NO")} foretak`,
  bYou: y => `Ditt selskap ${y}`, bMed: "Bransjens median (kvartiler)", bMedS: "Bransjens median", bAvg: "Snitt i næringen", bMargin: "Driftsmargin", bGrowth: "Omsetningsvekst", bPerEmp: "Omsetning per ansatt (tkr)",
  bPos: ["Svakeste fjerdedel", "Under median", "Over median", "Beste fjerdedel"], bAbove: "Klart over snittet", bBelow: "Klart under snittet", bNear: "Nær snittet",
  bAdj: x => `Marginen sammenlignet med næringen gir ${x} på multippelen.`, bNoAdj: "Marginen ligger innenfor normalt spenn for næringen og påvirker ikke multippelen.",
 arH: y => `Hva årsregnskapet ${y} sier`, arSrcBV: "Vi har lest årsberetningen, notene og revisjonsberetningen. Risikoflagg påvirker verdivurderingen; øvrige punkter hjelper deg å svare riktig på spørsmålene over.", arSrcPdf: "Vi har lest teksten i det opplastede årsregnskapet. Risikoflagg påvirker verdivurderingen; øvrige punkter hjelper deg å svare riktig på spørsmålene over.",
  arAbout: "Virksomheten:", arEmp: n => `Gjennomsnittlig antall ansatte: ${n}`, arAdj: x => `${x} på multippelen`, arNone: "Ingen risikoflagg i teksten (fortsatt drift, forbehold fra revisor, tap av egenkapital, tvister).",
  tf: { gc: "Revisor peker på vesentlig usikkerhet om fortsatt drift", qual: "Revisjonsberetningen har forbehold eller ingen konklusjon", kbr: "Egenkapitalen er under halvparten av aksjekapitalen", dispute: "Tvist eller rettssak nevnes", custdep: "Avhengighet av én eller få store kunder nevnes – sjekk svaret om største kunde", recur: "Abonnement, lisenser eller serviceavtaler nevnes – ta dem med i andelen gjentakende inntekter", growth: "Ekspansjon eller økt etterspørsel nevnes" },
  docFail: "Dokumentet kunne ikke vises akkurat nå. Prøv igjen om litt.",
  repLoadingBV: "Henter årsregnskapene…", noBV: "Vi fant ingen årsregnskap å hente automatisk for selskapet. Last opp de siste årsregnskapene som PDF (gjerne 3–5 år), så blir verdivurderingen sikrere:", repSavedBV: n => `${n} årsregnskap hentet og lagret til verdivurderingen:`, repItem: y => `Årsregnskap ${y}`, repOpen: "Åpne",
  repLoading: "Henter de fullstendige årsregnskapene…", repSaved: n => `${n} fullstendige årsregnskap hentet og lagret til rapporten:`,
  manualUp: "Har du ikke nummeret for hånden? Last opp årsregnskapene direkte",
  addUp: "Last også opp årsregnskapene som PDF (gir avskrivninger og gjeld)",
  listedH: ex => `Børsnotert selskap – ${ex}`,
  listedP: "For et notert selskap er markedsverdien (aksjekurs × antall aksjer) markedets aktuelle verdsettelse av egenkapitalen. Ved oppkjøp av hele selskapet betales normalt en budpremie over børskursen, ofte 20–40 %. Vår verdivurdering under bygger på sammenlignbare transaksjoner for unoterte selskaper og bør ses som en kontroll, ikke som erstatning for børskursen.",
  listedLink: "Se aktuell markedsverdi →",
  listedQ: "markedsverdi",
  upAskNO: "Registeret gir bare nøkkeltall. Last opp de tre siste årsregnskapene som PDF (fra regnskapsfører eller Altinn), så blir analysen mer presis:",
  noReports: "Vi fant ikke regnskapstallene automatisk. Last opp de tre siste årsregnskapene som PDF her:",
  fetchedSrcAB: "Fra årsregnskapene hos Bolagsverket (TSEK). Tallene er fylt inn i neste steg.", fetchedGroup: "Konserntall (konsernregnskapet).", pdfLink: "Åpne årsregnskapene →",
  fetchedH: n => `Hentet: ${n}`, fetchedSrc: "Fra Regnskapsregisteret, Brønnøysundregistrene (TNOK). Tallene er fylt inn i neste steg.", ebitL: "Driftsresultat",
  noDep: "Registeret har ikke avskrivninger, så EBITDA settes foreløpig lik driftsresultatet. Last opp årsregnskapene for et mer presist resultat.",
  orgBad: "Kontroller organisasjonsnummeret (9 siffer, for eksempel 912 345 678).",
  orgOkSE: "Takk. Organisasjonsnummeret sendes med bestillingen.",
  orgLooking: "Henter opplysninger fra Brønnøysundregistrene…", orgNotFound: "Fant ingen virksomhet med det nummeret.", orgFail: "Kunne ikke hente opplysninger nå. Fortsett med å laste opp årsregnskapene.",
  orgFound: (n, y) => `${n}: tall for ${y} hentet fra Regnskapsregisteret. EBITDA er foreløpig satt lik driftsresultatet – last opp årsregnskapene for å få med avskrivningene.`, orgFoundName: n => `${n} funnet.`,
  pkgH: "Velg nivå – start gratis eller bestill direkte",
  discSum: "Indikativ verdivurdering – ikke rådgivning. Les viktig informasjon",
  disc: [
    ["Indikativ verdivurdering.", "Exitkompass gir et omtrentlig verdiintervall basert på forenklede bransjemultipler og opplysningene som hentes eller oppgis. Det er ikke en verdivurderingsrapport, en fairness opinion eller investerings-, skatte-, regnskaps- eller juridisk rådgivning."],
    ["Verdi ved salg, ikke for juridiske formål.", "Exitkompass viser hva selskapet kan være verdt for en kjøper ved et salg (markedsverdi ved fortsatt drift, basert på multipler). Det er ikke en substansverdivurdering, likvidasjonsverdi eller en verdivurdering for skifte, arveoppgjør, tvist, innløsning av minoritetsaksjer eller skatteformål. I slike tilfeller kreves en formell verdivurdering med den metoden formålet krever."],
    ["Faktisk pris kan avvike vesentlig.", "Hva en kjøper betaler avhenger blant annet av markedsforhold, kjøpertype, finansiering, due diligence, avtalevilkår og selskapets fremtidsutsikter. Ikke ta beslutninger kun på grunnlag av verktøyet."],
    ["Kilder.", "Tall og årsregnskap hentes fra offentlige registre (Brønnøysundregistrene i Norge, Bolagsverket og Allabolag/UC AB i Sverige) eller oppgis av deg. Tall og tekst i årsregnskapene tolkes automatisk og kan bli feil eller ufullstendige. Vi kontrollerer ikke opplysningene og er ikke ansvarlige for feil i kildene. Sammenlign alltid med selskapets årsregnskap."],
    ["Intet oppdrag.", "Bruk av verktøyet eller bestilling av en rapport etablerer ikke et rådgivningsoppdrag. Et slikt krever en skriftlig avtale med Adsco Capital Partners. Adsco er ikke ansvarlig for tap som følge av beslutninger tatt med støtte i verktøyet eller rapporten."],
    ["Dine opplysninger.", "Organisasjonsnummer, tall og dokumenter du laster opp lagres hos Adsco Capital Partners (Google Workspace) og brukes kun til å utarbeide verdivurderingen og rapporten. Vi deler dem ikke med tredjeparter og sletter dem på forespørsel."]
  ],
  adH: "Om Adsco Capital Partners",
  adLead: "Exitkompass er utviklet av Adsco Capital Partners, et partnereid og uavhengig rådgivningsselskap innen M&A og kapitalmarkeder med hovedkontor i Stockholm. Vi jobber med gründer-, familie- og PE-eide selskaper i det nordiske mellommarkedet, fra den første strategiske samtalen til gjennomføring.",
  adStats: [["60+", "års samlet erfaring fra kapitalmarkedet"], ["5", "nordiske børsnoteringer ledet 2016–2022"], ["Siden 1996", "erfaring fra investment banking"], ["2", "seniorpartnere i hver transaksjon, hele veien"]],
  adTeam: [["Sture Stölen", "Grunnlegger og partner", "20+ år innen IR og M&A · ledet 5 nordiske børsnoteringer 2016–2022"], ["Lars Carlson", "Grunnlegger og partner", "25+ år i bransjen, blant annet ECM og M&A · investment banker siden 1996"]],
  adIndep: "Uavhengig: ingen utlån og ingen analyse. Bare ditt resultat teller.",
  pkgs: [
    { name: "Hurtigvurdering", items: ["Verdiintervall direkte på siden", "Poengsum for salgsklarhet", "De tre viktigste funnene"] },
    { name: "Rapport", tag: "Anbefales", items: ["Fullstendig PDF-rapport på norsk", "Scenarioer og sensitivitetsanalyse", "Verdiskapingsplan for 12–24 måneder", "Vekstverdivurdering ut fra forretningsplanen", "Kjøpertyper og salgsprosess", "Gjennomgått av en senior rådgiver, levert innen 1–2 arbeidsdager"] },
    { name: "Rapport + gjennomgang", tag: "Med partner", items: ["Alt i rapporten", "60 minutter med en partner i Adsco Capital Partners", "Gjennomgang av normaliseringer og neste steg"] }
  ],
  startFree: "Start gratis", choose: ["Velg rapport", "Velg med gjennomgang"], buy: ["Kjøp rapporten", "Kjøp med gjennomgang"], haveFree: "Du har denne ✓",
  chosen: n => `Du har valgt ${n}. Start med underlaget nedenfor – du bestiller etter at du har sett verdivurderingen.`,
  emailL: "Din e-post", opened: "Bestillingsskjemaet ble åpnet i en ny fane. Send det, så kontakter vi deg om betaling og levering.",
  s2Eye: "Steg 2 av 3", s2H: "Kontroller tallene",
  s2PAuto: "Grønne felt har vi hentet fra årsregnskapene dine. Rett det som ser feil ut, fyll inn det som mangler og svar på kjøperens spørsmål.",
  s2PManual: "Fyll inn driftsinntekter og EBITDA for de tre siste årene i TNOK og svar på kjøperens spørsmål.",
  keyGreen: "Hentet fra årsregnskapet", keyYellow: "Manglet, kontroller",
  to3: "Vis min verdivurdering", back1: "Tilbake til underlaget",
  need: "Fyll inn driftsinntekter og EBITDA for minst det siste året.",
  orgGo: "Start verdivurdering →", micro1: "Tar om lag tre minutter", micro2: "Gratis og uten registrering",
  lockH: "Inngår i den fullstendige rapporten", lockP: "Exitberedskap per område, strategisk verdi, sensitivitetsanalyse, hele verdiskapingsplanen for 12–24 måneder og hvilke kjøpere som betaler mest for et selskap som ditt.",
  lockExit: "Exitberedskap per område", lockStrat: "Strategisk verdi", lockSvPrem: "Strategisk påslag", lockSvVal: "Verdi med påslag", lockSvDrv: "Verdidrivere", lockSens: "Sensitivitetsanalyse", lockPlan: "Verdiskapingsplan 12–24 mnd", lockBuyers: "Kjøpertyper og multipler",
  lockBtn: p => `Lås opp i rapporten · ${p}`, lockDeliv: "Leveres innen 1–2 arbeidsdager, gjennomgått av en senior rådgiver.",
  delivPaid: "⏱ Leveres innen 1–2 arbeidsdager", delivFree: "⚡ Direkte på siden",
  largeH: "Selskapet er større enn det Exitkompass er laget for",
  largeP: (r, e) => `Med en omsetning på ${r} og EBITDA på ${e} settes verdien av børsnoterte sammenlignbare selskaper og strategiske transaksjoner, ikke av multipler for små og mellomstore selskaper. Et automatisk tall her ville blitt misvisende, oftest kraftig for lavt, så vi viser ikke noe.`,
  largeP2: "Book et kostnadsfritt og konfidensielt møte med en partner i Adsco Capital Partners. Vi går gjennom verdsettelsen, kjøperbildet og de strategiske alternativene.",
  largeNote: "Salgsklarheten og funnene under gjelder fullt ut også for større selskaper.",
  largeBtn: "Book møte med en partner →",
  mName: "Møte med en partner", mPrice: "Kostnadsfritt", mTag: "Konfidensielt",
  mItems: ["Verdsettelse ut fra børsnoterte sammenlignbare selskaper og transaksjoner", "Kjøperbilde: strategiske kjøpere og private equity", "Strategiske alternativer og tidsplan", "60 minutter med en senior partner"],
  mH: "Book møte med en partner", mP: "Fyll inn opplysningene dine, så tar vi kontakt innen én arbeidsdag for å finne et tidspunkt. Alt behandles konfidensielt.",
  mSend: "Send møteforespørsel", mDoneH: n => `Takk${n ? ", " + n : ""}! Vi har mottatt forespørselen.`, mDoneP: e => `Vi kontakter deg på ${e} innen én arbeidsdag for å avtale møtet.`,
  mFine: "Kostnadsfritt og uforpliktende.", mWhen: "Svar", mWhenV: "Innen én arbeidsdag",
  oEye: "Bestilling", oH: "Bestill rapporten",
  oP: "Fyll inn opplysningene dine, så kommer vi tilbake innen én arbeidsdag. Tallene og de opplastede dokumentene sendes med automatisk.",
  oBack: "Tilbake", oName: "Ditt navn *", oEmail: "E-post *", oPhone: "Telefon", oCompany: "Selskap *", oOrg: "Organisasjonsnummer",
  oMsg: "Melding (valgfritt)",
  oConsent: "Jeg godtar kjøpsvilkårene og at Adsco Capital Partners behandler opplysningene og dokumentene mine for å lage rapporten og kontakte meg om bestillingen.",
  oFine: "Ingen betaling nå. Faktura sendes sammen med rapporten, 10 dagers betalingsfrist. Fakturaen er uten mva.",
  oSend: p => `Send bestilling · ${p}`, oSending: "Sender bestillingen…",
  oNeed: "Fyll inn navn, en gyldig e-postadresse og selskap.", oNeedOk: "Bekreft at vi kan behandle opplysningene.",
  oFail: "Bestillingen kunne ikke sendes akkurat nå.", oFailLink: "Send via skjemaet vårt i stedet →",
  oDocs: n => `${n} dokumenter og verdivurderingen sendes med bestillingen.`,
  oDelivery: "Levering", oDeliveryV: "1–2 arbeidsdager", oPayL: "Betaling", oPayV: "Faktura, 10 dager, uten mva.", oDocsL: "Underlag", oDocsV: n => n ? `${n} dokumenter` : "Kan sendes senere",
  oWho: "Gjennomgås av en senior rådgiver i Adsco Capital Partners.",
  oDoneH: n => `Takk${n ? ", " + n : ""}! Bestillingen er mottatt.`,
  oDoneP: e => `Vi kommer tilbake til ${e} innen én arbeidsdag med bekreftelse og neste steg. Oppgi ordrenummeret hvis du kontakter oss.`,
  oDoneBack: "Tilbake til verdivurderingen",
  basis: "Verdien bygger på historiske tall fra årsregnskapene og er et gulvnivå. Månedsrapporter, budsjett og forretningsplan vektes inn først i rapporten. Modellen ser ikke vekstplaner, teknologi, avtaler eller hva selskapet er strategisk verdt for en kjøper.",
  upsideH: "Selskapet kan være verdt mer enn tallene viser",
  upsideP: "Kjøpere betaler ofte mer for selskaper med dette, og det fanges bare delvis opp av historiske tall:",
  upsideP2: "Med forretningsplan, budsjett og siste månedsrapporter verdsetter vi vekstcaset i rapporten og vekter det inn i verdivurderingen, med 20–35 % avhengig av hvor godt budsjettet er underbygget.",
  upUpload: "Last opp forretningsplan eller budsjett",
  upsideBtn: "Få en verdivurdering av vekstpotensialet →",
  upGrowth: g => `Sterk vekst: ${g} % per år de siste årene`,
  upRecur: r => `Høy andel gjentakende inntekter: ${r} %`,
  upMargin: "Etablert inntektsbase med lav margin i dag, der verdien ligger i å skalere",
  upTech: n => `En bransje der kjøpere betaler for teknologi og skalerbarhet (${n})`,
  advH: "Vekstplan (rådgiver)",
  advP: "Budsjettert omsetning i TNOK for de tre neste årene, forventet EBITDA-margin år 3 og avkastningskrav. Gir en vekstverdivurdering i rapporten.",
  advY: y => `Omsetning ${y}`,
  advM: "EBITDA-margin år 3, %",
  advR: "Avkastningskrav, %",
  advPlanChk: "Forretningsplan som forklarer budsjettet finnes", advYtdP: "Månedsrapporter (TNOK, hittil i år). Gir de siste tolv månedene (LTM) og kontrollerer om selskapet følger budsjettet. Minst 3 måneder.",
  advYtN: "Antall måneder", advYtR: "Omsetning hittil i år", advYtE: "EBITDA hittil i år", advYtRp: "Omsetning samme periode i fjor", advYtEp: "EBITDA samme periode i fjor",
  advLtm: x => `EBITDA siste tolv måneder: ${x}.`, advBlend: (w, x) => `Budsjettet vektes inn med ${w} %: samlet aksjeverdi ${x}.`,
  advPdf: "Lag PDF-rapport",
  advBusy: "Lager rapporten…",
  advDone: "Ferdig, rapporten er lastet ned.",
  advErr: "Rapporten kunne ikke lages.",
  gvLine: (lo, hi) => `Med forretningsplanen: ${lo} – ${hi} i aksjeverdi i dag (hvis planen nås).`,
  fetchedInd: n => `Bransje: ${n}. Stemmer det ikke, kan du endre i neste steg.`,
  kEvMethod: (a, x, b, y, c, z) => `Før netto gjeld. Sammenveid av EBITDA-, EBIT- og omsetningsmultippel, se under.`,
  blFree: "Multipler, verdi per metode, vekter og hvilken multippel det tilsvarer vises i rapporten.",
  bFree: "Bransjens nivåer og hvordan sammenligningen påvirker multippelen vises i rapporten.",
  brFree: "Retningen vises her. Hvor mye hver faktor øker eller senker multippelen vises i rapporten.",
  rateFree: (r, src) => `Multiplene er justert for rentenivået (${src}s styringsrente ${r} %).`,
  cycFree: c => `Kilde: SSBs konjunkturindikator for ${c.label.toLowerCase()}. Indikatorverdi og påvirkning på multippelen vises i rapporten.`,
  mktFree: n => "Markedet for unoterte selskaper (Argos Index) og " + (n ? `${n} navngitte, aktive kjøpere i din bransje` : "aktive kjøpere i bransjen") + " vises i rapporten.",
  blH: "Verdivurdering med tre multipler", blBasis: "Selskapets tall", blMult: "Multippel", blVal: "Verdi (EV)", blW: "Vekt",
  blEbitda: "EV/EBITDA", blEbit: "EV/EBIT", blRev: "EV/omsetning", blSum: "Sammenveid selskapsverdi",
  blImp: (a, b, c) => "Samlet tilsvarer det " + [a && a + " EBITDA", b && b + " EBIT", c && c + " omsetningen"].filter(Boolean).join(", ") + ". Spennet over er ±0,75x på resultatmultiplene.",
  needQ: "Fyll inn største kundes andel og andelen gjentakende inntekter (0–100 %). De påvirker verdivurderingen mye.",
  s3Eye: "Steg 3 av 3 · Ditt resultat", back2: "Endre opplysninger",
  upEye: "Fullstendig rapport",
  upShort: "En PDF-rapport på norsk fra Adsco Capital Partners, basert på tallene og dokumentene dine og gjennomgått av en rådgiver.",
  docsN: n => n ? `De ${n} opplastede dokumentene dine sendes med bestillingen og gjennomgås av en rådgiver.` : "Du kan sende årsregnskap og annet underlag etter bestillingen.",
  s1Read: (n, o, ys) => `Vi har lest ${ys} for ${n || "selskapet"}${o ? " (" + o + ")" : ""}.`,
  s1NoRead: "Dokumentene er lastet opp, men tallene kunne ikke leses automatisk (de kan være skannet). Fyll dem inn i neste steg. Vi leser dokumentene manuelt når du bestiller rapporten.",
  s1Partial: "Noen dokumenter kunne ikke leses automatisk. Kontroller tallene i neste steg.",
  upFail: "Et dokument kunne ikke lastes opp. Prøv igjen eller fortsett uten det.",
  badType: "Den filtypen støttes ikke. Bruk PDF, Word, Excel, PowerPoint eller bilde.",
  badTypeAnnual: "Last opp årsregnskapet som PDF (eller som bilde hvis du bare har en skannet kopi).",
  tooBig: "Filen er for stor. Maks størrelse er 20 MB.",
  tooMany: "Du har lastet opp maksimalt antall dokumenter.",
  privacy: "Opplysninger og dokumenter som hentes eller lastes opp, lagres i Adsco Capital Partners' Google Workspace og brukes bare til å lage verdivurderingen og rapporten. Kontakt oss for å få dem slettet."
});

/* ---------- Strategic value ---------- */
Object.assign(UI.SE, {
  svH: "Strategiskt värde",
  svLevel: ["Lågt strategiskt intresse", "Visst strategiskt intresse", "Högt strategiskt intresse"],
  svP: "En strategisk köpare, till exempel en konkurrent, kund, leverantör eller serieförvärvare, kan betala mer än det finansiella värdet ovan om bolaget ger synergier: nya kunder, marknader, produkter, teknik eller kompetens. Vår bedömning bygger på:",
  svDrv: { ind: n => `Branschen (${n}) där köpare aktivt förvärvar och betalar för synergier`, recur: "Återkommande intäkter som en köpare kan bygga vidare på", growth: "Tillväxt som stärker en köpares egen plattform", margin: "Marginal i branschens bästa fjärdedel", cust: "En bred kundbas utan beroende av enskilda kunder", buyers: "Aktiva serieförvärvare som köper bolag i branschen" },
  svNone: "Få av de faktorer som brukar locka strategiska köpare syns i siffrorna. Ett strategiskt påslag beror då främst på vem köparen är.",
  svFree: "Vad som driver det strategiska intresset, det indikativa påslaget i kronor och vilka köpare som kan betala det redovisas i rapporten.",
  svPrem: (r, a) => `En strategisk köpare kan betala cirka ${r} över företagsvärdet, det vill säga ${a} mer.`,
  svNote: "Påslaget ingår inte i värderingen ovan. Det förutsätter rätt köpare och en konkurrensutsatt försäljningsprocess."
});
Object.assign(UI.NO, {
  svH: "Strategisk verdi",
  svLevel: ["Lav strategisk interesse", "Noe strategisk interesse", "Høy strategisk interesse"],
  svP: "En strategisk kjøper, for eksempel en konkurrent, kunde, leverandør eller serieoppkjøper, kan betale mer enn den finansielle verdien over dersom selskapet gir synergier: nye kunder, markeder, produkter, teknologi eller kompetanse. Vurderingen bygger på:",
  svDrv: { ind: n => `Bransjen (${n}), der kjøpere aktivt kjøper opp og betaler for synergier`, recur: "Gjentakende inntekter som en kjøper kan bygge videre på", growth: "Vekst som styrker kjøperens egen plattform", margin: "Margin blant den beste fjerdedelen i bransjen", cust: "En bred kundebase uten avhengighet av enkeltkunder", buyers: "Aktive serieoppkjøpere som kjøper selskaper i bransjen" },
  svNone: "Få av faktorene som vanligvis tiltrekker strategiske kjøpere, synes i tallene. Et strategisk påslag avhenger da først og fremst av hvem kjøperen er.",
  svFree: "Hva som driver den strategiske interessen, det indikative påslaget i kroner og hvilke kjøpere som kan betale det, vises i rapporten.",
  svPrem: (r, a) => `En strategisk kjøper kan betale om lag ${r} over selskapsverdien, det vil si ${a} mer.`,
  svNote: "Påslaget er ikke med i verdivurderingen over. Det forutsetter riktig kjøper og en salgsprosess med konkurranse."
});

/* Who the tool is for */
UI.SE.heroFit = "Byggt för små och medelstora bolag med en omsättning upp till cirka 500 MSEK. Större bolag och koncerner värderas bäst i ett samtal med en partner.";
UI.NO.heroFit = "Laget for små og mellomstore selskaper med omsetning opp til rundt 500 MNOK. Større selskaper og konsern verdsettes best i en samtale med en partner.";

/* Free view: locked parts of exit readiness and strategic value */
Object.assign(UI.SE, { potFree: "Hur mycket värdet kan öka när bolaget är exitklart redovisas i rapporten.", scoreFree: "Poängen per område och vad som drar ner den redovisas i rapporten." });
Object.assign(UI.NO, { potFree: "Hvor mye verdien kan øke når selskapet er klart for salg, vises i rapporten.", scoreFree: "Poengene per område og hva som trekker dem ned, vises i rapporten." });

/* ---------- English UI texts, one set per country (registry, currency and VAT differ) ---------- */
function mkEN(cc) {
  const S = cc === "SE";
  const K = S ? "TSEK" : "TNOK", CUR = S ? "SEK" : "NOK";
  const REG = S ? "Bolagsverket (the Swedish Companies Registration Office)" : "the Brønnøysund Register Centre";
  const STAT = S ? "Statistics Sweden (SCB)" : "Statistics Norway (SSB)";
  const ORGEX = S ? "556677-8899" : "912 345 678";
  const VATL = S ? "excl. VAT" : "no VAT";
  const cb = src => /riksbank/i.test(src || "") ? "the Riksbank" : (src || (S ? "the Riksbank" : "Norges Bank"));
  const AR = S ? "annual report" : "annual accounts";
  return {
    html: "en", loc: "en-GB", by: "by Adsco Capital Partners", flSE: "Sweden", flNO: "Norway", defName: "Your company",
    h1: "What is your company worth to a buyer?",
    heroP: "A free indicative valuation in about three minutes. We fetch the " + AR + "s for you, you answer seven questions and get a value range, an exit readiness score and the actions that raise the value most.",
    heroTrust: ["Free", "No sign-up", "About 3 minutes", "Nordic deal multiples"],
    step1: "Upload the " + AR + " (PDF) or enter revenue and EBITDA in " + K + ".",
    step2: "Answer the buyer's questions about owner dependency, customers and contracts.",
    step3: "Read your valuation and order the full report.",
    dropTitle: "Upload your " + AR + " (PDF)",
    dropSub: "We read revenue, EBITDA, cash, debt and CEO salary for up to three years. Drag the file here or click to choose.",
    or: "or enter the figures yourself",
    legCompany: "Company", name: "Company name", industry: "Industry",
    legFin: "Figures (" + K + ")", yYear: "Year", yRev: "Revenue",
    ownsal: "Owner's salary paid", mktsal: "Market salary for a CEO",
    oneoff: y => `One-off costs ${y} (added back)`,
    debt: "Interest-bearing debt", cash: "Cash and equivalents",
    salHint: "Salaries include employer's social security contributions.",
    legBuyer: "The buyer's questions",
    topcust: "Largest customer, % of revenue", recur: "Recurring revenue, %",
    ownerQ: "If you were away for three months, the business would…",
    owner: ["Struggle: key customers and decisions go through me", "Cope, with some disruption", "Run as usual"],
    mgmtQ: "Management below the owner", mgmt: ["None, I run everything", "Partly: one or two key people", "A full management team with clear roles"],
    repQ: "Financial reporting", reporting: ["Annual accounts only", "Quarterly reports", "Monthly reports with budget follow-up"],
    conQ: "Contracts with customers and suppliers", contracts: ["Mostly verbal or informal", "Mixed", "Written and transferable to a new owner"],
    update: "Update the valuation", example: "Show example",
    rTitle: n => `${n}: valuation`, rMeta: (i, u) => `${i} · amounts in ${u} unless stated otherwise`,
    kEq: "Equity value – historical figures", kEqSub: (m, nd) => `Midpoint ${m} after net debt of ${nd}`,
    kEv: "Enterprise value", kEvSub: "Before net debt. The multiple and adjustments are in the report.",
    kPot: "Value if exit-ready", kPotSub: g => `+${g} at today's earnings`, kPotNone: "Already close to the best level",
    scoreH: "Exit readiness", scoreHint: "How a buyer's due diligence team would rate the company today, out of 100.",
    flagsH: "What a buyer will point out", flagsHint: "The three most important findings. The report covers all of them, with actions for each.",
    more: n => `+ ${n} more findings in <a href="#order" target="_self">the full report</a>.`,
    noFlags: "No major red flags based on the information you have given.",
    planH: "Value creation plan", planHint: "Your most valuable action is shown free. The report ranks every action with value, steps and timing.",
    planCols: ["Action", "Timeframe", "Value uplift"], inReport: "In the report",
    planNone: "The company already scores well on the main value drivers. The next step is to prepare the sale process.",
    buildH: "How the valuation is built", buildHint: "From the industry's base multiple to your company's multiple, and the normalisation of EBITDA.",
    veil: "The multiple bridge and normalised EBITDA are in the report",
    yours: "Your multiple", floor: " (floor)",
    sizeLbl: n => `Size (EBITDA ${n})`, growthLbl: p => `Revenue growth (${p}% a year)`,
    upsellH: "Order the full report",
    upsellP: "A PDF report in English from Adsco Capital Partners: full valuation with scenarios and sensitivity analysis, all of the buyer's findings, a value creation plan with steps and timing, buyer types, deal structure, a due diligence checklist and the sale process.",
    cmpFree: "Free", freeList: ["Equity value range", "Exit readiness score", "The three most important findings", "Your most valuable action"],
    cmpPaid: p => `Report · ${p}`,
    paidList: ["Point valuation with low, base and high scenarios", "Sensitivity analysis", "Multiple bridge and EBITDA normalisation", "All findings with actions", "Full value creation plan with steps and timing", "Buyer types, what they pay for and indicative multiples", "Due diligence checklist", "Sale process and deal structure"],
    emailPh: "you@company.com", order: p => `Order the report · ${p}`,
    pricingH: "Prices", vat: VATL, free: "Free", prices: [CUR + " 2,995", CUR + " 6,995"],
    plans: [
      ["Quick valuation", ["Upload the " + AR, "Indicative value range", "Exit readiness score"]],
      ["Report", ["Everything in the quick valuation", "PDF report in English", "12–24 month value creation plan", "Buyer types and sale process"]],
      ["Report + review with a partner", ["Everything in the report", "60 minutes with a partner at Adsco Capital Partners", "Review of your normalisations"]]
    ],
    aboutH: "Senior advisers behind every valuation",
    aboutP: "Exitkompass is developed by Adsco Capital Partners, a partner-owned, independent M&A and capital markets advisory firm headquartered in Stockholm. We work with owners, founders and investors in the Nordic mid-market, from the first strategic conversation to closing.",
    stats: [["60+", "years of combined capital markets experience"], ["5", "Nordic IPOs led, 2016–2022"], ["2", "senior partners on every deal"], ["Independent", "partner-owned, no lending or research"]],
    aboutCta: "Thinking about selling?", aboutLink: "Book a free, confidential meeting with a partner →",
    foot: "Exitkompass by Adsco Capital Partners · Stockholm",
    st: {
      preparing: "Preparing the payment…",
      pay: "Open the order form →",
      payNote: e => `You pay by card via Stripe. The report is sent to ${e} straight after payment.`,
      checkoutFail: "The payment could not be started. Please try again shortly.",
      tooBig: "The file is too large. Upload a PDF of at most 20 MB.",
      config: "The service is not fully configured. Please contact Adsco Capital Partners.",
      reading: f => `Reading <strong>${f}</strong>…`, scan: "The PDF is scanned. Reading the pages as images…", finding: "Looking for revenue, EBITDA, cash and debt…",
      noReader: "Upload does not work in this view. Enter the figures in the form instead.",
      scanNoImg: "The PDF is scanned and image reading is not available here. Enter the figures manually.",
      badType: "Upload a PDF or a photo (PNG or JPG) of the income statement.",
      notGranted: "Upload needs your approval. Upload the file again and allow it, or enter the figures manually.",
      rate: "Too many uploads in a short time. Wait a minute and try again.",
      generic: "Something went wrong while reading the report. Enter the figures manually.",
      unreadable: "The report could not be read. Enter the figures manually.",
      noFigures: "No income statement figures were found. Check that it is the full " + AR + ", or enter the figures manually.",
      got: (n, o) => `Figures taken from the ${AR}${n ? " for " + n : ""}${o ? " (" + o + ")" : ""}.`,
      green: "Green fields come from the report.",
      missing: l => `Yellow fields were not in the report and have been copied from the nearest year: ${l}.`,
      salary: p => `The owner's salary includes employer's contributions of about ${p}%.`,
      check: "Check the figures, then answer the buyer's questions.",
      revL: "Revenue",
      badEmail: e => `Enter a valid email address, for example ${e}.`,
      building: e => `Prototype: no payment is taken. Creating the report that would be sent to ${e}…`,
      done: f => `The report is ready: ${f}. In the live version it is sent by email after payment.`,
      declined: "The download was cancelled. Click the button again to save the report.",
      noDl: "Download is not available in this view.",
      buildFail: "The report could not be created."
    },
    nav1: "Documents", nav1s: "Registration number and " + AR + "s",
    nav2: "Figures and questions", nav2s: "Check and complete",
    nav3: "Result", nav3s: "Valuation and actions",
    s1Eye: "Step 1 of 3", s1H: "Find your company",
    s1P: "Enter the registration number and we fetch the " + AR + "s and fill in the figures for you. If they cannot be fetched, upload them as PDF.",
    slotY: ["Latest year", "Year before", "Two years ago"],
    slotEmpty: "Choose a PDF or drag it here", slotBusy: "Reading and uploading…", slotSaving: "Uploading…",
    slotFound: (y, r) => `Financial year ${y}` + (r ? ` · revenue ${r}` : ""),
    pillOk: "Uploaded and read", pillManual: "Uploaded", pillErr: "Error", pillBusy: "Reading…",
    slotManual: "The figures could not be read automatically. We will read the document manually.",
    remove: "Remove",
    extraH: "Upload more information (optional)",
    extraP: "For example the latest monthly report, budget or business plan. Not required, but it gives a better assessment.",
    extraGrowth: "Is your company in a growth phase? Add the business plan for a better valuation.",
    extra3H: "Do you have a business plan or budget? Upload it here",
    extra3P: "The valuation above is based only on historical figures from the annual reports. If you upload monthly reports, a budget or a business plan, they are weighted into the report: the monthly reports update the earnings base and the budget is weighted in at 20–35% depending on how well it is supported. Optional.",
    extraBtn: "Upload files",
    chipUp: "uploading…", chipOk: "saved", chipErr: "failed",
    leadH: "Save the result", leadP: "Not ready to sell yet? Get a copy of the valuation by email, or a reminder when it is time to update it. Optional and free.",
    leadCopy: "Send a copy of the result to my email", leadRemind: "Remind me to update the valuation in 6 months", leadConsent: "I agree that Adsco Capital Partners stores my email for this.",
    leadBtn: "Send", leadBusy: "Sending…", leadNeed: "Enter a valid email address, choose at least one option and accept the condition.", leadErr: "It could not be sent right now. Please try again shortly.",
    leadOk: (c, r, e) => (c ? `Done! The copy has been sent to ${e}.` : "Done!") + (r ? " We will remind you in six months." : ""),
    topActH: "Your most valuable action", topActMore: n => `${n} more ${n === 1 ? "action" : "actions"} with impact and timing ${n === 1 ? "is" : "are"} in the value creation plan in the report.`,
    normH: "Your normalised EBITDA", normRow1: "EBITDA, weighted 3-year average (one-offs added back)", normRowLtm: "EBITDA, weighted with the last 12 months (one-offs added back)", normRow2: "Owner's salary adjusted to market level", normRow3: "Normalised EBITDA – what buyers value",
    normHighSal: (own, mkt, d) => `You pay yourself ${own}, more than the ${mkt} an external CEO would cost. A buyer counts the market salary, so ${d} is added back to earnings. That raises the value compared with a plain multiple of reported EBITDA.`,
    normLowSal: (own, mkt, d) => `You pay yourself ${own}, less than the ${mkt} an external CEO would cost, for example to take more as dividends. A buyer has to hire a CEO, so ${d} is deducted from earnings. That is why earnings here are lower than in the accounts.`,
    normEqSal: own => `Your salary of ${own} matches the market salary for a CEO, so no adjustment is needed.`,
    normNoSal: "No owner's salary entered. If you take a salary or dividends that differ from a market CEO salary, enter it in step 2 and earnings are adjusted the way a buyer would.", chipReading: "reading…", chipRead: "figures read", chipNoRead: "read by the adviser",
    docH: "Material read:", docBud: (y, r) => `budget ${y} with revenue ${r}.`, docYtd: (n, r, e) => `Monthly report: ${n} months, revenue ${r}, EBITDA ${e}.`,
    docW: w => `The budget is weighted in at ${w}% in the report. Blended equity value:`, docOnlyYtd: "The monthly reports update the earnings base in the report.",
    next1: n => n ? `Continue with ${n} ${n === 1 ? "document" : "documents"}` : "Continue",
    skip: "No documents to hand? Enter the figures yourself",
    s1Fine: "Documents are stored encrypted by Adsco Capital Partners, used only for your valuation and deleted on request. We never share them with anyone.",
    howH: "How it works",
    how: [["Enter the registration number or company name", "We fetch the " + AR + "s. You can also upload them as PDF for a better analysis."], ["Get the result straight away", "Value range, exit score and the most important actions."]],
    ticks: ["Takes about three minutes", "Free, no sign-up"],
    quote: "Buyers pay for what they can verify. A well-prepared company gets both a higher price and better terms.",
    quoteBy: "Adsco Capital Partners",
    drvH: "What a buyer looks at",
    drivers: [["Profitability and growth", "Normalised EBITDA and the three-year trend set the base value."], ["Owner dependency", "Can the business run without you? It affects both price and terms."], ["Recurring revenue", "Contracts and repeat customers make future revenue predictable."], ["Documentation", "Reporting and written contracts make due diligence smooth."]],
    tipsH: "Good to know",
    tips: [["Where do I find EBITDA?", "Operating profit plus depreciation and amortisation in the income statement. We calculate it for you from the " + AR + "."], ["Owner's salary and market salary", "If you pay yourself more or less than an employed CEO would cost, earnings are adjusted by the difference."], ["One-off costs", "Costs that will not recur, such as a move or a dispute, are added back to earnings."]],
    whyH: "Why do we ask this?",
    whyP: "Two companies with the same earnings can sell for very different prices. A buyer pays more when revenue is spread and recurring, and when the business runs without the owner. Your answers move the multiple up or down.",
    orgL: "Registration number or company name", orgPh: S ? "556677-8899 or Company AB" : "912 345 678 or Company AS",
    srchLooking: "Searching…", srchPick: "Choose the company in the list.", srchNone: "No company found with that name. Try another name or enter the registration number.", srchShort: "Type at least three letters of the name.",
    orgEmpty: "Enter the registration number first and click Fetch.",
    ctaH: "Done! How would you like to continue?", freeBtn: "See your free valuation →", ctaSub: "Answer seven short questions and the result is shown straight away. Or order the report directly:",
    mktLine: (q, med, pe, st) => `Market: unlisted mid-sized European companies sold at a median of ${med} EBITDA (Argos Index, ${q}). Funds paid ${pe} and industrial buyers ${st}. Smaller companies usually sell lower; Nordic serial acquirers typically pay 5–8x EBITA.`,
    mktBuyers: b => `Active buyers in the industry: ${b}.`,
    cycH: "Business cycle in the industry", cycLbl: l => `Business cycle (${l.toLowerCase()})`,
    cycState: ["Much weaker than normal", "Weaker than normal", "Normal", "Stronger than normal", "Much stronger than normal"],
    cycLine: (c, v, adj) => c.src === "SSB" ? `Statistics Norway's business tendency indicator for ${c.label.toLowerCase()}, ${c.period}: ${v}. ` + (adj ? `That gives ${adj} on the multiple.` : "It does not affect the multiple.") : `The National Institute of Economic Research's barometer for ${c.label.toLowerCase()}, ${c.period}: ${v} (normal = 100). ` + (adj ? `That gives ${adj} on the multiple.` : "It does not affect the multiple."),
    gpIntro: "Without material, the report is based on historical figures. With material, the adviser does this: monthly reports give the last twelve months, which get the largest weight in the earnings base. The budget gives a growth value weighted in at 20%, up to 35% if a business plan explains it and the results so far this year are on track. Everything is optional and treated confidentially.",
    gpPlanH: "Business plan", gpPlanP: "Strategy, market and targets. PDF, Word or PowerPoint.",
    gpBudH: "Budget or forecast", gpBudP: "The next 1–3 years. Excel or PDF.",
    gpMonH: "Latest monthly reports", gpMonP: "Income statement and balance sheet year to date.",
    gpPick: "Choose files", gpNote: "You can also continue without documents and send them later.",
    gpGo: n => n ? `Continue to order (${n} ${n === 1 ? "document" : "documents"}) →` : "Continue to order →",
    kindLbl: { plan: "Business plan", budget: "Budget", monthly: "Monthly report" },
    rateLbl: r => `Interest rates (policy rate ${r}%)`,
    rateLine: (r, src, dt, adj, ref) => `The multiples are adjusted for interest rates: ${cb(src)}'s policy rate is ${r}% (${dt}). ` + (adj ? `Compared with a normal level of ${ref}%, that gives ${adj} on the multiple.` : `That is close to a normal level of ${ref}% and does not affect the multiple.`),
    bH: "Compared with the industry",
    bSrc: b => S ? `Statistics Sweden industry ratios ${b.year} · ${b.code} ${b.label} · ${b.size === "TOT" ? "all sizes" : b.size === "001" ? "0 employees" : b.size.replace("+", "at least ").replace("-", "–") + " employees"} · ${Number(b.n).toLocaleString("en-GB")} companies` : `Statistics Norway ${b.year} · ${b.code} ${b.label} · ${Number(b.n).toLocaleString("en-GB")} companies`,
    bYou: y => `Your company ${y}`, bMed: "Industry median (quartiles)", bMedS: "Industry median", bAvg: "Industry average", bMargin: "Operating margin", bGrowth: "Revenue growth", bPerEmp: "Revenue per employee (thousands)",
    bPos: ["Weakest quarter", "Below median", "Above median", "Top quarter"], bAbove: "Clearly above average", bBelow: "Clearly below average", bNear: "Close to average",
    bAdj: x => `The margin compared with the industry gives ${x} on the multiple.`, bNoAdj: "The margin is within the industry's normal range and does not affect the multiple. Growth is already counted separately.",
    arH: y => `What the ${AR} ${y} says`, arSrcBV: "We have read the directors' report, the notes and the auditor's report from " + REG + ". Risk flags affect the valuation; other points help you answer the questions above correctly.", arSrcPdf: "We have read the text of the uploaded " + AR + ". Risk flags affect the valuation; other points help you answer the questions above correctly.",
    arAbout: "The business:", arEmp: n => `Average number of employees: ${n}`, arAdj: x => `${x} on the multiple`, arNone: "No risk flags in the text (going concern, audit qualification, capital deficiency, disputes).",
    tf: { gc: "The auditor points to material uncertainty about going concern", qual: "The auditor's report contains a qualification or disclaimer", kbr: "Equity below half of the share capital / capital deficiency", dispute: "A dispute or legal proceedings are mentioned", custdep: "Dependence on one or a few large customers is mentioned – check your answer on the largest customer", recur: "Subscriptions, licences or service contracts are mentioned – include them in the share of recurring revenue", growth: "Expansion or growing demand is mentioned" },
    docFail: "The document cannot be shown right now. Please try again shortly.",
    repLoadingBV: S ? "Fetching the annual reports from Bolagsverket…" : "Fetching the annual accounts…",
    noBV: "We found no digital " + AR + "s to fetch for the company. Upload the latest " + AR + "s as PDF (ideally 3–5 years) for a more reliable valuation:",
    repSavedBV: n => `${n} ${AR}s fetched${S ? " from Bolagsverket" : ""} and saved to your valuation:`, repItem: y => `${S ? "Annual report" : "Annual accounts"} ${y}`, repOpen: "Open",
    repLoading: "Fetching the full " + AR + "s…", repSaved: n => `${n} full ${AR}s fetched and saved to the report:`,
    manualUp: "Don't have the number to hand? Upload the " + AR + "s directly",
    addUp: "Also upload the " + AR + "s as PDF (gives depreciation and debt)",
    listedH: ex => `Listed company – ${ex}`,
    listedP: "For a listed company, the market capitalisation (share price × number of shares) is the market's current value of the equity. In a takeover of the whole company a bid premium over the share price is normally paid, often 20–40%. Our valuation below is based on comparable transactions for unlisted companies and should be seen as a cross-check, not a replacement for the share price.",
    listedLink: "See the current market cap →",
    listedQ: "market cap",
    upAskNO: "The register only provides key figures. Upload the three latest annual accounts as PDF (from your accountant or Altinn) for a more precise analysis:",
    noReports: "We could not find the company's accounts automatically. Upload the three latest " + AR + "s as PDF here:",
    fetchedH: n => `Fetched: ${n}`, fetchedSrc: S ? "From Bolagsverket (TSEK). The figures are filled in in the next step." : "From the Register of Company Accounts, Brønnøysund Register Centre (TNOK). The figures are filled in in the next step.", ebitL: "Operating profit (EBIT)",
    fetchedSrcAB: "From the annual reports filed with Bolagsverket (TSEK). The figures are filled in in the next step.", fetchedGroup: "Group figures (consolidated accounts).", heroFit: "Built for small and medium-sized companies with revenue up to about " + CUR + " 500 million. Larger companies and groups are best valued in a conversation with a partner.",
    pdfLink: S ? "Download the annual reports as PDF from Allabolag and upload them here →" : "Open the annual accounts →",
    noDep: "",
    orgBad: S ? "Check the registration number (10 digits, for example 556677-8899)." : "Check the registration number (9 digits, for example 912 345 678).",
    orgOkSE: "Thank you. The registration number is sent with your order.",
    orgLooking: "Fetching details…", orgNotFound: "No company found with that number.", orgFail: "Could not fetch details right now. Continue by uploading the " + AR + "s.",
    orgFound: (n, y) => `${n}: figures for ${y} fetched. You can also upload the ${AR}s.`, orgFoundName: n => `${n} found.`,
    pkgH: "Choose a level – start free or order directly",
    discSum: "Indicative valuation – not advice. Read the important information",
    disc: [
      ["Indicative valuation.", "Exitkompass gives an approximate value range based on simplified industry multiples and the information fetched or provided. It is not a valuation opinion, a fairness opinion or investment, tax, accounting or legal advice."],
      ["Value in a sale, not for legal purposes.", "Exitkompass shows what the company may be worth to a buyer in a sale (going-concern market value, based on multiples). It is not a net asset valuation, a liquidation value or a valuation for divorce, estate settlement, inheritance, disputes, minority buy-outs or tax purposes. Those require a formal valuation using the method the purpose demands."],
      ["The actual price can differ materially.", "What a buyer pays depends on, among other things, market conditions, the type of buyer, financing, due diligence, contract terms and the company's prospects. Do not make decisions based on the tool alone."],
      ["Sources.", "Figures and annual reports are fetched from public registers and services (Bolagsverket and Allabolag/UC AB in Sweden, the Brønnøysund Register Centre in Norway) or provided by you. Figures and text in annual reports are interpreted automatically and may be wrong or incomplete. We do not verify the information and are not responsible for errors in the sources. Always compare with the company's annual report."],
      ["No engagement.", "Using the tool or ordering a report does not create an advisory engagement. That requires a written agreement with Adsco Capital Partners. Adsco is not liable for losses resulting from decisions made with the support of the tool or the report."],
      ["Your data.", "Registration numbers, figures and documents you upload are stored by Adsco Capital Partners (Google Workspace) and used only to produce your valuation and report. We do not share them with third parties and delete them on request."]
    ],
    adH: "About Adsco Capital Partners",
    adLead: "Exitkompass is developed by Adsco Capital Partners, a partner-owned, independent M&A and capital markets advisory firm headquartered in Stockholm. We work with founder-, family- and PE-owned companies in the Nordic mid-market, from the first strategic conversation to closing.",
    adStats: [["60+", "years of combined capital markets experience"], ["5", "Nordic IPOs led 2016–2022"], ["Since 1996", "in investment banking"], ["2", "senior partners on every deal, all the way"]],
    adTeam: [["Sture Stölen", "Founding partner", "20+ years in IR and M&A · led 5 Nordic IPOs 2016–2022"], ["Lars Carlson", "Founding partner", "25+ years in the industry, including ECM and M&A · investment banker since 1996"]],
    adIndep: "Independent: no lending and no research. Only your result counts.",
    pkgs: [
      { name: "Quick valuation", items: ["Value range directly on the page", "Exit readiness score", "The three most important findings"] },
      { name: "Report", tag: "Recommended", items: ["Full PDF report in English", "Scenarios and sensitivity analysis", "12–24 month value creation plan", "Growth valuation based on your business plan", "Buyer types and sale process", "Reviewed by a senior adviser, delivered within 1–2 working days"] },
      { name: "Report + review", tag: "With a partner", items: ["Everything in the report", "60 minutes with a partner at Adsco Capital Partners", "Review of normalisations and next steps"] }
    ],
    startFree: "Start free", choose: ["Choose report", "Choose with review"], buy: ["Buy the report", "Buy with review"], haveFree: "You have this ✓",
    chosen: n => `You have chosen ${n}. Start with the documents below; you order after seeing your valuation.`,
    emailL: "Your email", opened: "The order form opened in a new tab. Send it and we will be in touch about payment and delivery.",
    s2Eye: "Step 2 of 3", s2H: "Check the figures",
    s2PAuto: "Green fields have been read from your " + AR + "s. Correct anything that looks wrong, fill in what is missing and answer the buyer's questions.",
    s2PManual: "Enter revenue and EBITDA for the last three years in " + K + " and answer the buyer's questions.",
    keyGreen: "Read from the " + AR, keyYellow: "Missing, please check",
    to3: "Show my valuation", back1: "Back to documents",
    need: "Enter revenue and EBITDA for at least the latest year.",
    orgGo: "Start valuation →", micro1: "Takes about three minutes", micro2: "Free, no sign-up",
    lockH: "Included in the full report", lockP: "Exit readiness by area, strategic value, sensitivity analysis, the full 12–24 month value creation plan and which buyers pay the most for a company like yours.",
    lockExit: "Exit readiness by area", lockStrat: "Strategic value", lockSvPrem: "Strategic premium", lockSvVal: "Value incl. premium", lockSvDrv: "Value drivers", lockSens: "Sensitivity analysis", lockPlan: "Value creation plan 12–24 months", lockBuyers: "Buyer types and multiples",
    lockBtn: p => `Unlock in the report · ${p}`, lockDeliv: "Delivered within 1–2 working days, reviewed by a senior adviser.",
    delivPaid: "⏱ Delivered within 1–2 working days", delivFree: "⚡ Directly on the page",
    largeH: "Your company is larger than Exitkompass is built for",
    largeP: (r, e) => `With revenue of ${r} and EBITDA of ${e}, the value is set by listed peers and strategic transactions, not by multiples for small and medium-sized companies. An automatic figure here would be misleading, usually far too low, so we do not show one.`,
    largeP2: "Book a free, confidential meeting with a partner at Adsco Capital Partners. We go through the valuation picture, the likely buyers and your strategic options.",
    largeNote: "The exit readiness score and findings below apply in full to larger companies too.",
    largeBtn: "Book a meeting with a partner →",
    mName: "Meeting with a partner", mPrice: "Free of charge", mTag: "Confidential",
    mItems: ["Valuation picture based on listed peers and transactions", "Buyer landscape: strategic buyers and private equity", "Strategic options and timing", "60 minutes with a senior partner"],
    mH: "Book a meeting with a partner", mP: "Fill in your details and we will be in touch within one working day to book a time. Everything is handled confidentially.",
    mSend: "Send meeting request", mDoneH: n => `Thank you${n ? ", " + n : ""}! We have received your request.`, mDoneP: e => `We will contact you at ${e} within one working day to book the meeting.`,
    mFine: "Free of charge and without obligation.", mWhen: "Reply", mWhenV: "Within one working day",
    oEye: "Order", oH: "Order your report",
    oP: "Fill in your details and we will get back to you within one working day. Your figures and uploaded documents are sent automatically.",
    oBack: "Back", oName: "Your name *", oEmail: "Email *", oPhone: "Phone", oCompany: "Company *", oOrg: "Registration number",
    oMsg: "Message (optional)",
    oConsent: "I accept the terms of purchase and agree that Adsco Capital Partners processes my details and documents to produce the report and contact me about the order.",
    oFine: S ? "No payment now. An invoice is sent with the report, payable within 10 days. VAT is added." : "No payment now. An invoice is sent with the report, payable within 10 days. The invoice is without VAT.",
    oSend: p => `Send order · ${p}`, oSending: "Sending the order…",
    oNeed: "Enter your name, a valid email address and the company.", oNeedOk: "Please confirm that we may process the information.",
    oFail: "The order could not be sent right now.", oFailLink: "Send it via our form instead →",
    oDocs: n => `${n} ${n === 1 ? "document" : "documents"} and your valuation are sent with the order.`,
    oDelivery: "Delivery", oDeliveryV: "1–2 working days", oPayL: "Payment", oPayV: S ? "Invoice, 10 days + VAT" : "Invoice, 10 days, no VAT", oDocsL: "Documents", oDocsV: n => n ? `${n} ${n === 1 ? "document" : "documents"}` : "Can be sent later",
    oWho: "Reviewed by a senior adviser at Adsco Capital Partners.",
    oDoneH: n => `Thank you${n ? ", " + n : ""}! Your order has been received.`,
    oDoneP: e => `We will get back to ${e} within one working day with a confirmation and next steps. Please quote the order number if you contact us.`,
    oDoneBack: "Back to the valuation",
    basis: "The value is based on historical figures from the annual reports and is a floor. Monthly reports, budget and business plan are weighted in only in the report. The model does not see growth plans, technology, contracts or what the company is strategically worth to a buyer.",
    upsideH: "Your company may be worth more than the figures show",
    upsideP: "Buyers often pay more for companies with the following, and it is only partly captured by historical figures:",
    upsideP2: "With a business plan, budget and the latest monthly reports, we value the growth case in the report and weight it into the valuation at 20–35%, depending on how well the budget is supported.",
    upUpload: "Upload a business plan or budget",
    upsideBtn: "Get a valuation of the growth potential →",
    upGrowth: g => `Strong growth: ${g}% a year in recent years`,
    upRecur: r => `High share of recurring revenue: ${r}%`,
    upMargin: "An established revenue base with a low margin today, where the value lies in scaling",
    upTech: n => `An industry where buyers pay for technology and scalability (${n})`,
    advH: "Growth plan (adviser)",
    advP: "Budgeted revenue in " + K + " for the next three years, expected EBITDA margin in year 3 and required return. Gives a growth valuation in the report.",
    advY: y => `Revenue ${y}`,
    advM: "EBITDA margin year 3, %",
    advR: "Required return, %",
    advPlanChk: "A business plan explaining the budget is available", advYtdP: "Monthly reports (thousands, year to date). Gives the last twelve months (LTM) and checks whether the company is on budget. At least 3 months.",
    advYtN: "Number of months", advYtR: "Revenue year to date", advYtE: "EBITDA year to date", advYtRp: "Revenue same period last year", advYtEp: "EBITDA same period last year",
    advLtm: x => `EBITDA last twelve months: ${x}.`, advBlend: (w, x) => `The budget is weighted in at ${w}%: blended equity value ${x}.`,
    advPdf: "Create PDF report",
    advBusy: "Creating the report…",
    advDone: "Done, the report has been downloaded.",
    advErr: "The report could not be created.",
    gvLine: (lo, hi) => `With your business plan: ${lo} – ${hi} in equity value today (if the plan is met).`,
    fetchedInd: n => `Industry: ${n}. If that is wrong, you can change it in the next step.`,
    kEvMethod: () => "Before net debt. A blend of the EBITDA, EBIT and revenue multiples, see below.",
    blFree: "Multiples, value per method, weights and the multiple it corresponds to are shown in the report.",
    bFree: "The industry's levels and how the comparison affects the multiple are shown in the report.",
    brFree: "The direction is shown here. How much each factor raises or lowers the multiple is shown in the report.",
    rateFree: (r, src) => `The multiples are adjusted for interest rates (${cb(src)}'s policy rate ${r}%).`,
    cycFree: c => `Source: ${c.src === "SSB" ? "Statistics Norway" : "the National Institute of Economic Research's Economic Tendency Survey"} for ${c.label.toLowerCase()}. The indicator value and its effect on the multiple are shown in the report.`,
    mktFree: n => "The market for unlisted companies (Argos Index) and " + (n ? `${n} named, active buyers in your industry` : "active buyers in the industry") + " are shown in the report.",
    blH: "Valuation with three multiples", blBasis: "Company figure", blMult: "Multiple", blVal: "Value (EV)", blW: "Weight",
    blEbitda: "EV/EBITDA", blEbit: "EV/EBIT", blRev: "EV/revenue", blSum: "Blended enterprise value",
    blImp: (a, b, c) => "Blended, that corresponds to " + [a && a + " EBITDA", b && b + " EBIT", c && c + " revenue"].filter(Boolean).join(", ") + ". The range above is ±0.75x on the earnings multiples.",
    needQ: "Enter the largest customer's share and the share of recurring revenue (0–100%). They affect the valuation a lot.",
    s3Eye: "Step 3 of 3 · Your result", back2: "Change details",
    upEye: "Full report",
    upShort: "A PDF report in English from Adsco Capital Partners, based on your figures and documents and reviewed by an adviser.",
    docsN: n => n ? `Your ${n} uploaded ${n === 1 ? "document is" : "documents are"} sent with the order and reviewed by an adviser.` : "You can send " + AR + "s and other material after ordering.",
    s1Read: (n, o, ys) => `We have read ${ys} for ${n || "the company"}${o ? " (" + o + ")" : ""}.`,
    s1NoRead: "The documents are uploaded, but the figures could not be read automatically (they may be scanned). Fill them in in the next step. We read the documents manually when you order the report.",
    s1Partial: "Some documents could not be read automatically. Check the figures in the next step.",
    upFail: "A document could not be uploaded. Try again or continue without it.",
    badType: "That file type is not supported. Use PDF, Word, Excel, PowerPoint or an image.",
    badTypeAnnual: "Upload the " + AR + " as PDF (or as an image if you only have a scanned copy).",
    tooBig: "The file is too large. The maximum size is 20 MB.",
    tooMany: "You have uploaded the maximum number of documents.",
    privacy: "Information and documents fetched or uploaded are stored in Adsco Capital Partners' Google Workspace and used only to produce your valuation and report. Contact us to have them deleted.",
    langH: "Language",
    svH: "Strategic value",
    svLevel: ["Low strategic interest", "Some strategic interest", "High strategic interest"],
    svP: "A strategic buyer, such as a competitor, customer, supplier or serial acquirer, may pay more than the financial value above if the company brings synergies: new customers, markets, products, technology or skills. Our assessment is based on:",
    svDrv: { ind: n => `The industry (${n}), where buyers actively acquire and pay for synergies`, recur: "Recurring revenue a buyer can build on", growth: "Growth that strengthens a buyer's own platform", margin: "A margin in the industry's top quarter", cust: "A broad customer base without dependence on single customers", buyers: "Active serial acquirers buying companies in the industry" },
    svNone: "Few of the factors that usually attract strategic buyers show in the figures. A strategic premium then depends mainly on who the buyer is.",
    svFree: "What drives the strategic interest, the indicative premium in money and which buyers could pay it are shown in the report.",
    potFree: "How much the value could rise once the company is exit-ready is shown in the report.", scoreFree: "The score per area and what pulls it down are shown in the report.",
    svPrem: (r, a) => `A strategic buyer could pay about ${r} above the enterprise value, that is ${a} more.`,
    svNote: "The premium is not included in the valuation above. It requires the right buyer and a competitive sale process."
  };
}
UI.EN = { SE: Object.assign({}, UI.SE, mkEN("SE")), NO: Object.assign({}, UI.NO, mkEN("NO")) };
UI.SE.flSE = UI.NO.flSE = "Sverige"; UI.SE.flNO = UI.NO.flNO = "Norge";
UI.SE.defName = "Ditt bolag"; UI.NO.defName = "Ditt selskap";
UI.SE.langH = "Språk"; UI.NO.langH = "Språk";

/* ---------- Cross combinations: Swedish texts for a Norwegian company, Norwegian texts for a Swedish company ----------
   The language follows the language selector, the registry, currency and VAT follow the country. */
UI.X = {
  SENO: Object.assign({}, UI.SE, {
    step1: "Ladda upp årsredovisningen (PDF) eller fyll i omsättning och EBITDA i TNOK.",
    legFin: "Siffror (TNOK)",
    buildHint: "Från branschens basmultipel för norska bolag till ditt bolags multipel, och normaliseringen av EBITDA.",
    emailPh: "du@foretag.no", vat: "utan moms",
    orgPh: "912 345 678 eller Företaget AS",
    orgBad: "Kontrollera organisationsnumret (9 siffror, till exempel 912 345 678).",
    orgLooking: "Hämtar uppgifter från Brønnøysundregistrene…",
    orgFound: (n, y) => `${n}: siffror för ${y} hämtade från Regnskapsregisteret. EBITDA är tills vidare satt lika med rörelseresultatet – ladda upp årsredovisningarna för att få med avskrivningarna.`,
    s2PManual: "Fyll i omsättning och EBITDA för de tre senaste åren i TNOK och svara på köparens frågor.",
    advP: "Budgeterad omsättning i TNOK för de kommande tre åren, förväntad EBITDA-marginal år 3 och avkastningskrav. Ger en tillväxtvärdering i rapporten.",
    fetchedSrc: "Från Regnskapsregisteret, Brønnøysundregistrene (TNOK). Siffrorna är ifyllda i nästa steg.",
    upAskNO: "Registret ger bara nyckeltal. Ladda upp de tre senaste årsredovisningarna som PDF (från redovisningsbyrån eller Altinn) för en mer exakt analys:",
    noBV: "Vi hittade inga årsredovisningar att hämta automatiskt för bolaget. Ladda upp de senaste årsredovisningarna som PDF (gärna 3–5 år) så blir värderingen säkrare:",
    repLoadingBV: "Hämtar årsredovisningarna…",
    repSavedBV: n => `${n} årsredovisningar hämtade och sparade till din värdering:`,
    arSrcBV: "Vi har läst förvaltningsberättelsen, noterna och revisionsberättelsen. Riskflaggor påverkar värderingen; övriga punkter hjälper dig att svara rätt på frågorna ovan.",
    pdfLink: "Öppna årsredovisningarna →",
    oFine: "Ingen betalning nu. Faktura skickas tillsammans med rapporten, 10 dagars betalningsvillkor. Fakturan är utan moms.",
    oPayV: "Faktura, 10 dagar, utan moms",
    cycLine: (c, v, adj) => `SSB:s sammanvägda konjunkturindikator för ${c.label.toLowerCase()}, ${c.period}: ${v} (genomsnitt över tid ${(Math.round(c.mean * 10) / 10).toLocaleString("sv-SE")}). ` + (adj ? `Det ger ${adj} på multipeln.` : "Påverkar inte multipeln."),
    cycFree: c => `Källa: SSB:s konjunkturindikator för ${c.label.toLowerCase()}. Indikatorvärde och påverkan på multipeln redovisas i rapporten.`,
    bSrc: b => `SSB:s nyckeltal för aktiebolag ${b.year} · ${b.label} · ${Number(b.n).toLocaleString("sv-SE")} företag`
  }),
  NOSE: Object.assign({}, UI.NO, {
    step1: "Last opp årsregnskapet (PDF) eller fyll inn driftsinntekter og EBITDA i TSEK.",
    legFin: "Tall (TSEK)",
    buildHint: "Fra bransjens basismultippel for svenske selskaper til selskapets multippel, og normaliseringen av EBITDA.",
    emailPh: "deg@selskap.se", vat: "eks. mva.",
    orgPh: "556677-8899 eller Selskapet AB",
    orgBad: "Kontroller organisasjonsnummeret (10 siffer, for eksempel 556677-8899).",
    orgLooking: "Henter opplysninger…",
    orgFound: (n, y) => `${n}: tall for ${y} hentet. Last gjerne opp årsregnskapene også.`,
    s2PManual: "Fyll inn driftsinntekter og EBITDA for de tre siste årene i TSEK og svar på kjøperens spørsmål.",
    advP: "Budsjettert omsetning i TSEK for de tre neste årene, forventet EBITDA-margin år 3 og avkastningskrav. Gir en vekstverdivurdering i rapporten.",
    fetchedSrc: "Fra Bolagsverket (TSEK). Tallene er fylt inn i neste steg.",
    fetchedSrcAB: "Fra årsregnskapene hos Bolagsverket (TSEK). Tallene er fylt inn i neste steg.",
    noBV: "Vi fant ingen digitale årsregnskap hos Bolagsverket for selskapet. Last opp de siste årsregnskapene som PDF (gjerne 3–5 år), så blir verdivurderingen sikrere:",
    repLoadingBV: "Henter årsregnskapene fra Bolagsverket…",
    repSavedBV: n => `${n} årsregnskap hentet fra Bolagsverket og lagret til verdivurderingen:`,
    arSrcBV: "Vi har lest årsberetningen, notene og revisjonsberetningen fra Bolagsverket. Risikoflagg påvirker verdivurderingen; øvrige punkter hjelper deg å svare riktig på spørsmålene over.",
    pdfLink: "Last ned årsregnskapene som PDF på Allabolag og last dem gjerne opp her →",
    oFine: "Ingen betaling nå. Faktura sendes sammen med rapporten, 10 dagers betalingsfrist. Mva. kommer i tillegg.",
    oPayV: "Faktura, 10 dager + mva.",
    cycLine: (c, v, adj) => `Konjunkturinstituttets barometer for ${c.label.toLowerCase()}, ${c.period}: ${v} (normalt 100). ` + (adj ? `Det gir ${adj} på multippelen.` : "Påvirker ikke multippelen."),
    cycFree: c => `Kilde: Konjunkturinstituttets konjunkturbarometer for ${c.label.toLowerCase()}. Indikatorverdi og påvirkning på multippelen vises i rapporten.`,
    bSrc: b => `SCBs bransjenøkkeltall ${b.year} · ${b.code} ${b.label} · ${b.size === "TOT" ? "alle størrelser" : b.size === "001" ? "0 ansatte" : b.size.replace("+", "minst ").replace("-", "–") + " ansatte"} · ${Number(b.n).toLocaleString("nb-NO")} foretak`
  })
};

/* ---------- Polish UI texts (country PL: KRS register, PLN, financial statements as XML from the RDF repository) ----------
   Built on top of the English set, so any key not translated here falls back to English rather than Swedish. */
function mkPL() {
  const K = "tys. PLN", CUR = "PLN";
  const AR = "sprawozdanie finansowe", ARS = "sprawozdania finansowe", ARG = "sprawozdań finansowych";
  const cb = src => src || "NBP";
  const n3 = (n, a, b, c) => n === 1 ? a : (n % 10 >= 2 && n % 10 <= 4 && (n % 100 < 10 || n % 100 >= 20)) ? b : c;
  const dok = n => n3(n, "dokument", "dokumenty", "dokumentów");
  return {
    html: "pl", loc: "pl-PL", by: "Adsco Capital Partners", flSE: "Szwecja", flNO: "Norwegia", flPL: "Polska", defName: "Twoja spółka",
    h1: "Ile Twoja firma jest warta dla kupującego i jak podnieść jej wartość?",
    heroP: "Bezpłatna, orientacyjna wycena w około trzy minuty. Pobieramy dane spółki z KRS, Ty wgrywasz sprawozdanie finansowe (plik XML) i odpowiadasz na siedem pytań. Otrzymujesz przedział wartości, ocenę gotowości do sprzedaży i działania, które najbardziej podnoszą wartość.",
    heroTrust: ["Bezpłatnie", "Bez rejestracji", "Ok. 3 minuty", "Mnożniki z transakcji M&A"],
    heroFit: "Dla małych i średnich spółek z przychodami do ok. 250 mln PLN. Większe spółki i grupy kapitałowe najlepiej wycenić w rozmowie z partnerem.",
    step1: "Wgraj sprawozdanie finansowe (XML) albo wpisz przychody i EBITDA w " + K + ".",
    step2: "Odpowiedz na pytania kupującego o zależność od właściciela, klientów i umowy.",
    step3: "Zobacz wycenę i zamów pełny raport.",
    dropTitle: "Wgraj sprawozdanie finansowe (XML)",
    dropSub: "Odczytujemy przychody, EBITDA, środki pieniężne i zadłużenie. Jeden plik XML zawiera dwa lata. Przeciągnij plik tutaj lub kliknij, aby go wybrać.",
    or: "albo wpisz dane samodzielnie",
    legCompany: "Spółka", name: "Nazwa spółki", industry: "Branża",
    legFin: "Dane finansowe (" + K + ")", yYear: "Rok", yRev: "Przychody netto",
    ownsal: "Wynagrodzenie właściciela", mktsal: "Rynkowe wynagrodzenie prezesa",
    oneoff: y => `Koszty jednorazowe ${y} (doliczane z powrotem)`,
    debt: "Zadłużenie oprocentowane", cash: "Środki pieniężne",
    salHint: "Wynagrodzenia podaj łącznie ze składkami ZUS po stronie pracodawcy.",
    legBuyer: "Pytania kupującego",
    topcust: "Największy klient, % przychodów", recur: "Przychody powtarzalne, %",
    ownerQ: "Gdybyś zniknął na trzy miesiące, firma…",
    owner: ["Miałaby problem: kluczowi klienci i decyzje przechodzą przeze mnie", "Poradziłaby sobie, z pewnymi zakłóceniami", "Działałaby normalnie"],
    mgmtQ: "Kadra zarządzająca poniżej właściciela", mgmt: ["Brak, wszystkim kieruję sam", "Częściowo: jedna lub dwie kluczowe osoby", "Pełny zespół zarządzający z jasnym podziałem ról"],
    repQ: "Sprawozdawczość finansowa", reporting: ["Tylko sprawozdanie roczne", "Raporty kwartalne", "Raporty miesięczne z kontrolą budżetu"],
    conQ: "Umowy z klientami i dostawcami", contracts: ["Głównie ustne lub nieformalne", "Różnie", "Pisemne i możliwe do przeniesienia na nowego właściciela"],
    update: "Zaktualizuj wycenę", example: "Pokaż przykład",
    rTitle: n => `${n}: wycena`, rMeta: (i, u) => `${i} · kwoty w ${u}, o ile nie podano inaczej`,
    kEq: "Wartość kapitału własnego – dane historyczne", kEqSub: (m, nd) => `Środek przedziału ${m} po długu netto ${nd}`,
    kEv: "Wartość przedsiębiorstwa (EV)", kEvSub: "Przed długiem netto. Mnożnik i korekty znajdziesz w raporcie.",
    kPot: "Wartość po przygotowaniu do sprzedaży", kPotSub: g => `+${g} przy dzisiejszych wynikach`, kPotNone: "Już blisko najlepszego poziomu",
    scoreH: "Gotowość do sprzedaży", scoreHint: "Jak zespół due diligence kupującego oceniłby dziś spółkę, w skali do 100.",
    flagsH: "Co wskaże kupujący", flagsHint: "Trzy najważniejsze ustalenia. Raport omawia wszystkie, z działaniami dla każdego.",
    more: n => `+ ${n} ${n3(n, "kolejne ustalenie", "kolejne ustalenia", "kolejnych ustaleń")} w <a href="#order" target="_self">pełnym raporcie</a>.`,
    noFlags: "Na podstawie podanych informacji brak poważnych sygnałów ostrzegawczych.",
    planH: "Plan wzrostu wartości", planHint: "Najcenniejsze działanie pokazujemy bezpłatnie. Raport szereguje wszystkie działania z wartością, krokami i harmonogramem.",
    planCols: ["Działanie", "Horyzont", "Wzrost wartości"], inReport: "W raporcie",
    planNone: "Spółka już dobrze wypada w głównych czynnikach wartości. Kolejny krok to przygotowanie procesu sprzedaży.",
    buildH: "Jak powstaje wycena", buildHint: "Od bazowego mnożnika branży do mnożnika Twojej spółki oraz normalizacja EBITDA.",
    veil: "Pomost mnożnika i znormalizowana EBITDA są w raporcie",
    yours: "Twój mnożnik", floor: " (minimum)",
    sizeLbl: n => `Wielkość (EBITDA ${n})`, growthLbl: p => `Wzrost przychodów (${p}% rocznie)`,
    upsellH: "Zamów pełny raport",
    upsellP: "Raport PDF po polsku od Adsco Capital Partners: pełna wycena ze scenariuszami i analizą wrażliwości, wszystkie ustalenia kupującego, plan wzrostu wartości z krokami i harmonogramem, typy kupujących, struktura transakcji, lista kontrolna due diligence i proces sprzedaży.",
    cmpFree: "Bezpłatnie", freeList: ["Przedział wartości kapitału własnego", "Ocena gotowości do sprzedaży", "Trzy najważniejsze ustalenia", "Najcenniejsze działanie"],
    cmpPaid: p => `Raport · ${p}`,
    paidList: ["Wycena punktowa ze scenariuszem niskim, bazowym i wysokim", "Analiza wrażliwości", "Pomost mnożnika i normalizacja EBITDA", "Wszystkie ustalenia z działaniami", "Pełny plan wzrostu wartości z krokami i harmonogramem", "Typy kupujących, za co płacą i orientacyjne mnożniki", "Lista kontrolna due diligence", "Proces sprzedaży i struktura transakcji"],
    emailPh: "ty@firma.pl", order: p => `Zamów raport · ${p}`,
    pricingH: "Ceny", vat: "netto", free: "Bezpłatnie", prices: ["1 190 zł", "2 790 zł"],
    plans: [
      ["Szybka wycena", ["Wgraj sprawozdanie finansowe", "Orientacyjny przedział wartości", "Ocena gotowości do sprzedaży"]],
      ["Raport", ["Wszystko z szybkiej wyceny", "Raport PDF po polsku", "Plan wzrostu wartości na 12–24 miesiące", "Typy kupujących i proces sprzedaży"]],
      ["Raport + omówienie z partnerem", ["Wszystko z raportu", "60 minut z partnerem Adsco Capital Partners (po angielsku)", "Przegląd Twoich normalizacji"]]
    ],
    aboutH: "Za każdą wyceną stoją doświadczeni doradcy",
    aboutP: "Exitkompass rozwija Adsco Capital Partners, niezależna firma doradcza w zakresie M&A i rynków kapitałowych, należąca do partnerów, z siedzibą w Sztokholmie. Pracujemy z właścicielami, założycielami i inwestorami na rynku średnich przedsiębiorstw, od pierwszej rozmowy strategicznej do zamknięcia transakcji.",
    stats: [["60+", "lat łącznego doświadczenia na rynkach kapitałowych"], ["5", "nordyckich IPO w latach 2016–2022"], ["2", "doświadczonych partnerów przy każdej transakcji"], ["Niezależni", "należymy do partnerów, bez kredytów i rekomendacji"]],
    aboutCta: "Myślisz o sprzedaży firmy?", aboutLink: "Umów bezpłatne, poufne spotkanie z partnerem →",
    foot: "Exitkompass · Adsco Capital Partners · Sztokholm",
    st: {
      preparing: "Przygotowujemy płatność…", pay: "Otwórz formularz zamówienia →",
      payNote: e => `Płacisz kartą przez Stripe. Raport zostanie wysłany na ${e} zaraz po płatności.`,
      checkoutFail: "Nie udało się rozpocząć płatności. Spróbuj ponownie za chwilę.",
      tooBig: "Plik jest za duży. Wgraj plik o rozmiarze do 20 MB.",
      config: "Usługa nie jest w pełni skonfigurowana. Skontaktuj się z Adsco Capital Partners.",
      reading: f => `Odczytujemy <strong>${f}</strong>…`, scan: "PDF jest skanem. Odczytujemy strony jako obrazy…", finding: "Szukamy przychodów, EBITDA, środków pieniężnych i zadłużenia…",
      noReader: "Wgrywanie nie działa w tym widoku. Wpisz dane w formularzu.",
      scanNoImg: "PDF jest skanem, a odczyt obrazów nie jest tu dostępny. Wpisz dane ręcznie.",
      badType: "Wgraj plik XML sprawozdania finansowego, PDF albo zdjęcie (PNG lub JPG) rachunku zysków i strat.",
      notGranted: "Wgranie wymaga Twojej zgody. Wgraj plik ponownie i zezwól na to albo wpisz dane ręcznie.",
      rate: "Zbyt wiele plików w krótkim czasie. Odczekaj minutę i spróbuj ponownie.",
      generic: "Coś poszło nie tak przy odczycie sprawozdania. Wpisz dane ręcznie.",
      unreadable: "Nie udało się odczytać sprawozdania. Wpisz dane ręcznie.",
      noFigures: "Nie znaleziono danych z rachunku zysków i strat. Sprawdź, czy to pełne sprawozdanie finansowe, albo wpisz dane ręcznie.",
      got: (n, o) => `Dane pobrane ze sprawozdania finansowego${n ? " " + n : ""}${o ? " (" + o + ")" : ""}.`,
      green: "Zielone pola pochodzą ze sprawozdania.",
      missing: l => `Żółtych pól nie było w sprawozdaniu, skopiowaliśmy je z najbliższego roku: ${l}.`,
      salary: p => `Wynagrodzenie właściciela obejmuje składki pracodawcy w wysokości ok. ${p}%.`,
      check: "Sprawdź dane, a potem odpowiedz na pytania kupującego.",
      revL: "Przychody",
      badEmail: e => `Podaj prawidłowy adres e-mail, na przykład ${e}.`,
      building: e => `Prototyp: płatność nie jest pobierana. Tworzymy raport, który zostałby wysłany na ${e}…`,
      done: f => `Raport jest gotowy: ${f}. W wersji produkcyjnej jest wysyłany e-mailem po płatności.`,
      declined: "Pobieranie zostało przerwane. Kliknij przycisk ponownie, aby zapisać raport.",
      noDl: "Pobieranie nie jest dostępne w tym widoku.",
      buildFail: "Nie udało się utworzyć raportu."
    },
    nav1: "Dokumenty", nav1s: "Numer KRS i sprawozdania",
    nav2: "Dane i pytania", nav2s: "Sprawdź i uzupełnij",
    nav3: "Wynik", nav3s: "Wycena i działania",
    s1Eye: "Krok 1 z 3", s1H: "Znajdź swoją spółkę",
    s1P: "Wpisz numer KRS lub NIP. Pobierzemy dane spółki z KRS, a Ty wgrasz sprawozdania finansowe jako pliki XML z Repozytorium Dokumentów Finansowych (RDF). Jeden plik zawiera dwa lata.",
    slotY: ["Ostatni rok", "Rok wcześniej", "Dwa lata wcześniej"],
    slotEmpty: "Wybierz plik XML lub PDF albo przeciągnij go tutaj", slotBusy: "Odczyt i wgrywanie…", slotSaving: "Wgrywanie…",
    slotFound: (y, r) => `Rok obrotowy ${y}` + (r ? ` · przychody ${r}` : ""),
    pillOk: "Wgrane i odczytane", pillManual: "Wgrane", pillErr: "Błąd", pillBusy: "Odczyt…",
    slotManual: "Nie udało się automatycznie odczytać danych. Odczytamy dokument ręcznie.",
    remove: "Usuń",
    extraH: "Wgraj dodatkowe informacje (opcjonalnie)",
    extraP: "Na przykład ostatni raport miesięczny, budżet lub biznesplan. Nie jest to wymagane, ale daje lepszą ocenę.",
    extraGrowth: "Twoja firma jest w fazie wzrostu? Dodaj biznesplan, aby uzyskać lepszą wycenę.",
    extra3H: "Masz biznesplan lub budżet? Wgraj go tutaj",
    extra3P: "Powyższa wycena opiera się wyłącznie na danych historycznych ze sprawozdań finansowych. Jeśli wgrasz raporty miesięczne, budżet lub biznesplan, uwzględnimy je w raporcie: raporty miesięczne aktualizują bazę wyników, a budżet ma wagę 20–35% w zależności od tego, jak dobrze jest uzasadniony. Opcjonalnie.",
    extraBtn: "Wgraj pliki",
    chipUp: "wgrywanie…", chipOk: "zapisano", chipErr: "błąd",
    leadH: "Zapisz wynik", leadP: "Jeszcze nie sprzedajesz? Otrzymaj kopię wyceny e-mailem albo przypomnienie, gdy przyjdzie czas ją zaktualizować. Opcjonalnie i bezpłatnie.",
    leadCopy: "Wyślij kopię wyniku na mój e-mail", leadRemind: "Przypomnij mi o aktualizacji wyceny za 6 miesięcy", leadConsent: "Zgadzam się, aby Adsco Capital Partners przechowywało mój adres e-mail w tym celu.",
    leadBtn: "Wyślij", leadBusy: "Wysyłanie…", leadNeed: "Podaj prawidłowy adres e-mail, wybierz co najmniej jedną opcję i zaakceptuj warunek.", leadErr: "Nie udało się teraz wysłać. Spróbuj ponownie za chwilę.",
    leadOk: (c, r, e) => (c ? `Gotowe! Kopia została wysłana na ${e}.` : "Gotowe!") + (r ? " Przypomnimy Ci za sześć miesięcy." : ""),
    topActH: "Twoje najcenniejsze działanie", topActMore: n => `${n} ${n3(n, "kolejne działanie", "kolejne działania", "kolejnych działań")} z wpływem i harmonogramem w planie wzrostu wartości w raporcie.`,
    normH: "Twoja znormalizowana EBITDA", normRow1: "EBITDA, ważona średnia z 3 lat (z doliczonymi kosztami jednorazowymi)", normRowLtm: "EBITDA, ważona z ostatnimi 12 miesiącami (z doliczonymi kosztami jednorazowymi)", normRow2: "Wynagrodzenie właściciela skorygowane do poziomu rynkowego", normRow3: "Znormalizowana EBITDA – to, co wycenia kupujący",
    normHighSal: (own, mkt, d) => `Wypłacasz sobie ${own}, więcej niż ${mkt}, które kosztowałby zewnętrzny prezes. Kupujący liczy wynagrodzenie rynkowe, więc ${d} doliczamy do wyniku. To podnosi wartość w porównaniu z prostym mnożnikiem raportowanej EBITDA.`,
    normLowSal: (own, mkt, d) => `Wypłacasz sobie ${own}, mniej niż ${mkt}, które kosztowałby zewnętrzny prezes, na przykład żeby wypłacać więcej w dywidendzie. Kupujący musi zatrudnić prezesa, więc ${d} odejmujemy od wyniku. Dlatego wynik jest tu niższy niż w sprawozdaniu.`,
    normEqSal: own => `Twoje wynagrodzenie ${own} odpowiada rynkowemu wynagrodzeniu prezesa, więc korekta nie jest potrzebna.`,
    normNoSal: "Nie podano wynagrodzenia właściciela. Jeśli pobierasz wynagrodzenie lub dywidendę, które odbiegają od rynkowego wynagrodzenia prezesa, wpisz je w kroku 2, a wynik zostanie skorygowany tak, jak zrobiłby to kupujący.", chipReading: "odczyt…", chipRead: "dane odczytane", chipNoRead: "odczyta doradca",
    docH: "Odczytane materiały:", docBud: (y, r) => `budżet ${y} z przychodami ${r}.`, docYtd: (n, r, e) => `Raport miesięczny: ${n} mies., przychody ${r}, EBITDA ${e}.`,
    docW: w => `Budżet ma w raporcie wagę ${w}%. Łączna wartość kapitału własnego:`, docOnlyYtd: "Raporty miesięczne aktualizują bazę wyników w raporcie.",
    next1: n => n ? `Dalej z ${n} ${n3(n, "dokumentem", "dokumentami", "dokumentami")}` : "Dalej",
    skip: "Nie masz dokumentów pod ręką? Wpisz dane samodzielnie",
    s1Fine: "Dokumenty są przechowywane w formie zaszyfrowanej przez Adsco Capital Partners, wykorzystywane wyłącznie do Twojej wyceny i usuwane na żądanie. Nigdy nikomu ich nie udostępniamy.",
    howH: "Jak to działa",
    how: [["Wpisz numer KRS lub NIP", "Pobieramy dane spółki z KRS. Wgraj sprawozdania finansowe (XML z RDF), a odczytamy dane za Ciebie."], ["Otrzymaj wynik od razu", "Przedział wartości, ocena gotowości do sprzedaży i najważniejsze działania."]],
    ticks: ["Zajmuje ok. trzy minuty", "Bezpłatnie, bez rejestracji"],
    quote: "Kupujący płacą za to, co mogą zweryfikować. Dobrze przygotowana spółka uzyskuje zarówno wyższą cenę, jak i lepsze warunki.",
    quoteBy: "Adsco Capital Partners",
    drvH: "Na co patrzy kupujący",
    drivers: [["Rentowność i wzrost", "Znormalizowana EBITDA i trend z trzech lat wyznaczają wartość bazową."], ["Zależność od właściciela", "Czy firma poradzi sobie bez Ciebie? To wpływa zarówno na cenę, jak i na warunki."], ["Przychody powtarzalne", "Umowy i stali klienci sprawiają, że przyszłe przychody są przewidywalne."], ["Dokumentacja", "Sprawozdawczość i pisemne umowy ułatwiają due diligence."]],
    tipsH: "Warto wiedzieć",
    tips: [["Gdzie znajdę EBITDA?", "Zysk z działalności operacyjnej plus amortyzacja w rachunku zysków i strat. Obliczamy ją za Ciebie ze sprawozdania finansowego."], ["Wynagrodzenie właściciela a rynkowe", "Jeśli wypłacasz sobie więcej lub mniej, niż kosztowałby zatrudniony prezes, wynik jest korygowany o różnicę."], ["Koszty jednorazowe", "Koszty, które się nie powtórzą, np. przeprowadzka lub spór sądowy, doliczamy z powrotem do wyniku."]],
    whyH: "Dlaczego o to pytamy?",
    whyP: "Dwie spółki z takim samym wynikiem mogą zostać sprzedane za zupełnie różną cenę. Kupujący płaci więcej, gdy przychody są rozproszone i powtarzalne, a firma działa bez właściciela. Twoje odpowiedzi przesuwają mnożnik w górę lub w dół.",
    orgL: "Numer KRS lub NIP", orgPh: "0000123456 lub 525-000-02-51",
    srchLooking: "Szukamy…", srchPick: "Wybierz spółkę z listy.",
    srchNone: "Wyszukiwanie po nazwie nie jest dostępne dla polskich spółek. Wpisz numer KRS lub NIP (znajdziesz go w wyszukiwarce KRS).", srchShort: "Wpisz numer KRS (10 cyfr) lub NIP (10 cyfr).",
    orgEmpty: "Najpierw wpisz numer KRS lub NIP i kliknij Pobierz.",
    ctaH: "Gotowe! Jak chcesz kontynuować?", freeBtn: "Zobacz bezpłatną wycenę →", ctaSub: "Odpowiedz na siedem krótkich pytań, a wynik zobaczysz od razu. Albo zamów raport od razu:",
    mktLine: (q, med, pe, st) => `Rynek: niepubliczne średnie spółki europejskie sprzedawano przy medianie ${med} EBITDA (Argos Index, ${q}). Fundusze płaciły ${pe}, a inwestorzy branżowi ${st}. Mniejsze spółki zwykle sprzedają się taniej.`,
    mktBuyers: b => `Aktywni kupujący w branży: ${b}.`,
    cycH: "Koniunktura w branży", cycLbl: l => `Koniunktura (${l.toLowerCase()})`,
    gpIntro: "Bez dodatkowych materiałów raport opiera się na danych historycznych. Z materiałami doradca postępuje tak: raporty miesięczne dają ostatnie dwanaście miesięcy, które mają największą wagę w bazie wyników. Budżet daje wartość wzrostu z wagą 20%, do 35%, jeśli wyjaśnia go biznesplan, a wyniki od początku roku są zgodne z planem. Wszystko jest opcjonalne i traktowane poufnie.",
    gpPlanH: "Biznesplan", gpPlanP: "Strategia, rynek i cele. PDF, Word lub PowerPoint.",
    gpBudH: "Budżet lub prognoza", gpBudP: "Najbliższe 1–3 lata. Excel lub PDF.",
    gpMonH: "Ostatnie raporty miesięczne", gpMonP: "Rachunek zysków i strat oraz bilans od początku roku.",
    gpPick: "Wybierz pliki", gpNote: "Możesz też kontynuować bez dokumentów i przesłać je później.",
    gpGo: n => n ? `Przejdź do zamówienia (${n} ${dok(n)}) →` : "Przejdź do zamówienia →",
    kindLbl: { plan: "Biznesplan", budget: "Budżet", monthly: "Raport miesięczny" },
    rateLbl: r => `Stopy procentowe (stopa referencyjna ${r}%)`,
    rateLine: (r, src, dt, adj, ref) => `Mnożniki są korygowane o poziom stóp procentowych: stopa referencyjna ${cb(src)} wynosi ${r}% (${dt}). ` + (adj ? `W porównaniu z normalnym poziomem ${ref}% daje to ${adj} do mnożnika.` : `To blisko normalnego poziomu ${ref}% i nie wpływa na mnożnik.`),
    rateFree: (r, src) => `Mnożniki są korygowane o poziom stóp procentowych (stopa referencyjna ${cb(src)} ${r}%).`,
    bH: "Na tle branży",
    bYou: y => `Twoja spółka ${y}`, bMed: "Mediana branży (kwartyle)", bMedS: "Mediana branży", bAvg: "Średnia branży", bMargin: "Marża operacyjna", bGrowth: "Wzrost przychodów", bPerEmp: "Przychody na pracownika (tys.)",
    bPos: ["Najsłabszy kwartyl", "Poniżej mediany", "Powyżej mediany", "Najlepszy kwartyl"], bAbove: "Wyraźnie powyżej średniej", bBelow: "Wyraźnie poniżej średniej", bNear: "Blisko średniej",
    bAdj: x => `Marża na tle branży daje ${x} do mnożnika.`, bNoAdj: "Marża mieści się w normalnym zakresie dla branży i nie wpływa na mnożnik. Wzrost jest liczony osobno.",
    arH: y => `Co mówi sprawozdanie finansowe za ${y}`, arSrcBV: "Przeczytaliśmy sprawozdanie z działalności, informację dodatkową i sprawozdanie biegłego rewidenta. Sygnały ryzyka wpływają na wycenę, pozostałe punkty pomogą Ci poprawnie odpowiedzieć na pytania powyżej.", arSrcPdf: "Przeczytaliśmy tekst wgranego sprawozdania finansowego. Sygnały ryzyka wpływają na wycenę, pozostałe punkty pomogą Ci poprawnie odpowiedzieć na pytania powyżej.",
    arAbout: "Działalność:", arEmp: n => `Przeciętne zatrudnienie: ${n}`, arAdj: x => `${x} do mnożnika`, arNone: "Brak sygnałów ryzyka w tekście (kontynuacja działalności, zastrzeżenia biegłego rewidenta, ujemny kapitał, spory).",
    tf: { gc: "Biegły rewident wskazuje na istotną niepewność co do kontynuacji działalności", qual: "Sprawozdanie biegłego rewidenta zawiera zastrzeżenie lub odmowę wyrażenia opinii", kbr: "Straty przewyższają sumę kapitałów zapasowego i rezerwowych oraz połowę kapitału zakładowego (art. 233 KSH)", dispute: "Wspomniano o sporze lub postępowaniu sądowym", custdep: "Wspomniano o zależności od jednego lub kilku dużych klientów – sprawdź odpowiedź o największym kliencie", recur: "Wspomniano o abonamentach, licencjach lub umowach serwisowych – uwzględnij je w udziale przychodów powtarzalnych", growth: "Wspomniano o ekspansji lub rosnącym popycie" },
    docFail: "Nie można teraz wyświetlić dokumentu. Spróbuj ponownie za chwilę.",
    repLoadingBV: "Pobieramy dane z KRS…",
    noBV: "Wgraj ostatnie sprawozdania finansowe jako pliki XML (najlepiej za 3–4 lata), aby wycena była bardziej wiarygodna:",
    repSavedBV: n => `${n} ${n3(n, "sprawozdanie zapisane", "sprawozdania zapisane", "sprawozdań zapisanych")} do Twojej wyceny:`, repItem: y => `Sprawozdanie finansowe ${y}`, repOpen: "Otwórz",
    repLoading: "Pobieramy sprawozdania finansowe…", repSaved: n => `${n} ${n3(n, "sprawozdanie pobrane", "sprawozdania pobrane", "sprawozdań pobranych")} i zapisane do raportu:`,
    manualUp: "Nie masz numeru pod ręką? Wgraj sprawozdania finansowe bezpośrednio",
    addUp: "Wgraj też sprawozdania finansowe (XML), aby uzyskać amortyzację i zadłużenie",
    listedH: ex => `Spółka giełdowa – ${ex}`,
    listedP: "W przypadku spółki giełdowej kapitalizacja rynkowa (kurs akcji × liczba akcji) to bieżąca rynkowa wartość kapitału własnego. Przy przejęciu całej spółki zwykle płaci się premię ponad kurs, często 20–40%. Nasza wycena poniżej opiera się na porównywalnych transakcjach spółek niepublicznych i należy ją traktować jako punkt odniesienia, a nie zamiennik kursu.",
    listedLink: "Zobacz aktualną kapitalizację →", listedQ: "kapitalizacja",
    noReports: "Rejestr nie udostępnia danych finansowych w formie liczbowej. Wgraj tutaj ostatnie sprawozdania finansowe jako pliki XML:",
    fetchedH: n => `Pobrano: ${n}`, fetchedSrc: "Z Krajowego Rejestru Sądowego.", ebitL: "Zysk z działalności operacyjnej (EBIT)",
    fetchedGroup: "Dane skonsolidowane.",
    noDep: "",
    orgBad: "Sprawdź numer: KRS ma 10 cyfr (np. 0000123456), NIP ma 10 cyfr (np. 525-000-02-51).",
    orgOkSE: "Dziękujemy. Numer zostanie przesłany z zamówieniem.",
    orgLooking: "Pobieramy dane…", orgNotFound: "Nie znaleziono spółki z tym numerem w KRS.", orgFail: "Nie udało się teraz pobrać danych. Kontynuuj, wgrywając sprawozdania finansowe.",
    orgFound: (n, y) => `${n}: pobrano dane za ${y}.`, orgFoundName: n => `Znaleziono: ${n}.`,
    plH: n => `Znaleziono: ${n}`,
    plSrc: "Z Krajowego Rejestru Sądowego (KRS). Dane finansowe nie są dostępne w KRS w formie liczbowej, dlatego wgraj sprawozdania finansowe poniżej.",
    plRows: { krs: "Numer KRS", nip: "NIP", form: "Forma prawna", pkd: "Przeważająca działalność (PKD)", city: "Siedziba", filed: "Złożone sprawozdania finansowe" },
    plFiled: (n, last) => n ? `${n}, ostatnie za ${last}` : "brak wzmianek w KRS",
    plHow: "Jak pobrać plik XML: otwórz Przeglądarkę Dokumentów Finansowych (RDF), wpisz numer KRS i kliknij „Wyszukaj”. Rozwiń pozycję „Roczne sprawozdanie finansowe” za ostatni rok, pobierz plik i wgraj go tutaj. Jeden plik zawiera dane za dwa lata, więc dwa pliki dają cztery lata.",
    plRdf: "Otwórz Przeglądarkę Dokumentów Finansowych →", plCopy: "Skopiuj numer KRS", plCopied: "Skopiowano",
    xmlRead: (y, n) => `Odczytano sprawozdanie za ${y}${n ? " (" + n + ")" : ""}.`,
    xmlSmall: "To sprawozdanie mikrojednostki: zawiera przychody, ale nie pokazuje zysku operacyjnego ani amortyzacji. Uzupełnij EBITDA w następnym kroku.",
    xmlNoOp: "Brak zysku operacyjnego w pliku. Uzupełnij EBITDA w następnym kroku.",
    xmlBad: "Nie udało się odczytać pliku XML. Upewnij się, że to roczne sprawozdanie finansowe pobrane z RDF (plik .xml, .xades lub .zip).",
    pkgH: "Wybierz poziom – zacznij bezpłatnie lub zamów od razu",
    discSum: "Wycena orientacyjna – nie stanowi porady. Przeczytaj ważne informacje",
    disc: [
      ["Wycena orientacyjna.", "Exitkompass podaje przybliżony przedział wartości na podstawie uproszczonych mnożników branżowych oraz pobranych lub podanych informacji. Nie jest to opinia o wartości, fairness opinion ani porada inwestycyjna, podatkowa, księgowa czy prawna."],
      ["Wartość przy sprzedaży, nie do celów prawnych.", "Exitkompass pokazuje, ile spółka może być warta dla kupującego przy sprzedaży (wartość rynkowa przy kontynuacji działalności, na podstawie mnożników). Nie jest to wycena majątkowa, likwidacyjna ani wycena na potrzeby podziału majątku, spadku, sporu, wykupu wspólników mniejszościowych lub celów podatkowych. W takich przypadkach potrzebna jest formalna wycena metodą wymaganą dla danego celu."],
      ["Rzeczywista cena może istotnie się różnić.", "To, ile zapłaci kupujący, zależy m.in. od sytuacji rynkowej, typu kupującego, finansowania, due diligence, warunków umowy i perspektyw spółki. Nie podejmuj decyzji wyłącznie na podstawie narzędzia."],
      ["Źródła.", "Dane spółki pobieramy z publicznych rejestrów (Krajowy Rejestr Sądowy, Ministerstwo Sprawiedliwości; Wykaz podatników VAT, Ministerstwo Finansów), a dane finansowe odczytujemy ze sprawozdań, które wgrywasz. Odczyt jest automatyczny i może być błędny lub niepełny. Nie weryfikujemy informacji i nie odpowiadamy za błędy w źródłach. Zawsze porównaj wynik ze sprawozdaniem finansowym spółki."],
      ["Mnożniki.", "Mnożniki branżowe pochodzą z badania transakcji na rynkach nordyckich (Dealsuite) i są obniżone dla Polski na podstawie oceny Adsco, ponieważ brak publicznego źródła mnożników dla polskich MŚP. Korekta jest pokazana osobno w pomoście mnożnika."],
      ["Brak zlecenia.", "Korzystanie z narzędzia lub zamówienie raportu nie oznacza zawarcia umowy doradczej. Taka umowa wymaga pisemnego porozumienia z Adsco Capital Partners. Adsco nie odpowiada za straty wynikające z decyzji podjętych na podstawie narzędzia lub raportu."],
      ["Twoje dane.", "Numery rejestrowe, dane i dokumenty, które wgrywasz, przechowuje Adsco Capital Partners (Google Workspace) i wykorzystuje wyłącznie do przygotowania Twojej wyceny i raportu. Nie udostępniamy ich osobom trzecim i usuwamy je na żądanie."]
    ],
    adH: "O Adsco Capital Partners",
    adLead: "Exitkompass rozwija Adsco Capital Partners, niezależna firma doradcza w zakresie M&A i rynków kapitałowych, należąca do partnerów, z siedzibą w Sztokholmie. Pracujemy ze spółkami należącymi do założycieli, rodzin i funduszy private equity, od pierwszej rozmowy strategicznej do zamknięcia transakcji.",
    adStats: [["60+", "lat łącznego doświadczenia na rynkach kapitałowych"], ["5", "nordyckich IPO w latach 2016–2022"], ["Od 1996", "w bankowości inwestycyjnej"], ["2", "doświadczonych partnerów przy każdej transakcji, od początku do końca"]],
    adTeam: [["Sture Stölen", "Partner założyciel", "20+ lat w relacjach inwestorskich i M&A · poprowadził 5 nordyckich IPO w latach 2016–2022"], ["Lars Carlson", "Partner założyciel", "25+ lat w branży, m.in. ECM i M&A · bankier inwestycyjny od 1996"]],
    adIndep: "Niezależni: bez kredytów i bez rekomendacji. Liczy się tylko Twój wynik.",
    pkgs: [
      { name: "Szybka wycena", items: ["Przedział wartości od razu na stronie", "Ocena gotowości do sprzedaży", "Trzy najważniejsze ustalenia"] },
      { name: "Raport", tag: "Polecany", items: ["Pełny raport PDF po polsku", "Scenariusze i analiza wrażliwości", "Plan wzrostu wartości na 12–24 miesiące", "Wycena wzrostu na podstawie biznesplanu", "Typy kupujących i proces sprzedaży", "Sprawdzony przez doświadczonego doradcę, dostarczany w 1–2 dni robocze"] },
      { name: "Raport + omówienie", tag: "Z partnerem", items: ["Wszystko z raportu", "60 minut z partnerem Adsco Capital Partners (po angielsku)", "Przegląd normalizacji i kolejnych kroków"] }
    ],
    startFree: "Zacznij bezpłatnie", choose: ["Wybierz raport", "Wybierz z omówieniem"], buy: ["Kup raport", "Kup z omówieniem"], haveFree: "Masz to ✓",
    chosen: n => `Wybrano: ${n}. Zacznij od dokumentów poniżej; zamówienie złożysz po zobaczeniu wyceny.`,
    emailL: "Twój e-mail", opened: "Formularz zamówienia otworzył się w nowej karcie. Wyślij go, a skontaktujemy się w sprawie płatności i dostarczenia.",
    s2Eye: "Krok 2 z 3", s2H: "Sprawdź dane",
    s2PAuto: "Zielone pola odczytaliśmy ze sprawozdań finansowych. Popraw to, co wygląda na błędne, uzupełnij braki i odpowiedz na pytania kupującego.",
    s2PManual: "Wpisz przychody netto i EBITDA za ostatnie trzy lata w " + K + " i odpowiedz na pytania kupującego.",
    keyGreen: "Odczytane ze sprawozdania", keyYellow: "Brak danych, sprawdź",
    to3: "Pokaż moją wycenę", back1: "Wróć do dokumentów",
    need: "Wpisz przychody i EBITDA przynajmniej za ostatni rok.",
    orgGo: "Rozpocznij wycenę →", micro1: "Zajmuje ok. trzy minuty", micro2: "Bezpłatnie, bez rejestracji",
    lockH: "W pełnym raporcie", lockP: "Gotowość do sprzedaży według obszarów, wartość strategiczna, analiza wrażliwości, pełny plan wzrostu wartości na 12–24 miesiące i to, którzy kupujący zapłacą najwięcej za spółkę taką jak Twoja.",
    lockExit: "Gotowość do sprzedaży według obszarów", lockStrat: "Wartość strategiczna", lockSvPrem: "Premia strategiczna", lockSvVal: "Wartość z premią", lockSvDrv: "Czynniki wartości", lockSens: "Analiza wrażliwości", lockPlan: "Plan wzrostu wartości 12–24 miesiące", lockBuyers: "Typy kupujących i mnożniki",
    lockBtn: p => `Odblokuj w raporcie · ${p}`, lockDeliv: "Dostarczany w 1–2 dni robocze, sprawdzony przez doświadczonego doradcę.",
    delivPaid: "⏱ Dostarczany w 1–2 dni robocze", delivFree: "⚡ Od razu na stronie",
    largeH: "Twoja spółka jest większa, niż przewiduje Exitkompass",
    largeP: (r, e) => `Przy przychodach ${r} i EBITDA ${e} wartość wyznaczają porównywalne spółki giełdowe i transakcje strategiczne, a nie mnożniki dla małych i średnich firm. Automatyczna liczba byłaby tu myląca, zwykle zdecydowanie za niska, więc jej nie pokazujemy.`,
    largeP2: "Umów bezpłatne, poufne spotkanie z partnerem Adsco Capital Partners. Omówimy obraz wyceny, prawdopodobnych kupujących i Twoje opcje strategiczne.",
    largeNote: "Ocena gotowości do sprzedaży i ustalenia poniżej w pełni dotyczą także większych spółek.",
    largeBtn: "Umów spotkanie z partnerem →",
    mName: "Spotkanie z partnerem", mPrice: "Bezpłatnie", mTag: "Poufnie",
    mItems: ["Obraz wyceny na podstawie spółek giełdowych i transakcji", "Kupujący: inwestorzy branżowi i fundusze private equity", "Opcje strategiczne i harmonogram", "60 minut z doświadczonym partnerem (po angielsku)"],
    mH: "Umów spotkanie z partnerem", mP: "Podaj swoje dane, a w ciągu jednego dnia roboczego skontaktujemy się, aby ustalić termin. Wszystko traktujemy poufnie.",
    mSend: "Wyślij prośbę o spotkanie", mDoneH: n => `Dziękujemy${n ? ", " + n : ""}! Otrzymaliśmy Twoją prośbę.`, mDoneP: e => `Skontaktujemy się z Tobą pod adresem ${e} w ciągu jednego dnia roboczego, aby umówić spotkanie.`,
    mFine: "Bezpłatnie i bez zobowiązań.", mWhen: "Odpowiedź", mWhenV: "W ciągu jednego dnia roboczego",
    oEye: "Zamówienie", oH: "Zamów raport",
    oP: "Podaj swoje dane, a odezwiemy się w ciągu jednego dnia roboczego. Twoje dane i wgrane dokumenty zostaną przesłane automatycznie.",
    oBack: "Wstecz", oName: "Imię i nazwisko *", oEmail: "E-mail *", oPhone: "Telefon", oCompany: "Spółka *", oOrg: "Numer KRS lub NIP",
    oMsg: "Wiadomość (opcjonalnie)",
    oConsent: "Akceptuję warunki zakupu i wyrażam zgodę na przetwarzanie przez Adsco Capital Partners moich danych i dokumentów w celu przygotowania raportu i kontaktu w sprawie zamówienia.",
    oFine: "Bez płatności teraz. Faktura zostanie wysłana razem z raportem, termin płatności 10 dni. Cena netto; dla firm z polskim NIP VAT rozlicza nabywca (odwrotne obciążenie).",
    oSend: p => `Wyślij zamówienie · ${p}`, oSending: "Wysyłamy zamówienie…",
    oNeed: "Podaj imię i nazwisko, prawidłowy adres e-mail i spółkę.", oNeedOk: "Potwierdź zgodę na przetwarzanie danych.",
    oFail: "Nie udało się teraz wysłać zamówienia.", oFailLink: "Wyślij je przez nasz formularz →",
    oDocs: n => `${n} ${dok(n)} i Twoja wycena zostaną przesłane z zamówieniem.`,
    oDelivery: "Dostawa", oDeliveryV: "1–2 dni robocze", oPayL: "Płatność", oPayV: "Faktura, 10 dni, netto", oDocsL: "Dokumenty", oDocsV: n => n ? `${n} ${dok(n)}` : "Można przesłać później",
    oWho: "Sprawdzony przez doświadczonego doradcę Adsco Capital Partners.",
    oDoneH: n => `Dziękujemy${n ? ", " + n : ""}! Otrzymaliśmy Twoje zamówienie.`,
    oDoneP: e => `W ciągu jednego dnia roboczego wyślemy na ${e} potwierdzenie i kolejne kroki. Podaj numer zamówienia, jeśli będziesz się z nami kontaktować.`,
    oDoneBack: "Wróć do wyceny",
    basis: "Wartość opiera się na danych historycznych ze sprawozdań finansowych i stanowi dolną granicę. Raporty miesięczne, budżet i biznesplan uwzględniamy tylko w raporcie. Model nie widzi planów wzrostu, technologii, umów ani tego, ile spółka jest strategicznie warta dla kupującego.",
    upsideH: "Twoja spółka może być warta więcej, niż pokazują liczby",
    upsideP: "Kupujący często płacą więcej za spółki, które mają poniższe cechy, a dane historyczne oddają je tylko częściowo:",
    upsideP2: "Na podstawie biznesplanu, budżetu i ostatnich raportów miesięcznych wyceniamy w raporcie scenariusz wzrostu i uwzględniamy go w wycenie z wagą 20–35%, w zależności od tego, jak dobrze uzasadniony jest budżet.",
    upUpload: "Wgraj biznesplan lub budżet",
    upsideBtn: "Wyceń potencjał wzrostu →",
    upGrowth: g => `Silny wzrost: ${g}% rocznie w ostatnich latach`,
    upRecur: r => `Wysoki udział przychodów powtarzalnych: ${r}%`,
    upMargin: "Ugruntowana baza przychodów z niską dziś marżą, gdzie wartość tkwi w skalowaniu",
    upTech: n => `Branża, w której kupujący płacą za technologię i skalowalność (${n})`,
    advH: "Plan wzrostu (doradca)",
    advP: "Budżetowane przychody w " + K + " na kolejne trzy lata, oczekiwana marża EBITDA w 3. roku i wymagana stopa zwrotu. Daje wycenę wzrostu w raporcie.",
    advY: y => `Przychody ${y}`, advM: "Marża EBITDA w 3. roku, %", advR: "Wymagana stopa zwrotu, %",
    advPlanChk: "Jest biznesplan wyjaśniający budżet", advYtdP: "Raporty miesięczne (tys., od początku roku). Dają ostatnie dwanaście miesięcy (LTM) i pokazują, czy spółka realizuje budżet. Co najmniej 3 miesiące.",
    advYtN: "Liczba miesięcy", advYtR: "Przychody od początku roku", advYtE: "EBITDA od początku roku", advYtRp: "Przychody w tym samym okresie ub.r.", advYtEp: "EBITDA w tym samym okresie ub.r.",
    advLtm: x => `EBITDA za ostatnie dwanaście miesięcy: ${x}.`, advBlend: (w, x) => `Budżet ma wagę ${w}%: łączna wartość kapitału własnego ${x}.`,
    advPdf: "Utwórz raport PDF", advBusy: "Tworzymy raport…", advDone: "Gotowe, raport został pobrany.", advErr: "Nie udało się utworzyć raportu.",
    gvLine: (lo, hi) => `Z Twoim biznesplanem: ${lo} – ${hi} wartości kapitału własnego dziś (jeśli plan zostanie zrealizowany).`,
    fetchedInd: n => `Branża: ${n}. Jeśli jest błędna, zmienisz ją w następnym kroku.`,
    kEvMethod: () => "Przed długiem netto. Połączenie mnożników EBITDA, EBIT i przychodów, zob. poniżej.",
    blFree: "Mnożniki, wartość według każdej metody, wagi i odpowiadający im mnożnik pokazujemy w raporcie.",
    bFree: "Poziomy branżowe i wpływ porównania na mnożnik pokazujemy w raporcie.",
    brFree: "Tutaj widać kierunek. O ile każdy czynnik podnosi lub obniża mnożnik, pokazujemy w raporcie.",
    mktFree: n => "Rynek spółek niepublicznych (Argos Index) oraz " + (n ? `${n} wymienionych z nazwy aktywnych kupujących w Twojej branży` : "aktywnych kupujących w branży") + " pokazujemy w raporcie.",
    blH: "Wycena trzema mnożnikami", blBasis: "Wartość spółki", blMult: "Mnożnik", blVal: "Wartość (EV)", blW: "Waga",
    blEbitda: "EV/EBITDA", blEbit: "EV/EBIT", blRev: "EV/przychody", blSum: "Łączna wartość przedsiębiorstwa",
    blImp: (a, b, c) => "Łącznie odpowiada to " + [a && a + " EBITDA", b && b + " EBIT", c && c + " przychodów"].filter(Boolean).join(", ") + ". Przedział powyżej to ±0,75x na mnożnikach wyniku.",
    needQ: "Podaj udział największego klienta i udział przychodów powtarzalnych (0–100%). Mają duży wpływ na wycenę.",
    s3Eye: "Krok 3 z 3 · Twój wynik", back2: "Zmień dane",
    upEye: "Pełny raport",
    upShort: "Raport PDF po polsku od Adsco Capital Partners, oparty na Twoich danych i dokumentach, sprawdzony przez doradcę.",
    docsN: n => n ? `${n} ${n3(n, "wgrany dokument zostanie przesłany", "wgrane dokumenty zostaną przesłane", "wgranych dokumentów zostanie przesłanych")} z zamówieniem i sprawdzone przez doradcę.` : "Sprawozdania finansowe i inne materiały możesz przesłać po złożeniu zamówienia.",
    s1Read: (n, o, ys) => `Odczytaliśmy dane za ${ys} dla ${n || "spółki"}${o ? " (" + o + ")" : ""}.`,
    s1NoRead: "Dokumenty zostały wgrane, ale nie udało się automatycznie odczytać danych. Uzupełnij je w następnym kroku. Przy zamówieniu raportu odczytamy dokumenty ręcznie.",
    s1Partial: "Części dokumentów nie udało się odczytać automatycznie. Sprawdź dane w następnym kroku.",
    upFail: "Nie udało się wgrać dokumentu. Spróbuj ponownie lub kontynuuj bez niego.",
    badType: "Ten typ pliku nie jest obsługiwany. Użyj XML, PDF, Word, Excel, PowerPoint lub obrazu.",
    badTypeAnnual: "Wgraj sprawozdanie finansowe jako plik XML z RDF (.xml, .xades lub .zip) albo PDF.",
    tooBig: "Plik jest za duży. Maksymalny rozmiar to 20 MB.",
    tooMany: "Wgrano maksymalną liczbę dokumentów.",
    privacy: "Pobrane lub wgrane informacje i dokumenty są przechowywane w Google Workspace Adsco Capital Partners i wykorzystywane wyłącznie do przygotowania Twojej wyceny i raportu. Skontaktuj się z nami, aby je usunąć.",
    langH: "Język",
    svH: "Wartość strategiczna",
    svLevel: ["Niskie zainteresowanie strategiczne", "Pewne zainteresowanie strategiczne", "Wysokie zainteresowanie strategiczne"],
    svP: "Kupujący strategiczny, np. konkurent, klient, dostawca lub seryjny nabywca, może zapłacić więcej niż powyższa wartość finansowa, jeśli spółka daje synergie: nowych klientów, rynki, produkty, technologię lub kompetencje. Nasza ocena opiera się na:",
    svDrv: { ind: n => `Branży (${n}), w której kupujący aktywnie przejmują spółki i płacą za synergie`, recur: "Przychodach powtarzalnych, na których kupujący może budować", growth: "Wzroście, który wzmacnia platformę kupującego", margin: "Marży w najlepszym kwartylu branży", cust: "Szerokiej bazie klientów bez zależności od pojedynczych odbiorców", buyers: "Aktywnych seryjnych nabywcach kupujących spółki w branży" },
    svNone: "W liczbach widać niewiele czynników, które zwykle przyciągają kupujących strategicznych. Premia strategiczna zależy wtedy głównie od tego, kto jest kupującym.",
    svFree: "Co napędza zainteresowanie strategiczne, orientacyjną premię w złotych i to, którzy kupujący mogliby ją zapłacić, pokazujemy w raporcie.",
    potFree: "O ile może wzrosnąć wartość, gdy spółka będzie gotowa do sprzedaży, pokazujemy w raporcie.", scoreFree: "Wynik dla każdego obszaru i to, co go obniża, pokazujemy w raporcie.",
    svPrem: (r, a) => `Kupujący strategiczny mógłby zapłacić ok. ${r} ponad wartość przedsiębiorstwa, czyli o ${a} więcej.`,
    svNote: "Premia nie jest wliczona w powyższą wycenę. Wymaga właściwego kupującego i konkurencyjnego procesu sprzedaży."
  };
}
UI.PL = Object.assign({}, UI.EN.SE, mkPL());
UI.SE.flPL = UI.NO.flPL = "Polen"; UI.EN.SE.flPL = UI.EN.NO.flPL = "Poland";

/* ---------- Lithuanian UI texts (country LT: Registrų centras open data, EUR) ----------
   Built on top of the English set, so any key not translated here falls back to English rather than Swedish. */
function mkLT() {
  const K = "tūkst. EUR";
  const n3 = (n, a, b, c) => (n % 10 === 1 && n % 100 !== 11) ? a : (n % 10 >= 2 && (n % 100 < 10 || n % 100 >= 20)) ? b : c;
  const dok = n => n3(n, "dokumentas", "dokumentai", "dokumentų");
  return {
    html: "lt", loc: "lt-LT", by: "Adsco Capital Partners", flSE: "Švedija", flNO: "Norvegija", flPL: "Lenkija", flLT: "Lietuva", defName: "Jūsų įmonė",
    h1: "Kiek jūsų įmonė verta pirkėjui ir kaip padidinti jos vertę?",
    heroP: "Nemokamas orientacinis vertinimas per maždaug tris minutes. Iš Registrų centro atvirų duomenų paimame jūsų įmonės pajamas ir pelną, jūs atsakote į septynis klausimus ir gaunate vertės intervalą, pasirengimo pardavimui balą ir veiksmus, kurie labiausiai padidina vertę.",
    heroTrust: ["Nemokamai", "Be registracijos", "Apie 3 minutes", "M&A sandorių daugikliai"],
    heroFit: "Skirta mažoms ir vidutinėms įmonėms, kurių pajamos siekia iki maždaug 45 mln. EUR. Didesnes įmones ir grupes geriausia vertinti pokalbyje su partneriu.",
    step1: "Įveskite įmonės kodą arba pavadinimą – paimsime duomenis iš registro, arba įrašykite pajamas ir EBITDA " + K + ".",
    step2: "Atsakykite į pirkėjo klausimus apie priklausomybę nuo savininko, klientus ir sutartis.",
    step3: "Peržiūrėkite vertinimą ir užsisakykite išsamią ataskaitą.",
    dropTitle: "Įkelkite finansines ataskaitas (PDF)",
    dropSub: "Jas peržiūrės patarėjas, kai užsisakysite ataskaitą. Nutempkite failą čia arba spustelėkite, kad pasirinktumėte.",
    or: "arba įrašykite skaičius patys",
    legCompany: "Įmonė", name: "Įmonės pavadinimas", industry: "Sektorius",
    legFin: "Skaičiai (" + K + ")", yYear: "Metai", yRev: "Pardavimo pajamos",
    ownsal: "Savininko atlyginimas", mktsal: "Rinkos atlyginimas vadovui",
    oneoff: y => `Vienkartinės išlaidos ${y} (pridedamos atgal)`,
    debt: "Palūkanų skola", cash: "Pinigai ir jų ekvivalentai",
    salHint: "Atlyginimus nurodykite su darbdavio mokamomis socialinio draudimo įmokomis.",
    legBuyer: "Pirkėjo klausimai",
    topcust: "Didžiausias klientas, % pajamų", recur: "Pasikartojančios pajamos, %",
    ownerQ: "Jei išvyktumėte trims mėnesiams, įmonė…",
    owner: ["Susidurtų su problemomis: svarbūs klientai ir sprendimai priklauso nuo manęs", "Susitvarkytų, nors su tam tikrais trikdžiais", "Veiktų įprastai"],
    mgmtQ: "Vadovybė žemiau savininko", mgmt: ["Nėra, viskam vadovauju pats", "Iš dalies: vienas ar du pagrindiniai žmonės", "Visa vadovų komanda su aiškiais vaidmenimis"],
    repQ: "Finansinė atskaitomybė", reporting: ["Tik metinės ataskaitos", "Ketvirtinės ataskaitos", "Mėnesinės ataskaitos su biudžeto kontrole"],
    conQ: "Sutartys su klientais ir tiekėjais", contracts: ["Daugiausia žodinės ar neformalios", "Mišriai", "Rašytinės ir perduodamos naujam savininkui"],
    update: "Atnaujinti vertinimą", example: "Rodyti pavyzdį",
    rTitle: n => `${n}: vertinimas`, rMeta: (i, u) => `${i} · sumos ${u}, jei nenurodyta kitaip`,
    kEq: "Nuosavo kapitalo vertė – istoriniai duomenys", kEqSub: (m, nd) => `Intervalo vidurys ${m}, atėmus grynąją skolą ${nd}`,
    kEv: "Įmonės vertė (EV)", kEvSub: "Prieš grynąją skolą. Daugiklis ir korekcijos – ataskaitoje.",
    kPot: "Vertė pasirengus pardavimui", kPotSub: g => `+${g} esant dabartiniams rezultatams`, kPotNone: "Jau arti geriausio lygio",
    scoreH: "Pasirengimas pardavimui", scoreHint: "Kaip pirkėjo išsamaus patikrinimo (due diligence) komanda šiandien įvertintų įmonę, iš 100.",
    flagsH: "Ką pastebės pirkėjas", flagsHint: "Trys svarbiausios išvados. Ataskaitoje aptariamos visos, su veiksmais kiekvienai.",
    more: n => `+ dar ${n} ${n3(n, "išvada", "išvados", "išvadų")} <a href="#order" target="_self">išsamioje ataskaitoje</a>.`,
    noFlags: "Pagal pateiktą informaciją rimtų įspėjamųjų ženklų nėra.",
    planH: "Vertės didinimo planas", planHint: "Vertingiausią veiksmą rodome nemokamai. Ataskaitoje surikiuoti visi veiksmai su verte, žingsniais ir terminais.",
    planCols: ["Veiksmas", "Terminas", "Vertės padidėjimas"], inReport: "Ataskaitoje",
    planNone: "Įmonė jau gerai atitinka pagrindinius vertės veiksnius. Kitas žingsnis – pasiruošti pardavimo procesui.",
    buildH: "Kaip sudaromas vertinimas", buildHint: "Nuo sektoriaus bazinio daugiklio iki jūsų įmonės daugiklio ir EBITDA normalizavimo.",
    veil: "Daugiklio tiltas ir normalizuota EBITDA – ataskaitoje",
    yours: "Jūsų daugiklis", floor: " (minimumas)",
    sizeLbl: n => `Dydis (EBITDA ${n})`, growthLbl: p => `Pajamų augimas (${p}% per metus)`,
    upsellH: "Užsisakykite išsamią ataskaitą",
    upsellP: "PDF ataskaita lietuvių kalba iš Adsco Capital Partners: išsamus vertinimas su scenarijais ir jautrumo analize, visos pirkėjo išvados, vertės didinimo planas su žingsniais ir terminais, pirkėjų tipai, sandorio struktūra, išsamaus patikrinimo kontrolinis sąrašas ir pardavimo procesas.",
    cmpFree: "Nemokamai", freeList: ["Nuosavo kapitalo vertės intervalas", "Pasirengimo pardavimui balas", "Trys svarbiausios išvados", "Vertingiausias veiksmas"],
    cmpPaid: p => `Ataskaita · ${p}`,
    paidList: ["Taškinis vertinimas su žemu, baziniu ir aukštu scenarijumi", "Jautrumo analizė", "Daugiklio tiltas ir EBITDA normalizavimas", "Visos išvados su veiksmais", "Visas vertės didinimo planas su žingsniais ir terminais", "Pirkėjų tipai, už ką jie moka, ir orientaciniai daugikliai", "Išsamaus patikrinimo kontrolinis sąrašas", "Pardavimo procesas ir sandorio struktūra"],
    emailPh: "jus@imone.lt", order: p => `Užsakyti ataskaitą · ${p}`,
    pricingH: "Kainos", vat: "be PVM", free: "Nemokamai", prices: ["290 €", "690 €"],
    plans: [
      ["Greitas vertinimas", ["Duomenys iš registro", "Orientacinis vertės intervalas", "Pasirengimo pardavimui balas"]],
      ["Ataskaita", ["Viskas iš greito vertinimo", "PDF ataskaita lietuvių kalba", "Vertės didinimo planas 12–24 mėnesiams", "Pirkėjų tipai ir pardavimo procesas"]],
      ["Ataskaita + aptarimas su partneriu", ["Viskas iš ataskaitos", "60 minučių su Adsco Capital Partners partneriu (anglų kalba)", "Jūsų normalizavimų peržiūra"]]
    ],
    aboutH: "Už kiekvieno vertinimo – patyrę patarėjai",
    aboutP: "Exitkompass kuria Adsco Capital Partners – partneriams priklausanti nepriklausoma įmonių susijungimų ir įsigijimų (M&A) bei kapitalo rinkų konsultacinė bendrovė, įsikūrusi Stokholme. Dirbame su savininkais, įkūrėjais ir investuotojais vidutinių įmonių rinkoje – nuo pirmojo strateginio pokalbio iki sandorio užbaigimo.",
    stats: [["60+", "metų bendros patirties kapitalo rinkose"], ["5", "Šiaurės šalių IPO 2016–2022 m."], ["2", "patyrę partneriai kiekviename sandoryje"], ["Nepriklausomi", "priklausome partneriams, neteikiame paskolų ir rekomendacijų"]],
    aboutCta: "Galvojate apie įmonės pardavimą?", aboutLink: "Užsisakykite nemokamą, konfidencialų susitikimą su partneriu →",
    foot: "Exitkompass · Adsco Capital Partners · Stokholmas",
    st: {
      preparing: "Ruošiamas mokėjimas…", pay: "Atidaryti užsakymo formą →",
      payNote: e => `Mokate kortele per Stripe. Ataskaita bus išsiųsta adresu ${e} iškart po apmokėjimo.`,
      checkoutFail: "Nepavyko pradėti mokėjimo. Pabandykite netrukus dar kartą.",
      tooBig: "Failas per didelis. Įkelkite iki 20 MB dydžio failą.",
      config: "Paslauga nėra visiškai sukonfigūruota. Susisiekite su Adsco Capital Partners.",
      reading: f => `Skaitoma <strong>${f}</strong>…`, scan: "PDF yra nuskenuotas. Puslapiai skaitomi kaip vaizdai…", finding: "Ieškoma pajamų, EBITDA, pinigų ir skolų…",
      noReader: "Šiame rodinyje įkėlimas neveikia. Įrašykite skaičius formoje.",
      scanNoImg: "PDF yra nuskenuotas, o vaizdų skaitymas čia negalimas. Įrašykite skaičius rankiniu būdu.",
      badType: "Įkelkite PDF arba pelno (nuostolių) ataskaitos nuotrauką (PNG ar JPG).",
      notGranted: "Įkėlimui reikia jūsų leidimo. Įkelkite failą dar kartą ir leiskite, arba įrašykite skaičius rankiniu būdu.",
      rate: "Per daug įkėlimų per trumpą laiką. Palaukite minutę ir bandykite dar kartą.",
      generic: "Skaitant ataskaitą įvyko klaida. Įrašykite skaičius rankiniu būdu.",
      unreadable: "Ataskaitos nepavyko perskaityti. Įrašykite skaičius rankiniu būdu.",
      noFigures: "Pelno (nuostolių) ataskaitos skaičių nerasta. Patikrinkite, ar tai visos finansinės ataskaitos, arba įrašykite skaičius rankiniu būdu.",
      got: (n, o) => `Skaičiai paimti iš finansinių ataskaitų${n ? " – " + n : ""}${o ? " (" + o + ")" : ""}.`,
      green: "Žali laukai paimti iš ataskaitų.",
      missing: l => `Geltonų laukų ataskaitose nebuvo, jie nukopijuoti iš artimiausių metų: ${l}.`,
      salary: p => `Savininko atlyginimas apima apie ${p}% darbdavio įmokų.`,
      check: "Patikrinkite skaičius, tada atsakykite į pirkėjo klausimus.",
      revL: "Pajamos",
      badEmail: e => `Įveskite galiojantį el. pašto adresą, pavyzdžiui, ${e}.`,
      building: e => `Prototipas: mokėjimas neimamas. Kuriama ataskaita, kuri būtų išsiųsta adresu ${e}…`,
      done: f => `Ataskaita paruošta: ${f}. Veikiančioje versijoje ji siunčiama el. paštu po apmokėjimo.`,
      declined: "Atsisiuntimas atšauktas. Spustelėkite mygtuką dar kartą, kad išsaugotumėte ataskaitą.",
      noDl: "Atsisiuntimas šiame rodinyje negalimas.",
      buildFail: "Ataskaitos sukurti nepavyko."
    },
    nav1: "Įmonė", nav1s: "Įmonės kodas ir duomenys",
    nav2: "Skaičiai ir klausimai", nav2s: "Patikrinkite ir papildykite",
    nav3: "Rezultatas", nav3s: "Vertinimas ir veiksmai",
    s1Eye: "1 žingsnis iš 3", s1H: "Raskite savo įmonę",
    s1P: "Įveskite įmonės kodą (9 skaitmenys) arba pavadinimą. Iš Registrų centro atvirų duomenų paimsime pajamas ir pelną prieš apmokestinimą už paskutinius trejus metus ir užpildysime skaičius už jus.",
    slotY: ["Paskutiniai metai", "Ankstesni metai", "Prieš dvejus metus"],
    slotEmpty: "Pasirinkite PDF arba nutempkite jį čia", slotBusy: "Skaitoma ir įkeliama…", slotSaving: "Įkeliama…",
    slotFound: (y, r) => `Finansiniai metai ${y}` + (r ? ` · pajamos ${r}` : ""),
    pillOk: "Įkelta ir perskaityta", pillManual: "Įkelta", pillErr: "Klaida", pillBusy: "Skaitoma…",
    slotManual: "Skaičių nepavyko perskaityti automatiškai. Dokumentą peržiūrės patarėjas.",
    remove: "Pašalinti",
    extraH: "Įkelkite daugiau informacijos (neprivaloma)",
    extraP: "Pavyzdžiui, finansines ataskaitas, paskutinę mėnesio ataskaitą, biudžetą ar verslo planą. Neprivaloma, bet leidžia geriau įvertinti.",
    extraGrowth: "Jūsų įmonė auga? Pridėkite verslo planą, kad vertinimas būtų tikslesnis.",
    extra3H: "Turite verslo planą ar biudžetą? Įkelkite čia",
    extra3P: "Aukščiau pateiktas vertinimas grindžiamas tik istoriniais finansinių ataskaitų duomenimis. Jei įkelsite mėnesio ataskaitas, biudžetą ar verslo planą, jie bus įvertinti ataskaitoje: mėnesio ataskaitos atnaujina pelno bazę, o biudžetui suteikiamas 20–35 % svoris, priklausomai nuo to, kaip gerai jis pagrįstas. Neprivaloma.",
    extraBtn: "Įkelti failus",
    chipUp: "įkeliama…", chipOk: "išsaugota", chipErr: "nepavyko",
    leadH: "Išsaugokite rezultatą", leadP: "Dar neparduodate? Gaukite vertinimo kopiją el. paštu arba priminimą, kai bus laikas jį atnaujinti. Neprivaloma ir nemokama.",
    leadCopy: "Atsiųsti rezultato kopiją į mano el. paštą", leadRemind: "Priminti atnaujinti vertinimą po 6 mėnesių", leadConsent: "Sutinku, kad Adsco Capital Partners šiuo tikslu saugotų mano el. pašto adresą.",
    leadBtn: "Siųsti", leadBusy: "Siunčiama…", leadNeed: "Įveskite galiojantį el. pašto adresą, pasirinkite bent vieną parinktį ir sutikite su sąlyga.", leadErr: "Šiuo metu išsiųsti nepavyko. Pabandykite netrukus dar kartą.",
    leadOk: (c, r, e) => (c ? `Atlikta! Kopija išsiųsta adresu ${e}.` : "Atlikta!") + (r ? " Priminsime po šešių mėnesių." : ""),
    topActH: "Jūsų vertingiausias veiksmas", topActMore: n => `Dar ${n} ${n3(n, "veiksmas", "veiksmai", "veiksmų")} su poveikiu ir terminais – vertės didinimo plane ataskaitoje.`,
    normH: "Jūsų normalizuota EBITDA", normRow1: "EBITDA, svertinis 3 metų vidurkis (pridėjus vienkartines išlaidas)", normRowLtm: "EBITDA, įvertinus paskutinius 12 mėnesių (pridėjus vienkartines išlaidas)", normRow2: "Savininko atlyginimas, pakoreguotas iki rinkos lygio", normRow3: "Normalizuota EBITDA – ką vertina pirkėjas",
    normHighSal: (own, mkt, d) => `Sau mokate ${own}, daugiau nei ${mkt}, kiek kainuotų samdomas vadovas. Pirkėjas skaičiuoja rinkos atlyginimą, todėl ${d} pridedama prie pelno. Tai padidina vertę, palyginti su paprastu ataskaitinės EBITDA daugikliu.`,
    normLowSal: (own, mkt, d) => `Sau mokate ${own}, mažiau nei ${mkt}, kiek kainuotų samdomas vadovas, pavyzdžiui, kad daugiau gautumėte dividendais. Pirkėjui reikės pasamdyti vadovą, todėl ${d} atimama iš pelno. Todėl pelnas čia mažesnis nei ataskaitose.`,
    normEqSal: own => `Jūsų atlyginimas ${own} atitinka rinkos atlyginimą vadovui, todėl korekcija nereikalinga.`,
    normNoSal: "Savininko atlyginimas nenurodytas. Jei mokate sau atlyginimą ar dividendus, kurie skiriasi nuo rinkos atlyginimo vadovui, įrašykite tai 2 žingsnyje ir pelnas bus pakoreguotas taip, kaip tai padarytų pirkėjas.", chipReading: "skaitoma…", chipRead: "skaičiai perskaityti", chipNoRead: "perskaitys patarėjas",
    docH: "Perskaityta medžiaga:", docBud: (y, r) => `${y} m. biudžetas su ${r} pajamų.`, docYtd: (n, r, e) => `Mėnesio ataskaita: ${n} mėn., pajamos ${r}, EBITDA ${e}.`,
    docW: w => `Biudžetui ataskaitoje suteikiamas ${w}% svoris. Bendra nuosavo kapitalo vertė:`, docOnlyYtd: "Mėnesio ataskaitos atnaujina pelno bazę ataskaitoje.",
    next1: n => n ? `Tęsti su ${n} ${dok(n)}` : "Tęsti",
    skip: "Neturite duomenų po ranka? Įrašykite skaičius patys",
    s1Fine: "Dokumentus Adsco Capital Partners saugo šifruotus, naudoja tik jūsų vertinimui ir ištrina paprašius. Niekada jais su niekuo nesidalijame.",
    howH: "Kaip tai veikia",
    how: [["Įveskite įmonės kodą arba pavadinimą", "Iš Registrų centro paimame pajamas ir pelną už paskutinius trejus metus."], ["Gaukite rezultatą iš karto", "Vertės intervalas, pasirengimo pardavimui balas ir svarbiausi veiksmai."]],
    ticks: ["Užtrunka apie tris minutes", "Nemokamai, be registracijos"],
    quote: "Pirkėjai moka už tai, ką gali patikrinti. Gerai pasirengusi įmonė gauna ir didesnę kainą, ir geresnes sąlygas.",
    quoteBy: "Adsco Capital Partners",
    drvH: "Į ką žiūri pirkėjas",
    drivers: [["Pelningumas ir augimas", "Normalizuota EBITDA ir trejų metų tendencija lemia bazinę vertę."], ["Priklausomybė nuo savininko", "Ar įmonė apsieis be jūsų? Tai veikia ir kainą, ir sąlygas."], ["Pasikartojančios pajamos", "Sutartys ir nuolatiniai klientai daro būsimas pajamas nuspėjamas."], ["Dokumentacija", "Atskaitomybė ir rašytinės sutartys palengvina išsamų patikrinimą."]],
    tipsH: "Naudinga žinoti",
    tips: [["Kur rasti EBITDA?", "Veiklos pelnas plius nusidėvėjimas ir amortizacija pelno (nuostolių) ataskaitoje. Registras skelbia tik pelną prieš apmokestinimą, todėl prie jo pridėkite nusidėvėjimą ir palūkanų sąnaudas."], ["Savininko ir rinkos atlyginimas", "Jei sau mokate daugiau ar mažiau, nei kainuotų samdomas vadovas, pelnas koreguojamas skirtumu."], ["Vienkartinės išlaidos", "Nepasikartosiančios išlaidos, pavyzdžiui, persikraustymas ar ginčas, pridedamos atgal prie pelno."]],
    whyH: "Kodėl to klausiame?",
    whyP: "Dvi įmonės su tokiu pačiu pelnu gali būti parduotos už visiškai skirtingą kainą. Pirkėjas moka daugiau, kai pajamos išsklaidytos ir pasikartojančios, o įmonė veikia be savininko. Jūsų atsakymai daugiklį didina arba mažina.",
    orgL: "Įmonės kodas arba pavadinimas", orgPh: "304123456 arba UAB pavadinimas",
    srchLooking: "Ieškoma…", srchPick: "Pasirinkite įmonę sąraše.", srchNone: "Įmonės tokiu pavadinimu nerasta. Pabandykite kitą pavadinimą arba įveskite įmonės kodą.", srchShort: "Įveskite bent tris pavadinimo raides.",
    orgEmpty: "Pirmiausia įveskite įmonės kodą ir spustelėkite Pradėti.",
    ctaH: "Atlikta! Kaip norite tęsti?", freeBtn: "Peržiūrėti nemokamą vertinimą →", ctaSub: "Atsakykite į septynis trumpus klausimus ir rezultatą pamatysite iš karto. Arba užsisakykite ataskaitą iš karto:",
    mktLine: (q, med, pe, st) => `Rinka: nebiržinės vidutinės Europos įmonės parduotos už ${med} EBITDA medianą (Argos Index, ${q}). Fondai mokėjo ${pe}, o pramoniniai pirkėjai ${st}. Mažesnės įmonės paprastai parduodamos pigiau.`,
    mktBuyers: b => `Aktyvūs pirkėjai sektoriuje: ${b}.`,
    gpIntro: "Be papildomos medžiagos ataskaita grindžiama istoriniais duomenimis. Su medžiaga patarėjas elgiasi taip: mėnesio ataskaitos parodo paskutinius dvylika mėnesių, kuriems pelno bazėje suteikiamas didžiausias svoris. Biudžetas suteikia augimo vertę su 20 % svoriu, iki 35 %, jei jį paaiškina verslo planas ir šių metų rezultatai atitinka planą. Viskas neprivaloma ir konfidencialu.",
    gpPlanH: "Verslo planas", gpPlanP: "Strategija, rinka ir tikslai. PDF, Word ar PowerPoint.",
    gpBudH: "Biudžetas ar prognozė", gpBudP: "Artimiausi 1–3 metai. Excel ar PDF.",
    gpMonH: "Paskutinės mėnesio ataskaitos", gpMonP: "Pelno (nuostolių) ataskaita ir balansas nuo metų pradžios.",
    gpPick: "Pasirinkti failus", gpNote: "Galite tęsti ir be dokumentų, o juos atsiųsti vėliau.",
    gpGo: n => n ? `Tęsti užsakymą (${n} ${dok(n)}) →` : "Tęsti užsakymą →",
    kindLbl: { plan: "Verslo planas", budget: "Biudžetas", monthly: "Mėnesio ataskaita" },
    rateLbl: r => `Palūkanų normos (ECB indėlių palūkanų norma ${r}%)`,
    rateLine: (r, src, dt, adj, ref) => `Daugikliai koreguojami pagal palūkanų normų lygį: ECB indėlių palūkanų norma yra ${r}% (${dt}). ` + (adj ? `Palyginti su įprastu ${ref}% lygiu, tai daugikliui suteikia ${adj}.` : `Tai artima įprastam ${ref}% lygiui ir daugikliui įtakos neturi.`),
    rateFree: (r, src) => `Daugikliai koreguojami pagal palūkanų normų lygį (ECB indėlių palūkanų norma ${r}%).`,
    arH: y => `Ką rodo ${y} m. finansinės ataskaitos`, arSrcPdf: "Perskaitėme įkeltų finansinių ataskaitų tekstą. Rizikos ženklai veikia vertinimą, kiti punktai padės teisingai atsakyti į aukščiau pateiktus klausimus.",
    docFail: "Dokumento šiuo metu parodyti nepavyksta. Pabandykite netrukus dar kartą.",
    noBV: "Registre nėra jūsų įmonės finansinių duomenų. Įrašykite skaičius patys arba įkelkite finansines ataskaitas kaip PDF:",
    manualUp: "Neturite įmonės kodo po ranka? Įrašykite skaičius patys",
    addUp: "Įkelkite ir finansines ataskaitas (PDF), kad patarėjas matytų nusidėvėjimą ir skolas",
    listedH: ex => `Listinguojama įmonė – ${ex}`,
    listedP: "Listinguojamos įmonės rinkos kapitalizacija (akcijos kaina × akcijų skaičius) yra dabartinė rinkos nuosavo kapitalo vertė. Perimant visą įmonę paprastai mokama 20–40 % premija virš akcijų kainos. Mūsų vertinimas grindžiamas nebiržinių įmonių sandoriais ir turėtų būti laikomas palyginimu, o ne akcijų kainos pakaitalu.",
    listedLink: "Peržiūrėti dabartinę kapitalizaciją →", listedQ: "kapitalizacija",
    noReports: "Automatiškai rasti įmonės finansinių duomenų nepavyko. Įrašykite skaičius patys arba įkelkite finansines ataskaitas kaip PDF:",
    fetchedH: n => `Rasta: ${n}`, fetchedSrc: "Iš Registrų centro atvirų duomenų (tūkst. EUR). Skaičiai užpildyti kitame žingsnyje.", ebitL: "Pelnas prieš apmokestinimą",
    ltEvrk: c => `Pagrindinė veikla (EVRK): ${c.slice(0, 2)}.${c.slice(2, 4)}${c.slice(4) && c.slice(4) !== "00" ? "." + c.slice(4) : ""}.`,
    ltPbt: "Pelnas prieš apmokestinimą", ltNet: "Grynasis pelnas", ltEq: "Nuosavas kapitalas", ltLiab: "Mokėtinos sumos ir įsipareigojimai",
    ltNote: "Registras neskelbia veiklos pelno ir nusidėvėjimo, todėl EBITDA laukuose įrašėme pelną prieš apmokestinimą (geltoni laukai). Kitame žingsnyje pridėkite nusidėvėjimą, amortizaciją ir palūkanų sąnaudas – tai dažnai gerokai padidina vertę. Palūkanų skolą ir pinigus įrašykite patys.",
    fetchedGroup: "Konsoliduoti duomenys.",
    noDep: "",
    orgBad: "Patikrinkite įmonės kodą (9 skaitmenys, pavyzdžiui, 304123456).",
    orgOkSE: "Ačiū. Įmonės kodas bus išsiųstas su užsakymu.",
    orgLooking: "Gaunami duomenys…", orgNotFound: "Įmonės su tokiu kodu nerasta.", orgFail: "Šiuo metu duomenų gauti nepavyko. Įrašykite skaičius patys.",
    orgFound: (n, y) => `${n}: paimti ${y} m. skaičiai.`, orgFoundName: n => `Rasta: ${n}.`,
    pkgH: "Pasirinkite lygį – pradėkite nemokamai arba užsisakykite iš karto",
    discSum: "Orientacinis vertinimas – ne konsultacija. Perskaitykite svarbią informaciją",
    disc: [
      ["Orientacinis vertinimas.", "Exitkompass pateikia apytikslį vertės intervalą, remdamasis supaprastintais sektoriaus daugikliais ir gauta ar pateikta informacija. Tai nėra vertinimo išvada, sandorio sąžiningumo išvada (fairness opinion) ar investicinė, mokesčių, apskaitos ar teisinė konsultacija."],
      ["Vertė pardavimo atveju, ne teisiniams tikslams.", "Exitkompass parodo, kiek įmonė gali būti verta pirkėjui ją parduodant (rinkos vertė veiklos tęstinumo prielaida, pagal daugiklius). Tai nėra turto, likvidacinė vertė ar vertinimas turto padalijimui, paveldėjimui, ginčams, mažumos akcininkų išpirkimui ar mokesčių tikslams. Tokiais atvejais reikia oficialaus vertinimo tikslui tinkamu metodu."],
      ["Faktinė kaina gali reikšmingai skirtis.", "Kiek sumokės pirkėjas, priklauso nuo rinkos sąlygų, pirkėjo tipo, finansavimo, išsamaus patikrinimo, sutarties sąlygų ir įmonės perspektyvų. Nepriimkite sprendimų remdamiesi vien šiuo įrankiu."],
      ["Šaltiniai.", "Įmonės duomenys ir finansinių ataskaitų rodikliai paimami iš Registrų centro ir Valstybinės mokesčių inspekcijos atvirų duomenų (data.gov.lt). Registras neskelbia veiklos pelno ir nusidėvėjimo, todėl EBITDA pradžioje lygi pelnui prieš apmokestinimą ir turi būti patikrinta. Duomenų netikriname ir neatsakome už klaidas šaltiniuose. Visada palyginkite su įmonės finansinėmis ataskaitomis."],
      ["Daugikliai.", "Sektorių daugikliai paimti iš Šiaurės šalių sandorių tyrimo (Dealsuite) ir Lietuvai sumažinti pagal Adsco vertinimą, nes viešo Lietuvos MVĮ sandorių daugiklių šaltinio nėra. Korekcija atskirai parodyta daugiklio tilte."],
      ["Jokio pavedimo.", "Įrankio naudojimas ar ataskaitos užsakymas nesukuria konsultavimo pavedimo. Tam reikia rašytinės sutarties su Adsco Capital Partners. Adsco neatsako už nuostolius dėl sprendimų, priimtų remiantis įrankiu ar ataskaita."],
      ["Jūsų duomenys.", "Įmonių kodus, skaičius ir įkeltus dokumentus saugo Adsco Capital Partners (Google Workspace) ir naudoja tik jūsų vertinimui ir ataskaitai parengti. Su trečiosiomis šalimis jais nesidalijame ir ištriname paprašius."]
    ],
    adH: "Apie Adsco Capital Partners",
    adLead: "Exitkompass kuria Adsco Capital Partners – partneriams priklausanti nepriklausoma M&A ir kapitalo rinkų konsultacinė bendrovė, įsikūrusi Stokholme. Dirbame su įkūrėjams, šeimoms ir privataus kapitalo fondams priklausančiomis įmonėmis – nuo pirmojo strateginio pokalbio iki sandorio užbaigimo.",
    adStats: [["60+", "metų bendros patirties kapitalo rinkose"], ["5", "Šiaurės šalių IPO 2016–2022 m."], ["Nuo 1996 m.", "investicinėje bankininkystėje"], ["2", "patyrę partneriai kiekviename sandoryje nuo pradžios iki pabaigos"]],
    adTeam: [["Sture Stölen", "Partneris įkūrėjas", "20+ metų investuotojų santykių ir M&A srityje · vadovavo 5 Šiaurės šalių IPO 2016–2022 m."], ["Lars Carlson", "Partneris įkūrėjas", "25+ metai sektoriuje, įskaitant ECM ir M&A · investicinis bankininkas nuo 1996 m."]],
    adIndep: "Nepriklausomi: neteikiame paskolų ir rekomendacijų. Svarbus tik jūsų rezultatas.",
    pkgs: [
      { name: "Greitas vertinimas", items: ["Vertės intervalas iš karto puslapyje", "Pasirengimo pardavimui balas", "Trys svarbiausios išvados"] },
      { name: "Ataskaita", tag: "Rekomenduojama", items: ["Išsami PDF ataskaita lietuvių kalba", "Scenarijai ir jautrumo analizė", "Vertės didinimo planas 12–24 mėnesiams", "Augimo vertinimas pagal verslo planą", "Pirkėjų tipai ir pardavimo procesas", "Peržiūri patyręs patarėjas, pateikiama per 1–2 darbo dienas"] },
      { name: "Ataskaita + aptarimas", tag: "Su partneriu", items: ["Viskas iš ataskaitos", "60 minučių su Adsco Capital Partners partneriu (anglų kalba)", "Normalizavimų ir tolesnių žingsnių peržiūra"] }
    ],
    startFree: "Pradėti nemokamai", choose: ["Pasirinkti ataskaitą", "Pasirinkti su aptarimu"], buy: ["Pirkti ataskaitą", "Pirkti su aptarimu"], haveFree: "Tai jau turite ✓",
    chosen: n => `Pasirinkote: ${n}. Pradėkite nuo įmonės duomenų žemiau; užsakysite pamatę vertinimą.`,
    emailL: "Jūsų el. paštas", opened: "Užsakymo forma atidaryta naujame skirtuke. Išsiųskite ją ir susisieksime dėl mokėjimo ir pristatymo.",
    s2Eye: "2 žingsnis iš 3", s2H: "Patikrinkite skaičius",
    s2PAuto: "Žali laukai paimti iš registro, geltonus būtinai patikrinkite: EBITDA laukuose kol kas yra pelnas prieš apmokestinimą. Pridėkite nusidėvėjimą ir palūkanas, papildykite trūkstamus duomenis ir atsakykite į pirkėjo klausimus.",
    s2PManual: "Įrašykite pastarųjų trejų metų pardavimo pajamas ir EBITDA " + K + " ir atsakykite į pirkėjo klausimus.",
    keyGreen: "Iš registro", keyYellow: "Patikrinkite",
    to3: "Rodyti mano vertinimą", back1: "Atgal",
    need: "Įrašykite bent paskutinių metų pajamas ir EBITDA.",
    orgGo: "Pradėti vertinimą →", micro1: "Užtrunka apie tris minutes", micro2: "Nemokamai, be registracijos",
    lockH: "Išsamioje ataskaitoje", lockP: "Pasirengimas pardavimui pagal sritis, strateginė vertė, jautrumo analizė, visas vertės didinimo planas 12–24 mėnesiams ir kurie pirkėjai sumokėtų daugiausia už tokią įmonę kaip jūsų.",
    lockExit: "Pasirengimas pardavimui pagal sritis", lockStrat: "Strateginė vertė", lockSvPrem: "Strateginė premija", lockSvVal: "Vertė su premija", lockSvDrv: "Vertės veiksniai", lockSens: "Jautrumo analizė", lockPlan: "Vertės didinimo planas 12–24 mėn.", lockBuyers: "Pirkėjų tipai ir daugikliai",
    lockBtn: p => `Atrakinti ataskaitoje · ${p}`, lockDeliv: "Pateikiama per 1–2 darbo dienas, peržiūri patyręs patarėjas.",
    delivPaid: "⏱ Pateikiama per 1–2 darbo dienas", delivFree: "⚡ Iš karto puslapyje",
    largeH: "Jūsų įmonė didesnė, nei numatyta Exitkompass",
    largeP: (r, e) => `Esant ${r} pajamų ir ${e} EBITDA, vertę lemia listinguojamos panašios įmonės ir strateginiai sandoriai, o ne mažų ir vidutinių įmonių daugikliai. Automatinis skaičius čia būtų klaidinantis, dažniausiai gerokai per mažas, todėl jo nerodome.`,
    largeP2: "Užsisakykite nemokamą, konfidencialų susitikimą su Adsco Capital Partners partneriu. Aptarsime vertės vaizdą, tikėtinus pirkėjus ir jūsų strategines galimybes.",
    largeNote: "Žemiau pateiktas pasirengimo pardavimui balas ir išvados visiškai tinka ir didesnėms įmonėms.",
    largeBtn: "Užsisakyti susitikimą su partneriu →",
    mName: "Susitikimas su partneriu", mPrice: "Nemokamai", mTag: "Konfidencialiai",
    mItems: ["Vertės vaizdas pagal listinguojamas įmones ir sandorius", "Pirkėjai: strateginiai investuotojai ir privataus kapitalo fondai", "Strateginės galimybės ir laikas", "60 minučių su patyrusiu partneriu (anglų kalba)"],
    mH: "Užsisakykite susitikimą su partneriu", mP: "Įveskite savo duomenis ir per vieną darbo dieną susisieksime dėl laiko. Viskas tvarkoma konfidencialiai.",
    mSend: "Siųsti susitikimo užklausą", mDoneH: n => `Ačiū${n ? ", " + n : ""}! Jūsų užklausą gavome.`, mDoneP: e => `Per vieną darbo dieną susisieksime adresu ${e} dėl susitikimo laiko.`,
    mFine: "Nemokamai ir be įsipareigojimų.", mWhen: "Atsakymas", mWhenV: "Per vieną darbo dieną",
    oEye: "Užsakymas", oH: "Užsisakykite ataskaitą",
    oP: "Įveskite savo duomenis ir susisieksime per vieną darbo dieną. Jūsų skaičiai ir įkelti dokumentai bus išsiųsti automatiškai.",
    oBack: "Atgal", oName: "Vardas ir pavardė *", oEmail: "El. paštas *", oPhone: "Telefonas", oCompany: "Įmonė *", oOrg: "Įmonės kodas",
    oMsg: "Žinutė (neprivaloma)",
    oConsent: "Sutinku su pirkimo sąlygomis ir sutinku, kad Adsco Capital Partners tvarkytų mano duomenis ir dokumentus ataskaitai parengti ir susisiektų su manimi dėl užsakymo.",
    oFine: "Mokėti dabar nereikia. Sąskaita bus išsiųsta kartu su ataskaita, apmokėjimo terminas – 10 dienų. Kaina be PVM; PVM mokėtojams Lietuvoje taikomas atvirkštinis apmokestinimas.",
    oSend: p => `Siųsti užsakymą · ${p}`, oSending: "Siunčiamas užsakymas…",
    oNeed: "Įveskite vardą ir pavardę, galiojantį el. pašto adresą ir įmonę.", oNeedOk: "Patvirtinkite, kad galime tvarkyti informaciją.",
    oFail: "Šiuo metu užsakymo išsiųsti nepavyko.", oFailLink: "Išsiųskite jį per mūsų formą →",
    oDocs: n => `${n} ${dok(n)} ir jūsų vertinimas bus išsiųsti su užsakymu.`,
    oDelivery: "Pristatymas", oDeliveryV: "1–2 darbo dienos", oPayL: "Mokėjimas", oPayV: "Sąskaita, 10 dienų, be PVM", oDocsL: "Dokumentai", oDocsV: n => n ? `${n} ${dok(n)}` : "Galima atsiųsti vėliau",
    oWho: "Peržiūri patyręs Adsco Capital Partners patarėjas.",
    oDoneH: n => `Ačiū${n ? ", " + n : ""}! Jūsų užsakymą gavome.`,
    oDoneP: e => `Per vieną darbo dieną atsiųsime patvirtinimą ir tolesnius žingsnius adresu ${e}. Susisiekdami nurodykite užsakymo numerį.`,
    oDoneBack: "Atgal į vertinimą",
    basis: "Vertė grindžiama istoriniais duomenimis ir yra žemutinė riba. Mėnesio ataskaitos, biudžetas ir verslo planas vertinami tik ataskaitoje. Modelis nemato augimo planų, technologijų, sutarčių ar to, kiek įmonė strategiškai verta pirkėjui.",
    upsideH: "Jūsų įmonė gali būti vertesnė, nei rodo skaičiai",
    upsideP: "Pirkėjai dažnai moka daugiau už įmones, turinčias šias savybes, o istoriniai duomenys jas atspindi tik iš dalies:",
    upsideP2: "Remdamiesi verslo planu, biudžetu ir paskutinėmis mėnesio ataskaitomis, ataskaitoje įvertiname augimo scenarijų ir įtraukiame jį į vertinimą su 20–35 % svoriu, priklausomai nuo to, kaip gerai pagrįstas biudžetas.",
    upUpload: "Įkelti verslo planą ar biudžetą",
    upsideBtn: "Įvertinti augimo potencialą →",
    upGrowth: g => `Spartus augimas: ${g}% per metus pastaraisiais metais`,
    upRecur: r => `Didelė pasikartojančių pajamų dalis: ${r}%`,
    upMargin: "Įsitvirtinusi pajamų bazė su šiuo metu maža marža, kai vertė slypi plėtroje",
    upTech: n => `Sektorius, kuriame pirkėjai moka už technologijas ir plečiamumą (${n})`,
    advH: "Augimo planas (patarėjas)",
    advP: "Biudžetuojamos pajamos " + K + " trejiems metams, laukiama EBITDA marža 3-iais metais ir reikalaujama grąža. Suteikia augimo vertinimą ataskaitoje.",
    advY: y => `Pajamos ${y}`, advM: "EBITDA marža 3-iais metais, %", advR: "Reikalaujama grąža, %",
    advPlanChk: "Yra biudžetą paaiškinantis verslo planas", advYtdP: "Mėnesio ataskaitos (tūkst., nuo metų pradžios). Parodo paskutinius dvylika mėnesių (LTM) ir ar įmonė vykdo biudžetą. Bent 3 mėnesiai.",
    advYtN: "Mėnesių skaičius", advYtR: "Pajamos nuo metų pradžios", advYtE: "EBITDA nuo metų pradžios", advYtRp: "Pajamos tuo pačiu laikotarpiu pernai", advYtEp: "EBITDA tuo pačiu laikotarpiu pernai",
    advLtm: x => `Paskutinių dvylikos mėnesių EBITDA: ${x}.`, advBlend: (w, x) => `Biudžetui suteikiamas ${w}% svoris: bendra nuosavo kapitalo vertė ${x}.`,
    advPdf: "Sukurti PDF ataskaitą", advBusy: "Kuriama ataskaita…", advDone: "Atlikta, ataskaita atsisiųsta.", advErr: "Ataskaitos sukurti nepavyko.",
    gvLine: (lo, hi) => `Su jūsų verslo planu: ${lo} – ${hi} nuosavo kapitalo vertės šiandien (jei planas bus įgyvendintas).`,
    fetchedInd: n => `Sektorius: ${n}. Jei neteisingas, galėsite pakeisti kitame žingsnyje.`,
    kEvMethod: () => "Prieš grynąją skolą. EBITDA, EBIT ir pajamų daugiklių derinys, žr. žemiau.",
    blFree: "Daugikliai, vertė pagal kiekvieną metodą, svoriai ir atitinkamas daugiklis pateikiami ataskaitoje.",
    bFree: "Sektoriaus lygiai ir palyginimo poveikis daugikliui pateikiami ataskaitoje.",
    brFree: "Čia matote kryptį. Kiek kiekvienas veiksnys didina ar mažina daugiklį, pateikiama ataskaitoje.",
    mktFree: n => "Nebiržinių įmonių rinka (Argos Index) ir " + (n ? `${n} įvardyti aktyvūs pirkėjai jūsų sektoriuje` : "aktyvūs pirkėjai sektoriuje") + " pateikiami ataskaitoje.",
    blH: "Vertinimas trimis daugikliais", blBasis: "Įmonės rodiklis", blMult: "Daugiklis", blVal: "Vertė (EV)", blW: "Svoris",
    blEbitda: "EV/EBITDA", blEbit: "EV/EBIT", blRev: "EV/pajamos", blSum: "Bendra įmonės vertė",
    blImp: (a, b, c) => "Bendrai tai atitinka " + [a && a + " EBITDA", b && b + " EBIT", c && c + " pajamų"].filter(Boolean).join(", ") + ". Aukščiau pateiktas intervalas – ±0,75x pelno daugikliams.",
    needQ: "Įrašykite didžiausio kliento dalį ir pasikartojančių pajamų dalį (0–100 %). Jos labai veikia vertinimą.",
    s3Eye: "3 žingsnis iš 3 · Jūsų rezultatas", back2: "Keisti duomenis",
    upEye: "Išsami ataskaita",
    upShort: "PDF ataskaita lietuvių kalba iš Adsco Capital Partners, parengta pagal jūsų skaičius ir dokumentus, peržiūrėta patarėjo.",
    docsN: n => n ? `Jūsų ${n} ${n3(n, "įkeltas dokumentas bus išsiųstas", "įkelti dokumentai bus išsiųsti", "įkeltų dokumentų bus išsiųsta")} su užsakymu ir peržiūrėti patarėjo.` : "Finansines ataskaitas ir kitą medžiagą galėsite atsiųsti po užsakymo.",
    s1Read: (n, o, ys) => `Perskaitėme ${ys} m. duomenis – ${n || "įmonė"}${o ? " (" + o + ")" : ""}.`,
    s1NoRead: "Dokumentai įkelti, bet skaičių automatiškai perskaityti nepavyko. Įrašykite juos kitame žingsnyje. Užsakius ataskaitą, dokumentus peržiūrėsime rankiniu būdu.",
    s1Partial: "Dalies dokumentų nepavyko perskaityti automatiškai. Patikrinkite skaičius kitame žingsnyje.",
    upFail: "Dokumento įkelti nepavyko. Bandykite dar kartą arba tęskite be jo.",
    badType: "Šis failo tipas nepalaikomas. Naudokite PDF, Word, Excel, PowerPoint ar paveikslėlį.",
    badTypeAnnual: "Įkelkite finansines ataskaitas kaip PDF (arba paveikslėlį, jei turite tik nuskenuotą kopiją).",
    tooBig: "Failas per didelis. Didžiausias dydis – 20 MB.",
    tooMany: "Įkėlėte didžiausią leidžiamą dokumentų skaičių.",
    privacy: "Gauta ar įkelta informacija ir dokumentai saugomi Adsco Capital Partners Google Workspace ir naudojami tik jūsų vertinimui ir ataskaitai parengti. Susisiekite su mumis, jei norite, kad juos ištrintume.",
    langH: "Kalba",
    bH: "Palyginti su sektoriumi", bYou: y => `Jūsų įmonė ${y}`, bMed: "Sektoriaus mediana (kvartiliai)", bMedS: "Sektoriaus mediana", bAvg: "Sektoriaus vidurkis", bMargin: "Veiklos marža", bGrowth: "Pajamų augimas", bPerEmp: "Pajamos vienam darbuotojui (tūkst.)",
    bPos: ["Silpniausias ketvirtis", "Žemiau medianos", "Virš medianos", "Geriausias ketvirtis"], bAbove: "Aiškiai virš vidurkio", bBelow: "Aiškiai žemiau vidurkio", bNear: "Arti vidurkio",
    bAdj: x => `Marža, palyginti su sektoriumi, daugikliui suteikia ${x}.`, bNoAdj: "Marža yra įprastose sektoriaus ribose ir daugikliui įtakos neturi. Augimas vertinamas atskirai.",
    cycH: "Sektoriaus konjunktūra", cycLbl: l => `Konjunktūra (${l.toLowerCase()})`, cycState: ["Daug silpnesnė nei įprastai", "Silpnesnė nei įprastai", "Įprasta", "Stipresnė nei įprastai", "Daug stipresnė nei įprastai"],
    tf: { gc: "Auditorius nurodo reikšmingą neapibrėžtumą dėl veiklos tęstinumo", qual: "Auditoriaus išvadoje yra išlyga arba atsisakyta pareikšti nuomonę", kbr: "Nuosavas kapitalas mažesnis nei pusė įstatinio kapitalo", dispute: "Minimas ginčas ar teismo procesas", custdep: "Minima priklausomybė nuo vieno ar kelių didelių klientų – patikrinkite atsakymą apie didžiausią klientą", recur: "Minimos prenumeratos, licencijos ar aptarnavimo sutartys – įtraukite jas į pasikartojančių pajamų dalį", growth: "Minima plėtra ar augantis poreikis" },
    arAbout: "Veikla:", arEmp: n => `Vidutinis darbuotojų skaičius: ${n}`, arAdj: x => `${x} daugikliui`, arNone: "Tekste rizikos ženklų nėra (veiklos tęstinumas, auditoriaus išlygos, kapitalo trūkumas, ginčai).",
    svH: "Strateginė vertė",
    svLevel: ["Mažas strateginis susidomėjimas", "Tam tikras strateginis susidomėjimas", "Didelis strateginis susidomėjimas"],
    svP: "Strateginis pirkėjas, pavyzdžiui, konkurentas, klientas, tiekėjas ar serijinis įsigytojas, gali sumokėti daugiau nei aukščiau pateikta finansinė vertė, jei įmonė suteikia sinergijų: naujų klientų, rinkų, produktų, technologijų ar kompetencijų. Mūsų vertinimas grindžiamas:",
    svDrv: { ind: n => `Sektoriumi (${n}), kuriame pirkėjai aktyviai įsigyja įmones ir moka už sinergijas`, recur: "Pasikartojančiomis pajamomis, ant kurių pirkėjas gali statyti", growth: "Augimu, stiprinančiu pirkėjo platformą", margin: "Marža geriausiame sektoriaus ketvirtyje", cust: "Plačia klientų baze be priklausomybės nuo pavienių klientų", buyers: "Aktyviais serijiniais įsigytojais, perkančiais sektoriaus įmones" },
    svNone: "Skaičiuose matyti nedaug veiksnių, kurie paprastai pritraukia strateginius pirkėjus. Strateginė premija tada daugiausia priklauso nuo to, kas yra pirkėjas.",
    svFree: "Kas lemia strateginį susidomėjimą, orientacinė premija eurais ir kurie pirkėjai galėtų ją sumokėti, pateikiama ataskaitoje.",
    potFree: "Kiek vertė galėtų padidėti, kai įmonė bus pasirengusi pardavimui, pateikiama ataskaitoje.", scoreFree: "Balas pagal sritis ir kas jį mažina, pateikiama ataskaitoje.",
    svPrem: (r, a) => `Strateginis pirkėjas galėtų sumokėti apie ${r} daugiau nei įmonės vertė, t. y. ${a} daugiau.`,
    svNote: "Premija neįtraukta į aukščiau pateiktą vertinimą. Tam reikia tinkamo pirkėjo ir konkurencingo pardavimo proceso."
  };
}
UI.LT = Object.assign({}, UI.EN.SE, mkLT());
UI.SE.flLT = UI.NO.flLT = "Litauen"; UI.EN.SE.flLT = UI.EN.NO.flLT = "Lithuania"; if (UI.PL) UI.PL.flLT = "Litwa";

/* ---------- Dutch UI texts (country NL: KVK open data on filed annual accounts, EUR) ----------
   Built on top of the English set, so any key not translated here falls back to English rather than Swedish. */
function mkNL() {
  const K = "duizend EUR";
  const doc = n => n === 1 ? "document" : "documenten";
  return {
    html: "nl", loc: "nl-NL", by: "Adsco Capital Partners", flSE: "Zweden", flNO: "Noorwegen", flPL: "Polen", flLT: "Litouwen", flNL: "Nederland", defName: "Uw bedrijf",
    h1: "Wat is uw bedrijf waard voor een koper, en hoe verhoogt u die waarde?",
    heroP: "Een gratis indicatieve waardering in ongeveer drie minuten. We halen de gedeponeerde jaarrekening op bij de KVK, u vult aan wat ontbreekt en beantwoordt zeven vragen, en u krijgt een waardebandbreedte, een exit-score en de acties die de waarde het meest verhogen.",
    heroTrust: ["Gratis", "Zonder registratie", "Ongeveer 3 minuten", "Multiples uit M&A-transacties"],
    heroFit: "Gemaakt voor mkb-bedrijven met een omzet tot ongeveer 45 miljoen euro. Grotere bedrijven en groepen waardeert u het best in een gesprek met een partner.",
    step1: "Vul het KVK-nummer in, dan halen we de gedeponeerde jaarrekening op, of vul omzet en EBITDA in " + K + " zelf in.",
    step2: "Beantwoord de vragen van de koper over afhankelijkheid van de eigenaar, klanten en contracten.",
    step3: "Bekijk de waardering en bestel het volledige rapport.",
    dropTitle: "Upload de jaarrekening (PDF)",
    dropSub: "Een adviseur bekijkt die als u het rapport bestelt. Sleep het bestand hierheen of klik om te kiezen.",
    or: "of vul de cijfers zelf in",
    legCompany: "Bedrijf", name: "Bedrijfsnaam", industry: "Sector",
    legFin: "Cijfers (" + K + ")", yYear: "Jaar", yRev: "Netto-omzet",
    ownsal: "Salaris eigenaar (DGA)", mktsal: "Marktsalaris voor een directeur",
    oneoff: y => `Eenmalige kosten ${y} (worden opgeteld)`,
    debt: "Rentedragende schulden", cash: "Liquide middelen",
    salHint: "Vul salarissen in inclusief werkgeverslasten.",
    legBuyer: "Vragen van de koper",
    topcust: "Grootste klant, % van de omzet", recur: "Terugkerende omzet, %",
    ownerQ: "Als u drie maanden weg zou zijn, zou het bedrijf…",
    owner: ["In de problemen komen: belangrijke klanten en beslissingen hangen van mij af", "Zich redden, met wat verstoringen", "Gewoon doordraaien"],
    mgmtQ: "Management onder de eigenaar", mgmt: ["Geen, ik stuur alles zelf aan", "Deels: één of twee sleutelfiguren", "Een volledig managementteam met duidelijke rollen"],
    repQ: "Financiële rapportage", reporting: ["Alleen de jaarrekening", "Kwartaalrapportages", "Maandrapportages met budgetbewaking"],
    conQ: "Contracten met klanten en leveranciers", contracts: ["Vooral mondeling of informeel", "Gemengd", "Schriftelijk en overdraagbaar aan een nieuwe eigenaar"],
    update: "Waardering bijwerken", example: "Voorbeeld tonen",
    rTitle: n => `${n}: waardering`, rMeta: (i, u) => `${i} · bedragen in ${u} tenzij anders vermeld`,
    kEq: "Waarde aandelen – historische cijfers", kEqSub: (m, nd) => `Midden ${m}, na aftrek van nettoschuld ${nd}`,
    kEv: "Ondernemingswaarde (EV)", kEvSub: "Vóór nettoschuld. Multiple en correcties in het rapport.",
    kPot: "Waarde als het bedrijf klaar is voor verkoop", kPotSub: g => `+${g} bij de huidige resultaten`, kPotNone: "Al dicht bij het beste niveau",
    scoreH: "Exit-gereedheid", scoreHint: "Hoe het due-diligenceteam van een koper het bedrijf vandaag zou beoordelen, op 100.",
    flagsH: "Wat een koper zal opmerken", flagsHint: "De drie belangrijkste bevindingen. Het rapport behandelt ze allemaal, met een actie per bevinding.",
    more: n => `+ nog ${n} ${n === 1 ? "bevinding" : "bevindingen"} in <a href="#order" target="_self">het volledige rapport</a>.`,
    noFlags: "Op basis van uw antwoorden zijn er geen grote rode vlaggen.",
    planH: "Waardeverhogingsplan", planHint: "De waardevolste actie tonen we gratis. Het rapport zet alle acties op volgorde, met waarde, stappen en planning.",
    planCols: ["Actie", "Termijn", "Waardestijging"], inReport: "In het rapport",
    planNone: "Het bedrijf scoort al goed op de belangrijkste waardedrijvers. De volgende stap is de voorbereiding van het verkoopproces.",
    buildH: "Zo is de waardering opgebouwd", buildHint: "Van de basismultiple van de sector naar de multiple van uw bedrijf, en de genormaliseerde EBITDA.",
    veil: "Multiplebrug en genormaliseerde EBITDA in het rapport",
    yours: "Uw multiple", floor: " (minimum)",
    sizeLbl: n => `Omvang (EBITDA ${n})`, growthLbl: p => `Omzetgroei (${p}% per jaar)`,
    upsellH: "Bestel het volledige rapport",
    upsellP: "Een PDF-rapport in het Nederlands van Adsco Capital Partners: volledige waardering met scenario's en gevoeligheidsanalyse, alle bevindingen van de koper, een waardeverhogingsplan met stappen en planning, kopertypen, dealstructuur, due-diligencechecklist en het verkoopproces.",
    cmpFree: "Gratis", freeList: ["Bandbreedte van de aandelenwaarde", "Exit-score", "De drie belangrijkste bevindingen", "De waardevolste actie"],
    cmpPaid: p => `Rapport · ${p}`,
    paidList: ["Puntwaardering met laag, basis- en hoog scenario", "Gevoeligheidsanalyse", "Multiplebrug en normalisatie van de EBITDA", "Alle bevindingen met acties", "Volledig waardeverhogingsplan met stappen en planning", "Kopertypen, waar zij voor betalen en indicatieve multiples", "Due-diligencechecklist", "Verkoopproces en dealstructuur"],
    emailPh: "u@bedrijf.nl", order: p => `Rapport bestellen · ${p}`,
    pricingH: "Prijzen", vat: "excl. btw", free: "Gratis", prices: ["€ 490", "€ 1.190"],
    plans: [
      ["Snelle waardering", ["Gegevens uit de KVK-jaarrekening", "Indicatieve waardebandbreedte", "Exit-score"]],
      ["Rapport", ["Alles uit de snelle waardering", "PDF-rapport in het Nederlands", "Waardeverhogingsplan voor 12–24 maanden", "Kopertypen en verkoopproces"]],
      ["Rapport + bespreking met partner", ["Alles uit het rapport", "60 minuten met een partner van Adsco Capital Partners (in het Engels)", "Controle van uw normalisaties"]]
    ],
    aboutH: "Ervaren adviseurs achter elke waardering",
    aboutP: "Exitkompass is ontwikkeld door Adsco Capital Partners, een onafhankelijk adviesbureau in eigendom van de partners, gespecialiseerd in fusies en overnames (M&A) en kapitaalmarkten, gevestigd in Stockholm. Wij werken met eigenaren, oprichters en investeerders in het middensegment, van het eerste strategische gesprek tot de closing.",
    stats: [["60+", "jaar gezamenlijke ervaring in kapitaalmarkten"], ["5", "Scandinavische beursgangen 2016–2022"], ["2", "ervaren partners in elke transactie"], ["Onafhankelijk", "in handen van de partners, geen leningen of beleggingsadvies"]],
    aboutCta: "Denkt u na over de verkoop van uw bedrijf?", aboutLink: "Plan een gratis, vertrouwelijk gesprek met een partner →",
    foot: "Exitkompass · Adsco Capital Partners · Stockholm",
    st: {
      preparing: "Betaling wordt voorbereid…", pay: "Bestelformulier openen →",
      payNote: e => `U betaalt met een kaart via Stripe. Het rapport wordt direct na betaling verstuurd naar ${e}.`,
      checkoutFail: "De betaling kon niet worden gestart. Probeer het zo opnieuw.",
      tooBig: "Het bestand is te groot. Upload een bestand tot 20 MB.",
      config: "De dienst is niet volledig ingesteld. Neem contact op met Adsco Capital Partners.",
      reading: f => `<strong>${f}</strong> wordt gelezen…`, scan: "De PDF is gescand. Pagina's worden als afbeelding gelezen…", finding: "Omzet, EBITDA, liquide middelen en schulden worden gezocht…",
      noReader: "Uploaden werkt niet in deze weergave. Vul de cijfers in het formulier in.",
      scanNoImg: "De PDF is gescand en afbeeldingen kunnen hier niet worden gelezen. Vul de cijfers handmatig in.",
      badType: "Upload een PDF of een foto van de winst-en-verliesrekening (PNG of JPG).",
      notGranted: "Voor het uploaden is uw toestemming nodig. Upload het bestand opnieuw en sta het toe, of vul de cijfers handmatig in.",
      rate: "Te veel uploads in korte tijd. Wacht een minuut en probeer het opnieuw.",
      generic: "Er ging iets mis bij het lezen. Vul de cijfers handmatig in.",
      unreadable: "De jaarrekening kon niet worden gelezen. Vul de cijfers handmatig in.",
      noFigures: "Geen cijfers uit de winst-en-verliesrekening gevonden. Controleer of het de volledige jaarrekening is, of vul de cijfers handmatig in.",
      got: (n, o) => `Cijfers overgenomen uit de jaarrekening${n ? " – " + n : ""}${o ? " (" + o + ")" : ""}.`,
      green: "Groene velden komen uit de jaarrekening.",
      missing: l => `De gele velden stonden niet in de jaarrekening en zijn overgenomen van het dichtstbijzijnde jaar: ${l}.`,
      salary: p => `Het salaris van de eigenaar bevat ongeveer ${p}% werkgeverslasten.`,
      check: "Controleer de cijfers en beantwoord daarna de vragen van de koper.",
      revL: "Omzet",
      badEmail: e => `Vul een geldig e-mailadres in, bijvoorbeeld ${e}.`,
      building: e => `Prototype: er wordt niets afgeschreven. Het rapport dat naar ${e} zou gaan wordt gemaakt…`,
      done: f => `Rapport klaar: ${f}. In de live versie wordt het na betaling per e-mail verstuurd.`,
      declined: "Download geannuleerd. Klik nogmaals op de knop om het rapport op te slaan.",
      noDl: "Downloaden is niet mogelijk in deze weergave.",
      buildFail: "Het rapport kon niet worden gemaakt."
    },
    nav1: "Bedrijf", nav1s: "KVK-nummer en cijfers",
    nav2: "Cijfers en vragen", nav2s: "Controleren en aanvullen",
    nav3: "Resultaat", nav3s: "Waardering en acties",
    s1Eye: "Stap 1 van 3", s1H: "Zoek uw bedrijf",
    s1P: "Vul het KVK-nummer in (8 cijfers). We halen de laatst gedeponeerde jaarrekening op uit de open data van de KVK. Kleine bedrijven deponeren vaak alleen een balans; dan vult u omzet en resultaat zelf in.",
    slotY: ["Laatste jaar", "Vorig jaar", "Twee jaar geleden"],
    slotEmpty: "Kies een PDF of sleep hem hierheen", slotBusy: "Wordt gelezen en geüpload…", slotSaving: "Wordt geüpload…",
    slotFound: (y, r) => `Boekjaar ${y}` + (r ? ` · omzet ${r}` : ""),
    pillOk: "Geüpload en gelezen", pillManual: "Geüpload", pillErr: "Fout", pillBusy: "Wordt gelezen…",
    slotManual: "De cijfers konden niet automatisch worden gelezen. Een adviseur bekijkt het document.",
    remove: "Verwijderen",
    extraH: "Upload meer informatie (optioneel)",
    extraP: "Bijvoorbeeld de volledige jaarrekening, de laatste maandrapportage, een begroting of een businessplan. Optioneel, maar het maakt de waardering beter.",
    extraGrowth: "Groeit uw bedrijf? Voeg het businessplan toe voor een nauwkeurigere waardering.",
    extra3H: "Heeft u een businessplan of begroting? Upload die hier",
    extra3P: "De waardering hierboven is alleen gebaseerd op historische cijfers. Als u maandrapportages, een begroting of een businessplan uploadt, worden die in het rapport meegewogen: maandrapportages actualiseren de winstbasis en de begroting krijgt een gewicht van 20–35%, afhankelijk van hoe goed die onderbouwd is. Optioneel.",
    extraBtn: "Bestanden uploaden",
    chipUp: "wordt geüpload…", chipOk: "opgeslagen", chipErr: "mislukt",
    leadH: "Bewaar het resultaat", leadP: "Nog niet aan het verkopen? Ontvang een kopie van de waardering per e-mail of een herinnering wanneer het tijd is om haar bij te werken. Optioneel en gratis.",
    leadCopy: "Stuur een kopie van het resultaat naar mijn e-mail", leadRemind: "Herinner mij over 6 maanden om de waardering bij te werken", leadConsent: "Ik ga ermee akkoord dat Adsco Capital Partners mijn e-mailadres hiervoor bewaart.",
    leadBtn: "Versturen", leadBusy: "Wordt verstuurd…", leadNeed: "Vul een geldig e-mailadres in, kies ten minste één optie en geef toestemming.", leadErr: "Versturen lukt nu niet. Probeer het zo opnieuw.",
    leadOk: (c, r, e) => (c ? `Klaar! De kopie is verstuurd naar ${e}.` : "Klaar!") + (r ? " We herinneren u over zes maanden." : ""),
    topActH: "Uw waardevolste actie", topActMore: n => `Nog ${n} ${n === 1 ? "actie" : "acties"} met effect en planning in het waardeverhogingsplan in het rapport.`,
    normH: "Uw genormaliseerde EBITDA", normRow1: "EBITDA, gewogen gemiddelde over 3 jaar (eenmalige kosten opgeteld)", normRowLtm: "EBITDA met de laatste 12 maanden (eenmalige kosten opgeteld)", normRow2: "Salaris eigenaar, gecorrigeerd naar marktniveau", normRow3: "Genormaliseerde EBITDA – waar de koper naar kijkt",
    normHighSal: (own, mkt, d) => `U betaalt uzelf ${own}, meer dan de ${mkt} die een ingehuurde directeur zou kosten. Een koper rekent met een marktsalaris, dus ${d} wordt bij de winst opgeteld. Dat verhoogt de waarde ten opzichte van een eenvoudige multiple op de gerapporteerde EBITDA.`,
    normLowSal: (own, mkt, d) => `U betaalt uzelf ${own}, minder dan de ${mkt} die een ingehuurde directeur zou kosten, bijvoorbeeld om meer via dividend op te nemen. Een koper moet een directeur aannemen, dus ${d} wordt van de winst afgetrokken. De winst is hier daarom lager dan in de jaarrekening.`,
    normEqSal: own => `Uw salaris van ${own} komt overeen met een marktsalaris voor een directeur, dus er is geen correctie nodig.`,
    normNoSal: "Er is geen salaris van de eigenaar ingevuld. Als u uzelf een salaris of dividend betaalt dat afwijkt van een marktsalaris voor een directeur, vul dat dan in bij stap 2; de winst wordt dan gecorrigeerd zoals een koper dat zou doen.", chipReading: "wordt gelezen…", chipRead: "cijfers gelezen", chipNoRead: "wordt door een adviseur gelezen",
    docH: "Gelezen materiaal:", docBud: (y, r) => `Begroting ${y} met een omzet van ${r}.`, docYtd: (n, r, e) => `Maandrapportage: ${n} maanden, omzet ${r}, EBITDA ${e}.`,
    docW: w => `De begroting krijgt in het rapport een gewicht van ${w}%. Totale aandelenwaarde:`, docOnlyYtd: "Maandrapportages actualiseren de winstbasis in het rapport.",
    next1: n => n ? `Verder met ${n} ${doc(n)}` : "Verder",
    skip: "Geen cijfers bij de hand? Vul ze zelf in",
    s1Fine: "Adsco Capital Partners bewaart documenten versleuteld, gebruikt ze alleen voor uw waardering en verwijdert ze op verzoek. We delen ze nooit met anderen.",
    howH: "Zo werkt het",
    how: [["Vul het KVK-nummer in", "We halen de laatst gedeponeerde jaarrekening op uit de open data van de KVK en vullen in wat erin staat."], ["Direct resultaat", "Waardebandbreedte, exit-score en de belangrijkste acties."]],
    ticks: ["Duurt ongeveer drie minuten", "Gratis, zonder registratie"],
    quote: "Kopers betalen voor wat ze kunnen controleren. Een goed voorbereid bedrijf krijgt een hogere prijs én betere voorwaarden.",
    quoteBy: "Adsco Capital Partners",
    drvH: "Waar een koper naar kijkt",
    drivers: [["Winstgevendheid en groei", "Genormaliseerde EBITDA en de trend over drie jaar bepalen de basiswaarde."], ["Afhankelijkheid van de eigenaar", "Draait het bedrijf zonder u? Dat beïnvloedt zowel de prijs als de voorwaarden."], ["Terugkerende omzet", "Contracten en vaste klanten maken toekomstige omzet voorspelbaar."], ["Documentatie", "Rapportages en schriftelijke contracten maken de due diligence eenvoudiger."]],
    tipsH: "Goed om te weten",
    tips: [["Waar vind ik de EBITDA?", "Bedrijfsresultaat plus afschrijvingen in de winst-en-verliesrekening. Kleine bedrijven deponeren vaak een verkorte jaarrekening zonder winst-en-verliesrekening; neem dan de cijfers uit de volledige jaarrekening van uw accountant."], ["DGA-salaris en marktsalaris", "Als u uzelf meer of minder betaalt dan een ingehuurde directeur zou kosten, wordt de winst met het verschil gecorrigeerd."], ["Eenmalige kosten", "Kosten die niet terugkomen, zoals een verhuizing of een geschil, worden bij de winst opgeteld."]],
    whyH: "Waarom vragen we dit?",
    whyP: "Twee bedrijven met dezelfde winst kunnen voor heel verschillende prijzen worden verkocht. Een koper betaalt meer als de omzet gespreid en terugkerend is en het bedrijf zonder de eigenaar draait. Uw antwoorden verhogen of verlagen de multiple.",
    orgL: "KVK-nummer of bedrijfsnaam", orgPh: "12345678 of bedrijfsnaam",
    srchLooking: "Zoeken…", srchPick: "Kies het bedrijf in de lijst.", srchNone: "Zoeken op naam is (nog) niet mogelijk voor Nederlandse bedrijven. Vul het KVK-nummer in (8 cijfers, te vinden op kvk.nl).", srchShort: "Typ ten minste drie letters van de naam, of vul het KVK-nummer in (8 cijfers).",
    orgEmpty: "Vul eerst het KVK-nummer in en klik op Starten.",
    ctaH: "Klaar! Hoe wilt u verder?", freeBtn: "Bekijk de gratis waardering →", ctaSub: "Beantwoord zeven korte vragen en zie direct het resultaat. Of bestel meteen een rapport:",
    mktLine: (q, med, pe, st) => `Markt: niet-beursgenoteerde Europese middelgrote bedrijven zijn verkocht voor een mediaan van ${med} EBITDA (Argos Index, ${q}). Fondsen betaalden ${pe} en strategische kopers ${st}. Kleinere bedrijven worden meestal lager gewaardeerd.`,
    mktBuyers: b => `Actieve kopers in de sector: ${b}.`,
    gpIntro: "Zonder extra materiaal is het rapport gebaseerd op historische cijfers. Met materiaal gaat de adviseur zo te werk: maandrapportages geven de laatste twaalf maanden, die het zwaarst meewegen in de winstbasis. Een begroting geeft een groeiwaarde met een gewicht van 20%, tot 35% als een businessplan haar onderbouwt en de resultaten van dit jaar op koers liggen. Alles is optioneel en vertrouwelijk.",
    gpPlanH: "Businessplan", gpPlanP: "Strategie, markt en doelen. PDF, Word of PowerPoint.",
    gpBudH: "Begroting of prognose", gpBudP: "De komende 1–3 jaar. Excel of PDF.",
    gpMonH: "Laatste maandrapportages", gpMonP: "Winst-en-verliesrekening en balans vanaf het begin van het jaar.",
    gpPick: "Bestanden kiezen", gpNote: "U kunt ook zonder documenten verder en ze later sturen.",
    gpGo: n => n ? `Verder met de bestelling (${n} ${doc(n)}) →` : "Verder met de bestelling →",
    kindLbl: { plan: "Businessplan", budget: "Begroting", monthly: "Maandrapportage" },
    rateLbl: r => `Rente (depositorente ECB ${r}%)`,
    rateLine: (r, src, dt, adj, ref) => `De multiples worden gecorrigeerd voor het renteniveau: de depositorente van de ECB is ${r}% (${dt}). ` + (adj ? `Vergeleken met een normaal niveau van ${ref}% geeft dat ${adj} op de multiple.` : `Dat ligt dicht bij een normaal niveau van ${ref}% en heeft geen effect op de multiple.`),
    rateFree: (r, src) => `De multiples worden gecorrigeerd voor het renteniveau (depositorente ECB ${r}%).`,
    arH: y => `Wat de jaarrekening ${y} laat zien`, arSrcPdf: "We hebben de tekst van de geüploade jaarrekening gelezen. Risicosignalen tellen mee in de waardering; de andere punten helpen u de vragen hierboven juist te beantwoorden.",
    docFail: "Het document kan nu niet worden getoond. Probeer het zo opnieuw.",
    noBV: "De KVK heeft geen cijfers van uw bedrijf als open data. Vul de cijfers zelf in of upload de jaarrekening als PDF:",
    manualUp: "Geen KVK-nummer bij de hand? Vul de cijfers zelf in",
    addUp: "Upload ook de volledige jaarrekening (PDF), zodat de adviseur afschrijvingen en schulden ziet",
    listedH: ex => `Beursgenoteerd bedrijf – ${ex}`,
    listedP: "Bij een beursgenoteerd bedrijf is de marktkapitalisatie (koers × aantal aandelen) de huidige marktwaarde van het eigen vermogen. Bij een overname van het hele bedrijf wordt meestal een premie van 20–40% boven de koers betaald. Onze waardering is gebaseerd op transacties in niet-beursgenoteerde bedrijven en is een vergelijking, geen vervanging van de koers.",
    listedLink: "Bekijk de actuele marktkapitalisatie →", listedQ: "marktkapitalisatie",
    noReports: "We vonden geen cijfers van het bedrijf in de open data van de KVK. Vul de cijfers zelf in of upload de jaarrekening als PDF:",
    fetchedH: n => `Gevonden: ${n}`, fetchedSrc: "Uit de open data van de KVK over gedeponeerde jaarrekeningen (duizend EUR). De cijfers staan ingevuld in de volgende stap.", ebitL: "Bedrijfsresultaat",
    nlSbi: c => `Hoofdactiviteit (SBI): ${c}.`, nlOp: "Bedrijfsresultaat", nlPbt: "Resultaat voor belastingen", nlNet: "Resultaat na belastingen", nlGross: "Brutomarge", nlEq: "Eigen vermogen", nlAssets: "Balanstotaal", nlLiab: "Schulden",
    nlNote: "De KVK publiceert alleen wat het bedrijf heeft gedeponeerd. Kleine bedrijven deponeren vaak alleen een verkorte balans zonder omzet of resultaat; vul die in de volgende stap zelf in. Waar een resultaat beschikbaar is, staat het bedrijfsresultaat (of het resultaat voor belastingen) voorlopig in de EBITDA-velden; tel de afschrijvingen erbij op.",
    nlOnlyBalance: "Er is alleen een balans gedeponeerd. Een waardering is gebaseerd op omzet en winst, dus met alleen een balans kunnen we het bedrijf niet waarderen. Vul omzet en EBITDA in uit de volledige jaarrekening van uw accountant.", nlNoPlH: "Nog geen waardering mogelijk: omzet en winst ontbreken", nlNoPlBtn: "Omzet en EBITDA invullen →",
    nlFind: q => `Zoek het KVK-nummer van „${q}”:`, nlOnKvk: "Zoeken op kvk.nl ↗ (naam wordt gekopieerd, plak hem daar)", nlOnWeb: "Zoeken via Google ↗", nlPaste: "Kopieer het KVK-nummer (8 cijfers), plak het hier en klik op Starten.",
    nlBusy: "De KVK staat maar één opvraging per minuut toe. Probeer het over een minuut opnieuw of vul de cijfers zelf in.",
    fetchedGroup: "Geconsolideerde cijfers.",
    noDep: "",
    orgBad: "Controleer het KVK-nummer (8 cijfers, bijvoorbeeld 12345678).",
    orgOkSE: "Dank u. Het KVK-nummer wordt met de bestelling meegestuurd.",
    orgLooking: "Gegevens worden opgehaald…", orgNotFound: "Geen gedeponeerde jaarrekening gevonden voor dit KVK-nummer.", orgFail: "Gegevens ophalen lukt nu niet. Vul de cijfers zelf in.",
    orgFound: (n, y) => `${n}: cijfers over ${y} opgehaald.`, orgFoundName: n => `Gevonden: ${n}.`,
    pkgH: "Kies uw niveau – begin gratis of bestel direct",
    discSum: "Indicatieve waardering – geen advies. Lees de belangrijke informatie",
    disc: [
      ["Indicatieve waardering.", "Exitkompass geeft een globale waardebandbreedte op basis van vereenvoudigde sectormultiples en de opgehaalde of ingevulde informatie. Het is geen waarderingsrapport, fairness opinion of beleggings-, fiscaal, boekhoudkundig of juridisch advies."],
      ["Waarde bij verkoop, niet voor juridische doeleinden.", "Exitkompass laat zien wat het bedrijf waard kan zijn voor een koper bij een verkoop (marktwaarde op going-concernbasis, op basis van multiples). Het is geen intrinsieke of liquidatiewaarde en geen waardering voor een boedelverdeling, erfenis, geschil, uitkoop van minderheidsaandeelhouders of fiscale doeleinden. Daarvoor is een formele waardering met een passende methode nodig."],
      ["De werkelijke prijs kan sterk afwijken.", "Wat een koper betaalt, hangt af van de marktomstandigheden, het type koper, de financiering, de due diligence, de contractvoorwaarden en de vooruitzichten van het bedrijf. Neem geen beslissingen alleen op basis van deze tool."],
      ["Bronnen.", "Cijfers uit gedeponeerde jaarrekeningen komen uit de open data van de Kamer van Koophandel (KVK Handelsregister Open Dataset Jaarrekeningen). Kleine bedrijven deponeren vaak alleen een verkorte balans, en het register vermeldt geen afschrijvingen, dus EBITDA begint als het bedrijfsresultaat en moet worden gecontroleerd. We controleren de gegevens niet en zijn niet aansprakelijk voor fouten in de bronnen. Vergelijk altijd met de jaarrekening van het bedrijf."],
      ["Multiples.", "De sectormultiples komen uit een onderzoek naar Scandinavische transacties (Dealsuite) en zijn voor Nederland met 10% verhoogd op basis van de beoordeling van Adsco: de Nederlandse M&A-markt is groter en liquider, met veel strategische kopers en fondsen. De correctie staat apart in de multiplebrug."],
      ["Geen opdracht.", "Het gebruik van de tool of de bestelling van een rapport is geen adviesopdracht. Daarvoor is een schriftelijke overeenkomst met Adsco Capital Partners nodig. Adsco is niet aansprakelijk voor verliezen door beslissingen op basis van de tool of het rapport."],
      ["Uw gegevens.", "KVK-nummers, cijfers en geüploade documenten worden bewaard door Adsco Capital Partners (Google Workspace) en alleen gebruikt voor uw waardering en rapport. We delen ze niet met derden en verwijderen ze op verzoek."]
    ],
    adH: "Over Adsco Capital Partners",
    adLead: "Exitkompass is ontwikkeld door Adsco Capital Partners, een onafhankelijk M&A- en kapitaalmarktadviesbureau in eigendom van de partners, gevestigd in Stockholm. Wij werken met bedrijven van oprichters, families en private-equityfondsen, van het eerste strategische gesprek tot de closing.",
    adStats: [["60+", "jaar gezamenlijke ervaring in kapitaalmarkten"], ["5", "Scandinavische beursgangen 2016–2022"], ["Sinds 1996", "in investment banking"], ["2", "ervaren partners in elke transactie, van begin tot eind"]],
    adTeam: [["Sture Stölen", "Oprichtend partner", "20+ jaar in investor relations en M&A · leidde 5 Scandinavische beursgangen 2016–2022"], ["Lars Carlson", "Oprichtend partner", "25+ jaar in de sector, waaronder ECM en M&A · investment banker sinds 1996"]],
    adIndep: "Onafhankelijk: geen leningen en geen beleggingsadvies. Alleen uw resultaat telt.",
    pkgs: [
      { name: "Snelle waardering", items: ["Waardebandbreedte direct op de pagina", "Exit-score", "De drie belangrijkste bevindingen"] },
      { name: "Rapport", tag: "Aanbevolen", items: ["Volledig PDF-rapport in het Nederlands", "Scenario's en gevoeligheidsanalyse", "Waardeverhogingsplan voor 12–24 maanden", "Groeiwaardering op basis van het businessplan", "Kopertypen en verkoopproces", "Beoordeeld door een ervaren adviseur, geleverd binnen 1–2 werkdagen"] },
      { name: "Rapport + bespreking", tag: "Met partner", items: ["Alles uit het rapport", "60 minuten met een partner van Adsco Capital Partners (in het Engels)", "Controle van normalisaties en volgende stappen"] }
    ],
    startFree: "Gratis beginnen", choose: ["Kies rapport", "Kies met bespreking"], buy: ["Rapport kopen", "Kopen met bespreking"], haveFree: "Dit heeft u al ✓",
    chosen: n => `U koos: ${n}. Begin hieronder met de bedrijfsgegevens; u bestelt nadat u de waardering hebt gezien.`,
    emailL: "Uw e-mailadres", opened: "Het bestelformulier is in een nieuw tabblad geopend. Verstuur het en we nemen contact op over betaling en levering.",
    s2Eye: "Stap 2 van 3", s2H: "Controleer de cijfers",
    s2PAuto: "Groene velden komen uit de KVK, gele velden moet u controleren: in de EBITDA-velden staat voorlopig het bedrijfsresultaat. Tel de afschrijvingen erbij op, vul de netto-omzet in als die ontbreekt en beantwoord de vragen van de koper.",
    s2PManual: "Vul de netto-omzet en EBITDA van de laatste drie jaar in " + K + " in en beantwoord de vragen van de koper.",
    keyGreen: "Uit de KVK", keyYellow: "Controleren",
    to3: "Toon mijn waardering", back1: "Terug",
    need: "Vul ten minste de omzet of de EBITDA van het laatste jaar in.",
    orgGo: "Waardering starten →", micro1: "Duurt ongeveer drie minuten", micro2: "Gratis, zonder registratie",
    lockH: "In het volledige rapport", lockP: "Exit-gereedheid per gebied, strategische waarde, gevoeligheidsanalyse, het volledige waardeverhogingsplan voor 12–24 maanden en welke kopers het meest zouden betalen voor een bedrijf als het uwe.",
    lockExit: "Exit-gereedheid per gebied", lockStrat: "Strategische waarde", lockSvPrem: "Strategische premie", lockSvVal: "Waarde met premie", lockSvDrv: "Waardedrijvers", lockSens: "Gevoeligheidsanalyse", lockPlan: "Waardeverhogingsplan 12–24 mnd.", lockBuyers: "Kopertypen en multiples",
    lockBtn: p => `Ontgrendel in het rapport · ${p}`, lockDeliv: "Geleverd binnen 1–2 werkdagen, beoordeeld door een ervaren adviseur.",
    delivPaid: "⏱ Geleverd binnen 1–2 werkdagen", delivFree: "⚡ Direct op de pagina",
    largeH: "Uw bedrijf is groter dan waarvoor Exitkompass is gemaakt",
    largeP: (r, e) => `Bij een omzet van ${r} en een EBITDA van ${e} wordt de waarde bepaald door beursgenoteerde vergelijkbare bedrijven en strategische transacties, niet door mkb-multiples. Een automatisch getal zou hier misleidend zijn, meestal veel te laag, dus we tonen het niet.`,
    largeP2: "Plan een gratis, vertrouwelijk gesprek met een partner van Adsco Capital Partners. We bespreken het waardebeeld, waarschijnlijke kopers en uw strategische opties.",
    largeNote: "De exit-score en bevindingen hieronder gelden ook volledig voor grotere bedrijven.",
    largeBtn: "Plan een gesprek met een partner →",
    mName: "Gesprek met een partner", mPrice: "Gratis", mTag: "Vertrouwelijk",
    mItems: ["Waardebeeld op basis van beursgenoteerde bedrijven en transacties", "Kopers: strategische partijen en private-equityfondsen", "Strategische opties en timing", "60 minuten met een ervaren partner (in het Engels)"],
    mH: "Plan een gesprek met een partner", mP: "Vul uw gegevens in en we nemen binnen één werkdag contact op voor een tijdstip. Alles wordt vertrouwelijk behandeld.",
    mSend: "Verzoek versturen", mDoneH: n => `Dank u${n ? ", " + n : ""}! We hebben uw verzoek ontvangen.`, mDoneP: e => `We nemen binnen één werkdag contact op via ${e} over een tijdstip.`,
    mFine: "Gratis en vrijblijvend.", mWhen: "Reactie", mWhenV: "Binnen één werkdag",
    oEye: "Bestelling", oH: "Bestel het rapport",
    oP: "Vul uw gegevens in en we nemen binnen één werkdag contact op. Uw cijfers en geüploade documenten worden automatisch meegestuurd.",
    oBack: "Terug", oName: "Naam *", oEmail: "E-mail *", oPhone: "Telefoon", oCompany: "Bedrijf *", oOrg: "KVK-nummer",
    oMsg: "Bericht (optioneel)",
    oConsent: "Ik ga akkoord met de aankoopvoorwaarden en met de verwerking van mijn gegevens en documenten door Adsco Capital Partners om het rapport op te stellen en contact met mij op te nemen over de bestelling.",
    oFine: "U betaalt nu niets. De factuur wordt met het rapport verstuurd, betaaltermijn 10 dagen. Prijzen excl. btw; voor btw-plichtige ondernemers in Nederland is de btw verlegd.",
    oSend: p => `Bestelling versturen · ${p}`, oSending: "Bestelling wordt verstuurd…",
    oNeed: "Vul uw naam, een geldig e-mailadres en het bedrijf in.", oNeedOk: "Bevestig dat we de informatie mogen verwerken.",
    oFail: "De bestelling kon nu niet worden verstuurd.", oFailLink: "Verstuur haar via ons formulier →",
    oDocs: n => `${n} ${doc(n)} en uw waardering worden met de bestelling meegestuurd.`,
    oDelivery: "Levering", oDeliveryV: "1–2 werkdagen", oPayL: "Betaling", oPayV: "Factuur, 10 dagen, excl. btw", oDocsL: "Documenten", oDocsV: n => n ? `${n} ${doc(n)}` : "Kunnen later worden gestuurd",
    oWho: "Beoordeeld door een ervaren adviseur van Adsco Capital Partners.",
    oDoneH: n => `Dank u${n ? ", " + n : ""}! We hebben uw bestelling ontvangen.`,
    oDoneP: e => `Binnen één werkdag sturen we een bevestiging en de volgende stappen naar ${e}. Vermeld het bestelnummer als u contact opneemt.`,
    oDoneBack: "Terug naar de waardering",
    basis: "De waarde is gebaseerd op historische cijfers en is een ondergrens. Maandrapportages, begroting en businessplan worden alleen in het rapport meegewogen. Het model ziet geen groeiplannen, technologie, contracten of hoeveel het bedrijf strategisch waard is voor een koper.",
    upsideH: "Uw bedrijf kan meer waard zijn dan de cijfers laten zien",
    upsideP: "Kopers betalen vaak meer voor bedrijven met deze kenmerken, terwijl historische cijfers ze maar deels weerspiegelen:",
    upsideP2: "Op basis van het businessplan, de begroting en de laatste maandrapportages waarderen we in het rapport een groeiscenario en wegen dat mee met 20–35%, afhankelijk van hoe goed de begroting onderbouwd is.",
    upUpload: "Upload businessplan of begroting",
    upsideBtn: "Laat het groeipotentieel waarderen →",
    upGrowth: g => `Snelle groei: ${g}% per jaar in de afgelopen jaren`,
    upRecur: r => `Hoog aandeel terugkerende omzet: ${r}%`,
    upMargin: "Een gevestigde omzetbasis met nu een lage marge, waar de waarde in opschaling zit",
    upTech: n => `Een sector waarin kopers betalen voor technologie en schaalbaarheid (${n})`,
    advH: "Groeiplan (adviseur)",
    advP: "Begrote omzet in " + K + " voor drie jaar, verwachte EBITDA-marge in jaar 3 en vereist rendement. Geeft een groeiwaardering in het rapport.",
    advY: y => `Omzet ${y}`, advM: "EBITDA-marge jaar 3, %", advR: "Vereist rendement, %",
    advPlanChk: "Er is een businessplan dat de begroting onderbouwt", advYtdP: "Maandrapportages (duizenden, vanaf begin van het jaar). Geven de laatste twaalf maanden (LTM) en of het bedrijf de begroting haalt. Ten minste 3 maanden.",
    advYtN: "Aantal maanden", advYtR: "Omzet tot nu toe", advYtE: "EBITDA tot nu toe", advYtRp: "Omzet zelfde periode vorig jaar", advYtEp: "EBITDA zelfde periode vorig jaar",
    advLtm: x => `EBITDA laatste twaalf maanden: ${x}.`, advBlend: (w, x) => `De begroting weegt ${w}% mee: totale aandelenwaarde ${x}.`,
    advPdf: "PDF-rapport maken", advBusy: "Rapport wordt gemaakt…", advDone: "Klaar, het rapport is gedownload.", advErr: "Het rapport kon niet worden gemaakt.",
    gvLine: (lo, hi) => `Met uw businessplan: ${lo} – ${hi} aandelenwaarde vandaag (als het plan wordt gerealiseerd).`,
    fetchedInd: n => `Sector: ${n}. Klopt dat niet, dan kunt u het in de volgende stap wijzigen.`,
    kEvMethod: () => "Vóór nettoschuld. Een combinatie van EBITDA-, EBIT- en omzetmultiples, zie hieronder.",
    blFree: "Multiples, waarde per methode, gewichten en de bijbehorende multiple staan in het rapport.",
    bFree: "Sectorniveaus en het effect van de vergelijking op de multiple staan in het rapport.",
    brFree: "Hier ziet u de richting. Hoeveel elke factor de multiple verhoogt of verlaagt, staat in het rapport.",
    mktFree: n => "De markt voor niet-beursgenoteerde bedrijven (Argos Index) en " + (n ? `${n} actieve kopers in uw sector met naam` : "actieve kopers in de sector") + " staan in het rapport.",
    blH: "Waardering met drie multiples", blBasis: "Kengetal bedrijf", blMult: "Multiple", blVal: "Waarde (EV)", blW: "Gewicht",
    blEbitda: "EV/EBITDA", blEbit: "EV/EBIT", blRev: "EV/omzet", blSum: "Totale ondernemingswaarde",
    blImp: (a, b, c) => "In totaal komt dat overeen met " + [a && a + " EBITDA", b && b + " EBIT", c && c + " omzet"].filter(Boolean).join(", ") + ". De bandbreedte hierboven is ±0,75x op de winstmultiples.",
    needQ: "Vul het aandeel van de grootste klant en het aandeel terugkerende omzet in (0–100%). Ze hebben veel invloed op de waardering.",
    s3Eye: "Stap 3 van 3 · Uw resultaat", back2: "Gegevens wijzigen",
    upEye: "Volledig rapport",
    upShort: "Een PDF-rapport in het Nederlands van Adsco Capital Partners, gemaakt op basis van uw cijfers en documenten en beoordeeld door een adviseur.",
    docsN: n => n ? `Uw ${n} geüploade ${doc(n)} ${n === 1 ? "wordt" : "worden"} met de bestelling meegestuurd en door een adviseur bekeken.` : "De jaarrekening en ander materiaal kunt u na de bestelling sturen.",
    s1Read: (n, o, ys) => `Cijfers over ${ys} gelezen – ${n || "het bedrijf"}${o ? " (" + o + ")" : ""}.`,
    s1NoRead: "De documenten zijn geüpload, maar de cijfers konden niet automatisch worden gelezen. Vul ze in de volgende stap in. Als u een rapport bestelt, bekijken we de documenten handmatig.",
    s1Partial: "Een deel van de documenten kon niet automatisch worden gelezen. Controleer de cijfers in de volgende stap.",
    upFail: "Het document kon niet worden geüpload. Probeer het opnieuw of ga verder zonder.",
    badType: "Dit bestandstype wordt niet ondersteund. Gebruik PDF, Word, Excel, PowerPoint of een afbeelding.",
    badTypeAnnual: "Upload de jaarrekening als PDF (of als afbeelding als u alleen een scan heeft).",
    tooBig: "Het bestand is te groot. Maximaal 20 MB.",
    tooMany: "U heeft het maximale aantal documenten geüpload.",
    privacy: "Opgehaalde of geüploade informatie en documenten worden bewaard in de Google Workspace van Adsco Capital Partners en alleen gebruikt voor uw waardering en rapport. Neem contact op als u wilt dat we ze verwijderen.",
    langH: "Taal",
    bH: "Vergeleken met de sector", bYou: y => `Uw bedrijf ${y}`, bMed: "Mediaan sector (kwartielen)", bMedS: "Mediaan sector", bAvg: "Gemiddelde sector", bMargin: "Bedrijfsmarge", bGrowth: "Omzetgroei", bPerEmp: "Omzet per medewerker (duizenden)",
    bPos: ["Zwakste kwart", "Onder de mediaan", "Boven de mediaan", "Beste kwart"], bAbove: "Duidelijk boven gemiddeld", bBelow: "Duidelijk onder gemiddeld", bNear: "Rond het gemiddelde",
    bAdj: x => `De marge ten opzichte van de sector geeft ${x} op de multiple.`, bNoAdj: "De marge ligt binnen het normale bereik van de sector en heeft geen effect op de multiple. Groei wordt apart beoordeeld.",
    cycH: "Conjunctuur in de sector", cycLbl: l => `Conjunctuur (${l.toLowerCase()})`, cycState: ["Veel zwakker dan normaal", "Zwakker dan normaal", "Normaal", "Sterker dan normaal", "Veel sterker dan normaal"],
    tf: { gc: "De accountant meldt een materiële onzekerheid over de continuïteit", qual: "De controleverklaring is met beperking of er is een oordeelonthouding", kbr: "Het eigen vermogen is negatief of zeer laag", dispute: "Er wordt een geschil of rechtszaak genoemd", custdep: "Er wordt afhankelijkheid van één of enkele grote klanten genoemd – controleer uw antwoord over de grootste klant", recur: "Er worden abonnementen, licenties of servicecontracten genoemd – neem die mee in het aandeel terugkerende omzet", growth: "Er wordt expansie of groeiende vraag genoemd" },
    arAbout: "Activiteiten:", arEmp: n => `Gemiddeld aantal medewerkers: ${n}`, arAdj: x => `${x} op de multiple`, arNone: "Geen risicosignalen in de tekst (continuïteit, accountantsvoorbehoud, vermogenstekort, geschillen).",
    svH: "Strategische waarde",
    svLevel: ["Beperkte strategische interesse", "Enige strategische interesse", "Grote strategische interesse"],
    svP: "Een strategische koper, zoals een concurrent, klant, leverancier of serie-overnemer, kan meer betalen dan de financiële waarde hierboven als het bedrijf synergieën oplevert: nieuwe klanten, markten, producten, technologie of competenties. Onze beoordeling is gebaseerd op:",
    svDrv: { ind: n => `De sector (${n}), waarin kopers actief overnemen en voor synergieën betalen`, recur: "Terugkerende omzet waarop een koper kan bouwen", growth: "Groei die het platform van de koper versterkt", margin: "Een marge in het beste kwart van de sector", cust: "Een brede klantenbasis zonder afhankelijkheid van afzonderlijke klanten", buyers: "Actieve serie-overnemers die bedrijven in de sector kopen" },
    svNone: "De cijfers laten weinig factoren zien die doorgaans strategische kopers aantrekken. De strategische premie hangt dan vooral af van wie de koper is.",
    svFree: "Wat strategische interesse bepaalt, de indicatieve premie in euro en welke kopers die zouden kunnen betalen, staat in het rapport.",
    potFree: "Hoeveel de waarde kan stijgen als het bedrijf klaar is voor verkoop, staat in het rapport.", scoreFree: "De score per gebied en wat die omlaag haalt, staat in het rapport.",
    svPrem: (r, a) => `Een strategische koper zou ongeveer ${r} meer kunnen betalen dan de ondernemingswaarde, ofwel ${a} meer.`,
    svNote: "De premie is niet meegenomen in de waardering hierboven. Daarvoor zijn de juiste koper en een competitief verkoopproces nodig."
  };
}
UI.NL = Object.assign({}, UI.EN.SE, mkNL());
UI.SE.flNL = UI.NO.flNL = "Nederländerna"; UI.NO.flNL = "Nederland"; UI.EN.SE.flNL = UI.EN.NO.flNL = "Netherlands";
if (UI.PL) UI.PL.flNL = "Holandia"; if (UI.LT) UI.LT.flNL = "Nyderlandai";

/* ---------- Finnish UI texts (country FI: PRH open data, YTJ names and digital XBRL financial statements, EUR) ----------
   Built on top of the English set, so any key not translated here falls back to English rather than Swedish. */
function mkFI() {
  const K = "t€";
  const doc = n => n === 1 ? "asiakirja" : "asiakirjaa";
  return {
    html: "fi", loc: "fi-FI", by: "Adsco Capital Partners", flSE: "Ruotsi", flNO: "Norja", flPL: "Puola", flLT: "Liettua", flNL: "Alankomaat", flFI: "Suomi", defName: "Yrityksesi",
    h1: "Mitä yrityksesi on ostajalle arvoinen, ja miten nostat arvoa?",
    heroP: "Maksuton suuntaa antava arvonmääritys noin kolmessa minuutissa. Haemme yrityksen tiedot ja digitaalisen tilinpäätöksen PRH:n avoimesta datasta, vastaat seitsemään kysymykseen ja saat arvohaarukan, myyntivalmiuspisteet ja toimenpiteet, jotka nostavat arvoa eniten.",
    heroTrust: ["Maksuton", "Ei rekisteröitymistä", "Noin 3 minuuttia", "Kertoimet M&A-kaupoista"],
    heroFit: "Tehty pienille ja keskisuurille yrityksille, joiden liikevaihto on enintään noin 45 miljoonaa euroa. Suuremmat yritykset ja konsernit arvioidaan parhaiten keskustelussa partnerin kanssa.",
    step1: "Kirjoita yrityksen nimi tai Y-tunnus, niin haemme tilinpäätöksen PRH:sta, tai syötä liikevaihto ja EBITDA (" + K + ") itse.",
    step2: "Vastaa ostajan kysymyksiin omistajariippuvuudesta, asiakkaista ja sopimuksista.",
    step3: "Katso arvonmääritys ja tilaa täydellinen raportti.",
    dropTitle: "Lataa tilinpäätös (PDF)",
    dropSub: "Neuvonantaja käy sen läpi, kun tilaat raportin. Vedä tiedosto tähän tai valitse napsauttamalla.",
    or: "tai syötä luvut itse",
    legCompany: "Yritys", name: "Yrityksen nimi", industry: "Toimiala",
    legFin: "Luvut (" + K + ")", yYear: "Vuosi", yRev: "Liikevaihto",
    ownsal: "Omistajan palkka", mktsal: "Toimitusjohtajan markkinapalkka",
    oneoff: y => `Kertaluonteiset kulut ${y} (lisätään takaisin)`,
    debt: "Korolliset velat", cash: "Rahat ja pankkisaamiset",
    salHint: "Ilmoita palkat sivukuluineen.",
    legBuyer: "Ostajan kysymykset",
    topcust: "Suurin asiakas, % liikevaihdosta", recur: "Toistuva liikevaihto, %",
    ownerQ: "Jos olisit poissa kolme kuukautta, yritys…",
    owner: ["Joutuisi vaikeuksiin: tärkeät asiakkaat ja päätökset ovat minun varassani", "Pärjäisi, vaikka häiriöitä tulisi", "Toimisi normaalisti"],
    mgmtQ: "Johto omistajan alapuolella", mgmt: ["Ei ole, johdan kaikkea itse", "Osittain: yksi tai kaksi avainhenkilöä", "Kokonainen johtoryhmä selkein rooleineen"],
    repQ: "Taloudellinen raportointi", reporting: ["Vain tilinpäätös", "Neljännesvuosiraportit", "Kuukausiraportit ja budjettiseuranta"],
    conQ: "Sopimukset asiakkaiden ja toimittajien kanssa", contracts: ["Enimmäkseen suullisia tai epävirallisia", "Osittain kirjallisia", "Kirjallisia ja siirrettävissä uudelle omistajalle"],
    update: "Päivitä arvonmääritys", example: "Näytä esimerkki",
    rTitle: n => `${n}: arvonmääritys`, rMeta: (i, u) => `${i} · summat ${u}, ellei toisin mainita`,
    kEq: "Osakkeiden arvo – historialliset luvut", kEqSub: (m, nd) => `Keskiarvo ${m}, nettovelan ${nd} jälkeen`,
    kEv: "Yritysarvo (EV)", kEvSub: "Ennen nettovelkaa. Kerroin ja oikaisut raportissa.",
    kPot: "Arvo myyntivalmiina", kPotSub: g => `+${g} nykyisillä tuloksilla`, kPotNone: "Jo lähellä parasta tasoa",
    scoreH: "Myyntivalmius", scoreHint: "Miten ostajan due diligence -tiimi arvioisi yrityksen tänään, asteikolla 0–100.",
    flagsH: "Mitä ostaja huomaa", flagsHint: "Kolme tärkeintä havaintoa. Raportti käy läpi kaikki, ja jokaiselle on toimenpide.",
    more: n => `+ ${n} ${n === 1 ? "havainto" : "havaintoa"} lisää <a href="#order" target="_self">täydellisessä raportissa</a>.`,
    noFlags: "Vastaustesi perusteella ei ole suuria varoitusmerkkejä.",
    planH: "Arvonnostosuunnitelma", planHint: "Arvokkaimman toimenpiteen näytämme maksutta. Raportti asettaa kaikki toimenpiteet järjestykseen arvon, vaiheiden ja aikataulun mukaan.",
    planCols: ["Toimenpide", "Aikataulu", "Arvon nousu"], inReport: "Raportissa",
    planNone: "Yritys täyttää jo hyvin tärkeimmät arvoajurit. Seuraava askel on myyntiprosessin valmistelu.",
    buildH: "Näin arvonmääritys muodostuu", buildHint: "Toimialan peruskertoimesta yrityksesi kertoimeen ja EBITDA:n normalisointiin.",
    veil: "Kerroinsilta ja normalisoitu EBITDA raportissa",
    yours: "Yrityksesi kerroin", floor: " (vähimmäistaso)",
    sizeLbl: n => `Koko (EBITDA ${n})`, growthLbl: p => `Liikevaihdon kasvu (${p} % vuodessa)`,
    upsellH: "Tilaa täydellinen raportti",
    upsellP: "Suomenkielinen PDF-raportti Adsco Capital Partnersilta: täydellinen arvonmääritys skenaarioineen ja herkkyysanalyyseineen, kaikki ostajan havainnot, arvonnostosuunnitelma vaiheineen ja aikatauluineen, ostajatyypit, kaupan rakenne, due diligence -tarkistuslista ja myyntiprosessi.",
    cmpFree: "Maksuton", freeList: ["Osakkeiden arvon haarukka", "Myyntivalmiuspisteet", "Kolme tärkeintä havaintoa", "Arvokkain toimenpide"],
    cmpPaid: p => `Raportti · ${p}`,
    paidList: ["Piste-estimaatti matala-, perus- ja korkeaskenaarioineen", "Herkkyysanalyysi", "Kerroinsilta ja EBITDA:n normalisointi", "Kaikki havainnot toimenpiteineen", "Täydellinen arvonnostosuunnitelma vaiheineen ja aikatauluineen", "Ostajatyypit, mistä he maksavat ja suuntaa antavat kertoimet", "Due diligence -tarkistuslista", "Myyntiprosessi ja kaupan rakenne"],
    emailPh: "sinä@yritys.fi", order: p => `Tilaa raportti · ${p}`,
    pricingH: "Hinnat", vat: "alv 0 %", free: "Maksuton", prices: ["490 €", "1 190 €"],
    plans: [
      ["Pika-arvio", ["Luvut PRH:n tilinpäätöksestä", "Suuntaa antava arvohaarukka", "Myyntivalmiuspisteet"]],
      ["Raportti", ["Kaikki pika-arviosta", "Suomenkielinen PDF-raportti", "Arvonnostosuunnitelma 12–24 kuukaudelle", "Ostajatyypit ja myyntiprosessi"]],
      ["Raportti + läpikäynti partnerin kanssa", ["Kaikki raportista", "60 minuuttia Adsco Capital Partnersin partnerin kanssa (englanniksi tai ruotsiksi)", "Normalisointiesi tarkistus"]]
    ],
    aboutH: "Kokeneet neuvonantajat jokaisen arvonmäärityksen takana",
    aboutP: "Exitkompassin on kehittänyt Adsco Capital Partners, partnereiden omistama riippumaton yrityskauppoihin (M&A) ja pääomamarkkinoihin erikoistunut neuvonantaja Tukholmasta. Työskentelemme omistajien, perustajien ja sijoittajien kanssa keskikokoisten yritysten markkinoilla ensimmäisestä strategisesta keskustelusta kaupan toteutukseen.",
    stats: [["60+", "vuotta yhteistä kokemusta pääomamarkkinoilta"], ["5", "pohjoismaista listautumista 2016–2022"], ["2", "kokenutta partneria jokaisessa kaupassa"], ["Riippumaton", "partnereiden omistama, ei lainoja eikä sijoitussuosituksia"]],
    aboutCta: "Harkitsetko yrityksesi myyntiä?", aboutLink: "Varaa maksuton, luottamuksellinen tapaaminen partnerin kanssa →",
    foot: "Exitkompass · Adsco Capital Partners · Tukholma",
    st: {
      preparing: "Maksua valmistellaan…", pay: "Avaa tilauslomake →",
      payNote: e => `Maksat kortilla Stripen kautta. Raportti lähetetään osoitteeseen ${e} heti maksun jälkeen.`,
      checkoutFail: "Maksua ei voitu aloittaa. Yritä hetken kuluttua uudelleen.",
      tooBig: "Tiedosto on liian suuri. Lataa enintään 20 Mt:n tiedosto.",
      config: "Palvelua ei ole määritetty kokonaan. Ota yhteyttä Adsco Capital Partnersiin.",
      reading: f => `Luetaan <strong>${f}</strong>…`, scan: "PDF on skannattu. Sivut luetaan kuvina…", finding: "Etsitään liikevaihtoa, EBITDA:ta, rahavaroja ja velkoja…",
      noReader: "Lataus ei toimi tässä näkymässä. Syötä luvut lomakkeeseen.",
      scanNoImg: "PDF on skannattu, eikä kuvia voi lukea tässä. Syötä luvut käsin.",
      badType: "Lataa PDF tai kuva tuloslaskelmasta (PNG tai JPG).",
      notGranted: "Lataaminen vaatii lupasi. Lataa tiedosto uudelleen ja salli, tai syötä luvut käsin.",
      rate: "Liian monta latausta lyhyessä ajassa. Odota minuutti ja yritä uudelleen.",
      generic: "Lukemisessa tapahtui virhe. Syötä luvut käsin.",
      unreadable: "Tilinpäätöstä ei voitu lukea. Syötä luvut käsin.",
      noFigures: "Tuloslaskelman lukuja ei löytynyt. Tarkista, että kyseessä on koko tilinpäätös, tai syötä luvut käsin.",
      got: (n, o) => `Luvut haettu tilinpäätöksestä${n ? " – " + n : ""}${o ? " (" + o + ")" : ""}.`,
      green: "Vihreät kentät ovat tilinpäätöksestä.",
      missing: l => `Keltaisia kenttiä ei ollut tilinpäätöksessä, ja ne on kopioitu lähimmältä vuodelta: ${l}.`,
      salary: p => `Omistajan palkka sisältää noin ${p} % sivukuluja.`,
      check: "Tarkista luvut ja vastaa sitten ostajan kysymyksiin.",
      revL: "Liikevaihto",
      badEmail: e => `Anna kelvollinen sähköpostiosoite, esimerkiksi ${e}.`,
      building: e => `Prototyyppi: maksua ei veloiteta. Luodaan raporttia, joka lähetettäisiin osoitteeseen ${e}…`,
      done: f => `Raportti valmis: ${f}. Varsinaisessa versiossa se lähetetään sähköpostilla maksun jälkeen.`,
      declined: "Lataus peruttiin. Tallenna raportti napsauttamalla painiketta uudelleen.",
      noDl: "Lataaminen ei ole mahdollista tässä näkymässä.",
      buildFail: "Raporttia ei voitu luoda."
    },
    nav1: "Yritys", nav1s: "Nimi tai Y-tunnus",
    nav2: "Luvut ja kysymykset", nav2s: "Tarkista ja täydennä",
    nav3: "Tulos", nav3s: "Arvonmääritys ja toimenpiteet",
    s1Eye: "Vaihe 1/3", s1H: "Etsi yrityksesi",
    s1P: "Kirjoita yrityksen nimi tai Y-tunnus. Haemme tiedot PRH:n avoimesta datasta ja täytämme luvut digitaalisesta tilinpäätöksestä, jos yritys on ilmoittanut sellaisen. Muuten syötät luvut itse.",
    slotY: ["Viimeisin vuosi", "Edellinen vuosi", "Kaksi vuotta sitten"],
    slotEmpty: "Valitse PDF tai vedä se tähän", slotBusy: "Luetaan ja ladataan…", slotSaving: "Ladataan…",
    slotFound: (y, r) => `Tilikausi ${y}` + (r ? ` · liikevaihto ${r}` : ""),
    pillOk: "Ladattu ja luettu", pillManual: "Ladattu", pillErr: "Virhe", pillBusy: "Luetaan…",
    slotManual: "Lukuja ei voitu lukea automaattisesti. Neuvonantaja käy asiakirjan läpi.",
    remove: "Poista",
    extraH: "Lataa lisätietoja (vapaaehtoinen)",
    extraP: "Esimerkiksi tilinpäätös, viimeisin kuukausiraportti, budjetti tai liiketoimintasuunnitelma. Vapaaehtoista, mutta parantaa arviota.",
    extraGrowth: "Kasvaako yrityksesi? Lisää liiketoimintasuunnitelma tarkempaa arviota varten.",
    extra3H: "Onko sinulla liiketoimintasuunnitelma tai budjetti? Lataa se tähän",
    extra3P: "Yllä oleva arvio perustuu vain historiallisiin lukuihin. Jos lataat kuukausiraportteja, budjetin tai liiketoimintasuunnitelman, ne otetaan huomioon raportissa: kuukausiraportit päivittävät tulospohjan, ja budjetti saa 20–35 %:n painon sen mukaan, miten hyvin se on perusteltu. Vapaaehtoista.",
    extraBtn: "Lataa tiedostoja",
    chipUp: "ladataan…", chipOk: "tallennettu", chipErr: "epäonnistui",
    leadH: "Tallenna tulos", leadP: "Etkö ole vielä myymässä? Saat kopion arviosta sähköpostiisi tai muistutuksen, kun on aika päivittää se. Vapaaehtoista ja maksutonta.",
    leadCopy: "Lähetä kopio tuloksesta sähköpostiini", leadRemind: "Muistuta minua päivittämään arvio 6 kuukauden päästä", leadConsent: "Hyväksyn, että Adsco Capital Partners tallentaa sähköpostiosoitteeni tätä tarkoitusta varten.",
    leadBtn: "Lähetä", leadBusy: "Lähetetään…", leadNeed: "Anna kelvollinen sähköpostiosoite, valitse vähintään yksi vaihtoehto ja anna suostumus.", leadErr: "Lähettäminen ei onnistu juuri nyt. Yritä hetken kuluttua uudelleen.",
    leadOk: (c, r, e) => (c ? `Valmis! Kopio lähetettiin osoitteeseen ${e}.` : "Valmis!") + (r ? " Muistutamme sinua kuuden kuukauden päästä." : ""),
    topActH: "Arvokkain toimenpiteesi", topActMore: n => `Vielä ${n} ${n === 1 ? "toimenpide" : "toimenpidettä"} vaikutuksineen ja aikatauluineen raportin arvonnostosuunnitelmassa.`,
    normH: "Normalisoitu EBITDA", normRow1: "EBITDA, painotettu kolmen vuoden keskiarvo (kertaluonteiset kulut lisätty)", normRowLtm: "EBITDA viimeisimmät 12 kuukautta huomioiden (kertaluonteiset kulut lisätty)", normRow2: "Omistajan palkka markkinatasolle oikaistuna", normRow3: "Normalisoitu EBITDA – mihin ostaja katsoo",
    normHighSal: (own, mkt, d) => `Maksat itsellesi ${own}, enemmän kuin palkatun toimitusjohtajan ${mkt}. Ostaja laskee markkinapalkalla, joten ${d} lisätään tulokseen. Se nostaa arvoa verrattuna pelkkään raportoidun EBITDA:n kertoimeen.`,
    normLowSal: (own, mkt, d) => `Maksat itsellesi ${own}, vähemmän kuin palkatun toimitusjohtajan ${mkt}, esimerkiksi nostaaksesi enemmän osinkoina. Ostajan on palkattava toimitusjohtaja, joten ${d} vähennetään tuloksesta. Siksi tulos on tässä pienempi kuin tilinpäätöksessä.`,
    normEqSal: own => `Palkkasi ${own} vastaa toimitusjohtajan markkinapalkkaa, joten oikaisua ei tarvita.`,
    normNoSal: "Omistajan palkkaa ei ole ilmoitettu. Jos maksat itsellesi palkkaa tai osinkoa, joka poikkeaa toimitusjohtajan markkinapalkasta, ilmoita se vaiheessa 2, niin tulos oikaistaan kuten ostaja tekisi.", chipReading: "luetaan…", chipRead: "luvut luettu", chipNoRead: "neuvonantaja lukee",
    docH: "Luettu materiaali:", docBud: (y, r) => `Budjetti ${y}, liikevaihto ${r}.`, docYtd: (n, r, e) => `Kuukausiraportti: ${n} kk, liikevaihto ${r}, EBITDA ${e}.`,
    docW: w => `Budjetti saa raportissa ${w} %:n painon. Osakkeiden kokonaisarvo:`, docOnlyYtd: "Kuukausiraportit päivittävät tulospohjan raportissa.",
    next1: n => n ? `Jatka (${n} ${doc(n)})` : "Jatka",
    skip: "Eikö lukuja ole käsillä? Syötä ne itse",
    s1Fine: "Adsco Capital Partners säilyttää asiakirjat salattuina, käyttää niitä vain arvonmääritykseesi ja poistaa ne pyynnöstä. Emme koskaan jaa niitä kenellekään.",
    howH: "Näin se toimii",
    how: [["Kirjoita nimi tai Y-tunnus", "Haemme yrityksen tiedot ja digitaalisen tilinpäätöksen PRH:n avoimesta datasta."], ["Saat tuloksen heti", "Arvohaarukka, myyntivalmiuspisteet ja tärkeimmät toimenpiteet."]],
    ticks: ["Kestää noin kolme minuuttia", "Maksuton, ei rekisteröitymistä"],
    quote: "Ostajat maksavat siitä, minkä voivat tarkistaa. Hyvin valmisteltu yritys saa sekä paremman hinnan että paremmat ehdot.",
    quoteBy: "Adsco Capital Partners",
    drvH: "Mihin ostaja katsoo",
    drivers: [["Kannattavuus ja kasvu", "Normalisoitu EBITDA ja kolmen vuoden trendi määräävät perusarvon."], ["Omistajariippuvuus", "Pärjääkö yritys ilman sinua? Se vaikuttaa sekä hintaan että ehtoihin."], ["Toistuva liikevaihto", "Sopimukset ja vakioasiakkaat tekevät tulevasta liikevaihdosta ennustettavaa."], ["Dokumentaatio", "Raportointi ja kirjalliset sopimukset helpottavat due diligencea."]],
    tipsH: "Hyvä tietää",
    tips: [["Mistä löydän EBITDA:n?", "Liikevoitto plus poistot ja arvonalentumiset tuloslaskelmasta. Jos tilinpäätös on haettu PRH:sta, olemme jo laskeneet sen."], ["Omistajan palkka ja markkinapalkka", "Jos maksat itsellesi enemmän tai vähemmän kuin palkattu toimitusjohtaja maksaisi, tulosta oikaistaan erotuksella."], ["Kertaluonteiset kulut", "Kulut, jotka eivät toistu, kuten muutto tai riita, lisätään takaisin tulokseen."]],
    whyH: "Miksi kysymme tätä?",
    whyP: "Kaksi yritystä, joilla on sama tulos, voidaan myydä hyvin eri hintaan. Ostaja maksaa enemmän, kun liikevaihto on hajautettua ja toistuvaa ja yritys toimii ilman omistajaa. Vastauksesi nostavat tai laskevat kerrointa.",
    orgL: "Yrityksen nimi tai Y-tunnus", orgPh: "1234567-8 tai yrityksen nimi",
    srchLooking: "Haetaan…", srchPick: "Valitse yritys listasta.", srchNone: "Yritystä ei löytynyt tällä nimellä. Kokeile toista nimeä tai kirjoita Y-tunnus.", srchShort: "Kirjoita vähintään kolme kirjainta nimestä tai Y-tunnus.",
    orgEmpty: "Kirjoita ensin yrityksen nimi tai Y-tunnus.",
    ctaH: "Valmis! Miten haluat jatkaa?", freeBtn: "Katso maksuton arvio →", ctaSub: "Vastaa seitsemään lyhyeen kysymykseen ja näe tulos heti. Tai tilaa raportti suoraan:",
    mktLine: (q, med, pe, st) => `Markkina: listaamattomia eurooppalaisia keskisuuria yrityksiä myytiin EBITDA-kertoimen mediaanilla ${med} (Argos Index, ${q}). Rahastot maksoivat ${pe} ja teolliset ostajat ${st}. Pienemmät yritykset myydään yleensä alemmalla kertoimella.`,
    mktBuyers: b => `Aktiivisia ostajia toimialalla: ${b}.`,
    gpIntro: "Ilman lisämateriaalia raportti perustuu historiallisiin lukuihin. Materiaalin kanssa neuvonantaja toimii näin: kuukausiraportit antavat viimeiset kaksitoista kuukautta, jotka painavat tulospohjassa eniten. Budjetti antaa kasvuarvon 20 %:n painolla, enintään 35 %, jos liiketoimintasuunnitelma perustelee sen ja tämän vuoden tulokset ovat budjetissa. Kaikki on vapaaehtoista ja luottamuksellista.",
    gpPlanH: "Liiketoimintasuunnitelma", gpPlanP: "Strategia, markkina ja tavoitteet. PDF, Word tai PowerPoint.",
    gpBudH: "Budjetti tai ennuste", gpBudP: "Seuraavat 1–3 vuotta. Excel tai PDF.",
    gpMonH: "Viimeisimmät kuukausiraportit", gpMonP: "Tuloslaskelma ja tase vuoden alusta.",
    gpPick: "Valitse tiedostot", gpNote: "Voit jatkaa myös ilman asiakirjoja ja lähettää ne myöhemmin.",
    gpGo: n => n ? `Jatka tilaukseen (${n} ${doc(n)}) →` : "Jatka tilaukseen →",
    kindLbl: { plan: "Liiketoimintasuunnitelma", budget: "Budjetti", monthly: "Kuukausiraportti" },
    rateLbl: r => `Korot (EKP:n talletuskorko ${r} %)`,
    rateLine: (r, src, dt, adj, ref) => `Kertoimet oikaistaan korkotason mukaan: EKP:n talletuskorko on ${r} % (${dt}). ` + (adj ? `Verrattuna normaaliin ${ref} %:n tasoon se antaa kertoimeen ${adj}.` : `Se on lähellä normaalia ${ref} %:n tasoa eikä vaikuta kertoimeen.`),
    rateFree: (r, src) => `Kertoimet oikaistaan korkotason mukaan (EKP:n talletuskorko ${r} %).`,
    arH: y => `Mitä tilinpäätös ${y} kertoo`, arSrcPdf: "Luimme ladatun tilinpäätöksen tekstin. Riskisignaalit vaikuttavat arvioon, muut kohdat auttavat vastaamaan yllä oleviin kysymyksiin oikein.",
    docFail: "Asiakirjaa ei voi näyttää juuri nyt. Yritä hetken kuluttua uudelleen.",
    noBV: "PRH:lla ei ole digitaalista tilinpäätöstä yrityksestäsi. Syötä luvut itse tai lataa tilinpäätös PDF-muodossa:",
    manualUp: "Eikö Y-tunnusta ole käsillä? Syötä luvut itse",
    addUp: "Lataa myös tilinpäätös (PDF), jotta neuvonantaja näkee poistot ja velat",
    listedH: ex => `Listattu yhtiö – ${ex}`,
    listedP: "Listatun yhtiön markkina-arvo (osakekurssi × osakkeiden määrä) on oman pääoman nykyinen markkina-arvo. Koko yhtiön ostossa maksetaan yleensä 20–40 %:n preemio kurssin päälle. Arviomme perustuu listaamattomien yritysten kauppoihin, ja sitä kannattaa pitää vertailukohtana, ei kurssin korvikkeena.",
    listedLink: "Katso nykyinen markkina-arvo →", listedQ: "markkina-arvo",
    noReports: "Yrityksen lukuja ei löytynyt automaattisesti. Syötä luvut itse tai lataa tilinpäätös PDF-muodossa:",
    fetchedH: n => `Löytyi: ${n}`, fetchedSrc: "PRH:n avoimesta datasta, digitaalinen tilinpäätös (t€). Luvut on täytetty seuraavaan vaiheeseen.", ebitL: "Liikevoitto",
    fiOp: "Liikevoitto", fiDep: "Poistot", fiNet: "Tilikauden tulos", fiEq: "Oma pääoma", fiCash: "Rahat ja pankkisaamiset", fiDebt: "Lainat rahoituslaitoksilta",
    fiTol: c => `Päätoimiala (TOL 2008): ${c}.`,
    fiNote: "EBITDA = liikevoitto + poistot tilinpäätöksestä. Tarkista luvut seuraavassa vaiheessa ja lisää kertaluonteiset erät ja omistajan palkka.",
    fiSrcNoFig: "PRH:n yritystietojärjestelmästä (YTJ).",
    fiNoDigital: "Yritys löytyi, mutta PRH:n avoimessa datassa ei ole sen tilinpäätöstä: siellä ovat vain digitaalisesti (iXBRL) ilmoitetut tilinpäätökset, ja useimmat yritykset ilmoittavat tilinpäätöksensä PDF:nä. Lataa tilinpäätös PDF-muodossa, niin luemme luvut automaattisesti, tai syötä liikevaihto ja EBITDA itse:",
    fiOnlyBalance: "Digitaalisessa tilinpäätöksessä on vain tase. Arvonmääritys perustuu liikevaihtoon ja tulokseen, joten pelkän taseen perusteella emme voi arvioida yritystä. Syötä liikevaihto ja EBITDA tilitoimistosi täydellisestä tilinpäätöksestä.",
    nlNoPlH: "Arviota ei voi vielä tehdä: liikevaihto ja tulos puuttuvat", nlNoPlBtn: "Syötä liikevaihto ja EBITDA →", nlOnlyBalance: "Arvonmääritys perustuu liikevaihtoon ja tulokseen. Syötä liikevaihto ja EBITDA tilitoimistosi täydellisestä tilinpäätöksestä.",
    fetchedGroup: "Konsernin luvut.",
    noDep: "",
    orgBad: "Tarkista Y-tunnus (8 numeroa, esimerkiksi 1234567-8).",
    orgOkSE: "Kiitos. Y-tunnus lähetetään tilauksen mukana.",
    orgLooking: "Haetaan tietoja…", orgNotFound: "Yritystä ei löytynyt tällä Y-tunnuksella.", orgFail: "Tietojen haku ei onnistu juuri nyt. Syötä luvut itse.",
    orgFound: (n, y) => `${n}: luvut vuodelta ${y} haettu.`, orgFoundName: n => `Löytyi: ${n}.`,
    pkgH: "Valitse taso – aloita maksutta tai tilaa suoraan",
    discSum: "Suuntaa antava arvio – ei neuvontaa. Lue tärkeät tiedot",
    disc: [
      ["Suuntaa antava arvio.", "Exitkompass antaa karkean arvohaarukan yksinkertaistettujen toimialakertoimien ja haettujen tai syötettyjen tietojen perusteella. Se ei ole arvonmäärityslausunto, fairness opinion eikä sijoitus-, vero-, kirjanpito- tai oikeudellista neuvontaa."],
      ["Arvo myynnissä, ei oikeudellisiin tarkoituksiin.", "Exitkompass näyttää, mitä yritys voi olla arvoinen ostajalle myynnissä (markkina-arvo jatkuvuusperiaatteella kertoimien perusteella). Se ei ole substanssi- tai likvidaatioarvo eikä arvio osituksiin, perintöihin, riitoihin, vähemmistöosakkeiden lunastuksiin tai verotukseen. Niihin tarvitaan tarkoitukseen sopiva virallinen arvonmääritys."],
      ["Todellinen hinta voi poiketa merkittävästi.", "Ostajan maksama hinta riippuu markkinatilanteesta, ostajatyypistä, rahoituksesta, due diligencesta, sopimusehdoista ja yrityksen näkymistä. Älä tee päätöksiä pelkästään tämän työkalun perusteella."],
      ["Lähteet.", "Yritystiedot ja digitaaliset tilinpäätökset haetaan Patentti- ja rekisterihallituksen avoimesta datasta (YTJ ja XBRL-tilinpäätökset, CC BY 4.0). Vain digitaalisesti ilmoitetut tilinpäätökset ovat saatavilla. Emme tarkista tietoja emmekä vastaa lähteiden virheistä. Vertaa aina yrityksen tilinpäätökseen."],
      ["Kertoimet.", "Toimialakertoimet perustuvat pohjoismaisia yrityskauppoja koskevaan kyselyyn (Dealsuite), johon Suomi kuuluu, joten maakohtaista oikaisua ei tehdä."],
      ["Ei toimeksiantoa.", "Työkalun käyttö tai raportin tilaaminen ei luo neuvontatoimeksiantoa. Se edellyttää kirjallista sopimusta Adsco Capital Partnersin kanssa. Adsco ei vastaa työkalun tai raportin perusteella tehdyistä päätöksistä aiheutuvista menetyksistä."],
      ["Tietosi.", "Y-tunnukset, luvut ja ladatut asiakirjat säilyttää Adsco Capital Partners (Google Workspace), ja niitä käytetään vain arvonmääritykseesi ja raporttiisi. Emme jaa niitä kolmansille osapuolille ja poistamme ne pyynnöstä."]
    ],
    adH: "Tietoa Adsco Capital Partnersista",
    adLead: "Exitkompassin on kehittänyt Adsco Capital Partners, partnereiden omistama riippumaton M&A- ja pääomamarkkinaneuvonantaja Tukholmasta. Työskentelemme perustajien, perheiden ja pääomasijoittajien omistamien yritysten kanssa ensimmäisestä strategisesta keskustelusta kaupan toteutukseen.",
    adStats: [["60+", "vuotta yhteistä kokemusta pääomamarkkinoilta"], ["5", "pohjoismaista listautumista 2016–2022"], ["Vuodesta 1996", "investointipankkitoiminnassa"], ["2", "kokenutta partneria jokaisessa kaupassa alusta loppuun"]],
    adTeam: [["Sture Stölen", "Perustajapartneri", "20+ vuotta sijoittajasuhteista ja yrityskaupoista · johti 5 pohjoismaista listautumista 2016–2022"], ["Lars Carlson", "Perustajapartneri", "25+ vuotta alalla, mm. ECM ja M&A · investointipankkiiri vuodesta 1996"]],
    adIndep: "Riippumaton: ei lainoja eikä sijoitussuosituksia. Vain sinun tuloksesi ratkaisee.",
    pkgs: [
      { name: "Pika-arvio", items: ["Arvohaarukka suoraan sivulla", "Myyntivalmiuspisteet", "Kolme tärkeintä havaintoa"] },
      { name: "Raportti", tag: "Suositeltu", items: ["Täydellinen suomenkielinen PDF-raportti", "Skenaariot ja herkkyysanalyysi", "Arvonnostosuunnitelma 12–24 kuukaudelle", "Kasvuarvio liiketoimintasuunnitelman pohjalta", "Ostajatyypit ja myyntiprosessi", "Kokeneen neuvonantajan tarkistama, toimitus 1–2 arkipäivässä"] },
      { name: "Raportti + läpikäynti", tag: "Partnerin kanssa", items: ["Kaikki raportista", "60 minuuttia Adsco Capital Partnersin partnerin kanssa (englanniksi tai ruotsiksi)", "Normalisointien ja seuraavien askelten läpikäynti"] }
    ],
    startFree: "Aloita maksutta", choose: ["Valitse raportti", "Valitse läpikäynnin kanssa"], buy: ["Osta raportti", "Osta läpikäynnin kanssa"], haveFree: "Tämä sinulla jo on ✓",
    chosen: n => `Valitsit: ${n}. Aloita alla yrityksen tiedoista; tilaat nähtyäsi arvion.`,
    emailL: "Sähköpostiosoitteesi", opened: "Tilauslomake avautui uuteen välilehteen. Lähetä se, niin otamme yhteyttä maksusta ja toimituksesta.",
    s2Eye: "Vaihe 2/3", s2H: "Tarkista luvut",
    s2PAuto: "Vihreät kentät ovat PRH:n digitaalisesta tilinpäätöksestä. Korjaa, mikä näyttää väärältä, täydennä puuttuvat tiedot ja vastaa ostajan kysymyksiin.",
    s2PManual: "Syötä viimeisen kolmen vuoden liikevaihto ja EBITDA (" + K + ") ja vastaa ostajan kysymyksiin.",
    keyGreen: "PRH:sta", keyYellow: "Tarkista",
    to3: "Näytä arvioni", back1: "Takaisin",
    need: "Syötä vähintään viimeisimmän vuoden liikevaihto tai EBITDA.",
    orgGo: "Aloita arvio →", micro1: "Kestää noin kolme minuuttia", micro2: "Maksuton, ei rekisteröitymistä",
    lockH: "Täydellisessä raportissa", lockP: "Myyntivalmius osa-alueittain, strateginen arvo, herkkyysanalyysi, koko arvonnostosuunnitelma 12–24 kuukaudelle ja mitkä ostajat maksaisivat eniten kaltaisestasi yrityksestä.",
    lockExit: "Myyntivalmius osa-alueittain", lockStrat: "Strateginen arvo", lockSvPrem: "Strateginen preemio", lockSvVal: "Arvo preemion kanssa", lockSvDrv: "Arvoajurit", lockSens: "Herkkyysanalyysi", lockPlan: "Arvonnostosuunnitelma 12–24 kk", lockBuyers: "Ostajatyypit ja kertoimet",
    lockBtn: p => `Avaa raportissa · ${p}`, lockDeliv: "Toimitus 1–2 arkipäivässä, kokeneen neuvonantajan tarkistama.",
    delivPaid: "⏱ Toimitus 1–2 arkipäivässä", delivFree: "⚡ Heti sivulla",
    largeH: "Yrityksesi on suurempi kuin mihin Exitkompass on tehty",
    largeP: (r, e) => `Kun liikevaihto on ${r} ja EBITDA ${e}, arvon määräävät listatut verrokkiyhtiöt ja strategiset kaupat, eivät pk-yritysten kertoimet. Automaattinen luku olisi tässä harhaanjohtava, yleensä aivan liian pieni, joten emme näytä sitä.`,
    largeP2: "Varaa maksuton, luottamuksellinen tapaaminen Adsco Capital Partnersin partnerin kanssa. Käymme läpi arvokuvan, todennäköiset ostajat ja strategiset vaihtoehtosi.",
    largeNote: "Alla olevat myyntivalmiuspisteet ja havainnot pätevät täysin myös suurempiin yrityksiin.",
    largeBtn: "Varaa tapaaminen partnerin kanssa →",
    mName: "Tapaaminen partnerin kanssa", mPrice: "Maksuton", mTag: "Luottamuksellinen",
    mItems: ["Arvokuva listattujen yhtiöiden ja kauppojen perusteella", "Ostajat: strategiset toimijat ja pääomasijoittajat", "Strategiset vaihtoehdot ja ajoitus", "60 minuuttia kokeneen partnerin kanssa (englanniksi tai ruotsiksi)"],
    mH: "Varaa tapaaminen partnerin kanssa", mP: "Täytä tietosi, niin otamme yhteyttä yhden arkipäivän kuluessa ajan sopimiseksi. Kaikki käsitellään luottamuksellisesti.",
    mSend: "Lähetä pyyntö", mDoneH: n => `Kiitos${n ? ", " + n : ""}! Olemme vastaanottaneet pyyntösi.`, mDoneP: e => `Otamme yhteyttä yhden arkipäivän kuluessa osoitteeseen ${e} ajan sopimiseksi.`,
    mFine: "Maksuton ja sitoumukseton.", mWhen: "Vastaus", mWhenV: "Yhden arkipäivän kuluessa",
    oEye: "Tilaus", oH: "Tilaa raportti",
    oP: "Täytä tietosi, niin otamme yhteyttä yhden arkipäivän kuluessa. Lukusi ja ladatut asiakirjat lähetetään automaattisesti.",
    oBack: "Takaisin", oName: "Nimi *", oEmail: "Sähköposti *", oPhone: "Puhelin", oCompany: "Yritys *", oOrg: "Y-tunnus",
    oMsg: "Viesti (vapaaehtoinen)",
    oConsent: "Hyväksyn ostoehdot ja sen, että Adsco Capital Partners käsittelee tietojani ja asiakirjojani raportin laatimiseksi ja ottaa minuun yhteyttä tilauksesta.",
    oFine: "Et maksa mitään nyt. Lasku lähetetään raportin mukana, maksuaika 10 päivää. Hinnat alv 0 %; arvonlisäverovelvolliset suomalaiset yritykset tilittävät veron itse (käännetty verovelvollisuus).",
    oSend: p => `Lähetä tilaus · ${p}`, oSending: "Tilausta lähetetään…",
    oNeed: "Anna nimesi, kelvollinen sähköpostiosoite ja yritys.", oNeedOk: "Vahvista, että saamme käsitellä tiedot.",
    oFail: "Tilausta ei voitu lähettää juuri nyt.", oFailLink: "Lähetä se lomakkeellamme →",
    oDocs: n => `${n} ${doc(n)} ja arviosi lähetetään tilauksen mukana.`,
    oDelivery: "Toimitus", oDeliveryV: "1–2 arkipäivää", oPayL: "Maksu", oPayV: "Lasku, 10 päivää, alv 0 %", oDocsL: "Asiakirjat", oDocsV: n => n ? `${n} ${doc(n)}` : "Voi lähettää myöhemmin",
    oWho: "Tarkistaa kokenut Adsco Capital Partnersin neuvonantaja.",
    oDoneH: n => `Kiitos${n ? ", " + n : ""}! Olemme vastaanottaneet tilauksesi.`,
    oDoneP: e => `Lähetämme yhden arkipäivän kuluessa vahvistuksen ja seuraavat askeleet osoitteeseen ${e}. Mainitse tilausnumero, kun otat yhteyttä.`,
    oDoneBack: "Takaisin arvioon",
    basis: "Arvo perustuu historiallisiin lukuihin ja on alaraja. Kuukausiraportit, budjetti ja liiketoimintasuunnitelma otetaan huomioon vain raportissa. Malli ei näe kasvusuunnitelmia, teknologiaa, sopimuksia eikä sitä, mikä yrityksen strateginen arvo on ostajalle.",
    upsideH: "Yrityksesi voi olla arvokkaampi kuin luvut kertovat",
    upsideP: "Ostajat maksavat usein enemmän yrityksistä, joilla on nämä ominaisuudet, mutta historialliset luvut heijastavat niitä vain osittain:",
    upsideP2: "Liiketoimintasuunnitelman, budjetin ja viimeisimpien kuukausiraporttien perusteella arvioimme raportissa kasvuskenaarion ja painotamme sitä 20–35 % sen mukaan, miten hyvin budjetti on perusteltu.",
    upUpload: "Lataa liiketoimintasuunnitelma tai budjetti",
    upsideBtn: "Arvioi kasvupotentiaali →",
    upGrowth: g => `Nopea kasvu: ${g} % vuodessa viime vuosina`,
    upRecur: r => `Suuri toistuvan liikevaihdon osuus: ${r} %`,
    upMargin: "Vakiintunut liikevaihto nyt matalalla katteella, jolloin arvo on skaalautumisessa",
    upTech: n => `Toimiala, jolla ostajat maksavat teknologiasta ja skaalautuvuudesta (${n})`,
    advH: "Kasvusuunnitelma (neuvonantaja)",
    advP: "Budjetoitu liikevaihto (" + K + ") kolmelle vuodelle, odotettu EBITDA-marginaali vuonna 3 ja tuottovaatimus. Antaa kasvuarvion raporttiin.",
    advY: y => `Liikevaihto ${y}`, advM: "EBITDA-marginaali vuosi 3, %", advR: "Tuottovaatimus, %",
    advPlanChk: "Budjettia perustelee liiketoimintasuunnitelma", advYtdP: "Kuukausiraportit (tuhansia, vuoden alusta). Antavat viimeiset kaksitoista kuukautta (LTM) ja kertovat, pysyykö yritys budjetissa. Vähintään 3 kuukautta.",
    advYtN: "Kuukausien määrä", advYtR: "Liikevaihto vuoden alusta", advYtE: "EBITDA vuoden alusta", advYtRp: "Liikevaihto samalla jaksolla viime vuonna", advYtEp: "EBITDA samalla jaksolla viime vuonna",
    advLtm: x => `Viimeisten kahdentoista kuukauden EBITDA: ${x}.`, advBlend: (w, x) => `Budjetin paino ${w} %: osakkeiden kokonaisarvo ${x}.`,
    advPdf: "Luo PDF-raportti", advBusy: "Raporttia luodaan…", advDone: "Valmis, raportti ladattiin.", advErr: "Raporttia ei voitu luoda.",
    gvLine: (lo, hi) => `Liiketoimintasuunnitelmasi mukaan: ${lo} – ${hi} osakkeiden arvo tänään (jos suunnitelma toteutuu).`,
    fetchedInd: n => `Toimiala: ${n}. Jos se on väärä, voit vaihtaa sen seuraavassa vaiheessa.`,
    kEvMethod: () => "Ennen nettovelkaa. Yhdistelmä EBITDA-, EBIT- ja liikevaihtokertoimista, katso alla.",
    blFree: "Kertoimet, arvo menetelmittäin, painot ja vastaava kerroin ovat raportissa.",
    bFree: "Toimialan tasot ja vertailun vaikutus kertoimeen ovat raportissa.",
    brFree: "Tässä näet suunnan. Paljonko kukin tekijä nostaa tai laskee kerrointa, on raportissa.",
    mktFree: n => "Listaamattomien yritysten markkina (Argos Index) ja " + (n ? `${n} nimettyä aktiivista ostajaa toimialallasi` : "toimialan aktiiviset ostajat") + " ovat raportissa.",
    blH: "Arvonmääritys kolmella kertoimella", blBasis: "Yrityksen tunnusluku", blMult: "Kerroin", blVal: "Arvo (EV)", blW: "Paino",
    blEbitda: "EV/EBITDA", blEbit: "EV/EBIT", blRev: "EV/liikevaihto", blSum: "Yritysarvo yhteensä",
    blImp: (a, b, c) => "Yhteensä tämä vastaa " + [a && a + " EBITDA", b && b + " EBIT", c && c + " liikevaihto"].filter(Boolean).join(", ") + ". Yllä oleva haarukka on ±0,75x tuloskertoimissa.",
    needQ: "Syötä suurimman asiakkaan osuus ja toistuvan liikevaihdon osuus (0–100 %). Ne vaikuttavat arvioon paljon.",
    s3Eye: "Vaihe 3/3 · Tuloksesi", back2: "Muuta tietoja",
    upEye: "Täydellinen raportti",
    upShort: "Suomenkielinen PDF-raportti Adsco Capital Partnersilta, laadittu lukujesi ja asiakirjojesi pohjalta ja neuvonantajan tarkistama.",
    docsN: n => n ? `${n} ladattua ${doc(n)} lähetetään tilauksen mukana neuvonantajan tarkistettavaksi.` : "Tilinpäätöksen ja muun materiaalin voit lähettää tilauksen jälkeen.",
    s1Read: (n, o, ys) => `Luvut vuosilta ${ys} luettu – ${n || "yritys"}${o ? " (" + o + ")" : ""}.`,
    s1NoRead: "Asiakirjat ladattiin, mutta lukuja ei voitu lukea automaattisesti. Syötä ne seuraavassa vaiheessa. Jos tilaat raportin, käymme asiakirjat läpi käsin.",
    s1Partial: "Osaa asiakirjoista ei voitu lukea automaattisesti. Tarkista luvut seuraavassa vaiheessa.",
    upFail: "Asiakirjaa ei voitu ladata. Yritä uudelleen tai jatka ilman sitä.",
    badType: "Tiedostotyyppiä ei tueta. Käytä PDF-, Word-, Excel- tai PowerPoint-tiedostoa tai kuvaa.",
    badTypeAnnual: "Lataa tilinpäätös PDF-muodossa (tai kuvana, jos sinulla on vain skannaus).",
    tooBig: "Tiedosto on liian suuri. Enintään 20 Mt.",
    tooMany: "Olet ladannut enimmäismäärän asiakirjoja.",
    privacy: "Haetut tai ladatut tiedot ja asiakirjat säilytetään Adsco Capital Partnersin Google Workspacessa ja niitä käytetään vain arvonmääritykseesi ja raporttiisi. Ota yhteyttä, jos haluat, että poistamme ne.",
    langH: "Kieli",
    bH: "Verrattuna toimialaan", bYou: y => `Yrityksesi ${y}`, bMed: "Toimialan mediaani (kvartiilit)", bMedS: "Toimialan mediaani", bAvg: "Toimialan keskiarvo", bMargin: "Liikevoittoprosentti", bGrowth: "Liikevaihdon kasvu", bPerEmp: "Liikevaihto henkilöä kohden (tuhansia)",
    bPos: ["Heikoin neljännes", "Alle mediaanin", "Yli mediaanin", "Paras neljännes"], bAbove: "Selvästi keskiarvon yläpuolella", bBelow: "Selvästi keskiarvon alapuolella", bNear: "Lähellä keskiarvoa",
    bAdj: x => `Kate suhteessa toimialaan antaa kertoimeen ${x}.`, bNoAdj: "Kate on toimialan tavanomaisella tasolla eikä vaikuta kertoimeen. Kasvu arvioidaan erikseen.",
    cycH: "Toimialan suhdanne", cycLbl: l => `Suhdanne (${l.toLowerCase()})`, cycState: ["Paljon normaalia heikompi", "Normaalia heikompi", "Normaali", "Normaalia vahvempi", "Paljon normaalia vahvempi"],
    tf: { gc: "Tilintarkastaja mainitsee olennaisen epävarmuuden toiminnan jatkuvuudesta", qual: "Tilintarkastuskertomus on mukautettu tai lausunnosta on pidättäydytty", kbr: "Oma pääoma on negatiivinen tai hyvin pieni", dispute: "Mainitaan riita tai oikeudenkäynti", custdep: "Mainitaan riippuvuus yhdestä tai muutamasta suuresta asiakkaasta – tarkista vastauksesi suurimmasta asiakkaasta", recur: "Mainitaan tilauksia, lisenssejä tai huoltosopimuksia – ota ne mukaan toistuvan liikevaihdon osuuteen", growth: "Mainitaan laajentuminen tai kasvava kysyntä" },
    arAbout: "Toiminta:", arEmp: n => `Keskimääräinen henkilöstömäärä: ${n}`, arAdj: x => `${x} kertoimeen`, arNone: "Tekstissä ei ole riskisignaaleja (jatkuvuus, tilintarkastajan huomautukset, pääoman menetys, riidat).",
    svH: "Strateginen arvo",
    svLevel: ["Vähäinen strateginen kiinnostus", "Jonkin verran strategista kiinnostusta", "Suuri strateginen kiinnostus"],
    svP: "Strateginen ostaja, kuten kilpailija, asiakas, toimittaja tai sarjaostaja, voi maksaa enemmän kuin yllä oleva taloudellinen arvo, jos yritys tuo synergioita: uusia asiakkaita, markkinoita, tuotteita, teknologiaa tai osaamista. Arviomme perustuu:",
    svDrv: { ind: n => `Toimialaan (${n}), jolla ostajat tekevät aktiivisesti yrityskauppoja ja maksavat synergioista`, recur: "Toistuvaan liikevaihtoon, jonka varaan ostaja voi rakentaa", growth: "Kasvuun, joka vahvistaa ostajan alustaa", margin: "Katteeseen toimialan parhaassa neljänneksessä", cust: "Laajaan asiakaskuntaan ilman riippuvuutta yksittäisistä asiakkaista", buyers: "Aktiivisiin sarjaostajiin, jotka ostavat toimialan yrityksiä" },
    svNone: "Luvuissa näkyy vähän tekijöitä, jotka yleensä houkuttelevat strategisia ostajia. Strateginen preemio riippuu silloin lähinnä siitä, kuka ostaja on.",
    svFree: "Mikä ratkaisee strategisen kiinnostuksen, suuntaa antava preemio euroina ja mitkä ostajat voisivat maksaa sen, ovat raportissa.",
    potFree: "Paljonko arvo voisi nousta, kun yritys on myyntivalmis, on raportissa.", scoreFree: "Pisteet osa-alueittain ja mikä niitä laskee, ovat raportissa.",
    svPrem: (r, a) => `Strateginen ostaja voisi maksaa noin ${r} enemmän kuin yritysarvo, eli ${a} enemmän.`,
    svNote: "Preemio ei sisälly yllä olevaan arvioon. Se edellyttää oikeaa ostajaa ja kilpailtua myyntiprosessia.",
    tagline: "Rakennettu rajat ylittäviin yrityskauppoihin Euroopassa",
    partNoRev: "Liikevaihtoa ei ole, joten arvo perustuu vain tulokseen.", partNoEb: "Tulosta ei ole, joten arvo perustuu vain liikevaihtoon ja on epävarmempi.", ltNetUsed: "Joiltakin vuosilta puuttuu tulos ennen veroja, joten käytimme tilikauden tulosta."
  };
}
UI.FI = Object.assign({}, UI.EN.SE, mkFI());
UI.SE.flFI = "Finland"; UI.NO.flFI = "Finland"; UI.EN.SE.flFI = UI.EN.NO.flFI = "Finland";
if (UI.PL) UI.PL.flFI = "Finlandia"; if (UI.LT) UI.LT.flFI = "Suomija"; if (UI.NL) UI.NL.flFI = "Finland";

/* ---------- Any language on any country ----------
   The language follows the language selector; registry, currency, prices, VAT and interest-rate source follow the country.
   A text set for (language, country) = the language's own set + the country-specific texts below, written in that language.
   Native sets (SE/SE, NO/NO, PL/PL, LT/LT), English for SE/NO and Swedish/Norwegian cross sets (UI.X) already exist. */
UI.C = {};
const XDISC = {
  EN: { src: "Sources.", mult: "Multiples." }, SE: { src: "Källor.", mult: "Multiplar." }, NO: { src: "Kilder.", mult: "Multipler." },
  PL: { src: "Źródła.", mult: "Mnożniki." }, LT: { src: "Šaltiniai.", mult: "Daugikliai." }, NL: { src: "Bronnen.", mult: "Multiples." }, FI: { src: "Lähteet.", mult: "Kertoimet." }
};
const XK = {
  /* ---------- Poland, in other languages ---------- */
  PL: {
    EN: {
      heroP: "A free indicative valuation in about three minutes. We fetch the company's details from the Polish court register (KRS), you upload the financial statements (XML file) and answer seven questions, and you get a value range, an exit readiness score and the actions that raise the value most.",
      heroFit: "Built for small and medium-sized companies with revenue up to about PLN 200 million. Larger companies and groups are best valued in a conversation with a partner.",
      step1: "Upload the financial statements (XML) or enter revenue and EBITDA in PLN thousands.", legFin: "Figures (PLN thousands)",
      dropTitle: "Upload the financial statements (XML)", dropSub: "We read revenue, EBITDA, cash and debt. One XML file holds two years. Drag the file here or click to choose.",
      s1P: "Enter the KRS or NIP number. We fetch the company's details from the KRS register, and you upload the financial statements as XML files from the Financial Documents Repository (RDF). One file holds two years.",
      nav1s: "KRS number and statements", slotEmpty: "Choose an XML or PDF file or drag it here",
      how: [["Enter the KRS or NIP number", "We fetch the company's details from the KRS. Upload the financial statements (XML from the RDF) and we read the figures for you."], ["Get the result straight away", "Value range, exit readiness score and the most important actions."]],
      orgL: "KRS or NIP number", orgPh: "0000123456 or 525-000-02-51",
      srchNone: "Search by name is not available for Polish companies. Enter the KRS or NIP number (you find it in the KRS search).", srchShort: "Enter the KRS number (10 digits) or the NIP (10 digits).",
      orgEmpty: "Enter the KRS or NIP number first.", orgBad: "Check the number: a KRS number has 10 digits (e.g. 0000123456), a NIP has 10 digits (e.g. 525-000-02-51).",
      orgNotFound: "No company with that number was found in the KRS.", orgFail: "Could not fetch details right now. Continue by uploading the financial statements.",
      noReports: "The register does not publish figures as data. Upload the latest financial statements as XML files here:", fetchedSrc: "From the National Court Register (KRS).",
      manualUp: "Don't have the number to hand? Upload the financial statements directly", addUp: "Also upload the financial statements (XML) for depreciation and debt",
      plH: n => `Found: ${n}`, plSrc: "From the National Court Register (KRS). The KRS does not publish the figures as data, so upload the financial statements below.",
      plRows: { krs: "KRS number", nip: "NIP", form: "Legal form", pkd: "Main activity (PKD)", city: "Registered office", filed: "Financial statements filed" },
      plFiled: (n, last) => n ? `${n}, the latest for ${last}` : "none recorded in the KRS",
      plHow: "How to get the XML file: open the Financial Documents Viewer (RDF), enter the KRS number and click Search. Expand \"Annual financial statement\" for the latest year, download the file and upload it here. One file holds two years, so two files give four years.",
      plRdf: "Open the Financial Documents Viewer →", plCopy: "Copy KRS number", plCopied: "Copied",
      xmlSmall: "This is a micro-entity statement: it has revenue but no operating profit or depreciation. Fill in EBITDA in the next step.",
      xmlNoOp: "The file has no operating profit. Fill in EBITDA in the next step.", xmlBad: "The XML file could not be read. Make sure it is the annual financial statement downloaded from the RDF (.xml, .xades or .zip file).",
      badTypeAnnual: "Upload the financial statement as an XML file from the RDF (.xml, .xades or .zip) or as PDF.",
      prices: ["PLN 1,190", "PLN 2,790"], vat: "net", oOrg: "KRS or NIP number",
      oFine: "No payment now. An invoice is sent with the report, payable within 10 days. Prices are net; Polish VAT-registered businesses account for the VAT (reverse charge).", oPayV: "Invoice, 10 days, net",
      rateLbl: r => `Interest rates (NBP reference rate ${r}%)`,
      rateLine: (r, src, dt, adj, ref) => `The multiples are adjusted for interest rates: the NBP reference rate is ${r}% (${dt}). ` + (adj ? `Compared with a normal level of ${ref}%, that gives ${adj} on the multiple.` : `That is close to a normal level of ${ref}% and does not affect the multiple.`),
      rateFree: r => `The multiples are adjusted for interest rates (NBP reference rate ${r}%).`,
      s2PManual: "Enter revenue and EBITDA for the last three years in PLN thousands and answer the buyer's questions.",
      s2PAuto: "Green fields have been read from the financial statements. Correct anything that looks wrong, fill in what is missing and answer the buyer's questions.", keyGreen: "Read from the statements",
      advP: "Budgeted revenue in PLN thousands for the next three years, expected EBITDA margin in year 3 and required return. Gives a growth valuation in the report.", emailPh: "you@company.pl",
      discSrc: "Company details come from public registers (the National Court Register, Ministry of Justice; the VAT payer register, Ministry of Finance), and the figures are read from the statements you upload. Reading is automatic and may be wrong or incomplete. We do not verify the information. Always compare with the company's financial statements.",
      discMult: "The industry multiples come from a survey of Nordic deals (Dealsuite) and are reduced for Poland based on Adsco's assessment, since there is no public source of Polish SME deal multiples. The adjustment is shown separately in the multiple bridge."
    },
    SE: {
      heroP: "Gratis indikativ värdering på cirka tre minuter. Vi hämtar bolagets uppgifter ur det polska domstolsregistret (KRS), du laddar upp bokslutet (XML-fil) och svarar på sju frågor och får värdeintervall, exitpoäng och de åtgärder som höjer värdet mest.",
      heroFit: "Byggt för små och medelstora bolag med en omsättning upp till cirka 200 miljoner PLN. Större bolag och koncerner värderas bäst i ett samtal med en partner.",
      step1: "Ladda upp bokslutet (XML) eller fyll i omsättning och EBITDA i tusen PLN.", legFin: "Siffror (tusen PLN)",
      dropTitle: "Ladda upp bokslutet (XML)", dropSub: "Vi läser av omsättning, EBITDA, kassa och skulder. En XML-fil innehåller två år. Dra filen hit eller klicka för att välja.",
      s1P: "Ange KRS- eller NIP-numret. Vi hämtar bolagets uppgifter ur KRS och du laddar upp boksluten som XML-filer från dokumentregistret RDF. En fil innehåller två år.",
      nav1s: "KRS-nummer och bokslut", slotEmpty: "Välj en XML- eller PDF-fil eller dra den hit",
      how: [["Ange KRS- eller NIP-numret", "Vi hämtar bolagets uppgifter ur KRS. Ladda upp boksluten (XML från RDF) så läser vi av siffrorna åt dig."], ["Få resultatet direkt", "Värdeintervall, exitpoäng och de viktigaste åtgärderna."]],
      orgL: "KRS- eller NIP-nummer", orgPh: "0000123456 eller 525-000-02-51",
      srchNone: "Sökning på namn finns inte för polska bolag. Ange KRS- eller NIP-numret (finns i KRS-sökningen).", srchShort: "Ange KRS-numret (10 siffror) eller NIP (10 siffror).",
      orgEmpty: "Ange KRS- eller NIP-numret först.", orgBad: "Kontrollera numret: KRS har 10 siffror (t.ex. 0000123456), NIP har 10 siffror (t.ex. 525-000-02-51).",
      orgNotFound: "Inget bolag med det numret hittades i KRS.", orgFail: "Kunde inte hämta uppgifter just nu. Fortsätt genom att ladda upp boksluten.",
      noReports: "Registret publicerar inte siffrorna som data. Ladda upp de senaste boksluten som XML-filer här:", fetchedSrc: "Från det polska domstolsregistret (KRS).",
      manualUp: "Har du inte numret till hands? Ladda upp boksluten direkt", addUp: "Ladda även upp boksluten (XML) för avskrivningar och skulder",
      plH: n => `Hittat: ${n}`, plSrc: "Från det polska domstolsregistret (KRS). KRS publicerar inte siffrorna som data, så ladda upp boksluten nedan.",
      plRows: { krs: "KRS-nummer", nip: "NIP", form: "Bolagsform", pkd: "Huvudsaklig verksamhet (PKD)", city: "Säte", filed: "Inlämnade bokslut" },
      plFiled: (n, last) => n ? `${n}, senast för ${last}` : "inga noterade i KRS",
      plHow: "Så hämtar du XML-filen: öppna dokumentregistret RDF, ange KRS-numret och klicka på Sök. Fäll ut ”Roczne sprawozdanie finansowe” för senaste året, ladda ned filen och ladda upp den här. En fil innehåller två år, så två filer ger fyra år.",
      plRdf: "Öppna dokumentregistret RDF →", plCopy: "Kopiera KRS-numret", plCopied: "Kopierat",
      xmlSmall: "Det här är ett bokslut för mikroföretag: det innehåller omsättning men inte rörelseresultat eller avskrivningar. Fyll i EBITDA i nästa steg.",
      xmlNoOp: "Filen saknar rörelseresultat. Fyll i EBITDA i nästa steg.", xmlBad: "XML-filen kunde inte läsas. Kontrollera att det är årsbokslutet hämtat från RDF (.xml, .xades eller .zip).",
      badTypeAnnual: "Ladda upp bokslutet som XML-fil från RDF (.xml, .xades eller .zip) eller som PDF.",
      prices: ["1 190 PLN", "2 790 PLN"], vat: "netto", oOrg: "KRS- eller NIP-nummer",
      oFine: "Ingen betalning nu. Faktura skickas med rapporten, 10 dagar. Priserna är netto; polska momsregistrerade företag redovisar momsen (omvänd skattskyldighet).", oPayV: "Faktura, 10 dagar, netto",
      rateLbl: r => `Räntenivå (NBP:s referensränta ${r} %)`,
      rateLine: (r, src, dt, adj, ref) => `Multiplarna är justerade för räntenivån: polska centralbankens (NBP) referensränta är ${r} % (${dt}). ` + (adj ? `Jämfört med en normal nivå på ${ref} % ger det ${adj} på multipeln.` : `Det är nära en normal nivå på ${ref} % och påverkar inte multipeln.`),
      rateFree: r => `Multiplarna är justerade för räntenivån (NBP:s referensränta ${r} %).`,
      s2PManual: "Fyll i omsättning och EBITDA för de tre senaste åren i tusen PLN och svara på köparens frågor.",
      s2PAuto: "Gröna fält är avlästa från boksluten. Rätta det som ser fel ut, fyll i det som saknas och svara på köparens frågor.", keyGreen: "Avläst från bokslutet",
      advP: "Budgeterad omsättning i tusen PLN för de kommande tre åren, förväntad EBITDA-marginal år 3 och avkastningskrav. Ger en tillväxtvärdering i rapporten.", emailPh: "du@foretag.pl",
      discSrc: "Bolagsuppgifter hämtas ur offentliga register (det polska domstolsregistret KRS och momsregistret) och siffrorna läses av ur boksluten du laddar upp. Avläsningen är automatisk och kan bli fel eller ofullständig. Vi verifierar inte uppgifterna. Jämför alltid med bolagets bokslut.",
      discMult: "Branschmultiplarna kommer från en undersökning av nordiska affärer (Dealsuite) och är sänkta för Polen enligt Adscos bedömning, eftersom det saknas en publik källa för multiplar i polska småbolagsaffärer. Justeringen visas separat i multipelbryggan."
    },
    NO: {
      heroP: "Gratis indikativ verdivurdering på rundt tre minutter. Vi henter selskapets opplysninger fra det polske domstolsregisteret (KRS), du laster opp regnskapet (XML-fil) og svarer på sju spørsmål og får verdiintervall, salgsklarhet og tiltakene som øker verdien mest.",
      heroFit: "Laget for små og mellomstore selskaper med omsetning opp til rundt 200 millioner PLN. Større selskaper og konsern verdsettes best i en samtale med en partner.",
      step1: "Last opp regnskapet (XML) eller fyll inn omsetning og EBITDA i tusen PLN.", legFin: "Tall (tusen PLN)",
      dropTitle: "Last opp regnskapet (XML)", dropSub: "Vi leser av omsetning, EBITDA, kontanter og gjeld. Én XML-fil inneholder to år. Dra filen hit eller klikk for å velge.",
      s1P: "Oppgi KRS- eller NIP-nummeret. Vi henter selskapets opplysninger fra KRS, og du laster opp regnskapene som XML-filer fra dokumentregisteret RDF. Én fil inneholder to år.",
      nav1s: "KRS-nummer og regnskap", slotEmpty: "Velg en XML- eller PDF-fil eller dra den hit",
      how: [["Oppgi KRS- eller NIP-nummeret", "Vi henter selskapets opplysninger fra KRS. Last opp regnskapene (XML fra RDF), så leser vi av tallene for deg."], ["Få resultatet med en gang", "Verdiintervall, salgsklarhet og de viktigste tiltakene."]],
      orgL: "KRS- eller NIP-nummer", orgPh: "0000123456 eller 525-000-02-51",
      srchNone: "Søk på navn finnes ikke for polske selskaper. Oppgi KRS- eller NIP-nummeret (finnes i KRS-søket).", srchShort: "Oppgi KRS-nummeret (10 sifre) eller NIP (10 sifre).",
      orgEmpty: "Oppgi KRS- eller NIP-nummeret først.", orgBad: "Kontroller nummeret: KRS har 10 sifre (f.eks. 0000123456), NIP har 10 sifre (f.eks. 525-000-02-51).",
      orgNotFound: "Fant ikke noe selskap med det nummeret i KRS.", orgFail: "Kunne ikke hente opplysninger nå. Fortsett ved å laste opp regnskapene.",
      noReports: "Registeret publiserer ikke tallene som data. Last opp de siste regnskapene som XML-filer her:", fetchedSrc: "Fra det polske domstolsregisteret (KRS).",
      manualUp: "Har du ikke nummeret for hånden? Last opp regnskapene direkte", addUp: "Last også opp regnskapene (XML) for avskrivninger og gjeld",
      plH: n => `Funnet: ${n}`, plSrc: "Fra det polske domstolsregisteret (KRS). KRS publiserer ikke tallene som data, så last opp regnskapene nedenfor.",
      plRows: { krs: "KRS-nummer", nip: "NIP", form: "Selskapsform", pkd: "Hovedvirksomhet (PKD)", city: "Forretningskontor", filed: "Innleverte regnskap" },
      plFiled: (n, last) => n ? `${n}, siste for ${last}` : "ingen registrert i KRS",
      plHow: "Slik henter du XML-filen: åpne dokumentregisteret RDF, oppgi KRS-nummeret og klikk Søk. Utvid «Roczne sprawozdanie finansowe» for siste år, last ned filen og last den opp her. Én fil inneholder to år, så to filer gir fire år.",
      plRdf: "Åpne dokumentregisteret RDF →", plCopy: "Kopier KRS-nummeret", plCopied: "Kopiert",
      xmlSmall: "Dette er et regnskap for mikroforetak: det har omsetning, men ikke driftsresultat eller avskrivninger. Fyll inn EBITDA i neste steg.",
      xmlNoOp: "Filen mangler driftsresultat. Fyll inn EBITDA i neste steg.", xmlBad: "XML-filen kunne ikke leses. Kontroller at det er årsregnskapet hentet fra RDF (.xml, .xades eller .zip).",
      badTypeAnnual: "Last opp regnskapet som XML-fil fra RDF (.xml, .xades eller .zip) eller som PDF.",
      prices: ["1 190 PLN", "2 790 PLN"], vat: "netto", oOrg: "KRS- eller NIP-nummer",
      oFine: "Ingen betaling nå. Faktura sendes med rapporten, 10 dager. Prisene er netto; polske mva-registrerte foretak beregner mva (omvendt avgiftsplikt).", oPayV: "Faktura, 10 dager, netto",
      rateLbl: r => `Rentenivå (NBPs referanserente ${r} %)`,
      rateLine: (r, src, dt, adj, ref) => `Multiplene er justert for rentenivået: den polske sentralbankens (NBP) referanserente er ${r} % (${dt}). ` + (adj ? `Sammenlignet med et normalt nivå på ${ref} % gir det ${adj} på multippelen.` : `Det er nær et normalt nivå på ${ref} % og påvirker ikke multippelen.`),
      rateFree: r => `Multiplene er justert for rentenivået (NBPs referanserente ${r} %).`,
      s2PManual: "Fyll inn omsetning og EBITDA for de tre siste årene i tusen PLN og svar på kjøperens spørsmål.",
      s2PAuto: "Grønne felt er lest av fra regnskapene. Rett det som ser feil ut, fyll inn det som mangler og svar på kjøperens spørsmål.", keyGreen: "Lest av fra regnskapet",
      advP: "Budsjettert omsetning i tusen PLN for de tre neste årene, forventet EBITDA-margin år 3 og avkastningskrav. Gir en vekstverdivurdering i rapporten.", emailPh: "deg@selskap.pl",
      discSrc: "Selskapsopplysninger hentes fra offentlige registre (det polske domstolsregisteret KRS og mva-registeret), og tallene leses av fra regnskapene du laster opp. Avlesningen er automatisk og kan bli feil eller ufullstendig. Vi verifiserer ikke opplysningene. Sammenlign alltid med selskapets regnskap.",
      discMult: "Bransjemultiplene kommer fra en undersøkelse av nordiske transaksjoner (Dealsuite) og er senket for Polen etter Adscos vurdering, fordi det mangler en offentlig kilde til multipler i polske SMB-transaksjoner. Justeringen vises separat i multippelbroen."
    },
    LT: {
      heroP: "Nemokamas orientacinis vertinimas per maždaug tris minutes. Įmonės duomenis paimame iš Lenkijos teismų registro (KRS), jūs įkeliate finansines ataskaitas (XML failą) ir atsakote į septynis klausimus, o gaunate vertės intervalą, pasirengimo pardavimui balą ir veiksmus, kurie labiausiai didina vertę.",
      heroFit: "Skirta mažoms ir vidutinėms įmonėms, kurių pajamos siekia iki maždaug 200 mln. PLN. Didesnes įmones ir grupes geriausia vertinti pokalbyje su partneriu.",
      step1: "Įkelkite finansines ataskaitas (XML) arba įrašykite pajamas ir EBITDA tūkst. PLN.", legFin: "Skaičiai (tūkst. PLN)",
      dropTitle: "Įkelkite finansines ataskaitas (XML)", dropSub: "Nuskaitome pajamas, EBITDA, pinigus ir skolas. Viename XML faile yra dvejų metų duomenys. Nutempkite failą čia arba spustelėkite.",
      s1P: "Įveskite KRS arba NIP numerį. Įmonės duomenis paimsime iš KRS, o jūs įkelsite finansines ataskaitas kaip XML failus iš dokumentų registro RDF. Viename faile – dveji metai.",
      nav1s: "KRS numeris ir ataskaitos", slotEmpty: "Pasirinkite XML ar PDF failą arba nutempkite jį čia",
      how: [["Įveskite KRS arba NIP numerį", "Įmonės duomenis paimame iš KRS. Įkelkite finansines ataskaitas (XML iš RDF), o skaičius nuskaitysime už jus."], ["Gaukite rezultatą iš karto", "Vertės intervalas, pasirengimo pardavimui balas ir svarbiausi veiksmai."]],
      orgL: "KRS arba NIP numeris", orgPh: "0000123456 arba 525-000-02-51",
      srchNone: "Lenkijos įmonių paieška pagal pavadinimą negalima. Įveskite KRS arba NIP numerį (jį rasite KRS paieškoje).", srchShort: "Įveskite KRS numerį (10 skaitmenų) arba NIP (10 skaitmenų).",
      orgEmpty: "Pirmiausia įveskite KRS arba NIP numerį.", orgBad: "Patikrinkite numerį: KRS turi 10 skaitmenų (pvz., 0000123456), NIP – 10 skaitmenų (pvz., 525-000-02-51).",
      orgNotFound: "KRS registre įmonės su tokiu numeriu nerasta.", orgFail: "Šiuo metu duomenų gauti nepavyko. Tęskite įkeldami finansines ataskaitas.",
      noReports: "Registras neskelbia skaičių kaip duomenų. Įkelkite paskutines finansines ataskaitas kaip XML failus čia:", fetchedSrc: "Iš Lenkijos teismų registro (KRS).",
      manualUp: "Neturite numerio po ranka? Įkelkite finansines ataskaitas tiesiogiai", addUp: "Įkelkite ir finansines ataskaitas (XML), kad matytume nusidėvėjimą ir skolas",
      plH: n => `Rasta: ${n}`, plSrc: "Iš Lenkijos teismų registro (KRS). KRS neskelbia skaičių kaip duomenų, todėl įkelkite finansines ataskaitas žemiau.",
      plRows: { krs: "KRS numeris", nip: "NIP", form: "Teisinė forma", pkd: "Pagrindinė veikla (PKD)", city: "Buveinė", filed: "Pateiktos finansinės ataskaitos" },
      plFiled: (n, last) => n ? `${n}, paskutinė už ${last} m.` : "KRS įrašų nėra",
      plHow: "Kaip gauti XML failą: atidarykite dokumentų registrą RDF, įveskite KRS numerį ir spustelėkite paiešką. Išskleiskite „Roczne sprawozdanie finansowe“ už paskutinius metus, atsisiųskite failą ir įkelkite jį čia. Viename faile – dveji metai, todėl du failai duoda ketverius metus.",
      plRdf: "Atidaryti dokumentų registrą RDF →", plCopy: "Kopijuoti KRS numerį", plCopied: "Nukopijuota",
      xmlSmall: "Tai labai mažos įmonės ataskaita: joje yra pajamos, bet nėra veiklos pelno ir nusidėvėjimo. EBITDA įrašykite kitame žingsnyje.",
      xmlNoOp: "Faile nėra veiklos pelno. EBITDA įrašykite kitame žingsnyje.", xmlBad: "XML failo perskaityti nepavyko. Patikrinkite, ar tai metinės finansinės ataskaitos iš RDF (.xml, .xades ar .zip).",
      badTypeAnnual: "Įkelkite finansines ataskaitas kaip XML failą iš RDF (.xml, .xades ar .zip) arba PDF.",
      prices: ["1 190 PLN", "2 790 PLN"], vat: "be PVM", oOrg: "KRS arba NIP numeris",
      oFine: "Mokėti dabar nereikia. Sąskaita siunčiama kartu su ataskaita, apmokėti per 10 dienų. Kainos be PVM; Lenkijos PVM mokėtojams taikomas atvirkštinis apmokestinimas.", oPayV: "Sąskaita, 10 dienų, be PVM",
      rateLbl: r => `Palūkanų normos (NBP referencinė norma ${r}%)`,
      rateLine: (r, src, dt, adj, ref) => `Daugikliai koreguojami pagal palūkanų lygį: Lenkijos centrinio banko (NBP) referencinė norma yra ${r}% (${dt}). ` + (adj ? `Palyginti su įprastu ${ref}% lygiu, tai daugikliui suteikia ${adj}.` : `Tai artima įprastam ${ref}% lygiui ir daugikliui įtakos neturi.`),
      rateFree: r => `Daugikliai koreguojami pagal palūkanų lygį (NBP referencinė norma ${r}%).`,
      s2PManual: "Įrašykite pastarųjų trejų metų pajamas ir EBITDA tūkst. PLN ir atsakykite į pirkėjo klausimus.",
      s2PAuto: "Žali laukai nuskaityti iš finansinių ataskaitų. Pataisykite, kas atrodo neteisinga, papildykite trūkstamus duomenis ir atsakykite į pirkėjo klausimus.", keyGreen: "Iš ataskaitų",
      advP: "Biudžetuojamos pajamos tūkst. PLN trejiems metams, laukiama EBITDA marža 3-iais metais ir reikalaujama grąža. Suteikia augimo vertinimą ataskaitoje.", emailPh: "jus@imone.pl",
      discSrc: "Įmonės duomenys paimami iš viešų registrų (Lenkijos teismų registro KRS ir PVM mokėtojų registro), o skaičiai nuskaitomi iš jūsų įkeltų ataskaitų. Nuskaitymas automatinis ir gali būti klaidingas ar neišsamus. Duomenų netikriname. Visada palyginkite su įmonės finansinėmis ataskaitomis.",
      discMult: "Sektorių daugikliai paimti iš Šiaurės šalių sandorių tyrimo (Dealsuite) ir Lenkijai sumažinti pagal Adsco vertinimą, nes viešo Lenkijos MVĮ sandorių daugiklių šaltinio nėra. Korekcija atskirai parodyta daugiklio tilte."
    }
  },
  /* ---------- Lithuania, in other languages ---------- */
  LT: {
    EN: {
      heroP: "A free indicative valuation in about three minutes. We take your company's revenue and profit from the Lithuanian Centre of Registers' open data, you answer seven questions, and you get a value range, an exit readiness score and the actions that raise the value most.",
      heroFit: "Built for small and medium-sized companies with revenue up to about EUR 45 million. Larger companies and groups are best valued in a conversation with a partner.",
      step1: "Enter the company code or name and we fetch the figures from the register, or enter revenue and EBITDA in EUR thousands.", legFin: "Figures (EUR thousands)",
      dropTitle: "Upload the financial statements (PDF)", dropSub: "An adviser reviews them when you order the report. Drag the file here or click to choose.",
      s1P: "Enter the company code (9 digits) or the name. We take revenue and profit before tax for the last three years from the Centre of Registers' open data and fill in the figures for you.",
      nav1s: "Company code and figures",
      how: [["Enter the company code or name", "We take revenue and profit for the last three years from the Centre of Registers."], ["Get the result straight away", "Value range, exit readiness score and the most important actions."]],
      orgL: "Company code or name", orgPh: "304123456 or company name",
      srchNone: "No company found with that name. Try another name or enter the company code.", srchShort: "Type at least three letters of the name.",
      orgEmpty: "Enter the company code first.", orgBad: "Check the company code (9 digits, for example 304123456).", orgNotFound: "No company found with that code.", orgFail: "Could not fetch details right now. Enter the figures yourself.",
      noReports: "We could not find the company's figures automatically. Enter them yourself or upload the financial statements as PDF:",
      fetchedSrc: "From the Centre of Registers' open data (EUR thousands). The figures are filled in in the next step.", ebitL: "Profit before tax",
      ltEvrk: c => `Main activity (EVRK): ${c.slice(0, 2)}.${c.slice(2, 4)}.`, ltPbt: "Profit before tax", ltNet: "Net profit", ltEq: "Equity", ltLiab: "Payables and liabilities",
      ltNote: "The register does not publish operating profit or depreciation, so we have put profit before tax in the EBITDA fields (yellow). In the next step, add depreciation, amortisation and interest expense – that often raises the value considerably. Enter interest-bearing debt and cash yourself.",
      manualUp: "Don't have the code to hand? Enter the figures yourself", addUp: "Also upload the financial statements (PDF) so the adviser sees depreciation and debt",
      prices: ["EUR 290", "EUR 690"], vat: "excl. VAT", oOrg: "Company code",
      oFine: "No payment now. An invoice is sent with the report, payable within 10 days. Prices excl. VAT; Lithuanian VAT-registered businesses account for the VAT (reverse charge).", oPayV: "Invoice, 10 days, excl. VAT",
      rateLbl: r => `Interest rates (ECB deposit rate ${r}%)`,
      rateLine: (r, src, dt, adj, ref) => `The multiples are adjusted for interest rates: the ECB deposit facility rate is ${r}% (${dt}). ` + (adj ? `Compared with a normal level of ${ref}%, that gives ${adj} on the multiple.` : `That is close to a normal level of ${ref}% and does not affect the multiple.`),
      rateFree: r => `The multiples are adjusted for interest rates (ECB deposit rate ${r}%).`,
      s2PManual: "Enter revenue and EBITDA for the last three years in EUR thousands and answer the buyer's questions.",
      s2PAuto: "Green fields come from the register; check the yellow ones carefully: the EBITDA fields hold profit before tax for now. Add depreciation and interest, fill in what is missing and answer the buyer's questions.", keyGreen: "From the register", keyYellow: "Please check",
      advP: "Budgeted revenue in EUR thousands for the next three years, expected EBITDA margin in year 3 and required return. Gives a growth valuation in the report.", emailPh: "you@company.lt",
      badTypeAnnual: "Upload the financial statements as PDF (or as an image if you only have a scanned copy).",
      discSrc: "Company details and key figures are taken from the open data of the Centre of Registers and the State Tax Inspectorate (data.gov.lt). The register does not publish operating profit or depreciation, so EBITDA starts as profit before tax and must be checked. We do not verify the information. Always compare with the company's financial statements.",
      discMult: "The industry multiples come from a survey of Nordic deals (Dealsuite) and are reduced for Lithuania based on Adsco's assessment, since there is no public source of Lithuanian SME deal multiples. The adjustment is shown separately in the multiple bridge."
    },
    SE: {
      heroP: "Gratis indikativ värdering på cirka tre minuter. Vi hämtar bolagets omsättning och resultat ur det litauiska bolagsregistrets (Registrų centras) öppna data, du svarar på sju frågor och får värdeintervall, exitpoäng och de åtgärder som höjer värdet mest.",
      heroFit: "Byggt för små och medelstora bolag med en omsättning upp till cirka 45 miljoner euro. Större bolag och koncerner värderas bäst i ett samtal med en partner.",
      step1: "Ange bolagskod eller namn så hämtar vi siffrorna ur registret, eller fyll i omsättning och EBITDA i tusen euro.", legFin: "Siffror (tusen EUR)",
      dropTitle: "Ladda upp boksluten (PDF)", dropSub: "En rådgivare går igenom dem när du beställer rapporten. Dra filen hit eller klicka för att välja.",
      s1P: "Ange bolagskoden (9 siffror) eller namnet. Vi hämtar omsättning och resultat före skatt för de tre senaste åren ur Registrų centras öppna data och fyller i siffrorna åt dig.",
      nav1s: "Bolagskod och siffror",
      how: [["Ange bolagskod eller namn", "Vi hämtar omsättning och resultat för de tre senaste åren ur Registrų centras."], ["Få resultatet direkt", "Värdeintervall, exitpoäng och de viktigaste åtgärderna."]],
      orgL: "Bolagskod eller namn", orgPh: "304123456 eller bolagets namn",
      srchNone: "Inget bolag hittades med det namnet. Prova ett annat namn eller ange bolagskoden.", srchShort: "Skriv minst tre bokstäver av namnet.",
      orgEmpty: "Ange bolagskoden först.", orgBad: "Kontrollera bolagskoden (9 siffror, t.ex. 304123456).", orgNotFound: "Inget bolag med den koden hittades.", orgFail: "Kunde inte hämta uppgifter just nu. Fyll i siffrorna själv.",
      noReports: "Vi hittade inte bolagets siffror automatiskt. Fyll i dem själv eller ladda upp boksluten som PDF:",
      fetchedSrc: "Från Registrų centras öppna data (tusen EUR). Siffrorna är ifyllda i nästa steg.", ebitL: "Resultat före skatt",
      ltEvrk: c => `Huvudsaklig verksamhet (EVRK): ${c.slice(0, 2)}.${c.slice(2, 4)}.`, ltPbt: "Resultat före skatt", ltNet: "Årets resultat", ltEq: "Eget kapital", ltLiab: "Skulder",
      ltNote: "Registret publicerar inte rörelseresultat eller avskrivningar, så vi har lagt resultat före skatt i EBITDA-fälten (gula). Lägg till avskrivningar och räntekostnader i nästa steg – det höjer ofta värdet betydligt. Fyll själv i räntebärande skulder och kassa.",
      manualUp: "Har du inte koden till hands? Fyll i siffrorna själv", addUp: "Ladda även upp boksluten (PDF) så att rådgivaren ser avskrivningar och skulder",
      prices: ["290 EUR", "690 EUR"], vat: "exkl. moms", oOrg: "Bolagskod",
      oFine: "Ingen betalning nu. Faktura skickas med rapporten, 10 dagar. Priserna exkl. moms; litauiska momsregistrerade företag redovisar momsen (omvänd skattskyldighet).", oPayV: "Faktura, 10 dagar, exkl. moms",
      rateLbl: r => `Räntenivå (ECB:s inlåningsränta ${r} %)`,
      rateLine: (r, src, dt, adj, ref) => `Multiplarna är justerade för räntenivån: ECB:s inlåningsränta är ${r} % (${dt}). ` + (adj ? `Jämfört med en normal nivå på ${ref} % ger det ${adj} på multipeln.` : `Det är nära en normal nivå på ${ref} % och påverkar inte multipeln.`),
      rateFree: r => `Multiplarna är justerade för räntenivån (ECB:s inlåningsränta ${r} %).`,
      s2PManual: "Fyll i omsättning och EBITDA för de tre senaste åren i tusen EUR och svara på köparens frågor.",
      s2PAuto: "Gröna fält kommer från registret, de gula behöver du kontrollera: EBITDA-fälten innehåller tills vidare resultat före skatt. Lägg till avskrivningar och räntor, fyll i det som saknas och svara på köparens frågor.", keyGreen: "Från registret", keyYellow: "Kontrollera",
      advP: "Budgeterad omsättning i tusen EUR för de kommande tre åren, förväntad EBITDA-marginal år 3 och avkastningskrav. Ger en tillväxtvärdering i rapporten.", emailPh: "du@foretag.lt",
      badTypeAnnual: "Ladda upp boksluten som PDF (eller som bild om du bara har en skannad kopia).",
      discSrc: "Bolagsuppgifter och nyckeltal hämtas ur öppna data från Registrų centras och den litauiska skattemyndigheten (data.gov.lt). Registret publicerar inte rörelseresultat eller avskrivningar, så EBITDA utgår från resultat före skatt och måste kontrolleras. Vi verifierar inte uppgifterna. Jämför alltid med bolagets bokslut.",
      discMult: "Branschmultiplarna kommer från en undersökning av nordiska affärer (Dealsuite) och är sänkta för Litauen enligt Adscos bedömning, eftersom det saknas en publik källa för multiplar i litauiska småbolagsaffärer. Justeringen visas separat i multipelbryggan."
    },
    NO: {
      heroP: "Gratis indikativ verdivurdering på rundt tre minutter. Vi henter selskapets omsetning og resultat fra det litauiske foretaksregisterets (Registrų centras) åpne data, du svarer på sju spørsmål og får verdiintervall, salgsklarhet og tiltakene som øker verdien mest.",
      heroFit: "Laget for små og mellomstore selskaper med omsetning opp til rundt 45 millioner euro. Større selskaper og konsern verdsettes best i en samtale med en partner.",
      step1: "Oppgi selskapskode eller navn, så henter vi tallene fra registeret, eller fyll inn omsetning og EBITDA i tusen euro.", legFin: "Tall (tusen EUR)",
      dropTitle: "Last opp regnskapene (PDF)", dropSub: "En rådgiver går gjennom dem når du bestiller rapporten. Dra filen hit eller klikk for å velge.",
      s1P: "Oppgi selskapskoden (9 sifre) eller navnet. Vi henter omsetning og resultat før skatt for de tre siste årene fra Registrų centras' åpne data og fyller inn tallene for deg.",
      nav1s: "Selskapskode og tall",
      how: [["Oppgi selskapskode eller navn", "Vi henter omsetning og resultat for de tre siste årene fra Registrų centras."], ["Få resultatet med en gang", "Verdiintervall, salgsklarhet og de viktigste tiltakene."]],
      orgL: "Selskapskode eller navn", orgPh: "304123456 eller selskapets navn",
      srchNone: "Fant ikke noe selskap med det navnet. Prøv et annet navn eller oppgi selskapskoden.", srchShort: "Skriv minst tre bokstaver av navnet.",
      orgEmpty: "Oppgi selskapskoden først.", orgBad: "Kontroller selskapskoden (9 sifre, f.eks. 304123456).", orgNotFound: "Fant ikke noe selskap med den koden.", orgFail: "Kunne ikke hente opplysninger nå. Fyll inn tallene selv.",
      noReports: "Vi fant ikke selskapets tall automatisk. Fyll dem inn selv eller last opp regnskapene som PDF:",
      fetchedSrc: "Fra Registrų centras' åpne data (tusen EUR). Tallene er fylt inn i neste steg.", ebitL: "Resultat før skatt",
      ltEvrk: c => `Hovedvirksomhet (EVRK): ${c.slice(0, 2)}.${c.slice(2, 4)}.`, ltPbt: "Resultat før skatt", ltNet: "Årsresultat", ltEq: "Egenkapital", ltLiab: "Gjeld",
      ltNote: "Registeret publiserer ikke driftsresultat eller avskrivninger, så vi har lagt resultat før skatt i EBITDA-feltene (gule). Legg til avskrivninger og rentekostnader i neste steg – det øker ofte verdien betydelig. Fyll selv inn rentebærende gjeld og kontanter.",
      manualUp: "Har du ikke koden for hånden? Fyll inn tallene selv", addUp: "Last også opp regnskapene (PDF) slik at rådgiveren ser avskrivninger og gjeld",
      prices: ["290 EUR", "690 EUR"], vat: "eks. mva.", oOrg: "Selskapskode",
      oFine: "Ingen betaling nå. Faktura sendes med rapporten, 10 dager. Prisene eks. mva.; litauiske mva-registrerte foretak beregner mva (omvendt avgiftsplikt).", oPayV: "Faktura, 10 dager, eks. mva.",
      rateLbl: r => `Rentenivå (ECBs innskuddsrente ${r} %)`,
      rateLine: (r, src, dt, adj, ref) => `Multiplene er justert for rentenivået: ECBs innskuddsrente er ${r} % (${dt}). ` + (adj ? `Sammenlignet med et normalt nivå på ${ref} % gir det ${adj} på multippelen.` : `Det er nær et normalt nivå på ${ref} % og påvirker ikke multippelen.`),
      rateFree: r => `Multiplene er justert for rentenivået (ECBs innskuddsrente ${r} %).`,
      s2PManual: "Fyll inn omsetning og EBITDA for de tre siste årene i tusen EUR og svar på kjøperens spørsmål.",
      s2PAuto: "Grønne felt kommer fra registeret, de gule må du kontrollere: EBITDA-feltene inneholder foreløpig resultat før skatt. Legg til avskrivninger og renter, fyll inn det som mangler og svar på kjøperens spørsmål.", keyGreen: "Fra registeret", keyYellow: "Kontroller",
      advP: "Budsjettert omsetning i tusen EUR for de tre neste årene, forventet EBITDA-margin år 3 og avkastningskrav. Gir en vekstverdivurdering i rapporten.", emailPh: "deg@selskap.lt",
      badTypeAnnual: "Last opp regnskapene som PDF (eller som bilde hvis du bare har en skannet kopi).",
      discSrc: "Selskapsopplysninger og nøkkeltall hentes fra åpne data fra Registrų centras og den litauiske skatteetaten (data.gov.lt). Registeret publiserer ikke driftsresultat eller avskrivninger, så EBITDA tar utgangspunkt i resultat før skatt og må kontrolleres. Vi verifiserer ikke opplysningene. Sammenlign alltid med selskapets regnskap.",
      discMult: "Bransjemultiplene kommer fra en undersøkelse av nordiske transaksjoner (Dealsuite) og er senket for Litauen etter Adscos vurdering, fordi det mangler en offentlig kilde til multipler i litauiske SMB-transaksjoner. Justeringen vises separat i multippelbroen."
    },
    PL: {
      heroP: "Bezpłatna, orientacyjna wycena w około trzy minuty. Przychody i zysk spółki pobieramy z otwartych danych litewskiego Centrum Rejestrów (Registrų centras), Ty odpowiadasz na siedem pytań i otrzymujesz przedział wartości, ocenę gotowości do sprzedaży i działania, które najbardziej podnoszą wartość.",
      heroFit: "Dla małych i średnich spółek z przychodami do ok. 45 mln EUR. Większe spółki i grupy kapitałowe najlepiej wycenić w rozmowie z partnerem.",
      step1: "Wpisz kod lub nazwę spółki, a pobierzemy dane z rejestru, albo wpisz przychody i EBITDA w tys. EUR.", legFin: "Dane finansowe (tys. EUR)",
      dropTitle: "Wgraj sprawozdania finansowe (PDF)", dropSub: "Przejrzy je doradca po zamówieniu raportu. Przeciągnij plik tutaj lub kliknij, aby go wybrać.",
      s1P: "Wpisz kod spółki (9 cyfr) lub nazwę. Przychody i zysk przed opodatkowaniem za ostatnie trzy lata pobierzemy z otwartych danych Registrų centras i uzupełnimy dane za Ciebie.",
      nav1s: "Kod spółki i dane",
      how: [["Wpisz kod lub nazwę spółki", "Przychody i zysk za ostatnie trzy lata pobieramy z Registrų centras."], ["Otrzymaj wynik od razu", "Przedział wartości, ocena gotowości do sprzedaży i najważniejsze działania."]],
      orgL: "Kod lub nazwa spółki", orgPh: "304123456 lub nazwa spółki",
      srchNone: "Nie znaleziono spółki o tej nazwie. Spróbuj innej nazwy lub wpisz kod spółki.", srchShort: "Wpisz co najmniej trzy litery nazwy.",
      orgEmpty: "Najpierw wpisz kod spółki.", orgBad: "Sprawdź kod spółki (9 cyfr, np. 304123456).", orgNotFound: "Nie znaleziono spółki z tym kodem.", orgFail: "Nie udało się teraz pobrać danych. Wpisz dane samodzielnie.",
      noReports: "Nie udało się automatycznie znaleźć danych spółki. Wpisz je samodzielnie lub wgraj sprawozdania finansowe jako PDF:",
      fetchedSrc: "Z otwartych danych Registrų centras (tys. EUR). Dane są uzupełnione w następnym kroku.", ebitL: "Zysk przed opodatkowaniem",
      ltEvrk: c => `Przeważająca działalność (EVRK): ${c.slice(0, 2)}.${c.slice(2, 4)}.`, ltPbt: "Zysk przed opodatkowaniem", ltNet: "Zysk netto", ltEq: "Kapitał własny", ltLiab: "Zobowiązania",
      ltNote: "Rejestr nie publikuje zysku operacyjnego ani amortyzacji, dlatego w polach EBITDA wpisaliśmy zysk przed opodatkowaniem (żółte pola). W następnym kroku dodaj amortyzację i koszty odsetek – często znacząco podnosi to wartość. Zadłużenie oprocentowane i środki pieniężne wpisz samodzielnie.",
      manualUp: "Nie masz kodu pod ręką? Wpisz dane samodzielnie", addUp: "Wgraj też sprawozdania finansowe (PDF), aby doradca widział amortyzację i zadłużenie",
      prices: ["290 EUR", "690 EUR"], vat: "netto", oOrg: "Kod spółki",
      oFine: "Bez płatności teraz. Faktura zostanie wysłana razem z raportem, termin płatności 10 dni. Ceny netto; litewscy podatnicy VAT rozliczają podatek (odwrotne obciążenie).", oPayV: "Faktura, 10 dni, netto",
      rateLbl: r => `Stopy procentowe (stopa depozytowa EBC ${r}%)`,
      rateLine: (r, src, dt, adj, ref) => `Mnożniki są korygowane o poziom stóp procentowych: stopa depozytowa EBC wynosi ${r}% (${dt}). ` + (adj ? `W porównaniu z normalnym poziomem ${ref}% daje to ${adj} do mnożnika.` : `To blisko normalnego poziomu ${ref}% i nie wpływa na mnożnik.`),
      rateFree: r => `Mnożniki są korygowane o poziom stóp procentowych (stopa depozytowa EBC ${r}%).`,
      s2PManual: "Wpisz przychody i EBITDA za ostatnie trzy lata w tys. EUR i odpowiedz na pytania kupującego.",
      s2PAuto: "Zielone pola pochodzą z rejestru, żółte koniecznie sprawdź: w polach EBITDA jest na razie zysk przed opodatkowaniem. Dodaj amortyzację i odsetki, uzupełnij braki i odpowiedz na pytania kupującego.", keyGreen: "Z rejestru", keyYellow: "Sprawdź",
      advP: "Budżetowane przychody w tys. EUR na kolejne trzy lata, oczekiwana marża EBITDA w 3. roku i wymagana stopa zwrotu. Daje wycenę wzrostu w raporcie.", emailPh: "ty@firma.lt",
      badTypeAnnual: "Wgraj sprawozdania finansowe jako PDF (lub zdjęcie, jeśli masz tylko skan).",
      discSrc: "Dane spółki i wskaźniki finansowe pochodzą z otwartych danych litewskiego Centrum Rejestrów i Państwowej Inspekcji Podatkowej (data.gov.lt). Rejestr nie publikuje zysku operacyjnego ani amortyzacji, więc EBITDA na początku równa się zyskowi przed opodatkowaniem i wymaga sprawdzenia. Nie weryfikujemy informacji. Zawsze porównaj wynik ze sprawozdaniem finansowym spółki.",
      discMult: "Mnożniki branżowe pochodzą z badania transakcji na rynkach nordyckich (Dealsuite) i są obniżone dla Litwy na podstawie oceny Adsco, ponieważ brak publicznego źródła mnożników dla litewskich MŚP. Korekta jest pokazana osobno w pomoście mnożnika."
    }
  },
  /* ---------- Sweden and Norway, in Polish and Lithuanian ---------- */
  SN: {
    PL: cc => {
      const S = cc === "SE", CUR = S ? "SEK" : "NOK", K = "tys. " + CUR, REG = S ? "Bolagsverket (szwedzki urząd rejestrowy)" : "Brønnøysundregistrene (norweski rejestr)";
      const cb = src => /riksbank/i.test(src || "") ? "Riksbanku" : "Norges Bank";
      return {
        heroP: "Bezpłatna, orientacyjna wycena w około trzy minuty. Pobieramy sprawozdania finansowe za Ciebie, Ty odpowiadasz na siedem pytań i otrzymujesz przedział wartości, ocenę gotowości do sprzedaży i działania, które najbardziej podnoszą wartość.",
        heroFit: "Dla małych i średnich spółek z przychodami do ok. 500 mln " + CUR + ". Większe spółki i grupy najlepiej wycenić w rozmowie z partnerem.",
        step1: "Wgraj sprawozdanie roczne (PDF) albo wpisz przychody i EBITDA w " + K + ".", legFin: "Dane finansowe (" + K + ")",
        dropTitle: "Wgraj sprawozdanie roczne (PDF)", dropSub: "Odczytujemy przychody, EBITDA, środki pieniężne, zadłużenie i wynagrodzenie prezesa za maks. trzy lata. Przeciągnij plik tutaj lub kliknij.",
        s1P: "Wpisz numer rejestrowy, a pobierzemy sprawozdania z " + REG + " i uzupełnimy dane. Jeśli się nie uda, wgraj je jako PDF.",
        nav1s: "Numer rejestrowy i sprawozdania", slotEmpty: "Wybierz PDF lub przeciągnij go tutaj",
        how: [["Wpisz numer rejestrowy lub nazwę firmy", "Pobieramy sprawozdania roczne. Możesz też wgrać je jako PDF, aby analiza była dokładniejsza."], ["Otrzymaj wynik od razu", "Przedział wartości, ocena gotowości do sprzedaży i najważniejsze działania."]],
        orgL: "Numer rejestrowy lub nazwa spółki", orgPh: S ? "556677-8899 lub Spółka AB" : "912 345 678 lub Spółka AS",
        srchNone: "Nie znaleziono spółki o tej nazwie. Spróbuj innej nazwy lub wpisz numer rejestrowy.", srchShort: "Wpisz co najmniej trzy litery nazwy.",
        orgEmpty: "Najpierw wpisz numer rejestrowy.", orgBad: S ? "Sprawdź numer rejestrowy (10 cyfr, np. 556677-8899)." : "Sprawdź numer rejestrowy (9 cyfr, np. 912 345 678).",
        orgNotFound: "Nie znaleziono spółki z tym numerem.", orgFail: "Nie udało się teraz pobrać danych. Kontynuuj, wgrywając sprawozdania.",
        orgFound: (n, y) => `${n}: pobrano dane za ${y}.`,
        noBV: "Nie znaleźliśmy cyfrowych sprawozdań spółki. Wgraj ostatnie sprawozdania jako PDF (najlepiej 3–5 lat):",
        repLoadingBV: "Pobieramy sprawozdania…", repSavedBV: n => `Pobrano i zapisano sprawozdania: ${n}:`, repItem: y => `Sprawozdanie roczne ${y}`, repLoading: "Pobieramy pełne sprawozdania…", repSaved: n => `Pobrano pełne sprawozdania: ${n}:`,
        upAskNO: "Rejestr udostępnia tylko kluczowe dane. Wgraj trzy ostatnie sprawozdania jako PDF, aby analiza była dokładniejsza:",
        noReports: "Nie udało się automatycznie znaleźć sprawozdań spółki. Wgraj tutaj trzy ostatnie sprawozdania jako PDF:",
        fetchedSrc: "Z " + REG + " (" + K + "). Dane są uzupełnione w następnym kroku.", fetchedSrcAB: "Ze sprawozdań złożonych w Bolagsverket (tys. SEK). Dane są uzupełnione w następnym kroku.", fetchedGroup: "Dane skonsolidowane.",
        pdfLink: S ? "Pobierz sprawozdania jako PDF z Allabolag i wgraj je tutaj →" : "Otwórz sprawozdania →", ebitL: "Zysk operacyjny (EBIT)",
        manualUp: "Nie masz numeru pod ręką? Wgraj sprawozdania bezpośrednio", addUp: "Wgraj też sprawozdania jako PDF (amortyzacja i zadłużenie)",
        prices: S ? ["2 995 SEK", "6 995 SEK"] : ["2 995 NOK", "6 995 NOK"], vat: S ? "netto" : "bez VAT", oOrg: "Numer rejestrowy",
        oFine: S ? "Bez płatności teraz. Faktura zostanie wysłana razem z raportem, 10 dni. Doliczany jest VAT." : "Bez płatności teraz. Faktura zostanie wysłana razem z raportem, 10 dni, bez VAT.", oPayV: S ? "Faktura, 10 dni + VAT" : "Faktura, 10 dni, bez VAT",
        rateLbl: r => `Stopy procentowe (stopa ${cb()} ${r}%)`,
        rateLine: (r, src, dt, adj, ref) => `Mnożniki są korygowane o poziom stóp procentowych: stopa ${cb(src)} wynosi ${r}% (${dt}). ` + (adj ? `W porównaniu z normalnym poziomem ${ref}% daje to ${adj} do mnożnika.` : `To blisko normalnego poziomu ${ref}% i nie wpływa na mnożnik.`),
        rateFree: (r, src) => `Mnożniki są korygowane o poziom stóp procentowych (stopa ${cb(src)} ${r}%).`,
        bSrc: b => S ? `Statistics Sweden (SCB) ${b.year} · ${b.code} ${b.label} · ${Number(b.n).toLocaleString("pl-PL")} spółek` : `Statistics Norway (SSB) ${b.year} · ${b.code} ${b.label} · ${Number(b.n).toLocaleString("pl-PL")} spółek`,
        cycState: ["Znacznie słabsza niż normalnie", "Słabsza niż normalnie", "Normalna", "Silniejsza niż normalnie", "Znacznie silniejsza niż normalnie"],
        cycLine: (c, v, adj) => (c.src === "SSB" ? `Wskaźnik koniunktury Statistics Norway dla ${c.label.toLowerCase()}, ${c.period}: ${v}. ` : `Barometr koniunktury szwedzkiego Instytutu Badań Koniunktury dla ${c.label.toLowerCase()}, ${c.period}: ${v} (normalnie 100). `) + (adj ? `Daje to ${adj} do mnożnika.` : "Nie wpływa to na mnożnik."),
        cycFree: c => `Źródło: ${c.src === "SSB" ? "Statistics Norway" : "szwedzki Instytut Badań Koniunktury"} dla ${c.label.toLowerCase()}. Wartość wskaźnika i wpływ na mnożnik pokazujemy w raporcie.`,
        arSrcBV: "Przeczytaliśmy sprawozdanie zarządu, informację dodatkową i sprawozdanie biegłego rewidenta z " + REG + ". Sygnały ryzyka wpływają na wycenę.",
        s2PManual: "Wpisz przychody i EBITDA za ostatnie trzy lata w " + K + " i odpowiedz na pytania kupującego.",
        s2PAuto: "Zielone pola odczytaliśmy ze sprawozdań. Popraw to, co wygląda na błędne, uzupełnij braki i odpowiedz na pytania kupującego.", keyGreen: "Odczytane ze sprawozdania",
        advP: "Budżetowane przychody w " + K + " na kolejne trzy lata, oczekiwana marża EBITDA w 3. roku i wymagana stopa zwrotu. Daje wycenę wzrostu w raporcie.", emailPh: S ? "ty@firma.se" : "ty@firma.no",
        badTypeAnnual: "Wgraj sprawozdanie roczne jako PDF (lub zdjęcie, jeśli masz tylko skan).",
        discSrc: "Dane i sprawozdania pobieramy z publicznych rejestrów i serwisów (Bolagsverket i Allabolag/UC AB w Szwecji, Brønnøysundregistrene w Norwegii) lub od Ciebie. Odczyt jest automatyczny i może być błędny lub niepełny. Nie weryfikujemy informacji. Zawsze porównaj wynik ze sprawozdaniem spółki.", discMult: null
      };
    },
    LT: cc => {
      const S = cc === "SE", CUR = S ? "SEK" : "NOK", K = "tūkst. " + CUR, REG = S ? "Bolagsverket (Švedijos registrų tarnybos)" : "Brønnøysundregistrene (Norvegijos registro)";
      const cb = src => /riksbank/i.test(src || "") ? "Riksbank" : "Norges Bank";
      return {
        heroP: "Nemokamas orientacinis vertinimas per maždaug tris minutes. Finansines ataskaitas paimame už jus, jūs atsakote į septynis klausimus ir gaunate vertės intervalą, pasirengimo pardavimui balą ir veiksmus, kurie labiausiai didina vertę.",
        heroFit: "Skirta mažoms ir vidutinėms įmonėms, kurių pajamos siekia iki maždaug 500 mln. " + CUR + ". Didesnes įmones geriausia vertinti pokalbyje su partneriu.",
        step1: "Įkelkite metines finansines ataskaitas (PDF) arba įrašykite pajamas ir EBITDA " + K + ".", legFin: "Skaičiai (" + K + ")",
        dropTitle: "Įkelkite metines ataskaitas (PDF)", dropSub: "Nuskaitome pajamas, EBITDA, pinigus, skolas ir vadovo atlyginimą iki trejų metų. Nutempkite failą čia arba spustelėkite.",
        s1P: "Įveskite įmonės kodą ir paimsime ataskaitas iš " + REG + " bei užpildysime skaičius. Jei nepavyks, įkelkite jas kaip PDF.",
        nav1s: "Įmonės kodas ir ataskaitos", slotEmpty: "Pasirinkite PDF arba nutempkite jį čia",
        how: [["Įveskite įmonės kodą arba pavadinimą", "Paimame metines ataskaitas. Taip pat galite jas įkelti kaip PDF, kad analizė būtų tikslesnė."], ["Gaukite rezultatą iš karto", "Vertės intervalas, pasirengimo pardavimui balas ir svarbiausi veiksmai."]],
        orgL: "Įmonės kodas arba pavadinimas", orgPh: S ? "556677-8899 arba Įmonė AB" : "912 345 678 arba Įmonė AS",
        srchNone: "Įmonės tokiu pavadinimu nerasta. Pabandykite kitą pavadinimą arba įveskite įmonės kodą.", srchShort: "Įveskite bent tris pavadinimo raides.",
        orgEmpty: "Pirmiausia įveskite įmonės kodą.", orgBad: S ? "Patikrinkite įmonės kodą (10 skaitmenų, pvz., 556677-8899)." : "Patikrinkite įmonės kodą (9 skaitmenys, pvz., 912 345 678).",
        orgNotFound: "Įmonės su tokiu kodu nerasta.", orgFail: "Šiuo metu duomenų gauti nepavyko. Tęskite įkeldami ataskaitas.",
        orgFound: (n, y) => `${n}: paimti ${y} m. skaičiai.`,
        noBV: "Neradome skaitmeninių įmonės ataskaitų. Įkelkite paskutines ataskaitas kaip PDF (geriausia 3–5 metų):",
        repLoadingBV: "Gaunamos ataskaitos…", repSavedBV: n => `Paimta ir išsaugota ataskaitų: ${n}:`, repItem: y => `Metinė ataskaita ${y}`, repLoading: "Gaunamos visos ataskaitos…", repSaved: n => `Paimta visų ataskaitų: ${n}:`,
        upAskNO: "Registras pateikia tik pagrindinius rodiklius. Įkelkite tris paskutines ataskaitas kaip PDF tikslesnei analizei:",
        noReports: "Įmonės ataskaitų automatiškai rasti nepavyko. Įkelkite tris paskutines ataskaitas kaip PDF čia:",
        fetchedSrc: "Iš " + REG + " (" + K + "). Skaičiai užpildyti kitame žingsnyje.", fetchedSrcAB: "Iš Bolagsverket pateiktų metinių ataskaitų (tūkst. SEK). Skaičiai užpildyti kitame žingsnyje.", fetchedGroup: "Konsoliduoti duomenys.",
        pdfLink: S ? "Atsisiųskite ataskaitas PDF formatu iš Allabolag ir įkelkite jas čia →" : "Atidaryti ataskaitas →", ebitL: "Veiklos pelnas (EBIT)",
        manualUp: "Neturite kodo po ranka? Įkelkite ataskaitas tiesiogiai", addUp: "Įkelkite ir ataskaitas kaip PDF (nusidėvėjimas ir skolos)",
        prices: S ? ["2 995 SEK", "6 995 SEK"] : ["2 995 NOK", "6 995 NOK"], vat: "be PVM", oOrg: "Įmonės kodas",
        oFine: S ? "Mokėti dabar nereikia. Sąskaita siunčiama kartu su ataskaita, 10 dienų. Pridedamas PVM." : "Mokėti dabar nereikia. Sąskaita siunčiama kartu su ataskaita, 10 dienų, be PVM.", oPayV: S ? "Sąskaita, 10 dienų + PVM" : "Sąskaita, 10 dienų, be PVM",
        rateLbl: r => `Palūkanų normos (${cb()} bazinė norma ${r}%)`,
        rateLine: (r, src, dt, adj, ref) => `Daugikliai koreguojami pagal palūkanų lygį: ${cb(src)} bazinė palūkanų norma yra ${r}% (${dt}). ` + (adj ? `Palyginti su įprastu ${ref}% lygiu, tai daugikliui suteikia ${adj}.` : `Tai artima įprastam ${ref}% lygiui ir daugikliui įtakos neturi.`),
        rateFree: (r, src) => `Daugikliai koreguojami pagal palūkanų lygį (${cb(src)} bazinė norma ${r}%).`,
        bSrc: b => S ? `Statistics Sweden (SCB) ${b.year} · ${b.code} ${b.label} · ${Number(b.n).toLocaleString("lt-LT")} įmonių` : `Statistics Norway (SSB) ${b.year} · ${b.code} ${b.label} · ${Number(b.n).toLocaleString("lt-LT")} įmonių`,
        cycLine: (c, v, adj) => (c.src === "SSB" ? `Norvegijos statistikos tarnybos konjunktūros rodiklis (${c.label.toLowerCase()}), ${c.period}: ${v}. ` : `Švedijos ekonomikos tyrimų instituto konjunktūros barometras (${c.label.toLowerCase()}), ${c.period}: ${v} (įprastai 100). `) + (adj ? `Tai daugikliui suteikia ${adj}.` : "Tai daugikliui įtakos neturi."),
        cycFree: c => `Šaltinis: ${c.src === "SSB" ? "Norvegijos statistikos tarnyba" : "Švedijos ekonomikos tyrimų institutas"} (${c.label.toLowerCase()}). Rodiklio vertė ir poveikis daugikliui pateikiami ataskaitoje.`,
        arSrcBV: "Perskaitėme vadovybės ataskaitą, aiškinamąjį raštą ir auditoriaus išvadą iš " + REG + ". Rizikos ženklai veikia vertinimą.",
        s2PManual: "Įrašykite pastarųjų trejų metų pajamas ir EBITDA " + K + " ir atsakykite į pirkėjo klausimus.",
        s2PAuto: "Žali laukai nuskaityti iš ataskaitų. Pataisykite, kas atrodo neteisinga, papildykite trūkstamus duomenis ir atsakykite į pirkėjo klausimus.", keyGreen: "Iš ataskaitos",
        advP: "Biudžetuojamos pajamos " + K + " trejiems metams, laukiama EBITDA marža 3-iais metais ir reikalaujama grąža. Suteikia augimo vertinimą ataskaitoje.", emailPh: S ? "jus@imone.se" : "jus@imone.no",
        badTypeAnnual: "Įkelkite metines ataskaitas kaip PDF (arba paveikslėlį, jei turite tik nuskenuotą kopiją).",
        discSrc: "Duomenys ir ataskaitos paimami iš viešų registrų ir paslaugų (Švedijoje – Bolagsverket ir Allabolag/UC AB, Norvegijoje – Brønnøysundregistrene) arba pateikiami jūsų. Nuskaitymas automatinis ir gali būti klaidingas ar neišsamus. Duomenų netikriname. Visada palyginkite su įmonės ataskaitomis.", discMult: null
      };
    }
  }
};
function discFor(l, base, pack) {
  const d = (base.disc || []).filter(x => x[0] !== XDISC[l].mult);
  const i = d.findIndex(x => x[0] === XDISC[l].src);
  if (i >= 0 && pack.discSrc) d[i] = [XDISC[l].src, pack.discSrc];
  if (pack.discMult) d.splice(i >= 0 ? i + 1 : 3, 0, [XDISC[l].mult, pack.discMult]);
  return d;
}
function uiFor(l, cc) {
  if (l === cc && UI[cc]) return UI[cc];
  if (l === "EN" && UI.EN[cc]) return UI.EN[cc];
  if (UI.X[l + cc]) return UI.X[l + cc];
  const key = l + cc;
  if (UI.C[key]) return UI.C[key];
  const base = l === "EN" ? UI.EN.SE : UI[l];
  const pack = cc === "SE" || cc === "NO" ? (XK.SN[l] ? XK.SN[l](cc) : {}) : ((XK[cc] || {})[l] || (XK[cc] || {}).EN || {}); /* no pack in this language yet: the English country texts */
  const o = Object.assign({}, base, pack);
  o.disc = discFor(l, base, pack);
  delete o.discSrc; delete o.discMult;
  return (UI.C[key] = o);
}

/* Tagline under the brand, by language (html code of each text set). */
(function () {
  const TAG = { sv: "Byggt för gränsöverskridande M&A i Europa", nb: "Bygget for grenseoverskridende M&A i Europa", en: "Built for cross-border M&A in Europe",
                pl: "Stworzony dla transgranicznych transakcji M&A w Europie", lt: "Sukurta tarpvalstybiniams M&A sandoriams Europoje", nl: "Gebouwd voor grensoverschrijdende M&A in Europa" };
  /* Note under the value when only revenue or only earnings were available */
  const PART = {
    sv: { partNoRev: "Omsättning saknas, så värdet bygger enbart på resultatet.", partNoEb: "Resultat saknas, så värdet bygger enbart på omsättningen och är mer osäkert.", ltNetUsed: "Vissa år saknar resultat före skatt, så vi har fyllt i nettoresultatet i stället." },
    nb: { partNoRev: "Omsetning mangler, så verdien bygger kun på resultatet.", partNoEb: "Resultat mangler, så verdien bygger kun på omsetningen og er mer usikker.", ltNetUsed: "Enkelte år mangler resultat før skatt, så vi har fylt inn årsresultatet i stedet." },
    en: { partNoRev: "No revenue figures, so the value rests on earnings only.", partNoEb: "No earnings figures, so the value rests on revenue only and is less certain.", ltNetUsed: "Some years have no profit before tax, so we entered net profit instead." },
    pl: { partNoRev: "Brak danych o przychodach, więc wycena opiera się wyłącznie na zysku.", partNoEb: "Brak danych o zysku, więc wycena opiera się wyłącznie na przychodach i jest mniej pewna.", ltNetUsed: "W niektórych latach brak zysku przed opodatkowaniem, więc wpisaliśmy zysk netto." },
    nl: { partNoRev: "Er zijn geen omzetcijfers, dus de waarde is alleen op het resultaat gebaseerd.", partNoEb: "Er zijn geen resultaatcijfers, dus de waarde is alleen op de omzet gebaseerd en minder zeker.", ltNetUsed: "Voor sommige jaren ontbreekt het resultaat vóór belasting, dus hebben we het nettoresultaat ingevuld." },
    lt: { partNoRev: "Pajamų duomenų nėra, todėl vertė remiasi tik pelnu.", partNoEb: "Pelno duomenų nėra, todėl vertė remiasi tik pajamomis ir yra mažiau tiksli.", ltNetUsed: "Kai kuriems metams pelno prieš apmokestinimą nėra, todėl įrašėme grynąjį pelną." }
  };
  const seen = new Set();
  const walk = o => { if (!o || typeof o !== "object" || seen.has(o)) return; seen.add(o);
    if (typeof o.html === "string" && TAG[o.html]) { o.tagline = TAG[o.html]; Object.assign(o, PART[o.html]); }
    Object.keys(o).forEach(k => { if (k !== "C") walk(o[k]); }); };
  walk(UI);
})();

/* ---------- The Netherlands in other languages, and Dutch for Swedish and Norwegian companies ----------
   Loaded after texts_x.js. Polish and Lithuanian on a Dutch company use the English country texts (see uiFor). */
XK.NL = {
  EN: {
    heroP: "A free indicative valuation in about three minutes. We fetch the filed annual accounts from the Dutch Chamber of Commerce (KVK), you fill in what is missing and answer seven questions, and you get a value range, an exit readiness score and the actions that raise the value most.",
    heroFit: "Built for small and medium-sized companies with revenue up to about EUR 45 million. Larger companies and groups are best valued in a conversation with a partner.",
    step1: "Enter the KVK number and we fetch the filed annual accounts, or enter revenue and EBITDA in EUR thousands.", legFin: "Figures (EUR thousands)",
    dropTitle: "Upload the annual accounts (PDF)", dropSub: "An adviser reviews them when you order the report. Drag the file here or click to choose.",
    s1P: "Enter the KVK number (8 digits). We fetch the latest filed annual accounts from the KVK open dataset and fill in the figures for you. Small companies often file only a balance sheet; then add revenue and profit yourself.",
    nav1s: "KVK number and figures",
    how: [["Enter the KVK number", "We fetch the latest filed annual accounts from the KVK and fill in the figures."], ["Get the result straight away", "Value range, exit readiness score and the most important actions."]],
    orgL: "KVK number or company name", orgPh: "12345678 or company name",
    srchNone: "Search by name is not yet available for Dutch companies. Enter the KVK number (on kvk.nl or the company's invoices).", srchShort: "Type at least three letters of the name, or enter the KVK number (8 digits).",
    orgEmpty: "Enter the KVK number first.", orgBad: "Check the KVK number (8 digits, for example 12345678).", orgNotFound: "The KVK has no filed annual accounts as open data for this number.", orgFail: "Could not fetch details right now. Enter the figures yourself.",
    noReports: "The KVK has no annual accounts as open data for this number. Enter the figures yourself or upload the annual accounts as PDF:",
    fetchedSrc: "From the KVK open dataset of annual accounts (EUR thousands). The figures are filled in in the next step.", ebitL: "Operating result",
    nlSbi: c => `Main activity (SBI): ${c}.`, nlOp: "Operating result", nlPbt: "Result before tax", nlNet: "Result after tax", nlGross: "Gross margin", nlEq: "Equity", nlAssets: "Total assets", nlLiab: "Liabilities",
    nlNote: "The KVK publishes only what the company filed. Small companies often file only an abridged balance sheet without revenue or profit; enter those yourself in the next step. Where a result is available, the operating result (or result before tax) is in the EBITDA fields for now; add depreciation.",
    nlOnlyBalance: "Only a balance sheet has been filed. A valuation rests on revenue and earnings, so we cannot value the company from a balance sheet alone. Enter revenue and EBITDA from the full accounts prepared by your accountant.", nlNoPlH: "No valuation yet: revenue and earnings are missing", nlNoPlBtn: "Enter revenue and EBITDA →",
    nlFind: q => `Find the KVK number of “${q}”:`, nlOnKvk: "Search on kvk.nl ↗ (the name is copied, paste it there)", nlOnWeb: "Search with Google ↗", nlPaste: "Copy the KVK number (8 digits), paste it here and click Start.",
    nlBusy: "The KVK allows only one request per minute. Try again in a minute, or enter the figures yourself.",
    manualUp: "Don't have the KVK number to hand? Enter the figures yourself", addUp: "Also upload the full annual accounts (PDF) so the adviser sees depreciation and debt",
    prices: ["EUR 490", "EUR 1,190"], vat: "excl. VAT", oOrg: "KVK number",
    oFine: "No payment now. An invoice is sent with the report, payable within 10 days. Prices excl. VAT; Dutch VAT-registered businesses account for the VAT (reverse charge).", oPayV: "Invoice, 10 days, excl. VAT",
    rateLbl: r => `Interest rates (ECB deposit rate ${r}%)`,
    rateLine: (r, src, dt, adj, ref) => `The multiples are adjusted for interest rates: the ECB deposit facility rate is ${r}% (${dt}). ` + (adj ? `Compared with a normal level of ${ref}%, that gives ${adj} on the multiple.` : `That is close to a normal level of ${ref}% and does not affect the multiple.`),
    rateFree: r => `The multiples are adjusted for interest rates (ECB deposit rate ${r}%).`,
    s2PManual: "Enter revenue and EBITDA for the last three years in EUR thousands and answer the buyer's questions.",
    s2PAuto: "Green fields come from the KVK; check the yellow ones. Add any missing revenue and EBITDA (small companies often file only a balance sheet) and answer the buyer's questions.", keyGreen: "From the KVK", keyYellow: "Please check",
    advP: "Budgeted revenue in EUR thousands for the next three years, expected EBITDA margin in year 3 and required return. Gives a growth valuation in the report.", emailPh: "you@company.nl",
    badTypeAnnual: "Upload the annual accounts as PDF (or as an image if you only have a scanned copy).",
    discSrc: "Figures come from the open dataset of filed annual accounts of the Netherlands Chamber of Commerce (KVK, CC BY 4.0). It holds only what the company filed; small companies often file only an abridged balance sheet. We do not verify the information. Always compare with the company's annual accounts.",
    discMult: "The industry multiples come from a survey of Nordic deals (Dealsuite) and are raised by 10% for the Netherlands based on Adsco's assessment of the larger and more liquid Dutch M&A market. The adjustment is shown separately in the multiple bridge."
  },
  SE: {
    heroP: "Gratis indikativ värdering på cirka tre minuter. Vi hämtar det deponerade bokslutet från den nederländska handelskammaren (KVK), du fyller i det som saknas och svarar på sju frågor och får värdeintervall, exitpoäng och de åtgärder som höjer värdet mest.",
    heroFit: "Byggt för små och medelstora bolag med en omsättning upp till cirka 45 miljoner euro. Större bolag och koncerner värderas bäst i ett samtal med en partner.",
    step1: "Ange KVK-numret så hämtar vi det deponerade bokslutet, eller fyll i omsättning och EBITDA i tusen euro.", legFin: "Siffror (tusen EUR)",
    dropTitle: "Ladda upp årsredovisningen (PDF)", dropSub: "En rådgivare går igenom den när du beställer rapporten. Dra filen hit eller klicka för att välja.",
    s1P: "Ange KVK-numret (8 siffror). Vi hämtar det senast deponerade bokslutet ur KVK:s öppna data och fyller i siffrorna åt dig. Små bolag deponerar ofta bara en balansräkning; fyll då själv i omsättning och resultat.",
    nav1s: "KVK-nummer och siffror",
    how: [["Ange KVK-numret", "Vi hämtar det senast deponerade bokslutet från KVK och fyller i siffrorna."], ["Få resultatet direkt", "Värdeintervall, exitpoäng och de viktigaste åtgärderna."]],
    orgL: "KVK-nummer eller företagsnamn", orgPh: "12345678 eller företagsnamn",
    srchNone: "Sökning på namn finns ännu inte för nederländska bolag. Ange KVK-numret (finns på kvk.nl eller på bolagets fakturor).", srchShort: "Skriv minst tre bokstäver av namnet eller ange KVK-numret (8 siffror).",
    orgEmpty: "Ange KVK-numret först.", orgBad: "Kontrollera KVK-numret (8 siffror, t.ex. 12345678).", orgNotFound: "KVK har inget deponerat bokslut som öppna data för det numret.", orgFail: "Kunde inte hämta uppgifter just nu. Fyll i siffrorna själv.",
    noReports: "KVK har inget bokslut som öppna data för det numret. Fyll i siffrorna själv eller ladda upp årsredovisningen som PDF:",
    fetchedSrc: "Från KVK:s öppna data över deponerade bokslut (tusen EUR). Siffrorna är ifyllda i nästa steg.", ebitL: "Rörelseresultat",
    nlSbi: c => `Huvudverksamhet (SBI): ${c}.`, nlOp: "Rörelseresultat", nlPbt: "Resultat före skatt", nlNet: "Resultat efter skatt", nlGross: "Bruttomarginal", nlEq: "Eget kapital", nlAssets: "Balansomslutning", nlLiab: "Skulder",
    nlNote: "KVK publicerar bara det bolaget har deponerat. Små bolag lämnar ofta bara en förkortad balansräkning utan omsättning och resultat; fyll då i dem själv i nästa steg. Där ett resultat finns ligger rörelseresultatet (eller resultat före skatt) tills vidare i EBITDA-fälten; lägg till avskrivningarna.",
    nlOnlyBalance: "Bara en balansräkning är inlämnad. En värdering bygger på omsättning och resultat, så vi kan inte värdera bolaget utifrån enbart en balansräkning. Fyll i omsättning och EBITDA ur revisorns fullständiga bokslut.", nlNoPlH: "Ingen värdering ännu: omsättning och resultat saknas", nlNoPlBtn: "Fyll i omsättning och EBITDA →",
    nlFind: q => `Hitta KVK-numret för ”${q}”:`, nlOnKvk: "Sök på kvk.nl ↗ (namnet kopieras, klistra in det där)", nlOnWeb: "Sök med Google ↗", nlPaste: "Kopiera KVK-numret (8 siffror), klistra in det här och klicka på Starta.",
    nlBusy: "KVK tillåter bara en förfrågan per minut. Försök igen om en minut eller fyll i siffrorna själv.",
    manualUp: "Har du inte KVK-numret till hands? Fyll i siffrorna själv", addUp: "Ladda även upp hela årsredovisningen (PDF) så att rådgivaren ser avskrivningar och skulder",
    prices: ["490 EUR", "1 190 EUR"], vat: "exkl. moms", oOrg: "KVK-nummer",
    oFine: "Ingen betalning nu. Faktura skickas med rapporten, 10 dagar. Priser exkl. moms; för nederländska momsregistrerade företag gäller omvänd skattskyldighet.", oPayV: "Faktura, 10 dagar, exkl. moms",
    rateLbl: r => `Räntor (ECB:s inlåningsränta ${r} %)`,
    rateLine: (r, src, dt, adj, ref) => `Multiplarna justeras för räntenivån: ECB:s inlåningsränta är ${r} % (${dt}). ` + (adj ? `Jämfört med en normal nivå på ${ref} % ger det ${adj} på multipeln.` : `Det ligger nära en normal nivå på ${ref} % och påverkar inte multipeln.`),
    rateFree: r => `Multiplarna justeras för räntenivån (ECB:s inlåningsränta ${r} %).`,
    s2PManual: "Fyll i omsättning och EBITDA för de senaste tre åren i tusen euro och svara på köparens frågor.",
    s2PAuto: "Gröna fält kommer från KVK; kontrollera de gula. Fyll i omsättning och EBITDA som saknas (små bolag deponerar ofta bara en balansräkning) och svara på köparens frågor.", keyGreen: "Från KVK", keyYellow: "Kontrollera",
    advP: "Budgeterad omsättning i tusen euro för tre år, förväntad EBITDA-marginal år 3 och avkastningskrav. Ger en tillväxtvärdering i rapporten.", emailPh: "du@foretag.nl",
    badTypeAnnual: "Ladda upp årsredovisningen som PDF (eller som bild om du bara har en skannad kopia).",
    discSrc: "Siffrorna kommer från den nederländska handelskammarens (KVK) öppna data över deponerade bokslut (CC BY 4.0). Den innehåller bara det bolaget har deponerat; små bolag lämnar ofta bara en förkortad balansräkning. Vi kontrollerar inte uppgifterna. Jämför alltid med bolagets årsredovisning.",
    discMult: "Branschmultiplarna kommer från en undersökning av nordiska affärer (Dealsuite) och höjs med 10 % för Nederländerna enligt Adscos bedömning av den större och likvidare nederländska M&A-marknaden. Justeringen visas separat i multipelbryggan."
  },
  NO: {
    heroP: "Gratis indikativ verdivurdering på omtrent tre minutter. Vi henter det deponerte regnskapet fra det nederlandske handelskammeret (KVK), du fyller inn det som mangler og svarer på sju spørsmål, og får verdiintervall, exit-poeng og tiltakene som øker verdien mest.",
    heroFit: "Laget for små og mellomstore selskaper med omsetning opp til rundt 45 millioner euro. Større selskaper og konsern verdsettes best i en samtale med en partner.",
    step1: "Oppgi KVK-nummeret så henter vi det deponerte regnskapet, eller fyll inn omsetning og EBITDA i tusen euro.", legFin: "Tall (tusen EUR)",
    dropTitle: "Last opp årsregnskapet (PDF)", dropSub: "En rådgiver går gjennom det når du bestiller rapporten. Dra filen hit eller klikk for å velge.",
    s1P: "Oppgi KVK-nummeret (8 sifre). Vi henter det sist deponerte regnskapet fra KVKs åpne data og fyller inn tallene for deg. Små selskaper deponerer ofte bare en balanse; fyll da inn omsetning og resultat selv.",
    nav1s: "KVK-nummer og tall",
    how: [["Oppgi KVK-nummeret", "Vi henter det sist deponerte regnskapet fra KVK og fyller inn tallene."], ["Få resultatet med en gang", "Verdiintervall, exit-poeng og de viktigste tiltakene."]],
    orgL: "KVK-nummer eller selskapsnavn", orgPh: "12345678 eller selskapsnavn",
    srchNone: "Søk på navn finnes ennå ikke for nederlandske selskaper. Oppgi KVK-nummeret (står på kvk.nl eller på selskapets fakturaer).", srchShort: "Skriv minst tre bokstaver av navnet eller oppgi KVK-nummeret (8 sifre).",
    orgEmpty: "Oppgi KVK-nummeret først.", orgBad: "Kontroller KVK-nummeret (8 sifre, f.eks. 12345678).", orgNotFound: "KVK har ikke noe deponert regnskap som åpne data for dette nummeret.", orgFail: "Kunne ikke hente opplysninger nå. Fyll inn tallene selv.",
    noReports: "KVK har ikke noe regnskap som åpne data for dette nummeret. Fyll inn tallene selv eller last opp årsregnskapet som PDF:",
    fetchedSrc: "Fra KVKs åpne data over deponerte regnskap (tusen EUR). Tallene er fylt inn i neste steg.", ebitL: "Driftsresultat",
    nlSbi: c => `Hovedvirksomhet (SBI): ${c}.`, nlOp: "Driftsresultat", nlPbt: "Resultat før skatt", nlNet: "Resultat etter skatt", nlGross: "Bruttomargin", nlEq: "Egenkapital", nlAssets: "Sum eiendeler", nlLiab: "Gjeld",
    nlNote: "KVK publiserer bare det selskapet har deponert. Små selskaper leverer ofte bare en forkortet balanse uten omsetning og resultat; fyll da inn disse selv i neste steg. Der et resultat finnes, står driftsresultatet (eller resultat før skatt) foreløpig i EBITDA-feltene; legg til avskrivningene.",
    nlOnlyBalance: "Bare en balanse er levert. En verdsettelse bygger på omsetning og resultat, så vi kan ikke verdsette selskapet ut fra bare en balanse. Fyll inn omsetning og EBITDA fra revisors fullstendige regnskap.", nlNoPlH: "Ingen verdsettelse ennå: omsetning og resultat mangler", nlNoPlBtn: "Fyll inn omsetning og EBITDA →",
    nlFind: q => `Finn KVK-nummeret til «${q}»:`, nlOnKvk: "Søk på kvk.nl ↗ (navnet kopieres, lim det inn der)", nlOnWeb: "Søk med Google ↗", nlPaste: "Kopier KVK-nummeret (8 sifre), lim det inn her og klikk på Start.",
    nlBusy: "KVK tillater bare én forespørsel per minutt. Prøv igjen om et minutt, eller fyll inn tallene selv.",
    manualUp: "Har du ikke KVK-nummeret for hånden? Fyll inn tallene selv", addUp: "Last også opp hele årsregnskapet (PDF) så rådgiveren ser avskrivninger og gjeld",
    prices: ["490 EUR", "1 190 EUR"], vat: "eks. mva.", oOrg: "KVK-nummer",
    oFine: "Ingen betaling nå. Faktura sendes med rapporten, 10 dager. Priser eks. mva.; for nederlandske mva-registrerte foretak gjelder omvendt avgiftsplikt.", oPayV: "Faktura, 10 dager, eks. mva.",
    rateLbl: r => `Renter (ECBs innskuddsrente ${r} %)`,
    rateLine: (r, src, dt, adj, ref) => `Multiplene justeres for rentenivået: ECBs innskuddsrente er ${r} % (${dt}). ` + (adj ? `Sammenlignet med et normalt nivå på ${ref} % gir det ${adj} på multippelen.` : `Det er nær et normalt nivå på ${ref} % og påvirker ikke multippelen.`),
    rateFree: r => `Multiplene justeres for rentenivået (ECBs innskuddsrente ${r} %).`,
    s2PManual: "Fyll inn omsetning og EBITDA for de siste tre årene i tusen euro og svar på kjøperens spørsmål.",
    s2PAuto: "Grønne felt kommer fra KVK; kontroller de gule. Fyll inn omsetning og EBITDA som mangler (små selskaper deponerer ofte bare en balanse) og svar på kjøperens spørsmål.", keyGreen: "Fra KVK", keyYellow: "Kontroller",
    advP: "Budsjettert omsetning i tusen euro for tre år, forventet EBITDA-margin år 3 og avkastningskrav. Gir en vekstverdivurdering i rapporten.", emailPh: "deg@selskap.nl",
    badTypeAnnual: "Last opp årsregnskapet som PDF (eller som bilde hvis du bare har en skannet kopi).",
    discSrc: "Tallene kommer fra det nederlandske handelskammerets (KVK) åpne data over deponerte regnskap (CC BY 4.0). De inneholder bare det selskapet har deponert; små selskaper leverer ofte bare en forkortet balanse. Vi kontrollerer ikke opplysningene. Sammenlign alltid med selskapets årsregnskap.",
    discMult: "Bransjemultiplene kommer fra en undersøkelse av nordiske transaksjoner (Dealsuite) og er justert opp 10 % for Nederland etter Adscos vurdering av det større og mer likvide nederlandske M&A-markedet. Justeringen vises separat i multippelbroen."
  }
};

/* Dutch for Swedish and Norwegian companies (registers, currency, prices and rates of those countries) */
XK.SN.NL = cc => {
  const S = cc === "SE", CUR = S ? "SEK" : "NOK", K = "duizend " + CUR, REG = S ? "Bolagsverket (het Zweedse handelsregister)" : "Brønnøysundregistrene (het Noorse register)";
  const cb = src => /riksbank/i.test(src || "") ? "Riksbank" : "Norges Bank";
  return {
    heroP: "Een gratis indicatieve waardering in ongeveer drie minuten. We halen de jaarrekeningen voor u op, u beantwoordt zeven vragen en krijgt een waardebandbreedte, een exit-score en de acties die de waarde het meest verhogen.",
    heroFit: "Gemaakt voor het mkb met een omzet tot ongeveer 500 miljoen " + CUR + ". Grotere bedrijven waardeert u het best in een gesprek met een partner.",
    step1: "Upload de jaarrekeningen (PDF) of vul omzet en EBITDA in " + K + " in.", legFin: "Cijfers (" + K + ")",
    dropTitle: "Upload de jaarrekeningen (PDF)", dropSub: "We lezen omzet, EBITDA, liquide middelen, schulden en het directeurssalaris tot drie jaar terug. Sleep het bestand hierheen of klik.",
    s1P: "Voer het organisatienummer in; we halen de jaarrekeningen op bij " + REG + " en vullen de cijfers in. Lukt dat niet, upload ze dan als PDF.",
    nav1s: "Organisatienummer en jaarrekeningen", slotEmpty: "Kies een PDF of sleep die hierheen",
    how: [["Voer het organisatienummer of de bedrijfsnaam in", "We halen de jaarrekeningen op. U kunt ze ook als PDF uploaden voor een scherpere analyse."], ["Direct het resultaat", "Waardebandbreedte, score voor verkoopgereedheid en de belangrijkste acties."]],
    orgL: "Organisatienummer of naam", orgPh: S ? "556677-8899 of Bedrijf AB" : "912 345 678 of Bedrijf AS",
    srchNone: "Geen bedrijf met die naam gevonden. Probeer een andere naam of voer het organisatienummer in.", srchShort: "Typ ten minste drie letters van de naam.",
    orgEmpty: "Voer eerst het organisatienummer in.", orgBad: S ? "Controleer het organisatienummer (10 cijfers, bijv. 556677-8899)." : "Controleer het organisatienummer (9 cijfers, bijv. 912 345 678).",
    orgNotFound: "Geen bedrijf met dat nummer gevonden.", orgFail: "De gegevens konden nu niet worden opgehaald. Ga verder door de jaarrekeningen te uploaden.",
    orgFound: (n, y) => `${n}: cijfers over ${y} opgehaald.`,
    noBV: "We vonden geen digitale jaarrekeningen van het bedrijf. Upload de laatste jaarrekeningen als PDF (het liefst 3–5 jaar):",
    repLoadingBV: "Jaarrekeningen worden opgehaald…", repSavedBV: n => `${n} jaarrekeningen opgehaald en opgeslagen:`, repItem: y => `Jaarrekening ${y}`, repLoading: "Alle jaarrekeningen worden opgehaald…", repSaved: n => `${n} jaarrekeningen opgehaald:`,
    upAskNO: "Het register geeft alleen kerncijfers. Upload de laatste drie jaarrekeningen als PDF voor een scherpere analyse:",
    noReports: "De jaarrekeningen van het bedrijf konden niet automatisch worden gevonden. Upload de laatste drie jaarrekeningen hier als PDF:",
    fetchedSrc: "Uit " + REG + " (" + K + "). De cijfers zijn in de volgende stap ingevuld.", fetchedSrcAB: "Uit jaarrekeningen gedeponeerd bij Bolagsverket (duizend SEK). De cijfers zijn in de volgende stap ingevuld.", fetchedGroup: "Geconsolideerde cijfers.",
    pdfLink: S ? "Download de jaarrekeningen als PDF via Allabolag en upload ze hier →" : "Open de jaarrekeningen →", ebitL: "Bedrijfsresultaat (EBIT)",
    manualUp: "Geen nummer bij de hand? Upload de jaarrekeningen direct", addUp: "Upload ook de jaarrekeningen als PDF (afschrijvingen en schulden)",
    prices: S ? ["2 995 SEK", "6 995 SEK"] : ["2 995 NOK", "6 995 NOK"], vat: "excl. btw", oOrg: "Organisatienummer",
    oFine: S ? "U betaalt nu niets. De factuur wordt met het rapport meegestuurd, 10 dagen. Btw wordt toegevoegd." : "U betaalt nu niets. De factuur wordt met het rapport meegestuurd, 10 dagen, excl. btw.", oPayV: S ? "Factuur, 10 dagen + btw" : "Factuur, 10 dagen, excl. btw",
    rateLbl: r => `Rente (beleidsrente ${cb()} ${r}%)`,
    rateLine: (r, src, dt, adj, ref) => `De multiples worden gecorrigeerd voor het renteniveau: de beleidsrente van de ${cb(src)} is ${r}% (${dt}). ` + (adj ? `Ten opzichte van een normaal niveau van ${ref}% geeft dat ${adj} op de multiple.` : `Dat ligt dicht bij een normaal niveau van ${ref}% en heeft geen invloed op de multiple.`),
    rateFree: (r, src) => `De multiples worden gecorrigeerd voor het renteniveau (beleidsrente ${cb(src)} ${r}%).`,
    bSrc: b => S ? `Statistics Sweden (SCB) ${b.year} · ${b.code} ${b.label} · ${Number(b.n).toLocaleString("nl-NL")} bedrijven` : `Statistics Norway (SSB) ${b.year} · ${b.code} ${b.label} · ${Number(b.n).toLocaleString("nl-NL")} bedrijven`,
    cycLine: (c, v, adj) => (c.src === "SSB" ? `Conjunctuurindicator van het Noorse statistiekbureau (${c.label.toLowerCase()}), ${c.period}: ${v}. ` : `Conjunctuurbarometer van het Zweedse economische instituut (${c.label.toLowerCase()}), ${c.period}: ${v} (normaal 100). `) + (adj ? `Dat geeft ${adj} op de multiple.` : "Dat heeft geen invloed op de multiple."),
    cycFree: c => `Bron: ${c.src === "SSB" ? "het Noorse statistiekbureau" : "het Zweedse economische instituut"} (${c.label.toLowerCase()}). De waarde van de indicator en het effect op de multiple staan in het rapport.`,
    arSrcBV: "We hebben het bestuursverslag, de toelichting en de controleverklaring uit " + REG + " gelezen. Risicosignalen tellen mee in de waardering.",
    s2PManual: "Vul omzet en EBITDA van de afgelopen drie jaar in " + K + " in en beantwoord de vragen van de koper.",
    s2PAuto: "Groene velden zijn uit de jaarrekeningen gelezen. Corrigeer wat niet klopt, vul aan wat ontbreekt en beantwoord de vragen van de koper.", keyGreen: "Uit de jaarrekening",
    advP: "Gebudgetteerde omzet in " + K + " voor drie jaar, verwachte EBITDA-marge in jaar 3 en gevraagd rendement. Geeft een groeiwaardering in het rapport.", emailPh: S ? "u@bedrijf.se" : "u@bedrijf.no",
    badTypeAnnual: "Upload de jaarrekeningen als PDF (of als afbeelding als u alleen een scan heeft).",
    discSrc: "Gegevens en jaarrekeningen komen uit openbare registers en diensten (in Zweden Bolagsverket en Allabolag/UC AB, in Noorwegen Brønnøysundregistrene) of van u. Het lezen gebeurt automatisch en kan onjuist of onvolledig zijn. We controleren de gegevens niet. Vergelijk altijd met de jaarrekening van het bedrijf.", discMult: null
  };
};

/* ---------- Finland in other languages, and Finnish for Swedish and Norwegian companies ----------
   Loaded after texts_x.js. Polish, Lithuanian and Dutch on a Finnish company use the English country texts (see uiFor). */
XK.FI = {
  EN: {
    heroP: "A free indicative valuation in about three minutes. We fetch the company's details and its digital financial statements from the Finnish Patent and Registration Office (PRH), you answer seven questions, and you get a value range, an exit readiness score and the actions that raise the value most.",
    heroFit: "Built for small and medium-sized companies with revenue up to about EUR 45 million. Larger companies and groups are best valued in a conversation with a partner.",
    step1: "Type the company name or business ID and we fetch the financial statements from PRH, or enter revenue and EBITDA in EUR thousands.", legFin: "Figures (EUR thousands)",
    dropTitle: "Upload the financial statements (PDF)", dropSub: "An adviser reviews them when you order the report. Drag the file here or click to choose.",
    s1P: "Type the company name or business ID (Y-tunnus). We fetch the company from PRH's open data and fill in the figures from its digital financial statements, if it has filed them digitally. Otherwise you enter the figures yourself.",
    nav1s: "Name or business ID",
    how: [["Type the name or business ID", "We fetch the company and its digital financial statements from PRH's open data."], ["Get the result straight away", "Value range, exit readiness score and the most important actions."]],
    orgL: "Company name or business ID", orgPh: "1234567-8 or company name",
    srchNone: "No company found with that name. Try another name or enter the business ID.", srchShort: "Type at least three letters of the name, or the business ID.",
    orgEmpty: "Enter the company name or business ID first.", orgBad: "Check the business ID (8 digits, for example 1234567-8).", orgNotFound: "No company found with that business ID.", orgFail: "Could not fetch details right now. Enter the figures yourself.",
    noReports: "We could not find the company's figures automatically. Enter them yourself or upload the financial statements as PDF:",
    fetchedSrc: "From PRH's open data, digital financial statements (EUR thousands). The figures are filled in in the next step.", ebitL: "Operating profit",
    fiOp: "Operating profit", fiDep: "Depreciation", fiNet: "Profit for the year", fiEq: "Equity", fiCash: "Cash and bank", fiDebt: "Loans from credit institutions", fiTol: c => `Main line of business (TOL 2008): ${c}.`,
    fiNote: "EBITDA = operating profit + depreciation from the financial statements. Check the figures in the next step and add one-off items and the owner's salary.",
    fiSrcNoFig: "From the Finnish Business Information System (YTJ).",
    fiNoDigital: "The company was found, but PRH's open data has no financial statements for it: it only holds statements filed digitally (iXBRL), and most companies file a PDF. Upload the financial statements as PDF and we read the figures automatically, or enter revenue and EBITDA yourself:",
    fiOnlyBalance: "The digital financial statements contain only a balance sheet. A valuation rests on revenue and earnings, so we cannot value the company from a balance sheet alone. Enter revenue and EBITDA from the full accounts.",
    nlNoPlH: "No valuation yet: revenue and earnings are missing", nlNoPlBtn: "Enter revenue and EBITDA →", nlOnlyBalance: "A valuation rests on revenue and earnings. Enter revenue and EBITDA from the full accounts.",
    manualUp: "Don't have the business ID to hand? Enter the figures yourself", addUp: "Also upload the financial statements (PDF) so the adviser sees all notes",
    prices: ["EUR 490", "EUR 1,190"], vat: "excl. VAT", oOrg: "Business ID",
    oFine: "No payment now. An invoice is sent with the report, payable within 10 days. Prices excl. VAT; Finnish VAT-registered businesses account for the VAT (reverse charge).", oPayV: "Invoice, 10 days, excl. VAT",
    rateLbl: r => `Interest rates (ECB deposit rate ${r}%)`,
    rateLine: (r, src, dt, adj, ref) => `The multiples are adjusted for interest rates: the ECB deposit facility rate is ${r}% (${dt}). ` + (adj ? `Compared with a normal level of ${ref}%, that gives ${adj} on the multiple.` : `That is close to a normal level of ${ref}% and does not affect the multiple.`),
    rateFree: r => `The multiples are adjusted for interest rates (ECB deposit rate ${r}%).`,
    s2PManual: "Enter revenue and EBITDA for the last three years in EUR thousands and answer the buyer's questions.",
    s2PAuto: "Green fields come from the digital financial statements at PRH. Correct anything that looks wrong, fill in what is missing and answer the buyer's questions.", keyGreen: "From PRH", keyYellow: "Please check",
    advP: "Budgeted revenue in EUR thousands for the next three years, expected EBITDA margin in year 3 and required return. Gives a growth valuation in the report.", emailPh: "you@company.fi",
    badTypeAnnual: "Upload the financial statements as PDF (or as an image if you only have a scanned copy).",
    discSrc: "Company details and digital financial statements come from the open data of the Finnish Patent and Registration Office (YTJ and XBRL financial statements, CC BY 4.0). Only statements filed digitally are available. We do not verify the information. Always compare with the company's financial statements.",
    discMult: "The industry multiples come from a survey of Nordic deals (Dealsuite), which includes Finland, so no country adjustment is made."
  },
  SE: {
    heroP: "Gratis indikativ värdering på cirka tre minuter. Vi hämtar bolagets uppgifter och digitala bokslut från finska Patent- och registerstyrelsen (PRH), du svarar på sju frågor och får värdeintervall, exitpoäng och de åtgärder som höjer värdet mest.",
    heroFit: "Byggt för små och medelstora bolag med en omsättning upp till cirka 45 miljoner euro. Större bolag och koncerner värderas bäst i ett samtal med en partner.",
    step1: "Skriv företagsnamnet eller FO-numret så hämtar vi bokslutet från PRH, eller fyll i omsättning och EBITDA i tusen euro.", legFin: "Siffror (tusen EUR)",
    dropTitle: "Ladda upp bokslutet (PDF)", dropSub: "En rådgivare går igenom det när du beställer rapporten. Dra filen hit eller klicka för att välja.",
    s1P: "Skriv företagsnamnet eller FO-numret (Y-tunnus). Vi hämtar bolaget ur PRH:s öppna data och fyller i siffrorna från det digitala bokslutet, om bolaget lämnat in ett sådant. Annars fyller du i siffrorna själv.",
    nav1s: "Namn eller FO-nummer",
    how: [["Skriv namnet eller FO-numret", "Vi hämtar bolaget och dess digitala bokslut ur PRH:s öppna data."], ["Få resultatet direkt", "Värdeintervall, exitpoäng och de viktigaste åtgärderna."]],
    orgL: "Företagsnamn eller FO-nummer", orgPh: "1234567-8 eller företagsnamn",
    srchNone: "Inget bolag hittades med det namnet. Prova ett annat namn eller ange FO-numret.", srchShort: "Skriv minst tre bokstäver av namnet, eller FO-numret.",
    orgEmpty: "Ange företagsnamnet eller FO-numret först.", orgBad: "Kontrollera FO-numret (8 siffror, t.ex. 1234567-8).", orgNotFound: "Inget bolag hittades med det FO-numret.", orgFail: "Kunde inte hämta uppgifter just nu. Fyll i siffrorna själv.",
    noReports: "Vi hittade inte bolagets siffror automatiskt. Fyll i dem själv eller ladda upp bokslutet som PDF:",
    fetchedSrc: "Från PRH:s öppna data, digitalt bokslut (tusen EUR). Siffrorna är ifyllda i nästa steg.", ebitL: "Rörelseresultat",
    fiOp: "Rörelseresultat", fiDep: "Avskrivningar", fiNet: "Årets resultat", fiEq: "Eget kapital", fiCash: "Kassa och bank", fiDebt: "Lån från kreditinstitut", fiTol: c => `Huvudbransch (TOL 2008): ${c}.`,
    fiNote: "EBITDA = rörelseresultat + avskrivningar ur bokslutet. Kontrollera siffrorna i nästa steg och lägg till engångsposter och ägarens lön.",
    fiSrcNoFig: "Från finska företags- och organisationsdatasystemet (YTJ).",
    fiNoDigital: "Bolaget hittades, men PRH:s öppna data har inget bokslut för det: där finns bara bokslut som lämnats digitalt (iXBRL), och de flesta bolag lämnar in en PDF. Ladda upp bokslutet som PDF så läser vi siffrorna automatiskt, eller fyll i omsättning och EBITDA själv:",
    fiOnlyBalance: "Det digitala bokslutet innehåller bara en balansräkning. En värdering bygger på omsättning och resultat, så vi kan inte värdera bolaget utifrån enbart en balansräkning. Fyll i omsättning och EBITDA ur det fullständiga bokslutet.",
    nlNoPlH: "Ingen värdering ännu: omsättning och resultat saknas", nlNoPlBtn: "Fyll i omsättning och EBITDA →", nlOnlyBalance: "En värdering bygger på omsättning och resultat. Fyll i omsättning och EBITDA ur det fullständiga bokslutet.",
    manualUp: "Har du inte FO-numret till hands? Fyll i siffrorna själv", addUp: "Ladda även upp bokslutet (PDF) så att rådgivaren ser alla noter",
    prices: ["490 €", "1 190 €"], vat: "exkl. moms", oOrg: "FO-nummer",
    oFine: "Ingen betalning nu. Faktura skickas med rapporten, 10 dagar. Priser exkl. moms; finska momsregistrerade företag redovisar momsen (omvänd skattskyldighet).", oPayV: "Faktura, 10 dagar, exkl. moms",
    rateLbl: r => `Räntor (ECB:s inlåningsränta ${r} %)`,
    rateLine: (r, src, dt, adj, ref) => `Multiplarna justeras för räntenivån: ECB:s inlåningsränta är ${r} % (${dt}). ` + (adj ? `Jämfört med en normal nivå på ${ref} % ger det ${adj} på multipeln.` : `Det ligger nära en normal nivå på ${ref} % och påverkar inte multipeln.`),
    rateFree: r => `Multiplarna justeras för räntenivån (ECB:s inlåningsränta ${r} %).`,
    s2PManual: "Fyll i omsättning och EBITDA för de tre senaste åren i tusen euro och svara på köparens frågor.",
    s2PAuto: "Gröna fält kommer från det digitala bokslutet hos PRH. Rätta det som ser fel ut, fyll i det som saknas och svara på köparens frågor.", keyGreen: "Från PRH", keyYellow: "Kontrollera",
    advP: "Budgeterad omsättning i tusen euro för tre år, förväntad EBITDA-marginal år 3 och avkastningskrav. Ger en tillväxtvärdering i rapporten.", emailPh: "du@foretag.fi",
    badTypeAnnual: "Ladda upp bokslutet som PDF (eller som bild om du bara har en skannad kopia).",
    discSrc: "Bolagsuppgifter och digitala bokslut kommer från finska Patent- och registerstyrelsens öppna data (YTJ och XBRL-bokslut, CC BY 4.0). Bara digitalt inlämnade bokslut finns tillgängliga. Vi kontrollerar inte uppgifterna. Jämför alltid med bolagets bokslut.",
    discMult: "Branschmultiplarna kommer från en undersökning av nordiska affärer (Dealsuite), där Finland ingår, så ingen landjustering görs."
  },
  NO: {
    heroP: "Gratis indikativ verdivurdering på omtrent tre minutter. Vi henter selskapets opplysninger og digitale regnskap fra det finske Patent- og registerstyret (PRH), du svarer på sju spørsmål og får et verdiintervall, en exit-score og tiltakene som løfter verdien mest.",
    heroFit: "Laget for små og mellomstore selskaper med omsetning opp til rundt 45 millioner euro. Større selskaper og konsern verdsettes best i en samtale med en partner.",
    step1: "Skriv selskapsnavnet eller organisasjonsnummeret (Y-tunnus), så henter vi regnskapet fra PRH, eller fyll inn omsetning og EBITDA i tusen euro.", legFin: "Tall (tusen EUR)",
    dropTitle: "Last opp regnskapet (PDF)", dropSub: "En rådgiver går gjennom det når du bestiller rapporten. Dra filen hit eller klikk for å velge.",
    s1P: "Skriv selskapsnavnet eller organisasjonsnummeret (Y-tunnus). Vi henter selskapet fra PRHs åpne data og fyller inn tallene fra det digitale regnskapet, hvis selskapet har levert et slikt. Ellers fyller du inn tallene selv.",
    nav1s: "Navn eller organisasjonsnummer",
    how: [["Skriv navnet eller organisasjonsnummeret", "Vi henter selskapet og det digitale regnskapet fra PRHs åpne data."], ["Få resultatet med en gang", "Verdiintervall, exit-score og de viktigste tiltakene."]],
    orgL: "Selskapsnavn eller organisasjonsnummer", orgPh: "1234567-8 eller selskapsnavn",
    srchNone: "Fant ikke noe selskap med det navnet. Prøv et annet navn eller oppgi organisasjonsnummeret.", srchShort: "Skriv minst tre bokstaver av navnet, eller organisasjonsnummeret.",
    orgEmpty: "Oppgi selskapsnavnet eller organisasjonsnummeret først.", orgBad: "Kontroller organisasjonsnummeret (8 sifre, f.eks. 1234567-8).", orgNotFound: "Fant ikke noe selskap med det organisasjonsnummeret.", orgFail: "Kunne ikke hente opplysninger akkurat nå. Fyll inn tallene selv.",
    noReports: "Vi fant ikke selskapets tall automatisk. Fyll dem inn selv eller last opp regnskapet som PDF:",
    fetchedSrc: "Fra PRHs åpne data, digitalt regnskap (tusen EUR). Tallene er fylt inn i neste steg.", ebitL: "Driftsresultat",
    fiOp: "Driftsresultat", fiDep: "Avskrivninger", fiNet: "Årsresultat", fiEq: "Egenkapital", fiCash: "Bankinnskudd og kontanter", fiDebt: "Lån fra kredittinstitusjoner", fiTol: c => `Hovedbransje (TOL 2008): ${c}.`,
    fiNote: "EBITDA = driftsresultat + avskrivninger fra regnskapet. Kontroller tallene i neste steg og legg til engangsposter og eierens lønn.",
    fiSrcNoFig: "Fra det finske foretaks- og organisasjonsregisteret (YTJ).",
    fiNoDigital: "Selskapet ble funnet, men PRHs åpne data har ikke regnskap for det: der ligger bare regnskap levert digitalt (iXBRL), og de fleste selskaper leverer PDF. Last opp regnskapet som PDF, så leser vi tallene automatisk, eller fyll inn omsetning og EBITDA selv:",
    fiOnlyBalance: "Det digitale regnskapet inneholder bare en balanse. En verdsettelse bygger på omsetning og resultat, så vi kan ikke verdsette selskapet ut fra bare en balanse. Fyll inn omsetning og EBITDA fra det fullstendige regnskapet.",
    nlNoPlH: "Ingen verdsettelse ennå: omsetning og resultat mangler", nlNoPlBtn: "Fyll inn omsetning og EBITDA →", nlOnlyBalance: "En verdsettelse bygger på omsetning og resultat. Fyll inn omsetning og EBITDA fra det fullstendige regnskapet.",
    manualUp: "Har du ikke organisasjonsnummeret for hånden? Fyll inn tallene selv", addUp: "Last også opp regnskapet (PDF), så rådgiveren ser alle noter",
    prices: ["490 €", "1 190 €"], vat: "eks. mva.", oOrg: "Organisasjonsnummer",
    oFine: "Ingen betaling nå. Faktura sendes med rapporten, 10 dager. Priser eks. mva.; finske mva.-registrerte foretak beregner mva. selv (omvendt avgiftsplikt).", oPayV: "Faktura, 10 dager, eks. mva.",
    rateLbl: r => `Renter (ECBs innskuddsrente ${r} %)`,
    rateLine: (r, src, dt, adj, ref) => `Multiplene justeres for rentenivået: ECBs innskuddsrente er ${r} % (${dt}). ` + (adj ? `Sammenlignet med et normalt nivå på ${ref} % gir det ${adj} på multippelen.` : `Det er nær et normalt nivå på ${ref} % og påvirker ikke multippelen.`),
    rateFree: r => `Multiplene justeres for rentenivået (ECBs innskuddsrente ${r} %).`,
    s2PManual: "Fyll inn omsetning og EBITDA for de tre siste årene i tusen euro og svar på kjøperens spørsmål.",
    s2PAuto: "Grønne felt kommer fra det digitale regnskapet hos PRH. Rett det som ser feil ut, fyll inn det som mangler og svar på kjøperens spørsmål.", keyGreen: "Fra PRH", keyYellow: "Kontroller",
    advP: "Budsjettert omsetning i tusen euro for tre år, forventet EBITDA-margin år 3 og avkastningskrav. Gir en vekstverdsettelse i rapporten.", emailPh: "deg@selskap.fi",
    badTypeAnnual: "Last opp regnskapet som PDF (eller som bilde hvis du bare har en skannet kopi).",
    discSrc: "Selskapsopplysninger og digitale regnskap kommer fra det finske Patent- og registerstyrets åpne data (YTJ og XBRL-regnskap, CC BY 4.0). Bare digitalt innleverte regnskap er tilgjengelige. Vi kontrollerer ikke opplysningene. Sammenlign alltid med selskapets regnskap.",
    discMult: "Bransjemultiplene kommer fra en undersøkelse av nordiske transaksjoner (Dealsuite), der Finland inngår, så det gjøres ingen landjustering."
  }
};

/* Finnish for Swedish and Norwegian companies (registers, currency, prices and rates of those countries) */
XK.SN.FI = cc => {
  const S = cc === "SE", CUR = S ? "SEK" : "NOK", K = "t " + CUR, REG = S ? "Bolagsverketistä (Ruotsin kaupparekisteri)" : "Brønnøysundregistrenestä (Norjan rekisteri)";
  const cb = src => /riksbank/i.test(src || "") ? "Riksbankin" : "Norges Bankin";
  return {
    heroP: "Maksuton suuntaa antava arvonmääritys noin kolmessa minuutissa. Haemme tilinpäätökset puolestasi, vastaat seitsemään kysymykseen ja saat arvohaarukan, myyntivalmiuspisteet ja toimenpiteet, jotka nostavat arvoa eniten.",
    heroFit: "Tehty pk-yrityksille, joiden liikevaihto on enintään noin 500 miljoonaa " + CUR + ". Suuremmat yritykset arvioidaan parhaiten keskustelussa partnerin kanssa.",
    step1: "Lataa tilinpäätökset (PDF) tai syötä liikevaihto ja EBITDA (" + K + ").", legFin: "Luvut (" + K + ")",
    dropTitle: "Lataa tilinpäätökset (PDF)", dropSub: "Luemme liikevaihdon, EBITDA:n, rahavarat, velat ja toimitusjohtajan palkan enintään kolmelta vuodelta. Vedä tiedosto tähän tai napsauta.",
    s1P: "Kirjoita y-tunnus, niin haemme tilinpäätökset " + REG + " ja täytämme luvut. Jos se ei onnistu, lataa ne PDF-muodossa.",
    nav1s: "Y-tunnus ja tilinpäätökset", slotEmpty: "Valitse PDF tai vedä se tähän",
    how: [["Kirjoita organisaationumero tai yrityksen nimi", "Haemme tilinpäätökset. Voit myös ladata ne PDF-muodossa tarkempaa analyysia varten."], ["Saat tuloksen heti", "Arvohaarukka, myyntivalmiuspisteet ja tärkeimmät toimenpiteet."]],
    orgL: "Y-tunnus tai nimi", orgPh: S ? "556677-8899 tai Yritys AB" : "912 345 678 tai Yritys AS",
    srchNone: "Yritystä ei löytynyt tällä nimellä. Kokeile toista nimeä tai kirjoita y-tunnus.", srchShort: "Kirjoita vähintään kolme kirjainta nimestä.",
    orgEmpty: "Kirjoita ensin y-tunnus.", orgBad: S ? "Tarkista y-tunnus (10 numeroa, esim. 556677-8899)." : "Tarkista y-tunnus (9 numeroa, esim. 912 345 678).",
    orgNotFound: "Yritystä ei löytynyt tällä tunnuksella.", orgFail: "Tietoja ei voitu hakea juuri nyt. Jatka lataamalla tilinpäätökset.",
    orgFound: (n, y) => `${n}: luvut vuodelta ${y} haettu.`,
    noBV: "Emme löytäneet yrityksen digitaalisia tilinpäätöksiä. Lataa viimeisimmät tilinpäätökset PDF-muodossa (mieluiten 3–5 vuotta):",
    repLoadingBV: "Haetaan tilinpäätöksiä…", repSavedBV: n => `${n} tilinpäätöstä haettu ja tallennettu:`, repItem: y => `Tilinpäätös ${y}`, repLoading: "Haetaan kaikkia tilinpäätöksiä…", repSaved: n => `${n} tilinpäätöstä haettu:`,
    upAskNO: "Rekisteri antaa vain tunnusluvut. Lataa kolme viimeisintä tilinpäätöstä PDF-muodossa tarkempaa analyysia varten:",
    noReports: "Yrityksen tilinpäätöksiä ei löytynyt automaattisesti. Lataa kolme viimeisintä tilinpäätöstä tähän PDF-muodossa:",
    fetchedSrc: "Lähde: " + REG.replace("stä", "") + " (" + K + "). Luvut on täytetty seuraavaan vaiheeseen.", fetchedSrcAB: "Bolagsverketiin jätetyistä tilinpäätöksistä (t SEK). Luvut on täytetty seuraavaan vaiheeseen.", fetchedGroup: "Konsernin luvut.",
    pdfLink: S ? "Lataa tilinpäätökset PDF-muodossa Allabolagista ja lataa ne tähän →" : "Avaa tilinpäätökset →", ebitL: "Liikevoitto (EBIT)",
    manualUp: "Eikö tunnusta ole käsillä? Lataa tilinpäätökset suoraan", addUp: "Lataa myös tilinpäätökset PDF-muodossa (poistot ja velat)",
    prices: S ? ["2 995 SEK", "6 995 SEK"] : ["2 995 NOK", "6 995 NOK"], vat: "alv 0 %", oOrg: "Y-tunnus",
    oFine: S ? "Et maksa mitään nyt. Lasku lähetetään raportin mukana, 10 päivää. Ruotsin arvonlisävero lisätään." : "Et maksa mitään nyt. Lasku lähetetään raportin mukana, 10 päivää, ilman arvonlisäveroa.", oPayV: S ? "Lasku, 10 päivää + alv" : "Lasku, 10 päivää, alv 0 %",
    rateLbl: r => `Korot (${cb()} ohjauskorko ${r} %)`,
    rateLine: (r, src, dt, adj, ref) => `Kertoimet oikaistaan korkotason mukaan: ${cb(src)} ohjauskorko on ${r} % (${dt}). ` + (adj ? `Verrattuna normaaliin ${ref} %:n tasoon se antaa kertoimeen ${adj}.` : `Se on lähellä normaalia ${ref} %:n tasoa eikä vaikuta kertoimeen.`),
    rateFree: (r, src) => `Kertoimet oikaistaan korkotason mukaan (${cb(src)} ohjauskorko ${r} %).`,
    bSrc: b => S ? `Statistics Sweden (SCB) ${b.year} · ${b.code} ${b.label} · ${Number(b.n).toLocaleString("fi-FI")} yritystä` : `Statistics Norway (SSB) ${b.year} · ${b.code} ${b.label} · ${Number(b.n).toLocaleString("fi-FI")} yritystä`,
    cycLine: (c, v, adj) => (c.src === "SSB" ? `Norjan tilastokeskuksen suhdanneindikaattori (${c.label.toLowerCase()}), ${c.period}: ${v}. ` : `Ruotsin suhdannelaitoksen suhdannebarometri (${c.label.toLowerCase()}), ${c.period}: ${v} (normaali 100). `) + (adj ? `Se antaa kertoimeen ${adj}.` : "Se ei vaikuta kertoimeen."),
    cycFree: c => `Lähde: ${c.src === "SSB" ? "Norjan tilastokeskus" : "Ruotsin suhdannelaitos"} (${c.label.toLowerCase()}). Indikaattorin arvo ja vaikutus kertoimeen ovat raportissa.`,
    arSrcBV: "Luimme toimintakertomuksen, liitetiedot ja tilintarkastuskertomuksen " + REG + ". Riskisignaalit vaikuttavat arvioon.",
    s2PManual: "Syötä viimeisen kolmen vuoden liikevaihto ja EBITDA (" + K + ") ja vastaa ostajan kysymyksiin.",
    s2PAuto: "Vihreät kentät on luettu tilinpäätöksistä. Korjaa, mikä näyttää väärältä, täydennä puuttuvat tiedot ja vastaa ostajan kysymyksiin.", keyGreen: "Tilinpäätöksestä",
    advP: "Budjetoitu liikevaihto (" + K + ") kolmelle vuodelle, odotettu EBITDA-marginaali vuonna 3 ja tuottovaatimus. Antaa kasvuarvion raporttiin.", emailPh: S ? "sinä@yritys.se" : "sinä@yritys.no",
    badTypeAnnual: "Lataa tilinpäätös PDF-muodossa (tai kuvana, jos sinulla on vain skannaus).",
    discSrc: "Tiedot ja tilinpäätökset tulevat julkisista rekistereistä ja palveluista (Ruotsissa Bolagsverket ja Allabolag/UC AB, Norjassa Brønnøysundregistrene) tai sinulta. Lukeminen on automaattista ja voi olla virheellistä tai puutteellista. Emme tarkista tietoja. Vertaa aina yrityksen tilinpäätökseen.", discMult: null
  };
};

/* ---------- State ---------- */
let lastOrgNumber = null;
let extracted = false;
const U = () => uiFor(lang, country);
const INIT = window.EK_INIT;
const EXAMPLE = {
  industry: "install",
  rev1: 38200, rev2: 42500, rev3: 47900, eb1: 3900, eb2: 4600, eb3: 5400,
  ownsal: 600, mktsal: 1100, oneoff: 300, debt: 4000, cash: 2500,
  topcust: 28, recur: 35, owner: "high", mgmt: "partial", reporting: "annual", contracts: "mixed"
};
const NUM_FIELDS = ["rev1","rev2","rev3","eb1","eb2","eb3","ownsal","mktsal","oneoff","debt","cash"];
const $ = id => document.getElementById(id);
const REF = (() => {
  const d = new Date(), p = n => String(n).padStart(2, "0");
  const abc = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
  let r = ""; const a = new Uint32Array(6); crypto.getRandomValues(a); a.forEach(x => r += abc[x % abc.length]);
  return "EK-" + d.getFullYear() + p(d.getMonth() + 1) + p(d.getDate()) + "-" + r;
})();
let pkg = "report";
const slots = [null, null, null];   // {file, state: busy|ok|manual|err, parsed, uploaded}
const extras = [];                  // {file, state: up|ok|err}
let step = 1, maxStep = 2;

const DRV_ICONS = [
  '<svg viewBox="0 0 34 34" aria-hidden="true"><rect width="34" height="34" rx="9" fill="var(--accent-soft)"/><path d="M9 24l6-6 4 4 7-9" fill="none" stroke="var(--accent)" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/><path d="M21 13h5v5" fill="none" stroke="var(--accent)" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/></svg>',
  '<svg viewBox="0 0 34 34" aria-hidden="true"><rect width="34" height="34" rx="9" fill="var(--brass-soft)"/><circle cx="17" cy="13" r="4.5" fill="none" stroke="var(--brass)" stroke-width="2.2"/><path d="M9 26c1.2-4.6 4.4-7 8-7s6.8 2.4 8 7" fill="none" stroke="var(--brass)" stroke-width="2.2" stroke-linecap="round"/></svg>',
  '<svg viewBox="0 0 34 34" aria-hidden="true"><rect width="34" height="34" rx="9" fill="var(--accent-soft)"/><circle cx="17" cy="17" r="8" fill="none" stroke="var(--accent)" stroke-width="2.2"/><path d="M17 9v8l6 4" fill="none" stroke="var(--accent)" stroke-width="2.2" stroke-linecap="round"/></svg>',
  '<svg viewBox="0 0 34 34" aria-hidden="true"><rect width="34" height="34" rx="9" fill="var(--brass-soft)"/><path d="M11 8h9l4 4v14H11z" fill="none" stroke="var(--brass)" stroke-width="2.2" stroke-linejoin="round"/><path d="M14 17h7M14 21h5" stroke="var(--brass)" stroke-width="2.2" stroke-linecap="round"/></svg>'
];

/* ---------- Language ---------- */
function applyLanguage() {
  /* The page's own explanatory text and FAQ are written in the page's language: hide them when another language is chosen */
  document.querySelectorAll("[data-seo-lang]").forEach(x => { x.hidden = x.dataset.seoLang !== lang; });
  const u = U(), rt = RT();
  document.documentElement.lang = u.html;
  if (typeof renderArNote === "function") renderArNote();
  const sp = { SE: ["/exempelrapport.pdf", "Se en exempelrapport (PDF)"], NO: ["/no/eksempelrapport.pdf", "Se en eksempelrapport (PDF)"], EN: ["/en/sample-report.pdf", "See a sample report (PDF)"], PL: ["/pl/przykladowy-raport.pdf", "Zobacz przykładowy raport (PDF)"], LT: ["/lt/pavyzdine-ataskaita.pdf", "Peržiūrėti ataskaitos pavyzdį (PDF)"], NL: ["/en/sample-report.pdf", "Bekijk een voorbeeldrapport (PDF, Engels)"], FI: ["/en/sample-report.pdf", "Katso esimerkkiraportti (PDF, englanniksi)"] }[lang] || [];
  if ($("hero-trust")) $("hero-trust").innerHTML = (u.heroTrust || []).map(x => "<li>" + x + "</li>").join("");
  const lg = { SE: [["/integritetspolicy/", "Integritetspolicy"], ["/kopvillkor/", "Köpvillkor"]], NO: [["/no/personvern/", "Personvernerklæring"], ["/no/kjopsvilkar/", "Kjøpsvilkår"]], EN: [["/en/privacy/", "Privacy policy"], ["/en/terms/", "Terms of purchase"]], PL: [["/pl/polityka-prywatnosci/", "Polityka prywatności"], ["/pl/regulamin/", "Regulamin zakupu"]], LT: [["/lt/privatumo-politika/", "Privatumo politika"], ["/lt/pirkimo-salygos/", "Pirkimo sąlygos"]], NL: [["/nl/privacybeleid/", "Privacybeleid"], ["/nl/aankoopvoorwaarden/", "Aankoopvoorwaarden"]], FI: [["/fi/tietosuoja/", "Tietosuojaseloste"], ["/fi/ostoehdot/", "Ostoehdot"]] }[lang] || [];
  document.querySelectorAll(".legallinks").forEach(p => { p.innerHTML = lg.map(x => '<a href="https://www.exitkompass.se' + x[0] + '" target="_blank" rel="noopener">' + x[1] + '</a>').join(" · "); });
  document.querySelectorAll(".samplelink").forEach(a => { a.href = "https://www.exitkompass.se" + sp[0]; a.querySelector("span").textContent = sp[1]; });
  $("c-se").setAttribute("aria-pressed", country === "SE");
  $("c-no").setAttribute("aria-pressed", country === "NO");
  $("fl-se").setAttribute("aria-current", country === "SE"); $("fl-no").setAttribute("aria-current", country === "NO");
  $("fl-se").querySelector("span").textContent = u.flSE; $("fl-no").querySelector("span").textContent = u.flNO;
  if ($("fl-pl")) { $("fl-pl").setAttribute("aria-current", country === "PL"); $("fl-pl").querySelector("span").textContent = u.flPL || "Polska"; }
  /* While the Polish version is in review it is reachable only at /pl/ (no links from the other languages) */
  const plHide = !window.EK_PL_PUBLIC && country !== "PL";
  if ($("fl-pl")) $("fl-pl").hidden = plHide;
  document.querySelectorAll('#lang-sel option[value="PL"], .langsw [data-lang="PL"]').forEach(x => { x.hidden = plHide; x.disabled = plHide && x.tagName === "OPTION"; });
  /* Lithuania: same, while in review */
  const ltHide = !window.EK_LT_PUBLIC && country !== "LT";
  if ($("fl-lt")) { $("fl-lt").hidden = ltHide; $("fl-lt").setAttribute("aria-current", country === "LT"); $("fl-lt").querySelector("span").textContent = u.flLT || "Lietuva"; }
  document.querySelectorAll('#lang-sel option[value="LT"], .langsw [data-lang="LT"]').forEach(x => { x.hidden = ltHide; x.disabled = ltHide && x.tagName === "OPTION"; });
  const nlHide = !window.EK_NL_PUBLIC && country !== "NL";
  if ($("fl-nl")) { $("fl-nl").hidden = nlHide; $("fl-nl").setAttribute("aria-current", country === "NL"); $("fl-nl").querySelector("span").textContent = u.flNL || "Nederland"; }
  document.querySelectorAll('#lang-sel option[value="NL"], .langsw [data-lang="NL"]').forEach(x => { x.hidden = nlHide; x.disabled = nlHide && x.tagName === "OPTION"; });
  const fiHide = !window.EK_FI_PUBLIC && country !== "FI";
  if ($("fl-fi")) { $("fl-fi").hidden = fiHide; $("fl-fi").setAttribute("aria-current", country === "FI"); $("fl-fi").querySelector("span").textContent = u.flFI || "Suomi"; }
  document.querySelectorAll('#lang-sel option[value="FI"], .langsw [data-lang="FI"]').forEach(x => { x.hidden = fiHide; x.disabled = fiHide && x.tagName === "OPTION"; });
  $("c-se").textContent = u.flSE + " · SEK"; $("c-no").textContent = u.flNO + " · NOK";
  if ($("lang-sel")) $("lang-sel").value = lang;
  document.querySelectorAll("[data-lang]").forEach(a => a.setAttribute("aria-current", a.dataset.lang === lang ? "true" : "false"));
  document.querySelectorAll("[data-t]").forEach(el => { const v = u[el.dataset.t]; if (typeof v === "string") el.textContent = v; });
  ["owner", "mgmt", "reporting", "contracts"].forEach(id => Array.from($(id).options).forEach((o, i) => o.textContent = u[id][i]));
  const sel = $("industry"), cur = sel.value || "install";
  sel.innerHTML = "";
  for (const k of Object.keys(INDUSTRIES)) { const o = document.createElement("option"); o.value = k; o.textContent = rt.industries[k]; sel.appendChild(o); }
  sel.value = cur;
  ["y1","y2","y3"].forEach((id, i) => $(id).textContent = years[i]);
  [1, 2, 3].forEach(i => { $("rev" + i).setAttribute("aria-label", u.yRev + " " + years[i - 1]); $("eb" + i).setAttribute("aria-label", "EBITDA " + years[i - 1]); });
  $("oneoff-lbl").textContent = u.oneoff(years[2]);
  if (INIT.advisor && $("gp1-l")) ["gp1", "gp2", "gp3"].forEach((id, i) => $(id + "-l").textContent = u.advY(years[2] + i + 1));
  $("how").innerHTML = u.how.map(h => "<li><b>" + h[0] + "</b><span>" + h[1] + "</span></li>").join("");
  $("ticks").innerHTML = u.ticks.map(t => "<li>" + t + "</li>").join("");
  $("tips").innerHTML = u.tips.map((d, i) => '<div class="drv">' + DRV_ICONS[[2, 3, 1][i]] + '<b>' + d[0] + '</b><span>' + d[1] + '</span></div>').join("");
  renderPkgs();
  document.querySelectorAll("[data-disc]").forEach(el => el.innerHTML = u.disc.map(d => "<p><b>" + d[0] + "</b> " + d[1] + "</p>").join(""));
  $("adstats").innerHTML = u.adStats.map(s => '<div class="adstat"><b>' + s[0] + '</b><span>' + s[1] + '</span></div>').join("");
  $("adteam").innerHTML = u.adTeam.map(p => '<div class="adp"><i>' + p[0].split(" ").map(x => x[0]).join("") + '</i><b>' + p[0] + '<small>' + p[1] + '</small></b><span>' + p[2] + '</span></div>').join("");
  $("org").placeholder = u.orgPh;
  $("org-go").className = "btn-primary";
  $("email").placeholder = u.emailPh;
  $("email").setAttribute("aria-label", u.emailPh);
  if ($("lead-email")) { $("lead-email").placeholder = u.emailPh; $("lead-email").setAttribute("aria-label", u.emailPh); }
  $("to3").textContent = u.to3 + " →";
  $("back1").textContent = "← " + u.back1;
  $("back2").textContent = "← " + u.back2;
  $("legendkey").innerHTML = extracted ? '<span><i style="background:var(--good)"></i>' + u.keyGreen + '</span><span><i style="background:var(--warn)"></i>' + u.keyYellow + '</span>' : "";
  $("s2-p").textContent = extracted ? u.s2PAuto : u.s2PManual;
  if ($("plans")) $("plans").innerHTML = u.plans.map((p, i) =>
    '<div class="panel plan' + (i === 1 ? ' featured' : '') + '"><h3>' + p[0] + '</h3><div class="price">' +
    (i === 0 ? u.free : u.prices[i - 1] + ' <small>' + u.vat + '</small>') + '</div><ul>' + p[1].map(x => '<li>' + x + '</li>').join("") + '</ul></div>').join("");
  $("stats").innerHTML = u.stats.map(s => '<div class="stat"><div class="n">' + s[0] + '</div><div class="l">' + s[1] + '</div></div>').join("");
  renderSlots(); renderExtras(); updateDocs();
  document.title = (window.EK_TITLES && window.EK_TITLES[LK()]) || "Exitkompass " + u.by;
}

function setCountry(cc) {
  if (!COUNTRIES[cc] || cc === country) return;
  country = cc;
  applyLanguage();
  if (step === 3) render();
}

/* ---------- Steps ---------- */
function go(n, focus) {
  if (n === 3 && !validate()) return;
  if (n === 3) { maxStep = 3; render(); if (typeof track === "function") track("result", { org: (typeof lastOrgNumber !== "undefined" && lastOrgNumber) || "", val: window.EK_LAST || null }); }
  step = n;
  $("step-o").hidden = true;
  [1, 2, 3].forEach(i => {
    $("step-" + i).hidden = i !== n;
    const b = $("nav-" + i);
    if (i === n) b.setAttribute("aria-current", "step"); else b.removeAttribute("aria-current");
    b.classList.toggle("done", i < n);
    b.disabled = i > maxStep;
  });
  $("step-" + n).scrollTop = 0;
  if (focus !== false) {
    try { $("wizard").scrollIntoView({ behavior: "smooth", block: "start" }); } catch (e) {}
    const h = $("step-" + n).querySelector("h2"); if (h) { h.setAttribute("tabindex", "-1"); h.focus({ preventScroll: true }); }
  }
}
function validate() {
  /* At least one figure is enough: revenue only, earnings only, or both (small Lithuanian and Polish filings often lack one of them) */
  const any = p => [1, 2, 3].some(i => $(p + i).value !== "");
  const okFig = any("rev") || any("eb");
  const req = okFig ? ["topcust", "recur"] : ["rev3", "eb3", "topcust", "recur"];
  ["rev3", "eb3"].forEach(id => $(id).classList.toggle("need", !okFig && $(id).value === ""));
  ["topcust", "recur"].forEach(id => $(id).classList.toggle("need", $(id).value === ""));
  const okQ = $("topcust").value !== "" && $("recur").value !== "";
  const ok = okFig && okQ;
  msg("s2-msg", ok ? "" : (okFig ? U().needQ : U().need), ok ? "" : "err");
  if (!ok) { const f = req.find(id => $(id).value === ""); try { $(f).focus(); $(f).scrollIntoView({ block: "center", behavior: "smooth" }); } catch (e) {} }
  return ok;
}
["topcust", "recur"].forEach(id => $(id).addEventListener("input", () => $(id).classList.remove("need")));
function msg(id, text, kind) { const m = $(id); m.className = "msg" + (kind ? " " + kind : ""); m.textContent = text || ""; }

/* ---------- Form ---------- */
function clearMarks() { NUM_FIELDS.forEach(id => $(id).classList.remove("filled", "missing", "need")); }
function loadExample() {
  years = [2023, 2024, 2025];
  lastOrgNumber = null; extracted = false;
  const f = country === "PL" ? 0.4 : country === "LT" || country === "NL" || country === "FI" ? 0.09 : 1; /* the example company in PLN or EUR (about 11 SEK = 4.25 PLN = 1 EUR) */
  for (const [k, v] of Object.entries(EXAMPLE)) $(k).value = typeof v === "number" && NUM_FIELDS.includes(k) ? Math.round(v * f / 10) * 10 : v;
  $("name").value = C().example;
  clearMarks(); msg("s2-msg", "");
  applyLanguage();
}
function blankForm() {
  const y = new Date().getFullYear() - 1;
  years = [y - 2, y - 1, y];
  NUM_FIELDS.forEach(id => $(id).value = "");
  ["topcust", "recur"].forEach(id => $(id).value = "");
  $("owner").value = "medium"; $("mgmt").value = "partial"; $("reporting").value = "annual"; $("contracts").value = "mixed";
  $("industry").value = "bizserv";
}
function read() {
  const n = id => { const v = parseFloat($(id).value); return isFinite(v) ? v : 0; };
  // Missing earlier years take the nearest later year, so one year of figures still gives a sensible value
  const series = p => { const v = [1, 2, 3].map(i => { const x = parseFloat($(p + i).value); return isFinite(x) ? x : null; });
    if (v[1] == null) v[1] = v[2]; if (v[0] == null) v[0] = v[1];
    if (v[1] == null) v[1] = v[0]; if (v[2] == null) v[2] = v[1]; return v.map(x => x == null ? 0 : x); };
  const none = p => [1, 2, 3].every(i => !isFinite(parseFloat($(p + i).value)));
  const o = {
    name: $("name").value.trim() || U().defName,
    industry: $("industry").value,
    rev: series("rev"),
    eb: series("eb"),
    noRev: none("rev") && !none("eb"), noEb: none("eb") && !none("rev"),
    ownsal: n("ownsal"), mktsal: $("mktsal").value === "" ? n("ownsal") : n("mktsal"), oneoff: n("oneoff"),
    debt: n("debt"), cash: n("cash"),
    topcust: Math.min(100, Math.max(0, n("topcust"))),
    recur: Math.min(100, Math.max(0, n("recur"))),
    owner: $("owner").value, mgmt: $("mgmt").value,
    reporting: $("reporting").value, contracts: $("contracts").value,
    textAdj: typeof reportText !== "undefined" && reportText ? reportText.adj : 0,
    da: (() => { try {
      const ys = (typeof benchSrc !== "undefined" && benchSrc && benchSrc.years) || [];
      let e = 0, b = 0;
      years.forEach((y, i) => { const f = ys.find(x => x.year === y), eb = parseFloat($("eb" + (i + 1)).value);
        if (f && f.ebit != null && eb > 0) { e += eb; b += eb - f.ebit; } });
      return e > 0 ? b / e : null; } catch (x) { return null; } })(),
    rate: typeof rateOf === "function" ? rateOf() : null,
    rateAdj: typeof rateAdjOf === "function" ? rateAdjOf() : 0,
    cycleAdj: typeof cycleAdjOf === "function" ? cycleAdjOf() : 0,
    cycle: typeof cycleSummary === "function" ? cycleSummary() : null,
    buyers: typeof buyersFor === "function" ? buyersFor($("industry").value) : [],
    market: typeof MARKET !== "undefined" ? MARKET.median.toLocaleString(RT().loc) + "x EBITDA (" + MARKET.q + ")" : "",
    benchAdj: typeof bench !== "undefined" && bench ? bench.adj : 0,
    bench: typeof bench !== "undefined" && bench ? benchSummary(bench) : null,
    textFlags: typeof reportText !== "undefined" && reportText ? reportText.flags.map(f => ({ key: f.key, sev: f.sev, adj: f.adj })) : []
  };
  o.ltm = INIT.advisor && typeof readYtd === "function" ? ltmOf(o, readYtd()) : null;
  return o;
}

/* ---------- Render result ---------- */
function render() {
  const u = U(), rt = RT();
  const d = read();
  const v = value(d);
  const ideal = idealOf(d);
  const unit = C().unit;

  $("r-title").textContent = u.rTitle(d.name);
  $("r-meta").textContent = u.rMeta(rt.industries[d.industry], unit);
  $("k-eq").textContent = fmtM(v.eqLo).replace(C().mUnit || " M" + C().cur, "") + " – " + fmtM(v.eqHi);
  $("k-eq-sub").textContent = u.kEqSub(fmtM(v.eq), fmtT(v.netDebt) + " " + unit);
  $("k-ev").textContent = fmtM(v.evLo).replace(C().mUnit || " M" + C().cur, "") + " – " + fmtM(v.evHi);
  renderBlend(v);
  renderNorm(d, v);
  $("k-ev-sub").textContent = u.kEvMethod(Math.round(v.wEbitda * 100), fmtX(v.mult), Math.round(v.wEbit * 100), fmtX(v.multEbit), Math.round(v.wRev * 100), v.revMult.toLocaleString(RT().loc, { minimumFractionDigits: 2, maximumFractionDigits: 2 }) + "x");
  if (d.noRev || d.noEb) $("k-ev-sub").textContent += " " + (d.noRev ? u.partNoRev : u.partNoEb);
  const gain = ideal.eq - v.eq;
  if (FREE()) { $("k-pot").innerHTML = lk(fmtM(ideal.eq)); $("k-pot-sub").innerHTML = esc(u.potFree) + lkLink(); }
  else { $("k-pot").textContent = fmtM(ideal.eq); $("k-pot-sub").textContent = gain > 0 ? u.kPotSub(fmtM(gain)) : u.kPotNone; }

  const fs = readiness(d);
  const score = Math.round(fs.reduce((s, f) => s + f.w * f.s, 0));
  /* Sent with the "result" step so the deal database gets the valuation per company (thousands, local currency) */
  window.EK_LAST = { name: d.name, cur: C().cur, ind: rt.industries[d.industry] || "", rev: d.noRev ? null : d.rev[2], eb: d.noEb ? null : d.eb[2], evLo: v.evLo, evHi: v.evHi, eqLo: v.eqLo, eqHi: v.eqHi, mult: v.mult, score };
  const Cc = 2 * Math.PI * 50;
  $("g-arc").setAttribute("stroke-dasharray", (Cc * score / 100).toFixed(1) + " " + Cc.toFixed(1));
  $("g-arc").setAttribute("stroke", score >= 70 ? "var(--good)" : score >= 45 ? "var(--warn)" : "var(--bad)");
  $("g-num").textContent = score;
  /* Free view: the total score is shown, the score per area is in the report (placeholders, so nothing leaks in the page source) */
  $("factors").innerHTML = fs.map((f, i) => {
    const cls = f.s >= 0.75 ? "good" : f.s >= 0.45 ? "warn" : "bad";
    if (FREE()) return '<div class="factor"><span>' + rt.factors[i] + '</span><span class="track lk"><i style="width:' + [62, 45, 70, 38, 55, 66, 48, 58][i % 8] + '%;background:var(--line)"></i></span><span class="num lk" style="text-align:right">88 / 88</span></div>';
    return '<div class="factor"><span>' + rt.factors[i] + '</span><span class="track"><i style="width:' + (f.s * 100).toFixed(0) + '%;background:var(--' + cls + ')"></i></span><span class="num" style="text-align:right">' + Math.round(f.w * f.s) + ' / ' + f.w + '</span></div>';
  }).join("") + (FREE() ? '<p class="bnote">' + esc(u.scoreFree) + lkLink() + '</p>' : '');

  const g = growth(d);
  const S = { d, v, unit, growth: g, fmtT };
  const all = window.ExitkompassReport.findings(rt, S);
  const order = { bad: 0, warn: 1, ok: 2 };
  const issues = all.filter(f => f[0] !== "ok").sort((a, b) => order[a[0]] - order[b[0]]);
  const shown = (issues.length ? issues : all).slice(0, 3);
  $("flags").innerHTML = shown.map(([c, [t, a]]) => '<li class="' + (c === "bad" ? "" : c) + '"><strong>' + esc(t) + '</strong> ' + esc(a) + '</li>').join("") || '<li class="ok">' + u.noFlags + '</li>';
  const hidden = all.length - shown.length;
  $("flags-more").innerHTML = hidden > 0 ? u.more(hidden) : "";

  const p = plan(d, v);
  const row = (i, open) => {
    const [title, steps] = rt.actions[i.key];
    return open
      ? '<tr><td><strong>' + title + '</strong><br><span style="color:var(--muted)">' + esc(steps[0]) + '</span></td><td style="white-space:nowrap">' + months(i.time) + '</td><td class="r num" style="white-space:nowrap;color:var(--good);font-weight:700">+' + fmtM(i.uplift) + '</td></tr>'
      : '<tr><td><strong>' + title + '</strong></td><td style="white-space:nowrap">' + months(i.time) + '</td><td class="r lockcell"><a href="#order" target="_self">' + u.inReport + '</a></td></tr>';
  };
  /* The single most valuable action is shown in full next to the score, free; the rest of the plan is in the report */
  if (p.length) {
    const [t0, s0] = rt.actions[p[0].key];
    $("top-act").innerHTML = '<b class="h">' + esc(u.topActH) + '</b><strong>' + t0 + '</strong>: ' + esc(s0[0]) + ' <span class="up">+' + fmtM(p[0].uplift) + '</span>' +
      (FREE() && p.length > 1 ? '<br><span style="color:var(--muted)">' + esc(u.topActMore(p.length - 1)) + '</span>' + lkLink() : '');
    $("top-act").hidden = false;
  } else $("top-act").hidden = true;
  $("plan").innerHTML = p.length
    ? '<thead><tr><th>' + u.planCols[0] + '</th><th>' + u.planCols[1] + '</th><th class="r">' + u.planCols[2] + '</th></tr></thead><tbody>' + p.slice(0, 3).map((i, k) => row(i, k === 0)).join("") + '</tbody>'
    : '<tbody><tr><td>' + u.planNone + '</td></tr></tbody>';

  const steps = [{ label: rt.base, v: v.base, isBase: true }, ...v.adj.filter(a => a.v !== 0).map(a => ({ ...a,
    label: a.key === "size" ? u.sizeLbl(fmtM(v.norm)) : a.key === "growth" ? u.growthLbl(Math.round(g * 100)) : a.key === "rate" && d.rate ? u.rateLbl(fmtRate(d.rate.rate)) : a.key === "cycle" && d.cycle ? u.cycLbl(d.cycle.label) : rt.adj[a.key] }))];
  const max = 8;
  let run = 0, rows = "";
  steps.slice(0, 5).forEach(s => {
    let left, width, color, txt;
    if (s.isBase) { left = 0; width = s.v; run = s.v; color = "var(--muted)"; txt = fmtX(s.v); }
    else { const start = run; run += s.v; left = Math.min(start, run); width = Math.abs(s.v); color = s.v > 0 ? "var(--good)" : "var(--bad)"; txt = sign(s.v); }
    if (FREE()) { if (s.isBase) { left = 0; width = 4.5; } else { left = s.v > 0 ? 4.5 : 3.5; width = 1; } txt = s.isBase ? lk(txt) : '<span class="dir" style="color:' + color + '">' + (s.v > 0 ? "▲" : "▼") + '</span> ' + lk(txt); }
    rows += '<div class="brow"><span>' + s.label + '</span><span class="bbar"><i style="left:' + Math.max(0, left / max * 100) + '%;width:' + Math.max(0.6, width / max * 100) + '%;background:' + color + '"></i></span><span class="v num">' + txt + '</span></div>';
  });
  rows += '<div class="brow total"><span>' + u.yours + (v.mult === 2.0 ? u.floor : '') + '</span><span class="bbar"><i style="left:0;width:' + (FREE() ? 55 : Math.min(100, v.mult / max * 100)) + '%;background:var(--accent)"></i></span><span class="v num">' + lk(fmtX(v.mult)) + '</span></div>' + (FREE() ? '<p class="bnote">' + esc(u.brFree) + lkLink() + '</p>' : '');
  if ($("bridge")) $("bridge").innerHTML = rows;

  /* Large companies: SME multiples do not apply, so no number; hand over to a partner */
  const excl = FREE() && isExcluded(d), big = !excl && isLarge(d, v), small = !excl && !big && FREE() && isSmall(d, v), large = excl || big || small;
  $("large").hidden = !large;
  { const st = SMALL_T[lang] || SMALL_T.EN, q = (sel, t) => { const el = $("large").querySelector(sel); if (el) el.textContent = t; };
    if (big) { $("large-p").textContent = u.largeP(fmtM(d.rev[2]), fmtM(Math.max(0, d.eb[2]))); q("h3", u.largeH); q('[data-t="largeP2"]', u.largeP2); q('[data-t="largeNote"]', u.largeNote); }
    if (excl) { const xt = EXCL_T[lang] || EXCL_T.EN; $("large-p").textContent = xt[1]; q("h3", xt[0]); q('[data-t="largeP2"]', xt[2]); q('[data-t="largeNote"]', st[3]); }
    if (small) { $("large-p").textContent = st[1](fmtT(Math.max(0, v.norm)) + " " + C().unit); q("h3", st[0]); q('[data-t="largeP2"]', st[2]); q('[data-t="largeNote"]', st[3]); } }
  if (large) window.EK_LAST = null;
  if ($("blend")) $("blend").hidden = large;
  if (large) $("top-act").hidden = true;
  document.querySelector("#step-3 .kpis").hidden = large;
  document.querySelector("#step-3 .basis").hidden = large;
  $("plan-sec").hidden = large;
  $("locked").hidden = large;
  $("order").hidden = large;
  if (large) $("flags-more").innerHTML = "";

  /* Locked teaser: blurred placeholders in the free view (digits replaced), real figures for advisors and in the paid report */
  const fk = t => FREE() ? String(t).replace(/\d/g, "8") : t;
  const M = x => fk(fmtM(Math.max(0, x)));
  $("lock-sens").innerHTML = '<table>' + [-0.1, 0, 0.1].map(e => '<tr><td>EBITDA ' + (e > 0 ? "+" : e < 0 ? "−" : "±") + Math.abs(e * 100) + ' %</td>' +
    [-0.5, 0, 0.5].map(x => '<td class="r">' + M((1 - v.wRev) * Math.max(0, v.norm * (1 + e)) * Math.max(1.5, v.mult + x) * v.k + v.wRev * v.evRev - v.netDebt) + '</td>').join("") + '</tr>').join("") + '</table>';
  $("lock-plan").innerHTML = '<table>' + (p.length ? p : [{ key: "reporting", uplift: 0, time: "3–6 months" }]).slice(0, 4).map(i => '<tr><td>' + esc(rt.actions[i.key][0]) + '</td><td class="r">+' + M(i.uplift) + '</td></tr>').join("") + '</table>';
  $("lock-buyers").innerHTML = '<table>' + [-0.5, 0, 0.75].map((x, k) => '<tr><td>' + (lang === "LT" ? ["Pramoninis pirkėjas", "Privataus kapitalo fondas", "Strateginis pirkėjas"] : lang === "NL" ? ["Industriële koper", "Private equity", "Strategische koper"] : lang === "FI" ? ["Teollinen ostaja", "Pääomasijoittaja", "Strateginen ostaja"] : lang === "PL" ? ["Inwestor branżowy", "Private equity", "Inwestor strategiczny"] : lang === "EN" ? ["Industrial buyer", "Private equity", "Strategic buyer"] : lang === "NO" ? ["Industriell kjøper", "Private equity", "Strategisk kjøper"] : ["Industriell köpare", "Private equity", "Strategisk köpare"])[k] + '</td><td class="r">' + fk(fmtX(Math.max(1.5, v.mult + x))) + '</td></tr>').join("") + '</table>';
  $("lock-exit").innerHTML = '<table>' + fs.slice(0, 4).map((f, i) => '<tr><td>' + rt.factors[i] + '</td><td class="r">' + (FREE() ? "88 / 88" : Math.round(f.w * f.s) + " / " + f.w) + '</td></tr>').join("") + '</table>';
  { const sv = strategicValue(d, v), pc = x => Math.round(x * 100);
    $("lock-strat").innerHTML = '<table>' + [[u.lockSvPrem, FREE() ? "8–88 %" : pc(sv.prem[0]) + "–" + pc(sv.prem[1]) + " %"], [u.lockSvVal, FREE() ? fk(fmtM(8888)) + " – " + fk(fmtM(8888)) : fmtM(sv.evLo) + " – " + fmtM(sv.evHi)], [u.lockSvDrv, FREE() ? "8 / 8" : sv.drivers.length + ""]].map(r => '<tr><td>' + esc(r[0]) + '</td><td class="r">' + r[1] + '</td></tr>').join("") + '</table>'; }
  $("lock-btn").textContent = u.lockBtn(u.prices[0] + " " + u.vat);

  /* Where the historical model is likely to undervalue the company */
  const reasons = [];
  if (g > 0.15) reasons.push(u.upGrowth(Math.round(g * 100)));
  if (d.recur >= 60) reasons.push(u.upRecur(Math.round(d.recur)));
  if (d.rev[2] > 0 && v.norm / d.rev[2] < 0.05) reasons.push(u.upMargin);
  if (["saas", "healthtech"].includes(d.industry)) reasons.push(u.upTech(rt.industries[d.industry]));
  $("upside-list").innerHTML = reasons.map(r => '<li>' + esc(r) + '</li>').join("");
  $("upside").hidden = reasons.length === 0 || large;
  renderRateLine(); renderCycle(); renderMarket(d);
  renderStrat(d, v, large);
  $("extra3").hidden = reasons.length > 0 && !large;
  const gv = growthValue(d, readPlan(d));
  $("gv-line").hidden = !(gv && INIT.advisor);
  if (gv && INIT.advisor) $("gv-line").textContent = u.gvLine(fmtM(gv.eqLo), fmtM(gv.eqHi));
  renderDocLine();
  if (INIT.advisor && $("gw-line")) {
    const gw = growthWeight(d, readPlan(d), planCtx()), b = blended(v, gv, gw);
    $("gw-line").textContent = [d.ltm ? u.advLtm(Math.round(d.ltm.eb).toLocaleString(LOC()) + " " + C().unit) : "", b ? u.advBlend(Math.round(b.w * 100), fmtM(b.eq)) : ""].filter(Boolean).join(" ");
  }
  updateDocs();
}


/* ---------- Strategic value card ---------- */
/* Normalised EBITDA: what a buyer pays for, with the owner's salary at market level. Shown in the free view too. */
function renderNorm(d, v) {
  const box = $("norm-card"); if (!box) return;
  const u = U(), unit = " " + C().unit, T = x => (x >= 0 ? "" : "−") + fmtT(Math.abs(x)) + unit, S = x => (x > 0 ? "+" : x < 0 ? "−" : "±") + fmtT(Math.abs(x)) + unit;
  const why = !(d.ownsal > 0 || d.mktsal > 0) ? u.normNoSal
    : Math.abs(v.salaryAdj) < 1 ? u.normEqSal(T(d.ownsal))
    : v.salaryAdj > 0 ? u.normHighSal(T(d.ownsal), T(d.mktsal), T(v.salaryAdj)) : u.normLowSal(T(d.ownsal), T(d.mktsal), T(-v.salaryAdj));
  box.innerHTML = '<h3>' + esc(u.normH) + '</h3><div class="big num">' + T(v.norm) + '</div>' +
    '<table><tr><td>' + esc(d.ltm ? u.normRowLtm : u.normRow1) + '</td><td class="r num">' + T(v.weighted) + '</td></tr>' +
    '<tr><td>' + esc(u.normRow2) + '</td><td class="r num">' + S(v.salaryAdj) + '</td></tr>' +
    '<tr class="tot"><td>' + esc(u.normRow3) + '</td><td class="r num">' + T(v.norm) + '</td></tr></table>' +
    '<p class="nwhy">' + esc(why) + '</p>';
  box.hidden = !(d.rev[2] > 0);
}
/* Optional email on the free result: a copy now and/or a reminder in six months */
async function sendLead(ev) {
  ev.preventDefault();
  const u = U(), m = $("lead-msg"), email = $("lead-email").value.trim(), copy = $("lead-copy").checked, remind = $("lead-remind").checked;
  if (!/^[^\s@]+@[^\s@]+\.[a-z]{2,}$/i.test(email) || !$("lead-ok").checked || !(copy || remind)) { m.className = "leadmsg err"; m.textContent = u.leadNeed; return; }
  const d = read(), v = value(d), fs = readiness(d), score = Math.round(fs.reduce((a, f) => a + f.w * f.s, 0)), p = plan(d, v);
  const top = p.length ? RT().actions[p[0].key][0] + " (+" + fmtM(p[0].uplift) + ")" : "";
  $("lead-btn").disabled = true; m.className = "leadmsg"; m.textContent = u.leadBusy;
  try {
    const r = await gs("saveLead", { email, copy, remind, consent: true, lang, cc: country, company: d.name, org: lastOrgNumber || "",
      eq: fmtM(v.eqLo) + " – " + fmtM(v.eqHi), eqLo: fmtM(v.eqLo), eqHi: fmtM(v.eqHi), score: score + " / 100", top });
    if (!r || !r.ok) throw new Error((r && r.reason) || "FAIL");
    track("lead");
    m.className = "leadmsg ok"; m.textContent = u.leadOk(copy, remind, email);
  } catch (e) { console.error(e); m.className = "leadmsg err"; m.textContent = u.leadErr; }
  $("lead-btn").disabled = false;
}
function renderStrat(d, v, large) {
  const box = $("strat"); if (!box) return;
  const u = U(), sv = strategicValue(d, v);
  if (large || !(v.ev > 0)) { box.hidden = true; return; }
  const pct = x => Math.round(x * 100);
  const rng = pct(sv.prem[0]) + "–" + pct(sv.prem[1]) + (lang === "EN" || lang === "PL" || lang === "LT" || lang === "NL" || lang === "FI" ? "%" : " %");
  const tail = FREE() ? '<p class="sv">' + esc(u.svFree) + ' ' + lkLink() + '</p>'
    : '<p class="sv">' + u.svPrem(rng, '<b>' + fmtM(sv.evLo) + ' – ' + fmtM(sv.evHi) + '</b>') + '</p>';
  box.innerHTML = '<h3><svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true"><path d="M12 3l2.6 5.6 6.1.7-4.5 4.2 1.2 6L12 16.6 6.6 19.5l1.2-6L3.3 9.3l6.1-.7z" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linejoin="round"/></svg>' + esc(u.svH) + '</h3>' +
    '<p><span class="bpos p' + [0, 2, 3][sv.level] + '">' + esc(u.svLevel[sv.level]) + '</span> ' + esc(u.svP) + '</p>' +
    (FREE() ? '<ul class="lk" aria-hidden="true">' + ["Xxxxxxxx xxx xxxxxxx xx xxxxxx xxxxxxxxx", "Xxxxxxxxxxxx xxxxxxxx xxx xxxxx xxxxxx", "Xxxxxxx xxx xxxxxxxx xxxxxx xxxxxxxxx"].map(t => '<li>' + t + '</li>').join("") + '</ul>'
      : sv.drivers.length ? '<ul>' + sv.drivers.map(k => '<li>' + esc(typeof u.svDrv[k] === "function" ? u.svDrv[k](RT().industries[d.industry]) : u.svDrv[k]) + '</li>').join("") + '</ul>' : '<p class="sv">' + esc(u.svNone) + '</p>') +
    tail + '<small>' + esc(u.svNote) + '</small>';
  box.hidden = false;
}
/* ---------- Advisor mode: growth plan and PDF report ---------- */
function readPlan(d) {
  if (INIT.advisor) {
    const n = id => { const x = parseFloat($(id).value); return isFinite(x) ? x : NaN; };
    const rev = ["gp1", "gp2", "gp3"].map(n);
    if (rev[2] > 0) return { rev, margin: n("gpm"), rate: n("gpr") };
  }
  return typeof docFin === "function" ? planFromBudget(docFin().budget, d) : null;
}
function readYtd() {
  if (INIT.advisor) {
    const n = id => { const x = parseFloat($(id).value); return isFinite(x) ? x : NaN; };
    const y = { n: n("ytn"), rev: n("ytr"), eb: n("yte"), revPrev: n("ytrp"), ebPrev: n("ytep") };
    if (y.n > 0) return y;
  }
  const m = typeof docFin === "function" ? docFin().ytd : null;
  return m ? { n: m.n, rev: m.rev, eb: m.eb, revPrev: m.revPrev == null ? NaN : m.revPrev, ebPrev: m.ebPrev == null ? NaN : m.ebPrev } : null;
}
const planCtx = () => ({ plan: !!((INIT.advisor && $("gpplan") && $("gpplan").checked) || (typeof docFin === "function" && docFin().plan)) });
/* What was read from uploaded budgets and monthly reports, the weight it gets and the blended value (blurred in the free view) */
function docSummary() {
  if (typeof docFin !== "function" || !years.length) return null;
  const f = docFin(); if (!f.budget && !f.ytd) return null;
  const d0 = read(), d = { ...d0, ltm: d0.ltm || ltmOf(d0, readYtd()) }, v = value(d), gp = readPlan(d), gv = growthValue(d, gp), gw = growthWeight(d, gp, planCtx());
  return { f, d, v, gp, gv, gw, b: blended(v, gv, gw) };
}
function renderDocLine() {
  const u = U(), x = docSummary(), T = t => Math.round(t).toLocaleString(LOC()) + " " + C().unit;
  let h = "";
  if (x) {
    const parts = [];
    if (x.f.budget) parts.push(u.docBud(x.f.budget.years[0] + (x.f.budget.years.length > 1 ? "–" + x.f.budget.years[x.f.budget.years.length - 1] : ""), x.f.budget.rev.map(T).join(" / ")));
    if (x.f.ytd) parts.push(u.docYtd(x.f.ytd.n, T(x.f.ytd.rev), x.f.ytd.eb != null ? T(x.f.ytd.eb) : "–"));
    h = '<b>' + esc(u.docH) + '</b> ' + esc(parts.join(" ")) + (x.b ? ' ' + esc(u.docW(Math.round(x.b.w * 100))) + ' <b>' + (FREE() ? lk(fmtM(x.b.eq)) : esc(fmtM(x.b.eq))) + '</b>.' + lkLink() : x.f.ytd && !x.f.budget ? ' ' + esc(u.docOnlyYtd) : '');
  }
  ["gp-read", "x3-read"].forEach(id => { const el = $(id); if (el) { el.innerHTML = h; el.hidden = !h; } });
}
function onFin(e) {
  renderExtras();
  if (INIT.advisor && e.fin && e.fin.ok) {
    const put = (id, v) => { const el = $(id); if (el && el.value === "" && v != null && isFinite(v)) el.value = Math.round(v * 10) / 10; };
    const p = e.fin.budget ? planFromBudget(e.fin.budget, read()) : null;
    if (p) { put("gp1", p.rev[0]); put("gp2", p.rev[1]); put("gp3", p.rev[2]); put("gpm", Math.round(p.margin * 10) / 10); }
    if (e.fin.ytd) { const y = e.fin.ytd; put("ytn", y.n); put("ytr", y.rev); put("yte", y.eb); put("ytrp", y.revPrev); put("ytep", y.ebPrev); }
  }
  if (step === 3) render();
}
function setupAdvisor() {
  if (!INIT.advisor) return;
  $("adv").hidden = false; $("adv-out").hidden = false;
  const y = years[2];
  ["gp1", "gp2", "gp3"].forEach((id, i) => $(id + "-l").textContent = U().advY(y + i + 1));
}
async function advisorPdf() {
  const u = U(), out = $("adv-msg");
  out.textContent = u.advBusy;
  try {
    const d = read(), v = value(d);
    const S = { country, lang, years: years.slice(), d, v, cur: C().cur, unit: C().unit, munit: C().mUnit || "", email: $("email").value.trim() || "", growth: growth(d),
      orgNumber: lastOrgNumber, ideal: idealOf(d), fs: readiness(d), plan: plan(d, v), gv: growthValue(d, readPlan(d)), sv: strategicValue(d, v) };
    if (window.EK_SAMPLE) S.sample = true;
    try {
      const code = new URLSearchParams(location.search).get("advisor");
      if (API_URL && code && !S.sample) { const r = await gs("similarDeals", { code, industry: d.industry, ebitda: v.norm, org: lastOrgNumber || "" }); if (r && r.ok && r.deals && r.deals.length >= 3) S.deals = r; }
    } catch (e) { console.warn("similarDeals", e); }
    S.gw = growthWeight(d, readPlan(d), planCtx()); S.blend = blended(v, S.gv, S.gw);
    const { blob, filename } = await window.ExitkompassReport.generate(S);
    const a = document.createElement("a"); a.href = URL.createObjectURL(blob); a.download = filename; document.body.appendChild(a); a.click(); a.remove();
    out.textContent = u.advDone;
  } catch (e) { console.error(e); out.textContent = u.advErr; }
}

/* ---------- Uploads ---------- */
const MAX = 20 * 1024 * 1024;
const PDFJS = "https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/";
let pdfjsP = null;
function loadPdfJs() {
  if (!pdfjsP) pdfjsP = new Promise((res, rej) => {
    const s = document.createElement("script");
    s.src = PDFJS + "pdf.min.js";
    s.onload = async () => {
      const lib = window.pdfjsLib;
      try {
        const code = await (await fetch(PDFJS + "pdf.worker.min.js")).text();
        lib.GlobalWorkerOptions.workerSrc = URL.createObjectURL(new Blob([code], { type: "text/javascript" }));
      } catch (e) { lib.GlobalWorkerOptions.workerSrc = PDFJS + "pdf.worker.min.js"; }
      res(lib);
    };
    s.onerror = () => { pdfjsP = null; rej(new Error("PDFJS")); };
    document.head.appendChild(s);
  });
  return pdfjsP;
}
const hasServer = () => typeof google !== "undefined" && google.script && google.script.run;
/* On www.exitkompass.se the page is static and talks to the Apps Script API with fetch: no Google login is involved,
   so visitors signed in to locked-down work accounts are not blocked. */
const API_URL = (typeof window !== "undefined" && window.EK_API) || "";
async function api(fn, args) {
  const r = await fetch(API_URL, { method: "POST", body: JSON.stringify({ fn, args }), headers: { "Content-Type": "text/plain;charset=utf-8" }, credentials: "omit", redirect: "follow" });
  const j = await r.json();
  if (!j.ok) throw new Error(j.error || "API");
  return j.result;
}
/* Funnel: visit → company lookup → free result → "unlock" click → order sent. One row per session and step, not in advisor mode. */
const SID = (() => { try { let x = sessionStorage.getItem("ek_sid"); if (!x) { x = Math.random().toString(36).slice(2, 10); sessionStorage.setItem("ek_sid", x); } return x; } catch (e) { return Math.random().toString(36).slice(2, 10); } })();
const tracked = {};
function track(ev, extra) {
  try {
    if (!API_URL || INIT.advisor || new URLSearchParams(location.search).has("advisor")) return;
    const k = ev + (extra && extra.pkg ? ":" + extra.pkg : "") + (extra && extra.org && (ev === "result" || ev === "lookup") ? ":" + extra.org : "");
    let seen = tracked[k]; try { seen = seen || sessionStorage.getItem("ek_t_" + k); sessionStorage.setItem("ek_t_" + k, "1"); } catch (e) {}
    if (seen) return; tracked[k] = 1;
    const body = JSON.stringify({ fn: "track", args: [Object.assign({ s: SID, ev, lang, cc: country, page: location.pathname }, extra || {})] });
    if (!(navigator.sendBeacon && navigator.sendBeacon(API_URL, body))) fetch(API_URL, { method: "POST", body, keepalive: true, mode: "no-cors" }).catch(() => {});
  } catch (e) {}
}
function gs(fn, ...args) {
  if (API_URL) return api(fn, args);
  if (!hasServer()) return new Promise(r => setTimeout(() => r({ ok: true, local: true }), 600));
  return new Promise((res, rej) => google.script.run.withSuccessHandler(res).withFailureHandler(rej)[fn](...args));
}
function fileToBase64(file) {
  return new Promise((res, rej) => {
    const r = new FileReader();
    r.onload = () => res(String(r.result).split(",")[1]);
    r.onerror = () => rej(r.error);
    r.readAsDataURL(file);
  });
}
const isPdf = f => f.type === "application/pdf" || /\.pdf$/i.test(f.name);
const isImg = f => /^image\/(png|jpeg)$/.test(f.type) || /\.(png|jpe?g)$/i.test(f.name);
const MIME = { pdf: "application/pdf", png: "image/png", jpg: "image/jpeg", jpeg: "image/jpeg", doc: "application/msword",
  docx: "application/vnd.openxmlformats-officedocument.wordprocessingml.document", xls: "application/vnd.ms-excel",
  xlsx: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet", ppt: "application/vnd.ms-powerpoint",
  pptx: "application/vnd.openxmlformats-officedocument.presentationml.presentation", csv: "text/csv", txt: "text/plain", xml: "text/plain", xades: "text/plain", zip: "application/zip" };
const mimeOf = f => MIME[(f.name.split(".").pop() || "").toLowerCase()] || f.type;

async function upload(file, kind, slot) {
  const base64 = await fileToBase64(file);
  return gs("uploadDocument", { ref: REF, kind, slot, name: file.name, mimeType: mimeOf(file), base64, company: $("name").value.trim() });
}
function errText(e) {
  const c = String((e && e.message) || e || ""), u = U();
  return /BAD_TYPE/.test(c) ? u.badType : /TOO_BIG/.test(c) ? u.tooBig : /TOO_MANY/.test(c) ? u.tooMany : u.upFail;
}

function addAnnual(files, start) {
  const list = Array.from(files);
  let i = start;
  for (const f of list) {
    const xmlOk = country === "PL" && window.ExitkompassParsePL && window.ExitkompassParsePL.isXml(f);
    if (!(isPdf(f) || isImg(f) || xmlOk)) { msg("s1-msg", U().badTypeAnnual, "err"); continue; }
    if (f.size > MAX) { msg("s1-msg", U().tooBig, "err"); continue; }
    // the chosen slot first, then the next empty ones
    let k = i;
    if (slots[k]) { k = slots.findIndex(s => !s); if (k < 0) { addExtras([f]); continue; } }
    setSlot(k, f);
    i = slots.findIndex(s => !s); if (i < 0) i = 0;
  }
}
async function setSlot(k, file) {
  const s = { file, state: "busy", parsed: null, uploaded: false };
  slots[k] = s; renderSlots(); msg("s1-msg", "");
  const up = upload(file, "annual", k).then(() => { s.uploaded = true; }, e => { s.uploadErr = errText(e); });
  let parsed = null;
  if (country === "PL" && window.ExitkompassParsePL && window.ExitkompassParsePL.isXml(file)) {
    try { parsed = await window.ExitkompassParsePL.readFile(file); } catch (e) { console.warn(e); parsed = { ok: false, reason: "READ" }; }
    if (!parsed || !parsed.ok) msg("s1-msg", U().xmlBad, "err");
  } else if (isPdf(file)) {
    try {
      const lib = await loadPdfJs();
      parsed = await window.ExitkompassParse.readPdf(lib, new Uint8Array(await file.arrayBuffer()));
    } catch (e) { parsed = { ok: false, reason: "READ" }; }
  }
  await up;
  if (slots[k] !== s) return;   // removed meanwhile
  s.parsed = parsed;
  /* A Polish XML that was read locally counts as read even if the copy to Drive failed (e.g. a .zip the backend does not take) */
  if (country === "PL" && s.uploadErr && parsed && parsed.ok) { console.warn("upload:", s.uploadErr); s.uploadErr = ""; }
  s.state = s.uploadErr ? "err" : parsed && parsed.ok ? "ok" : "manual";
  renderSlots();
  if (s.uploadErr) msg("s1-msg", s.uploadErr, "err");
  afterParse();
}
function removeSlot(k) { slots[k] = null; renderSlots(); afterParse(); }

function renderSlots() {
  const u = U();
  $("slots").innerHTML = [0, 1, 2].map(k => {
    const s = slots[k];
    let body;
    if (!s) body = '<span class="f">' + u.slotEmpty + '</span>';
    else if (s.state === "busy") body = '<span class="f">' + esc(s.file.name) + '</span><span class="pill">' + u.pillBusy + '</span><span class="bar"><i></i></span>';
    else {
      const p = s.parsed, y = p && p.ok && p.years[0];
      const info = s.state === "ok" && y ? u.slotFound(y.year, y.revenue != null ? fmtM(y.revenue) : "") : s.state === "manual" ? u.slotManual : (s.uploadErr || "");
      const pill = s.state === "ok" ? u.pillOk : s.state === "manual" ? u.pillManual : u.pillErr;
      body = '<span class="f">' + esc(s.file.name) + '</span><span class="pill">' + pill + '</span><span class="r">' + esc(info) + '</span>';
    }
    return '<label class="slot ' + (s ? s.state : "") + '" data-slot="' + k + '">' +
      '<svg class="doc" aria-hidden="true" style="color:var(--accent)"><use href="#i-doc"/></svg>' +
      '<span class="y">' + u.slotY[k] + '</span>' + body +
      '<input type="file" accept="' + (country === "PL" ? ".xml,.xades,.zip,application/xml,text/xml,application/zip,application/pdf" : "application/pdf,image/png,image/jpeg") + '" multiple aria-label="' + u.slotY[k] + '">' +
      (s && s.state !== "busy" ? '<button type="button" class="x" data-rm="' + k + '" aria-label="' + u.remove + '" title="' + u.remove + '">×</button>' : '') +
      '</label>';
  }).join("");
  updateNext();
}
function addExtras(files, kind) {
  const mid = step === 3 ? "lead-msg" : "s1-msg";
  const msg = (id, t, k) => { const m = $(mid); m.className = (mid === "lead-msg" ? "notice " : "msg ") + (k || ""); m.textContent = t || ""; };
  for (const f of Array.from(files)) {
    if (extras.length >= 12) { msg("s1-msg", U().tooMany, "err"); break; }
    if (f.size > MAX) { msg("s1-msg", U().tooBig, "err"); continue; }
    if (!MIME[(f.name.split(".").pop() || "").toLowerCase()]) { msg("s1-msg", U().badType, "err"); continue; }
    const e = { file: f, state: "up", kind: kind || "other" };
    extras.push(e);
    if (/\.(xlsx|xls|xlsm|csv|ods)$/i.test(f.name) && e.kind !== "plan") {
      e.reading = true;
      readFinFile(f, e.kind === "other" ? "auto" : e.kind, { lastFY: years[2], rev: read().rev[2] })
        .then(r => { e.fin = r; }, err => { console.warn(err); e.fin = { ok: false }; })
        .then(() => { e.reading = false; onFin(e); });
    }
    upload(f, e.kind, 0).then(() => { e.state = "ok"; renderExtras(); }, err => { e.state = "err"; e.err = errText(err); renderExtras(); msg("s1-msg", e.err, "err"); });
  }
  renderExtras();
}
function renderExtras() {
  const u = U();
  const finTag = e => e.reading ? " · " + u.chipReading : e.fin && e.fin.ok ? " · " + u.chipRead : "";
  const html = extras.map((e, i) => '<li class="' + e.state + '"><span>' + esc(e.file.name) + '</span><em>' +
    (e.state === "up" ? u.chipUp : e.state === "ok" ? u.chipOk : u.chipErr) + finTag(e) + '</em><button type="button" data-rmx="' + i + '" aria-label="' + u.remove + '">×</button></li>').join("");
  $("extra-list").innerHTML = html; $("extra-list3").innerHTML = html;
  const gp = extras.map((e, i) => e.kind === "other" ? "" : '<li class="' + e.state + '"><span><b>' + esc(u.kindLbl[e.kind]) + ':</b> ' + esc(e.file.name) + '</span><em>' +
    (e.state === "up" ? u.chipUp : e.state === "ok" ? u.chipOk : u.chipErr) + (e.reading ? " · " + u.chipReading : e.fin && e.fin.ok ? " · " + u.chipRead : e.fin ? " · " + u.chipNoRead : "") + '</em><button type="button" data-rmx="' + i + '" aria-label="' + u.remove + '">×</button></li>').join("");
  $("gp-list").innerHTML = gp;
  const n = extras.filter(e => e.kind !== "other" && e.state !== "err").length;
  $("gp-go").textContent = u.gpGo(n);
  renderDocLine();
  updateNext(); updateDocs();
}
function docCount() { return slots.filter(s => s && s.state !== "err").length + extras.filter(e => e.state !== "err").length + (typeof fetchedDocs === "number" ? fetchedDocs : 0); }
function updateNext() { $("to2").textContent = U().next1(docCount()) + " →"; $("to2").hidden = docCount() === 0; }
function updateDocs() { $("o-docs").innerHTML = '<svg aria-hidden="true"><use href="#i-lock"/></svg><span>' + U().docsN(docCount()) + '</span>'; }

/* Merge what was read from all annual reports into the form. */
function afterParse() {
  const u = U();
  const done = slots.filter(s => s && s.state !== "busy");
  if (slots.some(s => s && s.state === "busy")) return;
  const parsed = done.map(s => s.parsed).filter(p => p && p.ok);
  if (!done.length) { msg("s1-msg", ""); return; }
  if (!parsed.length) { msg("s1-msg", u.s1NoRead, "warn"); return; }
  const m = window.ExitkompassParse.merge(parsed);
  if (m.lang && m.lang !== country) setCountry(m.lang);
  applyExtraction(m);
  if (m.text) setReportText(analyzeText(m.text, { year: m.textYear, source: "pdf" }));
  const ys = m.years.map(y => y.year).join(", ");
  msg("s1-msg", U().s1Read(m.name, m.org, ys) + (parsed.length < done.length ? " " + U().s1Partial : "") + (country === "PL" && parsed.some(p => p.noOp) ? " " + (parsed.some(p => p.micro) ? U().xmlSmall : U().xmlNoOp) : ""), "ok");
  showCta();
}
function applyExtraction(m) {
  clearMarks();
  const fy = m.years;
  const latest = fy[fy.length - 1].year;
  years = [latest - 2, latest - 1, latest];
  const byYear = {}; fy.forEach(y => byYear[y.year] = y);
  const near = (i, key) => { for (const d of [0, 1, -1, 2, -2]) { const y = byYear[years[i] + d]; if (y && y[key] != null) return y[key]; } return null; };
  [0, 1, 2].forEach(i => {
    const y = byYear[years[i]];
    [["rev", "revenue"], ["eb", "ebitda"]].forEach(([f, key]) => {
      const el = $(f + (i + 1));
      if (y && y[key] != null) { el.value = y[key]; el.classList.add(key === "ebitda" && !y.depFound ? "missing" : "filled"); }
      else { const v = near(i, key); el.value = v != null ? v : ""; el.classList.add("missing"); }
    });
  });
  if (m.cash != null) { $("cash").value = m.cash; $("cash").classList.add("filled"); }
  if (m.debt != null) { $("debt").value = m.debt; $("debt").classList.add("filled"); }
  if (m.name) $("name").value = m.name;
  lastOrgNumber = m.org || null;
  extracted = true;
  applyLanguage();
}

/* ---------- Order: pre-filled Google Form ---------- */
const FORMS = {
  SE: "https://docs.google.com/forms/d/e/1FAIpQLScDPNWAollJ2EgYBbddreV7RbbEsrzVNtRj-FxBcaaO4Q0yHw/viewform",
  NO: "https://docs.google.com/forms/d/e/1FAIpQLSeRTto1dVVkHkb6a8ld14iaxyHpkqQW-S5Y3O8KzkATC-y11w/viewform"
};
function orderSummary() {
  const d = read(), v = value(d), fs = readiness(d);
  const score = Math.round(fs.reduce((s, f) => s + f.w * f.s, 0));
  const n = docCount();
  return [
    "Exitkompass " + years[0] + "-" + years[2] + " (" + C().unit + ")",
    lang !== country ? "SPRÅK: " + ({ SE: "SVENSKA", NO: "NORSKA", EN: "ENGELSKA", PL: "POLSKA", LT: "LITAUISKA", NL: "NEDERLÄNDSKA", FI: "FINSKA" })[lang] + " – leverera rapporten på " + ({ SE: "svenska", NO: "norska", EN: "engelska", PL: "polska", LT: "litauiska", NL: "nederländska", FI: "finska" })[lang] + " (välj språket i språkväljaren innan PDF:en skapas)." : "",
    "Underlag: " + n + " dokument" + (n ? ", ref " + REF + " (Drive: https://drive.google.com/drive/search?q=" + REF + ")" : ""),
    reportsUrl ? "Årsredovisningar: " + reportsUrl : "",
    listedInfo ? "BÖRSNOTERAT: " + listedInfo : "",
    country === "FI" ? "FINLAND – rapport på finska (eller svenska om språket är svenska). Betalning: faktura i EUR med rapporten, 10 dagar, utan svensk moms (omvänd skattskyldighet för finska företag med momsnummer). Siffror ur PRH:s digitala bokslut (XBRL) när sådana finns." : country === "NL" ? "NEDERLÄNDERNA – rapport på nederländska. Betalning: faktura i EUR med rapporten, 10 dagar, utan svensk moms (omvänd skattskyldighet för nederländska företag med momsnummer). OBS: KVK-data saknar ofta omsättning och resultat för små bolag; EBITDA förifylld med rörelseresultat – kontrollera avskrivningar." : country === "LT" ? "LITAUEN – rapport på litauiska. Betalning: faktura i EUR med rapporten, 10 dagar, utan svensk moms (omvänd skattskyldighet för litauiska företag med momsnummer). OBS: EBITDA förifylld med resultat före skatt från registret – kontrollera avskrivningar och räntor." : country === "PL" ? "POLEN – rapport på polska. Betalning: faktura i PLN med rapporten, 10 dagar, utan svensk moms (omvänd skattskyldighet för polska företag med NIP)." : country === "NO" ? "Betalning: faktura med rapporten, 10 dagar, utan moms (Norge)." : "Betalning: faktura med rapporten, 10 dagar, moms 25 % tillkommer.",
    extras.some(e => e.kind !== "other" && e.state === "ok") ? "Tillväxtunderlag: " + ["plan", "budget", "monthly"].map(k => [k, extras.filter(e => e.kind === k && e.state === "ok").length]).filter(x => x[1]).map(x => ({ plan: "affärsplan", budget: "budget", monthly: "månadsrapporter" })[x[0]] + " " + x[1]).join(", ") : "",
    cycle && cycle.cc === country ? "Konjunktur (" + cycle.src + ", " + cycle.label + ", " + cycle.period + "): " + cycle.value + (cycle.cc === "SE" ? " (normalt 100)" : " (snitt " + cycle.mean.toFixed(1) + ")") + (cycleAdjOf() ? ", justering " + cycleAdjOf() + "x" : "") : "",
    buyersFor($("industry").value).length ? "Möjliga köpare (serieförvärvare): " + buyersFor($("industry").value).join(", ") : "",
    rateOf() ? "Styrränta: " + rateOf().rate + " % (" + rateOf().src + ", " + rateOf().date + "), justering " + rateAdjOf() + "x" : "",
    bench && bench.k && bench.k.margin != null ? "Branschjämförelse (" + (bench.cc === "SE" ? "SCB " + bench.year + ", SNI " + bench.code + ", " + bench.size : "SSB " + bench.year + ", " + bench.code) + "): rörelsemarginal " + bench.k.margin.toFixed(1) + " % mot " + (bench.cc === "SE" ? "median " + bench.m[1] + " % (kvartiler " + bench.m[0] + "/" + bench.m[2] + ")" : "snitt " + bench.avg + " %") + (bench.adj ? ", " + (bench.adj > 0 ? "+" : "") + bench.adj + "x" : "") : "",
    reportText ? "Årsredovisningens text (" + (reportText.year || "") + ", " + reportText.source + "): " + (reportText.flags.length ? reportText.flags.map(f => f.key + (f.adj ? " " + f.adj + "x" : "")).join(", ") : "inga flaggor") + (reportText.employees != null ? "; anställda " + reportText.employees : "") : "",
    "Bransch: " + d.industry,
    "Oms: " + d.rev.join(" / "),
    "EBITDA: " + d.eb.join(" / "),
    "Lon/marknad: " + d.ownsal + " / " + d.mktsal + ", engang: " + d.oneoff,
    "Skuld/kassa: " + d.debt + " / " + d.cash,
    "Storsta kund: " + d.topcust + " %, aterkommande: " + d.recur + " %",
    "Agare: " + d.owner + ", ledning: " + d.mgmt + ", rapportering: " + d.reporting + ", avtal: " + d.contracts,
    "Varde: " + fmtM(v.eqLo) + " - " + fmtM(v.eqHi) + ", poang: " + score
  ].join("\n");
}

/* ---------- Packages ---------- */
const PKG_KEYS = ["free", "report", "partner"];
function renderPkgs() {
  const u = U();
  ["pkgs-1", "pkgs-3"].forEach(id => {
    const inResult = id === "pkgs-3";
    $(id).innerHTML = PKG_KEYS.map((k, i) => {
      const p = u.pkgs[i];
      const cls = "pkg" + (k === "report" ? " feat" : k === "partner" ? " prem" : "") + (inResult && k === pkg && k !== "free" ? " sel" : "");
      const price = k === "free" ? u.free : u.prices[i - 1] + " <small>" + u.vat + "</small>";
      let btn;
      if (k === "free") btn = inResult ? '<button type="button" class="buy free" disabled>' + u.haveFree + '</button>' : '<button type="button" class="buy free" data-start="1">' + u.startFree + '</button>';
      else btn = '<button type="button" class="buy" data-buy="' + k + '">' + u.buy[i - 1] + ' →</button>';
      return '<div class="' + cls + '">' + (p.tag ? '<span class="tag">' + p.tag + '</span>' : '') +
        '<div><h4>' + p.name + '</h4></div><div class="price">' + price + '</div>' +
        '<p class="deliv' + (k === "free" ? ' free' : '') + '">' + (k === "free" ? u.delivFree : u.delivPaid) + '</p>' +
        '<ul>' + p.items.map(x => '<li>' + x + '</li>').join("") + '</ul>' + btn + '</div>';
    }).join("");
  });
}
function choosePkg(k) {
  pkg = k; renderPkgs();
  msg("s1-msg", U().chosen(U().pkgs[PKG_KEYS.indexOf(k)].name), "ok");
  try { $("org").focus({ preventScroll: true }); $("wizard").scrollIntoView({ behavior: "smooth", block: "start" }); } catch (e) {}
}
function formUrl() {
  const u = U(), q = new URLSearchParams({ usp: "pp_url" }), i = PKG_KEYS.indexOf(pkg);
  const co = $("o-company").value.trim() || $("name").value.trim(), org = $("o-org").value.trim() || $("org").value.trim() || lastOrgNumber, em = $("o-email").value.trim() || $("email").value.trim();
  if ($("o-name").value.trim()) q.set("entry.1217067150", $("o-name").value.trim());
  if (co) q.set("entry.1723852467", co);
  if (org) q.set("entry.1403147180", org);
  if (em) q.set("entry.543455357", em);
  if ($("o-phone").value.trim()) q.set("entry.477592663", $("o-phone").value.trim());
  q.set("entry.681429162", orderNotes());
  return FORMS[country] + "?" + q.toString();
}
function orderNotes() {
  const u = U(), n = docCount();
  if (pkg === "meet") {
    const m0 = $("o-msg").value.trim();
    return "MÖTESFÖRFRÅGAN – STORT BOLAG (ingen rapportbeställning)\nREF: " + REF + "\n" + (maxStep >= 3 ? orderSummary() : "") + (m0 ? "\n\nMeddelande: " + m0 : "");
  }
  const i = PKG_KEYS.indexOf(pkg);
  const body = maxStep >= 3 ? orderSummary() : "Ingen värdering gjord ännu.\nUnderlag: " + n + " dokument" + (n ? " (Drive: https://drive.google.com/drive/search?q=" + REF + ")" : "");
  const m = $("o-msg").value.trim();
  return "PAKET: " + u.pkgs[i].name + " (" + u.prices[i - 1] + " " + u.vat + ")\nREF: " + REF + "\n" + body + docNotes() + (m ? "\n\nMeddelande: " + m : "");
}
function docNotes() {
  const x = docSummary(); if (!x) return "";
  const T = t => t == null ? "–" : Math.round(t).toLocaleString("sv-SE");
  const l = ["", "UNDERLAG LÄST AUTOMATISKT (kontrollera mot filerna):"];
  if (x.f.budget) l.push("Budget (" + x.f.budgetFile + "): " + x.f.budget.years.map((y, i) => y + " oms " + T(x.f.budget.rev[i]) + ", EBITDA " + T(x.f.budget.eb[i])).join("; ") + " " + C().unit);
  if (x.f.ytd) l.push("Månadsrapport (" + x.f.ytdFile + "): " + x.f.ytd.n + " mån, oms " + T(x.f.ytd.rev) + ", EBITDA " + T(x.f.ytd.eb) + (x.f.ytd.revPrev != null ? "; fg år oms " + T(x.f.ytd.revPrev) + ", EBITDA " + T(x.f.ytd.ebPrev) : "") + " " + C().unit);
  if (x.f.plan) l.push("Affärsplan bifogad.");
  if (x.b) l.push("Vikt enligt modellen: " + Math.round(x.b.w * 100) + " %. Sammanvägt aktievärde " + fmtM(x.b.eq) + " (historiskt " + fmtM(x.v.eq) + ", tillväxtvärde " + fmtM(x.gv.eq) + ").");
  return l.join("\n");
}
const LARGE_EBITDA = 100000, LARGE_REV = 500000; /* thousands of SEK; other currencies are converted via EUR_FX */
/* Very small earnings: under 50 TSEK (converted for other currencies) in both EBITDA and EBIT the value would rest on revenue alone and mislead, so no figure is shown */
const SMALL_EB = 50;
function isSmall(d, v) { const f = EUR_FX[country] / EUR_FX.SE; return !d.noEb && v.norm < SMALL_EB * f && v.ebit < SMALL_EB * f; }
const SMALL_T = {
  SE: ["Värdering kan inte göras för tillfället", e => `Med en EBITDA på ${e} är resultatet för litet för att en multipelvärdering ska ge en rättvisande bild. Värdet skulle i praktiken bara bygga på omsättningen och bli missvisande, så vi visar ingen siffra.`, "Har resultatet belastats av engångskostnader eller en ägarlön över marknadsnivå kan du justera siffrorna i föregående steg. Annars bokar du gärna ett kostnadsfritt, konfidentiellt möte med en partner på Adsco Capital Partners, så går vi igenom vad som driver värdet i ert bolag.", "Exitberedskapen och iakttagelserna nedan gäller fullt ut även för ert bolag."],
  NO: ["Verdivurdering kan ikke gjøres for øyeblikket", e => `Med en EBITDA på ${e} er resultatet for lite til at en multippelvurdering gir et riktig bilde. Verdien ville i praksis bare bygge på omsetningen og bli misvisende, så vi viser ikke noe tall.`, "Er resultatet belastet med engangskostnader eller en eierlønn over markedsnivå, kan du justere tallene i forrige steg. Ellers er du velkommen til å bestille et kostnadsfritt, konfidensielt møte med en partner i Adsco Capital Partners, så går vi gjennom hva som driver verdien i selskapet.", "Exit-beredskapen og funnene nedenfor gjelder fullt ut også for ditt selskap."],
  EN: ["A valuation cannot be made at the moment", e => `With EBITDA of ${e}, earnings are too small for a multiple-based valuation to give a fair picture. The value would rest on revenue alone and be misleading, so we do not show a figure.`, "If earnings were hit by one-off costs or an owner's salary above the market rate, you can adjust the figures in the previous step. Otherwise, book a free, confidential meeting with a partner at Adsco Capital Partners and we will go through what drives the value of your company.", "The exit readiness score and findings below apply in full to your company too."],
  PL: ["Wycena nie jest obecnie możliwa", e => `Przy EBITDA na poziomie ${e} wynik jest zbyt niski, aby wycena mnożnikowa dawała rzetelny obraz. Wartość opierałaby się praktycznie wyłącznie na przychodach i wprowadzałaby w błąd, dlatego nie pokazujemy liczby.`, "Jeśli wynik obciążyły koszty jednorazowe lub wynagrodzenie właściciela powyżej poziomu rynkowego, możesz poprawić liczby w poprzednim kroku. W przeciwnym razie umów bezpłatne, poufne spotkanie z partnerem Adsco Capital Partners – omówimy, co napędza wartość Twojej spółki.", "Ocena gotowości do sprzedaży i wnioski poniżej w pełni dotyczą także Twojej spółki."],
  LT: ["Vertinimo šiuo metu atlikti negalima", e => `Kai EBITDA yra ${e}, rezultatas per mažas, kad vertinimas daugikliais parodytų teisingą vaizdą. Vertė praktiškai remtųsi tik pajamomis ir būtų klaidinanti, todėl skaičiaus nerodome.`, "Jei rezultatą sumažino vienkartinės išlaidos arba savininko atlyginimas viršija rinkos lygį, galite pakoreguoti skaičius ankstesniame žingsnyje. Kitu atveju užsisakykite nemokamą, konfidencialų susitikimą su Adsco Capital Partners partneriu – aptarsime, kas lemia jūsų įmonės vertę.", "Pasirengimo pardavimui įvertinimas ir išvados žemiau visiškai tinka ir jūsų įmonei."],
  NL: ["Een waardering is op dit moment niet mogelijk", e => `Met een EBITDA van ${e} is het resultaat te klein voor een waardering op basis van multiples die een eerlijk beeld geeft. De waarde zou vrijwel alleen op de omzet rusten en misleidend zijn, dus we tonen geen bedrag.`, "Is het resultaat gedrukt door eenmalige kosten of een salaris van de eigenaar boven marktniveau, dan kunt u de cijfers in de vorige stap aanpassen. Anders plant u een gratis, vertrouwelijk gesprek met een partner van Adsco Capital Partners en bespreken we wat de waarde van uw bedrijf bepaalt.", "De score voor verkoopgereedheid en de bevindingen hieronder gelden volledig ook voor uw bedrijf."],
  FI: ["Arvonmääritystä ei voida tehdä tällä hetkellä", e => `Kun EBITDA on ${e}, tulos on liian pieni, jotta kertoimiin perustuva arvio antaisi oikean kuvan. Arvo perustuisi käytännössä pelkkään liikevaihtoon ja olisi harhaanjohtava, joten emme näytä lukua.`, "Jos tulosta ovat rasittaneet kertaluonteiset kulut tai markkinatasoa suurempi omistajan palkka, voit korjata luvut edellisessä vaiheessa. Muuten varaa maksuton, luottamuksellinen tapaaminen Adsco Capital Partnersin partnerin kanssa, niin käymme läpi, mikä ohjaa yrityksesi arvoa.", "Myyntivalmiuspisteet ja havainnot alla koskevat täysin myös yritystäsi."],
};
/* Companies we work with: never valued on the public page (advisors still see it). Stored as hashes of the org number and the bare name, so no names are in the page source. */
const EXCL = new Set(["16vuyxi", "1oji9i0", "5ze7za", "5mxwjc", "z2685i"]);
const fnv = s => { let x = 0x811c9dc5; for (const c of s) { x ^= c.codePointAt(0); x = Math.imul(x, 0x01000193) >>> 0; } return x.toString(36); };
function isExcluded(d) {
  const o = String(lastOrgNumber || $("org").value || "").replace(/\D/g, "");
  const n = String(d.name || "").toLowerCase().replace(/\b(ab|oy|oyj|as|asa|ltd|aktiebolag|holdings?|global)\b/g, "").replace(/[^a-z0-9]/g, "");
  return (o.length >= 7 && EXCL.has(fnv(o))) || (n.length >= 3 && EXCL.has(fnv("n:" + n)));
}
const EXCL_T = {
  SE: ["Automatisk värdering är inte tillgänglig för det här bolaget", "Vi kan inte visa en automatisk värdering för det här bolaget.", "Boka gärna ett kostnadsfritt, konfidentiellt möte med en partner på Adsco Capital Partners, så går vi igenom värdet tillsammans."],
  NO: ["Automatisk verdivurdering er ikke tilgjengelig for dette selskapet", "Vi kan ikke vise en automatisk verdivurdering for dette selskapet.", "Bestill gjerne et kostnadsfritt, konfidensielt møte med en partner i Adsco Capital Partners, så går vi gjennom verdien sammen."],
  EN: ["An automatic valuation is not available for this company", "We cannot show an automatic valuation for this company.", "Book a free, confidential meeting with a partner at Adsco Capital Partners and we will go through the value together."],
  PL: ["Automatyczna wycena nie jest dostępna dla tej spółki", "Nie możemy pokazać automatycznej wyceny tej spółki.", "Umów bezpłatne, poufne spotkanie z partnerem Adsco Capital Partners – omówimy wartość wspólnie."],
  LT: ["Automatinis vertinimas šiai įmonei negalimas", "Negalime parodyti automatinio šios įmonės vertinimo.", "Užsisakykite nemokamą, konfidencialų susitikimą su Adsco Capital Partners partneriu – vertę aptarsime kartu."],
  NL: ["Een automatische waardering is voor dit bedrijf niet beschikbaar", "We kunnen voor dit bedrijf geen automatische waardering tonen.", "Plan een gratis, vertrouwelijk gesprek met een partner van Adsco Capital Partners en we bespreken de waarde samen."],
  FI: ["Automaattinen arvonmääritys ei ole saatavilla tälle yritykselle", "Emme voi näyttää automaattista arvonmääritystä tälle yritykselle.", "Varaa maksuton, luottamuksellinen tapaaminen Adsco Capital Partnersin partnerin kanssa, niin käymme arvon läpi yhdessä."],
};
function isLarge(d, v) { const f = EUR_FX[country] / EUR_FX.SE; return v.norm > LARGE_EBITDA * f || (d.rev[2] || 0) > LARGE_REV * f; }
let orderFrom = 1;
function buy(k) {
  pkg = k === "meet" ? "meet" : k === "partner" ? "partner" : "report"; if (pkg !== "meet") renderPkgs();
  track("unlock", { pkg, org: lastOrgNumber || "" });
  if (!$("step-o").hidden) { renderOrder(); return; }
  orderFrom = step;
  [1, 2, 3].forEach(i => $("step-" + i).hidden = true);
  $("step-o").hidden = false; $("o-main").hidden = false; $("o-done").hidden = true;
  if (!$("o-company").value) $("o-company").value = $("name").value.trim();
  if (!$("o-org").value) $("o-org").value = lastOrgNumber || $("org").value.trim() || "";
  if (!$("o-email").value) $("o-email").value = $("email").value.trim();
  $("o-err").textContent = "";
  const src = document.querySelector("#step-1 .adsco");
  if (src) { const c = src.cloneNode(true); c.querySelectorAll("[id]").forEach(x => x.removeAttribute("id")); $("o-adsco").replaceChildren(c); }
  renderOrder();
  $("step-o").scrollTop = 0;
  try { $("wizard").scrollIntoView({ behavior: "smooth", block: "start" }); } catch (e) {}
}
function renderOrder() {
  const u = U(), n = docCount();
  $("o-back").textContent = "← " + u.oBack;
  const meet = pkg === "meet";
  $("o-h").textContent = meet ? u.mH : u.oH;
  document.querySelector('#step-o .lede').textContent = meet ? u.mP : u.oP;
  $("o-choose").hidden = meet;
  document.querySelector('#step-o .ofine span').textContent = meet ? u.mFine : u.oFine;
  if (meet) {
    $("o-sum").innerHTML = '<span class="tag">' + esc(u.mTag) + '</span><h3>' + esc(u.mName) + '</h3><div class="price">' + esc(u.mPrice) + '</div>' +
      '<ul>' + u.mItems.map(x => '<li>' + esc(x) + '</li>').join("") + '</ul>' +
      '<div class="meta"><div><span>' + esc(u.mWhen) + '</span><b>' + esc(u.mWhenV) + '</b></div><div><span>' + esc(u.oDocsL) + '</span><b>' + esc(u.oDocsV(n)) + '</b></div></div>' +
      '<p class="who">' + esc(u.oWho) + '</p>';
    $("o-docs").textContent = n ? u.oDocs(n) : "";
    $("o-send").textContent = u.mSend;
    return;
  }
  const i = PKG_KEYS.indexOf(pkg), p = u.pkgs[i];
  $("o-choose").innerHTML = ["report", "partner"].map(k => { const j = PKG_KEYS.indexOf(k);
    return '<button type="button" class="oopt" role="radio" aria-checked="' + (k === pkg) + '" data-opk="' + k + '"><b>' + esc(u.pkgs[j].name) + '</b><span>' + esc(u.prices[j - 1]) + ' ' + esc(u.vat) + '</span></button>'; }).join("");
  const items = pkg === "partner" ? [...u.pkgs[1].items, ...u.pkgs[2].items.slice(1)] : u.pkgs[1].items;
  $("o-sum").innerHTML = (p.tag ? '<span class="tag">' + esc(p.tag) + '</span>' : '') + '<h3>' + esc(p.name) + '</h3>' +
    '<div class="price">' + esc(u.prices[i - 1]) + ' <small>' + esc(u.vat) + '</small></div>' +
    '<ul>' + items.map(x => '<li>' + esc(x) + '</li>').join("") + '</ul>' +
    '<div class="meta"><div><span>' + esc(u.oDelivery) + '</span><b>' + esc(u.oDeliveryV) + '</b></div><div><span>' + esc(u.oPayL) + '</span><b>' + esc(u.oPayV) + '</b></div><div><span>' + esc(u.oDocsL) + '</span><b>' + esc(u.oDocsV(n)) + '</b></div></div>' +
    '<p class="who">' + esc(u.oWho) + '</p>';
  $("o-docs").textContent = n ? u.oDocs(n) : "";
  $("o-send").textContent = u.oSend(u.prices[i - 1] + " " + u.vat);
}
async function sendOrder(e) {
  e.preventDefault();
  const u = U();
  let bad = false;
  ["o-name", "o-email", "o-company"].forEach(id => { const v = $(id).value.trim();
    const b = !v || (id === "o-email" && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v)); $(id).classList.toggle("need", b); bad = bad || b; });
  const okc = $("o-ok").checked;
  document.querySelector(".oconsent").classList.toggle("need", !okc);
  if (bad || !okc) { $("o-err").textContent = bad ? u.oNeed : u.oNeedOk; return; }
  const btn = $("o-send"); btn.disabled = true; btn.textContent = u.oSending; $("o-err").textContent = "";
  try {
    const r = await gs("submitOrder", { cc: country, pkg, name: $("o-name").value.trim(), email: $("o-email").value.trim(), phone: $("o-phone").value.trim(),
      company: $("o-company").value.trim(), org: $("o-org").value.trim(), ref: REF, notes: orderNotes(), deal: dealRow() });
    if (!r || !r.ok) throw new Error((r && r.reason) || "FAIL");
    track("order", { pkg, org: $("o-org").value.trim() || lastOrgNumber || "" });
    const first = $("o-name").value.trim().split(/\s+/)[0];
    $("o-main").hidden = true; $("o-done").hidden = false;
    const meetDone = pkg === "meet";
    $("o-done").innerHTML = '<div class="ok">✓</div><h3>' + esc((meetDone ? u.mDoneH : u.oDoneH)(first)) + '</h3><p>' + esc((meetDone ? u.mDoneP : u.oDoneP)($("o-email").value.trim())) + '</p><span class="ref">' + esc(REF) + '</span>' +
      '<button type="button" class="btn-ghost" id="o-done-back">← ' + esc(u.oDoneBack) + '</button>';
    $("o-done-back").addEventListener("click", () => go(orderFrom === 3 ? 3 : orderFrom));
    $("step-o").scrollTop = 0;
  } catch (err) {
    console.error(err);
    $("o-err").innerHTML = esc(u.oFail) + ' <a href="' + esc(formUrl()) + '" target="_blank" rel="noopener">' + esc(u.oFailLink) + '</a>';
  } finally { btn.disabled = false; if (!$("o-main").hidden) renderOrder(); }
}

/* ---------- Organisation number ---------- */
function plId(v) {
  const d = v.replace(/\D/g, "");
  if (!d || d.length > 10) return null;
  if (d.length === 10 && d[0] !== "0") {
    const w = [6, 5, 7, 2, 3, 4, 5, 6, 7]; let s = 0; for (let i = 0; i < 9; i++) s += w[i] * +d[i];
    return s % 11 === +d[9] ? { nip: d } : null;
  }
  return /^0*[1-9]\d{0,7}$/.test(d) ? { krs: d.padStart(10, "0") } : null;
}
function orgValid(v) {
  const d = v.replace(/\D/g, "");
  if (country === "PL") return !!plId(v);
  if (country === "LT") return /^\d{9}$/.test(d);
  if (country === "NL") return /^\d{8}$/.test(d);
  if (country === "FI") return fiValid(d);
  if (country === "NO") {
    if (d.length !== 9) return false;
    const w = [3, 2, 7, 6, 5, 4, 3, 2]; let s = 0; for (let i = 0; i < 8; i++) s += w[i] * +d[i];
    let c = 11 - (s % 11); if (c === 11) c = 0; return c !== 10 && c === +d[8];
  }
  const t = d.length === 12 ? d.slice(2) : d;
  if (t.length !== 10) return false;
  let s = 0; for (let i = 0; i < 10; i++) { let x = +t[i] * (i % 2 === 0 ? 2 : 1); if (x > 9) x -= 9; s += x; }
  return s % 10 === 0;
}
function orgMsg(text, kind) { const m = $("org-msg"); m.className = "orgmsg" + (kind ? " " + kind : ""); m.textContent = text || ""; }
const NACE = [[/^62\.01|^58\.2/, "saas"], [/^62|^63/, "itcons"], [/^8[678]|^75/, "health"], [/^4[123]/, "install"], [/^46/, "whole"], [/^4[5]|^47/, "retail"],
  [/^49|^5[0-3]/, "transport"], [/^5[56]/, "hosp"], [/^(1\d|2\d|3[0-3])/, "manuf"], [/^(69|7[0-4]|7[78]|8[0-2])/, "bizserv"]];
let lookedUp = "", listedInfo = "";
/* Primary NACE decides the industry; IT companies with a medical secondary code count as healthtech */
function pickIndustry(r) {
  const all = (r.naceAll && r.naceAll.length ? r.naceAll : [r.nace]).filter(Boolean);
  if (!all.length) return null;
  const med = /^(46\.46|32\.5|86|21\.|26\.6|72\.11)/;
  if (/^(62|63|58\.2)/.test(all[0]) && all.some(c => med.test(c))) return [null, "healthtech"];
  return NACE.find(([re]) => re.test(all[0])) || null;
}
function showUpload(note) {
  $("upload-block").hidden = false;
  $("extra").hidden = false;
  $("manual-up").hidden = true;
  $("up-note").textContent = note || "";
}
function renderFetch(r) {
  const u = U(), box = $("fetch-res");
  const lb = $("listed");
  if (!r) { box.hidden = true; box.innerHTML = ""; lb.hidden = true; listedInfo = ""; return; }
  if (r.listed && r.listed.exchange) {
    const q = (r.name || "") + " " + (r.listed.ticker ? r.listed.ticker + " " : "") + u.listedQ;
    listedInfo = r.listed.exchange + (r.listed.ticker ? " (" + r.listed.ticker + ")" : "");
    lb.innerHTML = '<h3>' + esc(u.listedH(listedInfo)) + '</h3><p>' + esc(u.listedP) + '</p><a href="https://www.google.com/search?q=' + encodeURIComponent(q) + '" target="_blank" rel="noopener">' + esc(u.listedLink) + '</a>';
    lb.hidden = false;
  } else { lb.hidden = true; listedInfo = ""; }
  const ys = r.years;
  box.innerHTML = '<h3>' + esc(u.fetchedH(r.name || "")) + '</h3><p class="src">' + esc((r.source === "allabolag" ? u.fetchedSrcAB : u.fetchedSrc) + (r.consolidated ? " " + u.fetchedGroup : "")) + '</p>' +
    ($("industry").value ? '<p class="src">' + esc(u.fetchedInd(RT().industries[$("industry").value])) + '</p>' : '') + '<div class="tablewrap"><table><thead><tr><th></th>' + ys.map(y => '<th class="r">' + y.year + '</th>').join("") + '</tr></thead><tbody>' +
    '<tr><td>' + u.yRev + '</td>' + ys.map(y => '<td class="r num">' + (y.revenue != null ? fmtT(y.revenue) : "–") + '</td>').join("") + '</tr>' +
    (ys.some(y => y.ebitda != null) ? '<tr><td>EBITDA</td>' + ys.map(y => '<td class="r num">' + (y.ebitda != null ? fmtT(y.ebitda) : "–") + '</td>').join("") + '</tr>' : "") +
    '<tr><td>' + u.ebitL + '</td>' + ys.map(y => '<td class="r num">' + (y.ebit != null ? fmtT(y.ebit) : "–") + '</td>').join("") + '</tr>' +
    '<tr><td>' + u.cash + '</td>' + ys.map(y => '<td class="r num">' + (y.cash != null ? fmtT(y.cash) : "–") + '</td>').join("") + '</tr>' +
    '</tbody></table></div>' + (ys.some(y => y.ebitda != null) ? "" : '<p class="warnline">' + esc(u.noDep) + '</p>') +
    "";
  box.hidden = false;
}
let fetchedDocs = 0, reportsUrl = "";
/* What the annual report's text says (see analyzeText in the engine). Shown in step 2, used in the valuation and the report. */
let reportText = null;
function setReportText(a) {
  if (!a) return;
  if (reportText && reportText.source === "bolagsverket" && a.source !== "bolagsverket" && (a.year || 0) <= (reportText.year || 0)) return;
  reportText = a; renderArNote();
  if (a.employees != null && benchSrc && benchSrc.employees == null) updateBench();
}
function renderArNote() {
  const box = $("arnote"); if (!box) return;
  const a = reportText; if (!a) { box.hidden = true; return; }
  const u = U(), tf = u.tf;
  const icon = s => s === "bad" ? "⚠" : s === "warn" ? "!" : "✓";
  const items = a.flags.map(f => '<li class="' + f.sev + '"><span class="ic">' + icon(f.sev) + '</span><div><b>' + esc(tf[f.key]) + '</b>' +
    (f.adj ? ' <span class="adjx">' + esc(u.arAdj(sign(f.adj))) + '</span>' : '') +
    (f.quote ? '<q>' + esc(f.quote.length > 220 ? f.quote.slice(0, 217) + "…" : f.quote) + '</q>' : '') + '</div></li>').join("");
  const risks = a.flags.some(f => f.sev === "bad" || f.adj);
  box.innerHTML = '<h3><svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true"><path d="M5 21.5V4.5A2.5 2.5 0 0 1 7.5 2H19v17H7.5A2.5 2.5 0 0 0 5 21.5zm0 0A2.5 2.5 0 0 0 7.5 24H19" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/></svg>' + esc(u.arH(a.year || "")) + '</h3>' +
    '<p class="src">' + esc(a.source === "bolagsverket" ? u.arSrcBV : u.arSrcPdf) + '</p>' +
    (a.about ? '<p class="arabout">' + esc(u.arAbout) + ' <q>' + esc(a.about) + '</q></p>' : '') +
    (a.employees != null ? '<p class="aremp">' + esc(u.arEmp(a.employees)) + '</p>' : '') +
    (items ? '<ul class="arflags">' + items + '</ul>' : '') +
    (!risks ? '<p class="arok">✓ ' + esc(u.arNone) + '</p>' : '');
  box.hidden = false;
}
/* ---------- Free vs full view ----------
   In the free result the details that make the report worth buying are shown as blurred placeholders: the digits are replaced,
   so the real figures are not in the page at all. Advisor mode (and the PDF report) shows everything. */
const FREE = () => !INIT.advisor;
const lk = s => FREE() ? '<span class="lk" aria-label="' + esc(U().inReport) + '">' + String(s).replace(/\d/g, "8") + '</span>' : s;
const lkLink = () => FREE() ? ' <a class="lkl" href="#order" data-buy="report">' + esc(U().inReport) + ' →</a>' : "";
/* ---------- The three multiples and how they blend into one value ---------- */
function renderBlend(v) {
  const u = U(), box = $("blend"); if (!box) return;
  const rev = Math.max(0, read().rev[2]);
  const x2 = n => n.toLocaleString(RT().loc, { minimumFractionDigits: 2, maximumFractionDigits: 2 }) + "x";
  const pct = w => Math.round(w * 100);
  const A = t => Math.abs(t) < 1000 ? fmtT(Math.round(t)) + " " + C().unit : fmtM(t);
  const rows = [
    [u.blEbitda, A(v.norm), fmtX(v.mult), A(v.evEb), v.wEbitda],
    [u.blEbit, A(v.ebit), fmtX(v.multEbit), A(v.evEbit), v.wEbit],
    [u.blRev, A(rev), x2(v.revMult), A(v.evRev), v.wRev]
  ];
  /* Implied multiples only where they mean something (not when a thin margin makes them explode) */
  const ok = (val, ref) => val > 0 && v.ev / val <= ref * 2;
  const imp = [ok(v.norm, v.mult) ? fmtX(v.ev / v.norm) : null, ok(v.ebit, v.multEbit) ? fmtX(v.ev / v.ebit) : null, rev > 0 ? x2(v.ev / rev) : null];
  box.innerHTML = '<h3>' + esc(u.blH) + '</h3>' +
    '<div class="bl-head"><span></span><span>' + esc(u.blBasis) + '</span><span>' + esc(u.blMult) + '</span><span>' + esc(u.blVal) + '</span><span>' + esc(u.blW) + '</span></div>' +
    rows.map(r => '<div class="bl-row"><span class="bl-n">' + esc(r[0]) + '</span><span class="num"><em>' + esc(u.blBasis) + '</em>' + r[1] + '</span><span class="num"><em>' + esc(u.blMult) + '</em><b>' + lk(r[2]) + '</b></span><span class="num"><em>' + esc(u.blVal) + '</em>' + lk(r[3]) + '</span>' +
      '<span class="bl-w"><i style="width:' + (FREE() ? 33 : pct(r[4])) + '%"></i><b>' + lk(pct(r[4]) + ' %') + '</b></span></div>').join("") +
    '<div class="bl-row bl-sum"><span class="bl-n">' + esc(u.blSum) + '</span><span></span><span></span><span class="num"><b>' + A(v.ev) + '</b></span><span></span></div>' +
    '<p class="bl-imp">' + (FREE() ? esc(u.blFree) + lkLink() : esc(u.blImp(imp[0], imp[1], imp[2]))) + '</p>';
}
/* ---------- Buyer market ----------
   Argos Index (Argos / Epsilon Research): median EV/EBITDA for unlisted eurozone mid-market companies, six-month rolling, published quarterly.
   Updated by hand each quarter. Smaller companies normally sell below it, so it is shown as market context, not used as the base. */
const MARKET = { q: "Q2 2026", median: 8.8, pe: 10.2, strat: 7.9 };
/* Listed Nordic serial acquirers that buy companies in each industry; they publish their acquisitions in press releases.
   Redeye: they have mostly paid 5–8x EBITA (initial consideration) for twenty years. */
const BUYERS = {
  manuf: ["Indutrade", "Lagercrantz", "Addtech", "Lifco", "Röko", "Idun Industrier", "Karnell"],
  install: ["Instalco", "Sdiptech", "Storskogen"],
  whole: ["Momentum Group", "OEM International", "Addtech", "Indutrade"],
  saas: ["Vitec Software", "Röko", "Storskogen"], itcons: ["Röko", "Storskogen"],
  healthtech: ["AddLife", "Medcap", "Lifco"], health: ["AddLife", "Medcap", "Lifco"],
  bizserv: ["Sdiptech", "Storskogen", "Röko"], transport: ["Storskogen", "Röko"], retail: ["Storskogen"], hosp: []
};
/* The named serial acquirers are Nordic; they are not shown for Polish companies */
function buyersFor(ind) { return country === "PL" || country === "LT" || country === "NL" ? [] : BUYERS[ind] || []; }
function renderMarket(d) {
  const el = $("market-line"); if (!el) return;
  const loc = RT().loc, x = n => n.toLocaleString(loc, { minimumFractionDigits: 1, maximumFractionDigits: 1 }) + "x";
  const b = buyersFor(d.industry);
  if (FREE()) { el.innerHTML = esc(U().mktFree(b.length)) + lkLink(); el.hidden = false; return; }
  el.textContent = U().mktLine(MARKET.q, x(MARKET.median), x(MARKET.pe), x(MARKET.strat)) + (b.length ? " " + U().mktBuyers(b.join(", ")) : "");
  el.hidden = false;
}
/* Structured figures for Adsco's deal database (one row per order) */
function dealRow() {
  try {
    const d = read(), v = value(d);
    if (!(d.rev[2] > 0)) return null;
    const docs = ["plan", "budget", "monthly"].map(k => [k, extras.filter(e => e.kind === k && e.state === "ok").length]).filter(x => x[1]).map(x => x[0] + " " + x[1]).join(", ");
    return { industry: d.industry, nace: benchSrc && benchSrc.nace || "", rev: d.rev[2], ebitda: v.norm, mult: v.mult, evLo: v.evLo, evHi: v.evHi, eqLo: v.eqLo, eqHi: v.eqHi,
      adj: v.adj.filter(a => a.v).map(a => a.key + " " + (a.v > 0 ? "+" : "") + a.v).join(", "), rate: d.rate ? d.rate.rate : null,
      cycle: d.cycle ? d.cycle.label + ": " + d.cycle.value : "", bench: d.bench && d.bench.margin != null ? d.bench.margin.toFixed(1) + " % (" + ["svag", "under median", "över median", "topp"][d.bench.pos] + ")" : "",
      growthDocs: docs };
  } catch (e) { return null; }
}
/* ---------- Policy rate: Riksbanken (SE) / Norges Bank (NO), fetched by the backend (cached 6 h) ----------
   Multiples are set for a normal rate level; each percentage point above it takes 0.2x off the EBITDA multiple
   (and the same share off the revenue multiple), each point below adds 0.2x, at most ±0.6x. */
const RATE_REF = { SE: 2.5, NO: 3.25, PL: 4.0, LT: 2.25, NL: 2.25, FI: 2.25 }, RATE_SENS = 0.2, RATE_CAP = 0.6;
/* NBP reference rate, used until the backend's policyRates returns PL (static.nbp.pl has no CORS, so it is fetched server-side) */
const RATE_PL_FALLBACK = { rate: 3.75, date: "2026-03-05", src: "NBP" }, RATE_LT_FALLBACK = { rate: 2.5, date: "2026-09-16", src: "ECB" };
let RATES = null;
function rateOf() { return RATES && RATES[country] ? RATES[country] : country === "PL" ? RATE_PL_FALLBACK : country === "LT" || country === "NL" || country === "FI" ? (RATES && RATES.LT) || RATE_LT_FALLBACK : null; }
function rateAdjOf() {
  const r = rateOf(); if (!r || !isFinite(r.rate)) return 0;
  const v = -(r.rate - RATE_REF[country]) * RATE_SENS;
  return Math.round(Math.max(-RATE_CAP, Math.min(RATE_CAP, v)) * 100) / 100;
}
function loadRates() {
  gs("policyRates", {}).then(r => { if (r && (r.SE || r.NO || r.PL || r.LT)) { RATES = r; if (step === 3) render(); } }).catch(() => {});
}
function fmtRate(x) { return Number(x).toLocaleString(RT().loc, { minimumFractionDigits: 2, maximumFractionDigits: 2 }); }
function renderRateLine() {
  const el = $("rate-line"); if (!el) return;
  const r = rateOf(); if (!r) { el.hidden = true; return; }
  const a = rateAdjOf();
  el.textContent = FREE() ? U().rateFree(fmtRate(r.rate), r.src) : U().rateLine(fmtRate(r.rate), r.src, r.date, a ? sign(a) : "", fmtRate(RATE_REF[country]));
  el.hidden = false;
}
/* ---------- Business cycle: KI Konjunkturbarometern (SE, monthly, per industry) and SSB's composite indicator for manufacturing (NO, quarterly) ----------
   KI's confidence indicators have mean 100 and standard deviation 10; SSB's series is compared with its own history.
   A sector clearly stronger or weaker than normal (one standard deviation) moves the multiple by ±0.25x. */
const KI_URL = "https://statistik.konj.se/PxWeb/api/v1/sv/KonjBar/indikatorer/Indikatorm.px";
const SSB_KB = "https://data.ssb.no/api/pxwebapi/v2/tables/08267/data?lang=no";
let cycle = null, cycleKey = "", kiMeta = null;
/* Best KI indicator for an SNI code, from the "(SNI 46.2 + 46.3)" style ranges in the indicator names */
function kiMatch(meta, nace) {
  const v = meta.variables.find(x => x.code === "Indikator"), code = parseFloat(String(nace).replace(/[^\d.]/g, ""));
  let best = null;
  v.values.forEach((id, i) => {
    const m = /\(SNI ([^)]+)\)/.exec(v.valueTexts[i]); if (!m || !(code > 0)) return;
    m[1].split("+").forEach(term => {
      const [a, b] = term.trim().split("-").map(s => s.trim());
      const p = (a.split(".")[1] || "").length, f = Math.pow(10, p);
      const t = Math.floor(code * f + 1e-9) / f, lo = parseFloat(a), hi = parseFloat(b || a);
      if (t >= lo - 1e-9 && t <= hi + 1e-9) {
        const span = hi - lo + 1 / f;
        if (!best || span < best.span) best = { id, span, label: v.valueTexts[i].replace(/\s*\(SNI[^)]*\)/, "").trim() };
      }
    });
  });
  return best || { id: "BTOT", label: "Totala näringslivet", span: 999 };
}
function cycleState(z) { return z >= 1 ? 4 : z >= 0.33 ? 3 : z > -0.33 ? 2 : z > -1 ? 1 : 0; }
function cycleAdjOf() { return cycle && cycle.cc === country ? (cycle.z >= 1 ? 0.25 : cycle.z <= -1 ? -0.25 : 0) : 0; }
async function updateCycle(src) {
  const cc = country, nace = src && src.nace;
  const dv = parseInt(String(nace || "").slice(0, 2), 10);
  const key = cc + lang + (nace || "");
  if (key === cycleKey) return;
  cycleKey = key; cycle = null; renderCycle();
  try {
    let c = null;
    if (cc === "SE") {
      if (!kiMeta) kiMeta = await getJson(KI_URL);
      const mt = dv > 0 ? kiMatch(kiMeta, nace) : { id: "BTOT", label: "Totala näringslivet" };
      const r = await fetch(KI_URL, { method: "POST", credentials: "omit", body: JSON.stringify({ query: [{ code: "Indikator", selection: { filter: "item", values: [mt.id] } }, { code: "Period", selection: { filter: "top", values: ["3"] } }], response: { format: "json-stat2" } }) });
      const j = await r.json();
      const vals = j.value.filter(x => x != null);
      if (!vals.length) throw new Error("no data");
      const avg = vals.reduce((a, b) => a + b, 0) / vals.length;
      const per = Object.keys(j.dimension.Period.category.index).pop();
      let lbl = mt.label;
      if (lang === "EN") {
        /* KI's English table still has Swedish indicator names, so translate the broad ones and otherwise use our industry name */
        const KIEN = { "Totala näringslivet": "Total business sector", "Tillverkningsindustri": "Manufacturing", "Byggverksamhet": "Construction", "Handel": "Trade", "Tjänstesektorn": "Services sector", "Detaljhandel": "Retail trade", "Partihandel": "Wholesale trade", "Motorfordonshandel": "Motor vehicle trade" };
        var kiFromInd = !KIEN[mt.label];
        lbl = KIEN[mt.label] || (bench && bench.cc === "SE" && /^[A-Za-z ,;()-]+$/.test(bench.label || "") ? bench.label : RT().industries[$("industry").value] || mt.label);
      }
      c = { cc, src: "Konjunkturinstitutet", fromInd: lang === "EN" && kiFromInd, label: lbl, value: vals[vals.length - 1], avg, z: (avg - 100) / 10, period: new Date(+per.slice(0, 4), +per.slice(5) - 1, 1).toLocaleDateString(RT().loc, { month: "long", year: "numeric" }) };
    } else if (dv >= 5 && dv <= 33) {
      const j = await getJson(SSB_KB + "&valueCodes[PKoder]=" + (dv < 10 ? "P103" : "P105") + "&valueCodes[Justering]=S&valueCodes[ContentsCode]=SammensattKonj&valueCodes[Tid]=*");
      const vals = j.value.filter(x => x != null);
      const m = vals.reduce((a, b) => a + b, 0) / vals.length, sd = Math.sqrt(vals.reduce((a, b) => a + (b - m) * (b - m), 0) / vals.length);
      const last = vals[vals.length - 1], per = Object.keys(j.dimension.Tid.category.index).pop();
      c = { cc, src: "SSB", label: lang === "EN" ? (dv < 10 ? "Manufacturing, mining and quarrying" : "Manufacturing") : lang === "SE" ? (dv < 10 ? "Industri och utvinning av mineral" : "Industri") : dv < 10 ? "Industri og bergverksdrift" : "Industri", value: last, mean: m, z: sd > 0 ? (last - m) / sd : 0, period: lang === "EN" ? per.replace(/(\d{4})K(\d)/, "Q$2 $1") : lang === "SE" ? per.replace(/(\d{4})K(\d)/, "kvartal $2 $1") : per.replace(/(\d{4})K(\d)/, "$2. kv. $1") };
    }
    if (cycleKey !== key) return;
    if (c) c.state = cycleState(c.z);
    cycle = c;
  } catch (e) { cycle = null; }
  renderCycle();
  if (step === 3) render();
}
function resetCycle() { cycle = null; cycleKey = ""; renderCycle(); }
function cycleSummary() { return cycle && cycle.cc === country ? { src: cycle.src, label: cycle.label, value: cycle.value, period: cycle.period, state: cycle.state, adj: cycleAdjOf() } : null; }
function renderCycle() {
  const u = U(), c = cycle && cycle.cc === country ? cycle : null;
  const txt = !c ? "" : FREE() ? u.cycFree(c) : u.cycLine(c, (Math.round(c.value * 10) / 10).toLocaleString(RT().loc), cycleAdjOf() ? sign(cycleAdjOf()) : "");
  const box = $("cycle");
  if (box) {
    if (!c) { box.hidden = true; box.innerHTML = ""; }
    else {
      box.innerHTML = '<h3><svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true"><path d="M2 17l6-6 4 4 9-9M15 6h6v6" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>' + esc(u.cycH) + '</h3>' +
        '<p><span class="bpos p' + [0, 1, 2, 3, 3][c.state] + '">' + esc(u.cycState[c.state]) + '</span> ' + esc(txt) + '</p>';
      box.hidden = false;
    }
  }
  const el = $("cycle-line");
  if (el) { el.hidden = !c; el.textContent = c ? u.cycH + ": " + u.cycState[c.state].toLowerCase() + ". " + txt : ""; }
}
/* ---------- Industry comparison: SCB branschnyckeltal (SE, quartiles per SNI division and size class) and SSB nøkkeltall (NO, section averages) ----------
   Both APIs are open and allow browser calls. The company's operating margin against its peers adjusts the multiple a little;
   growth and revenue per employee are shown for context only (growth is already in the valuation). */
const SCB_BNT = "https://statistikdatabasen.scb.se/api/v2/tables/TAB7067/data?lang=sv";
const SSB_NT = "https://data.ssb.no/api/pxwebapi/v2/tables/14792/data?lang=no";
let bench = null, benchSrc = null, benchKey = "";
const benchCache = {};
function naceSection(dv) {
  if (dv === 45) dv = 47;
  return dv <= 3 ? "A" : dv <= 9 ? "B" : dv <= 33 ? "C" : dv === 35 ? "D" : dv <= 39 ? "E" : dv <= 43 ? "F" : dv <= 47 ? "G" : dv <= 53 ? "H" :
    dv <= 56 ? "I" : dv <= 60 ? "J" : dv <= 63 ? "K" : dv <= 66 ? "L" : dv === 68 ? "M" : dv <= 75 ? "N" : dv <= 82 ? "O" : dv === 84 ? "P" :
    dv === 85 ? "Q" : dv <= 88 ? "R" : dv <= 93 ? "S" : dv <= 96 ? "T" : dv <= 98 ? "U" : "V";
}
function sizeClass(e) {
  return !(e >= 0) ? "TOT" : e < 1 ? "001" : e < 5 ? "1-4" : e < 10 ? "5-9" : e < 20 ? "10-19" : e < 50 ? "20-49" : e < 100 ? "50-99" : e < 200 ? "100-199" : e < 500 ? "200-499" : "+500";
}
/* Company figures from the fetched years (amounts in thousands) */
function companyKpis(src) {
  const ys = (src.years || []).filter(y => y.revenue > 0);
  if (!ys.length) return null;
  const last = ys[ys.length - 1], prev = ys.length > 1 ? ys[ys.length - 2] : null;
  const emp = src.employees != null ? src.employees : reportText && reportText.employees != null ? reportText.employees : null;
  return {
    year: last.year,
    margin: last.ebit != null ? last.ebit / last.revenue * 100 : null,
    growth: prev && prev.revenue > 0 ? (last.revenue / prev.revenue - 1) * 100 : null,
    perEmp: emp > 0 ? last.revenue / emp : null,
    emp
  };
}
async function getJson(url) {
  if (benchCache[url]) return benchCache[url];
  const r = await fetch(url, { credentials: "omit" });
  if (!r.ok) throw new Error("HTTP " + r.status);
  return benchCache[url] = await r.json();
}
const qs = o => Object.keys(o).map(k => "&valueCodes[" + encodeURIComponent(k) + "]=" + encodeURIComponent(o[k])).join("");
async function benchSE(dv, k) {
  const sec = naceSection(dv), code = "A87_" + sec + String(dv).padStart(2, "0"), size = sizeClass(k.emp);
  const sizes = size === "TOT" ? "TOT" : "TOT," + size;
  const q = qs({ SNI2025: code, Storleksklass: sizes, AKvartil: "UK,Med,ÖK", ContentsCode: "0000090C,0000090R,0000090K,0000090T", Tid: "*" });
  let j; if (lang === "EN") { try { j = await getJson(SCB_BNT.replace("lang=sv", "lang=en") + q); } catch (e) { j = null; } }
  if (!j) j = await getJson(SCB_BNT + q);
  const sz = Object.keys(j.dimension.Storleksklass.category.index), nq = 3, nc = 4;
  const at = (si, q, c) => j.value[(si * nq + q) * nc + c];
  const row = si => ({ size: sz[si], n: at(si, 1, 0), m: [0, 1, 2].map(q => at(si, q, 1)), g: [0, 1, 2].map(q => at(si, q, 2)), p: [0, 1, 2].map(q => at(si, q, 3)) });
  let pick = row(sz.length - 1);
  if (sz.length > 1 && !(pick.n >= 10 && pick.m.every(x => x != null))) pick = row(0);
  if (!(pick.n >= 10) || pick.m.some(x => x == null)) return null;
  const lab = String(j.dimension.SNI2025.category.label[code] || "").replace(/^[A-Z]?\d+\s*/, "");
  const yr = Object.keys(j.dimension.Tid.category.index)[0];
  return { cc: "SE", code: String(dv).padStart(2, "0"), label: lab, size: pick.size, n: pick.n, year: yr, m: pick.m, g: pick.g, p: pick.p };
}
async function benchNO(dv) {
  const sec = naceSection(dv);
  const q = qs({ NACE2025: sec, ContentsCode: "Drift,Antall", Tid: "*" });
  let j; if (lang === "EN") { try { j = await getJson(SSB_NT.replace("lang=no", "lang=en") + q); } catch (e) { j = null; } }
  if (!j) j = await getJson(SSB_NT + q);
  const [avg, n] = j.value;
  if (avg == null || !(n >= 10)) return null;
  const lab = String(j.dimension.NACE2025.category.label[sec] || "");
  return { cc: "NO", code: sec, label: lab, n, year: Object.keys(j.dimension.Tid.category.index)[0], avg };
}
/* Where the company sits: 0 bottom quartile, 1 below median, 2 above median, 3 top quartile */
const quart = (x, q) => x == null || q.some(v => v == null) ? null : x <= q[0] ? 0 : x < q[1] ? 1 : x < q[2] ? 2 : 3;
function benchAdj(b, k) {
  if (!b || !k || k.margin == null) return 0;
  if (b.cc === "SE") { const p = quart(k.margin, b.m); return p === 3 ? 0.3 : p === 0 ? -0.3 : 0; }
  const d = k.margin - b.avg;
  return d >= 7 ? 0.25 : d <= -7 ? -0.25 : 0;
}
async function updateBench(src) {
  if (src) benchSrc = src;
  const s = benchSrc, cc = country;
  if (!s) return;
  const k = companyKpis(s);
  const dv = parseInt(String(s.nace || "").slice(0, 2), 10);
  if (!k || !(dv > 0)) { bench = null; renderBench(); return; }
  const key = cc + lang + dv + "|" + sizeClass(k.emp);
  if (key === benchKey && bench) { bench.k = k; bench.adj = benchAdj(bench, k); renderBench(); return; }
  benchKey = key;
  try {
    const b = cc === "NO" ? await benchNO(dv) : await benchSE(dv, k);
    if (benchKey !== key) return;
    bench = b ? { ...b, k, adj: benchAdj(b, k) } : null;
  } catch (e) { bench = null; }
  if (lang === "EN" && bench && cycle && cycle.fromInd && cycle.cc === "SE" && /^[A-Za-z ,;()-]+$/.test(bench.label || "")) { cycle.label = bench.label; renderCycle(); }
  renderBench();
  if (step === 3) render();
}
/* Compact form for the report and the order notes */
function benchSummary(b) {
  const k = b.k || {};
  return b.cc === "SE"
    ? { cc: "SE", label: b.label, code: b.code, size: b.size, n: b.n, year: b.year, margin: k.margin, m: b.m, pos: quart(k.margin, b.m), adj: b.adj }
    : { cc: "NO", label: b.label, code: b.code, n: b.n, year: b.year, margin: k.margin, avg: b.avg, pos: k.margin == null ? null : k.margin - b.avg >= 7 ? 3 : k.margin - b.avg <= -7 ? 0 : 2, adj: b.adj };
}
function resetBench() { bench = null; benchSrc = null; benchKey = ""; renderBench(); resetCycle(); }
function renderBench() {
  const box = $("bench"); if (!box) return;
  const b = bench;
  if (!b || country !== b.cc) { box.hidden = true; box.innerHTML = ""; return; }
  const u = U(), k = b.k, pc = x => x == null ? "–" : (Math.round(x * 10) / 10).toLocaleString(u.loc || "sv-SE") + " %";
  const kr = x => x == null ? "–" : fmtT(Math.round(x));
  const chip = p => p == null ? "" : '<span class="bpos p' + p + '">' + esc(u.bPos[p]) + '</span>';
  const row = (name, you, ref, pos) => '<div class="brow2"><div class="bn">' + esc(name) + (pos || "") + '</div><div class="bv"><span><em>' + esc(u.bYou(k.year)) + '</em> <b class="num">' + you + '</b></span><span><em>' + esc(b.cc === "SE" ? u.bMedS : u.bAvg) + '</em> <b class="num">' + ref + '</b></span></div></div>';
  const rng = (q, f) => lk(f(q[1])) + ' <small>(' + lk(f(q[0])) + ' – ' + lk(f(q[2])) + ')</small>';
  let rows = "";
  if (b.cc === "SE") {
    rows += row(u.bMargin, pc(k.margin), rng(b.m, pc), chip(quart(k.margin, b.m)));
    rows += row(u.bGrowth, pc(k.growth), rng(b.g, pc), chip(quart(k.growth, b.g)));
    if (k.perEmp != null) rows += row(u.bPerEmp, kr(k.perEmp), rng(b.p, kr), chip(quart(k.perEmp, b.p)));
  } else {
    const d = k.margin == null ? null : k.margin - b.avg;
    rows += row(u.bMargin, pc(k.margin), lk(pc(b.avg)), d == null ? "" : '<span class="bpos ' + (d >= 7 ? "p3" : d <= -7 ? "p0" : "p2") + '">' + esc(d >= 7 ? u.bAbove : d <= -7 ? u.bBelow : u.bNear) + '</span>');
  }
  box.innerHTML = '<h3><svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true"><path d="M4 20V10M10 20V4M16 20v-7M22 20H2" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg>' + esc(u.bH) + '</h3>' +
    '<p class="src">' + esc(u.bSrc(b)) + '</p>' + '<div class="blist">' + rows + '</div>' +
    '<p class="bnote">' + (FREE() ? esc(u.bFree) + lkLink() : esc(b.adj ? u.bAdj(sign(b.adj)) : u.bNoAdj)) + '</p>';
  box.hidden = false;
}
/* Sweden: official annual reports from Bolagsverket (five latest), saved to the case folder; figures used unless the group view is shown */
/* List of fetched annual reports: green book icon, year, click to open */
const BOOK = '<svg class="book" viewBox="0 0 24 24" width="22" height="22" aria-hidden="true"><path d="M5 4.5A2.5 2.5 0 0 1 7.5 2H19v17H7.5A2.5 2.5 0 0 0 5 21.5z" fill="currentColor" opacity=".18"/><path d="M5 21.5V4.5A2.5 2.5 0 0 1 7.5 2H19v17H7.5A2.5 2.5 0 0 0 5 21.5zm0 0A2.5 2.5 0 0 0 7.5 24H19" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/><path d="M9.5 9.5l2 2 3.5-4" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>';
function repList(head, reps) {
  const u = U();
  const items = reps.slice().sort((a, b) => (b.year || 0) - (a.year || 0)).map(x => {
    const inner = BOOK + '<span class="ry">' + esc(u.repItem(x.year || "")) + '</span>' + (x.url ? '<span class="ro">' + esc(u.repOpen) + ' ↗</span>' : '<span class="ro ok">✓</span>');
    const dm = API_URL && x.url && /[?&]doc=([^&]+)&ref=([^&]+)/.exec(x.url);
    if (dm) return '<a class="repdoc" href="#" data-doc="' + esc(decodeURIComponent(dm[1])) + '" data-ref="' + esc(decodeURIComponent(dm[2])) + '">' + inner + '</a>';
    return x.url ? '<a class="repdoc" href="' + esc(x.url) + '" target="_blank" rel="noopener">' + inner + '</a>' : '<div class="repdoc">' + inner + '</div>';
  }).join("");
  return '<p class="rephead"><span class="okmark">✓</span> ' + esc(head) + '</p><div class="replist">' + items + '</div>';
}
/* Static site: open a fetched annual report in a new tab with the HTML from the API (the tab is opened on click so popup blockers allow it) */
document.addEventListener("click", async e => {
  const a = e.target.closest && e.target.closest("a.repdoc[data-doc]");
  if (!a) return;
  e.preventDefault();
  const w = window.open("", "_blank");
  if (w) w.document.write('<p style="font-family:sans-serif;padding:24px">' + esc(U().repLoading || "…") + '</p>');
  try {
    const d = await gs("getDoc", { doc: a.dataset.doc, ref: a.dataset.ref });
    if (!d || !d.html) throw new Error("NOT_FOUND");
    if (w) { w.document.open(); w.document.write(d.html); w.document.close(); w.document.title = d.title || ""; }
  } catch (err) {
    if (w) w.document.body.innerHTML = '<p style="font-family:sans-serif;padding:24px">' + esc(U().docFail) + '</p>';
  }
});
/* Reports found → only the optional "more info" box stays; none found → say so and open the PDF upload */
function reportsFound() {
  if (!slots.some(s => s)) $("upload-block").hidden = true;
  document.querySelectorAll("#fetch-res .pdflink").forEach(x => x.remove());
  $("manual-up").hidden = true;
  $("extra").hidden = false;
}
function reportsMissing(note) {
  $("reports").hidden = true;
  showUpload(note);
}
async function fetchReportsSE(org, r0) {
  const u = U(), box = $("reports");
  $("manual-up").hidden = true;
  box.hidden = false; box.textContent = u.repLoadingBV;
  try {
    const r = await gs("fetchReportsSE", { org, ref: REF, company: r0.name || "" });
    if (r && r.local) { box.hidden = true; $("manual-up").hidden = false; return; }
    if (!r || !r.ok || !r.reports || !r.reports.length) { reportsMissing(u.noBV); return; }
    fetchedDocs = r.reports.length;
    box.innerHTML = repList(u.repSavedBV(r.reports.length), r.reports);
    if (r.text) setReportText(analyzeText(r.text.body + "\n" + r.text.audit, { year: r.text.year, source: "bolagsverket" }));
    reportsFound();
    if (!r0.consolidated && r.years && r.years.length && !slots.some(s => s && s.state === "ok")) {
      const last = r.years[r.years.length - 1];
      applyExtraction({ years: r.years.map(y => ({ year: y.year, revenue: y.revenue, ebitda: y.ebitda != null ? y.ebitda : y.ebit, depFound: y.ebitda != null, primary: true })),
        cash: last.cash, debt: last.debt, name: r0.name, org: r0.org });
      if (pickIndustry(r0)) $("industry").value = pickIndustry(r0)[1];
      renderFetch({ ...r0, source: "bolagsverket", consolidated: false, reportsUrl: "", years: r.years.slice(-5) });
      if (r.years.some(y => y.ebit != null)) updateBench({ ...r0, years: r.years });
    }
    updateNext(); updateDocs();
  } catch (e) { reportsMissing(u.noBV); }
}
async function fetchReports(org, name) {
  const u = U(), box = $("reports");
  $("manual-up").hidden = true;
  box.hidden = false; box.textContent = u.repLoading;
  try {
    const r = await gs("fetchReportsNO", { org, ref: REF, company: name || "" });
    if (r && r.local) { box.hidden = true; showUpload(u.upAskNO); return; }
    if (!r || !r.ok || !r.reports || !r.reports.length) { reportsMissing(u.noBV); return; }
    fetchedDocs = r.reports.length;
    box.innerHTML = repList(u.repSaved(r.reports.length), r.reports);
    reportsFound();
    updateNext(); updateDocs();
  } catch (e) { reportsMissing(u.noBV); }
}
function showCta() {
  const u = U();
  $("cta").hidden = false; $("cta").classList.remove("nopl"); $("cta").querySelector("h3").textContent = u.ctaH;
  $("extra").hidden = false;
  $("s1-actions").hidden = true;
  $("cta-free").textContent = u.freeBtn;
  $("cta-r").textContent = u.buy[0] + " · " + u.prices[0];
  $("cta-p").textContent = u.buy[1] + " · " + u.prices[1];
}
function startFree() {
  const hasData = $("rev3").value !== "" || slots.some(s => s && s.state !== "busy");
  if (hasData) { go(2); return; }
  orgMsg(U().orgEmpty, "err");
  try { $("wizard").scrollIntoView({ behavior: "smooth", block: "start" }); $("org").focus({ preventScroll: true }); } catch (e) {}
}
/* ---------- Company name search ---------- */
let suggItems = [], suggSel = -1, suggSeq = 0, suggTimer = null;
const isName = v => /[A-Za-zÅÄÖÆØåäöæø]/.test(v);
function hideSugg() { $("org-sugg").hidden = true; $("org").setAttribute("aria-expanded", "false"); suggSel = -1; }
function renderSugg(msg) {
  const u = U(), ul = $("org-sugg");
  ul.innerHTML = suggItems.length ? suggItems.map((r, i) => '<li role="option" data-i="' + i + '" aria-selected="' + (i === suggSel) + '"><b>' + esc(r.name) + '</b><em>' + esc(r.org) + '</em><span>' + esc(r.city || "") + '</span></li>').join("")
    : '<li class="none">' + esc(msg || u.srchNone) + '</li>';
  ul.hidden = false; $("org").setAttribute("aria-expanded", "true");
}
async function searchName(now) {
  const u = U(), q = $("org").value.trim();
  if (country === "PL") { hideSugg(); if (now) orgMsg(u.srchNone, "err"); return; }
  if (country === "LT") return searchLT(q, now);
  if (country === "FI") return searchFI(q, now);
  if (country === "NL") {
    /* KVK's free data has no names: point the user to KVK's own search and a web search, prefilled with the name */
    if (q.replace(/[^\p{L}\d]/gu, "").length < 3) { hideSugg(); if (now) orgMsg(u.srchShort, "err"); return; }
    const ul = $("org-sugg"), e = encodeURIComponent(q);
    ul.innerHTML = '<li class="none">' + esc(u.nlFind(q)) + '</li>' +
      '<li class="web"><a href="https://www.kvk.nl/zoeken/" target="_blank" rel="noopener" data-copy="' + esc(q) + '">' + esc(u.nlOnKvk) + '</a></li>' +
      '<li class="web"><a href="https://www.google.com/search?q=' + encodeURIComponent('"' + q + '" KVK-nummer') + '" target="_blank" rel="noopener">' + esc(u.nlOnWeb) + '</a></li>' +
      '<li class="none">' + esc(u.nlPaste) + '</li>';
    suggItems = []; suggSel = -1; ul.hidden = false; $("org").setAttribute("aria-expanded", "true");
    if (now) orgMsg("");
    return;
  }
  if (!isName(q)) { hideSugg(); return; }
  if (q.replace(/[^A-Za-zÅÄÖÆØåäöæø0-9]/g, "").length < 3) { if (now) orgMsg(u.srchShort, "err"); hideSugg(); return; }
  const seq = ++suggSeq;
  if (now) orgMsg(u.srchLooking);
  try {
    const r = await gs("searchCompany", { cc: country, q });
    if (seq !== suggSeq) return;
    suggItems = (r && r.ok && r.results) || []; suggSel = suggItems.length ? 0 : -1;
    renderSugg();
    orgMsg(suggItems.length ? (now ? u.srchPick : "") : "", "");
  } catch (e) { if (seq === suggSeq) { suggItems = []; renderSugg(); } }
}
function pickSugg(i) {
  const r = suggItems[i]; if (!r) return;
  hideSugg();
  $("org").value = r.org;
  lookupOrg();
}
$("org").addEventListener("input", () => {
  clearTimeout(suggTimer);
  if (country === "PL") return;
  if (!isName($("org").value)) { hideSugg(); return; }
  suggTimer = setTimeout(() => searchName(false), country === "FI" ? 600 : 350);
});
/* KVK's search page ignores a name in its address, so the name is copied for pasting there */
$("org-sugg").addEventListener("click", e => { const a = e.target.closest("a[data-copy]"); if (a) { try { navigator.clipboard.writeText(a.dataset.copy); } catch (x) {} } });
$("org-sugg").addEventListener("mousedown", e => { const li = e.target.closest("[data-i]"); if (li) { e.preventDefault(); pickSugg(+li.dataset.i); } });
$("org").addEventListener("blur", () => setTimeout(hideSugg, 150));
$("org").addEventListener("keydown", e => {
  if ($("org-sugg").hidden || !suggItems.length) return;
  if (e.key === "ArrowDown" || e.key === "ArrowUp") { e.preventDefault(); suggSel = (suggSel + (e.key === "ArrowDown" ? 1 : -1) + suggItems.length) % suggItems.length; renderSugg(); }
  else if (e.key === "Escape") hideSugg();
});

async function lookupOrg() {
  const u = U(), v = $("org").value.trim();
  if (!v) { orgMsg(u.orgEmpty, "err"); $("org").focus(); return; }
  if (isName(v)) {
    clearTimeout(suggTimer);
    if (!$("org-sugg").hidden && suggItems.length && suggSel >= 0) { pickSugg(suggSel); return; }
    searchName(true); return;
  }
  hideSugg();
  if (!orgValid(v)) { orgMsg(u.orgBad, "err"); return; }
  lastOrgNumber = v;
  const d = v.replace(/\D/g, "");
  if (lookedUp === country + d) return;
  lookedUp = country + d;
  reportText = null; renderArNote(); resetBench();
  orgMsg(u.orgLooking); renderFetch(null);
  $("org-go").disabled = true;
  if (country === "PL") { try { await lookupPL(v); } finally { $("org-go").disabled = false; } return; }
  if (country === "LT") { try { await lookupLT(d); } finally { $("org-go").disabled = false; } return; }
  if (country === "NL") { try { await lookupNL(d); } finally { $("org-go").disabled = false; } return; }
  if (country === "FI") { try { await lookupFI(d); } finally { $("org-go").disabled = false; } return; }
  try {
    const r = await gs("lookupCompany", { cc: country, org: d });
    if (!r || r.local || !r.ok) {
      const nf = r && r.reason === "NOT_FOUND";
      orgMsg(nf ? u.orgNotFound : "", nf ? "err" : "");
      showUpload(u.noReports);
      return;
    }
    if (r.name) $("name").value = r.name;
    lastOrgNumber = r.org;
    track("lookup", { org: r.org });
    const ind = pickIndustry(r);
    if (ind) $("industry").value = ind[1];
    if (r.years && r.years.length) {
      if (!slots.some(s => s && s.state === "ok")) {
        applyExtraction({ years: r.years.map(y => ({ year: y.year, revenue: y.revenue, ebitda: y.ebitda != null ? y.ebitda : y.ebit, depFound: y.ebitda != null, primary: true })),
          cash: r.years[r.years.length - 1].cash, debt: null, name: r.name, org: r.org });
        if (ind) $("industry").value = ind[1];
      }
      orgMsg("");
      renderFetch(r);
      updateBench(r);
      updateCycle(r);
      showCta();
      reportsUrl = r.reportsUrl || "";
      if (country === "NO") fetchReports(d, r.name);
      else fetchReportsSE(d, r);
    } else {
      orgMsg(u.orgFoundName(r.name), "ok");
      showUpload(u.noReports);
    }
  } catch (e) { lookedUp = ""; orgMsg(u.orgFail, "err"); showUpload(u.noReports); }
  finally { $("org-go").disabled = false; }
}

/* ---------- Poland: company data from the court register (KRS) and, for a NIP, the VAT register ("biała lista") ----------
   Both public APIs answer the browser directly (CORS), so no backend call is needed. The KRS has no figures, only the list of filed
   statements, so the user downloads the XML from the RDF viewer (which blocks automated access) and uploads it here. */
const RDF_URL = "https://rdf-przegladarka.ms.gov.pl/wyszukaj-podmiot";
function plName(n) {
  return String(n || "").replace(/\s+SPÓŁKA Z OGRANICZONĄ ODPOWIEDZIALNOŚCIĄ(\s+SPÓŁKA KOMANDYTOWA)?$/i, (m, k) => k ? " Sp. z o.o. sp.k." : " Sp. z o.o.")
    .replace(/\s+PROSTA SPÓŁKA AKCYJNA$/i, " P.S.A.").replace(/\s+SPÓŁKA AKCYJNA$/i, " S.A.").replace(/\s+SPÓŁKA KOMANDYTOWA$/i, " sp.k.").trim();
}
async function plJson(url) { const r = await fetch(url); if (r.status === 404) return { notFound: true }; if (!r.ok) throw new Error("HTTP " + r.status); return r.json(); }
async function lookupPL(v) {
  const u = U(), id = plId(v);
  let krs = id && id.krs, nip = id && id.nip, wl = null;
  try {
    if (nip) {
      const today = new Date().toISOString().slice(0, 10);
      const j = await plJson("https://wl-api.mf.gov.pl/api/search/nip/" + nip + "?date=" + today);
      wl = j && j.result && j.result.subject;
      if (!wl) { orgMsg(u.orgNotFound, "err"); showUpload(u.noReports); return; }
      krs = wl.krs || null;
      if (!krs) { $("name").value = wl.name || ""; lastOrgNumber = nip; orgMsg(u.orgFoundName(wl.name || nip), "ok"); showUpload(u.noReports); return; }
    }
    let j = await plJson("https://api-krs.ms.gov.pl/api/krs/OdpisAktualny/" + krs + "?rejestr=P&format=json");
    if (j.notFound) j = await plJson("https://api-krs.ms.gov.pl/api/krs/OdpisAktualny/" + krs + "?rejestr=S&format=json");
    if (j.notFound || !j.odpis) { orgMsg(u.orgNotFound, "err"); showUpload(u.noReports); return; }
    const o = j.odpis.dane, d1 = o.dzial1 || {}, dp = d1.danePodmiotu || {}, d3 = o.dzial3 || {};
    const pd = (d3.przedmiotDzialalnosci || {}), main = (pd.przedmiotPrzewazajacejDzialalnosci || [])[0];
    const code = x => x ? x.kodDzial + "." + x.kodKlasa + "." + x.kodPodklasa : "";
    const filed = ((d3.wzmiankiOZlozonychDokumentach || {}).wzmiankaOZlozeniuRocznegoSprawozdaniaFinansowego || []);
    const lastY = filed.length ? ((String(filed[filed.length - 1].zaOkresOdDo || "").match(/(\d{4})\D*$/) || [])[1] || "") : "";
    const r = {
      name: plName(dp.nazwa), krs: j.odpis.naglowekA.numerKRS, nip: (dp.identyfikatory || {}).nip || nip || "", form: dp.formaPrawna || "",
      city: (((d1.siedzibaIAdres || {}).siedziba) || {}).miejscowosc || "", pkd: code(main), pkdName: main ? main.opis : "",
      nace: code(main), naceAll: [code(main)].concat((pd.przedmiotPozostalejDzialalnosci || []).map(code)).filter(Boolean),
      filedN: filed.length, filedLast: lastY
    };
    if (r.name) $("name").value = r.name;
    lastOrgNumber = "KRS " + r.krs + (r.nip ? ", NIP " + r.nip : "");
    reportsUrl = RDF_URL;
    track("lookup", { org: r.krs });
    const ind = pickIndustry(r);
    if (ind) $("industry").value = ind[1];
    orgMsg("");
    renderFetchPL(r);
    showUpload("");
  } catch (e) { console.warn(e); lookedUp = ""; orgMsg(u.orgFail, "err"); showUpload(u.noReports); }
}
function renderFetchPL(r) {
  const u = U(), box = $("fetch-res"), R = u.plRows;
  const city = r.city ? r.city.charAt(0) + r.city.slice(1).toLowerCase() : "";
  const rows = [[R.krs, r.krs], [R.nip, r.nip], [R.form, r.form.toLowerCase()], [R.pkd, r.pkd + (r.pkdName ? " – " + r.pkdName.toLowerCase() : "")], [R.city, city], [R.filed, u.plFiled(r.filedN, r.filedLast)]].filter(x => x[1]);
  box.innerHTML = '<h3>' + esc(u.plH(r.name)) + '</h3><p class="src">' + esc(u.plSrc) + '</p>' +
    ($("industry").value ? '<p class="src">' + esc(u.fetchedInd(RT().industries[$("industry").value])) + '</p>' : '') +
    '<div class="tablewrap"><table><tbody>' + rows.map(x => '<tr><td>' + esc(x[0]) + '</td><td>' + esc(x[1]) + '</td></tr>').join("") + '</tbody></table></div>' +
    '<p class="plhow">' + esc(u.plHow) + '</p><p class="plbtns"><a class="btn-ghost" href="' + RDF_URL + '" target="_blank" rel="noopener">' + esc(u.plRdf) + '</a> ' +
    '<button type="button" class="btn-ghost" id="pl-copy">' + esc(u.plCopy) + ' ' + esc(r.krs) + '</button></p>';
  box.hidden = false;
  $("pl-copy").addEventListener("click", () => { try { navigator.clipboard.writeText(r.krs); $("pl-copy").textContent = u.plCopied + " ✓"; } catch (e) {} });
}

/* ---------- Lithuania: company data via our relay (Cloudflare Worker) in front of Registrų centras / VMI open data ----------
   get.data.gov.lt sends no CORS headers and rejects Google's servers, so the Worker fetches it. The open accounts have revenue,
   profit before tax and net profit, not operating profit or depreciation: profit before tax is put in the EBITDA fields as a
   starting point and marked yellow for the user to check. */
const LT_RELAY = "https://exitkompass-lt.sture.workers.dev";
async function ltJson(path) { const r = await fetch(LT_RELAY + path); if (!r.ok && r.status !== 404) throw new Error("HTTP " + r.status); return r.json(); }
async function searchLT(q, now) {
  const u = U();
  if (q.replace(/\s/g, "").length < 3) { if (now) orgMsg(u.srchShort, "err"); hideSugg(); return; }
  const seq = ++suggSeq;
  if (now) orgMsg(u.srchLooking);
  try {
    const r = await ltJson("/search?q=" + encodeURIComponent(q));
    if (seq !== suggSeq) return;
    suggItems = (r && r.ok && r.results) || []; suggSel = suggItems.length ? 0 : -1;
    renderSugg();
    orgMsg(suggItems.length ? (now ? u.srchPick : "") : "", "");
  } catch (e) { if (seq === suggSeq) { suggItems = []; renderSugg(); } }
}
async function lookupLT(d) {
  const u = U();
  try {
    const r = await ltJson("/lookup?org=" + d);
    if (!r || !r.ok) { orgMsg(r && r.reason === "NOT_FOUND" ? u.orgNotFound : u.orgFail, "err"); showUpload(u.noReports); return; }
    if (r.name) $("name").value = r.name;
    lastOrgNumber = r.org;
    track("lookup", { org: r.org });
    const ind = pickIndustry(r);
    if (ind) $("industry").value = ind[1];
    reportsUrl = "https://www.registrucentras.lt/jar/ (įmonės kodas " + r.org + ")";
    if (r.years && r.years.length) {
      if (!slots.some(s => s && s.state === "ok")) {
        applyExtraction({ years: r.years.map(y => ({ year: y.year, revenue: y.revenue, ebitda: y.pbt != null ? y.pbt : y.net, depFound: false, primary: true })), cash: null, debt: null, name: r.name, org: r.org });
        if (ind) $("industry").value = ind[1];
      }
      orgMsg("");
      renderFetchLT(r);
      showCta();
      showUpload("");
    } else {
      orgMsg(u.orgFoundName(r.name), "ok");
      renderFetchLT(r);
      showUpload(u.noReports);
    }
  } catch (e) { console.warn(e); lookedUp = ""; orgMsg(u.orgFail, "err"); showUpload(u.noReports); }
}
function renderFetchLT(r) {
  const u = U(), box = $("fetch-res"), ys = r.years || [];
  const row = (l, k) => '<tr><td>' + esc(l) + '</td>' + ys.map(y => '<td class="r num">' + (y[k] != null ? fmtT(y[k]) : "–") + '</td>').join("") + '</tr>';
  box.innerHTML = '<h3>' + esc(u.fetchedH(r.name || "")) + '</h3><p class="src">' + esc(u.fetchedSrc) + (r.evrk ? " " + esc(u.ltEvrk(r.evrk)) : "") + '</p>' +
    ($("industry").value ? '<p class="src">' + esc(u.fetchedInd(RT().industries[$("industry").value])) + '</p>' : '') +
    (ys.length ? '<div class="tablewrap"><table><thead><tr><th></th>' + ys.map(y => '<th class="r">' + y.year + '</th>').join("") + '</tr></thead><tbody>' +
      row(u.yRev, "revenue") + row(u.ltPbt, "pbt") + row(u.ltNet, "net") + row(u.ltEq, "equity") + row(u.ltLiab, "liabilities") + '</tbody></table></div>' +
      '<p class="plhow">' + esc(u.ltNote) + (ys.some(y => y.pbt == null && y.net != null) ? " " + esc(u.ltNetUsed) : "") + '</p>' : '');
  box.hidden = false;
}

/* ---------- The Netherlands: KVK open data on filed annual accounts, through the same Cloudflare relay ----------
   Only the latest filing, by KVK number (no name search). Small companies usually file an abridged balance sheet only,
   so revenue and profit are often missing; whatever is there is filled in and the rest is left for the user. */
async function lookupNL(d) {
  const u = U();
  try {
    const r = await ltJson("/nl?kvk=" + d);
    if (!r || !r.ok) { orgMsg(r && r.reason === "BUSY" ? u.nlBusy : r && r.reason === "NOT_FOUND" ? u.orgNotFound : u.orgFail, "err"); if (r && r.reason === "BUSY") lookedUp = ""; showUpload(u.noReports); return; }
    lastOrgNumber = r.kvk;
    track("lookup", { org: r.kvk });
    const ind = r.nace ? pickIndustry(r) : null;
    if (ind) $("industry").value = ind[1];
    reportsUrl = "https://www.kvk.nl/zoeken/?source=all&q=" + r.kvk + " (KVK " + r.kvk + ")";
    const ys = (r.years || []).filter(y => y.revenue != null || y.op != null || y.pbt != null || y.net != null || y.equity != null);
    const withPl = ys.filter(y => y.revenue != null || y.op != null || y.pbt != null || y.net != null);
    if (withPl.length && !slots.some(s => s && s.state === "ok")) {
      applyExtraction({ years: withPl.map(y => ({ year: y.year, revenue: y.revenue, ebitda: y.op != null ? y.op : y.pbt != null ? y.pbt : y.net, depFound: false, primary: true })),
        cash: ys.length && ys[ys.length - 1].cash != null ? ys[ys.length - 1].cash : null, debt: null, name: $("name").value || null, org: r.kvk });
      if (ind) $("industry").value = ind[1];
    }
    const balOnly = ys.length && !withPl.length;
    orgMsg(balOnly ? u.nlOnlyBalance : "", balOnly ? "warn" : "");
    renderFetchNL(r, ys);
    if (ys.length) {
      showCta(); showUpload("");
      /* A balance sheet alone gives no value: say so instead of "Done!", and send the user to fill in revenue and EBITDA */
      if (balOnly) { $("cta").querySelector("h3").textContent = u.nlNoPlH; $("cta-free").textContent = u.nlNoPlBtn; $("cta").classList.add("nopl"); }
    } else showUpload(u.noReports);
  } catch (e) { console.warn(e); lookedUp = ""; orgMsg(u.orgFail, "err"); showUpload(u.noReports); }
}
function renderFetchNL(r, ys) {
  const u = U(), box = $("fetch-res");
  const rows = [["revenue", u.yRev], ["gross", u.nlGross], ["op", u.nlOp], ["pbt", u.nlPbt], ["net", u.nlNet], ["equity", u.nlEq], ["assets", u.nlAssets], ["liabilities", u.nlLiab]].filter(([k]) => ys.some(y => y[k] != null));
  const row = ([k, l]) => '<tr><td>' + esc(l) + '</td>' + ys.map(y => '<td class="r num">' + (y[k] != null ? fmtT(y[k]) : "–") + '</td>').join("") + '</tr>';
  box.innerHTML = '<h3>' + esc(u.fetchedH("KVK " + r.kvk)) + '</h3><p class="src">' + esc(u.fetchedSrc) + (r.sbi && u.nlSbi ? " " + esc(u.nlSbi(r.sbi)) : "") + '</p>' +
    ($("industry").value && r.nace ? '<p class="src">' + esc(u.fetchedInd(RT().industries[$("industry").value])) + '</p>' : '') +
    (ys.length ? '<div class="tablewrap"><table><thead><tr><th></th>' + ys.map(y => '<th class="r">' + y.year + '</th>').join("") + '</tr></thead><tbody>' + rows.map(row).join("") + '</tbody></table></div>' +
      '<p class="plhow">' + esc(u.nlNote) + '</p>' : '');
  box.hidden = false;
}
/* ---------- Finland: PRH open data, called straight from the browser (CORS is open, no key) ----------
   Names and industry from the YTJ register, figures from the digital (XBRL) financial statements. Only companies that file
   digitally have figures; the rest get the company found and an upload prompt. PRH answers 429 without CORS headers when
   it is busy, which the browser reports as a failed fetch, so every call is retried with a growing pause. */
const PRH = "https://avoindata.prh.fi";
async function prhGet(path, asText) {
  let last;
  for (let i = 0; i < 4; i++) {
    try { const r = await fetch(PRH + path); if (r.ok) return asText ? r.text() : r.json(); if (r.status === 404) return null; last = new Error("HTTP " + r.status); }
    catch (e) { last = e; }
    await new Promise(z => setTimeout(z, 1200 * (i + 1) * (i + 1)));
  }
  throw last;
}
/* Business ID (Y-tunnus) 1234567-8: weights 7 9 10 5 8 4 2, remainder 0 gives check 0, remainder 1 is invalid, else 11 - remainder */
function fiValid(d) {
  d = String(d).replace(/\D/g, ""); if (d.length === 7) d = "0" + d; if (d.length !== 8) return false;
  const w = [7, 9, 10, 5, 8, 4, 2]; let s = 0; for (let i = 0; i < 7; i++) s += w[i] * +d[i];
  const r = s % 11; return r !== 1 && (r === 0 ? 0 : 11 - r) === +d[7];
}
const fiId = d => { d = String(d).replace(/\D/g, ""); if (d.length === 7) d = "0" + d; return d.slice(0, 7) + "-" + d.slice(7); };
const fiName = c => { const n = (c.names || []).filter(x => !x.endDate).sort((a, b) => (a.type === "1" ? 0 : 1) - (b.type === "1" ? 0 : 1) || a.version - b.version)[0] || (c.names || [])[0] || {}; return n.name || ""; };
const fiCity = c => { const a = (c.addresses || [])[0]; return a && a.postOffices && a.postOffices[0] ? a.postOffices[0].city : ""; };
let fiCache = {};
async function searchFI(q, now) {
  const u = U(), k = q.trim().toLowerCase();
  if (k.replace(/[^\p{L}\d]/gu, "").length < 3) { if (now) orgMsg(u.srchShort, "err"); hideSugg(); return; }
  const seq = ++suggSeq;
  if (now) orgMsg(u.srchLooking);
  try {
    const j = fiCache["s:" + k] || (fiCache["s:" + k] = await prhGet("/opendata-ytj-api/v3/companies?name=" + encodeURIComponent(q.trim())));
    if (seq !== suggSeq) return;
    const forms = { OY: 0, OYJ: 1 };
    const list = ((j && j.companies) || []).filter(c => !c.endDate).map(c => ({ name: fiName(c), org: c.businessId.value, city: fiCity(c), f: ((c.companyForms || [])[0] || {}).type }))
      .sort((a, b) => (a.name.toLowerCase().startsWith(k) ? 0 : 1) - (b.name.toLowerCase().startsWith(k) ? 0 : 1) || ((a.f in forms) ? 0 : 1) - ((b.f in forms) ? 0 : 1) || a.name.length - b.name.length);
    suggItems = list.slice(0, 8); suggSel = suggItems.length ? 0 : -1;
    renderSugg();
    orgMsg(suggItems.length ? (now ? u.srchPick : "") : "", "");
  } catch (e) { if (seq === suggSeq) { suggItems = []; renderSugg(u.orgFail); } }
}
/* XBRL (SBR taxonomy): every amount is one metric with the line item as the MCY dimension (fi_MC:x...). The previous year is the
   same line with REF:x4. Line items used: x673 turnover, x689 operating profit, x448/x449 depreciation, x738 profit before
   appropriations and taxes, x740 profit for the year, x376 equity, x399 cash, x2934/x3023 loans from credit institutions, x360 total assets. */
function parseFIxbrl(x) {
  const d = new DOMParser().parseFromString(x, "text/xml"), C = {};
  for (const c of d.getElementsByTagNameNS("http://www.xbrl.org/2003/instance", "context")) {
    const per = [...c.getElementsByTagName("*")].filter(e => e.localName === "instant" || e.localName === "endDate").map(e => e.textContent.trim())[0] || "";
    const mem = {}; let n = 0;
    for (const e of c.getElementsByTagName("*")) if (e.localName === "explicitMember") { mem[e.getAttribute("dimension").split(":").pop()] = e.textContent.trim().split(":").pop(); n++; }
    C[c.getAttribute("id")] = { y: Number(per.slice(0, 4)), mem, extra: n - (mem.MCY ? 1 : 0) - (mem.REF ? 1 : 0) };
  }
  const by = {};
  for (const e of d.documentElement.children) {
    if (!e.getAttribute("unitRef")) continue;
    const c = C[e.getAttribute("contextRef")]; if (!c || !c.mem.MCY || c.extra || !c.y) continue;
    const v = Number(e.textContent); if (!isFinite(v)) continue;
    (by[c.y] = by[c.y] || {})[c.mem.MCY] = v;
  }
  const k = v => v == null ? null : Math.round(v / 1000);
  return Object.keys(by).map(Number).map(y => { const o = by[y];
    const dep = o.x448 != null ? o.x448 : o.x449 != null ? o.x449 : null;
    const op = o.x689 != null ? o.x689 : null;
    return { year: y, revenue: k(o.x673), op: k(op), dep: dep == null ? null : Math.round(Math.abs(dep) / 1000), pbt: k(o.x738), net: k(o.x740),
      equity: k(o.x376), cash: k(o.x399), debt: o.x2934 != null || o.x3023 != null ? k((o.x2934 || 0) + (o.x3023 || 0)) : null, assets: k(o.x360) }; });
}
async function lookupFI(d) {
  const u = U(), bid = fiId(d);
  try {
    const j = await prhGet("/opendata-ytj-api/v3/companies?businessId=" + bid);
    const c = j && j.companies && j.companies[0];
    if (!c) { orgMsg(u.orgNotFound, "err"); showUpload(u.noReports); return; }
    const name = fiName(c); $("name").value = name; lastOrgNumber = bid;
    track("lookup", { org: bid });
    const tol = ((c.mainBusinessLine || {}).type || "").replace(/\D/g, "");
    const ind = tol.length >= 4 ? pickIndustry({ nace: tol.slice(0, 2) + "." + tol.slice(2, 4) }) : null;
    if (ind) $("industry").value = ind[1];
    reportsUrl = "https://tietopalvelu.ytj.fi/yritys/" + bid + " (Y-tunnus " + bid + ")";
    orgMsg(u.orgLooking);
    const fl = await prhGet("/opendata-xbrl-api/v3/financials?businessId=" + bid);
    const periods = ((fl && fl.financials) || []).map(f => f.financialDate).sort().reverse();
    const years = {};
    for (const fd of periods.slice(0, 2)) {
      const x = await prhGet("/opendata-xbrl-api/v3/financial?businessId=" + bid + "&financialDate=" + fd, true);
      if (x) for (const y of parseFIxbrl(x)) if (!years[y.year]) years[y.year] = y;
    }
    const ys = Object.values(years).sort((a, b) => a.year - b.year).slice(-3);
    const withPl = ys.filter(y => y.revenue != null || y.op != null);
    if (withPl.length && !slots.some(s => s && s.state === "ok")) {
      const last = ys[ys.length - 1];
      applyExtraction({ years: withPl.map(y => ({ year: y.year, revenue: y.revenue, ebitda: y.op != null ? y.op + (y.dep || 0) : y.pbt, depFound: y.op != null && y.dep != null, primary: true })),
        cash: last.cash, debt: last.debt, name, org: bid });
      if (ind) $("industry").value = ind[1];
    }
    const balOnly = ys.length && !withPl.length;
    orgMsg(!ys.length ? u.fiNoDigital : balOnly ? u.fiOnlyBalance : "", !ys.length || balOnly ? "warn" : "");
    renderFetchFI(name, bid, tol, ys);
    if (ys.length) {
      showCta(); showUpload("");
      if (balOnly) { $("cta").querySelector("h3").textContent = u.nlNoPlH; $("cta-free").textContent = u.nlNoPlBtn; $("cta").classList.add("nopl"); }
    } else showUpload(u.fiNoDigital);
  } catch (e) { console.warn(e); lookedUp = ""; orgMsg(u.orgFail, "err"); showUpload(u.noReports); }
}
function renderFetchFI(name, bid, tol, ys) {
  const u = U(), box = $("fetch-res");
  const rows = [["revenue", u.yRev], ["op", u.fiOp], ["dep", u.fiDep], ["net", u.fiNet], ["equity", u.fiEq], ["cash", u.fiCash], ["debt", u.fiDebt]].filter(([k]) => ys.some(y => y[k] != null));
  const row = ([k, l]) => '<tr><td>' + esc(l) + '</td>' + ys.map(y => '<td class="r num">' + (y[k] != null ? fmtT(y[k]) : "–") + '</td>').join("") + '</tr>';
  box.innerHTML = '<h3>' + esc(u.fetchedH(name + " (" + bid + ")")) + '</h3><p class="src">' + esc(ys.length ? u.fetchedSrc : u.fiSrcNoFig) + (tol && u.fiTol ? " " + esc(u.fiTol(tol)) : "") + '</p>' +
    ($("industry").value && tol ? '<p class="src">' + esc(u.fetchedInd(RT().industries[$("industry").value])) + '</p>' : '') +
    (ys.length ? '<div class="tablewrap"><table><thead><tr><th></th>' + ys.map(y => '<th class="r">' + y.year + '</th>').join("") + '</tr></thead><tbody>' + rows.map(row).join("") + '</tbody></table></div>' +
      '<p class="plhow">' + esc(u.fiNote) + '</p>' : '');
  box.hidden = false;
}
/* ---------- Wiring ---------- */
document.addEventListener("click", e => {
  const b = e.target.closest("[data-buy]"); if (b) { e.preventDefault(); buy(b.dataset.buy); return; }
  const s = e.target.closest("[data-start]"); if (s) { e.preventDefault(); pkg = "free"; startFree(); }
});
$("o-form").addEventListener("submit", sendOrder);
$("o-back").addEventListener("click", () => go(orderFrom));
$("o-choose").addEventListener("click", e => { const b = e.target.closest("[data-opk]"); if (b) { pkg = b.dataset.opk; renderPkgs(); renderOrder(); } });
["o-name", "o-email", "o-company"].forEach(id => $(id).addEventListener("input", () => $(id).classList.remove("need")));
$("lead").addEventListener("submit", e => { e.preventDefault(); buy(pkg === "free" ? "report" : pkg); });
$("org").addEventListener("keydown", e => { if (e.key === "Enter") { e.preventDefault(); lookupOrg(); } });
$("org-go").addEventListener("click", lookupOrg);
$("cta-free").addEventListener("click", () => { const nopl = $("cta").classList.contains("nopl"); go(2); if (nopl) { ["rev3", "eb3"].forEach(id => $(id).classList.add("need")); msg("s2-msg", U().nlOnlyBalance, "warn"); try { $("rev3").focus({ preventScroll: true }); } catch (e) {} } });
$("manual-up").addEventListener("click", () => { showUpload(""); $("manual-up").hidden = true; });

function dropZone(el, onFiles) {
  ["dragenter", "dragover"].forEach(t => el.addEventListener(t, e => { e.preventDefault(); (e.target.closest(".slot") || el).classList.add("over"); }));
  ["dragleave", "drop"].forEach(t => el.addEventListener(t, e => { e.preventDefault(); el.querySelectorAll(".over").forEach(x => x.classList.remove("over")); el.classList.remove("over"); }));
  el.addEventListener("drop", e => { const f = e.dataTransfer && e.dataTransfer.files; if (f && f.length) onFiles(f, e); });
}
dropZone($("slots"), (f, e) => { const sl = e.target.closest(".slot"); addAnnual(f, sl ? +sl.dataset.slot : 0); });
dropZone($("extra"), f => addExtras(f));
$("slots").addEventListener("change", e => { const sl = e.target.closest(".slot"); if (e.target.files && e.target.files.length) addAnnual(e.target.files, +sl.dataset.slot); });
$("slots").addEventListener("click", e => { const b = e.target.closest("[data-rm]"); if (b) { e.preventDefault(); removeSlot(+b.dataset.rm); } });
$("extra-file").addEventListener("change", e => { addExtras(e.target.files); e.target.value = ""; });
["extra-list", "extra-list3", "gp-list"].forEach(id => $(id).addEventListener("click", e => { const b = e.target.closest("[data-rmx]"); if (b) { extras.splice(+b.dataset.rmx, 1); renderExtras(); } }));
if ($("adv-pdf")) $("adv-pdf").addEventListener("click", advisorPdf);
setupAdvisor();
$("extra-file3").addEventListener("change", e => { addExtras(e.target.files); e.target.value = ""; });
document.querySelectorAll(".gpcard").forEach(c => {
  const inp = c.querySelector("input");
  inp.addEventListener("change", e => { addExtras(e.target.files, c.dataset.kind); e.target.value = ""; });
  dropZone(c, f => addExtras(f, c.dataset.kind));
});
$("gp-open").addEventListener("click", () => {
  $("gp-panel").hidden = false; $("gp-open").hidden = true; renderExtras();
  try { $("gp-panel").scrollIntoView({ behavior: "smooth", block: "nearest" }); } catch (e) {}
});
dropZone($("extra3"), f => addExtras(f));

$("to2").addEventListener("click", () => go(2));
$("skip").addEventListener("click", () => go(2));
$("back1").addEventListener("click", () => go(1));
$("back2").addEventListener("click", () => go(2));
document.querySelectorAll(".stepper button").forEach(b => b.addEventListener("click", () => go(+b.dataset.go)));
$("f").addEventListener("input", e => { e.target.classList && e.target.classList.remove("filled", "missing", "need"); if (step === 3) render(); });
$("f").addEventListener("submit", e => { e.preventDefault(); go(3); });
$("lead-form").addEventListener("submit", sendLead);
$("example").addEventListener("click", () => { loadExample(); go(3); });
$("c-se").addEventListener("click", () => setCountry("SE"));
$("c-no").addEventListener("click", () => setCountry("NO"));

/* Country switch in the brand bar: switches in place, no page navigation (works whatever site hosts the embed) */
function switchCountry(cc) {
  if (cc === country) return;
  if (API_URL && window.history && history.replaceState) {
    try { history.replaceState(null, "", pathFor(lang, cc)); } catch (e) {}
  }
  const hadCompany = !!lookedUp;
  setCountry(cc);
  hideSugg(); orgMsg("");
  if (hadCompany) {
    lookedUp = ""; lastOrgNumber = ""; $("org").value = "";
    renderFetch(null); resetBench(); $("cta").hidden = true; $("extra").hidden = true; $("reports").hidden = true;
    go(1, false);
  }
  if (!$("step-o").hidden) renderOrder();
  try { $("org").focus({ preventScroll: true }); } catch (e) {}
}
/* Language and country are independent: any language can be used for any country (texts that name the registry, currency,
   VAT and rate source follow the country, see texts_x.js). Both switch in place so entered figures are kept. */
/* Each language has its own page; the country is a ?c= parameter when it differs from the page's own country */
const LANG_HOME = { SE: ["/", "SE"], NO: ["/no/", "NO"], EN: ["/en/", "SE"], PL: ["/pl/", "PL"], LT: ["/lt/", "LT"], NL: ["/nl/", "NL"], FI: ["/fi/", "FI"] };
function pathFor(l, cc) {
  const q = new URLSearchParams(location.search);
  const h = LANG_HOME[l] || LANG_HOME.SE;
  if (cc !== h[1]) q.set("c", cc.toLowerCase()); else q.delete("c");
  /* On exitkompass.eu the bare "/" opens the English page (a Cloudflare rule); ?l=se keeps the Swedish page */
  if (/\.eu$/i.test(location.hostname)) { if (l === "SE") q.set("l", "se"); else q.delete("l"); }
  const s = q.toString();
  return h[0] + (s ? "?" + s : "");
}
function setLang(l) {
  if (!["SE", "NO", "EN", "PL", "LT", "NL", "FI"].includes(l) || l === lang) return;
  lang = l;
  if (API_URL && window.history && history.replaceState) { try { history.replaceState(null, "", pathFor(l, country)); } catch (e) {} }
  applyLanguage();
  if (!$("step-o").hidden) renderOrder();
  /* refresh the source labels (SCB/SSB/KI) in the new language */
  if (benchSrc) { cycleKey = ""; updateCycle(benchSrc); updateBench(); }
  renderRateLine && renderRateLine();
  if (step === 3) render();
}
document.querySelectorAll("[data-lang]").forEach(a => a.addEventListener("click", e => { e.preventDefault(); setLang(a.dataset.lang); }));
if ($("lang-sel")) $("lang-sel").addEventListener("change", e => setLang(e.target.value));
$("fl-se").addEventListener("click", e => { e.preventDefault(); switchCountry("SE"); });
$("fl-no").addEventListener("click", e => { e.preventDefault(); switchCountry("NO"); });
if ($("fl-pl")) $("fl-pl").addEventListener("click", e => { e.preventDefault(); switchCountry("PL"); });
if ($("fl-lt")) $("fl-lt").addEventListener("click", e => { e.preventDefault(); switchCountry("LT"); });
if ($("fl-nl")) $("fl-nl").addEventListener("click", e => { e.preventDefault(); switchCountry("NL"); });
if ($("fl-fi")) $("fl-fi").addEventListener("click", e => { e.preventDefault(); switchCountry("FI"); });

/* On the European domain (exitkompass.eu) countries and languages are listed by population, largest first:
   Poland, the Netherlands, Sweden, Finland, Norway, Lithuania. ?eu=1 shows the same order on other hosts, for testing. */
const EU_SITE = /\.eu$/i.test(location.hostname) || new URLSearchParams(location.search).has("eu");
function euOrder() {
  if (!EU_SITE) return;
  const cc = ["pl", "nl", "se", "fi", "no", "lt"], nav = document.querySelector(".flags-sw");
  if (nav) cc.forEach(c => { const a = $("fl-" + c); if (a && a.parentNode === nav) nav.appendChild(a); });
  const sel = $("lang-sel");
  if (sel) ["EN", "PL", "NL", "SE", "FI", "NO", "LT"].forEach(l => { const o = sel.querySelector('option[value="' + l + '"]'); if (o) sel.appendChild(o); });
  document.querySelectorAll(".langsw").forEach(n => ["EN", "PL", "NL", "SE", "FI", "NO", "LT"].forEach(l => { const a = n.querySelector('[data-lang="' + l + '"]'); if (a) n.appendChild(a); }));
}

(function init() {
  euOrder();
  loadRates();
  if (API_URL) {
    const code = new URLSearchParams(location.search).get("advisor");
    if (code) gs("advisorCheck", { code }).then(r => { if (r && r.advisor) { INIT.advisor = true; setupAdvisor(); applyLanguage(); if (!$("step-3").hidden) go(3, false); } }).catch(() => {});
  }
  lang = ["EN", "NO", "PL", "LT", "NL", "FI"].includes(INIT.lang) ? INIT.lang : "SE";
  const cq = (new URLSearchParams(location.search).get("c") || "").toUpperCase();
  country = ["SE", "NO", "PL", "LT", "NL", "FI"].includes(cq) ? cq : ["SE", "NO", "PL", "LT", "NL", "FI"].includes(INIT.country) ? INIT.country : LANG_HOME[lang][1];
  if (country === "PL") document.body.classList.add("cc-pl");
  if (country === "LT") document.body.classList.add("cc-lt");
  if (country === "NL") document.body.classList.add("cc-nl");
  if (country === "FI") document.body.classList.add("cc-fi");
  if (INIT.embed) document.body.classList.add("embed");
  /* The country and language selectors live in the page header (one row instead of two) */
  { const br = document.querySelector(".brandbar .bb-right"), hw = document.querySelector("header.top .wrap"); if (br && hw) hw.appendChild(br); }
  applyLanguage();
  blankForm();
  track("visit");
  applyLanguage();
  go(1, false);
})();

/* ---------- Reading budgets and monthly reports from Excel / CSV (in the browser, with SheetJS) ----------
   Looks for a revenue row and an EBITDA row (or operating profit plus depreciation) and for columns that are years
   (budget) or months / year-to-date (monthly reports). Values are scaled to thousands by comparing with the latest
   annual revenue. Anything that cannot be read is left to the adviser, as before. */
const XLSX_URL = "https://cdnjs.cloudflare.com/ajax/libs/xlsx/0.18.5/xlsx.full.min.js";
let xlsxP = null;
function loadXlsx() {
  if (!xlsxP) xlsxP = new Promise((res, rej) => {
    if (window.XLSX) return res(window.XLSX);
    const s = document.createElement("script"); s.src = XLSX_URL;
    s.onload = () => res(window.XLSX); s.onerror = () => { xlsxP = null; rej(new Error("XLSX")); };
    document.head.appendChild(s);
  });
  return xlsxP;
}
const FIN_RX = {
  rev: [/^(summa\s+)?(netto)?omsättning|^nettoomsättning|^summa\s+(rörelsens\s+)?intäkter|^rörelsens\s+intäkter|^(sum\s+)?driftsinntekter|^salgsinntekt|^omsetning|^(total\s+|net\s+)?revenue|^net\s+sales|^turnover|^(total\s+)?sales$|^intäkter$|^försäljning$/],
  eb: [/ebitda|rörelseresultat\s+före\s+(av|ned)skrivn|resultat\s+före\s+avskrivn|driftsresultat\s+før\s+avskriv|resultat\s+før\s+avskriv/],
  ebit: [/^rörelseresultat(?!\s+före)|^driftsresultat(?!\s+før)|^ebit$|^operating\s+(profit|result|income)/],
  da: [/^(summa\s+)?(av|ned)skrivningar|^(sum\s+)?avskrivning(er)?|^depreciation|^amorti[sz]ation/]
};
const MONTHS = ["jan", "feb", "mar", "apr", "ma[jiy]", "jun", "jul", "aug", "sep", "o[ck]t", "nov", "de[cs]"].map(m => new RegExp("^" + m));
const YTD_RX = /ack|hittills|ytd|hittil|akkum|year\s*to\s*date|perioden?\s+(i\s+)?år/;
const PREV_RX = /fg\.?\s*år|föreg|fjol|i\s+fjor|forrige|fjorår|prior|last\s+year|\bpy\b|previous/;
const num = x => typeof x === "number" ? x : typeof x === "string" && /^[\s\-−(]*[\d\s.,]+\)?\s*$/.test(x) ? (() => {
  let t = x.replace(/[\s ]/g, "").replace("−", "-"); const neg = /^\(.*\)$/.test(t); t = t.replace(/[()]/g, "");
  if (/,\d{1,2}$/.test(t)) t = t.replace(/\./g, "").replace(",", "."); else t = t.replace(/[.,](?=\d{3}(\D|$))/g, "").replace(",", ".");
  const v = parseFloat(t); return isFinite(v) ? (neg ? -v : v) : null; })() : null;
function cellYear(c) {
  if (typeof c === "number" && c >= 2015 && c <= 2040 && Number.isInteger(c)) return c;
  const m = typeof c === "string" && c.match(/(?:^|\D)(20[1-4]\d)(?:\D|$)/);
  return m && !/[-/.]\s*\d{1,2}\b/.test(c.replace(m[1], "")) ? +m[1] : null;
}
function cellMonth(c) {
  if (c instanceof Date && !isNaN(c)) { const t = new Date(c.getTime() + 12 * 3600e3); return { y: t.getUTCFullYear(), m: t.getUTCMonth() + 1 }; }
  if (typeof c !== "string") return null;
  const t = c.trim().toLowerCase();
  let m = t.match(/^(20[1-4]\d)\s*[-/.]\s*(\d{1,2})$/) || t.match(/^(20[1-4]\d)(0[1-9]|1[0-2])$/);
  if (m) return { y: +m[1], m: +m[2] };
  m = t.match(/^(\d{1,2})\s*[-/.]\s*(20[1-4]\d)$/); if (m) return { y: +m[2], m: +m[1] };
  const i = MONTHS.findIndex(rx => rx.test(t));
  if (i >= 0 && t.length <= 14 && !/\d{1,2}\s*[-–]/.test(t)) { const y = t.match(/(20[1-4]\d)|'?(\d{2})$/); return { y: y ? (y[1] ? +y[1] : 2000 + +y[2]) : null, m: i + 1 }; }
  return null;
}
function rowLabel(r) {
  for (let i = 0; i < Math.min(4, r.length); i++) if (typeof r[i] === "string" && /[a-zåäöæø]{3}/i.test(r[i])) return { t: r[i].trim().toLowerCase().replace(/\s+/g, " "), i };
  return null;
}
/* Rows (array of arrays) → { years: {y: {rev, eb}}, months: {"y-m": {rev, eb}}, ytd: {...} } in the sheet's own unit */
function finFromRows(rows) {
  const find = key => { for (const r of rows) { const l = rowLabel(r); if (l && FIN_RX[key].some(rx => rx.test(l.t)) && r.slice(l.i + 1).some(c => num(c) != null)) return r; } return null; };
  const R = { rev: find("rev"), eb: find("eb"), ebit: find("ebit"), da: find("da") };
  if (!R.rev) return null;
  const ebAt = j => { const e = R.eb && num(R.eb[j]); if (e != null) return e; const a = R.ebit && num(R.ebit[j]), b = R.da && num(R.da[j]); return a != null ? a + (b != null ? Math.abs(b) : 0) : null; };
  const revIdx = rows.indexOf(R.rev);
  let best = null;
  for (let h = 0; h < revIdx; h++) {
    const r = rows[h] || [], yc = [], mc = [], ytd = [];
    r.forEach((c, j) => {
      const s = typeof c === "string" ? c.toLowerCase() : "";
      if (s && YTD_RX.test(s)) ytd.push({ j, prev: PREV_RX.test(s), y: cellYear(c) });
      else if (cellMonth(c)) mc.push({ j, ...cellMonth(c) });
      else if (cellYear(c)) yc.push({ j, y: cellYear(c), prev: PREV_RX.test(s) });
    });
    const score = yc.length * 2 + mc.length * 3 + ytd.length * 4;
    if (score >= 2 && (!best || score >= best.score)) best = { score, yc, mc, ytd, h };
  }
  if (!best) return null;
  const out = { years: {}, months: {}, ytd: null };
  best.yc.forEach(c => { const v = num(R.rev[c.j]); if (v != null && !c.prev) out.years[c.y] = { rev: v, eb: ebAt(c.j) }; });
  best.mc.forEach(c => { const v = num(R.rev[c.j]); if (v != null && v !== 0) out.months[(c.y || 0) + "-" + c.m] = { y: c.y, m: c.m, rev: v, eb: ebAt(c.j) }; });
  if (best.ytd.length) {
    const cur = best.ytd.find(c => !c.prev), prev = best.ytd.find(c => c.prev);
    const text = rows.slice(0, revIdx + 1).flat().filter(c => typeof c === "string").join(" ").toLowerCase();
    let n = null, m = text.match(/(20[1-4]\d)[-/.]?(\d{2})\s*[-–—]\s*(20[1-4]\d)[-/.]?(\d{2})/);
    if (m && +m[2] === 1) n = +m[4];
    if (!n) { const mm = text.match(/(jan\w*)\s*[-–—]\s*([a-zåäö]{3})\w*/); if (mm) { const i = MONTHS.findIndex(rx => rx.test(mm[2])); if (i >= 0) n = i + 1; } }
    if (cur && num(R.rev[cur.j]) != null) out.ytd = { n, rev: num(R.rev[cur.j]), eb: ebAt(cur.j), revPrev: prev ? num(R.rev[prev.j]) : null, ebPrev: prev ? ebAt(prev.j) : null };
  }
  return out;
}
/* Pick the scale (×0.001, ×1, ×1000) that brings an annual revenue figure closest to the latest annual revenue in thousands */
function finScale(annual, ref, text) {
  if (ref > 0 && annual > 0) return [0.001, 1, 1000].reduce((b, f) => Math.abs(Math.log(annual * f / ref)) < Math.abs(Math.log(annual * b / ref)) ? f : b, 1);
  if (/\b(msek|mnok|mkr|mnkr|million|mn)\b/.test(text)) return 1000;
  if (/\b(tsek|tnok|tkr|ksek|knok|kkr|thousand|'000)\b/.test(text)) return 1;
  return annual > 200000 ? 0.001 : 1;
}
/* A workbook → { kind, budget: {years:[y..], rev:[], eb:[]}, ytd: {n, rev, eb, revPrev, ebPrev, year} } in thousands, or { ok:false } */
async function readFinFile(file, kind, ctx) {
  const ext = (file.name.split(".").pop() || "").toLowerCase();
  if (!/^(xlsx|xls|csv|xlsm|ods)$/.test(ext)) return { ok: false, why: "type" };
  const X = await loadXlsx();
  let wb;
  if (ext === "csv") {
    const buf = await file.arrayBuffer();
    let txt = new TextDecoder("utf-8").decode(buf);
    if (txt.includes("\ufffd")) txt = new TextDecoder("windows-1252").decode(buf);
    wb = X.read(txt.replace(/^\ufeff/, ""), { type: "string", cellDates: true });
  } else wb = X.read(await file.arrayBuffer(), { type: "array", cellDates: true });
  const lastFY = ctx.lastFY, refRev = ctx.rev;
  let res = null;
  for (const name of wb.SheetNames) {
    const rows = X.utils.sheet_to_json(wb.Sheets[name], { header: 1, raw: true, defval: null, blankrows: false });
    const f = finFromRows(rows); if (!f) continue;
    const text = rows.slice(0, 12).flat().filter(c => typeof c === "string").join(" ").toLowerCase();
    const out = { ok: true, kind, sheet: name };
    const fy = Object.keys(f.years).map(Number).filter(y => y > lastFY).sort((a, b) => a - b).slice(0, 3);
    let ms = Object.values(f.months);
    const yearsM = [...new Set(ms.map(x => x.y).filter(Boolean))].sort();
    if (kind !== "monthly" && fy.length) out.budget = { years: fy, rev: fy.map(y => f.years[y].rev), eb: fy.map(y => f.years[y].eb) };
    else if (kind !== "monthly" && ms.length >= 12 && (yearsM.length ? yearsM[yearsM.length - 1] > lastFY : true)) {
      const y = yearsM.length ? yearsM[yearsM.length - 1] : lastFY + 1, sel = ms.filter(x => !x.y || x.y === y);
      if (sel.length === 12) out.budget = { years: [y], rev: [sel.reduce((s, x) => s + x.rev, 0)], eb: [sel.every(x => x.eb != null) ? sel.reduce((s, x) => s + x.eb, 0) : null] };
    }
    if (!out.budget) {
      if (f.ytd && f.ytd.n) out.ytd = { ...f.ytd, year: null };
      else if (ms.length) {
        const y = yearsM.length ? yearsM[yearsM.length - 1] : null, cur = ms.filter(x => x.y === y).sort((a, b) => a.m - b.m);
        let n = 0; while (n < cur.length && cur[n].m === n + 1) n++;
        if (n >= 1) {
          const take = cur.slice(0, n), prev = ms.filter(x => y && x.y === y - 1 && x.m <= n);
          const sum = (a, k) => a.every(x => x[k] != null) ? a.reduce((s, x) => s + x[k], 0) : null;
          out.ytd = { n, year: y, rev: sum(take, "rev"), eb: sum(take, "eb"), revPrev: prev.length === n ? sum(prev, "rev") : null, ebPrev: prev.length === n ? sum(prev, "eb") : null };
        }
      }
    }
    if (!out.budget && !out.ytd) continue;
    const annual = out.budget ? out.budget.rev[0] : out.ytd.rev * 12 / out.ytd.n;
    const k = finScale(annual, refRev, text), sc = x => x == null ? null : Math.round(x * k);
    if (out.budget) { out.budget.rev = out.budget.rev.map(sc); out.budget.eb = out.budget.eb.map(sc); }
    if (out.ytd) ["rev", "eb", "revPrev", "ebPrev"].forEach(key => out.ytd[key] = sc(out.ytd[key]));
    out.scale = k;
    res = out; break;
  }
  return res || { ok: false, why: "nodata" };
}
/* The newest readable budget and monthly report among the uploads */
function docFin() {
  const ok = (typeof extras !== "undefined" ? extras : []).filter(e => e.fin && e.fin.ok);
  const b = ok.filter(e => e.fin.budget).pop(), m = ok.filter(e => e.fin.ytd).pop();
  return { budget: b ? b.fin.budget : null, budgetFile: b ? b.file.name : "", ytd: m ? m.fin.ytd : null, ytdFile: m ? m.file.name : "",
    plan: (typeof extras !== "undefined" ? extras : []).some(e => e.kind === "plan" && e.state !== "err") };
}
/* Budget years aligned to the three years after the latest annual report; missing years carry the previous one */
function planFromBudget(b, d) {
  if (!b) return null;
  const y0 = years[2], rev = [1, 2, 3].map(i => { const k = b.years.indexOf(y0 + i); return k >= 0 ? b.rev[k] : NaN; });
  for (let i = 0; i < 3; i++) if (!(rev[i] > 0)) rev[i] = i ? rev[i - 1] : NaN;
  if (!(rev[0] > 0)) return null;
  const last = b.years.reduce((a, y, i) => b.rev[i] > 0 && b.eb[i] != null ? i : a, -1);
  const margin = last >= 0 ? b.eb[last] / b.rev[last] * 100 : d && d.rev[2] > 0 ? d.eb[2] / d.rev[2] * 100 : NaN;
  return { rev, margin, rate: NaN, fromDoc: true };
}

