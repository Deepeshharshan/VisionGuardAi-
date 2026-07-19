import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { DashboardMockup } from './DashboardMockup';

export const DashboardMockupSection: React.FC = () => {
  return (
    <section 
      id="dashboard" 
      className="enterprise-section bg-black flex flex-col items-center justify-center relative overflow-hidden"
    >
      <div className="enterprise-container relative z-10 w-full flex flex-col items-center perspective-[2500px]">
        
        {/* Background gradient behind dashboard */}
        <div className="absolute inset-0 bg-gradient-to-b from-black via-zinc-950 to-black z-0 pointer-events-none" />

        {/* Narrative Text */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center z-20 mb-16 px-6"
        >
          <h2 className="text-[32px] md:text-[56px] font-bold text-white tracking-tighter mb-4">
            Total Spatial Control.
          </h2>
          <p className="text-[18px] text-zinc-400 max-w-xl mx-auto">
            Manage thousands of global camera nodes from a single pane of glass.
          </p>
        </motion.div>

        {/* 3D Dashboard Container */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95, rotateX: 15 }}
          whileInView={{ opacity: 1, scale: 1, rotateX: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          style={{ transformStyle: "preserve-3d" }}
          className="relative z-10 w-[90vw] max-w-[1400px] h-[70vh] max-h-[800px]"
        >
          {/* Subtle glow underneath the dashboard to separate it from pure black */}
          <div className="absolute -inset-10 bg-white/5 blur-[100px] rounded-[50px] -z-10" />
          
          <DashboardMockup />
        </motion.div>
        
      </div>
    </section>
  );
};
