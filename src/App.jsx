import { useEffect, useState } from "react";
import HomePage from "./pages/HomePage";
import SearchByNamePage from "./pages/SearchByNamePage";
import SearchByImagePage from "./pages/SearchByImagePage";
import SearchByImageProcessPage from "./pages/SearchByImageProcessPage";
import AIAnalysisProcessPage from "./pages/AIAnalysisProcessPage";
import AnalysisCompletePage from "./pages/AnalysisCompletePage";
import RiskCardPage from "./pages/RiskCardPage";
import DataSourcePage from "./pages/DataSourcePage";
import SavedAnalysisPage from "./pages/SavedAnalysisPage";
import ExploreAlternativesPage from "./pages/ExploreAlternativesPage";
import mockProducts from "./data/mockProducts";
import groomingProductData from "./data/mockAnalysesGrooming";
import kitchenProductData from "./data/mockProductDataKitchen";
import homeProductData from "./data/mockProductDataHome";
import audioProductData from "./data/mockProductDataAudio";
import fragranceProductData from "./data/mockProductDataFragrance";
import AIStatusPage from "./pages/AIStatusPage";
import ImageSourceChoicePage from "./pages/ImageSourceChoicePage";
import ImageExampleLibraryPage from "./pages/ImageExampleLibraryPage";
import ConfirmSelectedImagePage from "./pages/ConfirmSelectedImagePage";

const allProductData = {
  ...groomingProductData,
  ...kitchenProductData,
  ...homeProductData,
  ...audioProductData,
  ...fragranceProductData,
};

