import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Server, AlertTriangle, Activity, TrendingUp, Zap, Clock, ShieldCheck,
  Bell, Video, ChevronRight, BrainCircuit, BarChart3
} from 'lucide-react';
import {
  AreaChart, Area, Cell, PieChart, Pie, BarChart, Bar,
  XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer
} from 'recharts';
import { KpiCard } from '../ui/KpiCard';
import { ChartContainer } from '../ui/ChartContainer';
import { StatusBadge } from '../ui/StatusBadge';
import { detectionData, donutHealthData, alerts, recentVideos, machines } from '../data/mockData';

// Heatmap data: 7 days × 24 hours, value 0-10
const generateHeatmap = () => {
  const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
  const hours = Array.from({ length: 24 }, (_, i) => i);
  return days.map(day => ({
    day,
    hours: hours.map(h => ({
      hour: h,
      value: Math.floor(Math.random() * 10) + (h >= 6 && h <= 22 ? 3 : 0),
    })),
  }));
};

const heatmapData = generateHeatmap();
const heatmapColor = (v: number) => {
  if (v === 0) return 'rgba(255,255,255,0.03)';
  if (v <= 3) return 'rgba(59,130,246,0.15)';
  if (v <= 6) return 'rgba(59,130,246,0.35)';
  if (v <= 9) return 'rgba(59,130,246,0.55)';
  return 'rgba(59,130,246,0.8)';
};

// Sparklines for KPI cards
const sparklines = {
  machines: [10, 11, 11, 12, 12, 12, 12],
  alerts: [12, 10, 9, 8, 9, 7, 7],
  detections: [180, 210, 225, 198, 240, 235, 247],
  uptime: [98.5, 98.8, 99.0, 99.1, 99.0, 99.2, 99.2],
  accuracy: [99.2, 99.4, 99.6, 99.7, 99.8, 99.8, 99.8],
  cameras: [46, 48, 48, 47, 48, 48, 48],
  energy: [1.4, 1.35, 1.3, 1.28, 1.25, 1.22, 1.2],
  downtime: [8, 9, 10, 11, 12, 13, 14],
};

// AI Insights strip data
const aiInsights = [
  { id: 1, severity: 'critical', title: 'Bearing failure predicted', machine: 'Conveyor Belt #2', eta: '< 12h', confidence: 99 },
  { id: 2, severity: 'warning', title: 'Coolant temp deviation', machine: 'Injection Molder #4', eta: '2 days', confidence: 88 },
  { id: 3, severity: 'info', title: 'Efficiency gain available', machine: 'CNC Lathe #3', eta: 'Immediate', confidence: 82 },
];

const InsightSeverityConfig = {
  critical: { bar: 'bg-red-500', text: 'text-red-400', badge: 'bg-red-500/10 border-red-500/20 text-red-400' },
  warning:  { bar: 'bg-amber-500', text: 'text-amber-400', badge: 'bg-amber-500/10 border-amber-500/20 text-amber-400' },
  info:     { bar: 'bg-blue-500', text: 'text-blue-400', badge: 'bg-blue-500/10 border-blue-500/20 text-blue-400' },
};

