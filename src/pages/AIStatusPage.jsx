import {
  AlertCircle,
  ArrowLeft,
  Bot,
  RefreshCw,
  Search,
} from "lucide-react";
import "../styles/AIStatusPage.css";

const statusContent = {
  "insufficient-data": {
    title: "Produkten identifierades – analysunderlag saknas",
    message:
      "AI-funktionen kunde identifiera produkten. Produktidentifieringen är en aktiv AI-funktion. Riskanalysen i prototypen använder däremot ett begränsat simulerat analysunderlag för de produkter som ingår i prototypens dataset. Den här produkten ingår inte i detta underlag och därför skapas ingen riskbedömning.",
    suggestion:
      "Prova en produkt som ingår i prototypens analysunderlag eller gör en ny sökning.",
  },

  "analysis-failed": {
    title: "Produkten kunde inte identifieras",
    message:
      "AI-funktionen kunde inte identifiera produkten med tillräcklig säkerhet. Därför kan produkten inte kontrolleras mot prototypens simulerade analysunderlag och ingen riskbedömning genomförs.",
    suggestion:
      "Kontrollera produktnamnet och försök igen eller sök efter en annan produkt.",
  },

  "api-unavailable": {
    title: "AI-tjänsten är tillfälligt otillgänglig",
    message:
      "Den aktiva AI-funktionen kunde inte nås just nu. Produktidentifieringen kunde därför inte genomföras och prototypens simulerade analysunderlag har inte kontrollerats.",
    suggestion:
      "Försök igen senare eller välj en produkt från prototypens exempel.",
  },

  "uncertain-data": {
    title: "Analysunderlaget är otillräckligt",
    message:
      "Produkten kunde identifieras, men det tillgängliga simulerade analysunderlaget är för begränsat eller motsägelsefullt för att prototypen ska skapa en tydlig riskbedömning.",
    suggestion:
      "Granska analysunderlaget eller sök efter en annan produkt.",
  },

  "image-not-recognized": {
    title: "Produkten kunde inte identifieras",
    message:
      "Den aktiva AI-funktionen kunde inte identifiera produkten utifrån informationen i bilden. Produkten kan därför inte kontrolleras mot prototypens simulerade analysunderlag och ingen riskbedömning genomförs.",
    suggestion:
      "Försök med en tydligare bild, visa hela produkten eller sök med produktnamn.",
  },
};

function AIStatusPage({
  status = "insufficient-data",
  productName = "",
  onBack,
  onTryAgain,
  onNewSearch,
}) {
  const content =
    statusContent[status] || statusContent["analysis-failed"];

  return (
    <main className="ai-status-page">
      <section className="ai-status-card">
        <button
          className="ai-status-back-button"
          type="button"
          onClick={onBack}
        >
          <ArrowLeft size={20} />
          Tillbaka
        </button>

        <div className="ai-status-icon">
          <Bot size={48} strokeWidth={1.7} />
        </div>

        <span className="ai-status-label">AI-status</span>

        <h1>{content.title}</h1>

        {productName && (
          <p className="ai-status-product">
            Produkt: <strong>{productName}</strong>
          </p>
        )}

        <div className="ai-status-message">
          <AlertCircle size={24} />
          <p>{content.message}</p>
        </div>

        <div className="ai-status-suggestion">
          <h2>Förslag på nästa steg</h2>
          <p>{content.suggestion}</p>
        </div>

        <div className="ai-status-actions">
          <button type="button" onClick={onTryAgain}>
            <RefreshCw size={18} />
            Försök igen
          </button>

          <button type="button" onClick={onNewSearch}>
            <Search size={18} />
            Ny sökning
          </button>
        </div>
      </section>
    </main>
  );
}

export default AIStatusPage;