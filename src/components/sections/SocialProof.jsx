const testimonials = [
  {
    quote:
      "ContentElevatr is going to change how I manage my social presence. Can't wait for launch!",
    name: "Alex Rivera",
    role: "Indie Maker & Creator",
    initials: "AR",
    gradient: "from-violet-400 to-cyan-400",
  },
  {
    quote:
      "Finally — a tool that understands each platform is different. This is exactly what our agency needs.",
    name: "Priya Sharma",
    role: "Social Media Agency Owner",
    initials: "PS",
    gradient: "from-pink-400 to-orange-400",
  },
  {
    quote:
      "As a founder, I need to post on LinkedIn and X consistently. The AI optimization feature alone has me sold.",
    name: "Marcus Chen",
    role: "Startup Founder",
    initials: "MC",
    gradient: "from-green-400 to-teal-400",
  },
];

export default function SocialProof() {
  return (
    <section id="social-proof" className="relative py-24 section-glow">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <p className="text-sm text-[#8888aa] mb-3">
            Trusted by creators & founders building their personal brands
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            People are{" "}
            <span className="gradient-text">already excited</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div key={i} className="glass-card p-7">
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, j) => (
                  <svg
                    key={j}
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="#a78bfa"
                    stroke="none"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                ))}
              </div>

              <p className="text-sm text-[#ccccdd] leading-relaxed mb-6 italic">
                &quot;{t.quote}&quot;
              </p>

              <div className="flex items-center gap-3">
                <div
                  className={`w-10 h-10 rounded-full bg-gradient-to-br ${t.gradient} flex items-center justify-center text-xs font-bold text-white`}
                >
                  {t.initials}
                </div>
                <div>
                  <p className="text-sm font-medium text-white">{t.name}</p>
                  <p className="text-xs text-[#666680]">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Waitlist counter */}
        <div className="text-center mt-12">
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-white/[0.03] border border-white/[0.08]">
            <div className="flex -space-x-2">
              {["from-violet-400 to-cyan-400", "from-pink-400 to-orange-400", "from-green-400 to-teal-400"].map(
                (g, i) => (
                  <div
                    key={i}
                    className={`w-7 h-7 rounded-full bg-gradient-to-br ${g} border-2 border-[#050510]`}
                  />
                )
              )}
            </div>
            <p className="text-sm text-[#8888aa]">
              Join <span className="text-white font-semibold">240+</span>{" "}
              creators on the waitlist
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
