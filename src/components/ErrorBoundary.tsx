'use client';

import React from 'react';
import logger from '@/lib/logger';

interface ErrorBoundaryProps {
  children: React.ReactNode;
  fallback?: React.ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
  error?: Error;
}

class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    logger.error('Error capturado por ErrorBoundary:', {
      error: error.message,
      stack: error.stack,
      componentStack: errorInfo.componentStack,
    });
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback || (
        <main className="bg-background-light py-32 text-center" id="main-content">
          <div className="max-w-md mx-auto px-6">
            <h1 className="font-display italic text-text-main text-2xl mb-4">Algo salió mal</h1>
            <p className="text-text-secondary text-sm mb-8">
              Ha ocurrido un error inesperado. Por favor, recarga la página o contacta al soporte.
            </p>
            <div className="flex gap-4 justify-center">
              <button
                onClick={() => window.location.reload()}
                className="px-6 py-3 bg-primary hover:bg-primary-dark text-white text-sm font-semibold transition-colors"
                aria-label="Recargar página"
              >
                Recargar página
              </button>
              <a
                href="/contacto"
                className="px-6 py-3 border border-border-soft text-text-secondary text-sm font-semibold hover:border-text-secondary transition-colors"
                aria-label="Contactar soporte"
              >
                Contactar soporte
              </a>
            </div>
            {process.env.NODE_ENV === 'development' && this.state.error && (
              <details className="mt-6 text-left">
                <summary className="cursor-pointer text-xs text-text-secondary mb-2">
                  Detalles del error (solo en desarrollo)
                </summary>
                <pre className="text-xs bg-white border border-border-soft p-4 overflow-auto max-h-48 mt-2">
                  {this.state.error.toString()}
                  {this.state.error.stack}
                </pre>
              </details>
            )}
          </div>
        </main>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
