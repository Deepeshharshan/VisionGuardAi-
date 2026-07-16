import React from 'react';
import { motion } from 'framer-motion';
import { ScanSearch, ShieldCheck, Activity } from 'lucide-react';

const largeFeatures = [
  {
    id: 'f1',
    icon: ScanSearch,
    tag: 'Real-Time Inference',
    title: 'Spot micro-defects instantly.',
    desc: 'Our neural networks process streams directly at the edge. Identify scratches, dimensional errors, and packaging faults down to 0.1mm before they leave the assembly line.',
    bg: 'bg-[var(--bg-0)]',
    reverse: false,
    mockupBg: 'bg-gradient-to-br from-blue-50 to-blue-100',
    mockupColor: 'text-blue-600',
    mockupLabel: '99.8% Precision'
  },
  {
    id: 'f2',
    icon: Activity,
    tag: 'Predictive Maintenance',
    title: 'Predict failures before they happen.',
    desc: 'VisionGuard constantly analyzes mechanical rhythms, thermal signatures, and vibrations. Receive intelligent alerts weeks before a machine halts production.',
    bg: 'bg-[var(--bg-1)]',
    reverse: true,
    mockupBg: 'bg-gradient-to-br from-amber-50 to-amber-100',
    mockupColor: 'text-amber-600',
    mockupLabel: 'Alert: Vibration anomaly'
  },
  {
    id: 'f3',
    icon: ShieldCheck,
    tag: 'Workplace Safety',
    title: 'Automate compliance and safety.',
    desc: 'Instantly detect PPE violations, unauthorized access to restricted zones, and hazardous behavior without human monitoring.',
    bg: 'bg-[var(--bg-0)]',
    reverse: false,
    mockupBg: 'bg-gradient-to-br from-emerald-50 to-emerald-100',
    mockupColor: 'text-emerald-600',
    mockupLabel: 'Zone Secure'
  }
];

export const FeaturesSection: React.FC = () => {
  return (
    <section id="features" aria-labelledby="features-heading">
      <div className="sr-only" id="features-heading">Core Features</div>
      
      {largeFeatures.map((f, i) => {
        const Icon = f.icon;
        return (
          <div key={f.id} className={`${f.bg} py-24 lg:py-32 border-b border-[var(--border)] overflow-hidden`}>
            <div className="enterprise-container">
              <div className={`flex flex-col gap-12 lg:gap-24 items-center ${f.reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'}`}>
                
                {/* Text Content */}
                <div className="flex-1 max-w-xl">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                  >
                    <div className="flex items-center gap-2 mb-6">
                      <div className="w-10 h-10 rounded-lg bg-white border border-[var(--border)] flex items-center justify-center shadow-sm">
                        <Icon className="w-5 h-5 text-[var(--text-1)]" />
                      </div>
                      <span className="text-[12px] font-semibold tracking-wider uppercase text-[var(--text-3)]">{f.tag}</span>
                    </div>
                    
                    <h2 className="text-section-title mb-6">{f.title}</h2>
                    <p className="text-desc text-[18px] mb-8">{f.desc}</p>
                    
                    <button className="text-[15px] font-medium text-[var(--text-1)] hover:text-[var(--text-2)] flex items-center gap-1 transition-colors group">
                      Explore capability 
                      <span className="group-hover:translate-x-1 transition-transform">→</span>
                    </button>
                  </motion.div>
                </div>
                
                {/* Visual Mockup */}
                <div className="flex-1 w-full relative perspective-wrapper">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95, rotateY: f.reverse ? -5 : 5 }}
                    whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className={`relative w-full aspect-[4/3] rounded-[24px] ${f.mockupBg} border border-[var(--border)] shadow-xl overflow-hidden flex items-center justify-center`}
                  >
                    {/* Abstract UI representation */}
                    <div className="absolute inset-4 bg-white/60 backdrop-blur-md rounded-[16px] border border-white/50 shadow-sm p-6 flex flex-col justify-between">
                      <div className="flex justify-between items-center border-b border-black/5 pb-4">
                         <div className="flex gap-2">
                           <div className="w-3 h-3 rounded-full bg-red-400"></div>
                           <div className="w-3 h-3 rounded-full bg-amber-400"></div>
                           <div className="w-3 h-3 rounded-full bg-green-400"></div>
                         </div>
                         <div className={`px-3 py-1 rounded-full bg-white font-medium text-[12px] shadow-sm ${f.mockupColor}`}>
                           {f.mockupLabel}
                         </div>
                      </div>
                      <div className="flex-1 mt-4 rounded-lg bg-black/5 border border-black/5 flex items-center justify-center relative overflow-hidden">
                        <Icon className={`w-16 h-16 ${f.mockupColor} opacity-20`} />
                        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9InJnYmEoMCwwLDAsMC4wNSkiLz48L3N2Zz4=')] opacity-50" />
                      </div>
                    </div>
                  </motion.div>
                </div>
                
              </div>
            </div>
          </div>
        );
      })}
    </section>
  );
};
