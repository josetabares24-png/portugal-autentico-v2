'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Settings2 } from 'lucide-react';

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

  useEffect(() => {
    const showCookiePreferences = () => setShow(true);
    window.addEventListener('open-cookie-preferences', showCookiePreferences);
    return () => window.removeEventListener('open-cookie-preferences', showCookiePreferences);
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
        <div className="fixed inset-x-0 bottom-0 z-50 px-3 pb-[calc(0.75rem+env(safe-area-inset-bottom))] sm:inset-x-auto sm:bottom-4 sm:right-4 sm:w-[min(360px,calc(100vw-2rem))] sm:p-0">
          <div className="relative rounded-lg border border-border-soft bg-background-light/95 p-2.5 pr-9 shadow-soft backdrop-blur sm:p-3 sm:pr-9">
            <button
              onClick={closeBanner}
              className="absolute right-1.5 top-1.5 flex h-7 w-7 items-center justify-center rounded-full text-base font-bold text-text-secondary transition-colors hover:text-text-main"
              aria-label="Cerrar banner de cookies"
            >
              ✕
            </button>

            <div className="space-y-2 sm:space-y-2.5">
              <div>
                <h3 className="sr-only mb-1 font-body text-[11px] font-semibold uppercase tracking-[0.14em] text-text-main sm:not-sr-only">
                  Cookies
                </h3>
                <p className="text-[10px] leading-[1.35] text-text-secondary sm:text-[11px] sm:leading-snug">
                  Usamos cookies para medir el tráfico y mejorar la web. Puedes aceptar, rechazar o leer la{' '}
                  <Link href="/politica-cookies" className="text-terracotta hover:underline underline-offset-2">
                    Política de Cookies
                  </Link>
                  {' '}y la{' '}
                  <Link href="/politica-privacidad" className="text-terracotta hover:underline underline-offset-2">
                    Privacidad
                  </Link>.
                </p>
              </div>

              <div className="grid w-full grid-cols-2 gap-2">
                <button
                  onClick={rejectCookies}
                  className="min-h-8 rounded-md border border-border-soft px-3 py-1 text-xs font-semibold text-text-secondary transition-colors hover:border-text-secondary hover:text-text-main sm:min-h-9 sm:py-1.5"
                  aria-label="Rechazar cookies"
                >
                  Rechazar
                </button>
                <button
                  onClick={acceptCookies}
                  className="min-h-8 rounded-md bg-terracotta px-3 py-1 font-body text-xs font-semibold text-white transition-colors hover:bg-primary-dark sm:min-h-9 sm:py-1.5"
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
        <button
          onClick={openPreferences}
          className="fixed bottom-3 left-3 z-40 flex h-10 w-10 items-center justify-center rounded-full border border-border-soft bg-background-light text-terracotta shadow-soft transition-colors hover:border-terracotta hover:bg-white"
          aria-label="Cambiar preferencias de cookies"
          title="Cambiar preferencias de cookies"
        >
          <Settings2 size={17} strokeWidth={1.8} aria-hidden="true" />
        </button>
      )}
    </>
  );
}
