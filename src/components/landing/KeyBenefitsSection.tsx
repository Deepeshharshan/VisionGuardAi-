import React, { useRef, useEffect } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export const KeyBenefitsSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

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
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <section ref={containerRef} id="benefits" className="relative h-screen bg-[#050505] overflow-hidden flex items-center justify-center cursor-crosshair">
      
      {/* Intro Overlay Text */}
      <div className="absolute top-24 left-8 md:left-24 z-30 pointer-events-none">
        <h2 className="text-[32px] md:text-[56px] font-bold text-white tracking-tighter leading-tight drop-shadow-2xl">
          Predictive <br/><span className="text-red-500">Anomaly Diagnostics</span>
        </h2>
        <p className="text-gray-400 text-lg max-w-sm mt-4">Move your cursor to X-ray the mechanical assembly and uncover micro-vibrations before catastrophic failure.</p>
      </div>

      {/* BASE LAYER: Normal Machine Assembly (Blueprint style) */}
      <div className="absolute inset-0 flex items-center justify-center p-12">
        <div className="relative w-full max-w-4xl aspect-[16/9] border border-white/10 rounded-[40px] bg-white/5 backdrop-blur-sm overflow-hidden flex items-center justify-center">
          
          <svg viewBox="0 0 800 400" className="w-full h-full opacity-60" stroke="#ffffff" strokeWidth="2" fill="none">
            {/* Abstract Mechanical Gear / Motor base */}
            <circle cx="400" cy="200" r="150" strokeDasharray="10 10" />
            <circle cx="400" cy="200" r="100" />
            <circle cx="400" cy="200" r="50" fill="rgba(255,255,255,0.1)" />
            <rect x="250" y="180" width="300" height="40" rx="10" />
            {Array.from({ length: 12 }).map((_, i) => (
              <line 
                key={i} 
                x1="400" y1="50" x2="400" y2="100" 
                transform={`rotate(${i * 30} 400 200)`}
              />
            ))}
          </svg>

          {/* Normal status UI */}
          <div className="absolute bottom-8 right-8 bg-black/80 px-4 py-2 rounded-lg border border-white/20 text-white font-mono text-sm shadow-2xl">
            <span className="text-green-400">●</span> SYSTEM_NOMINAL : 24°C
          </div>
        </div>
      </div>

      {/* X-RAY REVEAL LAYER: The Mechanical Anomaly (Heatmap + Vibrations) */}
      <motion.div 
        className="absolute inset-0 flex items-center justify-center p-12 pointer-events-none"
        style={{
          WebkitMaskImage: `radial-gradient(300px circle at calc(${smoothX}px) calc(${smoothY}px), black 40%, transparent 100%)`,
          maskImage: `radial-gradient(300px circle at calc(${smoothX}px) calc(${smoothY}px), black 40%, transparent 100%)`,
        }}
      >
        <div className="relative w-full max-w-4xl aspect-[16/9] border border-red-500/50 rounded-[40px] bg-red-950/40 backdrop-blur-md overflow-hidden flex items-center justify-center">
          
          <motion.svg 
            viewBox="0 0 800 400" 
            className="w-full h-full drop-shadow-[0_0_30px_rgba(239,68,68,0.8)]" 
            stroke="#ef4444" 
            strokeWidth="4" 
            fill="none"
            animate={{ x: [-2, 2, -1, 3, -2], y: [-1, 2, -2, 1, -1] }}
            transition={{ repeat: Infinity, duration: 0.1, ease: "linear" }}
          >
            {/* The same shape, but styled as a critical heat map/anomaly */}
            <circle cx="400" cy="200" r="150" strokeDasharray="2 10" opacity="0.5" />
            <circle cx="400" cy="200" r="100" stroke="#f97316" strokeWidth="6" />
            <circle cx="400" cy="200" r="50" fill="rgba(239,68,68,0.4)" className="animate-pulse" />
            
            {/* A crack / stress fracture SVG path */}
            <path d="M400 150 L420 170 L410 190 L430 210 L390 230" stroke="#ffffff" strokeWidth="3" />
            
            <rect x="250" y="180" width="300" height="40" rx="10" stroke="#f97316" />
            {Array.from({ length: 12 }).map((_, i) => (
              <line 
                key={i} 
                x1="400" y1="50" x2="400" y2="100" 
                transform={`rotate(${i * 30} 400 200)`}
                stroke={i % 3 === 0 ? "#ffffff" : "#ef4444"}
              />
            ))}
          </motion.svg>

          {/* Critical alert UI */}
          <motion.div 
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-red-500 text-black px-6 py-3 rounded-lg font-bold uppercase tracking-widest text-lg shadow-[0_0_50px_rgba(239,68,68,1)]"
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ repeat: Infinity, duration: 0.5 }}
          >
            Micro-Fracture Detected
          </motion.div>

          {/* Telemetry data */}
          <div className="absolute bottom-8 right-8 bg-red-950 px-4 py-2 rounded-lg border border-red-500 text-white font-mono text-sm shadow-2xl">
            <span className="text-red-500 animate-ping absolute inline-flex h-full w-full rounded-full opacity-75"></span>
            <span className="text-red-500 relative">⚠</span> THERMAL OVERLOAD : 142°C
          </div>

        </div>
      </motion.div>

    </section>
  );
};
