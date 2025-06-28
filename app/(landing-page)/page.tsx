"use client";

import { HeroSection } from "./components/HeroSection";
import { FeaturesSection } from "./components/FeaturesSection";
import { DemoSection } from "./components/DemoSection";
import { PricingSection } from "./components/PricingSection";
import { NewsletterSection } from "./components/NewsletterSection";

export default function LandingPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-white">
      <HeroSection />
      <FeaturesSection />
      <DemoSection />
      <PricingSection />
      <NewsletterSection />
    </main>
  );
}
