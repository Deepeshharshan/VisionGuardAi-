// ============================================================
// DashboardPage — Enterprise Analytics Dashboard
// ============================================================
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Activity, AlertTriangle, Camera, CheckCircle2, Clock,
  TrendingUp, Server, Shield, Bell, Search, Settings,
  LogOut, ChevronDown, BarChart2, Layers, Cpu, Download,
  Video, ScanSearch, MoreHorizontal, ArrowUpRight,
} from 'lucide-react';
import {
  AreaChart, Area, LineChart, Line, BarChart, Bar,
  XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
} from 'recharts';
import { Link, useNavigate } from 'react-router-dom';

// ─── Mock Data ─────────────────────────────────────────────
const detectionData = [
  { time: '00:00', detections: 12, anomalies: 1 },
  { time: '02:00', detections: 8, anomalies: 0 },
  { time: '04:00', detections: 15, anomalies: 2 },
  { time: '06:00', detections: 24, anomalies: 1 },
  { time: '08:00', detections: 48, anomalies: 3 },
  { time: '10:00', detections: 62, anomalies: 2 },
  { time: '12:00', detections: 58, anomalies: 4 },
  { time: '14:00', detections: 72, anomalies: 3 },
  { time: '16:00', detections: 85, anomalies: 5 },
  { time: '18:00', detections: 67, anomalies: 2 },
  { time: '20:00', detections: 43, anomalies: 1 },
  { time: '22:00', detections: 28, anomalies: 0 },
];

const healthData = [
  { name: 'Mon', healthy: 8, warning: 2, critical: 1 },
  { name: 'Tue', healthy: 9, warning: 1, critical: 1 },
  { name: 'Wed', healthy: 7, warning: 3, critical: 2 },
  { name: 'Thu', healthy: 10, warning: 1, critical: 0 },
  { name: 'Fri', healthy: 8, warning: 2, critical: 1 },
  { name: 'Sat', healthy: 9, warning: 2, critical: 0 },
  { name: 'Sun', healthy: 11, warning: 0, critical: 0 },
];

const machines = [
  { id: 'M001', name: 'CNC Lathe #3', type: 'CNC Machine', location: 'Floor A', status: 'healthy', score: 96, alerts: 0, uptime: 99.2 },
  { id: 'M002', name: 'Hydraulic Press #7', type: 'Press', location: 'Floor B', status: 'warning', score: 71, alerts: 2, uptime: 94.5 },
  { id: 'M003', name: 'Conveyor Belt #2', type: 'Conveyor', location: 'Floor C', status: 'critical', score: 38, alerts: 5, uptime: 78.3 },
  { id: 'M004', name: 'Welding Robot #1', type: 'Robot', location: 'Floor A', status: 'healthy', score: 89, alerts: 0, uptime: 97.8 },
  { id: 'M005', name: 'Injection Molder #4', type: 'Molder', location: 'Floor D', status: 'healthy', score: 92, alerts: 1, uptime: 98.1 },
];

const alerts = [
  { id: 'A001', machine: 'Conveyor Belt #2', type: 'critical', message: 'Severe vibration anomaly detected — immediate inspection required', time: '2m ago', status: 'open' },
  { id: 'A002', machine: 'Hydraulic Press #7', type: 'warning', message: 'Surface crack detected on component batch #4421', time: '15m ago', status: 'acknowledged' },
  { id: 'A003', machine: 'CNC Lathe #3', type: 'info', message: 'Scheduled maintenance reminder — 48 hours remaining', time: '1h ago', status: 'open' },
  { id: 'A004', machine: 'Injection Molder #4', type: 'warning', message: 'Temperature deviation detected — check coolant flow', time: '3h ago', status: 'resolved' },
];

const recentVideos = [
  { id: 'V001', filename: 'assembly_line_a_2024_01.mp4', machine: 'CNC Lathe #3', status: 'completed', detections: 3, confidence: 97.2, time: '4h ago' },
  { id: 'V002', filename: 'hydraulic_press_inspection.mp4', machine: 'Hydraulic Press #7', status: 'completed', detections: 7, confidence: 94.5, time: '6h ago' },
  { id: 'V003', filename: 'conveyor_anomaly_check.mp4', machine: 'Conveyor Belt #2', status: 'processing', detections: 0, confidence: 0, time: 'Just now' },
];

