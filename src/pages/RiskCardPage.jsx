import {
  AlertTriangle,
  ArrowLeft,
  Star,
} from "lucide-react";
import "../styles/RiskCardPage.css";

function RiskCardPage({
  product,
  analysis,
  onBack,
  onViewSources,
  onNewSearch,
  onExploreAlternative,
  onSaveAnalysis,
  onSavedAnalyses,
}) {
  const problemPercent =
    analysis?.chartData?.problemPercent ?? 0;

  const noProblemMentionPercent =
    analysis?.chartData?.noProblemMentionPercent ?? 0;

  return (
    <main className="risk-card-page">
      <section className="risk-card-container">
        <header className="risk-card-header">
          <button
            className="risk-back-button"
            type="button"
            onClick={onBack}
          >
            <ArrowLeft size={20} />
            Risk i AI-analysen
          </button>

          <button
            className="risk-save-top"
            type="button"
            onClick={onSavedAnalyses}
          >
            <Star size={18} />
            <span>Sparade analyser</span>
          </button>
        </header>

        <p className="risk-subtitle">
          AI-genererad analys baserad på simulerade
          partnerdata
        </p>

        <section className="risk-product-card">
          {product?.image && (
            <img
              src={product.image}
              alt={product.name}
            />
          )}

          <div>
            <p>
              <strong>Produktnamn:</strong>{" "}
              {product?.name || "Okänd produkt"}
            </p>

            <p>
              <strong>Produkttyp:</strong>{" "}
              {product?.category || "Okänd kategori"}
            </p>
          </div>
        </section>

        <section className="risk-assessment-card">
          <div className="risk-level-block">
            <div className="risk-warning-icon">
              <AlertTriangle size={34} />
            </div>

            <div>
              <h2>Riskbedömning</h2>

              <p>
               <strong>Riskpoäng:</strong>{" "}
                {analysis?.riskCalculation?.weightedScore ??
                  analysis?.riskScore ??
                  0}{" "}
                av 100
              </p>

              <p>
                <strong>Riskpoäng:</strong>{" "}
                {analysis?.riskScore ?? 0} av 100
              </p>

              <p>
                <strong>Konfidens:</strong>{" "}
                {analysis?.confidence || "Ej angiven"}
              </p>

              <p>
                <strong>Tillförlitlighet:</strong>{" "}
                {analysis?.reliability ||
                  "Information saknas"}
              </p>
            </div>
          </div>

          <div className="risk-reason-block">
            <h3>❗ Varför denna risk?</h3>

            <ul>
              {(analysis?.reasons || []).map((reason) => (
                <li key={reason}>{reason}</li>
              ))}
            </ul>
          </div>
        </section>

        <section className="risk-insights-card">
          <h3>💡 Identifierade riskområden</h3>

          <ul>
            {(analysis?.insights || []).map((insight) => (
              <li key={insight}>{insight}</li>
            ))}
          </ul>
        </section>

        <section className="review-summary-card">
          <div className="review-summary-text">
            <h3>Översikt över identifierade problem</h3>

            <p>
              <strong>{problemPercent}%</strong>{" "}
              av omdömena innehåller minst ett
              återkommande problem
            </p>

            <p>
              <strong>{noProblemMentionPercent}%</strong>{" "}
              innehåller inga identifierade
              problemomnämnanden
            </p>

            <p>
              Totalt identifierades problem i{" "}
              <strong>
                {analysis?.problemMentionCount ?? 0}
              </strong>{" "}
              analyserade omdömen.
            </p>
          </div>

          <div
            className="review-chart"
            role="img"
            aria-label={`${problemPercent} procent med identifierade problem och ${noProblemMentionPercent} procent utan identifierade problem`}
            style={{
              background: `conic-gradient(
                #ff5a67 0% ${problemPercent}%,
                #ffbf2f ${problemPercent}% 100%
              )`,
            }}
          >
            <div className="review-chart-hole">
              <span>{problemPercent}%</span>
              <small>problem</small>
            </div>
          </div>
        </section>

        <section className="risk-source-summary">
          <h3>Analysunderlag</h3>

          <ul>
            <li>
              {analysis?.analyzedReviews ?? 0} recensioner
              analyserade
            </li>

            <li>
              {analysis?.problemMentionCount ?? 0} recensioner
              innehåller identifierade problem
            </li>

            <li>
              Riskpoängen beräknades till{" "}
              {analysis?.riskCalculation?.weightedScore ??
                analysis?.riskScore ??
                0}{" "}
              av 100
            </li>
          </ul>

          <button
            className="view-sources-link"
            type="button"
            onClick={onViewSources}
          >
            Visa källor
          </button>
        </section>

        <div className="risk-actions">
          <button type="button" onClick={onNewSearch}>
            Ny sökning
          </button>

          <button
            type="button"
            onClick={onExploreAlternative}
          >
            Utforska alternativ
          </button>

          <button
            type="button"
            onClick={onSaveAnalysis}
          >
            Spara analys
          </button>
        </div>
      </section>
    </main>
  );
}

export default RiskCardPage;