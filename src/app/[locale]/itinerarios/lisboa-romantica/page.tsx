import Link from 'next/link';
import Image from 'next/image';
import { TimelineStop } from '@/components/itinerarios/TimelineStop';
import { TimelineContainer } from '@/components/itinerarios/TimelineContainer';
import { IncludedFeatures } from '@/components/itinerarios/IncludedFeatures';
import { PhotoGallery } from '@/components/itinerarios/PhotoGallery';
import { PremiumContent } from '@/components/itinerarios/PremiumContent';
import { lisboaRomanticaTimeline } from '@/data/itineraries';

export const metadata = {
  title: 'Lisboa Romántica: Guía para Parejas 2026',
  description: 'Lisboa en pareja: miradores al atardecer, fado auténtico y cenas especiales. Los rincones más románticos de la ciudad.',
  keywords: ['lisboa romantica', 'lisboa pareja', 'viaje romantico lisboa', 'luna de miel lisboa'],
  openGraph: { url: 'https://estabaenlisboa.com/itinerarios/lisboa-romantica' },
  alternates: { canonical: 'https://estabaenlisboa.com/itinerarios/lisboa-romantica' },
};

export default function LisboaRomanticaPage() {
  const displayStops = lisboaRomanticaTimeline;
  const totalStops = lisboaRomanticaTimeline.length;

  const photos = [
    { url: '/images/alfama-panoramica.jpg', caption: 'Alfama al atardecer' },
    { url: '/images/tranvia-28.jpg', caption: 'Calles de Lisboa' },
    { url: '/images/alfama-panoramica.jpg', caption: 'Lisboa desde el río' },
    { url: '/images/funicular-bica-turistas.jpg', caption: 'Arquitectura romántica' },
  ];
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'Lisboa Romántica: Guía para Parejas 2026',
    description: 'Lisboa en pareja: miradores al atardecer, fado auténtico y cenas especiales. Los rincones más románticos de la ciudad.',
    url: 'https://estabaenlisboa.com/itinerarios/lisboa-romantica',
    isAccessibleForFree: true,
  };

  return (
    <main id="main-content">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      {/* Hero */}
      <section className="relative h-[55vh] min-h-[340px] overflow-hidden">
        <Image
          src="/images/alfama-panoramica.jpg"
          alt="Lisboa romántica para parejas"
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
          <h1 className="font-display italic text-white text-4xl md:text-6xl leading-tight mb-2">
            Lisboa Romántica
          </h1>
          <p className="text-white/70 text-sm">Para parejas · {totalStops} paradas · Miradores, fado y cenas</p>
        </div>
      </section>

      {/* Sticky bar */}
      <section className="bg-background-light sticky top-16 z-30 border-b border-border-soft">
        <div className="max-w-5xl mx-auto px-6 py-3 flex items-center justify-between">
          <span className="font-display italic text-text-main text-sm">Lisboa para Dos</span>
          <a href="#itinerario" className="text-terracotta font-semibold text-sm hover:underline underline-offset-2">
            Empezar ruta
          </a>
        </div>
      </section>

      {/* Resumen */}
      <section className="bg-background-light py-20">
        <div className="max-w-5xl mx-auto px-6">
          <p className="text-xs uppercase tracking-widest text-text-secondary mb-8 pb-3 border-b border-border-soft">
            Resumen de la guía
          </p>
          <div className="grid sm:grid-cols-3 gap-8">
            <div className="card-surface p-5 border-t-2 border-gold">
              <h3 className="font-semibold text-text-main text-sm mb-1">Para quién</h3>
              <p className="text-text-secondary text-sm">Parejas · Luna de miel · Escapada</p>
            </div>
            <div className="card-surface p-5 border-t-2 border-gold">
              <h3 className="font-semibold text-text-main text-sm mb-1">Paradas</h3>
              <p className="text-text-secondary text-sm">{totalStops} rincones románticos</p>
            </div>
            <div className="card-surface p-5 border-t-2 border-gold">
              <h3 className="font-semibold text-text-main text-sm mb-1">Acceso</h3>
              <p className="text-text-secondary text-sm">Guía gratuita</p>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="bg-background-light py-20 border-t border-border-soft" id="itinerario">
        <div className="max-w-4xl mx-auto px-6">
          <p className="text-xs uppercase tracking-widest text-text-secondary mb-2 pb-3 border-b border-border-soft">
            Itinerario día a día
          </p>
          <p className="text-xs uppercase tracking-widest font-semibold mb-10 text-terracotta">
            Ruta completa gratuita
          </p>

          <TimelineContainer lineColor="primary">
            {displayStops.map((stop, idx) => (
              <TimelineStop key={idx} {...stop} index={idx} />
            ))}
          </TimelineContainer>
        </div>
      </section>

      <IncludedFeatures />

      <PremiumContent
        coordinates={lisboaRomanticaTimeline
          .filter(stop => stop.coordinates)
          .map(stop => stop.coordinates!)}
        mapTitle="Mapa de rincones románticos"
        mapDescription="Miradores, restaurantes y lugares especiales para parejas. Haz click en los marcadores para ver cada parada."
        guideTitle="Lisboa Romántica"
      />

      {/* Galería + tips */}
      <section className="bg-background-light py-20 border-t border-border-soft" id="galeria">
        <div className="max-w-5xl mx-auto px-6">
          <p className="text-xs uppercase tracking-widest text-text-secondary mb-8 pb-3 border-b border-border-soft">
            Vista previa y consejos
          </p>
          <div className="grid lg:grid-cols-3 gap-10">
            <div className="lg:col-span-2">
              <PhotoGallery photos={photos} />
            </div>

            <div>
              <div className="card-surface p-6 border-l-2 border-gold">
                <p className="text-xs uppercase tracking-widest text-terracotta font-semibold mb-4">Tips de local</p>
                <ul className="space-y-5">
                  <li className="flex items-start gap-3">
                    <span className="text-terracotta mt-0.5 flex-shrink-0">&#10003;</span>
                    <div>
                      <p className="font-semibold text-text-main text-sm">Atardecer en Graça</p>
                      <p className="text-text-secondary text-xs leading-relaxed mt-0.5">Llega 45 minutos antes del sunset. El Miradouro da Graça es el más tranquilo de la ciudad.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-terracotta mt-0.5 flex-shrink-0">&#10003;</span>
                    <div>
                      <p className="font-semibold text-text-main text-sm">Chapitô</p>
                      <p className="text-text-secondary text-xs leading-relaxed mt-0.5">Reserva con 2-3 días de antelación. Las mejores mesas con vista al Tajo se agotan rápido.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-terracotta mt-0.5 flex-shrink-0">&#10003;</span>
                    <div>
                      <p className="font-semibold text-text-main text-sm">Mejor momento</p>
                      <p className="text-text-secondary text-xs leading-relaxed mt-0.5">Martes a jueves: menos turistas, más tranquilo, restaurantes con mejor trato.</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA final */}
      <section className="relative bg-night bg-azulejo-pattern-gold py-20 overflow-hidden">
        <div className="relative max-w-3xl mx-auto px-6 text-center">
          <p className="font-display italic text-white text-4xl mb-4">Lisboa para dos</p>
          <p className="text-white/60 text-sm mb-8">Ruta completa · Mapa y consejos · Actualizado 2026</p>
          <a
            href="#itinerario"
            className="btn-primary relative inline-flex px-8 py-3 text-sm"
          >
            Ver guía gratis
          </a>
        </div>
      </section>
    </main>
  );
}
