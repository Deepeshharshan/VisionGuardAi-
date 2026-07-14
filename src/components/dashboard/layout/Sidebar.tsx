import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  BarChart2, Video, Server, Bell, 
  ScanSearch, Settings, LogOut, ChevronLeft, ChevronRight, Activity
} from 'lucide-react';
import { Logo } from '../../ui/Logo';

export type DashboardViewType = 'overview' | 'live' | 'machines' | 'insights' | 'reports' | 'settings';

interface SidebarProps {
  activeView: DashboardViewType;
  setActiveView: (view: DashboardViewType) => void;
  collapsed: boolean;
  setCollapsed: (val: boolean) => void;
}

const navItems: { id: DashboardViewType; label: string; icon: any; badge?: number }[] = [
  { id: 'overview', label: 'Overview', icon: BarChart2 },
  { id: 'live', label: 'Live Monitoring', icon: Video, badge: 3 },
  { id: 'machines', label: 'Machine Management', icon: Server },
  { id: 'insights', label: 'AI Insights', icon: Activity },
  { id: 'reports', label: 'Reports', icon: ScanSearch },
  { id: 'settings', label: 'Settings', icon: Settings },
];

export const Sidebar: React.FC<SidebarProps> = ({ activeView, setActiveView, collapsed, setCollapsed }) => {
  return (
    <motion.aside
      initial={false}
      animate={{ width: collapsed ? 80 : 260 }}
      className="flex-shrink-0 flex flex-col bg-[#050505] border-r border-white/10 z-20 h-screen relative"
    >
      {/* Collapse Toggle */}
      <button 
        onClick={() => setCollapsed(!collapsed)}
        className="absolute -right-3 top-6 w-6 h-6 bg-[#1A1A1A] border border-white/10 rounded-full flex items-center justify-center text-white/50 hover:text-white hover:bg-[#2A2A2A] transition-colors z-50 shadow-md"
      >
        {collapsed ? <ChevronRight className="w-3.5 h-3.5" /> : <ChevronLeft className="w-3.5 h-3.5" />}
      </button>

      {/* Header / Logo */}
      <div className="h-20 flex items-center px-5 border-b border-white/10 overflow-hidden shrink-0">
        <Link to="/" className="flex items-center gap-2 outline-none">
          {collapsed ? (
            <div className="w-10 h-10 flex items-center justify-center shrink-0">
               <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="3" y="4" width="6" height="16" rx="1" fill="white" />
                  <rect x="11" y="10" width="6" height="10" rx="1" fill="white" />
                  <rect x="11" y="4" width="6" height="4" rx="1" fill="#3B82F6" />
                </svg>
            </div>
          ) : (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="scale-[0.85] origin-left">
              <Logo dark />
            </motion.div>
          )}
        </Link>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-3 py-6 space-y-1.5 overflow-y-auto overflow-x-hidden">
        {navItems.map((item) => {
          const isActive = activeView === item.id;
          const Icon = item.icon;
          
          return (
            <button
              key={item.id}
              onClick={() => setActiveView(item.id)}
              className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-[14px] transition-all duration-200 outline-none group ${
                isActive
                  ? 'bg-white/10 text-white font-medium border border-white/5 shadow-sm'
                  : 'text-white/50 font-medium hover:bg-white/5 hover:text-white border border-transparent'
              }`}
              title={collapsed ? item.label : undefined}
            >
              <div className="relative shrink-0">
                <Icon className={`w-5 h-5 transition-transform duration-300 ${isActive ? 'text-white scale-110' : 'text-white/40 group-hover:text-white group-hover:scale-110'}`} strokeWidth={isActive ? 2.5 : 2} />
                {item.badge && collapsed && (
                  <span className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
                )}
              </div>
              
              {!collapsed && (
                <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex-1 text-left whitespace-nowrap">
                  {item.label}
                </motion.span>
              )}
              
              {!collapsed && item.badge && (
                <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="shrink-0 px-2 py-0.5 rounded-full bg-blue-500/20 text-blue-400 text-[11px] font-bold border border-blue-500/30">
                  {item.badge}
                </motion.span>
              )}
            </button>
          );
        })}
      </nav>

      {/* User Profile */}
      <div className="p-4 border-t border-white/10 shrink-0">
        <div className={`flex items-center gap-3 ${collapsed ? 'justify-center' : 'px-2 py-1'}`}>
          <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center text-white text-[13px] font-bold shadow-inner shrink-0 ring-2 ring-white/10">
            SD
          </div>
          {!collapsed && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex-1 min-w-0">
              <div className="text-[14px] font-semibold text-white truncate">Sofia Davis</div>
              <div className="text-[12px] text-white/40 truncate">Plant Manager</div>
            </motion.div>
          )}
          {!collapsed && (
            <Link to="/login" className="shrink-0 p-1.5 rounded-md hover:bg-white/10 text-white/40 hover:text-white transition-colors">
              <LogOut className="w-4 h-4" />
            </Link>
          )}
        </div>
      </div>
    </motion.aside>
  );
};
