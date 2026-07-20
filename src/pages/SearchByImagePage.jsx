import { useRef, useState } from "react";
import { ArrowLeft, ImagePlus, Upload, X } from "lucide-react";
import "../styles/SearchByImagePage.css";

function SearchByImagePage({
  onBack,
  onContinue,
}) {
  const fileInputRef = useRef(null);

  const [selectedImage, setSelectedImage] = useState(null);
  const [fileName, setFileName] = useState("");
  const [imageBase64, setImageBase64] = useState("");
  const [mimeType, setMimeType] = useState("");

  const openFilePicker = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (event) => {
    const file = event.target.files?.[0];

    if (!file) return;

    const reader = new FileReader();

    reader.onload = () => {
      const imageDataUrl = reader.result;

      if (typeof imageDataUrl !== "string") return;

      const base64Data = imageDataUrl.split(",")[1];

      setSelectedImage(imageDataUrl);
      setImageBase64(base64Data);
      setMimeType(file.type);
      setFileName(file.name);
    };

    reader.readAsDataURL(file);
  };

  const removeImage = () => {
    setSelectedImage(null);
    setFileName("");
    setImageBase64("");
    setMimeType("");

    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  const handleContinue = () => {
    if (!selectedImage || !imageBase64 || !mimeType) return;

    onContinue({
      imageUrl: selectedImage,
      fileName,
      imageBase64,
      mimeType,
    });
  };

  return (
    <main className="image-search-page">
      <section className="image-search-card">
        <button
          className="image-back-button"
          type="button"
          onClick={onBack}
        >
          <ArrowLeft size={20} />
          Tillbaka
        </button>

        <div className="image-search-content">
          <ImagePlus size={42} strokeWidth={1.7} />

          <h1>Sök produkt med bild</h1>

          <p>
            Ladda upp en produktbild för att hitta en matchande produkt.
          </p>

          <input
            ref={fileInputRef}
            className="hidden-file-input"
            type="file"
            accept="image/png, image/jpeg, image/webp"
            onChange={handleFileChange}
          />

          {!selectedImage ? (
            <button
              className="upload-area"
              type="button"
              onClick={openFilePicker}
            >
              <Upload size={38} strokeWidth={1.7} />
              <strong>Välj en bild</strong>
              <span>PNG, JPG eller WEBP</span>
            </button>
          ) : (
            <div className="image-preview-area">
              <button
                className="remove-image-button"
                type="button"
                onClick={removeImage}
                aria-label="Ta bort bilden"
              >
                <X size={20} />
              </button>

              <img
                src={selectedImage}
                alt="Vald produkt"
              />

              <p>{fileName}</p>
            </div>
          )}

          {selectedImage && (
            <button
              type="button"
              onClick={handleContinue}
              style={{
                marginTop: "24px",
                padding: "13px 26px",
                border: "none",
                borderRadius: "14px",
                backgroundColor: "#654ee7",
                color: "white",
                fontSize: "16px",
                fontWeight: "700",
                cursor: "pointer",
              }}
            >
              Fortsätt med bilden
            </button>
          )}
        </div>
      </section>
    </main>
  );
}

export default SearchByImagePage;