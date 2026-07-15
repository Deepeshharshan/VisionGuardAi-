import React, { useState } from 'react';
import { Sidebar, DashboardViewType } from '../components/dashboard/layout/Sidebar';
import { Header } from '../components/dashboard/layout/Header';
import { OverviewView } from '../components/dashboard/views/OverviewView';
import { MachineManagementView } from '../components/dashboard/views/MachineManagementView';
import { LiveMonitoringView } from '../components/dashboard/views/LiveMonitoringView';
import { AIInsightsView } from '../components/dashboard/views/AIInsightsView';
import { ReportsView } from '../components/dashboard/views/ReportsView';
import { SettingsView } from '../components/dashboard/views/SettingsView';
import { AnimatePresence, motion } from 'framer-motion';

const DashboardPage: React.FC = () => {
  const [activeView, setActiveView] = useState<DashboardViewType>('overview');

  return (
    <div
      style={{
        display: 'flex',
        height: '100vh',
        background: 'var(--bg-0)',
        fontFamily: "'Inter', system-ui, sans-serif",
        color: 'var(--text-1)',
        overflow: 'hidden',
      }}
    >
      <Sidebar activeView={activeView} setActiveView={setActiveView} />

      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', minWidth: 0, overflow: 'hidden' }}>
        <Header activeView={activeView} />

        <main style={{ flex: 1, overflowY: 'auto', overflowX: 'hidden' }}>
          <div className="enterprise-container" style={{ paddingTop: 32, paddingBottom: 48 }}>
            <AnimatePresence mode="wait">
              <motion.div
                key={activeView}
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.15 }}
              >
                {activeView === 'overview'  && <OverviewView />}
                {activeView === 'machines'  && <MachineManagementView />}
                {activeView === 'live'      && <LiveMonitoringView />}
                {activeView === 'insights'  && <AIInsightsView />}
                {activeView === 'reports'   && <ReportsView />}
                {activeView === 'settings'  && <SettingsView />}
              </motion.div>
            </AnimatePresence>
          </div>
        </main>
      </div>
    </div>
  );
};

export default DashboardPage;
