import React, { useState, useEffect } from 'react';
import { Camera, Shield, Search, Bell, Settings, Activity, Database, Cpu } from 'lucide-react';
import { motion } from 'framer-motion';

export const DashboardMockup: React.FC = () => {
  const [frameRate, setFrameRate] = useState(60);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setFrameRate(prev => (prev === 60 ? 59 : prev === 59 ? 61 : 60));
    }, 1500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full h-full bg-[#0a0a0a] border border-white/10 rounded-2xl overflow-hidden flex flex-col font-sans shadow-2xl">
      
      {/* Top Header Area (Minimalist Enterprise) */}
      <div className="flex items-center justify-between px-6 py-4 border-b border-white/5 bg-black/50">
        <div className="flex items-center gap-4">
          <div className="w-8 h-8 bg-white text-black flex items-center justify-center rounded-sm">
            <Shield className="w-5 h-5" />
          </div>
          <div>
            <h3 className="font-semibold text-[14px] text-white tracking-tight">VisionGuard OS</h3>
            <p className="text-[11px] text-zinc-500 font-mono uppercase tracking-wider">Node: EU-Central-1</p>
          </div>
        </div>
        
        {/* Mock Search Bar */}
        <div className="hidden md:flex items-center gap-3 bg-white/5 border border-white/10 rounded-md px-4 py-1.5 w-72">
          <Search className="w-4 h-4 text-zinc-500" />
          <span className="text-[12px] text-zinc-500">Query telemetry data...</span>
          <span className="ml-auto text-[10px] text-zinc-600 border border-zinc-700 rounded px-1.5 font-mono">⌘K</span>
        </div>
        
        <div className="flex items-center gap-4">
          <button className="text-zinc-500 hover:text-white transition-colors">
            <Bell className="w-4 h-4" />
          </button>
          <div className="w-8 h-8 rounded-full border border-white/20 overflow-hidden">
             <img src="https://i.pravatar.cc/100?img=33" alt="Admin" className="w-full h-full object-cover grayscale opacity-80" />
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="flex flex-1 overflow-hidden">
        
        {/* Left Sidebar */}
        <div className="w-16 border-r border-white/5 bg-black/20 flex flex-col items-center py-6 gap-6 hidden md:flex">
          <button className="text-white bg-white/10 p-2.5 rounded-md"><Activity className="w-5 h-5" /></button>
          <button className="text-zinc-600 hover:text-white transition-colors p-2.5"><Camera className="w-5 h-5" /></button>
          <button className="text-zinc-600 hover:text-white transition-colors p-2.5"><Database className="w-5 h-5" /></button>
          <button className="text-zinc-600 hover:text-white transition-colors p-2.5 mt-auto"><Settings className="w-5 h-5" /></button>
        </div>

        {/* Dashboard Workspace */}
        <div className="flex-1 p-6 md:p-8 bg-[#0a0a0a] overflow-y-auto">
          
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-[24px] font-semibold text-white tracking-tight">Global Telemetry</h2>
            <div className="flex items-center gap-2 border border-emerald-500/30 bg-emerald-500/10 px-3 py-1.5 rounded-md">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" /> 
              <span className="text-[11px] font-bold text-emerald-500 uppercase tracking-widest">Live Sync</span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            
            {/* KPI Cards (Minimal Monochrome) */}
            <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-[#111] border border-white/5 p-5 rounded-lg flex justify-between items-end">
                <div>
                  <div className="text-[12px] font-medium text-zinc-500 mb-1">Active Streams</div>
                  <div className="font-mono text-[32px] font-semibold text-white leading-none">1,402</div>
                </div>
                <Cpu className="w-8 h-8 text-zinc-700" />
              </div>
              <div className="bg-[#111] border border-white/5 p-5 rounded-lg flex justify-between items-end">
                <div>
                  <div className="text-[12px] font-medium text-zinc-500 mb-1">Inference Latency</div>
                  <div className="font-mono text-[32px] font-semibold text-white leading-none">12.4<span className="text-[16px] text-zinc-500 ml-1">ms</span></div>
                </div>
                <Activity className="w-8 h-8 text-zinc-700" />
              </div>
              <div className="bg-[#111] border border-white/5 p-5 rounded-lg flex justify-between items-end relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 blur-[40px] rounded-full"></div>
                <div className="relative z-10">
                  <div className="text-[12px] font-medium text-zinc-500 mb-1">System Accuracy</div>
                  <div className="font-mono text-[32px] font-semibold text-emerald-500 leading-none">99.98%</div>
                </div>
              </div>
            </div>

            {/* Video Feed (Sterile / Professional) */}
            <div className="lg:col-span-2">
              <div className="bg-[#111] border border-white/5 rounded-lg h-full min-h-[300px] flex flex-col">
                <div className="flex items-center justify-between px-4 py-3 border-b border-white/5">
                  <div className="text-[12px] font-medium text-white">Stream: CAM_A_004</div>
                  <div className="text-[10px] text-zinc-500 font-mono">FPS: {frameRate}</div>
                </div>
                
                <div className="flex-1 bg-black relative overflow-hidden p-2">
                  <div className="w-full h-full bg-[#111] border border-white/10 relative overflow-hidden">
                    {/* Grayscale static / noise */}
                    <div className="absolute inset-0 opacity-20 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-overlay"></div>
                    
                    {/* Architectural bounding box analysis */}
                    <motion.div 
                      animate={{ 
                        x: ['0%', '10%', '-5%', '0%'],
                        scale: [1, 1.02, 0.98, 1]
                      }}
                      transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                      className="absolute top-[30%] left-[30%] w-[40%] h-[40%] border border-emerald-500/50 bg-emerald-500/5"
                    >
                      <div className="absolute -top-5 left-0 text-emerald-500 text-[9px] font-mono border border-emerald-500/30 px-1 bg-black/50">
                        NOMINAL_TOLERANCE
                      </div>
                      
                      {/* Grid analysis overlay inside box */}
                      <div className="w-full h-full border border-emerald-500/20 grid grid-cols-3 grid-rows-3">
                        {Array.from({length:9}).map((_, i) => <div key={i} className="border border-emerald-500/10"></div>)}
                      </div>
                    </motion.div>
                  </div>
                </div>
              </div>
            </div>

            {/* Diagnostic Logs */}
            <div className="lg:col-span-1">
              <div className="bg-[#111] border border-white/5 rounded-lg h-full flex flex-col">
                <div className="px-4 py-3 border-b border-white/5">
                  <h3 className="text-[12px] font-medium text-white">Diagnostic Logs</h3>
                </div>
                <div className="flex-1 overflow-y-auto p-4 flex flex-col gap-3 font-mono text-[10px]">
                  <div className="text-zinc-400"><span className="text-emerald-500">[OK]</span> Syncing telemetry...</div>
                  <div className="text-zinc-400"><span className="text-emerald-500">[OK]</span> Model weight updated.</div>
                  <div className="text-zinc-400"><span className="text-amber-500">[WARN]</span> Latency spike on node 4.</div>
                  <div className="text-zinc-400"><span className="text-emerald-500">[OK]</span> Vision stream stable.</div>
                  <div className="text-zinc-400"><span className="text-emerald-500">[OK]</span> Calibration matrix zeroed.</div>
                  <div className="text-zinc-400"><span className="text-emerald-500">[OK]</span> 1402 streams verified.</div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};
