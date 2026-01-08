import Image from 'next/image';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Pack Completo: 8 Guías de Lisboa por 24.99€ (Ahorra 60%) | Estaba en Lisboa',
  description: 'Lleva todas las guías de Lisboa en un solo pack. 8 guías digitales + bonus + actualizaciones de por vida. Ahorra 37.91€.',
};

export default function PackCompletoPage() {
  return (
    <div className="min-h-screen bg-background-light">
      {/* HERO */}
      <section className="relative py-20 bg-gradient-to-br from-primary to-orange-500 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-96 h-96 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center text-white">
            <div className="inline-block px-6 py-3 bg-white/20 backdrop-blur-md rounded-full mb-8">
              <span className="font-black text-sm tracking-wide">🔥 OFERTA DE LANZAMIENTO 2026</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight" style={{ fontFamily: 'Georgia, serif' }}>
              Pack Completo Lisboa<br />
              <span className="text-yellow-300">8 Guías + Bonus</span>
            </h1>

            <p className="text-xl md:text-2xl mb-12 text-white/90 leading-relaxed">
              Todo lo que necesitas para descubrir Lisboa como un local.<br />
              Acceso de por vida + actualizaciones gratuitas.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-8">
              <div className="text-center">
                <div className="text-7xl font-black">24.99€</div>
                <div className="text-sm font-bold text-white/80">Precio Pack</div>
              </div>
              <div className="text-5xl opacity-50">→</div>
              <div className="text-center">
                <div className="text-4xl line-through opacity-70">62.90€</div>
                <div className="text-sm font-bold text-white/80">Precio Individual</div>
              </div>
            </div>

            <div className="inline-block px-8 py-4 bg-green-500 rounded-2xl mb-10 shadow-2xl">
              <span className="text-white font-black text-3xl">Ahorras 37.91€ (60%)</span>
            </div>

            <button 
              onClick={() => alert('Aquí se abrirá Stripe checkout')} 
              className="group bg-white text-primary hover:bg-gray-50 font-black py-6 px-12 rounded-2xl text-2xl shadow-2xl hover:scale-105 transition-all inline-flex items-center gap-3"
            >
              <span className="material-symbols-outlined text-3xl">shopping_cart</span>
              <span>Comprar Ahora</span>
              <span className="material-symbols-outlined text-2xl group-hover:translate-x-1 transition-transform">arrow_forward</span>
            </button>

            <p className="mt-6 text-white/80 text-sm">
              ✓ Descarga inmediata · ✓ Garantía 48h · ✓ Pago seguro con Stripe
            </p>
          </div>
        </div>
      </section>

      {/* QUÉ INCLUYE */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-black text-center text-slate-900 mb-16" style={{ fontFamily: 'Georgia, serif' }}>
              Qué Incluye el Pack
            </h2>

            <div className="grid md:grid-cols-2 gap-6 mb-12">
              {[
                { 
                  title: 'Lisboa en 1 Día: Lo Esencial',
                  price: '3.99€',
                  desc: '8 paradas · Alfama, Castillo, Belém',
                  icon: 'calendar_today'
                },
                {
                  title: 'Lisboa en 3 Días: Completa',
                  price: '5.99€',
                  desc: '3 días completos · Incluye Sintra',
                  icon: 'calendar_month'
                },
                {
                  title: 'Lisboa en Pareja: Romance',
                  price: '6.99€',
                  desc: 'Miradores · Cenas · Rincones secretos',
                  icon: 'favorite'
                },
                {
                  title: 'Lisboa con Niños: Familiar',
                  price: '6.99€',
                  desc: 'Actividades kid-friendly · Restaurantes',
                  icon: 'family_restroom'
                },
                {
                  title: 'Lisboa en 7 Días: Inmersiva',
                  price: '9.99€',
                  desc: 'Semana completa · 4 excursiones',
                  icon: 'explore'
                },
                {
                  title: 'Lisboa en Coche: Road Trip',
                  price: '7.99€',
                  desc: 'Rutas optimizadas · Parking · GPS',
                  icon: 'directions_car'
                },
                {
                  title: 'Lisboa Cultural: Arte',
                  price: '8.99€',
                  desc: 'Museos · Galerías · Patrimonio',
                  icon: 'museum'
                },
                {
                  title: 'Lisboa Fotografía: Instagram',
                  price: '7.99€',
                  desc: '50+ spots · Golden hour · GPS',
                  icon: 'photo_camera'
                }
              ].map((guia, idx) => (
                <div key={idx} className="group bg-slate-50 hover:bg-gradient-to-r hover:from-primary/5 hover:to-orange-500/5 p-6 rounded-2xl border-2 border-slate-100 hover:border-primary transition-all">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <span className="material-symbols-outlined text-primary text-2xl">{guia.icon}</span>
                    </div>
                    <div className="flex-1">
                      <h3 className="font-black text-slate-900 text-lg mb-1">{guia.title}</h3>
                      <p className="text-slate-600 text-sm mb-2">{guia.desc}</p>
                    </div>
                    <div className="text-right">
                      <div className="text-slate-400 line-through font-bold text-lg">{guia.price}</div>
                      <div className="text-green-600 font-bold text-xs">Incluida</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* BONUS */}
            <div className="bg-gradient-to-r from-yellow-50 to-orange-50 border-2 border-yellow-200 rounded-3xl p-8">
              <div className="flex items-start gap-4">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-yellow-400 to-orange-500 flex items-center justify-center flex-shrink-0">
                  <span className="material-symbols-outlined text-white text-4xl">emoji_events</span>
                </div>
                <div>
                  <h3 className="text-2xl font-black text-slate-900 mb-2">BONUS Exclusivo</h3>
                  <p className="text-lg text-slate-700 mb-3">
                    Guía secreta <strong>"Lisboa como Local"</strong> (valor 9.99€)
                  </p>
                  <p className="text-slate-600">
                    Restaurantes no turísticos, bares de barrio, mercados tradicionales y consejos que solo un local puede darte. Solo disponible en el pack.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* COMPARATIVA */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-black text-center text-slate-900 mb-12" style={{ fontFamily: 'Georgia, serif' }}>
              ¿Por Qué el Pack?
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              {/* Compra Individual */}
              <div className="bg-white rounded-3xl p-8 shadow-lg">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-black text-slate-900 mb-2">Compra Individual</h3>
                  <div className="text-4xl font-black text-slate-400">62.90€</div>
                </div>
                <ul className="space-y-4">
                  {[
                    'Pagas precio completo por cada guía',
                    'Sin bonus exclusivo',
                    'Múltiples transacciones',
                    'Mismo contenido'
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <span className="material-symbols-outlined text-slate-300 flex-shrink-0">remove</span>
                      <span className="text-slate-600">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Pack Completo */}
              <div className="bg-gradient-to-br from-primary to-orange-500 rounded-3xl p-8 shadow-2xl relative overflow-hidden">
                <div className="absolute top-4 right-4 bg-yellow-400 text-slate-900 font-black px-4 py-2 rounded-full text-sm">
                  RECOMENDADO
                </div>
                <div className="text-center mb-6 relative z-10">
                  <h3 className="text-2xl font-black text-white mb-2">Pack Completo</h3>
                  <div className="text-5xl font-black text-white">24.99€</div>
                  <div className="text-white/80 text-sm font-bold mt-1">Ahorras 60%</div>
                </div>
                <ul className="space-y-4 relative z-10">
                  {[
                    'Todas las 8 guías incluidas',
                    'Bonus "Lisboa como Local"',
                    'Compra única',
                    'Actualizaciones de por vida'
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <span className="material-symbols-outlined text-yellow-300 flex-shrink-0">check_circle</span>
                      <span className="text-white font-medium">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS (futuro) */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-4xl font-black text-slate-900 mb-4" style={{ fontFamily: 'Georgia, serif' }}>
              ¿Por Qué Confiar en Nuestras Guías?
            </h2>
            <p className="text-xl text-slate-600 mb-12">
              Creadas por quien vive en Lisboa, no por una agencia de marketing
            </p>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: 'verified',
                  title: 'Verificadas 2026',
                  desc: 'Todas las guías actualizadas con horarios, precios y restaurantes vigentes'
                },
                {
                  icon: 'place',
                  title: 'Experiencia Real',
                  desc: 'Cada recomendación está probada personalmente, no copiada de internet'
                },
                {
                  icon: 'update',
                  title: 'Actualizaciones Gratis',
                  desc: 'Cuando algo cambia, recibes la versión actualizada sin coste adicional'
                }
              ].map((item, idx) => (
                <div key={idx} className="text-center">
                  <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <span className="material-symbols-outlined text-primary text-4xl">{item.icon}</span>
                  </div>
                  <h3 className="font-black text-xl text-slate-900 mb-2">{item.title}</h3>
                  <p className="text-slate-600">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="py-20 bg-gradient-to-br from-slate-900 to-slate-800">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h2 className="text-4xl md:text-5xl font-black mb-6" style={{ fontFamily: 'Georgia, serif' }}>
              Comienza Tu Aventura en Lisboa
            </h2>
            <p className="text-xl mb-8 text-white/80">
              Descarga inmediata · Garantía 48h · Acceso de por vida
            </p>

            <button 
              onClick={() => alert('Aquí se abrirá Stripe checkout')} 
              className="group bg-gradient-to-r from-primary to-orange-500 hover:from-primary-dark hover:to-orange-600 text-white font-black py-6 px-12 rounded-2xl text-2xl shadow-2xl hover:scale-105 transition-all inline-flex items-center gap-3 mb-6"
            >
              <span className="material-symbols-outlined text-3xl">shopping_cart</span>
              <span>Comprar Pack por 24.99€</span>
              <span className="material-symbols-outlined text-2xl group-hover:translate-x-1 transition-transform">arrow_forward</span>
            </button>

            <div className="flex items-center justify-center gap-8 text-sm text-white/60">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-green-400">verified_user</span>
                <span>Pago 100% seguro</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-blue-400">flash_on</span>
                <span>Acceso inmediato</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-yellow-400">all_inclusive</span>
                <span>Para siempre</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
