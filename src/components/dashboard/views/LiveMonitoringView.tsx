import React from 'react';
import { motion } from 'framer-motion';
import { Camera, Maximize2, AlertTriangle, Activity } from 'lucide-react';

const cameraFeeds = [
  { id: 'CAM-01', name: 'Assembly Line A', status: 'live', fps: 30, detections: 2, threat: 'low' },
  { id: 'CAM-02', name: 'CNC Milling Area', status: 'live', fps: 29, detections: 0, threat: 'none' },
  { id: 'CAM-03', name: 'Conveyor Belt #2', status: 'live', fps: 24, detections: 5, threat: 'high' },
  { id: 'CAM-04', name: 'Packaging Station', status: 'live', fps: 30, detections: 1, threat: 'low' },
];

export const LiveMonitoringView: React.FC = () => {
  return (
    <div className="space-y-6 pb-20">
      
      {/* ─── PAGE HEADER & CONTROLS ─── */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-xl font-semibold text-white tracking-tight">Live AI Monitoring</h2>
          <p className="text-[13px] text-white/50 mt-1">Real-time computer vision analysis across 4 active streams</p>
        </div>
        
        <div className="flex items-center gap-3">
          <button className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-[13px] text-white/80 hover:bg-white/10 hover:text-white transition-colors outline-none">
            <Camera className="w-4 h-4" />
            Add Camera
          </button>
        </div>
      </div>

      {/* ─── CAMERA GRID ─── */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {cameraFeeds.map((feed, idx) => (
          <motion.div
            key={feed.id}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1, duration: 0.4 }}
            className={`bg-[#0A0A0A] border rounded-2xl overflow-hidden relative group ${
              feed.threat === 'high' ? 'border-red-500/50 shadow-[0_0_20px_rgba(239,68,68,0.15)]' : 'border-white/10'
            }`}
          >
            
            {/* Overlay UI */}
            <div className="absolute inset-0 z-10 pointer-events-none p-4 flex flex-col justify-between">
              <div className="flex items-start justify-between">
                <div className="flex flex-col gap-2">
                  <div className="bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/10 inline-flex items-center gap-2 w-max">
                    <span className="flex h-2 w-2 relative">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
                    </span>
                    <span className="text-[11px] font-bold tracking-wider text-white uppercase">{feed.id} • {feed.name}</span>
                  </div>
                  {feed.threat === 'high' && (
                    <div className="bg-red-500/20 backdrop-blur-md px-3 py-1.5 rounded-lg border border-red-500/30 inline-flex items-center gap-2 w-max animate-pulse">
                      <AlertTriangle className="w-3.5 h-3.5 text-red-400" />
                      <span className="text-[11px] font-bold tracking-wider text-red-400 uppercase">Anomaly Detected</span>
                    </div>
                  )}
                </div>
                
                <div className="flex flex-col items-end gap-2">
                  <div className="bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/10 inline-flex items-center gap-2 text-[11px] font-mono text-white/80">
                    <Activity className="w-3 h-3 text-emerald-400" />
                    {feed.fps} FPS
                  </div>
                  <button className="p-2 bg-black/60 backdrop-blur-md border border-white/10 rounded-lg text-white/60 hover:text-white pointer-events-auto transition-colors">
                    <Maximize2 className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Bounding Box Mockup for High Threat */}
              {feed.threat === 'high' && (
                <div className="absolute top-1/4 left-1/3 w-48 h-32 border-2 border-red-500 bg-red-500/10 flex items-start justify-start p-1 pointer-events-none">
                  <div className="bg-red-500 text-white text-[10px] font-bold px-1.5 py-0.5 rounded-sm">
                    Misalignment 94%
                  </div>
                </div>
              )}
              {feed.threat === 'low' && (
                <div className="absolute top-1/2 left-1/2 w-32 h-32 border-2 border-blue-500 bg-blue-500/10 flex items-start justify-start p-1 pointer-events-none">
                  <div className="bg-blue-500 text-white text-[10px] font-bold px-1.5 py-0.5 rounded-sm">
                    Worker 99%
                  </div>
                </div>
              )}

              {/* Bottom Metrics */}
              <div className="bg-black/60 backdrop-blur-md p-3 rounded-xl border border-white/10 flex items-center justify-between w-full pointer-events-auto">
                <div className="flex items-center gap-4">
                  <div className="text-[11px] uppercase tracking-wider text-white/50 font-semibold">Active Model</div>
                  <div className="text-[12px] font-mono text-emerald-400 bg-emerald-400/10 px-2 py-0.5 rounded border border-emerald-400/20">VG-Vision-v4</div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="text-[12px] text-white/70">
                    <span className="font-semibold text-white">{feed.detections}</span> objects
                  </div>
                  <button className="text-[12px] text-blue-400 hover:text-blue-300 font-medium">View Logs</button>
                </div>
              </div>
            </div>

            {/* Video Placeholder Background */}
            <div className="aspect-video bg-[#111] w-full relative overflow-hidden">
               <div className="absolute inset-0 opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-overlay"></div>
               {/* Animated grid lines for "AI scanning" effect */}
               <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none"></div>
               
               {feed.threat === 'high' && (
                 <div className="absolute inset-0 bg-red-500/5 mix-blend-overlay animate-pulse"></div>
               )}
            </div>
            
          </motion.div>
        ))}
      </div>
    </div>
  );
};
