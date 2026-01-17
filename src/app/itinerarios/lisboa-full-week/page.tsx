import Link from 'next/link';
import Image from 'next/image';
import { TimelineStop } from '@/components/itinerarios/TimelineStop';
import { IncludedFeatures } from '@/components/itinerarios/IncludedFeatures';
import SocialProof from '@/components/SocialProof';
import { lisboaFullWeekTimeline } from '@/data/itineraries';

export const metadata = {
  title: 'Lisboa Semana Completa - 7 Días de Experiencia Total | Estaba en Lisboa',
  description: 'La experiencia definitiva: 7 días descubriendo Lisboa, Sintra, Cascais y los secretos mejor guardados de la región.',
};

export default function LisboaFullWeekPage() {
  return (
    <main className="min-h-screen bg-background-light">
      {/* Hero Section - ESTILO UNIFICADO CON HOMEPAGE */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1585208798174-6cedd86e019a?w=1920&q=80"
            alt="Lisboa - Semana Completa"
            fill
            className="object-cover scale-110"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900/70 via-slate-900/60 to-slate-900/80"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-6xl mx-auto px-4 py-20 text-center">
          {/* Back Link */}
          <Link
            href="/itinerarios"
            className="inline-flex items-center gap-2 text-white/70 hover:text-white mb-8 text-sm transition-colors"
          >
            <span className="material-symbols-outlined text-lg">arrow_back</span>
            Volver a itinerarios
          </Link>

          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-purple-500/20 backdrop-blur-md px-5 py-2.5 rounded-full text-white border border-purple-400/30 mb-8">
            <span className="material-symbols-outlined text-purple-300">diamond</span>
            <span className="text-sm font-bold tracking-wide">SEMANA COMPLETA</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-8xl font-black leading-tight mb-6 text-white tracking-tight drop-shadow-2xl">
            Lisboa<br />
            <span className="bg-gradient-to-r from-purple-400 to-violet-500 bg-clip-text text-transparent">
              Semana Completa
            </span>
          </h1>

          {/* Subheading */}
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto mb-12 leading-relaxed font-medium drop-shadow-lg">
            La experiencia definitiva: 7 días descubriendo Lisboa, Sintra, Cascais y los secretos mejor guardados de la capital portuguesa.
          </p>

          {/* Stats Pills */}
          <div className="flex flex-wrap gap-3 justify-center mb-16">
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur px-4 py-2 rounded-full border border-white/20">
              <span className="material-symbols-outlined text-white text-sm">schedule</span>
              <span className="text-white text-sm font-medium">7 días completos</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur px-4 py-2 rounded-full border border-white/20">
              <span className="material-symbols-outlined text-white text-sm">location_on</span>
              <span className="text-white text-sm font-medium">16 experiencias</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur px-4 py-2 rounded-full border border-white/20">
              <span className="material-symbols-outlined text-white text-sm">restaurant</span>
              <span className="text-white text-sm font-medium">10+ restaurantes</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur px-4 py-2 rounded-full border border-white/20">
              <span className="material-symbols-outlined text-white text-sm">landscape</span>
              <span className="text-white text-sm font-medium">Sintra + Cascais</span>
            </div>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-wrap justify-center gap-8 text-white/80 text-sm">
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-green-400">check_circle</span>
              <span>100% Gratuita</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-yellow-400">verified</span>
              <span>Creado por locales</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-blue-400">map</span>
              <span>Con GPS y mapas</span>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <span className="material-symbols-outlined text-white text-4xl opacity-70">expand_more</span>
        </div>
      </section>

      {/* Sticky Info Bar */}
      <section className="sticky top-16 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-lg">
        <div className="max-w-5xl mx-auto px-4 py-4">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2 bg-green-50 px-4 py-2 rounded-full">
                <span className="material-symbols-outlined text-green-600 text-lg">check_circle</span>
                <span className="text-green-600 text-sm font-bold">100% Gratuita</span>
              </div>
              <div className="flex items-center gap-2 text-slate-600 text-sm font-medium">
                <span className="material-symbols-outlined text-lg">map</span>
                Con mapas y GPS
              </div>
            </div>
            <div className="flex gap-3">
              <a
                href="#itinerario"
                className="px-6 py-3 bg-purple-500 hover:bg-purple-600 text-white rounded-2xl font-semibold transition-all flex items-center gap-2"
              >
                <span className="material-symbols-outlined">map</span>
                Ver itinerario completo
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <SocialProof guideId="lisboa-full-week" />

      {/* Quick Summary */}
      <section className="py-16 bg-background-cream">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-text-main mb-4 tracking-tight">Tu Semana en Lisboa</h2>
            <p className="text-text-secondary text-lg max-w-xl mx-auto">Día a día, la experiencia más completa para conocer Lisboa como un verdadero lisboeta.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Día 1-2 */}
            <div className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm hover:shadow-md transition-shadow flex flex-col items-center text-center gap-4 group">
              <div className="w-14 h-14 rounded-full bg-purple-500/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-purple-500 text-3xl">castle</span>
              </div>
              <div>
                <h3 className="font-bold text-lg text-text-main mb-1">Días 1-2</h3>
                <p className="text-text-secondary">Lisboa Esencial: Alfama, Belém, miradores y los clásicos</p>
              </div>
            </div>

            {/* Día 3 */}
            <div className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm hover:shadow-md transition-shadow flex flex-col items-center text-center gap-4 group">
              <div className="w-14 h-14 rounded-full bg-purple-500/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-purple-500 text-3xl">landscape</span>
              </div>
              <div>
                <h3 className="font-bold text-lg text-text-main mb-1">Día 3</h3>
                <p className="text-text-secondary">Sintra Mágica: Palacios, castillos y bosques encantados</p>
              </div>
            </div>

            {/* Día 4 */}
            <div className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm hover:shadow-md transition-shadow flex flex-col items-center text-center gap-4 group">
              <div className="w-14 h-14 rounded-full bg-purple-500/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-purple-500 text-3xl">sailing</span>
              </div>
              <div>
                <h3 className="font-bold text-lg text-text-main mb-1">Día 4</h3>
                <p className="text-text-secondary">Cascais + Guincho: Playas, surf y pueblos de pescadores</p>
              </div>
            </div>

            {/* Día 5 */}
            <div className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm hover:shadow-md transition-shadow flex flex-col items-center text-center gap-4 group">
              <div className="w-14 h-14 rounded-full bg-purple-500/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-purple-500 text-3xl">palette</span>
              </div>
              <div>
                <h3 className="font-bold text-lg text-text-main mb-1">Día 5</h3>
                <p className="text-text-secondary">Lisboa Alternativa: LX Factory, arte urbano y mercados</p>
              </div>
            </div>

            {/* Día 6 */}
            <div className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm hover:shadow-md transition-shadow flex flex-col items-center text-center gap-4 group">
              <div className="w-14 h-14 rounded-full bg-purple-500/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-purple-500 text-3xl">water</span>
              </div>
              <div>
                <h3 className="font-bold text-lg text-text-main mb-1">Día 6</h3>
                <p className="text-text-secondary">Parque das Nações: Oceanário y arquitectura moderna</p>
              </div>
            </div>

            {/* Día 7 */}
            <div className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm hover:shadow-md transition-shadow flex flex-col items-center text-center gap-4 group">
              <div className="w-14 h-14 rounded-full bg-purple-500/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-purple-500 text-3xl">shopping_bag</span>
              </div>
              <div>
                <h3 className="font-bold text-lg text-text-main mb-1">Día 7</h3>
                <p className="text-text-secondary">Relax + Despedida: Compras, cafés y última puesta de sol</p>
              </div>
            </div>

            {/* Duración */}
            <div className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm hover:shadow-md transition-shadow flex flex-col items-center text-center gap-4 group">
              <div className="w-14 h-14 rounded-full bg-purple-500/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-purple-500 text-3xl">schedule</span>
              </div>
              <div>
                <h3 className="font-bold text-lg text-text-main mb-1">Duración</h3>
                <p className="text-text-secondary">7 días con ritmo relajado y tiempo para todo</p>
              </div>
            </div>

            {/* Presupuesto */}
            <div className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm hover:shadow-md transition-shadow flex flex-col items-center text-center gap-4 group">
              <div className="w-14 h-14 rounded-full bg-purple-500/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-purple-500 text-3xl">payments</span>
              </div>
              <div>
                <h3 className="font-bold text-lg text-text-main mb-1">Presupuesto</h3>
                <p className="text-text-secondary">€€-€€€ - Flexible según tus preferencias</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-white bg-azulejo-pattern" id="itinerario">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-16">
            <span className="inline-block px-3 py-1 bg-purple-500/10 text-purple-600 rounded-full text-xs font-bold uppercase tracking-wide mb-3">
              Itinerario completo
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-text-main mb-4 tracking-tight">
              Tu Semana Día a Día
            </h2>
            <p className="text-text-secondary max-w-2xl mx-auto">
              7 días perfectamente diseñados para que vivas Lisboa sin prisas, descubriendo tanto los imprescindibles como los secretos locales
            </p>
          </div>

          <div className="relative">
            {/* Vertical Line */}
            <div className="absolute left-8 md:left-1/2 top-4 bottom-4 w-0.5 bg-gradient-to-b from-purple-500/20 via-purple-500 to-purple-500/20 md:-translate-x-1/2"></div>

            {lisboaFullWeekTimeline.map((stop, idx) => (
              <TimelineStop key={idx} {...stop} index={idx} />
            ))}
          </div>
        </div>
      </section>

      {/* Included Features */}
      <IncludedFeatures />

      {/* Insider Tips Section */}
      <section className="py-16 bg-background-cream" id="consejos">
        <div className="max-w-5xl mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div className="mb-6">
                <span className="inline-block px-3 py-1 bg-purple-500/10 text-purple-600 rounded-full text-xs font-bold uppercase tracking-wide mb-3">
                  Consejos para una semana
                </span>
                <h2 className="text-3xl font-bold text-text-main mb-4">Planifica tu Semana Como un Local</h2>
                <p className="text-text-secondary">Tips esenciales para que tu semana en Lisboa sea perfecta de principio a fin.</p>
              </div>

              <div className="aspect-video w-full rounded-xl bg-gray-200 overflow-hidden shadow-lg relative">
                <Image
                  src="https://images.unsplash.com/photo-1585208798174-6cedd86e019a?w=800"
                  alt="Lisboa vista panorámica"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black/30 backdrop-blur-sm">
                  <div className="text-center text-white">
                    <span className="material-symbols-outlined text-5xl mb-2 block">map</span>
                    <p className="font-bold">Mapa Interactivo Incluido</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col h-full">
              <div className="bg-white p-6 rounded-xl azulejo-border flex flex-col gap-6 flex-1 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-16 h-16 opacity-10 bg-azulejo-pattern"></div>

                <div className="inline-flex items-center gap-2 bg-purple-500/10 text-purple-600 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide self-start">
                  <span className="material-symbols-outlined text-base">lightbulb</span>
                  Semana Perfecta
                </div>

                <ul className="flex flex-col gap-5 flex-1">
                  <li className="flex gap-3 items-start">
                    <div className="min-w-[32px] w-8 h-8 rounded-full bg-purple-500/10 flex items-center justify-center mt-1">
                      <span className="material-symbols-outlined text-purple-500 text-lg">event</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-text-main text-sm">Mejor Orden</h4>
                      <p className="text-text-secondary text-sm mt-1">Días 1-2 Lisboa, Día 3 Sintra (miércoles ideal - menos gente), Día 4 Cascais si hace sol.</p>
                    </div>
                  </li>

                  <li className="flex gap-3 items-start">
                    <div className="min-w-[32px] w-8 h-8 rounded-full bg-purple-500/10 flex items-center justify-center mt-1">
                      <span className="material-symbols-outlined text-purple-500 text-lg">hotel</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-text-main text-sm">Dónde Alojarse</h4>
                      <p className="text-text-secondary text-sm mt-1">Barrio Alto o Chiado - céntrico para todo. Alfama si prefieres ambiente más auténtico.</p>
                    </div>
                  </li>

                  <li className="flex gap-3 items-start">
                    <div className="min-w-[32px] w-8 h-8 rounded-full bg-purple-500/10 flex items-center justify-center mt-1">
                      <span className="material-symbols-outlined text-purple-500 text-lg">savings</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-text-main text-sm">Lisboa Card</h4>
                      <p className="text-text-secondary text-sm mt-1">Compra 6 días (€47) - incluye transporte + entradas. Se paga solo con 3 monumentos.</p>
                    </div>
                  </li>

                  <li className="flex gap-3 items-start">
                    <div className="min-w-[32px] w-8 h-8 rounded-full bg-purple-500/10 flex items-center justify-center mt-1">
                      <span className="material-symbols-outlined text-purple-500 text-lg">beach_access</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-text-main text-sm">Días de Playa</h4>
                      <p className="text-text-secondary text-sm mt-1">Día 4 (Cascais) y Día 7 flexible - perfecto si queda algo pendiente o quieres repetir favoritos.</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-gradient-to-br from-purple-500 to-violet-600 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-azulejo-pattern"></div>
        <div className="relative max-w-5xl mx-auto px-4 text-center">
          <span className="material-symbols-outlined text-white text-7xl mb-6 inline-block">travel_explore</span>
          <h2 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tight">
            ¿Listo para tu semana en Lisboa?
          </h2>
          <p className="text-xl md:text-2xl text-white/90 mb-10 max-w-2xl mx-auto leading-relaxed">
            Descarga inmediata. Acceso de por vida. Garantía de reembolso de 14 días.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="group flex items-center justify-center gap-3 px-10 py-5 bg-white text-purple-600 rounded-2xl font-bold text-xl shadow-2xl hover:scale-105 transition-all">
              <span className="material-symbols-outlined text-2xl">download</span>
              Comprar por 9.99€
              <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
            </button>
            <a
              href="/contacto"
              className="flex items-center justify-center gap-3 px-10 py-5 bg-white/10 backdrop-blur-md hover:bg-white/20 text-white rounded-2xl font-bold text-xl border-2 border-white/30 transition-all"
            >
              <span className="material-symbols-outlined text-2xl">chat</span>
              Tengo dudas
            </a>
          </div>
          <p className="text-white/80 text-sm mt-6">✅ Sin spam · ✅ Descarga inmediata · ✅ 100% gratis</p>
        </div>
      </section>
    </main>
  );
}
