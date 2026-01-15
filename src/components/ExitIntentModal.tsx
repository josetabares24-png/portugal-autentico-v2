'use client';

import { useState, useEffect, FormEvent } from 'react';

export default function ExitIntentModal() {
  const [show, setShow] = useState(false);
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    // Solo mostrar una vez por sesión
    const hasSeenModal = localStorage.getItem('exitModalShown');
    if (hasSeenModal) return;

    const handleMouseLeave = (e: MouseEvent) => {
      // Detectar cuando el mouse sale por arriba de la ventana
      if (e.clientY <= 0 && !show) {
        setShow(true);
        localStorage.setItem('exitModalShown', 'true');
      }
    };

    // Esperar 5 segundos antes de activar el listener
    const timer = setTimeout(() => {
      document.addEventListener('mouseleave', handleMouseLeave);
    }, 5000);

    return () => {
      clearTimeout(timer);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [show]);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Aquí integrarías con tu servicio de email (Resend, Mailchimp, etc.)
      // Por ahora simulamos el envío
      await new Promise(resolve => setTimeout(resolve, 1000));

      setSubmitted(true);
      setTimeout(() => {
        setShow(false);
      }, 2000);
    } catch (error) {
      console.error('Error al suscribirse:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!show) return null;

  return (
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
        onClick={() => setShow(false)}
        aria-label="Cerrar modal"
        role="button"
        tabIndex={0}
        onKeyDown={(e) => e.key === 'Escape' && setShow(false)}
      >
        {/* Modal */}
        <div
          className="bg-white rounded-3xl p-8 sm:p-12 max-w-lg w-full relative transform transition-all"
          onClick={(e) => e.stopPropagation()}
          style={{
            animation: 'scaleIn 0.3s ease-out'
          }}
        >
          {/* Close button */}
          <button
            onClick={() => setShow(false)}
            className="absolute top-6 right-6 text-gray-400 hover:text-gray-600 transition-colors text-2xl font-bold w-10 h-10 flex items-center justify-center rounded-full hover:bg-gray-100"
            aria-label="Cerrar modal"
          >
            ✕
          </button>

          {!submitted ? (
            <>
              {/* Emoji grande */}
              <div className="text-6xl mb-6 text-center">🎁</div>

              {/* Headline */}
              <h2 className="text-3xl sm:text-4xl font-black text-gray-900 mb-4 text-center" style={{ fontFamily: 'Georgia, serif' }}>
                ¡Espera! Regalo para ti
              </h2>

              {/* Subheadline */}
              <p className="text-lg sm:text-xl text-gray-700 mb-8 text-center leading-relaxed">
                Descarga nuestra <strong className="text-[#FF6B35]">Guía Gratuita de Lisboa</strong> con los{' '}
                <strong>5 errores que cometen los turistas</strong> (y cómo evitarlos)
              </p>

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-4">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="tu@email.com"
                  className="w-full px-6 py-4 border-2 border-gray-300 rounded-xl text-lg focus:outline-none focus:border-[#FF6B35] focus:ring-2 focus:ring-[#FF6B35]/20 transition-all"
                  required
                  aria-label="Email para recibir guía gratuita"
                />
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-[#FF6B35] to-[#F7931E] hover:from-[#F7931E] hover:to-[#FF6B35] text-white font-black py-4 rounded-xl text-lg transition-all hover:scale-105 shadow-xl disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                >
                  {isSubmitting ? 'Enviando...' : 'Descargar Guía Gratis 📥'}
                </button>
              </form>

              {/* Benefits */}
              <div className="mt-8 space-y-3">
                <div className="flex items-center gap-3 text-sm text-gray-600">
                  <svg className="w-5 h-5 text-green-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Sin spam · Cancela cuando quieras</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-gray-600">
                  <svg className="w-5 h-5 text-green-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Tips verificados por locales en 2025</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-gray-600">
                  <svg className="w-5 h-5 text-green-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Descarga instantánea en PDF</span>
                </div>
              </div>
            </>
          ) : (
            // Success state
            <div className="text-center py-8">
              <div className="text-6xl mb-6">✅</div>
              <h3 className="text-3xl font-black text-gray-900 mb-4">¡Perfecto!</h3>
              <p className="text-xl text-gray-700">
                Revisa tu email. Te hemos enviado la guía gratuita.
              </p>
            </div>
          )}
        </div>
      </div>

      <style jsx>{`
        @keyframes scaleIn {
          from {
            transform: scale(0.9);
            opacity: 0;
          }
          to {
            transform: scale(1);
            opacity: 1;
          }
        }
      `}</style>
    </>
  );
}
