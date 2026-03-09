const steps = [
  {
    number: "01",
    title: "Write your idea once",
    description:
      "Drop in a rough idea, a blog post, a tweet — anything. Just write once in your natural voice.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 20h9M16.5 3.5a2.12 2.12 0 013 3L7 19l-4 1 1-4L16.5 3.5z" />
      </svg>
    ),
    color: "violet",
  },
  {
    number: "02",
    title: "Convert to platform-specific posts",
    description:
      "AI instantly transforms your content into optimized versions for LinkedIn, X, Instagram, Threads & Medium.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 3h5v5M4 20L21 3M21 16v5h-5M15 15l6 6M4 4l5 5" />
      </svg>
    ),
    color: "cyan",
  },
  {
    number: "03",
    title: "Schedule across platforms",
    description:
      "Pick dates, pick times — or let AI choose the best posting schedule for maximum reach on each platform.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
        <path d="M16 2v4M8 2v4M3 10h18" />
      </svg>
    ),
    color: "pink",
  },
  {
    number: "04",
    title: "Boost engagement automatically",
    description:
      "AI monitors replies, suggests smart responses, and helps you turn every comment into a growth opportunity.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
      </svg>
    ),
    color: "amber",
  },
];

const colorMap = {
  violet: {
    bg: "bg-violet-500/10",
    border: "border-violet-500/20",
    text: "text-violet-400",
    line: "from-violet-500/50",
    number: "text-violet-500/20",
  },
  cyan: {
    bg: "bg-cyan-500/10",
    border: "border-cyan-500/20",
    text: "text-cyan-400",
    line: "from-cyan-500/50",
    number: "text-cyan-500/20",
  },
  pink: {
    bg: "bg-pink-500/10",
    border: "border-pink-500/20",
    text: "text-pink-400",
    line: "from-pink-500/50",
    number: "text-pink-500/20",
  },
  amber: {
    bg: "bg-amber-500/10",
    border: "border-amber-500/20",
    text: "text-amber-400",
    line: "from-amber-500/50",
    number: "text-amber-500/20",
  },
};

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="relative py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="badge mb-4">How It Works</div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            From idea to everywhere in{" "}
            <span className="gradient-text">4 simple steps</span>
          </h2>
          <p className="text-[#8888aa] leading-relaxed">
            No learning curve. No complex setup. Just results.
          </p>
        </div>

        <div className="relative">
          {/* Connecting line (desktop) */}
          <div className="hidden lg:block absolute top-[60px] left-[calc(12.5%+28px)] right-[calc(12.5%+28px)] h-[2px] bg-gradient-to-r from-violet-500/20 via-cyan-500/20 to-amber-500/20" />

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, i) => {
              const colors = colorMap[step.color];
              return (
                <div key={i} className="text-center relative group">
                  {/* Step Number Background */}
                  <div
                    className={`absolute -top-4 left-1/2 -translate-x-1/2 text-7xl font-black ${colors.number} select-none`}
                  >
                    {step.number}
                  </div>

                  <div
                    className={`relative w-14 h-14 rounded-2xl ${colors.bg} border ${colors.border} ${colors.text} flex items-center justify-center mx-auto mb-5 group-hover:scale-110 transition-transform z-10`}
                  >
                    {step.icon}
                  </div>

                  <h3 className="text-lg font-semibold text-white mb-2">
                    {step.title}
                  </h3>

                  <p className="text-sm text-[#8888aa] leading-relaxed">
                    {step.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Coming Soon Badge */}
        <div className="text-center mt-12">
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/[0.03] border border-white/[0.08] text-sm text-[#8888aa]">
            <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
            These features are currently being built. Join the waitlist to be first in line.
          </div>
        </div>
      </div>
    </section>
  );
}
