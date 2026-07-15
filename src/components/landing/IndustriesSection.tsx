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
  <section id="industries" className="bg-[var(--bg-0)] border-t border-[var(--border)]" aria-labelledby="ind-heading">
    <div className="enterprise-container py-[80px] lg:py-[100px]">

      {/* Header — left aligned with right description */}
      <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-14">
        <div className="max-w-lg">
          <motion.p initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} className="mono text-[var(--text-3)] text-[11px] mb-4 uppercase tracking-[0.18em]">
            Industry Solutions
          </motion.p>
          <motion.h2 id="ind-heading"
            initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ delay: 0.07 }}
            className="text-[28px] md:text-[36px] font-[600] tracking-tight text-[var(--text-1)]"
            style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
            Purpose-built for your industry
          </motion.h2>
        </div>
        <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
          viewport={{ once: true }} transition={{ delay: 0.14 }}
          className="text-[15px] text-[var(--text-2)] max-w-sm lg:text-right leading-[1.6]">
          Pre-trained AI models and industry-specific detection rules for six major manufacturing verticals.
        </motion.p>
      </div>

      {/* 3-col grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {INDUSTRIES.map((ind, i) => {
          const Icon = iconMap[ind.icon];
          return (
            <motion.article key={ind.id}
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ delay: i * 0.06 }}
              className="vg-panel group flex flex-col cursor-pointer hover:border-[var(--signal)] transition-colors duration-300">
              <div className="w-10 h-10 rounded bg-[var(--bg-2)] border border-[var(--border)] flex items-center justify-center mb-5 group-hover:border-[var(--signal)] transition-colors">
                {Icon && <Icon className="w-4.5 h-4.5 text-[var(--text-1)]" />}
              </div>
              <h3 className="text-[14px] font-[500] text-[var(--text-1)] mb-2">{ind.title}</h3>
              <p className="text-[13px] text-[var(--text-2)] leading-[1.6] flex-1">{ind.description}</p>
              <div className="mt-5 pt-4 border-t border-[var(--border)] flex items-center gap-1.5 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                <span className="mono text-[10px] text-[var(--signal)] uppercase tracking-[0.05em]">View use cases</span>
                <ArrowRight className="w-3.5 h-3.5 text-[var(--signal)] group-hover:translate-x-1 transition-transform" />
              </div>
            </motion.article>
          );
        })}
      </div>
    </div>
  </section>
);