// ─── Sub-Components ─────────────────────────────────────────

const statusConfig = {
  healthy: { color: '#22C55E', bg: 'rgba(34,197,94,0.08)', border: 'rgba(34,197,94,0.2)', label: 'Healthy' },
  warning: { color: '#F59E0B', bg: 'rgba(245,158,11,0.08)', border: 'rgba(245,158,11,0.2)', label: 'Warning' },
  critical: { color: '#EF4444', bg: 'rgba(239,68,68,0.08)', border: 'rgba(239,68,68,0.2)', label: 'Critical' },
  offline:  { color: '#64748B', bg: 'rgba(100,116,139,0.08)', border: 'rgba(100,116,139,0.2)', label: 'Offline' },
};

const alertTypeConfig = {
  critical: { color: '#EF4444', bg: 'rgba(239,68,68,0.08)', border: 'rgba(239,68,68,0.2)' },
  warning:  { color: '#F59E0B', bg: 'rgba(245,158,11,0.08)', border: 'rgba(245,158,11,0.2)' },
  info:     { color: '#38BDF8', bg: 'rgba(56,189,248,0.08)', border: 'rgba(56,189,248,0.2)' },
};

// Custom Tooltip for charts
const CustomTooltip = ({ active, payload, label }: any) => {
  if (!active || !payload?.length) return null;
  return (
    <div className="bg-slate-800 border border-slate-600 rounded-lg p-3 shadow-xl">
      <p className="text-xs text-slate-400 mb-2">{label}</p>
      {payload.map((p: any) => (
        <p key={p.name} className="text-xs font-semibold" style={{ color: p.color }}>
          {p.name}: {p.value}
        </p>
      ))}
    </div>
  );
};

// ─── Sidebar ────────────────────────────────────────────────
const navItems = [
  { label: 'Dashboard', icon: BarChart2, active: true },
  { label: 'Video Analysis', icon: Video, active: false },
  { label: 'Machines', icon: Server, active: false },
  { label: 'Alerts', icon: Bell, active: false },
  { label: 'Reports', icon: ScanSearch, active: false },
  { label: 'Settings', icon: Settings, active: false },
];

const Sidebar: React.FC<{ onNavigate: (item: string) => void }> = ({ onNavigate }) => {
  const [active, setActive] = useState('Dashboard');
  return (
    <aside
      className="w-56 flex-shrink-0 flex flex-col border-r border-slate-700"
      style={{ background: '#0D1626' }}
      aria-label="Sidebar navigation"
    >
      {/* Logo */}
      <div className="flex items-center gap-2.5 px-4 py-4 border-b border-slate-700">
        <div className="w-7 h-7 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
          <Shield className="w-3.5 h-3.5 text-white" />
        </div>
        <div className="leading-none">
          <div className="text-xs font-bold text-slate-100">VisionGuard</div>
          <div className="text-[9px] font-semibold text-blue-400 tracking-widest uppercase">AI</div>
        </div>
      </div>

      {/* Nav Items */}
      <nav className="flex-1 p-3 space-y-0.5 overflow-y-auto" aria-label="Main navigation">
        {navItems.map(({ label, icon: Icon }) => {
          const isActive = active === label;
          return (
            <button
              key={label}
              onClick={() => { setActive(label); onNavigate(label); }}
              className={`w-full flex items-center gap-2.5 px-3 py-2 rounded-md text-left transition-all duration-150 cursor-pointer ${
                isActive
                  ? 'bg-blue-600/15 text-blue-300 border border-blue-500/20'
                  : 'text-slate-400 hover:bg-slate-800 hover:text-slate-200 border border-transparent'
              }`}
              aria-current={isActive ? 'page' : undefined}
            >
              <Icon className="w-4 h-4 flex-shrink-0" />
              <span className="text-xs font-semibold">{label}</span>
            </button>
          );
        })}
      </nav>

      {/* Bottom — System Status */}
      <div className="p-3 border-t border-slate-700">
        <div className="px-3 py-2 rounded-md bg-slate-800 space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-[10px] text-slate-500">System Status</span>
            <div className="flex items-center gap-1">
              <div className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
              <span className="text-[10px] text-green-400 font-semibold">All Systems Operational</span>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Camera className="w-3 h-3 text-slate-600" />
            <span className="text-[10px] text-slate-500">12 cameras active</span>
          </div>
        </div>
      </div>
    </aside>
  );
};

