import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, ArrowRight } from 'lucide-react';

export const HeroSection: React.FC = () => {
  return (
    <section id="hero" className="relative pt-32 lg:pt-40 pb-0 bg-mesh-gradient overflow-hidden" aria-label="Hero">
      <div className="enterprise-container relative z-10">
        
        {/* Main Content Area */}
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="mb-8 inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[var(--border-strong)] bg-white/70 backdrop-blur-md shadow-sm"
          >
            <span className="flex h-2 w-2 rounded-full bg-black animate-pulse"></span>
            <span className="text-sm font-semibold tracking-wide text-[var(--text-1)]">VisionGuard AI 2.0 is now live</span>
            <ArrowRight className="w-3 h-3 ml-1 text-[var(--text-2)]" />
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
            className="text-page-title mb-8"
          >
            Intelligence for the <br className="hidden md:block" /> modern factory floor.
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
            className="text-desc mb-12 max-w-2xl text-center mx-auto"
          >
            Connect your existing cameras to our AI engine and start detecting defects, anomalies, and safety violations in real-time. No new hardware required.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center gap-4"
          >
            <button className="vg-btn vg-btn-primary w-full sm:w-auto">
              Deploy to Production
            </button>
            <button className="vg-btn vg-btn-ghost border border-[var(--border)] bg-white/50 hover:bg-white shadow-sm w-full sm:w-auto">
              Read the Docs <ChevronRight className="w-4 h-4 ml-1 opacity-50" />
            </button>
          </motion.div>
        </div>
        
      </div>
    </section>
  );
};
