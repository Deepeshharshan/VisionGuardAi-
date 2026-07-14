// ============================================================
// NotFoundPage — 404 Error Page (Light Theme)
// ============================================================
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Home, ArrowLeft, Shield } from 'lucide-react';

const NotFoundPage: React.FC = () => {
  return (
    <div
      className="min-h-screen flex items-center justify-center px-6 bg-white relative overflow-hidden"
    >
      {/* Subtle dot grid background */}
      <div
        className="absolute inset-0 pointer-events-none opacity-30"
        style={{
          backgroundImage:
            'radial-gradient(circle, #CBD5E1 1px, transparent 1px)',
          backgroundSize: '32px 32px',
        }}
        aria-hidden="true"
      />

      {/* Pastel mesh glow */}
      <div
        className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(147,197,253,0.2) 0%, transparent 70%)' }}
        aria-hidden="true"
      />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: 'easeOut' }}
        className="relative text-center max-w-md"
      >
        {/* Logo */}
        <Link to="/" className="inline-flex items-center gap-2 mb-10 group">
          <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center group-hover:bg-blue-700 transition-colors">
            <Shield className="w-4 h-4 text-white" />
          </div>
          <span className="text-sm font-bold text-slate-700">VisionGuard AI</span>
        </Link>

        {/* 404 Number */}
        <div
          className="text-[120px] font-black leading-none tracking-tighter mb-2 select-none"
          style={{
            background: 'linear-gradient(180deg, #CBD5E1 0%, #E2E8F0 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}
          aria-hidden="true"
        >
          404
        </div>

        <h1 className="text-xl font-bold text-slate-900 mb-3">Page Not Found</h1>
        <p className="text-sm text-slate-600 mb-8 leading-relaxed">
          The page you're looking for doesn't exist or has been moved.
          Return to the dashboard or go back to the previous page.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            to="/"
            className="flex items-center gap-2 px-4 py-2.5 bg-blue-600 text-white text-sm font-semibold
                       rounded-md hover:bg-blue-700 transition-all duration-150 shadow-md"
          >
            <Home className="w-4 h-4" />
            Go Home
          </Link>
          <button
            onClick={() => window.history.back()}
            className="flex items-center gap-2 px-4 py-2.5 bg-white text-slate-700 text-sm font-semibold
                       rounded-md border border-slate-300 hover:bg-slate-50 hover:border-slate-400
                       transition-all duration-150 cursor-pointer shadow-sm"
          >
            <ArrowLeft className="w-4 h-4" />
            Go Back
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default NotFoundPage;
