import Link from 'next/link';
import Image from 'next/image';
import { TimelineStop } from '@/components/itinerarios/TimelineStop';
import { TimelineContainer } from '@/components/itinerarios/TimelineContainer';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { IncludedFeatures } from '@/components/itinerarios/IncludedFeatures';
import { PreviewPaywall } from '@/components/itinerarios/PreviewPaywall';
import { PhotoGallery } from '@/components/itinerarios/PhotoGallery';
import { PremiumContent } from '@/components/itinerarios/PremiumContent';
import { lisboaFotografiaTimeline } from '@/data/itineraries';

export const metadata = {
  title: 'Lisboa Fotografía - PhotoWalk y Spots 2026',
  description: '12 spots fotográficos Lisboa: golden hour, blue hour, ángulos exactos. Settings cámara y coordenadas GPS. Guía para fotógrafos.',
  keywords: ['lisboa fotografia', 'fotos lisboa', 'spots fotograficos lisboa', 'golden hour lisboa'],
  openGraph: { url: 'https://estabaenlisboa.com/itinerarios/lisboa-fotografia' },
  alternates: { canonical: 'https://estabaenlisboa.com/itinerarios/lisboa-fotografia' },
};

const PREVIEW_STOPS = 3;
const PRODUCT_PRICE = 2.99;

