import { ArrowLeft, Images, Upload } from "lucide-react";
import "../styles/ImageSourceChoicePage.css";

function ImageSourceChoicePage({
  onBack,
  onExampleLibrary,
  onUploadDevice,
}) {
  return (
    <main className="image-source-page">
      <section className="image-source-card">
        <button
          className="image-source-back-button"
          type="button"
          onClick={onBack}
        >
          <ArrowLeft size={20} />
          Tillbaka
        </button>

        <div className="image-source-content">
          <h1>Välj bildkälla</h1>

          <p className="image-source-intro">
            Välj hur du vill lägga till en produktbild.
          </p>

          <div className="image-source-options">
            <button
              className="image-source-option"
              type="button"
              onClick={onExampleLibrary}
            >
              <span className="image-source-icon">
                <Images size={38} strokeWidth={1.7} />
              </span>

              <strong>Välj en exempelbild</strong>

              <span>
                Välj en exempelbild från prototypens bildbibliotek. 
                <br/>
                Bilderna är kopplade till produkter som finns i projektets mockdata.      
              </span>
            </button>

            <div className="image-source-divider">
              <span>eller</span>
            </div>

            <button
              className="image-source-option"
              type="button"
              onClick={onUploadDevice}
            >
              <span className="image-source-icon">
                <Upload size={38} strokeWidth={1.7} />
              </span>

              <strong>Ladda upp från din enhet</strong>

              <span>
                Välj en egen produktbild från datorn eller en annan enhet.
              </span>
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}

export default ImageSourceChoicePage;