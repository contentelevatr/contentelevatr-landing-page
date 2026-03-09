const audiences = [
  {
    title: "Content Creators",
    description:
      "Building a personal brand? ContentElevatr lets you focus on creating killer content while it handles distribution, optimization, and engagement across every platform.",
    tags: ["YouTube", "Newsletter", "Podcasts", "Blogging"],
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2a3 3 0 00-3 3v7a3 3 0 006 0V5a3 3 0 00-3-3z" />
        <path d="M19 10v2a7 7 0 01-14 0v-2M12 19v3M8 22h8" />
      </svg>
    ),
    gradient: "from-violet-500/10 to-purple-600/5",
    iconColor: "bg-violet-500/10 border-violet-500/20 text-violet-400",
  },
  {
    title: "Startup Founders",
    description:
      "Share your building journey, attract investors, and recruit talent. Turn your updates into platform-perfect posts that build authority on LinkedIn & X.",
    tags: ["LinkedIn", "X / Twitter", "Building in Public"],
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
      </svg>
    ),
    gradient: "from-cyan-500/10 to-blue-600/5",
    iconColor: "bg-cyan-500/10 border-cyan-500/20 text-cyan-400",
  },
  {
    title: "Social Media Agencies",
    description:
      "Manage multiple clients from one dashboard. Repurpose content, schedule posts, and use AI-powered engagement tools to deliver results at scale.",
    tags: ["Multi-client", "White-label", "Team Collaboration"],
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" />
      </svg>
    ),
    gradient: "from-pink-500/10 to-rose-600/5",
    iconColor: "bg-pink-500/10 border-pink-500/20 text-pink-400",
  },
  {
    title: "Small Marketing Teams",
    description:
      "Do more with less. Give your small team the power of a full social media department with AI-assisted content, scheduling, and engagement automation.",
    tags: ["Small Business", "E-commerce", "Local Brands"],
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
        <path d="M16 21V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v16" />
      </svg>
    ),
    gradient: "from-amber-500/10 to-orange-600/5",
    iconColor: "bg-amber-500/10 border-amber-500/20 text-amber-400",
  },
];

export default function Audience() {
  return (
    <section id="audience" className="relative py-24 section-glow">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="badge mb-4">Who It&apos;s For</div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Built for people who{" "}
            <span className="gradient-text">create and ship</span>
          </h2>
          <p className="text-[#8888aa] leading-relaxed">
            Whether you&apos;re a solo creator or a full agency, ContentElevatr
            adapts to your workflow.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          {audiences.map((a, i) => (
            <div
              key={i}
              className={`glass-card p-7 bg-gradient-to-br ${a.gradient} group`}
            >
              <div
                className={`w-12 h-12 rounded-xl ${a.iconColor} border flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}
              >
                {a.icon}
              </div>

              <h3 className="text-lg font-semibold text-white mb-2">
                {a.title}
              </h3>

              <p className="text-sm text-[#8888aa] leading-relaxed mb-4">
                {a.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {a.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-2.5 py-1 rounded-full bg-white/[0.04] border border-white/[0.08] text-[#666680]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
