import { useEffect, useState } from "react";
import "../styles/SearchByImageProcessPage.css";

const imageSteps = [
  {
    progress: 10,
    text: "AI-agenten tar emot och förbereder den valda bilden för produktidentifiering.",
  },
  {
    progress: 25,
    text: "AI-agenten analyserar synlig text, produktnamn och varumärke i bilden.",
  },
  {
    progress: 40,
    text: "AI-agenten analyserar visuella egenskaper som logotyp, form, färg och förpackning.",
  },
  {
    progress: 55,
    text: "Informationen från bilden sammanställs för att identifiera vilken produkt det kan vara.",
  },
  {
    progress: 70,
    text: "AI-agenten jämför de identifierade egenskaperna för att fastställa en möjlig produktmatchning.",
  },
  {
    progress: 85,
    text: "AI-agenten bedömer vilken produkt som bäst motsvarar informationen i bilden.",
  },
  {
    progress: 100,
    text: "Produktidentifieringen är klar. Resultatet skickas vidare för kontroll mot prototypens analysunderlag.",
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