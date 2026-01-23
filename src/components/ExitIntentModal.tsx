'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function ExitIntentModal() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const hasSeenModal = localStorage.getItem('exitModalShown');
    if (hasSeenModal) return;

    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0 && !show) {
        setShow(true);
        localStorage.setItem('exitModalShown', 'true');
      }
    };

    const timer = setTimeout(() => {
      document.addEventListener('mouseleave', handleMouseLeave);
    }, 10000);

    return () => {
      clearTimeout(timer);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [show]);

  if (!show) return null;

  return (
    <>
      <div
        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 flex items-center justify-center p-4"
        onClick={() => setShow(false)}
        aria-label="Cerrar modal"
        role="button"
        tabIndex={0}
        onKeyDown={(e) => e.key === 'Escape' && setShow(false)}
      >
        <div
          className="bg-white rounded-3xl p-8 sm:p-12 max-w-lg w-full relative transform transition-all"
          onClick={(e) => e.stopPropagation()}
          style={{ animation: 'scaleIn 0.3s ease-out' }}
        >
          <button
            onClick={() => setShow(false)}
            className="absolute top-6 right-6 text-gray-400 hover:text-gray-600 transition-colors text-2xl font-bold w-10 h-10 flex items-center justify-center rounded-full hover:bg-gray-100"
            aria-label="Cerrar modal"
          >
            ✕
          </button>

          <div className="text-6xl mb-6 text-center">🗺️</div>

          <h2 className="text-3xl sm:text-4xl font-black text-gray-900 mb-4 text-center" style={{ fontFamily: 'Georgia, serif' }}>
            ¡Espera! No te pierdas nada
          </h2>

          <p className="text-lg sm:text-xl text-gray-700 mb-8 text-center leading-relaxed">
            Tenemos <strong className="text-[#FF6B35]">guías completas y gratuitas</strong> de Lisboa
            con itinerarios detallados, mapas, horarios y consejos de locales.
          </p>

          <Link
            href="/itinerarios"
            onClick={() => setShow(false)}
            className="w-full block text-center bg-primary hover:bg-primary-dark text-white font-semibold py-4 rounded-xl text-lg transition-all hover:scale-105 shadow-lg hover:shadow-xl"
          >
            Ver Guías Gratuitas 🚀
          </Link>

          <div className="mt-8 space-y-3">
            <div className="flex items-center gap-3 text-sm text-gray-600">
              <svg className="w-5 h-5 text-green-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>100% gratuito · Sin registro</span>
            </div>
            <div className="flex items-center gap-3 text-sm text-gray-600">
              <svg className="w-5 h-5 text-green-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>Actualizado enero 2026</span>
            </div>
            <div className="flex items-center gap-3 text-sm text-gray-600">
              <svg className="w-5 h-5 text-green-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>Horarios, GPS y mapas interactivos</span>
            </div>
          </div>
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
