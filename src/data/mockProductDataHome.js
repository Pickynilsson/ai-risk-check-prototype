import dysonV8AbsoluteImage from "../assets/images/Dyson V8 Absolute Cordless Vacuum.png";
import dysonAirPurifierTP07Image from "../assets/images/Dyson Air Purifier Cool TP07.png";
import appleHomePodMiniImage from "../assets/images/Apple HomePod mini.png";
import appleWatchSE2Image from "../assets/images/Apple Watch SE (2nd Generation).png";

const homeProductData = {
  "dyson-v8-absolute-cordless-vacuum": {
    product: {
      id: "dyson-v8-absolute-cordless-vacuum",
      name: "Dyson V8 Absolute Cordless Vacuum",
      category: "Sladdlös dammsugare",
      image: dysonV8AbsoluteImage,
      analysisStatus: "ready",
    },

    analysis: {
      reviewCount: "1 352",
      analyzedReviews: 1254,
      problemMentionCount: 301,
      problemMentionPercent: 24,

      riskScore: 49,
      riskLevel: "MEDEL RISK",
      confidence: "HÖG",

      reliability:
        "Riskbedömningen baseras på ett omfattande simulerat analysunderlag från flera partnerkällor. De återkommande problemen gäller främst batteritid, minskad sugkraft, hår som fastnar i borstvalsen och svårigheter vid tömning av dammbehållaren.",

      recurringProblems: [
        {
          id: "battery-runtime",
          issue:
            "Batteritiden upplevs som för kort vid högsta effektläge",
          mentions: 118,
          percentageOfAnalyzedReviews: 9,
          severity: "MEDEL",
          affectedArea: "Batteri och användningstid",
        },
        {
          id: "suction-loss",
          issue:
            "Sugkraften minskar när filter eller luftkanaler blir igensatta",
          mentions: 92,
          percentageOfAnalyzedReviews: 7,
          severity: "MEDEL",
          affectedArea: "Sugkraft och rengöringsresultat",
        },
        {
          id: "brush-roll-tangling",
          issue:
            "Hår och fibrer fastnar i borstvalsen och kräver manuell rengöring",
          mentions: 76,
          percentageOfAnalyzedReviews: 6,
          severity: "LÅG",
          affectedArea: "Underhåll och rengöring",
        },
        {
          id: "bin-emptying",
          issue:
            "Damm och hår fastnar ibland i behållaren vid tömning",
          mentions: 54,
          percentageOfAnalyzedReviews: 4,
          severity: "LÅG",
          affectedArea: "Dammbehållare och hygien",
        },
      ],

      riskCalculation: {
        frequency: {
          weight: 45,
          score: 50,
          explanation:
            "Hur ofta samma problem förekommer i det analyserade materialet.",
        },
        severity: {
          weight: 35,
          score: 46,
          explanation:
            "Hur mycket problemen kan påverka rengöringsresultat, användningstid och produktens funktion.",
        },
        sourceConsistency: {
          weight: 20,
          score: 52,
          explanation:
            "Om liknande problem återkommer i flera simulerade partnerkällor.",
        },
        weightedScore: 49,
      },

      reasons: [
        "24% av de analyserade omdömena innehåller minst ett återkommande problem",
        "Kort batteritid vid hög effekt är det vanligaste identifierade riskområdet",
        "Minskad sugkraft kan uppstå om filter och luftkanaler inte rengörs regelbundet",
        "Liknande problem återkommer i flera simulerade partnerkällor",
      ],

      insights: [
        "Batteritiden påverkas tydligt av valt effektläge",
        "Sugkraftsproblem är ofta kopplade till filterunderhåll och blockerade luftvägar",
        "Hår i borstvalsen och dammbehållaren ökar behovet av regelbunden manuell rengöring",
      ],

      limitations: [
        "Analysunderlaget är simulerat för prototypen och har inte hämtats direkt från externa API:er",
        "Golvtyp, bostadens storlek och valt effektläge kan påverka hur problemen upplevs",
        "En användarrecension kan innehålla flera identifierade problem",
        "Risknivån visar återkommande mönster och gäller inte varje enskilt exemplar",
      ],

      chartData: {
        problemPercent: 24,
        noProblemMentionPercent: 76,
      },
    },

    dataSources: {
      datasetType: "simulated-partner-data",
      analysisPeriod: "Januari–Juni 2026",
      analyzedReviews: 1254,
      problemMentionCount: 301,

      partnerSources: [
        {
          source: "Amazon",
          sourceType: "Marketplace",
          reviewCount: 542,
          problemMentions: 132,
        },
        {
          source: "Google Shopping",
          sourceType: "Shopping comparison",
          reviewCount: 407,
          problemMentions: 96,
        },
        {
          source: "Dyson Community",
          sourceType: "Support community",
          reviewCount: 305,
          problemMentions: 73,
        },
      ],
    },
  },

    "dyson-air-purifier-cool-tp07": {
    product: {
      id: "dyson-air-purifier-cool-tp07",
      name: "Dyson Air Purifier Cool TP07",
      category: "Luftrenare och fläkt",
      image: dysonAirPurifierTP07Image,
      analysisStatus: "ready",
    },

    analysis: {
      reviewCount: "1 084",
      analyzedReviews: 998,
      problemMentionCount: 249,
      problemMentionPercent: 25,

      riskScore: 50,
      riskLevel: "MEDEL RISK",
      confidence: "HÖG",

      reliability:
        "Riskbedömningen baseras på ett omfattande simulerat analysunderlag från flera partnerkällor. De återkommande problemen gäller främst ljudnivå, anslutning till appen, kostnad för filterbyte och begränsad kylning i större rum.",

      recurringProblems: [
        {
          id: "fan-noise",
          issue:
            "Fläkten upplevs som störande eller högljudd vid högre hastigheter",
          mentions: 96,
          percentageOfAnalyzedReviews: 10,
          severity: "MEDEL",
          affectedArea: "Ljudnivå och användarkomfort",
        },
        {
          id: "app-connectivity",
          issue:
            "Anslutningen till appen eller Wi-Fi fungerar instabilt i vissa situationer",
          mentions: 72,
          percentageOfAnalyzedReviews: 7,
          severity: "MEDEL",
          affectedArea: "App och anslutning",
        },
        {
          id: "filter-cost",
          issue:
            "Ersättningsfilter upplevs som dyra vid långsiktig användning",
          mentions: 58,
          percentageOfAnalyzedReviews: 6,
          severity: "LÅG",
          affectedArea: "Underhåll och långsiktig kostnad",
        },
        {
          id: "limited-cooling",
          issue:
            "Kylfunktionen upplevs som otillräcklig i större eller mycket varma rum",
          mentions: 47,
          percentageOfAnalyzedReviews: 5,
          severity: "MEDEL",
          affectedArea: "Luftflöde och kylning",
        },
      ],

      riskCalculation: {
        frequency: {
          weight: 45,
          score: 51,
          explanation:
            "Hur ofta samma problem förekommer i det analyserade materialet.",
        },
        severity: {
          weight: 35,
          score: 47,
          explanation:
            "Hur mycket problemen kan påverka ljudkomfort, anslutning, underhåll och produktens funktion.",
        },
        sourceConsistency: {
          weight: 20,
          score: 53,
          explanation:
            "Om liknande problem återkommer i flera simulerade partnerkällor.",
        },
        weightedScore: 50,
      },

      reasons: [
        "25% av de analyserade omdömena innehåller minst ett återkommande problem",
        "Hög ljudnivå vid kraftigare luftflöde är det vanligaste identifierade riskområdet",
        "Problem med appanslutning kan begränsa tillgången till produktens smarta funktioner",
        "Liknande problem återkommer i flera simulerade partnerkällor",
      ],

      insights: [
        "Ljudnivån ökar tydligt när produkten används på högre fläkthastigheter",
        "Anslutningsproblem påverkas av nätverksmiljö och programvaruversion",
        "Filterkostnaden påverkar främst produktens långsiktiga användningskostnad",
      ],

      limitations: [
        "Analysunderlaget är simulerat för prototypen och har inte hämtats direkt från externa API:er",
        "Rummets storlek, temperatur och nätverksmiljö kan påverka hur problemen upplevs",
        "En användarrecension kan innehålla flera identifierade problem",
        "Risknivån visar återkommande mönster och gäller inte varje enskilt exemplar",
      ],

      chartData: {
        problemPercent: 25,
        noProblemMentionPercent: 75,
      },
    },

    dataSources: {
      datasetType: "simulated-partner-data",
      analysisPeriod: "Januari–Juni 2026",
      analyzedReviews: 998,
      problemMentionCount: 249,

      partnerSources: [
        {
          source: "Amazon",
          sourceType: "Marketplace",
          reviewCount: 421,
          problemMentions: 108,
        },
        {
          source: "Google Shopping",
          sourceType: "Shopping comparison",
          reviewCount: 327,
          problemMentions: 80,
        },
        {
          source: "Dyson Community",
          sourceType: "Support community",
          reviewCount: 250,
          problemMentions: 61,
        },
      ],
    },
  },

  "apple-homepod-mini": {
    product: {
        id: "apple-homepod-mini",
        name: "Apple HomePod mini",
        category: "Smart högtalare",
        image: appleHomePodMiniImage,
        analysisStatus: "ready",
    },

    analysis: {
        reviewCount: "962",
        analyzedReviews: 895,
        problemMentionCount: 171,
        problemMentionPercent: 19,

        riskScore: 37,
        riskLevel: "LÅG–MEDEL RISK",
        confidence: "HÖG",

        reliability:
        "Riskbedömningen baseras på ett omfattande simulerat analysunderlag från flera partnerkällor. Problemen gäller främst Siri, kompatibilitet med andra ekosystem och begränsad ljudprestanda i större rum.",

        recurringProblems: [
        {
            id: "siri-limitations",
            issue: "Siri missförstår eller kan inte utföra vissa kommandon",
            mentions: 61,
            percentageOfAnalyzedReviews: 7,
            severity: "MEDEL",
            affectedArea: "Röststyrning",
        },
        {
            id: "apple-ecosystem",
            issue: "Begränsad funktion utanför Apples ekosystem",
            mentions: 48,
            percentageOfAnalyzedReviews: 5,
            severity: "MEDEL",
            affectedArea: "Kompatibilitet",
        },
        {
            id: "bass-performance",
            issue: "Begränsad ljudstyrka och bas i större rum",
            mentions: 37,
            percentageOfAnalyzedReviews: 4,
            severity: "LÅG",
            affectedArea: "Ljudkvalitet",
        },
        {
            id: "wifi-setup",
            issue: "Installationen kan misslyckas vid instabilt Wi-Fi",
            mentions: 25,
            percentageOfAnalyzedReviews: 3,
            severity: "LÅG",
            affectedArea: "Installation",
        },
        ],

        riskCalculation: {
        frequency: {
            weight: 45,
            score: 38,
            explanation:
            "Hur ofta samma problem förekommer i det analyserade materialet.",
        },
        severity: {
            weight: 35,
            score: 35,
            explanation:
            "Hur mycket problemen påverkar den dagliga användningen.",
        },
        sourceConsistency: {
            weight: 20,
            score: 39,
            explanation:
            "Om liknande problem återkommer i flera simulerade partnerkällor.",
        },
        weightedScore: 37,
        },

        reasons: [
        "19% av de analyserade omdömena innehåller minst ett återkommande problem",
        "Röststyrningen med Siri är det vanligaste identifierade riskområdet",
        "Flera begränsningar gäller användning utanför Apples ekosystem",
        "Liknande problem återkommer i flera simulerade partnerkällor",
        ],

        insights: [
        "Produkten fungerar bäst tillsammans med andra Apple-enheter",
        "Ljudkvaliteten uppskattas i mindre rum",
        "Installationen fungerar stabilt i de flesta nätverksmiljöer",
        ],

        limitations: [
        "Analysunderlaget är simulerat för prototypen och har inte hämtats direkt från externa API:er",
        "Användarupplevelsen påverkas av hemmets nätverk och övriga Apple-enheter",
        "Risknivån beskriver återkommande mönster och gäller inte varje enskilt exemplar",
        ],

        chartData: {
        problemPercent: 19,
        noProblemMentionPercent: 81,
        },
    },

    dataSources: {
        datasetType: "simulated-partner-data",
        analysisPeriod: "Januari–Juni 2026",
        analyzedReviews: 895,
        problemMentionCount: 171,

        partnerSources: [
        {
            source: "Amazon",
            sourceType: "Marketplace",
            reviewCount: 382,
            problemMentions: 75,
        },
        {
            source: "Google Shopping",
            sourceType: "Shopping comparison",
            reviewCount: 303,
            problemMentions: 59,
        },
        {
            source: "Apple Community",
            sourceType: "Support community",
            reviewCount: 210,
            problemMentions: 37,
        },
        ],
    },
    },

    "apple-watch-se-2nd-generation": {
        product: {
            id: "apple-watch-se-2nd-generation",
            name: "Apple Watch SE (2nd Generation)",
            category: "Smartklocka",
            image: appleWatchSE2Image,
            analysisStatus: "ready",
        },

        analysis: {
            reviewCount: "1 138",
            analyzedReviews: 1049,
            problemMentionCount: 199,
            problemMentionPercent: 19,

            riskScore: 39,
            riskLevel: "LÅG–MEDEL RISK",
            confidence: "HÖG",

            reliability:
            "Riskbedömningen baseras på ett omfattande simulerat analysunderlag från flera partnerkällor. Problemen gäller främst batteritid, begränsningar jämfört med dyrare modeller och kompatibilitet med äldre iPhone-versioner.",

            recurringProblems: [
            {
                id: "battery-life",
                issue: "Batteriet behöver laddas dagligen vid normal användning",
                mentions: 78,
                percentageOfAnalyzedReviews: 7,
                severity: "MEDEL",
                affectedArea: "Batteri",
            },
            {
                id: "feature-limitations",
                issue: "Saknar vissa funktioner som finns i dyrare Apple Watch-modeller",
                mentions: 55,
                percentageOfAnalyzedReviews: 5,
                severity: "LÅG",
                affectedArea: "Funktioner",
            },
            {
                id: "iphone-compatibility",
                issue: "Kompatibilitetsproblem med äldre iPhone-modeller",
                mentions: 39,
                percentageOfAnalyzedReviews: 4,
                severity: "LÅG",
                affectedArea: "Kompatibilitet",
            },
            {
                id: "charging-speed",
                issue: "Laddningstiden upplevs som lång av vissa användare",
                mentions: 27,
                percentageOfAnalyzedReviews: 3,
                severity: "LÅG",
                affectedArea: "Laddning",
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
                score: 37,
                explanation:
                "Hur mycket problemen påverkar den dagliga användningen.",
            },
            sourceConsistency: {
                weight: 20,
                score: 41,
                explanation:
                "Om liknande problem återkommer i flera simulerade partnerkällor.",
            },
            weightedScore: 39,
            },

            reasons: [
            "19% av de analyserade omdömena innehåller minst ett återkommande problem",
            "Batteritiden är det vanligaste identifierade riskområdet",
            "Funktionella begränsningar gäller främst jämförelser med dyrare modeller",
            "Liknande problem återkommer i flera simulerade partnerkällor",
            ],

            insights: [
            "Produkten uppskattas för enkel integration med Apples ekosystem",
            "Batteritiden räcker normalt en dag vid vanlig användning",
            "De flesta användare rapporterar stabil prestanda efter programuppdateringar",
            ],

            limitations: [
            "Analysunderlaget är simulerat för prototypen och har inte hämtats direkt från externa API:er",
            "Användarupplevelsen påverkas av iPhone-modell, watchOS-version och individuella inställningar",
            "Risknivån beskriver återkommande mönster och gäller inte varje enskilt exemplar",
            ],

            chartData: {
            problemPercent: 19,
            noProblemMentionPercent: 81,
            },
        },

        dataSources: {
            datasetType: "simulated-partner-data",
            analysisPeriod: "Januari–Juni 2026",
            analyzedReviews: 1049,
            problemMentionCount: 199,

            partnerSources: [
            {
                source: "Amazon",
                sourceType: "Marketplace",
                reviewCount: 448,
                problemMentions: 85,
            },
            {
                source: "Google Shopping",
                sourceType: "Shopping comparison",
                reviewCount: 351,
                problemMentions: 66,
            },
            {
                source: "Apple Community",
                sourceType: "Support community",
                reviewCount: 250,
                problemMentions: 48,
            },
            ],
        },
        },

};

export default homeProductData;