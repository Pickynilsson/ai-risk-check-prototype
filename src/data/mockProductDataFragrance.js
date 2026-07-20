import chanelGabrielleImage from "../assets/images/Elegant Chanel perfume still life.png";
import chanelCocoMademoiselleImage from "../assets/images/Chanel Coco Mademoiselle.png";
import missDiorImage from "../assets/images/Dior Miss Dior Eau de Parfum.png";
import yslLibreImage from "../assets/images/Yves Saint Laurent Libre Eau de Parfum.png";

const fragranceProductData = {
  "chanel-gabrielle-eau-de-parfum": {
    product: {
      id: "chanel-gabrielle-eau-de-parfum",
      name: "Chanel Gabrielle Eau de Parfum",
      category: "Parfym",
      image: chanelGabrielleImage,
      analysisStatus: "ready",
    },

    analysis: {
      reviewCount: "972",
      analyzedReviews: 906,
      problemMentionCount: 172,
      problemMentionPercent: 19,

      riskScore: 39,
      riskLevel: "LÅG–MEDEL RISK",
      confidence: "MEDEL",

      reliability:
        "Riskbedömningen baseras på ett omfattande simulerat analysunderlag från flera partnerkällor. De återkommande problemen gäller främst doftens hållbarhet, hudreaktioner, variation mellan användare och produktförpackning.",

      recurringProblems: [
        {
          id: "limited-longevity",
          issue:
            "Doften upplevs försvinna snabbare än förväntat",
          mentions: 78,
          percentageOfAnalyzedReviews: 9,
          severity: "LÅG",
          affectedArea: "Doftens hållbarhet",
        },
        {
          id: "skin-irritation",
          issue:
            "Hudirritation eller obehag förekommer hos känsliga användare",
          mentions: 41,
          percentageOfAnalyzedReviews: 5,
          severity: "MEDEL",
          affectedArea: "Hudkänslighet",
        },
        {
          id: "scent-variation",
          issue:
            "Doften utvecklas annorlunda än förväntat på vissa användares hud",
          mentions: 37,
          percentageOfAnalyzedReviews: 4,
          severity: "LÅG",
          affectedArea: "Individuell doftupplevelse",
        },
        {
          id: "bottle-leakage",
          issue:
            "Flaskan eller spraymunstycket läcker vid transport eller längre användning",
          mentions: 26,
          percentageOfAnalyzedReviews: 3,
          severity: "MEDEL",
          affectedArea: "Förpackning och användning",
        },
      ],

      riskCalculation: {
        frequency: {
          weight: 45,
          score: 40,
          explanation:
            "Hur ofta samma problem förekommer i det analyserade materialet.",
        },
        severity: {
          weight: 35,
          score: 36,
          explanation:
            "Hur mycket problemen kan påverka hudkomfort, användning eller produktens funktion.",
        },
        sourceConsistency: {
          weight: 20,
          score: 42,
          explanation:
            "Om liknande problem återkommer i flera simulerade partnerkällor.",
        },
        weightedScore: 39,
      },

      reasons: [
        "19% av de analyserade omdömena innehåller minst ett återkommande problem",
        "Begränsad dofthållbarhet är det vanligaste identifierade riskområdet",
        "Hudreaktioner förekommer mer sällan men har högre allvarlighetsgrad",
        "Liknande problem återkommer i flera simulerade partnerkällor",
      ],

      insights: [
        "Dofthållbarhet är det mest frekvent identifierade riskområdet",
        "Hudkänslighet påverkar hur trygg produkten är för enskilda användare",
        "Problem med flaskan kan leda till produktförlust eller svårare användning",
      ],

      limitations: [
        "Analysunderlaget är simulerat för prototypen och har inte hämtats direkt från externa API:er",
        "Doftupplevelser påverkas av hudtyp, miljö och individuella preferenser",
        "En användarrecension kan innehålla mer än ett identifierat problem",
        "Risknivån visar återkommande mönster och gäller inte varje enskild produkt",
      ],

      chartData: {
        problemPercent: 19,
        noProblemMentionPercent: 81,
      },
    },

    dataSources: {
      datasetType: "simulated-partner-data",
      analysisPeriod: "Januari–Juni 2026",
      analyzedReviews: 906,
      problemMentionCount: 172,

      partnerSources: [
        {
          source: "Sephora",
          sourceType: "Beauty retailer",
          reviewCount: 386,
          problemMentions: 73,
        },
        {
          source: "KICKS",
          sourceType: "Beauty retailer",
          reviewCount: 298,
          problemMentions: 56,
        },
        {
          source: "Google Shopping",
          sourceType: "Shopping comparison",
          reviewCount: 222,
          problemMentions: 43,
        },
      ],
    },
  },

  "chanel-coco-mademoiselle": {
    product: {
        id: "chanel-coco-mademoiselle",
        name: "Chanel Coco Mademoiselle",
        category: "Parfym",
        image: chanelCocoMademoiselleImage,
        analysisStatus: "ready",
    },

    analysis: {
        reviewCount: "1 126",
        analyzedReviews: 1080,
        problemMentionCount: 184,
        problemMentionPercent: 17,

        riskScore: 28,
        riskLevel: "LÅG RISK",
        confidence: "HÖG",

        reliability:
        "Riskbedömningen baseras på ett omfattande simulerat analysunderlag från flera partnerkällor. De flesta återkommande synpunkterna handlar om individuella doftpreferenser snarare än produktfel.",

        recurringProblems: [
        {
            id: "longevity",
            issue: "Doften upplevs av vissa användare hålla kortare än förväntat",
            mentions: 74,
            percentageOfAnalyzedReviews: 7,
            severity: "LÅG",
            affectedArea: "Doftens hållbarhet",
        },
        {
            id: "price",
            issue: "Högt pris jämfört med liknande parfymer",
            mentions: 59,
            percentageOfAnalyzedReviews: 5,
            severity: "LÅG",
            affectedArea: "Prisvärde",
        },
        {
            id: "too-sweet",
            issue: "Doften upplevs som för söt för vissa användare",
            mentions: 51,
            percentageOfAnalyzedReviews: 5,
            severity: "LÅG",
            affectedArea: "Personlig preferens",
        },
        ],

        riskCalculation: {
        frequency: {
            weight: 45,
            score: 27,
            explanation:
            "Hur ofta samma återkommande problem förekommer.",
        },
        severity: {
            weight: 35,
            score: 24,
            explanation:
            "Hur mycket problemen påverkar användarupplevelsen.",
        },
        sourceConsistency: {
            weight: 20,
            score: 31,
            explanation:
            "Om liknande synpunkter återkommer mellan partnerkällorna.",
        },
        weightedScore: 28,
        },

        reasons: [
        "17% av de analyserade omdömena innehåller återkommande synpunkter",
        "De flesta synpunkterna gäller doftens hållbarhet eller personliga preferenser",
        "Inga återkommande säkerhetsrelaterade problem identifierades",
        "Liknande resultat återkommer mellan flera partnerkällor",
        ],

        insights: [
        "Doftens hållbarhet är den vanligaste återkommande synpunkten",
        "Många användare beskriver doften som elegant och långvarig",
        "Negativa omdömen handlar främst om individuella preferenser",
        ],

        limitations: [
        "Analysen bygger på simulerade partnerdata för prototypen",
        "Doftupplevelser är subjektiva och varierar mellan användare",
        "Risknivån beskriver återkommande mönster och inte kvaliteten hos varje enskild produkt",
        ],

        chartData: {
        problemPercent: 17,
        noProblemMentionPercent: 83,
        },
    },

    dataSources: {
        datasetType: "simulated-partner-data",
        analysisPeriod: "Januari–Juni 2026",
        analyzedReviews: 1080,
        problemMentionCount: 184,

        partnerSources: [
        {
            source: "Amazon",
            reviewCount: 430,
            problemMentions: 73,
        },
        {
            source: "Google Shopping",
            reviewCount: 360,
            problemMentions: 61,
        },
        {
            source: "Trustpilot",
            reviewCount: 290,
            problemMentions: 50,
        },
        ],
    },
    },

      "dior-miss-dior-edp": {
        product: {
        id: "dior-miss-dior-edp",
        name: "Dior Miss Dior Eau de Parfum",
        category: "Parfym",
        image: missDiorImage,
        analysisStatus: "ready",
        },

        analysis: {
        reviewCount: "1 534",
        analyzedReviews: 1410,
        problemMentionCount: 141,
        problemMentionPercent: 10,

        riskScore: 24,
        riskLevel: "LÅG RISK",
        confidence: "HÖG",

        reliability:
            "Riskbedömningen bygger på ett stort simulerat analysunderlag från flera partnerkällor. Identifierade problem handlar främst om individuella preferenser och hudreaktioner snarare än produktfel.",

        recurringProblems: [
            {
            id: "fragrance-too-strong",
            issue: "Doften upplevs som för intensiv av vissa användare",
            mentions: 51,
            percentageOfAnalyzedReviews: 4,
            severity: "LÅG",
            affectedArea: "Doftupplevelse",
            },
            {
            id: "skin-sensitivity",
            issue: "Mild hudirritation hos känsliga användare",
            mentions: 37,
            percentageOfAnalyzedReviews: 3,
            severity: "MEDEL",
            affectedArea: "Hudkomfort",
            },
            {
            id: "price",
            issue: "Produkten upplevs som dyr",
            mentions: 32,
            percentageOfAnalyzedReviews: 2,
            severity: "LÅG",
            affectedArea: "Prisvärde",
            },
            {
            id: "longevity",
            issue: "Doften upplevs av vissa hålla kortare tid än förväntat",
            mentions: 21,
            percentageOfAnalyzedReviews: 1,
            severity: "LÅG",
            affectedArea: "Doftens hållbarhet",
            },
        ],

        riskCalculation: {
            frequency: {
            weight: 45,
            score: 24,
            explanation:
                "Hur ofta samma problem förekommer i det analyserade materialet.",
            },
            severity: {
            weight: 35,
            score: 23,
            explanation:
                "Hur mycket problemen påverkar användarupplevelsen.",
            },
            sourceConsistency: {
            weight: 20,
            score: 25,
            explanation:
                "Om liknande problem återkommer i flera simulerade partnerkällor.",
            },
            weightedScore: 24,
        },

        reasons: [
            "10% av de analyserade omdömena innehåller minst ett återkommande problem",
            "De flesta problemen handlar om individuella doftpreferenser",
            "Hudreaktioner förekommer men rapporteras relativt sällan",
            "Liknande resultat återkommer i flera simulerade partnerkällor",
        ],

        insights: [
            "Den vanligaste synpunkten gäller att doften kan upplevas som intensiv",
            "Hudkänslighet rapporteras främst av användare med känslig hud",
            "Produkten får överlag höga betyg trots ett högt pris",
        ],

        limitations: [
            "Analysunderlaget är simulerat för prototypen och har inte hämtats direkt från externa API:er",
            "Doftupplevelser är subjektiva och varierar mellan användare",
            "Risknivån beskriver återkommande mönster och inte individuella upplevelser",
        ],

        chartData: {
            problemPercent: 10,
            noProblemMentionPercent: 90,
        },
        },

        dataSources: {
        datasetType: "simulated-partner-data",
        analysisPeriod: "Januari–Juni 2026",
        analyzedReviews: 1410,
        problemMentionCount: 141,

        partnerSources: [
            {
            source: "Amazon",
            reviewCount: 610,
            problemMentions: 59,
            },
            {
            source: "Google Shopping",
            reviewCount: 460,
            problemMentions: 47,
            },
            {
            source: "Trustpilot",
            reviewCount: 340,
            problemMentions: 35,
            },
        ],
        },
    },

      "ysl-libre-edp": {
        product: {
        id: "ysl-libre-edp",
        name: "Yves Saint Laurent Libre Eau de Parfum",
        category: "Parfym",
        image: yslLibreImage,
        analysisStatus: "ready",
        },

        analysis: {
        reviewCount: "1 612",
        analyzedReviews: 1480,
        problemMentionCount: 163,
        problemMentionPercent: 11,

        riskScore: 26,
        riskLevel: "LÅG RISK",
        confidence: "HÖG",

        reliability:
            "Riskbedömningen bygger på ett stort simulerat analysunderlag från flera partnerkällor. De flesta identifierade problemen handlar om personliga doftpreferenser och individuell hudkänslighet.",

        recurringProblems: [
            {
            id: "strong-scent",
            issue: "Doften upplevs som för intensiv",
            mentions: 61,
            percentageOfAnalyzedReviews: 4,
            severity: "LÅG",
            affectedArea: "Doftupplevelse",
            },
            {
            id: "skin-sensitivity",
            issue: "Hudirritation hos känsliga användare",
            mentions: 42,
            percentageOfAnalyzedReviews: 3,
            severity: "MEDEL",
            affectedArea: "Hudkomfort",
            },
            {
            id: "high-price",
            issue: "Produkten upplevs som dyr",
            mentions: 36,
            percentageOfAnalyzedReviews: 2,
            severity: "LÅG",
            affectedArea: "Prisvärde",
            },
            {
            id: "longevity",
            issue: "Doften håller kortare tid än vissa förväntar sig",
            mentions: 24,
            percentageOfAnalyzedReviews: 2,
            severity: "LÅG",
            affectedArea: "Doftens hållbarhet",
            },
        ],

        riskCalculation: {
            frequency: {
            weight: 45,
            score: 26,
            explanation:
                "Hur ofta samma problem förekommer i det analyserade materialet.",
            },
            severity: {
            weight: 35,
            score: 25,
            explanation:
                "Hur mycket problemen påverkar användarupplevelsen.",
            },
            sourceConsistency: {
            weight: 20,
            score: 27,
            explanation:
                "Om liknande problem återkommer i flera simulerade partnerkällor.",
            },
            weightedScore: 26,
        },

        reasons: [
            "11% av de analyserade omdömena innehåller minst ett återkommande problem",
            "De flesta problemen gäller individuell doftupplevelse",
            "Hudreaktioner rapporteras främst av känsliga användare",
            "Liknande resultat återkommer i flera simulerade partnerkällor",
        ],

        insights: [
            "Den vanligaste synpunkten gäller att doften kan upplevas som intensiv",
            "Produkten får genomgående höga betyg för doftens kvalitet",
            "Prisnivån nämns oftare än produktkvaliteten som en nackdel",
        ],

        limitations: [
            "Analysunderlaget är simulerat för prototypen och har inte hämtats direkt från externa API:er",
            "Doftupplevelser varierar mellan olika användare",
            "Risknivån beskriver återkommande mönster och inte individuella upplevelser",
        ],

        chartData: {
            problemPercent: 11,
            noProblemMentionPercent: 89,
        },
        },

        dataSources: {
        datasetType: "simulated-partner-data",
        analysisPeriod: "Januari–Juni 2026",
        analyzedReviews: 1480,
        problemMentionCount: 163,

        partnerSources: [
            {
            source: "Amazon",
            reviewCount: 640,
            problemMentions: 71,
            },
            {
            source: "Google Shopping",
            reviewCount: 495,
            problemMentions: 55,
            },
            {
            source: "Trustpilot",
            reviewCount: 345,
            problemMentions: 37,
            },
        ],
        },
    },


};

export default fragranceProductData;