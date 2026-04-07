export default function EarlyAccess() {
  return (
    <section
      id="early-access"
      className="relative py-24 overflow-hidden"
    >
      {/* Background glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-violet-950/20 to-transparent pointer-events-none" />

      <div className="relative max-w-3xl mx-auto px-6">
        <div className="glass-card p-10 sm:p-12 relative">
          <div className="absolute -inset-[1px] rounded-2xl bg-gradient-to-br from-violet-500/20 via-transparent to-cyan-500/20 pointer-events-none" />

          <div className="text-center">
            <div className="badge mb-4 mx-auto">Get Started</div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-3">
              Start creating with{" "}
              <span className="gradient-text">ContentElevatr</span>
            </h2>
            <p className="text-[#8888aa] max-w-lg mx-auto mb-8">
              Sign up for free and start publishing optimized content across all
              your platforms. No credit card required.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto">
              <a
                href="https://app.contentelevatr.com/sign-up"
                className="btn-primary w-full sm:w-auto"
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
                className="btn-secondary w-full sm:w-auto"
              >
                Sign In
              </a>
            </div>

            <p className="text-xs text-center text-[#666680] mt-6">
              🔒 Free to get started. No spam. No credit card required.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
