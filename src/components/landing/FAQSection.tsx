import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';
import { FAQ_ITEMS } from '@/constants';

const FAQItem: React.FC<{
  question: string; answer: string; isOpen: boolean; onClick: () => void;
}> = ({ question, answer, isOpen, onClick }) => {
  return (
    <div className="border-b border-[var(--border)] last:border-b-0">
      <button
        onClick={onClick}
        className="w-full flex items-center justify-between py-8 text-left focus:outline-none group"
        aria-expanded={isOpen}
      >
        <span className="text-[20px] font-semibold text-[var(--text-1)] pr-8 group-hover:text-[var(--text-2)] transition-colors">
          {question}
        </span>
        <span className="flex-shrink-0 w-10 h-10 rounded-full bg-[var(--bg-1)] border border-[var(--border)] flex items-center justify-center transition-colors group-hover:bg-[var(--bg-2)]">
          {isOpen ? (
            <Minus className="w-5 h-5 text-[var(--text-1)]" />
          ) : (
            <Plus className="w-5 h-5 text-[var(--text-2)] group-hover:text-[var(--text-1)]" />
          )}
        </span>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="pb-8 pr-16 text-[18px] text-[var(--text-2)] leading-relaxed">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 lg:py-40 bg-[var(--bg-0)] border-b border-[var(--border)]" aria-labelledby="faq-heading">
      <div className="enterprise-container max-w-4xl">
        
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            id="faq-heading" 
            className="text-section-title mb-6"
          >
            Frequently Asked Questions
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.1 }}
            className="text-desc"
          >
            Everything you need to know about VisionGuard's deployment, security, and enterprise billing.
          </motion.p>
        </div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ delay: 0.2 }}
          className="bg-[var(--bg-0)]"
        >
          {FAQ_ITEMS.map((item, index) => (
            <FAQItem
              key={index}
              question={item.question}
              answer={item.answer}
              isOpen={openIndex === index}
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            />
          ))}
        </motion.div>
        
      </div>
    </section>
  );
};
