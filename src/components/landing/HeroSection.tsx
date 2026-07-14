// ============================================================
// HeroSection — 45/55 split layout, full 1440px container
// ============================================================
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { DashboardMockup } from './DashboardMockup';
import { TrustedMarquee } from '../ui/TrustedMarquee';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.55, delay, ease: [0.16, 1, 0.3, 1] },
});

const checks = [
  'Works with existing CCTV',
  'Edge AI — no cloud needed',
  '99.2% detection accuracy',
  'Live in hours, not months',
];

export const HeroSection: React.FC = () => {
  const scrollTo = (sel: string) => {
    const el = document.querySelector(sel);
    if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 80, behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative bg-white overflow-hidden" aria-label="Hero">
      {/* Subtle grid texture */}
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: 'linear-gradient(rgba(0,0,0,0.028) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.028) 1px, transparent 1px)',
          backgroundSize: '72px 72px',
        }} />

      <div className="section-container relative z-10">
        {/* ── 45 / 55 two-column hero ── */}
        <div className="grid-hero pt-[100px] pb-[80px] lg:pt-[120px] lg:pb-[100px]">

          {/* ── LEFT: 45% — content ── */}
          <div className="flex flex-col justify-center gap-7">
            {/* Eyebrow */}
            <motion.div {...fadeUp(0)} className="eyebrow text-black/45 text-[11px] font-medium tracking-[0.18em] uppercase">
              AI-Powered Industrial Vision
            </motion.div>

            {/* Headline */}
            <motion.h1 {...fadeUp(0.08)}
              className="t-display text-black"
              style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
              Predictive Maintenance{' '}
              <span className="italic" style={{ color: 'rgba(0,0,0,0.35)' }}>
                & Quality<br />Monitoring
              </span>
            </motion.h1>

            {/* Body */}
            <motion.p {...fadeUp(0.16)} className="t-body-lg max-w-[480px]"
              style={{ color: 'rgba(0,0,0,0.5)' }}>
              VisionGuard AI plugs into your existing CCTV cameras and uses computer vision
              to detect anomalies, predict machine failures, and flag defects in real time —
              before they halt production.
            </motion.p>

            {/* CTAs */}
            <motion.div {...fadeUp(0.24)} className="flex flex-wrap items-center gap-3">
              <button onClick={() => scrollTo('#contact')}
                className="btn btn-primary btn-lg group">
                Request Demo
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-150" />
              </button>
              <button onClick={() => scrollTo('#features')}
                className="btn btn-secondary btn-lg">
                See how it works
              </button>
            </motion.div>

            {/* Trust checklist */}
            <motion.div {...fadeUp(0.32)}
              className="grid grid-cols-2 gap-x-6 gap-y-2.5 pt-2 border-t border-black/[0.06]">
              {checks.map(item => (
                <div key={item} className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-black/30 shrink-0" />
                  <span className="text-[12.5px] text-black/45 font-medium">{item}</span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* ── RIGHT: 55% — interactive mockup ── */}
          <motion.div
            initial={{ opacity: 0, x: 32, scale: 0.97 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.75, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="relative lg:block hidden"
          >
            {/* Soft ambient glow */}
            <div aria-hidden="true"
              className="absolute -inset-10 pointer-events-none rounded-3xl"
              style={{ background: 'radial-gradient(ellipse at 60% 40%, rgba(0,0,0,0.04) 0%, transparent 70%)' }} />

            {/* Floating badge */}
            <div className="absolute -top-4 -left-4 z-20 flex items-center gap-2 bg-white rounded-full px-3.5 py-2 shadow-md border border-black/[0.07]">
              <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-[11px] font-semibold text-black/70 tracking-wide">Live AI Monitoring</span>
            </div>

            {/* Floating stat chip */}
            <div className="absolute -bottom-4 -right-4 z-20 bg-black text-white rounded-2xl px-4 py-3 shadow-xl">
              <p className="text-[20px] font-semibold leading-none" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                −63%
              </p>
              <p className="text-[10px] text-white/55 mt-1 tracking-wider uppercase">Unplanned downtime</p>
            </div>

            {/* Dashboard mockup */}
            <div className="rounded-2xl overflow-hidden border border-black/[0.08] shadow-[0_32px_80px_-8px_rgba(0,0,0,0.14),0_0_0_1px_rgba(0,0,0,0.04)]">
              <DashboardMockup />
            </div>
          </motion.div>

          {/* Mobile mockup (full width below copy) */}
          <motion.div {...fadeUp(0.4)} className="lg:hidden block mt-4">
            <div className="rounded-2xl overflow-hidden border border-black/[0.08] shadow-[0_16px_48px_-8px_rgba(0,0,0,0.1)]">
              <DashboardMockup />
            </div>
          </motion.div>
        </div>

        {/* ── Logo bar / partner strip ── */}
        <TrustedMarquee />
      </div>
    </section>
  );
};
