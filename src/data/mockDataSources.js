const mockDataSources = {
  "philips-oneblade-360": {
    reviewCount: "1 200+",
    negativePercent: 18,
    sourceCount: 3,

   summary: [
    "1 200+ simulerade recensioner i analysunderlaget",
    "18% negativa omdömen i det simulerade underlaget",
    "Dataunderlaget är simulerat för att demonstrera analysflödet i prototypen",
  ],

    sources: [
      {
        name: "Marketplace",
        amount: "720 simulerade användarrecensioner",
        description:
          "Simulerat innehåll med teman som rakresultat, användarvänlighet och bladslitage.",
      },
      {
        name: "Forum",
        amount: "260 simulerade foruminlägg",
        description:
          "Simulerade diskussioner om batteritid, hållbarhet och användning över tid.",
      },
      {
        name: "Webbsidor",
        amount: "260 simulerade användaromdömen",
        description:
          "Simulerat innehåll om leverans, tillbehör och produktkvalitet.",
      },
    ],

    reviews: [
      "Enkel att använda och fungerar bra för kortare skägg.",
      "Bladen behöver ibland flera drag vid längre hårstrån.",
    ],

   note:
  "Dataunderlaget är simulerat för prototypen och har inte hämtats från de angivna externa källorna. Det används för att visa hur recensioner från olika typer av källor skulle kunna struktureras och analyseras.",
  },

  "beauty-neck-ds-8822": {
    reviewCount: "230",
    negativePercent: 34,
    sourceCount: 3,

    summary: [
      "230 simulerade recensioner i analysunderlaget",
      "34% negativa omdömen i det simulerade underlaget",
      "Dataunderlaget är simulerat för att demonstrera analysflödet i prototypen",
    ],

    sources: [
      {
        name: "Marketplace",
        amount: "230 simulerade användarrecensioner",
        description:
          "Simulerat innehåll med användarupplevelser och produktbetyg.",
      },
      {
        name: "Forum",
        amount: "90 simulerade foruminlägg",
        description:
          "Simulerade diskussioner om användning och produktupplevelser.",
      },
      {
        name: "Webbsidor",
        amount: "50 simulerade användaromdömen",
        description:
          "Simulerat innehåll med produktinformation och användarupplevelser.",
      },
    ],

    reviews: [
      "Resultatet motsvarade inte mina förväntningar.",
      "Effekten känns tillfällig och svår att märka över tid.",
    ],

   note:
     "Dataunderlaget är simulerat för prototypen och har inte hämtats från de angivna externa källorna. Det används för att visa hur recensioner från olika typer av källor skulle kunna struktureras och analyseras.",
  },

  "chanel-gabrielle-eau-de-parfum": {
    reviewCount: "860+",
    negativePercent: 22,
    sourceCount: 3,

    summary: [
      "860+ simulerade recensioner i analysunderlaget",
      "22% negativa omdömen i det simulerade underlaget",
      "Dataunderlaget är simulerat för att demonstrera analysflödet i prototypen",
    ],

    sources: [
      {
        name: "Marketplace",
        amount: "420 simulerade användarrecensioner",
        description:
          "Simulerat innehåll med teman som doft, hållbarhet och pris.",
      },
      {
        name: "Forum",
        amount: "240 simulerade foruminlägg",
        description:
          "Simulerade diskussioner om doftprofil, jämförelser och personliga preferenser.",
      },
      {
        name: "Webbsidor",
        amount: "200 simulerade användaromdömen",
        description:
          "Simulerat innehåll om äkthet, leverans och produktkvalitet.",
      },
    ],

    reviews: [
      "Doften känns lyxig och passar perfekt för speciella tillfällen.",
      "Håller inte så länge som jag förväntade mig.",
    ],

    note:
      "Dataunderlaget är simulerat för prototypen och har inte hämtats från de angivna externa källorna. Det används för att visa hur recensioner från olika typer av källor skulle kunna struktureras och analyseras.",
  },
};

export default mockDataSources;