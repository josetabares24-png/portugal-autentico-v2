'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function StickyCTA() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Mostrar después de scroll 800px (50vh aproximadamente)
      setShow(window.scrollY > 800);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!show) return null;

  return (
    <div
      className="fixed bottom-0 left-0 right-0 bg-gradient-to-r from-[#FF6B35] to-[#F7931E] py-4 px-6 z-50 shadow-2xl transform transition-transform duration-300 ease-out"
      style={{
        animation: 'slideUp 0.4s ease-out'
      }}
    >
      <div className="container mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="text-center sm:text-left">
          <p className="text-white font-black text-lg sm:text-xl">¿Listo para explorar Lisboa sin turistadas?</p>
          <p className="text-white/90 text-sm sm:text-base font-medium">Desde €3.99 · Garantía 48h · 500+ viajeros satisfechos</p>
        </div>
        <Link
          href="#itinerarios"
          className="bg-black hover:bg-gray-900 text-orange-400 font-black px-8 py-4 rounded-full transition-all hover:scale-105 shadow-2xl whitespace-nowrap border-2 border-orange-400/50 flex items-center gap-2"
          aria-label="Ver guías de Lisboa desde €3.99"
        >
          <span>Ver Guías</span>
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
