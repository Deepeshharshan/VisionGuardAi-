import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Shield, Loader2 } from 'lucide-react';
import Spline from '@splinetool/react-spline';
import { Logo } from '../components/ui/Logo';

const LoginPage: React.FC = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({ email: 'demo@visionguard.ai', password: 'demo' });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setError(null);
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    // Simulate API call
    await new Promise((res) => setTimeout(res, 800));

    if (form.email && form.password) {
      navigate('/dashboard');
    } else {
      setError('Please enter your credentials.');
      setLoading(false);
    }
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center bg-zinc-950 p-4 sm:p-8 overflow-hidden">
      {/* Background ambient glow behind the main card */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.05),transparent_50%)] pointer-events-none" />

      {/* Main Card Container */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.98, y: 10 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className="relative flex w-full max-w-[1200px] h-[800px] max-h-[90vh] bg-white rounded-3xl overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.5)] border border-zinc-800"
      >
        
        {/* Left Side: Visual / Robot */}
        <div className="relative hidden lg:flex lg:w-1/2 bg-[#050816] flex-col justify-between p-10 text-white overflow-hidden border-r border-zinc-200">
           {/* Logo */}
           <div className="relative z-20 flex items-center">
             <Link to="/">
               <Logo dark />
             </Link>
           </div>

           {/* Spline 3D Robot Scene */}
           <div className="absolute inset-0 z-10 pointer-events-auto flex items-center justify-center">
             <Spline scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode" />
           </div>

           {/* Centered Overlay Text — floated over the scene */}
           <div className="absolute inset-0 z-20 flex flex-col items-center justify-end pb-12 px-10 pointer-events-none">
             <div className="text-center max-w-[460px]">
               <p
                 style={{
                   fontFamily: 'Inter, system-ui, sans-serif',
                   letterSpacing: '-0.02em',
                   textShadow: '0 2px 24px rgba(0,0,0,0.6)',
                 }}
                 className="text-[22px] font-[450] text-white leading-[1.55] mb-3"
               >
                 See every flaw. Predict every failure.<br />Before the line ever stops.
               </p>
               <p
                 style={{
                   fontFamily: 'Inter, system-ui, sans-serif',
                   letterSpacing: '0.01em',
                   textShadow: '0 1px 12px rgba(0,0,0,0.5)',
                 }}
                 className="text-[13px] font-normal text-white/40"
               >
                 VisionGuard AI — Industrial intelligence for the factory floor.
               </p>
             </div>
           </div>
        </div>


        {/* Right Side: Form */}
        <div className="relative flex w-full lg:w-1/2 flex-col p-8 sm:p-12 bg-white">
          {/* Top right link */}
          <div className="absolute right-8 top-8">
            <Link to="/register" className="text-sm font-medium hover:underline underline-offset-4 text-zinc-600 transition-colors hover:text-zinc-900">
              Register
            </Link>
          </div>
          
          <div className="flex-1 flex flex-col justify-center items-center">
            <div className="mx-auto flex w-full flex-col justify-center space-y-8 sm:w-[350px]">
              <div className="flex flex-col space-y-2 text-center">
                <h1 className="text-2xl font-semibold tracking-tight text-zinc-900">
                  Welcome back
                </h1>
                <p className="text-sm text-zinc-500">
                  Enter your email below to sign into your account
                </p>
              </div>

              {/* Form */}
              <div className="grid gap-6">
                <form onSubmit={handleSubmit}>
                  <div className="grid gap-4">
                    <div className="grid gap-1">
                      <input
                        id="email"
                        name="email"
                        placeholder="name@example.com"
                        type="email"
                        autoCapitalize="none"
                        autoComplete="email"
                        autoCorrect="off"
                        required
                        value={form.email}
                        onChange={handleChange}
                        className="flex h-10 w-full rounded-md border border-zinc-200 bg-transparent px-3 py-2 text-sm placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-zinc-900 focus:border-transparent text-zinc-900 transition-shadow"
                      />
                    </div>
                    <div className="grid gap-1">
                      <input
                        id="password"
                        name="password"
                        placeholder="••••••••"
                        type="password"
                        required
                        value={form.password}
                        onChange={handleChange}
                        className="flex h-10 w-full rounded-md border border-zinc-200 bg-transparent px-3 py-2 text-sm placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-zinc-900 focus:border-transparent text-zinc-900 transition-shadow"
                      />
                    </div>
                    
                    {error && (
                      <p className="text-[13px] text-red-500 font-medium text-center">{error}</p>
                    )}

                    <button
                      type="submit"
                      disabled={loading}
                      className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-950 bg-zinc-900 text-zinc-50 hover:bg-zinc-800 h-10 px-4 py-2 disabled:opacity-50 disabled:cursor-not-allowed mt-2"
                    >
                      {loading ? (
                        <Loader2 className="w-4 h-4 animate-spin" />
                      ) : (
                        'Sign In with Email'
                      )}
                    </button>
                  </div>
                </form>

                <div className="relative">
                  <div className="absolute inset-0 flex items-center">
                    <span className="w-full border-t border-zinc-200" />
                  </div>
                  <div className="relative flex justify-center text-xs uppercase">
                    <span className="bg-white px-2 text-zinc-500 font-medium">
                      Or continue with
                    </span>
                  </div>
                </div>

                <button
                  type="button"
                  className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-950 border border-zinc-200 bg-white hover:bg-zinc-100 hover:text-zinc-900 h-10 px-4 py-2"
                >
                  <svg className="mr-2 h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                  </svg>
                  GitHub
                </button>
              </div>

              <p className="px-8 text-center text-sm text-zinc-500">
                By clicking continue, you agree to our{' '}
                <a href="#" className="underline underline-offset-4 hover:text-zinc-900 transition-colors">Terms of Service</a>{' '}
                and{' '}
                <a href="#" className="underline underline-offset-4 hover:text-zinc-900 transition-colors">Privacy Policy</a>.
              </p>
            </div>
          </div>
        </div>

      </motion.div>
    </div>
  );
};

export default LoginPage;
