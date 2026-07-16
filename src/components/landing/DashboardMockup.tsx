import React, { useState, useEffect } from 'react';
import { Camera, Shield, Search, Bell, Settings } from 'lucide-react';
import { motion } from 'framer-motion';

interface MachineCardProps {
  name: string;
  status: 'healthy' | 'warning' | 'critical';
  score: number;
  location: string;
}

const MachineCard: React.FC<MachineCardProps> = ({ name, status, score, location }) => {
  const isDanger = status === 'critical';
  const isWarn = status === 'warning';
  
  const statusColor = isDanger ? 'bg-[var(--red)]' : isWarn ? 'bg-[var(--amber)]' : 'bg-[var(--green)]';
  
  return (
    <div className="flex items-center justify-between p-3 border-b border-[var(--border)] hover:bg-[var(--bg-2)] transition-colors last:border-b-0 cursor-pointer">
      <div className="flex items-center gap-3">
        <div className={`w-2 h-2 rounded-full ${statusColor}`} />
        <div>
          <div className="text-[13px] font-medium text-[var(--text-1)]">{name}</div>
          <div className="text-[11px] text-[var(--text-3)]">{location}</div>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <div className="w-16 h-1.5 bg-[var(--border)] rounded-full overflow-hidden">
          <div 
            className={`h-full ${statusColor}`} 
            style={{ width: `${score}%` }} 
          />
        </div>
        <span className="mono text-[12px] font-medium text-[var(--text-1)] w-8 text-right">{score}%</span>
      </div>
    </div>
  );
};

