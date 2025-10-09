import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center px-6 py-10 bg-gradient-to-b from-white via-green-50 to-emerald-100 overflow-hidden font-sans">
      {/* Background Blobs */}
      <div className="absolute top-0 left-0 w-full h-full z-0">
        <div className="absolute w-72 h-72 bg-emerald-300 rounded-full -top-10 -left-10 mix-blend-multiply filter blur-3xl opacity-40 animate-blob"></div>
        <div className="absolute w-96 h-96 bg-lime-300 rounded-full -top-20 right-0 mix-blend-multiply filter blur-3xl opacity-40 animate-blob animation-delay-2000"></div>
        <div className="absolute w-64 h-64 bg-green-300 rounded-full -bottom-20 left-20 mix-blend-multiply filter blur-3xl opacity-40 animate-blob animation-delay-4000"></div>
      </div>

      <main className="transform -translate-y-20">
        {/* Hero Section */}
        <section className="relative z-10 flex flex-col items-center justify-center text-center pt-20 animate-fadeIn">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-green-500 mb-6">
            Fresh & Local,
            <br />
            Directly To You
          </h1>
          <p
            className="text-gray-600 mb-10 max-w-2xl text-xl leading-relaxed animate-fadeIn"
            style={{ animationDelay: "200ms" }}
          >
            LocalHarvest connects you to your neighborhood farmers and artisans,
            delivering fresh, sustainable, and high-quality products to your
            doorstep.
          </p>
          <div
            className="flex flex-col sm:flex-row gap-4 items-center animate-fadeIn"
            style={{ animationDelay: "400ms" }}
          >
            <Link to="/shop" className="w-full sm:w-auto">
              <button className="w-full text-white font-semibold px-8 py-4 rounded-full transition-all duration-300 ease-in-out shadow-lg bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-600 hover:to-green-700 cursor-pointer animate-float">
                Explore Products
              </button>
            </Link>
          </div>
        </section>

        {/* Features Section - Margin top changed from mt-24 to mt-16 */}
        <section
          className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 w-full max-w-6xl animate-fadeIn"
          style={{ animationDelay: "600ms" }}
        >
          <div className="bg-white/70 backdrop-blur-md rounded-2xl p-8 text-center shadow-xl border border-white/30 hover:shadow-2xl hover:shadow-emerald-200/50 hover:border-emerald-300/50 hover:-translate-y-2 transition-all duration-300 ease-in-out cursor-pointer">
            <h3 className="text-3xl font-bold text-gray-800 mb-3">
              <span className="text-4xl">🌱</span> Fresh Produce
            </h3>
            <p className="text-gray-600">
              Get seasonal fruits, vegetables, and grains directly from local
              farms.
            </p>
          </div>

          <div className="bg-white/70 backdrop-blur-md rounded-2xl p-8 text-center shadow-xl border border-white/30 hover:shadow-2xl hover:shadow-emerald-200/50 hover:border-emerald-300/50 hover:-translate-y-2 transition-all duration-300 ease-in-out cursor-pointer">
            <h3 className="text-3xl font-bold text-gray-800 mb-3">
              <span className="text-4xl">🤝</span> Support Local
            </h3>
            <p className="text-gray-600">
              Every purchase supports small-scale farmers and artisans in your
              community.
            </p>
          </div>

          <div className="bg-white/70 backdrop-blur-md rounded-2xl p-8 text-center shadow-xl border border-white/30 hover:shadow-2xl hover:shadow-emerald-200/50 hover:border-emerald-300/50 hover:-translate-y-2 transition-all duration-300 ease-in-out cursor-pointer">
            <h3 className="text-3xl font-bold text-gray-800 mb-3">
              <span className="text-4xl">🌍</span> Sustainable
            </h3>
            <p className="text-gray-600">
              Reduce your carbon footprint by choosing locally sourced and
              eco-friendly products.
            </p>
          </div>
        </section>
      </main>

      <style>{`
        @keyframes blob { 0% { transform: translate(0px, 0px) scale(1); } 33% { transform: translate(30px, -50px) scale(1.2); } 66% { transform: translate(-20px, 20px) scale(0.8); } 100% { transform: translate(0px, 0px) scale(1); } }
        @keyframes fadeIn { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes float { 0% { transform: translateY(0px); } 50% { transform: translateY(-8px); } 100% { transform: translateY(0px); } }
        .animate-blob { animation: blob 8s infinite cubic-bezier(0.68, -0.55, 0.27, 1.55); }
        .animation-delay-2000 { animation-delay: 2s; }
        .animation-delay-4000 { animation-delay: 4s; }
        .animate-fadeIn { animation: fadeIn 0.8s ease-out forwards; animation-fill-mode: backwards; }
        .animate-float { animation: float 4s ease-in-out infinite; }
      `}</style>
    </div>
  );
}

export default Home;
