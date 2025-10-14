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

  const [products, setProducts] = useState([
    { id: 1, name: "Fresh Strawberries", price: 5, stock: 20 },
    { id: 2, name: "Organic Honey", price: 10, stock: 12 },
    { id: 3, name: "Farm Eggs", price: 4, stock: 5 },
  ]);

  // ✅ 1. Define the handler functions here
  const handleAddProduct = (newProduct) => {
    setProducts((prevProducts) => [
      ...prevProducts,
      {
        id:
          prevProducts.length > 0
            ? Math.max(...prevProducts.map((p) => p.id)) + 1
            : 1,
        ...newProduct,
      },
    ]);
  };

  const handleRemoveProduct = (productId) => {
    setProducts((prevProducts) =>
      prevProducts.filter((product) => product.id !== productId)
    );
  };

  const handleAddToCart = (item) => {
    setCartItems((prevItems) => [...prevItems, item]);
  };

  const toggleAuthModal = () => {
    setAuthModalOpen(!isAuthModalOpen);
  };

  return (
    <div>
      <Navbar cartCount={cartItems.length} onLoginClick={toggleAuthModal} />

      <main className="pt-24">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/shop"
            element={<Shop products={products} addToCart={handleAddToCart} />}
          />

          {/* ✅ 2. Pass the new handler functions as props */}
          <Route
            path="/sellers"
            element={
              <SellerDashboard
                products={products}
                onAddProduct={handleAddProduct}
                onRemoveProduct={handleRemoveProduct}
              />
            }
          />

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
