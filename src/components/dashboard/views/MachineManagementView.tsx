import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Search, Filter, ChevronUp, ChevronDown, MoreHorizontal,
  AlertTriangle, ShieldCheck, Clock, Server, RefreshCw,
  Download, Trash2, XCircle, CheckSquare, ChevronRight
} from 'lucide-react';
import { machines } from '../data/mockData';
import { StatusBadge } from '../ui/StatusBadge';
import { Drawer } from '../ui/Drawer';

type SortKey = 'name' | 'status' | 'score' | 'uptime' | 'alerts';
type SortDir = 'asc' | 'desc';
type FilterStatus = 'all' | 'healthy' | 'warning' | 'critical';

const ITEMS_PER_PAGE = 5;

const MachineDetail: React.FC<{ machine: typeof machines[0] }> = ({ machine }) => (
  <div className="divide-y divide-white/[0.06]">
    {/* Key Metrics */}
    <div className="p-6 grid grid-cols-2 gap-4">
      {[
        { label: 'Health Score', value: `${machine.score}%`, color: machine.score > 80 ? 'text-emerald-400' : machine.score > 60 ? 'text-amber-400' : 'text-red-400' },
        { label: 'System Uptime', value: `${machine.uptime}%`, color: 'text-blue-400' },
        { label: 'Active Alerts', value: machine.alerts, color: machine.alerts > 0 ? 'text-red-400' : 'text-white/50' },
        { label: 'Machine Type', value: machine.type, color: 'text-white' },
      ].map(({ label, value, color }) => (
        <div key={label} className="bg-white/[0.03] border border-white/[0.06] rounded-xl p-4">
          <div className="text-[11px] font-semibold uppercase tracking-widest text-white/40 mb-1">{label}</div>
          <div className={`text-[20px] font-semibold ${color}`}>{value}</div>
        </div>
      ))}
    </div>

    {/* Health bar */}
    <div className="p-6">
      <div className="text-[12px] font-semibold uppercase tracking-widest text-white/40 mb-3">Predictive Health Score</div>
      <div className="h-2 bg-white/10 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${machine.score}%` }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="h-full rounded-full"
          style={{ background: machine.score > 80 ? '#10B981' : machine.score > 60 ? '#F59E0B' : '#EF4444' }}
        />
      </div>
      <div className="flex justify-between mt-2">
        <span className="text-[11px] text-white/30">Critical</span>
        <span className="text-[11px] text-white/30">Optimal</span>
      </div>
    </div>

    {/* Remaining Useful Life */}
    <div className="p-6">
      <div className="text-[12px] font-semibold uppercase tracking-widest text-white/40 mb-3 flex items-center gap-2">
        <Clock className="w-3.5 h-3.5" />
        Remaining Useful Life
      </div>
      <div className="flex items-end gap-2">
        <span className={`text-[28px] font-semibold ${machine.status === 'critical' ? 'text-red-400' : machine.status === 'warning' ? 'text-amber-400' : 'text-emerald-400'}`}>
          {machine.status === 'critical' ? '< 12h' : machine.status === 'warning' ? '~14d' : '> 180d'}
        </span>
        <span className="text-[13px] text-white/40 mb-1">estimated</span>
      </div>
    </div>

    {/* AI Analysis */}
    <div className="p-6">
      <div className="text-[12px] font-semibold uppercase tracking-widest text-white/40 mb-3 flex items-center gap-2">
        <ShieldCheck className="w-3.5 h-3.5" />
        Latest AI Analysis
      </div>
      <div className={`p-4 rounded-xl border ${machine.status === 'healthy' ? 'bg-emerald-500/5 border-emerald-500/15' : 'bg-red-500/5 border-red-500/15'}`}>
        <p className="text-[13px] leading-relaxed text-white/80">
          {machine.status === 'healthy'
            ? 'All sensors operating within nominal parameters. No anomalies detected in the last 48-hour observation window. Predictive model confidence: 98.4%.'
            : machine.status === 'warning'
            ? 'Micro-vibrations detected on primary axis exceeding baseline by 3.8%. Pattern historically precedes bearing degradation. Recommend inspection within 7 days.'
            : 'Severe vibration anomaly confirmed. Immediate shutdown and manual inspection recommended to prevent catastrophic failure. Model confidence: 99.1%.'}
        </p>
      </div>
    </div>

    {/* Actions */}
    <div className="p-6 flex flex-col gap-3">
      <button className="w-full py-2.5 bg-blue-600 hover:bg-blue-500 text-white text-[13px] font-semibold rounded-xl transition-colors shadow-sm">
        Create Work Order
      </button>
      <div className="grid grid-cols-2 gap-3">
        <button className="py-2 bg-white/5 hover:bg-white/10 border border-white/10 text-white/70 hover:text-white text-[13px] font-medium rounded-xl transition-colors">
          View Camera
        </button>
        <button className="py-2 bg-white/5 hover:bg-white/10 border border-white/10 text-white/70 hover:text-white text-[13px] font-medium rounded-xl transition-colors">
          Download Logs
        </button>
      </div>
    </div>
  </div>
);

