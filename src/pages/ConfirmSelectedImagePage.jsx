import { ArrowLeft, CheckCircle2 } from "lucide-react";
import "../styles/ConfirmSelectedImagePage.css";

function ConfirmSelectedImagePage({
  imageData,
  onBack,
  onContinue,
}) {
  if (!imageData?.imageUrl) {
    return (
      <main className="confirm-image-page">
        <section className="confirm-image-card">
          <h1>Ingen bild vald</h1>

          <p>
            Gå tillbaka och välj en bild innan du fortsätter.
          </p>

          <button
            type="button"
            className="confirm-image-secondary-button"
            onClick={onBack}
          >
            <ArrowLeft size={19} />
            Tillbaka
          </button>
        </section>
      </main>
    );
  }

  return (
    <main className="confirm-image-page">
      <section className="confirm-image-card">
        <button
          type="button"
          className="confirm-image-back"
          onClick={onBack}
        >
          <ArrowLeft size={20} />
          Tillbaka
        </button>

        <header className="confirm-image-header">
          <p className="confirm-image-label">
            Vald bild
          </p>

          <h1>Bekräfta bilden</h1>

          <p>
            Kontrollera att du har valt rätt bild innan
            AI-analysen startar.
          </p>
        </header>

        <div className="confirm-image-preview">
          <img
            src={imageData.imageUrl}
            alt="Förhandsvisning av vald produktbild"
          />
        </div>

        {imageData.fileName && (
          <div className="confirm-image-file-info">
            <CheckCircle2 size={19} />

            <span>{imageData.fileName}</span>
          </div>
        )}

        <div className="confirm-image-actions">
          <button
            type="button"
            className="confirm-image-secondary-button"
            onClick={onBack}
          >
            Byt bild
          </button>

          <button
            type="button"
            className="confirm-image-primary-button"
            onClick={onContinue}
          >
            Fortsätt
          </button>
        </div>
      </section>
    </main>
  );
}

export default ConfirmSelectedImagePage;