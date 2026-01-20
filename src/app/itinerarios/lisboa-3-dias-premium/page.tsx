import Link from 'next/link';
import Image from 'next/image';
import { TimelineStop } from '@/components/itinerarios/TimelineStop';
import { IncludedFeatures } from '@/components/itinerarios/IncludedFeatures';
import { PreviewPaywall } from '@/components/itinerarios/PreviewPaywall';
import { PhotoGallery } from '@/components/itinerarios/PhotoGallery';
import InteractiveMap from '@/components/InteractiveMap';
import { lisboa3DiasSintraTimeline } from '@/data/itineraries';

export const metadata = {
  title: 'Lisboa 3 Días + Sintra | Estaba en Lisboa',
  description: 'Experiencia premium: 3 días completos visitando Lisboa + excursión mágica a Sintra con Palacio Pena, Quinta Regaleira y Castillo Mouros.',
};

const PREVIEW_STOPS = 3; // Mostrar solo 3 paradas gratis
const PRODUCT_PRICE = 3.99;

export default function Lisboa3DiasPremiumPage() {
  const previewStops = lisboa3DiasSintraTimeline.slice(0, PREVIEW_STOPS);
  const totalStops = lisboa3DiasSintraTimeline.length;

  // Fotos para la galería
  const photos = [
    { url: '/images/hero-lisboa.jpg', caption: 'Panorámica de Lisboa' },
    { url: '/images/alfama-panoramica.jpg', caption: 'Alfama y miradores' },
    { url: '/images/elevador-santa-justa.jpg', caption: 'Arquitectura icónica' },
    { url: '/images/tranvia-28.jpg', caption: 'Tranvía histórico en Lisboa' },
  ];

  return (
    <main className="min-h-screen bg-background-light">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/images/hero-lisboa.jpg"
            alt="Lisboa 3 Días + Sintra"
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
          <div className="inline-flex items-center gap-2 bg-teal-500/20 backdrop-blur-md px-5 py-2.5 rounded-full text-white border border-teal-400/30 mb-8">
            <span className="material-symbols-outlined text-teal-300 text-lg">verified</span>
            <span className="text-sm font-bold tracking-wide">GUÍA PREMIUM</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-8xl font-black leading-tight mb-6 text-white tracking-tight drop-shadow-2xl">
            Lisboa 3 Días<br />
            <span className="bg-gradient-to-r from-teal-400 to-blue-500 bg-clip-text text-transparent">
              + Sintra
            </span>
          </h1>

          {/* Subheading */}
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto mb-12 leading-relaxed font-medium drop-shadow-lg">
            La experiencia completa. 3 días en Lisboa + día mágico completo en Sintra con palacios de cuento, castillos y quinta misteriosa.
          </p>

          {/* Stats Pills */}
          <div className="flex flex-wrap gap-3 justify-center mb-16">
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur px-4 py-2 rounded-full border border-white/20">
              <span className="material-symbols-outlined text-white text-sm">location_on</span>
              <span className="text-white text-sm font-medium">{totalStops} paradas</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur px-4 py-2 rounded-full border border-white/20">
              <span className="material-symbols-outlined text-white text-sm">castle</span>
              <span className="text-white text-sm font-medium">Día completo Sintra</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur px-4 py-2 rounded-full border border-white/20">
              <span className="material-symbols-outlined text-white text-sm">explore</span>
              <span className="text-white text-sm font-medium">Lisboa + excursión</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur px-4 py-2 rounded-full border border-white/20">
              <span className="material-symbols-outlined text-white text-sm">map</span>
              <span className="text-white text-sm font-medium">GPS y mapas</span>
            </div>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-wrap justify-center gap-8 text-white/80 text-sm">
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-green-400">check_circle</span>
              <span>Preview gratis</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-yellow-400">verified</span>
              <span>Creado por locales</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-blue-400">workspace_premium</span>
              <span>Garantía 48h</span>
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
              <div className="flex items-center gap-2 bg-teal-500/10 px-4 py-2 rounded-full">
                <span className="material-symbols-outlined text-teal-500 text-lg">workspace_premium</span>
                <span className="text-teal-500 text-sm font-bold">Solo {PRODUCT_PRICE}€</span>
              </div>
              <div className="flex items-center gap-2 text-slate-600 text-sm font-medium">
                <span className="material-symbols-outlined text-lg">visibility</span>
                Preview gratis disponible
              </div>
            </div>
            <div className="flex gap-3">
              <Link
                href="/checkout/lisboa-3-dias-premium"
                className="px-6 py-3 bg-teal-500 hover:bg-teal-600 text-white rounded-2xl font-semibold transition-all flex items-center gap-2"
              >
                <span className="material-symbols-outlined">lock_open</span>
                Desbloquear guía
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-8 bg-background-cream">
        <div className="max-w-5xl mx-auto px-4">
        </div>
      </section>

      {/* Quick Summary */}
      <section className="py-16 bg-background-cream">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-text-main mb-4 tracking-tight">Resumen de la Experiencia Premium</h2>
            <p className="text-text-secondary text-lg max-w-xl mx-auto">3 días completos optimizados: 2 días Lisboa + 1 día mágico en Sintra con palacios y castillos.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm hover:shadow-md transition-shadow flex flex-col items-center text-center gap-4 group">
              <div className="w-14 h-14 rounded-full bg-teal-500/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-teal-500 text-3xl">location_city</span>
              </div>
              <div>
                <h3 className="font-bold text-lg text-text-main mb-1">Día 1 - Lisboa Clásico</h3>
                <p className="text-text-secondary">Alfama, Castillo San Jorge, Baixa y atardecer en Graça</p>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm hover:shadow-md transition-shadow flex flex-col items-center text-center gap-4 group">
              <div className="w-14 h-14 rounded-full bg-teal-500/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-teal-500 text-3xl">church</span>
              </div>
              <div>
                <h3 className="font-bold text-lg text-text-main mb-1">Día 2 - Belém Monumental</h3>
                <p className="text-text-secondary">Torre, Monasterio, Pastéis y orilla del Tajo</p>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm hover:shadow-md transition-shadow flex flex-col items-center text-center gap-4 group">
              <div className="w-14 h-14 rounded-full bg-teal-500/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-teal-500 text-3xl">payments</span>
              </div>
              <div>
                <h3 className="font-bold text-lg text-text-main mb-1">Precio</h3>
                <p className="text-text-secondary font-bold text-teal-500 text-xl">{PRODUCT_PRICE}€</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section - PREVIEW */}
      <section className="py-20 bg-white bg-azulejo-pattern" id="itinerario">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-16">
            <span className="inline-block px-3 py-1 bg-teal-500/10 text-teal-600 rounded-full text-xs font-bold uppercase tracking-wide mb-3">
              Preview gratuito
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-text-main mb-4 tracking-tight">
              Tu Experiencia Premium de 3 Días
            </h2>
            <p className="text-text-secondary max-w-2xl mx-auto">
              Mostrando las primeras {PREVIEW_STOPS} paradas. Desbloquea la guía completa para ver las {totalStops - PREVIEW_STOPS} restantes con restaurantes y coordenadas GPS.
            </p>
          </div>

          <div className="relative">
            {/* Vertical Line */}
            <div className="absolute left-8 md:left-1/2 top-4 bottom-4 w-0.5 bg-gradient-to-b from-teal-500/20 via-teal-500 to-teal-500/20 md:-translate-x-1/2"></div>

            {/* Preview Stops - Solo primeras 3 */}
            {previewStops.map((stop, idx) => (
              <TimelineStop key={idx} {...stop} index={idx} />
            ))}

            {/* Paywall */}
            <PreviewPaywall
              productId="lisboa-3-dias-premium"
              price={PRODUCT_PRICE}
              productName="Lisboa 3 Días + Sintra Premium"
              totalStops={totalStops}
            />
          </div>
        </div>
      </section>

      {/* Included Features */}
      <IncludedFeatures />

      <InteractiveMap
        mapId="PLACEHOLDER"
        title="Mapa Interactivo del Itinerario"
        description="Mapa completo con Lisboa, Sintra, Cascais y los puntos clave del día 3."
        guideTitle="Lisboa + Alrededores"
      />

      {/* Photo Gallery Section - Reemplaza mapa interactivo */}
      <section className="py-16 bg-background-cream" id="galeria">
        <div className="max-w-5xl mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div className="mb-6">
                <span className="inline-block px-3 py-1 bg-secondary-blue/10 text-secondary-blue rounded-full text-xs font-bold uppercase tracking-wide mb-3">
                  Vista previa
                </span>
                <h2 className="text-3xl font-bold text-text-main mb-4">Lo que verás en este itinerario</h2>
                <p className="text-text-secondary">De los palacios de Sintra a los barrios más auténticos de Lisboa.</p>
              </div>

              <PhotoGallery photos={photos} />
            </div>

            <div className="flex flex-col h-full">
              <div className="bg-white p-6 rounded-xl azulejo-border flex flex-col gap-6 flex-1 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-16 h-16 opacity-10 bg-azulejo-pattern"></div>

                <div className="inline-flex items-center gap-2 bg-secondary-blue/10 text-secondary-blue px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide self-start">
                  <span className="material-symbols-outlined text-base">lightbulb</span>
                  Insider Tips
                </div>

                <ul className="flex flex-col gap-5 flex-1">
                  <li className="flex gap-3 items-start">
                    <div className="min-w-[32px] w-8 h-8 rounded-full bg-teal-500/10 flex items-center justify-center mt-1">
                      <span className="material-symbols-outlined text-teal-500 text-lg">schedule</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-text-main text-sm">Sintra: timing crítico</h4>
                      <p className="text-text-secondary text-sm mt-1">Sal de Lisboa a las 8:00 AM. Tren desde Rossio - llega antes de las 9:00 para evitar multitudes.</p>
                    </div>
                  </li>

                  <li className="flex gap-3 items-start">
                    <div className="min-w-[32px] w-8 h-8 rounded-full bg-teal-500/10 flex items-center justify-center mt-1">
                      <span className="material-symbols-outlined text-teal-500 text-lg">confirmation_number</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-text-main text-sm">Tickets online obligatorio</h4>
                      <p className="text-text-secondary text-sm mt-1">Palacio Pena + Quinta Regaleira: COMPRA ONLINE días antes. Ahorras 2h de cola en cada uno.</p>
                    </div>
                  </li>

                  <li className="flex gap-3 items-start">
                    <div className="min-w-[32px] w-8 h-8 rounded-full bg-teal-500/10 flex items-center justify-center mt-1">
                      <span className="material-symbols-outlined text-teal-500 text-lg">route</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-text-main text-sm">Orden óptimo palacios</h4>
                      <p className="text-text-secondary text-sm mt-1">1. Palacio Pena (mañana), 2. Castillo Mouros, 3. Quinta Regaleira (tarde). Bus 434 conecta todo.</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-gradient-to-br from-teal-500 to-blue-500 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-azulejo-pattern"></div>
        <div className="relative max-w-5xl mx-auto px-4 text-center">
          <span className="material-symbols-outlined text-white text-7xl mb-6 inline-block">castle</span>
          <h2 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tight">
            ¿Listo para tu experiencia premium?
          </h2>
          <p className="text-xl md:text-2xl text-white/90 mb-10 max-w-2xl mx-auto leading-relaxed">
            Acceso inmediato por solo {PRODUCT_PRICE}€. Garantía de reembolso de 48 horas.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/checkout/lisboa-3-dias-premium"
              className="group flex items-center justify-center gap-3 px-10 py-5 bg-white text-teal-600 rounded-2xl font-bold text-xl shadow-2xl hover:scale-105 transition-all"
            >
              <span className="material-symbols-outlined text-2xl">lock_open</span>
              Desbloquear por {PRODUCT_PRICE}€
              <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
            </Link>
            <a
              href="/contacto"
              className="flex items-center justify-center gap-3 px-10 py-5 bg-white/10 backdrop-blur-md hover:bg-white/20 text-white rounded-2xl font-bold text-xl border-2 border-white/30 transition-all"
            >
              <span className="material-symbols-outlined text-2xl">chat</span>
              Tengo dudas
            </a>
          </div>
          <p className="text-white/80 text-sm mt-6">✅ Descarga inmediata · ✅ Garantía 48h · ✅ Sin suscripciones</p>
        </div>
      </section>
    </main>
  );
}
