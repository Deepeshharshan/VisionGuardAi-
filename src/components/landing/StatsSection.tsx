import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { STATS } from '@/constants';

const Counter: React.FC<{ target: number; decimals: number; suffix: string; duration?: number }> = ({
  target, decimals, suffix, duration = 2000
}) => {
  const [count, setCount] = useState(0);
  const nodeRef = useRef<HTMLSpanElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => { if (entries[0].isIntersecting) setIsVisible(true); },
      { threshold: 0.1 }
    );
    if (nodeRef.current) observer.observe(nodeRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;
    let startTimestamp: number;
    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      // easeOutExpo
      const ease = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      setCount(ease * target);
      if (progress < 1) window.requestAnimationFrame(step);
    };
    window.requestAnimationFrame(step);
  }, [target, duration, isVisible]);

  return (
    <span ref={nodeRef} className="mono font-semibold">
      {count.toFixed(decimals)}
      {suffix}
    </span>
  );
};

export const StatsSection: React.FC = () => {
  return (
    <section className="py-20 bg-[var(--bg-0)]" aria-label="Key metrics">
      <div className="enterprise-container">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 divide-x divide-[var(--border)]">
          {STATS.map((stat, i) => (
            <motion.div 
              key={stat.label}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="flex flex-col items-center text-center px-4"
            >
              <div className="text-[32px] md:text-[40px] text-[var(--text-1)] mb-2 tracking-tight">
                <Counter target={stat.value} decimals={stat.decimals} suffix={stat.suffix} />
              </div>
              <div className="text-[14px] font-medium text-[var(--text-2)]">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
