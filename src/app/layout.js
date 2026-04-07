import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const inter = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata = {
  title: "ContentElevatr — Create Once. Publish Everywhere. Grow Faster.",
  description:
    "The social media productivity platform that helps creators, founders, and teams turn one piece of content into optimized posts across every platform. Sign up free to get started.",
  keywords: [
    "social media management",
    "content repurposing",
    "AI content optimization",
    "cross-platform publishing",
    "engagement automation",
  ],
  openGraph: {
    title: "ContentElevatr — Create Once. Publish Everywhere.",
    description:
      "Turn a single idea into optimized posts across LinkedIn, X, Instagram, Threads & Medium. Sign up free today.",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
