import React, { useState } from "react";

// --- SVG Icons ---
const TrashIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-5 w-5"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
    />
  </svg>
);
const PackageIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-5 w-5 text-indigo-400"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
    />
  </svg>
);
const DollarSignIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-5 w-5 text-indigo-400"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8V6m0 12v-2m0-10h0M6 12a6 6 0 1112 0 6 6 0 01-12 0z"
    />
  </svg>
);
const HashIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-5 w-5 text-indigo-400"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M7 20l4-16m2 16l4-16M6 9h14M4 15h14"
    />
  </svg>
);

function SellerDashboard({ products, onAddProduct, onRemoveProduct }) {
  const [newProduct, setNewProduct] = useState({
    name: "",
    price: "",
    stock: "",
  });
  const [removingId, setRemovingId] = useState(null);

  const handleRemoveProduct = (id) => {
    setRemovingId(id);
    setTimeout(() => {
      onRemoveProduct(id);
      setRemovingId(null);
    }, 1400);
  };

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
    if (stock > 15) return "text-emerald-900 bg-emerald-400/80";
    if (stock > 5) return "text-amber-900 bg-amber-400/80";
    return "text-rose-900 bg-rose-400/80";
  };

  return (
    <div className="min-h-screen relative overflow-hidden font-sans bg-gradient-to-br from-slate-950 via-indigo-950 to-violet-950">
      {/* Animated background elements */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500/30 rounded-full mix-blend-screen filter blur-3xl animate-pulse-slow"></div>
        <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-indigo-500/30 rounded-full mix-blend-screen filter blur-3xl animate-float"></div>
        <div className="absolute bottom-0 left-1/3 w-96 h-96 bg-cyan-500/20 rounded-full mix-blend-screen filter blur-3xl animate-float-delayed"></div>

        {/* Grid overlay */}
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
      </div>

      <div className="relative z-10">
        {/* Hero Section */}
        <section className="text-center py-20 px-4">
          <div className="inline-block mb-4 px-4 py-2 bg-indigo-500/20 backdrop-blur-sm border border-indigo-400/30 rounded-full">
            <span className="text-indigo-300 text-sm font-medium">
              ✨ Premium Dashboard
            </span>
          </div>
          <h1 className="text-7xl font-black tracking-tight mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-violet-400 to-fuchsia-400 drop-shadow-2xl">
              Seller Dashboard
            </span>
          </h1>
          <p className="text-gray-300 text-xl mt-4 max-w-2xl mx-auto font-light">
            Manage your products with style. Track inventory in real-time.
          </p>
        </section>

        {/* Add Product Card */}
        <div className="max-w-5xl mx-auto px-6 mb-16">
          <div className="bg-gradient-to-br from-indigo-900/40 to-violet-900/40 backdrop-blur-xl border border-indigo-500/20 rounded-3xl p-8 shadow-2xl shadow-indigo-900/50 hover:shadow-indigo-600/50 transition-all duration-500">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-cyan-500 to-indigo-500 rounded-xl flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 4v16m8-8H4"
                  />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-white">Add New Product</h2>
            </div>

            <div className="flex flex-col md:flex-row gap-4 items-end">
              <div className="relative w-full group">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 z-10 transition-all duration-300 group-focus-within:scale-110">
                  <PackageIcon />
                </span>
                <input
                  type="text"
                  placeholder="Product Name"
                  value={newProduct.name}
                  onChange={(e) =>
                    setNewProduct({ ...newProduct, name: e.target.value })
                  }
                  className="pl-12 pr-4 py-4 bg-slate-900/60 border-2 border-indigo-500/30 rounded-2xl focus:ring-2 focus:ring-cyan-400 focus:border-cyan-400 transition-all duration-300 w-full text-white placeholder-indigo-300/50 backdrop-blur-sm hover:border-indigo-400/50"
                />
              </div>

              <div className="relative w-full md:w-1/3 group">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 z-10 transition-all duration-300 group-focus-within:scale-110">
                  <DollarSignIcon />
                </span>
                <input
                  type="number"
                  placeholder="Price (₹)"
                  value={newProduct.price}
                  onChange={(e) =>
                    setNewProduct({ ...newProduct, price: e.target.value })
                  }
                  className="pl-12 pr-4 py-4 bg-slate-900/60 border-2 border-indigo-500/30 rounded-2xl focus:ring-2 focus:ring-cyan-400 focus:border-cyan-400 transition-all duration-300 w-full text-white placeholder-indigo-300/50 backdrop-blur-sm hover:border-indigo-400/50"
                />
              </div>

              <div className="relative w-full md:w-1/3 group">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 z-10 transition-all duration-300 group-focus-within:scale-110">
                  <HashIcon />
                </span>
                <input
                  type="number"
                  placeholder="Stock"
                  value={newProduct.stock}
                  onChange={(e) =>
                    setNewProduct({ ...newProduct, stock: e.target.value })
                  }
                  className="pl-12 pr-4 py-4 bg-slate-900/60 border-2 border-indigo-500/30 rounded-2xl focus:ring-2 focus:ring-cyan-400 focus:border-cyan-400 transition-all duration-300 w-full text-white placeholder-indigo-300/50 backdrop-blur-sm hover:border-indigo-400/50"
                />
              </div>

              <button
                onClick={handleAddClick}
                className="w-full md:w-auto text-white font-semibold px-8 py-4 rounded-2xl transition-all duration-300 ease-out transform hover:scale-105 active:scale-95 shadow-xl shadow-cyan-500/50 hover:shadow-2xl hover:shadow-cyan-400/60 bg-gradient-to-r from-cyan-500 via-indigo-500 to-violet-500 cursor-pointer relative overflow-hidden group tracking-wide"
                style={{
                  fontFamily: "'Space Grotesk', 'Rajdhani', sans-serif",
                  letterSpacing: "0.05em",
                }}
              >
                <span className="relative z-10 flex items-center gap-2">
                  Add Product
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-violet-500 via-indigo-500 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
            </div>
          </div>
        </div>

        {/* Inventory Grid */}
        <div className="max-w-7xl mx-auto px-6 pb-20">
          <div className="flex items-center gap-4 mb-10">
            <div className="h-1 flex-1 bg-gradient-to-r from-transparent via-indigo-500/50 to-transparent rounded-full"></div>
            <h2 className="text-4xl font-black text-white tracking-tight">
              Your Inventory
            </h2>
            <div className="h-1 flex-1 bg-gradient-to-r from-transparent via-indigo-500/50 to-transparent rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <div
                key={product.id}
                className={`group bg-gradient-to-br from-slate-800/50 to-indigo-900/30 backdrop-blur-xl rounded-3xl shadow-xl border border-indigo-500/20 p-7 flex flex-col hover:shadow-2xl hover:shadow-indigo-500/40 hover:-translate-y-3 hover:border-indigo-400/50 transition-all duration-500 animate-fadeInUp relative ${
                  removingId === product.id
                    ? "overflow-visible"
                    : "overflow-hidden"
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Hover glow effect */}
                {removingId !== product.id && (
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/0 to-violet-500/0 group-hover:from-cyan-500/10 group-hover:to-violet-500/10 rounded-3xl transition-all duration-500"></div>
                )}

                {/* Shatter pieces - now full card replicas */}
                {removingId === product.id && (
                  <>
                    <div className="shard shard-1 absolute inset-0 bg-gradient-to-br from-slate-800/50 to-indigo-900/30 backdrop-blur-xl border border-indigo-500/20 rounded-3xl p-7 shadow-xl">
                      <div className="relative z-10">
                        <div className="flex items-start justify-between mb-3">
                          <div className="flex-1">
                            <h3 className="text-2xl font-bold text-white mb-1">
                              {product.name}
                            </h3>
                            <div className="h-1 w-16 bg-gradient-to-r from-cyan-400 to-violet-400 rounded-full"></div>
                          </div>
                        </div>
                        <div className="flex items-baseline gap-2 mb-6">
                          <span className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-violet-400">
                            ₹{product.price.toFixed(2)}
                          </span>
                        </div>
                        <span
                          className={`text-sm font-bold px-4 py-2 rounded-xl backdrop-blur-sm shadow-lg inline-block ${getStockColor(
                            product.stock
                          )}`}
                        >
                          {product.stock} units
                        </span>
                      </div>
                    </div>
                    <div className="shard shard-2 absolute inset-0 bg-gradient-to-br from-slate-800/50 to-indigo-900/30 backdrop-blur-xl border border-indigo-500/20 rounded-3xl p-7 shadow-xl">
                      <div className="relative z-10">
                        <div className="flex items-start justify-between mb-3">
                          <div className="flex-1">
                            <h3 className="text-2xl font-bold text-white mb-1">
                              {product.name}
                            </h3>
                            <div className="h-1 w-16 bg-gradient-to-r from-cyan-400 to-violet-400 rounded-full"></div>
                          </div>
                        </div>
                        <div className="flex items-baseline gap-2 mb-6">
                          <span className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-violet-400">
                            ₹{product.price.toFixed(2)}
                          </span>
                        </div>
                        <span
                          className={`text-sm font-bold px-4 py-2 rounded-xl backdrop-blur-sm shadow-lg inline-block ${getStockColor(
                            product.stock
                          )}`}
                        >
                          {product.stock} units
                        </span>
                      </div>
                    </div>
                    <div className="shard shard-3 absolute inset-0 bg-gradient-to-br from-slate-800/50 to-indigo-900/30 backdrop-blur-xl border border-indigo-500/20 rounded-3xl p-7 shadow-xl">
                      <div className="relative z-10">
                        <div className="flex items-start justify-between mb-3">
                          <div className="flex-1">
                            <h3 className="text-2xl font-bold text-white mb-1">
                              {product.name}
                            </h3>
                            <div className="h-1 w-16 bg-gradient-to-r from-cyan-400 to-violet-400 rounded-full"></div>
                          </div>
                        </div>
                        <div className="flex items-baseline gap-2 mb-6">
                          <span className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-violet-400">
                            ₹{product.price.toFixed(2)}
                          </span>
                        </div>
                        <span
                          className={`text-sm font-bold px-4 py-2 rounded-xl backdrop-blur-sm shadow-lg inline-block ${getStockColor(
                            product.stock
                          )}`}
                        >
                          {product.stock} units
                        </span>
                      </div>
                    </div>
                    <div className="shard shard-4 absolute inset-0 bg-gradient-to-br from-slate-800/50 to-indigo-900/30 backdrop-blur-xl border border-indigo-500/20 rounded-3xl p-7 shadow-xl">
                      <div className="relative z-10">
                        <div className="flex items-start justify-between mb-3">
                          <div className="flex-1">
                            <h3 className="text-2xl font-bold text-white mb-1">
                              {product.name}
                            </h3>
                            <div className="h-1 w-16 bg-gradient-to-r from-cyan-400 to-violet-400 rounded-full"></div>
                          </div>
                        </div>
                        <div className="flex items-baseline gap-2 mb-6">
                          <span className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-violet-400">
                            ₹{product.price.toFixed(2)}
                          </span>
                        </div>
                        <span
                          className={`text-sm font-bold px-4 py-2 rounded-xl backdrop-blur-sm shadow-lg inline-block ${getStockColor(
                            product.stock
                          )}`}
                        >
                          {product.stock} units
                        </span>
                      </div>
                    </div>
                    <div className="shard shard-5 absolute inset-0 bg-gradient-to-br from-slate-800/50 to-indigo-900/30 backdrop-blur-xl border border-indigo-500/20 rounded-3xl p-7 shadow-xl">
                      <div className="relative z-10">
                        <div className="flex items-start justify-between mb-3">
                          <div className="flex-1">
                            <h3 className="text-2xl font-bold text-white mb-1">
                              {product.name}
                            </h3>
                            <div className="h-1 w-16 bg-gradient-to-r from-cyan-400 to-violet-400 rounded-full"></div>
                          </div>
                        </div>
                        <div className="flex items-baseline gap-2 mb-6">
                          <span className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-violet-400">
                            ₹{product.price.toFixed(2)}
                          </span>
                        </div>
                        <span
                          className={`text-sm font-bold px-4 py-2 rounded-xl backdrop-blur-sm shadow-lg inline-block ${getStockColor(
                            product.stock
                          )}`}
                        >
                          {product.stock} units
                        </span>
                      </div>
                    </div>
                    <div className="shard shard-6 absolute inset-0 bg-gradient-to-br from-slate-800/50 to-indigo-900/30 backdrop-blur-xl border border-indigo-500/20 rounded-3xl p-7 shadow-xl">
                      <div className="relative z-10">
                        <div className="flex items-start justify-between mb-3">
                          <div className="flex-1">
                            <h3 className="text-2xl font-bold text-white mb-1">
                              {product.name}
                            </h3>
                            <div className="h-1 w-16 bg-gradient-to-r from-cyan-400 to-violet-400 rounded-full"></div>
                          </div>
                        </div>
                        <div className="flex items-baseline gap-2 mb-6">
                          <span className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-violet-400">
                            ₹{product.price.toFixed(2)}
                          </span>
                        </div>
                        <span
                          className={`text-sm font-bold px-4 py-2 rounded-xl backdrop-blur-sm shadow-lg inline-block ${getStockColor(
                            product.stock
                          )}`}
                        >
                          {product.stock} units
                        </span>
                      </div>
                    </div>
                  </>
                )}

                <div
                  className={`relative z-10 ${
                    removingId === product.id ? "invisible" : ""
                  }`}
                >
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-white mb-1 group-hover:text-cyan-300 transition-colors duration-300">
                        {product.name}
                      </h3>
                      <div className="h-1 w-16 bg-gradient-to-r from-cyan-400 to-violet-400 rounded-full group-hover:w-24 transition-all duration-300"></div>
                    </div>
                    <button
                      onClick={() => handleRemoveProduct(product.id)}
                      className="bg-slate-700/50 text-gray-400 p-3 rounded-xl hover:bg-rose-500 hover:text-white hover:scale-110 hover:rotate-12 transition-all duration-300 cursor-pointer backdrop-blur-sm border border-slate-600/50 hover:border-rose-400"
                    >
                      <TrashIcon />
                    </button>
                  </div>

                  <div className="flex items-baseline gap-2 mb-6">
                    <span className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-violet-400">
                      ₹{product.price.toFixed(2)}
                    </span>
                  </div>

                  <div className="flex items-center justify-between">
                    <span
                      className={`text-sm font-bold px-4 py-2 rounded-xl backdrop-blur-sm shadow-lg ${getStockColor(
                        product.stock
                      )}`}
                    >
                      {product.stock} units
                    </span>
                    <div className="w-12 h-12 bg-gradient-to-br from-indigo-500/20 to-violet-500/20 rounded-xl flex items-center justify-center border border-indigo-400/30 group-hover:scale-110 transition-transform duration-300">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 text-indigo-300"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fadeInUp { 
          from { opacity: 0; transform: translateY(40px); } 
          to { opacity: 1; transform: translateY(0); } 
        }
        @keyframes float { 
          0%, 100% { transform: translateY(0px) translateX(0px); } 
          50% { transform: translateY(-20px) translateX(20px); } 
        }
        @keyframes float-delayed { 
          0%, 100% { transform: translateY(0px) translateX(0px); } 
          50% { transform: translateY(20px) translateX(-20px); } 
        }
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 0.5; transform: scale(1.1); }
        }
        @keyframes shatter {
          0% { opacity: 1; }
          100% { opacity: 0; }
        }
        @keyframes shard1 {
          0% { clip-path: polygon(0 0, 60% 0, 40% 50%, 0 40%); transform: translate(0, 0) rotate(0deg); opacity: 1; }
          50% { clip-path: polygon(0 0, 60% 0, 40% 50%, 0 40%); transform: translate(-150px, -80px) rotate(-180deg); opacity: 1; }
          100% { clip-path: polygon(0 0, 60% 0, 40% 50%, 0 40%); transform: translate(-170px, 600px) rotate(-360deg); opacity: 0; }
        }
        @keyframes shard2 {
          0% { clip-path: polygon(60% 0, 100% 0, 100% 45%, 50% 40%); transform: translate(0, 0) rotate(0deg); opacity: 1; }
          50% { clip-path: polygon(60% 0, 100% 0, 100% 45%, 50% 40%); transform: translate(180px, -100px) rotate(200deg); opacity: 1; }
          100% { clip-path: polygon(60% 0, 100% 0, 100% 45%, 50% 40%); transform: translate(200px, 600px) rotate(400deg); opacity: 0; }
        }
        @keyframes shard3 {
          0% { clip-path: polygon(0 40%, 40% 50%, 45% 100%, 0 100%); transform: translate(0, 0) rotate(0deg); opacity: 1; }
          50% { clip-path: polygon(0 40%, 40% 50%, 45% 100%, 0 100%); transform: translate(-120px, 50px) rotate(-140deg); opacity: 1; }
          100% { clip-path: polygon(0 40%, 40% 50%, 45% 100%, 0 100%); transform: translate(-140px, 600px) rotate(-280deg); opacity: 0; }
        }
        @keyframes shard4 {
          0% { clip-path: polygon(40% 50%, 60% 45%, 55% 100%, 45% 100%); transform: translate(0, 0) rotate(0deg); opacity: 1; }
          50% { clip-path: polygon(40% 50%, 60% 45%, 55% 100%, 45% 100%); transform: translate(30px, -60px) rotate(160deg); opacity: 1; }
          100% { clip-path: polygon(40% 50%, 60% 45%, 55% 100%, 45% 100%); transform: translate(40px, 600px) rotate(320deg); opacity: 0; }
        }
        @keyframes shard5 {
          0% { clip-path: polygon(50% 40%, 100% 45%, 100% 100%, 55% 100%); transform: translate(0, 0) rotate(0deg); opacity: 1; }
          50% { clip-path: polygon(50% 40%, 100% 45%, 100% 100%, 55% 100%); transform: translate(160px, 70px) rotate(220deg); opacity: 1; }
          100% { clip-path: polygon(50% 40%, 100% 45%, 100% 100%, 55% 100%); transform: translate(180px, 600px) rotate(440deg); opacity: 0; }
        }
        @keyframes shard6 {
          0% { clip-path: polygon(40% 50%, 60% 45%, 50% 40%); transform: translate(0, 0) rotate(0deg) scale(1); opacity: 1; }
          50% { clip-path: polygon(40% 50%, 60% 45%, 50% 40%); transform: translate(-50px, -120px) rotate(-240deg) scale(0.8); opacity: 1; }
          100% { clip-path: polygon(40% 50%, 60% 45%, 50% 40%); transform: translate(-60px, 600px) rotate(-480deg) scale(0.4); opacity: 0; }
        }
        .animate-fadeInUp { 
          animation: fadeInUp 0.6s ease-out forwards; 
          animation-fill-mode: backwards; 
        }
        .animate-float { 
          animation: float 8s ease-in-out infinite; 
        }
        .animate-float-delayed { 
          animation: float-delayed 10s ease-in-out infinite; 
        }
        .animate-pulse-slow {
          animation: pulse-slow 4s ease-in-out infinite;
        }
        .animate-shatter {
          pointer-events: none;
        }
        .shard {
          pointer-events: none;
        }
        .shard-1 { animation: shard1 1.4s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards; }
        .shard-2 { animation: shard2 1.4s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards; }
        .shard-3 { animation: shard3 1.4s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards; }
        .shard-4 { animation: shard4 1.4s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards; }
        .shard-5 { animation: shard5 1.4s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards; }
        .shard-6 { animation: shard6 1.4s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards; }
        .bg-grid-pattern {
          background-image: 
            linear-gradient(rgba(139, 92, 246, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(139, 92, 246, 0.1) 1px, transparent 1px);
          background-size: 50px 50px;
        }
      `}</style>
    </div>
  );
}

export default SellerDashboard;
