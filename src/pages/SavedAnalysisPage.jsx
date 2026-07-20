import {
  ArrowLeft,
  Bookmark,
  Share2,
  Trash2,
} from "lucide-react";
import productImage from "../assets/images/Philips OneBlade 360 blade trimmer.png";
import "../styles/SavedAnalysisPage.css";

const initialSavedAnalyses = [
  {
    id: 1,
    productName: "Philips OneBlade 360",
    productType: "Elektrisk rakapparat / trimmer",
    riskLevel: "LÅG–MEDEL RISK",
    savedDate: "Sparad idag",
    image: productImage,
  },
];

function SavedAnalysisPage({
  savedAnalyses = initialSavedAnalyses,
  onBack,
  onNewSearch,
  onViewAnalysis,
  onDelete,
}) {
  return (
    <main className="saved-analysis-page">
      <section className="saved-analysis-container">
        <header className="saved-analysis-header">
          <button
            className="saved-analysis-back-button"
            type="button"
            onClick={onBack}
          >
            <ArrowLeft size={22} />
          </button>

          <div className="saved-analysis-title">
            <Bookmark size={28} fill="currentColor" />
            <div>
              <h1>Sparade analyser</h1>
              <p>Dina sparade analyser</p>
            </div>
          </div>

          <button
            className="saved-new-search-button"
            type="button"
            onClick={onNewSearch}
          >
            Ny sökning
          </button>
        </header>

        <div className="saved-filter">
          <Bookmark size={18} fill="currentColor" />
          <span>Alla ({savedAnalyses.length})</span>
        </div>

        <section className="saved-analysis-list">
          {savedAnalyses.map((analysis) => (
            <article className="saved-analysis-card" key={analysis.id}>
              <img
                src={analysis.image}
                alt={analysis.productName}
              />

              <div className="saved-analysis-information">
                <h2>{analysis.productName}</h2>
                <p>{analysis.productType}</p>

                <div className="saved-risk-row">
                  <strong>AI-bedömning:</strong>
                  <span className="saved-risk-dot" />
                  <span>{analysis.riskLevel}</span>
                </div>

                <small>{analysis.savedDate}</small>
              </div>

              <div className="saved-analysis-card-actions">
                <div>
                 <button
                    type="button"
                    className="saved-icon-button"
                    aria-label="Dela analysen"
                    onClick={async () => {
                      try {
                        await navigator.clipboard.writeText(window.location.href);
                        alert("Länken har kopierats!");
                      } catch (error) {
                        console.error("Kunde inte kopiera länken:", error);
                        alert("Länken kunde inte kopieras.");
                      }
                    }}
                 >
                    <Share2 size={18} />
                 </button>

                  <button
                    type="button"
                    className="saved-icon-button delete"
                    aria-label="Ta bort analysen"
                    onClick={() => onDelete?.(analysis.id)}
                  >
                    <Trash2 size={18} />
                  </button>
                </div>

                <button
                  className="view-saved-analysis-button"
                  type="button"
                  onClick={() => onViewAnalysis?.(analysis)}
                >
                  Visa analysen
                </button>
              </div>
            </article>
          ))}
        </section>
      </section>
    </main>
  );
}

export default SavedAnalysisPage;
