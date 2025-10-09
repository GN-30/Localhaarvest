import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import SellerDashboard from "./pages/SellerDashboard";
import Orders from "./pages/Orders";
import About from "./pages/About";
import Contact from "./pages/Contact";

function App() {
  // Cart state
  const [cartItems, setCartItems] = useState([]);

  // Add item to cart
  const handleAddToCart = (item) => {
    setCartItems((prevItems) => [...prevItems, item]);
  };

  return (
    <div className="min-h-screen bg-green-50">
      {/* Navbar with cart count */}
      <Navbar cartCount={cartItems.length} />

      {/* Page content */}
      <div className="pt-24">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop addToCart={handleAddToCart} />} />
          <Route path="/sellers" element={<SellerDashboard />} />
          <Route
            path="/orders"
            element={<Orders orders={cartItems} setCartItems={setCartItems} />}
          />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
