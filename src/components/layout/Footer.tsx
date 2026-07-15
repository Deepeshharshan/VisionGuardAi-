import React from 'react';
import { ScanSearch, Mail, MapPin, Search } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="border-t border-[var(--border)] bg-[var(--bg-1)] pt-20 pb-10">
      <div className="enterprise-container">
        
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 mb-16">
          <div className="col-span-2 lg:col-span-2 pr-8">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 rounded-full bg-[var(--black-btn)] flex items-center justify-center">
                <ScanSearch className="w-4 h-4 text-white" />
              </div>
              <span className="font-semibold text-[var(--text-1)] text-[15px] tracking-tight">VisionGuard</span>
            </div>
            <p className="text-[14px] text-[var(--text-2)] mb-8 leading-relaxed">
              AI-powered vision for predictive maintenance and quality monitoring in enterprise manufacturing environments.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="text-[var(--text-3)] hover:text-[var(--text-1)] transition-colors">
                <Mail className="w-5 h-5" />
              </a>
              <a href="#" className="text-[var(--text-3)] hover:text-[var(--text-1)] transition-colors">
                <MapPin className="w-5 h-5" />
              </a>
              <a href="#" className="text-[var(--text-3)] hover:text-[var(--text-1)] transition-colors">
                <Search className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          <div className="col-span-1 lg:col-span-1">
            <h4 className="text-[12px] font-semibold text-[var(--text-1)] uppercase tracking-wider mb-5 block">
              Product
            </h4>
            <ul className="space-y-3">
              <li><a href="#features" className="text-[14px] text-[var(--text-2)] hover:text-[var(--signal)] transition-colors">Features</a></li>
              <li><a href="#pricing" className="text-[14px] text-[var(--text-2)] hover:text-[var(--signal)] transition-colors">Pricing</a></li>
              <li><a href="#architecture" className="text-[14px] text-[var(--text-2)] hover:text-[var(--signal)] transition-colors">Architecture</a></li>
              <li><a href="#" className="text-[14px] text-[var(--text-2)] hover:text-[var(--signal)] transition-colors">Security</a></li>
              <li><a href="#" className="text-[14px] text-[var(--text-2)] hover:text-[var(--signal)] transition-colors">Integrations</a></li>
            </ul>
          </div>
          
          <div className="col-span-1 lg:col-span-1">
            <h4 className="text-[12px] font-semibold text-[var(--text-1)] uppercase tracking-wider mb-5 block">
              Solutions
            </h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-[14px] text-[var(--text-2)] hover:text-[var(--signal)] transition-colors">Manufacturing</a></li>
              <li><a href="#" className="text-[14px] text-[var(--text-2)] hover:text-[var(--signal)] transition-colors">Automotive</a></li>
              <li><a href="#" className="text-[14px] text-[var(--text-2)] hover:text-[var(--signal)] transition-colors">Textiles</a></li>
              <li><a href="#" className="text-[14px] text-[var(--text-2)] hover:text-[var(--signal)] transition-colors">Food & Beverage</a></li>
              <li><a href="#" className="text-[14px] text-[var(--text-2)] hover:text-[var(--signal)] transition-colors">Pharmaceuticals</a></li>
            </ul>
          </div>
          
          <div className="col-span-1 lg:col-span-1">
            <h4 className="text-[12px] font-semibold text-[var(--text-1)] uppercase tracking-wider mb-5 block">
              Resources
            </h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-[14px] text-[var(--text-2)] hover:text-[var(--signal)] transition-colors">Documentation</a></li>
              <li><a href="#" className="text-[14px] text-[var(--text-2)] hover:text-[var(--signal)] transition-colors">API Reference</a></li>
              <li><a href="#" className="text-[14px] text-[var(--text-2)] hover:text-[var(--signal)] transition-colors">Case Studies</a></li>
              <li><a href="#" className="text-[14px] text-[var(--text-2)] hover:text-[var(--signal)] transition-colors">Blog</a></li>
              <li><a href="#" className="text-[14px] text-[var(--text-2)] hover:text-[var(--signal)] transition-colors">System Status</a></li>
            </ul>
          </div>
          
          <div className="col-span-1 lg:col-span-1">
            <h4 className="text-[12px] font-semibold text-[var(--text-1)] uppercase tracking-wider mb-5 block">
              Company
            </h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-[14px] text-[var(--text-2)] hover:text-[var(--signal)] transition-colors">About</a></li>
              <li><a href="#" className="text-[14px] text-[var(--text-2)] hover:text-[var(--signal)] transition-colors">Careers</a></li>
              <li><a href="#" className="text-[14px] text-[var(--text-2)] hover:text-[var(--signal)] transition-colors">Partners</a></li>
              <li><a href="#" className="text-[14px] text-[var(--text-2)] hover:text-[var(--signal)] transition-colors">Privacy</a></li>
              <li><a href="#" className="text-[14px] text-[var(--text-2)] hover:text-[var(--signal)] transition-colors">Terms</a></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-[var(--border)] flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[13px] text-[var(--text-3)]">
            &copy; {new Date().getFullYear()} VisionGuard AI. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-2 text-[12px] text-[var(--text-3)]">
              <span className="w-2 h-2 rounded-full bg-[var(--green)]"></span>
              All systems operational
            </span>
            <span className="text-[12px] text-[var(--text-3)]">v2.4.1</span>
          </div>
        </div>
        
      </div>
    </footer>
  );
};
