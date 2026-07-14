import React from 'react';
import { Search, Bell, Download, Calendar } from 'lucide-react';
import { motion } from 'framer-motion';

export const Header: React.FC = () => {
  return (
    <header className="h-20 shrink-0 bg-[#050505] border-b border-white/10 flex items-center justify-between px-8 z-10 sticky top-0">
      
      {/* Search Bar */}
      <div className="flex-1 max-w-md">
        <div className="relative group">
          <Search className="w-4 h-4 absolute left-4 top-1/2 -translate-y-1/2 text-white/40 group-focus-within:text-blue-400 transition-colors" />
          <input
            type="text"
            placeholder="Search machines, alerts, or reports... (Cmd+K)"
            className="w-full bg-white/5 border border-white/10 rounded-full py-2.5 pl-11 pr-4 text-[13px] text-white placeholder:text-white/30 focus:outline-none focus:border-white/20 focus:bg-white/10 transition-all shadow-inner"
          />
        </div>
      </div>

      {/* Global Actions */}
      <div className="flex items-center gap-6">
        
        {/* Status */}
        <div className="hidden md:flex items-center gap-2.5 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20">
          <span className="flex h-2 w-2 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <span className="text-[12px] font-semibold text-emerald-400 tracking-wide uppercase">All Systems Nominal</span>
        </div>

        <div className="w-[1px] h-6 bg-white/10 hidden md:block"></div>

        {/* Tools */}
        <div className="flex items-center gap-3">
          <button className="relative w-9 h-9 rounded-full hover:bg-white/10 flex items-center justify-center text-white/60 hover:text-white transition-colors outline-none focus-visible:ring-2 ring-blue-500">
            <Calendar className="w-4 h-4" />
          </button>
          <button className="relative w-9 h-9 rounded-full hover:bg-white/10 flex items-center justify-center text-white/60 hover:text-white transition-colors outline-none focus-visible:ring-2 ring-blue-500">
            <Download className="w-4 h-4" />
          </button>
          <button className="relative w-9 h-9 rounded-full hover:bg-white/10 flex items-center justify-center text-white/60 hover:text-white transition-colors outline-none focus-visible:ring-2 ring-blue-500">
            <Bell className="w-4 h-4" />
            <span className="absolute top-2 right-2 w-2 h-2 rounded-full bg-red-500 border border-[#050505]"></span>
          </button>
        </div>

      </div>
    </header>
  );
};
