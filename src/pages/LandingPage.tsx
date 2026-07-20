// ============================================================
// LandingPage — Enterprise SaaS Landing Page
// ============================================================
import React from 'react';
import { ReactLenis } from 'lenis/react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { HeroSection } from '@/components/landing/HeroSection';
import { DashboardMockupSection } from '@/components/landing/DashboardMockupSection';
import { TrustedSection } from '@/components/landing/TrustedSection';
import { KeyBenefitsSection } from '@/components/landing/KeyBenefitsSection';
import { HowItWorksSection } from '@/components/landing/HowItWorksSection';
import { ArchitectureSection } from '@/components/landing/ArchitectureSection';
import { IndustrySolutionsSection } from '@/components/landing/IndustriesSection';
import { EcosystemSection } from '@/components/landing/EcosystemSection';
import { TestimonialsSection } from '@/components/landing/TestimonialsSection';
import { SecurityComplianceSection } from '@/components/landing/SecurityComplianceSection';
import { ROISection } from '@/components/landing/ROISection';
import { PricingSection } from '@/components/landing/PricingSection';
import { FAQSection } from '@/components/landing/FAQSection';
import { CTASection } from '@/components/landing/CTASection';

const LandingPage: React.FC = () => {
  return (
    <>
      <Navbar />

      <main id="main-content">
        {/* 1. Hero */}
        <HeroSection />

        {/* 2. Dashboard Mockup (Animated) */}
        <DashboardMockupSection />

        {/* 3. Customer Logos */}
        <TrustedSection />

        {/* 4. Key Benefits (50/50 splits) */}
        <KeyBenefitsSection />
        
        {/* 5. Integration Ecosystem */}
        <EcosystemSection />

        {/* 7. Architecture (Schematic) */}
        <ArchitectureSection />

        {/* 8. Industry Solutions */}
        <IndustrySolutionsSection />

        {/* 9. Security & Compliance */}
        <SecurityComplianceSection />

        {/* 10. ROI & Metrics */}
        <ROISection />
        
        {/* 11. Testimonials / Success Stories */}
        <TestimonialsSection />

        {/* 12. Pricing */}
        <PricingSection />

        {/* 13. FAQ */}
        <FAQSection />

        {/* 14. Enterprise CTA */}
        <CTASection />
      </main>

      {/* 15. Footer */}
      <Footer />
    </>
  );
};

export default LandingPage;
