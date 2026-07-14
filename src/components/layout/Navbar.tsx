// ============================================================
// Navbar — Premium Enterprise SaaS Navigation
// ============================================================
import React, { useState, useEffect, useCallback } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { Logo } from '../ui/Logo';
import { APP_NAME } from '@/constants';

function cn(...classes: (string | boolean | undefined)[]) {
  return classes.filter(Boolean).join(' ');
}

// Ensure NAV_LINKS has the right items
const NAV_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'Features', href: '#features' },
  { label: 'Industries', href: '#industries' },
  { label: 'Architecture', href: '#architecture' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Contact', href: '#contact' },
];

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const [activeHash, setActiveHash] = useState('/');

  const handleScroll = useCallback(() => setScrolled(window.scrollY > 20), []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  const scrollTo = (href: string) => {
    setMobileOpen(false);
    setActiveHash(href);
    if (href === '/') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    const el = document.querySelector(href);
    if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 72, behavior: 'smooth' });
  };

  return (
    <>
      <header
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
          scrolled
            ? 'bg-[rgba(255,255,255,0.82)] backdrop-blur-xl border-b border-black/[0.04]'
            : 'bg-transparent'
        )}
        role="banner"
      >
        <div className="section-container">
          <div className="flex items-center justify-between h-[72px]">
            {/* Logo */}
            <Link to="/" onClick={() => setActiveHash('/')} aria-label={`${APP_NAME} Home`} className="shrink-0 group">
              <Logo />
            </Link>

            {/* Desktop nav — centered */}
            <nav className="hidden lg:flex items-center gap-8 xl:gap-10 absolute left-1/2 -translate-x-1/2"
              aria-label="Primary navigation">
              {NAV_LINKS.map(link => {
                const isActive = activeHash === link.href;
                return (
                  <button key={link.label} onClick={() => scrollTo(link.href)}
                    className="relative group py-2 text-[15px] font-medium cursor-pointer transition-colors"
                    style={{ transitionDuration: '250ms', color: isActive ? '#111827' : '#6B7280' }}
                  >
                    <span className="group-hover:text-[#111827]" style={{ transitionDuration: '250ms' }}>
                      {link.label}
                    </span>
                    {/* Animated Underline */}
                    <span className={cn(
                      "absolute left-1/2 bottom-0 h-[2px] bg-[#111827] transition-all ease-out -translate-x-1/2",
                      isActive ? "w-full" : "w-0 group-hover:w-full"
                    )} style={{ transitionDuration: '250ms' }} />
                  </button>
                );
              })}
            </nav>

            {/* Desktop CTA */}
            <div className="hidden lg:flex items-center gap-3 shrink-0">
              <button onClick={() => navigate('/login')}
                className="btn btn-ghost btn-sm text-[14px]">
                Sign in
              </button>
              <button onClick={() => scrollTo('#contact')}
                className="btn btn-primary btn-sm text-[14px] px-5">
                Request Demo
              </button>
            </div>

            {/* Mobile toggle */}
            <button onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden w-10 h-10 flex items-center justify-center rounded-full hover:bg-black/[0.05] transition-colors"
              aria-label="Toggle menu" aria-expanded={mobileOpen}>
              {mobileOpen ? <X className="w-5 h-5 text-[#111827]" /> : <Menu className="w-5 h-5 text-[#111827]" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              transition={{ duration: 0.15 }}
              className="fixed inset-0 z-40 bg-black/20 backdrop-blur-sm lg:hidden"
              onClick={() => setMobileOpen(false)} aria-hidden="true" />
            <motion.nav initial={{ x: '100%' }} animate={{ x: 0 }} exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.25, ease: 'easeOut' }}
              className="fixed top-0 right-0 bottom-0 z-50 w-72 bg-white lg:hidden flex flex-col shadow-2xl"
              role="dialog" aria-label="Mobile navigation">
              <div className="flex items-center justify-between px-6 h-[72px] border-b border-black/[0.06]">
                <span style={{ fontFamily: 'Inter, system-ui, sans-serif' }} className="text-[16px] font-medium text-[#111827]">
                  VisionGuard AI
                </span>
                <button onClick={() => setMobileOpen(false)}
                  className="w-9 h-9 flex items-center justify-center rounded-full hover:bg-black/[0.05] transition-colors"
                  aria-label="Close">
                  <X className="w-4 h-4 text-[#111827]" />
                </button>
              </div>
              <div className="flex-1 overflow-y-auto p-5 space-y-1">
                {NAV_LINKS.map(link => (
                  <button key={link.label} onClick={() => scrollTo(link.href)}
                    className="w-full text-left px-4 py-3.5 text-[15px] font-medium text-[#6B7280] hover:text-[#111827] hover:bg-[#F3F4F6] rounded-xl transition-colors block">
                    {link.label}
                  </button>
                ))}
              </div>
              <div className="p-5 border-t border-black/[0.06] space-y-3 bg-[#F9FAFB]">
                <button onClick={() => { setMobileOpen(false); navigate('/login'); }}
                  className="btn btn-secondary w-full h-11 text-[14px]">Sign in</button>
                <button onClick={() => scrollTo('#contact')}
                  className="btn btn-primary w-full h-11 text-[14px]">Request Demo</button>
              </div>
            </motion.nav>
          </>
        )}
      </AnimatePresence>
    </>
  );
};
