export default function PricingTeaser() {
  return (
    <section id="pricing" className="relative py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto">
          <div className="badge mb-4">Pricing</div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Simple pricing.{" "}
            <span className="gradient-text">No surprises.</span>
          </h2>
          <p className="text-[#8888aa] leading-relaxed mb-10">
            We&apos;re finalizing our plans. Waitlist members get free early
            access — no credit card required.
          </p>

          <div className="glass-card p-10 max-w-lg mx-auto relative">
            <div className="absolute -inset-[1px] rounded-2xl bg-gradient-to-br from-violet-500/15 via-transparent to-cyan-500/15 pointer-events-none" />

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
                <path d="M12 2v20M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6" />
              </svg>
            </div>

            <h3 className="text-xl font-semibold text-white mb-2">
              Free Early Access
            </h3>
            <p className="text-sm text-[#8888aa] mb-6">
              Join the waitlist today and lock in free access to ContentElevatr
              when we launch. Early supporters get priority access and exclusive
              perks.
            </p>

            <div className="space-y-3 mb-8 text-left max-w-xs mx-auto">
              {[
                "Full access to all Phase 1 features",
                "Priority support",
                "Shape the product with your feedback",
                "Exclusive early-adopter pricing",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#22c55e"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                  <span className="text-sm text-[#ccccdd]">{item}</span>
                </div>
              ))}
            </div>

            <a href="#early-access" className="btn-primary">
              Join the Waitlist — It&apos;s Free
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
