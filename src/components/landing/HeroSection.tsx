import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import { DashboardMockup } from './DashboardMockup';

export const HeroSection: React.FC = () => {
  return (
    <section id="hero" className="relative pt-32 pb-20 bg-mesh-gradient overflow-hidden" aria-label="Hero">
      <div className="enterprise-container relative z-10">
        
        {/* Main Content Area */}
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto mb-16">
          <motion.h1 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-page-title mb-6"
          >
            Optimize Your Workflow<br />
            Accelerate Your Growth
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
            className="text-desc text-[18px] mb-10 max-w-2xl"
          >
            Simplify factory monitoring and boost team productivity with our AI-powered predictive maintenance and quality control platform.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
            className="flex flex-col sm:flex-row items-center gap-4"
          >
            <button className="vg-btn vg-btn-primary px-8 py-6 text-[16px]">
              Start Testing <ChevronRight className="w-4 h-4 ml-1" />
            </button>
          </motion.div>
        </div>

        {/* Dashboard Mockup - Centered */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
          className="relative max-w-5xl mx-auto"
        >
          {/* Subtle glow behind mockup */}
          <div className="absolute inset-0 bg-white/40 blur-3xl rounded-[32px] -z-10" />
          
          <DashboardMockup />
        </motion.div>
        
      </div>
    </section>
  );
};
