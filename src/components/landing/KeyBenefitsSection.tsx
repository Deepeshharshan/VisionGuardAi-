import React, { useRef, useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import { Activity, Thermometer, Wind } from 'lucide-react';

export const KeyBenefitsSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [hz, setHz] = useState(1450);
  const [temp, setTemp] = useState(62.4);

  // Mouse coordinates for the X-Ray mask
  const mouseX = useMotionValue(-1000);
  const mouseY = useMotionValue(-1000);

  // Smooth out the mask movement
  const smoothX = useSpring(mouseX, { damping: 40, stiffness: 300 });
  const smoothY = useSpring(mouseY, { damping: 40, stiffness: 300 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        mouseX.set(e.clientX - rect.left);
        mouseY.set(e.clientY - rect.top);
      }
    };
    window.addEventListener('mousemove', handleMouseMove);
    
    // Simulate data fluctuations
    const dataInterval = setInterval(() => {
      setHz(prev => prev + (Math.random() > 0.5 ? 5 : -5));
      setTemp(prev => Number((prev + (Math.random() > 0.5 ? 0.2 : -0.2)).toFixed(1)));
    }, 800);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      clearInterval(dataInterval);
    };
  }, [mouseX, mouseY]);

  return (
    <section ref={containerRef} id="features" className="relative h-screen bg-[#0a0a0a] overflow-hidden flex items-center justify-center cursor-crosshair border-b border-white/5">
      
      {/* Intro Overlay Text */}
      <div className="absolute top-12 left-6 md:top-24 md:left-24 z-30 pointer-events-none">
        <h2 className="text-[20px] md:text-[24px] font-bold text-zinc-500 tracking-tight uppercase">Predictive Diagnostics</h2>
        <p className="text-white text-[32px] md:text-[56px] font-bold mt-2 tracking-tighter leading-none max-w-xl">
          Micro-Defect Detection. <br/> Down to 0.1mm.
        </p>
      </div>

      {/* BASE LAYER: Standard Camera View (Grayscale/Monochrome) */}
      <div className="absolute inset-0 flex items-center justify-center p-6 pt-32">
        <div className="relative w-full max-w-5xl aspect-[16/9] border border-white/5 rounded-2xl bg-[#111] overflow-hidden flex items-center justify-center shadow-2xl">
          
          <svg viewBox="0 0 800 400" className="w-full h-full opacity-40" stroke="#a1a1aa" strokeWidth="1" fill="none">
            {/* Analytical Mechanical Blueprint */}
            <circle cx="400" cy="200" r="150" strokeDasharray="4 8" />
            <circle cx="400" cy="200" r="100" />
            <circle cx="400" cy="200" r="50" fill="rgba(255,255,255,0.05)" />
            <rect x="250" y="180" width="300" height="40" rx="4" />
            {Array.from({ length: 24 }).map((_, i) => (
              <line 
                key={i} 
                x1="400" y1="50" x2="400" y2="70" 
                transform={`rotate(${i * 15} 400 200)`}
              />
            ))}
          </svg>

          {/* Normal status UI overlay */}
          <div className="absolute top-6 right-6 bg-black/80 px-4 py-3 rounded-md border border-white/10 text-zinc-400 font-mono text-[11px] shadow-2xl flex flex-col gap-2">
            <div className="flex justify-between gap-8"><span>STATUS</span><span className="text-white">NOMINAL</span></div>
            <div className="flex justify-between gap-8"><span>RPM</span><span className="text-white">3600</span></div>
            <div className="flex justify-between gap-8"><span>VIBRATION</span><span className="text-white">{hz} Hz</span></div>
          </div>
        </div>
      </div>

      {/* X-RAY REVEAL LAYER: The Thermal & Frequency Anomaly */}
      <motion.div 
        className="absolute inset-0 flex items-center justify-center p-6 pt-32 pointer-events-none"
        style={{
          WebkitMaskImage: `radial-gradient(350px circle at calc(${smoothX}px) calc(${smoothY}px), black 40%, transparent 100%)`,
          maskImage: `radial-gradient(350px circle at calc(${smoothX}px) calc(${smoothY}px), black 40%, transparent 100%)`,
        }}
      >
        <div className="relative w-full max-w-5xl aspect-[16/9] border border-amber-500/30 rounded-2xl bg-black overflow-hidden flex items-center justify-center">
          
          {/* Thermal heat map background inside the mask */}
          <div className="absolute inset-0 opacity-20 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-amber-500 via-red-900 to-black"></div>

          <motion.svg 
            viewBox="0 0 800 400" 
            className="w-full h-full relative z-10" 
            stroke="#f59e0b" 
            strokeWidth="2" 
            fill="none"
          >
            {/* Thermal / Frequency representation of the same machine */}
            <circle cx="400" cy="200" r="150" strokeDasharray="2 4" opacity="0.6" stroke="#ef4444" />
            <circle cx="400" cy="200" r="100" stroke="#f59e0b" strokeWidth="4" />
            
            {/* AI Highlighted Anomaly Ring */}
            <circle cx="400" cy="200" r="50" fill="rgba(245,158,11,0.2)" className="animate-pulse" />
            <circle cx="400" cy="200" r="56" stroke="#ef4444" strokeWidth="1" strokeDasharray="2 4" className="animate-[spin_4s_linear_infinite]" />
            
            {/* Stress fracture / Thermal hotspot line */}
            <path d="M400 150 L410 170 L405 185 L420 200 L395 210" stroke="#ffffff" strokeWidth="2" />
            
            <rect x="250" y="180" width="300" height="40" rx="4" stroke="#ef4444" opacity="0.5" />
            {Array.from({ length: 24 }).map((_, i) => (
              <line 
                key={i} 
                x1="400" y1="50" x2="400" y2="70" 
                transform={`rotate(${i * 15} 400 200)`}
                stroke={i >= 5 && i <= 8 ? "#ef4444" : "#f59e0b"}
                strokeWidth={i >= 5 && i <= 8 ? "3" : "1"}
              />
            ))}
          </motion.svg>

          {/* Critical analytical UI revealed in mask */}
          <div className="absolute top-6 left-6 flex flex-col gap-3">
             <div className="bg-amber-500/10 border border-amber-500/30 text-amber-500 px-3 py-1.5 rounded text-[11px] font-bold uppercase tracking-widest backdrop-blur-md inline-block w-max">
               Thermal Signature Mismatch
             </div>
             
             {/* Realistic Line Chart for Temperature trend */}
             <div className="w-48 h-24 bg-black/80 border border-white/10 rounded p-2 flex flex-col">
               <div className="text-[9px] text-zinc-500 font-mono mb-1 flex justify-between">
                 <span>T-1 (Bearing)</span>
                 <span className="text-amber-500">{temp}°C</span>
               </div>
               <div className="flex-1 w-full border-b border-l border-white/10 relative">
                 <svg viewBox="0 0 100 40" className="w-full h-full overflow-visible" preserveAspectRatio="none">
                   <path d="M0,30 L20,28 L40,29 L60,20 L80,10 L100,5" fill="none" stroke="#f59e0b" strokeWidth="2" />
                   <circle cx="100" cy="5" r="2" fill="#ef4444" className="animate-pulse" />
                 </svg>
               </div>
             </div>
          </div>

          {/* Telemetry data overlay */}
          <div className="absolute bottom-6 right-6 bg-black/90 px-4 py-3 rounded-md border border-amber-500/30 text-white font-mono text-[11px] shadow-2xl flex flex-col gap-2 min-w-[200px]">
            <div className="flex justify-between gap-8 text-zinc-500"><span>CONFIDENCE</span><span className="text-white">99.1%</span></div>
            <div className="flex justify-between gap-8 text-zinc-500"><span>IMPACT_PROB</span><span className="text-red-500">HIGH</span></div>
            <div className="flex justify-between gap-8 text-zinc-500"><span>MTBF_EST</span><span className="text-amber-500">14 hrs</span></div>
          </div>

        </div>
      </motion.div>
      
      {/* Scroll indicator text */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-[10px] uppercase tracking-widest text-zinc-600 font-mono">
        Hover to Analyze Spatial Data
      </div>

    </section>
  );
};
