import React from 'react';

interface MarqueeItemProps {
  name: string;
}

export const MarqueeItem: React.FC<MarqueeItemProps> = ({ name }) => {
  return (
    <div className="inline-flex items-center justify-center cursor-default group">
      <span 
        className="mono text-[13px] font-medium tracking-[0.02em] select-none whitespace-nowrap transition-colors duration-300"
        style={{ 
          color: 'var(--text-3)',
          fontFamily: 'JetBrains Mono, monospace'
        }}
        onMouseEnter={e => (e.currentTarget as HTMLElement).style.color = 'var(--text-1)'}
        onMouseLeave={e => (e.currentTarget as HTMLElement).style.color = 'var(--text-3)'}
      >
        {name}
      </span>
    </div>
  );
};
