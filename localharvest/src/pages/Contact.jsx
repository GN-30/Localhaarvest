import React, { useState } from "react";

// --- Icons ---
const UserIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-5 w-5 text-indigo-400"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
    />
  </svg>
);
const MailIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-5 w-5 text-indigo-400"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
    />
  </svg>
);
const MessageIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-5 w-5 text-indigo-400"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
    />
  </svg>
);

function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (form.name && form.email && form.message) {
      setSubmitted(true);
    }
  };

  return (
    <div className="min-h-screen relative overflow-hidden flex flex-col items-center justify-center text-center px-6 py-20 font-sans bg-gradient-to-br from-slate-950 via-indigo-950 to-violet-950 -mt-24">
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-cyan-500/20 rounded-full mix-blend-screen filter blur-3xl animate-float"></div>
        <div className="absolute -top-20 right-1/4 w-80 h-80 bg-violet-500/25 rounded-full mix-blend-screen filter blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-indigo-500/20 rounded-full mix-blend-screen filter blur-3xl animate-float-delayed"></div>
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
      </div>

      <div className="relative z-10 max-w-6xl w-full animate-fadeInUp">
        <h1 className="text-6xl md:text-7xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-indigo-400 to-violet-400 drop-shadow-2xl mb-8">
          Get in Touch
        </h1>
        <p className="text-indigo-200 max-w-2xl mx-auto mb-12 leading-relaxed text-xl tracking-wide font-normal">
          We’d love to hear from you! Whether you’re a seller, buyer, or just
          curious about{" "}
          <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-fuchsia-400">
            LocalHarvest
          </span>
          , send us a message below.
        </p>

        {submitted ? (
          <div className="group bg-gradient-to-br from-slate-800/50 to-indigo-900/30 backdrop-blur-xl rounded-3xl p-8 flex flex-col items-center justify-center shadow-xl border border-indigo-500/20 transition-all duration-500 ease-in-out relative overflow-hidden max-w-md w-full mx-auto">
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/0 to-violet-500/0 group-hover:from-cyan-500/10 group-hover:to-violet-500/10 rounded-3xl transition-all duration-500 pointer-events-none"></div>
            <div className="relative z-10 text-center">
              <h2 className="text-2xl font-semibold text-cyan-300 mb-3 animate-pop-in">
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
            className="group bg-gradient-to-br from-slate-800/50 to-indigo-900/30 backdrop-blur-xl rounded-3xl p-8 w-full max-w-md shadow-xl border border-indigo-500/20 hover:shadow-2xl hover:shadow-cyan-500/40 hover:-translate-y-3 hover:border-cyan-400/50 transition-all duration-500 ease-in-out relative overflow-hidden mx-auto"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/0 to-violet-500/0 group-hover:from-cyan-500/10 group-hover:to-violet-500/10 rounded-3xl transition-all duration-500 pointer-events-none"></div>
            <div className="relative z-10">
              <div className="mb-5 relative">
                <label className="block text-left text-gray-300 font-semibold mb-2">
                  Name
                </label>
                <span className="absolute left-4 top-[calc(50%+8px)] -translate-y-1/2 z-10">
                  <UserIcon />
                </span>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  className="w-full pl-12 pr-4 py-4 bg-slate-900/60 border-2 border-indigo-500/30 rounded-2xl focus:ring-2 focus:ring-cyan-400 focus:border-cyan-400 transition-all duration-300 text-white placeholder-indigo-300/50 backdrop-blur-sm hover:border-indigo-400/50"
                  placeholder="Your Name"
                />
              </div>
              <div className="mb-5 relative">
                <label className="block text-left text-gray-300 font-semibold mb-2">
                  Email
                </label>
                <span className="absolute left-4 top-[calc(50%+8px)] -translate-y-1/2 z-10">
                  <MailIcon />
                </span>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  className="w-full pl-12 pr-4 py-4 bg-slate-900/60 border-2 border-indigo-500/30 rounded-2xl focus:ring-2 focus:ring-cyan-400 focus:border-cyan-400 transition-all duration-300 text-white placeholder-indigo-300/50 backdrop-blur-sm hover:border-indigo-400/50"
                  placeholder="your.email@example.com"
                />
              </div>
              <div className="mb-6 relative">
                <label className="block text-left text-gray-300 font-semibold mb-2">
                  Message
                </label>
                <span className="absolute left-4 top-8 -translate-y-1/2 z-10">
                  <MessageIcon />
                </span>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  required
                  className="w-full pl-12 pr-4 py-4 bg-slate-900/60 border-2 border-indigo-500/30 rounded-2xl focus:ring-2 focus:ring-cyan-400 focus:border-cyan-400 transition-all duration-300 h-32 resize-none text-white placeholder-indigo-300/50 backdrop-blur-sm hover:border-indigo-400/50"
                  placeholder="How can we help?"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full text-white font-semibold px-6 py-3 rounded-2xl transition-all duration-300 ease-out transform hover:scale-105 active:scale-95 shadow-lg shadow-cyan-500/50 hover:shadow-2xl hover:shadow-cyan-400/60 bg-gradient-to-r from-cyan-500 via-indigo-500 to-violet-500 cursor-pointer relative overflow-hidden group/btn tracking-wide"
              >
                <span className="relative z-10">Send Message</span>
                <div className="absolute inset-0 bg-gradient-to-r from-violet-500 via-indigo-500 to-cyan-500 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"></div>
              </button>
            </div>
          </form>
        )}
      </div>

      <style>{`
        @keyframes fadeIn { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes float { 0%, 100% { transform: translateY(0px) translateX(0px); } 50% { transform: translateY(-20px) translateX(20px); } }
        @keyframes float-delayed { 0%, 100% { transform: translateY(0px) translateX(0px); } 50% { transform: translateY(20px) translateX(-20px); } }
        @keyframes pulse-slow { 0%, 100% { opacity: 0.3; transform: scale(1); } 50% { opacity: 0.5; transform: scale(1.1); } }
        @keyframes popIn { 0% { transform: scale(0.5); opacity: 0; } 60% { transform: scale(1.1); opacity: 1; } 80% { transform: scale(0.95); } 100% { transform: scale(1); opacity: 1; } }
        .animate-fadeInUp { animation: fadeIn 0.8s ease-out forwards; animation-fill-mode: backwards; }
        .animate-float { animation: float 8s ease-in-out infinite; }
        .animate-float-delayed { animation: float-delayed 10s ease-in-out infinite; }
        .animate-pulse-slow { animation: pulse-slow 4s ease-in-out infinite; }
        .bg-grid-pattern {
          background-image: linear-gradient(rgba(139, 92, 246, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(139, 92, 246, 0.1) 1px, transparent 1px);
          background-size: 50px 50px;
        }
        .animate-pop-in {
          animation: popIn 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
        }
      `}</style>
    </div>
  );
}

export default Contact;
