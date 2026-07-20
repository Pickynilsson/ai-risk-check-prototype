import {
  ArrowLeft,
  Database,
  FileText,
  ShieldCheck,
  Star,
} from "lucide-react";
import "../styles/DataSourcePage.css";

function DataSourcePage({
  product,
  dataSource,
  onBack,
  onNewSearch,
  onSavedAnalyses,
}) {
  const partnerSources = dataSource?.partnerSources || [];

  return (
    <main className="data-source-page">
      <section className="data-source-container">
        <div className="data-source-top-actions">
          <button
            className="data-source-back-button"
            type="button"
            onClick={onBack}
          >
            <ArrowLeft size={20} />
            Tillbaka
          </button>

          <button
            className="data-source-saved-button"
            type="button"
            onClick={onSavedAnalyses}
          >
            <Star size={18} />
            <span>Sparade analyser</span>
          </button>
        </div>

        <header className="data-source-header">
          <div>
            <span className="data-source-label">
              Simulerat analysunderlag
            </span>

            <h1>Datakällor och analysunderlag</h1>

            <p>
              Här visas vilka simulerade partnerkällor AI Risk Check
              använder för analysen av {product?.name || "produkten"}.
            </p>
          </div>

          {product?.image && (
            <img
              src={product.image}
              alt={product.name}
              className="data-source-product-image"
            />
          )}
        </header>

        <section className="data-source-summary">
          <div>
            <Database size={24} />

            <span>
              <strong>
                {dataSource?.analyzedReviews ?? 0}
              </strong>
              recensioner analyserade
            </span>
          </div>

          <div>
            <FileText size={24} />

            <span>
              <strong>{partnerSources.length}</strong>
              simulerade datakällor
            </span>
          </div>

          <div>
            <ShieldCheck size={24} />

            <span>
              <strong>
                {dataSource?.problemMentionCount ?? 0}
              </strong>
              recensioner med identifierade problem
            </span>
          </div>
        </section>

        <section className="data-source-list">
          <h2>Partnerkällor</h2>

          {partnerSources.map((source) => (
            <article
              className="data-source-card"
              key={source.source}
            >
              <div className="data-source-card-header">
                <div>
                  <h3>{source.source}</h3>

                  <span>
                    {source.sourceType ||
                      "Simulerad partnerkälla"}
                  </span>
                </div>

                <span className="data-source-status">
                  Prototypdata
                </span>
              </div>

              <p>
                {source.reviewCount} recensioner analyserades.
                Av dessa innehöll {source.problemMentions} minst
                ett identifierat problem.
              </p>
            </article>
          ))}
        </section>

        <section className="data-source-note">
          <h2>Om analysunderlaget</h2>

          <ul>
            <li>
              Datatyp:{" "}
              {dataSource?.datasetType ===
              "simulated-partner-data"
                ? "Simulerad partnerdata"
                : dataSource?.datasetType || "Simulerad data"}
            </li>

            <li>
              Analysperiod:{" "}
              {dataSource?.analysisPeriod || "Ej angiven"}
            </li>

            <li>
              Antal analyserade recensioner:{" "}
              {dataSource?.analyzedReviews ?? 0}
            </li>

            <li>
              Recensioner med problemomnämnanden:{" "}
              {dataSource?.problemMentionCount ?? 0}
            </li>
          </ul>

          <p>
            Informationen är skapad för prototypen och visar hur
            AI Risk Check kan samla, jämföra och presentera
            återkommande problem från flera partnerkällor.
          </p>
        </section>

        <button
          className="data-source-new-search-button"
          type="button"
          onClick={onNewSearch}
        >
          Ny sökning
        </button>
      </section>
    </main>
  );
}

export default DataSourcePage;