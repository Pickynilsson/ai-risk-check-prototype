import { useEffect, useState } from "react";
import { ArrowLeft, Bot, Search } from "lucide-react";
import "../styles/SearchByNamePage.css";

function SearchProductPage({
  product,
  productName,
  onBack,
  onAIHelp,
  onUnknownProduct,
  skipProcess = false,
}) {
  const steps = [
  {
    progress: 15,
    text: `Steg 1: Tar emot sökningen "${
      productName || "vald produkt"
    }".`,
  },
  {
    progress: 30,
    text:
      "Steg 2: Söker efter matchande produktinformation hos Amazon.",
  },
  {
    progress: 45,
    text:
      "Steg 3: Söker efter matchande produktinformation i Google Shopping.",
  },
  {
    progress: 60,
    text:
      "Steg 4: Kontrollerar om produkten finns i Trustpilots tillgängliga företags- och omdömesunderlag.",
  },
  {
    progress: 75,
    text:
      "Steg 5: Jämför produktnamn, varumärke och kategori mellan partnerkällorna.",
  },
  {
    progress: 90,
    text:
      "Steg 6: Kontrollerar om det finns tillräckligt underlag för en AI-baserad riskanalys.",
  },
  {
    progress: 100,
    text: product
      ? `Steg 7: Matchningen är klar. Produkten "${product.name}" hittades och kan visas som sökresultat.`
      : "Steg 7: Sökningen är klar. Inget tillräckligt säkert produktresultat hittades.",
  },
];

  const [stepIndex, setStepIndex] = useState(0);
  const [finished, setFinished] = useState(skipProcess);

  useEffect(() => {
    if (finished) return;

    if (stepIndex >= steps.length - 1) {
      const finishTimer = setTimeout(() => {
        if (product?.analysisStatus === "unknown-product") {
          onUnknownProduct?.();
          return;
        }

        setFinished(true);
      }, 2800);

      return () => clearTimeout(finishTimer);
    }

    const timer = setTimeout(() => {
      setStepIndex((currentStep) => currentStep + 1);
    }, 2800);

    return () => clearTimeout(timer);
  }, [
    stepIndex,
    finished,
    product?.analysisStatus,
    onUnknownProduct,
    steps.length,
  ]);

  if (finished) {
    return (
      <main className="search-result-page">
        <section className="result-card">
          <button
            className="back-button"
            type="button"
            onClick={onBack}
          >
            <ArrowLeft size={20} />
            Tillbaka
          </button>

          <div className="result-header">
            <div className="result-title-row">
              <Search size={25} />

              <div>
                <h1>Sökresultat</h1>
                <p>Hitta produkter som matchar dina behov</p>
              </div>
            </div>
          </div>

          <p className="result-count">1 matchande produkt</p>

          <button
            className="product-result"
            type="button"
            onClick={() => {
              console.log("AI-hjälp clicked");
              onAIHelp();
            }}
          >
            <div className="product-image">
              {product?.image ? (
                <img
                  src={product.image}
                  alt={product.name}
                />
              ) : product?.imagePrompt ? (
                <div className="product-image-placeholder">
                  <Bot size={26} />
                  <span>AI-genererad exempelbild</span>
                  <small>
                    Simulerad visualisering för prototyp
                  </small>
                </div>
              ) : (
                <div className="product-image-placeholder">
                  Ingen produktbild
                </div>
              )}
            </div>

            <div className="product-information">
              <h2>{product?.name || "Okänd produkt"}</h2>
              <p>
                {product?.category ||
                  "Produktkategori saknas"}
              </p>
            </div>

            <div className="ai-status product-ai-help">
              <Bot size={20} />
              <span>AI-hjälp</span>
            </div>
          </button>
        </section>
      </main>
    );
  }

  const currentStep = steps[stepIndex];

  return (
    <main className="search-process-page">
      <button
        className="process-back-button"
        type="button"
        onClick={onBack}
      >
        <ArrowLeft size={21} />
      </button>

      <section className="process-content">
        <div className="process-spinner" />

        <h1>{currentStep.text}</h1>

        <div className="progress-track">
          <div
            className="progress-fill"
            style={{
              width: `${currentStep.progress}%`,
            }}
          />
        </div>

        <p>{currentStep.progress}% klart</p>

        <span className="searched-product">
          Sökning: {productName || "Okänd produkt"}
        </span>
      </section>
    </main>
  );
}

export default SearchProductPage;