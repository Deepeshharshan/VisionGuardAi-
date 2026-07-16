import React from 'react';
import { motion } from 'framer-motion';
import { DashboardMockup } from './DashboardMockup';

export const DashboardMockupSection: React.FC = () => {
  return (
    <section className="relative pb-24 lg:pb-32 pt-12" aria-label="Dashboard Preview">
      <div className="enterprise-container relative z-10">
        
        {/* Dashboard Mockup - Centered */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          className="relative max-w-6xl mx-auto perspective-wrapper"
        >
          {/* Subtle glow behind mockup */}
          <div className="absolute inset-0 bg-white/40 blur-3xl rounded-[32px] -z-10 animate-float-subtle" />
          
          <div className="dashboard-float">
            <DashboardMockup />
          </div>
        </motion.div>
        
      </div>
    </section>
  );
};
