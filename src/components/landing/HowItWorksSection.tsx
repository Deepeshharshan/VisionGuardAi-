import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Video, Brain, ScanSearch, Bell } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const pipelineSteps = [
  {
    id: 'raw-stream',
    title: 'Raw Camera Stream',
    desc: 'Ingesting 4K feeds directly from the factory floor.',
    icon: <Video className="w-12 h-12 text-blue-400" />,
    color: 'from-blue-500/20 to-blue-900/20',
  },
  {
    id: 'ai-model',
    title: 'AI Analysis Model',
    desc: 'Processing spatial data through our proprietary neural engine.',
    icon: <Brain className="w-12 h-12 text-purple-400" />,
    color: 'from-purple-500/20 to-purple-900/20',
  },
  {
    id: 'target-detection',
    title: 'Target Detection Box',
    desc: 'Identifying anomalies with 99.8% precision.',
    icon: <ScanSearch className="w-12 h-12 text-cyan-400" />,
    color: 'from-cyan-500/20 to-cyan-900/20',
  },
  {
    id: 'threat-alert',
    title: 'System Threat Alert',
    desc: 'Dispatching critical telemetry to the enterprise command center.',
    icon: <Bell className="w-12 h-12 text-red-400" />,
    color: 'from-red-500/20 to-red-900/20',
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
    <section ref={containerRef} className="h-screen w-full bg-black overflow-hidden relative" aria-label="Data Pipeline">
      
      {/* Absolute fixed intro for the pinned section */}
      <div className="absolute top-12 left-12 md:top-24 md:left-24 z-20 pointer-events-none">
        <h2 className="text-[24px] md:text-[40px] font-bold text-white tracking-tight uppercase">The Data Pipeline</h2>
        <div className="w-12 h-1 bg-cyan-400 mt-2"></div>
      </div>

      <div ref={trackRef} className="flex h-full w-[400vw]">
        {pipelineSteps.map((step, index) => (
          <div 
            key={step.id} 
            className="pipeline-step w-screen h-full flex items-center justify-center relative overflow-hidden shrink-0"
          >
            {/* Background gradient */}
            <div className={`absolute inset-0 bg-gradient-to-br ${step.color} opacity-40 mix-blend-screen`}></div>
            
            {/* Geometric clipping mask element */}
            <div className="absolute inset-0 flex items-center justify-center opacity-10">
               <div className="w-[80vw] h-[80vw] md:w-[40vw] md:h-[40vw] border-[1px] border-white rounded-full animate-[spin_40s_linear_infinite]" style={{ clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)' }}></div>
            </div>

            <div className="relative z-10 flex flex-col items-center text-center max-w-2xl px-6">
              <div className="w-24 h-24 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md flex items-center justify-center shadow-[0_0_60px_rgba(255,255,255,0.1)] mb-8">
                {step.icon}
              </div>
              
              <div className="text-[14px] font-bold text-gray-400 uppercase tracking-[0.2em] mb-4">Phase {index + 1}</div>
              
              <h3 className="text-[40px] md:text-[64px] font-extrabold text-white leading-tight tracking-tighter mb-6 drop-shadow-2xl">
                {step.title}
              </h3>
              
              <p className="text-xl text-gray-300">
                {step.desc}
              </p>

              {/* Connecting line to next step (hide on last) */}
              {index !== pipelineSteps.length - 1 && (
                <div className="absolute right-[-20vw] top-1/2 -translate-y-1/2 w-[40vw] h-[2px] bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent pointer-events-none hidden md:block"></div>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
