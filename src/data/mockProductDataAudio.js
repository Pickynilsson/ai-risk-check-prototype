import samsungGalaxyBudsFEImage from "../assets/images/Samsung Galaxy Buds FE.png";
import appleAirPodsProImage from "../assets/images/Apple AirPods Pro..png";
import sonyWH1000XM5Image from "../assets/images/Sony WH-1000XM5.png";

const audioProductData = {
  "samsung-galaxy-buds-fe": {
    product: {
      id: "samsung-galaxy-buds-fe",
      name: "Samsung Galaxy Buds FE",
      category: "Trådlösa hörlurar",
      image: samsungGalaxyBudsFEImage,
      analysisStatus: "ready",
    },

    analysis: {
      reviewCount: "1 094",
      analyzedReviews: 1015,
      problemMentionCount: 264,
      problemMentionPercent: 26,

      riskScore: 51,
      riskLevel: "MEDEL RISK",
      confidence: "HÖG",

      reliability:
        "Riskbedömningen baseras på ett omfattande simulerat analysunderlag från flera partnerkällor. De återkommande problemen gäller främst passform, Bluetooth-anslutning, mikrofonkvalitet och batteriprestanda över tid.",

      recurringProblems: [
        {
          id: "ear-fit",
          issue:
            "Hörlurarna sitter inte stabilt eller orsakar obehag vid längre användning",
          mentions: 103,
          percentageOfAnalyzedReviews: 10,
          severity: "MEDEL",
          affectedArea: "Passform och komfort",
        },
        {
          id: "bluetooth-disconnection",
          issue:
            "Bluetooth-anslutningen bryts eller blir instabil i vissa användarsituationer",
          mentions: 82,
          percentageOfAnalyzedReviews: 8,
          severity: "MEDEL",
          affectedArea: "Anslutning",
        },
        {
          id: "microphone-quality",
          issue:
            "Mikrofonen återger rösten otydligt i bullriga miljöer",
          mentions: 67,
          percentageOfAnalyzedReviews: 7,
          severity: "MEDEL",
          affectedArea: "Samtalskvalitet",
        },
        {
          id: "battery-degradation",
          issue:
            "Batteritiden försämras efter längre tids användning",
          mentions: 48,
          percentageOfAnalyzedReviews: 5,
          severity: "MEDEL",
          affectedArea: "Batteri och hållbarhet",
        },
      ],

      riskCalculation: {
        frequency: {
          weight: 45,
          score: 52,
          explanation:
            "Hur ofta samma problem förekommer i det analyserade materialet.",
        },
        severity: {
          weight: 35,
          score: 47,
          explanation:
            "Hur mycket problemen kan påverka komfort, anslutning och produktens användbarhet.",
        },
        sourceConsistency: {
          weight: 20,
          score: 55,
          explanation:
            "Om liknande problem återkommer i flera simulerade partnerkällor.",
        },
        weightedScore: 51,
      },

      reasons: [
        "26% av de analyserade omdömena innehåller minst ett återkommande problem",
        "Passform och komfort är det vanligaste identifierade riskområdet",
        "Instabil Bluetooth-anslutning och svag mikrofonkvalitet kan påverka daglig användning",
        "Liknande problem återkommer i flera simulerade partnerkällor",
      ],

      insights: [
        "Passformsproblem förekommer främst vid längre användning eller fysisk aktivitet",
        "Anslutningsproblem rapporteras i vissa kombinationer av enheter och miljöer",
        "Batteriförsämring förekommer mindre ofta men påverkar produktens långsiktiga användbarhet",
      ],

      limitations: [
        "Analysunderlaget är simulerat för prototypen och har inte hämtats direkt från externa API:er",
        "Öronform, mobilmodell och användningsmiljö kan påverka hur problemen upplevs",
        "En användarrecension kan innehålla flera identifierade problem",
        "Risknivån visar återkommande mönster och gäller inte varje enskilt exemplar",
      ],

      chartData: {
        problemPercent: 26,
        noProblemMentionPercent: 74,
      },
    },

    dataSources: {
      datasetType: "simulated-partner-data",
      analysisPeriod: "Januari–Juni 2026",
      analyzedReviews: 1015,
      problemMentionCount: 264,

      partnerSources: [
        {
          source: "Amazon",
          sourceType: "Marketplace",
          reviewCount: 448,
          problemMentions: 118,
        },
        {
          source: "Google Shopping",
          sourceType: "Shopping comparison",
          reviewCount: 337,
          problemMentions: 87,
        },
        {
          source: "Samsung Community",
          sourceType: "Support community",
          reviewCount: 230,
          problemMentions: 59,
        },
      ],
    },
  },

     "apple-airpods-pro": {
    product: {
      id: "apple-airpods-pro",
      name: "Apple AirPods Pro",
      category: "Trådlösa hörlurar",
      image: appleAirPodsProImage,
      analysisStatus: "ready",
    },

    analysis: {
      reviewCount: "1 486",
      analyzedReviews: 1372,
      problemMentionCount: 288,
      problemMentionPercent: 21,

      riskScore: 46,
      riskLevel: "MEDEL RISK",
      confidence: "HÖG",

      reliability:
        "Riskbedömningen baseras på ett omfattande simulerat analysunderlag från flera partnerkällor. De återkommande problemen gäller främst passform, batteriets livslängd, anslutningsstabilitet och ljudproblem efter längre användning.",

      recurringProblems: [
        {
          id: "ear-fit",
          issue:
            "Hörlurarna sitter inte stabilt eller orsakar obehag i vissa öron",
          mentions: 96,
          percentageOfAnalyzedReviews: 7,
          severity: "MEDEL",
          affectedArea: "Passform och komfort",
        },
        {
          id: "battery-degradation",
          issue:
            "Batteritiden i hörlurarna eller laddningsetuiet försämras över tid",
          mentions: 82,
          percentageOfAnalyzedReviews: 6,
          severity: "MEDEL",
          affectedArea: "Batteri och hållbarhet",
        },
        {
          id: "connection-instability",
          issue:
            "Anslutningen bryts eller växlar ojämnt mellan olika enheter",
          mentions: 69,
          percentageOfAnalyzedReviews: 5,
          severity: "MEDEL",
          affectedArea: "Bluetooth och anslutning",
        },
        {
          id: "crackling-sound",
          issue:
            "Knaster, brus eller ojämnt ljud förekommer efter längre användning",
          mentions: 55,
          percentageOfAnalyzedReviews: 4,
          severity: "HÖG",
          affectedArea: "Ljudkvalitet och funktion",
        },
      ],

      riskCalculation: {
        frequency: {
          weight: 45,
          score: 45,
          explanation:
            "Hur ofta samma problem förekommer i det analyserade materialet.",
        },
        severity: {
          weight: 35,
          score: 48,
          explanation:
            "Hur mycket problemen kan påverka komfort, ljudfunktion och produktens livslängd.",
        },
        sourceConsistency: {
          weight: 20,
          score: 46,
          explanation:
            "Om liknande problem återkommer i flera simulerade partnerkällor.",
        },
        weightedScore: 46,
      },

      reasons: [
        "21% av de analyserade omdömena innehåller minst ett återkommande problem",
        "Passform och batteriförsämring är de vanligaste identifierade riskområdena",
        "Ljudstörningar förekommer mindre ofta men kan påverka produktens centrala funktion",
        "Liknande problem återkommer i flera simulerade partnerkällor",
      ],

      insights: [
        "Passform och öronkomfort varierar tydligt mellan olika användare",
        "Batteriproblem förekommer främst efter längre tids användning",
        "Knaster och ljudstörningar är mindre vanliga men har högre allvarlighetsgrad",
      ],

      limitations: [
        "Analysunderlaget är simulerat för prototypen och har inte hämtats direkt från externa API:er",
        "Öronform, enhetsmodell, programvaruversion och användningsmiljö kan påverka problemen",
        "En användarrecension kan innehålla flera identifierade problem",
        "Risknivån visar återkommande mönster och gäller inte varje enskilt exemplar",
      ],

      chartData: {
        problemPercent: 21,
        noProblemMentionPercent: 79,
      },
    },

    dataSources: {
      datasetType: "simulated-partner-data",
      analysisPeriod: "Januari–Juni 2026",
      analyzedReviews: 1372,
      problemMentionCount: 288,

      partnerSources: [
        {
          source: "Amazon",
          sourceType: "Marketplace",
          reviewCount: 586,
          problemMentions: 126,
        },
        {
          source: "Google Shopping",
          sourceType: "Shopping comparison",
          reviewCount: 448,
          problemMentions: 91,
        },
        {
          source: "Apple Support Community",
          sourceType: "Support community",
          reviewCount: 338,
          problemMentions: 71,
        },
      ],
    },
  },

     "sony-wh-1000xm5": {
        product: {
        id: "sony-wh-1000xm5",
        name: "Sony WH-1000XM5",
        category: "Trådlösa hörlurar",
        image: sonyWH1000XM5Image,
        analysisStatus: "ready",
        },

        analysis: {
        reviewCount: "2 184",
        analyzedReviews: 2010,
        problemMentionCount: 201,
        problemMentionPercent: 10,

        riskScore: 25,
        riskLevel: "LÅG RISK",
        confidence: "HÖG",

        reliability:
            "Riskbedömningen bygger på ett stort simulerat analysunderlag från flera partnerkällor. De flesta identifierade problemen påverkar användarupplevelsen snarare än produktens säkerhet.",

        recurringProblems: [
            {
            id: "touch-controls",
            issue: "Pekkontroller reagerar oavsiktligt",
            mentions: 68,
            percentageOfAnalyzedReviews: 3,
            severity: "LÅG",
            affectedArea: "Användning",
            },
            {
            id: "warm-ears",
            issue: "Öronkåporna blir varma vid lång användning",
            mentions: 56,
            percentageOfAnalyzedReviews: 3,
            severity: "LÅG",
            affectedArea: "Komfort",
            },
            {
            id: "high-price",
            issue: "Produkten upplevs som dyr",
            mentions: 47,
            percentageOfAnalyzedReviews: 2,
            severity: "LÅG",
            affectedArea: "Prisvärde",
            },
            {
            id: "case-size",
            issue: "Förvaringsfodralet upplevs som stort",
            mentions: 30,
            percentageOfAnalyzedReviews: 2,
            severity: "LÅG",
            affectedArea: "Portabilitet",
            },
        ],

        riskCalculation: {
            frequency: {
            weight: 45,
            score: 25,
            explanation:
                "Hur ofta samma problem förekommer i det analyserade materialet.",
            },
            severity: {
            weight: 35,
            score: 24,
            explanation:
                "Hur mycket problemen påverkar användarupplevelsen.",
            },
            sourceConsistency: {
            weight: 20,
            score: 26,
            explanation:
                "Om liknande problem återkommer i flera simulerade partnerkällor.",
            },
            weightedScore: 25,
        },

        reasons: [
            "10% av de analyserade omdömena innehåller minst ett återkommande problem",
            "De flesta synpunkterna gäller komfort och användarupplevelse",
            "Inga återkommande allvarliga kvalitetsproblem identifierades",
            "Liknande resultat återkommer i flera simulerade partnerkällor",
        ],

        insights: [
            "Brusreduceringen får genomgående mycket höga betyg",
            "Komforten uppskattas av de flesta användare trots viss värme vid längre användning",
            "Prisnivån nämns oftare än produktkvaliteten som en nackdel",
        ],

        limitations: [
            "Analysunderlaget är simulerat för prototypen och har inte hämtats direkt från externa API:er",
            "Användarupplevelsen varierar mellan olika personer",
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
        analyzedReviews: 2010,
        problemMentionCount: 201,

        partnerSources: [
            {
            source: "Amazon",
            reviewCount: 890,
            problemMentions: 92,
            },
            {
            source: "Google Shopping",
            reviewCount: 670,
            problemMentions: 66,
            },
            {
            source: "Trustpilot",
            reviewCount: 450,
            problemMentions: 43,
            },
        ],
        },
    },


};

export default audioProductData;