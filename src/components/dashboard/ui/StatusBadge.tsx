import React from 'react';

type StatusValue = 'healthy' | 'warning' | 'critical' | 'offline' | 'idle' | 'maintenance';

interface StatusBadgeProps {
  status: StatusValue;
  /** @deprecated ignored — kept for API compatibility */
  pulse?: boolean;
  /** @deprecated ignored — kept for API compatibility */
  size?: 'sm' | 'md' | 'lg';
}

const statusConfig: Record<StatusValue, { dotClass: string; label: string }> = {
  healthy:     { dotClass: 'vg-status-dot--green',  label: 'Healthy' },
  warning:     { dotClass: 'vg-status-dot--amber',  label: 'Warning' },
  critical:    { dotClass: 'vg-status-dot--red',    label: 'Critical' },
  offline:     { dotClass: 'vg-status-dot--muted',  label: 'Offline' },
  idle:        { dotClass: 'vg-status-dot--muted',  label: 'Idle' },
  maintenance: { dotClass: 'vg-status-dot--amber',  label: 'Maintenance' },
};

/**
 * StatusBadge — dot + word, no pill background.
 * Colors via --green / --amber / --red only.
 */
export const StatusBadge: React.FC<StatusBadgeProps> = ({ status }) => {
  const cfg = statusConfig[status] ?? statusConfig.offline;
  return (
    <span className="vg-status">
      <span className={`vg-status-dot ${cfg.dotClass}`} />
      {cfg.label}
    </span>
  );
};
