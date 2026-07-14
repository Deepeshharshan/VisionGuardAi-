// ============================================================
// FeaturesSection — Full-width 3-column card grid
// ============================================================
import React from 'react';
import { motion } from 'framer-motion';
import { ScanSearch, ShieldCheck, Activity, BarChart2, Zap, Camera } from 'lucide-react';

const features = [
  {
    icon: ScanSearch, tag: 'Vision AI',
    title: 'Real-time Anomaly Detection',
    desc: 'Surface cracks, misalignments, and foreign objects detected at 30fps with 99.2% accuracy. Zero missed detections on your production line.',
  },
  {
    icon: Activity, tag: 'Predictive',
    title: 'Predictive Maintenance Alerts',
    desc: 'ML models trained on vibration and thermal patterns predict equipment failures 48–72 hours ahead. Fix on your schedule, not the machine\'s.',
  },
  {
    icon: Camera, tag: 'Infrastructure',
    title: 'Works with Existing CCTV',
    desc: 'No rip-and-replace. Connect via RTSP, ONVIF, or HTTP to any IP camera on your factory floor and be live in hours.',
  },
  {
    icon: ShieldCheck, tag: 'Quality',
    title: 'Automated Quality Inspection',
    desc: 'Per-unit defect classification with bounding-box annotations and confidence scores. Export directly to your quality management system.',
  },
  {
    icon: BarChart2, tag: 'Analytics',
    title: 'Production Analytics Dashboard',
    desc: 'Shift-level OEE tracking, defect rate trends, and machine health scores — consolidated in one real-time dashboard accessible anywhere.',
  },
  {
    icon: Zap, tag: 'Edge AI',
    title: 'On-Premise Edge Processing',
    desc: 'Deploy fully air-gapped on your edge hardware. No video data ever leaves your premises. Sub-20ms latency per frame, full data sovereignty.',
  },
];

export const FeaturesSection: React.FC = () => (
  <section id="features" className="bg-[#F9FAFB] border-t border-black/[0.06]" aria-labelledby="features-heading">
    <div className="section-container section-py">

      {/* Section header — centered, wide */}
      <div className="max-w-2xl mb-16">
        <motion.p initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} className="eyebrow t-label text-black/40 mb-4">
          Platform Capabilities
        </motion.p>
        <motion.h2 id="features-heading"
          initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ delay: 0.07 }}
          className="t-headline text-black mb-5"
          style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
          Built for industrial-scale monitoring
        </motion.h2>
        <motion.p initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ delay: 0.14 }}
          className="t-body-lg">
          Every capability engineered for real factory environments — high reliability,
          sub-20ms latency, and zero tolerance for missed detections.
        </motion.p>
      </div>

      {/* 3-column card grid — spans full container width */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((f, i) => {
          const Icon = f.icon;
          return (
            <motion.div key={f.title}
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }} transition={{ delay: i * 0.05 }}
              className="card group flex flex-col bg-white hover:shadow-lg transition-all duration-300">
              {/* Icon + Tag row */}
              <div className="flex items-start justify-between mb-6">
                <div className="w-10 h-10 rounded-xl bg-black/[0.04] flex items-center justify-center group-hover:bg-black/[0.07] transition-colors">
                  <Icon className="w-5 h-5 text-black/65" />
                </div>
                <span className="tag">{f.tag}</span>
              </div>
              <h3 className="text-[15px] font-semibold text-black mb-3 leading-snug">{f.title}</h3>
              <p className="t-body flex-1">{f.desc}</p>
            </motion.div>
          );
        })}
      </div>
    </div>
  </section>
);
