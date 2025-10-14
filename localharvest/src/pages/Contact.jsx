import React, { useState } from "react";

function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Basic validation check
    if (form.name && form.email && form.message) {
      setSubmitted(true);
    }
  };

  return (
    <div className="min-h-screen relative overflow-hidden flex flex-col items-center justify-center text-center px-6 py-20 font-sans bg-gradient-to-br from-slate-950 via-indigo-950 to-violet-950">
      {/* Animated Background Blobs */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-cyan-500/20 rounded-full mix-blend-screen filter blur-3xl animate-float"></div>
        <div className="absolute -top-20 right-1/4 w-80 h-80 bg-violet-500/25 rounded-full mix-blend-screen filter blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-indigo-500/20 rounded-full mix-blend-screen filter blur-3xl animate-float-delayed"></div>

        {/* Grid overlay */}
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
      </div>

      {/* Content Wrapper */}
      <div className="relative z-10 max-w-6xl w-full animate-fadeIn">
        <h1 className="text-6xl md:text-7xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-indigo-400 to-violet-400 drop-shadow-2xl mb-8">
          Get in Touch
        </h1>
        <p className="text-gray-300 max-w-xl mx-auto mb-10 leading-relaxed text-lg px-4 font-light">
          We’d love to hear from you! Whether you’re a seller, buyer, or just
          curious about LocalHarvest, send us a message below.
        </p>

        {submitted ? (
          <div className="group bg-gradient-to-br from-slate-800/50 to-indigo-900/30 backdrop-blur-xl rounded-3xl p-8 flex flex-col items-center justify-center shadow-xl border border-indigo-500/20 hover:shadow-2xl hover:shadow-cyan-500/40 hover:-translate-y-3 hover:border-cyan-400/50 transition-all duration-500 ease-in-out relative overflow-hidden max-w-md w-full">
            {/* Hover glow effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/0 to-violet-500/0 group-hover:from-cyan-500/10 group-hover:to-violet-500/10 rounded-3xl transition-all duration-500 pointer-events-none"></div>
            <div className="relative z-10 text-center">
              <h2 className="text-2xl font-semibold text-cyan-300 mb-3">
                ✅ Message Sent!
              </h2>
              <p className="text-gray-300">
                Thank you for reaching out! We’ll get back to you soon.
              </p>
            </div>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="group bg-gradient-to-br from-slate-800/50 to-indigo-900/30 backdrop-blur-xl rounded-3xl p-8 w-full max-w-md shadow-xl border border-indigo-500/20 hover:shadow-2xl hover:shadow-cyan-500/40 hover:-translate-y-3 hover:border-cyan-400/50 transition-all duration-500 ease-in-out relative overflow-hidden"
          >
            {/* Hover glow effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/0 to-violet-500/0 group-hover:from-cyan-500/10 group-hover:to-violet-500/10 rounded-3xl transition-all duration-500 pointer-events-none"></div>
            <div className="relative z-10">
              <div className="mb-5">
                <label className="block text-left text-gray-300 font-semibold mb-2">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  className="w-full bg-slate-800/50 border-2 border-transparent rounded-lg px-4 py-3 focus:ring-2 focus:ring-cyan-500 focus:border-cyan-400 focus:bg-slate-700/50 transition placeholder-gray-400 text-white"
                  placeholder="Your Name"
                />
              </div>
              <div className="mb-5">
                <label className="block text-left text-gray-300 font-semibold mb-2">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  className="w-full bg-slate-800/50 border-2 border-transparent rounded-lg px-4 py-3 focus:ring-2 focus:ring-cyan-500 focus:border-cyan-400 focus:bg-slate-700/50 transition placeholder-gray-400 text-white"
                  placeholder="your.email@example.com"
                />
              </div>
              <div className="mb-6">
                <label className="block text-left text-gray-300 font-semibold mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  required
                  className="w-full bg-slate-800/50 border-2 border-transparent rounded-lg px-4 py-3 focus:ring-2 focus:ring-cyan-500 focus:border-cyan-400 focus:bg-slate-700/50 transition h-32 resize-none placeholder-gray-400 text-white"
                  placeholder="How can we help?"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full text-white font-semibold py-3 rounded-lg transition-all duration-300 ease-in-out transform hover:scale-105 shadow-lg bg-gradient-to-r from-cyan-500 to-indigo-600 hover:from-cyan-600 hover:to-indigo-700 cursor-pointer"
              >
                Send Message
              </button>
            </div>
          </form>
        )}
      </div>

      {/* Animation Styles */}
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px) translateX(0px);
          }
          50% {
            transform: translateY(-20px) translateX(20px);
          }
        }
        @keyframes float-delayed {
          0%,
          100% {
            transform: translateY(0px) translateX(0px);
          }
          50% {
            transform: translateY(20px) translateX(-20px);
          }
        }
        @keyframes pulse-slow {
          0%,
          100% {
            opacity: 0.3;
            transform: scale(1);
          }
          50% {
            opacity: 0.5;
            transform: scale(1.1);
          }
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
          background-image: linear-gradient(
              rgba(139, 92, 246, 0.1) 1px,
              transparent 1px
            ),
            linear-gradient(90deg, rgba(139, 92, 246, 0.1) 1px, transparent 1px);
          background-size: 50px 50px;
        }
      `}</style>
    </div>
  );
}

export default Contact;
