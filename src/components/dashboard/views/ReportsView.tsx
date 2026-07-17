import React from 'react';
import { Download } from 'lucide-react';

const scheduledReports = [
  { id: 'SR-01', name: 'Weekly Production Summary', cadence: 'Weekly',  recipients: 4,  nextRun: '2026-07-16 08:00' },
  { id: 'SR-02', name: 'Daily Anomaly Log',          cadence: 'Daily',   recipients: 2,  nextRun: '2026-07-15 18:00' },
  { id: 'SR-03', name: 'Monthly Executive Brief',    cadence: 'Monthly', recipients: 12, nextRun: '2026-08-01 09:00' },
];

const reportHistory = [
  { id: 'RH-104', name: 'Daily Anomaly Log',             date: '2026-07-13', time: '18:00', status: 'delivered' },
  { id: 'RH-103', name: 'Shift B Performance Matrix',    date: '2026-07-13', time: '14:30', status: 'delivered' },
  { id: 'RH-102', name: 'Weekly Production Summary',     date: '2026-07-10', time: '08:00', status: 'delivered' },
  { id: 'RH-101', name: 'Monthly Executive Brief',       date: '2026-07-01', time: '09:00', status: 'delivered' },
];

export const ReportsView: React.FC = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>

      {/* ─── PAGE HEADER ─── */}
      <div>
        <h1 className="text-page-title">Reports</h1>
        <p style={{ marginTop: 4, fontSize: 13, color: 'var(--text-3)' }}>
          Generate, schedule, and review historical performance data
        </p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '280px 1fr', gap: 24, alignItems: 'start' }}>

        {/* ─── LEFT COLUMN ─── */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>

          {/* Quick exports */}
          <div className="vg-panel">
            <div className="vg-panel-header" style={{ padding: '12px 16px' }}>
              <span className="vg-panel-title">Quick exports</span>
            </div>
            <div style={{ padding: '12px 16px', display: 'flex', flexDirection: 'column', gap: 8 }}>
              <button className="vg-btn vg-btn-ghost" style={{ width: '100%', justifyContent: 'flex-start', gap: 8 }}>
                <Download size={13} />
                Export PDF
              </button>
              <button className="vg-btn vg-btn-ghost" style={{ width: '100%', justifyContent: 'flex-start', gap: 8 }}>
                <Download size={13} />
                Export Excel
              </button>
            </div>
          </div>

          {/* Scheduled reports — hairline-divided rows */}
          <div className="vg-panel" style={{ padding: 0 }}>
            <div className="vg-panel-header">
              <span className="vg-panel-title">Scheduled reports</span>
              <button style={{ fontSize: 12, color: 'var(--signal)', background: 'none', border: 'none', cursor: 'pointer', fontFamily: "'Inter', sans-serif" }}>
                Manage
              </button>
            </div>

            <div>
              {scheduledReports.map((report, i) => (
                <div
                  key={report.id}
                  style={{
                    padding: '12px 16px',
                    borderBottom: i < scheduledReports.length - 1 ? '1px solid var(--border)' : undefined,
                    transition: 'background 100ms',
                    cursor: 'default',
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.background = 'var(--bg-2)')}
                  onMouseLeave={(e) => (e.currentTarget.style.background = 'transparent')}
                >
                  <div style={{ fontSize: 13, fontWeight: 500, color: 'var(--text-1)', marginBottom: 4 }}>
                    {report.name}
                  </div>
                  <div style={{ display: 'flex', gap: 12 }}>
                    <span className="mono" style={{ fontSize: 11, color: 'var(--text-3)' }}>{report.cadence}</span>
                    <span className="mono" style={{ fontSize: 11, color: 'var(--text-3)' }}>
                      {report.recipients} recipients
                    </span>
                  </div>
                  <div className="mono" style={{ marginTop: 2, fontSize: 11, color: 'var(--text-3)' }}>
                    Next: {report.nextRun}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ─── RIGHT COLUMN: Report History Table ─── */}
        <div className="vg-panel" style={{ padding: 0 }}>
          <div className="vg-panel-header">
            <div>
              <div className="vg-panel-title">Report history</div>
              <div style={{ fontSize: 12, color: 'var(--text-3)', marginTop: 2 }}>
                Previously generated and delivered reports
              </div>
            </div>
          </div>

          <div style={{ overflowX: 'auto' }}>
            <table className="vg-table">
              <thead>
                <tr>
                  <th>Report name</th>
                  <th>Date generated</th>
                  <th>Status</th>
                  <th style={{ textAlign: 'right' }}>Download</th>
                </tr>
              </thead>
              <tbody>
                {reportHistory.map((report) => (
                  <tr key={report.id}>
                    <td>
                      <div style={{ fontSize: 13, fontWeight: 500, color: 'var(--text-1)' }}>{report.name}</div>
                      <div className="mono" style={{ fontSize: 11, color: 'var(--text-3)', marginTop: 1 }}>{report.id}</div>
                    </td>
                    <td>
                      <span className="mono" style={{ fontSize: 13, color: 'var(--text-2)' }}>
                        {report.date}
                      </span>
                      <div className="mono" style={{ fontSize: 11, color: 'var(--text-3)', marginTop: 1 }}>
                        {report.time}
                      </div>
                    </td>
                    <td>
                      {/* dot + word — no pill badge */}
                      <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6, fontSize: 13, color: 'var(--text-1)' }}>
                        <span style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--green)', flexShrink: 0 }} />
                        {report.status.charAt(0).toUpperCase() + report.status.slice(1)}
                      </span>
                    </td>
                    <td style={{ textAlign: 'right' }}>
                      <button
                        style={{
                          padding: 6,
                          background: 'none',
                          border: 'none',
                          color: 'var(--text-3)',
                          cursor: 'pointer',
                          borderRadius: 0,
                          transition: 'color 100ms',
                        }}
                        onMouseEnter={(e) => ((e.currentTarget as HTMLButtonElement).style.color = 'var(--text-1)')}
                        onMouseLeave={(e) => ((e.currentTarget as HTMLButtonElement).style.color = 'var(--text-3)')}
                      >
                        <Download size={14} />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};
