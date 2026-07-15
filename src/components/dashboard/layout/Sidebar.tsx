import React from 'react';
import { Link } from 'react-router-dom';
import { LogOut } from 'lucide-react';

export type DashboardViewType = 'overview' | 'live' | 'machines' | 'insights' | 'reports' | 'settings';

interface SidebarProps {
  activeView: DashboardViewType;
  setActiveView: (view: DashboardViewType) => void;
}

const navItems: { id: DashboardViewType; label: string; badge?: number }[] = [
  { id: 'overview',  label: 'Overview' },
  { id: 'live',      label: 'Live Monitoring', badge: 3 },
  { id: 'machines',  label: 'Machine Fleet' },
  { id: 'insights',  label: 'AI Insights' },
  { id: 'reports',   label: 'Reports' },
  { id: 'settings',  label: 'Settings' },
];

/**
 * Sidebar — 220px fixed rail per VisionGuard design spec.
 * Brand mark uses CV corner-bracket motif in --signal.
 * Active nav: 2px --signal left edge + --bg-2 background.
 * Badge counts: JetBrains Mono pill in --signal at 15% opacity.
 */
export const Sidebar: React.FC<SidebarProps> = ({ activeView, setActiveView }) => {
  return (
    <aside
      style={{
        width: 220,
        flexShrink: 0,
        display: 'flex',
        flexDirection: 'column',
        background: 'var(--bg-1)',
        borderRight: '1px solid var(--border)',
        height: '100vh',
        position: 'sticky',
        top: 0,
        zIndex: 20,
      }}
    >
      {/* Brand mark */}
      <div style={{ padding: '20px 20px 16px', borderBottom: '1px solid var(--border)' }}>
        <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: 10, textDecoration: 'none' }}>
          {/* CV bounding-box mark — the only place this motif appears */}
          <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* outer square outline */}
            <rect x="1" y="1" width="20" height="20" rx="1" stroke="var(--signal)" strokeWidth="1.5" fill="none" />
            {/* corner brackets — top-left */}
            <path d="M1 6V1H6" stroke="var(--signal)" strokeWidth="1.5" fill="none" />
            {/* corner brackets — top-right */}
            <path d="M16 1H21V6" stroke="var(--signal)" strokeWidth="1.5" fill="none" />
            {/* corner brackets — bottom-left */}
            <path d="M1 16V21H6" stroke="var(--signal)" strokeWidth="1.5" fill="none" />
            {/* corner brackets — bottom-right */}
            <path d="M16 21H21V16" stroke="var(--signal)" strokeWidth="1.5" fill="none" />
          </svg>
          <span
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: 13,
              fontWeight: 600,
              color: 'var(--text-1)',
              letterSpacing: '-0.01em',
            }}
          >
            VisionGuard
          </span>
        </Link>
      </div>

      {/* Navigation */}
      <nav style={{ flex: 1, padding: '8px 0', overflowY: 'auto' }}>
        {navItems.map((item) => {
          const isActive = activeView === item.id;
          return (
            <button
              key={item.id}
              onClick={() => setActiveView(item.id)}
              style={{
                width: '100%',
                display: 'flex',
                alignItems: 'center',
                gap: 0,
                padding: '7px 0',
                paddingLeft: isActive ? 18 : 20,
                paddingRight: 16,
                background: isActive ? 'var(--bg-2)' : 'transparent',
                borderLeft: isActive ? '2px solid var(--signal)' : '2px solid transparent',
                border: 'none',
                borderRadius: 0,
                cursor: 'pointer',
                transition: 'background 100ms ease',
                textAlign: 'left',
              }}
              onMouseEnter={(e) => {
                if (!isActive) (e.currentTarget as HTMLButtonElement).style.background = 'var(--bg-2)';
              }}
              onMouseLeave={(e) => {
                if (!isActive) (e.currentTarget as HTMLButtonElement).style.background = 'transparent';
              }}
            >
              <span
                style={{
                  flex: 1,
                  fontFamily: "'Inter', sans-serif",
                  fontSize: 13,
                  fontWeight: isActive ? 500 : 400,
                  color: isActive ? 'var(--text-1)' : 'var(--text-2)',
                }}
              >
                {item.label}
              </span>
              {item.badge !== undefined && (
                <span
                  className="mono"
                  style={{
                    fontSize: 11,
                    fontWeight: 500,
                    color: 'var(--signal)',
                    background: 'var(--signal-dim)',
                    padding: '1px 6px',
                    borderRadius: 2,
                    lineHeight: '18px',
                  }}
                >
                  {item.badge}
                </span>
              )}
            </button>
          );
        })}
      </nav>

      {/* User profile */}
      <div style={{ padding: '12px 20px 20px', borderTop: '1px solid var(--border)' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <div
            style={{
              width: 28,
              height: 28,
              borderRadius: 4,
              background: 'var(--signal)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0,
              fontFamily: "'Inter', sans-serif",
              fontSize: 11,
              fontWeight: 600,
              color: '#fff',
            }}
          >
            SD
          </div>
          <div style={{ flex: 1, minWidth: 0 }}>
            <div style={{ fontSize: 13, fontWeight: 500, color: 'var(--text-1)', lineHeight: 1.3 }}>
              Sofia Davis
            </div>
            <div style={{ fontSize: 11, color: 'var(--text-3)', lineHeight: 1.3 }}>Plant Manager</div>
          </div>
          <Link
            to="/login"
            style={{
              color: 'var(--text-3)',
              display: 'flex',
              alignItems: 'center',
              padding: 4,
              borderRadius: 2,
              transition: 'color 100ms',
            }}
            title="Sign out"
          >
            <LogOut size={14} />
          </Link>
        </div>
      </div>
    </aside>
  );
};
