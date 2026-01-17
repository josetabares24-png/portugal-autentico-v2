import Link from 'next/link';
import Image from 'next/image';
import { TimelineStop } from '@/components/itinerarios/TimelineStop';
import { IncludedFeatures } from '@/components/itinerarios/IncludedFeatures';
import SocialProof from '@/components/SocialProof';
import { lisboaFamiliarTimeline } from '@/data/itineraries';

export const metadata = {
  title: 'Lisboa en Familia con Niños | Estaba en Lisboa',
  description: 'Itinerario perfecto para familias: Oceanário, teleférico, castillo, parques y restaurantes kid-friendly. Ritmo relajado sin prisas.',
};

export default function LisboaFamiliarPage() {
  return (
    <main className="min-h-screen bg-background-light">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?w=1920&q=80"
            alt="Lisboa en Familia con Niños"
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
          <div className="inline-flex items-center gap-2 bg-yellow-500/20 backdrop-blur-md px-5 py-2.5 rounded-full text-white border border-yellow-400/30 mb-8">
            <span className="material-symbols-outlined text-yellow-300 text-lg">family_restroom</span>
            <span className="text-sm font-bold tracking-wide">CON NIÑOS</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-8xl font-black leading-tight mb-6 text-white tracking-tight drop-shadow-2xl">
            Lisboa en<br />
            <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
              Familia
            </span>
          </h1>

          {/* Subheading */}
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto mb-12 leading-relaxed font-medium drop-shadow-lg">
            Actividades perfectas para niños: Oceanário, teleférico, castillo, parques y restaurantes kid-friendly con ritmo relajado.
          </p>

          {/* Stats Pills */}
          <div className="flex flex-wrap gap-3 justify-center mb-16">
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur px-4 py-2 rounded-full border border-white/20">
              <span className="material-symbols-outlined text-white text-sm">location_on</span>
              <span className="text-white text-sm font-medium">7 actividades familiares</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur px-4 py-2 rounded-full border border-white/20">
              <span className="material-symbols-outlined text-white text-sm">restaurant</span>
              <span className="text-white text-sm font-medium">Restaurantes kid-friendly</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur px-4 py-2 rounded-full border border-white/20">
              <span className="material-symbols-outlined text-white text-sm">schedule</span>
              <span className="text-white text-sm font-medium">Ritmo relajado</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur px-4 py-2 rounded-full border border-white/20">
              <span className="material-symbols-outlined text-white text-sm">map</span>
              <span className="text-white text-sm font-medium">Tips para padres</span>
            </div>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-wrap justify-center gap-8 text-white/80 text-sm">
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-green-400">check_circle</span>
              <span>100% Gratuita</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-yellow-400">family_restroom</span>
              <span>Probado con niños</span>
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
                <span className="material-symbols-outlined text-yellow-500 text-lg">family_restroom</span>
                Perfecto para niños
              </div>
            </div>
            <div className="flex gap-3">
              <a
                href="#itinerario"
                className="px-6 py-3 bg-yellow-500 hover:bg-yellow-600 text-white rounded-2xl font-semibold transition-all flex items-center gap-2"
              >
                <span className="material-symbols-outlined">map</span>
                Ver itinerario completo
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-8 bg-background-cream">
        <div className="max-w-5xl mx-auto px-4">
          <SocialProof guideId="lisboa-familiar" />
        </div>
      </section>

      {/* Quick Summary */}
      <section className="py-16 bg-background-cream">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-text-main mb-4 tracking-tight">Resumen del Itinerario Familiar</h2>
            <p className="text-text-secondary text-lg max-w-xl mx-auto">Diseñado para familias que quieren disfrutar Lisboa sin prisas y con niños felices.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm hover:shadow-md transition-shadow flex flex-col items-center text-center gap-4 group">
              <div className="w-14 h-14 rounded-full bg-yellow-500/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-yellow-500 text-3xl">schedule</span>
              </div>
              <div>
                <h3 className="font-bold text-lg text-text-main mb-1">Duración</h3>
                <p className="text-text-secondary">2-3 días con ritmo familiar relajado</p>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm hover:shadow-md transition-shadow flex flex-col items-center text-center gap-4 group">
              <div className="w-14 h-14 rounded-full bg-yellow-500/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-yellow-500 text-3xl">attractions</span>
              </div>
              <div>
                <h3 className="font-bold text-lg text-text-main mb-1">Highlights</h3>
                <p className="text-text-secondary">Oceanário + castillo + parques + zoo</p>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm hover:shadow-md transition-shadow flex flex-col items-center text-center gap-4 group">
              <div className="w-14 h-14 rounded-full bg-yellow-500/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-yellow-500 text-3xl">payments</span>
              </div>
              <div>
                <h3 className="font-bold text-lg text-text-main mb-1">Presupuesto</h3>
                <p className="text-text-secondary">€€ - Actividades + comidas kid-friendly</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-white bg-azulejo-pattern" id="itinerario">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-16">
            <span className="inline-block px-3 py-1 bg-yellow-500/10 text-yellow-600 rounded-full text-xs font-bold uppercase tracking-wide mb-3">
              Itinerario completo
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-text-main mb-4 tracking-tight">
              Vuestra Aventura Familiar en Lisboa
            </h2>
            <p className="text-text-secondary max-w-2xl mx-auto">
              Actividades probadas con niños, ritmo relajado, y restaurantes donde los niños son bienvenidos
            </p>
          </div>

          <div className="relative">
            {/* Vertical Line */}
            <div className="absolute left-8 md:left-1/2 top-4 bottom-4 w-0.5 bg-gradient-to-b from-yellow-500/20 via-yellow-500 to-yellow-500/20 md:-translate-x-1/2"></div>

            {lisboaFamiliarTimeline.map((stop, idx) => (
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
                <span className="inline-block px-3 py-1 bg-yellow-500/10 text-yellow-600 rounded-full text-xs font-bold uppercase tracking-wide mb-3">
                  Tips para padres
                </span>
                <h2 className="text-3xl font-bold text-text-main mb-4">Consejos Esenciales con Niños</h2>
                <p className="text-text-secondary">Recomendaciones de padres que ya viajaron a Lisboa en familia.</p>
              </div>

              <div className="aspect-video w-full rounded-xl bg-gray-200 overflow-hidden shadow-lg relative">
                <Image
                  src="https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?w=800"
                  alt="Lisboa en familia"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black/30 backdrop-blur-sm">
                  <div className="text-center text-white">
                    <span className="material-symbols-outlined text-6xl mb-2 block">family_restroom</span>
                    <p className="font-bold">Mapas Kid-Friendly Incluidos</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col h-full">
              <div className="bg-white p-6 rounded-xl azulejo-border flex flex-col gap-6 flex-1 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-16 h-16 opacity-10 bg-azulejo-pattern"></div>

                <div className="inline-flex items-center gap-2 bg-yellow-500/10 text-yellow-600 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide self-start">
                  <span className="material-symbols-outlined text-base">family_restroom</span>
                  Tips Familiares
                </div>

                <ul className="flex flex-col gap-5 flex-1">
                  <li className="flex gap-3 items-start">
                    <div className="min-w-[32px] w-8 h-8 rounded-full bg-yellow-500/10 flex items-center justify-center mt-1">
                      <span className="material-symbols-outlined text-yellow-500 text-lg">stroller</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-text-main text-sm">Carritos</h4>
                      <p className="text-text-secondary text-sm mt-1">Parque das Nações es plano. Centro histórico mejor con mochila de porteo o taxi.</p>
                    </div>
                  </li>

                  <li className="flex gap-3 items-start">
                    <div className="min-w-[32px] w-8 h-8 rounded-full bg-yellow-500/10 flex items-center justify-center mt-1">
                      <span className="material-symbols-outlined text-yellow-500 text-lg">schedule</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-text-main text-sm">Horarios</h4>
                      <p className="text-text-secondary text-sm mt-1">Respeta las siestas. Mejor empezar temprano (9:30) y parar 14:00-16:00.</p>
                    </div>
                  </li>

                  <li className="flex gap-3 items-start">
                    <div className="min-w-[32px] w-8 h-8 rounded-full bg-yellow-500/10 flex items-center justify-center mt-1">
                      <span className="material-symbols-outlined text-yellow-500 text-lg">fastfood</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-text-main text-sm">Snacks</h4>
                      <p className="text-text-secondary text-sm mt-1">Lleva galletas, fruta y agua. Los niños hambrientos = vacaciones arruinadas.</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-gradient-to-br from-yellow-500 to-orange-500 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-azulejo-pattern"></div>
        <div className="relative max-w-5xl mx-auto px-4 text-center">
          <span className="material-symbols-outlined text-white text-7xl mb-6 inline-block">family_restroom</span>
          <h2 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tight">
            ¿Listos para vuestra aventura familiar?
          </h2>
          <p className="text-xl md:text-2xl text-white/90 mb-10 max-w-2xl mx-auto leading-relaxed">
            Acceso inmediato. Probado con niños. 100% gratuito para siempre.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#itinerario"
              className="group flex items-center justify-center gap-3 px-10 py-5 bg-white text-yellow-600 rounded-2xl font-bold text-xl shadow-2xl hover:scale-105 transition-all"
            >
              <span className="material-symbols-outlined text-2xl">download</span>
              Ver itinerario completo
              <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
            </a>
            <a
              href="/itinerarios"
              className="flex items-center justify-center gap-3 px-10 py-5 bg-white/10 backdrop-blur-md hover:bg-white/20 text-white rounded-2xl font-bold text-xl border-2 border-white/30 transition-all"
            >
              <span className="material-symbols-outlined text-2xl">explore</span>
              Otros itinerarios
            </a>
          </div>
          <p className="text-white/80 text-sm mt-6">✅ 100% gratis · ✅ Acceso inmediato · ✅ Tips para padres</p>
        </div>
      </section>
    </main>
  );
}
