import philipsOneBladeImage from "../assets/images/Philips OneBlade 360 blade trimmer.png";
import braunSeries5Image from "../assets/images/Braun Series 5 Electric Shaver.png";
import philipsSonicare3100Image from "../assets/images/Philips Sonicare 3100.png";
import beurerMG153Image from "../assets/images/Beurer MG 153 Neck Massager.png";
import beautyNeckImage from "../assets/images/Elektrisk nackvård instrument DS-8822.png";
import dysonAirwrapImage from "../assets/images/Dyson Airwrap Complete Long.png";

const groomingProductData = {
  "philips-oneblade-360": {
    product: {
      id: "philips-oneblade-360",
      name: "Philips OneBlade 360",
      category: "Elektrisk rakapparat / trimmer",
      image: philipsOneBladeImage,
      analysisStatus: "ready",
    },

    analysis: {
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
          issue:
            "Hudirritation vid känslig hud eller upprepad användning",
          mentions: 74,
          percentageOfAnalyzedReviews: 6,
          severity: "MEDEL",
          affectedArea: "Hudkomfort",
        },
        {
          id: "uneven-long-hair",
          issue:
            "Ojämnt resultat på längre eller grövre hårstrån",
          mentions: 61,
          percentageOfAnalyzedReviews: 5,
          severity: "MEDEL",
          affectedArea: "Rakresultat",
        },
        {
          id: "charging-performance",
          issue:
            "Försämrad batteri- eller laddningsprestanda över tid",
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
        "Analysunderlaget är simulerat för prototypen och har inte hämtats direkt från externa API:er",
        "Omdömenas äkthet och användarnas individuella förutsättningar kan inte verifieras i prototypen",
        "Risknivån beskriver återkommande problem och är inte ett bevis på att varje produkt får dessa problem",
      ],

      chartData: {
        problemPercent: 18,
        noProblemMentionPercent: 82,
      },
    },

    dataSources: {
      datasetType: "simulated-partner-data",
      analysisPeriod: "Januari–Juni 2026",
      analyzedReviews: 1180,
      problemMentionCount: 212,

      partnerSources: [
        {
          source: "Amazon",
          sourceType: "Marketplace",
          reviewCount: 520,
          problemMentions: 84,
        },
        {
          source: "Google Shopping",
          sourceType: "Shopping comparison",
          reviewCount: 391,
          problemMentions: 71,
        },
        {
          source: "Trustpilot",
          sourceType: "Review platform",
          reviewCount: 269,
          problemMentions: 57,
        },
      ],
    },
  },

  "braun-series-5-electric-shaver": {
    product: {
      id: "braun-series-5-electric-shaver",
      name: "Braun Series 5 Electric Shaver",
      category: "Elektrisk rakapparat",
      image: braunSeries5Image,
      analysisStatus: "ready",
    },

    analysis: {
      reviewCount: "1 126",
      analyzedReviews: 1040,
      problemMentionCount: 239,
      problemMentionPercent: 23,

      riskScore: 47,
      riskLevel: "MEDEL RISK",
      confidence: "HÖG",

      reliability:
        "Riskbedömningen baseras på ett omfattande simulerat analysunderlag från flera partnerkällor. De återkommande problemen gäller främst hudkomfort, rakresultat, rengöring och långsiktig batteriprestanda.",

      recurringProblems: [
        {
          id: "skin-irritation",
          issue:
            "Hudirritation eller rodnad efter upprepade rakningar",
          mentions: 94,
          percentageOfAnalyzedReviews: 9,
          severity: "MEDEL",
          affectedArea: "Hudkomfort",
        },
        {
          id: "multiple-passes",
          issue:
            "Flera rakdrag krävs vid tätare eller grövre skäggväxt",
          mentions: 83,
          percentageOfAnalyzedReviews: 8,
          severity: "MEDEL",
          affectedArea: "Rakresultat",
        },
        {
          id: "cleaning-difficulty",
          issue:
            "Hårrester fastnar ibland i rakhuvudet och försvårar rengöringen",
          mentions: 57,
          percentageOfAnalyzedReviews: 5,
          severity: "LÅG",
          affectedArea: "Rengöring och underhåll",
        },
        {
          id: "battery-degradation",
          issue:
            "Batteritiden eller laddningsförmågan försämras över tid",
          mentions: 41,
          percentageOfAnalyzedReviews: 4,
          severity: "MEDEL",
          affectedArea: "Batteri och hållbarhet",
        },
      ],

      riskCalculation: {
        frequency: {
          weight: 45,
          score: 48,
          explanation:
            "Hur ofta samma problem förekommer i det analyserade materialet.",
        },
        severity: {
          weight: 35,
          score: 44,
          explanation:
            "Hur mycket problemen kan påverka hudkomfort, rakresultat eller produktens användbarhet.",
        },
        sourceConsistency: {
          weight: 20,
          score: 50,
          explanation:
            "Om liknande problem återkommer i flera simulerade partnerkällor.",
        },
        weightedScore: 47,
      },

      reasons: [
        "23% av de analyserade omdömena innehåller minst ett återkommande problem",
        "Hudirritation och behov av flera rakdrag är de vanligaste identifierade riskområdena",
        "Batteri- och rengöringsproblem kan påverka produktens långsiktiga användbarhet",
        "Liknande problem återkommer i flera simulerade partnerkällor",
      ],

      insights: [
        "Hudkomfort är det mest frekvent identifierade riskområdet",
        "Problem med rakresultatet förekommer främst vid tätare eller grövre skäggväxt",
        "Rengöring och batteriprestanda kan skapa återkommande problem vid längre användning",
      ],

      limitations: [
        "Analysunderlaget är simulerat för prototypen och har inte hämtats direkt från externa API:er",
        "Användarnas hudtyp, skäggväxt och rakvanor kan påverka hur problemen upplevs",
        "Risknivån visar återkommande mönster och innebär inte att varje exemplar får samma problem",
      ],

      chartData: {
        problemPercent: 23,
        noProblemMentionPercent: 77,
      },
    },

    dataSources: {
      datasetType: "simulated-partner-data",
      analysisPeriod: "Januari–Juni 2026",
      analyzedReviews: 1040,
      problemMentionCount: 239,

      partnerSources: [
        {
          source: "Amazon",
          sourceType: "Marketplace",
          reviewCount: 460,
          problemMentions: 106,
        },
        {
          source: "Google Shopping",
          sourceType: "Shopping comparison",
          reviewCount: 350,
          problemMentions: 79,
        },
        {
          source: "Trustpilot",
          sourceType: "Review platform",
          reviewCount: 230,
          problemMentions: 54,
        },
      ],
    },
  },

    "philips-sonicare-3100": {
    product: {
      id: "philips-sonicare-3100",
      name: "Philips Sonicare 3100",
      category: "Eltandborste",
      image: philipsSonicare3100Image,
      analysisStatus: "ready",
    },

    analysis: {
      reviewCount: "1 116",
      analyzedReviews: 1032,
      problemMentionCount: 165,
      problemMentionPercent: 16,

      riskScore: 34,
      riskLevel: "LÅG RISK",
      confidence: "HÖG",

      reliability:
        "Riskbedömningen bygger på ett stort simulerat analysunderlag från flera partnerkällor. Produkten visar överlag stabil prestanda men vissa återkommande problem förekommer.",

      recurringProblems: [
        {
          id: "brush-head-cost",
          issue: "Originalborsthuvuden upplevs som dyra",
          mentions: 68,
          percentageOfAnalyzedReviews: 7,
          severity: "LÅG",
          affectedArea: "Långsiktig kostnad",
        },
        {
          id: "battery-capacity",
          issue: "Batteriet tappar kapacitet efter längre användning",
          mentions: 42,
          percentageOfAnalyzedReviews: 4,
          severity: "MEDEL",
          affectedArea: "Batteri",
        },
        {
          id: "vibration-strength",
          issue: "Vibrationen upplevs som för kraftig för känsliga användare",
          mentions: 31,
          percentageOfAnalyzedReviews: 3,
          severity: "LÅG",
          affectedArea: "Komfort",
        },
        {
          id: "charging-contact",
          issue: "Laddningskontakten fungerar ibland ojämnt",
          mentions: 24,
          percentageOfAnalyzedReviews: 2,
          severity: "LÅG",
          affectedArea: "Laddning",
        },
      ],

      riskCalculation: {
        frequency: {
          weight: 45,
          score: 35,
          explanation:
            "Hur ofta samma problem förekommer i det analyserade materialet.",
        },
        severity: {
          weight: 35,
          score: 31,
          explanation:
            "Hur mycket problemen påverkar användning och produktens livslängd.",
        },
        sourceConsistency: {
          weight: 20,
          score: 36,
          explanation:
            "Liknande problem återkommer i flera simulerade partnerkällor.",
        },
        weightedScore: 34,
      },

      reasons: [
        "16% av de analyserade omdömena innehåller återkommande problem",
        "Borsthuvudens kostnad nämns oftast",
        "Batteriets livslängd försämras hos vissa användare",
        "Problemen bedöms huvudsakligen ha låg påverkan",
      ],

      insights: [
        "Rengöringsförmågan får genomgående höga omdömen",
        "Batteriproblemen uppträder främst efter längre tids användning",
        "Produkten uppvisar stabil kvalitet mellan partnerkällorna",
      ],

      limitations: [
        "Analysunderlaget är simulerat för prototypen.",
        "Enskilda användares tandhälsa kan påverka upplevelsen.",
        "Risknivån beskriver återkommande mönster och inte varje enskild produkt.",
      ],

      chartData: {
        problemPercent: 16,
        noProblemMentionPercent: 84,
      },
    },

    dataSources: {
      datasetType: "simulated-partner-data",
      analysisPeriod: "Januari–Juni 2026",
      analyzedReviews: 1032,
      problemMentionCount: 165,

      partnerSources: [
        {
          source: "Amazon",
          reviewCount: 445,
          problemMentions: 72,
        },
        {
          source: "Google Shopping",
          reviewCount: 332,
          problemMentions: 53,
        },
        {
          source: "Trustpilot",
          reviewCount: 255,
          problemMentions: 40,
        },
      ],
    },
  },

     "beurer-mg-153-neck-massager": {
    product: {
      id: "beurer-mg-153-neck-massager",
      name: "Beurer MG 153 Neck Massager",
      category: "Nackmassage",
      image: beurerMG153Image,
      analysisStatus: "ready",
    },

    analysis: {
      reviewCount: "684",
      analyzedReviews: 628,
      problemMentionCount: 195,
      problemMentionPercent: 31,

      riskScore: 58,
      riskLevel: "MEDEL–HÖG RISK",
      confidence: "MEDEL",

      reliability:
        "Riskbedömningen baseras på ett medelstort simulerat analysunderlag från flera partnerkällor. Återkommande problem gäller främst för starkt tryck, värmefunktion, passform och produktens långsiktiga hållbarhet.",

      recurringProblems: [
        {
          id: "strong-massage-pressure",
          issue:
            "Massagehuvudena upplevs som för hårda eller smärtsamma för känsliga användare",
          mentions: 78,
          percentageOfAnalyzedReviews: 12,
          severity: "HÖG",
          affectedArea: "Komfort och fysisk belastning",
        },
        {
          id: "heat-function",
          issue:
            "Värmefunktionen upplevs som svag eller ojämn",
          mentions: 54,
          percentageOfAnalyzedReviews: 9,
          severity: "LÅG",
          affectedArea: "Värmefunktion",
        },
        {
          id: "fit-and-position",
          issue:
            "Produkten är svår att placera stabilt runt nacke och axlar",
          mentions: 43,
          percentageOfAnalyzedReviews: 7,
          severity: "MEDEL",
          affectedArea: "Passform och användning",
        },
        {
          id: "motor-durability",
          issue:
            "Motorn tappar kraft eller ger ovanliga ljud efter längre användning",
          mentions: 35,
          percentageOfAnalyzedReviews: 6,
          severity: "MEDEL",
          affectedArea: "Motor och hållbarhet",
        },
      ],

      riskCalculation: {
        frequency: {
          weight: 45,
          score: 61,
          explanation:
            "Hur ofta samma problem förekommer i det analyserade materialet.",
        },
        severity: {
          weight: 35,
          score: 58,
          explanation:
            "Hur mycket problemen kan påverka fysisk komfort, användbarhet eller produktens livslängd.",
        },
        sourceConsistency: {
          weight: 20,
          score: 52,
          explanation:
            "Om liknande problem återkommer i flera simulerade partnerkällor.",
        },
        weightedScore: 58,
      },

      reasons: [
        "31% av de analyserade omdömena innehåller minst ett återkommande problem",
        "För starkt massagetryck är det vanligaste och mest allvarliga riskområdet",
        "Passformsproblem kan göra det svårt att kontrollera trycket mot nacke och axlar",
        "Liknande problem återkommer i flera simulerade partnerkällor",
      ],

      insights: [
        "Känslighet för massagetryck är den viktigaste individuella riskfaktorn",
        "Problem med passform kan öka risken för obehag vid längre användning",
        "Motorproblem förekommer mindre ofta men kan påverka produktens livslängd",
      ],

      limitations: [
        "Analysunderlaget är simulerat för prototypen och har inte hämtats direkt från externa API:er",
        "Användarnas kroppsstorlek, smärtkänslighet och hälsotillstånd kan påverka upplevelsen",
        "Riskbedömningen ersätter inte medicinsk rådgivning och visar endast återkommande användarmönster",
      ],

      chartData: {
        problemPercent: 31,
        noProblemMentionPercent: 69,
      },
    },

    dataSources: {
      datasetType: "simulated-partner-data",
      analysisPeriod: "Januari–Juni 2026",
      analyzedReviews: 628,
      problemMentionCount: 195,

      partnerSources: [
        {
          source: "Amazon",
          sourceType: "Marketplace",
          reviewCount: 286,
          problemMentions: 91,
        },
        {
          source: "Google Shopping",
          sourceType: "Shopping comparison",
          reviewCount: 207,
          problemMentions: 63,
        },
        {
          source: "Trustpilot",
          sourceType: "Review platform",
          reviewCount: 135,
          problemMentions: 41,
        },
      ],
    },
  },
  
     "beauty-neck-ds-8822": {
    product: {
      id: "beauty-neck-ds-8822",
      name: "Beauty Neck DS-8822",
      category: "Elektrisk nackmassage",
      image: beautyNeckImage,
      analysisStatus: "ready",
    },

    analysis: {
      reviewCount: "312",
      analyzedReviews: 286,
      problemMentionCount: 103,
      problemMentionPercent: 36,

      riskScore: 66,
      riskLevel: "HÖG RISK",
      confidence: "MEDEL",

      reliability:
        "Riskbedömningen baseras på ett begränsat simulerat analysunderlag från flera partnerkällor. Återkommande problem gäller främst obehag vid elektrisk stimulering, svårigheter att anpassa intensiteten, passform och begränsad information om långsiktig användning.",

      recurringProblems: [
        {
          id: "electrical-discomfort",
          issue:
            "Elektriska impulser upplevs som obehagliga eller för starka",
          mentions: 47,
          percentageOfAnalyzedReviews: 16,
          severity: "HÖG",
          affectedArea: "Komfort och elektrisk stimulering",
        },
        {
          id: "intensity-control",
          issue:
            "Det är svårt att hitta en bekväm och jämn intensitetsnivå",
          mentions: 34,
          percentageOfAnalyzedReviews: 12,
          severity: "MEDEL",
          affectedArea: "Intensitetskontroll",
        },
        {
          id: "neck-contact",
          issue:
            "Produkten får ojämn kontakt med huden beroende på nackens form",
          mentions: 29,
          percentageOfAnalyzedReviews: 10,
          severity: "MEDEL",
          affectedArea: "Passform och hudkontakt",
        },
        {
          id: "device-durability",
          issue:
            "Produkten slutar fungera eller tappar effekt efter en tids användning",
          mentions: 21,
          percentageOfAnalyzedReviews: 7,
          severity: "MEDEL",
          affectedArea: "Elektronik och hållbarhet",
        },
      ],

      riskCalculation: {
        frequency: {
          weight: 45,
          score: 70,
          explanation:
            "Hur ofta samma problem förekommer i det analyserade materialet.",
        },
        severity: {
          weight: 35,
          score: 68,
          explanation:
            "Hur mycket problemen kan påverka fysisk komfort, hudkontakt eller säker användning.",
        },
        sourceConsistency: {
          weight: 20,
          score: 53,
          explanation:
            "Om liknande problem återkommer i flera simulerade partnerkällor.",
        },
        weightedScore: 66,
      },

      reasons: [
        "36% av de analyserade omdömena innehåller minst ett återkommande problem",
        "Obehag vid elektrisk stimulering är det vanligaste och mest allvarliga riskområdet",
        "Ojämn hudkontakt kan göra intensiteten svår att kontrollera",
        "Det begränsade analysunderlaget ökar osäkerheten i riskbedömningen",
      ],

      insights: [
        "Elektrisk stimulering är det tydligaste återkommande riskområdet",
        "Passform och hudkontakt påverkar hur stark behandlingen upplevs",
        "Begränsad långsiktig användardata gör produktens hållbarhet svårare att bedöma",
      ],

      limitations: [
        "Analysunderlaget är simulerat för prototypen och har inte hämtats direkt från externa API:er",
        "Datamängden är mindre än för flera andra produkter i prototypen",
        "Användarnas hudkänslighet och individuella hälsotillstånd kan påverka upplevelsen",
        "Riskbedömningen ersätter inte medicinsk rådgivning",
      ],

      chartData: {
        problemPercent: 36,
        noProblemMentionPercent: 64,
      },
    },

    dataSources: {
      datasetType: "simulated-partner-data",
      analysisPeriod: "Januari–Juni 2026",
      analyzedReviews: 286,
      problemMentionCount: 103,

      partnerSources: [
        {
          source: "Amazon",
          sourceType: "Marketplace",
          reviewCount: 132,
          problemMentions: 51,
        },
        {
          source: "Google Shopping",
          sourceType: "Shopping comparison",
          reviewCount: 96,
          problemMentions: 33,
        },
        {
          source: "Trustpilot",
          sourceType: "Review platform",
          reviewCount: 58,
          problemMentions: 19,
        },
      ],
    },
  },

    "dyson-airwrap-complete-long": {
    product: {
      id: "dyson-airwrap-complete-long",
      name: "Dyson Airwrap Complete Long",
      category: "Hårstylingverktyg",
      image: dysonAirwrapImage,
      analysisStatus: "ready",
    },

    analysis: {
      reviewCount: "1 018",
      analyzedReviews: 946,
      problemMentionCount: 246,
      problemMentionPercent: 26,

      riskScore: 52,
      riskLevel: "MEDEL RISK",
      confidence: "HÖG",

      reliability:
        "Riskbedömningen baseras på ett omfattande simulerat analysunderlag från flera partnerkällor. De återkommande problemen gäller främst svårigheter att uppnå önskat stylingresultat, tillbehör som lossnar, hög ljudnivå och värmerelaterat obehag.",

      recurringProblems: [
        {
          id: "styling-learning-curve",
          issue:
            "Det är svårt att uppnå ett jämnt stylingresultat utan längre inlärning och rätt teknik",
          mentions: 102,
          percentageOfAnalyzedReviews: 11,
          severity: "MEDEL",
          affectedArea: "Stylingresultat och användbarhet",
        },
        {
          id: "attachment-connection",
          issue:
            "Stylingtillbehör lossnar, känns instabila eller är svåra att fästa korrekt",
          mentions: 71,
          percentageOfAnalyzedReviews: 8,
          severity: "MEDEL",
          affectedArea: "Tillbehör och funktion",
        },
        {
          id: "heat-discomfort",
          issue:
            "Luftströmmen eller tillbehören upplevs som obehagligt varma vid längre användning",
          mentions: 55,
          percentageOfAnalyzedReviews: 6,
          severity: "MEDEL",
          affectedArea: "Värme och användarkomfort",
        },
        {
          id: "motor-noise",
          issue:
            "Motorn och luftflödet upplevs som störande eller ovanligt högljudda",
          mentions: 43,
          percentageOfAnalyzedReviews: 5,
          severity: "LÅG",
          affectedArea: "Ljudnivå",
        },
      ],

      riskCalculation: {
        frequency: {
          weight: 45,
          score: 54,
          explanation:
            "Hur ofta samma problem förekommer i det analyserade materialet.",
        },
        severity: {
          weight: 35,
          score: 49,
          explanation:
            "Hur mycket problemen kan påverka stylingresultat, användarkomfort och produktens funktion.",
        },
        sourceConsistency: {
          weight: 20,
          score: 52,
          explanation:
            "Om liknande problem återkommer i flera simulerade partnerkällor.",
        },
        weightedScore: 52,
      },

      reasons: [
        "26% av de analyserade omdömena innehåller minst ett återkommande problem",
        "Svårigheter att uppnå ett jämnt stylingresultat är det vanligaste identifierade riskområdet",
        "Problem med tillbehörens fäste kan påverka produktens funktion och användbarhet",
        "Värmerelaterat obehag och hög ljudnivå återkommer i flera simulerade partnerkällor",
      ],

      insights: [
        "Stylingresultatet påverkas tydligt av användarens teknik, hårtyp och val av tillbehör",
        "Instabila tillbehör kan göra användningen mindre förutsägbar",
        "Värme- och ljudproblem förekommer främst vid längre användningstillfällen",
      ],

      limitations: [
        "Analysunderlaget är simulerat för prototypen och har inte hämtats direkt från externa API:er",
        "Hårtyp, hårlängd, fuktighetsnivå och användarteknik kan påverka hur problemen upplevs",
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
      analyzedReviews: 946,
      problemMentionCount: 246,

      partnerSources: [
        {
          source: "Amazon",
          sourceType: "Marketplace",
          reviewCount: 398,
          problemMentions: 106,
        },
        {
          source: "Google Shopping",
          sourceType: "Shopping comparison",
          reviewCount: 314,
          problemMentions: 80,
        },
        {
          source: "Dyson Community",
          sourceType: "Support community",
          reviewCount: 234,
          problemMentions: 60,
        },
      ],
    },
  },

};

export default groomingProductData;