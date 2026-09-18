import { useEffect, useMemo, useState } from "react";
import "../styles/AIAnalysisProcessPage.css";

function AIAnalysisProcessPage({
  product,
  analysis,
  dataSource,
  onFinished,
}) {
  const [stepIndex, setStepIndex] = useState(0);

  const analysisSteps = useMemo(() => {
    const productName =
      product?.name || "vald produkt";

    const partnerSources =
      dataSource?.partnerSources ||
      analysis?.partnerSources ||
      [];

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

    const sourceSteps = partnerSources.map(
      (source, index) => ({
        progress: Math.min(20 + index * 10, 50),

        text: `Simulerad källa ${index + 1}: ${
          source.reviewCount ?? 0
        } omdömen från ${
          source.source || "en representerad partnerkälla"
        } ingår i prototypens analysunderlag.`,
      })
    );

    return [
      {
        progress: 10,
        text: `AI-agenten tar emot produkten "${productName}". Prototypen använder ett simulerat analysunderlag för riskanalysen.`,
      },

      ...sourceSteps,

      {
        progress: 55,
        text: `Det simulerade analysunderlaget innehåller totalt ${
          analyzedReviews
        } omdömen från ${
          partnerSources.length
        } representerade partnerkällor.`,
      },

      {
        progress: 65,
        text:
          "Prototypen demonstrerar hur omdömen kan struktureras efter källa, datum och produkt.",
      },

      {
        progress: 75,
        text:
          "Analysen demonstrerar hur återkommande problem grupperas efter typ och frekvens i det simulerade underlaget.",
      },

      {
        progress: 85,
        text: `I analysunderlaget finns ${
          problemMentionCount
        } omdömen som innehåller minst ett återkommande problem.`,
      },

      {
        progress: 92,
        text:
          "Riskbedömningen bygger på problemens frekvens, allvarlighetsgrad och återkommande mönster i det simulerade underlaget.",
      },

      {
        progress: 97,
        text: `Riskpoängen i prototypens analys beräknas till ${riskScore} av 100.`,
      },

      {
        progress: 100,
        text: `Analysen är klar. Produkten klassificeras som ${riskLevel} utifrån det simulerade analysunderlaget och resultatet förbereds för Risk Card.`,
      },
    ];
  }, [product, analysis, dataSource]);

  useEffect(() => {
    if (stepIndex >= analysisSteps.length - 1) {
      const timer = setTimeout(() => {
        console.log("Process page calls onFinished");
        onFinished();
      }, 3000);

      return () => clearTimeout(timer);
    }

    const timer = setTimeout(() => {
      setStepIndex((current) => current + 1);
    }, 3000);

    return () => clearTimeout(timer);
  }, [stepIndex, analysisSteps.length, onFinished]);

  const currentStep = analysisSteps[stepIndex];

  return (
    <main className="analysis-process-page">
      <section className="analysis-process-card">
        <div className="analysis-spinner"></div>

        <span className="analysis-product-name">
          Analyserar: {product?.name || "Okänd produkt"}
        </span>

        <h1>{currentStep.text}</h1>

        <div className="analysis-progress-track">
          <div
            className="analysis-progress-fill"
            style={{
              width: `${currentStep.progress}%`,
            }}
          />
        </div>

        <p>{currentStep.progress}% klart</p>

        <span className="analysis-step-count">
          Process {stepIndex + 1} av{" "}
          {analysisSteps.length}
        </span>
      </section>
    </main>
  );
}

export default AIAnalysisProcessPage;