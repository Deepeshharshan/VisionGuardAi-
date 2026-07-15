import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import { PRICING_PLANS } from '@/constants';

function cn(...classes: (string | boolean | undefined)[]) {
  return classes.filter(Boolean).join(' ');
}

export const PricingSection: React.FC = () => {
  return (
    <section id="pricing" className="py-24 bg-[var(--bg-0)]" aria-labelledby="pricing-heading">
      <div className="enterprise-container">
        
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            id="pricing-heading"
            className="text-section-title mb-4"
          >
            Simple, transparent pricing
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.1 }}
            className="text-[16px] text-[var(--text-2)]"
          >
            Start with our pilot program, then scale across your entire manufacturing footprint.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {PRICING_PLANS.map((plan, i) => {
            const isPopular = plan.highlight;
            return (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className={cn(
                  "relative p-8 rounded-2xl border transition-all duration-300",
                  isPopular 
                    ? "bg-white border-[var(--signal)] shadow-[0_8px_30px_-4px_rgba(37,99,235,0.12)] scale-105 z-10" 
                    : "bg-white border-[var(--border)] shadow-sm hover:shadow-md"
                )}
              >
                {isPopular && (
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[var(--signal)] text-white text-[11px] font-semibold uppercase tracking-wider px-3 py-1 rounded-full shadow-sm">
                    Most Popular
                  </div>
                )}
                
                <div className="mb-8">
                  <h3 className="text-[18px] font-semibold text-[var(--text-1)] mb-2">{plan.name}</h3>
                  <div className="flex items-baseline gap-2 mb-2">
                    <span className="text-[32px] font-bold text-[var(--text-1)]">{plan.price}</span>
                    {plan.price !== 'Custom' && <span className="text-[14px] text-[var(--text-3)]">/mo</span>}
                  </div>
                  <p className="text-[14px] text-[var(--text-2)]">{plan.description}</p>
                </div>

                <button className={cn(
                  "w-full py-3 px-4 rounded-full font-medium text-[14px] transition-colors mb-8",
                  isPopular
                    ? "bg-[var(--black-btn)] text-white hover:bg-[var(--black-btn-hover)]"
                    : "bg-[var(--bg-2)] text-[var(--text-1)] hover:bg-[var(--border)]"
                )}>
                  {plan.cta}
                </button>

                <div className="space-y-4">
                  {plan.features.map(feature => (
                    <div key={feature} className="flex items-start gap-3">
                      <div className="mt-0.5 w-5 h-5 rounded-full bg-[var(--signal-dim)] flex items-center justify-center shrink-0">
                        <Check className="w-3 h-3 text-[var(--signal)]" />
                      </div>
                      <span className="text-[14px] text-[var(--text-2)] leading-tight">{feature}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
