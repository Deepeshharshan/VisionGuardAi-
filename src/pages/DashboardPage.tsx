import React, { useState } from 'react';
import { DashboardViewType } from '../components/dashboard/layout/Sidebar';
import { MainLayout } from '../components/layout/MainLayout';
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
    <MainLayout activeView={activeView} setActiveView={setActiveView}>
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
    </MainLayout>
  );
};

export default DashboardPage;
