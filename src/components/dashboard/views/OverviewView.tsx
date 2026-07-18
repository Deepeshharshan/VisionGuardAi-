import React from 'react';
import { Download } from 'lucide-react';
import { StatusBadge } from '../ui/StatusBadge';
import { machines, alerts } from '../data/mockData';

const kpiData = [
  { title: 'Total Machines',   value: '12',    delta: '+0 from last month',    dir: 'neutral' },
  { title: 'Active Alerts',    value: '7',     delta: '−15% from yesterday',   dir: 'down'    },
  { title: 'Detections Today', value: '247',   delta: '+12% from yesterday',   dir: 'up'      },
  { title: 'System Uptime',    value: '99.2%', delta: '+0.1% from last week',  dir: 'up'      },
];

const aiInsights = [
  { id: 1, severity: 'critical', title: 'Bearing failure predicted',    machine: 'Conveyor Belt #2',   eta: '< 12h', confidence: 99 },
  { id: 2, severity: 'warning',  title: 'Coolant temp deviation',       machine: 'Injection Molder #4', eta: '2 days', confidence: 88 },
  { id: 3, severity: 'info',     title: 'Efficiency gain available',    machine: 'CNC Lathe #3',       eta: 'Immediate', confidence: 82 },
  { id: 4, severity: 'warning',  title: 'Belt wear rate accelerating',  machine: 'Conveyor Belt #1',   eta: '14 days', confidence: 76 },
];

const severityBarColor = { critical: 'var(--red)', warning: 'var(--amber)', info: 'var(--signal)' } as const;

function healthBarColor(score: number) {
  if (score > 80) return 'var(--green)';
  if (score > 60) return 'var(--amber)';
  return 'var(--red)';
}

