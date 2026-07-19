import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ScanSearch, Menu, X, ArrowRight } from 'lucide-react';
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
          ? 'bg-black/80 backdrop-blur-xl border-b border-white/10' 
          : 'bg-transparent border-b border-transparent'
      }`}
      aria-label="Main Navigation"
    >
      <div className="enterprise-container h-20 flex items-center justify-between">
        
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 group" aria-label="VisionGuard AI Home">
          <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center transition-transform group-hover:scale-105">
            <ScanSearch className="w-5 h-5 text-black" aria-hidden="true" />
          </div>
          <span className="font-bold text-white text-[18px] tracking-tight">VisionGuard</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8" aria-label="Desktop Navigation">
          {NAV_LINKS.map(link => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="text-[13px] font-bold text-zinc-400 uppercase tracking-widest hover:text-white transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 rounded-sm"
              aria-label={`Navigate to ${link.label}`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Actions */}
        <div className="hidden md:flex items-center gap-6">
          <Link 
            to="/login" 
            className="text-[13px] font-bold text-white uppercase tracking-widest hover:text-zinc-300 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 rounded-sm"
            aria-label="Sign in to your account"
          >
            Sign in
          </Link>
          <Link to="/login" tabIndex={-1}>
            <button 
              className="enterprise-btn-primary flex items-center gap-2 group"
              aria-label="Get started with VisionGuard AI"
            >
              Deploy Edge Node
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
            </button>
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-white p-2 -mr-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 rounded-md"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-expanded={mobileMenuOpen}
          aria-controls="mobile-menu"
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
        >
          {mobileMenuOpen ? <X className="w-6 h-6" aria-hidden="true" /> : <Menu className="w-6 h-6" aria-hidden="true" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div 
          id="mobile-menu"
          className="md:hidden bg-[#0a0a0a] border-b border-white/10 shadow-2xl px-6 py-6 space-y-6"
        >
          <nav aria-label="Mobile Navigation" className="flex flex-col gap-4">
            {NAV_LINKS.map(link => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="block text-[16px] font-bold text-zinc-400 uppercase tracking-widest hover:text-white py-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 rounded-sm"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="pt-6 border-t border-white/10 flex flex-col gap-4">
            <Link 
              to="/login" 
              className="text-center text-[16px] font-bold text-white uppercase tracking-widest py-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 rounded-sm"
            >
              Sign in
            </Link>
            <Link to="/login" tabIndex={-1}>
              <button className="enterprise-btn-primary w-full text-[16px]">
                Deploy Edge Node
              </button>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};
