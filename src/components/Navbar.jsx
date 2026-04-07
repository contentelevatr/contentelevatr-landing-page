"use client";
import { useState, useEffect } from "react";
import Image from "next/image";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { label: "Features", href: "#features" },
    { label: "How It Works", href: "#how-it-works" },
    { label: "Pricing", href: "#pricing" },
    { label: "FAQ", href: "#faq" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#050510]/80 backdrop-blur-xl border-b border-white/[0.06]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2.5 group">
          <Image
            src="/logo.png"
            alt="ContentElevatr Logo"
            width={36}
            height={36}
            className="rounded-lg transition-transform group-hover:scale-110"
          />
          <span className="text-lg font-bold text-white tracking-tight">
            Content
            <span className="gradient-text">Elevatr</span>
          </span>
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-[#8888aa] hover:text-white transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-4">
          <a
            href="https://app.contentelevatr.com/sign-in"
            className="text-sm text-[#8888aa] hover:text-white transition-colors duration-200"
          >
            Sign In
          </a>
          <a
            href="https://app.contentelevatr.com/sign-up"
            className="btn-primary text-sm py-2.5 px-6"
          >
            Sign Up Free
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            {mobileOpen ? (
              <path d="M18 6L6 18M6 6l12 12" />
            ) : (
              <path d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-[#050510]/95 backdrop-blur-xl border-b border-white/[0.06] animate-fade-in">
          <div className="px-6 py-4 flex flex-col gap-4">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="text-sm text-[#8888aa] hover:text-white transition-colors py-2"
              >
                {link.label}
              </a>
            ))}
            <a
              href="https://app.contentelevatr.com/sign-in"
              onClick={() => setMobileOpen(false)}
              className="text-sm text-[#8888aa] hover:text-white transition-colors py-2"
            >
              Sign In
            </a>
            <a
              href="https://app.contentelevatr.com/sign-up"
              onClick={() => setMobileOpen(false)}
              className="btn-primary text-sm py-2.5 px-6 text-center"
            >
              Sign Up Free
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
