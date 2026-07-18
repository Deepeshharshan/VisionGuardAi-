import React from 'react';
import { motion } from 'framer-motion';
import { ScanSearch, Activity, ShieldCheck, ArrowRight } from 'lucide-react';

export const KeyBenefitsSection: React.FC = () => {
  return (
    <div id="benefits" className="bg-[var(--bg-0)] flex flex-col">
      
      {/* Benefit 1: Real-time Inference (Heroic Left-Align + Right Abstract) */}
      <section className="py-24 lg:py-32 border-b border-[var(--border)] overflow-hidden">
        <div className="enterprise-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              className="max-w-xl"
            >
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 rounded-xl bg-[var(--bg-1)] border border-[var(--border)] flex items-center justify-center">
                  <ScanSearch className="w-6 h-6 text-[var(--text-1)]" />
                </div>
                <span className="text-caption text-[var(--text-2)]">Real-Time Inference</span>
              </div>
              
              <h2 className="text-section-title mb-6">Spot micro-defects instantly.</h2>
              <p className="text-desc mb-10">
                Our neural networks process streams directly at the edge. Identify scratches, dimensional errors, and packaging faults down to 0.1mm before they leave the assembly line.
              </p>
              
              <a href="#" className="inline-flex items-center text-[15px] font-semibold text-[var(--text-1)] group hover:text-[var(--text-2)] transition-colors">
                Explore Vision Capabilities
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              className="relative w-full aspect-square md:aspect-[4/3] bg-gradient-to-br from-blue-50 to-indigo-50 rounded-[32px] border border-[var(--border)] shadow-xl overflow-hidden flex items-center justify-center p-8"
            >
              <div className="w-full h-full bg-white/50 backdrop-blur-sm rounded-[24px] border border-white flex flex-col">
                <div className="h-12 border-b border-black/5 flex items-center px-6 gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-400"></div>
                  <div className="w-3 h-3 rounded-full bg-amber-400"></div>
                  <div className="w-3 h-3 rounded-full bg-green-400"></div>
                </div>
                <div className="flex-1 relative flex items-center justify-center p-4">
                  {/* Image feed mockup */}
                  <div className="relative w-full h-full rounded-xl overflow-hidden bg-gray-900 border border-black/10 shadow-inner">
                    {/* Valid CSS placeholder instead of broken image */}
                    <div className="w-full h-full bg-slate-800 opacity-80 mix-blend-luminosity">
                      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTQwIDBIMFY0MGg0MFYweiIgZmlsbD0ibm9uZSIvPjxwYXRoIGQ9Ik0wIDAuNWg0MCIgc3Ryb2tlPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMDUpIi8+PHBhdGggZD0iTTAuNSAwdi00MCIgc3Ryb2tlPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMDUpIi8+PC9zdmc+')]"></div>
                    </div>
                    
                    {/* Abstract bounding box */}
                    <div className="absolute top-[20%] left-[30%] border-[2px] border-red-500 bg-red-500/20 w-40 h-40 rounded shadow-[0_0_15px_rgba(239,68,68,0.5)] flex items-center justify-center">
                      <div className="w-2 h-2 rounded-full bg-red-500 animate-ping"></div>
                      <div className="absolute -top-6 left-0 bg-red-500 text-white text-[10px] font-bold px-2 py-1 rounded flex items-center gap-1">
                        <span className="w-1.5 h-1.5 bg-white rounded-full animate-pulse"></span>
                        SURFACE_SCRATCH 99.8%
                      </div>
                    </div>
                    
                    {/* UI Overlay */}
                    <div className="absolute bottom-4 left-4 bg-black/60 backdrop-blur-md rounded border border-white/10 px-3 py-2">
                      <div className="text-[10px] text-gray-400 font-mono mb-1">CAM_04_ASSEMBLY</div>
                      <div className="flex gap-4">
                        <div className="text-white text-xs font-semibold">FPS: <span className="text-green-400">60</span></div>
                        <div className="text-white text-xs font-semibold">LATENCY: <span className="text-green-400">12ms</span></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefit 2: Predictive Maintenance (Centered massive visual) */}
      <section className="py-24 lg:py-32 bg-[var(--bg-1)] border-b border-[var(--border)] overflow-hidden">
        <div className="enterprise-container text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="max-w-3xl mx-auto mb-16"
          >
            <div className="flex items-center justify-center gap-3 mb-8">
              <div className="w-12 h-12 rounded-xl bg-white border border-[var(--border)] flex items-center justify-center shadow-sm">
                <Activity className="w-6 h-6 text-[var(--text-1)]" />
              </div>
              <span className="text-caption text-[var(--text-2)]">Predictive Maintenance</span>
            </div>
            <h2 className="text-section-title mb-6">Predict failures before they happen.</h2>
            <p className="text-desc max-w-2xl mx-auto">
              VisionGuard constantly analyzes mechanical rhythms, thermal signatures, and vibrations. Receive intelligent alerts weeks before a machine halts production.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="relative w-full max-w-5xl mx-auto aspect-[21/9] bg-white rounded-[32px] border border-[var(--border)] shadow-[0_4px_24px_rgba(0,0,0,0.04)] overflow-hidden"
          >
             {/* Abstract Grid */}
             <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTQwIDBIMFY0MGg0MFYweiIgZmlsbD0ibm9uZSIvPjxwYXRoIGQ9Ik0wIDAuNWg0MCIgc3Ryb2tlPSJyZ2JhKDAsMCwwLDAuMDQpIi8+PHBhdGggZD0iTTAuNSAwdi00MCIgc3Ryb2tlPSJyZ2JhKDAsMCwwLDAuMDQpIi8+PC9zdmc+')] opacity-100" />
             
             {/* Modern Line Chart */}
             <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none" viewBox="0 0 1000 300">
               <defs>
                 <linearGradient id="chartGradient" x1="0" y1="0" x2="0" y2="1">
                   <stop offset="0%" stopColor="var(--text-1)" stopOpacity="0.1" />
                   <stop offset="100%" stopColor="var(--text-1)" stopOpacity="0" />
                 </linearGradient>
               </defs>
               
               {/* Threshold Line */}
               <line x1="0" y1="80" x2="1000" y2="80" stroke="var(--red)" strokeWidth="2" strokeDasharray="6 6" opacity="0.4" />
               <text x="16" y="70" fill="var(--red)" fontSize="12" fontWeight="bold" opacity="0.6">CRITICAL THRESHOLD</text>
               
               {/* Data Path Area */}
               <path d="M 0 250 C 100 220, 200 240, 300 200 C 400 160, 500 210, 600 150 C 700 90, 800 120, 900 50 L 1000 40 L 1000 300 L 0 300 Z" fill="url(#chartGradient)" />
               
               {/* Data Path Line */}
               <path d="M 0 250 C 100 220, 200 240, 300 200 C 400 160, 500 210, 600 150 C 700 90, 800 120, 900 50 L 1000 40" fill="none" stroke="var(--text-1)" strokeWidth="3" />
               
               {/* Anomaly Marker */}
               <circle cx="900" cy="50" r="6" fill="var(--red)" className="origin-center animate-pulse" />
               <circle cx="900" cy="50" r="16" fill="var(--red)" opacity="0.2" className="origin-center animate-ping" />
             </svg>
             
             {/* Alert tooltip UI */}
             <div className="absolute top-[20%] right-[15%] bg-white p-4 rounded-xl shadow-lg border border-[var(--border)] text-left z-10 min-w-[200px]">
               <div className="flex justify-between items-center mb-2">
                 <div className="text-[11px] font-bold text-red-600 bg-red-50 px-2 py-1 rounded">ANOMALY DETECTED</div>
                 <span className="text-[11px] text-[var(--text-3)] font-mono">99%</span>
               </div>
               <div className="text-[14px] font-semibold text-[var(--text-1)]">Motor #4 Alignment</div>
               <div className="text-[12px] text-[var(--text-2)] mt-1">Expected failure in 4h</div>
             </div>
          </motion.div>
        </div>
      </section>

      {/* Benefit 3: Workplace Safety (Offset Text over Image) */}
      <section className="pt-24 lg:pt-32 pb-16 lg:pb-24 bg-[var(--text-1)] text-white overflow-hidden relative">
        
        <div className="enterprise-container relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              className="max-w-xl"
            >
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center border border-white/10">
                  <ShieldCheck className="w-6 h-6 text-white" />
                </div>
                <span className="text-caption text-gray-400">Workplace Safety</span>
              </div>
              
              <h2 className="text-section-title text-white mb-6">Automate compliance and safety.</h2>
              <p className="text-desc text-gray-300 mb-10">
                Instantly detect PPE violations, unauthorized access to restricted zones, and hazardous behavior without human monitoring. Protect your workforce autonomously.
              </p>
              
              <a href="#" className="inline-flex items-center text-[15px] font-semibold text-white group hover:text-gray-300 transition-colors">
                View Safety Controls
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              className="relative w-full aspect-[4/3] rounded-[32px] overflow-hidden border border-white/10"
            >
              <motion.div 
                animate={{ 
                  backgroundPosition: ['0% 0%', '100% 100%', '0% 100%', '100% 0%', '0% 0%'],
                }}
                transition={{ 
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear"
                }}
                className="absolute inset-0 opacity-40 mix-blend-luminosity" 
                style={{
                  backgroundImage: 'radial-gradient(circle at 20% 30%, rgba(99, 102, 241, 0.4) 0%, transparent 50%), radial-gradient(circle at 80% 70%, rgba(139, 92, 246, 0.4) 0%, transparent 50%)',
                  backgroundSize: '200% 200%'
                }}
              />
              
              {/* Natural embedded alert card */}
              <div className="absolute bottom-8 right-8 bg-black/60 backdrop-blur-xl border border-white/10 p-5 rounded-2xl max-w-sm shadow-2xl">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-red-500/20 border border-red-500/50 flex items-center justify-center shrink-0">
                    <ShieldCheck className="w-5 h-5 text-red-500" />
                  </div>
                  <div>
                    <h4 className="text-[14px] font-semibold text-white mb-1">PPE Violation Detected</h4>
                    <p className="text-[13px] text-gray-300 leading-relaxed">
                      Missing safety helmet in Zone B restricted area. Automated alert dispatched to floor manager.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
            
          </div>
        </div>
      </section>

    </div>
  );
};
