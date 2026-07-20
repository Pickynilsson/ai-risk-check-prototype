import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { GoogleGenAI } from "@google/genai";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json({ limit: "15mb" }));

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
});

app.get("/api/health", (request, response) => {
  response.json({
    success: true,
    message: "AI Risk Check backend fungerar",
    geminiKeyLoaded: Boolean(process.env.GEMINI_API_KEY),
  });
});

app.get("/api/test-ai", async (request, response) => {
  try {
    const result = await ai.models.generateContent({
      model: "gemini-3.1-flash-lite-preview",
      contents: "Say hello to AI Risk Check in one short sentence.",
    });

    response.json({
      success: true,
      reply: result.text,
    });
  } catch (error) {
    console.error(error);

    response.status(500).json({
      success: false,
      error: error.message,
    });
  }
});

app.post("/api/analyze-product-image", async (request, response) => {
  try {
    const {
      imageBase64,
      mimeType,
      mockProducts = [],
    } = request.body;

    if (!imageBase64 || !mimeType) {
      return response.status(400).json({
        success: false,
        error: "Bilddata saknas.",
      });
    }

    const availableProducts = mockProducts
      .map(
        (product) =>
          `- ID: ${product.id}
  Namn: ${product.name}
  Kategori: ${product.category}`
      )
      .join("\n");

    const prompt = `
Du arbetar som bildidentifieringsagent i tjänsten AI Risk Check.

Analysera bilden och försök identifiera produkten.

Här är produkter som finns i prototypens mockdata:

${availableProducts || "Inga mockprodukter skickades."}

Du ska skilja mellan tre statusar:

1. "mock-match"
Produkten kan identifieras och motsvarar tydligt en produkt i mockdata.

2. "recognized-no-mock"
Bilden visar en tydlig produkt som kan identifieras, men produkten finns inte i mockdata.

3. "not-recognized"
Bilden visar ingen tydlig produkt eller innehåller för lite information för att identifiera produkttypen.

Viktiga regler:

- Använd "not-recognized" endast när bilden verkligen inte visar en identifierbar produkt.
- Om du kan identifiera produktens typ, varumärke eller modell ska den normalt vara "recognized-no-mock", även om du inte är helt säker på exakt modell.
- Om synligt varumärke, modellnamn, förpackning och produktens form tydligt motsvarar en mockprodukt ska status vara "mock-match".
- Matcha inte en mockprodukt enbart för att kategorin liknar.
- Hitta inte på recensioner, risknivåer, procentsatser eller externa datakällor.

Returnera endast giltig JSON med exakt denna struktur:

{
  "recognitionStatus": "mock-match, recognized-no-mock eller not-recognized",
  "matchedMockProductId": "produktens ID från mockdata eller tom sträng",
  "productName": "identifierat produktnamn eller tom sträng",
  "category": "identifierad kategori eller tom sträng",
  "identifiedAttributes": ["synlig egenskap"],
  "confidence": "high, medium eller low",
  "summary": "kort svensk förklaring",
  "analysisStatus": "ready, insufficient-data eller unknown-product"
}

Statusregler:

- Vid "mock-match":
  - matchedMockProductId ska innehålla exakt ID från listan
  - analysisStatus ska vara "ready"

- Vid "recognized-no-mock":
  - matchedMockProductId ska vara ""
  - analysisStatus ska vara "insufficient-data"

- Vid "not-recognized":
  - matchedMockProductId ska vara ""
  - productName ska vara ""
  - category ska vara ""
  - identifiedAttributes ska vara []
  - analysisStatus ska vara "unknown-product"
`;

    const result = await ai.models.generateContent({
      model: "gemini-3.1-flash-lite-preview",
      contents: [
        {
          inlineData: {
            mimeType,
            data: imageBase64,
          },
        },
        {
          text: prompt,
        },
      ],
      config: {
        responseMimeType: "application/json",
      },
    });

    const imageAnalysis = JSON.parse(result.text);

    console.log(
      "Gemini image analysis result:",
      imageAnalysis
    );

    response.json({
      success: true,
      imageAnalysis,
    });
  } catch (error) {
    console.error("Gemini image analysis error:", error);

    response.status(500).json({
      success: false,
      error: error.message,
    });
  }
});

app.post("/api/analyze-product", async (request, response) => {
  try {
    const { productName, category } = request.body;

    if (!productName) {
      return response.status(400).json({
        success: false,
        error: "Produktnamn saknas.",
      });
    }

    const prompt = `
Du arbetar som analysagent i tjänsten AI Risk Check.

Analysera produkten:
Produktnamn: ${productName}
Kategori: ${category || "Okänd kategori"}

Det här är ännu ett tekniskt test utan externa recensionskällor.
Hitta inte på exakta recensionstal eller procentsatser.

Returnera endast JSON med denna struktur:

{
  "productName": "string",
  "category": "string",
  "status": "ready eller insufficient-data",
  "summary": "kort svensk sammanfattning",
  "limitations": "kort förklaring",
  "imagePrompt": "Detailed English prompt describing the product for AI image generation"
}

Om produkten kan identifieras ska imagePrompt alltid fyllas i.

Bildprompten ska beskriva:

- product type
- material
- color
- shape
- realistic product photo
- white background
- studio lighting

Hitta aldrig på recensioner, produktbilder från verkliga webbplatser eller riskdata.

Om verifierade användarrecensioner saknas ska status vara "insufficient-data".

Om produkten inte kan identifieras:

- status ska vara "unknown-product"
- category ska vara ""
- imagePrompt ska vara ""
`;

    const result = await ai.models.generateContent({
      model: "gemini-3.1-flash-lite-preview",
      contents: prompt,
      config: {
        responseMimeType: "application/json",
      },
    });

    const analysis = JSON.parse(result.text);

    console.log(analysis);

    response.json({
      success: true,
      analysis,
    });
  } catch (error) {
    console.error("Gemini analysis error:", error);

    response.status(500).json({
      success: false,
      error: error.message,
    });
  }
});

app.post("/api/generate-product-image", async (request, response) => {
  try {
    const { imagePrompt } = request.body;

    if (!imagePrompt) {
      return response.status(400).json({
        success: false,
        error: "Image prompt saknas.",
      });
    }

    const result = await ai.models.generateContent({
      model: "gemini-3.1-flash-image",
      contents: imagePrompt,
    });

    const parts =
      result.candidates?.[0]?.content?.parts || [];

    const imagePart = parts.find(
      (part) => part.inlineData?.data
    );

    if (!imagePart) {
      return response.status(500).json({
        success: false,
        error: "Ingen bild kunde genereras.",
      });
    }

    const mimeType =
      imagePart.inlineData.mimeType || "image/png";

    const imageDataUrl =
      `data:${mimeType};base64,${imagePart.inlineData.data}`;

    response.json({
      success: true,
      image: imageDataUrl,
      imageLabel: "AI-genererad exempelbild",
    });
  } catch (error) {
    console.error("Image generation error:", error);

    response.status(500).json({
      success: false,
      error: error.message,
    });
  }
});

app.listen(PORT, () => {
  console.log(`Backend körs på http://localhost:${PORT}`);
});
