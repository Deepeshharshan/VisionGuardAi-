import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  User, Building2, Bell, Key, Plug, Shield, Palette, Lock,
  ChevronRight, Check, Copy, Eye, EyeOff, Trash2, Plus
} from 'lucide-react';

type SettingsSection = 'profile' | 'organization' | 'notifications' | 'api' | 'integrations' | 'roles' | 'theme' | 'security';

const settingsSections: { id: SettingsSection; label: string; icon: any; description: string }[] = [
  { id: 'profile',       label: 'Profile',          icon: User,      description: 'Personal information and preferences' },
  { id: 'organization',  label: 'Organization',     icon: Building2, description: 'Company details and billing' },
  { id: 'notifications', label: 'Notifications',    icon: Bell,      description: 'Alert preferences and delivery' },
  { id: 'api',           label: 'API Keys',         icon: Key,       description: 'Manage access tokens' },
  { id: 'integrations',  label: 'Integrations',     icon: Plug,      description: 'Connect third-party services' },
  { id: 'roles',         label: 'Roles & Access',   icon: Shield,    description: 'Team permissions and access control' },
  { id: 'theme',         label: 'Appearance',       icon: Palette,   description: 'Theme and display preferences' },
  { id: 'security',      label: 'Security',         icon: Lock,      description: '2FA, sessions, and audit log' },
];

const integrations = [
  { id: 'slack', name: 'Slack', desc: 'Send alerts to channels', logo: '💬', connected: true },
  { id: 'pagerduty', name: 'PagerDuty', desc: 'On-call escalation', logo: '📟', connected: true },
  { id: 'jira', name: 'Jira', desc: 'Auto-create work orders', logo: '🔵', connected: false },
  { id: 'sap', name: 'SAP ERP', desc: 'Sync maintenance records', logo: '🏭', connected: false },
  { id: 'teams', name: 'Microsoft Teams', desc: 'Push notifications to Teams', logo: '🟣', connected: false },
  { id: 'webhook', name: 'Webhook', desc: 'Custom HTTP callbacks', logo: '🪝', connected: true },
];

const apiKeys = [
  { id: 'k1', name: 'Production API', key: 'vg_prod_••••••••••••3f7a', created: 'Jul 1, 2026', lastUsed: '2 min ago', scope: 'Read/Write' },
  { id: 'k2', name: 'Analytics Token', key: 'vg_anl_••••••••••••9b2c', created: 'Jun 15, 2026', lastUsed: '1 day ago', scope: 'Read Only' },
];

const Toggle: React.FC<{ enabled: boolean; onChange: () => void }> = ({ enabled, onChange }) => (
  <button
    onClick={onChange}
    className={`relative w-10 h-5.5 rounded-full transition-colors duration-300 focus:outline-none ${enabled ? 'bg-blue-600' : 'bg-white/15'}`}
    style={{ width: 40, height: 22 }}
    role="switch"
    aria-checked={enabled}
  >
    <span
      className={`absolute top-0.5 left-0.5 w-[18px] h-[18px] rounded-full bg-white shadow transition-transform duration-300 ${enabled ? 'translate-x-[18px]' : 'translate-x-0'}`}
    />
  </button>
);

const SectionCard: React.FC<{ title: string; description?: string; children: React.ReactNode }> = ({ title, description, children }) => (
  <div className="bg-white/[0.03] border border-white/[0.08] rounded-2xl overflow-hidden">
    <div className="px-6 py-5 border-b border-white/[0.06]">
      <h3 className="text-[15px] font-semibold text-white">{title}</h3>
      {description && <p className="text-[13px] text-white/50 mt-0.5">{description}</p>}
    </div>
    <div className="p-6">{children}</div>
  </div>
);

const InputField: React.FC<{ label: string; defaultValue?: string; type?: string; placeholder?: string }> = ({
  label, defaultValue, type = 'text', placeholder
}) => (
  <div>
    <label className="block text-[12px] font-semibold uppercase tracking-widest text-white/50 mb-2">{label}</label>
    <input
      type={type}
      defaultValue={defaultValue}
      placeholder={placeholder}
      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-[14px] text-white placeholder:text-white/30 focus:outline-none focus:border-blue-500/50 focus:bg-white/[0.07] transition-all"
    />
  </div>
);

