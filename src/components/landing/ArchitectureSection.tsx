import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const ArchitectureSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const svgRef = useRef<SVGSVGElement>(null);
  const nodesRef = useRef<SVGCircleElement[]>([]);
  const linesRef = useRef<SVGPathElement[]>([]);

  useEffect(() => {
    if (!sectionRef.current || !svgRef.current) return;

    // Set initial states for SVG drawing
    gsap.set(linesRef.current, { strokeDasharray: 1000, strokeDashoffset: 1000 });
    gsap.set(nodesRef.current, { scale: 0, transformOrigin: "50% 50%", opacity: 0 });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top top',
        end: '+=150%',
        pin: true,
        scrub: 1,
      }
    });

    // 1. Draw the factory blueprint structure
    tl.to(linesRef.current, {
      strokeDashoffset: 0,
      duration: 2,
      ease: 'none',
      stagger: 0.2
    })
    // 2. Pop in the AI nodes (cameras/sensors)
    .to(nodesRef.current, {
      scale: 1,
      opacity: 1,
      duration: 0.5,
      ease: 'back.out(2)',
      stagger: 0.1
    }, "-=1")
    // 3. Pulse the nodes to show data flow
    .to(nodesRef.current, {
      fill: '#22d3ee', // Cyan pulse
      boxShadow: '0 0 20px #22d3ee',
      duration: 0.3,
      stagger: 0.05,
      yoyo: true,
      repeat: 1
    });

    return () => {
      tl.kill();
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  return (
    <section ref={sectionRef} className="relative h-screen bg-black overflow-hidden flex flex-col items-center justify-center" aria-label="Digital Twin Architecture">
      {/* Background ambient lighting */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/20 via-transparent to-transparent opacity-50"></div>
      
      {/* Text Overlay */}
      <div className="absolute top-16 left-8 md:top-24 md:left-24 z-20 pointer-events-none">
        <h2 className="text-[32px] md:text-[56px] font-bold text-white tracking-tighter leading-tight drop-shadow-2xl">
          The Factory <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Digital Twin</span>
        </h2>
        <p className="text-gray-400 text-lg md:text-xl max-w-md mt-4">Scroll to map out the spatial architecture. Every camera becomes an active AI node.</p>
      </div>

      {/* Massive SVG Blueprint */}
      <div className="relative w-full h-full max-w-7xl mx-auto flex items-center justify-center p-4 pt-32">
        <svg 
          ref={svgRef}
          viewBox="0 0 1000 600" 
          className="w-full h-auto max-h-[80vh] drop-shadow-[0_0_15px_rgba(34,211,238,0.2)]"
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Blueprint Grid Lines (Static) */}
          <g opacity="0.1" stroke="#ffffff" strokeWidth="1">
            {Array.from({ length: 20 }).map((_, i) => (
              <line key={`v-${i}`} x1={i * 50} y1="0" x2={i * 50} y2="600" />
            ))}
            {Array.from({ length: 12 }).map((_, i) => (
              <line key={`h-${i}`} x1="0" y1={i * 50} x2="1000" y2={i * 50} />
            ))}
          </g>

          {/* Dynamic Factory Structure Paths */}
          <g stroke="#3b82f6" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" opacity="0.8">
            <path ref={el => el && linesRef.current.push(el)} d="M100 100 H900 V500 H100 Z" />
            <path ref={el => el && linesRef.current.push(el)} d="M300 100 V500" />
            <path ref={el => el && linesRef.current.push(el)} d="M700 100 V500" />
            <path ref={el => el && linesRef.current.push(el)} d="M100 300 H900" />
            <path ref={el => el && linesRef.current.push(el)} d="M400 200 H600 V400 H400 Z" stroke="#8b5cf6" />
            <path ref={el => el && linesRef.current.push(el)} d="M500 200 V400" stroke="#8b5cf6" />
          </g>

          {/* Dynamic Connecting Data Lines */}
          <g stroke="#22d3ee" strokeWidth="2" strokeDasharray="5,5" opacity="0.6">
             <path ref={el => el && linesRef.current.push(el)} d="M200 200 L400 200 L450 250" />
             <path ref={el => el && linesRef.current.push(el)} d="M800 400 L600 400 L550 350" />
             <path ref={el => el && linesRef.current.push(el)} d="M200 400 L300 300 L400 300" />
             <path ref={el => el && linesRef.current.push(el)} d="M800 200 L700 300 L600 300" />
          </g>

          {/* AI Nodes (Cameras / Sensors) */}
          {[
            [100,100], [300,100], [700,100], [900,100],
            [100,300], [300,300], [700,300], [900,300],
            [100,500], [300,500], [700,500], [900,500],
            [200,200], [800,200], [200,400], [800,400],
            [400,200], [600,200], [400,400], [600,400],
            [500,200], [500,400], [450,250], [550,350]
          ].map(([cx, cy], i) => (
            <g key={`node-${i}`}>
              <circle 
                ref={el => el && nodesRef.current.push(el)} 
                cx={cx} 
                cy={cy} 
                r="8" 
                fill="#ffffff" 
                className="drop-shadow-[0_0_10px_rgba(255,255,255,0.8)]"
              />
              <circle 
                cx={cx} 
                cy={cy} 
                r="16" 
                fill="none" 
                stroke="#22d3ee" 
                strokeWidth="1" 
                opacity="0.3"
                className="animate-ping"
                style={{ animationDuration: `${2 + (i % 3)}s`, animationDelay: `${i * 0.1}s` }}
              />
            </g>
          ))}
        </svg>
      </div>
    </section>
  );
};

