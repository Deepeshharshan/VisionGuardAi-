import React from 'react';
import { motion } from 'framer-motion';

export const EcosystemSection: React.FC = () => {
  const integrations = [
    { name: 'SAP', color: 'bg-blue-600' },
    { name: 'Slack', color: 'bg-purple-500' },
    { name: 'AWS', color: 'bg-orange-500' },
    { name: 'Azure', color: 'bg-blue-500' },
    { name: 'Twilio', color: 'bg-red-500' },
    { name: 'Datadog', color: 'bg-purple-600' }
  ];

  return (
    <section className="py-16 lg:py-24 bg-[var(--bg-0)] border-b border-[var(--border)] overflow-hidden">
      <div className="enterprise-container flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
        
        <div className="w-full lg:w-1/2">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <div className="text-caption text-[var(--text-3)] mb-4">Integration Ecosystem</div>
            <h2 className="text-section-title mb-6">Works with your existing stack.</h2>
            <p className="text-desc mb-8">
              VisionGuard natively integrates with the tools your factory already uses. Sync defect logs to your ERP, alert managers via Slack, and stream data to your cloud provider without writing a single line of code.
            </p>
            <button className="vg-btn vg-btn-ghost border border-[var(--border)]">
              View All Integrations
            </button>
          </motion.div>
        </div>

        <div className="w-full lg:w-1/2 relative min-h-[400px] flex items-center justify-center">
          {/* Central Node */}
          <div className="absolute z-20 w-24 h-24 bg-black text-white rounded-2xl flex items-center justify-center font-bold text-3xl shadow-2xl shadow-black/20">
            VG
          </div>
          
          {/* Orbit rings */}
          <div className="absolute w-[280px] h-[280px] border border-[var(--border-strong)] rounded-full animate-[spin_30s_linear_infinite] opacity-40"></div>
          <div className="absolute w-[420px] h-[420px] border border-[var(--border)] rounded-full animate-[spin_40s_linear_infinite_reverse] opacity-40"></div>

          {/* Integration Nodes */}
          {integrations.map((item, i) => {
            const angle = (i * 360) / integrations.length;
            const radius = i % 2 === 0 ? 140 : 210;
            const x = Math.cos((angle * Math.PI) / 180) * radius;
            const y = Math.sin((angle * Math.PI) / 180) * radius;
            
            return (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * i }}
                className="absolute z-10 w-16 h-16 bg-white border border-[var(--border)] rounded-2xl shadow-sm flex items-center justify-center font-semibold text-[13px] text-[var(--text-1)]"
                style={{ transform: `translate(${x}px, ${y}px)` }}
              >
                {item.name}
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