export const OverviewView: React.FC = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 32 }}>

      {/* ─── KPI ROW ─── */}
      {/* 1px gap with --border bg = border creates the grid lines */}
      <div 
        className="vg-panel grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[1px] bg-[var(--border)]"
      >
        {kpiData.map((kpi) => {
          const deltaColor =
            kpi.dir === 'up'   ? 'var(--green)' :
            kpi.dir === 'down' ? 'var(--red)'   :
            'var(--text-3)';
          return (
            <div key={kpi.title} style={{ background: 'var(--bg-1)', padding: '20px 24px' }}>
              <div
                className="mono"
                style={{ fontSize: 11, color: 'var(--text-3)', textTransform: 'uppercase', letterSpacing: '0.07em', marginBottom: 10 }}
              >
                {kpi.title}
              </div>
              <div className="mono" style={{ fontSize: 28, color: 'var(--text-1)', lineHeight: 1 }}>
                {kpi.value}
              </div>
              <div className="mono" style={{ marginTop: 8, fontSize: 11, color: deltaColor }}>
                {kpi.delta}
              </div>
            </div>
          );
        })}
      </div>

      {/* ─── TWO-COLUMN ROW ─── */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

        {/* AI Predictive Insights */}
        <div className="vg-panel">
          <div className="vg-panel-header">
            <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <span className="vg-panel-title">AI Predictive Insights</span>
              <span
                className="mono"
                style={{
                  fontSize: 10,
                  fontWeight: 500,
                  color: 'var(--signal)',
                  background: 'var(--signal-dim)',
                  padding: '1px 6px',
                  borderRadius: 0,
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em',
                }}
              >
                Live
              </span>
            </div>
            <button
              className="vg-btn-ghost vg-btn"
              style={{ fontSize: 12, height: 26, padding: '0 10px' }}
            >
              View all
            </button>
          </div>

          {/* Ranked list — severity bar + name + meta + right-aligned confidence */}
          <div>
            {aiInsights.map((insight) => (
              <div
                key={insight.id}
                style={{
                  display: 'flex',
                  alignItems: 'stretch',
                  borderBottom: '1px solid var(--border)',
                  cursor: 'pointer',
                  transition: 'background 100ms',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.background = 'var(--bg-2)')}
                onMouseLeave={(e) => (e.currentTarget.style.background = 'transparent')}
              >
                {/* 3px severity bar */}
                <div
                  style={{
                    width: 3,
                    flexShrink: 0,
                    background: severityBarColor[insight.severity as keyof typeof severityBarColor],
                  }}
                />
                <div style={{ flex: 1, padding: '12px 16px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 12 }}>
                  <div style={{ minWidth: 0 }}>
                    <div style={{ fontSize: 13, fontWeight: 500, color: 'var(--text-1)', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                      {insight.title}
                    </div>
                    <div style={{ marginTop: 2, fontSize: 12, color: 'var(--text-3)' }}>
                      {insight.machine} · ETA {insight.eta}
                    </div>
                  </div>
                  <div className="mono" style={{ fontSize: 13, color: 'var(--text-2)', flexShrink: 0 }}>
                    {insight.confidence}%
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Live Alerts */}
        <div className="vg-panel">
          <div className="vg-panel-header">
            <span className="vg-panel-title">Live Alerts</span>
            <span
              className="mono"
              style={{
                fontSize: 11,
                color: 'var(--red)',
                background: 'var(--red-dim)',
                padding: '1px 6px',
                borderRadius: 0,
              }}
            >
              {alerts.filter((a: any) => a.status === 'open').length} open
            </span>
          </div>
          <div>
            {alerts.map((alert: any, i: number) => {
              const barColor =
                alert.type === 'critical' ? 'var(--red)' :
                alert.type === 'warning'  ? 'var(--amber)' :
                'var(--signal)';
              return (
                <div
                  key={alert.id ?? i}
                  style={{
                    display: 'flex',
                    alignItems: 'stretch',
                    borderBottom: '1px solid var(--border)',
                    cursor: 'pointer',
                    transition: 'background 100ms',
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.background = 'var(--bg-2)')}
                  onMouseLeave={(e) => (e.currentTarget.style.background = 'transparent')}
                >
                  <div style={{ width: 3, flexShrink: 0, background: barColor }} />
                  <div style={{ flex: 1, padding: '11px 16px' }}>
                    <div style={{ fontSize: 13, color: 'var(--text-1)', lineHeight: 1.4 }}>{alert.message}</div>
                    <div style={{ marginTop: 4, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <span style={{ fontSize: 12, color: 'var(--text-3)' }}>{alert.machine}</span>
                      <span className="mono" style={{ fontSize: 11, color: 'var(--text-3)' }}>{alert.time}</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* ─── FLEET OVERVIEW TABLE ─── */}
      <div className="vg-panel">
        <div className="vg-panel-header">
          <div>
            <div className="vg-panel-title">Fleet Overview</div>
            <div style={{ fontSize: 12, color: 'var(--text-3)', marginTop: 2 }}>
              {machines.length} machines monitored
            </div>
          </div>
          <button className="vg-btn vg-btn-ghost" style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
            <Download size={13} />
            Manage fleet
          </button>
        </div>

        <div style={{ overflowX: 'auto' }}>
          <table className="vg-table">
            <thead>
              <tr>
                <th>Machine</th>
                <th>Status</th>
                <th>Health</th>
                <th style={{ textAlign: 'right' }}>Alerts</th>
                <th style={{ textAlign: 'right' }}>Uptime</th>
              </tr>
            </thead>
            <tbody>
              {machines.map((machine: any) => (
                <tr key={machine.id}>
                  <td>
                    <div style={{ fontWeight: 500, color: 'var(--text-1)', fontSize: 13 }}>{machine.name}</div>
                    <div className="mono" style={{ fontSize: 11, color: 'var(--text-3)', marginTop: 1 }}>
                      {machine.id} · {machine.location}
                    </div>
                  </td>
                  <td>
                    <StatusBadge status={machine.status as any} />
                  </td>
                  <td>
                    <div className="vg-health-bar">
                      <div className="vg-health-bar-track">
                        <div
                          className="vg-health-bar-fill"
                          style={{
                            width: `${machine.score}%`,
                            background: healthBarColor(machine.score),
                          }}
                        />
                      </div>
                      <span className="mono" style={{ fontSize: 12, color: 'var(--text-2)', minWidth: 30 }}>
                        {machine.score}%
                      </span>
                    </div>
                  </td>
                  <td style={{ textAlign: 'right' }}>
                    <span
                      className="mono"
                      style={{
                        fontSize: 13,
                        color: machine.alerts > 0 ? 'var(--red)' : 'var(--text-3)',
                      }}
                    >
                      {machine.alerts > 0 ? machine.alerts : '—'}
                    </span>
                  </td>
                  <td style={{ textAlign: 'right' }}>
                    <span className="mono" style={{ fontSize: 13, color: 'var(--text-2)' }}>
                      {machine.uptime}%
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
