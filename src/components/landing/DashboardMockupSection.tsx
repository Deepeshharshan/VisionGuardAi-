import React, { useEffect, useRef } from 'react';
import { DashboardMockup } from './DashboardMockup';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const DashboardMockupSection: React.FC = () => {
  const containerRef = useRef<HTMLElement>(null);
  const mockupRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current || !mockupRef.current || !textRef.current) return;

    // The Spatial Ingestion: Sticky scroll deep-zoom
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top top',
        end: '+=200%', // Scroll for 200% of viewport height
        pin: true,
        scrub: 0.5,
      }
    });

    // Animate text out and dashboard in
    tl.to(textRef.current, { opacity: 0, y: -50, duration: 1 })
      .fromTo(mockupRef.current, 
        { opacity: 0.3, scale: 0.6, rotationX: 25, y: 150 },
        { opacity: 1, scale: 1, rotationX: 0, y: 0, duration: 3, ease: 'power2.inOut' },
        "-=1"
      );

    return () => {
      tl.kill();
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  return (
    <section ref={containerRef} className="relative h-screen bg-black overflow-hidden flex flex-col items-center justify-center" aria-label="Dashboard Preview">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/10 via-transparent to-transparent opacity-80 pointer-events-none"></div>
      
      {/* Intro Text */}
      <div ref={textRef} className="absolute top-1/4 text-center z-20 px-6 max-w-2xl">
        <h2 className="text-[32px] md:text-[48px] font-bold text-white mb-4 tracking-tight">Enter the Core.</h2>
        <p className="text-gray-400 text-lg">Scroll to ingest the digital twin ecosystem and take command of the factory floor.</p>
      </div>
      
      <div className="enterprise-container relative z-10 w-full flex items-center justify-center h-full pt-32">
        
        {/* Dashboard Mockup - Centered & Scaled */}
        <div
          ref={mockupRef}
          className="relative w-full max-w-7xl mx-auto perspective-wrapper origin-center"
        >
          {/* Intense glow behind mockup */}
          <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/20 via-blue-500/20 to-purple-500/20 blur-[120px] rounded-[64px] -z-10 animate-pulse" />
          
          <div className="rounded-3xl border border-white/20 shadow-[0_0_120px_rgba(0,0,0,0.4)] bg-black/50 backdrop-blur-xl overflow-hidden">
            <DashboardMockup />
          </div>
        </div>
        
      </div>
    </section>
  );
};
