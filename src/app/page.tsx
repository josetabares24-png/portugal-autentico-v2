import Image from 'next/image';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Guías de Lisboa Creadas por Locales | Estaba en Lisboa',
  description: 'Descubre Lisboa con guías digitales auténticas desde 3.99€. Itinerarios verificados, restaurantes locales y spots secretos.',
};

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background-light">
      {/* HERO SECTION - PROPUESTA DE VALOR */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1548707309-dcebeab9ea9b?w=1920&q=80"
            alt="Lisboa"
            fill
            className="object-cover scale-110"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900/70 via-slate-900/60 to-slate-900/80"></div>
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-4 py-20 text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-5 py-2.5 rounded-full text-white border border-white/20 mb-8">
            <span className="material-symbols-outlined text-yellow-400">verified</span>
            <span className="text-sm font-bold tracking-wide">GUÍAS VERIFICADAS 2026</span>
          </div>

          <h1 className="text-5xl md:text-8xl font-black leading-tight mb-6 text-white tracking-tight drop-shadow-2xl" style={{ fontFamily: 'Georgia, serif' }}>
            Descubre Lisboa<br />
            <span className="bg-gradient-to-r from-primary to-orange-500 bg-clip-text text-transparent">
              Como un Local
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto mb-12 leading-relaxed font-medium drop-shadow-lg">
            Guías digitales auténticas creadas por quien vive aquí. Itinerarios verificados, restaurantes locales y spots que no encontrarás en ningún blog turístico.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Link 
              href="#guias-destacadas" 
              className="group bg-gradient-to-r from-primary to-orange-500 hover:from-primary-dark hover:to-orange-600 text-white font-black py-5 px-10 rounded-2xl text-xl shadow-2xl hover:scale-105 transition-all flex items-center justify-center gap-2"
            >
              <span>Ver Guías Desde 3.99€</span>
              <span className="material-symbols-outlined text-2xl group-hover:translate-x-1 transition-transform">arrow_forward</span>
            </Link>
            
            <Link 
              href="/pack-completo" 
              className="bg-white/10 backdrop-blur-md hover:bg-white/20 text-white font-bold py-5 px-10 rounded-2xl text-xl border-2 border-white/30 shadow-lg transition-all flex items-center justify-center gap-2"
            >
              <span className="material-symbols-outlined text-yellow-400">local_offer</span>
              <span>Pack Completo -60%</span>
            </Link>
          </div>

          {/* TRUST BAR */}
          <div className="flex flex-wrap justify-center gap-8 text-white/80 text-sm">
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-green-400">check_circle</span>
              <span>Descarga inmediata</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-yellow-400">verified</span>
              <span>Actualizadas 2026</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-blue-400">workspace_premium</span>
              <span>Garantía 48h</span>
            </div>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <span className="material-symbols-outlined text-white text-4xl opacity-70">expand_more</span>
        </div>
      </section>

      {/* GUÍAS DESTACADAS */}
      <section id="guias-destacadas" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-bold uppercase tracking-wide mb-4">
              Más Populares
            </span>
            <h2 className="text-4xl md:text-6xl font-black text-slate-900 mb-6" style={{ fontFamily: 'Georgia, serif' }}>
              Comienza Tu Aventura
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Elige la guía perfecta según tu estilo de viaje
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-12">
            {/* GUÍA 1: Lisboa 1 Día - ENTRADA */}
            <article className="group bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all border border-slate-100">
              <div className="relative h-64">
                <Image 
                  src="https://images.unsplash.com/photo-1585208798174-6cedd86e019a?w=800" 
                  alt="Lisboa 1 Día"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 bg-green-500 text-white font-bold px-4 py-2 rounded-full text-sm shadow-lg">
                  Más Vendida
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-black text-slate-900 mb-3" style={{ fontFamily: 'Georgia, serif' }}>
                  Lisboa en 1 Día
                </h3>
                <p className="text-slate-600 mb-6 leading-relaxed">
                  Lo esencial de Lisboa: Alfama, Castillo, Belém. Perfecto para primera visita o escala.
                </p>
                <div className="flex items-center gap-4 mb-6 text-sm text-slate-500">
                  <div className="flex items-center gap-1">
                    <span className="material-symbols-outlined text-sm">schedule</span>
                    <span>1 día</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <span className="material-symbols-outlined text-sm">location_on</span>
                    <span>8 paradas</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-3xl font-black text-primary">3.99€</div>
                    <div className="text-xs text-slate-500">Precio de lanzamiento</div>
                  </div>
                  <Link 
                    href="/guias/lisboa-1-dia" 
                    className="bg-gradient-to-r from-primary to-orange-500 text-white font-bold py-3 px-6 rounded-xl hover:scale-105 transition-all shadow-lg"
                  >
                    Ver Guía
                  </Link>
                </div>
              </div>
            </article>

            {/* GUÍA 2: Lisboa Fotografía - TRENDING */}
            <article className="group bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all border-2 border-primary">
              <div className="relative h-64">
                <Image 
                  src="https://images.unsplash.com/photo-1555881400-74d7acaacd8b?w=800" 
                  alt="Lisboa Fotografía"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold px-4 py-2 rounded-full text-sm shadow-lg">
                  ⭐ Nuevo
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-black text-slate-900 mb-3" style={{ fontFamily: 'Georgia, serif' }}>
                  Lisboa Fotografía
                </h3>
                <p className="text-slate-600 mb-6 leading-relaxed">
                  50+ spots Instagram-perfect con horarios golden hour y coordenadas GPS exactas.
                </p>
                <div className="flex items-center gap-4 mb-6 text-sm text-slate-500">
                  <div className="flex items-center gap-1">
                    <span className="material-symbols-outlined text-sm">photo_camera</span>
                    <span>50+ spots</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <span className="material-symbols-outlined text-sm">wb_twilight</span>
                    <span>Golden hour</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-3xl font-black text-primary">7.99€</div>
                    <div className="text-xs text-slate-500">Para fotógrafos</div>
                  </div>
                  <Link 
                    href="/guias/lisboa-fotografia" 
                    className="bg-gradient-to-r from-primary to-orange-500 text-white font-bold py-3 px-6 rounded-xl hover:scale-105 transition-all shadow-lg"
                  >
                    Ver Guía
                  </Link>
                </div>
              </div>
            </article>

            {/* GUÍA 3: Lisboa 7 Días - PREMIUM */}
            <article className="group bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all border border-slate-100">
              <div className="relative h-64">
                <Image 
                  src="https://images.unsplash.com/photo-1526306063970-d5c223f28c89?w=800" 
                  alt="Lisboa 7 Días"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 bg-purple-600 text-white font-bold px-4 py-2 rounded-full text-sm shadow-lg">
                  Premium
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-black text-slate-900 mb-3" style={{ fontFamily: 'Georgia, serif' }}>
                  Lisboa en 7 Días
                </h3>
                <p className="text-slate-600 mb-6 leading-relaxed">
                  Experiencia completa: Lisboa + Sintra + Cascais + Óbidos. Para vacaciones completas.
                </p>
                <div className="flex items-center gap-4 mb-6 text-sm text-slate-500">
                  <div className="flex items-center gap-1">
                    <span className="material-symbols-outlined text-sm">calendar_month</span>
                    <span>7 días</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <span className="material-symbols-outlined text-sm">explore</span>
                    <span>4 excursiones</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-3xl font-black text-primary">9.99€</div>
                    <div className="text-xs text-slate-500">Más completa</div>
                  </div>
                  <Link 
                    href="/guias/lisboa-7-dias" 
                    className="bg-gradient-to-r from-primary to-orange-500 text-white font-bold py-3 px-6 rounded-xl hover:scale-105 transition-all shadow-lg"
                  >
                    Ver Guía
                  </Link>
                </div>
              </div>
            </article>
          </div>

          <div className="text-center">
            <Link 
              href="/itinerarios" 
              className="inline-flex items-center gap-2 text-primary font-bold text-lg hover:gap-3 transition-all"
            >
              <span>Ver todas las guías</span>
              <span className="material-symbols-outlined">arrow_forward</span>
            </Link>
          </div>
        </div>
      </section>

      {/* PACK COMPLETO CTA - UPSELL PROMINENTE */}
      <section className="py-20 bg-gradient-to-br from-primary to-orange-500 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-64 h-64 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto bg-white rounded-3xl p-10 md:p-16 shadow-2xl">
            <div className="text-center mb-12">
              <div className="inline-block px-4 py-2 bg-gradient-to-r from-orange-100 to-yellow-100 rounded-full mb-6">
                <span className="text-orange-700 font-black text-sm">🔥 OFERTA DE LANZAMIENTO 2026</span>
              </div>
              
              <h2 className="text-4xl md:text-6xl font-black text-slate-900 mb-6" style={{ fontFamily: 'Georgia, serif' }}>
                Pack Completo:<br />
                <span className="text-primary">Todas las Guías</span>
              </h2>
              
              <p className="text-xl text-slate-600 mb-8 max-w-2xl mx-auto">
                Lleva las 8 guías digitales + acceso web de por vida + actualizaciones gratuitas
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
                <div className="text-center">
                  <div className="text-6xl font-black text-primary">24.99€</div>
                  <div className="text-sm text-slate-500 font-semibold">Precio Pack</div>
                </div>
                <div className="text-4xl text-slate-300">→</div>
                <div className="text-center">
                  <div className="text-3xl text-slate-400 line-through">62.90€</div>
                  <div className="text-sm text-slate-500 font-semibold">Individual</div>
                </div>
              </div>

              <div className="inline-block px-6 py-3 bg-gradient-to-r from-green-100 to-emerald-100 rounded-2xl mb-10">
                <span className="text-green-800 font-black text-2xl">Ahorras 37.91€ (60%)</span>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-10">
              {[
                { title: 'Lisboa 1 Día', price: '3.99€' },
                { title: 'Lisboa 3 Días', price: '5.99€' },
                { title: 'Lisboa Pareja', price: '6.99€' },
                { title: 'Lisboa Niños', price: '6.99€' },
                { title: 'Lisboa 7 Días', price: '9.99€' },
                { title: 'Lisboa Coche', price: '7.99€' },
                { title: 'Lisboa Cultural', price: '8.99€' },
                { title: 'Lisboa Fotografía', price: '7.99€' }
              ].map((guia, idx) => (
                <div key={idx} className="flex items-center gap-3 bg-slate-50 p-4 rounded-xl">
                  <span className="material-symbols-outlined text-green-600 text-2xl">check_circle</span>
                  <div className="flex-1">
                    <p className="font-bold text-slate-900">{guia.title}</p>
                  </div>
                  <span className="text-slate-400 line-through font-semibold">{guia.price}</span>
                </div>
              ))}
            </div>

            <div className="bg-gradient-to-r from-yellow-50 to-orange-50 p-6 rounded-2xl mb-8">
              <div className="flex items-start gap-3">
                <span className="material-symbols-outlined text-yellow-600 text-3xl">emoji_events</span>
                <div>
                  <p className="font-black text-yellow-900 text-lg mb-2">BONUS Exclusivo</p>
                  <p className="text-yellow-800">Guía secreta "Lisboa como Local" solo disponible en el pack (valor 9.99€)</p>
                </div>
              </div>
            </div>

            <div className="text-center">
              <Link 
                href="/pack-completo" 
                className="group inline-flex items-center gap-3 bg-gradient-to-r from-primary to-orange-500 hover:from-primary-dark hover:to-orange-600 text-white font-black py-6 px-12 rounded-2xl text-2xl shadow-2xl hover:scale-105 transition-all"
              >
                <span className="material-symbols-outlined text-3xl">shopping_cart</span>
                <span>Comprar Pack Completo</span>
                <span className="material-symbols-outlined text-2xl group-hover:translate-x-1 transition-transform">arrow_forward</span>
              </Link>
              
              <p className="mt-4 text-sm text-slate-500">
                ✓ Descarga inmediata · ✓ Acceso de por vida · ✓ Garantía 48h
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* TODAS LAS GUÍAS - GRID COMPLETO */}
      <section className="py-20 bg-background-light">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6" style={{ fontFamily: 'Georgia, serif' }}>
              Todas Nuestras Guías
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Elige la experiencia perfecta para tu viaje a Lisboa
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {[
              { title: 'Lisboa 3 Días', price: '5.99€', icon: 'calendar_month', href: '/guias/lisboa-3-dias' },
              { title: 'Lisboa Pareja', price: '6.99€', icon: 'favorite', href: '/guias/lisboa-pareja' },
              { title: 'Lisboa Niños', price: '6.99€', icon: 'family_restroom', href: '/guias/lisboa-ninos' },
              { title: 'Lisboa Coche', price: '7.99€', icon: 'directions_car', href: '/guias/lisboa-coche' },
              { title: 'Lisboa Cultural', price: '8.99€', icon: 'museum', href: '/guias/lisboa-cultural' }
            ].map((guia, idx) => (
              <Link 
                key={idx}
                href={guia.href}
                className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all border border-slate-100 hover:border-primary"
              >
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <span className="material-symbols-outlined text-primary text-3xl">{guia.icon}</span>
                </div>
                <h3 className="text-xl font-black text-slate-900 mb-2">{guia.title}</h3>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-black text-primary">{guia.price}</span>
                  <span className="material-symbols-outlined text-slate-400 group-hover:text-primary group-hover:translate-x-1 transition-all">arrow_forward</span>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link 
              href="/itinerarios" 
              className="inline-flex items-center gap-2 bg-white text-primary font-bold py-4 px-8 rounded-xl shadow-lg hover:shadow-xl transition-all border-2 border-primary"
            >
              <span>Ver Todas las Guías</span>
              <span className="material-symbols-outlined">apps</span>
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ SECTION - OBJECIONES */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-black text-center text-slate-900 mb-12" style={{ fontFamily: 'Georgia, serif' }}>
              Preguntas Frecuentes
            </h2>
            
            <div className="space-y-6">
              {[
                {
                  q: '¿Son guías en PDF descargables?',
                  a: 'Sí, recibes el PDF por email inmediatamente después de la compra. Además, tienes acceso web ilimitado para consultarlas online.'
                },
                {
                  q: '¿Se actualizan las guías?',
                  a: 'Sí, todas las guías se actualizan regularmente con nuevos restaurantes, horarios y precios. Las actualizaciones son gratuitas de por vida.'
                },
                {
                  q: '¿Hay garantía de reembolso?',
                  a: 'Sí, tienes 48 horas para solicitar reembolso completo si no estás satisfecho, sin preguntas.'
                },
                {
                  q: '¿Las guías funcionan offline?',
                  a: 'Sí, el PDF incluye mapas descargables que funcionan sin internet. Perfecto para no gastar datos en el extranjero.'
                },
                {
                  q: '¿Quién crea las guías?',
                  a: 'Las guías las creo yo, José, que vivo en Lisboa desde hace años. Todo el contenido está basado en mi experiencia real como local.'
                }
              ].map((faq, idx) => (
                <details key={idx} className="group bg-slate-50 rounded-2xl p-6 cursor-pointer hover:bg-slate-100 transition-colors">
                  <summary className="flex items-center justify-between font-bold text-slate-900 text-lg list-none">
                    <span>{faq.q}</span>
                    <span className="material-symbols-outlined text-primary group-open:rotate-180 transition-transform">expand_more</span>
                  </summary>
                  <p className="mt-4 text-slate-600 leading-relaxed">{faq.a}</p>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
