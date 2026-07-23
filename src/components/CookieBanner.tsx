'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function CookieBanner() {
  const [show, setShow] = useState(false);
  const [consent, setConsent] = useState<string | null>(null);
  const [explicitConsent, setExplicitConsent] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === '/' || pathname === '/es';

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
        <div
          className={`fixed left-0 right-0 z-50 px-3 sm:px-6 ${
            isHome ? 'top-16 pt-3 sm:top-20 sm:pt-0' : 'bottom-0 pb-3 sm:bottom-0 sm:pb-6'
          }`}
        >
          <div className="relative mx-auto max-w-4xl rounded-2xl border border-border-soft bg-background-light/95 p-3 shadow-card backdrop-blur sm:p-5">
            <button
              onClick={closeBanner}
              className="absolute right-2 top-2 flex h-7 w-7 items-center justify-center rounded-full text-lg font-bold text-text-secondary transition-colors hover:text-text-main sm:h-8 sm:w-8"
              aria-label="Cerrar banner de cookies"
            >
              ✕
            </button>

            <div className="flex flex-col items-start justify-between gap-2 pr-8 sm:flex-row sm:items-center sm:gap-5">
              <div className="flex-1">
                <h3 className="mb-1 text-xs font-semibold text-text-main sm:mb-1.5">Uso de Cookies</h3>
                <p className="text-[11px] leading-snug text-text-secondary sm:text-xs sm:leading-relaxed">
                  Usamos cookies para mejorar la experiencia y analizar el tráfico. Más información en nuestra{' '}
                  <Link href="/politica-cookies" className="text-terracotta hover:underline underline-offset-2">
                    Política de Cookies
                  </Link>
                  {' '}y en nuestra{' '}
                  <Link href="/politica-privacidad" className="text-terracotta hover:underline underline-offset-2">
                    Política de Privacidad
                  </Link>.
                </p>
              </div>

              <div className="grid w-full grid-cols-2 gap-2 sm:flex sm:w-auto sm:gap-3">
                <button
                  onClick={rejectCookies}
                  className="min-h-10 rounded-md border border-border-soft px-4 py-2 text-xs font-semibold text-text-secondary transition-colors hover:border-text-secondary sm:min-h-11 sm:py-2.5"
                  aria-label="Rechazar cookies"
                >
                  Rechazar
                </button>
                <button
                  onClick={acceptCookies}
                  className="btn-primary min-h-10 px-4 py-2 text-xs sm:min-h-11 sm:py-2.5"
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
        <div className="fixed bottom-4 left-4 z-40 flex items-center gap-3 rounded-xl border border-border-soft bg-background-light px-4 py-3 shadow-card">
          <span className="text-xs font-semibold text-text-main">Cookies rechazadas</span>
          <button
            onClick={openPreferences}
            className="text-xs font-semibold text-terracotta hover:underline underline-offset-2"
          >
            Cambiar
          </button>
        </div>
      )}
    </>
  );
}
