import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Server, Zap, CloudOff } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export const ArchitectureSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const svgRef = useRef<SVGSVGElement>(null);
  const linesRef = useRef<SVGPathElement[]>([]);

  useEffect(() => {
    if (!sectionRef.current || !svgRef.current) return;

    gsap.set(linesRef.current, { strokeDasharray: 1000, strokeDashoffset: 1000 });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top 60%',
      }
    });

    // Draw the network topology
    tl.to(linesRef.current, {
      strokeDashoffset: 0,
      duration: 2,
      ease: 'power2.out',
      stagger: 0.05
    });

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <section ref={sectionRef} className="relative min-h-screen bg-[#050505] flex flex-col items-center justify-center border-b border-white/5 py-32" aria-label="Edge Architecture">
      
      {/* Text Overlay */}
      <div className="absolute top-12 left-6 md:top-24 md:left-24 z-20 pointer-events-none">
        <h2 className="text-[20px] md:text-[24px] font-bold text-zinc-500 tracking-tight uppercase">Network Topology</h2>
        <p className="text-white text-[32px] md:text-[56px] font-bold mt-2 tracking-tighter leading-none max-w-xl">
          Zero Cloud Dependency. <br/> Pure Edge Velocity.
        </p>
      </div>

      {/* Massive SVG Blueprint - Sterile Network Topology */}
      <div className="relative w-full h-full max-w-[1400px] mx-auto flex items-center justify-center p-4 pt-48">
        
        {/* Data comparison overlays */}
        <div className="absolute top-1/2 left-[10%] -translate-y-1/2 bg-black border border-white/10 p-6 rounded-lg w-72 z-10 hidden lg:block">
           <div className="flex items-center gap-3 mb-4 text-zinc-400">
             <CloudOff className="w-5 h-5 text-red-500" />
             <span className="font-bold text-[12px] uppercase tracking-widest">Standard Cloud AI</span>
           </div>
           <div className="flex justify-between font-mono text-[11px] mb-2 text-zinc-500"><span>Roundtrip Latency</span><span className="text-red-500">1200ms</span></div>
           <div className="flex justify-between font-mono text-[11px] mb-2 text-zinc-500"><span>Bandwidth Cost</span><span className="text-red-500">High</span></div>
           <div className="flex justify-between font-mono text-[11px] text-zinc-500"><span>Data Security</span><span className="text-amber-500">Vulnerable</span></div>
        </div>

        <div className="absolute top-1/2 right-[10%] -translate-y-1/2 bg-[#0a0a0a] border border-emerald-500/20 shadow-[0_0_50px_rgba(16,185,129,0.05)] p-6 rounded-lg w-72 z-10 hidden lg:block">
           <div className="flex items-center gap-3 mb-4 text-emerald-500">
             <Zap className="w-5 h-5" />
             <span className="font-bold text-[12px] uppercase tracking-widest">VisionGuard Edge</span>
           </div>
           <div className="flex justify-between font-mono text-[11px] mb-2 text-white"><span>Inference Latency</span><span className="text-emerald-500">12ms</span></div>
           <div className="flex justify-between font-mono text-[11px] mb-2 text-white"><span>Bandwidth Cost</span><span className="text-emerald-500">Zero</span></div>
           <div className="flex justify-between font-mono text-[11px] text-white"><span>Data Security</span><span className="text-emerald-500">Air-gapped</span></div>
        </div>

        <svg 
          ref={svgRef}
          viewBox="0 0 1000 600" 
          className="w-full h-auto max-h-[70vh] opacity-80"
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Base Grid */}
          <g opacity="0.05" stroke="#ffffff" strokeWidth="1">
            {Array.from({ length: 20 }).map((_, i) => (
              <line key={`v-${i}`} x1={i * 50} y1="0" x2={i * 50} y2="600" />
            ))}
            {Array.from({ length: 12 }).map((_, i) => (
              <line key={`h-${i}`} x1="0" y1={i * 50} x2="1000" y2={i * 50} />
            ))}
          </g>

          {/* Core Edge Backbone */}
          <g stroke="#ffffff" strokeWidth="2" strokeLinecap="square" strokeLinejoin="miter" opacity="0.3">
            <path ref={el => { if (el) linesRef.current.push(el); }} d="M 500 100 V 500" />
            <path ref={el => { if (el) linesRef.current.push(el); }} d="M 300 300 H 700" />
            
            {/* Branching paths to nodes */}
            <path ref={el => { if (el) linesRef.current.push(el); }} d="M 500 200 H 650 V 150" />
            <path ref={el => { if (el) linesRef.current.push(el); }} d="M 500 400 H 350 V 450" />
            <path ref={el => { if (el) linesRef.current.push(el); }} d="M 400 300 V 150 H 350" />
            <path ref={el => { if (el) linesRef.current.push(el); }} d="M 600 300 V 450 H 650" />
          </g>

          {/* Secure Edge Perimeter Boundary */}
          <rect x="250" y="100" width="500" height="400" stroke="#10b981" strokeWidth="1" strokeDasharray="4 4" opacity="0.3" fill="rgba(16,185,129,0.02)" />
          
          <text x="260" y="120" fill="#10b981" fontSize="10" fontFamily="monospace" opacity="0.5">LOCAL FACTORY INTRANET // AIR-GAPPED</text>

          {/* Hardware Nodes */}
          {[
            [500,300], // Central Hub
            [500,100], [500,500], [300,300], [700,300],
            [650,150], [350,450], [350,150], [650,450]
          ].map(([cx, cy], i) => (
            <g key={`node-${i}`}>
              <rect 
                x={cx - 12} 
                y={cy - 12} 
                width="24" 
                height="24" 
                fill="#000000" 
                stroke={i === 0 ? "#10b981" : "#ffffff"} 
                strokeWidth={i === 0 ? "2" : "1"}
              />
              <circle cx={cx} cy={cy} r="2" fill={i === 0 ? "#10b981" : "#ffffff"} />
            </g>
          ))}
        </svg>
      </div>
    </section>
  );
};
