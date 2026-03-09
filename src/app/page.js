import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Hero from "@/components/sections/Hero";
import Problem from "@/components/sections/Problem";
import Solution from "@/components/sections/Solution";
import FeaturePreview from "@/components/sections/FeaturePreview";
import HowItWorks from "@/components/sections/HowItWorks";
import Audience from "@/components/sections/Audience";
import EarlyAccess from "@/components/sections/EarlyAccess";
import SocialProof from "@/components/sections/SocialProof";
import PricingTeaser from "@/components/sections/PricingTeaser";
import FinalCTA from "@/components/sections/FinalCTA";
import FAQ from "@/components/sections/FAQ";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <div className="section-divider" />
        <Problem />
        <div className="section-divider" />
        <Solution />
        <div className="section-divider" />
        <FeaturePreview />
        <div className="section-divider" />
        <HowItWorks />
        <div className="section-divider" />
        <Audience />
        <div className="section-divider" />
        <EarlyAccess />
        <div className="section-divider" />
        <SocialProof />
        <div className="section-divider" />
        <PricingTeaser />
        <div className="section-divider" />
        <FinalCTA />
        <div className="section-divider" />
        <FAQ />
      </main>
      <Footer />
    </>
  );
}
