import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import SellerDashboard from "./pages/SellerDashboard";
import Orders from "./pages/Orders";
import About from "./pages/About";
import Contact from "./pages/Contact";
import AuthModal from "./components/AuthModal";

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [isAuthModalOpen, setAuthModalOpen] = useState(false);

  const handleAddToCart = (item) => {
    setCartItems((prevItems) => [...prevItems, item]);
  };

  const toggleAuthModal = () => {
    setAuthModalOpen(!isAuthModalOpen);
  };

  return (
    <div>
      <Navbar cartCount={cartItems.length} onLoginClick={toggleAuthModal} />

      {/* --- THIS IS THE GLOBAL FIX --- */}
      {/* This main tag pushes all page content down from the navbar */}
      <main className="pt-24">
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
      </main>

      <AuthModal isOpen={isAuthModalOpen} onClose={toggleAuthModal} />
    </div>
  );
}

export default App;
