import { Image, Star } from "lucide-react";
import "../App.css";
import logo from "../assets/images/logo_text.png";
import background from "../assets/images/background.png";
import mockProducts from "../data/mockProducts";
import { useState } from "react";

function HomePage({ onSearch, onImageSearch, onSavedAnalyses }) {
  const [searchText, setSearchText] = useState("");
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [isSearching, setIsSearching] = useState(false);
  const filteredProducts = mockProducts.filter((product) =>
  product.name.toLowerCase().includes(searchText.toLowerCase())
);

  const handleSubmit = async (event) => {
  event.preventDefault();

  const productName = searchText.trim();

  if (!productName || isSearching) return;

  setShowSuggestions(false);
  setIsSearching(true);

  try {
    await onSearch(productName);
  } finally {
    setIsSearching(false);
  }
};

  return (
    <main
      className="home-page"
      style={{ backgroundImage: `url(${background})` }}
    >
      <section className="home-layout">
        <div className="logo-area">
          <img src={logo} alt="AI Risk Check" className="main-logo" />
        </div>

        <div className="home-card">
         <button
            className="saved-button"
            type="button"
          onClick={() => {
          console.log("Saved analyses clicked");
          onSavedAnalyses();
}}
>
            <Star size={24} strokeWidth={1.8} />
            <span>Sparade analyser</span>
          </button>

          <div className="card-content">
            <h1>
              AI Risk Check
              <span>i köpögonblicket</span>
            </h1>

            <p className="intro-text">
              Fatta bättre beslut med AI-baserad
              <br />
              visualisering
            </p>

           <form className="search-form" onSubmit={handleSubmit}>
            <input
              name="productName"
              type="text"
              placeholder="Sök produkt"
              value={searchText}
              onChange={(event) => {
                setSearchText(event.target.value);
                setShowSuggestions(true);
}}
              autoComplete="off"
            />
              <button
                type="submit"
                aria-label="Sök"
                disabled={isSearching}
              >
                {isSearching ? "…" : "⌕"}
              </button>
            </form>

          {searchText && showSuggestions && (
          <div className="autocomplete-list">
            {filteredProducts.length > 0 ? (
              filteredProducts.map((product) => (
                <button
                  key={product.id}
                  type="button"
                  className="autocomplete-item"
                  onClick={() => {
                    setSearchText(product.name);
                    setShowSuggestions(false);
}}
                >
                  <span>{product.name}</span>
                  <small>{product.category}</small>
                </button>
              ))
            ) : (
              <p className="autocomplete-empty">
                Inga exakta träffar
              </p>
            )}
          </div>
        )}

            <p className="or-text">Eller</p>

            <button
              className="image-button"
              type="button"
              onClick={onImageSearch}
            >
              <Image size={46} strokeWidth={1.8} />
              <span>Sök med bild</span>
            </button>

            <p className="bottom-text">
              Ladda upp en bild eller sök efter en produkt för att
              <br />
              få en snabb överblick
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

export default HomePage;