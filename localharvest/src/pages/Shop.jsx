import React, { useState } from "react";

function Shop({ products, addToCart }) {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen relative overflow-hidden font-sans bg-gradient-to-br from-slate-950 via-indigo-950 to-violet-950">
      {/* Animated background elements */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-cyan-500/20 rounded-full mix-blend-screen filter blur-3xl animate-float"></div>
        <div className="absolute -top-20 right-1/4 w-80 h-80 bg-violet-500/25 rounded-full mix-blend-screen filter blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-indigo-500/20 rounded-full mix-blend-screen filter blur-3xl animate-float-delayed"></div>

        {/* Grid overlay */}
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
            Premium quality, authentic taste.
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
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="absolute right-4 top-1/2 -translate-y-1/2 h-5 w-5 text-indigo-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
        </div>

        {/* Products Grid */}
        <div className="max-w-7xl mx-auto px-6 pb-20">
          <div className="flex items-center gap-4 mb-12">
            <div className="h-1 flex-1 bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent rounded-full"></div>
            <h2 className="text-4xl font-black text-white tracking-tight whitespace-nowrap">
              Featured Products
            </h2>
            <div className="h-1 flex-1 bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent rounded-full"></div>
          </div>

          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {filteredProducts.map((product, index) => (
                <div
                  key={product.id}
                  className="group bg-gradient-to-br from-slate-800/50 to-indigo-900/30 backdrop-blur-xl rounded-3xl shadow-xl border border-indigo-500/20 p-7 flex flex-col text-center items-center hover:shadow-2xl hover:shadow-cyan-500/40 hover:-translate-y-3 hover:border-cyan-400/50 transition-all duration-500 animate-fadeInUp relative overflow-hidden"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {/* Hover glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/0 to-violet-500/0 group-hover:from-cyan-500/10 group-hover:to-violet-500/10 rounded-3xl transition-all duration-500 pointer-events-none"></div>

                  <div className="relative z-10 w-full">
                    {/* Product Icon/Badge */}
                    <div className="w-16 h-16 bg-gradient-to-br from-cyan-500/20 to-indigo-500/20 rounded-2xl flex items-center justify-center border border-cyan-400/30 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-8 w-8 text-cyan-300"
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

                    {/* Product Name */}
                    <h2 className="text-2xl font-bold text-white mb-3 group-hover:text-cyan-300 transition-colors duration-300">
                      {product.name}
                    </h2>

                    {/* Accent line */}
                    <div className="h-1 w-12 bg-gradient-to-r from-cyan-400 to-violet-400 rounded-full mx-auto mb-4 group-hover:w-16 transition-all duration-300"></div>

                    {/* Price */}
                    <div className="mb-6">
                      <span className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-violet-400">
                        ₹{product.price.toFixed(2)}
                      </span>
                    </div>

                    {/* Add to Cart Button */}
                    <button
                      onClick={() => addToCart(product)}
                      className="w-full text-white font-semibold px-6 py-3 rounded-2xl transition-all duration-300 ease-out transform hover:scale-105 active:scale-95 shadow-lg shadow-cyan-500/50 hover:shadow-2xl hover:shadow-cyan-400/60 bg-gradient-to-r from-cyan-500 via-indigo-500 to-violet-500 cursor-pointer relative overflow-hidden group/btn tracking-wide"
                    >
                      <span className="relative z-10 flex items-center justify-center gap-2">
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
                            d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                          />
                        </svg>
                        Add to Cart
                      </span>
                      <div className="absolute inset-0 bg-gradient-to-r from-violet-500 via-indigo-500 to-cyan-500 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"></div>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="col-span-full">
              <div className="text-center bg-gradient-to-br from-slate-800/50 to-indigo-900/30 backdrop-blur-xl p-16 rounded-3xl border border-indigo-500/20 shadow-xl">
                <div className="w-20 h-20 bg-gradient-to-br from-indigo-500/20 to-violet-500/20 rounded-2xl flex items-center justify-center border border-indigo-400/30 mx-auto mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-10 w-10 text-indigo-300"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-3xl font-bold text-white mb-2">
                  No Products Found
                </h3>
                <p className="text-gray-300 text-lg">
                  Try searching for something else!
                </p>
              </div>
            </div>
          )}
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

export default Shop;
