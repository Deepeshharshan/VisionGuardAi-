import React from 'react';
import { ScanSearch, Mail, MapPin, ArrowRight } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[var(--bg-0)] pt-24 pb-12 border-t border-[var(--border)]">
      <div className="enterprise-container max-w-7xl">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12 lg:gap-8 mb-20">
          <div className="lg:col-span-2 pr-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-black flex items-center justify-center">
                <ScanSearch className="w-5 h-5 text-white" />
              </div>
              <span className="font-bold text-[var(--text-1)] text-[18px] tracking-tight">VisionGuard</span>
            </div>
            <p className="text-[15px] text-[var(--text-2)] mb-8 leading-relaxed max-w-xs">
              Enterprise-grade AI vision for predictive maintenance and quality control. Built for modern manufacturing.
            </p>
            <div className="flex flex-col gap-3">
              <p className="text-[13px] font-semibold tracking-wider text-[var(--text-1)]">Stay up to date</p>
              <div className="flex items-center">
                <input 
                  type="email" 
                  placeholder="name@company.com" 
                  className="bg-white border border-[var(--border-strong)] rounded-l-lg px-4 py-3 text-[14px] w-full focus:outline-none focus:border-black"
                />
                <button className="bg-black text-white px-5 py-3 rounded-r-lg hover:bg-gray-800 transition-colors">
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
          
          <div className="col-span-1">
            <h4 className="text-[14px] font-semibold text-[var(--text-1)] mb-6 block">
              Product
            </h4>
            <ul className="space-y-4">
              <li><a href="#features" className="text-[15px] text-[var(--text-2)] hover:text-[var(--text-1)] transition-colors">Features</a></li>
              <li><a href="#pricing" className="text-[15px] text-[var(--text-2)] hover:text-[var(--text-1)] transition-colors">Pricing</a></li>
              <li><a href="#architecture" className="text-[15px] text-[var(--text-2)] hover:text-[var(--text-1)] transition-colors">Architecture</a></li>
              <li><a href="#" className="text-[15px] text-[var(--text-2)] hover:text-[var(--text-1)] transition-colors">Security</a></li>
              <li><a href="#" className="text-[15px] text-[var(--text-2)] hover:text-[var(--text-1)] transition-colors">Changelog</a></li>
            </ul>
          </div>
          
          <div className="col-span-1">
            <h4 className="text-[14px] font-semibold text-[var(--text-1)] mb-6 block">
              Solutions
            </h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-[15px] text-[var(--text-2)] hover:text-[var(--text-1)] transition-colors">Manufacturing</a></li>
              <li><a href="#" className="text-[15px] text-[var(--text-2)] hover:text-[var(--text-1)] transition-colors">Automotive</a></li>
              <li><a href="#" className="text-[15px] text-[var(--text-2)] hover:text-[var(--text-1)] transition-colors">Textiles</a></li>
              <li><a href="#" className="text-[15px] text-[var(--text-2)] hover:text-[var(--text-1)] transition-colors">Food & Beverage</a></li>
            </ul>
          </div>
          
          <div className="col-span-1">
            <h4 className="text-[14px] font-semibold text-[var(--text-1)] mb-6 block">
              Resources
            </h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-[15px] text-[var(--text-2)] hover:text-[var(--text-1)] transition-colors">Documentation</a></li>
              <li><a href="#" className="text-[15px] text-[var(--text-2)] hover:text-[var(--text-1)] transition-colors">API Reference</a></li>
              <li><a href="#" className="text-[15px] text-[var(--text-2)] hover:text-[var(--text-1)] transition-colors">Case Studies</a></li>
              <li><a href="#" className="text-[15px] text-[var(--text-2)] hover:text-[var(--text-1)] transition-colors">Blog</a></li>
            </ul>
          </div>
          
          <div className="col-span-1">
            <h4 className="text-[14px] font-semibold text-[var(--text-1)] mb-6 block">
              Company
            </h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-[15px] text-[var(--text-2)] hover:text-[var(--text-1)] transition-colors">About</a></li>
              <li><a href="#" className="text-[15px] text-[var(--text-2)] hover:text-[var(--text-1)] transition-colors">Careers</a></li>
              <li><a href="#" className="text-[15px] text-[var(--text-2)] hover:text-[var(--text-1)] transition-colors">Privacy</a></li>
              <li><a href="#" className="text-[15px] text-[var(--text-2)] hover:text-[var(--text-1)] transition-colors">Terms</a></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-[var(--border)] flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-[14px] text-[var(--text-3)] font-medium">
            &copy; {new Date().getFullYear()} VisionGuard AI, Inc.
          </p>
          <div className="flex flex-col sm:flex-row items-center gap-6">
            <span className="flex items-center gap-2 text-[13px] font-medium text-[var(--text-2)]">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              All systems operational
            </span>
          </div>
        </div>
        
      </div>
    </footer>
  );
};
