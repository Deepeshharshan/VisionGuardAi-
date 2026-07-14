import React from 'react';
import { motion } from 'framer-motion';
import { Loader2 } from 'lucide-react';

export const SplineLoader: React.FC = () => {
  return (
    <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col items-center gap-3 text-slate-500"
      >
        <Loader2 className="w-5 h-5 animate-spin text-slate-600" />
        <span className="text-[10px] tracking-widest uppercase font-medium">Initializing Engine</span>
      </motion.div>
    </div>
  );
};
