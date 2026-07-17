import React, { useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

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
    severity: 'critical',
    title: 'Impending bearing failure predicted',
    machine: 'CNC Lathe #3',
    confidence: '94',
    timeframe: '72h',
    rca: 'Micro-vibrations detected on spindle axis Z exceeding baseline by 4.2%. Historically, this pattern precedes complete bearing failure within 3–4 days.',
    action: 'Schedule preventative maintenance to replace Z-axis spindle bearings. Estimated downtime: 4 hours.',
  },
  {
    id: 2,
    severity: 'info',
    title: 'Coolant flow optimisation available',
    machine: 'Injection Molder #4',
    confidence: '88',
    timeframe: 'Immediate',
    rca: 'Thermal imaging indicates uneven cooling across mold sections. Current flow rate is 15% higher than necessary for current ambient temperature.',
    action: 'Reduce coolant pump pressure by 15% to save energy and improve mold consistency.',
  },
  {
    id: 3,
    severity: 'warning',
    title: 'Belt wear detected',
    machine: 'Conveyor Belt #2',
    confidence: '99',
    timeframe: '14d',
    rca: 'Visual anomaly detection identified edge fraying on primary drive belt. Wear rate has accelerated by 20% in the last 48 hours.',
    action: 'Order replacement belt (Part #CV-882). Schedule replacement during next weekend shutdown.',
  },
];

const severityBarColor = { critical: 'var(--red)', warning: 'var(--amber)', info: 'var(--signal)' } as const;

