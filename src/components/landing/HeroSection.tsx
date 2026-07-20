import React, { useState, useEffect, Suspense, lazy } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

const AnimatedGradient = lazy(() => import('@/components/ui/animated-gradient'));

export const HeroSection: React.FC = () => {
  const [timestamp, setTimestamp] = useState('');

  // Mouse tracking 3D tilt effect for the floating panels
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const smoothMouseX = useSpring(mouseX, { damping: 40, stiffness: 150 });
  const smoothMouseY = useSpring(mouseY, { damping: 40, stiffness: 150 });
  const rotateX = useTransform(smoothMouseY, [-0.5, 0.5], [5, -5]);
  const rotateY = useTransform(smoothMouseX, [-0.5, 0.5], [-5, 5]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      mouseX.set(e.clientX / innerWidth - 0.5);
      mouseY.set(e.clientY / innerHeight - 0.5);
    };
    window.addEventListener('mousemove', handleMouseMove);

    // Live clock for enterprise feel
    const timer = setInterval(() => {
      setTimestamp(new Date().toISOString().replace('T', ' ').substring(0, 23));
    }, 100);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      clearInterval(timer);
    };
  }, [mouseX, mouseY]);

  return (
    <section id="hero" className="relative min-h-screen bg-black overflow-hidden flex items-center pt-24 pb-20" aria-label="Command Center">
      
      {/* Animated WebGL Gradient Background */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <Suspense fallback={<div className="absolute inset-0 bg-[#050816]" />}>
          <AnimatedGradient 
            config={{ preset: "Toxic", speed: 12 }} 
            noise={{ opacity: 0.1, scale: 0.5 }} 
          />
        </Suspense>
        {/* Gradients to fade out edges so it blends with our dark mode UI */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: `
              linear-gradient(to right, rgba(0, 0, 0, 0.95), transparent 40%, transparent 60%, rgba(0, 0, 0, 0.95)),
              linear-gradient(to bottom, rgba(0,0,0,0.95) 0%, transparent 20%, transparent 80%, rgba(0, 0, 0, 0.99) 100%)
            `
          }}
        />
      </div>

      <div className="enterprise-container relative z-10 w-full flex flex-col md:flex-row items-center gap-12 lg:gap-24 pointer-events-none">
        
        {/* Left Typography Block */}
        <div className="w-full md:w-1/2 lg:w-5/12 flex flex-col z-20 mt-12 md:mt-0 pointer-events-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="flex items-center gap-3 mb-8">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="text-caption text-white">System Active • {timestamp}</span>
            </div>
            
            <h1 className="text-mega text-white mb-8">
              Predict. <br/> Prevent. <br/> Produce.
            </h1>
            
            <p className="text-desc text-[var(--text-secondary)] mb-12 max-w-lg drop-shadow-md">
              The autonomous AI nervous system for industrial manufacturing. Eliminate downtime before it occurs with millimeter-precision spatial tracking.
            </p>
            
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
              <button className="enterprise-btn-primary w-full sm:w-auto hover:scale-105 active:scale-95 transition-transform cursor-pointer pointer-events-auto">
                Deploy Agent
              </button>
              <button className="text-[15px] font-semibold text-[var(--text-secondary)] hover:text-white transition-colors focus-visible:ring-2 focus-visible:ring-emerald-500 rounded-sm cursor-pointer pointer-events-auto">
                Read Whitepaper →
              </button>
            </div>
          </motion.div>
        </div>

        {/* Right Command Center UI */}
        <div className="w-full md:w-1/2 lg:w-7/12 relative perspective-[2000px] z-10 hidden md:block h-[400px] lg:h-[600px] pointer-events-none">
          <motion.div 
            style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
            className="w-full h-full relative flex items-center justify-center pointer-events-auto cursor-default hover:scale-[1.02] transition-transform duration-700"
          >
            {/* Main Central Viewport */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
              style={{ translateZ: 50 }}
              className="absolute w-[85%] aspect-[16/9] enterprise-glass rounded-2xl overflow-hidden shadow-2xl bg-black/80 backdrop-blur-md"
            >
              {/* Simulated Grayscale Camera Feed (Industrial vibe) */}
              <div className="absolute inset-0 opacity-40 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-overlay z-20"></div>
              <div className="absolute inset-0 bg-[#111]/80 flex items-center justify-center">
                 {/* Abstract geometric representation of a machine part */}
                 <div className="w-64 h-64 border border-white/20 rounded-full flex items-center justify-center relative">
                    <div className="w-48 h-48 border border-white/10 rounded-full absolute"></div>
                    <div className="w-px h-full bg-white/10 absolute"></div>
                    <div className="h-px w-full bg-white/10 absolute"></div>
                 </div>
              </div>

              {/* Precise Procedural Bounding Box */}
              <motion.div 
                className="absolute z-30 border-[1.5px] border-emerald-500 bg-emerald-500/10 backdrop-blur-sm"
                animate={{ 
                  x: [100, 300, 200, 100], 
                  y: [100, 50, 200, 100],
                  width: [120, 160, 140, 120],
                  height: [120, 100, 140, 120]
                }}
                transition={{ duration: 10, ease: "linear", repeat: Infinity }}
              >
                <div className="absolute -top-5 left-[-1.5px] bg-emerald-500 text-black text-[9px] font-bold px-1.5 py-0.5 uppercase mono">
                  TARGET_LOCKED 99.9%
                </div>
                {/* Crosshairs */}
                <div className="absolute inset-0 flex items-center justify-center opacity-50">
                  <div className="w-4 h-4 border border-emerald-500 rounded-full"></div>
                  <div className="w-1 h-1 bg-emerald-500 rounded-full"></div>
                </div>
              </motion.div>

              <div className="absolute top-4 left-4 z-30 flex items-center gap-4 text-[10px] mono text-white/50">
                <span>CAM_01_OVERHEAD</span>
                <span>REC •</span>
              </div>
            </motion.div>

            {/* Floating UI Panel - Top Right */}
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.6 }}
              style={{ translateZ: 100 }}
              className="absolute top-[10%] right-[-5%] w-64 enterprise-card p-5 bg-[var(--bg-surface)]/90 backdrop-blur-xl"
            >
              <div className="text-[10px] text-[var(--text-secondary)] uppercase tracking-widest font-bold mb-3">Live Telemetry</div>
              <div className="flex flex-col gap-3">
                <div>
                  <div className="flex justify-between text-[11px] mb-1">
                    <span className="text-white">Bandwidth</span>
                    <span className="text-[var(--text-secondary)] mono">2.4 Gbps</span>
                  </div>
                  <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden">
                    <motion.div className="h-full bg-white" animate={{ width: ['40%', '70%', '40%'] }} transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}></motion.div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-[11px] mb-1">
                    <span className="text-white">Inference Latency</span>
                    <span className="text-emerald-500 mono">12ms</span>
                  </div>
                  <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden">
                    <div className="w-[20%] h-full bg-emerald-500"></div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Floating Alert Panel - Bottom Left */}
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.8 }}
              style={{ translateZ: 120 }}
              className="absolute bottom-[15%] left-[-10%] enterprise-glass p-4 rounded-xl flex items-start gap-4 border border-amber-500/30 bg-amber-950/40 backdrop-blur-xl"
            >
              <div className="w-2 h-2 rounded-full bg-amber-500 mt-1.5 animate-pulse shrink-0"></div>
              <div>
                <div className="text-[11px] text-amber-500 font-bold uppercase tracking-wider mb-1">Warning Predicted</div>
                <div className="text-[13px] text-white">Vibration anomaly detected on Axis B. Expected tolerance breach in 4hrs.</div>
              </div>
            </motion.div>

          </motion.div>
        </div>

      </div>
    </section>
  );
};
