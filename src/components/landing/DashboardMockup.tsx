// ============================================================
// DashboardMockup — Light Editorial Monitoring Preview
// ============================================================
import React, { useState, useEffect } from 'react';
import {
  Activity, AlertTriangle, Camera, CheckCircle2,
  Clock, TrendingUp, Zap, BarChart2, Shield
} from 'lucide-react';

interface MachineCardProps {
  name: string;
  status: 'healthy' | 'warning' | 'critical';
  score: number;
  location: string;
}

const MachineCard: React.FC<MachineCardProps> = ({ name, status, score, location }) => {
  const statusConfig = {
    healthy: { color: '#10B981', bg: 'rgba(16,185,129,0.06)', text: 'Healthy', badge: 'text-emerald-600 bg-emerald-50' },
    warning: { color: '#F59E0B', bg: 'rgba(245,158,11,0.06)', text: 'Warning', badge: 'text-amber-600 bg-amber-50' },
    critical: { color: '#EF4444', bg: 'rgba(239,68,68,0.06)', text: 'Critical', badge: 'text-red-600 bg-red-50' },
  };
  const cfg = statusConfig[status];

  return (
    <div
      className="rounded-lg p-2.5 border flex items-center gap-3"
      style={{ background: cfg.bg, borderColor: `${cfg.color}20` }}
    >
      <div className="flex-1 min-w-0">
        <div className="text-[11px] font-semibold text-black/80 truncate">{name}</div>
        <div className="text-[10px] text-black/40 mt-0.5">{location}</div>
      </div>
      <div className="text-right flex-shrink-0">
        <div className="text-[11px] font-bold tabular-nums" style={{ color: cfg.color }}>{score}%</div>
        <span className={`text-[8px] font-semibold px-1.5 py-0.5 rounded-full ${cfg.badge}`}>{cfg.text}</span>
      </div>
    </div>
  );
};

interface AlertItemProps {
  type: 'critical' | 'warning' | 'info';
  message: string;
  time: string;
}

const AlertItem: React.FC<AlertItemProps> = ({ type, message, time }) => {
  const cfg = {
    critical: { color: '#EF4444', Icon: AlertTriangle },
    warning: { color: '#F59E0B', Icon: AlertTriangle },
    info: { color: '#3B82F6', Icon: CheckCircle2 },
  };
  const { color, Icon } = cfg[type];

  return (
    <div className="flex items-start gap-2.5 py-2 border-b border-black/[0.04] last:border-0">
      <Icon className="w-3 h-3 flex-shrink-0 mt-0.5" style={{ color }} />
      <div className="flex-1 min-w-0">
        <p className="text-[10px] text-black/70 leading-tight">{message}</p>
        <span className="text-[9px] text-black/30 mt-0.5 block">{time}</span>
      </div>
    </div>
  );
};

const MiniBarChart: React.FC<{ data: number[] }> = ({ data }) => {
  const max = Math.max(...data);
  return (
    <div className="flex items-end gap-0.5 h-10">
      {data.map((val, i) => (
        <div
          key={i}
          className="flex-1 rounded-sm"
          style={{
            height: `${(val / max) * 100}%`,
            background: i === data.length - 1 ? '#000' : `rgba(0,0,0,${0.08 + (val / max) * 0.25})`,
          }}
        />
      ))}
    </div>
  );
};