export const MachineManagementView: React.FC = () => {
  const [search, setSearch] = useState('');
  const [filterStatus, setFilterStatus] = useState<FilterStatus>('all');
  const [sortKey, setSortKey] = useState<SortKey>('score');
  const [sortDir, setSortDir] = useState<SortDir>('desc');
  const [selected, setSelected] = useState<Set<string>>(new Set());
  const [page, setPage] = useState(1);
  const [drawerMachine, setDrawerMachine] = useState<typeof machines[0] | null>(null);

  const handleSort = (key: SortKey) => {
    if (sortKey === key) setSortDir(d => d === 'asc' ? 'desc' : 'asc');
    else { setSortKey(key); setSortDir('desc'); }
  };

  const filtered = useMemo(() => {
    return machines
      .filter(m => {
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

  const toggleSelect = (id: string) => {
    setSelected(prev => {
      const next = new Set(prev);
      next.has(id) ? next.delete(id) : next.add(id);
      return next;
    });
  };

  const toggleAll = () => {
    if (selected.size === paginated.length) setSelected(new Set());
    else setSelected(new Set(paginated.map(m => m.id)));
  };

  const SortIcon: React.FC<{ col: SortKey }> = ({ col }) => (
    <span className="inline-flex flex-col ml-1 opacity-40">
      <ChevronUp className={`w-2.5 h-2.5 -mb-0.5 ${sortKey === col && sortDir === 'asc' ? 'opacity-100 text-blue-400' : ''}`} />
      <ChevronDown className={`w-2.5 h-2.5 ${sortKey === col && sortDir === 'desc' ? 'opacity-100 text-blue-400' : ''}`} />
    </span>
  );

  return (
    <>
      <div className="space-y-6 pb-20">
        {/* Page Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h2 className="text-[20px] font-semibold text-white tracking-tight">Machine Fleet</h2>
            <p className="text-[13px] text-white/50 mt-1">
              {filtered.length} machines · {machines.filter(m => m.status === 'critical').length} critical · {machines.filter(m => m.status === 'warning').length} warning
            </p>
          </div>
          <div className="flex items-center gap-3">
            <button className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-[13px] text-white/70 hover:bg-white/10 hover:text-white transition-colors">
              <Download className="w-4 h-4" />Export
            </button>
            <button className="flex items-center gap-2 bg-blue-600 hover:bg-blue-500 rounded-lg px-4 py-2 text-[13px] font-semibold text-white transition-colors shadow-sm">
              + Add Machine
            </button>
          </div>
        </div>

        {/* Filters Row */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
          <div className="relative group flex-1 max-w-sm">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-white/30 group-focus-within:text-blue-400 transition-colors" />
            <input
              value={search}
              onChange={e => { setSearch(e.target.value); setPage(1); }}
              type="text"
              placeholder="Search by name or ID..."
              className="w-full bg-white/5 border border-white/10 rounded-lg py-2 pl-9 pr-4 text-[13px] text-white placeholder:text-white/30 focus:outline-none focus:border-white/20 focus:bg-white/[0.07] transition-all"
            />
          </div>

          <div className="flex items-center gap-2">
            {(['all', 'healthy', 'warning', 'critical'] as FilterStatus[]).map(s => (
              <button
                key={s}
                onClick={() => { setFilterStatus(s); setPage(1); }}
                className={`px-3 py-1.5 rounded-lg text-[12px] font-semibold border transition-all capitalize ${
                  filterStatus === s
                    ? 'bg-white/10 text-white border-white/20'
                    : 'bg-transparent text-white/40 border-white/10 hover:text-white hover:bg-white/5'
                }`}
              >
                {s}
              </button>
            ))}
          </div>
        </div>

        {/* Bulk Actions Bar */}
        <AnimatePresence>
          {selected.size > 0 && (
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              className="flex items-center gap-4 px-5 py-3 bg-blue-600/15 border border-blue-500/25 rounded-xl"
            >
              <CheckSquare className="w-4 h-4 text-blue-400" />
              <span className="text-[13px] font-semibold text-blue-300">{selected.size} selected</span>
              <div className="flex items-center gap-2 ml-2">
                <button className="flex items-center gap-1.5 px-3 py-1.5 bg-white/10 hover:bg-white/20 text-white/80 hover:text-white text-[12px] font-medium rounded-lg transition-colors">
                  <RefreshCw className="w-3.5 h-3.5" />Schedule Maintenance
                </button>
                <button className="flex items-center gap-1.5 px-3 py-1.5 bg-red-500/10 hover:bg-red-500/20 text-red-400 text-[12px] font-medium rounded-lg transition-colors border border-red-500/20">
                  <XCircle className="w-3.5 h-3.5" />Decommission
                </button>
              </div>
              <button onClick={() => setSelected(new Set())} className="ml-auto text-white/40 hover:text-white transition-colors">
                <XCircle className="w-4 h-4" />
              </button>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Data Table */}
        <div className="bg-white/[0.03] border border-white/[0.08] rounded-2xl overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              {/* Sticky Header */}
              <thead className="sticky top-0 z-10">
                <tr className="bg-[#0D0D0D] border-b border-white/[0.06] text-[10px] uppercase tracking-widest text-white/40 font-semibold">
                  <th className="px-5 py-3.5 w-10">
                    <input
                      type="checkbox"
                      checked={selected.size === paginated.length && paginated.length > 0}
                      onChange={toggleAll}
                      className="accent-blue-500 cursor-pointer"
                    />
                  </th>
                  {[
                    { key: 'name', label: 'Machine' },
                    { key: 'status', label: 'Status' },
                    { key: 'score', label: 'Health Score' },
                    { key: 'alerts', label: 'Alerts' },
                    { key: 'uptime', label: 'Uptime' },
                  ].map(({ key, label }) => (
                    <th
                      key={key}
                      className="px-6 py-3.5 cursor-pointer hover:text-white/70 transition-colors select-none"
                      onClick={() => handleSort(key as SortKey)}
                    >
                      <span className="flex items-center gap-1">{label}<SortIcon col={key as SortKey} /></span>
                    </th>
                  ))}
                  <th className="px-6 py-3.5 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/[0.04]">
                {paginated.map((machine, i) => (
                  <motion.tr
                    key={machine.id}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: i * 0.04 }}
                    className="hover:bg-white/[0.02] transition-colors group cursor-pointer"
                    onClick={() => setDrawerMachine(machine)}
                  >
                    <td className="px-5 py-4" onClick={e => e.stopPropagation()}>
                      <input
                        type="checkbox"
                        checked={selected.has(machine.id)}
                        onChange={() => toggleSelect(machine.id)}
                        className="accent-blue-500 cursor-pointer"
                      />
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className="w-9 h-9 rounded-xl border border-white/10 bg-white/5 flex items-center justify-center shrink-0 group-hover:border-white/20 transition-colors">
                          <Server className="w-4 h-4 text-white/35 group-hover:text-blue-400 transition-colors" />
                        </div>
                        <div>
                          <div className="text-[13px] font-semibold text-white">{machine.name}</div>
                          <div className="text-[11px] text-white/35 mt-0.5">{machine.id} · {machine.location}</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <StatusBadge status={machine.status as any} pulse size="sm" />
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2.5">
                        <div className="w-20 h-1.5 bg-white/10 rounded-full overflow-hidden">
                          <div className="h-full rounded-full transition-all" style={{ width: `${machine.score}%`, background: machine.score > 80 ? '#10B981' : machine.score > 60 ? '#F59E0B' : '#EF4444' }} />
                        </div>
                        <span className="text-[12px] font-semibold text-white/70 tabular-nums w-8">{machine.score}%</span>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span className={`text-[13px] font-semibold tabular-nums ${machine.alerts > 0 ? 'text-red-400' : 'text-white/30'}`}>
                        {machine.alerts > 0 ? machine.alerts : '—'}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <span className="text-[13px] text-white/60 tabular-nums">{machine.uptime}%</span>
                    </td>
                    <td className="px-6 py-4 text-right" onClick={e => e.stopPropagation()}>
                      <div className="flex items-center justify-end gap-2">
                        <button
                          onClick={() => setDrawerMachine(machine)}
                          className="text-[12px] font-medium text-white/40 hover:text-blue-400 transition-colors flex items-center gap-1"
                        >
                          Details <ChevronRight className="w-3.5 h-3.5" />
                        </button>
                        <button className="p-1.5 rounded-lg hover:bg-white/10 text-white/30 hover:text-white transition-colors">
                          <MoreHorizontal className="w-4 h-4" />
                        </button>
                      </div>
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          <div className="flex items-center justify-between px-6 py-4 border-t border-white/[0.06] bg-black/10">
            <span className="text-[12px] text-white/40">
              Showing {(page - 1) * ITEMS_PER_PAGE + 1}–{Math.min(page * ITEMS_PER_PAGE, filtered.length)} of {filtered.length} machines
            </span>
            <div className="flex items-center gap-1.5">
              <button
                onClick={() => setPage(p => Math.max(1, p - 1))}
                disabled={page === 1}
                className="px-3 py-1.5 text-[12px] font-medium text-white/50 border border-white/10 rounded-lg hover:bg-white/5 hover:text-white transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
              >
                Previous
              </button>
              {Array.from({ length: totalPages }, (_, i) => i + 1).map(p => (
                <button
                  key={p}
                  onClick={() => setPage(p)}
                  className={`w-8 h-8 text-[12px] font-semibold rounded-lg border transition-colors ${
                    p === page ? 'bg-white/10 text-white border-white/20' : 'text-white/40 border-white/10 hover:bg-white/5 hover:text-white'
                  }`}
                >
                  {p}
                </button>
              ))}
              <button
                onClick={() => setPage(p => Math.min(totalPages, p + 1))}
                disabled={page === totalPages}
                className="px-3 py-1.5 text-[12px] font-medium text-white/50 border border-white/10 rounded-lg hover:bg-white/5 hover:text-white transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
              >
                Next
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Machine Detail Drawer */}
      <Drawer
        open={!!drawerMachine}
        onClose={() => setDrawerMachine(null)}
        title={drawerMachine?.name ?? ''}
        subtitle={`${drawerMachine?.type} · ${drawerMachine?.location} · ${drawerMachine?.id}`}
      >
        {drawerMachine && <MachineDetail machine={drawerMachine} />}
      </Drawer>
    </>
  );
};
