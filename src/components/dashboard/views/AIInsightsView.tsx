import React from 'react';
import { motion } from 'framer-motion';
import { BrainCircuit, Activity, ShieldAlert, Cpu, CheckCircle2, TrendingDown } from 'lucide-react';
import { ChartContainer } from '../ui/ChartContainer';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const forecastData = [
  { day: 'Mon', risk: 12 },
  { day: 'Tue', risk: 15 },
  { day: 'Wed', risk: 14 },
  { day: 'Thu', risk: 28 },
  { day: 'Fri', risk: 45 },
  { day: 'Sat', risk: 65 },
  { day: 'Sun', risk: 85 },
];

const insights = [
  {
    id: 1,
    title: 'Impending Bearing Failure Predicted',
    machine: 'CNC Lathe #3',
    confidence: '94%',
    timeframe: 'Next 72 hours',
    rca: 'Micro-vibrations detected on spindle axis Z exceeding baseline by 4.2%. Historically, this pattern precedes complete bearing failure within 3-4 days.',
    action: 'Schedule preventative maintenance window to replace Z-axis spindle bearings. Estimated downtime: 4 hours.',
    severity: 'critical'
  },
  {
    id: 2,
    title: 'Coolant Flow Optimization Available',
    machine: 'Injection Molder #4',
    confidence: '88%',
    timeframe: 'Immediate',
    rca: 'Thermal imaging indicates uneven cooling across mold sections. Current flow rate is 15% higher than necessary for current ambient temperature.',
    action: 'Reduce coolant pump pressure by 15% to save energy and improve mold consistency.',
    severity: 'info'
  },
  {
    id: 3,
    title: 'Belt Wear Detected',
    machine: 'Conveyor Belt #2',
    confidence: '99%',
    timeframe: 'Next 14 days',
    rca: 'Visual anomaly detection identified edge fraying on primary drive belt. Wear rate has accelerated by 20% in the last 48 hours.',
    action: 'Order replacement belt (Part #CV-882). Schedule replacement during next weekend shutdown.',
    severity: 'warning'
  }
];

export const AIInsightsView: React.FC = () => {
  return (
    <div className="space-y-6 pb-20">
      {/* ─── PAGE HEADER ─── */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-xl font-semibold text-white tracking-tight flex items-center gap-2">
            <BrainCircuit className="w-6 h-6 text-blue-400" />
            AI Predictive Insights
          </h2>
          <p className="text-[13px] text-white/50 mt-1">Deep learning analysis for predictive maintenance and root cause identification</p>
        </div>
        
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 rounded-lg px-3 py-2 text-[13px] text-blue-400">
            <Activity className="w-4 h-4" />
            Model: VG-Vision-v4 (Active)
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* ─── MAIN INSIGHTS FEED ─── */}
        <div className="lg:col-span-2 space-y-4">
          <h3 className="text-[14px] font-semibold text-white/80 uppercase tracking-widest mb-4">Actionable Recommendations</h3>
          
          {insights.map((insight, idx) => (
            <motion.div
              key={insight.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: idx * 0.1, duration: 0.4 }}
              className="bg-white/5 border border-white/10 rounded-2xl p-6 relative overflow-hidden group"
            >
              {insight.severity === 'critical' && (
                <div className="absolute top-0 left-0 w-1 h-full bg-red-500"></div>
              )}
              {insight.severity === 'warning' && (
                <div className="absolute top-0 left-0 w-1 h-full bg-amber-500"></div>
              )}
              {insight.severity === 'info' && (
                <div className="absolute top-0 left-0 w-1 h-full bg-blue-500"></div>
              )}

              <div className="flex items-start justify-between mb-4">
                <div>
                  <h4 className="text-lg font-semibold text-white">{insight.title}</h4>
                  <div className="flex items-center gap-3 mt-1.5 text-[13px]">
                    <span className="text-white/60">{insight.machine}</span>
                    <span className="text-white/20">•</span>
                    <span className="text-emerald-400 font-mono bg-emerald-400/10 px-1.5 rounded">Confidence: {insight.confidence}</span>
                    <span className="text-white/20">•</span>
                    <span className="text-red-400 font-medium">Impact: {insight.timeframe}</span>
                  </div>
                </div>
                {insight.severity === 'critical' && <ShieldAlert className="w-6 h-6 text-red-500" />}
              </div>

              <div className="space-y-4 mt-6">
                <div className="bg-black/40 rounded-xl p-4 border border-white/5">
                  <h5 className="text-[11px] uppercase tracking-widest text-white/40 font-semibold mb-2 flex items-center gap-2">
                    <Cpu className="w-3.5 h-3.5" />
                    Root Cause Analysis (RCA)
                  </h5>
                  <p className="text-[14px] text-white/80 leading-relaxed">{insight.rca}</p>
                </div>
                
                <div className="bg-blue-500/5 rounded-xl p-4 border border-blue-500/10">
                  <h5 className="text-[11px] uppercase tracking-widest text-blue-400 font-semibold mb-2 flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    Smart Maintenance Suggestion
                  </h5>
                  <p className="text-[14px] text-blue-100 leading-relaxed">{insight.action}</p>
                </div>
              </div>
              
              <div className="mt-5 flex items-center gap-3">
                <button className="px-4 py-2 bg-white/10 hover:bg-white/20 text-white text-[13px] font-medium rounded-lg transition-colors">
                  Create Work Order
                </button>
                <button className="px-4 py-2 text-white/40 hover:text-white text-[13px] font-medium rounded-lg transition-colors">
                  Dismiss
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* ─── FORECAST CHARTS ─── */}
        <div className="space-y-6">
          <ChartContainer 
            title="Fleet Risk Forecast" 
            subtitle="Aggregated failure probability next 7 days"
            height={220}
          >
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={forecastData} margin={{ top: 10, right: 0, left: -20, bottom: 0 }}>
                <defs>
                  <linearGradient id="colorRisk" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#EF4444" stopOpacity={0.4}/>
                    <stop offset="95%" stopColor="#EF4444" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="rgba(255,255,255,0.05)" />
                <XAxis dataKey="day" axisLine={false} tickLine={false} tick={{ fontSize: 11, fill: 'rgba(255,255,255,0.4)' }} dy={10} />
                <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 11, fill: 'rgba(255,255,255,0.4)' }} />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#111', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '8px', fontSize: '13px' }}
                  itemStyle={{ color: '#fff' }}
                />
                <Area type="monotone" dataKey="risk" stroke="#EF4444" strokeWidth={2} fillOpacity={1} fill="url(#colorRisk)" />
              </AreaChart>
            </ResponsiveContainer>
          </ChartContainer>

          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.4 }}
            className="bg-white/5 border border-white/10 rounded-2xl p-6"
          >
            <h3 className="text-[14px] font-semibold text-white tracking-tight mb-1">Global Health Score</h3>
            <p className="text-[13px] text-white/50 mb-6">Overall AI confidence in fleet stability</p>
            
            <div className="flex items-end gap-4 mb-2">
              <span className="text-5xl font-bold text-emerald-400">92</span>
              <span className="text-[14px] text-white/40 mb-1">/ 100</span>
            </div>
            <div className="flex items-center gap-2 text-[13px] text-emerald-400 mb-6">
              <TrendingDown className="w-4 h-4" />
              Risk decreased by 4% this month
            </div>
            
            <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
              <div className="w-[92%] h-full bg-emerald-400 rounded-full"></div>
            </div>
          </motion.div>
        </div>

      </div>
    </div>
  );
};
