import React from 'react';

interface LogoProps {
  className?: string;
  dark?: boolean;
}

export const Logo: React.FC<LogoProps> = ({ className = '', dark = false }) => {
  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      {/* Geometric minimal logo icon */}
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="shrink-0">
        <rect x="3" y="4" width="6" height="16" rx="1" fill={dark ? "white" : "#111827"} />
        <rect x="11" y="10" width="6" height="10" rx="1" fill={dark ? "white" : "#111827"} />
        {/* Blue accent */}
        <rect x="11" y="4" width="6" height="4" rx="1" fill="#3B82F6" />
      </svg>
      {/* Premium Wordmark */}
      <span 
        className={`text-[17px] font-[600] tracking-[-0.01em] ${dark ? 'text-white' : 'text-[#111827]'}`}
        style={{ fontFamily: 'Inter, system-ui, sans-serif' }}
      >
        VisionGuard <span className={`font-[400] ${dark ? 'text-white/60' : 'text-[#6B7280]'}`}>AI</span>
      </span>
    </div>
  );
};
