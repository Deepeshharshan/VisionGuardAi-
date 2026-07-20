// ============================================================
// main.tsx — Application Entry Point
// ============================================================
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
import { GlobalErrorBoundary } from './components/layout/GlobalErrorBoundary';

const root = document.getElementById('root');
if (!root) throw new Error('Root element not found');

createRoot(root).render(
  <StrictMode>
    <GlobalErrorBoundary>
      <App />
    </GlobalErrorBoundary>
  </StrictMode>
);
