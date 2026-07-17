import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export const CTASection: React.FC = () => {
  return (
    <section className="relative bg-black text-white py-24 lg:py-40 overflow-hidden" aria-labelledby="cta-heading">
      
      {/* Immersive Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgc3Ryb2tlPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMDUpIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPjxwYXRoIGQ9Ik00MCAwSDBWMG0wIDQwaDQwdjQwIi8+PC9nPjwvc3ZnPg==')] opacity-50"></div>
        <div className="absolute top-0 left-0 w-full h-[500px] bg-gradient-to-b from-blue-900/30 to-transparent"></div>
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-purple-900/30 rounded-full blur-[150px] mix-blend-screen pointer-events-none"></div>
      </div>
      
      <div className="enterprise-container relative z-10 flex flex-col items-center text-center">
        
        <motion.h2 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          id="cta-heading"
          className="text-[40px] md:text-[56px] lg:text-[72px] font-bold leading-[1.1] tracking-tight mb-8 max-w-4xl"
        >
          Start detecting defects <br className="hidden md:block"/> at the speed of light.
        </motion.h2>
        
        <motion.p 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ delay: 0.1 }}
          className="text-[20px] text-white/95 font-medium max-w-2xl mx-auto mb-12"
        >
          Join the top tier of manufacturing. Deploy VisionGuard to a single assembly line today and scale globally tomorrow.
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ delay: 0.2 }}
          className="flex flex-col sm:flex-row items-center gap-4"
        >
          <button className="h-14 px-8 rounded-full bg-white text-black font-semibold text-[16px] hover:bg-gray-100 hover:scale-105 transition-all shadow-[0_0_20px_rgba(255,255,255,0.3)]">
            Request Enterprise Demo
          </button>
          
          <button className="group flex items-center gap-2 h-14 px-8 rounded-full bg-transparent text-white font-semibold text-[16px] border-2 border-white hover:bg-white/10 transition-all">
            <span>Talk to an Engineer</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </motion.div>
        
      </div>
    </section>
  );
};
