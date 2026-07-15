import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Lock, Eye, Zap, Server, Globe } from 'lucide-react';

const trustItems = [
  { icon: Shield,  title: 'SOC 2 Type II',       desc: 'Enterprise-grade security audit certified.' },
  { icon: Lock,    title: 'Data Sovereignty',     desc: 'No video data ever leaves your premises.' },
  { icon: Eye,     title: '99.2% Accuracy',       desc: 'Validated across 15+ industry deployments.' },
  { icon: Zap,     title: 'Sub-20ms Latency',     desc: 'Real-time edge inference on every frame.' },
  { icon: Server,  title: 'On-Premise Edge',      desc: 'Fully air-gapped, no cloud dependency.' },
  { icon: Globe,   title: 'Make in India',        desc: 'Built and supported entirely in India.' },
];

export const TrustedSection: React.FC = () => (
  <section className="bg-[var(--bg-0)] border-t border-[var(--border)]" aria-label="Trust and safety">
    <div className="enterprise-container py-[80px] lg:py-[100px]">

      {/* Header */}
      <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-14">
        <div>
          <motion.p initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} className="mono text-[var(--text-3)] text-[11px] mb-4 uppercase tracking-[0.18em]">
            Security & Compliance
          </motion.p>
          <motion.h2 initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ delay: 0.07 }}
            className="text-[28px] md:text-[36px] font-[600] tracking-tight text-[var(--text-1)]"
            style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
            Built for enterprise safety
          </motion.h2>
        </div>
        <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
          viewport={{ once: true }} transition={{ delay: 0.14 }}
          className="text-[15px] text-[var(--text-2)] max-w-sm lg:text-right">
          Every architectural decision made with data security and operational resilience as first priorities.
        </motion.p>
      </div>

      {/* 3-col grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {trustItems.map((item, i) => {
          const Icon = item.icon;
          return (
            <motion.div key={item.title}
              initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ delay: i * 0.06 }}
              className="vg-panel group flex items-start gap-4">
              <div className="w-10 h-10 rounded bg-[var(--bg-1)] border border-[var(--border)] flex items-center justify-center shrink-0 group-hover:border-[var(--border-strong)] transition-colors">
                <Icon className="w-4.5 h-4.5 text-[var(--text-3)]" />
              </div>
              <div>
                <h3 className="text-[14px] font-[500] text-[var(--text-1)] mb-1.5">{item.title}</h3>
                <p className="text-[13px] text-[var(--text-2)] leading-snug font-[400]">{item.desc}</p>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Compliance badge row */}
      <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
        viewport={{ once: true }} transition={{ delay: 0.3 }}
        className="flex flex-wrap items-center gap-3 mt-12 pt-8 border-t border-[var(--border)]">
        <span className="mono text-[11px] text-[var(--text-3)] mr-2 uppercase tracking-[0.05em]">Certifications:</span>
        {['SOC 2 Type II', 'ISO 27001', 'GDPR Compliant', 'Make in India'].map(cert => (
          <span key={cert}
            className="px-3 py-1 bg-[var(--bg-1)] border border-[var(--border)] rounded text-[11px] font-[500] text-[var(--text-2)] tracking-wide">
            {cert}
          </span>
        ))}
      </motion.div>
    </div>
  </section>
);