export default function LisboaFotografiaPage() {
  const previewStops = lisboaFotografiaTimeline.slice(0, PREVIEW_STOPS);
  const totalStops = lisboaFotografiaTimeline.length;

  // Fotos para la galería
  const photos = [
    { url: '/images/alfama-panoramica.jpg', caption: 'Miradores de Lisboa - Golden hour' },
    { url: '/images/tranvia-28.jpg', caption: 'Tranvía 28 - Blue hour' },
    { url: '/images/elevador-santa-justa.jpg', caption: 'Arquitectura icónica' },
    { url: '/images/hero-lisboa.jpg', caption: 'Perspectivas abiertas de la ciudad' },
  ];

  return (
    <main className="min-h-screen bg-background-light">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/fotografo-hero.jpg"
            alt="Lisboa Fotografía PhotoWalk"
            fill
            className="object-cover scale-110"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900/70 via-slate-900/60 to-slate-900/80"></div>
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-4 py-20 text-center">
          <Link
            href="/itinerarios"
            className="inline-flex items-center gap-2 text-white/70 hover:text-white mb-8 text-sm transition-colors"
          >
            <span className="material-symbols-outlined text-lg">arrow_back</span>
            Volver a itinerarios
          </Link>

          <div className="inline-flex items-center gap-2 bg-indigo-500/20 backdrop-blur-md px-5 py-2.5 rounded-full text-white border border-indigo-400/30 mb-8">
            <span className="material-symbols-outlined text-indigo-300">verified</span>
            <span className="text-sm font-bold tracking-wide">GUÍA PREMIUM</span>
          </div>

          <h1 className="text-5xl md:text-8xl font-black leading-tight mb-6 text-white tracking-tight drop-shadow-2xl">
            Lisboa<br />
            <span className="bg-gradient-to-r from-indigo-400 to-blue-600 bg-clip-text text-transparent">
              Fotografía
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto mb-12 leading-relaxed font-medium drop-shadow-lg">
            12 spots fotográficos con horarios de luz perfecta, settings de cámara y ubicaciones exactas. Golden hour, blue hour y larga exposición.
          </p>

          <div className="flex flex-wrap gap-3 justify-center mb-16">
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur px-4 py-2 rounded-full border border-white/20">
              <span className="material-symbols-outlined text-white text-sm">location_on</span>
              <span className="text-white text-sm font-medium">{totalStops} spots épicos</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur px-4 py-2 rounded-full border border-white/20">
              <span className="material-symbols-outlined text-white text-sm">wb_twilight</span>
              <span className="text-white text-sm font-medium">Golden + Blue hour</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur px-4 py-2 rounded-full border border-white/20">
              <span className="material-symbols-outlined text-white text-sm">settings</span>
              <span className="text-white text-sm font-medium">Settings de cámara</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur px-4 py-2 rounded-full border border-white/20">
              <span className="material-symbols-outlined text-white text-sm">map</span>
              <span className="text-white text-sm font-medium">Mapas offline</span>
            </div>
          </div>

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

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <span className="material-symbols-outlined text-white text-4xl opacity-70">expand_more</span>
        </div>
      </section>

      {/* Breadcrumbs */}
      <section className="bg-background-cream py-4 border-b border-slate-100">
        <div className="max-w-4xl mx-auto px-4 md:px-8">
          <Breadcrumbs items={[{ label: 'Inicio', href: '/' }, { label: 'Itinerarios', href: '/itinerarios' }, { label: 'Lisboa Fotografía' }]} />
        </div>
      </section>

      {/* Sticky Info Bar */}
      <section className="sticky top-20 z-40 bg-white/98 backdrop-blur-md border-b border-slate-100 shadow-soft">
        <div className="max-w-5xl mx-auto px-4 py-4">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2 bg-indigo-500/10 px-4 py-2 rounded-full">
                <span className="material-symbols-outlined text-indigo-500 text-lg">workspace_premium</span>
                <span className="text-indigo-500 text-sm font-bold">Solo {PRODUCT_PRICE}€</span>
              </div>
              <div className="flex items-center gap-2 text-slate-600 text-sm font-medium">
                <span className="material-symbols-outlined text-lg">visibility</span>
                Preview gratis disponible
              </div>
            </div>
            <div className="flex gap-3">
              <Link
                href="/checkout/lisboa-fotografia"
                className="px-6 py-3 bg-indigo-500 hover:bg-indigo-600 text-white rounded-2xl font-semibold transition-all flex items-center gap-2"
              >
                <span className="material-symbols-outlined">lock_open</span>
                Desbloquear guía
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Summary */}
      <section className="py-16 bg-background-cream">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-text-main mb-4 tracking-tight">Resumen del PhotoWalk</h2>
            <p className="text-text-secondary text-lg max-w-xl mx-auto">2 días capturando Lisboa en sus mejores momentos de luz con settings profesionales.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm hover:shadow-md transition-shadow flex flex-col items-center text-center gap-4 group">
              <div className="w-14 h-14 rounded-full bg-indigo-500/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-indigo-500 text-3xl">schedule</span>
              </div>
              <div>
                <h3 className="font-bold text-lg text-text-main mb-1">Duración</h3>
                <p className="text-text-secondary">2 días intensivos (amanecer a noche)</p>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm hover:shadow-md transition-shadow flex flex-col items-center text-center gap-4 group">
              <div className="w-14 h-14 rounded-full bg-indigo-500/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-indigo-500 text-3xl">photo_camera</span>
              </div>
              <div>
                <h3 className="font-bold text-lg text-text-main mb-1">Highlights</h3>
                <p className="text-text-secondary">12 spots + settings + composición</p>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm hover:shadow-md transition-shadow flex flex-col items-center text-center gap-4 group">
              <div className="w-14 h-14 rounded-full bg-indigo-500/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-indigo-500 text-3xl">payments</span>
              </div>
              <div>
                <h3 className="font-bold text-lg text-text-main mb-1">Precio</h3>
                <p className="text-indigo-500 text-xl">{PRODUCT_PRICE}€</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section - PREVIEW */}
      <section className="py-20 bg-background-cream" id="itinerario">
        <div className="max-w-4xl mx-auto px-4 md:px-8">
          <div className="text-center mb-16">
            <span className="inline-block px-3 py-1 bg-indigo-500/10 text-indigo-600 rounded-full text-xs font-bold uppercase tracking-wide mb-3">
              Preview gratuito
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-text-main mb-4 tracking-tight">
              12 Spots Fotográficos Épicos
            </h2>
            <p className="text-text-secondary max-w-2xl mx-auto">
              Mostrando los primeros {PREVIEW_STOPS} spots. Desbloquea la guía completa para ver los {totalStops - PREVIEW_STOPS} restantes con settings de cámara y coordenadas GPS.
            </p>
          </div>

          <TimelineContainer lineColor="indigo">
            {/* Preview Stops - Solo primeros 3 */}
            {previewStops.map((stop, idx) => (
              <TimelineStop key={idx} {...stop} index={idx} />
            ))}

            {/* Paywall */}
            <PreviewPaywall
              productId="lisboa-fotografia"
              price={PRODUCT_PRICE}
              productName="Lisboa Fotografía PhotoWalk"
              totalStops={totalStops}
            />
          </TimelineContainer>
        </div>
      </section>

      {/* Included Features */}
      <IncludedFeatures />

      <PremiumContent
        productId="lisboa-fotografia"
        price={PRODUCT_PRICE}
        productName="Lisboa para Fotografía"
        coordinates={lisboaFotografiaTimeline
          .filter(stop => stop.coordinates)
          .map(stop => stop.coordinates!)}
        mapTitle="Mapa Interactivo del Itinerario"
        mapDescription="Spots fotográficos con mejores horas de luz, miradores secretos y rincones instagrameables. Haz click en los marcadores numerados para ver cada parada."
        guideTitle="Lisboa para Fotografía"
      />

      {/* Photo Gallery Section */}
      <section className="py-16 bg-background-cream" id="galeria">
        <div className="max-w-5xl mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div className="mb-6">
                <span className="inline-block px-3 py-1 bg-indigo-500/10 text-indigo-600 rounded-full text-xs font-bold uppercase tracking-wide mb-3">
                  Vista previa
                </span>
                <h2 className="text-3xl font-bold text-text-main mb-4">Lo que capturarás en Lisboa</h2>
                <p className="text-text-secondary">Los spots fotográficos más épicos de Lisboa en los mejores momentos de luz.</p>
              </div>

              <PhotoGallery photos={photos} />
            </div>

            <div className="flex flex-col h-full">
              <div className="bg-white p-6 rounded-xl azulejo-border flex flex-col gap-6 flex-1 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-16 h-16 opacity-10 bg-azulejo-pattern"></div>

                <div className="inline-flex items-center gap-2 bg-indigo-500/10 text-indigo-600 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide self-start">
                  <span className="material-symbols-outlined text-base">lightbulb</span>
                  Equipo Esencial
                </div>

                <ul className="flex flex-col gap-5 flex-1">
                  <li className="flex gap-3 items-start">
                    <div className="min-w-[32px] w-8 h-8 rounded-full bg-indigo-500/10 flex items-center justify-center mt-1">
                      <span className="material-symbols-outlined text-indigo-500 text-lg">camera_alt</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-text-main text-sm">Lentes</h4>
                      <p className="text-text-secondary text-sm mt-1">24-70mm versátil + 16mm ultra wide para arquitectura. Opcional: 70-200mm para comprimir.</p>
                    </div>
                  </li>

                  <li className="flex gap-3 items-start">
                    <div className="min-w-[32px] w-8 h-8 rounded-full bg-indigo-500/10 flex items-center justify-center mt-1">
                      <span className="material-symbols-outlined text-indigo-500 text-lg">settings</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-text-main text-sm">Trípode</h4>
                      <p className="text-text-secondary text-sm mt-1">OBLIGATORIO para golden hour, blue hour y larga exposición nocturna.</p>
                    </div>
                  </li>

                  <li className="flex gap-3 items-start">
                    <div className="min-w-[32px] w-8 h-8 rounded-full bg-indigo-500/10 flex items-center justify-center mt-1">
                      <span className="material-symbols-outlined text-indigo-500 text-lg">wb_sunny</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-text-main text-sm">Filtros</h4>
                      <p className="text-text-secondary text-sm mt-1">Polarizador (reflejos + cielo) + ND Grad (sunset). Opcional pero recomendado.</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-gradient-to-br from-indigo-500 to-blue-600 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-azulejo-pattern"></div>
        <div className="relative max-w-5xl mx-auto px-4 text-center">
          <span className="material-symbols-outlined text-white text-7xl mb-6 inline-block">photo_camera</span>
          <h2 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tight">
            ¿Listo para capturar Lisboa?
          </h2>
          <p className="text-xl md:text-2xl text-white/90 mb-10 max-w-2xl mx-auto leading-relaxed">
            Acceso inmediato por solo {PRODUCT_PRICE}€. Garantía de reembolso de 48 horas.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/checkout/lisboa-fotografia"
              className="group flex items-center justify-center gap-3 px-10 py-5 bg-white text-indigo-600 rounded-2xl font-bold text-xl shadow-2xl hover:scale-105 transition-all"
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
