import React, {
  useContext,
  useEffect,
  useState,
  useRef,
} from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import AppContext from "../Context/Context";
import unplugged from "../assets/unplugged.png";
import HomeHero from "../components/HomeHero";
import Footer from "../components/Footer";


const Home = ({ selectedCategory }) => {
  const { data, isError, addToCart, refreshData } =
    useContext(AppContext);

  const [products, setProducts] = useState([]);
  const [isDataFetched, setIsDataFetched] = useState(false);
  const [showAbout, setShowAbout] = useState(false);

  const productSectionRef = useRef(null);

  // Fetch product list once
  useEffect(() => {
    if (!isDataFetched) {
      refreshData();
      setIsDataFetched(true);
    }
  }, [refreshData, isDataFetched]);

  // Fetch images for products
  useEffect(() => {
    if (data && data.length > 0) {
      const fetchImagesAndUpdateProducts = async () => {
        const updatedProducts = await Promise.all(
          data.map(async (product) => {
            try {
              const response = await axios.get(
                `http://localhost:8080/api/product/${product.id}/image`,
                { responseType: "blob" }
              );
              const imageUrl = URL.createObjectURL(
                response.data
              );
              return { ...product, imageUrl };
            } catch (error) {
              console.error(
                "Error fetching image for product ID:",
                product.id,
                error
              );
              return {
                ...product,
                imageUrl: "placeholder-image-url",
              };
            }
          })
        );
        setProducts(updatedProducts);
      };

      fetchImagesAndUpdateProducts();
    }
  }, [data]);

  const filteredProducts = selectedCategory
    ? products.filter(
        (product) =>
          product.category === selectedCategory
      )
    : products;

  if (isError) {
    return (
      <h2
        className="text-center"
        style={{ padding: "18rem" }}
      >
        <img
          src={unplugged}
          alt="Error"
          style={{ width: "100px", height: "100px" }}
        />
      </h2>
    );
  }

  return (
    <>
      {/* 🔥 HERO SECTION */}
      <HomeHero
        onExploreClick={() => {
          productSectionRef.current?.scrollIntoView({
            behavior: "smooth",
          });
        }}
        onAboutClick={() => setShowAbout(!showAbout)}
      />

      {/* ℹ️ ABOUT SECTION */}
      {showAbout && (
  <div
    style={{
      margin: "40px 20px",
      padding: "32px",
      borderRadius: "18px",
      background:
        "linear-gradient(135deg, #ffffff, #f1f4f9)",
      boxShadow: "0 12px 32px rgba(0,0,0,0.08)",
    }}
  >
    <h2 style={{ marginBottom: "14px", fontWeight: "600" }}>
      About ShopSphere
    </h2>

    <p style={{ color: "#444", lineHeight: "1.8" }}>
  <strong>ShopSphere</strong> is a learning-focused full-stack web
  application developed to gain hands-on experience with
  <strong> Spring Boot backend development</strong> and modern
  frontend integration. The project emphasizes understanding
  real-world application flow, API communication, and clean
  architectural practices rather than production-scale
  commercialization.
</p>

<p style={{ color: "#444", lineHeight: "1.8", marginTop: "12px" }}>
  The backend is designed around RESTful principles, showcasing
  structured data handling, controller–service–repository layering,
  and efficient media delivery. An in-memory H2 database is used
  intentionally to support rapid development, testing, and concept
  validation during the learning phase.
</p>

<p style={{ color: "#444", lineHeight: "1.8", marginTop: "12px" }}>
  The frontend is kept clean and lightweight to complement the
  backend logic, focusing on product browsing, filtering, cart
  interactions, and dynamic image rendering streamed directly from
  the backend — closely simulating production-style workflows in a
  controlled practice environment.
</p>

<h4 style={{ marginTop: "22px", fontWeight: "600" }}>
  Technology Overview
</h4>

<ul style={{ color: "#555", lineHeight: "1.8" }}>
  <li>
    <strong>Frontend:</strong> React (Vite) with Context API for state
    management
  </li>
  <li>
    <strong>Backend:</strong> Spring Boot RESTful services
  </li>
  <li>
    <strong>Database:</strong> H2 (in-memory) for development and
    testing
  </li>
  <li>
    <strong>Architecture:</strong> API-driven, layered backend design
  </li>
  <li>
    <strong>Media Handling:</strong> Binary image streaming via HTTP
  </li>
</ul>

<p
  style={{
    marginTop: "14px",
    color: "#666",
    fontStyle: "italic",
  }}
>
  ShopSphere serves as a practical exploration of full-stack
  development concepts, helping bridge the gap between theoretical
  knowledge and real application design using Spring Boot and React.
</p>

  </div>
)}


      {/* 🛒 PRODUCT GRID */}
      <div
        ref={productSectionRef}
        className="grid"
        style={{
          marginTop: "20px",
          display: "grid",
          gridTemplateColumns:
            "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "20px",
          padding: "20px",
        }}
      >

        
        {filteredProducts.length === 0 ? (
          <h2
            className="text-center"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "100%",
            }}
          >
            No Products Available
          </h2>

          
        ) : (
          filteredProducts.map((product) => {
            const {
              id,
              brand,
              name,
              price,
              productAvailable,
              imageUrl,
            } = product;

        

            return (
              <div
                className="card mb-3"
                key={id}
                style={{
                  width: "250px",
                  height: "360px",
                  boxShadow:
                    "0 4px 12px rgba(0,0,0,0.12)",
                  borderRadius: "14px",
                  overflow: "hidden",
                  backgroundColor: productAvailable
                    ? "#fff"
                    : "#eee",
                  transition: "transform 0.3s ease",
                }}
              >
                <Link
                  to={`/product/${id}`}
                  style={{
                    textDecoration: "none",
                    color: "inherit",
                  }}
                >
                  <img
                    src={imageUrl}
                    alt={name}
                    style={{
                      width: "100%",
                      height: "160px",
                      objectFit: "cover",
                    }}
                  />

                  <div
                    className="card-body"
                    style={{
                      padding: "12px",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent:
                        "space-between",
                      height:
                        "calc(100% - 160px)",
                    }}
                  >
                    <div>
                      <h5
                        style={{
                          marginBottom: "6px",
                          fontSize: "1.1rem",
                        }}
                      >
                        {name}
                      </h5>
                      <small
                        style={{ color: "#666" }}
                      >
                        {brand}
                      </small>
                    </div>

                    <div>
                      <h5
                        style={{
                          fontWeight: "600",
                          marginBottom: "8px",
                        }}
                      >
                        ₹{price}
                      </h5>

                      <button
                        className="btn-hover color-9"
                        style={{ width: "100%" }}
                        onClick={(e) => {
                          e.preventDefault();
                          addToCart(product);
                        }}
                        disabled={!productAvailable}
                      >
                        {productAvailable
                          ? "Add to Cart"
                          : "Out of Stock"}
                      </button>
                    </div>
                  </div>
                </Link>
              </div>
            );
          })
        )}
      </div>

          <Footer />
    </>
  );
};

export default Home;
