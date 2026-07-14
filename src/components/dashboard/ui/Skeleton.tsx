import React from 'react';

interface SkeletonProps {
  className?: string;
}

/**
 * Skeleton — shimmer loading placeholder.
 * Uses CSS animation for hardware-accelerated shimmer.
 * Pattern from Vercel/Linear loading states.
 */
export const Skeleton: React.FC<SkeletonProps> = ({ className = '' }) => (
  <div
    className={`relative overflow-hidden rounded-md bg-white/5 ${className}`}
  >
    <div
      className="absolute inset-0 -translate-x-full animate-[shimmer_1.5s_infinite]"
      style={{
        background: 'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.04) 50%, transparent 100%)',
        animationTimingFunction: 'linear',
      }}
    />
  </div>
);

export const SkeletonKpiCard: React.FC = () => (
  <div className="bg-white/5 border border-white/10 rounded-2xl p-5 space-y-4">
    <div className="flex items-start justify-between">
      <Skeleton className="h-3 w-24" />
      <Skeleton className="h-8 w-8 rounded-lg" />
    </div>
    <Skeleton className="h-8 w-32" />
    <Skeleton className="h-3 w-20" />
  </div>
);

export const SkeletonTableRow: React.FC = () => (
  <tr className="border-b border-white/5">
    {[1, 2, 3, 4, 5].map((i) => (
      <td key={i} className="px-6 py-4">
        <Skeleton className="h-3 w-full" />
      </td>
    ))}
  </tr>
);
