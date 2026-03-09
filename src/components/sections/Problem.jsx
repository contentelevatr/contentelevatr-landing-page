const problems = [
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 6v6l4 2" />
      </svg>
    ),
    title: "Hours lost copy-pasting across platforms",
    description:
      "You write one great post, then spend 30+ minutes reformatting it for LinkedIn, X, Instagram, and Threads. Every. Single. Time.",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
      </svg>
    ),
    title: "Low engagement despite consistent posting",
    description:
      "You're posting regularly but your reach and engagement aren't growing. Generic content doesn't cut it — each platform has its own algorithm.",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 16v-4M12 8h.01" />
      </svg>
    ),
    title: "No clue what the algorithm wants",
    description:
      "Platform algorithms change constantly. What worked last month on LinkedIn might flop today. You need real-time optimization, not guesswork.",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
      </svg>
    ),
    title: "Comments pile up unanswered",
    description:
      "Engagement is a two-way street. But managing replies across 5 platforms manually? That's a full-time job you don't have time for.",
  },
];

export default function Problem() {
  return (
    <section id="problem" className="relative py-24 section-glow">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="badge mb-4">The Problem</div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Social media shouldn&apos;t feel like a{" "}
            <span className="gradient-text">full-time job</span>
          </h2>
          <p className="text-[#8888aa] leading-relaxed">
            Creators, founders, and teams are stuck in a cycle of manual work
            that kills productivity and limits growth.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          {problems.map((problem, i) => (
            <div key={i} className="glass-card p-6 group">
              <div className="w-12 h-12 rounded-xl bg-red-500/10 border border-red-500/20 flex items-center justify-center text-red-400 mb-4 group-hover:scale-110 transition-transform">
                {problem.icon}
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">
                {problem.title}
              </h3>
              <p className="text-sm text-[#8888aa] leading-relaxed">
                {problem.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
