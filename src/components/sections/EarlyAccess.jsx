"use client";
import { useState } from "react";
import CustomSelect from "@/components/CustomSelect";

export default function EarlyAccess() {
  const [formData, setFormData] = useState({
    email: "",
    role: "",
    challenge: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const roleOptions = [
    { value: "creator", label: "Content Creator" },
    { value: "founder", label: "Startup Founder" },
    { value: "agency", label: "Agency" },
    { value: "marketing", label: "Marketing Team" },
    { value: "other", label: "Other" },
  ];

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

          {!submitted ? (
            <>
              <div className="text-center mb-8">
                <div className="badge mb-4 mx-auto">Early Access</div>
                <h2 className="text-3xl sm:text-4xl font-bold text-white mb-3">
                  Be the first to{" "}
                  <span className="gradient-text">try ContentElevatr</span>
                </h2>
                <p className="text-[#8888aa] max-w-lg mx-auto">
                  Join the waitlist and get free early access when we launch.
                  Plus, help shape the product with your feedback.
                </p>
              </div>

              <form
                onSubmit={handleSubmit}
                className="space-y-5 max-w-md mx-auto"
              >
                <div>
                  <label className="block text-xs font-medium text-[#8888aa] mb-1.5">
                    Email Address *
                  </label>
                  <input
                    name="email"
                    type="email"
                    required
                    placeholder="you@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    className="form-input"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-[#8888aa] mb-1.5">
                    Your Role *
                  </label>
                  <CustomSelect
                    name="role"
                    required
                    value={formData.role}
                    onChange={handleChange}
                    options={roleOptions}
                    placeholder="Select your role"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-[#8888aa] mb-1.5">
                    Biggest social media challenge?
                  </label>
                  <textarea
                    name="challenge"
                    rows="3"
                    placeholder="e.g., I spend too much time reformatting posts for different platforms..."
                    value={formData.challenge}
                    onChange={handleChange}
                    className="form-input resize-none"
                  />
                  <p className="text-xs text-[#666680] mt-1">
                    Optional — helps us build what you need most.
                  </p>
                </div>

                <button type="submit" className="btn-primary w-full">
                  Get Early Access
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
                </button>

                <p className="text-xs text-center text-[#666680]">
                  🔒 No spam. Unsubscribe anytime. Free early access for
                  waitlist members.
                </p>
              </form>
            </>
          ) : (
            <div className="text-center py-6">
              <div className="w-16 h-16 rounded-full bg-green-500/10 border border-green-500/20 flex items-center justify-center mx-auto mb-4">
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#22c55e"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M20 6L9 17l-5-5" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">
                Welcome aboard! 🚀
              </h3>
              <p className="text-sm text-[#8888aa] max-w-md mx-auto">
                You&apos;re on the early access list. We&apos;ll reach out as
                soon as ContentElevatr is ready for you.
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
