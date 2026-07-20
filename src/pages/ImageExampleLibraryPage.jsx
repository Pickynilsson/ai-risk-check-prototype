import { useState } from "react";
import { ArrowLeft, Check } from "lucide-react";
import mockProducts from "../data/mockProducts";
import "../styles/ImageExampleLibraryPage.css";

function ImageExampleLibraryPage({ onBack, onContinue }) {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isPreparing, setIsPreparing] = useState(false);

  const handleContinue = async () => {
    if (!selectedProduct || isPreparing) return;

    try {
      setIsPreparing(true);

      const response = await fetch(selectedProduct.image);
      const imageBlob = await response.blob();

      const reader = new FileReader();

      reader.onloadend = () => {
        const imageDataUrl = reader.result;
        const imageBase64 = imageDataUrl.split(",")[1];

        onContinue({
          imageUrl: selectedProduct.image,
          fileName: `${selectedProduct.name}.png`,
          imageBase64,
          mimeType: imageBlob.type || "image/png",
        });

        setIsPreparing(false);
      };

      reader.onerror = () => {
        throw new Error("Bilden kunde inte förberedas.");
      };

      reader.readAsDataURL(imageBlob);
    } catch (error) {
      console.error("Example image preparation error:", error);
      setIsPreparing(false);
    }
  };

  return (
    <main className="image-library-page">
      <section className="image-library-card">
        <button
          type="button"
          className="image-library-back"
          onClick={onBack}
        >
          <ArrowLeft size={20} />
          Tillbaka
        </button>

        <header className="image-library-header">
          <p className="image-library-label">
            Simulerat bildbibliotek
          </p>

          <h1>Välj en bild</h1>

          <p>
            Välj en produktbild från enhetens bildbibliotek.
          </p>
        </header>

        <div className="image-library-section-title">
          Senaste bilder
        </div>

        <div className="image-library-grid">
          {mockProducts.map((product) => {
            const isSelected =
              selectedProduct?.id === product.id;

            return (
              <button
                key={product.id}
                type="button"
                className={`image-library-item ${
                  isSelected ? "selected" : ""
                }`}
                onClick={() => setSelectedProduct(product)}
                aria-label={`Välj bild för ${product.name}`}
              >
                <img
                  src={product.image}
                  alt={product.name}
                />

                {isSelected && (
                  <span className="image-library-check">
                    <Check size={18} strokeWidth={3} />
                  </span>
                )}
              </button>
            );
          })}
        </div>

        <button
          type="button"
          className="image-library-continue"
          onClick={handleContinue}
          disabled={!selectedProduct || isPreparing}
        >
          {isPreparing ? "Förbereder bilden..." : "Välj bild"}
        </button>
      </section>
    </main>
  );
}

export default ImageExampleLibraryPage;