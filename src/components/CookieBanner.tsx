'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function CookieBanner() {
  const [show, setShow] = useState(false);
  const [consent, setConsent] = useState<string | null>(null);
  const [explicitConsent, setExplicitConsent] = useState(false);

  useEffect(() => {
    const storedConsent = localStorage.getItem('cookieConsent');
    const explicit = localStorage.getItem('cookieConsentExplicit');
    const hasValidConsent = storedConsent === 'accepted' || storedConsent === 'rejected';

    if (hasValidConsent && explicit === 'true') {
      // Usuario ya ha dado consentimiento explícito
      setConsent(storedConsent);
      setExplicitConsent(true);
      document.documentElement.dataset.cookieConsent = storedConsent;
      setShow(false);
    } else {
      // No hay consentimiento previo - mostrar banner y NO rechazar automáticamente
      setConsent(null);
      setExplicitConsent(false);
      setShow(true);
      // NO establecer ningún valor por defecto - esperar acción explícita del usuario
    }
  }, []);

  const applyConsent = (value: 'accepted' | 'rejected') => {
    localStorage.setItem('cookieConsent', value);
    localStorage.setItem('cookieConsentExplicit', 'true');
    document.documentElement.dataset.cookieConsent = value;
    setConsent(value);
    setExplicitConsent(true);
    setShow(false);

    if (value === 'rejected') {
      (window as any).disableAnalytics = true;
      window.dispatchEvent(new CustomEvent('cookie-consent', { detail: value }));
    } else {
      (window as any).disableAnalytics = false;
      window.dispatchEvent(new CustomEvent('cookie-consent', { detail: value }));
    }
  };

  const acceptCookies = () => applyConsent('accepted');
  const rejectCookies = () => applyConsent('rejected');
  const closeBanner = () => setShow(false);
  const openPreferences = () => setShow(true);

  if (!show && consent !== 'rejected') return null;

  return (
    <>
      {show && (
        <div className="fixed bottom-0 left-0 right-0 bg-white border-t-2 border-gray-200 shadow-2xl z-50 p-6 sm:p-8">
          <div className="container mx-auto max-w-5xl relative">
            {/* Botón cerrar (X) */}
            <button
              onClick={closeBanner}
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
      )}

      {!show && consent === 'rejected' && explicitConsent && (
        <div className="fixed bottom-4 left-4 z-40 bg-white/95 backdrop-blur-sm border border-slate-200 shadow-lg rounded-2xl px-4 py-3 flex items-center gap-3">
          <span className="text-sm font-semibold text-slate-700">Cookies rechazadas</span>
          <button
            onClick={openPreferences}
            className="text-sm font-semibold text-primary hover:text-primary-dark"
          >
            Cambiar
          </button>
        </div>
      )}
    </>
  );
}
