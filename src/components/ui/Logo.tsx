import React from 'react';

interface LogoProps {
  className?: string;
  dark?: boolean; // Deprecated but kept for compatibility
}

export const Logo: React.FC<LogoProps> = ({ className = '' }) => {
  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      {/* CV bounding-box mark from Sidebar design system */}
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="1" y="1" width="20" height="20" rx="1" stroke="var(--signal)" strokeWidth="1.5" fill="none" />
        <path d="M1 6V1H6" stroke="var(--signal)" strokeWidth="1.5" fill="none" />
        <path d="M16 1H21V6" stroke="var(--signal)" strokeWidth="1.5" fill="none" />
        <path d="M1 16V21H6" stroke="var(--signal)" strokeWidth="1.5" fill="none" />
        <path d="M16 21H21V16" stroke="var(--signal)" strokeWidth="1.5" fill="none" />
      </svg>
      {/* Premium Wordmark */}
      <span 
        className="text-[14px] font-[600] tracking-[-0.01em] text-[var(--text-1)]"
        style={{ fontFamily: 'Inter, system-ui, sans-serif' }}
      >
        VisionGuard
      </span>
    </div>
  );
};
