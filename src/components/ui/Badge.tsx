// ============================================================
// Badge — Status & Label Component
// ============================================================
import React from 'react';
import { cn } from '@/utils';

type BadgeVariant = 'primary' | 'success' | 'warning' | 'danger' | 'muted' | 'info';

interface BadgeProps {
  variant?: BadgeVariant;
  children: React.ReactNode;
  className?: string;
  dot?: boolean;
}

const variantStyles: Record<BadgeVariant, string> = {
  primary: 'bg-blue-500/10 text-blue-400 border border-blue-500/25',
  success: 'bg-green-500/10 text-green-400 border border-green-500/25',
  warning: 'bg-amber-500/10 text-amber-400 border border-amber-500/25',
  danger:  'bg-red-500/10 text-red-400 border border-red-500/25',
  muted:   'bg-slate-700/60 text-slate-400 border border-slate-600/40',
  info:    'bg-sky-500/10 text-sky-400 border border-sky-500/25',
};

const dotColors: Record<BadgeVariant, string> = {
  primary: 'bg-blue-400',
  success: 'bg-green-400',
  warning: 'bg-amber-400',
  danger:  'bg-red-400',
  muted:   'bg-slate-500',
  info:    'bg-sky-400',
};

export const Badge: React.FC<BadgeProps> = ({
  variant = 'muted',
  children,
  className,
  dot = false,
}) => {
  return (
    <span
      className={cn(
        'inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded text-xs font-semibold tracking-wide',
        variantStyles[variant],
        className
      )}
    >
      {dot && (
        <span className={cn('w-1.5 h-1.5 rounded-full flex-shrink-0', dotColors[variant])} />
      )}
      {children}
    </span>
  );
};
