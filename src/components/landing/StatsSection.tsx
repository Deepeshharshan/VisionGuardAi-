import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Clock, AlertTriangle, CheckCircle, PenTool } from 'lucide-react';

export const StatsSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  // Scroll drives the timeline progress bar
  const heightProgress = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  const events = [
    {
      time: "T-14 DAYS",
      status: "NOMINAL",
      title: "Baseline Established",
      desc: "VisionGuard establishes normal operational harmonics for Spindle Motor #4.",
      icon: <CheckCircle className="w-5 h-5 text-emerald-500" />,
      color: "border-emerald-500/30 bg-emerald-500/10 text-emerald-500"
    },
    {
      time: "T-7 DAYS",
      status: "EARLY_WARNING",
      title: "Micro-Fracture Detected",
      desc: "0.2mm surface variation identified. AI flags sub-audible vibration increase.",
      icon: <AlertTriangle className="w-5 h-5 text-amber-500" />,
      color: "border-amber-500/30 bg-amber-500/10 text-amber-500"
    },
    {
      time: "T-48 HOURS",
      status: "CRITICAL_ALERT",
      title: "Failure Probability 89%",
      desc: "Thermal signature spikes 12%. Automated alert dispatched to maintenance crew.",
      icon: <AlertTriangle className="w-5 h-5 text-red-500" />,
      color: "border-red-500/30 bg-red-500/10 text-red-500"
    },
    {
      time: "T-0 HOURS",
      status: "RESOLVED",
      title: "Scheduled Maintenance",
      desc: "Part replaced during planned downtime. Zero unplanned production loss.",
      icon: <PenTool className="w-5 h-5 text-blue-500" />,
      color: "border-blue-500/30 bg-blue-500/10 text-blue-500"
    }
  ];

  return (
    <section ref={containerRef} className="py-32 bg-[#050505] border-b border-white/5 relative" aria-label="Temporal Diagnostics">
      <div className="enterprise-container grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        
        {/* Left narrative */}
        <div className="sticky top-48">
          <h2 className="text-[20px] md:text-[24px] font-bold text-zinc-500 tracking-tight uppercase mb-2">Predictive Timeline</h2>
          <p className="text-white text-[32px] md:text-[48px] font-bold tracking-tighter leading-[1.1] mb-6 max-w-md">
            Stop reacting to failure. <br/> Fix it weeks in advance.
          </p>
          <p className="text-[18px] text-zinc-400 max-w-md leading-relaxed">
            By continuously monitoring visual, thermal, and spatial data, VisionGuard builds an exact timeline of mechanical degradation, giving you days to schedule maintenance instead of minutes to manage a crisis.
          </p>
        </div>

        {/* Right timeline UI */}
        <div className="relative pl-8 md:pl-16">
          {/* Track background */}
          <div className="absolute top-0 bottom-0 left-[23px] w-px bg-white/10" />
          
          {/* Animated fill track */}
          <motion.div 
            style={{ height: heightProgress }} 
            className="absolute top-0 left-[22px] w-[3px] bg-white origin-top"
          />

          <div className="flex flex-col gap-12">
            {events.map((event, i) => (
              <div key={i} className="relative flex gap-8 items-start">
                
                {/* Timeline Node */}
                <div className="relative z-10 w-12 h-12 rounded-full bg-black border border-white/20 flex items-center justify-center shrink-0 -ml-[23px]">
                  {event.icon}
                </div>
                
                {/* Card */}
                <motion.div 
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="bg-[#0a0a0a] border border-white/10 p-6 rounded-xl flex-1 shadow-xl"
                >
                  <div className="flex justify-between items-center mb-4">
                    <span className="font-mono text-zinc-500 text-[12px]">{event.time}</span>
                    <span className={`px-2 py-0.5 rounded text-[10px] font-bold tracking-widest border ${event.color}`}>
                      {event.status}
                    </span>
                  </div>
                  <h4 className="text-[18px] text-white font-semibold mb-2">{event.title}</h4>
                  <p className="text-[14px] text-zinc-400">{event.desc}</p>
                </motion.div>
                
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
