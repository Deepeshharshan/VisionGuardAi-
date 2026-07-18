import React, { useState, useMemo } from 'react';
import { Search, Download, Plus, X, ChevronUp, ChevronDown } from 'lucide-react';
import { machines } from '../data/mockData';
import { StatusBadge } from '../ui/StatusBadge';

type SortKey = 'name' | 'status' | 'score' | 'uptime' | 'alerts';
type SortDir = 'asc' | 'desc';
type FilterStatus = 'all' | 'healthy' | 'warning' | 'critical';

const ITEMS_PER_PAGE = 5;

function healthBarColor(score: number) {
  if (score > 80) return 'var(--green)';
  if (score > 60) return 'var(--amber)';
  return 'var(--red)';
}

/* ─── Machine Detail Drawer ──────────────────────── */
interface DrawerProps {
  machine: typeof machines[0] | null;
  onClose: () => void;
}

const MachineDetailDrawer: React.FC<DrawerProps> = ({ machine, onClose }) => {
  if (!machine) return null;

  const rulText =
    machine.status === 'critical' ? '< 12h' :
    machine.status === 'warning'  ? '~14d'  :
    '> 180d';

  const rulColor =
    machine.status === 'critical' ? 'var(--red)' :
    machine.status === 'warning'  ? 'var(--amber)' :
    'var(--green)';

  return (
    <>
      {/* Backdrop */}
      <div
        onClick={onClose}
        style={{
          position: 'fixed',
          inset: 0,
          background: 'rgba(0,0,0,0.5)',
          zIndex: 40,
        }}
      />
      {/* Drawer panel */}
      <div
        style={{
          position: 'fixed',
          top: 0,
          right: 0,
          bottom: 0,
          width: 360,
          background: 'var(--bg-1)',
          borderLeft: '1px solid var(--border)',
          zIndex: 50,
          overflowY: 'auto',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        {/* Header */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '14px 20px',
            borderBottom: '1px solid var(--border)',
            position: 'sticky',
            top: 0,
            background: 'var(--bg-1)',
            zIndex: 1,
          }}
        >
          <div>
            <div style={{ fontSize: 13, fontWeight: 600, color: 'var(--text-1)' }}>{machine.name}</div>
            <div className="mono" style={{ fontSize: 11, color: 'var(--text-3)', marginTop: 2 }}>
              {machine.type} · {machine.location} · {machine.id}
            </div>
          </div>
          <button
            onClick={onClose}
            style={{
              padding: 4,
              background: 'none',
              border: 'none',
              color: 'var(--text-3)',
              cursor: 'pointer',
              borderRadius: 0,
            }}
          >
            <X size={16} />
          </button>
        </div>

        {/* Key metrics — 2x2 grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: 1,
            background: 'var(--border)',
            borderBottom: '1px solid var(--border)',
          }}
        >
          {[
            { label: 'Health Score', value: `${machine.score}%`, color: healthBarColor(machine.score) },
            { label: 'System Uptime', value: `${machine.uptime}%`, color: 'var(--signal)' },
            { label: 'Active Alerts', value: String(machine.alerts), color: machine.alerts > 0 ? 'var(--red)' : 'var(--text-3)' },
            { label: 'Machine Type', value: machine.type, color: 'var(--text-1)' },
          ].map(({ label, value, color }) => (
            <div key={label} style={{ background: 'var(--bg-1)', padding: '14px 16px' }}>
              <div className="mono" style={{ fontSize: 10, color: 'var(--text-3)', textTransform: 'uppercase', letterSpacing: '0.07em', marginBottom: 6 }}>
                {label}
              </div>
              <div className="mono" style={{ fontSize: 20, color, lineHeight: 1 }}>
                {value}
              </div>
            </div>
          ))}
        </div>

        {/* Predictive Health Score — thin horizontal bar with marker */}
        <div style={{ padding: '20px', borderBottom: '1px solid var(--border)' }}>
          <div className="mono" style={{ fontSize: 10, color: 'var(--text-3)', textTransform: 'uppercase', letterSpacing: '0.07em', marginBottom: 12 }}>
            Predictive health score
          </div>
          <div
            style={{
              position: 'relative',
              height: 4,
              background: 'var(--border-strong)',
              borderRadius: 0,
              overflow: 'visible',
            }}
          >
            <div
              style={{
                width: `${machine.score}%`,
                height: '100%',
                background: healthBarColor(machine.score),
                borderRadius: 0,
              }}
            />
            {/* Marker */}
            <div
              style={{
                position: 'absolute',
                top: -4,
                left: `${machine.score}%`,
                transform: 'translateX(-50%)',
                width: 2,
                height: 12,
                background: healthBarColor(machine.score),
                borderRadius: 0,
              }}
            />
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 6 }}>
            <span className="mono" style={{ fontSize: 10, color: 'var(--text-3)' }}>Critical</span>
            <span className="mono" style={{ fontSize: 10, color: 'var(--text-3)' }}>Optimal</span>
          </div>
        </div>

        {/* Remaining Useful Life */}
        <div style={{ padding: '20px', borderBottom: '1px solid var(--border)' }}>
          <div className="mono" style={{ fontSize: 10, color: 'var(--text-3)', textTransform: 'uppercase', letterSpacing: '0.07em', marginBottom: 10 }}>
            Remaining useful life
          </div>
          <div style={{ display: 'flex', alignItems: 'baseline', gap: 6 }}>
            <span className="mono" style={{ fontSize: 32, color: rulColor, lineHeight: 1 }}>
              {rulText}
            </span>
            <span style={{ fontSize: 12, color: 'var(--text-3)' }}>estimated</span>
          </div>
        </div>

        {/* AI Analysis */}
        <div style={{ padding: '20px', borderBottom: '1px solid var(--border)' }}>
          <div className="mono" style={{ fontSize: 10, color: 'var(--text-3)', textTransform: 'uppercase', letterSpacing: '0.07em', marginBottom: 10 }}>
            Latest AI analysis
          </div>
          <p style={{ fontSize: 13, color: 'var(--text-2)', lineHeight: 1.6 }}>
            {machine.status === 'healthy'
              ? 'All sensors within nominal parameters. No anomalies detected in the last 48-hour observation window. Model confidence: 98.4%.'
              : machine.status === 'warning'
              ? 'Micro-vibrations detected on primary axis exceeding baseline by 3.8%. Pattern historically precedes bearing degradation. Recommend inspection within 7 days.'
              : 'Severe vibration anomaly confirmed. Immediate shutdown recommended to prevent catastrophic failure. Model confidence: 99.1%.'}
          </p>
        </div>

        {/* Actions */}
        <div style={{ padding: '20px', display: 'flex', flexDirection: 'column', gap: 8 }}>
          <button className="vg-btn vg-btn-primary" style={{ width: '100%', height: 34, fontSize: 13 }}>
            Create work order
          </button>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8 }}>
            <button className="vg-btn vg-btn-ghost" style={{ height: 34, fontSize: 13 }}>View camera</button>
            <button className="vg-btn vg-btn-ghost" style={{ height: 34, fontSize: 13 }}>Download logs</button>
          </div>
        </div>
      </div>
    </>
  );
};

