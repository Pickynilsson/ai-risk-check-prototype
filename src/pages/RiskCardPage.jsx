import { useMemo, useState } from "react";
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

  const analyzedReviews =
    analysis?.analyzedReviews ?? 0;

  const recurringProblems = useMemo(() => {
    return [...(analysis?.recurringProblems || [])].sort(
      (a, b) => (b.mentions ?? 0) - (a.mentions ?? 0)
    );
  }, [analysis]);

  const [selectedProblemId, setSelectedProblemId] =
    useState(null);

  const selectedProblem = recurringProblems.find(
    (problem) => problem.id === selectedProblemId
  );

  const riskScore =
    analysis?.riskCalculation?.weightedScore ??
    analysis?.riskScore ??
    0;

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
                {riskScore} av 100
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

          <p className="risk-scope-note">
            Riskpoängen sammanfattar mönster i
            prototypens simulerade analysunderlag och är
            inte ett köpbeslut.
          </p>

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
              av det simulerade analysunderlaget innehåller
              minst ett återkommande problem
            </p>

            <p>
              <strong>
                {noProblemMentionPercent}%
              </strong>{" "}
              innehåller inga identifierade
              problemomnämnanden
            </p>

            <p>
              Totalt identifierades problem i{" "}
              <strong>
                {analysis?.problemMentionCount ?? 0}
              </strong>{" "}
              omdömen i det simulerade analysunderlaget.
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

        {/* USER AGENCY */}
        {recurringProblems.length > 0 && (
          <section className="risk-focus-card">
            <div className="risk-focus-header">
             <h3>
               Vilket riskområde för den här produkten är viktigast för dig?
             </h3>

             <p>
               Välj vilket riskområde för produkten du vill granska
               närmare utifrån dina egna behov och prioriteringar.
             </p>

              <p className="risk-focus-explanation">
                Riskpoängen ändras inte av ditt val. Du väljer
                själv vilket område du vill undersöka närmare
                innan du fattar ditt köpbeslut.
              </p>
            </div>

            <div className="risk-focus-options">
              {recurringProblems.map((problem, index) => (
                <button
                  key={problem.id}
                  type="button"
                  className={`risk-focus-option risk-focus-rank-${
                    index + 1
                  } ${
                    selectedProblemId === problem.id
                      ? "selected"
                      : ""
                  }`}
                  onClick={() =>
                    setSelectedProblemId((current) =>
                      current === problem.id
                        ? null
                        : problem.id
                    )
                  }
                >
                  <span className="risk-focus-rank">
                    {index + 1}
                  </span>

                  <span className="risk-focus-option-text">
                    <strong>{problem.affectedArea}</strong>
                    <small>
                      {problem.percentageOfAnalyzedReviews ??
                        0}
                      % av analysunderlaget
                    </small>
                  </span>
                </button>
              ))}
            </div>

            <p className="risk-focus-frequency-note">
              Ordningen visar hur ofta problemen förekommer i
              det simulerade analysunderlaget. En högre
              placering betyder inte automatiskt högre
              allvarlighetsgrad.
            </p>

            {selectedProblem && (
              <div className="risk-focus-details">
                <div className="risk-focus-data-note">
                  <strong>
                    Om informationen i denna vy
                  </strong>

                  <p>
                    Informationen bygger på prototypens
                    simulerade analysunderlag. Problem,
                    förekomst, procentandelar och risknivåer
                    representerar hur analysen kan presenteras
                    när du granskar ett valt riskområde.
                  </p>
                </div>

                <h3>{selectedProblem.affectedArea}</h3>

                <div className="risk-focus-detail-section">
                  <h4>
                    Vad handlar problemen främst om?
                  </h4>

                  <p>{selectedProblem.issue}</p>
                </div>

                <div className="risk-focus-detail-section">
                  <h4>
                    Hur ofta förekommer problemet?
                  </h4>

                 <p>
                   <strong>
                     {selectedProblem.mentions ?? 0} identifierade
                     omnämnanden
                   </strong>{" "}
                   (
                   {selectedProblem.percentageOfAnalyzedReviews ??
                     0}
                   % av det simulerade analysunderlaget).
                 </p>
                </div>

                <div className="risk-focus-detail-section">
                  <h4>
                    Risknivå för detta problem
                  </h4>

                  <p>
                    <strong>
                      {selectedProblem.severity || "Ej angiven"}{" "}
                      RISK
                    </strong>
                  </p>
                </div>

                <p className="risk-focus-user-note">
                  Du avgör själv hur viktigt detta problem är
                  för ditt köpbeslut.
                </p>

                <div className="risk-focus-actions">
                  <button
                    type="button"
                    onClick={onViewSources}
                  >
                    Granska datakällor
                  </button>

                  <button
                    type="button"
                    onClick={onExploreAlternative}
                  >
                    Utforska vidare
                  </button>
                </div>
              </div>
            )}
          </section>
        )}

        <section className="risk-source-summary">
          <h3>Analysunderlag</h3>

          <ul>
            <li>
              {analyzedReviews} simulerade recensioner i
              analysunderlaget
            </li>

            <li>
              {analysis?.problemMentionCount ?? 0} recensioner
              innehåller identifierade problem
            </li>

            <li>
              Riskpoängen beräknades till {riskScore} av 100
              utifrån det simulerade analysunderlaget
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