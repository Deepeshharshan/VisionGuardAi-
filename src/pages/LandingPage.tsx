// ============================================================
// LandingPage — Editorial Landing Page (Professional Layout)
// ============================================================
import React, { Suspense } from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { HeroSection } from '@/components/landing/HeroSection';
import { TrustedSection } from '@/components/landing/TrustedSection';
import { FeaturesSection } from '@/components/landing/FeaturesSection';
import { HowItWorksSection } from '@/components/landing/HowItWorksSection';
import { IndustriesSection } from '@/components/landing/IndustriesSection';
import { ArchitectureSection } from '@/components/landing/ArchitectureSection';
import { StatsSection } from '@/components/landing/StatsSection';
import { PricingSection } from '@/components/landing/PricingSection';
import { FAQSection } from '@/components/landing/FAQSection';
import { ContactSection } from '@/components/landing/ContactSection';

const LandingPage: React.FC = () => {
  return (
    <>
      {/* Skip to content for accessibility */}
      <a
        href="#features"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50
                   focus:px-4 focus:py-2 focus:bg-black focus:text-white focus:rounded-full focus:text-sm focus:font-medium"
      >
        Skip to main content
      </a>

      <Navbar />

      <main id="main-content">
        {/* 1. Hero — large centered serif heading + dashboard mockup */}
        <HeroSection />

        {/* 2. Stats — key numbers strip */}
        <StatsSection />

        {/* 3. Features — sticky-left editorial layout */}
        <FeaturesSection />

        {/* 4. How It Works — numbered steps, sticky left */}
        <HowItWorksSection />

        {/* 5. Industries — sticky left, card grid */}
        <IndustriesSection />

        {/* 6. Architecture — dark API / code block */}
        <Suspense fallback={null}>
          <ArchitectureSection />
        </Suspense>

        {/* 7. Trusted / Safety features */}
        <TrustedSection />

        {/* 8. Pricing */}
        <PricingSection />

        {/* 9. FAQ */}
        <FAQSection />

        {/* 10. Contact / "Ready to build?" CTA */}
        <ContactSection />
      </main>

      <Footer />
    </>
  );
};

export default LandingPage;
