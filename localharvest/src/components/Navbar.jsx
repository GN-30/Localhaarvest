import React, { useEffect, useState, useRef } from "react";
import { Link, NavLink } from "react-router-dom";
import { ShoppingCart, ChevronDown } from "lucide-react";

const Navbar = ({ cartCount, onLoginClick }) => {
  const [animate, setAnimate] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navRef = useRef(null);

  useEffect(() => {
    if (cartCount > 0) {
      setAnimate(true);
      const timer = setTimeout(() => setAnimate(false), 600);
      return () => clearTimeout(timer);
    }
  }, [cartCount]);

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
      className="fixed w-full top-0 left-0 z-50 bg-slate-900/80 backdrop-blur-lg border-b border-indigo-500/20 shadow-2xl shadow-indigo-900/50 transition-all duration-300"
    >
      <div className="px-6 md:px-8 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="relative flex items-center">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden flex items-center gap-1 text-3xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-indigo-400 to-violet-400 cursor-pointer"
            aria-expanded={isMenuOpen}
            aria-haspopup="true"
          >
            LocalHarvest
            <ChevronDown
              size={20}
              className={`text-indigo-400 transition-transform duration-300 ${
                isMenuOpen ? "rotate-180" : "rotate-0"
              }`}
            />
          </button>
          <Link
            to="/"
            className="hidden md:block text-3xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-indigo-400 to-violet-400"
          >
            LocalHarvest
          </Link>
        </div>

        {/* Desktop Links */}
        <ul className="hidden md:flex gap-8 text-lg">
          {navLinks.map((link) => (
            <li key={link.to}>
              <NavLink
                to={link.to}
                className={({ isActive }) =>
                  `relative transition-colors duration-300 ${
                    isActive
                      ? "text-cyan-300"
                      : "text-indigo-300 hover:text-cyan-300"
                  } after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:bg-cyan-400 after:transition-all after:duration-300 ${
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
              className="text-indigo-300 group-hover:text-cyan-300 transition-colors duration-300 cursor-pointer"
            />
            {cartCount > 0 && (
              <span
                className={`absolute -top-2 -right-2 bg-cyan-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center transition-transform duration-300 ${
                  animate ? "animate-ping-once" : ""
                }`}
              >
                {cartCount}
              </span>
            )}
          </Link>

          {/* Login Button */}
          <button
            onClick={onLoginClick}
            className="hidden md:block text-white font-semibold px-5 py-2 rounded-xl transition-all duration-300 ease-out transform hover:scale-105 active:scale-95 shadow-lg shadow-cyan-500/50 hover:shadow-xl hover:shadow-cyan-400/60 bg-gradient-to-r from-cyan-500 via-indigo-500 to-violet-500 cursor-pointer"
          >
            Log in
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out bg-slate-900/95 backdrop-blur-xl shadow-inner ${
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
                      ? "bg-indigo-900/50 text-cyan-300 font-semibold"
                      : "text-indigo-200 hover:bg-indigo-900/50"
                  }`
                }
              >
                {link.text}
              </NavLink>
            </li>
          ))}
          <li className="w-full pt-3 mt-3 border-t border-indigo-800/50">
            <button
              onClick={() => {
                onLoginClick();
                setIsMenuOpen(false);
              }}
              className="w-full text-white font-semibold px-5 py-3 rounded-xl transition-all duration-300 ease-out shadow-lg bg-gradient-to-r from-cyan-500 via-indigo-500 to-violet-500 cursor-pointer"
            >
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
