'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Settings2 } from 'lucide-react';

export default function CookieBanner({ language = 'es' }: { language?: 'es' | 'en' }) {
  const english = language === 'en';
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

  if (!show && !explicitConsent) return null;

  return (
    <>
      {show && (
        <div className="fixed inset-x-3 bottom-[calc(0.75rem+env(safe-area-inset-bottom))] z-[60] mx-auto max-w-[480px] sm:inset-x-auto sm:bottom-5 sm:right-5 sm:mx-0 sm:w-[420px]">
          <section
            role="region"
            aria-labelledby="cookie-banner-title"
            className="relative overflow-hidden rounded-[9px] border border-[#d7e8e8] border-t-[3px] border-t-[#016d6f] bg-white px-4 pb-4 pt-3.5 text-[#0b2a3d] shadow-[0_12px_42px_rgba(5,36,45,0.22)] sm:px-5 sm:pb-5 sm:pt-4"
            style={{ fontFamily: 'var(--grok-body), Arial, sans-serif' }}
          >
            <div className="flex items-start justify-between gap-4">
              <h2 id="cookie-banner-title" className="pr-2 font-semibold text-[15px] leading-6 text-[#0b2a3d]">
                {english ? 'Privacy and cookies' : 'Privacidad y cookies'}
              </h2>
              <button
                type="button"
                onClick={closeBanner}
                className="flex h-9 w-9 shrink-0 items-center justify-center rounded-[5px] text-[#52666b] transition-colors hover:bg-[#e6f1f1] hover:text-[#0b2a3d] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#016d6f]"
                aria-label={english ? 'Close cookie banner' : 'Cerrar banner de cookies'}
              >
                <span aria-hidden="true" className="text-lg leading-none">×</span>
              </button>
            </div>
            <p className="mt-1.5 text-[12px] leading-[1.55] text-[#52666b] sm:text-[13px]">
              {english
                ? 'We use optional analytics cookies to understand visits and improve the guide. You can accept or reject them.'
                : 'Usamos cookies opcionales para conocer las visitas y mejorar la guía. Puedes aceptarlas o rechazarlas.'}
              {' '}
              <Link href="/politica-cookies" className="font-semibold text-[#016d6f] underline decoration-[#016d6f]/40 underline-offset-[3px] hover:decoration-[#016d6f]">
                {english ? 'Cookie policy (Spanish)' : 'Política de cookies'}
              </Link>
              {' · '}
              <Link href="/politica-privacidad" className="font-semibold text-[#016d6f] underline decoration-[#016d6f]/40 underline-offset-[3px] hover:decoration-[#016d6f]">
                {english ? 'Privacy policy (Spanish)' : 'Privacidad'}
              </Link>.
            </p>
            <div className="mt-3.5 grid grid-cols-2 gap-2.5">
              <button
                type="button"
                onClick={rejectCookies}
                className="min-h-11 rounded-[5px] border border-[#016d6f] bg-white px-3 py-2 text-[13px] font-bold text-[#015a5c] transition-colors hover:bg-[#e6f1f1] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#016d6f]"
                aria-label={english ? 'Reject cookies' : 'Rechazar cookies'}
              >
                {english ? 'Reject' : 'Rechazar'}
              </button>
              <button
                type="button"
                onClick={acceptCookies}
                className="min-h-11 rounded-[5px] bg-[#fcc603] px-3 py-2 text-[13px] font-bold text-[#0b2a3d] transition-colors hover:bg-[#ffe273] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#016d6f]"
                aria-label={english ? 'Accept cookies' : 'Aceptar cookies'}
              >
                {english ? 'Accept' : 'Aceptar'}
              </button>
            </div>
          </section>
        </div>
      )}

      {!show && consent !== null && explicitConsent && (
        <button
          type="button"
          onClick={openPreferences}
          className="fixed bottom-[calc(0.75rem+env(safe-area-inset-bottom))] left-3 z-40 flex h-11 w-11 items-center justify-center rounded-full border border-[#d7e8e8] bg-white text-[#016d6f] shadow-[0_4px_18px_rgba(5,36,45,0.16)] transition-colors hover:border-[#016d6f] hover:bg-[#e6f1f1] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#016d6f]"
          aria-label={english ? 'Change cookie preferences' : 'Cambiar preferencias de cookies'}
          title={english ? 'Change cookie preferences' : 'Cambiar preferencias de cookies'}
        >
          <Settings2 size={18} strokeWidth={1.8} aria-hidden="true" />
        </button>
      )}
    </>
  );
}