// ─── Top Bar ────────────────────────────────────────────────
const TopBar: React.FC<{ onLogout: () => void }> = ({ onLogout }) => {
  const [notifOpen, setNotifOpen] = useState(false);
  return (
    <header
      className="flex items-center justify-between px-5 py-3 border-b border-slate-700 flex-shrink-0"
      style={{ background: '#0D1626' }}
    >
      {/* Search */}
      <div className="relative w-64">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-slate-600" />
        <input
          type="search"
          placeholder="Search machines, alerts..."
          className="w-full pl-8 pr-3 py-1.5 bg-slate-800 border border-slate-700 rounded-md
                     text-xs text-slate-300 placeholder:text-slate-600
                     focus:outline-none focus:ring-1 focus:ring-blue-500/50 focus:border-blue-500/40
                     transition-colors"
          aria-label="Search"
        />
      </div>

      <div className="flex items-center gap-2">
        {/* Quick Export */}
        <button
          className="flex items-center gap-1.5 px-3 py-1.5 bg-transparent border border-slate-700
                     rounded-md text-xs font-semibold text-slate-400 hover:bg-slate-800 hover:text-slate-200
                     transition-colors cursor-pointer"
          title="Export report"
        >
          <Download className="w-3.5 h-3.5" />
          Export
        </button>

        {/* Notifications */}
        <div className="relative">
          <button
            onClick={() => setNotifOpen(!notifOpen)}
            className="relative w-8 h-8 flex items-center justify-center text-slate-400 hover:text-slate-200
                       hover:bg-slate-800 rounded-md transition-colors cursor-pointer"
            aria-label="Notifications"
            aria-expanded={notifOpen}
          >
            <Bell className="w-4 h-4" />
            <span className="absolute top-1 right-1 w-1.5 h-1.5 bg-red-400 rounded-full" />
          </button>
          {notifOpen && (
            <div
              className="absolute right-0 top-10 w-72 rounded-xl border border-slate-700 shadow-xl z-50 overflow-hidden"
              style={{ background: '#111827' }}
            >
              <div className="flex items-center justify-between px-4 py-3 border-b border-slate-700">
                <span className="text-xs font-semibold text-slate-300">Notifications</span>
                <span className="px-1.5 py-0.5 bg-red-500/15 text-red-400 text-[10px] font-bold rounded">3 New</span>
              </div>
              <div className="max-h-64 overflow-y-auto">
                {alerts.slice(0, 3).map((alert) => {
                  const cfg = alertTypeConfig[alert.type as keyof typeof alertTypeConfig];
                  return (
                    <div key={alert.id} className="px-4 py-3 border-b border-slate-700/50 last:border-0 hover:bg-slate-800 transition-colors">
                      <p className="text-xs text-slate-300 mb-1 leading-snug">{alert.message}</p>
                      <div className="flex items-center justify-between">
                        <span className="text-[10px] text-slate-600">{alert.machine}</span>
                        <span className="text-[10px]" style={{ color: cfg.color }}>{alert.time}</span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </div>

        {/* Divider */}
        <div className="w-px h-5 bg-slate-700" />

        {/* User Profile */}
        <div className="flex items-center gap-2 cursor-pointer group">
          <div className="w-7 h-7 rounded-full bg-blue-600 flex items-center justify-center flex-shrink-0">
            <span className="text-[10px] font-bold text-white">RS</span>
          </div>
          <div className="hidden sm:block text-left">
            <div className="text-xs font-semibold text-slate-200">Rajesh Sharma</div>
            <div className="text-[10px] text-slate-500">Plant Manager</div>
          </div>
          <ChevronDown className="w-3 h-3 text-slate-500 group-hover:text-slate-300 transition-colors" />
        </div>

        {/* Logout */}
        <button
          onClick={onLogout}
          className="w-8 h-8 flex items-center justify-center text-slate-600 hover:text-red-400
                     hover:bg-red-500/10 rounded-md transition-colors cursor-pointer"
          title="Sign out"
          aria-label="Sign out"
        >
          <LogOut className="w-4 h-4" />
        </button>
      </div>
    </header>
  );
};

// ─── Main Dashboard ──────────────────────────────────────────
const DashboardPage: React.FC = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('overview');

  return (
    <div className="flex h-screen overflow-hidden" style={{ background: '#0B1220' }}>
      <Sidebar onNavigate={() => {}} />

      <div className="flex-1 flex flex-col overflow-hidden">
        <TopBar onLogout={() => navigate('/login')} />

        {/* Main Content */}
        <main
          className="flex-1 overflow-y-auto p-5 space-y-5"
          style={{ background: '#0B1220' }}
          id="main-content"
          tabIndex={-1}
        >
          {/* Page Title */}
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-base font-bold text-slate-100">Operations Dashboard</h1>
              <p className="text-xs text-slate-500 mt-0.5">
                Real-time monitoring · {new Date().toLocaleDateString('en-IN', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
              </p>
            </div>
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-md bg-green-500/8 border border-green-500/20">
                <div className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                <span className="text-xs font-semibold text-green-400">All Systems Live</span>
              </div>
            </div>
          </div>

          {/* Stats Row */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-2 lg:grid-cols-4 gap-4"
          >
            {[
              {
                label: 'Total Machines',
                value: '12',
                change: 0,
                changeLabel: 'from last month',
                icon: Server,
                color: 'bg-blue-500/10 text-blue-400 border-blue-500/20',
                valueColor: 'text-slate-100',
              },
              {
                label: 'Active Alerts',
                value: '7',
                change: -15,
                changeLabel: 'from yesterday',
                icon: AlertTriangle,
                color: 'bg-red-500/10 text-red-400 border-red-500/20',
                valueColor: 'text-red-400',
              },
              {
                label: 'Detections Today',
                value: '247',
                change: 12,
                changeLabel: 'from yesterday',
                icon: Activity,
                color: 'bg-purple-500/10 text-purple-400 border-purple-500/20',
                valueColor: 'text-slate-100',
              },
              {
                label: 'System Uptime',
                value: '99.2%',
                change: 0.1,
                changeLabel: 'from last week',
                icon: TrendingUp,
                color: 'bg-green-500/10 text-green-400 border-green-500/20',
                valueColor: 'text-green-400',
              },
            ].map(({ label, value, change, changeLabel, icon: Icon, color, valueColor }) => (
              <div
                key={label}
                className="rounded-xl border border-slate-700 p-4 hover:border-slate-600 transition-all"
                style={{ background: '#111827' }}
              >
                <div className="flex items-start justify-between mb-3">
                  <span className="text-[10px] font-semibold text-slate-500 uppercase tracking-wider">
                    {label}
                  </span>
                  <span className={`w-7 h-7 rounded-md flex items-center justify-center border ${color}`}>
                    <Icon className="w-3.5 h-3.5" />
                  </span>
                </div>
                <div className={`text-2xl font-bold tabular-nums mb-1 ${valueColor}`}>{value}</div>
                <div className="flex items-center gap-1">
                  <span className={`text-[10px] font-semibold ${change >= 0 ? 'text-green-400' : 'text-red-400'}`}>
                    {change >= 0 ? '↑' : '↓'} {Math.abs(change)}%
                  </span>
                  <span className="text-[10px] text-slate-600">{changeLabel}</span>
                </div>
              </div>
            ))}
          </motion.div>

          {/* Charts Row */}
          <div className="grid lg:grid-cols-3 gap-4">
            {/* Detection Timeline — 2/3 width */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.08 }}
              className="lg:col-span-2 rounded-xl border border-slate-700 p-5"
              style={{ background: '#111827' }}
            >
              <div className="flex items-center justify-between mb-5">
                <div>
                  <h2 className="text-sm font-semibold text-slate-100">Detection Timeline</h2>
                  <p className="text-[11px] text-slate-500 mt-0.5">Detections and anomalies over 24 hours</p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="flex items-center gap-1.5">
                    <div className="w-2.5 h-px bg-blue-400" style={{ borderTop: '2px solid #60A5FA' }} />
                    <span className="text-[10px] text-slate-500">Detections</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <div className="w-2.5 h-0.5 bg-red-400" />
                    <span className="text-[10px] text-slate-500">Anomalies</span>
                  </div>
                </div>
              </div>
              <ResponsiveContainer width="100%" height={180}>
                <AreaChart data={detectionData} margin={{ top: 5, right: 10, left: -20, bottom: 0 }}>
                  <defs>
                    <linearGradient id="colorDetections" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#2563EB" stopOpacity={0.2} />
                      <stop offset="95%" stopColor="#2563EB" stopOpacity={0} />
                    </linearGradient>
                    <linearGradient id="colorAnomalies" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#EF4444" stopOpacity={0.15} />
                      <stop offset="95%" stopColor="#EF4444" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="#1E293B" />
                  <XAxis dataKey="time" tick={{ fill: '#475569', fontSize: 9 }} tickLine={false} axisLine={false} />
                  <YAxis tick={{ fill: '#475569', fontSize: 9 }} tickLine={false} axisLine={false} />
                  <Tooltip content={<CustomTooltip />} />
                  <Area type="monotone" dataKey="detections" stroke="#2563EB" strokeWidth={1.5} fill="url(#colorDetections)" name="Detections" />
                  <Area type="monotone" dataKey="anomalies" stroke="#EF4444" strokeWidth={1.5} fill="url(#colorAnomalies)" name="Anomalies" />
                </AreaChart>
              </ResponsiveContainer>
            </motion.div>

            {/* Machine Health Bar Chart — 1/3 */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.12 }}
              className="rounded-xl border border-slate-700 p-5"
              style={{ background: '#111827' }}
            >
              <div className="mb-5">
                <h2 className="text-sm font-semibold text-slate-100">Machine Health</h2>
                <p className="text-[11px] text-slate-500 mt-0.5">Weekly distribution</p>
              </div>
              <ResponsiveContainer width="100%" height={180}>
                <BarChart data={healthData} margin={{ top: 5, right: 0, left: -25, bottom: 0 }} barSize={6} barGap={1}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#1E293B" vertical={false} />
                  <XAxis dataKey="name" tick={{ fill: '#475569', fontSize: 9 }} tickLine={false} axisLine={false} />
                  <YAxis tick={{ fill: '#475569', fontSize: 9 }} tickLine={false} axisLine={false} />
                  <Tooltip content={<CustomTooltip />} />
                  <Bar dataKey="healthy" fill="#22C55E" radius={[2, 2, 0, 0]} name="Healthy" />
                  <Bar dataKey="warning" fill="#F59E0B" radius={[2, 2, 0, 0]} name="Warning" />
                  <Bar dataKey="critical" fill="#EF4444" radius={[2, 2, 0, 0]} name="Critical" />
                </BarChart>
              </ResponsiveContainer>
            </motion.div>
          </div>

          {/* Bottom Row: Machines + Alerts + Videos */}
          <div className="grid lg:grid-cols-5 gap-4">
            {/* Machine Table — 3/5 */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.16 }}
              className="lg:col-span-3 rounded-xl border border-slate-700 overflow-hidden"
              style={{ background: '#111827' }}
            >
              <div className="flex items-center justify-between px-5 py-3.5 border-b border-slate-700">
                <div>
                  <h2 className="text-sm font-semibold text-slate-100">Machines Overview</h2>
                  <p className="text-[11px] text-slate-500 mt-0.5">Active monitoring — 12 total</p>
                </div>
                <button className="text-xs text-blue-400 hover:text-blue-300 transition-colors cursor-pointer">
                  View all →
                </button>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-xs" role="table" aria-label="Machine health table">
                  <thead>
                    <tr className="border-b border-slate-700/50">
                      {['Machine', 'Type', 'Status', 'Health', 'Alerts', 'Uptime'].map((h) => (
                        <th
                          key={h}
                          className="px-5 py-2.5 text-left text-[10px] font-semibold text-slate-500 uppercase tracking-wider"
                          scope="col"
                        >
                          {h}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {machines.map((machine, idx) => {
                      const sCfg = statusConfig[machine.status as keyof typeof statusConfig];
                      return (
                        <tr
                          key={machine.id}
                          className="border-b border-slate-700/30 last:border-0 hover:bg-slate-800/50 transition-colors"
                        >
                          <td className="px-5 py-3">
                            <div className="font-semibold text-slate-200">{machine.name}</div>
                            <div className="text-slate-600 text-[10px]">{machine.location}</div>
                          </td>
                          <td className="px-5 py-3 text-slate-400">{machine.type}</td>
                          <td className="px-5 py-3">
                            <span
                              className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[10px] font-semibold"
                              style={{ background: sCfg.bg, color: sCfg.color, border: `1px solid ${sCfg.border}` }}
                            >
                              <span className="w-1 h-1 rounded-full" style={{ background: sCfg.color }} />
                              {sCfg.label}
                            </span>
                          </td>
                          <td className="px-5 py-3">
                            <div className="flex items-center gap-2">
                              <div className="flex-1 h-1 bg-slate-700 rounded-full overflow-hidden">
                                <div
                                  className="h-full rounded-full"
                                  style={{
                                    width: `${machine.score}%`,
                                    background: machine.score > 80 ? '#22C55E' : machine.score > 60 ? '#F59E0B' : '#EF4444',
                                  }}
                                />
                              </div>
                              <span className="text-slate-400 tabular-nums w-8 text-right">{machine.score}%</span>
                            </div>
                          </td>
                          <td className="px-5 py-3">
                            <span className={`font-semibold tabular-nums ${machine.alerts > 0 ? 'text-red-400' : 'text-slate-500'}`}>
                              {machine.alerts}
                            </span>
                          </td>
                          <td className="px-5 py-3 text-slate-400 tabular-nums">{machine.uptime}%</td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </motion.div>

            {/* Right Column — Alerts + Videos */}
            <div className="lg:col-span-2 space-y-4">
              {/* Recent Alerts */}
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.2 }}
                className="rounded-xl border border-slate-700 overflow-hidden"
                style={{ background: '#111827' }}
              >
                <div className="flex items-center justify-between px-4 py-3.5 border-b border-slate-700">
                  <h2 className="text-sm font-semibold text-slate-100">Recent Alerts</h2>
                  <span className="px-1.5 py-0.5 bg-red-500/15 text-red-400 text-[10px] font-bold rounded">
                    {alerts.filter(a => a.status === 'open').length} Open
                  </span>
                </div>
                <div className="divide-y divide-slate-700/30">
                  {alerts.map((alert) => {
                    const cfg = alertTypeConfig[alert.type as keyof typeof alertTypeConfig];
                    return (
                      <div
                        key={alert.id}
                        className="px-4 py-3 hover:bg-slate-800/50 transition-colors"
                      >
                        <div className="flex items-start gap-2.5">
                          <div
                            className="w-1 h-full min-h-[40px] rounded-full flex-shrink-0"
                            style={{ background: cfg.color }}
                          />
                          <div className="flex-1 min-w-0">
                            <p className="text-xs text-slate-300 leading-snug mb-0.5 line-clamp-2">
                              {alert.message}
                            </p>
                            <div className="flex items-center justify-between gap-2">
                              <span className="text-[10px] text-slate-600">{alert.machine}</span>
                              <span className="text-[10px]" style={{ color: cfg.color }}>{alert.time}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </motion.div>

              {/* Recent Video Analyses */}
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.24 }}
                className="rounded-xl border border-slate-700 overflow-hidden"
                style={{ background: '#111827' }}
              >
                <div className="flex items-center justify-between px-4 py-3.5 border-b border-slate-700">
                  <h2 className="text-sm font-semibold text-slate-100">Recent Analyses</h2>
                  <button className="text-xs text-blue-400 hover:text-blue-300 transition-colors cursor-pointer">
                    Upload →
                  </button>
                </div>
                <div className="divide-y divide-slate-700/30">
                  {recentVideos.map((video) => (
                    <div key={video.id} className="px-4 py-3 hover:bg-slate-800/50 transition-colors">
                      <div className="flex items-center gap-2.5">
                        <Video className="w-4 h-4 text-slate-600 flex-shrink-0" />
                        <div className="flex-1 min-w-0">
                          <p className="text-xs text-slate-300 truncate">{video.filename}</p>
                          <div className="flex items-center gap-2 mt-0.5">
                            <span className="text-[10px] text-slate-600">{video.machine}</span>
                            <span className="text-[10px] text-slate-700">·</span>
                            <span className="text-[10px] text-slate-600">{video.time}</span>
                          </div>
                        </div>
                        <div className="flex-shrink-0">
                          {video.status === 'processing' ? (
                            <span className="inline-flex items-center gap-1 px-1.5 py-0.5 bg-blue-500/10 text-blue-400 text-[9px] font-bold rounded border border-blue-500/20">
                              <span className="w-1 h-1 rounded-full bg-blue-400 animate-pulse" />
                              Processing
                            </span>
                          ) : (
                            <span className="text-[10px] text-slate-500 tabular-nums">
                              {video.detections} det.
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default DashboardPage;
