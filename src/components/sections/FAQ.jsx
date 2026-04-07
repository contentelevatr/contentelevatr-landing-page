"use client";
import { useState } from "react";

const faqs = [
  {
    question: "Is ContentElevatr available now?",
    answer:
      "Yes! ContentElevatr is live and ready for you. Sign up for a free account and start creating optimized content across all your platforms today.",
  },
  {
    question: "Which platforms will be supported?",
    answer:
      "Phase 1 will support LinkedIn, X (Twitter), Instagram, Threads, and Medium. We plan to add more platforms based on user demand after launch, including TikTok, YouTube, and Facebook.",
  },
  {
    question: "Will ContentElevatr auto-post or only schedule content?",
    answer:
      "Both! You can schedule posts to be published automatically at the optimal time, or queue them up for manual review before publishing. The AI content reviewer gives you suggestions before anything goes live.",
  },
  {
    question: "Can agencies manage multiple clients?",
    answer:
      "Absolutely. We're building multi-workspace support specifically for agencies. You'll be able to manage multiple client accounts, each with their own content calendar, analytics, and engagement dashboard.",
  },
  {
    question: "Is there a free plan?",
    answer:
      "Yes! We offer a generous free tier so everyone can get started. Sign up today and explore the full platform at no cost — no credit card required.",
  },
  {
    question: "How does the AI content optimization work?",
    answer:
      "Our AI analyzes each platform's current algorithm best practices, trending formats, and engagement patterns. It then rewrites your content to match — adjusting length, tone, formatting, hashtags, and hooks for maximum reach on each specific platform.",
  },
  {
    question: "Is my content data secure?",
    answer:
      "Security is a top priority. Your content is encrypted at rest and in transit. We never share your data with third parties, and you retain full ownership of all content created through the platform.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (i) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  return (
    <section id="faq" className="relative py-24">
      <div className="max-w-3xl mx-auto px-6">
        <div className="text-center mb-12">
          <div className="badge mb-4">FAQ</div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Frequently asked{" "}
            <span className="gradient-text">questions</span>
          </h2>
          <p className="text-[#8888aa]">
            Everything you need to know about ContentElevatr.
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="glass-card overflow-hidden"
              style={{ transform: "none" }}
            >
              <button
                onClick={() => toggle(i)}
                className="w-full flex items-center justify-between p-5 text-left group"
              >
                <span className="text-sm font-medium text-white pr-4 group-hover:text-violet-300 transition-colors">
                  {faq.question}
                </span>
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#8888aa"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className={`flex-shrink-0 transition-transform duration-300 ${
                    openIndex === i ? "rotate-180" : ""
                  }`}
                >
                  <path d="M6 9l6 6 6-6" />
                </svg>
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === i ? "max-h-60" : "max-h-0"
                }`}
              >
                <p className="px-5 pb-5 text-sm text-[#8888aa] leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <p className="text-sm text-[#666680]">
            Have more questions?{" "}
            <a
              href="mailto:hello@contentelevatr.com"
              className="text-violet-400 hover:text-violet-300 transition-colors underline underline-offset-2"
            >
              Reach out to us
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
