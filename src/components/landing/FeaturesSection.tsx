import React from 'react';
import { motion } from 'framer-motion';
import { ScanSearch, ShieldCheck, Activity, BarChart2, Zap, Camera } from 'lucide-react';

const features = [
  {
    icon: ScanSearch, tag: 'Vision AI',
    title: 'Real-time Anomaly Detection',
    desc: 'Spot micro-defects down to 0.1mm instantly using advanced neural networks on edge devices.'
  },
  {
    icon: ShieldCheck, tag: 'Safety',
    title: 'Workplace Safety Monitoring',
    desc: 'Automatically detect PPE compliance, restricted zone breaches, and dangerous behavioral patterns.'
  },
  {
    icon: Activity, tag: 'Predictive',
    title: 'Predictive Maintenance',
    desc: 'Analyze vibration, thermal, and visual data to predict machine failures before they halt production.'
  },
  {
    icon: BarChart2, tag: 'Analytics',
    title: 'Yield Optimization',
    desc: 'Track quality metrics across all assembly lines with centralized reporting and defect categorization.'
  },
  {
    icon: Zap, tag: 'Edge',
    title: 'Low-latency Edge Processing',
    desc: 'Process video feeds locally without sending sensitive factory data to the cloud. Sub-50ms latency.'
  },
  {
    icon: Camera, tag: 'Integration',
    title: 'Works with Existing Cameras',
    desc: 'No need for expensive hardware. VisionGuard integrates directly with your RTSP and ONVIF streams.'
  }
];

export const FeaturesSection: React.FC = () => {
  return (
    <section id="features" className="py-24 bg-[var(--bg-0)]" aria-labelledby="features-heading">
      <div className="enterprise-container">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            id="features-heading" 
            className="text-section-title mb-4"
          >
            Feature management that fits your workflow
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.1 }}
            className="text-desc text-[16px]"
          >
            Assign, prioritize, and monitor every camera with precision. VisionGuard helps teams ship faster by bringing structure to your quality process, without slowing you down.
          </motion.p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, i) => {
            const Icon = f.icon;
            return (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="vg-panel group"
              >
                <div className="p-8 h-full flex flex-col">
                  <div className="flex items-center justify-between mb-8">
                    <div className="w-12 h-12 rounded-[14px] bg-[var(--bg-2)] border border-[var(--border)] flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-6 h-6 text-[var(--signal)]" />
                    </div>
                    <span className="text-[11px] font-semibold text-[var(--text-2)] uppercase tracking-wider bg-[var(--bg-2)] px-2.5 py-1 rounded-full">{f.tag}</span>
                  </div>
                  
                  <div className="mt-auto">
                    <h3 className="text-[18px] font-semibold text-[var(--text-1)] mb-3">{f.title}</h3>
                    <p className="text-[14px] text-[var(--text-2)] leading-relaxed">{f.desc}</p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
