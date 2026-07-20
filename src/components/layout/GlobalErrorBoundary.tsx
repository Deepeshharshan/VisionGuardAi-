import React, { ErrorInfo, ReactNode } from 'react';
import { AlertTriangle, RefreshCw } from 'lucide-react';
import { Logo } from '../ui/Logo';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

export class GlobalErrorBoundary extends React.Component<Props, State> {
  public state: State = {
    hasError: false,
    error: null,
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Uncaught error:', error, errorInfo);
  }

  private handleReload = () => {
    window.location.reload();
  };

  public render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-zinc-950 p-4 font-sans text-zinc-100">
          <div className="max-w-md w-full bg-zinc-900 border border-zinc-800 rounded-2xl p-8 flex flex-col items-center text-center shadow-2xl">
            <div className="mb-6">
              <Logo dark />
            </div>
            
            <div className="w-16 h-16 bg-red-500/10 rounded-full flex items-center justify-center mb-6">
              <AlertTriangle className="w-8 h-8 text-red-500" />
            </div>
            
            <h1 className="text-2xl font-semibold mb-2">Something went wrong</h1>
            <p className="text-zinc-400 mb-8 leading-relaxed">
              An unexpected error occurred in the application. Our team has been notified. Please try refreshing the page.
            </p>
            
            <div className="flex gap-4 w-full">
              <button
                onClick={this.handleReload}
                className="flex-1 enterprise-btn-primary flex justify-center items-center gap-2"
              >
                <RefreshCw className="w-4 h-4" />
                Refresh Page
              </button>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
