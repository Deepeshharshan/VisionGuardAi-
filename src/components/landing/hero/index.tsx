import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import { DashboardMockup } from '../DashboardMockup';
import { Link } from 'react-router-dom';

export const HeroSection: React.FC = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen w-full flex flex-col items-center justify-center pt-32 pb-16 overflow-hidden"
    >
      {/* Lumen Mesh Gradient Background */}
      <div className="mesh-bg" />

      {/* Hero Content */}
      <div className="relative z-10 container-xl flex flex-col items-center text-center">
        
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/60 border border-slate-200/60 backdrop-blur-md shadow-sm">
            <span className="flex h-2 w-2 rounded-full bg-blue-500"></span>
            <span className="text-sm font-medium text-slate-700">VisionGuard AI 2.0 is now live</span>
          </div>
        </motion.div>

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="heading-display mb-6">
            Intelligent Industrial Vision <br className="hidden sm:block" />
            Accelerate Your Growth
          </h1>
          <p className="body-lg max-w-2xl mx-auto mb-10 text-slate-600">
            Convert your existing factory cameras into an intelligent monitoring platform capable of detecting visual anomalies, quality defects, and maintenance events in real-time.
          </p>
        </motion.div>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap items-center justify-center gap-4 mb-20"
        >
          <Link to="/login" className="btn-primary group">
            Start Testing
            <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
          <a href="#features" className="btn-secondary">
            Explore Features
          </a>
        </motion.div>

        {/* Floating Dashboard Preview */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="w-full max-w-5xl mx-auto relative"
        >
          {/* Decorative glow behind dashboard */}
          <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl blur-xl opacity-20" />
          
          <div className="relative rounded-xl overflow-hidden border border-white/20 shadow-2xl bg-white/50 backdrop-blur-sm p-2">
            <div className="rounded-lg overflow-hidden pointer-events-none">
               <DashboardMockup />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
