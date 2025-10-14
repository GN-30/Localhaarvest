import React, { useState, useEffect } from "react";
import { X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "../images/image.jpg";

// --- SVG Icons for a polished look ---
const GoogleIcon = () => (
  <svg className="w-5 h-5" viewBox="0 0 48 48">
    <path
      fill="#FFC107"
      d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12s5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24s8.955,20,20,20s20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
    ></path>
    <path
      fill="#FF3D00"
      d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
    ></path>
    <path
      fill="#4CAF50"
      d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"
    ></path>
    <path
      fill="#1976D2"
      d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.574l6.19,5.238C41.38,36.405,44,30.638,44,24C44,22.659,43.862,21.35,43.611,20.083z"
    ></path>
  </svg>
);

// --- Animation Variants for Framer Motion ---
const backdropVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const modalVariants = {
  hidden: { opacity: 0, scale: 0.9, y: -100 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { type: "spring", stiffness: 200, damping: 25 },
  },
  exit: { opacity: 0, scale: 0.9, y: 100 },
};

// --- The Modal Component ---
function AuthModal({ isOpen, onClose }) {
  const [isLogin, setIsLogin] = useState(true);

  useEffect(() => {
    const handleEsc = (event) => {
      if (event.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  const toggleForm = () => setIsLogin(!isLogin);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          onClick={onClose}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm"
          variants={backdropVariants}
          initial="hidden"
          animate="visible"
          exit="hidden"
        >
          <motion.div
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-4xl flex bg-white/70 backdrop-blur-xl rounded-2xl shadow-2xl border border-white/30 overflow-hidden"
            variants={modalVariants}
          >
            {/* Left side: Illustration */}
            <div className="hidden md:block w-1/2 relative">
              <img
                src={Image}
                alt="Fresh produce from local farms"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-700/80 to-green-500/80 flex flex-col justify-center items-center text-center p-8">
                <h2 className="text-4xl font-extrabold text-white leading-tight">
                  <span className="block">LocalHarvest</span>
                  <span className="block mt-2">Goodness Delivered</span>
                </h2>
                <p className="text-emerald-100 text-lg mt-4 max-w-xs">
                  Connecting you to fresh, sustainable, and local products.
                </p>
              </div>
            </div>

            {/* Right side: Form (No changes here) */}
            <div className="w-full md:w-1/2 p-8 md:p-12">
              <button
                onClick={onClose}
                className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 transition-colors cursor-pointer"
              >
                <X size={24} />
              </button>

              <div className="text-center mb-6">
                <h1 className="text-3xl font-bold text-gray-800">
                  {isLogin ? "Welcome Back!" : "Create an Account"}
                </h1>
              </div>

              <button
                type="button"
                className="w-full flex items-center justify-center gap-3 py-3 px-4 mb-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow border border-gray-200"
              >
                <GoogleIcon />
                <span className="font-semibold text-gray-700">
                  Continue with Google
                </span>
              </button>

              <div className="flex items-center my-6">
                <hr className="flex-grow border-gray-300" />
                <span className="mx-4 text-gray-500 text-sm">OR</span>
                <hr className="flex-grow border-gray-300" />
              </div>

              <form className="space-y-5">
                {!isLogin && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                  >
                    <label className="block text-sm font-semibold text-gray-700 mb-1">
                      Name
                    </label>
                    <input
                      type="text"
                      required
                      className="w-full bg-white/80 border-2 border-gray-200 rounded-lg px-4 py-2 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-400 transition"
                      placeholder="Your Name"
                    />
                  </motion.div>
                )}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    required
                    className="w-full bg-white/80 border-2 border-gray-200 rounded-lg px-4 py-2 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-400 transition"
                    placeholder="you@example.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1">
                    Password
                  </label>
                  <input
                    type="password"
                    required
                    className="w-full bg-white/80 border-2 border-gray-200 rounded-lg px-4 py-2 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-400 transition"
                    placeholder="••••••••"
                  />
                </div>
                {isLogin && (
                  <button
                    type="button"
                    className="text-sm text-emerald-600 hover:underline"
                  >
                    Forgot password?
                  </button>
                )}

                <button
                  type="submit"
                  className="w-full text-white font-semibold py-3 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg bg-gradient-to-r from-emerald-500 to-green-600 cursor-pointer"
                >
                  {isLogin ? "Log In" : "Sign Up"}
                </button>
              </form>

              <div className="text-center mt-6 text-sm">
                <p className="text-gray-600">
                  {isLogin
                    ? "Don't have an account?"
                    : "Already have an account?"}
                  <button
                    type="button"
                    onClick={toggleForm}
                    className="font-semibold text-emerald-600 hover:underline ml-1 cursor-pointer"
                  >
                    {isLogin ? "Sign Up" : "Log In"}
                  </button>
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default AuthModal;
