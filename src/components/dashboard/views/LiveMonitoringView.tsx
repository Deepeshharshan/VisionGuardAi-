import React, { useState } from 'react';
import { Camera } from 'lucide-react';

const cameraFeeds = [
  { id: 'CAM-01', name: 'Assembly Line A',   location: 'Floor A', fps: 30, detections: 2, hasAnomaly: false, model: 'VG-Vision-v4', objects: 2 },
  { id: 'CAM-02', name: 'CNC Milling Area',  location: 'Floor A', fps: 29, detections: 0, hasAnomaly: false, model: 'VG-Vision-v4', objects: 0 },
  { id: 'CAM-03', name: 'Conveyor Belt #2',  location: 'Floor C', fps: 24, detections: 5, hasAnomaly: true,  model: 'VG-Vision-v4', objects: 5 },
  { id: 'CAM-04', name: 'Packaging Station', location: 'Floor D', fps: 30, detections: 1, hasAnomaly: false, model: 'VG-Vision-v4', objects: 1 },
];

type Filter = 'all' | 'anomalies';

export const LiveMonitoringView: React.FC = () => {
  const [filter, setFilter] = useState<Filter>('all');

  const visible = filter === 'anomalies'
    ? cameraFeeds.filter((f) => f.hasAnomaly)
    : cameraFeeds;

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>

      {/* ─── PAGE HEADER ─── */}
      <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between' }}>
        <div>
          <h1 className="text-page-title">Live Monitoring</h1>
          <p style={{ marginTop: 4, fontSize: 13, color: 'var(--text-3)' }}>
            Real-time computer vision across {cameraFeeds.length} active streams
          </p>
        </div>
        <button className="vg-btn vg-btn-ghost" style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
          <Camera size={13} />
          Add camera
        </button>
      </div>

      {/* ─── FILTER TOOLBAR ─── */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: 8,
          padding: '10px 16px',
          background: 'var(--bg-1)',
          border: '1px solid var(--border)',
          borderRadius: 0,
        }}
      >
        <span style={{ fontSize: 12, color: 'var(--text-3)', marginRight: 4 }}>Show:</span>
        {(['all', 'anomalies'] as Filter[]).map((f) => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            style={{
              height: 26,
              padding: '0 12px',
              borderRadius: 0,
              border: '1px solid',
              borderColor: filter === f ? 'var(--signal)' : 'var(--border-strong)',
              background: filter === f ? 'var(--signal-dim)' : 'transparent',
              color: filter === f ? 'var(--signal)' : 'var(--text-2)',
              fontSize: 12,
              fontFamily: "'Inter', sans-serif",
              fontWeight: 500,
              cursor: 'pointer',
              transition: 'all 100ms',
              textTransform: 'capitalize',
            }}
          >
            {f === 'all' ? 'All cameras' : 'Anomalies only'}
          </button>
        ))}

        <div style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center', gap: 6 }}>
          <span
            style={{
              width: 6,
              height: 6,
              borderRadius: '50%',
              background: 'var(--red)',
              animation: 'pulse 2s infinite',
            }}
          />
          <span className="mono" style={{ fontSize: 11, color: 'var(--text-3)' }}>
            {cameraFeeds.filter((f) => f.hasAnomaly).length} anomalies active
          </span>
        </div>
      </div>

      {/* ─── CAMERA GRID ─── */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gap: 1,
          background: 'var(--border)',
          border: '1px solid var(--border)',
          borderRadius: 0,
          overflow: 'hidden',
        }}
      >
        {visible.map((feed) => (
          <div key={feed.id} style={{ background: 'var(--bg-1)', display: 'flex', flexDirection: 'column' }}>

            {/* Header strip */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '8px 14px',
                borderBottom: '1px solid var(--border)',
                background: 'var(--bg-1)',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                {/* Live dot */}
                <span
                  style={{
                    width: 6,
                    height: 6,
                    borderRadius: '50%',
                    background: feed.hasAnomaly ? 'var(--red)' : 'var(--green)',
                    flexShrink: 0,
                  }}
                />
                <span style={{ fontSize: 13, fontWeight: 500, color: 'var(--text-1)' }}>{feed.name}</span>
                <span style={{ fontSize: 12, color: 'var(--text-3)' }}>{feed.location}</span>
              </div>
              <span className="mono" style={{ fontSize: 11, color: 'var(--text-3)' }}>
                {feed.fps} fps
              </span>
            </div>

            {/* Video area */}
            <div
              style={{
                position: 'relative',
                aspectRatio: '16/9',
                background: '#0c0e10',
                overflow: 'hidden',
              }}
            >
              {/* Grid scanline effect */}
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  backgroundImage: 'linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)',
                  backgroundSize: '40px 40px',
                  pointerEvents: 'none',
                }}
              />

              {/* Detection label tags — thin bordered, not thick boxes */}
              {feed.hasAnomaly && (
                <div style={{ position: 'absolute', top: '28%', left: '30%', pointerEvents: 'none' }}>
                  {/* Thin bounding box */}
                  <div
                    style={{
                      width: 140,
                      height: 90,
                      border: '1px solid var(--red)',
                      position: 'relative',
                    }}
                  >
                    {/* Label tag */}
                    <div
                      style={{
                        position: 'absolute',
                        top: -1,
                        left: -1,
                        display: 'flex',
                        alignItems: 'center',
                        gap: 4,
                        padding: '2px 6px',
                        background: 'var(--red)',
                        borderRadius: 0,
                      }}
                    >
                      <span className="mono" style={{ fontSize: 10, color: '#fff' }}>Misalignment</span>
                      <span className="mono" style={{ fontSize: 10, color: 'rgba(255,255,255,0.8)' }}>94%</span>
                    </div>
                  </div>
                </div>
              )}

              {!feed.hasAnomaly && feed.objects > 0 && (
                <div style={{ position: 'absolute', top: '40%', left: '45%', pointerEvents: 'none' }}>
                  <div
                    style={{
                      width: 80,
                      height: 60,
                      border: '1px solid var(--signal)',
                      position: 'relative',
                    }}
                  >
                    <div
                      style={{
                        position: 'absolute',
                        top: -1,
                        left: -1,
                        display: 'flex',
                        alignItems: 'center',
                        gap: 4,
                        padding: '2px 6px',
                        background: 'var(--signal)',
                      }}
                    >
                      <span className="mono" style={{ fontSize: 10, color: '#fff' }}>Worker</span>
                      <span className="mono" style={{ fontSize: 10, color: 'rgba(255,255,255,0.8)' }}>99%</span>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Footer strip */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '8px 14px',
                borderTop: '1px solid var(--border)',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                <span
                  style={{
                    fontSize: 11,
                    color: 'var(--text-3)',
                    background: 'var(--bg-2)',
                    border: '1px solid var(--border)',
                    borderRadius: 0,
                    padding: '1px 6px',
                    fontFamily: "'JetBrains Mono', monospace",
                  }}
                >
                  {feed.model}
                </span>
                <span className="mono" style={{ fontSize: 12, color: 'var(--text-2)' }}>
                  {feed.objects} obj
                </span>
              </div>
              <button
                style={{
                  fontSize: 12,
                  color: 'var(--signal)',
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  fontFamily: "'Inter', sans-serif",
                }}
              >
                View logs
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
