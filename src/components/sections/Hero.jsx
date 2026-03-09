"use client";
import { useState } from "react";

export default function Hero() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    role: "",
    platform: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center pt-20 pb-16 overflow-hidden"
    >
      {/* Background Elements */}
      <div className="bg-orb w-[500px] h-[500px] bg-violet-600/20 -top-40 -right-40" />
      <div className="bg-orb w-[400px] h-[400px] bg-cyan-500/15 bottom-0 -left-40" />
      <div className="bg-orb w-[300px] h-[300px] bg-pink-500/10 top-1/2 left-1/2 -translate-x-1/2" />

      {/* Grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left — Copy */}
          <div>
            <div className="badge mb-6 animate-fade-in-up">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              Coming Soon — Join the Waitlist
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tight mb-6 animate-fade-in-up delay-100">
              Create once.
              <br />
              <span className="gradient-text">Publish everywhere.</span>
              <br />
              Grow engagement faster.
            </h1>

            <p className="text-lg text-[#8888aa] max-w-xl leading-relaxed mb-8 animate-fade-in-up delay-200">
              The AI-powered platform that turns a single piece of content into
              optimized posts across LinkedIn, X, Instagram, Threads & Medium —
              then helps you schedule, boost engagement, and grow your audience
              on autopilot.
            </p>

            <div className="flex flex-wrap gap-4 mb-10 animate-fade-in-up delay-300">
              <a href="#early-access" className="btn-primary">
                Join the Waitlist
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
              <a href="#how-it-works" className="btn-secondary">
                See How It Works
              </a>
            </div>

            {/* Social proof mini */}
            <div className="flex items-center gap-3 animate-fade-in-up delay-400">
              <div className="flex -space-x-2">
                {[
                  "bg-gradient-to-br from-violet-400 to-cyan-400",
                  "bg-gradient-to-br from-pink-400 to-orange-400",
                  "bg-gradient-to-br from-green-400 to-teal-400",
                  "bg-gradient-to-br from-blue-400 to-indigo-400",
                ].map((bg, i) => (
                  <div
                    key={i}
                    className={`w-8 h-8 rounded-full ${bg} border-2 border-[#050510] flex items-center justify-center text-[10px] font-bold text-white`}
                  >
                    {["A", "M", "S", "K"][i]}
                  </div>
                ))}
              </div>
              <p className="text-sm text-[#8888aa]">
                <span className="text-white font-medium">240+</span> creators
                already on the waitlist
              </p>
            </div>
          </div>

          {/* Right — Signup Form */}
          <div className="animate-fade-in-up delay-200">
            <div className="glass-card p-8 relative">
              <div className="absolute -inset-[1px] rounded-2xl bg-gradient-to-br from-violet-500/20 via-transparent to-cyan-500/20 pointer-events-none" />

              {!submitted ? (
                <>
                  <h3 className="text-xl font-semibold text-white mb-1">
                    Get Early Access
                  </h3>
                  <p className="text-sm text-[#8888aa] mb-6">
                    Be among the first to try ContentElevatr. No spam, ever.
                  </p>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label className="block text-xs font-medium text-[#8888aa] mb-1.5">
                        Your Name
                      </label>
                      <input
                        name="name"
                        type="text"
                        required
                        placeholder="Jane Doe"
                        value={formData.name}
                        onChange={handleChange}
                        className="form-input"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-[#8888aa] mb-1.5">
                        Email Address
                      </label>
                      <input
                        name="email"
                        type="email"
                        required
                        placeholder="jane@example.com"
                        value={formData.email}
                        onChange={handleChange}
                        className="form-input"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-[#8888aa] mb-1.5">
                        Your Role
                      </label>
                      <select
                        name="role"
                        required
                        value={formData.role}
                        onChange={handleChange}
                        className="form-select"
                      >
                        <option value="" disabled>
                          Select your role
                        </option>
                        <option value="creator">Content Creator</option>
                        <option value="founder">Startup Founder</option>
                        <option value="agency">Agency</option>
                        <option value="marketing">Marketing Team</option>
                        <option value="other">Other</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-[#8888aa] mb-1.5">
                        Primary Platform
                      </label>
                      <select
                        name="platform"
                        required
                        value={formData.platform}
                        onChange={handleChange}
                        className="form-select"
                      >
                        <option value="" disabled>
                          Choose your main platform
                        </option>
                        <option value="linkedin">LinkedIn</option>
                        <option value="x">X (Twitter)</option>
                        <option value="instagram">Instagram</option>
                        <option value="threads">Threads</option>
                        <option value="medium">Medium</option>
                        <option value="multiple">Multiple</option>
                      </select>
                    </div>

                    <button type="submit" className="btn-primary w-full mt-2">
                      Join the Waitlist
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M5 12h14M12 5l7 7-7 7" />
                      </svg>
                    </button>

                    <p className="text-xs text-center text-[#666680]">
                      🔒 Free early access for waitlist members. No credit card
                      required.
                    </p>
                  </form>
                </>
              ) : (
                <div className="text-center py-8">
                  <div className="w-16 h-16 rounded-full bg-green-500/10 border border-green-500/20 flex items-center justify-center mx-auto mb-4">
                    <svg
                      width="32"
                      height="32"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#22c55e"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">
                    You&apos;re on the list! 🎉
                  </h3>
                  <p className="text-sm text-[#8888aa]">
                    We&apos;ll notify you as soon as ContentElevatr is ready.
                    <br />
                    Check your inbox for a confirmation email.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
