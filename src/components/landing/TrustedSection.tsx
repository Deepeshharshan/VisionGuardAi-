import React from 'react';
import { motion } from 'framer-motion';

const logos = [
  { name: 'Tesla', text: 'TESLA' },
  { name: 'Ford', text: 'FORD' },
  { name: 'Toyota', text: 'TOYOTA' },
  { name: 'Bosch', text: 'BOSCH' },
  { name: 'Siemens', text: 'SIEMENS' },
  { name: 'Samsung', text: 'SAMSUNG' },
  { name: 'Boeing', text: 'BOEING' },
];

export const TrustedSection: React.FC = () => {
  return (
    <section className="bg-black py-24 lg:py-32 relative overflow-hidden" aria-label="Trusted by leaders">
      {/* Top / Bottom fading edges */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent" />
      
      <div className="enterprise-container relative z-10">
        <motion.p 
          initial={{ opacity: 0, y: 20 }} 
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center text-[14px] font-semibold text-gray-400 uppercase tracking-[0.2em] mb-16"
        >
          Trusted by top Fortune 500 manufacturing lines
        </motion.p>
      </div>

      {/* Infinite Logo Marquee */}
      <div className="relative w-full flex overflow-hidden group">
        {/* Left/Right fading gradients to blend marquee into background */}
        <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-black to-transparent z-10 pointer-events-none" />
        <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-black to-transparent z-10 pointer-events-none" />
        
        <motion.div 
          className="flex whitespace-nowrap"
          animate={{ x: [0, -1035] }}
          transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
        >
          {/* Double array to create seamless loop */}
          {[...logos, ...logos, ...logos].map((logo, i) => (
            <div 
              key={`${logo.name}-${i}`}
              className="flex items-center justify-center px-12 md:px-16"
            >
              <span className="text-2xl md:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-b from-gray-500 to-gray-700 hover:from-white hover:to-gray-300 transition-all duration-300 transform hover:scale-110 cursor-default">
                {logo.text}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
