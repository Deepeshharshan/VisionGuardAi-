import React from 'react';
import { motion } from 'framer-motion';
import { FileText, Download, Calendar, Filter, Clock, FileSpreadsheet, Send } from 'lucide-react';

const scheduledReports = [
  { id: 'SR-01', name: 'Weekly Production Summary', frequency: 'Weekly', nextRun: 'Tomorrow, 08:00 AM', format: 'PDF', recipients: 4 },
  { id: 'SR-02', name: 'Daily Anomaly Log', frequency: 'Daily', nextRun: 'Today, 06:00 PM', format: 'Excel', recipients: 2 },
  { id: 'SR-03', name: 'Monthly Executive Brief', frequency: 'Monthly', nextRun: '1st of Month', format: 'PDF', recipients: 12 },
];

const reportHistory = [
  { id: 'RH-104', name: 'Daily Anomaly Log', date: 'Jul 13, 2026', time: '06:00 PM', status: 'delivered', size: '2.4 MB' },
  { id: 'RH-103', name: 'Shift B Performance Matrix', date: 'Jul 13, 2026', time: '02:30 PM', status: 'delivered', size: '1.1 MB' },
  { id: 'RH-102', name: 'Weekly Production Summary', date: 'Jul 10, 2026', time: '08:00 AM', status: 'delivered', size: '5.8 MB' },
  { id: 'RH-101', name: 'Monthly Executive Brief', date: 'Jul 01, 2026', time: '09:00 AM', status: 'delivered', size: '12.4 MB' },
];

export const ReportsView: React.FC = () => {
  return (
    <div className="space-y-6 pb-20">
      
      {/* ─── PAGE HEADER & CONTROLS ─── */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-xl font-semibold text-white tracking-tight">Reports & Exports</h2>
          <p className="text-[13px] text-white/50 mt-1">Generate, schedule, and review historical performance data</p>
        </div>
        
        <div className="flex items-center gap-3">
          <button className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-[13px] font-medium text-white hover:bg-white/10 transition-colors">
            <Calendar className="w-4 h-4" />
            Last 30 Days
          </button>
          <button className="flex items-center gap-2 bg-blue-600 hover:bg-blue-500 rounded-lg px-4 py-2 text-[13px] font-medium text-white transition-colors shadow-sm">
            <FileText className="w-4 h-4" />
            New Report
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* ─── LEFT COL: ACTIONS & SCHEDULES ─── */}
        <div className="space-y-6">
          
          {/* Quick Exports */}
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="bg-white/5 border border-white/10 rounded-2xl p-6"
          >
            <h3 className="text-[14px] font-semibold text-white tracking-tight mb-4">Quick Exports</h3>
            <div className="grid grid-cols-2 gap-3">
              <button className="flex flex-col items-center justify-center p-4 bg-black/40 border border-white/5 rounded-xl hover:bg-white/10 hover:border-white/20 transition-all group">
                <FileText className="w-6 h-6 text-red-400 mb-2 group-hover:scale-110 transition-transform" />
                <span className="text-[13px] font-medium text-white/80">Export PDF</span>
              </button>
              <button className="flex flex-col items-center justify-center p-4 bg-black/40 border border-white/5 rounded-xl hover:bg-white/10 hover:border-white/20 transition-all group">
                <FileSpreadsheet className="w-6 h-6 text-emerald-400 mb-2 group-hover:scale-110 transition-transform" />
                <span className="text-[13px] font-medium text-white/80">Export Excel</span>
              </button>
            </div>
          </motion.div>

          {/* Scheduled Reports */}
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.4 }}
            className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden"
          >
            <div className="px-5 py-4 border-b border-white/10 flex items-center justify-between">
              <h3 className="text-[14px] font-semibold text-white tracking-tight flex items-center gap-2">
                <Clock className="w-4 h-4 text-white/40" />
                Scheduled Reports
              </h3>
              <button className="text-[12px] font-medium text-blue-400 hover:text-blue-300">Manage</button>
            </div>
            <div className="divide-y divide-white/5">
              {scheduledReports.map((report) => (
                <div key={report.id} className="p-4 hover:bg-white/[0.02] transition-colors">
                  <div className="flex items-start justify-between">
                    <div>
                      <h4 className="text-[13px] font-medium text-white">{report.name}</h4>
                      <p className="text-[12px] text-white/40 mt-0.5">Next run: {report.nextRun}</p>
                    </div>
                    <span className="px-2 py-0.5 bg-white/10 rounded text-[10px] font-bold text-white/70 uppercase">
                      {report.format}
                    </span>
                  </div>
                  <div className="mt-3 flex items-center gap-4 text-[11px] font-medium text-white/50">
                    <span className="flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5" />
                      {report.frequency}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Send className="w-3.5 h-3.5" />
                      {report.recipients} recipients
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* ─── RIGHT COL: REPORT HISTORY ─── */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.4 }}
          className="lg:col-span-2 bg-white/5 border border-white/10 rounded-2xl overflow-hidden shadow-sm flex flex-col"
        >
          <div className="flex items-center justify-between px-6 py-5 border-b border-white/10 bg-black/20 shrink-0">
            <div>
              <h3 className="text-[15px] font-semibold text-white tracking-tight">Report History</h3>
              <p className="text-[13px] text-white/50 mt-0.5">Previously generated and delivered reports</p>
            </div>
            <div className="flex items-center gap-2">
              <button className="p-2 bg-white/5 border border-white/10 rounded-lg text-white/60 hover:text-white transition-colors">
                <Filter className="w-4 h-4" />
              </button>
            </div>
          </div>
          
          <div className="overflow-x-auto flex-1">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-black/20 border-b border-white/5 text-[11px] uppercase tracking-widest text-white/50 font-semibold">
                  <th className="px-6 py-4">Report Name</th>
                  <th className="px-6 py-4">Date Generated</th>
                  <th className="px-6 py-4">Status</th>
                  <th className="px-6 py-4 text-right">Download</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {reportHistory.map((report) => (
                  <tr key={report.id} className="hover:bg-white/[0.02] transition-colors group cursor-pointer">
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                          {report.name.includes('Excel') || report.name.includes('Matrix') ? (
                            <FileSpreadsheet className="w-4 h-4 text-emerald-400" />
                          ) : (
                            <FileText className="w-4 h-4 text-red-400" />
                          )}
                        </div>
                        <div>
                          <div className="text-[13px] font-medium text-white">{report.name}</div>
                          <div className="text-[11px] text-white/40 mt-0.5">{report.id} • {report.size}</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="text-[13px] text-white/80">{report.date}</div>
                      <div className="text-[11px] text-white/40 mt-0.5">{report.time}</div>
                    </td>
                    <td className="px-6 py-4">
                      <span className="inline-flex items-center gap-1.5 px-2 py-1 rounded text-[11px] font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                        Delivered
                      </span>
                    </td>
                    <td className="px-6 py-4 text-right">
                      <button className="p-2 rounded-lg hover:bg-white/10 text-white/40 hover:text-white transition-colors group-hover:bg-white/5">
                        <Download className="w-4 h-4" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>

      </div>
    </div>
  );
};
