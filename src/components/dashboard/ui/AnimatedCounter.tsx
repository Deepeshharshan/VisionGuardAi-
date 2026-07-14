import React, { useEffect, useRef, useState } from 'react';

interface AnimatedCounterProps {
  value: number;
  duration?: number;
  decimals?: number;
  prefix?: string;
  suffix?: string;
  className?: string;
}

/**
 * AnimatedCounter — smoothly animates a number from 0 to target value.
 * Uses requestAnimationFrame with an easeOutExpo curve for a premium feel.
 * Equivalent to the "animated statistics" pattern used in Stripe, Linear, Vercel dashboards.
 */
export const AnimatedCounter: React.FC<AnimatedCounterProps> = ({
  value,
  duration = 1200,
  decimals = 0,
  prefix = '',
  suffix = '',
  className = '',
}) => {
  const [displayValue, setDisplayValue] = useState(0);
  const startTimeRef = useRef<number | null>(null);
  const frameRef = useRef<number>(0);
  const startValueRef = useRef(0);

  useEffect(() => {
    startValueRef.current = displayValue;
    startTimeRef.current = null;

    const easeOutExpo = (t: number) => (t === 1 ? 1 : 1 - Math.pow(2, -10 * t));

    const animate = (timestamp: number) => {
      if (!startTimeRef.current) startTimeRef.current = timestamp;
      const elapsed = timestamp - startTimeRef.current;
      const progress = Math.min(elapsed / duration, 1);
      const easedProgress = easeOutExpo(progress);
      const current = startValueRef.current + (value - startValueRef.current) * easedProgress;
      setDisplayValue(current);
      if (progress < 1) {
        frameRef.current = requestAnimationFrame(animate);
      }
    };

    frameRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frameRef.current);
  }, [value, duration]);

  const formatted = displayValue.toFixed(decimals).replace(/\B(?=(\d{3})+(?!\d))/g, ',');

  return (
    <span className={className}>
      {prefix}{formatted}{suffix}
    </span>
  );
};
