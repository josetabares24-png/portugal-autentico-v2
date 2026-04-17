import Link from 'next/link';
import Image from 'next/image';
import { TimelineStop } from '@/components/itinerarios/TimelineStop';
import { TimelineContainer } from '@/components/itinerarios/TimelineContainer';
import { IncludedFeatures } from '@/components/itinerarios/IncludedFeatures';
import { PreviewPaywall } from '@/components/itinerarios/PreviewPaywall';
import { PhotoGallery } from '@/components/itinerarios/PhotoGallery';
import { PremiumContent } from '@/components/itinerarios/PremiumContent';
import { lisboa2DiasTimeline } from '@/data/itineraries';
import { isFreeAccessActive } from '@/lib/guide-config';

export const metadata = {
  title: 'Lisboa en 2 Días: Itinerario Completo 2026',
  description: '2 días completos en Lisboa con Belém, Alfama, Chiado y más. Horarios optimizados, restaurantes verificados y consejos de local.',
  keywords: ['lisboa 2 dias', 'itinerario lisboa dos dias', 'belem alfama chiado'],
  openGraph: { url: 'https://estabaenlisboa.com/itinerarios/lisboa-2-dias-completo' },
  alternates: { canonical: 'https://estabaenlisboa.com/itinerarios/lisboa-2-dias-completo' },
};

const PREVIEW_STOPS = 3;
const PRODUCT_PRICE = 2.99;

export default function Lisboa2DiasPage() {
  const isFree = isFreeAccessActive();
  const displayStops = isFree ? lisboa2DiasTimeline : lisboa2DiasTimeline.slice(0, PREVIEW_STOPS);
  const totalStops = lisboa2DiasTimeline.length;

  const photos = [
    { url: '/images/lisboa-2dias-cover.jpg', caption: 'Lisboa desde el Tajo' },
    { url: '/images/alfama-panoramica.jpg', caption: 'Alfama y sus miradores' },
    { url: '/images/tranvia-28.jpg', caption: 'Tranvía 28 histórico' },
    { url: '/images/elevador-santa-justa.jpg', caption: 'Elevador de Santa Justa' },
  ];

  return (
    <main id="main-content">
      {/* Hero */}
      <section className="relative h-[55vh] min-h-[340px] overflow-hidden">
        <Image
          src="/images/lisboa-2dias-cover.jpg"
          alt="Lisboa en 2 días itinerario completo"
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
            Lisboa en 2 Días
          </h1>
          <p className="text-white/70 text-sm">Itinerario completo · {totalStops} paradas · Incluye Belém</p>
        </div>
      </section>

      {/* Sticky bar */}
      <section className="bg-background-light sticky top-16 z-30 border-b border-border-soft">
        <div className="max-w-5xl mx-auto px-6 py-3 flex items-center justify-between">
          <span className="font-display italic text-text-main text-sm">Lisboa 2 Días: Completo</span>
          {isFree ? (
            <span className="text-primary font-semibold text-sm">Acceso libre</span>
          ) : (
            <Link
              href="/checkout/lisboa-2-dias-completo"
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
              <p className="text-text-secondary text-sm">2 días completos con Belém</p>
            </div>
            <div className="border-t-2 border-primary pt-5">
              <h3 className="font-semibold text-text-main text-sm mb-1">Paradas</h3>
              <p className="text-text-secondary text-sm">{totalStops} lugares seleccionados</p>
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
              productId="lisboa-2-dias-completo"
              price={PRODUCT_PRICE}
              productName="Lisboa en 2 Días"
              totalStops={totalStops}
            />
          </TimelineContainer>
        </div>
      </section>

      <IncludedFeatures />

      <PremiumContent
        productId="lisboa-2-dias-completo"
        price={PRODUCT_PRICE}
        productName="Lisboa en 2 Días"
        coordinates={lisboa2DiasTimeline
          .filter(stop => stop.coordinates)
          .map(stop => stop.coordinates!)}
        mapTitle="Mapa del itinerario"
        mapDescription="Todas las paradas organizadas por día con coordenadas GPS. Haz click en los marcadores para ver cada parada."
        guideTitle="Lisboa en 2 Días"
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
                      <p className="font-semibold text-text-main text-sm">Tranvía 28</p>
                      <p className="text-text-secondary text-xs leading-relaxed mt-0.5">Tómalo en Martim Moniz — la parada menos masificada y donde siempre hay sitio.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-0.5 flex-shrink-0">&#10003;</span>
                    <div>
                      <p className="font-semibold text-text-main text-sm">Pastéis de Belém</p>
                      <p className="text-text-secondary text-xs leading-relaxed mt-0.5">Entra directo al Salón interior, no hagas cola en la puerta. Siempre hay sitio dentro.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-0.5 flex-shrink-0">&#10003;</span>
                    <div>
                      <p className="font-semibold text-text-main text-sm">Fado auténtico</p>
                      <p className="text-text-secondary text-xs leading-relaxed mt-0.5">Tasca do Chico es gratis y auténtico. Llega antes de las 21:00 para tener mesa.</p>
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
          <p className="font-display italic text-white text-3xl mb-4">Dos días perfectos en Lisboa</p>
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
                  href="/donar?guide=lisboa-2-dias-completo"
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
                href="/checkout/lisboa-2-dias-completo"
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
