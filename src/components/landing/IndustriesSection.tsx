import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Factory, Car, Layers, Package, Flame, CircuitBoard, ArrowRight } from 'lucide-react';
import { INDUSTRIES } from '@/constants';

type Icon = React.FC<{ className?: string }>;
const iconMap: Record<string, Icon> = {
  Factory: Factory as Icon, Car: Car as Icon, Layers: Layers as Icon,
  Package: Package as Icon, Flame: Flame as Icon, CircuitBoard: CircuitBoard as Icon,
};

export const IndustrySolutionsSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section id="industries" className="bg-[var(--bg-1)] py-24 lg:py-40 border-b border-[var(--border)]" aria-labelledby="ind-heading">
      <div className="enterprise-container">
        
        <div className="max-w-2xl mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-[12px] font-semibold tracking-[0.1em] uppercase text-[var(--text-3)] mb-4"
          >
            Industry Solutions
          </motion.div>
          <motion.h2 
            id="ind-heading"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.1 }}
            className="text-section-title mb-6"
          >
            Purpose-built for your vertical.
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.2 }}
            className="text-desc"
          >
            Pre-trained models mapped directly to the failure modes and safety regulations of major manufacturing sectors.
          </motion.p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-24">
          
          {/* Vertical Tabs */}
          <div className="w-full lg:w-1/3 flex flex-col gap-2">
            {INDUSTRIES.map((ind, i) => {
              const Icon = iconMap[ind.icon] || Factory;
              const isActive = activeTab === i;
              return (
                <button
                  key={ind.id}
                  onClick={() => setActiveTab(i)}
                  className={`flex items-center justify-between px-6 py-4 rounded-xl border text-left transition-all ${
                    isActive 
                      ? 'bg-[var(--bg-0)] border-[var(--border-strong)] shadow-md' 
                      : 'bg-transparent border-transparent hover:bg-[var(--bg-2)]/50'
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <Icon className={`w-5 h-5 ${isActive ? 'text-[var(--text-1)]' : 'text-[var(--text-3)]'}`} />
                    <span className={`text-[16px] font-bold ${isActive ? 'text-[var(--text-1)]' : 'text-[var(--text-2)]'}`}>
                      {ind.title}
                    </span>
                  </div>
                  {isActive && <ArrowRight className="w-4 h-4 text-[var(--text-2)]" />}
                </button>
              );
            })}
          </div>

          {/* Dynamic Content Area */}
          <div className="w-full lg:w-2/3">
            <AnimatePresence mode="wait">
              {INDUSTRIES.map((ind, i) => {
                if (i !== activeTab) return null;
                const Icon = iconMap[ind.icon] || Factory;
                return (
                  <motion.div
                    key={ind.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                    className="bg-[var(--bg-0)] border border-[var(--border)] rounded-[32px] p-8 md:p-12 shadow-xl h-full flex flex-col"
                  >
                    <div className="flex-1 flex flex-col justify-center mb-12">
                      <div className="w-16 h-16 rounded-2xl bg-[var(--bg-1)] border border-[var(--border)] flex items-center justify-center mb-6">
                        <Icon className="w-8 h-8 text-[var(--text-1)]" />
                      </div>
                      <h3 className="text-[32px] font-bold mb-4">{ind.title}</h3>
                      <p className="text-[18px] text-[var(--text-2)] leading-relaxed max-w-lg mb-8">
                        {ind.description}
                      </p>
                      
                      <button className="vg-btn vg-btn-primary self-start">
                        View {ind.title} Case Study
                      </button>
                    </div>
                    
                    {/* Industry Stats / Mock UI */}
                    <div className="w-full h-auto bg-[var(--bg-1)] rounded-[16px] border border-[var(--border)] overflow-hidden p-6 grid grid-cols-1 sm:grid-cols-3 gap-6">
                      <div className="flex flex-col">
                        <span className="text-[12px] text-[var(--text-3)] font-medium mb-2 uppercase tracking-wide">Accuracy</span>
                        <span className="text-[28px] font-bold text-[var(--text-1)] tracking-tight">99.8%</span>
                        <div className="w-full h-1.5 bg-gray-200 rounded-full mt-2 overflow-hidden">
                          <div className="h-full bg-green-500 rounded-full w-[99.8%]"></div>
                        </div>
                      </div>
                      <div className="flex flex-col">
                        <span className="text-[12px] text-[var(--text-3)] font-medium mb-2 uppercase tracking-wide">Latency</span>
                        <span className="text-[28px] font-bold text-[var(--text-1)] tracking-tight">12ms</span>
                        <div className="w-full h-1.5 bg-gray-200 rounded-full mt-2 overflow-hidden">
                          <div className="h-full bg-blue-500 rounded-full w-[20%]"></div>
                        </div>
                      </div>
                      <div className="flex flex-col">
                        <span className="text-[12px] text-[var(--text-3)] font-medium mb-2 uppercase tracking-wide">ROI Time</span>
                        <span className="text-[28px] font-bold text-[var(--text-1)] tracking-tight">3wks</span>
                        <div className="w-full h-1.5 bg-gray-200 rounded-full mt-2 overflow-hidden">
                          <div className="h-full bg-purple-500 rounded-full w-[80%]"></div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>
          
        </div>
      </div>
    </section>
  );
};
