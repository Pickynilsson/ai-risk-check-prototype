const mockAnalyses = {
  "philips-oneblade-360": {
  datasetType: "simulated-partner-data",
  analysisPeriod: "Januari–Juni 2026",

  reviewCount: "1 284",
  analyzedReviews: 1180,
  problemMentionCount: 212,
  problemMentionPercent: 18,

  riskScore: 38,
  riskLevel: "LÅG–MEDEL RISK",
  confidence: "HÖG",

  reliability:
    "Riskbedömningen baseras på ett stort simulerat analysunderlag från flera partnerkällor. Problemen förekommer återkommande, men bedöms främst påverka användbarhet och långsiktig kostnad snarare än omedelbar säkerhet.",

  recurringProblems: [
    {
      id: "replacement-blades",
      issue: "Reservbladen upplevs som dyra",
      mentions: 96,
      percentageOfAnalyzedReviews: 8,
      severity: "LÅG",
      affectedArea: "Långsiktig kostnad",
    },
    {
      id: "skin-irritation",
      issue: "Hudirritation vid känslig hud eller upprepad användning",
      mentions: 74,
      percentageOfAnalyzedReviews: 6,
      severity: "MEDEL",
      affectedArea: "Hudkomfort",
    },
    {
      id: "uneven-long-hair",
      issue: "Ojämnt resultat på längre eller grövre hårstrån",
      mentions: 61,
      percentageOfAnalyzedReviews: 5,
      severity: "MEDEL",
      affectedArea: "Rakresultat",
    },
    {
      id: "charging-performance",
      issue: "Försämrad batteri- eller laddningsprestanda över tid",
      mentions: 39,
      percentageOfAnalyzedReviews: 3,
      severity: "MEDEL",
      affectedArea: "Batteri och hållbarhet",
    },
  ],

  riskCalculation: {
    frequency: {
      weight: 45,
      score: 41,
      explanation:
        "Hur ofta samma problem förekommer i det analyserade materialet.",
    },
    severity: {
      weight: 35,
      score: 34,
      explanation:
        "Hur mycket problemen kan påverka användning, komfort eller produktens livslängd.",
    },
    sourceConsistency: {
      weight: 20,
      score: 39,
      explanation:
        "Om liknande problem återkommer i flera simulerade partnerkällor.",
    },
    weightedScore: 38,
  },

  reasons: [
    "18% av de analyserade omdömena innehåller minst ett återkommande problem",
    "Hudirritation och ojämnt rakresultat förekommer i flera delar av analysunderlaget",
    "Problemens allvarlighetsgrad bedöms huvudsakligen som låg till medel",
    "Liknande problem återkommer i flera simulerade partnerkällor",
  ],

  insights: [
    "Reservbladens kostnad är det mest frekvent identifierade riskområdet",
    "Hudirritation förekommer främst vid känslig hud eller upprepad användning",
    "Batteri- och laddningsproblem förekommer mer sällan men kan påverka långsiktig användning",
  ],

  limitations: [
    "Analysunderlaget är simulerat för prototypen. Recensionerna och källfördelningen representerar ett möjligt dataunderlag och har inte hämtats från de angivna externa källorna.",
    "Omdömenas äkthet och användarnas individuella förutsättningar kan inte verifieras i prototypen",
    "Risknivån beskriver återkommande problem och är inte ett bevis på att varje produkt får dessa problem",
  ],

  positivePercent: 72,
  neutralPercent: 10,
  negativePercent: 18,
},

  "beauty-neck-ds-8822": {
    riskLevel: "MEDEL–HÖG RISK",
    reliability:
      "Tillförlitligheten bedöms som låg på grund av begränsad användardata och varierande användarupplevelser.",
    reasons: [
      "34% negativa recensioner",
      "Begränsad mängd användarrecensioner",
      "Varierande användarupplevelser",
      "Begränsad information om långsiktig användning",
    ],
    insights: [
      "Produkten fungerar bra för vissa användare",
      "Begränsad mängd långsiktiga recensioner",
      "Variationer i användarupplevelser påverkar AI:ns riskbedömning",
    ],
    positivePercent: 52,
    neutralPercent: 14,
    negativePercent: 34,
    reviewCount: "230",
  },

  "chanel-gabrielle-eau-de-parfum": {
    riskLevel: "LÅG RISK",
    reliability:
      "Tillförlitligheten bedöms som hög baserat på verifierade recensioner och stabil användning över tid.",
    reasons: [
      "22% negativa omdömen",
      "Upplevelsen varierar beroende på personliga preferenser",
      "Vissa användare upplever att doften inte håller så länge som förväntat",
    ],
    insights: [
      "Doften upplevs som elegant och sofistikerad",
      "Upplevelsen varierar beroende på personliga preferenser",
      "Hållbarheten varierar mellan olika användare",
    ],
    positivePercent: 68,
    neutralPercent: 10,
    negativePercent: 22,
    reviewCount: "860+",
  },
};

export default mockAnalyses;