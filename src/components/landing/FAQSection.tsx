// ============================================================
// FAQSection — Full-width 2-col FAQ: left heading, right accordion
// ============================================================
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';
import { FAQ_ITEMS } from '@/constants';

const FAQItem: React.FC<{
  question: string; answer: string; isOpen: boolean;
  onToggle: () => void; index: number;
}> = ({ question, answer, isOpen, onToggle, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }} transition={{ delay: index * 0.04 }}
    className="border-b border-black/[0.06] last:border-0">
    <button onClick={onToggle}
      className="flex items-start justify-between w-full text-left py-5 gap-6 cursor-pointer group"
      aria-expanded={isOpen} id={`faq-${index}`} aria-controls={`faq-panel-${index}`}>
      <span className={`text-[14.5px] font-medium leading-snug transition-colors ${
        isOpen ? 'text-black' : 'text-black/65 group-hover:text-black'
      }`}>
        {question}
      </span>
      <span className="w-6 h-6 rounded-full border border-black/[0.1] flex items-center justify-center shrink-0 mt-0.5 group-hover:border-black/25 transition-colors">
        {isOpen ? <Minus className="w-3 h-3 text-black/55" /> : <Plus className="w-3 h-3 text-black/35" />}
      </span>
    </button>
    <AnimatePresence initial={false}>
      {isOpen && (
        <motion.div id={`faq-panel-${index}`} role="region" aria-labelledby={`faq-${index}`}
          initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }}
          exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.22, ease: 'easeInOut' }}>
          <p className="pb-5 pr-10 text-[13.5px] text-black/50 leading-relaxed font-light">{answer}</p>
        </motion.div>
      )}
    </AnimatePresence>
  </motion.div>
);

export const FAQSection: React.FC = () => {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="bg-white border-t border-black/[0.06]" aria-labelledby="faq-heading">
      <div className="section-container section-py">

        {/* 2-col layout: left sticky heading, right accordion */}
        <div className="grid lg:grid-cols-12 gap-16">
          {/* Left: heading — sticky on desktop */}
          <div className="lg:col-span-4 lg:sticky lg:top-28 lg:self-start">
            <motion.p initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} className="t-label text-black/40 mb-4 eyebrow">
              FAQ
            </motion.p>
            <motion.h2 id="faq-heading"
              initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ delay: 0.07 }}
              className="t-headline text-black mb-5"
              style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
              Common questions
            </motion.h2>
            <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
              viewport={{ once: true }} transition={{ delay: 0.14 }}
              className="t-body mb-8">
              Everything you need to know before deploying VisionGuard AI in your facility.
            </motion.p>
            <a href="mailto:support@visionguard.ai"
              className="text-[13px] text-black underline underline-offset-2 hover:text-black/60 transition-colors">
              Contact support →
            </a>
          </div>

          {/* Right: accordion — 8 cols */}
          <div className="lg:col-span-8">
            {FAQ_ITEMS.map((item, i) => (
              <FAQItem key={i} question={item.question} answer={item.answer}
                isOpen={open === i} onToggle={() => setOpen(p => p === i ? null : i)} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
