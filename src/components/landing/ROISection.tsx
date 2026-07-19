import React from 'react';
import { motion } from 'framer-motion';

export const ROISection: React.FC = () => {
  return (
    <section id="roi" className="enterprise-section bg-black text-white overflow-hidden relative">
      <div className="enterprise-container relative z-10">
        
        {/* Background gradient blob */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-[400px] bg-emerald-900/20 blur-[150px] rounded-full pointer-events-none"></div>
        
        <div className="relative z-10 flex flex-col items-center text-center">
          
          <motion.h2 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-[40px] md:text-[56px] lg:text-[72px] font-bold leading-[1.1] tracking-tight mb-8 max-w-4xl"
          >
            Deploy in days.<br />See ROI in weeks.
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.1 }}
            className="text-[20px] text-white font-medium max-w-2xl mx-auto mb-20"
          >
            VisionGuard fundamentally changes the economics of quality control and factory safety by leveraging the infrastructure you already own.
          </motion.p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-5xl mx-auto">
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: 0.2 }}
              className="flex flex-col items-center border-b md:border-b-0 md:border-r border-white/10 pb-8 md:pb-0 md:pr-8"
            >
              <div className="text-[64px] font-extrabold text-white mb-2 leading-none">60<span className="text-indigo-400">%</span></div>
              <div className="text-[16px] font-bold text-white mb-2">Reduction in downtime</div>
              <p className="text-[14px] text-white text-center max-w-[200px]">By predicting mechanical failures weeks in advance.</p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: 0.3 }}
              className="flex flex-col items-center border-b md:border-b-0 md:border-r border-white/10 pb-8 md:pb-0 md:pr-8"
            >
              <div className="text-[64px] font-extrabold text-white mb-2 leading-none">99.8<span className="text-emerald-400">%</span></div>
              <div className="text-[16px] font-bold text-white mb-2">Defect capture rate</div>
              <p className="text-[14px] text-white text-center max-w-[200px]">Achieved on high-speed automotive assembly lines.</p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: 0.4 }}
              className="flex flex-col items-center"
            >
              <div className="text-[64px] font-extrabold text-white mb-2 leading-none">10<span className="text-amber-400">x</span></div>
              <div className="text-[16px] font-bold text-white mb-2">Faster deployment</div>
              <p className="text-[14px] text-white text-center max-w-[200px]">No new cameras or sensor arrays required.</p>
            </motion.div>
            
          </div>
          
        </div>
      </div>
    </section>
  );
};
