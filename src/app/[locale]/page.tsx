import Link from 'next/link';
import Image from 'next/image';
import dynamic from 'next/dynamic';
import type { Metadata } from 'next';
import { ItineraryCard } from '@/components/itinerarios/ItineraryCard';
import { mainItineraries } from '@/data/itineraries';

const QuizCTA = dynamic(() => import('@/components/QuizCTA'));

export const metadata: Metadata = {
  title: 'Guías de Lisboa 2026 por Locales | Itinerarios Verificados',
  description: 'Descubre Lisboa como un local. Itinerarios hora a hora, restaurantes auténticos, miradores secretos y mapas GPS. Guías creadas por quien vive aquí. Alfama, Belém, tranvía 28.',
  openGraph: {
    title: 'Guías de Lisboa 2026 por Locales',
    description: 'Itinerarios verificados con horarios exactos. Qué ver en Lisboa, Alfama, Belém. Sin trampas turísticas.',
    url: 'https://estabaenlisboa.com',
    images: [{ url: 'https://estabaenlisboa.com/images/hero-lisboa.jpg', width: 1200, height: 630, alt: 'Guías de Lisboa' }],
  },
  alternates: { canonical: 'https://estabaenlisboa.com' },
};

export default function HomePage() {
  return (
    <main id="main-content" className="bg-background-light">
      {/* ─── HERO ─── */}
      <section className="relative min-h-[90vh] flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/fabio-vilhena-2FIcT5nHlLo-unsplash.jpg"
            alt="Vista de Lisboa desde un mirador"
            fill
            className="object-cover"
            priority
            fetchPriority="high"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
        </div>

        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 pb-20 pt-40">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full text-white/90 border border-white/20 mb-8 text-sm">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              Actualizado febrero 2026
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-display font-black leading-[1.05] mb-6 text-white tracking-tight">
              La Lisboa que los
              <br />
              <span className="text-accent">lisboetas se guardan</span>
            </h1>

            <p className="text-lg md:text-xl text-white/85 max-w-lg mb-10 leading-relaxed">
              Tres años viviendo aquí me enseñaron la diferencia entre visitar y vivir.
              Estas guías son lo que le diría a un amigo que viene por primera vez.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 mb-16">
              <Link
                href="#itinerarios"
                className="group inline-flex items-center justify-center gap-2.5 px-8 py-4 bg-primary hover:bg-primary-dark text-white rounded-2xl font-bold text-base shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5"
              >
                <span className="material-symbols-outlined text-xl">map</span>
                Ver las rutas
                <span className="material-symbols-outlined text-lg group-hover:translate-x-1 transition-transform">arrow_forward</span>
              </Link>
              <Link
                href="#free"
                className="inline-flex items-center justify-center gap-2.5 px-8 py-4 bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white rounded-2xl font-bold text-base border border-white/25 transition-all duration-300"
              >
                <span className="material-symbols-outlined text-xl">download</span>
                Guía gratis
              </Link>
            </div>
          </div>

          {/* Stats row */}
          <div className="flex flex-wrap gap-x-10 gap-y-4 text-white/80 text-sm border-t border-white/15 pt-8">
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-accent text-base">group</span>
              <span><strong className="text-white">+2,400</strong> viajeros</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-accent text-base">verified</span>
              <span>Verificado <strong className="text-white">cada mes</strong></span>
            </div>
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-accent text-base">workspace_premium</span>
              <span>Garantía <strong className="text-white">48h</strong></span>
            </div>
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-accent text-base">bolt</span>
              <span>Acceso <strong className="text-white">inmediato</strong></span>
            </div>
          </div>
        </div>
      </section>

      {/* ─── QUIZ CTA ─── */}
      <section className="py-14 bg-background-cream">
        <div className="max-w-5xl mx-auto px-6">
          <QuizCTA />
        </div>
      </section>

      {/* ─── SOCIAL PROOF BAR ─── */}
      <section className="py-8 bg-white border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-wrap items-center justify-center gap-6 md:gap-12">
            <div className="flex items-center gap-3">
              <div className="flex -space-x-2">
                <div className="w-8 h-8 rounded-full bg-primary/20 border-2 border-white flex items-center justify-center text-xs font-bold text-primary">M</div>
                <div className="w-8 h-8 rounded-full bg-blue-100 border-2 border-white flex items-center justify-center text-xs font-bold text-blue-600">A</div>
                <div className="w-8 h-8 rounded-full bg-emerald-100 border-2 border-white flex items-center justify-center text-xs font-bold text-emerald-600">J</div>
                <div className="w-8 h-8 rounded-full bg-amber-100 border-2 border-white flex items-center justify-center text-xs font-bold text-amber-600">C</div>
              </div>
              <span className="text-sm text-text-secondary">
                <strong className="text-text-main">+2,400</strong> viajeros la usaron
              </span>
            </div>
            <div className="hidden md:block w-px h-8 bg-slate-200" />
            <div className="flex items-center gap-1.5">
              {[...Array(5)].map((_, i) => (
                <span key={i} className="material-symbols-outlined text-amber-400 text-lg" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
              ))}
              <span className="text-sm text-text-secondary ml-1">4.9/5 de media</span>
            </div>
            <div className="hidden md:block w-px h-8 bg-slate-200" />
            <div className="flex items-center gap-2 text-sm text-text-secondary">
              <span className="material-symbols-outlined text-green-500 text-base">check_circle</span>
              100% verificado por locales
            </div>
          </div>
        </div>
      </section>

      {/* ─── FEATURED ITINERARIES ─── */}
      <section className="py-24 md:py-32 bg-background-light" id="itinerarios">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 bg-primary/8 text-primary rounded-full text-xs font-semibold uppercase tracking-widest mb-5">
              Rutas verificadas
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-black text-text-main mb-5 tracking-tight leading-tight">
              Elige tu ruta perfecta
            </h2>
            <p className="text-lg text-text-secondary max-w-lg mx-auto leading-relaxed">
              Itinerarios hora a hora con restaurantes reales, spots para fotos y mapas offline.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-14">
            {mainItineraries.map((itinerary) => (
              <ItineraryCard key={itinerary.id} {...itinerary} />
            ))}
          </div>

          <div className="text-center">
            <Link
              href="/itinerarios"
              className="group inline-flex items-center gap-2 px-8 py-3.5 bg-text-main hover:bg-primary text-white rounded-xl font-semibold text-sm transition-all duration-300 shadow-soft hover:shadow-card-hover hover:-translate-y-0.5"
            >
              Ver las 8 rutas disponibles
              <span className="material-symbols-outlined text-lg group-hover:translate-x-1 transition-transform">arrow_forward</span>
            </Link>
          </div>
        </div>
      </section>

      {/* ─── TESTIMONIALS ─── */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-5xl font-display font-black text-text-main mb-4 tracking-tight">
              Lo que dicen los viajeros
            </h2>
            <p className="text-text-secondary text-lg">Opiniones reales de quienes usaron las guías</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                name: 'Marina G.',
                from: 'Madrid',
                text: 'Llegué a Lisboa sin plan y en media hora tenía todo organizado. El mapa GPS fue lo mejor, me llevó a sitios que nunca habría encontrado sola.',
                route: 'Lisboa 2 días',
                stars: 5,
              },
              {
                name: 'Carlos R.',
                from: 'Ciudad de México',
                text: 'Lo de los horarios reales es clave. Sabíamos exactamente a qué hora ir a cada mirador para evitar la masa de turistas. Ahorramos una pasta en restaurantes.',
                route: 'Lisboa 3 días',
                stars: 5,
              },
              {
                name: 'Ana P.',
                from: 'Buenos Aires',
                text: 'Viajamos con dos niños y la guía familiar nos salvó la vida. Tiene parques, restaurantes con trona y hasta dónde cambiar pañales. Imprescindible.',
                route: 'Lisboa Familiar',
                stars: 5,
              },
            ].map((review, i) => (
              <div
                key={i}
                className="bg-background-light rounded-2xl p-8 border border-slate-100"
              >
                <div className="flex gap-0.5 mb-4">
                  {[...Array(review.stars)].map((_, j) => (
                    <span key={j} className="material-symbols-outlined text-amber-400 text-base" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                  ))}
                </div>
                <p className="text-text-main leading-relaxed mb-6">
                  &ldquo;{review.text}&rdquo;
                </p>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-bold text-text-main text-sm">{review.name}</p>
                    <p className="text-text-secondary text-xs">{review.from}</p>
                  </div>
                  <span className="text-xs font-medium text-primary bg-primary/8 px-3 py-1 rounded-full">
                    {review.route}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── WHY CHOOSE US ─── */}
      <section className="py-24 bg-background-cream">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <span className="inline-block px-4 py-1.5 bg-primary/8 text-primary rounded-full text-xs font-semibold uppercase tracking-widest mb-5">
                Por qué funciona
              </span>
              <h2 className="text-3xl md:text-4xl font-display font-black text-text-main mb-6 tracking-tight leading-tight">
                No soy turista.<br />
                <span className="text-primary">Vivo aquí.</span>
              </h2>
              <p className="text-text-secondary leading-relaxed mb-8">
                Hago la compra en el mismo supermercado, tomo café en los mismos sitios y conozco los atajos que los lisboetas usamos todos los días. Esa es la diferencia entre una guía genérica y esta.
              </p>

              <div className="space-y-5">
                {[
                  { icon: 'home', title: 'Creada por un local', desc: 'Tres años viviendo en Lisboa. Sé qué mirador funciona a las 9am y cuál a las 6pm.' },
                  { icon: 'update', title: 'Actualizada cada mes', desc: 'Si un restaurante cierra o cambia de horario, lo actualizo inmediatamente.' },
                  { icon: 'shield', title: 'Garantía 48h', desc: 'Si no te convence, te devuelvo el 100%. Sin preguntas.' },
                ].map((item) => (
                  <div key={item.icon} className="flex gap-4">
                    <div className="w-11 h-11 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <span className="material-symbols-outlined text-primary text-xl">{item.icon}</span>
                    </div>
                    <div>
                      <h3 className="font-bold text-text-main mb-1">{item.title}</h3>
                      <p className="text-text-secondary text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-premium">
                <Image
                  src="/images/hero-lisboa.jpg"
                  alt="Calles de Lisboa"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  loading="lazy"
                />
              </div>
              {/* Floating card */}
              <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-5 shadow-premium border border-slate-100 max-w-[240px]">
                <div className="flex items-center gap-2 mb-2">
                  <span className="material-symbols-outlined text-green-500 text-lg">trending_up</span>
                  <span className="font-bold text-text-main text-sm">Ahorro medio</span>
                </div>
                <p className="text-2xl font-display font-black text-primary">x2</p>
                <p className="text-xs text-text-secondary">sobre el precio de la guía evitando trampas turísticas</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── WHAT'S INCLUDED ─── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-display font-black text-text-main mb-4 tracking-tight">
              Qué incluye cada guía
            </h2>
            <p className="text-text-secondary text-lg">Todo lo que necesitas para no improvisar</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {[
              { icon: 'schedule', label: 'Itinerario hora a hora', desc: 'Con tiempos reales de desplazamiento' },
              { icon: 'restaurant', label: 'Restaurantes locales', desc: 'Verificados con rango de precios' },
              { icon: 'photo_camera', label: 'Spots fotográficos', desc: 'Con mejor hora y ángulo' },
              { icon: 'map', label: 'Mapa GPS offline', desc: 'Funciona sin internet' },
              { icon: 'savings', label: 'Tips de ahorro', desc: 'Evita las trampas turísticas' },
              { icon: 'tram', label: 'Transporte paso a paso', desc: 'Qué línea, qué parada' },
              { icon: 'wb_sunny', label: 'Horarios de luz', desc: 'Golden hour en cada spot' },
              { icon: 'local_cafe', label: 'Cafés auténticos', desc: 'Donde van los locales' },
            ].map((item) => (
              <div key={item.icon} className="bg-background-light rounded-2xl p-5 text-center border border-slate-100/80 hover:border-primary/20 hover:shadow-soft transition-all duration-300">
                <div className="w-12 h-12 bg-primary/8 rounded-xl flex items-center justify-center mx-auto mb-3">
                  <span className="material-symbols-outlined text-primary text-2xl">{item.icon}</span>
                </div>
                <h3 className="font-bold text-text-main text-sm mb-1">{item.label}</h3>
                <p className="text-text-secondary text-xs leading-snug">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── FREE GUIDE CTA ─── */}
      <section className="py-24 md:py-32 bg-gradient-to-br from-primary to-primary-dark relative overflow-hidden" id="free">
        <div className="absolute inset-0 opacity-[0.04] bg-azulejo-pattern" />
        <div className="relative max-w-3xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-sm px-4 py-2 rounded-full text-white/90 border border-white/20 mb-8 text-sm">
            <span className="material-symbols-outlined text-base">card_giftcard</span>
            100% gratis, sin registro
          </div>

          <h2 className="text-4xl md:text-5xl font-display font-black text-white mb-6 tracking-tight leading-tight">
            ¿Primera vez en Lisboa?
          </h2>
          <p className="text-lg text-white/90 mb-10 max-w-xl mx-auto leading-relaxed">
            Cómo funciona el transporte, cuánto cuesta comer, qué meter en la maleta y los errores que cometen todos los turistas. Todo en una guía rápida.
          </p>

          <Link
            href="/info-util"
            className="inline-flex items-center justify-center gap-2.5 px-10 py-4 bg-white text-primary rounded-2xl font-bold text-lg shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
          >
            <span className="material-symbols-outlined text-xl">explore</span>
            Ver la guía esencial
          </Link>

          <div className="flex flex-wrap justify-center gap-4 mt-8 text-white/70 text-sm">
            <span>Transporte</span>
            <span>·</span>
            <span>Presupuestos</span>
            <span>·</span>
            <span>Mejor época</span>
            <span>·</span>
            <span>Errores comunes</span>
          </div>
        </div>
      </section>
    </main>
  );
}
