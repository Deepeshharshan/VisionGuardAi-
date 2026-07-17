import React, { useState } from 'react';
import { Check, Copy, Eye, EyeOff, Trash2, Plus } from 'lucide-react';

type SettingsSection =
  | 'profile' | 'organization' | 'notifications' | 'api'
  | 'integrations' | 'roles' | 'appearance' | 'security';

const settingsSections: { id: SettingsSection; label: string }[] = [
  { id: 'profile',       label: 'Profile'        },
  { id: 'organization',  label: 'Organization'   },
  { id: 'notifications', label: 'Notifications'  },
  { id: 'api',           label: 'API Keys'        },
  { id: 'integrations',  label: 'Integrations'   },
  { id: 'roles',         label: 'Roles & Access'  },
  { id: 'appearance',    label: 'Appearance'      },
  { id: 'security',      label: 'Security'        },
];

const integrations = [
  { id: 'slack',     name: 'Slack',           desc: 'Send alerts to channels',      connected: true  },
  { id: 'pagerduty', name: 'PagerDuty',       desc: 'On-call escalation',           connected: true  },
  { id: 'jira',      name: 'Jira',            desc: 'Auto-create work orders',      connected: false },
  { id: 'sap',       name: 'SAP ERP',         desc: 'Sync maintenance records',     connected: false },
  { id: 'teams',     name: 'Microsoft Teams', desc: 'Push notifications to Teams',  connected: false },
  { id: 'webhook',   name: 'Webhook',         desc: 'Custom HTTP callbacks',        connected: true  },
];

const apiKeys = [
  { id: 'k1', name: 'Production API',   key: 'vg_prod_••••••••3f7a', created: '2026-07-01', lastUsed: '2m ago',  scope: 'Read/Write' },
  { id: 'k2', name: 'Analytics Token',  key: 'vg_anl_•••••••9b2c',  created: '2026-06-15', lastUsed: '1d ago',  scope: 'Read Only'  },
];

/* ─── Reusable: Label + flat input ──────────────── */
const Field: React.FC<{ label: string; defaultValue?: string; type?: string; placeholder?: string }> = ({
  label, defaultValue, type = 'text', placeholder,
}) => (
  <div>
    <label
      className="mono"
      style={{
        display: 'block',
        fontSize: 10,
        fontWeight: 500,
        color: 'var(--text-3)',
        textTransform: 'uppercase',
        letterSpacing: '0.07em',
        marginBottom: 6,
      }}
    >
      {label}
    </label>
    <input
      type={type}
      defaultValue={defaultValue}
      placeholder={placeholder}
      className="enterprise-input"
      style={{ width: '100%' }}
    />
  </div>
);

/* ─── Toggle switch ──────────────────────────────── */
const Toggle: React.FC<{ enabled: boolean; onChange: () => void }> = ({ enabled, onChange }) => (
  <button
    onClick={onChange}
    role="switch"
    aria-checked={enabled}
    style={{
      width: 36,
      height: 20,
      borderRadius: 0,
      background: enabled ? 'var(--signal)' : 'var(--border-strong)',
      border: 'none',
      cursor: 'pointer',
      position: 'relative',
      flexShrink: 0,
      transition: 'background 200ms',
    }}
  >
    <span
      style={{
        position: 'absolute',
        top: 2,
        left: 2,
        width: 16,
        height: 16,
        borderRadius: '50%',
        background: '#fff',
        transition: 'transform 200ms',
        transform: enabled ? 'translateX(16px)' : 'translateX(0)',
      }}
    />
  </button>
);

