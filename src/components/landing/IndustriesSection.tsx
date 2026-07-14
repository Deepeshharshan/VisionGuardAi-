// ============================================================
// IndustriesSection — Full-width 3-col industry cards
// ============================================================
import React from 'react';
import { motion } from 'framer-motion';
import { Factory, Car, Layers, Package, Flame, CircuitBoard, ArrowRight } from 'lucide-react';
import { INDUSTRIES } from '@/constants';

type Icon = React.FC<{ className?: string }>;
const iconMap: Record<string, Icon> = {
  Factory: Factory as Icon, Car: Car as Icon, Layers: Layers as Icon,
  Package: Package as Icon, Flame: Flame as Icon, CircuitBoard: CircuitBoard as Icon,
};

export const IndustriesSection: React.FC = () => (
  <section id="industries" className="bg-[#F9FAFB] border-t border-black/[0.06]" aria-labelledby="ind-heading">
    <div className="section-container section-py">

      {/* Header — left aligned with right description */}
      <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-14">
        <div className="max-w-lg">
          <motion.p initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} className="t-label text-black/40 mb-4 eyebrow">
            Industry Solutions
          </motion.p>
          <motion.h2 id="ind-heading"
            initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ delay: 0.07 }}
            className="t-headline text-black"
            style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
            Purpose-built for your industry
          </motion.h2>
        </div>
        <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
          viewport={{ once: true }} transition={{ delay: 0.14 }}
          className="t-body max-w-sm text-black/50 lg:text-right">
          Pre-trained AI models and industry-specific detection rules for six major manufacturing verticals.
        </motion.p>
      </div>

      {/* 3-col grid — fills full container */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {INDUSTRIES.map((ind, i) => {
          const Icon = iconMap[ind.icon];
          return (
            <motion.article key={ind.id}
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ delay: i * 0.06 }}
              className="card group bg-white flex flex-col cursor-pointer hover:shadow-lg transition-all duration-300">
              <div className="w-10 h-10 rounded-xl bg-black/[0.04] flex items-center justify-center mb-5 group-hover:bg-black/[0.07] transition-colors">
                {Icon && <Icon className="w-5 h-5 text-black/60" />}
              </div>
              <h3 className="text-[15px] font-semibold text-black mb-2">{ind.title}</h3>
              <p className="t-body text-[13.5px] flex-1">{ind.description}</p>
              <div className="mt-5 pt-4 border-t border-black/[0.05] flex items-center gap-1.5
                              opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                <span className="text-[12px] font-semibold text-black/60">View use cases</span>
                <ArrowRight className="w-3.5 h-3.5 text-black/40 group-hover:translate-x-1 transition-transform" />
              </div>
            </motion.article>
          );
        })}
      </div>
    </div>
  </section>
);
