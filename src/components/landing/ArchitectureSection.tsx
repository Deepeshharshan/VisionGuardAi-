import React from 'react';
import { motion } from 'framer-motion';
import { Camera, Cpu, ScanSearch, Database, LayoutDashboard, Bell } from 'lucide-react';

type Icon = React.FC<{ className?: string }>;

const layers = [
  { icon: Camera as Icon,        title: 'Video Ingestion',  desc: 'RTSP/ONVIF streams from existing CCTV', tags: ['H.264', 'H.265'] },
  { icon: Cpu as Icon,           title: 'Edge Processing',  desc: 'Local frame extraction and preprocessing', tags: ['CUDA', 'TensorRT'] },
  { icon: ScanSearch as Icon,    title: 'Vision Models',    desc: 'YOLOv8 & custom classification networks', tags: ['PyTorch', 'ONNX'] },
  { icon: Database as Icon,      title: 'Time-series DB',   desc: 'High-speed event and metadata storage', tags: ['InfluxDB', 'PostgreSQL'] },
  { icon: LayoutDashboard as Icon,title: 'Dashboard App',    desc: 'Real-time WebSocket event streaming', tags: ['React', 'Zustand'] },
  { icon: Bell as Icon,          title: 'Alerting Engine',  desc: 'Webhooks, SMS, and email dispatches', tags: ['Twilio', 'SendGrid'] }
];

export const ArchitectureSection: React.FC = () => {
  return (
    <section id="architecture" className="py-24 bg-[var(--bg-0)]" aria-labelledby="arch-heading">
      <div className="enterprise-container">
        
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            id="arch-heading" 
            className="text-section-title mb-4"
          >
            Built for enterprise scale
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.1 }}
            className="text-desc text-[16px]"
          >
            A robust, modern tech stack designed for zero-latency processing, high availability, and secure edge deployments.
          </motion.p>
        </div>

        {/* Bento Grid layout for Architecture */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {layers.map((layer, index) => {
            const Icon = layer.icon;
            return (
              <motion.div
                key={layer.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="vg-panel p-6 flex flex-col h-full hover:-translate-y-1 transition-transform"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-[14px] bg-[var(--bg-2)] border border-[var(--border)] flex items-center justify-center">
                    <Icon className="w-6 h-6 text-[var(--signal)]" />
                  </div>
                  <h3 className="text-[16px] font-semibold text-[var(--text-1)]">{layer.title}</h3>
                </div>
                
                <p className="text-[14px] text-[var(--text-2)] mb-6 flex-1">
                  {layer.desc}
                </p>
                
                <div className="flex flex-wrap gap-2 mt-auto">
                  {layer.tags.map(tag => (
                    <span key={tag} className="mono text-[11px] text-[var(--text-3)] bg-[var(--bg-2)] border border-[var(--border)] px-2 py-1 rounded-md">
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
