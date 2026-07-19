import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { DashboardMockup } from './DashboardMockup';

export const DashboardMockupSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  // GSAP/Framer hybrid sticky scroll logic
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Scale the dashboard up from 0.8 to 1 as user scrolls
  const scale = useTransform(scrollYProgress, [0, 0.4], [0.8, 1]);
  // Tilt the dashboard from extreme 3D angle to flat
  const rotateX = useTransform(scrollYProgress, [0, 0.4], [35, 0]);
  // Fade in the text, then fade it out
  const textOpacity = useTransform(scrollYProgress, [0, 0.1, 0.3, 0.4], [0, 1, 1, 0]);
  const textY = useTransform(scrollYProgress, [0, 0.2], [50, 0]);

  return (
    <section 
      ref={containerRef} 
      id="dashboard" 
      className="relative bg-black h-[250vh]" // Massive height for scrolling room
    >
      <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden perspective-[2500px]">
        
        {/* Background gradient behind dashboard */}
        <div className="absolute inset-0 bg-gradient-to-b from-black via-zinc-950 to-black z-0 pointer-events-none" />

        {/* Narrative Text */}
        <motion.div 
          style={{ opacity: textOpacity, y: textY }}
          className="absolute top-32 text-center z-20 pointer-events-none px-6"
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
          style={{ 
            scale, 
            rotateX, 
            transformStyle: "preserve-3d" 
          }}
          className="relative z-10 w-[90vw] max-w-[1400px] h-[70vh] max-h-[800px] mt-24"
        >
          {/* Subtle glow underneath the dashboard to separate it from pure black */}
          <div className="absolute -inset-10 bg-white/5 blur-[100px] rounded-[50px] -z-10" />
          
          <DashboardMockup />
        </motion.div>
        
      </div>
    </section>
  );
};