export const AIInsightsView: React.FC = () => {
  const [dismissed, setDismissed] = useState<Set<number>>(new Set());

  const visible = insights.filter((i) => !dismissed.has(i.id));

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>

      {/* ─── PAGE HEADER ─── */}
      <div>
        <h1 className="text-page-title">AI Insights</h1>
        <p style={{ marginTop: 4, fontSize: 13, color: 'var(--text-3)' }}>
          Deep learning analysis for predictive maintenance and root cause identification
        </p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 320px', gap: 24, alignItems: 'start' }}>

        {/* ─── MAIN INSIGHTS FEED ─── */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 1, background: 'var(--border)', border: '1px solid var(--border)', borderRadius: 0, overflow: 'hidden' }}>
          {visible.map((insight) => (
            <div
              key={insight.id}
              style={{
                background: 'var(--bg-1)',
                display: 'flex',
                alignItems: 'stretch',
              }}
            >
              {/* 3px colored left severity edge */}
              <div
                style={{
                  width: 3,
                  flexShrink: 0,
                  background: severityBarColor[insight.severity as keyof typeof severityBarColor],
                }}
              />

              <div style={{ flex: 1, padding: '18px 20px', borderBottom: '1px solid var(--border)' }}>
                {/* Headline */}
                <div style={{ marginBottom: 4, fontSize: 14, fontWeight: 600, color: 'var(--text-1)' }}>
                  {insight.title}
                </div>

                {/* Metadata line */}
                <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 16 }}>
                  <span className="mono" style={{ fontSize: 11, color: 'var(--text-3)' }}>{insight.machine}</span>
                  <span style={{ color: 'var(--border-strong)' }}>·</span>
                  <span className="mono" style={{ fontSize: 11, color: 'var(--text-3)' }}>Confidence: {insight.confidence}%</span>
                  <span style={{ color: 'var(--border-strong)' }}>·</span>
                  <span className="mono" style={{ fontSize: 11, color: 'var(--text-3)' }}>Impact window: {insight.timeframe}</span>
                </div>

                {/* Root cause analysis block */}
                <div style={{ marginBottom: 12, padding: '12px 14px', background: 'var(--bg-0)', border: '1px solid var(--border)', borderRadius: 0 }}>
                  <div className="mono" style={{ fontSize: 10, color: 'var(--text-3)', textTransform: 'uppercase', letterSpacing: '0.07em', marginBottom: 6 }}>
                    Root cause analysis
                  </div>
                  <p style={{ fontSize: 13, color: 'var(--text-2)', lineHeight: 1.6 }}>{insight.rca}</p>
                </div>

                {/* Smart maintenance suggestion block */}
                <div style={{ marginBottom: 16, padding: '12px 14px', background: 'var(--bg-0)', border: '1px solid var(--border)', borderRadius: 0 }}>
                  <div className="mono" style={{ fontSize: 10, color: 'var(--text-3)', textTransform: 'uppercase', letterSpacing: '0.07em', marginBottom: 6 }}>
                    Smart maintenance suggestion
                  </div>
                  <p style={{ fontSize: 13, color: 'var(--text-2)', lineHeight: 1.6 }}>{insight.action}</p>
                </div>

                {/* Actions */}
                <div style={{ display: 'flex', gap: 8 }}>
                  <button className="vg-btn vg-btn-primary" style={{ fontSize: 12, height: 30, padding: '0 14px' }}>
                    Create work order
                  </button>
                  <button
                    className="vg-btn vg-btn-ghost"
                    style={{ fontSize: 12, height: 30, padding: '0 14px' }}
                    onClick={() => setDismissed((prev) => new Set([...prev, insight.id]))}
                  >
                    Dismiss
                  </button>
                </div>
              </div>
            </div>
          ))}

          {visible.length === 0 && (
            <div style={{ background: 'var(--bg-1)', padding: '40px 20px', textAlign: 'center', color: 'var(--text-3)', fontSize: 13 }}>
              No active insights
            </div>
          )}
        </div>

        {/* ─── RIGHT COLUMN ─── */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 1, background: 'var(--border)', border: '1px solid var(--border)', borderRadius: 0, overflow: 'hidden' }}>

          {/* Fleet Risk Forecast */}
          <div style={{ background: 'var(--bg-1)', padding: '16px 20px' }}>
            <div className="vg-panel-title" style={{ marginBottom: 2 }}>Fleet risk forecast</div>
            <div style={{ fontSize: 12, color: 'var(--text-3)', marginBottom: 16 }}>
              Aggregated failure probability — next 7 days
            </div>

            {/* Large mono score */}
            <div style={{ display: 'flex', alignItems: 'baseline', gap: 6, marginBottom: 4 }}>
              <span className="mono" style={{ fontSize: 40, color: 'var(--green)', lineHeight: 1 }}>92</span>
              <span className="mono" style={{ fontSize: 16, color: 'var(--text-3)' }}>/100</span>
            </div>
            <div className="mono" style={{ fontSize: 11, color: 'var(--green)', marginBottom: 16 }}>
              ↓ Risk decreased 4% this month
            </div>

            {/* Thin trend bar — no gradient fill, just a line */}
            <div
              style={{
                width: '100%',
                height: 4,
                background: 'var(--border-strong)',
                borderRadius: 0,
                overflow: 'hidden',
                marginBottom: 20,
              }}
            >
              <div
                style={{
                  width: '92%',
                  height: '100%',
                  background: 'var(--green)',
                  borderRadius: 0,
                }}
              />
            </div>

            {/* Sparkline — single accent line, no fill, muted gridlines */}
            <div style={{ height: 100 }}>
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={forecastData} margin={{ top: 4, right: 0, left: -28, bottom: 0 }}>
                  <CartesianGrid
                    strokeDasharray="3 3"
                    vertical={false}
                    stroke="var(--border)"
                  />
                  <XAxis
                    dataKey="day"
                    axisLine={false}
                    tickLine={false}
                    tick={{ fontSize: 10, fill: 'var(--text-3)', fontFamily: 'JetBrains Mono, monospace' }}
                    dy={6}
                  />
                  <YAxis
                    axisLine={false}
                    tickLine={false}
                    tick={{ fontSize: 10, fill: 'var(--text-3)', fontFamily: 'JetBrains Mono, monospace' }}
                  />
                  <Tooltip
                    contentStyle={{
                      background: 'var(--bg-1)',
                      border: '1px solid var(--border)',
                      borderRadius: 0,
                      fontSize: 12,
                      fontFamily: 'JetBrains Mono, monospace',
                    }}
                    itemStyle={{ color: 'var(--text-1)' }}
                    labelStyle={{ color: 'var(--text-3)' }}
                  />
                  {/* Single accent line, no fill */}
                  <Line
                    type="monotone"
                    dataKey="risk"
                    stroke="var(--red)"
                    strokeWidth={1.5}
                    dot={false}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Model info */}
          <div style={{ background: 'var(--bg-1)', padding: '14px 20px', borderTop: '1px solid var(--border)' }}>
            <div className="mono" style={{ fontSize: 10, color: 'var(--text-3)', textTransform: 'uppercase', letterSpacing: '0.07em', marginBottom: 8 }}>
              Active model
            </div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <span className="mono" style={{ fontSize: 12, color: 'var(--text-1)' }}>VG-Vision-v4</span>
              <span style={{ display: 'flex', alignItems: 'center', gap: 5 }}>
                <span style={{ width: 5, height: 5, borderRadius: '50%', background: 'var(--green)' }} />
                <span className="mono" style={{ fontSize: 10, color: 'var(--green)' }}>Active</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
