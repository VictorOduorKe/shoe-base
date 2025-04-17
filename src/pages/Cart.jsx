import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import "../styles/Cart.css";

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);

  // Load cart from localStorage when the component mounts
  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem("cart_items")) || [];
    setCartItems(savedCart);
  }, []);

  const removeFromCart = (productId) => {
    const updatedCart = cartItems.filter((item) => item.id !== productId);
    updatedCart.length > 0 ? setCartItems(updatedCart) : setCartItems([]);
    localStorage.setItem("cart_items", JSON.stringify(updatedCart));
  };

  return (
    <>
      <Header />
      <div className="cart">
        <section>
          <aside>
            <h2>Your Cart</h2>
            {cartItems.length > 0 ? (
              <div className="cart-items">
                {cartItems.map((item) => (
                  <div key={item.id} className="cart-item">
                    <img src={item.image} alt={item.name} />
                    <div className="cart-item-details">
                      <h3>{item.name}</h3>
                      <p>{item.price}</p>
                    </div>
                    <div className="btns">
                      <div className="count_btns">
                        <span>-</span>
                        <p>1</p>
                        <span>+</span>
                      </div>
                      <button onClick={() => removeFromCart(item.id)}>
                        Remove
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <p>Your cart is empty.</p>
            )}
          </aside>
        </section>
      </div>
    </>
  );
};

export default Cart;
