import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Network, Cpu, ShieldAlert, ArrowRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const pipelineSteps = [
  {
    id: 'edge-ingestion',
    title: 'Edge Ingestion',
    desc: 'Raw 4K camera streams are captured directly at the manufacturing line and routed to localized VisionGuard nodes without touching the cloud.',
    icon: <Network className="w-6 h-6 text-white" />,
    mockup: (
      <div className="w-full h-full bg-[#0a0a0a] border border-white/10 rounded-xl overflow-hidden flex flex-col font-mono text-[10px]">
        <div className="border-b border-white/10 p-3 bg-black flex justify-between items-center text-zinc-500">
          <span>LOCAL_NODE_01</span>
          <span className="text-emerald-500 flex items-center gap-1"><span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse"></span> ONLINE</span>
        </div>
        <div className="p-4 flex flex-col gap-2 text-zinc-400 flex-1">
          <div className="flex justify-between"><span>Stream_A</span><span className="text-white">60 FPS / 4K</span></div>
          <div className="flex justify-between"><span>Stream_B</span><span className="text-white">60 FPS / 4K</span></div>
          <div className="flex justify-between"><span>Stream_C</span><span className="text-white">30 FPS / 1080p</span></div>
          <div className="mt-auto pt-4 border-t border-white/5">
            <div className="flex justify-between text-zinc-500 mb-1"><span>Total Bandwidth</span><span>2.4 Gbps</span></div>
            <div className="w-full h-1 bg-white/10 rounded"><div className="w-[80%] h-full bg-white"></div></div>
          </div>
        </div>
      </div>
    )
  },
  {
    id: 'neural-processing',
    title: 'Neural Processing',
    desc: 'Proprietary spatial models analyze each frame for micro-fractures, dimensional errors, and thermal anomalies in under 12 milliseconds.',
    icon: <Cpu className="w-6 h-6 text-white" />,
    mockup: (
      <div className="w-full h-full bg-[#0a0a0a] border border-white/10 rounded-xl overflow-hidden flex flex-col font-mono text-[10px]">
        <div className="border-b border-white/10 p-3 bg-black flex justify-between items-center text-zinc-500">
          <span>INFERENCE_ENGINE</span>
          <span className="text-white">12.4ms LATENCY</span>
        </div>
        <div className="p-4 flex-1 flex flex-col justify-center gap-4">
           {/* Abstract Neural processing visualization */}
           <div className="flex justify-between items-end h-16 gap-1 px-4">
             {Array.from({length: 12}).map((_, i) => (
               <div key={i} className="w-full bg-emerald-500/20 rounded-sm relative overflow-hidden" style={{ height: `${Math.max(20, Math.random() * 100)}%` }}>
                 <div className="absolute bottom-0 left-0 w-full bg-emerald-500" style={{ height: `${Math.random() * 60}%` }}></div>
               </div>
             ))}
           </div>
           <div className="text-center text-emerald-500">99.98% CONFIDENCE</div>
        </div>
      </div>
    )
  },
  {
    id: 'automated-dispatch',
    title: 'Automated Dispatch',
    desc: 'Critical anomalies trigger immediate physical line halts and dispatch structured telemetry to enterprise dashboards before failure occurs.',
    icon: <ShieldAlert className="w-6 h-6 text-white" />,
    mockup: (
      <div className="w-full h-full bg-red-950/20 border border-red-500/20 rounded-xl overflow-hidden flex flex-col font-mono text-[10px]">
        <div className="border-b border-red-500/20 p-3 bg-red-950/50 flex justify-between items-center text-red-500">
          <span>CRITICAL_ALERT</span>
          <span className="animate-pulse">ACTION_REQUIRED</span>
        </div>
        <div className="p-4 flex-1 text-red-400">
          <div className="mb-2 text-white">Axis B Vibration Anomaly</div>
          <div className="opacity-70 mb-4">Deviation from nominal harmonics detected. Estimated failure in 4h.</div>
          <div className="bg-red-500/10 border border-red-500/20 p-2 rounded text-center text-red-500 font-bold">
            LINE_HALT_INITIATED
          </div>
        </div>
      </div>
    )
  }
];

export const HowItWorksSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current || !trackRef.current) return;

    const sections = gsap.utils.toArray('.pipeline-step') as HTMLElement[];
    
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        pin: true,
        scrub: 1,
        start: "top top",
        end: () => "+=" + trackRef.current!.offsetWidth,
      }
    });

    tl.to(sections, {
      xPercent: -100 * (sections.length - 1),
      ease: "none",
    });

    return () => {
      tl.kill();
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  return (
    <section ref={containerRef} className="h-screen w-full bg-[#050505] overflow-hidden relative border-y border-white/5" aria-label="Architecture Pipeline">
      
      {/* Absolute fixed intro for the pinned section */}
      <div className="absolute top-12 left-6 md:top-24 md:left-24 z-20 pointer-events-none">
        <h2 className="text-[20px] md:text-[24px] font-bold text-zinc-500 tracking-tight uppercase">System Architecture</h2>
      </div>

      <div ref={trackRef} className="flex h-full w-[300vw]">
        {pipelineSteps.map((step, index) => (
          <div 
            key={step.id} 
            className="pipeline-step w-screen h-full flex items-center relative overflow-hidden shrink-0 px-6 md:px-24"
          >
            <div className="w-full max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
              
              {/* Left Content */}
              <div className="flex flex-col z-10">
                <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center mb-8 border border-white/5">
                  {step.icon}
                </div>
                
                <div className="text-[12px] font-bold text-zinc-600 uppercase tracking-widest mb-4">Phase 0{index + 1}</div>
                
                <h3 className="text-[32px] md:text-[48px] font-bold text-white leading-tight tracking-tighter mb-6">
                  {step.title}
                </h3>
                
                <p className="text-[18px] text-zinc-400 max-w-md leading-relaxed">
                  {step.desc}
                </p>

                {index < pipelineSteps.length - 1 && (
                  <div className="mt-12 flex items-center text-zinc-500 text-[12px] font-mono tracking-widest uppercase">
                    Scroll to trace data <ArrowRight className="w-4 h-4 ml-4" />
                  </div>
                )}
              </div>

              {/* Right UI Mockup */}
              <div className="w-full aspect-[4/3] relative z-10">
                {/* Connecting wire from left to right */}
                <div className="absolute top-1/2 -left-24 w-24 h-px bg-white/10 hidden lg:block"></div>
                {step.mockup}
              </div>

            </div>
            
            {/* Massive background number */}
            <div className="absolute bottom-[-10%] right-[5%] text-[400px] font-bold text-white/[0.02] leading-none pointer-events-none select-none font-mono">
              0{index + 1}
            </div>

          </div>
        ))}
      </div>
    </section>
  );
};
