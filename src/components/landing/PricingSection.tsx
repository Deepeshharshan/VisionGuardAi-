import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import { PRICING_PLANS } from '@/constants';

function cn(...classes: (string | boolean | undefined)[]) {
  return classes.filter(Boolean).join(' ');
}

export const PricingSection: React.FC = () => {
  return (
    <section id="pricing" className="py-24 lg:py-32 bg-[var(--bg-1)] border-b border-[var(--border)]" aria-labelledby="pricing-heading">
      <div className="enterprise-container">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-[12px] font-semibold tracking-[0.1em] uppercase text-[var(--text-3)] mb-4"
          >
            Predictable Pricing
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            id="pricing-heading"
            className="text-section-title mb-6"
          >
            Scale without limits.
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.1 }}
            className="text-desc"
          >
            Start with a pilot on a single assembly line, then seamlessly deploy globally across your entire manufacturing fleet.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto relative">

          {PRICING_PLANS.map((plan, i) => {
            const isEnterprise = plan.name === 'Enterprise';
            
            return (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className={cn(
                  "relative p-8 lg:p-10 rounded-[32px] border transition-all duration-300 flex flex-col h-full z-10",
                  isEnterprise 
                    ? "bg-[#111111] text-white border-[#333333] shadow-[0_20px_40px_-15px_rgba(0,0,0,0.2)] lg:-translate-y-4 lg:scale-[1.02]" 
                    : "bg-[var(--bg-0)] border-[var(--border)] shadow-[0_4px_24px_rgba(0,0,0,0.04)] hover-lift"
                )}
              >
                {isEnterprise && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-gray-700 to-gray-900 text-white text-[11px] font-bold uppercase tracking-[0.15em] px-5 py-1.5 rounded-full shadow-md">
                    Recommended
                  </div>
                )}
                
                <div className="mb-10">
                  <h3 className={cn("text-[24px] font-bold mb-3", isEnterprise ? "text-white" : "text-[var(--text-1)]")}>{plan.name}</h3>
                  <div className="flex items-baseline gap-2 mb-4">
                    <span className="text-[48px] font-extrabold tracking-tight leading-none">{plan.price}</span>
                    {plan.price !== 'Custom' && <span className={isEnterprise ? "text-gray-400" : "text-[var(--text-3)]"}>/mo</span>}
                  </div>
                  <p className={cn("text-[15px] leading-relaxed", isEnterprise ? "text-gray-400" : "text-[var(--text-2)]")}>{plan.description}</p>
                </div>

                <div className="space-y-4 mb-12 flex-1">
                  {plan.features.map(feature => (
                    <div key={feature} className="flex items-start gap-4">
                      <div className={cn("mt-1 w-5 h-5 rounded-full flex items-center justify-center shrink-0", isEnterprise ? "bg-white/10" : "bg-[var(--bg-2)]")}>
                        <Check className={cn("w-3 h-3", isEnterprise ? "text-white" : "text-[var(--text-1)]")} />
                      </div>
                      <span className={cn("text-[16px] font-medium", isEnterprise ? "text-gray-300" : "text-[var(--text-1)]")}>{feature}</span>
                    </div>
                  ))}
                </div>

                <button className={cn(
                  "vg-btn w-full",
                  isEnterprise
                    ? "bg-white text-black hover:bg-gray-100 shadow-lg"
                    : "bg-[var(--bg-1)] text-[var(--text-1)] border border-[var(--border)] hover:bg-[var(--bg-2)]"
                )}>
                  {plan.cta}
                </button>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
