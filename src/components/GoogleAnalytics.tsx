'use client';

import { useEffect } from 'react';

const GA_MEASUREMENT_ID = 'G-8F54LQ5862';

declare global {
  interface Window {
    dataLayer: any[];
    gtag: (...args: any[]) => void;
    disableAnalytics?: boolean;
  }
}

export default function GoogleAnalytics() {
  useEffect(() => {
    // Verificar consentimiento inicial
    const checkConsent = () => {
      if (typeof window === 'undefined') return false;
      
      const consent = localStorage.getItem('cookieConsent');
      const explicit = localStorage.getItem('cookieConsentExplicit');
      
      return consent === 'accepted' && explicit === 'true';
    };

    // Controlar el tracking según consentimiento
    const updateConsent = (granted: boolean) => {
      if (typeof window === 'undefined' || !window.gtag) return;

      if (granted) {
        // Habilitar tracking
        window.disableAnalytics = false;
        window.gtag('consent', 'update', {
          analytics_storage: 'granted',
        });
      } else {
        // Deshabilitar tracking
        window.disableAnalytics = true;
        window.gtag('consent', 'update', {
          analytics_storage: 'denied',
        });
      }
    };

    // Configurar consentimiento inicial
    if (checkConsent()) {
      updateConsent(true);
    } else {
      // Si no hay consentimiento, deshabilitar por defecto (modo de consentimiento)
      if (window.gtag) {
        window.gtag('consent', 'default', {
          analytics_storage: 'denied',
        });
      }
    }

    // Escuchar cambios en el consentimiento
    const handleConsentChange = (e: CustomEvent) => {
      if (e.detail === 'accepted') {
        updateConsent(true);
      } else if (e.detail === 'rejected') {
        updateConsent(false);
      }
    };

    window.addEventListener('cookie-consent', handleConsentChange as EventListener);

    return () => {
      window.removeEventListener('cookie-consent', handleConsentChange as EventListener);
    };
  }, []);

  // Este componente no renderiza nada, solo controla el consentimiento
  // El código base de gtag.js ya está en layout.tsx
  return null;
}
