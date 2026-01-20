'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function StickyCTA() {
  const [show, setShow] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    const wasDismissed = localStorage.getItem('stickyCTADismissed');
    if (wasDismissed) {
      setDismissed(true);
    }

    const handleScroll = () => {
      setShow(window.scrollY > 800);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleDismiss = () => {
    setDismissed(true);
    localStorage.setItem('stickyCTADismissed', 'true');
  };

  if (!show || dismissed) return null;

  return (
    <div
      className="fixed bottom-0 left-0 right-0 bg-gradient-to-r from-[#FF6B35] to-[#F7931E] py-4 px-6 z-50 shadow-2xl transform transition-transform duration-300 ease-out"
      style={{
        animation: 'slideUp 0.4s ease-out'
      }}
    >
      <div className="container mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 relative">
        {/* Botón cerrar (X) */}
        <button
          onClick={handleDismiss}
          className="absolute -top-2 right-0 sm:top-0 sm:right-0 text-white/80 hover:text-white transition-colors text-2xl font-bold w-8 h-8 flex items-center justify-center hover:bg-white/10 rounded-full"
          aria-label="Cerrar banner"
        >
          ✕
        </button>

        <div className="text-center sm:text-left pr-8">
          <p className="text-white font-black text-lg sm:text-xl">¿Listo para explorar Lisboa como un local?</p>
          <p className="text-white/90 text-sm sm:text-base font-medium">Guías completas gratuitas · Actualizado 2025 · Mapas interactivos</p>
        </div>
        <Link
          href="/itinerarios"
          className="bg-primary hover:bg-primary-dark text-white font-semibold px-8 py-4 rounded-xl transition-all hover:scale-105 shadow-lg hover:shadow-xl whitespace-nowrap flex items-center gap-2"
          aria-label="Ver guías gratuitas de Lisboa"
        >
          <span>Ver Guías Gratis</span>
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </Link>
      </div>

      <style jsx>{`
        @keyframes slideUp {
          from {
            transform: translateY(100%);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }
      `}</style>
    </div>
  );
}
