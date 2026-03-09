export default function FinalCTA() {
  return (
    <section id="final-cta" className="relative py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-violet-950/30 to-[#050510] pointer-events-none" />
      <div className="bg-orb w-[500px] h-[500px] bg-violet-600/15 top-0 left-1/2 -translate-x-1/2" />

      <div className="relative max-w-3xl mx-auto px-6 text-center">
        <div className="badge mb-6 mx-auto">
          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
          Limited Early Access
        </div>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
          Ready to 10x your{" "}
          <span className="gradient-text">social media game?</span>
        </h2>

        <p className="text-lg text-[#8888aa] max-w-xl mx-auto mb-8 leading-relaxed">
          Join the waitlist now and be the first to experience the future of
          social media management. Free early access for all waitlist members.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#early-access"
            className="btn-primary text-base py-4 px-8 animate-pulse-glow"
          >
            Get Early Access
            <svg
              width="18"
              height="18"
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
          <a href="#features" className="btn-secondary py-4 px-8">
            Explore Features
          </a>
        </div>

        <p className="text-xs text-[#666680] mt-6">
          No credit card required · Free forever for early adopters · Cancel
          anytime
        </p>
      </div>
    </section>
  );
}
