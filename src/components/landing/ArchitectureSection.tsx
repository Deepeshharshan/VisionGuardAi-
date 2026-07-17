import React from 'react';
import { motion } from 'framer-motion';
import { Server, Database, Activity, Code } from 'lucide-react';

export const ArchitectureSection: React.FC = () => {
  return (
    <section id="architecture" className="py-24 lg:py-32 bg-[var(--text-1)] text-white relative overflow-hidden" aria-labelledby="arch-heading">
      
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgc3Ryb2tlPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMDUpIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPjxwYXRoIGQ9Ik00MCAwSDBWMG0wIDQwaDQwdjQwIi8+PC9nPjwvc3ZnPg==')] opacity-50"></div>
      
      {/* Glowing Orbs */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-900/10 rounded-full blur-[150px] mix-blend-screen pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-900/10 rounded-full blur-[150px] mix-blend-screen pointer-events-none"></div>

      <div className="enterprise-container relative z-10">
        
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 bg-white/5 mb-6"
          >
            <Code className="w-4 h-4 text-purple-400" />
            <span className="text-[12px] font-semibold tracking-[0.1em] uppercase text-white/80">Developer Ready</span>
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            id="arch-heading"
            className="text-section-title text-white mb-6"
          >
            Edge architecture designed for zero latency.
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.1 }}
            className="text-desc text-white/60 max-w-2xl mx-auto"
          >
            Deploy models locally on the factory floor while managing your entire fleet from the cloud. Data stays secure, inferences happen in milliseconds.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 relative">
          
          {/* Horizontal connection line for desktop */}
          <div className="hidden lg:block absolute top-16 left-[16%] right-[16%] h-px bg-white/20 border-t border-dashed border-white/20 z-0"></div>

          {/* Edge Layer */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-sm relative z-10 hover:bg-white/10 transition-colors h-full flex flex-col"
          >
            <div className="w-16 h-16 rounded-2xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center mb-8 shadow-[0_0_20px_rgba(59,130,246,0.1)] shrink-0">
              <Activity className="w-8 h-8 text-blue-400" />
            </div>
            <h3 className="text-[20px] font-bold text-white mb-3">1. Edge Nodes</h3>
            <p className="text-[15px] text-white/60 mb-8 leading-relaxed">
              Install our lightweight agent on local IPCs or NVIDIA Jetson devices directly on the factory floor.
            </p>
            <div className="rounded-lg bg-black/60 border border-white/5 p-4 shadow-inner mt-auto">
              <div className="mono text-[13px] text-blue-400">~/edge</div>
              <div className="mono text-[12px] text-white/40 mt-2">$ vguard start --port 8080</div>
              <div className="mono text-[12px] text-green-400 mt-1">&gt; Agent running. Latency: 4ms</div>
            </div>
          </motion.div>

          {/* Connect Layer */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.1 }}
            className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-sm relative z-10 hover:bg-white/10 transition-colors h-full flex flex-col"
          >
            <div className="w-16 h-16 rounded-2xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center mb-8 shadow-[0_0_20px_rgba(168,85,247,0.1)] shrink-0">
              <Server className="w-8 h-8 text-purple-400" />
            </div>
            <h3 className="text-[20px] font-bold text-white mb-3">2. Neural Engine</h3>
            <p className="text-[15px] text-white/60 mb-8 leading-relaxed">
              Frames are processed locally without internet dependency. Only metadata and critical alerts sync to the cloud.
            </p>
            <div className="rounded-lg bg-black/60 border border-white/5 p-4 flex flex-col gap-3 shadow-inner mt-auto">
              <div className="flex justify-between items-center text-[12px] mono">
                <span className="text-white/60">TensorRT Pipeline</span>
                <span className="text-purple-400 font-bold">Active</span>
              </div>
              <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden">
                <div className="w-[85%] h-full bg-purple-500 shadow-[0_0_10px_rgba(168,85,247,0.5)]"></div>
              </div>
              <div className="flex justify-between items-center text-[12px] mono mt-1">
                <span className="text-white/60">GPU Utilization</span>
                <span className="text-white">85%</span>
              </div>
            </div>
          </motion.div>

          {/* Cloud Layer */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.2 }}
            className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-sm relative z-10 hover:bg-white/10 transition-colors h-full flex flex-col"
          >
            <div className="w-16 h-16 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center mb-8 shadow-[0_0_20px_rgba(16,185,129,0.1)] shrink-0">
              <Database className="w-8 h-8 text-emerald-400" />
            </div>
            <h3 className="text-[20px] font-bold text-white mb-3">3. Central Cloud</h3>
            <p className="text-[15px] text-white/60 mb-8 leading-relaxed">
              Monitor thousands of edge devices, deploy new AI models OTA, and integrate via REST/GraphQL APIs.
            </p>
            <div className="rounded-lg bg-black/60 border border-white/5 p-4 shadow-inner mt-auto">
              <div className="mono text-[12px] text-emerald-400 mb-2">POST /api/v2/models</div>
              <div className="mono text-[11px] text-white/60 leading-relaxed whitespace-pre">
{`{
  "fleet": "assembly_b",
  "version": "v3.1.4-rc"
}`}
              </div>
            </div>
          </motion.div>
          
        </div>

      </div>
    </section>
  );
};

