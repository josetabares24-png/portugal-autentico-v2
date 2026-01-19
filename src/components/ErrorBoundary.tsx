'use client';

import React from 'react';
import Link from 'next/link';

interface Props {
  children: React.ReactNode;
  fallback?: React.ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
}

export class ErrorBoundary extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    // Log error to console (en producción, enviar a servicio de logging)
    console.error('Error capturado por ErrorBoundary:', error, errorInfo);
    
    // Aquí podrías enviar a un servicio de logging como Sentry:
    // Sentry.captureException(error, { contexts: { react: errorInfo } });
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback || (
        <div className="min-h-screen flex items-center justify-center bg-background-light px-4">
          <div className="max-w-md w-full text-center">
            <div className="mb-6">
              <span className="material-symbols-outlined text-6xl text-primary">
                error_outline
              </span>
            </div>
            <h1 className="text-3xl font-black text-slate-900 mb-4">
              Algo salió mal
            </h1>
            <p className="text-slate-600 mb-6">
              {this.state.error?.message || 'Ocurrió un error inesperado. Por favor, intenta recargar la página.'}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => window.location.reload()}
                className="px-6 py-3 bg-primary hover:bg-primary-dark text-white font-bold rounded-xl transition-colors"
              >
                Recargar página
              </button>
              <Link
                href="/"
                className="px-6 py-3 bg-slate-200 hover:bg-slate-300 text-slate-900 font-bold rounded-xl transition-colors"
              >
                Ir al inicio
              </Link>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
