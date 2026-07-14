import React, { useState } from 'react';
import { Sidebar, DashboardViewType } from '../components/dashboard/layout/Sidebar';
import { Header } from '../components/dashboard/layout/Header';
import { OverviewView } from '../components/dashboard/views/OverviewView';
import { MachineManagementView } from '../components/dashboard/views/MachineManagementView';
import { LiveMonitoringView } from '../components/dashboard/views/LiveMonitoringView';
import { AIInsightsView } from '../components/dashboard/views/AIInsightsView';
import { ReportsView } from '../components/dashboard/views/ReportsView';
import { SettingsView } from '../components/dashboard/views/SettingsView';
import { motion, AnimatePresence } from 'framer-motion';

const DashboardPage: React.FC = () => {
  const [activeView, setActiveView] = useState<DashboardViewType>('overview');
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div className="flex h-screen bg-[#050505] font-['Inter',system-ui,sans-serif] text-white overflow-hidden selection:bg-blue-500/30">
      <Sidebar 
        activeView={activeView} 
        setActiveView={setActiveView} 
        collapsed={collapsed}
        setCollapsed={setCollapsed}
      />
      <div className="flex-1 flex flex-col min-w-0 overflow-hidden relative">
        <Header />
        
        {/* Main Content Area */}
        <main className="flex-1 overflow-y-auto overflow-x-hidden p-6 md:p-10 scroll-smooth">
          <div className="max-w-[1600px] mx-auto min-h-full">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeView}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
              >
                {activeView === 'overview' && <OverviewView />}
                {activeView === 'machines' && <MachineManagementView />}
                {activeView === 'live' && <LiveMonitoringView />}
                {activeView === 'insights' && <AIInsightsView />}
                {activeView === 'reports' && <ReportsView />}
                {activeView === 'settings' && <SettingsView />}
              </motion.div>
            </AnimatePresence>
          </div>
        </main>
      </div>
    </div>
  );
};

export default DashboardPage;
