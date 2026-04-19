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
      setConsent(storedConsent);
      setExplicitConsent(true);
      document.documentElement.dataset.cookieConsent = storedConsent;
      setShow(false);
    } else {
      setConsent(null);
      setExplicitConsent(false);
      setShow(true);
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
        <div className="fixed bottom-0 left-0 right-0 bg-background-light border-t-2 border-border-soft z-50 p-6 sm:p-8">
          <div className="container mx-auto max-w-5xl relative">
            <button
              onClick={closeBanner}
              className="absolute top-0 right-0 text-text-secondary hover:text-text-main transition-colors text-xl font-bold w-8 h-8 flex items-center justify-center"
              aria-label="Cerrar banner de cookies"
            >
              ✕
            </button>

            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 pr-8">
              <div className="flex-1">
                <h3 className="font-semibold text-text-main text-sm mb-2">Uso de Cookies</h3>
                <p className="text-text-secondary text-xs leading-relaxed">
                  Utilizamos cookies propias y de terceros para mejorar tu experiencia de navegación,
                  analizar el tráfico del sitio y personalizar el contenido. Al hacer clic en "Aceptar",
                  consientes el uso de todas las cookies. Puedes consultar más información en nuestra{' '}
                  <Link href="/politica-cookies" className="text-primary hover:underline underline-offset-2">
                    Política de Cookies
                  </Link>
                  {' '}y en nuestra{' '}
                  <Link href="/politica-privacidad" className="text-primary hover:underline underline-offset-2">
                    Política de Privacidad
                  </Link>.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
                <button
                  onClick={rejectCookies}
                  className="px-6 py-3 border border-border-soft text-text-secondary text-xs font-semibold hover:border-text-secondary transition-colors"
                  aria-label="Rechazar cookies"
                >
                  Rechazar
                </button>
                <button
                  onClick={acceptCookies}
                  className="px-6 py-3 bg-primary hover:bg-primary-dark text-white text-xs font-semibold transition-colors"
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
        <div className="fixed bottom-4 left-4 z-40 bg-background-light border border-border-soft px-4 py-3 flex items-center gap-3">
          <span className="text-xs font-semibold text-text-main">Cookies rechazadas</span>
          <button
            onClick={openPreferences}
            className="text-xs font-semibold text-primary hover:underline underline-offset-2"
          >
            Cambiar
          </button>
        </div>
      )}
    </>
  );
}
