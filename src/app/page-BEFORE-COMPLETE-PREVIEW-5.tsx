'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function Home() {
  const [showStickyBar, setShowStickyBar] = useState(false);
  const [showExitModal, setShowExitModal] = useState(false);
  const [emailSubmitted, setEmailSubmitted] = useState(false);
  const [exitModalShown, setExitModalShown] = useState(false);

  useEffect(() => {
    // Sticky bar on scroll
    const handleScroll = () => {
      setShowStickyBar(window.scrollY > 300);
    };

    // Exit intent detection
    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY < 10 && !exitModalShown && !emailSubmitted) {
        setShowExitModal(true);
        setExitModalShown(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [exitModalShown, emailSubmitted]);

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aquí integrarías con tu backend/email service
    setEmailSubmitted(true);
    setTimeout(() => setShowExitModal(false), 2000);
  };

  return (
    <main className="min-h-screen bg-[#FFFDF7] pb-32">
      
      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          HERO - Diseño humano existente
      ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1588668214407-6ea9a6d8c272?q=80&w=2400"
            alt="Lisboa"
            fill
            className="object-cover"
            priority
            quality={90}
          />
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900/80 via-slate-800/70 to-orange-900/40"></div>
        </div>

        <div className="absolute top-20 right-10 w-64 h-64 bg-orange-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-orange-400/5 rounded-full blur-3xl"></div>

        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          
          <div className="inline-flex items-center gap-2 bg-orange-50/10 backdrop-blur-md border-2 border-orange-400/30 rounded-full px-5 py-2.5 mb-10 shadow-lg">
            <svg className="w-4 h-4 text-orange-400" viewBox="0 0 24 24" fill="currentColor">
              <circle cx="12" cy="12" r="3">
                <animate attributeName="r" values="3;5;3" dur="2s" repeatCount="indefinite" />
                <animate attributeName="opacity" values="1;0.5;1" dur="2s" repeatCount="indefinite" />
              </circle>
            </svg>
            <span className="text-sm font-bold text-orange-100 tracking-wide">Actualizado Enero 2025</span>
          </div>

          <div className="text-center max-w-4xl mx-auto">
            <h1 className="mb-8">
              <span className="block text-5xl sm:text-6xl lg:text-7xl font-black text-white leading-[1.1] mb-3" style={{ fontFamily: 'Georgia, serif' }}>
                Descubre Lisboa
              </span>
              <span className="block text-5xl sm:text-6xl lg:text-7xl font-black leading-[1.1]" style={{ 
                background: 'linear-gradient(135deg, #FF6B35 0%, #F7931E 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}>
                Como un Local
              </span>
            </h1>

            <div className="relative inline-block mb-12">
              <svg className="absolute -bottom-2 left-0 w-full h-3 opacity-50" viewBox="0 0 300 12" fill="none">
                <path d="M2 6 Q 75 10, 150 6 T 298 6" stroke="#FF6B35" strokeWidth="3" strokeLinecap="round" />
              </svg>
              
              <p className="text-xl sm:text-2xl lg:text-3xl text-gray-200 leading-relaxed px-6">
                Itinerarios verificados por quien vive aquí desde hace 10 años.<br className="hidden sm:block" />
                <span className="text-white font-semibold">Sin perder tiempo. Sin colas. Sin turistadas.</span>
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-5 mb-14">
              <Link
                href="#itinerarios"
                className="group relative w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-gradient-to-r from-[#FF6B35] to-[#F7931E] text-white font-bold px-10 py-5 rounded-2xl shadow-2xl hover:shadow-orange-500/50 transition-all overflow-hidden"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-700"></span>
                <span className="relative text-lg">Ver Itinerarios</span>
                <svg className="relative w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              
              <Link
                href="#como-funciona"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur-md border-2 border-white/30 text-white font-semibold px-10 py-5 rounded-2xl transition-all"
              >
                <span>¿Cómo funciona?</span>
              </Link>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-8 text-sm">
              <div className="flex items-center gap-3 bg-white/5 backdrop-blur-sm px-5 py-3 rounded-full border border-white/10">
                <svg className="w-5 h-5 text-orange-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <span className="font-semibold text-gray-200">500+ viajeros</span>
              </div>
              <div className="flex items-center gap-3 bg-white/5 backdrop-blur-sm px-5 py-3 rounded-full border border-white/10">
                <svg className="w-5 h-5 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
                <span className="font-semibold text-gray-200">Garantía 48h</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          CONTENIDO EXISTENTE (simplificado para demo)
      ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="py-24 bg-white" id="itinerarios">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-black mb-6" style={{ fontFamily: 'Georgia, serif' }}>Elige tu experiencia</h2>
          <p className="text-xl text-gray-600 mb-16">Desde €3.99 · Acceso perpetuo · Garantía 48h</p>
          
          {/* Aquí irían tus cards de productos existentes */}
          <div className="max-w-4xl mx-auto bg-gradient-to-br from-orange-50 to-white border-2 border-orange-200 rounded-3xl p-12">
            <p className="text-gray-700 text-lg leading-relaxed">
              [Aquí van tus cards de productos actuales del diseño V2.0]<br/>
              Lisboa 1 Día · Lisboa 2 Días · Lisboa 3 Días · Pack Completo
            </p>
          </div>
        </div>
      </section>

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          STICKY CTA BOTTOM - Preview 5
      ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <div className={`
        fixed bottom-0 left-0 right-0 z-50
        bg-gradient-to-t from-black/95 to-black/90 backdrop-blur-xl
        border-t-2 border-orange-500/30
        shadow-[0_-10px_40px_rgba(0,0,0,0.5)]
        transition-transform duration-500
        ${showStickyBar ? 'translate-y-0' : 'translate-y-full'}
      `}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 py-5">
            
            <div className="text-center sm:text-left">
              <h4 className="text-xl font-black text-white mb-1">
                ¿Listo para explorar Lisboa sin turistadas?
              </h4>
              <p className="text-sm text-gray-300">
                Descarga tu guía verificada 2025 · Desde €3.99 · Garantía 48h
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
              <Link
                href="#itinerarios"
                className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#FF6B35] to-[#F7931E] text-white font-black px-8 py-4 rounded-xl transition-all hover:scale-105 shadow-xl hover:shadow-orange-500/50 whitespace-nowrap"
              >
                <span>Ver guías</span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              
              <button
                onClick={() => setShowExitModal(true)}
                className="inline-flex items-center justify-center gap-2 bg-transparent border-2 border-white text-white font-bold px-8 py-4 rounded-xl transition-all hover:bg-white hover:text-black whitespace-nowrap"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                <span>15 tips gratis</span>
              </button>
            </div>

          </div>
        </div>
      </div>

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          FLOATING WHATSAPP - Preview 5
      ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <a
        href="https://wa.me/351XXXXXXXXX?text=Hola,%20tengo%20una%20pregunta%20sobre%20las%20guías"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-28 right-6 z-40 w-16 h-16 sm:w-20 sm:h-20 bg-[#25D366] rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-all group"
        style={{ animation: 'bounce 3s infinite' }}
      >
        <svg className="w-10 h-10 sm:w-12 sm:h-12 text-white" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
        </svg>
        
        <div className="absolute right-24 top-1/2 -translate-y-1/2 bg-white text-black px-4 py-2 rounded-xl font-bold text-sm shadow-xl opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
          ¿Dudas? Pregúntame
        </div>
      </a>

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          EXIT INTENT MODAL - Preview 5
      ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      {showExitModal && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn"
          onClick={() => setShowExitModal(false)}
        >
          <div 
            className="bg-white rounded-3xl max-w-2xl w-full p-8 sm:p-12 relative shadow-2xl animate-scaleIn"
            onClick={(e) => e.stopPropagation()}
          >
            
            <button
              onClick={() => setShowExitModal(false)}
              className="absolute top-6 right-6 w-12 h-12 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center text-gray-600 hover:text-black transition-all hover:rotate-90"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {emailSubmitted ? (
              <div className="text-center py-12">
                <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-12 h-12 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-3xl font-black text-gray-900 mb-4" style={{ fontFamily: 'Georgia, serif' }}>
                  ¡Perfecto! 🎉
                </h3>
                <p className="text-lg text-gray-600">
                  Te acabamos de enviar los <strong>15 tips gratis</strong> a tu email.<br/>
                  Revisa tu bandeja de entrada (y spam por si acaso).
                </p>
              </div>
            ) : (
              <>
                <div className="w-20 h-20 sm:w-24 sm:h-24 bg-gradient-to-br from-[#FF6B35] to-[#F7931E] rounded-full flex items-center justify-center mx-auto mb-6 text-5xl sm:text-6xl">
                  🎁
                </div>

                <h3 className="text-3xl sm:text-4xl font-black text-gray-900 mb-4 text-center" style={{ fontFamily: 'Georgia, serif' }}>
                  Espera, no te vayas aún
                </h3>

                <p className="text-lg text-gray-600 text-center mb-8 leading-relaxed">
                  <strong className="text-gray-900">Llévate GRATIS mi PDF "15 Consejos que Solo los Locales Conocen"</strong><br/>
                  Tips que no encontrarás en ningún blog turístico
                </p>

                <form onSubmit={handleEmailSubmit} className="flex flex-col sm:flex-row gap-3 mb-8">
                  <input
                    type="email"
                    placeholder="tu@email.com"
                    required
                    className="flex-1 px-6 py-4 border-2 border-gray-300 rounded-xl text-lg focus:outline-none focus:border-orange-500 transition-colors"
                  />
                  <button
                    type="submit"
                    className="bg-gradient-to-r from-[#FF6B35] to-[#F7931E] text-white font-black px-8 py-4 rounded-xl hover:scale-105 transition-all shadow-xl hover:shadow-orange-500/50 whitespace-nowrap"
                  >
                    Enviar PDF
                  </button>
                </form>

                <ul className="space-y-3 mb-8">
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">Los 3 miradores secretos sin turistas</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">Restaurantes auténticos (€10-15 por persona)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">Las 2 trampas turísticas MÁS caras a evitar</span>
                  </li>
                </ul>

                <p className="text-center text-sm text-gray-500">
                  Sin spam. Solo tips útiles. Puedes darte de baja cuando quieras.
                </p>
              </>
            )}

          </div>
        </div>
      )}

      {/* Animations CSS */}
      <style jsx>{`
        @keyframes bounce {
          0%, 20%, 50%, 80%, 100% { transform: translateY(0); }
          40% { transform: translateY(-10px); }
          60% { transform: translateY(-5px); }
        }
        
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        @keyframes scaleIn {
          from { transform: scale(0.9); opacity: 0; }
          to { transform: scale(1); opacity: 1; }
        }
        
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
        
        .animate-scaleIn {
          animation: scaleIn 0.3s ease-out;
        }
      `}</style>

    </main>
  );
}
