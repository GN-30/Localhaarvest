import React, { useEffect, useState, useRef } from "react";
import { Link, NavLink } from "react-router-dom";
import { ShoppingCart, ChevronDown } from "lucide-react";

const Navbar = ({ cartCount }) => {
  const [animate, setAnimate] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navRef = useRef(null); // Ref to detect clicks outside the navbar

  // Trigger animation for cart icon
  useEffect(() => {
    if (cartCount > 0) {
      setAnimate(true);
      const timer = setTimeout(() => setAnimate(false), 600);
      return () => clearTimeout(timer);
    }
  }, [cartCount]);

  // Close dropdown when clicking outside of the navbar
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const navLinks = [
    { to: "/", text: "Home" },
    { to: "/shop", text: "Shop" },
    { to: "/sellers", text: "Sellers" },
    { to: "/about", text: "About" },
    { to: "/contact", text: "Contact" },
  ];

  return (
    <nav
      ref={navRef}
      className="fixed w-full top-0 left-0 z-50 bg-white/80 backdrop-blur-lg shadow-lg transition-all duration-300"
    >
      <div className="px-6 md:px-8 py-4 flex justify-between items-center">
        {/* Logo - Acts as dropdown trigger on mobile */}
        <div className="relative flex items-center">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden flex items-center gap-1 text-3xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-green-500 cursor-pointer"
            aria-expanded={isMenuOpen}
            aria-haspopup="true"
          >
            LocalHarvest
            <ChevronDown
              size={20}
              className={`text-emerald-600 transition-transform duration-300 ${
                isMenuOpen ? "rotate-180" : "rotate-0"
              }`}
            />
          </button>
          <Link
            to="/"
            className="hidden md:block text-3xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-green-500"
          >
            LocalHarvest
          </Link>
        </div>

        {/* Desktop Links with Animated Underline */}
        <ul className="hidden md:flex gap-8 text-lg">
          {navLinks.map((link) => (
            <li key={link.to}>
              <NavLink
                to={link.to}
                className={({ isActive }) =>
                  `relative transition-colors duration-300 ${
                    isActive
                      ? "text-emerald-600"
                      : "text-gray-600 hover:text-emerald-600"
                  } after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:bg-emerald-500 after:transition-all after:duration-300 ${
                    isActive ? "after:w-full" : "after:w-0 hover:after:w-full"
                  }`
                }
              >
                {link.text}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Right side Actions */}
        <div className="flex items-center gap-4 md:gap-6">
          <Link to="/orders" className="relative group">
            <ShoppingCart
              size={28}
              className="text-gray-700 group-hover:text-emerald-600 transition-colors duration-300 cursor-pointer"
            />
            {cartCount > 0 && (
              <span
                className={`absolute -top-2 -right-2 bg-emerald-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center transition-transform duration-300 ${
                  animate ? "animate-ping-once" : ""
                }`}
              >
                {cartCount}
              </span>
            )}
          </Link>
          <button className="hidden md:block text-white font-semibold px-5 py-2 rounded-lg transition-all duration-300 ease-in-out transform hover:scale-105 shadow-lg bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-600 hover:to-green-700 cursor-pointer">
            Log in
          </button>
        </div>
      </div>

      {/* --- Mobile Dropdown Menu --- */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out bg-white/80 backdrop-blur-lg shadow-inner ${
          isMenuOpen ? "max-h-96" : "max-h-0"
        }`}
      >
        <ul className="flex flex-col items-start gap-2 p-4">
          {navLinks.map((link) => (
            <li key={link.to} className="w-full">
              <NavLink
                to={link.to}
                onClick={() => setIsMenuOpen(false)}
                className={({ isActive }) =>
                  `block w-full p-3 rounded-lg transition-colors text-lg ${
                    isActive
                      ? "bg-emerald-50 text-emerald-600 font-semibold"
                      : "text-gray-700 hover:bg-emerald-50"
                  }`
                }
              >
                {link.text}
              </NavLink>
            </li>
          ))}
          <li className="w-full pt-3 mt-3 border-t border-emerald-200/50">
            <button className="w-full text-white font-semibold px-5 py-3 rounded-lg transition-all duration-300 ease-in-out shadow-lg bg-gradient-to-r from-emerald-500 to-green-600 cursor-pointer">
              Log in
            </button>
          </li>
        </ul>
      </div>

      <style>{`
        @keyframes ping-once { 0% { transform: scale(1); opacity: 1; } 50% { transform: scale(1.6); opacity: 0.7; } 100% { transform: scale(1); opacity: 1; } }
        .animate-ping-once { animation: ping-once 0.6s ease-in-out; }
      `}</style>
    </nav>
  );
};

export default Navbar;
