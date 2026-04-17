'use client';

import Link from 'next/link';
import { isFreeAccessActive } from '@/lib/guide-config';

export default function PackCompletoPage() {
  const isFree = isFreeAccessActive();

  const guias = [
    { title: 'Lisboa en 1 Día: Lo Esencial', price: '3.99€', desc: '8 paradas · Alfama, Castillo, Belém' },
    { title: 'Lisboa en 3 Días: Completa', price: '5.99€', desc: '3 días completos · Incluye Sintra' },
    { title: 'Lisboa en Pareja: Romance', price: '6.99€', desc: 'Miradores · Cenas · Rincones secretos' },
    { title: 'Lisboa con Niños: Familiar', price: '6.99€', desc: 'Actividades kid-friendly · Restaurantes' },
    { title: 'Lisboa en 7 Días: Inmersiva', price: '9.99€', desc: 'Semana completa · 4 excursiones' },
    { title: 'Lisboa en Coche: Road Trip', price: '7.99€', desc: 'Rutas optimizadas · Parking · GPS' },
    { title: 'Lisboa Cultural: Arte', price: '8.99€', desc: 'Museos · Galerías · Patrimonio' },
    { title: 'Lisboa Fotografía: Instagram', price: '7.99€', desc: '50+ spots · Golden hour · GPS' },
  ];

  return (
    <main id="main-content">
      {/* Hero */}
      <section className="bg-[#1a2b4a] py-20">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <p className="text-white/50 text-xs uppercase tracking-widest mb-3">
            {isFree ? 'Acceso gratuito 2026' : 'Oferta de lanzamiento 2026'}
          </p>
          <h1 className="font-display italic text-white text-4xl md:text-5xl leading-tight mb-4">
            Pack Completo Lisboa
          </h1>
          <p className="text-white/70 text-sm mb-10">
            8 guías + bonus exclusivo · Todo lo que necesitas para descubrir Lisboa como un local.
          </p>

          {isFree ? (
            <>
              <p className="text-3xl font-bold text-white mb-2">Acceso 100% gratuito</p>
              <p className="text-white/60 text-sm mb-8">Acceso completo · Sin registro · Actualizadas 2026</p>
              <Link
                href="/itinerarios"
                className="inline-block px-10 py-4 bg-primary hover:bg-primary-dark text-white font-semibold transition-colors"
              >
                Ver todas las guías →
              </Link>
            </>
          ) : (
            <>
              <div className="flex items-baseline justify-center gap-4 mb-2">
                <span className="text-5xl font-bold text-white">24.99€</span>
                <span className="text-2xl text-white/40 line-through">62.90€</span>
              </div>
              <p className="text-white/60 text-sm mb-8">Ahorras 60% · Pago único · Acceso de por vida</p>
              <button
                onClick={() => alert('Aquí se abrirá Stripe checkout')}
                className="inline-block px-10 py-4 bg-primary hover:bg-primary-dark text-white font-semibold transition-colors"
              >
                Comprar ahora
              </button>
              <p className="text-white/50 text-xs mt-4">Descarga inmediata · Garantía 48h · Pago seguro con Stripe</p>
            </>
          )}
        </div>
      </section>

      {/* Qué incluye */}
      <section className="bg-background-light py-20">
        <div className="max-w-5xl mx-auto px-6">
          <p className="text-xs uppercase tracking-widest text-text-secondary mb-8 pb-3 border-b border-border-soft">
            Qué incluye el pack
          </p>
          <div className="divide-y divide-border-soft">
            {guias.map((guia) => (
              <div key={guia.title} className="py-5 flex items-start justify-between gap-4">
                <div>
                  <h3 className="font-semibold text-text-main text-sm mb-0.5">{guia.title}</h3>
                  <p className="text-text-secondary text-xs">{guia.desc}</p>
                </div>
                <div className="text-right flex-shrink-0">
                  <p className="text-text-secondary line-through text-sm">{guia.price}</p>
                  <p className="text-primary text-xs font-semibold">Incluida</p>
                </div>
              </div>
            ))}
          </div>

          {/* Bonus */}
          <div className="border-t-2 border-primary pt-6 mt-8">
            <p className="text-xs uppercase tracking-widest text-primary font-semibold mb-2">Bonus exclusivo</p>
            <h3 className="font-display italic text-text-main text-xl mb-2">Guía secreta "Lisboa como Local"</h3>
            <p className="text-text-secondary text-sm leading-relaxed">
              Restaurantes no turísticos, bares de barrio, mercados tradicionales y consejos que solo un local puede darte. Solo disponible en el pack. (Valor 9.99€)
            </p>
          </div>
        </div>
      </section>

      {/* Comparativa */}
      <section className="bg-background-light py-16 border-t border-border-soft">
        <div className="max-w-5xl mx-auto px-6">
          <p className="text-xs uppercase tracking-widest text-text-secondary mb-8 pb-3 border-b border-border-soft">
            ¿Por qué el pack?
          </p>
          <div className="grid md:grid-cols-2 gap-10">
            <div className="border-t border-border-soft pt-6">
              <p className="text-xs uppercase tracking-widest text-text-secondary mb-2">Compra individual</p>
              <p className="text-3xl font-bold text-text-secondary mb-4">62.90€</p>
              <div className="space-y-2">
                {['Pagas precio completo por cada guía', 'Sin bonus exclusivo', 'Múltiples transacciones', 'Mismo contenido'].map((item) => (
                  <div key={item} className="flex items-start gap-2 text-sm text-text-secondary">
                    <span className="text-text-secondary mt-0.5 flex-shrink-0">&#8722;</span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="border-t-2 border-primary pt-6">
              <p className="text-xs uppercase tracking-widest text-primary font-semibold mb-2">Pack completo</p>
              <p className="text-3xl font-bold text-text-main mb-1">24.99€</p>
              <p className="text-xs text-primary font-semibold mb-4">Ahorras 60%</p>
              <div className="space-y-2">
                {['Todas las 8 guías incluidas', 'Bonus "Lisboa como Local"', 'Compra única', 'Actualizaciones de por vida'].map((item) => (
                  <div key={item} className="flex items-start gap-2 text-sm text-text-secondary">
                    <span className="text-primary mt-0.5 flex-shrink-0">&#10003;</span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Por qué confiar */}
      <section className="bg-background-light py-16 border-t border-border-soft">
        <div className="max-w-5xl mx-auto px-6">
          <p className="text-xs uppercase tracking-widest text-text-secondary mb-8 pb-3 border-b border-border-soft">
            Por qué confiar en nuestras guías
          </p>
          <div className="grid sm:grid-cols-3 gap-8">
            {[
              { titulo: 'Verificadas 2026', desc: 'Todas las guías actualizadas con horarios, precios y restaurantes vigentes.' },
              { titulo: 'Experiencia real', desc: 'Cada recomendación está probada personalmente, no copiada de internet.' },
              { titulo: 'Actualizaciones gratis', desc: 'Cuando algo cambia, recibes la versión actualizada sin coste adicional.' },
            ].map((item) => (
              <div key={item.titulo} className="border-t-2 border-primary pt-5">
                <h3 className="font-semibold text-text-main text-sm mb-1">{item.titulo}</h3>
                <p className="text-text-secondary text-xs leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA final */}
      <section className="bg-[#1a2b4a] py-16">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <p className="font-display italic text-white text-3xl mb-4">Comienza tu aventura en Lisboa</p>

          {isFree ? (
            <>
              <p className="text-white/60 text-sm mb-8">Acceso completo · Sin registro · Actualizadas 2026</p>
              <Link
                href="/itinerarios"
                className="inline-block px-10 py-4 bg-primary hover:bg-primary-dark text-white font-semibold transition-colors"
              >
                Ver guías gratis →
              </Link>
            </>
          ) : (
            <>
              <p className="text-white/60 text-sm mb-8">Descarga inmediata · Garantía 48h · Acceso de por vida</p>
              <button
                onClick={() => alert('Aquí se abrirá Stripe checkout')}
                className="inline-block px-10 py-4 bg-primary hover:bg-primary-dark text-white font-semibold transition-colors"
              >
                Comprar pack por 24.99€
              </button>
            </>
          )}
        </div>
      </section>
    </main>
  );
}
