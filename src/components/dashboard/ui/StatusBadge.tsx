import React from 'react';

type StatusType = 'healthy' | 'warning' | 'critical' | 'offline' | 'processing' | 'delivered' | 'pending';

interface StatusBadgeProps {
  status: StatusType;
  label?: string;
  pulse?: boolean;
  size?: 'sm' | 'md';
}

const statusConfig: Record<StatusType, { label: string; dot: string; text: string; bg: string; border: string }> = {
  healthy:    { label: 'Healthy',    dot: 'bg-emerald-400', text: 'text-emerald-400', bg: 'bg-emerald-500/10', border: 'border-emerald-500/20' },
  warning:    { label: 'Warning',    dot: 'bg-amber-400',   text: 'text-amber-400',   bg: 'bg-amber-500/10',   border: 'border-amber-500/20'   },
  critical:   { label: 'Critical',   dot: 'bg-red-400',     text: 'text-red-400',     bg: 'bg-red-500/10',     border: 'border-red-500/20'     },
  offline:    { label: 'Offline',    dot: 'bg-zinc-500',    text: 'text-zinc-400',    bg: 'bg-zinc-500/10',    border: 'border-zinc-500/20'    },
  processing: { label: 'Processing', dot: 'bg-blue-400',    text: 'text-blue-400',    bg: 'bg-blue-500/10',    border: 'border-blue-500/20'    },
  delivered:  { label: 'Delivered',  dot: 'bg-emerald-400', text: 'text-emerald-400', bg: 'bg-emerald-500/10', border: 'border-emerald-500/20' },
  pending:    { label: 'Pending',    dot: 'bg-amber-400',   text: 'text-amber-400',   bg: 'bg-amber-500/10',   border: 'border-amber-500/20'   },
};

/**
 * StatusBadge — unified enterprise status chip.
 * Replaces inconsistent ad-hoc status spans across the codebase.
 * Matches the design pattern used in Palantir Foundry and Azure IoT dashboards.
 */
export const StatusBadge: React.FC<StatusBadgeProps> = ({
  status,
  label,
  pulse = false,
  size = 'md',
}) => {
  const cfg = statusConfig[status];
  const displayLabel = label ?? cfg.label;
  const sizeClass = size === 'sm'
    ? 'px-2 py-0.5 text-[10px] gap-1'
    : 'px-2.5 py-1 text-[11px] gap-1.5';

  return (
    <span className={`inline-flex items-center font-semibold uppercase tracking-wider rounded-md border ${cfg.bg} ${cfg.text} ${cfg.border} ${sizeClass}`}>
      <span className={`rounded-full shrink-0 ${cfg.dot} ${size === 'sm' ? 'w-1.5 h-1.5' : 'w-2 h-2'} ${pulse && (status === 'critical' || status === 'processing') ? 'animate-pulse' : ''}`} />
      {displayLabel}
    </span>
  );
};
