import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { ScanSearch, Menu, X, Sun } from 'lucide-react';
import { NAV_LINKS } from '@/constants';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isLanding = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (isLanding && href.startsWith('#')) {
      e.preventDefault();
      const target = document.getElementById(href.substring(1));
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
        setMobileMenuOpen(false);
      }
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-[var(--bg-1)]/80 backdrop-blur-md border-b border-[var(--border)] shadow-sm' 
          : 'bg-transparent'
      }`}
    >
      <div className="enterprise-container h-16 flex items-center justify-between">
        
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 group">
          <div className="w-8 h-8 rounded-full bg-[var(--black-btn)] flex items-center justify-center group-hover:scale-105 transition-transform">
            <ScanSearch className="w-4 h-4 text-white" />
          </div>
          <span className="font-semibold text-[var(--text-1)] text-[15px] tracking-tight">VisionGuard</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map(link => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="text-[14px] font-medium text-[var(--text-2)] hover:text-[var(--text-1)] transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Actions */}
        <div className="hidden md:flex items-center gap-4">
          <button className="text-[var(--text-2)] hover:text-[var(--text-1)] transition-colors p-2">
            <Sun className="w-4 h-4" />
          </button>
          <Link to="/login" className="text-[14px] font-medium text-[var(--text-1)] hover:opacity-80 transition-opacity">
            Sign in
          </Link>
          <Link to="/login">
            <button className="vg-btn vg-btn-primary">
              Get started
            </button>
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-[var(--text-1)] p-2 -mr-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[var(--bg-1)] border-b border-[var(--border)] shadow-lg px-4 py-4 space-y-4">
          {NAV_LINKS.map(link => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="block text-[14px] font-medium text-[var(--text-2)] hover:text-[var(--text-1)] py-2"
            >
              {link.label}
            </a>
          ))}
          <div className="pt-4 border-t border-[var(--border)] flex flex-col gap-3">
            <Link to="/login" className="text-center text-[14px] font-medium text-[var(--text-1)] py-2">
              Sign in
            </Link>
            <Link to="/login">
              <button className="vg-btn vg-btn-primary w-full">
                Get started
              </button>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};
