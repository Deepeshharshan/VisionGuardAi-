import React from 'react';

interface MarqueeItemProps {
  name: string;
}

export const MarqueeItem: React.FC<MarqueeItemProps> = ({ name }) => {
  return (
    <div className="inline-flex items-center justify-center cursor-default group">
      <span 
        className="text-[15px] font-medium tracking-[0.02em] text-[#6B7280] group-hover:text-[#111827] select-none whitespace-nowrap transition-colors duration-300" 
        style={{ fontFamily: 'Inter, sans-serif' }}
      >
        {name}
      </span>
    </div>
  );
};
