'use client';

import { useState, useEffect } from 'react';
import { submitQuizLead } from '@/lib/brevo';

export default function EmailCapturePopup() {
  const [show, setShow] = useState(false);
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [dismissed, setDismissed] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  useEffect(() => {
    // Check if already dismissed or submitted
    const wasDismissed = localStorage.getItem('emailPopupDismissed');
    const wasSubmitted = localStorage.getItem('emailSubmitted');

    if (wasDismissed || wasSubmitted) {
      setDismissed(true);
      return;
    }

    // Show after 30 seconds
    const timer = setTimeout(() => {
      setShow(true);
    }, 30000);

    // Exit intent detection
    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0 && !show && !dismissed) {
        setShow(true);
      }
    };

    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      clearTimeout(timer);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [show, dismissed]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setErrorMessage('Ingresa un email válido.');
      return;
    }

    setIsSubmitting(true);
    setErrorMessage(null);

    const result = await submitQuizLead({
      email,
      profile: 'newsletter',
      companion: '',
      interest: 'captura-popup',
      duration: '',
      budget: '',
      experience: '',
    });

    if (!result.success) {
      setIsSubmitting(false);
      setErrorMessage('No pudimos guardar tu email. Inténtalo de nuevo.');
      return;
    }

    localStorage.setItem('emailSubmitted', 'true');
    localStorage.setItem('userEmail', email);
    setSubmitted(true);
    setIsSubmitting(false);

    setTimeout(() => {
      setShow(false);
    }, 3000);
  };

  const handleDismiss = () => {
    localStorage.setItem('emailPopupDismissed', 'true');
    setShow(false);
    setDismissed(true);
  };

  if (!show || dismissed) return null;

  return (
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 animate-fadeIn"
        onClick={handleDismiss}
      />

      {/* Popup */}
      <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 w-full max-w-lg mx-4 animate-slideUp">
        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
          {/* Close button */}
          <button
            onClick={handleDismiss}
            className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors z-10"
            aria-label="Cerrar"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {!submitted ? (
            <>
              {/* Header with gradient */}
              <div className="bg-primary px-8 py-12 text-center relative overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute top-0 left-0 w-32 h-32 bg-white rounded-full -translate-x-16 -translate-y-16"></div>
                  <div className="absolute bottom-0 right-0 w-40 h-40 bg-white rounded-full translate-x-20 translate-y-20"></div>
                </div>

                <div className="relative">
                  <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-3xl">🎁</span>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-black text-white mb-3">
                    ¡Espera! Te regalo algo
                  </h3>
                  <p className="text-white/90 text-sm md:text-base">
                    Recibe gratis la guía:
                  </p>
                  <p className="text-white font-bold text-lg md:text-xl mt-2">
                    "10 Errores que Cometen los Turistas en Lisboa"
                  </p>
                </div>
              </div>

              {/* Body */}
              <div className="px-8 py-8">
                <div className="space-y-3 mb-6">
                  <div className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <p className="text-sm text-gray-600">Consejos de local para evitar trampas turísticas</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <p className="text-sm text-gray-600">Lugares secretos que no salen en las guías</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <p className="text-sm text-gray-600">Tips para ahorrar sin sacrificar calidad</p>
                  </div>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="tu@email.com"
                      required
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-primary focus:outline-none transition-colors"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-primary hover:bg-primary-dark text-white font-bold py-4 rounded-xl hover:scale-105 transition-all shadow-lg hover:shadow-xl disabled:opacity-70 disabled:hover:scale-100"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Enviando...' : 'Recibir guía gratis'}
                  </button>
                </form>

                {errorMessage && (
                  <p className="text-sm text-red-600 text-center mt-3">{errorMessage}</p>
                )}

                <p className="text-xs text-gray-500 text-center mt-4">
                  ✓ Sin spam · ✓ Cancela cuando quieras · ✓ Descarga inmediata
                </p>
              </div>
            </>
          ) : (
            <div className="px-8 py-16 text-center">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-10 h-10 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                ¡Perfecto!
              </h3>
              <p className="text-gray-600 mb-2">
                Revisa tu email. Te acabamos de enviar la guía.
              </p>
              <p className="text-sm text-gray-500">
                (Revisa spam si no lo ves en 5 minutos)
              </p>
            </div>
          )}
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translate(-50%, -45%);
          }
          to {
            opacity: 1;
            transform: translate(-50%, -50%);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
        .animate-slideUp {
          animation: slideUp 0.4s ease-out;
        }
      `}</style>
    </>
  );
}
