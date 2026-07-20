import { useEffect, useState } from "react";
import "../styles/SearchByImageProcessPage.css";

const imageSteps = [
  {
    progress: 10,
    text: "Tar emot och förbereder den valda bilden...",
  },
  {
    progress: 25,
    text: "Läser synlig text, produktnamn och varumärke i bilden...",
  },
  {
    progress: 40,
    text: "Identifierar logotyp, form, färg och förpackning...",
  },
  {
    progress: 55,
    text: "Fastställer möjlig produktkategori och sammanställer bildens produktegenskaper...",
  },
  {
    progress: 70,
    text: "Söker efter produktinformation i Amazon, Google Shopping och anslutna partnerkällor...",
  },
  {
    progress: 85,
    text: "Jämför produktegenskaperna från bilden med produktinformationen från datakällorna...",
  },
  {
    progress: 100,
    text: "Väljer den mest sannolika produktmatchningen...",
  },
];

function SearchByImageProcessPage({ onFinished }) {
  const [stepIndex, setStepIndex] = useState(0);

  useEffect(() => {
    if (stepIndex >= imageSteps.length - 1) {
      const timer = setTimeout(() => {
        onFinished();
      }, 2800);

      return () => clearTimeout(timer);
    }

    const timer = setTimeout(() => {
      setStepIndex((current) => current + 1);
    }, 2800);

    return () => clearTimeout(timer);
  }, [stepIndex, onFinished]);

  const currentStep = imageSteps[stepIndex];

  return (
    <main className="image-process-page">
      <section className="image-process-card">
        <div className="process-spinner"></div>

        <h1>{currentStep.text}</h1>

        <div className="progress-track">
          <div
            className="progress-fill"
            style={{ width: `${currentStep.progress}%` }}
          />
        </div>

        <p>{currentStep.progress}% klart</p>
      </section>
    </main>
  );
}

export default SearchByImageProcessPage;