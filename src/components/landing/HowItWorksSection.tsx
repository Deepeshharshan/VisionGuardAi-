// ============================================================
// HowItWorksSection — Full-width 4-col numbered steps
// ============================================================
import React from 'react';
import { motion } from 'framer-motion';
import { Video, Brain, ScanSearch, Bell } from 'lucide-react';
import { HOW_IT_WORKS_STEPS } from '@/constants';

const iconMap: Record<string, React.FC<{ className?: string }>> = { Video, Brain, ScanSearch, Bell };

export const HowItWorksSection: React.FC = () => (
  <section id="how-it-works" className="bg-white border-t border-black/[0.06]" aria-labelledby="how-heading">
    <div className="section-container section-py">

      {/* Header */}
      <div className="text-center max-w-2xl mx-auto mb-16">
        <motion.p initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} className="t-label text-black/40 mb-4 eyebrow justify-center">
          Workflow
        </motion.p>
        <motion.h2 id="how-heading"
          initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ delay: 0.07 }}
          className="t-headline text-black mb-5"
          style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
          Live in four steps
        </motion.h2>
        <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
          viewport={{ once: true }} transition={{ delay: 0.14 }}
          className="t-body-lg">
          From camera connection to real-time alerts — an end-to-end AI pipeline that runs automatically.
        </motion.p>
      </div>

      {/* 4-col step grid — full width */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {HOW_IT_WORKS_STEPS.map((step, i) => {
          const Icon = iconMap[step.icon];
          return (
            <motion.div key={step.step}
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ delay: i * 0.08 }}
              className="card group bg-white flex flex-col gap-5 relative overflow-hidden">
              {/* Step connector line (desktop) */}
              {i < HOW_IT_WORKS_STEPS.length - 1 && (
                <div className="hidden lg:block absolute top-[44px] left-full w-6 h-px bg-black/[0.08] z-10" aria-hidden="true" />
              )}
              {/* Step number */}
              <div className="flex items-center justify-between">
                <div className="w-11 h-11 rounded-xl bg-black/[0.04] flex items-center justify-center group-hover:bg-black/[0.07] transition-colors">
                  {Icon && <Icon className="w-5 h-5 text-black/65" />}
                </div>
                <span className="text-[11px] font-bold text-black/20 tabular-nums tracking-wider">
                  {String(i + 1).padStart(2, '0')}
                </span>
              </div>
              <div>
                <h3 className="text-[15px] font-semibold text-black mb-2 leading-snug">{step.title}</h3>
                <p className="t-body text-[13.5px]">{step.description}</p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  </section>
);
