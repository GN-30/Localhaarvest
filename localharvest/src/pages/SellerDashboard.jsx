import React, { useState } from "react";
import { useContext } from "react";
import { ProductContext } from "../context/ProductContext";

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

function SellerDashboard({
  products,
  onAddProduct,
  onRemoveProduct,
}) {
  const [newProduct, setNewProduct] = useState({
    name: "",
    price: "",
    stock: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [removingId, setRemovingId] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!newProduct.name || !newProduct.price || !newProduct.stock) {
      // Basic client-side validation, parent component handles actual alerts/toasts
      return;
    }

    setIsSubmitting(true);

    try {
      // Call parent handler directly with the payload
      await onAddProduct({
        name: newProduct.name,
        price: parseFloat(newProduct.price),
        stock: parseInt(newProduct.stock, 10),
      });

      // Clear form only on success (assumed if no error thrown)
      setNewProduct({ name: "", price: "", stock: "" });
    } catch (error) {
      console.error("Error submitting product:", error);
    } finally {
      setIsSubmitting(false);
    }
  };


  const handleRemoveProduct = async (id) => {
    setRemovingId(id);
    // Wait for animation to finish before calling API
    setTimeout(async () => {
        try {
            await onRemoveProduct(id);
        } catch (error) {
            console.error("Error removing", error);
        } finally {
            setRemovingId(null);
        }
    }, 800);
  };

  const getStockColor = (stock) => {
    if (stock > 15) return "text-emerald-900 bg-emerald-400/80";
    if (stock > 5) return "text-amber-900 bg-amber-400/80";
    return "text-rose-900 bg-rose-400/80";
  };

  return (
    <div className="min-h-screen relative overflow-hidden font-sans bg-gradient-to-br from-slate-950 via-indigo-950 to-violet-950">
      {/* Refined Background matching Home.jsx */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-cyan-500/20 rounded-full mix-blend-screen filter blur-3xl animate-float"></div>
        <div className="absolute -top-20 right-1/4 w-80 h-80 bg-violet-500/25 rounded-full mix-blend-screen filter blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-indigo-500/20 rounded-full mix-blend-screen filter blur-3xl animate-float-delayed"></div>
        {/* Grid overlay */}
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
      </div>

      <div className="relative z-10">
        {/* Header Section */}
        <section className="text-center py-24 px-4">
          <div className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 bg-indigo-500/10 backdrop-blur-md border border-indigo-400/20 rounded-full shadow-lg shadow-indigo-500/10">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
            </span>
            <span className="text-indigo-200 text-xs font-semibold tracking-wide uppercase">
              Admin & Seller Portal
            </span>
          </div>
          <h1 className="text-6xl md:text-7xl font-bold tracking-tight mb-6 text-white leading-tight">
            Manage <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-cyan-400">Inventory</span>
          </h1>
          <p className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto font-light leading-relaxed">
            Seamlessly add, track, and manage your products with our professional dashboard interface.
          </p>
        </section>

        {/* Add Product Form */}
        <div className="max-w-4xl mx-auto px-6 mb-24">
          <div className="bg-gradient-to-br from-slate-800/50 to-indigo-900/30 backdrop-blur-xl border border-indigo-500/20 rounded-3xl p-8 md:p-10 shadow-2xl shadow-indigo-500/10 relative overflow-hidden">
            {/* Glow effect */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl -mr-32 -mt-32 pointer-events-none"></div>
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg shadow-indigo-500/30">
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
                    d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                  />
                </svg>
              </div>
              <div>
                <h2 className="text-2xl font-bold text-white">Add New Product</h2>
                <p className="text-slate-400 text-sm">Enter product details below</p>
              </div>
            </div>

            <form
              onSubmit={handleSubmit}
              className="grid md:grid-cols-4 gap-6"
            >
              <div className="relative group md:col-span-4 lg:col-span-2">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-indigo-400 transition-colors duration-300">
                  <PackageIcon />
                </span>
                <input
                  type="text"
                  placeholder="Product Name"
                  value={newProduct.name}
                  onChange={(e) =>
                    setNewProduct({ ...newProduct, name: e.target.value })
                  }
                  disabled={isSubmitting}
                  className="w-full pl-12 pr-4 py-4 bg-slate-950/50 border border-slate-700 rounded-xl text-slate-200 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500 transition-all duration-300 hover:bg-slate-950/80"
                />
              </div>

              <div className="relative group md:col-span-2 lg:col-span-1">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-indigo-400 transition-colors duration-300">
                  <DollarSignIcon />
                </span>
                <input
                  type="number"
                  placeholder="Price"
                  value={newProduct.price}
                  onChange={(e) =>
                    setNewProduct({ ...newProduct, price: e.target.value })
                  }
                  disabled={isSubmitting}
                  className="w-full pl-12 pr-4 py-4 bg-slate-950/50 border border-slate-700 rounded-xl text-slate-200 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500 transition-all duration-300 hover:bg-slate-950/80"
                />
              </div>

              <div className="relative group md:col-span-2 lg:col-span-1">
                 <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-indigo-400 transition-colors duration-300">
                  <HashIcon />
                </span>
                <input
                  type="number"
                  placeholder="Stock"
                  value={newProduct.stock}
                  onChange={(e) =>
                    setNewProduct({ ...newProduct, stock: e.target.value })
                  }
                  disabled={isSubmitting}
                  className="w-full pl-12 pr-4 py-4 bg-slate-950/50 border border-slate-700 rounded-xl text-slate-200 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500 transition-all duration-300 hover:bg-slate-950/80"
                />
              </div>
              
               <div className="md:col-span-4 mt-2">
                <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 px-6 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white font-semibold rounded-xl shadow-lg shadow-indigo-600/20 transform transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2 group"
                >
                    {isSubmitting ? (
                        <span className="animate-pulse">Processing...</span>
                    ) : (
                        <>
                            Add to Inventory
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                            </svg>
                        </>
                    )}
                </button>
               </div>
            </form>
          </div>
        </div>

        {/* Inventory List */}
        <div className="max-w-7xl mx-auto px-6 pb-24">
            <div className="flex items-center justify-between mb-8 px-2">
                <h2 className="text-3xl font-bold text-white flex items-center gap-3">
                    Current Stock
                    <span className="px-3 py-1 bg-slate-800 text-slate-300 text-sm font-medium rounded-full border border-slate-700">
                        {products.length} Items
                    </span>
                </h2>
                {/* Optional: Add search/filter here later */}
            </div>
            
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {products.map((product, index) => (
              <div
                key={product.id}
                style={{ animationDelay: `${index * 50}ms` }}
                className={`
                    group relative bg-slate-900/40 backdrop-blur-xl border border-white/5 rounded-3xl p-6 
                    hover:bg-slate-800/60 hover:border-indigo-500/30 hover:shadow-2xl hover:shadow-indigo-500/10 
                    transition-all duration-500 flex flex-col
                     ${removingId === product.id ? "animate-shatter pointer-events-none" : "animate-fadeInUp opacity-100 scale-100"}
                `}
              >
                <div className="flex justify-between items-start mb-4">
                     <div className="w-12 h-12 rounded-xl bg-slate-800 flex items-center justify-center text-2xl group-hover:bg-indigo-500/20 group-hover:text-indigo-400 transition-colors duration-300">
                        📦
                     </div>
                     <button
                        onClick={() => handleRemoveProduct(product.id)}
                        className="p-2 text-slate-500 hover:text-rose-400 hover:bg-rose-500/10 rounded-lg transition-all duration-300"
                        title="Remove Product"
                     >
                        <TrashIcon />
                     </button>
                </div>
                
                <h3 className="text-xl font-bold text-slate-100 mb-1 group-hover:text-indigo-300 transition-colors">
                    {product.name}
                </h3>
                <div className="flex items-baseline gap-1 mb-4">
                    <span className="text-sm text-slate-400">₹</span>
                    <span className="text-2xl font-bold text-white">{product.price}</span>
                </div>

                <div className="mt-auto pt-4 border-t border-white/5 flex items-center justify-between">
                    <span className={`text-xs font-bold px-3 py-1.5 rounded-lg ${getStockColor(product.stock)}`}>
                        {product.stock} in stock
                    </span>
                </div>
              </div>
            ))}
            
            {products.length === 0 && (
                <div className="col-span-full py-20 text-center text-slate-500 bg-slate-900/20 rounded-3xl border border-dashed border-slate-800">
                    <p>No products in inventory yet.</p>
                </div>
            )}
          </div>
        </div>
      </div>

       <style>{`
        @keyframes fadeInUp { 
          from { opacity: 0; transform: translateY(20px); } 
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
            0% { transform: scale(1); opacity: 1; }
            20% { transform: scale(1.1) rotate(2deg); opacity: 1; filter: brightness(1.2); }
            50% { transform: scale(1.2) rotate(-2deg); opacity: 0.8; }
            100% { transform: scale(0) rotate(10deg); opacity: 0; filter: blur(10px); }
        }
        .animate-fadeInUp { 
          animation: fadeInUp 0.5s cubic-bezier(0.2, 0.8, 0.2, 1) forwards; 
          animation-fill-mode: backwards; 
        }
        .animate-float { 
          animation: float 10s ease-in-out infinite; 
        }
        .animate-float-delayed { 
          animation: float-delayed 12s ease-in-out infinite; 
        }
        .animate-pulse-slow {
          animation: pulse-slow 8s ease-in-out infinite;
        }
        .animate-shatter {
            animation: shatter 0.5s ease-in forwards;
        }
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
