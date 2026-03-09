const solutions = [
  {
    label: "AI-Powered Repurposing",
    description:
      "Write once and let AI transform your content into platform-perfect posts — each optimized for the unique format, tone, and algorithm of every platform.",
  },
  {
    label: "Unified Dashboard",
    description:
      "Schedule, publish, and manage all your platforms from a single beautiful dashboard. No more juggling tabs and tools.",
  },
  {
    label: "Smart Engagement",
    description:
      "AI analyzes your comments and suggests (or auto-drafts) replies that boost engagement — with approval workflows so you stay in control.",
  },
  {
    label: "Algorithm Intelligence",
    description:
      "Before you publish, AI reviews your content against real-time algorithm best practices and suggests improvements to maximize reach.",
  },
];

export default function Solution() {
  return (
    <section id="solution" className="relative py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <div>
            <div className="badge mb-4">The Solution</div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Your entire social media workflow,{" "}
              <span className="gradient-text">automated</span>
            </h2>
            <p className="text-[#8888aa] leading-relaxed mb-8">
              ContentElevatr combines AI content optimization, cross-platform
              scheduling, and engagement automation into one powerful platform —
              so you can focus on creating, not managing.
            </p>

            <div className="space-y-4">
              {solutions.map((item, i) => (
                <div key={i} className="flex gap-4">
                  <div className="mt-1 flex-shrink-0">
                    <div className="w-6 h-6 rounded-full bg-gradient-to-br from-violet-500 to-cyan-400 flex items-center justify-center">
                      <svg
                        width="12"
                        height="12"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="white"
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M20 6L9 17l-5-5" />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <h4 className="text-white font-medium mb-1">
                      {item.label}
                    </h4>
                    <p className="text-sm text-[#8888aa] leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — Visual */}
          <div className="relative">
            <div className="glass-card p-8 relative overflow-hidden">
              <div className="absolute -inset-[1px] rounded-2xl bg-gradient-to-br from-violet-500/10 via-transparent to-cyan-500/10 pointer-events-none" />

              {/* Mock Dashboard */}
              <div className="space-y-4">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-3 h-3 rounded-full bg-red-400/60" />
                  <div className="w-3 h-3 rounded-full bg-yellow-400/60" />
                  <div className="w-3 h-3 rounded-full bg-green-400/60" />
                  <span className="text-xs text-[#666680] ml-2">
                    ContentElevatr Dashboard
                  </span>
                </div>

                {/* Content Input Mock */}
                <div className="bg-white/[0.03] rounded-lg p-4 border border-white/[0.06]">
                  <p className="text-xs text-[#666680] mb-2">Original Content</p>
                  <p className="text-sm text-white/80 leading-relaxed">
                    &quot;Just shipped v2.0 of our product after 3 months of
                    hard work. Here&apos;s what we learned about building in
                    public...&quot;
                  </p>
                </div>

                {/* Platform Outputs */}
                <div className="grid grid-cols-2 gap-3">
                  {[
                    { platform: "LinkedIn", color: "from-blue-500/20 to-blue-600/10", icon: "in" },
                    { platform: "X", color: "from-slate-500/20 to-slate-600/10", icon: "𝕏" },
                    { platform: "Instagram", color: "from-pink-500/20 to-purple-600/10", icon: "📷" },
                    { platform: "Threads", color: "from-white/10 to-gray-500/10", icon: "@" },
                  ].map((p) => (
                    <div
                      key={p.platform}
                      className={`bg-gradient-to-br ${p.color} rounded-lg p-3 border border-white/[0.06]`}
                    >
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-xs font-bold text-white/60">
                          {p.icon}
                        </span>
                        <span className="text-xs font-medium text-white/70">
                          {p.platform}
                        </span>
                      </div>
                      <div className="space-y-1">
                        <div className="h-2 bg-white/[0.08] rounded w-full" />
                        <div className="h-2 bg-white/[0.06] rounded w-4/5" />
                        <div className="h-2 bg-white/[0.04] rounded w-3/5" />
                      </div>
                      <div className="mt-2 flex items-center gap-1">
                        <span className="text-[10px] text-green-400">✓</span>
                        <span className="text-[10px] text-[#666680]">
                          Optimized
                        </span>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="flex items-center justify-between pt-2">
                  <span className="text-xs text-[#666680]">
                    4 platforms ready
                  </span>
                  <div className="flex gap-2">
                    <span className="text-xs px-3 py-1.5 rounded-lg bg-violet-500/20 text-violet-300 font-medium cursor-pointer">
                      Schedule All
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating accent */}
            <div className="absolute -z-10 w-[300px] h-[300px] bg-violet-600/20 rounded-full filter blur-[100px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
          </div>
        </div>
      </div>
    </section>
  );
}
