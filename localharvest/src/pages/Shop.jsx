import React, { useState } from "react";

function Shop({ products, addToCart, refreshProducts }) {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Function to handle adding to cart AND saving order in backend
  const handleAddToCart = async (product) => {
    if (product.stock <= 0) {
      alert("No stock left!");
      return;
    }

    // 2. Save order in backend FIRST to check stock
    try {
      const response = await fetch("http://localhost:3001/api/orders", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          product_id: product.id,
          product_name: product.name,
          quantity: 1, // assuming 1 for now
          total_price: product.price,
        }),
      });

      if (response.ok) {
        const data = await response.json();
        // 1. Add to frontend cart with the BACKEND ORDER ID
        addToCart({ ...product, orderId: data.orderId });
        // Refresh products to update stock count
        if (refreshProducts) refreshProducts();
      } else {
        const errorData = await response.json();
        alert(errorData.error || "Failed to add to cart");
      }
    } catch (error) {
      console.error("Failed to save order:", error);
      alert("Network error. Please try again.");
    }
  };

  return (
    <div className="min-h-screen relative overflow-hidden font-sans bg-gradient-to-br from-slate-950 via-indigo-950 to-violet-950">
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-cyan-500/20 rounded-full mix-blend-screen filter blur-3xl animate-float"></div>
        <div className="absolute -top-20 right-1/4 w-80 h-80 bg-violet-500/25 rounded-full mix-blend-screen filter blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-indigo-500/20 rounded-full mix-blend-screen filter blur-3xl animate-float-delayed"></div>
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
      </div>

      <div className="relative z-10">
        {/* Hero Section */}
        <section className="text-center py-20 px-4">
          <div className="inline-block mb-6 px-4 py-2 bg-cyan-500/20 backdrop-blur-sm border border-cyan-400/30 rounded-full">
            <span className="text-cyan-300 text-sm font-medium">
              🛍️ Premium Local Shop
            </span>
          </div>
          <h1 className="text-7xl font-black tracking-tight mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-indigo-400 to-violet-400 drop-shadow-2xl">
              Shop Local Products
            </span>
          </h1>
          <p className="text-gray-300 text-lg mt-4 max-w-2xl mx-auto font-light">
            Discover fresh honey, ripe mangoes, and more from local farmers.
          </p>
        </section>

        {/* Search Bar */}
        <div className="max-w-3xl mx-auto px-6 mb-20">
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500/30 to-violet-500/30 rounded-2xl blur opacity-0 group-focus-within:opacity-100 transition duration-500"></div>
            <input
              type="text"
              placeholder="Search for honey, mangoes, and more..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="relative w-full px-6 py-4 bg-slate-900/60 backdrop-blur-xl rounded-2xl border-2 border-indigo-500/30 focus:ring-2 focus:ring-cyan-400 focus:border-cyan-400 transition-all duration-300 text-white placeholder-indigo-300/50 hover:border-indigo-400/50 shadow-xl"
            />
          </div>
        </div>

        {/* Products Grid */}
        <div className="max-w-7xl mx-auto px-6 pb-20">
          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {filteredProducts.map((product, index) => (
                <div
                  key={product.id}
                  className="group bg-gradient-to-br from-slate-800/50 to-indigo-900/30 backdrop-blur-xl rounded-3xl shadow-xl border border-indigo-500/20 p-7 flex flex-col text-center items-center hover:shadow-2xl hover:shadow-cyan-500/40 hover:-translate-y-3 hover:border-cyan-400/50 transition-all duration-500 animate-fadeInUp relative overflow-hidden"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/0 to-violet-500/0 group-hover:from-cyan-500/10 group-hover:to-violet-500/10 rounded-3xl transition-all duration-500 pointer-events-none"></div>

                  <div className="relative z-10 w-full">
                    <h2 className="text-2xl font-bold text-white mb-3 group-hover:text-cyan-300 transition-colors duration-300">
                      {product.name}
                    </h2>

                    <div className="mb-6">
                      <span className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-violet-400">
                        ₹{product.price}
                      </span>
                      <div className="text-sm text-gray-400 mt-2">
                         Stock: {product.stock}
                      </div>
                    </div>

                    {/* Add to Cart Button */}
                    {product.stock > 0 ? (
                    <button
                      onClick={() => handleAddToCart(product)}
                      className="w-full text-white font-semibold px-6 py-3 rounded-2xl transition-all duration-300 ease-out transform hover:scale-105 active:scale-95 shadow-lg shadow-cyan-500/50 hover:shadow-2xl hover:shadow-cyan-400/60 bg-gradient-to-r from-cyan-500 via-indigo-500 to-violet-500 cursor-pointer relative overflow-hidden group/btn tracking-wide"
                    >
                      <span className="relative z-10 flex items-center justify-center gap-2">
                        Add to Cart
                      </span>
                      <div className="absolute inset-0 bg-gradient-to-r from-violet-500 via-indigo-500 to-cyan-500 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"></div>
                    </button>
                    ) : (
                        <div className="w-full px-6 py-3 rounded-2xl bg-slate-700/50 border border-slate-600/50 text-slate-400 font-semibold cursor-not-allowed">
                            No Stock Left
                        </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center text-gray-300">No Products Found</div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Shop;
