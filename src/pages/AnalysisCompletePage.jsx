import { CheckCircle2 } from "lucide-react";
import "../styles/AnalysisCompletePage.css";

function AnalysisCompletePage({
  productName,
  analysis,
  dataSource,
  onViewSources,
  onViewRiskCard,
}) {

  const partnerSources =
    dataSource?.partnerSources ||
    analysis?.partnerSources ||
    [];

  const sourceNames = partnerSources
    .map((source) => source.source)
    .filter(Boolean);

  const sourceNamesText =
    sourceNames.length > 0
      ? sourceNames.join(", ")
      : "inga angivna partnerkällor";

  const analyzedReviews =
    analysis?.analyzedReviews ??
    analysis?.reviewCount ??
    0;

  const problemMentionCount =
    analysis?.problemMentionCount ?? 0;

  const riskScore =
    analysis?.riskCalculation?.weightedScore ??
    analysis?.riskScore ??
    0;

  const riskLevel =
    analysis?.riskLevel || "ej fastställd";

  return (
    <main className="analysis-complete-page">
      <section className="analysis-complete-card">
        <h1>Steg 5 av 5: Analysen är slutförd</h1>

        <div className="complete-progress-row">
          <div className="complete-progress-boxes">
            <span />
            <span />
            <span />
            <span />
            <span />
          </div>

          <strong>100%</strong>
        </div>

        <p>
          Analysen av "{productName || "vald produkt"}" är klar.
        </p>

        <div className="analysis-checklist">
          <h2>Detta har analyserats:</h2>

          <div>
            <CheckCircle2 size={19} />

         <span>
            Produktdata har hämtats från {sourceNamesText}.{" "}
            {analyzedReviews} omdömen har använts i analysen.
          </span>
          </div>

          <div>
            <CheckCircle2 size={19} />

            <span>
              Produkten "{productName || "vald produkt"}" har
              identifierats och matchats mellan källorna
            </span>
          </div>

          <div>
            <CheckCircle2 size={19} />

            <span>
              {problemMentionCount} omdömen innehåller minst ett
              återkommande problem
            </span>
          </div>

  <div>
    <CheckCircle2 size={19} />

    <span>
      Risknivån har beräknats till {riskLevel} med
      riskpoängen {riskScore} av 100
    </span>
  </div>
</div>

        <div className="analysis-complete-actions">
          <button
            type="button"
            className="source-button"
            onClick={onViewSources}
          >
            Visa datakällor
          </button>

          <button
            type="button"
            className="risk-button"
            onClick={onViewRiskCard}
          >
            Gå till Riskkort
          </button>
        </div>
      </section>
    </main>
  );
}

export default AnalysisCompletePage;