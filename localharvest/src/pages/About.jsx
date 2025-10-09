import React from "react";

// SVG Icons remain the same for consistency and modern aesthetic
const VisionIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-8 w-8 text-emerald-600 mb-3"
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
    className="h-8 w-8 text-emerald-600 mb-3"
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
    className="h-8 w-8 text-emerald-600 mb-3"
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
    <div className="min-h-screen relative overflow-hidden flex flex-col items-center justify-center text-center px-6 py-20 font-sans bg-gradient-to-br from-white via-green-50 to-emerald-100">
      {/* Background Shapes/Patterns adjusted to match image hues and positions */}
      <div className="absolute -top-10 -left-10 w-80 h-80 bg-emerald-300 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob"></div>
      <div className="absolute top-20 right-0 w-72 h-72 bg-green-300 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob animation-delay-2000"></div>
      <div className="absolute bottom-10 left-1/4 w-96 h-96 bg-lime-300 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob animation-delay-4000"></div>

      {/* Content Wrapper */}
      <div className="relative z-10 max-w-6xl w-full">
        {/* --- Main Heading & Subtext --- */}
        <h1 className="text-5xl md:text-6xl font-serif font-bold text-gray-800 mb-4 tracking-tight">
          About <span className="text-emerald-700">LocalHarvest</span>
        </h1>
        <p className="text-gray-600 max-w-3xl mx-auto mb-16 leading-relaxed text-lg px-4 font-light">
          This is placeholder text. LocalHarvest is a platform dedicated to
          connecting conscious buyers with local farmers, artisans, and
          small-scale producers. Our mission is to create a transparent and
          sustainable marketplace where every purchase supports the people
          behind real, homegrown products.
        </p>

        {/* --- Feature Cards --- */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
          {/* Card 1: Vision */}
          <div className="bg-white/70 backdrop-blur-md rounded-2xl p-8 flex flex-col items-center justify-center shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 cursor-pointer">
            <VisionIcon />
            <h3 className="text-2xl font-semibold text-gray-700 mb-2">
              Our Vision
            </h3>
            <p className="text-gray-500 font-light leading-relaxed">
              Empower communities through sustainable trade and transparent
              sourcing.
            </p>
          </div>

          {/* Card 2: Mission */}
          <div className="bg-white/70 backdrop-blur-md rounded-2xl p-8 flex flex-col items-center justify-center shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 cursor-pointer">
            <MissionIcon />
            <h3 className="text-2xl font-semibold text-gray-700 mb-2">
              Our Mission
            </h3>
            <p className="text-gray-500 font-light leading-relaxed">
              Build trust between local sellers and customers with ethical
              business practices.
            </p>
          </div>

          {/* Card 3: Impact */}
          <div className="bg-white/70 backdrop-blur-md rounded-2xl p-8 flex flex-col items-center justify-center shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 cursor-pointer">
            <ImpactIcon />
            <h3 className="text-2xl font-semibold text-gray-700 mb-2">
              Our Impact
            </h3>
            <p className="text-gray-500 font-light leading-relaxed">
              Encouraging eco-friendly, locally sourced products to reduce
              carbon footprints.
            </p>
          </div>
        </div>
      </div>

      {/* Tailwind CSS @layer utilities for custom animation (add to your CSS) */}
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

export default About;