function App() {
  const [currentPage, setCurrentPage] = useState("home");
  const [productName, setProductName] = useState("");
  const [selectedImage, setSelectedImage] = useState(null);
  const [imageSource, setImageSource] = useState(null);
  const [savedAnalyses, setSavedAnalyses] = useState(() => {
    const storedAnalyses = localStorage.getItem("savedAnalyses");

    if (!storedAnalyses) {
      return [];
    }

    try {
      return JSON.parse(storedAnalyses);
    } catch (error) {
      console.error("Kunde inte läsa sparade analyser:", error);
      return [];
    }
  });

  const [selectedProduct, setSelectedProduct] = useState(null);
  const [aiAnalysis, setAIAnalysis] = useState(null);
  const [aiStatus, setAIStatus] = useState(null);

  useEffect(() => {
  localStorage.setItem(
    "savedAnalyses",
    JSON.stringify(savedAnalyses)
  );
}, [savedAnalyses]);

  const handleSearch = async (name) => {
    const cleanName = name.trim();

    if (!cleanName) return;

    const foundMockProduct = mockProducts.find(
      (product) =>
        product.name.toLowerCase() === cleanName.toLowerCase()
    );

    if (foundMockProduct) {
      setProductName(foundMockProduct.name);
      setSelectedProduct(foundMockProduct);
      setAIAnalysis(null);
      setCurrentPage("searchByName");
      return;
    }

    try {
      const response = await fetch(
        "/api/analyze-product",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            productName: cleanName,
            category: "",
          }),
        }
      );

      const data = await response.json();

      if (!response.ok || !data.success) {
        throw new Error(
          data.error || "AI-sökningen misslyckades."
        );
      }

      const aiProduct = {
        id: `ai-${Date.now()}`,
        name: data.analysis.productName || cleanName,
        category:
          data.analysis.category || "Okänd produktkategori",
        isMainProduct: false,
        image: null,
        imagePrompt: data.analysis.imagePrompt || "",
        analysisStatus:
          data.analysis.status || "insufficient-data",
        aiSummary: data.analysis.summary || "",
        aiLimitations: data.analysis.limitations || "",
      };

      if (data.analysis.status === "unknown-product") {
        const unknownProduct = {
          ...aiProduct,
          name: cleanName,
          category: "",
          image: null,
          imagePrompt: "",
          analysisStatus: "unknown-product",
        };

        setProductName(cleanName);
        setSelectedProduct(unknownProduct);
        setAIAnalysis(data.analysis);
        setAIStatus("unknown-product");
        setCurrentPage("searchByName");
        return;
      }

      setProductName(aiProduct.name);
      setSelectedProduct(aiProduct);
      setAIAnalysis(data.analysis);
      setCurrentPage("searchByName");
    } catch (error) {
      console.error("AI product search error:", error);

      setProductName(cleanName);
      setSelectedProduct(null);
      setAIAnalysis(null);
      setAIStatus("api-unavailable");
      setCurrentPage("aiStatus");
    }
  };

  if (currentPage === "imageSourceChoice") {
    return (
      <ImageSourceChoicePage
        onBack={() => setCurrentPage("home")}
        onExampleLibrary={() =>
          setCurrentPage("imageExampleLibrary")
        }
        onUploadDevice={() =>
          setCurrentPage("searchByImage")
        }
      />
    );
  }

  if (currentPage === "imageExampleLibrary") {
  return (
    <ImageExampleLibraryPage
      onBack={() =>
        setCurrentPage("imageSourceChoice")
      }
      onContinue={(imageData) => {
        setSelectedImage(imageData);
        setImageSource("library");
        setCurrentPage("confirmSelectedImage");
      }}
    />
  );
}

  if (currentPage === "confirmSelectedImage") {
  return (
    <ConfirmSelectedImagePage
      imageData={selectedImage}
      onBack={() => {
        if (imageSource === "upload") {
          setCurrentPage("searchByImage");
          return;
        }

        setCurrentPage("imageExampleLibrary");
      }}
      onContinue={() => {
        setCurrentPage("searchByImageProcess");
      }}
    />
  );
}

 if (currentPage === "searchByImage") {
  return (
    <SearchByImagePage
      onBack={() =>
        setCurrentPage("imageSourceChoice")
      }
      onContinue={(imageData) => {
        setSelectedImage(imageData);
        setImageSource("upload");
        setCurrentPage("confirmSelectedImage");
      }}
    />
  );
}

  if (currentPage === "searchByImageProcess") {
    return (
      <SearchByImageProcessPage
        onFinished={async () => {
          try {
            const response = await fetch(
              "/api/analyze-product-image",
              {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify({
                  imageBase64:
                    selectedImage?.imageBase64,
                  mimeType: selectedImage?.mimeType,
                  mockProducts,
                }),
              }
            );

            const data = await response.json();

            if (!response.ok || !data.success) {
              throw new Error(
                data.error ||
                  "Bildanalysen misslyckades."
              );
            }

            const result = data.imageAnalysis;

            console.log(
              "Image recognition result:",
              result
            );

            if (
              result.recognitionStatus ===
              "not-recognized"
            ) {
              setSelectedProduct(null);
              setProductName("");
              setAIAnalysis(result);
              setAIStatus("image-not-recognized");
              setCurrentPage("aiStatus");
              return;
            }

            if (
              result.recognitionStatus === "mock-match"
            ) {
              const matchedProduct = mockProducts.find(
                (product) =>
                  product.id ===
                  result.matchedMockProductId
              );

              if (matchedProduct) {
                setSelectedProduct(matchedProduct);
                setProductName(matchedProduct.name);
                setAIAnalysis(result);
                setAIStatus(null);
                setCurrentPage("imageResult");
                return;
              }

              console.warn(
                "Gemini returned mock-match, but no matching mock product was found:",
                result.matchedMockProductId
              );
            }

            if (
              result.recognitionStatus ===
                "recognized-no-mock" ||
              result.recognitionStatus === "mock-match"
            ) {
              const recognizedProduct = {
                id: `image-${Date.now()}`,
                name:
                  result.productName ||
                  "Identifierad produkt",
                category:
                  result.category ||
                  "Okänd produktkategori",
                image:
                  selectedImage?.imageUrl || null,
                isMainProduct: false,
                analysisStatus: "insufficient-data",
                aiSummary: result.summary || "",
                identifiedAttributes:
                  result.identifiedAttributes || [],
                confidence: result.confidence || "low",
              };

              setSelectedProduct(recognizedProduct);
              setProductName(recognizedProduct.name);
              setAIAnalysis(result);
              setAIStatus(null);
              setCurrentPage("imageResult");
              return;
            }

            throw new Error(
              `Okänd bildanalysstatus: ${result.recognitionStatus}`
            );
          } catch (error) {
            console.error(
              "AI image search error:",
              error
            );

            setSelectedProduct(null);
            setProductName("");
            setAIAnalysis(null);
            setAIStatus("api-unavailable");
            setCurrentPage("aiStatus");
          }
        }}
      />
    );
  }

  if (currentPage === "imageResult") {
    return (
      <SearchByNamePage
        product={selectedProduct}
        productName={selectedProduct?.name || ""}
        skipProcess={true}
        onBack={() => setCurrentPage("home")}
        onAIHelp={() => setCurrentPage("aiAnalysis")}
      />
    );
  }

  if (currentPage === "searchByName") {
    return (
      <SearchByNamePage
        product={selectedProduct}
        productName={productName}
        onBack={() => setCurrentPage("home")}
        onAIHelp={() => setCurrentPage("aiAnalysis")}
        onUnknownProduct={() => {
          setAIStatus("unknown-product");
          setCurrentPage("aiStatus");
        }}
      />
    );
  }

  const activeAnalysis = selectedProduct
    ? allProductData[selectedProduct.id]?.analysis
    : null;

  if (currentPage === "aiAnalysis") {
    return (
      <AIAnalysisProcessPage
        product={selectedProduct}
        analysis={activeAnalysis}
        dataSource={
          selectedProduct
            ? allProductData[selectedProduct.id]?.dataSources
            : null
        }
        onFinished={() => {
          console.log("AI analysis finished");

          if (
            selectedProduct?.analysisStatus &&
            selectedProduct.analysisStatus !== "ready"
          ) {
            setAIStatus(
              selectedProduct.analysisStatus
            );
            setCurrentPage("aiStatus");
            return;
          }

          setCurrentPage("analysisComplete");
        }}
      />
    );
  }

  if (currentPage === "analysisComplete") {
    return (
      <AnalysisCompletePage
        productName={
          selectedProduct?.name || productName
        }
        analysis={activeAnalysis}
        dataSource={
          selectedProduct
            ? allProductData[selectedProduct.id]?.dataSources
            : null
        }
        onViewSources={() =>
          setCurrentPage("dataSources")
        }
        onViewRiskCard={() =>
          setCurrentPage("riskCard")
        }
      />
    );
  }

  if (currentPage === "aiStatus") {
    const handleTryAgain = () => {
      if (aiStatus === "image-not-recognized") {
        setSelectedImage(null);
        setSelectedProduct(null);
        setProductName("");
        setCurrentPage("searchByImage");
        return;
      }

      if (aiStatus === "unknown-product") {
        setCurrentPage("searchByName");
        return;
      }

      setCurrentPage("aiAnalysis");
    };

    return (
      <AIStatusPage
        status={aiStatus}
        productName={
          selectedProduct?.name || productName
        }
        onBack={() => setCurrentPage("home")}
        onTryAgain={handleTryAgain}
        onNewSearch={() => setCurrentPage("home")}
      />
    );
  }

  if (currentPage === "riskCard") {
    const activeProduct =
      selectedProduct ||
      mockProducts.find(
        (product) =>
          product.id === "philips-oneblade-360"
      );

    const activeAnalysis =
      allProductData[activeProduct.id]?.analysis;

    return (
      <RiskCardPage
        product={activeProduct}
        analysis={activeAnalysis}
        onBack={() =>
          setCurrentPage("analysisComplete")
        }
        onViewSources={() =>
          setCurrentPage("dataSources")
        }
        onNewSearch={() => setCurrentPage("home")}
        onExploreAlternative={() =>
          setCurrentPage("exploreAlternatives")
        }
        onSaveAnalysis={() => {
          const newAnalysis = {
            id: Date.now(),
            productName: activeProduct.name,
            productType: activeProduct.category,
            riskLevel:
              activeAnalysis?.riskLevel || "Unknown",
            savedDate: "Sparad idag",
            image: activeProduct.image,
          };

          setSavedAnalyses((previousAnalyses) => [
            ...previousAnalyses,
            newAnalysis,
          ]);

          alert("Analysen har sparats!");
        }}
        onSavedAnalyses={() =>
          setCurrentPage("savedAnalyses")
        }
      />
    );
  }

  if (currentPage === "dataSources") {
    const activeProduct =
      selectedProduct ||
      mockProducts.find(
        (product) =>
          product.id === "philips-oneblade-360"
      );

    const activeDataSource =
      allProductData[activeProduct.id]?.dataSources;

    return (
      <DataSourcePage
        product={activeProduct}
        dataSource={activeDataSource}
        onBack={() => setCurrentPage("riskCard")}
        onNewSearch={() => setCurrentPage("home")}
        onSavedAnalyses={() =>
          setCurrentPage("savedAnalyses")
        }
      />
    );
  }

  if (currentPage === "savedAnalyses") {
    return (
      <SavedAnalysisPage
        savedAnalyses={savedAnalyses}
        onBack={() => setCurrentPage("home")}
        onNewSearch={() => setCurrentPage("home")}
        onViewAnalysis={() =>
          setCurrentPage("riskCard")
        }
        onDelete={(id) => {
          setSavedAnalyses((previousAnalyses) =>
            previousAnalyses.filter(
              (analysis) => analysis.id !== id
            )
          );
        }}
      />
    );
  }

  if (currentPage === "exploreAlternatives") {
    return (
      <ExploreAlternativesPage
        onBack={() => setCurrentPage("riskCard")}
        onAmazon={() => alert("Amazon")}
        onPrisjakt={() => alert("Prisjakt")}
        onGoogleShopping={() =>
          alert("Google Shopping")
        }
        onNewSearch={() => setCurrentPage("home")}
        onSavedAnalyses={() =>
          setCurrentPage("savedAnalyses")
        }
      />
    );
  }

  return (
    <HomePage
      onSearch={handleSearch}
      onImageSearch={() =>
        setCurrentPage("imageSourceChoice")
      }
      onSavedAnalyses={() =>
        setCurrentPage("savedAnalyses")
      }
    />
  );
}

export default App;
