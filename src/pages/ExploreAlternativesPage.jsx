import { ArrowLeft, ExternalLink, Star } from "lucide-react";
import amazonLogo from "../assets/images/amazon.svg";
import googleShoppingLogo from "../assets/images/google-shopping.svg";
import trustpilotLogo from "../assets/images/trustpilot.svg";
import "../styles/ExploreAlternativesPage.css";

function ExploreAlternativesPage({
  onBack,
  onAmazon,
  onTrustpilot,
  onPrisjakt,
  onGoogleShopping,
  onNewSearch,
  onSavedAnalyses,
}) {
  const handleTrustpilot = onTrustpilot || onPrisjakt;

  return (
    <main className="explore-page">
      <section className="explore-card">
        <div className="explore-top-actions">
          <button
            className="explore-back-button"
            type="button"
            onClick={onBack}
          >
            <ArrowLeft size={24} />
            <span>Tillbaka till riskanalysen</span>
          </button>

          <button
            className="explore-saved-button"
            type="button"
            onClick={onSavedAnalyses}
          >
            <Star size={18} />
            <span>Sparade analyser</span>
          </button>
        </div>

        <header className="explore-header">
          <h1>Se mer hos våra partners</h1>

          <p>
            Vill du läsa mer om produkten eller utforska fler alternativ?
            Besök någon av våra partnerplattformar för mer information.
          </p>

          <p>
            AI Risk Check ger endast rekommendationer om var du kan söka vidare.
            Du bestämmer själv vilken plattform du vill använda.
          </p>
        </header>

        <div className="platform-list">

          <button
            className="platform-button"
            type="button"
            onClick={onAmazon}
          >
            <img
              src={amazonLogo}
              alt="Amazon"
              className="platform-logo"
            />

            <span>
              Besök Amazon
              <ExternalLink size={17} />
            </span>
          </button>

          <button
            className="platform-button"
            type="button"
            onClick={onGoogleShopping}
          >
            <img
              src={googleShoppingLogo}
              alt="Google Shopping"
              className="platform-logo"
            />

            <span>
              Besök Google Shopping
              <ExternalLink size={17} />
            </span>
          </button>

          <button
            className="platform-button"
            type="button"
            onClick={handleTrustpilot}
          >
            <img
              src={trustpilotLogo}
              alt="Trustpilot"
              className="platform-logo"
            />

            <span>
              Läs omdömen på Trustpilot
              <ExternalLink size={17} />
            </span>
          </button>

        </div>

        <p className="explore-partner-note">
          Partnerlänkarna är simulerade exempel i prototypen och leder
          användaren vidare till externa plattformar.
        </p>

        <button
          className="explore-new-search"
          type="button"
          onClick={onNewSearch}
        >
          Ny sökning
        </button>
      </section>
    </main>
  );
}

export default ExploreAlternativesPage;