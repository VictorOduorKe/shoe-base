import React, { useState, useEffect, useRef } from "react";
import "../styles/Home.css";
import adidasLogo from "../assets/adidas.png";
import nikeLogo from "../assets/nike.png";
import pumaLogo from "../assets/puma.png";
import newBalanceLogo from "../assets/th.jpg";
import shoeImage from "../assets/Home banner.png";
import shoe1 from "../assets/shoe1.png";
import shoe2 from "../assets/shoe2.png";
import shoe3 from "../assets/shoe3.png";
import shoe4 from "../assets/shoe4.png";
import { FaHeart, FaShoppingCart, FaStar } from "react-icons/fa";
import {
  MdOutlineKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight,
} from "react-icons/md";
import Footer from "../components/Footer";
import Header from "../components/Header";

const Home = () => {
  const [cart, setCart] = useState([]);
  const [review, setReview] = useState("");
  const sliderRef = useRef(null);

  // Load cart from localStorage on initial load
  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem("cart_items")) || [];
    setCart(savedCart); // Set the initial cart state
  }, []);

  // Handle adding products to the cart
  const addToCart = (product) => {
    // Check if the product is already in the cart before adding it
    const existingProduct = cart.some((item) => item.id === product.id);

    if (existingProduct) {
      return alert("Item already in cart.");
    }

    // Add the product to the cart
    const updatedCart = [...cart, product];
    setCart(updatedCart);
    localStorage.setItem("cart_items", JSON.stringify(updatedCart));
  };

  // Handle removing products from the cart

 
  // Handle scroll left for brand slider
  const scrollLeft = () => {
    sliderRef.current.scrollBy({ left: -200, behavior: "smooth" });
  };

  // Handle scroll right for brand slider
  const scrollRight = () => {
    sliderRef.current.scrollBy({ left: 200, behavior: "smooth" });
  };

  // Handle review change
  const handleReviewChange = (e) => {
    setReview(e.target.value);
  };

  // Handle review submission
  const handleReviewSubmit = () => {
    console.log("Review submitted:", review);
    // Further logic for submitting review (e.g., sending it to an API)
    setReview(""); // Clear input after submission
  };

  const trendingProducts = [
    {
      id: 1,
      name: "Nike Running Shoe",
      price: "$25",
      image: shoe1,
    },
    {
      id: 2,
      name: "Jordan Sneaker",
      price: "$25",
      image: shoe2,
    },
    { id: 3, name: "Nike Shoe Arimac", price: "$25", image: shoe3 },
    {
      id: 4,
      name: "Fit Elent Mosan",
      price: "$25",
      image: shoe4,
    },
  ];

  const availableCollections = [
    {
      id: 1,
      name: "Nike Running Shoe",
      price: "$25",
      image: shoe1,
    },
    {
      id: 2,
      name: "Jordan Sneaker",
      price: "$25",
      image: shoe2,
    },
    { id: 3, name: "Nike Shoe Arimac", price: "$25", image: shoe3 },
    {
      id: 4,
      name: "Fit Elent Mosan",
      price: "$25",
      image: shoe4,
    },
    {
      id: 5,
      name: "Nike Running Shoe",
      price: "$25",
      image: shoe3,
    },
    {
      id: 6,
      name: "Jordan Sneaker",
      price: "$25",
      image: shoe4,
    },
    { id: 7, name: "Nike Shoe Arimac", price: "$25", image: shoe1 },
    {
      id: 8,
      name: "Fit Elent Mosan",
      price: "$25",
      image: shoe2,
    },
  ];

  return (
    <>
      <Header />
      <div className="home">
        <div className="hero">
          <section className="hero-section">
            <div
              className="bgded-overlay"
              style={{
                backgroundImage: `url(${shoeImage})`,
              }}
            >
              <div className="hero-content">
                <h1>The Ultimate Shoe Destination</h1>
                <p>
                  Discover the latest trends, exclusive drops, and timeless
                  classics—all in one place. Shop now and elevate your sneaker
                  game with Shoe Palace!
                </p>
                <div className="hero-buttons">
                  <button className="shop-now">Shop Now</button>
                  <button className="more-info">More Info</button>
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* Brand Section */}
        <section className="brand-section">
          <h2>Brand</h2>
          <div className="brand-slider">
            <button className="brand-nav left" onClick={scrollLeft}>
              <MdOutlineKeyboardArrowLeft />
            </button>
            <div className="brand-logos" ref={sliderRef}>
              <img src={adidasLogo} alt="Adidas" />
              <img src={nikeLogo} alt="Nike" />
              <img src={pumaLogo} alt="Puma" />
              <img src={newBalanceLogo} alt="New Balance" />
            </div>
            <button className="brand-nav right" onClick={scrollRight}>
              <MdOutlineKeyboardArrowRight />
            </button>
          </div>
        </section>

        <section className="trending-products">
          <h2>Trending Products</h2>
          <div className="product-grid">
            {trendingProducts.map((product) => (
              <div key={product.id} id={product.id} className="product-card">
                <img src={product.image} alt={product.name + "image"} />
                <div className="product-info">
                  <span className="product-rating">
                    <FaStar className="star-icon" /> (11.4K Reviews)
                  </span>
                  <h3>{product.name}</h3>
                  <p className="product-price">
                    {product.price}{" "}
                    <span className="sold-out">Sold out 85%</span>
                  </p>
                  <div className="product-icons">
                    <FaHeart className="heart-icon" />
                    <FaShoppingCart
                      className="cart-icon"
                      onClick={() => addToCart(product)}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Offer Section */}
        <section className="offer-section">
          <h2>Offers</h2>
          <div className="offer-container">
            <h1>The Ultimate Shoe Destination</h1>
            <p>
              Discover the latest trends, exclusive drops, and timeless
              classics—all in one place. Shop now and elevate your sneaker game
              with Shoe Palace! Discover the latest trends, exclusive drops, and
              timeless classics—all in one place.
            </p>
            <div className="offer-buttons">
              <button className="shop-now">Get Offer</button>
              <button className="more-info">More Info</button>
            </div>
          </div>
        </section>

        {/* Available Collection Section */}
        <section className="available-collections">
          <h2>Available Collections</h2>
          <div className="product-grid">
            {availableCollections.map((product) => (
              <div key={product.id} className="product-card">
                <img
                  src={product.image}
                  alt={product.name + "image"}
                  className="product-img"
                />
                <div className="product-info">
                  <span className="product-rating">
                    <FaStar className="star-icon" /> (11.4K Reviews)
                  </span>
                  <h3 className="product-name">{product.name}</h3>
                  <p className="product-price">
                    {product.price}{" "}
                    <span className="sold-out">Sold out 85%</span>
                  </p>
                  <button
                    className="add-to-cart"
                    onClick={() => addToCart(product)}
                  >
                    Add to cart
                  </button>
                  <div className="product-icons">
                    <FaHeart className="heart-icon" />
                    <FaShoppingCart className="cart-icon" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Review Section */}
        <section className="review-section">
          <h2>Give Your Reviews</h2>
          <div className="offer-container">
            <h1>Give Your Reviews</h1>
            <p>
              Discover the latest trends, exclusive drops, and timeless
              classics—all in one place. <br />
              Shop now and elevate your sneaker game with Shoe Palace!
            </p>
            <div className="review-input">
              <input
                type="text"
                placeholder="Type your comment"
                value={review}
                onChange={handleReviewChange}
              />
              <button className="submit-btn" onClick={handleReviewSubmit}>
                Submit
              </button>
            </div>
          </div>
        </section>

        <Footer />

        <div className="footer2-container"></div>
      </div>
    </>
  );
};

export default Home;
