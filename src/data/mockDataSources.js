const mockDataSources = {
  "philips-oneblade-360": {
    reviewCount: "1 200+",
    negativePercent: 18,
    sourceCount: 3,

    summary: [
      "1 200+ recensioner analyserade",
      "18% negativa omdömen",
      "Data baserad på verifierade recensioner och användarupplevelser",
    ],

    sources: [
      {
        name: "Marketplace",
        amount: "720 användarrecensioner",
        description:
          "Vanliga teman: rakresultat, användarvänlighet och bladslitage.",
      },
      {
        name: "Forum",
        amount: "260 foruminlägg",
        description:
          "Diskussioner om batteritid, hållbarhet och användning över tid.",
      },
      {
        name: "Webbsidor",
        amount: "260 användaromdömen",
        description:
          "Produktinformation om leverans, tillbehör och produktkvalitet.",
      },
    ],

    reviews: [
      "Enkel att använda och fungerar bra för kortare skägg.",
      "Bladen behöver ibland flera drag vid längre hårstrån.",
    ],

    note:
      "Informationen har analyserats utifrån användarrecensioner och tillgängliga datakällor. Resultaten kan variera beroende på användningsområde och personliga preferenser.",
  },

  "beauty-neck-ds-8822": {
    reviewCount: "230",
    negativePercent: 34,
    sourceCount: 3,

    summary: [
      "230 recensioner analyserade",
      "34% negativa omdömen",
      "Data baserad på recensioner och information från verifierade källor",
    ],

    sources: [
      {
        name: "Marketplace",
        amount: "230 användarrecensioner",
        description:
          "Verifierade användarrecensioner och produktbetyg.",
      },
      {
        name: "Forum",
        amount: "90 foruminlägg",
        description:
          "Diskussioner om användning och produktupplevelser.",
      },
      {
        name: "Webbsidor",
        amount: "50 användaromdömen",
        description:
          "Produktinformation och användarrecensioner.",
      },
    ],

    reviews: [
      "Resultatet motsvarade inte mina förväntningar.",
      "Effekten känns tillfällig och svår att märka över tid.",
    ],

    note:
      "Informationen har analyserats utifrån användarrecensioner och tillgängliga datakällor. Resultaten kan variera beroende på datamängd och användarupplevelser.",
  },

  "chanel-gabrielle-eau-de-parfum": {
    reviewCount: "860+",
    negativePercent: 22,
    sourceCount: 3,

    summary: [
      "860+ recensioner analyserade",
      "22% negativa omdömen",
      "Data baserad på verifierade recensioner och användarupplevelser",
    ],

    sources: [
      {
        name: "Marketplace",
        amount: "420 användarrecensioner",
        description:
          "Vanliga teman: doft, hållbarhet och pris.",
      },
      {
        name: "Forum",
        amount: "240 foruminlägg",
        description:
          "Diskussioner om doftprofil, jämförelser och personliga preferenser.",
      },
      {
        name: "Webbsidor",
        amount: "200 användaromdömen",
        description:
          "Produktinformation om äkthet, leverans och produktkvalitet.",
      },
    ],

    reviews: [
      "Doften känns lyxig och passar perfekt för speciella tillfällen.",
      "Håller inte så länge som jag förväntade mig.",
    ],

    note:
      "Informationen har analyserats utifrån användarrecensioner och tillgängliga datakällor. Resultaten kan variera beroende på personliga preferenser och användningssituationer.",
  },
};

export default mockDataSources;