import React, { useState, useEffect } from 'react';
import { motion, useMotionValue, useSpring, useTransform, Variants } from 'framer-motion';
import { ChevronRight, ArrowRight, ShieldCheck, ScanLine, AlertTriangle } from 'lucide-react';

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.1 }
  }
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30, filter: 'blur(10px)' },
  visible: { 
    opacity: 1, y: 0, filter: 'blur(0px)',
    transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] as const } 
  }
};

const alertVariants: Variants = {
  hidden: { opacity: 0, x: -50, scale: 0.9 },
  visible: { opacity: 1, x: 0, scale: 1, transition: { type: 'spring', stiffness: 200, damping: 20 } }
};

export const HeroSection: React.FC = () => {
  const [objectCount, setObjectCount] = useState(0);

  // Mouse tracking 3D tilt effect
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 30, stiffness: 100, mass: 1 };
  const smoothMouseX = useSpring(mouseX, springConfig);
  const smoothMouseY = useSpring(mouseY, springConfig);

  const rotateX = useTransform(smoothMouseY, [-0.5, 0.5], [10, -10]);
  const rotateY = useTransform(smoothMouseX, [-0.5, 0.5], [-10, 10]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      const x = e.clientX / innerWidth - 0.5;
      const y = e.clientY / innerHeight - 0.5;
      mouseX.set(x);
      mouseY.set(y);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  useEffect(() => {
    const interval = setInterval(() => {
      setObjectCount(prev => (prev < 3942 ? prev + Math.floor(Math.random() * 15) : 3942));
    }, 50);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="hero" className="relative min-h-screen pt-24 pb-24 lg:pt-32 flex items-center bg-mesh-gradient overflow-hidden perspective-[2000px]" aria-label="Hero Command Center">
      
      {/* Background Ambient Grid & Shaders */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden mix-blend-screen opacity-60">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:60px_60px] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,#000_20%,transparent_100%)]"></div>
        <div className="aurora-glow bg-purple-600/40 w-[50vw] h-[50vw] top-[-20%] left-[-10%] mix-blend-plus-lighter"></div>
        <div className="aurora-glow bg-blue-600/40 w-[40vw] h-[40vw] top-[30%] right-[-10%] animation-delay-2000 mix-blend-plus-lighter"></div>
      </div>

      <motion.div 
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        className="enterprise-container relative z-10 w-full"
      >
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center text-center max-w-6xl mx-auto"
        >
          {/* Tag */}
          <motion.div
            variants={itemVariants}
            style={{ translateZ: 50 }}
            className="mb-10 inline-flex items-center gap-3 px-5 py-2.5 rounded-full border border-white/10 bg-black/40 backdrop-blur-xl shadow-[0_4px_32px_rgba(0,0,0,0.4)]"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
            </span>
            <span className="text-[13px] font-bold tracking-[0.2em] uppercase text-white">System Online</span>
          </motion.div>

          {/* Cinematic Title */}
          <motion.h1 
            variants={itemVariants}
            style={{ translateZ: 80 }}
            className="text-[64px] md:text-[96px] font-extrabold tracking-tighter mb-6 text-white leading-[1.05] drop-shadow-2xl"
          >
            Omnipresent <br className="hidden md:block" /> 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600">Intelligence.</span>
          </motion.h1>
          
          <motion.p 
            variants={itemVariants}
            style={{ translateZ: 60 }}
            className="text-lg md:text-xl mb-12 max-w-3xl text-center mx-auto text-gray-300 font-medium tracking-tight"
          >
            The world's most advanced spatial reasoning engine for industrial environments. Autonomous anomaly detection streaming directly from your existing camera grid.
          </motion.p>
          
          {/* Action Buttons */}
          <motion.div 
            variants={itemVariants}
            style={{ translateZ: 100 }}
            className="flex flex-col sm:flex-row items-center gap-6 mb-20"
          >
            <button className="relative group overflow-hidden rounded-full bg-white px-8 py-4 font-bold text-black transition-all hover:scale-105 hover:shadow-[0_0_60px_rgba(255,255,255,0.4)]">
              <span className="relative z-10">Initialize Matrix</span>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-black/10 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]"></div>
            </button>
            <button className="group flex items-center gap-2 px-8 py-4 font-semibold text-white transition-colors hover:text-cyan-400">
              Technical Specs <ChevronRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </button>
          </motion.div>

          {/* Spatial Viewport Simulation */}
          <motion.div 
            variants={itemVariants}
            style={{ translateZ: 120 }}
            className="relative w-full aspect-video max-w-5xl rounded-[32px] border border-white/15 bg-black/60 backdrop-blur-2xl shadow-[0_32px_128px_rgba(0,0,0,0.8)] overflow-hidden flex items-center justify-center"
          >
            {/* Viewport UI Grids */}
            <div className="absolute inset-0 border-[1px] border-white/5 rounded-[32px] m-4 pointer-events-none" />
            
            {/* Scanning Laser */}
            <motion.div 
              className="absolute top-0 left-0 w-full h-[2px] bg-cyan-400 shadow-[0_0_20px_#22d3ee] z-20"
              animate={{ top: ['0%', '100%', '0%'] }}
              transition={{ duration: 3, ease: "linear", repeat: Infinity }}
            />

            {/* Kinetic Typography Alerts */}
            <motion.div 
              variants={alertVariants}
              initial="hidden"
              animate="visible"
              className="absolute top-8 left-8 p-4 rounded-2xl bg-black/80 border border-red-500/30 backdrop-blur-md flex items-center gap-4 z-30 shadow-[0_0_40px_rgba(239,68,68,0.2)]"
            >
              <div className="w-12 h-12 rounded-xl bg-red-500/20 flex items-center justify-center">
                <AlertTriangle className="w-6 h-6 text-red-500" />
              </div>
              <div className="text-left">
                <div className="text-[10px] text-red-400 uppercase tracking-widest font-bold">Priority Threat</div>
                <div className="text-lg font-bold text-white mono">THERMAL_BREACH_A7</div>
              </div>
            </motion.div>

            {/* Procedural Bounding Box */}
            <motion.div 
              className="absolute w-[200px] h-[200px] border-[1px] border-cyan-400 bg-cyan-400/5 z-30"
              animate={{ 
                x: [-150, 150, 50, -100, -150], 
                y: [-50, -100, 80, 20, -50],
                width: [200, 120, 250, 180, 200],
                height: [200, 180, 120, 220, 200]
              }}
              transition={{ duration: 12, ease: "easeInOut", repeat: Infinity }}
            >
              <div className="absolute -top-6 left-[-1px] bg-cyan-400 text-black text-[11px] font-bold px-2 py-1 uppercase mono flex items-center gap-2">
                ASSEMBLY_NODE <span className="opacity-70">99.9%</span>
              </div>
              <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-cyan-400"></div>
              <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-cyan-400"></div>
              <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-cyan-400"></div>
              <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-cyan-400"></div>
            </motion.div>

            {/* HUD Central Reticle */}
            <div className="absolute flex items-center justify-center opacity-40 z-10 pointer-events-none">
               <div className="w-64 h-64 border-[1px] border-dashed border-white/30 rounded-full animate-[spin_30s_linear_infinite]"></div>
               <div className="absolute w-48 h-48 border-[1px] border-white/20 rounded-full animate-[spin_20s_linear_infinite_reverse]"></div>
               <div className="absolute w-1 h-1 bg-cyan-400 rounded-full shadow-[0_0_10px_#22d3ee]"></div>
            </div>

            {/* Floating Metrics */}
            <div className="absolute bottom-8 right-8 text-right z-30">
              <div className="text-[10px] text-gray-400 uppercase tracking-widest font-bold mb-1">Total Anomalies Analyzed</div>
              <div className="text-4xl font-extrabold text-white mono drop-shadow-lg">{objectCount.toLocaleString()}</div>
            </div>

          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};
