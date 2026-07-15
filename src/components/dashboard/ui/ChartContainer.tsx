import React from 'react';
import { motion } from 'framer-motion';

interface ChartContainerProps {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
  height?: number | string;
  delay?: number;
  headerRight?: React.ReactNode;
  className?: string;
}

export const ChartContainer: React.FC<ChartContainerProps> = ({ 
  title, subtitle, children, height = 300, delay = 0, headerRight, className = '' 
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -4, transition: { duration: 0.25 } }}
      transition={{ delay, duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
      className={`enterprise-card flex flex-col overflow-hidden !p-0 ${className}`}
    >
      <div className="px-6 py-5 border-b border-white/10 flex items-start justify-between bg-black/20 shrink-0">
        <div>
          <h3 className="text-[15px] font-semibold text-white tracking-tight">{title}</h3>
          {subtitle && <p className="text-[13px] text-white/50 mt-1 font-medium">{subtitle}</p>}
        </div>
        {headerRight && <div>{headerRight}</div>}
      </div>
      <div className="p-6 flex-1 min-h-0 relative" style={{ height }}>
        {/* We use width and height 100% inside this div. The ResponsiveContainer in Recharts will fill this constrained parent. */}
        {children}
      </div>
    </motion.div>
  );
};
