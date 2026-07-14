import React from 'react';
import { motion } from 'framer-motion';
import { LucideIcon, TrendingUp, TrendingDown, Minus } from 'lucide-react';
import { AnimatedCounter } from './AnimatedCounter';
import { LineChart, Line, ResponsiveContainer } from 'recharts';

interface KpiCardProps {
  title: string;
  value: number;
  valueDisplay?: string;        // override display (e.g. "99.2%") while value stays numeric for animation
  trend?: string;
  trendDirection?: 'up' | 'down' | 'neutral';
  trendLabel?: string;
  icon: LucideIcon;
  color?: 'blue' | 'emerald' | 'amber' | 'red' | 'indigo';
  delay?: number;
  suffix?: string;
  decimals?: number;
  sparkline?: number[];         // mini trend data
}

const colorMap = {
  blue:    { icon: 'bg-blue-500/10 text-blue-400 border-blue-500/20',    glow: 'rgba(59,130,246,0.08)',  line: '#3B82F6' },
  emerald: { icon: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20', glow: 'rgba(16,185,129,0.08)', line: '#10B981' },
  amber:   { icon: 'bg-amber-500/10 text-amber-400 border-amber-500/20', glow: 'rgba(245,158,11,0.08)', line: '#F59E0B' },
  red:     { icon: 'bg-red-500/10 text-red-400 border-red-500/20',       glow: 'rgba(239,68,68,0.08)',  line: '#EF4444' },
  indigo:  { icon: 'bg-indigo-500/10 text-indigo-400 border-indigo-500/20', glow: 'rgba(99,102,241,0.08)', line: '#6366F1' },
};

const trendColorMap = {
  up:      'text-emerald-400 bg-emerald-500/10',
  down:    'text-red-400 bg-red-500/10',
  neutral: 'text-white/40 bg-white/5',
};

/**
 * KpiCard — enterprise-grade metric card.
 * Upgrades from the previous version by adding:
 * - Animated counter (smooth number rollup)
 * - Trend direction arrow with pill background
 * - Mini sparkline chart
 * - Hover elevation with box-shadow
 * - Accessible aria-label
 *
 * Equivalent to the KPI cards in Palantir Foundry, Azure IoT, and Linear dashboards.
 */
export const KpiCard: React.FC<KpiCardProps> = ({
  title, value, valueDisplay, trend, trendDirection = 'neutral', trendLabel,
  icon: Icon, color = 'blue', delay = 0, suffix = '', decimals = 0, sparkline
}) => {
  const cfg = colorMap[color];
  const sparkData = sparkline?.map((v) => ({ v }));
  const TrendIcon = trendDirection === 'up' ? TrendingUp : trendDirection === 'down' ? TrendingDown : Minus;

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -2, transition: { duration: 0.2 } }}
      className="relative overflow-hidden bg-white/[0.04] border border-white/[0.08] rounded-2xl p-5 shadow-sm group cursor-default"
      style={{ boxShadow: `0 0 0 1px rgba(255,255,255,0.04), inset 0 1px 0 rgba(255,255,255,0.06)` }}
      aria-label={`${title}: ${valueDisplay ?? value}${suffix}`}
      role="figure"
    >
      {/* Ambient color glow on hover */}
      <div
        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{ background: `radial-gradient(ellipse at top right, ${cfg.glow} 0%, transparent 70%)` }}
      />

      {/* Top row */}
      <div className="flex items-start justify-between mb-4 relative z-10">
        <span className="text-[11px] font-semibold text-white/50 tracking-widest uppercase">{title}</span>
        <div className={`w-8 h-8 rounded-lg flex items-center justify-center border flex-shrink-0 ${cfg.icon}`}>
          <Icon className="w-4 h-4" />
        </div>
      </div>

      {/* Value */}
      <div className="flex items-end justify-between gap-3 relative z-10">
        <div>
          <div className="flex items-baseline gap-1">
            {valueDisplay ? (
              <span className="text-[28px] font-semibold tracking-tight text-white leading-none">
                {valueDisplay}
              </span>
            ) : (
              <AnimatedCounter
                value={value}
                suffix={suffix}
                decimals={decimals}
                duration={900}
                className="text-[28px] font-semibold tracking-tight text-white leading-none"
              />
            )}
          </div>

          {(trend || trendLabel) && (
            <div className="flex items-center gap-2 mt-2.5">
              {trend && (
                <span className={`inline-flex items-center gap-1 px-1.5 py-0.5 rounded text-[11px] font-semibold ${trendColorMap[trendDirection]}`}>
                  <TrendIcon className="w-3 h-3" />
                  {trend}
                </span>
              )}
              {trendLabel && (
                <span className="text-[12px] text-white/40">{trendLabel}</span>
              )}
            </div>
          )}
        </div>

        {/* Sparkline */}
        {sparkData && sparkData.length > 1 && (
          <div className="w-20 h-10 shrink-0 opacity-60 group-hover:opacity-100 transition-opacity">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={sparkData}>
                <Line
                  type="monotone"
                  dataKey="v"
                  stroke={cfg.line}
                  strokeWidth={1.5}
                  dot={false}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        )}
      </div>
    </motion.div>
  );
};
