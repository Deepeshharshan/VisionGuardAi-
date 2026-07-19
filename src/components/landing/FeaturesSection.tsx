import React from 'react';
import { motion } from 'framer-motion';
import { Car, Cpu, Package } from 'lucide-react';

const industries = [
  {
    id: 'automotive',
    icon: Car,
    title: 'Automotive Manufacturing',
    desc: 'Detect surface scratches on chassis, verify paint uniformity, and validate robotic weld integrity at 60 FPS.',
    metric: '99.8%',
    metricLabel: 'Weld Defect Detection'
  },
  {
    id: 'semiconductor',
    icon: Cpu,
    title: 'Semiconductor Fabrication',
    desc: 'Identify microscopic particle contamination and wafer alignment errors within sterile cleanroom environments.',
    metric: '0.1μm',
    metricLabel: 'Resolution Accuracy'
  },
  {
    id: 'logistics',
    icon: Package,
    title: 'Global Logistics',
    desc: 'Track high-velocity barcode scans, verify volumetric packaging limits, and identify damaged parcels on conveyors.',
    metric: '12ms',
    metricLabel: 'Inference Speed'
  }
];

export const FeaturesSection: React.FC = () => {
  return (
    <section id="ecosystem" className="py-32 bg-black border-b border-white/5" aria-label="Supported Industries">
      <div className="enterprise-container">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-24">
          <h2 className="text-[20px] md:text-[24px] font-bold text-zinc-500 tracking-tight uppercase mb-4">Enterprise Ecosystem</h2>
          <p className="text-white text-[32px] md:text-[48px] font-bold tracking-tighter leading-[1.1]">
            Trusted by the world's most demanding production lines.
          </p>
        </div>

        {/* Industry Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {industries.map((ind, i) => {
            const Icon = ind.icon;
            return (
              <motion.div 
                key={ind.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-[#0a0a0a] border border-white/10 p-8 rounded-xl flex flex-col h-full hover:border-zinc-700 transition-colors"
              >
                <div className="w-12 h-12 bg-white text-black flex items-center justify-center rounded-lg mb-8">
                  <Icon className="w-6 h-6" />
                </div>
                
                <h3 className="text-[20px] font-semibold text-white mb-4">{ind.title}</h3>
                <p className="text-[15px] text-zinc-400 leading-relaxed mb-8 flex-1">
                  {ind.desc}
                </p>
                
                <div className="pt-6 border-t border-white/10 mt-auto">
                  <div className="font-mono text-[32px] font-semibold text-emerald-500 mb-1">{ind.metric}</div>
                  <div className="text-[11px] font-bold text-zinc-500 uppercase tracking-widest">{ind.metricLabel}</div>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Logo Banner (Monochrome, Minimal) */}
        <div className="mt-24 pt-12 border-t border-white/5">
          <p className="text-center text-[11px] font-bold text-zinc-600 uppercase tracking-widest mb-8">Deploying across tier-1 infrastructure</p>
          <div className="flex flex-wrap justify-center gap-12 md:gap-24 opacity-40 grayscale">
            {/* Using text as placeholder logos for extreme minimalism */}
            <span className="text-xl font-bold tracking-tighter font-sans">SIEMENS</span>
            <span className="text-xl font-bold tracking-tighter font-sans">ABB</span>
            <span className="text-xl font-bold tracking-tighter font-sans">BOSCH</span>
            <span className="text-xl font-bold tracking-tighter font-sans">NVIDIA</span>
            <span className="text-xl font-bold tracking-tighter font-sans">AWS</span>
          </div>
        </div>

      </div>
    </section>
  );
};
