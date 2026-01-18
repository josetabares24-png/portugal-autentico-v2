import Link from 'next/link';
import Image from 'next/image';
import { TimelineStop } from '@/components/itinerarios/TimelineStop';
import { IncludedFeatures } from '@/components/itinerarios/IncludedFeatures';
import SocialProof from '@/components/SocialProof';
import { PreviewPaywall } from '@/components/itinerarios/PreviewPaywall';
import { PhotoGallery } from '@/components/itinerarios/PhotoGallery';
import { lisboa1DiaTimeline } from '@/data/itineraries';

export const metadata = {
  title: 'Lisboa en 1 Día: Lo Esencial | Estaba en Lisboa',
  description: 'Lo mejor de Lisboa en un día perfectamente organizado. Alfama, Belém, miradores y los mejores restaurantes locales.',
};

const PREVIEW_STOPS = 3; // Mostrar solo 3 paradas gratis
const PRODUCT_PRICE = 5.99;

export default function Lisboa1DiaPage() {
  const previewStops = lisboa1DiaTimeline.slice(0, PREVIEW_STOPS);
  const totalStops = lisboa1DiaTimeline.length;

  // Fotos para la galería
  const photos = [
    { url: 'https://images.unsplash.com/photo-1548707309-dcebeab9ea9b?w=800', caption: 'Mirador Senhora do Monte' },
    { url: 'https://images.unsplash.com/photo-1585208798174-6cedd86e019a?w=800', caption: 'Alfama auténtica' },
    { url: 'https://images.unsplash.com/photo-1555881400-74d7acaacd8b?w=800', caption: 'Torre de Belém' },
    { url: 'https://images.unsplash.com/photo-1588668214407-6ea9a6d8c272?w=800', caption: 'Pasteles de Belém' },
  ];

  return (
    <main className="min-h-screen bg-background-light">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1548707309-dcebeab9ea9b?w=1920&q=80"
            alt="Lisboa - Itinerario 1 día"
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

          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-5 py-2.5 rounded-full text-white border border-white/20 mb-8">
            <span className="material-symbols-outlined text-yellow-400">verified</span>
            <span className="text-sm font-bold tracking-wide">GUÍA PREMIUM</span>
          </div>

          <h1 className="text-5xl md:text-8xl font-black leading-tight mb-6 text-white tracking-tight drop-shadow-2xl">
            Lisboa en 1 día:<br />
            <span className="bg-gradient-to-r from-primary to-orange-500 bg-clip-text text-transparent">
              Lo Esencial
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto mb-12 leading-relaxed font-medium drop-shadow-lg">
            Descubre el alma de la ciudad: desde los miradores de Alfama hasta los pasteles de Belém en una experiencia auténtica y optimizada.
          </p>

          <div className="flex flex-wrap gap-3 justify-center mb-16">
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur px-4 py-2 rounded-full border border-white/20">
              <span className="material-symbols-outlined text-white text-sm">location_on</span>
              <span className="text-white text-sm font-medium">{totalStops} paradas</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur px-4 py-2 rounded-full border border-white/20">
              <span className="material-symbols-outlined text-white text-sm">restaurant</span>
              <span className="text-white text-sm font-medium">3 restaurantes</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur px-4 py-2 rounded-full border border-white/20">
              <span className="material-symbols-outlined text-white text-sm">photo_camera</span>
              <span className="text-white text-sm font-medium">8 spots de fotos</span>
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

      {/* Sticky Info Bar */}
      <section className="sticky top-16 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-lg">
        <div className="max-w-5xl mx-auto px-4 py-4">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full">
                <span className="material-symbols-outlined text-primary text-lg">workspace_premium</span>
                <span className="text-primary text-sm font-bold">Solo {PRODUCT_PRICE}€</span>
              </div>
              <div className="flex items-center gap-2 text-slate-600 text-sm font-medium">
                <span className="material-symbols-outlined text-lg">visibility</span>
                Preview gratis disponible
              </div>
            </div>
            <div className="flex gap-3">
              <Link
                href="/checkout/lisboa-1-dia-lo-esencial"
                className="px-6 py-3 bg-primary hover:bg-primary-dark text-white rounded-2xl font-semibold transition-all flex items-center gap-2"
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
            <h2 className="text-3xl md:text-4xl font-bold text-text-main mb-4 tracking-tight">Resumen del Viaje</h2>
            <p className="text-text-secondary text-lg max-w-xl mx-auto">Todo lo que necesitas saber antes de empezar tu aventura por las 7 colinas.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm hover:shadow-md transition-shadow flex flex-col items-center text-center gap-4 group">
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-primary text-3xl">schedule</span>
              </div>
              <div>
                <h3 className="font-bold text-lg text-text-main mb-1">Duración</h3>
                <p className="text-text-secondary">10-12 horas de exploración tranquila</p>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm hover:shadow-md transition-shadow flex flex-col items-center text-center gap-4 group">
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-primary text-3xl">directions_transit</span>
              </div>
              <div>
                <h3 className="font-bold text-lg text-text-main mb-1">Transporte</h3>
                <p className="text-text-secondary">Caminando y el mítico Tranvía 28</p>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm hover:shadow-md transition-shadow flex flex-col items-center text-center gap-4 group">
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-primary text-3xl">payments</span>
              </div>
              <div>
                <h3 className="font-bold text-lg text-text-main mb-1">Precio</h3>
                <p className="text-text-secondary font-bold text-primary text-xl">{PRODUCT_PRICE}€</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section - PREVIEW */}
      <section className="py-20 bg-white bg-azulejo-pattern" id="itinerario">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-16">
            <span className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-bold uppercase tracking-wide mb-3">
              Preview gratuito
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-text-main mb-4 tracking-tight">
              Tu Cronograma Paso a Paso
            </h2>
            <p className="text-text-secondary max-w-2xl mx-auto">
              Mostrando las primeras {PREVIEW_STOPS} paradas. Desbloquea la guía completa para ver las {totalStops - PREVIEW_STOPS} restantes con restaurantes y coordenadas GPS.
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-8 md:left-1/2 top-4 bottom-4 w-0.5 bg-gradient-to-b from-primary/20 via-primary to-primary/20 md:-translate-x-1/2"></div>

            {/* Preview Stops - Solo primeras 3 */}
            {previewStops.map((stop, idx) => (
              <TimelineStop key={idx} {...stop} index={idx} />
            ))}

            {/* Paywall */}
            <PreviewPaywall
              productId="lisboa-1-dia-lo-esencial"
              price={PRODUCT_PRICE}
              productName="Lisboa 1 Día - Lo Esencial"
              totalStops={totalStops}
            />
          </div>
        </div>
      </section>

      {/* Included Features */}
      <IncludedFeatures />

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
                <p className="text-text-secondary">Los lugares más auténticos de Lisboa, cuidadosamente seleccionados y probados.</p>
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
                    <div className="min-w-[32px] w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center mt-1">
                      <span className="material-symbols-outlined text-primary text-lg">foot_bones</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-text-main text-sm">Zapatos Cómodos</h4>
                      <p className="text-text-secondary text-sm mt-1">La "calçada portuguesa" es preciosa pero resbaladiza y desigual. Evita tacones.</p>
                    </div>
                  </li>

                  <li className="flex gap-3 items-start">
                    <div className="min-w-[32px] w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center mt-1">
                      <span className="material-symbols-outlined text-primary text-lg">credit_card</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-text-main text-sm">Viva Viagem</h4>
                      <p className="text-text-secondary text-sm mt-1">Compra esta tarjeta recargable en cualquier estación de metro. Es mucho más barato.</p>
                    </div>
                  </li>

                  <li className="flex gap-3 items-start">
                    <div className="min-w-[32px] w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center mt-1">
                      <span className="material-symbols-outlined text-primary text-lg">tram</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-text-main text-sm">Tranvía 28</h4>
                      <p className="text-text-secondary text-sm mt-1">Evita las horas punta (11am-4pm). Cógelo en la parada inicial para ir sentado.</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-gradient-to-br from-primary to-orange-500 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-azulejo-pattern"></div>
        <div className="relative max-w-5xl mx-auto px-4 text-center">
          <span className="material-symbols-outlined text-white text-7xl mb-6 inline-block">travel_explore</span>
          <h2 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tight">
            ¿Listo para explorar Lisboa?
          </h2>
          <p className="text-xl md:text-2xl text-white/90 mb-10 max-w-2xl mx-auto leading-relaxed">
            Acceso inmediato por solo {PRODUCT_PRICE}€. Garantía de reembolso de 48 horas.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/checkout/lisboa-1-dia-lo-esencial"
              className="group flex items-center justify-center gap-3 px-10 py-5 bg-white text-primary rounded-2xl font-bold text-xl shadow-2xl hover:scale-105 transition-all"
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
