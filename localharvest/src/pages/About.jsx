import React from "react";

// Updated SVG Icons with modern colors
const VisionIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-8 w-8 text-cyan-400 mb-4"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
    />
  </svg>
);

const MissionIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-8 w-8 text-cyan-400 mb-4"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
    />
  </svg>
);

const ImpactIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-8 w-8 text-cyan-400 mb-4"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2h10a2 2 0 002-2v-1a2 2 0 012-2h1.945M7.737 16.95l.247.494A2 2 0 0010 19h4a2 2 0 001.716-1.556l.247-.494M12 10a2 2 0 110-4 2 2 0 010 4z"
    />
  </svg>
);

function About() {
  return (
    <div className="min-h-screen relative overflow-hidden flex flex-col items-center justify-center text-center px-6 py-20 font-sans bg-gradient-to-br from-slate-950 via-indigo-950 to-violet-950">
      {/* Animated background elements */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-cyan-500/20 rounded-full mix-blend-screen filter blur-3xl animate-float"></div>
        <div className="absolute -top-20 right-1/4 w-80 h-80 bg-violet-500/25 rounded-full mix-blend-screen filter blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-indigo-500/20 rounded-full mix-blend-screen filter blur-3xl animate-float-delayed"></div>

        {/* Grid overlay */}
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
      </div>

      {/* Content Wrapper */}
      <div className="relative z-10 max-w-6xl w-full">
        {/* Hero Section */}
        <section className="mb-20 animate-fadeIn">
          <div className="inline-block mb-8 px-4 py-2 bg-cyan-500/20 backdrop-blur-sm border border-cyan-400/30 rounded-full">
            <span className="text-cyan-300 text-sm font-medium">
              🌱 About LocalHarvest
            </span>
          </div>

          <h1 className="text-6xl md:text-7xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-indigo-400 to-violet-400 drop-shadow-2xl mb-8">
            About <span className="block">LocalHarvest</span>
          </h1>

          <p className="text-gray-300 max-w-3xl mx-auto mb-8 leading-relaxed text-lg px-4 font-light">
            LocalHarvest is a platform dedicated to connecting conscious buyers
            with local farmers, artisans, and small-scale producers. Our mission
            is to create a transparent and sustainable marketplace where every
            purchase supports the people behind real, homegrown products.
          </p>
        </section>

        {/* Feature Cards */}
        <div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 animate-fadeIn"
          style={{ animationDelay: "200ms" }}
        >
          {/* Card 1: Vision */}
          <div className="group bg-gradient-to-br from-slate-800/50 to-indigo-900/30 backdrop-blur-xl rounded-3xl p-8 flex flex-col items-center justify-center shadow-xl border border-indigo-500/20 hover:shadow-2xl hover:shadow-cyan-500/40 hover:-translate-y-3 hover:border-cyan-400/50 transition-all duration-500 ease-in-out cursor-pointer relative overflow-hidden">
            {/* Hover glow effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/0 to-violet-500/0 group-hover:from-cyan-500/10 group-hover:to-violet-500/10 rounded-3xl transition-all duration-500 pointer-events-none"></div>

            <div className="relative z-10">
              <div className="inline-block p-4 bg-gradient-to-br from-cyan-500/20 to-indigo-500/20 rounded-2xl border border-cyan-400/30 group-hover:scale-110 transition-transform duration-300 mb-2">
                <VisionIcon />
              </div>
              <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-cyan-300 transition-colors duration-300">
                Our Vision
              </h3>
              <p className="text-gray-300 font-light leading-relaxed">
                Empower communities through sustainable trade and transparent
                sourcing.
              </p>
            </div>
          </div>

          {/* Card 2: Mission */}
          <div className="group bg-gradient-to-br from-slate-800/50 to-indigo-900/30 backdrop-blur-xl rounded-3xl p-8 flex flex-col items-center justify-center shadow-xl border border-indigo-500/20 hover:shadow-2xl hover:shadow-cyan-500/40 hover:-translate-y-3 hover:border-cyan-400/50 transition-all duration-500 ease-in-out cursor-pointer relative overflow-hidden">
            {/* Hover glow effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/0 to-violet-500/0 group-hover:from-cyan-500/10 group-hover:to-violet-500/10 rounded-3xl transition-all duration-500 pointer-events-none"></div>

            <div className="relative z-10">
              <div className="inline-block p-4 bg-gradient-to-br from-cyan-500/20 to-indigo-500/20 rounded-2xl border border-cyan-400/30 group-hover:scale-110 transition-transform duration-300 mb-2">
                <MissionIcon />
              </div>
              <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-cyan-300 transition-colors duration-300">
                Our Mission
              </h3>
              <p className="text-gray-300 font-light leading-relaxed">
                Build trust between local sellers and customers with ethical
                business practices.
              </p>
            </div>
          </div>

          {/* Card 3: Impact */}
          <div className="group bg-gradient-to-br from-slate-800/50 to-indigo-900/30 backdrop-blur-xl rounded-3xl p-8 flex flex-col items-center justify-center shadow-xl border border-indigo-500/20 hover:shadow-2xl hover:shadow-cyan-500/40 hover:-translate-y-3 hover:border-cyan-400/50 transition-all duration-500 ease-in-out cursor-pointer relative overflow-hidden">
            {/* Hover glow effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/0 to-violet-500/0 group-hover:from-cyan-500/10 group-hover:to-violet-500/10 rounded-3xl transition-all duration-500 pointer-events-none"></div>

            <div className="relative z-10">
              <div className="inline-block p-4 bg-gradient-to-br from-cyan-500/20 to-indigo-500/20 rounded-2xl border border-cyan-400/30 group-hover:scale-110 transition-transform duration-300 mb-2">
                <ImpactIcon />
              </div>
              <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-cyan-300 transition-colors duration-300">
                Our Impact
              </h3>
              <p className="text-gray-300 font-light leading-relaxed">
                Encouraging eco-friendly, locally sourced products to reduce
                carbon footprints.
              </p>
            </div>
          </div>
        </div>
      </div>

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

export default About;
