import React from 'react';
import { LucideIcon } from 'lucide-react';

interface KpiCardProps {
  title: string;
  value: number;
  valueDisplay?: string;
  delta?: string;
  deltaDirection?: 'up' | 'down' | 'neutral';
  icon?: LucideIcon;
  /** If true, renders a 2px left-edge accent in --red (risk card) */
  riskAccent?: boolean;
  suffix?: string;
  decimals?: number;
  /** @deprecated kept for prop compat */
  trend?: string;
  /** @deprecated kept for prop compat */
  trendDirection?: 'up' | 'down' | 'neutral';
  /** @deprecated kept for prop compat */
  trendLabel?: string;
  /** @deprecated kept for prop compat */
  color?: string;
  /** @deprecated kept for prop compat */
  delay?: number;
  /** @deprecated kept for prop compat */
  sparkline?: number[];
}

/**
 * KpiCard — flat metric panel per VisionGuard design spec.
 * Value: 28px JetBrains Mono. Label: 11px uppercase --text-3.
 * Delta: small mono text colored green/red/muted.
 * No background fill, no glow, no shadow.
 */
export const KpiCard: React.FC<KpiCardProps> = ({
  title,
  value,
  valueDisplay,
  delta,
  deltaDirection = 'neutral',
  riskAccent = false,
  suffix = '',
  decimals = 0,
  // Legacy prop support
  trend,
  trendDirection,
  trendLabel,
}) => {
  // Support legacy props
  const displayDelta = delta ?? trend;
  const displayDir   = deltaDirection !== 'neutral' ? deltaDirection : (trendDirection ?? 'neutral');
  const displaySuffix = trendLabel ? ` ${trendLabel}` : '';

  const deltaColor =
    displayDir === 'up'   ? 'var(--green)' :
    displayDir === 'down' ? 'var(--red)'   :
    'var(--text-3)';

  const displayValue = valueDisplay ?? (
    decimals > 0 ? value.toFixed(decimals) : Math.round(value).toString()
  );

  return (
    <div
      style={{
        background: 'var(--bg-1)',
        padding: '20px 24px',
        position: 'relative',
        borderLeft: riskAccent ? '2px solid var(--red)' : undefined,
      }}
    >
      {/* Label */}
      <div
        className="mono"
        style={{
          fontSize: 11,
          fontWeight: 500,
          color: 'var(--text-3)',
          textTransform: 'uppercase',
          letterSpacing: '0.07em',
          marginBottom: 10,
        }}
      >
        {title}
      </div>

      {/* Value */}
      <div
        className="mono"
        style={{
          fontSize: 28,
          fontWeight: 400,
          color: 'var(--text-1)',
          lineHeight: 1,
          letterSpacing: '-0.01em',
        }}
      >
        {displayValue}{suffix}
      </div>

      {/* Delta */}
      {(displayDelta || displaySuffix) && (
        <div
          className="mono"
          style={{
            marginTop: 8,
            fontSize: 11,
            color: deltaColor,
            letterSpacing: '0.02em',
          }}
        >
          {displayDelta}{displaySuffix}
        </div>
      )}
    </div>
  );
};