export const SettingsView: React.FC = () => {
  const [section, setSection] = useState<SettingsSection>('profile');
  const [notifications, setNotifications] = useState({
    criticalAlerts: true, warningAlerts: true, maintenanceReminders: true,
    weeklyDigest: false, productUpdates: false, soundAlerts: true,
  });
  const [showApiKey, setShowApiKey] = useState<string | null>(null);
  const [saved, setSaved] = useState(false);

  const handleSave = () => {
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  const renderContent = () => {
    switch (section) {
      case 'profile':
        return (
          <div className="space-y-6">
            <SectionCard title="Personal Information" description="Update your name, email, and avatar">
              <div className="flex items-start gap-6 mb-6">
                <div className="w-16 h-16 rounded-2xl bg-blue-600 flex items-center justify-center text-white text-xl font-bold shrink-0">SD</div>
                <div>
                  <button className="text-[13px] font-medium text-blue-400 hover:text-blue-300 transition-colors">Change avatar</button>
                  <p className="text-[12px] text-white/40 mt-1">JPG, GIF or PNG. Max 2MB.</p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <InputField label="First Name" defaultValue="Sofia" />
                <InputField label="Last Name" defaultValue="Davis" />
                <InputField label="Email" defaultValue="sofia@visionguard.ai" type="email" />
                <InputField label="Role" defaultValue="Plant Manager" />
                <div className="col-span-2">
                  <InputField label="Phone" defaultValue="+91 98765 43210" type="tel" />
                </div>
              </div>
            </SectionCard>
            <SectionCard title="Password" description="Change your account password">
              <div className="grid gap-4 max-w-sm">
                <InputField label="Current Password" type="password" placeholder="••••••••" />
                <InputField label="New Password" type="password" placeholder="••••••••" />
                <InputField label="Confirm Password" type="password" placeholder="••••••••" />
              </div>
            </SectionCard>
          </div>
        );

      case 'notifications':
        return (
          <div className="space-y-6">
            <SectionCard title="Alert Preferences" description="Control which alerts trigger notifications">
              {([
                { key: 'criticalAlerts', label: 'Critical Machine Alerts', desc: 'Immediate notifications for critical failures' },
                { key: 'warningAlerts', label: 'Warning Alerts', desc: 'Alerts for machines in warning state' },
                { key: 'maintenanceReminders', label: 'Maintenance Reminders', desc: 'Scheduled maintenance notifications' },
                { key: 'soundAlerts', label: 'Sound Notifications', desc: 'Audio alert for critical events' },
              ] as const).map(({ key, label, desc }) => (
                <div key={key} className="flex items-center justify-between py-4 border-b border-white/[0.05] last:border-0">
                  <div>
                    <div className="text-[14px] font-medium text-white">{label}</div>
                    <div className="text-[12px] text-white/50 mt-0.5">{desc}</div>
                  </div>
                  <Toggle enabled={notifications[key as keyof typeof notifications]} onChange={() => setNotifications(n => ({ ...n, [key]: !n[key as keyof typeof n] }))} />
                </div>
              ))}
            </SectionCard>
            <SectionCard title="Digest & Updates" description="Periodic summary emails">
              {([
                { key: 'weeklyDigest', label: 'Weekly Performance Digest', desc: 'Summary email every Monday at 9 AM' },
                { key: 'productUpdates', label: 'Product Updates', desc: 'New features and release notes' },
              ] as const).map(({ key, label, desc }) => (
                <div key={key} className="flex items-center justify-between py-4 border-b border-white/[0.05] last:border-0">
                  <div>
                    <div className="text-[14px] font-medium text-white">{label}</div>
                    <div className="text-[12px] text-white/50 mt-0.5">{desc}</div>
                  </div>
                  <Toggle enabled={notifications[key as keyof typeof notifications]} onChange={() => setNotifications(n => ({ ...n, [key]: !n[key as keyof typeof n] }))} />
                </div>
              ))}
            </SectionCard>
          </div>
        );

      case 'api':
        return (
          <div className="space-y-6">
            <SectionCard title="API Keys" description="Manage tokens for programmatic access">
              <div className="space-y-3 mb-4">
                {apiKeys.map(key => (
                  <div key={key.id} className="flex items-center gap-4 p-4 bg-white/[0.03] border border-white/[0.06] rounded-xl">
                    <Key className="w-4 h-4 text-white/40 shrink-0" />
                    <div className="flex-1 min-w-0">
                      <div className="text-[13px] font-semibold text-white">{key.name}</div>
                      <div className="flex items-center gap-3 mt-0.5">
                        <code className="text-[12px] font-mono text-white/50">
                          {showApiKey === key.id ? 'vg_prod_sk_realKeyHere3f7a' : key.key}
                        </code>
                        <span className="text-[11px] text-white/30">· {key.scope}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 shrink-0">
                      <span className="text-[11px] text-white/30 hidden md:block">Last: {key.lastUsed}</span>
                      <button onClick={() => setShowApiKey(showApiKey === key.id ? null : key.id)} className="p-1.5 rounded-lg hover:bg-white/10 text-white/40 hover:text-white transition-colors">
                        {showApiKey === key.id ? <EyeOff className="w-3.5 h-3.5" /> : <Eye className="w-3.5 h-3.5" />}
                      </button>
                      <button className="p-1.5 rounded-lg hover:bg-white/10 text-white/40 hover:text-white transition-colors">
                        <Copy className="w-3.5 h-3.5" />
                      </button>
                      <button className="p-1.5 rounded-lg hover:bg-red-500/10 text-white/40 hover:text-red-400 transition-colors">
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
              <button className="flex items-center gap-2 px-4 py-2.5 bg-blue-600 hover:bg-blue-500 text-white text-[13px] font-semibold rounded-xl transition-colors">
                <Plus className="w-4 h-4" />Generate New Key
              </button>
            </SectionCard>
          </div>
        );

      case 'integrations':
        return (
          <div className="space-y-6">
            <SectionCard title="Connected Services" description="Integrate with your existing enterprise tools">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {integrations.map(integration => (
                  <div key={integration.id} className={`flex items-center gap-4 p-4 rounded-xl border transition-colors ${integration.connected ? 'bg-emerald-500/5 border-emerald-500/20' : 'bg-white/[0.02] border-white/[0.08] hover:border-white/15'}`}>
                    <span className="text-2xl shrink-0">{integration.logo}</span>
                    <div className="flex-1 min-w-0">
                      <div className="text-[14px] font-semibold text-white">{integration.name}</div>
                      <div className="text-[12px] text-white/50">{integration.desc}</div>
                    </div>
                    <button className={`px-3 py-1.5 rounded-lg text-[12px] font-semibold border transition-colors shrink-0 ${integration.connected ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20 hover:bg-red-500/10 hover:text-red-400 hover:border-red-500/20' : 'bg-white/5 text-white/70 border-white/10 hover:bg-white/10 hover:text-white'}`}>
                      {integration.connected ? 'Connected' : 'Connect'}
                    </button>
                  </div>
                ))}
              </div>
            </SectionCard>
          </div>
        );

      case 'security':
        return (
          <div className="space-y-6">
            <SectionCard title="Two-Factor Authentication" description="Add an extra layer of security to your account">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-[14px] font-medium text-white">Authenticator App</div>
                  <div className="text-[12px] text-white/50 mt-0.5">Use Google Authenticator or Authy</div>
                </div>
                <span className="px-3 py-1 bg-emerald-500/10 text-emerald-400 text-[12px] font-semibold rounded-lg border border-emerald-500/20">Enabled</span>
              </div>
            </SectionCard>
            <SectionCard title="Active Sessions" description="Devices currently signed in to your account">
              {[
                { device: 'MacBook Pro (Chrome)', location: 'Mumbai, IN', time: 'Active now', current: true },
                { device: 'iPhone 15 Pro (Safari)', location: 'Mumbai, IN', time: '2 hours ago', current: false },
                { device: 'Windows PC (Edge)', location: 'Pune, IN', time: '3 days ago', current: false },
              ].map((session, i) => (
                <div key={i} className="flex items-center justify-between py-4 border-b border-white/[0.05] last:border-0">
                  <div>
                    <div className="text-[13px] font-medium text-white flex items-center gap-2">
                      {session.device}
                      {session.current && <span className="px-1.5 py-0.5 bg-blue-500/10 text-blue-400 text-[10px] font-bold rounded border border-blue-500/20">Current</span>}
                    </div>
                    <div className="text-[12px] text-white/40 mt-0.5">{session.location} · {session.time}</div>
                  </div>
                  {!session.current && (
                    <button className="text-[12px] font-medium text-red-400 hover:text-red-300 transition-colors">Revoke</button>
                  )}
                </div>
              ))}
            </SectionCard>
          </div>
        );

      default:
        return (
          <div className="flex flex-col items-center justify-center py-24 text-center">
            <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-4">
              {React.createElement(settingsSections.find(s => s.id === section)?.icon ?? User, { className: 'w-7 h-7 text-white/40' })}
            </div>
            <h3 className="text-[16px] font-semibold text-white">{settingsSections.find(s => s.id === section)?.label}</h3>
            <p className="text-[13px] text-white/50 mt-2">Configuration for this section coming soon.</p>
          </div>
        );
    }
  };

  return (
    <div className="pb-20">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
        <div>
          <h2 className="text-[20px] font-semibold text-white tracking-tight">Settings</h2>
          <p className="text-[13px] text-white/50 mt-1">Manage your account, preferences, and integrations</p>
        </div>
        <button
          onClick={handleSave}
          className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-[13px] font-semibold transition-all ${saved ? 'bg-emerald-600 text-white' : 'bg-blue-600 hover:bg-blue-500 text-white'}`}
        >
          {saved ? <><Check className="w-4 h-4" />Saved!</> : 'Save Changes'}
        </button>
      </div>

      <div className="flex gap-8">
        {/* Left Nav */}
        <nav className="w-56 shrink-0 space-y-1">
          {settingsSections.map(({ id, label, icon: Icon, description }) => {
            const isActive = section === id;
            return (
              <button
                key={id}
                onClick={() => setSection(id)}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-left transition-all ${
                  isActive ? 'bg-white/10 text-white border border-white/10' : 'text-white/50 hover:bg-white/5 hover:text-white border border-transparent'
                }`}
              >
                <Icon className={`w-4 h-4 shrink-0 ${isActive ? 'text-blue-400' : 'text-white/35'}`} />
                <span className="text-[13px] font-medium">{label}</span>
                {isActive && <ChevronRight className="w-3.5 h-3.5 ml-auto text-white/40" />}
              </button>
            );
          })}
        </nav>

        {/* Content */}
        <div className="flex-1 min-w-0">
          <motion.div
            key={section}
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.2 }}
          >
            {renderContent()}
          </motion.div>
        </div>
      </div>
    </div>
  );
};
