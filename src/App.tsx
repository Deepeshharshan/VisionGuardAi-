// ============================================================
// App.tsx — Root Application with Routing
// ============================================================
import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

// Lazy-loaded pages for code splitting
const LandingPage   = lazy(() => import('@/pages/LandingPage'));
const LoginPage     = lazy(() => import('@/pages/LoginPage'));
const DashboardPage = lazy(() => import('@/pages/DashboardPage'));
const NotFoundPage  = lazy(() => import('@/pages/NotFoundPage'));

// TanStack Query client
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5,   // 5 minutes
      retry: 2,
      refetchOnWindowFocus: false,
    },
  },
});

const PageLoader: React.FC = () => (
  <div
    style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'var(--bg-0)' }}
    role="status"
    aria-label="Loading..."
  >
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 16 }}>
      <div style={{ width: 28, height: 28, border: '1.5px solid var(--border-strong)', borderTopColor: 'var(--signal)', borderRadius: '50%', animation: 'spin 0.8s linear infinite' }} />
      <span style={{ fontSize: 11, color: 'var(--text-3)', fontFamily: 'JetBrains Mono, monospace', textTransform: 'uppercase', letterSpacing: '0.07em' }}>Loading…</span>
    </div>
  </div>
);

const App: React.FC = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[9999]
                     focus:px-4 focus:py-2 focus:bg-black focus:text-white focus:rounded-full focus:text-sm focus:font-medium"
        >
          Skip to main content
        </a>
        <Suspense fallback={<PageLoader />}>
          <Routes>
            {/* Public Routes */}
            <Route path="/"           element={<LandingPage />} />
            <Route path="/login"      element={<LoginPage />} />
            <Route path="/register"   element={<Navigate to="/login" replace />} />

            {/* Protected Routes (auth guard to be added) */}
            <Route path="/dashboard"  element={<DashboardPage />} />

            {/* Fallback */}
            <Route path="*"           element={<NotFoundPage />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </QueryClientProvider>
  );
};

export default App;
