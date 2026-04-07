export default function Hero() {
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
              Now Live — Get Started Free
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
              <a
                href="https://app.contentelevatr.com/sign-up"
                className="btn-primary"
              >
                Get Started Free
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
                already using ContentElevatr
              </p>
            </div>
          </div>

          {/* Right — CTA Card */}
          <div className="animate-fade-in-up delay-200">
            <div className="glass-card p-8 relative">
              <div className="absolute -inset-[1px] rounded-2xl bg-gradient-to-br from-violet-500/20 via-transparent to-cyan-500/20 pointer-events-none" />

              <div className="text-center py-4">
                {/* Icon */}
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-violet-500/20 to-cyan-500/20 border border-white/[0.08] flex items-center justify-center mx-auto mb-6">
                  <svg
                    width="28"
                    height="28"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#a78bfa"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
                  </svg>
                </div>

                <h3 className="text-xl font-semibold text-white mb-2">
                  Ready to elevate your content?
                </h3>
                <p className="text-sm text-[#8888aa] mb-8 max-w-sm mx-auto">
                  Create your free account and start publishing across all your
                  platforms in minutes. No credit card required.
                </p>

                <div className="space-y-3 max-w-xs mx-auto">
                  <a
                    href="https://app.contentelevatr.com/sign-up"
                    className="btn-primary w-full"
                  >
                    Sign Up Free
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

                  <a
                    href="https://app.contentelevatr.com/sign-in"
                    className="btn-secondary w-full"
                  >
                    Already have an account? Sign In
                  </a>
                </div>

                <p className="text-xs text-[#666680] mt-6">
                  🔒 Free to get started. No credit card required.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