/* ─── Main View ──────────────────────────────────── */
export const MachineManagementView: React.FC = () => {
  const [search, setSearch] = useState('');
  const [filterStatus, setFilterStatus] = useState<FilterStatus>('all');
  const [sortKey, setSortKey] = useState<SortKey>('score');
  const [sortDir, setSortDir] = useState<SortDir>('desc');
  const [page, setPage] = useState(1);
  const [drawerMachine, setDrawerMachine] = useState<typeof machines[0] | null>(null);

  const handleSort = (key: SortKey) => {
    if (sortKey === key) setSortDir((d) => (d === 'asc' ? 'desc' : 'asc'));
    else { setSortKey(key); setSortDir('desc'); }
  };

  const filtered = useMemo(() => {
    return machines
      .filter((m) => {
        const matchSearch = m.name.toLowerCase().includes(search.toLowerCase()) || m.id.toLowerCase().includes(search.toLowerCase());
        const matchFilter = filterStatus === 'all' || m.status === filterStatus;
        return matchSearch && matchFilter;
      })
      .sort((a, b) => {
        let aVal: any = a[sortKey as keyof typeof a];
        let bVal: any = b[sortKey as keyof typeof b];
        if (typeof aVal === 'string') aVal = aVal.toLowerCase();
        if (typeof bVal === 'string') bVal = bVal.toLowerCase();
        if (aVal < bVal) return sortDir === 'asc' ? -1 : 1;
        if (aVal > bVal) return sortDir === 'asc' ? 1 : -1;
        return 0;
      });
  }, [search, filterStatus, sortKey, sortDir]);

  const totalPages = Math.ceil(filtered.length / ITEMS_PER_PAGE);
  const paginated = filtered.slice((page - 1) * ITEMS_PER_PAGE, page * ITEMS_PER_PAGE);

  const SortIndicator: React.FC<{ col: SortKey }> = ({ col }) => (
    <span style={{ display: 'inline-flex', flexDirection: 'column', gap: 1, marginLeft: 4, opacity: 0.4, verticalAlign: 'middle' }}>
      <ChevronUp size={8} style={{ opacity: sortKey === col && sortDir === 'asc' ? 1 : 0.4, color: sortKey === col ? 'var(--signal)' : 'inherit' }} />
      <ChevronDown size={8} style={{ opacity: sortKey === col && sortDir === 'desc' ? 1 : 0.4, color: sortKey === col ? 'var(--signal)' : 'inherit' }} />
    </span>
  );

  return (
    <>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>

        {/* ─── PAGE HEADER ─── */}
        <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between' }}>
          <div>
            <h1 className="text-page-title">Machine Fleet</h1>
            {/* Count summary in plain text */}
            <p className="mono" style={{ marginTop: 4, fontSize: 12, color: 'var(--text-3)' }}>
              {machines.length} machines
              {' · '}
              <span style={{ color: 'var(--red)' }}>{machines.filter((m) => m.status === 'critical').length} critical</span>
              {' · '}
              <span style={{ color: 'var(--amber)' }}>{machines.filter((m) => m.status === 'warning').length} warning</span>
            </p>
          </div>
          <div style={{ display: 'flex', gap: 8 }}>
            <button className="vg-btn vg-btn-ghost" style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
              <Download size={13} />
              Export
            </button>
            <button className="vg-btn vg-btn-primary" style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
              <Plus size={13} />
              Add machine
            </button>
          </div>
        </div>

        {/* ─── FILTER / SEARCH ROW ─── */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          {/* Search */}
          <div style={{ position: 'relative', display: 'flex', alignItems: 'center', flex: '0 0 240px' }}>
            <Search size={13} style={{ position: 'absolute', left: 10, color: 'var(--text-3)', pointerEvents: 'none' }} />
            <input
              className="enterprise-input"
              value={search}
              onChange={(e) => { setSearch(e.target.value); setPage(1); }}
              type="text"
              placeholder="Search by name or ID..."
              style={{ width: '100%', paddingLeft: 30 }}
            />
          </div>

          {/* Ghost toggle filter chips */}
          {(['all', 'healthy', 'warning', 'critical'] as FilterStatus[]).map((s) => (
            <button
              key={s}
              onClick={() => { setFilterStatus(s); setPage(1); }}
              style={{
                height: 32,
                padding: '0 12px',
                borderRadius: 'var(--radius-sm)',
                border: '1px solid',
                borderColor: filterStatus === s ? 'var(--signal)' : 'var(--border-strong)',
                background: filterStatus === s ? 'var(--signal-dim)' : 'transparent',
                color: filterStatus === s ? 'var(--signal)' : 'var(--text-2)',
                fontSize: 12,
                fontFamily: "'Inter', sans-serif",
                fontWeight: 500,
                cursor: 'pointer',
                transition: 'all 100ms',
                textTransform: 'capitalize',
              }}
            >
              {s}
            </button>
          ))}
        </div>

        {/* ─── DATA TABLE ─── */}
        <div className="vg-panel" style={{ padding: 0 }}>
          <div style={{ overflowX: 'auto' }}>
            <table className="vg-table">
              <thead>
                <tr>
                  {[
                    { key: 'name',   label: 'Machine'     },
                    { key: 'status', label: 'Status'      },
                    { key: 'score',  label: 'Health'      },
                    { key: 'alerts', label: 'Alerts'      },
                    { key: 'uptime', label: 'Uptime'      },
                  ].map(({ key, label }) => (
                    <th
                      key={key}
                      onClick={() => handleSort(key as SortKey)}
                      style={{ cursor: 'pointer', userSelect: 'none' }}
                    >
                      {label}
                      <SortIndicator col={key as SortKey} />
                    </th>
                  ))}
                  <th style={{ textAlign: 'right' }}>Actions</th>
                </tr>
              </thead>
              <tbody>
                {paginated.map((machine) => (
                  <tr
                    key={machine.id}
                    style={{ cursor: 'pointer' }}
                    onClick={() => setDrawerMachine(machine)}
                  >
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
                            style={{ width: `${machine.score}%`, background: healthBarColor(machine.score) }}
                          />
                        </div>
                        <span className="mono" style={{ fontSize: 12, color: 'var(--text-2)', minWidth: 30 }}>
                          {machine.score}%
                        </span>
                      </div>
                    </td>
                    <td>
                      <span
                        className="mono"
                        style={{ fontSize: 13, color: machine.alerts > 0 ? 'var(--red)' : 'var(--text-3)' }}
                      >
                        {machine.alerts > 0 ? machine.alerts : '—'}
                      </span>
                    </td>
                    <td>
                      <span className="mono" style={{ fontSize: 13, color: 'var(--text-2)' }}>
                        {machine.uptime}%
                      </span>
                    </td>
                    <td
                      style={{ textAlign: 'right' }}
                      onClick={(e) => e.stopPropagation()}
                    >
                      <button
                        onClick={() => setDrawerMachine(machine)}
                        style={{
                          fontSize: 12,
                          color: 'var(--signal)',
                          background: 'none',
                          border: 'none',
                          cursor: 'pointer',
                          fontFamily: "'Inter', sans-serif",
                        }}
                      >
                        Details →
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: '10px 16px',
              borderTop: '1px solid var(--border)',
            }}
          >
            <span className="mono" style={{ fontSize: 11, color: 'var(--text-3)' }}>
              {(page - 1) * ITEMS_PER_PAGE + 1}–{Math.min(page * ITEMS_PER_PAGE, filtered.length)} of {filtered.length}
            </span>
            <div style={{ display: 'flex', gap: 4 }}>
              <button
                onClick={() => setPage((p) => Math.max(1, p - 1))}
                disabled={page === 1}
                className="vg-btn vg-btn-ghost"
                style={{ height: 26, padding: '0 10px', fontSize: 12, opacity: page === 1 ? 0.4 : 1 }}
              >
                Previous
              </button>
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
                <button
                  key={p}
                  onClick={() => setPage(p)}
                  style={{
                    width: 26,
                    height: 26,
                    border: '1px solid',
                    borderColor: p === page ? 'var(--signal)' : 'var(--border-strong)',
                    background: p === page ? 'var(--signal-dim)' : 'transparent',
                    color: p === page ? 'var(--signal)' : 'var(--text-2)',
                    borderRadius: 'var(--radius-sm)',
                    fontSize: 12,
                    fontFamily: "'JetBrains Mono', monospace",
                    cursor: 'pointer',
                  }}
                >
                  {p}
                </button>
              ))}
              <button
                onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
                disabled={page === totalPages}
                className="vg-btn vg-btn-ghost"
                style={{ height: 26, padding: '0 10px', fontSize: 12, opacity: page === totalPages ? 0.4 : 1 }}
              >
                Next
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* ─── DETAIL DRAWER ─── */}
      <MachineDetailDrawer machine={drawerMachine} onClose={() => setDrawerMachine(null)} />
    </>
  );
};
