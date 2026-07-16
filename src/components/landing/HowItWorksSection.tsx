import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Video, Brain, ScanSearch, Bell } from 'lucide-react';
import { HOW_IT_WORKS_STEPS } from '@/constants';

const iconMap: Record<string, React.FC<{ className?: string }>> = {
  Video,
  Brain,
  ScanSearch,
  Bell
};

export const HowItWorksSection: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section id="how-it-works" className="py-24 lg:py-40 bg-[var(--bg-0)] border-b border-[var(--border)]" aria-labelledby="how-heading">
      <div className="enterprise-container">
        
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            id="how-heading"
            className="text-section-title mb-6"
          >
            How VisionGuard Works
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.1 }}
            className="text-desc"
          >
            A powerful AI vision system that adapts to how your factory works. Connect once, detect everywhere.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-center">
          
          {/* Left: Interactive Timeline Steps */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            {HOW_IT_WORKS_STEPS.map((step, index) => {
              const Icon = iconMap[step.icon] || Video;
              const isActive = activeStep === index;
              
              return (
                <button
                  key={step.title}
                  onClick={() => setActiveStep(index)}
                  className={`flex items-start gap-6 p-6 rounded-2xl transition-all text-left border ${
                    isActive 
                      ? 'bg-[var(--bg-1)] border-[var(--border-strong)] shadow-sm' 
                      : 'bg-transparent border-transparent hover:bg-[var(--bg-1)]/50'
                  }`}
                >
                  <div className={`w-12 h-12 shrink-0 rounded-full flex items-center justify-center transition-colors ${
                    isActive ? 'bg-[var(--text-1)] text-white shadow-md' : 'bg-[var(--bg-2)] text-[var(--text-3)]'
                  }`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className={`text-[18px] font-bold mb-2 transition-colors ${isActive ? 'text-[var(--text-1)]' : 'text-[var(--text-2)]'}`}>
                      {step.title}
                    </h4>
                    <p className={`text-[15px] transition-colors ${isActive ? 'text-[var(--text-2)]' : 'text-[var(--text-3)]'}`}>
                      {step.description}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>
          
          {/* Right: Dynamic Visual representation */}
          <div className="lg:col-span-7 relative h-[400px] md:h-[500px]">
            <div className="absolute inset-0 bg-[var(--bg-1)] rounded-[32px] border border-[var(--border)] overflow-hidden shadow-2xl flex items-center justify-center">
              
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeStep}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.05 }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                  className="w-full h-full p-8 flex flex-col items-center justify-center relative"
                >
                  {/* Dynamic Abstract Visual Based on Step */}
                  <div className="absolute inset-0 bg-mesh-gradient opacity-50 z-0"></div>
                  
                  <div className="z-10 bg-white/80 backdrop-blur-md border border-[var(--border)] rounded-2xl p-8 shadow-lg max-w-sm w-full flex flex-col items-center text-center">
                    
                    {activeStep === 0 && (
                       <>
                         <Video className="w-16 h-16 text-blue-500 mb-6" />
                         <h5 className="font-bold text-[18px] mb-2">Connecting Streams...</h5>
                         <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
                           <motion.div initial={{ width: 0 }} animate={{ width: "100%" }} transition={{ duration: 2, repeat: Infinity }} className="h-full bg-blue-500 rounded-full" />
                         </div>
                       </>
                    )}
                    
                    {activeStep === 1 && (
                       <>
                         <Brain className="w-16 h-16 text-purple-500 mb-6" />
                         <h5 className="font-bold text-[18px] mb-2">Processing via Edge AI</h5>
                         <div className="flex gap-2 justify-center">
                           {[1,2,3,4].map(i => (
                             <motion.div key={i} animate={{ height: [10, 40, 10] }} transition={{ duration: 1, repeat: Infinity, delay: i * 0.1 }} className="w-2 bg-purple-500 rounded-full" />
                           ))}
                         </div>
                       </>
                    )}

                    {activeStep === 2 && (
                       <>
                         <ScanSearch className="w-16 h-16 text-emerald-500 mb-6" />
                         <h5 className="font-bold text-[18px] mb-2">Analyzing Frames</h5>
                         <div className="relative w-full h-32 bg-gray-50 border border-gray-100 rounded-lg flex items-center justify-center">
                            <motion.div 
                              animate={{ top: ['0%', '100%', '0%'] }} 
                              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                              className="absolute left-0 right-0 h-0.5 bg-emerald-500/50 shadow-[0_0_8px_rgba(16,185,129,0.8)]" 
                            />
                            <span className="text-[12px] font-bold text-emerald-600">99.8% CONFIDENCE</span>
                         </div>
                       </>
                    )}

                    {activeStep === 3 && (
                       <>
                         <Bell className="w-16 h-16 text-amber-500 mb-6" />
                         <h5 className="font-bold text-[18px] mb-2">Alert Triggered</h5>
                         <div className="bg-amber-50 border border-amber-200 text-amber-700 px-4 py-2 rounded-lg text-[14px] font-medium w-full shadow-sm">
                           Slack: Defect detected on Line 4
                         </div>
                       </>
                    )}
                    
                  </div>
                </motion.div>
              </AnimatePresence>
              
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};
