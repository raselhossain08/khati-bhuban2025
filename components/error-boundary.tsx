'use client';

import React from 'react';
import { AlertTriangle, RefreshCw, Home } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface ErrorBoundaryState {
  hasError: boolean;
  error?: Error;
}

interface ErrorBoundaryProps {
  children: React.ReactNode;
  fallback?: React.ComponentType<{ error: Error; resetError: () => void }>;
}

export class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
    
    // Log to error reporting service
    if (process.env.NODE_ENV === 'production') {
      // this.logErrorToService(error, errorInfo);
    }
  }

  resetError = () => {
    this.setState({ hasError: false, error: undefined });
  };

  render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        const FallbackComponent = this.props.fallback;
        return <FallbackComponent error={this.state.error!} resetError={this.resetError} />;
      }

      return (
        <div className="min-h-screen bg-slate-50 flex items-center justify-center p-4">
          <div className="max-w-md w-full text-center">
            <div className="w-16 h-16 bg-rose-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <AlertTriangle className="h-8 w-8 text-rose-600" />
            </div>
            
            <h1 className="text-2xl font-bold text-slate-900 mb-2">
              Something went wrong
            </h1>
            
            <p className="text-slate-600 mb-6">
              We apologize for the inconvenience. Please try refreshing the page or go back home.
            </p>
            
            <p className="text-slate-600 font-bengali text-sm mb-6">
              আমরা অসুবিধার জন্য ক্ষমা চাই। দয়া করে পৃষ্ঠাটি রিফ্রেশ করুন বা হোমে ফিরে যান।
            </p>

            {this.state.error && (
              <details className="text-left mb-6">
                <summary className="cursor-pointer text-sm text-slate-600 mb-2">
                  Error Details
                </summary>
                <code className="text-xs text-slate-500 bg-slate-100 p-3 rounded-lg block">
                  {this.state.error.message}
                </code>
              </details>
            )}

            <div className="flex gap-3 justify-center">
              <Button
                onClick={this.resetError}
                className="flex items-center gap-2 bg-amber-600 hover:bg-amber-700 text-white"
              >
                <RefreshCw className="h-4 w-4" />
                Try Again
              </Button>
              
              <Button
                asChild
                variant="outline"
                className="flex items-center gap-2"
              >
                <a href="/">
                  <Home className="h-4 w-4" />
                  Go Home
                </a>
              </Button>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

// Hook for error handling
export const useAsyncError = () => {
  const [_, setError] = React.useState();
  return React.useCallback(
    (e: any) => {
      setError(() => {
        throw e;
      });
    },
    [setError]
  );
};