export const DashboardMockup: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'overview' | 'cameras' | 'settings'>('overview');
  const [frameRate, setFrameRate] = useState(27);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setFrameRate(prev => prev === 27 ? 28 : prev === 28 ? 26 : 27);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="vg-panel bg-white/90 backdrop-blur-md border-[var(--border)] shadow-2xl rounded-2xl overflow-hidden flex flex-col w-full h-[600px]">
      
      {/* Top Header Area */}
      <div className="flex items-center justify-between px-6 py-4 border-b border-[var(--border)] bg-white/50">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-[var(--bg-2)] flex items-center justify-center">
            <Shield className="w-4 h-4 text-[var(--text-1)]" />
          </div>
          <div>
            <h3 className="font-semibold text-[15px] text-[var(--text-1)]">VisionGuard Workspace</h3>
            <p className="text-[12px] text-[var(--text-3)]">Factory A • 12 Active Cameras</p>
          </div>
        </div>
        
        {/* Mock Search Bar */}
        <div className="hidden md:flex items-center gap-2 bg-[var(--bg-2)] border border-[var(--border)] rounded-full px-4 py-2 w-64">
          <Search className="w-4 h-4 text-[var(--text-3)]" />
          <span className="text-[12px] text-[var(--text-3)]">Search cameras...</span>
          <span className="ml-auto text-[10px] text-[var(--text-3)] border border-[var(--border-strong)] rounded px-1.5 py-0.5 font-medium">⌘ K</span>
        </div>
        
        <div className="flex items-center gap-3">
          <button className="p-2 text-[var(--text-3)] hover:text-[var(--text-1)] transition-colors">
            <Bell className="w-4 h-4" />
          </button>
          <div className="w-8 h-8 rounded-full bg-[var(--signal)] text-white flex items-center justify-center text-[12px] font-semibold">
            JS
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="flex flex-1 overflow-hidden">
        
        {/* Left Sidebar */}
        <div className="w-56 border-r border-[var(--border)] bg-[var(--bg-2)]/30 p-4 flex flex-col gap-1 hidden md:flex">
          <div className="text-[11px] font-semibold text-[var(--text-3)] uppercase tracking-wider mb-2 px-2">Menu</div>
          
          <button 
            onClick={() => setActiveTab('overview')}
            className={`flex items-center gap-2 px-3 py-2 rounded-lg text-[13px] font-medium transition-colors ${
              activeTab === 'overview' ? 'bg-white shadow-sm text-[var(--signal)]' : 'text-[var(--text-2)] hover:bg-[var(--bg-2)] hover:text-[var(--text-1)]'
            }`}
          >
            <Shield className="w-4 h-4" /> Overview
          </button>
          <button 
            onClick={() => setActiveTab('cameras')}
            className={`flex items-center gap-2 px-3 py-2 rounded-lg text-[13px] font-medium transition-colors ${
              activeTab === 'cameras' ? 'bg-white shadow-sm text-[var(--signal)]' : 'text-[var(--text-2)] hover:bg-[var(--bg-2)] hover:text-[var(--text-1)]'
            }`}
          >
            <Camera className="w-4 h-4" /> Cameras
          </button>
          
          <div className="mt-auto">
            <button 
              onClick={() => setActiveTab('settings')}
              className={`flex items-center gap-2 px-3 py-2 rounded-lg text-[13px] font-medium transition-colors w-full ${
                activeTab === 'settings' ? 'bg-white shadow-sm text-[var(--signal)]' : 'text-[var(--text-2)] hover:bg-[var(--bg-2)] hover:text-[var(--text-1)]'
              }`}
            >
              <Settings className="w-4 h-4" /> Settings
            </button>
          </div>
        </div>

        {/* Dashboard Workspace */}
        <div className="flex-1 p-6 bg-white overflow-y-auto">
          
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-[20px] font-semibold text-[var(--text-1)]">Live Monitoring</h2>
            <div className="flex items-center gap-2">
              <span className="flex items-center gap-1.5 text-[12px] font-medium text-[var(--green)] bg-[var(--green-dim)] px-2.5 py-1 rounded-full">
                <span className="w-1.5 h-1.5 rounded-full bg-[var(--green)] animate-pulse" /> Live
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            
            {/* KPI Cards */}
            <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-white border border-[var(--border)] rounded-xl p-4 shadow-sm">
                <div className="text-[12px] font-medium text-[var(--text-2)] mb-1">Total Detections</div>
                <div className="mono text-[24px] font-semibold text-[var(--text-1)]">1,254</div>
              </div>
              <div className="bg-white border border-[var(--border)] rounded-xl p-4 shadow-sm">
                <div className="text-[12px] font-medium text-[var(--text-2)] mb-1">Average FPS</div>
                <div className="mono text-[24px] font-semibold text-[var(--text-1)]">{frameRate} <span className="text-[14px] text-[var(--text-3)] font-normal">fps</span></div>
              </div>
              <div className="bg-white border border-[var(--border)] rounded-xl p-4 shadow-sm">
                <div className="text-[12px] font-medium text-[var(--text-2)] mb-1">System Accuracy</div>
                <div className="mono text-[24px] font-semibold text-[var(--text-1)]">99.2%</div>
              </div>
            </div>

            {/* Video Feed & Analytics Placeholder */}
            <div className="lg:col-span-2">
              <div className="bg-white border border-[var(--border)] rounded-xl shadow-[0_4px_24px_rgba(0,0,0,0.04)] overflow-hidden flex flex-col h-full min-h-[300px]">
                <div className="flex items-center justify-between px-4 py-3 border-b border-[var(--border)] bg-[var(--bg-1)]">
                  <div className="flex items-center gap-2">
                    <Camera className="w-4 h-4 text-[var(--text-2)]" />
                    <span className="text-[13px] font-semibold text-[var(--text-1)]">Assembly Line A</span>
                  </div>
                  <div className="flex gap-1">
                    <span className="w-2 h-2 rounded-full bg-[var(--border-strong)]"></span>
                    <span className="w-2 h-2 rounded-full bg-[var(--border-strong)]"></span>
                    <span className="w-2 h-2 rounded-full bg-[var(--border-strong)]"></span>
                  </div>
                </div>
                <div className="flex-1 bg-[var(--bg-0)] relative overflow-hidden flex flex-col">
                  {/* Subtle Grid Background */}
                  <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTQwIDBIMFY0MGg0MFYweiIgZmlsbD0ibm9uZSIvPjxwYXRoIGQ9Ik0wIDAuNWg0MCIgc3Ryb2tlPSJyZ2JhKDAsMCwwLDAuMDQpIi8+PHBhdGggZD0iTTAuNSAwdi00MCIgc3Ryb2tlPSJyZ2JhKDAsMCwwLDAuMDQpIi8+PC9zdmc+')] opacity-50" />
                  
                  {/* Live Feed Simulator */}
                  <div className="flex-1 m-4 border border-[var(--border)] rounded-lg bg-[var(--bg-1)] relative overflow-hidden shadow-inner">
                    <motion.div 
                      animate={{ 
                        x: [0, -10, 5, 0],
                        y: [0, 5, -5, 0]
                      }}
                      transition={{ 
                        duration: 8,
                        repeat: Infinity,
                        ease: "linear"
                      }}
                      className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-20 mix-blend-luminosity" 
                    />
                    
                    {/* Bounding Box Animation */}
                    <motion.div 
                      animate={{ 
                        x: ['0%', '20%', '-10%', '0%'],
                        y: ['0%', '10%', '-5%', '0%'],
                        scale: [1, 1.05, 0.95, 1]
                      }}
                      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-32 border-[1.5px] border-emerald-500 rounded-md bg-emerald-500/10 backdrop-blur-[1px]" 
                    >
                      <div className="absolute top-0 left-0 -translate-y-[calc(100%+4px)] bg-emerald-500 text-white text-[10px] font-bold px-1.5 py-0.5 rounded shadow-sm flex items-center gap-1">
                        PART_OK <span className="font-mono text-[9px] opacity-80">99.8%</span>
                      </div>
                      
                      {/* Corner Accents */}
                      <div className="absolute top-0 left-0 w-2 h-2 border-t-2 border-l-2 border-emerald-500"></div>
                      <div className="absolute top-0 right-0 w-2 h-2 border-t-2 border-r-2 border-emerald-500"></div>
                      <div className="absolute bottom-0 left-0 w-2 h-2 border-b-2 border-l-2 border-emerald-500"></div>
                      <div className="absolute bottom-0 right-0 w-2 h-2 border-b-2 border-r-2 border-emerald-500"></div>
                    </motion.div>
                  </div>
                </div>
              </div>
            </div>

            {/* Machine List */}
            <div className="lg:col-span-1">
              <div className="bg-white border border-[var(--border)] rounded-xl shadow-sm overflow-hidden h-full flex flex-col">
                <div className="px-4 py-3 border-b border-[var(--border)]">
                  <h3 className="text-[13px] font-semibold text-[var(--text-1)]">Machine Health</h3>
                </div>
                <div className="flex-1 overflow-y-auto p-2">
                  <MachineCard name="CNC Lathe #3" location="Floor A" status="healthy" score={96} />
                  <MachineCard name="Press Unit #7" location="Floor B" status="warning" score={71} />
                  <MachineCard name="Conveyor #2" location="Packaging" status="critical" score={42} />
                  <MachineCard name="Robotic Arm #1" location="Assembly" status="healthy" score={99} />
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};
