import { useState } from "react";
import { NavLink } from "react-router-dom";
import "../styles/Header.css";
import logo1 from "../assets/logo1-bg.png";
import { FaShoppingCart, FaUserCircle, FaBars, FaTimes } from "react-icons/fa";

const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const handleNavToggle = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <header className="header">
      <div className="logo-container">
        <a href="/">
          <img src={logo1} alt="Shoe Palace Logo" className="logo" />
        </a>
      </div>
      <button className="navbar-toggler" onClick={handleNavToggle}>
        {isNavOpen ? <FaTimes /> : <FaBars />}
      </button>

      <nav className={isNavOpen ? "nav-links nav-open" : "nav-links"}>
        <ul>
          <li>
            <NavLink to="/" onClick={handleNavToggle}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" onClick={handleNavToggle}>
              About
            </NavLink>
          </li>
          <li>
            <NavLink to="/product" onClick={handleNavToggle}>
              Product
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" onClick={handleNavToggle}>
              Contact
            </NavLink>
          </li>
        </ul>
      </nav>

      <div className={isNavOpen ? "icons icons-open" : "icons"}>
        <NavLink to="/cart" onClick={handleNavToggle}>
          <FaShoppingCart className="icon1" />
        </NavLink>
        <FaUserCircle className="icon2" />
      </div>
    </header>
  );
};

export default Header;
