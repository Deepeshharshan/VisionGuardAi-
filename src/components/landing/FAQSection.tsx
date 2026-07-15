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
        className="w-full flex items-center justify-between py-6 text-left focus:outline-none group"
        aria-expanded={isOpen}
      >
        <span className="text-[16px] font-medium text-[var(--text-1)] pr-8 group-hover:text-[var(--signal)] transition-colors">
          {question}
        </span>
        <span className="flex-shrink-0 w-8 h-8 rounded-full bg-[var(--bg-2)] flex items-center justify-center group-hover:bg-[var(--signal-dim)] transition-colors">
          {isOpen ? (
            <Minus className="w-4 h-4 text-[var(--signal)]" />
          ) : (
            <Plus className="w-4 h-4 text-[var(--text-2)] group-hover:text-[var(--signal)]" />
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
            <div className="pb-6 pr-12 text-[15px] text-[var(--text-2)] leading-relaxed">
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
    <section id="faq" className="py-24 bg-[var(--bg-0)]" aria-labelledby="faq-heading">
      <div className="enterprise-container">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">
          
          <div className="lg:col-span-5 lg:pr-12">
            <div className="sticky top-24">
              <span className="text-[12px] font-semibold text-[var(--signal)] tracking-wider uppercase mb-3 block">
                FAQ
              </span>
              <h2 id="faq-heading" className="text-section-title mb-4">
                Common questions
              </h2>
              <p className="text-[16px] text-[var(--text-2)] mb-8">
                Everything you need to know before deploying VisionGuard AI in your facility.
              </p>
              <a href="#contact" className="inline-flex items-center text-[14px] font-medium text-[var(--signal)] hover:text-[var(--signal-hover)] transition-colors">
                Contact support →
              </a>
            </div>
          </div>
          
          <div className="lg:col-span-7">
            <div className="bg-white border border-[var(--border)] rounded-2xl p-2 md:p-6 shadow-sm">
              {FAQ_ITEMS.map((item, index) => (
                <FAQItem
                  key={index}
                  question={item.question}
                  answer={item.answer}
                  isOpen={openIndex === index}
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                />
              ))}
            </div>
          </div>
          
        </div>
        
      </div>
    </section>
  );
};
