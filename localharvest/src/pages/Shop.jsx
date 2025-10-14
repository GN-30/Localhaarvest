import React, { useState } from "react";

// ✅ 1. Accept `products` prop
function Shop({ products, addToCart }) {
  const [searchTerm, setSearchTerm] = useState("");

  // ✅ 2. Filter the `products` prop
  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    // ✅ 3. Add -mt-24 to fix the background position
    <div className="min-h-screen relative overflow-hidden font-sans text-gray-800 bg-gradient-to-br from-white via-green-50 to-emerald-100 -mt-24">
      <div className="absolute inset-0 z-0">
        <div className="absolute -top-10 -left-10 w-80 h-80 bg-emerald-300 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob"></div>
        <div className="absolute top-20 right-0 w-72 h-72 bg-green-300 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-10 left-1/4 w-96 h-96 bg-lime-300 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative z-10 flex flex-col items-center py-16">
        <h1 className="text-6xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-green-500 mb-8">
          Shop Local Products
        </h1>

        <input
          type="text"
          placeholder="Search for honey, mangoes, and more..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="mb-12 px-6 py-3 w-full max-w-lg bg-white/70 backdrop-blur-sm rounded-full border-2 border-transparent focus:ring-2 focus:ring-emerald-500 focus:border-emerald-400 focus:bg-white transition text-lg placeholder-gray-500 shadow-lg"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-8 w-full max-w-7xl">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <div
                key={product.id}
                className="bg-white/70 backdrop-blur-md rounded-2xl shadow-lg border border-white/30 p-6 flex flex-col text-center items-center hover:shadow-2xl hover:shadow-emerald-200/50 hover:border-emerald-300/50 hover:-translate-y-2 transition-all duration-300 ease-in-out"
              >
                <h2 className="text-xl font-bold text-gray-800 mb-2">
                  {product.name}
                </h2>
                <p className="text-2xl font-semibold text-emerald-600 mb-4">
                  ₹{product.price.toFixed(2)}
                </p>
                <button
                  onClick={() => addToCart(product)}
                  className="text-white font-semibold px-6 py-2 rounded-lg transition-all duration-300 ease-in-out transform hover:scale-105 shadow-md mt-auto bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-600 hover:to-green-700 cursor-pointer"
                >
                  Add to Cart
                </button>
              </div>
            ))
          ) : (
            <div className="col-span-full text-center bg-white/60 backdrop-blur-sm p-12 rounded-2xl">
              <h3 className="text-2xl font-semibold text-gray-700">
                No Products Found
              </h3>
              <p className="text-gray-500 mt-2">
                Try searching for something else!
              </p>
            </div>
          )}
        </div>
      </div>

      <style>{`@keyframes blob { ... } .animate-blob { ... }`}</style>
    </div>
  );
}

export default Shop;
