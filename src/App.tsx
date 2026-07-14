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

// Loading fallback — minimal spinner that matches the light theme
const PageLoader: React.FC = () => (
  <div
    className="min-h-screen flex items-center justify-center bg-white"
    role="status"
    aria-label="Loading..."
  >
    <div className="flex flex-col items-center gap-4">
      <div className="w-8 h-8 border-2 border-slate-200 border-t-blue-500 rounded-full animate-spin" />
      <span className="text-xs text-slate-500 font-medium">Loading…</span>
    </div>
  </div>
);

const App: React.FC = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
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