export const DashboardMockup: React.FC = () => {
  const [liveDetections, setLiveDetections] = useState(247);
  const [fps, setFps] = useState(28);
  const chartData = [42, 58, 45, 72, 65, 80, 55, 73, 68, 91, 75, 88];

  useEffect(() => {
    const interval = setInterval(() => {
      setLiveDetections((v) => v + Math.floor(Math.random() * 3));
      setFps(26 + Math.floor(Math.random() * 6));
    }, 1800);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="relative rounded-xl overflow-hidden"
      style={{
        background: '#FFFFFF',
        boxShadow: 'none',
      }}
    >
      {/* Top Bar */}
      <div className="flex items-center justify-between px-4 py-2.5 border-b border-black/[0.06] bg-[#fafafa]">
        <div className="flex items-center gap-2">
          <Shield className="w-3.5 h-3.5 text-black/40" />
          <span className="text-[11px] font-semibold text-black/70 tracking-tight">VisionGuard AI — Live Monitor</span>
        </div>
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1.5">
            <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-[9px] text-emerald-600 font-semibold tracking-wider">LIVE</span>
          </div>
          <div className="flex gap-1">
            <div className="w-2.5 h-2.5 rounded-full bg-black/10" />
            <div className="w-2.5 h-2.5 rounded-full bg-black/10" />
            <div className="w-2.5 h-2.5 rounded-full bg-black/10" />
          </div>
        </div>
      </div>

      <div className="p-4 space-y-4">
        {/* System Stats Row */}
        <div className="grid grid-cols-4 gap-2">
          {[
            { label: 'Detections', value: liveDetections.toLocaleString(), icon: TrendingUp, color: '#111' },
            { label: 'Frame Rate', value: `${fps} fps`, icon: Zap, color: '#10B981' },
            { label: 'Cameras', value: '12/12', icon: Camera, color: '#3B82F6' },
            { label: 'Accuracy', value: '99.2%', icon: Activity, color: '#8B5CF6' },
          ].map(({ label, value, icon: Icon, color }) => (
            <div
              key={label}
              className="rounded-lg p-2.5 border border-black/[0.06] bg-[#fafafa]"
            >
              <Icon className="w-3 h-3 mb-1.5" style={{ color }} />
              <div className="text-[11px] font-bold tabular-nums text-black/80">{value}</div>
              <div className="text-[9px] text-black/35 mt-0.5">{label}</div>
            </div>
          ))}
        </div>

        {/* Camera Feed Preview */}
        <div
          className="relative rounded-lg overflow-hidden border border-black/[0.06]"
          style={{ aspectRatio: '16/7', background: '#F8F9FA' }}
        >
          <div className="absolute inset-0 grid grid-cols-2 gap-px bg-black/[0.03]">
            {[
              { zone: 'Assembly Line A — Zone 1', status: 'normal' },
              { zone: 'Quality Check Station', status: 'alert' },
              { zone: 'Packaging Unit B', status: 'normal' },
              { zone: 'Weld Inspection Bay', status: 'normal' },
            ].map(({ zone, status }) => (
              <div
                key={zone}
                className="relative flex items-end p-2"
                style={{ background: status === 'alert' ? 'rgba(239,68,68,0.04)' : '#F8F9FA' }}
              >
                <div className="absolute top-1.5 left-1.5 w-3 h-3 border-t border-l border-black/15" />
                <div className="absolute top-1.5 right-1.5 w-3 h-3 border-t border-r border-black/15" />
                <div className="absolute bottom-6 left-1.5 w-3 h-3 border-b border-l border-black/15" />
                <div className="absolute bottom-6 right-1.5 w-3 h-3 border-b border-r border-black/15" />

                {status === 'alert' && (
                  <div className="absolute inset-0 border border-red-400/25 animate-pulse" />
                )}
                {status === 'alert' && (
                  <div className="absolute border-2 border-red-500 rounded-sm" style={{ top: '25%', left: '30%', width: '35%', height: '40%' }}>
                    <div className="absolute -top-4 left-0 bg-red-500 text-[7px] px-1.5 py-0.5 font-bold text-white rounded-sm whitespace-nowrap">
                      DEFECT 94.3%
                    </div>
                  </div>
                )}

                <div className="relative z-10 flex items-center gap-1.5 bg-white/80 px-1.5 py-0.5 rounded border border-black/[0.06]">
                  <div className={`w-1.5 h-1.5 rounded-full ${status === 'alert' ? 'bg-red-500 animate-pulse' : 'bg-emerald-500'}`} />
                  <span className="text-[8px] text-black/50 font-medium truncate">{zone}</span>
                </div>
              </div>
            ))}
          </div>
          <div className="absolute top-2 right-2 flex items-center gap-1.5 bg-white/80 backdrop-blur-sm rounded px-2 py-0.5 border border-red-200 z-20">
            <div className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
            <span className="text-[8px] text-red-600 font-bold">REC</span>
          </div>
        </div>

        {/* Bottom Grid */}
        <div className="grid grid-cols-5 gap-3">
          <div className="col-span-2 space-y-1.5">
            <div className="flex items-center gap-1.5 mb-2">
              <BarChart2 className="w-3 h-3 text-black/25" />
              <span className="text-[10px] font-semibold text-black/35 uppercase tracking-wide">Machine Health</span>
            </div>
            <MachineCard name="CNC Lathe #3" status="healthy" score={96} location="Floor A" />
            <MachineCard name="Press Unit #7" status="warning" score={71} location="Floor B" />
            <MachineCard name="Conveyor #2" status="critical" score={38} location="Floor C" />
          </div>

          <div className="col-span-2">
            <div className="flex items-center gap-1.5 mb-2">
              <AlertTriangle className="w-3 h-3 text-black/25" />
              <span className="text-[10px] font-semibold text-black/35 uppercase tracking-wide">Recent Alerts</span>
            </div>
            <div className="bg-[#fafafa] rounded-lg border border-black/[0.05] p-2">
              <AlertItem type="critical" message="Surface crack — Press Unit #7" time="Just now" />
              <AlertItem type="warning" message="Vibration anomaly — Conveyor #2" time="2m ago" />
              <AlertItem type="info" message="Quality check passed — Line A" time="5m ago" />
            </div>
          </div>

          <div className="col-span-1">
            <div className="flex items-center gap-1 mb-2">
              <Clock className="w-3 h-3 text-black/25" />
              <span className="text-[10px] font-semibold text-black/35 uppercase tracking-wide">Trend</span>
            </div>
            <div className="bg-[#fafafa] rounded-lg border border-black/[0.05] p-3 h-[126px] flex flex-col justify-end">
              <MiniBarChart data={chartData} />
              <div className="mt-2 text-[9px] text-black/30 text-center border-t border-black/[0.04] pt-2">Last 12h</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
