import React from 'react';
import { motion } from 'framer-motion';

const logos = [
  { name: 'Tata Steel', svg: <svg viewBox="0 0 160 30" className="h-8 w-auto opacity-40 hover:opacity-100 transition-opacity duration-300"><text x="10" y="22" fontSize="18" fontWeight="800" fill="currentColor">TATA STEEL</text></svg> },
  { name: 'Mahindra', svg: <svg viewBox="0 0 160 30" className="h-8 w-auto opacity-40 hover:opacity-100 transition-opacity duration-300"><text x="10" y="22" fontSize="18" fontWeight="800" fill="currentColor">MAHINDRA</text></svg> },
  { name: 'L&T', svg: <svg viewBox="0 0 160 30" className="h-8 w-auto opacity-40 hover:opacity-100 transition-opacity duration-300"><text x="20" y="22" fontSize="18" fontWeight="800" fill="currentColor">L&T</text></svg> },
  { name: 'Bosch', svg: <svg viewBox="0 0 160 30" className="h-8 w-auto opacity-40 hover:opacity-100 transition-opacity duration-300"><text x="15" y="22" fontSize="18" fontWeight="800" fill="currentColor">BOSCH</text></svg> },
  { name: 'TVS', svg: <svg viewBox="0 0 160 30" className="h-8 w-auto opacity-40 hover:opacity-100 transition-opacity duration-300"><text x="25" y="22" fontSize="18" fontWeight="800" fill="currentColor">TVS</text></svg> },
];

export const TrustedSection: React.FC = () => (
  <section className="bg-[var(--bg-0)] py-24 lg:py-32 border-b border-[var(--border)]" aria-label="Trusted by leaders">
    <div className="enterprise-container">
      <motion.p 
        initial={{ opacity: 0 }} 
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-center text-[14px] font-semibold text-[var(--text-3)] uppercase tracking-[0.15em] mb-12"
      >
        Trusted by leading manufacturing enterprises
      </motion.p>
      
      <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24">
        {logos.map((logo, i) => (
          <motion.div 
            key={logo.name}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="flex items-center justify-center grayscale text-[var(--text-1)] mix-blend-multiply"
          >
            {logo.svg}
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);
