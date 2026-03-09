const features = [
  {
    badge: "Core Feature",
    title: "Single Content → Multi-Platform Posts",
    description:
      "Write your idea once. Our AI transforms it into perfectly optimized posts for each platform — matching the ideal format, length, tone, and hashtag strategy.",
    platforms: ["LinkedIn", "X (Twitter)", "Instagram", "Threads", "Medium"],
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
        <path d="M8 21h8M12 17v4" />
      </svg>
    ),
    gradient: "from-violet-500/20 to-violet-600/5",
    iconBg: "bg-violet-500/10 border-violet-500/20 text-violet-400",
  },
  {
    badge: "Core Feature",
    title: "Smart Scheduling",
    description:
      "Schedule posts across all platforms from a single dashboard. AI suggests the best times to post based on your audience's activity and platform-specific peak engagement windows.",
    highlights: [
      "Best-time suggestions",
      "Unified calendar view",
      "Bulk scheduling",
    ],
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
        <path d="M16 2v4M8 2v4M3 10h18" />
      </svg>
    ),
    gradient: "from-cyan-500/20 to-cyan-600/5",
    iconBg: "bg-cyan-500/10 border-cyan-500/20 text-cyan-400",
  },
  {
    badge: "Core Feature",
    title: "Engagement Booster",
    description:
      "Never miss a conversation. AI monitors your posts for comments & replies, generates smart responses, and lets you approve before posting — turning comments into growth.",
    highlights: [
      "AI-generated replies",
      "Engagement analytics",
      "Approval workflows",
    ],
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
      </svg>
    ),
    gradient: "from-pink-500/20 to-pink-600/5",
    iconBg: "bg-pink-500/10 border-pink-500/20 text-pink-400",
  },
  {
    badge: "Core Feature",
    title: "Platform-Aware Content Reviewer",
    description:
      "Before you hit publish, AI reviews your content against each platform's latest algorithm best practices and suggests specific improvements to boost reach and engagement.",
    examples: [
      { platform: "LinkedIn", tip: "Add a stronger storytelling hook" },
      { platform: "X", tip: "Shorten to a punchier opening line" },
      { platform: "Instagram", tip: "Improve caption with a CTA" },
    ],
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 11l3 3L22 4" />
        <path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11" />
      </svg>
    ),
    gradient: "from-amber-500/20 to-amber-600/5",
    iconBg: "bg-amber-500/10 border-amber-500/20 text-amber-400",
  },
];

export default function FeaturePreview() {
  return (
    <section id="features" className="relative py-24 section-glow">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="badge mb-4">Feature Preview</div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Everything you need to{" "}
            <span className="gradient-text">dominate social media</span>
          </h2>
          <p className="text-[#8888aa] leading-relaxed">
            A preview of the powerful features we&apos;re building to 10x your
            social media productivity.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {features.map((feature, i) => (
            <div
              key={i}
              className={`glass-card p-8 bg-gradient-to-br ${feature.gradient} group`}
            >
              <div
                className={`w-14 h-14 rounded-xl ${feature.iconBg} border flex items-center justify-center mb-5 group-hover:scale-110 transition-transform`}
              >
                {feature.icon}
              </div>

              <span className="text-[10px] font-semibold uppercase tracking-wider text-[#666680] mb-2 block">
                {feature.badge}
              </span>

              <h3 className="text-xl font-semibold text-white mb-3">
                {feature.title}
              </h3>

              <p className="text-sm text-[#8888aa] leading-relaxed mb-4">
                {feature.description}
              </p>

              {/* Platforms list */}
              {feature.platforms && (
                <div className="flex flex-wrap gap-2">
                  {feature.platforms.map((p) => (
                    <span
                      key={p}
                      className="text-xs px-3 py-1 rounded-full bg-white/[0.04] border border-white/[0.08] text-[#8888aa]"
                    >
                      {p}
                    </span>
                  ))}
                </div>
              )}

              {/* Highlights */}
              {feature.highlights && (
                <div className="space-y-2">
                  {feature.highlights.map((h) => (
                    <div key={h} className="flex items-center gap-2">
                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#22c55e"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M20 6L9 17l-5-5" />
                      </svg>
                      <span className="text-sm text-[#8888aa]">{h}</span>
                    </div>
                  ))}
                </div>
              )}

              {/* Examples */}
              {feature.examples && (
                <div className="space-y-2">
                  {feature.examples.map((ex) => (
                    <div
                      key={ex.platform}
                      className="flex items-start gap-2 text-sm"
                    >
                      <span className="text-[#666680] font-medium min-w-[80px]">
                        {ex.platform}
                      </span>
                      <span className="text-[#8888aa]">→ {ex.tip}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
