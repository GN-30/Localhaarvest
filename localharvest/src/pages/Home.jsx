import React from "react";

function Home() {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center px-6 py-10 bg-gradient-to-br from-slate-950 via-indigo-950 to-violet-950 overflow-hidden font-sans">
      {/* Animated background elements */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-cyan-500/20 rounded-full mix-blend-screen filter blur-3xl animate-float"></div>
        <div className="absolute -top-20 right-1/4 w-80 h-80 bg-violet-500/25 rounded-full mix-blend-screen filter blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-indigo-500/20 rounded-full mix-blend-screen filter blur-3xl animate-float-delayed"></div>

        {/* Grid overlay */}
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
      </div>

      <main className="transform -translate-y-20 relative z-10">
        {/* Hero Section */}
        <section className="flex flex-col items-center justify-center text-center pt-20 animate-fadeIn">
          <div className="inline-block mb-8 px-4 py-2 bg-cyan-500/20 backdrop-blur-sm border border-cyan-400/30 rounded-full">
            <span className="text-cyan-300 text-sm font-medium">
              ✨ Welcome to LocalHarvest
            </span>
          </div>

          <h1 className="text-6xl md:text-8xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-indigo-400 to-violet-400 drop-shadow-2xl mb-8">
            Fresh & Local,
            <br />
            Directly To You
          </h1>

          <p
            className="text-gray-300 mb-12 max-w-3xl text-xl leading-relaxed font-light animate-fadeIn"
            style={{ animationDelay: "200ms" }}
          >
            Connect with neighborhood farmers and artisans. Get fresh,
            sustainable, and high-quality products delivered straight to your
            doorstep.
          </p>

          <div
            className="flex flex-col sm:flex-row gap-4 items-center animate-fadeIn"
            style={{ animationDelay: "400ms" }}
          >
            <a href="/shop" className="w-full sm:w-auto animate-float">
              <button className="w-full text-white font-semibold px-10 py-4 rounded-2xl transition-all duration-300 ease-out transform hover:scale-105 active:scale-95 shadow-xl shadow-cyan-500/50 hover:shadow-2xl hover:shadow-cyan-400/60 bg-gradient-to-r from-cyan-500 via-indigo-500 to-violet-500 cursor-pointer relative overflow-hidden group">
                <span className="relative z-10 flex items-center justify-center gap-2">
                  🛍️ Explore Products
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-violet-500 via-indigo-500 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
            </a>
          </div>
        </section>

        {/* Features Section */}
        <section
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-24 w-full max-w-6xl animate-fadeIn"
          style={{ animationDelay: "600ms" }}
        >
          <div className="group bg-gradient-to-br from-slate-800/50 to-indigo-900/30 backdrop-blur-xl rounded-3xl p-8 text-center shadow-xl border border-indigo-500/20 hover:shadow-2xl hover:shadow-cyan-500/40 hover:-translate-y-3 hover:border-cyan-400/50 transition-all duration-500 ease-in-out cursor-pointer relative overflow-hidden">
            {/* Hover glow effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/0 to-violet-500/0 group-hover:from-cyan-500/10 group-hover:to-violet-500/10 rounded-3xl transition-all duration-500 pointer-events-none"></div>

            <div className="relative z-10">
              <div className="inline-block mb-4 p-4 bg-gradient-to-br from-cyan-500/20 to-indigo-500/20 rounded-2xl border border-cyan-400/30 group-hover:scale-110 transition-transform duration-300">
                <span className="text-5xl">🌱</span>
              </div>
              <h3 className="text-3xl font-bold text-white mb-4 group-hover:text-cyan-300 transition-colors duration-300">
                Fresh Produce
              </h3>
              <p className="text-gray-300 text-lg leading-relaxed">
                Get seasonal fruits, vegetables, and grains directly from local
                farms at peak freshness.
              </p>
            </div>
          </div>

          <div className="group bg-gradient-to-br from-slate-800/50 to-indigo-900/30 backdrop-blur-xl rounded-3xl p-8 text-center shadow-xl border border-indigo-500/20 hover:shadow-2xl hover:shadow-cyan-500/40 hover:-translate-y-3 hover:border-cyan-400/50 transition-all duration-500 ease-in-out cursor-pointer relative overflow-hidden">
            {/* Hover glow effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/0 to-violet-500/0 group-hover:from-cyan-500/10 group-hover:to-violet-500/10 rounded-3xl transition-all duration-500 pointer-events-none"></div>

            <div className="relative z-10">
              <div className="inline-block mb-4 p-4 bg-gradient-to-br from-cyan-500/20 to-indigo-500/20 rounded-2xl border border-cyan-400/30 group-hover:scale-110 transition-transform duration-300">
                <span className="text-5xl">🤝</span>
              </div>
              <h3 className="text-3xl font-bold text-white mb-4 group-hover:text-cyan-300 transition-colors duration-300">
                Support Local
              </h3>
              <p className="text-gray-300 text-lg leading-relaxed">
                Every purchase directly supports small-scale farmers and
                artisans in your community.
              </p>
            </div>
          </div>

          <div className="group bg-gradient-to-br from-slate-800/50 to-indigo-900/30 backdrop-blur-xl rounded-3xl p-8 text-center shadow-xl border border-indigo-500/20 hover:shadow-2xl hover:shadow-cyan-500/40 hover:-translate-y-3 hover:border-cyan-400/50 transition-all duration-500 ease-in-out cursor-pointer relative overflow-hidden">
            {/* Hover glow effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/0 to-violet-500/0 group-hover:from-cyan-500/10 group-hover:to-violet-500/10 rounded-3xl transition-all duration-500 pointer-events-none"></div>

            <div className="relative z-10">
              <div className="inline-block mb-4 p-4 bg-gradient-to-br from-cyan-500/20 to-indigo-500/20 rounded-2xl border border-cyan-400/30 group-hover:scale-110 transition-transform duration-300">
                <span className="text-5xl">🌍</span>
              </div>
              <h3 className="text-3xl font-bold text-white mb-4 group-hover:text-cyan-300 transition-colors duration-300">
                Sustainable
              </h3>
              <p className="text-gray-300 text-lg leading-relaxed">
                Reduce your carbon footprint by choosing locally sourced and
                eco-friendly products.
              </p>
            </div>
          </div>
        </section>
      </main>

      <style>{`
        @keyframes fadeIn { 
          from { opacity: 0; transform: translateY(20px); } 
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
        .animate-fadeIn { 
          animation: fadeIn 0.8s ease-out forwards; 
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

export default Home;
