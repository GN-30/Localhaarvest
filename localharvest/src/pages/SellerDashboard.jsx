import React, { useState } from "react";

// --- SVG Icon (Code Fixed Here) ---
const TrashIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-5 w-5"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
  >
    {/* FIXED: Corrected the SVG path data */}
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
    />
  </svg>
);

// --- Component Logic (no changes here) ---
function SellerDashboard({ products, onAddProduct, onRemoveProduct }) {
  const [newProduct, setNewProduct] = useState({
    name: "",
    price: "",
    stock: "",
  });

  const handleAddClick = () => {
    if (!newProduct.name || !newProduct.price || !newProduct.stock) return;
    onAddProduct({
      name: newProduct.name,
      price: parseFloat(newProduct.price),
      stock: parseInt(newProduct.stock),
    });
    setNewProduct({ name: "", price: "", stock: "" });
  };

  const getStockColor = (stock) => {
    if (stock > 15) return "text-green-700 bg-green-100/80";
    if (stock > 5) return "text-yellow-700 bg-yellow-100/80";
    return "text-red-700 bg-red-100/80";
  };

  return (
    <div className="min-h-screen relative overflow-hidden font-sans text-gray-800 bg-gradient-to-br from-white via-green-50 to-emerald-100 -mt-24">
      {/* Animated Background Blobs */}
      <div className="absolute inset-0 z-0">
        <div className="absolute -top-10 -left-10 w-80 h-80 bg-emerald-300 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob"></div>
        <div className="absolute top-20 right-0 w-72 h-72 bg-green-300 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-10 left-1/4 w-96 h-96 bg-lime-300 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob animation-delay-4000"></div>
      </div>

      {/* Content Wrapper */}
      <div className="relative z-10">
        <section className="text-center py-16 px-4">
          <h1 className="text-6xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-green-500">
            Seller Dashboard
          </h1>
          <p className="text-gray-600 text-lg mt-4 max-w-2xl mx-auto">
            Manage your products, track inventory, and grow your business.
          </p>
        </section>

        {/* Add Product Form with Frosted Glass Effect */}
        <div className="max-w-4xl mx-auto bg-white/70 backdrop-blur-md border border-white/30 rounded-2xl p-8 mb-16 shadow-lg">
          <h2 className="text-2xl font-semibold text-gray-700 mb-6">
            Add New Product
          </h2>
          <div className="flex flex-col md:flex-row gap-4 items-center">
            <input
              type="text"
              placeholder="Product Name"
              value={newProduct.name}
              onChange={(e) =>
                setNewProduct({ ...newProduct, name: e.target.value })
              }
              className="px-4 py-3 bg-white/80 border border-gray-200 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:bg-white transition w-full text-gray-700 placeholder-gray-400"
            />
            <input
              type="number"
              placeholder="Price (₹)"
              value={newProduct.price}
              onChange={(e) =>
                setNewProduct({ ...newProduct, price: e.target.value })
              }
              className="px-4 py-3 bg-white/80 border border-gray-200 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:bg-white transition w-full md:w-1/3 text-gray-700 placeholder-gray-400"
            />
            <input
              type="number"
              placeholder="Stock"
              value={newProduct.stock}
              onChange={(e) =>
                setNewProduct({ ...newProduct, stock: e.target.value })
              }
              className="px-4 py-3 bg-white/80 border border-gray-200 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:bg-white transition w-full md:w-1/3 text-gray-700 placeholder-gray-400"
            />
            <button
              onClick={handleAddClick}
              className="w-full md:w-auto text-white font-semibold px-6 py-3 rounded-lg transition-all duration-300 ease-in-out transform hover:scale-105 shadow-md bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-600 hover:to-green-700 cursor-pointer"
            >
              + Add Product
            </button>
          </div>
        </div>

        {/* Product List */}
        <div className="max-w-6xl mx-auto px-6 pb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 tracking-tight">
            Your Inventory
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <div
                key={product.id}
                className="bg-white/70 backdrop-blur-md rounded-xl shadow-lg border border-white/30 p-6 flex flex-col hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
              >
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  {product.name}
                </h3>
                <p className="text-2xl font-semibold text-emerald-600 mb-4">
                  ₹{product.price.toFixed(2)}
                </p>
                <p
                  className={`text-sm font-medium self-start px-3 py-1 rounded-full ${getStockColor(
                    product.stock
                  )}`}
                >
                  {product.stock} in stock
                </p>
                <button
                  onClick={() => onRemoveProduct(product.id)}
                  className="mt-auto ml-auto bg-gray-500/20 text-gray-700 p-3 rounded-full hover:bg-red-500 hover:text-white transition-all duration-200 cursor-pointer"
                >
                  <TrashIcon />
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Animation Styles */}
      <style>{`
        @keyframes blob { 0% { transform: translate(0px, 0px) scale(1); } 33% { transform: translate(30px, -50px) scale(1.1); } 66% { transform: translate(-20px, 20px) scale(0.9); } 100% { transform: translate(0px, 0px) scale(1); } }
        .animate-blob { animation: blob 7s infinite cubic-bezier(0.68, -0.55, 0.27, 1.55); }
        .animation-delay-2000 { animation-delay: 2s; }
        .animation-delay-4000 { animation-delay: 4s; }
      `}</style>
    </div>
  );
}

export default SellerDashboard;
