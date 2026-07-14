// ============================================================
// StatsSection — Full-width 4-column stat bar
// ============================================================
import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { STATS } from '@/constants';

const Counter: React.FC<{ target: number; decimals: number; suffix: string; duration?: number }> = ({
  target, decimals, suffix, duration = 1600,
}) => {
  const [v, setV] = useState(0);
  const startRef = useRef<number | null>(null);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    const tick = (ts: number) => {
      if (!startRef.current) startRef.current = ts;
      const p = Math.min((ts - startRef.current) / duration, 1);
      setV(parseFloat(((1 - Math.pow(1 - p, 3)) * target).toFixed(decimals)));
      if (p < 1) rafRef.current = requestAnimationFrame(tick);
    };
    rafRef.current = requestAnimationFrame(tick);
    return () => { if (rafRef.current) cancelAnimationFrame(rafRef.current); };
  }, [target, decimals, duration]);

  return <span className="tabular-nums">{v.toFixed(decimals)}{suffix}</span>;
};

const StatItem: React.FC<{ value: number; suffix: string; label: string; decimals: number; index: number }> = ({
  value, suffix, label, decimals, index,
}) => {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect(); } }, { threshold: 0.4 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <motion.div ref={ref}
      initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }} transition={{ delay: index * 0.08 }}
      className="flex flex-col items-center text-center py-10 px-6 border-r border-black/[0.06] last:border-0">
      <div className="stat-number mb-3">
        {visible ? <Counter target={value} decimals={decimals} suffix={suffix} /> : `${value.toFixed(decimals)}${suffix}`}
      </div>
      <p className="t-label text-black/35">{label}</p>
    </motion.div>
  );
};

export const StatsSection: React.FC = () => (
  <section className="bg-white border-y border-black/[0.06]" aria-label="Key metrics">
    <div className="section-container">
      <div className="grid grid-cols-2 lg:grid-cols-4 divide-y lg:divide-y-0 divide-x-0 lg:divide-x divide-black/[0.06]">
        {STATS.map((s, i) => (
          <StatItem key={s.label} value={s.value} suffix={s.suffix} label={s.label} decimals={s.decimals} index={i} />
        ))}
      </div>
    </div>
  </section>
);
