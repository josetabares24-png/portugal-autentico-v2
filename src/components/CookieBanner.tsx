'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function CookieBanner() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookieConsent');
    if (!consent) {
      setShow(true);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem('cookieConsent', 'accepted');
    setShow(false);
  };

  const rejectCookies = () => {
    localStorage.setItem('cookieConsent', 'rejected');
    setShow(false);
  };

  if (!show) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t-2 border-gray-200 shadow-2xl z-50 p-6 sm:p-8">
      <div className="container mx-auto max-w-5xl relative">
        {/* Botón cerrar (X) */}
        <button
          onClick={rejectCookies}
          className="absolute top-0 right-0 text-gray-400 hover:text-gray-600 transition-colors text-2xl font-bold w-8 h-8 flex items-center justify-center"
          aria-label="Cerrar banner de cookies"
        >
          ✕
        </button>

        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 pr-8">
          <div className="flex-1">
            <h3 className="font-bold text-gray-900 text-lg mb-2">🍪 Uso de Cookies</h3>
            <p className="text-gray-700 text-sm leading-relaxed">
              Utilizamos cookies propias y de terceros para mejorar tu experiencia de navegación,
              analizar el tráfico del sitio y personalizar el contenido. Al hacer clic en "Aceptar",
              consientes el uso de todas las cookies. Puedes consultar más información en nuestra{' '}
              <Link href="/politica-cookies" className="text-orange-600 hover:text-orange-700 underline font-semibold">
                Política de Cookies
              </Link>
              {' '}y en nuestra{' '}
              <Link href="/politica-privacidad" className="text-orange-600 hover:text-orange-700 underline font-semibold">
                Política de Privacidad
              </Link>.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
            <button
              onClick={rejectCookies}
              className="px-6 py-3 border-2 border-gray-300 text-gray-700 font-semibold rounded-lg hover:bg-gray-50 transition-colors"
              aria-label="Rechazar cookies"
            >
              Rechazar
            </button>
            <button
              onClick={acceptCookies}
              className="px-6 py-3 bg-orange-600 hover:bg-orange-700 text-white font-semibold rounded-lg transition-colors shadow-lg"
              aria-label="Aceptar cookies"
            >
              Aceptar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
