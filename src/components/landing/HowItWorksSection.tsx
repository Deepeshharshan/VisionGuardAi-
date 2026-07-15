import React from 'react';
import { motion } from 'framer-motion';
import { Video, Brain, ScanSearch, Bell } from 'lucide-react';
import { HOW_IT_WORKS_STEPS } from '@/constants';

const iconMap: Record<string, React.FC<{ className?: string }>> = {
  Video,
  Brain,
  ScanSearch,
  Bell
};

export const HowItWorksSection: React.FC = () => {
  return (
    <section id="how-it-works" className="py-24" aria-labelledby="how-heading">
      <div className="enterprise-container">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* Left Text Side */}
          <div className="max-w-md">
            <motion.h2 
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              id="how-heading"
              className="text-section-title mb-6"
            >
              Navigate your work <br />
              <span className="text-[var(--text-3)]">with clarity</span>
            </motion.h2>
            
            <motion.p 
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: 0.1 }}
              className="text-desc text-[16px] mb-12"
            >
              A powerful AI vision system that adapts to how your factory works. Simple, powerful, and built for clarity.
            </motion.p>
            
            <div className="flex flex-col gap-8">
              {HOW_IT_WORKS_STEPS.map((step, index) => {
                const Icon = iconMap[step.icon] || Video;
                return (
                  <motion.div 
                    key={step.title}
                    initial={{ opacity: 0, x: -15 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ delay: 0.1 * index }}
                    className="flex gap-4 group cursor-pointer"
                  >
                    <div className="w-12 h-12 rounded-[14px] bg-white border border-[var(--border)] shadow-sm flex items-center justify-center shrink-0 group-hover:border-[var(--signal)] group-hover:shadow-md transition-all">
                      <Icon className="w-5 h-5 text-[var(--text-1)] group-hover:text-[var(--signal)] transition-colors" />
                    </div>
                    <div>
                      <h4 className="text-[15px] font-semibold text-[var(--text-1)] mb-1">{step.title}</h4>
                      <p className="text-[14px] text-[var(--text-2)] leading-relaxed">{step.description}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
          
          {/* Right Visual Side - Overlapping Cards */}
          <div className="relative h-[600px] w-full hidden md:block">
            {/* Background subtle mesh */}
            <div className="absolute inset-0 bg-mesh-gradient opacity-30 rounded-[32px]" />
            
            {/* Front Card */}
            <motion.div 
              initial={{ opacity: 0, y: 30, rotate: -2 }}
              whileInView={{ opacity: 1, y: 0, rotate: -2 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7 }}
              className="absolute top-20 left-10 w-[340px] bg-white border border-[var(--border)] rounded-[20px] shadow-[0_8px_30px_-4px_rgba(0,0,0,0.08)] p-6 z-20"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="text-[12px] font-semibold text-[var(--signal)] bg-[var(--signal-dim)] px-2.5 py-1 rounded-full">New Defect</span>
                <span className="text-[12px] text-[var(--text-3)]">Just now</span>
              </div>
              <h4 className="text-[16px] font-semibold text-[var(--text-1)] mb-2">Scratch on Panel A3</h4>
              <p className="text-[13px] text-[var(--text-2)] mb-4">Vision model detected a 4cm surface scratch during quality inspection phase.</p>
              <div className="h-32 bg-[var(--bg-2)] rounded-lg mb-4 flex items-center justify-center overflow-hidden relative">
                <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9InJnYmEoMCwwLDAsMC4wNSkiLz48L3N2Zz4=')] opacity-50" />
                <div className="w-16 h-8 border border-[var(--red)] border-dashed rounded bg-[var(--red-dim)]" />
              </div>
              <button className="w-full bg-[var(--bg-2)] hover:bg-[var(--border)] transition-colors text-[13px] font-medium text-[var(--text-1)] py-2 rounded-lg">
                Review Incident
              </button>
            </motion.div>
            
            {/* Back Card */}
            <motion.div 
              initial={{ opacity: 0, y: 15, rotate: 4 }}
              whileInView={{ opacity: 1, y: 0, rotate: 4 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="absolute top-10 right-4 w-[300px] bg-white border border-[var(--border)] rounded-[20px] shadow-[0_4px_20px_-4px_rgba(0,0,0,0.06)] p-5 z-10"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-full bg-[var(--bg-2)] flex items-center justify-center">
                  <Brain className="w-5 h-5 text-[var(--text-2)]" />
                </div>
                <div>
                  <div className="text-[13px] font-semibold text-[var(--text-1)]">AI Model Training</div>
                  <div className="text-[11px] text-[var(--text-3)]">In progress...</div>
                </div>
              </div>
              
              <div className="space-y-3">
                <div className="h-2 w-full bg-[var(--bg-2)] rounded-full overflow-hidden">
                  <div className="h-full bg-[var(--signal)] w-[75%]" />
                </div>
                <div className="flex justify-between text-[11px] text-[var(--text-3)] font-medium">
                  <span>Epoch 42/50</span>
                  <span>75%</span>
                </div>
              </div>
            </motion.div>

          </div>
          
        </div>
      </div>
    </section>
  );
};
