import Link from 'next/link';
import Image from 'next/image';
import { TimelineStop } from '@/components/itinerarios/TimelineStop';
import { TimelineContainer } from '@/components/itinerarios/TimelineContainer';
import { IncludedFeatures } from '@/components/itinerarios/IncludedFeatures';
import { PreviewPaywall } from '@/components/itinerarios/PreviewPaywall';
import { PhotoGallery } from '@/components/itinerarios/PhotoGallery';
import { PremiumContent } from '@/components/itinerarios/PremiumContent';
import { lisboa3DiasSintraTimeline } from '@/data/itineraries';
import { isFreeAccessActive } from '@/lib/guide-config';

export const metadata = {
  title: 'Lisboa en 3 Días con Sintra 2026',
  description: '3 días en Lisboa + Sintra. Más de 20 paradas, restaurantes verificados y el timing perfecto para los palacios de Sintra.',
  keywords: ['lisboa 3 dias', 'sintra itinerario', 'lisboa sintra', 'tres dias lisboa'],
  openGraph: { url: 'https://estabaenlisboa.com/itinerarios/lisboa-3-dias-premium' },
  alternates: { canonical: 'https://estabaenlisboa.com/itinerarios/lisboa-3-dias-premium' },
};

const PREVIEW_STOPS = 3;
const PRODUCT_PRICE = 3.99;

