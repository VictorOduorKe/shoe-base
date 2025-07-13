import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import "../styles/Product.css";
import sampleProducts from "../assets/data"; // ✅ Update to actual path
import { FaHeart, FaShoppingCart, FaStar } from "react-icons/fa";
import Footer from "../components/Footer";

const ProductItem = ({ product }) => {
  const [expanded, setExpanded] = useState(false);
  const description = product.description || "No description available.";
  const shouldTruncate = description.length > 100;
  const displayDescription = expanded ? description : description.slice(0, 100);

  const toggleDescription = () => setExpanded(!expanded);

  return (
    <div className="product-item">
      <img
        src={product.picture || "https://via.placeholder.com/150"}
        alt={product.name}
      />

      <div className="product-info">
        <h2>{product.name}</h2>
        <p className="product-rating">
          <FaStar className="star-icon" /> (11.4K Reviews)
        </p>
        <p className="product-description">
          {shouldTruncate && !expanded && displayDescription}
          {displayDescription}
          {shouldTruncate && !expanded && "..."}
        </p>
        {shouldTruncate && (
          <button onClick={toggleDescription} className="read-more-btn">
            {expanded ? "Show Less" : "Read More"}
          </button>
        )}

        <p className="product-price">
          ${product.price} <span className="sold-out">Sold out 85%</span>
        </p>

        <div className="product-icons">
          <FaHeart className="heart-icon" />
          <FaShoppingCart
            className="cart-icon"
            onClick={() => alert("Added to cart")}
          />
        </div>

        <button className="add-to-cart-btn" onClick={() => alert("Added to cart")}>Add to Cart</button>
      </div>
      </div>
  );
};

const Product = () => {
  const [products] = useState(sampleProducts);
  const [loading, setLoading] = useState(false);
  const [error] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 500);
  }, []);

  const filteredProducts = products.filter((product) => {
    const nameMatch = product.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const minMatch = minPrice === "" || product.price >= parseFloat(minPrice);
    const maxMatch = maxPrice === "" || product.price <= parseFloat(maxPrice);
    return nameMatch && minMatch && maxMatch;
  });

  return (
    <>
      <Header />
      <div className="product-container">
        <h1>Product Page</h1>
        <p>Discover the latest in footwear fashion.</p>

        <div className="filters">
          <input
            type="text"
            placeholder="Search shoes..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <input
            type="number"
            placeholder="Min Price"
            value={minPrice}
            onChange={(e) => setMinPrice(e.target.value)}
          />
          <input
            type="number"
            placeholder="Max Price"
            value={maxPrice}
            onChange={(e) => setMaxPrice(e.target.value)}
          />
        </div>

        {loading && <div>Loading...</div>}
        {error && <div>Error: {error.message}</div>}
        {!loading && !error && filteredProducts.length === 0 && (
          <div>no product found</div>
        )}
        {!loading && !error && filteredProducts.length > 0 && (
          <div className="product-list">
            {filteredProducts.map((product) => (
              <ProductItem key={product.id} product={product} />
            ))}
          </div>
        )}
      </div>
      <Footer />
    </>
  );
};

export default Product;
