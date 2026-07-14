import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

interface DrawerProps {
  open: boolean;
  onClose: () => void;
  title: string;
  subtitle?: string;
  children: React.ReactNode;
  width?: number;
}

/**
 * Drawer — enterprise slide-in detail panel.
 * Used for machine detail views, alert drill-down, report previews.
 * Matches the drawer pattern from Palantir Foundry and Siemens Industrial Edge.
 * Includes backdrop, keyboard ESC dismiss, and smooth spring animation.
 */
export const Drawer: React.FC<DrawerProps> = ({
  open,
  onClose,
  title,
  subtitle,
  children,
  width = 520,
}) => {
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (open) document.addEventListener('keydown', handler);
    return () => document.removeEventListener('keydown', handler);
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Backdrop */}
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40"
            onClick={onClose}
            aria-hidden="true"
          />

          {/* Panel */}
          <motion.div
            key="drawer"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 30, stiffness: 300 }}
            className="fixed top-0 right-0 h-screen z-50 flex flex-col overflow-hidden bg-[#0C0C0C] border-l border-white/10 shadow-2xl"
            style={{ width }}
            role="dialog"
            aria-modal="true"
            aria-label={title}
          >
            {/* Header */}
            <div className="flex items-start justify-between px-6 py-5 border-b border-white/10 shrink-0">
              <div>
                <h2 className="text-[16px] font-semibold text-white tracking-tight">{title}</h2>
                {subtitle && <p className="text-[13px] text-white/50 mt-0.5">{subtitle}</p>}
              </div>
              <button
                onClick={onClose}
                className="p-1.5 rounded-lg hover:bg-white/10 text-white/50 hover:text-white transition-colors ml-4 shrink-0"
                aria-label="Close drawer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Scrollable Content */}
            <div className="flex-1 overflow-y-auto">
              {children}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};