export default function Lisboa3DiasPremiumPage() {
  const isFree = isFreeAccessActive();
  const displayStops = isFree ? lisboa3DiasSintraTimeline : lisboa3DiasSintraTimeline.slice(0, PREVIEW_STOPS);
  const totalStops = lisboa3DiasSintraTimeline.length;

  const photos = [
    { url: '/images/hero-lisboa.jpg', caption: 'Lisboa desde el Tajo' },
    { url: '/images/alfama-panoramica.jpg', caption: 'Alfama al atardecer' },
    { url: '/images/tranvia-28.jpg', caption: 'Tranvía 28' },
    { url: '/images/elevador-santa-justa.jpg', caption: 'Arquitectura lisboeta' },
  ];

  return (
    <main id="main-content">
      {/* Hero */}
      <section className="relative h-[55vh] min-h-[340px] overflow-hidden">
        <Image
          src="/images/hero-lisboa.jpg"
          alt="Lisboa 3 días con Sintra"
          fill
          className="object-cover"
          priority
          fetchPriority="high"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute bottom-0 left-0 p-10 md:p-16 max-w-2xl">
          <Link href="/itinerarios" className="text-white/60 text-xs uppercase tracking-widest hover:text-white/90 transition-colors block mb-3">
            ← Itinerarios
          </Link>
          <h1 className="font-display italic text-white text-3xl md:text-5xl leading-tight mb-2">
            Lisboa en 3 Días
          </h1>
          <p className="text-white/70 text-sm">Con Sintra · {totalStops}+ paradas · Experiencia completa</p>
        </div>
      </section>

      {/* Sticky bar */}
      <section className="bg-background-light sticky top-16 z-30 border-b border-border-soft">
        <div className="max-w-5xl mx-auto px-6 py-3 flex items-center justify-between">
          <span className="font-display italic text-text-main text-sm">Lisboa 3 Días + Sintra</span>
          {isFree ? (
            <span className="text-primary font-semibold text-sm">Acceso libre</span>
          ) : (
            <Link
              href="/checkout/lisboa-3-dias-premium"
              className="px-4 py-2 bg-primary hover:bg-primary-dark text-white text-xs font-semibold transition-colors"
            >
              Desbloquear {PRODUCT_PRICE}€
            </Link>
          )}
        </div>
      </section>

      {/* Resumen */}
      <section className="bg-background-light py-16">
        <div className="max-w-5xl mx-auto px-6">
          <p className="text-xs uppercase tracking-widest text-text-secondary mb-8 pb-3 border-b border-border-soft">
            Resumen de la guía
          </p>
          <div className="grid sm:grid-cols-3 gap-8">
            <div className="border-t-2 border-primary pt-5">
              <h3 className="font-semibold text-text-main text-sm mb-1">Duración</h3>
              <p className="text-text-secondary text-sm">3 días + excursión a Sintra</p>
            </div>
            <div className="border-t-2 border-primary pt-5">
              <h3 className="font-semibold text-text-main text-sm mb-1">Paradas</h3>
              <p className="text-text-secondary text-sm">{totalStops}+ lugares con GPS</p>
            </div>
            <div className="border-t-2 border-primary pt-5">
              <h3 className="font-semibold text-text-main text-sm mb-1">Precio</h3>
              <p className="text-text-secondary text-sm">{isFree ? 'Gratis (acceso libre)' : `${PRODUCT_PRICE}€ · Acceso de por vida`}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="bg-background-light py-16 border-t border-border-soft" id="itinerario">
        <div className="max-w-4xl mx-auto px-6">
          <p className="text-xs uppercase tracking-widest text-text-secondary mb-2 pb-3 border-b border-border-soft">
            Itinerario día a día
          </p>
          <p className={`text-xs uppercase tracking-widest font-semibold mb-10 ${isFree ? 'text-primary' : 'text-text-secondary'}`}>
            {isFree ? 'Acceso completo gratuito' : `Mostrando ${PREVIEW_STOPS} de ${totalStops} paradas`}
          </p>

          <TimelineContainer lineColor="primary">
            {displayStops.map((stop, idx) => (
              <TimelineStop key={idx} {...stop} index={idx} />
            ))}
            <PreviewPaywall
              productId="lisboa-3-dias-premium"
              price={PRODUCT_PRICE}
              productName="Lisboa 3 Días + Sintra"
              totalStops={totalStops}
            />
          </TimelineContainer>
        </div>
      </section>

      <IncludedFeatures />

      <PremiumContent
        productId="lisboa-3-dias-premium"
        price={PRODUCT_PRICE}
        productName="Lisboa 3 Días + Sintra"
        coordinates={lisboa3DiasSintraTimeline
          .filter(stop => stop.coordinates)
          .map(stop => stop.coordinates!)}
        mapTitle="Mapa del itinerario"
        mapDescription="Lisboa y Sintra con todas las paradas. Haz click en los marcadores numerados para ver cada parada."
        guideTitle="Lisboa 3 Días + Sintra"
      />

      {/* Galería + tips */}
      <section className="bg-background-light py-16 border-t border-border-soft" id="galeria">
        <div className="max-w-5xl mx-auto px-6">
          <p className="text-xs uppercase tracking-widest text-text-secondary mb-8 pb-3 border-b border-border-soft">
            Vista previa y consejos
          </p>
          <div className="grid lg:grid-cols-3 gap-10">
            <div className="lg:col-span-2">
              <PhotoGallery photos={photos} />
            </div>

            <div>
              <div className="border-t-2 border-primary pt-6">
                <p className="text-xs uppercase tracking-widest text-primary font-semibold mb-4">Tips de local</p>
                <ul className="space-y-5">
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-0.5 flex-shrink-0">&#10003;</span>
                    <div>
                      <p className="font-semibold text-text-main text-sm">Sintra: sal temprano</p>
                      <p className="text-text-secondary text-xs leading-relaxed mt-0.5">Primer tren desde Rossio a las 8:00. Llegas antes que los grupos y entras sin cola.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-0.5 flex-shrink-0">&#10003;</span>
                    <div>
                      <p className="font-semibold text-text-main text-sm">Entradas online</p>
                      <p className="text-text-secondary text-xs leading-relaxed mt-0.5">Palacio da Pena y Quinta da Regaleira: compra online. En taquilla pueden estar agotadas.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-0.5 flex-shrink-0">&#10003;</span>
                    <div>
                      <p className="font-semibold text-text-main text-sm">Orden óptimo</p>
                      <p className="text-text-secondary text-xs leading-relaxed mt-0.5">Bus 434 desde el centro: Pena primero (frío, niebla matinal), Castelo dos Mouros, Regaleira al final.</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA final */}
      <section className="bg-[#1a2b4a] py-16">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <p className="font-display italic text-white text-3xl mb-4">Tres días para descubrir Lisboa</p>
          {isFree ? (
            <>
              <p className="text-white/60 text-sm mb-8">Acceso completo · Sin registro · Actualizado 2026</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="#itinerario"
                  className="inline-block px-8 py-3 bg-primary hover:bg-primary-dark text-white text-sm font-semibold transition-colors"
                >
                  Ver guía gratis
                </a>
                <Link
                  href="/donar?guide=lisboa-3-dias-premium"
                  className="inline-block px-8 py-3 border border-white/30 hover:border-white text-white text-sm font-semibold transition-colors"
                >
                  Dejar donativo
                </Link>
              </div>
            </>
          ) : (
            <>
              <p className="text-white/60 text-sm mb-8">Descarga inmediata · Garantía 48h · Acceso de por vida</p>
              <Link
                href="/checkout/lisboa-3-dias-premium"
                className="inline-block px-8 py-3 bg-primary hover:bg-primary-dark text-white text-sm font-semibold transition-colors"
              >
                Desbloquear por {PRODUCT_PRICE}€
              </Link>
            </>
          )}
        </div>
      </section>
    </main>
  );
}
