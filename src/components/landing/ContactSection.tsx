// ============================================================
// ContactSection — Full-width 2-col: big CTA left, form right
// ============================================================
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Mail, MapPin } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', company: '', message: '' });

  const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm(p => ({ ...p, [e.target.name]: e.target.value }));

  const onSubmit = (e: React.FormEvent) => { e.preventDefault(); setSubmitted(true); };

  return (
    <section id="contact" className="bg-[#F9FAFB] border-t border-black/[0.06]" aria-labelledby="contact-heading">
      <div className="section-container section-py">
        <div className="grid lg:grid-cols-2 gap-16 items-start">

          {/* LEFT — CTA copy */}
          <div>
            <motion.p initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} className="t-label text-black/40 mb-5 eyebrow">
              Get in Touch
            </motion.p>
            <motion.h2 id="contact-heading"
              initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ delay: 0.07 }}
              className="mb-6" style={{
                fontFamily: 'Inter, system-ui, sans-serif',
                fontSize: 'clamp(2.5rem, 5vw, 4rem)',
                fontWeight: 500,
                lineHeight: 1.06,
                letterSpacing: '-0.025em',
                color: '#0A0A0A',
              }}>
              Ready to build?
            </motion.h2>
            <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
              viewport={{ once: true }} transition={{ delay: 0.14 }}
              className="t-body-lg max-w-md mb-10">
              Schedule a 30-minute live demonstration tailored to your industry and camera setup.
              Our engineers will walk you through real-world scenarios using your actual equipment.
            </motion.p>

            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
              viewport={{ once: true }} transition={{ delay: 0.2 }}
              className="flex flex-wrap gap-3 mb-12">
              <button onClick={() => document.getElementById('form-name')?.focus()}
                className="btn btn-primary btn-lg group">
                Book a Demo
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
              <a href="mailto:sales@visionguard.ai" className="btn btn-secondary btn-lg">
                Contact Sales
              </a>
            </motion.div>

            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
              viewport={{ once: true }} transition={{ delay: 0.26 }}
              className="space-y-3.5">
              {[
                { icon: Mail,    text: 'sales@visionguard.ai',        href: 'mailto:sales@visionguard.ai' },
                { icon: MapPin,  text: 'Bengaluru · Mumbai · Chennai', href: undefined },
              ].map(({ icon: Icon, text, href }) => (
                <div key={text} className="flex items-center gap-2.5">
                  <Icon className="w-4 h-4 text-black/30 shrink-0" />
                  {href
                    ? <a href={href} className="text-[13px] text-black/50 hover:text-black transition-colors">{text}</a>
                    : <span className="text-[13px] text-black/40">{text}</span>
                  }
                </div>
              ))}
            </motion.div>
          </div>

          {/* RIGHT — Contact form */}
          <motion.div
            initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.15 }}>
            {submitted ? (
              <div className="card bg-white text-center py-16 px-8">
                <div className="w-12 h-12 rounded-full border border-black/[0.08] flex items-center justify-center mx-auto mb-5">
                  <ArrowRight className="w-5 h-5 text-black/40" />
                </div>
                <h3 className="text-[16px] font-semibold text-black mb-2">Request received</h3>
                <p className="text-[13.5px] text-black/50 font-light">
                  Our team will reach out within 1 business day to schedule your demo.
                </p>
              </div>
            ) : (
              <form onSubmit={onSubmit} aria-label="Contact form"
                className="card bg-white flex flex-col gap-5">
                <div>
                  <h3 className="text-[15px] font-semibold text-black">Request a Live Demo</h3>
                  <p className="text-[12.5px] text-black/40 mt-1">We'll respond within one business day.</p>
                </div>

                {[
                  { id: 'form-name',    name: 'name',    label: 'Full Name',    type: 'text',  ph: 'Rajesh Sharma',            req: true  },
                  { id: 'form-email',   name: 'email',   label: 'Work Email',   type: 'email', ph: 'rajesh@company.com',       req: true  },
                  { id: 'form-company', name: 'company', label: 'Company',      type: 'text',  ph: 'Sharma Industries Pvt Ltd', req: false },
                ].map(f => (
                  <div key={f.id}>
                    <label htmlFor={f.id}
                      className="block t-label text-black/40 mb-2">
                      {f.label}{f.req && <span className="text-black ml-0.5">*</span>}
                    </label>
                    <input id={f.id} name={f.name} type={f.type} required={f.req}
                      value={(form as any)[f.name]} onChange={onChange} placeholder={f.ph}
                      className="w-full h-11 px-4 bg-[#F9FAFB] border border-black/[0.09] rounded-xl
                                 text-[13.5px] text-black placeholder:text-black/25
                                 focus:outline-none focus:border-black/30 focus:bg-white transition-all" />
                  </div>
                ))}

                <div>
                  <label htmlFor="form-message" className="block t-label text-black/40 mb-2">Message</label>
                  <textarea id="form-message" name="message" rows={3}
                    value={form.message} onChange={onChange}
                    placeholder="Tell us about your factory and camera setup..."
                    className="w-full px-4 py-3 bg-[#F9FAFB] border border-black/[0.09] rounded-xl
                               text-[13.5px] text-black placeholder:text-black/25 resize-none
                               focus:outline-none focus:border-black/30 focus:bg-white transition-all" />
                </div>

                <button type="submit" className="btn btn-primary w-full" style={{ justifyContent: 'center' }}>
                  Send Request
                </button>
                <p className="text-[11px] text-black/30 text-center font-light -mt-1">
                  No spam, ever. Privacy Policy applies.
                </p>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
