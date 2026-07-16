import React from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

export const TestimonialsSection: React.FC = () => {
  return (
    <section className="py-24 lg:py-32 bg-[var(--bg-1)] border-b border-[var(--border)] overflow-hidden">
      <div className="enterprise-container">
        
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-section-title mb-6">Trusted by the best.</h2>
          <p className="text-desc">
            See how the world's leading manufacturers are using VisionGuard to achieve zero-defect production.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            className="bg-[var(--bg-0)] p-8 rounded-[24px] border border-[var(--border)] shadow-[0_4px_24px_rgba(0,0,0,0.02)]"
          >
            <Quote className="w-8 h-8 text-[var(--border-strong)] mb-6" />
            <p className="text-[16px] text-[var(--text-1)] font-medium leading-relaxed mb-8">
              "VisionGuard caught a micro-fracture issue in our engine blocks that human inspectors simply couldn't see. It paid for itself in the first week."
            </p>
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-gray-200"></div>
              <div>
                <div className="text-[14px] font-bold text-[var(--text-1)]">Sarah Jenkins</div>
                <div className="text-[12px] text-[var(--text-3)]">VP of Quality, AutoCorp</div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: 0.1 }}
            className="bg-[var(--bg-0)] p-8 rounded-[24px] border border-[var(--border)] shadow-[0_4px_24px_rgba(0,0,0,0.02)]"
          >
            <Quote className="w-8 h-8 text-[var(--border-strong)] mb-6" />
            <p className="text-[16px] text-[var(--text-1)] font-medium leading-relaxed mb-8">
              "The edge deployment was seamless. We rolled it out to 14 facilities in three days without any downtime or heavy IT involvement."
            </p>
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-gray-200"></div>
              <div>
                <div className="text-[14px] font-bold text-[var(--text-1)]">Marcus Chen</div>
                <div className="text-[12px] text-[var(--text-3)]">CTO, GlobalTech Manufacturing</div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: 0.2 }}
            className="bg-[var(--bg-0)] p-8 rounded-[24px] border border-[var(--border)] shadow-[0_4px_24px_rgba(0,0,0,0.02)]"
          >
            <Quote className="w-8 h-8 text-[var(--border-strong)] mb-6" />
            <p className="text-[16px] text-[var(--text-1)] font-medium leading-relaxed mb-8">
              "We reduced our scrap rate by 40% in two months. The predictive maintenance alerts alone have saved us hundreds of hours of downtime."
            </p>
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-gray-200"></div>
              <div>
                <div className="text-[14px] font-bold text-[var(--text-1)]">Elena Rodriguez</div>
                <div className="text-[12px] text-[var(--text-3)]">Plant Manager, Stellantis</div>
              </div>
            </div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
};
