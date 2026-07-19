import React from 'react';
import { motion } from 'framer-motion';
import { Network, Cpu, ShieldAlert } from 'lucide-react';

const pipelineSteps = [
  {
    id: 'edge-ingestion',
    title: 'Edge Ingestion',
    desc: 'Raw 4K camera streams are captured directly at the manufacturing line and routed to localized VisionGuard nodes without touching the cloud.',
    icon: <Network className="w-6 h-6 text-white" />,
    mockup: (
      <div className="w-full h-full bg-[#0a0a0a] border border-white/10 rounded-xl overflow-hidden flex flex-col font-mono text-[10px]">
        <div className="border-b border-white/10 p-3 bg-black flex justify-between items-center text-zinc-500">
          <span>LOCAL_NODE_01</span>
          <span className="text-emerald-500 flex items-center gap-1"><span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse"></span> ONLINE</span>
        </div>
        <div className="p-4 flex flex-col gap-2 text-zinc-400 flex-1">
          <div className="flex justify-between"><span>Stream_A</span><span className="text-white">60 FPS / 4K</span></div>
          <div className="flex justify-between"><span>Stream_B</span><span className="text-white">60 FPS / 4K</span></div>
          <div className="flex justify-between"><span>Stream_C</span><span className="text-white">30 FPS / 1080p</span></div>
          <div className="mt-auto pt-4 border-t border-white/5">
            <div className="flex justify-between text-zinc-500 mb-1"><span>Total Bandwidth</span><span>2.4 Gbps</span></div>
            <div className="w-full h-1 bg-white/10 rounded overflow-hidden"><div className="w-[80%] h-full bg-white"></div></div>
          </div>
        </div>
      </div>
    )
  },
  {
    id: 'neural-processing',
    title: 'Neural Processing',
    desc: 'Proprietary spatial models analyze each frame for micro-fractures, dimensional errors, and thermal anomalies in under 12 milliseconds.',
    icon: <Cpu className="w-6 h-6 text-white" />,
    mockup: (
      <div className="w-full h-full bg-[#0a0a0a] border border-white/10 rounded-xl overflow-hidden flex flex-col font-mono text-[10px]">
        <div className="border-b border-white/10 p-3 bg-black flex justify-between items-center text-zinc-500">
          <span>INFERENCE_ENGINE</span>
          <span className="text-white">12.4ms LATENCY</span>
        </div>
        <div className="p-4 flex-1 flex flex-col justify-center gap-4">
           {/* Abstract Neural processing visualization */}
           <div className="flex justify-between items-end h-16 gap-1 px-4">
             {Array.from({length: 12}).map((_, i) => (
               <div key={i} className="w-full bg-emerald-500/20 rounded-sm relative overflow-hidden" style={{ height: `${Math.max(20, Math.random() * 100)}%` }}>
                 <div className="absolute bottom-0 left-0 w-full bg-emerald-500" style={{ height: `${Math.random() * 60}%` }}></div>
               </div>
             ))}
           </div>
           <div className="text-center text-emerald-500 font-bold">99.98% CONFIDENCE</div>
        </div>
      </div>
    )
  },
  {
    id: 'automated-dispatch',
    title: 'Automated Dispatch',
    desc: 'Critical anomalies trigger immediate physical line halts and dispatch structured telemetry to enterprise dashboards before failure occurs.',
    icon: <ShieldAlert className="w-6 h-6 text-white" />,
    mockup: (
      <div className="w-full h-full bg-red-950/20 border border-red-500/20 rounded-xl overflow-hidden flex flex-col font-mono text-[10px]">
        <div className="border-b border-red-500/20 p-3 bg-red-950/50 flex justify-between items-center text-red-500">
          <span>CRITICAL_ALERT</span>
          <span className="animate-pulse">ACTION_REQUIRED</span>
        </div>
        <div className="p-4 flex-1 text-red-400">
          <div className="mb-2 text-white font-bold">Axis B Vibration Anomaly</div>
          <div className="opacity-70 mb-4">Deviation from nominal harmonics detected. Estimated failure in 4h.</div>
          <div className="bg-red-500/10 border border-red-500/20 p-2 rounded text-center text-red-500 font-bold">
            LINE_HALT_INITIATED
          </div>
        </div>
      </div>
    )
  }
];

export const HowItWorksSection: React.FC = () => {
  return (
    <section className="bg-[#050505] overflow-hidden border-y border-white/5 relative" aria-label="Architecture Pipeline">
      
      {/* Intro Header */}
      <div className="enterprise-container pt-24 lg:pt-32 pb-12 relative z-20">
        <h2 className="text-[20px] md:text-[24px] font-bold text-zinc-500 tracking-tight uppercase">System Architecture</h2>
      </div>

      <div className="flex flex-col relative z-10">
        {pipelineSteps.map((step, index) => (
          <div 
            key={step.id} 
            className="enterprise-container py-16 lg:py-24 relative"
          >
            <div className={`w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
              
              {/* Text Content */}
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className={`flex flex-col z-10 ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}
              >
                <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center mb-8 border border-white/5">
                  {step.icon}
                </div>
                
                <div className="text-[12px] font-bold text-zinc-500 uppercase tracking-widest mb-4">Phase 0{index + 1}</div>
                
                <h3 className="text-[32px] md:text-[48px] font-bold text-white leading-tight tracking-tighter mb-6">
                  {step.title}
                </h3>
                
                <p className="text-[18px] text-zinc-400 max-w-md leading-relaxed">
                  {step.desc}
                </p>

              </motion.div>

              {/* UI Mockup */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
                className={`w-full aspect-[4/3] relative z-10 ${index % 2 === 1 ? 'lg:col-start-1' : ''}`}
              >
                {step.mockup}
              </motion.div>

            </div>
            
            {/* Massive background number */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[200px] lg:text-[400px] font-bold text-white/[0.02] leading-none pointer-events-none select-none font-mono">
              0{index + 1}
            </div>

            {/* Connecting Vertical Line to next section */}
            {index < pipelineSteps.length - 1 && (
              <div className="absolute bottom-0 left-12 lg:left-1/2 lg:-translate-x-1/2 h-16 lg:h-32 w-px bg-gradient-to-b from-white/10 to-transparent"></div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};
