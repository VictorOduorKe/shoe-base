import "../styles/Footer.css";
import logo from "../assets/logo1-bg.png";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-links">
          <div className="footer-logo">
            <a href="/">
              <img src={logo} alt="Shoe Palace Logo" />
            </a>
          </div>
          <div className="footer-section">
            <h3>Pages</h3>
            <ul>
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/about">About</a>
              </li>
              <li>
                <a href="/product">Product</a>
              </li>
              <li>
                <a href="/contact">Contact</a>
              </li>
            </ul>
          </div>
          <div className="footer-section">
            <h3>Brand</h3>
            <ul>
              <li>Nike</li>
              <li>Adidas</li>
              <li>Puma</li>
              <li>New Balance</li>
            </ul>
          </div>
          <div className="footer-section">
            <h3>Contact</h3>
            <ul>
              <li>+254 xx xxx xxx</li>
              <li>info@shoebase.com</li>
              <li>Follow</li>
              <li>Market</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
