import philipsAirfryer3000Image from "../assets/images/Philips Airfryer 3000 Series.png";
import ninjaAF100EUImage from "../assets/images/Ninja AF100EU Air Fryer.png";
import cosoriAirfryerImage from "../assets/images/Cosori Premium Airfryer CP158-AF.png";


const kitchenProductData = {
  "philips-airfryer-3000-series": {
    product: {
      id: "philips-airfryer-3000-series",
      name: "Philips Airfryer 3000 Series",
      category: "Airfryer",
      image: philipsAirfryer3000Image,
      analysisStatus: "ready",
    },

    analysis: {
      reviewCount: "1 247",
      analyzedReviews: 1148,
      problemMentionCount: 176,
      problemMentionPercent: 15,

      riskScore: 33,
      riskLevel: "LÅG RISK",
      confidence: "HÖG",

      reliability:
        "Riskbedömningen baseras på ett omfattande simulerat analysunderlag från flera partnerkällor. Produkten uppvisar överlag stabil prestanda men några återkommande problem förekommer.",

      recurringProblems: [
        {
          id: "nonstick-coating",
          issue: "Beläggningen i korgen slits efter längre användning",
          mentions: 63,
          percentageOfAnalyzedReviews: 5,
          severity: "LÅG",
          affectedArea: "Hållbarhet",
        },
        {
          id: "fan-noise",
          issue: "Fläkten upplevs som högljudd",
          mentions: 49,
          percentageOfAnalyzedReviews: 4,
          severity: "LÅG",
          affectedArea: "Ljudnivå",
        },
        {
          id: "uneven-cooking",
          issue: "Ojämn tillagning vid större portioner",
          mentions: 38,
          percentageOfAnalyzedReviews: 3,
          severity: "MEDEL",
          affectedArea: "Matlagningsresultat",
        },
        {
          id: "basket-handle",
          issue: "Handtaget känns löst efter lång tids användning",
          mentions: 26,
          percentageOfAnalyzedReviews: 2,
          severity: "LÅG",
          affectedArea: "Handtag",
        },
      ],

      riskCalculation: {
        frequency: {
          weight: 45,
          score: 34,
          explanation:
            "Hur ofta samma problem förekommer i det analyserade materialet.",
        },
        severity: {
          weight: 35,
          score: 31,
          explanation:
            "Hur mycket problemen påverkar användning och livslängd.",
        },
        sourceConsistency: {
          weight: 20,
          score: 35,
          explanation:
            "Liknande problem återkommer i flera simulerade partnerkällor.",
        },
        weightedScore: 33,
      },

      reasons: [
        "15% av de analyserade omdömena innehåller återkommande problem",
        "Slitage på non-stick-beläggningen nämns oftast",
        "Problemen bedöms huvudsakligen ha låg påverkan",
        "Liknande mönster återkommer mellan flera partnerkällor",
      ],

      insights: [
        "Matlagningsresultatet får överlag mycket positiva omdömen",
        "Beläggningen påverkas främst efter lång tids användning",
        "De flesta rapporterade problem påverkar inte produktsäkerheten",
      ],

      limitations: [
        "Analysunderlaget är simulerat för prototypen.",
        "Användningsfrekvens och rengöring kan påverka resultaten.",
        "Risknivån beskriver återkommande mönster och inte varje enskild produkt.",
      ],

      chartData: {
        problemPercent: 15,
        noProblemMentionPercent: 85,
      },
    },

    dataSources: {
      datasetType: "simulated-partner-data",
      analysisPeriod: "Januari–Juni 2026",
      analyzedReviews: 1148,
      problemMentionCount: 176,

      partnerSources: [
        {
          source: "Amazon",
          reviewCount: 505,
          problemMentions: 77,
        },
        {
          source: "Google Shopping",
          reviewCount: 371,
          problemMentions: 58,
        },
        {
          source: "Trustpilot",
          reviewCount: 272,
          problemMentions: 41,
        },
      ],
    },
  },

     "ninja-af100eu-air-fryer": {
    product: {
      id: "ninja-af100eu-air-fryer",
      name: "Ninja AF100EU Air Fryer",
      category: "Airfryer",
      image: ninjaAF100EUImage,
      analysisStatus: "ready",
    },

    analysis: {
      reviewCount: "1 286",
      analyzedReviews: 1196,
      problemMentionCount: 263,
      problemMentionPercent: 22,

      riskScore: 45,
      riskLevel: "MEDEL RISK",
      confidence: "HÖG",

      reliability:
        "Riskbedömningen baseras på ett omfattande simulerat analysunderlag från flera partnerkällor. De återkommande problemen gäller främst ojämn tillagning, slitage på korgens beläggning, hög ljudnivå och lukt under användning.",

      recurringProblems: [
        {
          id: "uneven-cooking",
          issue:
            "Maten tillagas ojämnt när korgen fylls med större portioner",
          mentions: 104,
          percentageOfAnalyzedReviews: 9,
          severity: "MEDEL",
          affectedArea: "Tillagningsresultat",
        },
        {
          id: "basket-coating-wear",
          issue:
            "Korgens non-stick-beläggning slits eller repas efter upprepad användning",
          mentions: 82,
          percentageOfAnalyzedReviews: 7,
          severity: "MEDEL",
          affectedArea: "Material och hållbarhet",
        },
        {
          id: "fan-noise",
          issue:
            "Fläkten upplevs som störande eller ovanligt högljudd",
          mentions: 57,
          percentageOfAnalyzedReviews: 5,
          severity: "LÅG",
          affectedArea: "Ljudnivå",
        },
        {
          id: "plastic-smell",
          issue:
            "Plast- eller fabrikslukt förekommer under de första användningarna",
          mentions: 44,
          percentageOfAnalyzedReviews: 4,
          severity: "MEDEL",
          affectedArea: "Lukt och användarkomfort",
        },
      ],

      riskCalculation: {
        frequency: {
          weight: 45,
          score: 46,
          explanation:
            "Hur ofta samma problem förekommer i det analyserade materialet.",
        },
        severity: {
          weight: 35,
          score: 43,
          explanation:
            "Hur mycket problemen kan påverka tillagningsresultat, material och användarkomfort.",
        },
        sourceConsistency: {
          weight: 20,
          score: 47,
          explanation:
            "Om liknande problem återkommer i flera simulerade partnerkällor.",
        },
        weightedScore: 45,
      },

      reasons: [
        "22% av de analyserade omdömena innehåller minst ett återkommande problem",
        "Ojämn tillagning vid större portioner är det vanligaste identifierade riskområdet",
        "Slitage på korgens beläggning kan påverka produktens långsiktiga användning",
        "Liknande problem återkommer i flera simulerade partnerkällor",
      ],

      insights: [
        "Ojämn luftcirkulation uppstår främst när korgen är överfylld",
        "Beläggningsproblem förekommer oftare efter frekvent rengöring eller användning av hårda redskap",
        "Luktproblem rapporteras främst under produktens första användningstillfällen",
      ],

      limitations: [
        "Analysunderlaget är simulerat för prototypen och har inte hämtats direkt från externa API:er",
        "Portionsstorlek, tillagningstid och rengöringsmetod kan påverka hur problemen uppstår",
        "En användarrecension kan innehålla flera identifierade problem",
        "Risknivån visar återkommande mönster och gäller inte varje enskilt exemplar",
      ],

      chartData: {
        problemPercent: 22,
        noProblemMentionPercent: 78,
      },
    },

    dataSources: {
      datasetType: "simulated-partner-data",
      analysisPeriod: "Januari–Juni 2026",
      analyzedReviews: 1196,
      problemMentionCount: 263,

      partnerSources: [
        {
          source: "Amazon",
          sourceType: "Marketplace",
          reviewCount: 526,
          problemMentions: 118,
        },
        {
          source: "Google Shopping",
          sourceType: "Shopping comparison",
          reviewCount: 394,
          problemMentions: 84,
        },
        {
          source: "Ninja Kitchen Support",
          sourceType: "Support community",
          reviewCount: 276,
          problemMentions: 61,
        },
      ],
    },
  },

     "cosori-premium-airfryer-cp158-af": {
    product: {
      id: "cosori-premium-airfryer-cp158-af",
      name: "Cosori Premium Airfryer CP158-AF",
      category: "Airfryer",
      image: cosoriAirfryerImage,
      analysisStatus: "ready",
    },

    analysis: {
      reviewCount: "1 382",
      analyzedReviews: 1248,
      problemMentionCount: 173,
      problemMentionPercent: 14,

      riskScore: 31,
      riskLevel: "LÅG RISK",
      confidence: "HÖG",

      reliability:
        "Riskbedömningen baseras på ett stort simulerat analysunderlag från flera partnerkällor. Produkten visar genomgående stabil prestanda och de vanligaste problemen bedöms främst påverka användarupplevelsen snarare än säkerheten.",

      recurringProblems: [
        {
          id: "basket-coating",
          issue: "Beläggningen i korgen kan slitas vid långvarig användning",
          mentions: 58,
          percentageOfAnalyzedReviews: 5,
          severity: "LÅG",
          affectedArea: "Beläggning",
        },
        {
          id: "fan-noise",
          issue: "Fläkten upplevs som något högljudd",
          mentions: 47,
          percentageOfAnalyzedReviews: 4,
          severity: "LÅG",
          affectedArea: "Ljudnivå",
        },
        {
          id: "touch-panel",
          issue: "Touchpanelen reagerar ibland långsamt",
          mentions: 39,
          percentageOfAnalyzedReviews: 3,
          severity: "LÅG",
          affectedArea: "Kontrollpanel",
        },
        {
          id: "large-portion",
          issue: "Ojämn tillagning vid mycket stora portioner",
          mentions: 29,
          percentageOfAnalyzedReviews: 2,
          severity: "MEDEL",
          affectedArea: "Matlagningsprestanda",
        },
      ],

      riskCalculation: {
        frequency: {
          weight: 45,
          score: 30,
          explanation:
            "Hur ofta samma problem förekommer i det analyserade materialet.",
        },
        severity: {
          weight: 35,
          score: 29,
          explanation:
            "Hur mycket problemen påverkar användning eller produktens funktion.",
        },
        sourceConsistency: {
          weight: 20,
          score: 35,
          explanation:
            "Om liknande problem återkommer i flera simulerade partnerkällor.",
        },
        weightedScore: 31,
      },

      reasons: [
        "14% av de analyserade omdömena innehåller återkommande problem",
        "De flesta problemen påverkar bekvämlighet snarare än säkerhet",
        "Liknande erfarenheter återkommer i flera simulerade partnerkällor",
        "Produkten har ett stort och stabilt analysunderlag",
      ],

      insights: [
        "Slitage på non-stick-beläggningen är den vanligaste återkommande observationen",
        "Fläkten upplevs ibland som högljudd vid hög temperatur",
        "Produkten får genomgående positiva omdömen för matlagningsresultatet",
      ],

      limitations: [
        "Analysunderlaget är simulerat för prototypen och har inte hämtats direkt från externa API:er",
        "Omdömenas äkthet kan inte verifieras i prototypen",
        "Risknivån beskriver återkommande mönster och innebär inte att varje exemplar får samma problem",
      ],

      chartData: {
        problemPercent: 14,
        noProblemMentionPercent: 86,
      },
    },

    dataSources: {
      datasetType: "simulated-partner-data",
      analysisPeriod: "Januari–Juni 2026",
      analyzedReviews: 1248,
      problemMentionCount: 173,

      partnerSources: [
        {
          source: "Amazon",
          reviewCount: 558,
          problemMentions: 76,
        },
        {
          source: "Google Shopping",
          reviewCount: 402,
          problemMentions: 56,
        },
        {
          source: "Trustpilot",
          reviewCount: 288,
          problemMentions: 41,
        },
      ],
    },
  },
     
};

export default kitchenProductData;