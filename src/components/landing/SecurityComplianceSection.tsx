import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Lock, FileCheck, CheckCircle } from 'lucide-react';

export const SecurityComplianceSection: React.FC = () => {
  return (
    <section id="security" className="pt-32 pb-24 lg:pt-40 lg:pb-32 scroll-mt-24 bg-[var(--bg-0)] border-b border-[var(--border)]">
      <div className="enterprise-container">
        
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          
          <div className="w-full lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[var(--border-strong)] bg-white/50 mb-6"
            >
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              <span className="text-[12px] font-bold tracking-[0.1em] uppercase text-[var(--text-1)]">Enterprise Trust</span>
            </motion.div>
            
            <motion.h2 
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              className="text-section-title mb-6"
            >
              Secure by design. Compliant by default.
            </motion.h2>
            
            <motion.p 
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: 0.1 }}
              className="text-desc mb-10"
            >
              We protect your intellectual property with military-grade encryption and edge-first processing. Video feeds never leave your facility unless you explicitly allow it.
            </motion.p>
            
            <div className="flex flex-col gap-4">
              {[
                "SOC 2 Type II Certified",
                "ISO 27001 Compliant",
                "End-to-end AES-256 Encryption",
                "Role-based Access Control (RBAC)"
              ].map((item, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ delay: 0.2 + (i * 0.1) }}
                  className="flex items-center gap-3"
                >
                  <div className="w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center shrink-0">
                    <CheckCircle className="w-4 h-4 text-emerald-600" />
                  </div>
                  <span className="text-[16px] font-medium text-[var(--text-1)]">{item}</span>
                </motion.div>
              ))}
            </div>
          </div>
          
          <div className="w-full lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              className="grid grid-cols-2 gap-4"
            >
              {/* Trust Cards */}
              <div className="bg-[var(--bg-1)] border border-[var(--border)] rounded-[24px] p-8 flex flex-col items-center text-center shadow-[0_4px_24px_rgba(0,0,0,0.04)] h-full">
                <Lock className="w-10 h-10 text-[var(--text-1)] mb-4" />
                <h4 className="text-[16px] font-bold mb-2">On-Premises Privacy</h4>
                <p className="text-[14px] text-[var(--text-2)]">Edge agents process streams entirely within your intranet.</p>
              </div>
              
              <div className="bg-[var(--bg-1)] border border-[var(--border)] rounded-[24px] p-8 flex flex-col items-center text-center translate-y-8 shadow-[0_4px_24px_rgba(0,0,0,0.04)] h-full">
                <FileCheck className="w-10 h-10 text-[var(--text-1)] mb-4" />
                <h4 className="text-[16px] font-bold mb-2">Audit Logging</h4>
                <p className="text-[14px] text-[var(--text-2)]">Immutable logs of every model deployment and configuration change.</p>
              </div>
              
            </motion.div>
          </div>
          
        </div>
        
      </div>
    </section>
  );
};
