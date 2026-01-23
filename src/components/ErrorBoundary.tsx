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

export class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
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
    
    // Aquí podrías enviar a un servicio de logging (Sentry, LogRocket, etc.)
    // Ejemplo:
    // if (typeof window !== 'undefined' && window.Sentry) {
    //   window.Sentry.captureException(error, { contexts: { react: errorInfo } });
    // }
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback || (
        <div className="min-h-screen flex items-center justify-center bg-slate-50">
          <div className="text-center p-8 max-w-md">
            <div className="text-6xl mb-4">😕</div>
            <h1 className="text-2xl font-bold mb-4 text-slate-900">
              Algo salió mal
            </h1>
            <p className="text-slate-600 mb-6">
              Lo sentimos, ha ocurrido un error inesperado. Por favor, recarga la página o contacta al soporte si el problema persiste.
            </p>
            <div className="flex gap-4 justify-center">
              <button
                onClick={() => window.location.reload()}
                className="px-6 py-3 bg-[#FF6B35] text-white rounded-lg font-semibold hover:bg-[#F7931E] transition-colors"
                aria-label="Recargar página"
              >
                Recargar página
              </button>
              <a
                href="/contacto"
                className="px-6 py-3 bg-slate-200 text-slate-700 rounded-lg font-semibold hover:bg-slate-300 transition-colors"
                aria-label="Contactar soporte"
              >
                Contactar soporte
              </a>
            </div>
            {process.env.NODE_ENV === 'development' && this.state.error && (
              <details className="mt-6 text-left">
                <summary className="cursor-pointer text-sm text-slate-500 mb-2">
                  Detalles del error (solo en desarrollo)
                </summary>
                <pre className="text-xs bg-slate-100 p-4 rounded overflow-auto max-h-48">
                  {this.state.error.toString()}
                  {this.state.error.stack}
                </pre>
              </details>
            )}
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