export const OverviewView: React.FC = () => {
  const [heatmapHover, setHeatmapHover] = useState<{ day: string; hour: number; value: number } | null>(null);

  return (
    <div className="space-y-6 pb-20">

      {/* ─── KPI METRICS (with animated counters + sparklines) ─── */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <KpiCard title="Total Machines"   value={12}   trend="+0%"  trendLabel="from last month"  icon={Server}     color="blue"    delay={0.05} sparkline={sparklines.machines} />
        <KpiCard title="Active Alerts"    value={7}    trend="-15%" trendDirection="down" trendLabel="from yesterday" icon={AlertTriangle} color="red" delay={0.1} sparkline={sparklines.alerts} />
        <KpiCard title="Detections Today" value={247}  trend="+12%" trendDirection="up"  trendLabel="from yesterday" icon={Activity}  color="indigo" delay={0.15} sparkline={sparklines.detections} />
        <KpiCard title="System Uptime"    valueDisplay="99.2%" value={99.2} trend="+0.1%" trendDirection="up" trendLabel="from last week" icon={TrendingUp} color="emerald" delay={0.2} sparkline={sparklines.uptime} />
        <KpiCard title="AI Accuracy"      valueDisplay="99.8%" value={99.8} trend="+0.2%" trendDirection="up" trendLabel="confidence" icon={ShieldCheck} color="blue"  delay={0.25} sparkline={sparklines.accuracy} />
        <KpiCard title="Cameras Online"   valueDisplay="48/48" value={48}   trend="100%"  trendDirection="neutral" trendLabel="all active" icon={Activity} color="emerald" delay={0.3} sparkline={sparklines.cameras} />
        <KpiCard title="Energy Cons."     valueDisplay="1.2 MW" value={1.2} trend="-4%"  trendDirection="down" trendLabel="efficiency gain" icon={Zap} color="amber" delay={0.35} suffix=" MW" decimals={1} sparkline={sparklines.energy} />
        <KpiCard title="Downtime Prev."   value={14}   trend="+2h"  trendDirection="up"  trendLabel="this month"  icon={Clock}     color="indigo"  delay={0.4} suffix=" hrs" sparkline={sparklines.downtime} />
      </div>

      {/* ─── AI INSIGHTS STRIP ─── */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.45, duration: 0.4 }}
        className="bg-white/[0.03] border border-white/[0.08] rounded-2xl overflow-hidden"
      >
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/[0.06]">
          <div className="flex items-center gap-3">
            <div className="w-7 h-7 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center">
              <BrainCircuit className="w-4 h-4 text-blue-400" />
            </div>
            <span className="text-[14px] font-semibold text-white">AI Predictive Insights</span>
            <span className="px-2 py-0.5 bg-blue-500/10 text-blue-400 text-[11px] font-bold rounded border border-blue-500/20">LIVE</span>
          </div>
          <button className="text-[13px] font-medium text-blue-400 hover:text-blue-300 flex items-center gap-1 transition-colors">
            View all <ChevronRight className="w-3.5 h-3.5" />
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-white/[0.05]">
          {aiInsights.map((insight) => {
            const cfg = InsightSeverityConfig[insight.severity as keyof typeof InsightSeverityConfig];
            return (
              <div key={insight.id} className="px-6 py-4 hover:bg-white/[0.02] transition-colors cursor-pointer group relative">
                <div className={`absolute left-0 top-0 h-full w-0.5 ${cfg.bar}`} />
                <div className="flex items-start justify-between mb-2">
                  <span className={`text-[13px] font-semibold text-white group-hover:${cfg.text} transition-colors leading-snug`}>
                    {insight.title}
                  </span>
                  <span className={`text-[10px] font-bold px-1.5 py-0.5 rounded border ml-2 shrink-0 ${cfg.badge}`}>
                    {insight.confidence}%
                  </span>
                </div>
                <div className="flex items-center gap-3 text-[12px] text-white/50">
                  <span>{insight.machine}</span>
                  <span className="text-white/20">·</span>
                  <span className={cfg.text}>ETA: {insight.eta}</span>
                </div>
                {/* Confidence bar */}
                <div className="mt-3 h-1 bg-white/10 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${insight.confidence}%` }}
                    transition={{ delay: 0.6 + insight.id * 0.1, duration: 0.8 }}
                    className={`h-full rounded-full ${cfg.bar}`}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </motion.div>

      {/* ─── CHARTS ROW ─── */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <ChartContainer
          title="Detection Timeline"
          subtitle="Detections vs Anomalies — last 24 hours"
          className="lg:col-span-2"
          delay={0.5}
          headerRight={
            <div className="flex items-center gap-4 text-[12px] font-medium mt-1">
              <div className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-blue-500" /><span className="text-white/60">Detections</span></div>
              <div className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-red-500" /><span className="text-white/60">Anomalies</span></div>
            </div>
          }
        >
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={detectionData} margin={{ top: 10, right: 0, left: -20, bottom: 0 }}>
              <defs>
                <linearGradient id="gDet" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#3B82F6" stopOpacity={0.25}/><stop offset="95%" stopColor="#3B82F6" stopOpacity={0}/>
                </linearGradient>
                <linearGradient id="gAno" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#EF4444" stopOpacity={0.25}/><stop offset="95%" stopColor="#EF4444" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="rgba(255,255,255,0.04)" />
              <XAxis dataKey="time" axisLine={false} tickLine={false} tick={{ fontSize: 11, fill: 'rgba(255,255,255,0.35)' }} dy={10} />
              <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 11, fill: 'rgba(255,255,255,0.35)' }} />
              <Tooltip contentStyle={{ backgroundColor: '#111', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '10px', fontSize: '13px', boxShadow: '0 20px 40px rgba(0,0,0,0.5)' }} itemStyle={{ color: '#fff' }} />
              <Area type="monotone" dataKey="detections" stroke="#3B82F6" strokeWidth={2} fillOpacity={1} fill="url(#gDet)" />
              <Area type="monotone" dataKey="anomalies" stroke="#EF4444" strokeWidth={2} fillOpacity={1} fill="url(#gAno)" />
            </AreaChart>
          </ResponsiveContainer>
        </ChartContainer>

        <ChartContainer title="Machine Health" subtitle="Real-time status distribution" delay={0.55}>
          <ResponsiveContainer width="100%" height="75%">
            <PieChart>
              <Pie data={donutHealthData} cx="50%" cy="50%" innerRadius={52} outerRadius={72} paddingAngle={5} dataKey="value" stroke="none">
                {donutHealthData.map((entry, index) => <Cell key={`cell-${index}`} fill={entry.color} />)}
              </Pie>
              <Tooltip contentStyle={{ backgroundColor: '#111', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '10px', fontSize: '13px' }} itemStyle={{ color: '#fff' }} />
            </PieChart>
          </ResponsiveContainer>
          <div className="flex flex-col gap-2 px-2 mt-2">
            {donutHealthData.map((entry) => (
              <div key={entry.name} className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full" style={{ backgroundColor: entry.color }} />
                  <span className="text-[12px] text-white/60">{entry.name}</span>
                </div>
                <span className="text-[12px] font-semibold text-white/80">{entry.value}%</span>
              </div>
            ))}
          </div>
        </ChartContainer>
      </div>

      {/* ─── HEATMAP: Anomaly Detection by Day & Hour ─── */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.4 }}
        className="bg-white/[0.03] border border-white/[0.08] rounded-2xl overflow-hidden"
      >
        <div className="px-6 py-5 border-b border-white/[0.06] flex items-center justify-between">
          <div>
            <h3 className="text-[15px] font-semibold text-white tracking-tight flex items-center gap-2">
              <BarChart3 className="w-4 h-4 text-white/40" />
              Anomaly Heatmap
            </h3>
            <p className="text-[13px] text-white/50 mt-0.5">Detection frequency by day and hour — last 7 days</p>
          </div>
          {heatmapHover && (
            <div className="text-[12px] text-white/60 bg-white/5 border border-white/10 rounded-lg px-3 py-1.5">
              <span className="font-semibold text-white">{heatmapHover.day}</span> @ {String(heatmapHover.hour).padStart(2, '0')}:00 — <span className="text-blue-400">{heatmapHover.value} events</span>
            </div>
          )}
        </div>
        <div className="p-6 overflow-x-auto">
          <div className="flex gap-1.5 min-w-max">
            {/* Day Labels */}
            <div className="flex flex-col gap-1.5 mr-1 justify-around pt-5">
              {heatmapData.map(({ day }) => (
                <span key={day} className="text-[10px] text-white/40 font-semibold uppercase w-7 text-right">{day}</span>
              ))}
            </div>
            {/* Hour columns */}
            <div className="flex flex-col gap-1">
              <div className="flex gap-1 mb-1">
                {Array.from({ length: 24 }, (_, h) => (
                  <span key={h} className="text-[9px] text-white/25 w-6 text-center">{h % 4 === 0 ? `${h}h` : ''}</span>
                ))}
              </div>
              {heatmapData.map(({ day, hours }) => (
                <div key={day} className="flex gap-1">
                  {hours.map(({ hour, value }) => (
                    <div
                      key={hour}
                      onMouseEnter={() => setHeatmapHover({ day, hour, value })}
                      onMouseLeave={() => setHeatmapHover(null)}
                      className="w-6 h-6 rounded-sm cursor-pointer transition-all duration-150 hover:scale-125 hover:z-10 relative"
                      style={{ backgroundColor: heatmapColor(value) }}
                      title={`${day} ${hour}:00 — ${value} events`}
                    />
                  ))}
                </div>
              ))}
            </div>
          </div>
          {/* Legend */}
          <div className="flex items-center gap-2 mt-4">
            <span className="text-[11px] text-white/40">Less</span>
            {[0, 2, 5, 8, 10].map((v) => (
              <div key={v} className="w-4 h-4 rounded-sm" style={{ backgroundColor: heatmapColor(v) }} />
            ))}
            <span className="text-[11px] text-white/40">More</span>
          </div>
        </div>
      </motion.div>

      {/* ─── BOTTOM ROW: Fleet + Alerts + Videos ─── */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Machine Status Table */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.65, duration: 0.4 }}
          className="lg:col-span-2 bg-white/[0.03] border border-white/[0.08] rounded-2xl overflow-hidden"
        >
          <div className="flex items-center justify-between px-6 py-5 border-b border-white/[0.06]">
            <div>
              <h3 className="text-[15px] font-semibold text-white tracking-tight">Fleet Overview</h3>
              <p className="text-[13px] text-white/50 mt-0.5">Live status — 12 machines monitored</p>
            </div>
            <button className="text-[13px] font-medium text-blue-400 hover:text-blue-300 transition-colors flex items-center gap-1">
              Manage <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="text-[10px] uppercase tracking-widest text-white/35 font-semibold border-b border-white/[0.05]">
                <th className="px-6 py-3">Machine</th>
                <th className="px-6 py-3">Status</th>
                <th className="px-6 py-3">Health</th>
                <th className="px-6 py-3">Alerts</th>
                <th className="px-6 py-3">Uptime</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/[0.04]">
              {machines.map((machine) => (
                <tr key={machine.id} className="hover:bg-white/[0.02] transition-colors group cursor-pointer">
                  <td className="px-6 py-3.5">
                    <div className="text-[13px] font-semibold text-white">{machine.name}</div>
                    <div className="text-[11px] text-white/35 mt-0.5">{machine.location}</div>
                  </td>
                  <td className="px-6 py-3.5">
                    <StatusBadge status={machine.status as any} pulse size="sm" />
                  </td>
                  <td className="px-6 py-3.5">
                    <div className="flex items-center gap-2.5">
                      <div className="w-16 h-1.5 bg-white/10 rounded-full overflow-hidden">
                        <div className="h-full rounded-full" style={{ width: `${machine.score}%`, background: machine.score > 80 ? '#10B981' : machine.score > 60 ? '#F59E0B' : '#EF4444' }} />
                      </div>
                      <span className="text-[12px] font-semibold text-white/70 tabular-nums">{machine.score}%</span>
                    </div>
                  </td>
                  <td className="px-6 py-3.5">
                    <span className={`text-[13px] font-semibold tabular-nums ${machine.alerts > 0 ? 'text-red-400' : 'text-white/35'}`}>{machine.alerts}</span>
                  </td>
                  <td className="px-6 py-3.5">
                    <span className="text-[13px] text-white/60 tabular-nums">{machine.uptime}%</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </motion.div>

        {/* Right Column */}
        <div className="space-y-4">
          {/* Live Alerts */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.4 }}
            className="bg-white/[0.03] border border-white/[0.08] rounded-2xl overflow-hidden"
          >
            <div className="flex items-center justify-between px-5 py-4 border-b border-white/[0.06]">
              <h3 className="text-[14px] font-semibold text-white flex items-center gap-2">
                <Bell className="w-4 h-4 text-white/40" />Live Alerts
              </h3>
              <span className="px-2 py-0.5 bg-red-500/10 text-red-400 text-[11px] font-bold rounded border border-red-500/20">
                {alerts.filter(a => a.status === 'open').length} Open
              </span>
            </div>
            <div className="divide-y divide-white/[0.04]">
              {alerts.map((alert, i) => (
                <motion.div
                  key={alert.id}
                  initial={{ opacity: 0, x: -8 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.75 + i * 0.05 }}
                  className="px-4 py-3 hover:bg-white/[0.02] transition-colors cursor-pointer group"
                >
                  <div className="flex gap-3">
                    <div className={`w-1 rounded-full shrink-0 ${alert.type === 'critical' ? 'bg-red-500' : alert.type === 'warning' ? 'bg-amber-500' : 'bg-blue-500'}`} />
                    <div className="flex-1 min-w-0">
                      <p className="text-[12px] text-white/80 leading-snug font-medium line-clamp-2">{alert.message}</p>
                      <div className="flex items-center justify-between mt-1.5">
                        <span className="text-[11px] text-white/35">{alert.machine}</span>
                        <span className="text-[11px] text-white/25">{alert.time}</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Recent Analyses */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.75, duration: 0.4 }}
            className="bg-white/[0.03] border border-white/[0.08] rounded-2xl overflow-hidden"
          >
            <div className="flex items-center justify-between px-5 py-4 border-b border-white/[0.06]">
              <h3 className="text-[14px] font-semibold text-white flex items-center gap-2">
                <Video className="w-4 h-4 text-white/40" />Analyses
              </h3>
              <button className="text-[12px] font-medium text-blue-400 hover:text-blue-300 transition-colors">Upload →</button>
            </div>
            <div className="divide-y divide-white/[0.04]">
              {recentVideos.map((video) => (
                <div key={video.id} className="px-4 py-3 hover:bg-white/[0.02] transition-colors cursor-pointer">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                      <Video className="w-3.5 h-3.5 text-white/35" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-[12px] font-medium text-white/80 truncate">{video.filename}</p>
                      <div className="flex items-center gap-1.5 mt-0.5">
                        <span className="text-[11px] text-white/35">{video.machine}</span>
                        <span className="text-[11px] text-white/20">·</span>
                        <span className="text-[11px] text-white/25">{video.time}</span>
                      </div>
                    </div>
                    <div className="shrink-0">
                      {video.status === 'processing' ? (
                        <span className="inline-flex items-center gap-1 px-2 py-0.5 bg-blue-500/10 text-blue-400 text-[10px] font-bold rounded border border-blue-500/20">
                          <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />Live
                        </span>
                      ) : (
                        <span className="text-[11px] font-semibold text-white/35 tabular-nums">{video.detections} det.</span>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};
