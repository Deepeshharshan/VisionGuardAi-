import React, { useState } from 'react';
import { Sidebar, DashboardViewType } from '../dashboard/layout/Sidebar';
import { Header } from '../dashboard/layout/Header';

interface MainLayoutProps {
  children: React.ReactNode;
  activeView: DashboardViewType;
  setActiveView: (view: DashboardViewType) => void;
}

export const MainLayout: React.FC<MainLayoutProps> = ({ children, activeView, setActiveView }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="flex h-screen bg-[var(--bg-0)] font-sans text-[var(--text-1)] overflow-hidden">
      <Sidebar 
        activeView={activeView} 
        setActiveView={setActiveView} 
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
      />

      <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
        <Header activeView={activeView} setMobileMenuOpen={setMobileMenuOpen} />

        <main id="main-content" style={{ flex: 1, overflowY: 'auto', overflowX: 'hidden' }}>
          <div className="enterprise-container" style={{ paddingTop: 32, paddingBottom: 48 }}>
            {children}
          </div>
        </main>
      </div>
    </div>
  );
};
