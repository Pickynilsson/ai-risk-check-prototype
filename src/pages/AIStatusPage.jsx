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
    title: "Otillräckligt analysunderlag",
    message:
      "Produkten hittades, men det finns inte tillräckligt med data för att skapa en tillförlitlig riskbedömning.",
    suggestion:
      "Prova en annan produkt eller gör en ny sökning med ett tydligare produktnamn.",
  },

  "analysis-failed": {
    title: "Analysen kunde inte slutföras",
    message:
      "AI kunde inte bearbeta informationen till ett tydligt och tillförlitligt resultat.",
    suggestion:
      "Försök igen eller välj en annan produkt.",
  },

  "api-unavailable": {
    title: "AI-tjänsten är tillfälligt otillgänglig",
    message:
      "Anslutningen till AI-tjänsten kunde inte genomföras just nu.",
    suggestion:
      "Försök igen senare eller använd prototypens simulerade analys.",
  },

  "uncertain-data": {
    title: "Underlaget är osäkert",
    message:
      "Data hittades, men informationen är för begränsad eller motsägelsefull för en tydlig riskbedömning.",
    suggestion:
      "Granska datakällorna eller sök efter en annan produktmodell.",
  },

  "image-not-recognized": {
    title: "Produkten kunde inte identifieras",
    message:
      "AI kunde inte hitta en tydlig produktmatchning i bilden.",
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