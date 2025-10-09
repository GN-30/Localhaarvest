import React, { useState } from "react";

const productsData = [
  { id: 1, name: "Organic Honey", price: 250, image: "/images/honey.jpg" }, // Example with images
  { id: 2, name: "Fresh Mangoes", price: 120, image: "/images/mangoes.jpg" },
  { id: 3, name: "Homemade Pickle", price: 180, image: "/images/pickle.jpg" },
  {
    id: 4,
    name: "Farm Vegetables",
    price: 90,
    image: "/images/vegetables.jpg",
  },
];

function Shop({ addToCart }) {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredProducts = productsData.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen relative overflow-hidden font-sans text-gray-800 bg-gradient-to-br from-white via-green-50 to-emerald-100">
      {/* Animated Background Blobs */}
      <div className="absolute -top-10 -left-10 w-80 h-80 bg-emerald-300 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob"></div>
      <div className="absolute top-20 right-0 w-72 h-72 bg-green-300 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob animation-delay-2000"></div>
      <div className="absolute bottom-10 left-1/4 w-96 h-96 bg-lime-300 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob animation-delay-4000"></div>

      {/* Content Wrapper */}
      <div className="relative z-10 flex flex-col items-center py-16">
        <h1 className="text-6xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-green-500 mb-8">
          Shop Local Products
        </h1>

        {/* Search Bar */}
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
                {/* You can add product images here for more appeal */}
                {/* <img src={product.image} alt={product.name} className="w-full h-40 object-cover rounded-lg mb-4" /> */}
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

      {/* Animation Styles */}
      <style jsx>{`
        @keyframes blob {
          0% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
          100% {
            transform: translate(0px, 0px) scale(1);
          }
        }
        .animate-blob {
          animation: blob 7s infinite cubic-bezier(0.68, -0.55, 0.27, 1.55);
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </div>
  );
}

export default Shop;
