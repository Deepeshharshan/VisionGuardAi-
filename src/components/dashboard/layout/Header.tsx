import React from 'react';
import { Search, Menu } from 'lucide-react';
import type { DashboardViewType } from './Sidebar';

const viewLabels: Record<DashboardViewType, string> = {
  overview:  'Overview',
  live:      'Live Monitoring',
  machines:  'Machine Fleet',
  insights:  'AI Insights',
  reports:   'Reports',
  settings:  'Settings',
};

interface HeaderProps {
  activeView: DashboardViewType;
  setMobileMenuOpen?: (open: boolean) => void;
}

/**
 * Header — 52px top bar per spec.
 * Left: breadcrumb (VisionGuard / Current page).
 * Right: ⌘K search + system-status pill.
 */
export const Header: React.FC<HeaderProps> = ({ activeView, setMobileMenuOpen }) => {
  return (
    <header className="flex-shrink-0 flex items-center justify-between px-4 md:px-6 h-[52px] bg-[var(--bg-0)] border-b border-[var(--border)] sticky top-0 z-10">
      {/* Breadcrumb */}
      <div className="flex items-center gap-2">
        {setMobileMenuOpen && (
          <button 
            className="md:hidden text-[var(--text-1)] p-1 mr-2"
            onClick={() => setMobileMenuOpen(true)}
          >
            <Menu className="w-5 h-5" />
          </button>
        )}
        <span className="text-[13px] text-[var(--text-3)] hidden sm:inline">VisionGuard</span>
        <span className="text-[13px] text-[var(--border-strong)] hidden sm:inline">/</span>
        <span className="text-[13px] font-medium text-[var(--text-1)]">
          {viewLabels[activeView]}
        </span>
      </div>

      {/* Right side */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
        {/* Search — command palette style */}
        <div
          style={{
            position: 'relative',
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <Search
            size={13}
            style={{
              position: 'absolute',
              left: 10,
              color: 'var(--text-3)',
              pointerEvents: 'none',
            }}
          />
          <input
            type="text"
            placeholder="Search..."
            className="enterprise-input mono"
            style={{
              width: 200,
              paddingLeft: 30,
              paddingRight: 40,
              height: 30,
              fontSize: 12,
            }}
          />
          <div
            style={{
              position: 'absolute',
              right: 8,
              display: 'flex',
              gap: 2,
            }}
          >
            <kbd
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: 10,
                color: 'var(--text-3)',
                background: 'var(--bg-2)',
                border: '1px solid var(--border)',
                borderRadius: 0,
                padding: '1px 4px',
              }}
            >
              ⌘K
            </kbd>
          </div>
        </div>

        {/* System status pill */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 6,
            padding: '4px 10px',
            background: 'var(--green-dim)',
            border: '1px solid rgba(63,179,127,0.2)',
            borderRadius: 0,
          }}
        >
          <span
            style={{
              width: 6,
              height: 6,
              borderRadius: '50%',
              background: 'var(--green)',
              flexShrink: 0,
            }}
          />
          <span
            className="mono"
            style={{
              fontSize: 11,
              fontWeight: 500,
              color: 'var(--green)',
              letterSpacing: '0.03em',
            }}
          >
            All systems nominal
          </span>
        </div>
      </div>
    </header>
  );
};
