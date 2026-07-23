import Link from 'next/link';
import Image from 'next/image';
import { TimelineStop } from '@/components/itinerarios/TimelineStop';
import { TimelineContainer } from '@/components/itinerarios/TimelineContainer';
import { IncludedFeatures } from '@/components/itinerarios/IncludedFeatures';
import { PhotoGallery } from '@/components/itinerarios/PhotoGallery';
import { PremiumContent } from '@/components/itinerarios/PremiumContent';
import { lisboa1DiaTimeline } from '@/data/itineraries';

export const metadata = {
  title: 'Lisboa en 1 Día: Lo Esencial 2026',
  description: '8 paradas imprescindibles en Lisboa en un solo día. Alfama, Castillo, Belém y más. Itinerario optimizado con horarios y consejos locales.',
  keywords: ['lisboa 1 dia', 'itinerario lisboa un dia', 'que ver lisboa'],
  openGraph: { url: 'https://estabaenlisboa.com/itinerarios/lisboa-1-dia-lo-esencial' },
  alternates: { canonical: 'https://estabaenlisboa.com/itinerarios/lisboa-1-dia-lo-esencial' },
};

export default function Lisboa1DiaPage() {
  const displayStops = lisboa1DiaTimeline;
  const totalStops = lisboa1DiaTimeline.length;

  const photos = [
    { url: '/images/alfama-panoramica.jpg', caption: 'Alfama desde las alturas' },
    { url: '/images/tranvia-28.jpg', caption: 'Tranvía 28 en Alfama' },
    { url: '/images/funicular-bica-turistas.jpg', caption: 'Funicular da Bica' },
    { url: '/images/alfama-panoramica.jpg', caption: 'Lisboa panorámica' },
  ];

  return (
    <main id="main-content">
      {/* Hero */}
      <section className="relative h-[55vh] min-h-[340px] overflow-hidden">
        <Image
          src="/images/alfama-panoramica.jpg"
          alt="Lisboa en 1 día - Lo esencial"
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
            Lisboa en 1 Día
          </h1>
          <p className="text-white/70 text-sm">Lo esencial · {totalStops} paradas · Alfama, Castillo, Belém</p>
        </div>
      </section>

      {/* Sticky bar */}
      <section className="bg-background-light sticky top-16 z-30 border-b border-border-soft">
        <div className="max-w-5xl mx-auto px-6 py-3 flex items-center justify-between">
          <span className="font-display italic text-text-main text-sm">Lo Esencial de Lisboa</span>
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
              <h3 className="font-semibold text-text-main text-sm mb-1">Duración</h3>
              <p className="text-text-secondary text-sm">1 día completo (9:00 – 21:00)</p>
            </div>
            <div className="card-surface p-5 border-t-2 border-gold">
              <h3 className="font-semibold text-text-main text-sm mb-1">Paradas</h3>
              <p className="text-text-secondary text-sm">{totalStops} lugares imprescindibles</p>
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
        productId="lisboa-1-dia-lo-esencial"
        productName="Lisboa en 1 Día"
        coordinates={lisboa1DiaTimeline
          .filter(stop => stop.coordinates)
          .map(stop => stop.coordinates!)}
        mapTitle="Mapa del itinerario"
        mapDescription="Todas las paradas del día con coordenadas GPS. Haz click en los marcadores para ver cada parada."
        guideTitle="Lisboa en 1 Día"
        publicAccess
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
                      <p className="font-semibold text-text-main text-sm">Calzado cómodo</p>
                      <p className="text-text-secondary text-xs leading-relaxed mt-0.5">La calçada portuguesa es resbaladiza. Nada de tacones ni suela lisa.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-terracotta mt-0.5 flex-shrink-0">&#10003;</span>
                    <div>
                      <p className="font-semibold text-text-main text-sm">Tarjeta Viva Viagem</p>
                      <p className="text-text-secondary text-xs leading-relaxed mt-0.5">Recargable para metro y bus. Evitas colas y es más barata que los billetes sueltos.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-terracotta mt-0.5 flex-shrink-0">&#10003;</span>
                    <div>
                      <p className="font-semibold text-text-main text-sm">Tranvía 28</p>
                      <p className="text-text-secondary text-xs leading-relaxed mt-0.5">Evita de 11:00 a 16:00 (masificado). Tómalo por la mañana temprano o tarde.</p>
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
          <p className="font-display italic text-white text-4xl mb-4">Lo esencial de Lisboa en un día</p>
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
