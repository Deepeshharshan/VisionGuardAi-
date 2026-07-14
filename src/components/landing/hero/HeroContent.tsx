import React from 'react';
import { motion } from 'framer-motion';
import { HeroButtons } from './HeroButtons';

export const HeroContent: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants: any = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
    }
  };

  return (
    <motion.div 
      className="flex flex-col gap-6 max-w-xl z-30 pointer-events-auto"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Badge */}
      <motion.div variants={itemVariants}>
        <span className="inline-flex items-center gap-2 text-[11px] font-semibold tracking-[0.2em] uppercase text-slate-400">
          <span className="w-1.5 h-1.5 rounded-full bg-blue-500 shadow-[0_0_8px_rgba(59,130,246,0.6)] animate-pulse" />
          AI-Powered Manufacturing Intelligence
        </span>
      </motion.div>

      {/* Heading */}
      <motion.h1 
        variants={itemVariants}
        className="text-4xl sm:text-5xl xl:text-[3.5rem] font-semibold leading-[1.08] tracking-[-0.03em] text-white"
      >
        Transform Existing CCTV into Intelligent Industrial Vision
      </motion.h1>

      {/* Paragraph */}
      <motion.p 
        variants={itemVariants}
        className="text-[1.125rem] text-slate-400 leading-relaxed font-light max-w-lg"
      >
        VisionGuard AI converts existing factory camera infrastructure into an intelligent monitoring platform capable of detecting visual anomalies, quality defects, and maintenance events using Edge AI.
      </motion.p>

      {/* Buttons */}
      <motion.div variants={itemVariants}>
        <HeroButtons />
      </motion.div>

      {/* Trust Indicators */}
      <motion.div 
        variants={itemVariants}
        className="flex flex-wrap items-center gap-6 pt-8 mt-4 border-t border-white/5"
      >
        {['Edge AI', 'Real-Time Detection', 'Enterprise Ready'].map((text) => (
          <div key={text} className="flex items-center gap-2">
            <div className="w-1 h-1 rounded-full bg-slate-600" />
            <span className="text-xs font-medium text-slate-400 tracking-wide">{text}</span>
          </div>
        ))}
      </motion.div>
    </motion.div>
  );
};
