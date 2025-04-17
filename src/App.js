import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Cart from "./pages/Cart";
import Product from "./pages/Product";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/product" element={<Product/>} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="/product/:id/review" element={<Product />} />
        <Route path="/product/:id/review/:reviewId" element={<Product />} />
        <Route path="/product/:id/review/:reviewId/reply" element={<Product />} />
        <Route path="/product/:id/review/:reviewId/reply/:replyId" element={<Product />} />
      </Routes>
    </Router>
  );
};


export default App;