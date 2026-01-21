import "./HomeHero.css";

const HomeHero = ({ onExploreClick, onAboutClick }) => {
  return (
    <section className="hero-container">
      <div className="hero-glass">
        <h1 className="hero-title">ShopSphere</h1>

        <p className="hero-subtitle">
          Discover premium products. Smart prices. Seamless shopping.
        </p>

        <div className="hero-actions">
          {/* EXPLORE BUTTON */}
          <button
            className="hero-btn primary"
            onClick={onExploreClick}
          >
            Explore Products
          </button>

          {/* ABOUT BUTTON */}
          <button
            className="hero-btn outline"
            onClick={onAboutClick}
          >
            About Us
          </button>
        </div>
      </div>
    </section>
  );
};

export default HomeHero;
