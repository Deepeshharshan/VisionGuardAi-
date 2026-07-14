import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';

export const HeroButtons: React.FC = () => {
  const scrollTo = (selector: string) => {
    const el = document.querySelector(selector);
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  return (
    <div className="flex flex-wrap items-center gap-4 pt-4">
      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        onClick={() => scrollTo('#contact')}
        className="flex items-center gap-2 px-6 py-3 bg-white text-[#050816] text-sm font-semibold rounded-full
                   hover:bg-slate-100 transition-colors shadow-[0_0_30px_rgba(255,255,255,0.1)] cursor-pointer"
        aria-label="Request Demo"
      >
        Request Demo
        <ChevronRight className="w-4 h-4" />
      </motion.button>
      
      <motion.button
        whileHover={{ scale: 1.02, backgroundColor: 'rgba(255,255,255,0.05)' }}
        whileTap={{ scale: 0.98 }}
        onClick={() => scrollTo('#features')}
        className="flex items-center gap-2 px-6 py-3 bg-transparent text-slate-300 text-sm font-medium rounded-full
                   border border-slate-700/50 hover:border-slate-500 hover:text-white transition-colors cursor-pointer"
        aria-label="View Platform"
      >
        View Platform
      </motion.button>
    </div>
  );
};
