import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import { PRICING_PLANS } from '@/constants';

function cn(...classes: (string | boolean | undefined)[]) {
  return classes.filter(Boolean).join(' ');
}

interface PricingCardProps {
  plan: typeof PRICING_PLANS[number];
  index: number;
}

const PricingCard: React.FC<PricingCardProps> = ({ plan, index }) => {
  const isFeatured = plan.highlight;
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className={cn(
        "flex flex-col w-full lg:w-[360px] p-8 md:p-10 rounded-[32px] transition-all duration-300 ease-out",
        isFeatured 
          ? "bg-[#18181B] text-white shadow-[0_16px_32px_-12px_rgba(0,0,0,0.15)] hover:shadow-[0_24px_48px_-12px_rgba(0,0,0,0.25)] motion-safe:hover:-translate-y-1 lg:scale-[1.02]" 
          : "bg-white border border-[#E4E4E7] text-[#09090B] shadow-sm hover:shadow-md motion-safe:hover:-translate-y-1"
      )}
    >
      {/* Featured Badge Placeholder to maintain identical alignment across cards */}
      <div className="h-8 mb-6">
        {isFeatured && (
          <span className="inline-flex items-center justify-center px-4 py-1.5 bg-white/10 text-white text-[12px] font-medium tracking-wide rounded-full">
            Most Popular
          </span>
        )}
      </div>

      <h3 className={cn("text-[20px] font-medium mb-3 tracking-tight", isFeatured ? "text-white" : "text-[#09090B]")}>
        {plan.name}
      </h3>
      
      <p className={cn("text-[14px] leading-relaxed mb-8", isFeatured ? "text-[#A1A1AA]" : "text-[#71717A]")}>
        {plan.description}
      </p>

      <div className="flex items-baseline gap-1.5 mb-8">
        <span className={cn("text-[40px] font-medium tracking-tight leading-none", isFeatured ? "text-white" : "text-[#09090B]")} style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
          {plan.price}
        </span>
        {plan.period && (
          <span className={cn("text-[15px]", isFeatured ? "text-[#A1A1AA]" : "text-[#71717A]")}>
            {plan.period}
          </span>
        )}
      </div>

      <div className={cn("h-[1px] w-full mb-8", isFeatured ? "bg-white/10" : "bg-[#F4F4F5]")} />

      <ul className="flex-1 space-y-4 mb-10">
        {plan.features.map(feat => (
          <li key={feat} className="flex items-start gap-3">
            <Check className={cn("w-5 h-5 shrink-0 mt-0.5", isFeatured ? "text-white" : "text-[#09090B]")} strokeWidth={2} />
            <span className={cn("text-[14px] font-medium leading-relaxed", isFeatured ? "text-[#D4D4D8]" : "text-[#3F3F46]")}>
              {feat}
            </span>
          </li>
        ))}
      </ul>

      <button
        onClick={() => {
           const el = document.querySelector('#contact');
           if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 80, behavior: 'smooth' });
        }}
        className={cn(
          "w-full h-14 rounded-2xl text-[15px] font-medium flex items-center justify-center transition-all duration-300 ease-out motion-safe:hover:-translate-y-0.5",
          isFeatured
            ? "bg-white text-[#09090B] hover:bg-[#F4F4F5] shadow-sm"
            : "bg-[#09090B] text-white hover:bg-[#27272A] shadow-sm"
        )}
      >
        {plan.cta}
      </button>
    </motion.div>
  );
};

export const PricingSection: React.FC = () => {
  return (
    <section id="pricing" className="bg-white border-t border-black/[0.04]" aria-labelledby="pricing-heading">
      <div className="mx-auto max-w-[1280px] px-6 md:px-12 lg:px-20 py-24 lg:py-32">
        
        {/* HEADER */}
        <div className="flex flex-col items-center text-center mb-20">
          <motion.div 
            initial={{ opacity: 0, y: 10 }} 
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[#71717A] font-medium text-[12px] uppercase tracking-[0.2em] mb-6"
          >
            Pricing
          </motion.div>

          <motion.h2 id="pricing-heading"
            initial={{ opacity: 0, y: 12 }} 
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ delay: 0.1 }}
            className="text-[32px] md:text-[40px] leading-[1.15] text-[#09090B] font-medium tracking-tight max-w-[700px] mb-6"
            style={{ fontFamily: 'Inter, system-ui, sans-serif' }}
          >
            Transparent, scalable pricing
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0 }} 
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }} transition={{ delay: 0.2 }}
            className="text-[16px] md:text-[18px] text-[#71717A] max-w-[620px] font-normal leading-relaxed"
          >
            Start small, scale as you grow. No hidden fees, no per-detection billing.
          </motion.p>
        </div>

        {/* PRICING CARDS */}
        <div className="flex flex-col lg:flex-row justify-center items-stretch gap-6 lg:gap-8">
          {PRICING_PLANS.map((plan, index) => (
            <PricingCard key={plan.name} plan={plan} index={index} />
          ))}
        </div>

        {/* FOOTNOTE */}
        <motion.div
          initial={{ opacity: 0 }} 
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }} transition={{ delay: 0.4 }}
          className="mt-20 text-center"
        >
          <p className="text-[14px] text-[#71717A] font-medium max-w-[600px] mx-auto leading-relaxed">
            All prices are exclusive of GST. Annual billing available with 15% discount.<br className="hidden sm:block" />
            Custom enterprise agreements available for multi-plant deployments.
          </p>
        </motion.div>
      </div>
    </section>
  );
};
