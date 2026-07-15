import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, ArrowRight } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1000);
  };

  return (
    <section id="contact" className="py-24 bg-[var(--bg-0)] relative" aria-labelledby="contact-heading">
      
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-[400px] bg-mesh-gradient opacity-30 rounded-full blur-3xl -z-10" />

      <div className="enterprise-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center max-w-6xl mx-auto">
          
          {/* Left: Text */}
          <div>
            <span className="text-[12px] font-semibold text-[var(--text-3)] tracking-wider uppercase mb-3 block">
              Get in touch
            </span>
            <h2 id="contact-heading" className="text-[40px] font-bold text-[var(--text-1)] mb-6 leading-tight tracking-tight">
              Ready to build?
            </h2>
            <p className="text-[16px] text-[var(--text-2)] mb-10 leading-relaxed max-w-md">
              Schedule a 30-minute live demonstration tailored to your industry and camera setup. Our engineers will walk you through real-world scenarios using your actual equipment.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-[var(--bg-2)] flex items-center justify-center shrink-0">
                  <Mail className="w-4 h-4 text-[var(--text-2)]" />
                </div>
                <div>
                  <div className="text-[14px] font-medium text-[var(--text-1)]">sales@visionguard.ai</div>
                  <div className="text-[13px] text-[var(--text-3)]">We usually reply within 1-2 hours</div>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-[var(--bg-2)] flex items-center justify-center shrink-0">
                  <MapPin className="w-4 h-4 text-[var(--text-2)]" />
                </div>
                <div>
                  <div className="text-[14px] font-medium text-[var(--text-1)]">Global HQ</div>
                  <div className="text-[13px] text-[var(--text-3)]">Bengaluru • Mumbai • Chennai</div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right: Form */}
          <div>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              className="bg-white border border-[var(--border)] shadow-[0_8px_30px_-4px_rgba(0,0,0,0.06)] rounded-[24px] p-8 md:p-10"
            >
              <h3 className="text-[20px] font-semibold text-[var(--text-1)] mb-2">Request a Live Demo</h3>
              <p className="text-[14px] text-[var(--text-3)] mb-8">We'll respond within one business day.</p>
              
              {submitted ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="py-12 text-center"
                >
                  <div className="w-16 h-16 rounded-full bg-[var(--green-dim)] flex items-center justify-center mx-auto mb-6">
                    <svg className="w-8 h-8 text-[var(--green)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h4 className="text-[18px] font-semibold text-[var(--text-1)] mb-2">Request Received</h4>
                  <p className="text-[14px] text-[var(--text-2)] mb-6">
                    Our technical sales team will contact you shortly to schedule your demo.
                  </p>
                  <button 
                    onClick={() => setSubmitted(false)}
                    className="vg-btn vg-btn-ghost w-full"
                  >
                    Submit another request
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label htmlFor="name" className="block text-[12px] font-semibold text-[var(--text-2)] uppercase tracking-wider mb-2">
                      Full Name *
                    </label>
                    <input 
                      type="text" 
                      id="name" 
                      required
                      className="enterprise-input w-full"
                      placeholder="e.g. Rajesh Sharma"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-[12px] font-semibold text-[var(--text-2)] uppercase tracking-wider mb-2">
                      Work Email *
                    </label>
                    <input 
                      type="email" 
                      id="email" 
                      required
                      className="enterprise-input w-full"
                      placeholder="e.g. rajesh@company.com"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="company" className="block text-[12px] font-semibold text-[var(--text-2)] uppercase tracking-wider mb-2">
                      Company *
                    </label>
                    <input 
                      type="text" 
                      id="company" 
                      required
                      className="enterprise-input w-full"
                      placeholder="e.g. Sharma Industries Pvt Ltd"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-[12px] font-semibold text-[var(--text-2)] uppercase tracking-wider mb-2">
                      Message (Optional)
                    </label>
                    <textarea 
                      id="message" 
                      rows={3}
                      className="enterprise-input w-full h-auto py-3 resize-none"
                      placeholder="Tell us about your factory and camera setup..."
                    />
                  </div>
                  
                  <button 
                    type="submit" 
                    disabled={loading}
                    className="w-full bg-[var(--signal)] hover:bg-[var(--signal-hover)] text-white font-medium text-[14px] py-3 rounded-full transition-colors flex items-center justify-center disabled:opacity-70 disabled:cursor-not-allowed mt-2"
                  >
                    {loading ? (
                      <span className="flex items-center gap-2">
                        <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Processing...
                      </span>
                    ) : (
                      <span className="flex items-center gap-2">
                        Send Request <ArrowRight className="w-4 h-4" />
                      </span>
                    )}
                  </button>
                  
                  <p className="text-[11px] text-[var(--text-3)] text-center mt-4">
                    No spam, ever. Privacy Policy applies.
                  </p>
                </form>
              )}
            </motion.div>
          </div>
          
        </div>
      </div>
    </section>
  );
};
