import React, { useState, useEffect } from "react";
import { useToast } from "./context/ToastContext";
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
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts();
  }, []);

  // Fetch all products from backend
  const fetchProducts = async () => {
    try {
      const response = await fetch("http://localhost:3001/api/products");
      const data = await response.json();
      setProducts(data);
    } catch (error) {
      console.error("Failed to fetch products:", error);
    }
  };

  // ✅ FIXED: Add product using backend response (no dummy products)
  // ✅ FIXED: Add product using backend response (no dummy + no alert)
  const { addToast } = useToast();

  const handleAddProduct = async (newProduct) => {
    try {
      const response = await fetch("http://localhost:3001/api/products", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newProduct),
      });

      if (!response.ok) {
        throw new Error("Failed to add product");
      }

      const updatedList = await response.json();
      setProducts(updatedList);
      addToast("Product added successfully", "success");
    } catch (error) {
      console.error("Error adding product:", error);
      addToast("Failed to add product", "error");
    }
  };

  const handleRemoveProduct = async (productId) => {
    try {
      const response = await fetch(
        `http://localhost:3001/api/products/${productId}`,
        { method: "DELETE" }
      );

      if (!response.ok) {
        throw new Error("Failed to delete product");
      }

      const updatedList = await response.json();
      setProducts(updatedList);
      addToast("Product removed successfully", "success");
    } catch (error) {
      console.error("Error deleting product:", error);
      addToast("Failed to delete product", "error");
    }
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
            element={<Shop products={products} addToCart={handleAddToCart} refreshProducts={fetchProducts} />}
          />
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
            element={<Orders orders={cartItems} setCartItems={setCartItems} refreshProducts={fetchProducts} />}
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
