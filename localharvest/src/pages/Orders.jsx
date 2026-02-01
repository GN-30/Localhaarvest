import React, { useState } from "react";
import { Link } from "react-router-dom";

function Orders({ orders, setCartItems, refreshProducts }) {
  const [removingIndex, setRemovingIndex] = useState(null);
  const [isProcessing, setIsProcessing] = useState(false);

  const removeItem = async (indexToRemove) => {
    const itemToRemove = orders[indexToRemove];

    // Identify if it has a backend order ID
    if (itemToRemove.orderId) {
      try {
        const response = await fetch(`http://localhost:3001/api/orders/${itemToRemove.orderId}`, {
          method: 'DELETE',
        });
        if (!response.ok) {
           console.error("Failed to delete order from backend");
           // Optional: alert user, but maybe we still remove from UI?
           // For now, let's assume we maintain UI sync only if backend succeeds
           return; 
        }
        // If backend delete success, it means stock is restored.
        if (refreshProducts) refreshProducts();

      } catch (err) {
        console.error("Error removing order:", err);
        return;
      }
    }

    setRemovingIndex(indexToRemove);
    setTimeout(() => {
      setCartItems((prevItems) =>
        prevItems.filter((_, index) => index !== indexToRemove)
      );
      setRemovingIndex(null);
    }, 300);
  };

  const totalAmount = orders.reduce(
    (sum, item) => sum + parseFloat(item.price || 0),
    0
  );

  // ✅ Razorpay payment function
  const handlePayment = async () => {
    if (orders.length === 0) {
      alert("Your cart is empty!");
      return;
    }

    try {
      setIsProcessing(true);

      // 1️⃣ Create Razorpay order from backend
      const res = await fetch(
        "http://localhost:3001/api/payment/create-order",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            amount: totalAmount,
            currency: "INR",
            orderId: new Date().getTime(),
          }),
        }
      );

      const data = await res.json();
      if (!data.orderId) {
        alert("Failed to create Razorpay order.");
        setIsProcessing(false);
        return;
      }

      // 2️⃣ Razorpay checkout options
      const options = {
        key: "rzp_test_yourkeyid", // 🔑 Replace with your Razorpay Test Key
        amount: totalAmount * 100,
        currency: "INR",
        name: "LocalHarvest",
        description: "Order Payment",
        order_id: data.orderId,
        handler: async function (response) {
          try {
            // 3️⃣ Verify payment with backend
            const verifyRes = await fetch(
              "http://localhost:3001/api/payment/verify",
              {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(response),
              }
            );

            const result = await verifyRes.json();
            if (result.success) {
              alert("✅ Payment Successful! Thank you for shopping.");
              setCartItems([]); // clear cart
            } else {
              alert("❌ Payment verification failed. Please contact support.");
            }
          } catch (err) {
            console.error("Error verifying payment:", err);
            alert("Payment verification failed. Try again.");
          }
        },
        prefill: {
          name: "", // Optional: Add default name
          email: "", // Optional: Add default email
        },
        theme: { color: "#4F46E5" },
      };

      // 4️⃣ Open Razorpay popup
      const rzp = new window.Razorpay(options);
      rzp.open();
    } catch (error) {
      console.error("Payment initiation failed:", error);
      alert("Payment failed. Please try again.");
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <div className="min-h-screen relative overflow-hidden font-sans bg-gradient-to-br from-slate-950 via-indigo-950 to-violet-950 -mt-24">
      {/* Animated background */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-cyan-500/20 rounded-full mix-blend-screen filter blur-3xl animate-float"></div>
        <div className="absolute -top-20 right-1/4 w-80 h-80 bg-violet-500/25 rounded-full mix-blend-screen filter blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-indigo-500/20 rounded-full mix-blend-screen filter blur-3xl animate-float-delayed"></div>
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
      </div>

      <div className="relative z-10 flex flex-col items-center py-20 px-4">
        <h1 className="text-7xl font-black tracking-tight mb-12">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-indigo-400 to-violet-400 drop-shadow-2xl">
            Your Cart
          </span>
        </h1>

        {orders.length === 0 ? (
          <div className="text-center bg-gradient-to-br from-slate-800/50 to-indigo-900/30 backdrop-blur-xl p-16 rounded-3xl border border-indigo-500/20 shadow-xl w-full max-w-2xl">
            <div className="w-20 h-20 bg-gradient-to-br from-indigo-500/20 to-violet-500/20 rounded-2xl flex items-center justify-center border border-indigo-400/30 mx-auto mb-6">
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
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
            </div>
            <h3 className="text-3xl font-bold text-white mb-2">
              Your Cart is Empty
            </h3>
            <p className="text-gray-300 text-lg">
              Looks like you haven't added anything yet!
            </p>
            <Link to="/shop">
              <button className="mt-6 text-white font-semibold px-6 py-3 rounded-2xl transition-all duration-300 ease-out transform hover:scale-105 active:scale-95 shadow-lg shadow-cyan-500/50 hover:shadow-2xl hover:shadow-cyan-400/60 bg-gradient-to-r from-cyan-500 via-indigo-500 to-violet-500 cursor-pointer relative overflow-hidden group/btn tracking-wide">
                <span className="relative z-10">Go Shopping</span>
              </button>
            </Link>
          </div>
        ) : (
          <div className="flex flex-col items-center gap-8 w-full">
            <div className="bg-gradient-to-br from-indigo-900/40 to-violet-900/40 backdrop-blur-xl border border-indigo-500/20 rounded-3xl p-8 shadow-2xl shadow-indigo-900/50 w-full max-w-2xl flex flex-col gap-6">
              <ul className="divide-y divide-indigo-500/20">
                {orders.map((item, index) => (
                  <li
                    key={index}
                    className={`py-4 flex justify-between items-center transition-all duration-300 ease-in-out ${
                      removingIndex === index
                        ? "opacity-0 scale-95"
                        : "opacity-100 scale-100"
                    }`}
                  >
                    <span className="text-lg text-indigo-100">{item.name}</span>
                    <div className="flex items-center gap-6">
                      <span className="text-lg font-semibold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-violet-400">
                        ₹{parseFloat(item.price || 0).toFixed(2)}
                      </span>
                      <button
                        onClick={() => removeItem(index)}
                        className="text-indigo-400 hover:text-rose-400 font-bold text-2xl transition-colors duration-200 cursor-pointer"
                      >
                        &times;
                      </button>
                    </div>
                  </li>
                ))}
              </ul>

              <div className="flex justify-between items-center mt-6 pt-6 border-t border-indigo-500/20">
                <span className="text-xl font-bold text-white">
                  Total: ₹{totalAmount.toFixed(2)}
                </span>
                <button
                  onClick={handlePayment}
                  disabled={isProcessing}
                  className={`text-white font-semibold px-6 py-3 rounded-2xl transition-all duration-300 ease-out transform ${
                    isProcessing
                      ? "opacity-70 cursor-not-allowed"
                      : "hover:scale-105"
                  } active:scale-95 shadow-lg shadow-cyan-500/50 hover:shadow-2xl hover:shadow-cyan-400/60 bg-gradient-to-r from-cyan-500 via-indigo-500 to-violet-500 cursor-pointer relative overflow-hidden group/btn tracking-wide`}
                >
                  <span className="relative z-10">
                    {isProcessing ? "Processing..." : "Proceed to Pay"}
                  </span>
                </button>
              </div>
            </div>

            <Link to="/shop">
              <button className="text-white font-semibold px-6 py-3 rounded-2xl transition-all duration-300 ease-out transform hover:scale-105 active:scale-95 shadow-lg shadow-cyan-500/50 hover:shadow-2xl hover:shadow-cyan-400/60 bg-gradient-to-r from-cyan-500 via-indigo-500 to-violet-500 cursor-pointer relative overflow-hidden group/btn tracking-wide">
                <span className="relative z-10">Continue Shopping</span>
              </button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}

export default Orders;
