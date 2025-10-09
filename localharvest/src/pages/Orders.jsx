import React, { useState } from "react";

function Orders({ orders, setCartItems }) {
  const [removingIndex, setRemovingIndex] = useState(null);

  // Remove item with fade+scale animation
  const removeItem = (indexToRemove) => {
    setRemovingIndex(indexToRemove);
    setTimeout(() => {
      setCartItems((prevItems) =>
        prevItems.filter((_, index) => index !== indexToRemove)
      );
      setRemovingIndex(null);
    }, 300);
  };

  // Calculate total amount
  const totalAmount = orders.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="min-h-screen relative overflow-hidden font-sans text-gray-800 bg-gradient-to-br from-white via-green-50 to-emerald-100">
      {/* Animated Background Blobs */}
      <div className="absolute -top-10 -left-10 w-80 h-80 bg-emerald-300 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob"></div>
      <div className="absolute top-20 right-0 w-72 h-72 bg-green-300 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob animation-delay-2000"></div>
      <div className="absolute bottom-10 left-1/4 w-96 h-96 bg-lime-300 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob animation-delay-4000"></div>

      {/* Content Wrapper */}
      <div className="relative z-10 flex flex-col items-center py-16 px-4">
        <h1 className="text-6xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-green-500 mb-8">
          Your Cart
        </h1>

        {orders.length === 0 ? (
          <div className="text-center bg-white/60 backdrop-blur-sm p-12 rounded-2xl shadow-lg">
            <h3 className="text-2xl font-semibold text-gray-700">
              Your Cart is Empty
            </h3>
            <p className="text-gray-500 mt-2">
              Looks like you haven't added anything yet!
            </p>
          </div>
        ) : (
          <div className="bg-white/70 backdrop-blur-md rounded-2xl shadow-xl p-8 w-full max-w-2xl flex flex-col gap-6 border border-white/30">
            {/* Orders List */}
            <ul className="divide-y divide-emerald-200/50">
              {orders.map((item, index) => (
                <li
                  key={index}
                  className={`py-4 flex justify-between items-center transition-all duration-300 ease-in-out ${
                    removingIndex === index
                      ? "opacity-0 scale-95"
                      : "opacity-100 scale-100"
                  }`}
                >
                  <span className="text-lg text-gray-700">{item.name}</span>
                  <div className="flex items-center gap-6">
                    <span className="text-lg font-semibold text-emerald-600">
                      ₹{item.price.toFixed(2)}
                    </span>
                    <button
                      onClick={() => removeItem(index)}
                      className="text-gray-400 hover:text-red-500 font-bold text-2xl transition-colors duration-200 cursor-pointer"
                    >
                      &times;
                    </button>
                  </div>
                </li>
              ))}
            </ul>

            {/* Total & Proceed Button */}
            <div className="flex justify-between items-center mt-6 pt-6 border-t border-emerald-200/50">
              <span className="text-xl font-bold text-gray-800">
                Total: ₹{totalAmount.toFixed(2)}
              </span>
              <button className="text-white font-semibold px-6 py-3 rounded-lg transition-all duration-300 ease-in-out transform hover:scale-105 shadow-lg bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-600 hover:to-green-700 cursor-pointer">
                Proceed to Pay
              </button>
            </div>
          </div>
        )}
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

export default Orders;