export const SettingsView: React.FC = () => {
  const [section, setSection] = useState<SettingsSection>('profile');
  const [saved, setSaved] = useState(false);
  const [notifications, setNotifications] = useState({
    criticalAlerts: true, warningAlerts: true, maintenanceReminders: true,
    weeklyDigest: false, productUpdates: false, soundAlerts: true,
  });
  const [showApiKey, setShowApiKey] = useState<string | null>(null);

  const handleSave = () => {
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  const renderContent = () => {
    switch (section) {
      case 'profile':
        return (
          <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
            {/* Panel: Personal Information */}
            <div style={{ padding: '0 0 24px' }}>
              <div className="mono" style={{ fontSize: 10, color: 'var(--text-3)', textTransform: 'uppercase', letterSpacing: '0.07em', marginBottom: 20 }}>
                Personal information
              </div>
              {/* Avatar */}
              <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 24 }}>
                <div
                  style={{
                    width: 40,
                    height: 40,
                    borderRadius: 0,
                    background: 'var(--signal)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: 13,
                    fontWeight: 600,
                    color: '#fff',
                    flexShrink: 0,
                  }}
                >
                  SD
                </div>
                <div>
                  <button style={{ fontSize: 13, color: 'var(--signal)', background: 'none', border: 'none', cursor: 'pointer', fontFamily: "'Inter', sans-serif", padding: 0 }}>
                    Change avatar
                  </button>
                  <div style={{ fontSize: 12, color: 'var(--text-3)', marginTop: 2 }}>JPG, GIF or PNG. Max 2MB.</div>
                </div>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
                <Field label="First name" defaultValue="Sofia" />
                <Field label="Last name" defaultValue="Davis" />
                <Field label="Email" defaultValue="sofia@visionguard.ai" type="email" />
                <Field label="Role" defaultValue="Plant Manager" />
                <div style={{ gridColumn: '1 / -1' }}>
                  <Field label="Phone" defaultValue="+91 98765 43210" type="tel" />
                </div>
              </div>
            </div>

            <div style={{ borderTop: '1px solid var(--border)', paddingTop: 24 }}>
              <div className="mono" style={{ fontSize: 10, color: 'var(--text-3)', textTransform: 'uppercase', letterSpacing: '0.07em', marginBottom: 20 }}>
                Password
              </div>
              <div style={{ display: 'grid', gap: 16, maxWidth: 320 }}>
                <Field label="Current password" type="password" placeholder="••••••••" />
                <Field label="New password" type="password" placeholder="••••••••" />
                <Field label="Confirm password" type="password" placeholder="••••••••" />
              </div>
            </div>
          </div>
        );

      case 'notifications':
        return (
          <div>
            <div className="mono" style={{ fontSize: 10, color: 'var(--text-3)', textTransform: 'uppercase', letterSpacing: '0.07em', marginBottom: 16 }}>
              Alert preferences
            </div>
            {([ 
              { key: 'criticalAlerts',        label: 'Critical machine alerts',    desc: 'Immediate notifications for critical failures' },
              { key: 'warningAlerts',          label: 'Warning alerts',             desc: 'Alerts for machines in warning state' },
              { key: 'maintenanceReminders',   label: 'Maintenance reminders',      desc: 'Scheduled maintenance notifications' },
              { key: 'soundAlerts',            label: 'Sound notifications',        desc: 'Audio alert for critical events' },
              { key: 'weeklyDigest',           label: 'Weekly performance digest',  desc: 'Summary email every Monday at 9 AM' },
              { key: 'productUpdates',         label: 'Product updates',            desc: 'New features and release notes' },
            ] as const).map(({ key, label, desc }, i, arr) => (
              <div
                key={key}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '12px 0',
                  borderBottom: i < arr.length - 1 ? '1px solid var(--border)' : undefined,
                  gap: 16,
                }}
              >
                <div>
                  <div style={{ fontSize: 13, fontWeight: 500, color: 'var(--text-1)' }}>{label}</div>
                  <div style={{ fontSize: 12, color: 'var(--text-3)', marginTop: 2 }}>{desc}</div>
                </div>
                <Toggle
                  enabled={notifications[key]}
                  onChange={() => setNotifications((n) => ({ ...n, [key]: !n[key] }))}
                />
              </div>
            ))}
          </div>
        );

      case 'api':
        return (
          <div>
            <div className="mono" style={{ fontSize: 10, color: 'var(--text-3)', textTransform: 'uppercase', letterSpacing: '0.07em', marginBottom: 16 }}>
              API keys
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 1, background: 'var(--border)', border: '1px solid var(--border)', borderRadius: 0, overflow: 'hidden', marginBottom: 16 }}>
              {apiKeys.map((k) => (
                <div
                  key={k.id}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 12,
                    padding: '12px 16px',
                    background: 'var(--bg-1)',
                  }}
                >
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{ fontSize: 13, fontWeight: 500, color: 'var(--text-1)' }}>{k.name}</div>
                    <div style={{ display: 'flex', gap: 8, marginTop: 2 }}>
                      <code className="mono" style={{ fontSize: 11, color: 'var(--text-3)' }}>
                        {showApiKey === k.id ? 'vg_prod_sk_realKeyHere' : k.key}
                      </code>
                      <span className="mono" style={{ fontSize: 11, color: 'var(--text-3)' }}>· {k.scope}</span>
                    </div>
                  </div>
                  <span className="mono" style={{ fontSize: 11, color: 'var(--text-3)' }}>Last used: {k.lastUsed}</span>
                  <div style={{ display: 'flex', gap: 4 }}>
                    <button onClick={() => setShowApiKey(showApiKey === k.id ? null : k.id)}
                      style={{ padding: 5, background: 'none', border: 'none', color: 'var(--text-3)', cursor: 'pointer', borderRadius: 0 }}>
                      {showApiKey === k.id ? <EyeOff size={13} /> : <Eye size={13} />}
                    </button>
                    <button style={{ padding: 5, background: 'none', border: 'none', color: 'var(--text-3)', cursor: 'pointer', borderRadius: 0 }}>
                      <Copy size={13} />
                    </button>
                    <button style={{ padding: 5, background: 'none', border: 'none', color: 'var(--red)', cursor: 'pointer', borderRadius: 0 }}>
                      <Trash2 size={13} />
                    </button>
                  </div>
                </div>
              ))}
            </div>
            <button className="vg-btn vg-btn-primary" style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 12 }}>
              <Plus size={13} />
              Generate new key
            </button>
          </div>
        );

      case 'integrations':
        return (
          <div>
            <div className="mono" style={{ fontSize: 10, color: 'var(--text-3)', textTransform: 'uppercase', letterSpacing: '0.07em', marginBottom: 16 }}>
              Connected services
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 1, background: 'var(--border)', border: '1px solid var(--border)', borderRadius: 0, overflow: 'hidden' }}>
              {integrations.map((integ) => (
                <div
                  key={integ.id}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 14,
                    padding: '12px 16px',
                    background: 'var(--bg-1)',
                  }}
                >
                  <div style={{ flex: 1 }}>
                    <div style={{ fontSize: 13, fontWeight: 500, color: 'var(--text-1)' }}>{integ.name}</div>
                    <div style={{ fontSize: 12, color: 'var(--text-3)', marginTop: 1 }}>{integ.desc}</div>
                  </div>
                  {integ.connected && (
                    <span style={{ display: 'inline-flex', alignItems: 'center', gap: 5, fontSize: 12, color: 'var(--green)' }}>
                      <span style={{ width: 5, height: 5, borderRadius: '50%', background: 'var(--green)' }} />
                      Connected
                    </span>
                  )}
                  <button
                    className={`vg-btn ${integ.connected ? 'vg-btn-danger' : 'vg-btn-ghost'}`}
                    style={{ fontSize: 12, height: 28, padding: '0 12px' }}
                  >
                    {integ.connected ? 'Disconnect' : 'Connect'}
                  </button>
                </div>
              ))}
            </div>
          </div>
        );

      case 'security':
        return (
          <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
            <div>
              <div className="mono" style={{ fontSize: 10, color: 'var(--text-3)', textTransform: 'uppercase', letterSpacing: '0.07em', marginBottom: 16 }}>
                Two-factor authentication
              </div>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <div>
                  <div style={{ fontSize: 13, fontWeight: 500, color: 'var(--text-1)' }}>Authenticator app</div>
                  <div style={{ fontSize: 12, color: 'var(--text-3)', marginTop: 2 }}>Use Google Authenticator or Authy</div>
                </div>
                <span className="mono" style={{ fontSize: 11, color: 'var(--green)', display: 'inline-flex', alignItems: 'center', gap: 5 }}>
                  <span style={{ width: 5, height: 5, borderRadius: '50%', background: 'var(--green)' }} />
                  Enabled
                </span>
              </div>
            </div>
            <div style={{ borderTop: '1px solid var(--border)', paddingTop: 24 }}>
              <div className="mono" style={{ fontSize: 10, color: 'var(--text-3)', textTransform: 'uppercase', letterSpacing: '0.07em', marginBottom: 16 }}>
                Active sessions
              </div>
              {[
                { device: 'MacBook Pro (Chrome)', location: 'Mumbai, IN', time: 'Active now', current: true },
                { device: 'iPhone 15 Pro (Safari)', location: 'Mumbai, IN', time: '2h ago', current: false },
                { device: 'Windows PC (Edge)', location: 'Pune, IN', time: '3d ago', current: false },
              ].map((session, i, arr) => (
                <div
                  key={i}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '10px 0',
                    borderBottom: i < arr.length - 1 ? '1px solid var(--border)' : undefined,
                  }}
                >
                  <div>
                    <div style={{ fontSize: 13, fontWeight: 500, color: 'var(--text-1)', display: 'flex', alignItems: 'center', gap: 8 }}>
                      {session.device}
                      {session.current && (
                        <span className="mono" style={{ fontSize: 10, color: 'var(--signal)', background: 'var(--signal-dim)', padding: '1px 5px', borderRadius: 0 }}>
                          Current
                        </span>
                      )}
                    </div>
                    <div className="mono" style={{ fontSize: 11, color: 'var(--text-3)', marginTop: 2 }}>
                      {session.location} · {session.time}
                    </div>
                  </div>
                  {!session.current && (
                    <button style={{ fontSize: 12, color: 'var(--red)', background: 'none', border: 'none', cursor: 'pointer', fontFamily: "'Inter', sans-serif" }}>
                      Revoke
                    </button>
                  )}
                </div>
              ))}
            </div>
          </div>
        );

      default:
        return (
          <div style={{ padding: '48px 0', textAlign: 'center', color: 'var(--text-3)', fontSize: 13 }}>
            Configuration for <strong style={{ color: 'var(--text-2)' }}>{settingsSections.find((s) => s.id === section)?.label}</strong> coming soon.
          </div>
        );
    }
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>

      {/* ─── PAGE HEADER ─── */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div>
          <h1 className="text-page-title">Settings</h1>
          <p style={{ marginTop: 4, fontSize: 13, color: 'var(--text-3)' }}>
            Manage your account, preferences, and integrations
          </p>
        </div>
        {/* Single primary Save — top-right of panel, never inline per-field */}
        <button
          onClick={handleSave}
          className="vg-btn vg-btn-primary"
          style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 13 }}
        >
          {saved ? <><Check size={13} /> Saved</> : 'Save changes'}
        </button>
      </div>

      <div style={{ display: 'flex', gap: 24, alignItems: 'flex-start' }}>

        {/* ─── LEFT NAV — same active-item treatment as sidebar ─── */}
        <nav style={{ width: 180, flexShrink: 0, border: '1px solid var(--border)', borderRadius: 0, overflow: 'hidden' }}>
          {settingsSections.map((s) => {
            const isActive = section === s.id;
            return (
              <button
                key={s.id}
                onClick={() => setSection(s.id)}
                style={{
                  width: '100%',
                  display: 'block',
                  padding: '8px 0',
                  paddingLeft: isActive ? 14 : 16,
                  paddingRight: 16,
                  background: isActive ? 'var(--bg-2)' : 'var(--bg-1)',
                  borderLeft: isActive ? '2px solid var(--signal)' : '2px solid transparent',
                  border: 'none',
                  borderBottom: '1px solid var(--border)',
                  borderRadius: 0,
                  cursor: 'pointer',
                  textAlign: 'left',
                  fontSize: 13,
                  fontFamily: "'Inter', sans-serif",
                  fontWeight: isActive ? 500 : 400,
                  color: isActive ? 'var(--text-1)' : 'var(--text-2)',
                  transition: 'background 100ms',
                }}
                onMouseEnter={(e) => { if (!isActive) (e.currentTarget as HTMLButtonElement).style.background = 'var(--bg-2)'; }}
                onMouseLeave={(e) => { if (!isActive) (e.currentTarget as HTMLButtonElement).style.background = 'var(--bg-1)'; }}
              >
                {s.label}
              </button>
            );
          })}
        </nav>

        {/* ─── FORM PANEL ─── */}
        <div
          style={{
            flex: 1,
            minWidth: 0,
            background: 'var(--bg-1)',
            border: '1px solid var(--border)',
            borderRadius: 0,
            padding: '24px',
          }}
        >
          {renderContent()}
        </div>
      </div>
    </div>
  );
};
