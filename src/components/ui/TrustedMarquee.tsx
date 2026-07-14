import React from 'react';
import { motion } from 'framer-motion';
import { MarqueeItem } from './MarqueeItem';

const COMPANIES = [
  'Siemens', 'Bosch', 'ABB', 'Schneider Electric', 'Rockwell Automation',
  'Emerson', 'Honeywell', 'Mitsubishi Electric', 'Omron', 'Yokogawa',
  'Hitachi', 'GE Aerospace', 'Caterpillar', 'John Deere', 'SKF', 'Cummins',
  'Toyota', 'BMW', 'Mercedes-Benz', 'Volkswagen', 'Ford', 'General Motors',
  'Hyundai', 'Mahindra', 'Tata Motors', 'Ashok Leyland', 'L&T', 'Bajaj Auto',
  'TVS Motor'
];

export const TrustedMarquee: React.FC = () => {
  return (
    <div className="w-full overflow-hidden flex flex-col items-center pt-16 pb-[56px] border-t border-black/[0.05]">
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-[11px] font-medium text-black/30 tracking-[0.15em] uppercase shrink-0 mb-[18px]"
      >
        Trusted by Leading Manufacturers
      </motion.p>
      
      {/* Marquee Container with CSS Mask for smooth edge fading */}
      <div 
        className="w-full relative overflow-hidden flex items-center h-16"
        style={{
          WebkitMaskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
          maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)'
        }}
      >
        <div className="animate-marquee">
          {/* Set 1 */}
          <div className="flex items-center shrink-0 w-max gap-[64px] pr-[64px]">
            {COMPANIES.map((company, index) => (
              <MarqueeItem key={`set1-${index}`} name={company} />
            ))}
          </div>
          {/* Set 2 (Duplicate for continuous scrolling) */}
          <div className="flex items-center shrink-0 w-max gap-[64px] pr-[64px]">
            {COMPANIES.map((company, index) => (
              <MarqueeItem key={`set2-${index}`} name={company} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
