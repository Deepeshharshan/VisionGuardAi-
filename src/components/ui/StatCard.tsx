// ============================================================
// StatCard — Metric Display Card
// ============================================================
import React from 'react';
import { cn } from '@/utils';

interface StatCardProps {
  label: string;
  value: string | number;
  suffix?: string;
  change?: number;
  changeLabel?: string;
  icon?: React.ReactNode;
  color?: 'primary' | 'success' | 'warning' | 'danger' | 'info';
  className?: string;
}

const colorStyles = {
  primary: {
    icon: 'bg-blue-500/10 text-blue-400 border-blue-500/20',
    value: 'text-slate-100',
    change: 'text-blue-400',
  },
  success: {
    icon: 'bg-green-500/10 text-green-400 border-green-500/20',
    value: 'text-slate-100',
    change: 'text-green-400',
  },
  warning: {
    icon: 'bg-amber-500/10 text-amber-400 border-amber-500/20',
    value: 'text-slate-100',
    change: 'text-amber-400',
  },
  danger: {
    icon: 'bg-red-500/10 text-red-400 border-red-500/20',
    value: 'text-slate-100',
    change: 'text-red-400',
  },
  info: {
    icon: 'bg-sky-500/10 text-sky-400 border-sky-500/20',
    value: 'text-slate-100',
    change: 'text-sky-400',
  },
};

export const StatCard: React.FC<StatCardProps> = ({
  label,
  value,
  suffix,
  change,
  changeLabel,
  icon,
  color = 'primary',
  className,
}) => {
  const styles = colorStyles[color];
  const isPositive = change !== undefined && change >= 0;

  return (
    <div
      className={cn(
        'bg-slate-800 border border-slate-700 rounded-xl p-5',
        'hover:border-slate-600 transition-all duration-200',
        className
      )}
    >
      <div className="flex items-start justify-between mb-4">
        <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
          {label}
        </span>
        {icon && (
          <span
            className={cn(
              'w-8 h-8 rounded-lg flex items-center justify-center border',
              styles.icon
            )}
          >
            {icon}
          </span>
        )}
      </div>

      <div className="flex items-end gap-1">
        <span className={cn('text-2xl font-bold font-mono tabular-nums', styles.value)}>
          {value}
        </span>
        {suffix && (
          <span className="text-base font-semibold text-slate-400 mb-0.5">{suffix}</span>
        )}
      </div>

      {change !== undefined && (
        <div className="flex items-center gap-1.5 mt-2">
          <span className={cn('text-xs font-semibold', isPositive ? 'text-green-400' : 'text-red-400')}>
            {isPositive ? '↑' : '↓'} {Math.abs(change)}%
          </span>
          {changeLabel && (
            <span className="text-xs text-slate-500">{changeLabel}</span>
          )}
        </div>
      )}
    </div>
  );
};
