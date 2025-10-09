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
    <div className="min-h-screen relative overflow-hidden font-sans text-gray-800 bg-gradient-to-br from-white via-green-50 to-emerald-100 flex flex-col items-center justify-center">
      {/* Animated Background Blobs */}
      <div className="absolute -top-10 -left-10 w-80 h-80 bg-emerald-300 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob"></div>
      <div className="absolute top-20 right-0 w-72 h-72 bg-green-300 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob animation-delay-2000"></div>
      <div className="absolute bottom-10 left-1/4 w-96 h-96 bg-lime-300 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob animation-delay-4000"></div>

      {/* Content Wrapper */}
      <div className="relative z-10 flex flex-col items-center justify-center px-6 py-10 w-full">
        <h1 className="text-6xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-green-500 mb-6">
          Get in Touch
        </h1>
        <p className="text-gray-600 max-w-xl text-center mb-10 text-lg">
          We’d love to hear from you! Whether you’re a seller, buyer, or just
          curious about LocalHarvest, send us a message below.
        </p>

        {submitted ? (
          <div className="bg-white/70 backdrop-blur-md rounded-2xl p-8 text-center max-w-md w-full shadow-xl border border-white/30">
            <h2 className="text-2xl font-semibold text-emerald-700 mb-3">
              ✅ Message Sent!
            </h2>
            <p className="text-gray-600">
              Thank you for reaching out! We’ll get back to you soon.
            </p>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="bg-white/70 backdrop-blur-md rounded-2xl p-8 w-full max-w-md shadow-xl border border-white/30"
          >
            <div className="mb-5">
              <label className="block text-left text-gray-700 font-semibold mb-2">
                Name
              </label>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                className="w-full bg-white/80 border-2 border-transparent rounded-lg px-4 py-3 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-400 focus:bg-white transition placeholder-gray-400"
                placeholder="Your Name"
              />
            </div>
            <div className="mb-5">
              <label className="block text-left text-gray-700 font-semibold mb-2">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                className="w-full bg-white/80 border-2 border-transparent rounded-lg px-4 py-3 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-400 focus:bg-white transition placeholder-gray-400"
                placeholder="your.email@example.com"
              />
            </div>
            <div className="mb-6">
              <label className="block text-left text-gray-700 font-semibold mb-2">
                Message
              </label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                required
                className="w-full bg-white/80 border-2 border-transparent rounded-lg px-4 py-3 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-400 focus:bg-white transition h-32 resize-none placeholder-gray-400"
                placeholder="How can we help?"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full text-white font-semibold py-3 rounded-lg transition-all duration-300 ease-in-out transform hover:scale-105 shadow-lg bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-600 hover:to-green-700 cursor-pointer"
            >
              Send Message
            </button>
          </form>
        )}
      </div>

      {/* Animation Styles */}
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

export default Contact;
