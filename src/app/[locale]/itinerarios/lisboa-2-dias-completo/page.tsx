import { ItineraryHero } from '@/components/itinerarios/ItineraryHero';
import { ItineraryDayOverview } from '@/components/itinerarios/ItineraryDayOverview';
import { ItineraryDay } from '@/components/itinerarios/ItineraryDay';
import { ItineraryMapSection } from '@/components/itinerarios/ItineraryMapSection';
import { ItineraryPersonalizeCTA } from '@/components/itinerarios/ItineraryPersonalizeCTA';
import { lisboa2DiasDays, lisboa2DiasTimeline } from '@/data/itineraries';
import { agruparPorDia } from '@/lib/itinerary-days';

/*
 * Lisboa en 2 días, migrado al sistema del piloto.
 *
 * El día viajaba escondido dentro del campo de la hora (`'09:00 - Día 1'`),
 * igual que en el de tres. Ahora vive en su propio campo y la página se lee
 * como dos capítulos en lugar de once paradas seguidas.
 *
 * No se ha reescrito el itinerario: las once paradas son las mismas, con sus
 * mismos textos. Lo único nuevo son las dos cabeceras de jornada.
 *
 * Metadata, canonical, Open Graph, JSON-LD y URL: sin tocar.
 */

export const metadata = {
  title: 'Lisboa en 2 Días: Itinerario Completo 2026',
  description: '2 días completos en Lisboa con Belém, Alfama, Chiado y más. Horarios optimizados, restaurantes verificados y consejos de local.',
  keywords: ['lisboa 2 dias', 'itinerario lisboa dos dias', 'belem alfama chiado'],
  openGraph: { url: 'https://estabaenlisboa.com/itinerarios/lisboa-2-dias-completo' },
  alternates: { canonical: 'https://estabaenlisboa.com/itinerarios/lisboa-2-dias-completo' },
};

const SLUG = 'lisboa-2-dias-completo';

export default function Lisboa2DiasCompletoPage() {
  const dias = agruparPorDia(lisboa2DiasTimeline, lisboa2DiasDays);
  const totalParadas = lisboa2DiasTimeline.length;

  const horas = dias.flatMap((d) => d.stops.map((s) => s.time)).sort();
  const primeraHora = horas[0] ?? '';
  const ultimaHora = horas[horas.length - 1] ?? '';

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'Lisboa en 2 Días: Itinerario Completo 2026',
    description: '2 días completos en Lisboa con Belém, Alfama, Chiado y más. Horarios optimizados, restaurantes verificados y consejos de local.',
    url: 'https://estabaenlisboa.com/itinerarios/lisboa-2-dias-completo',
    isAccessibleForFree: true,
  };

  return (
    <main id="main-content" className="bg-background-light">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <ItineraryHero
        eyebrow="Itinerario"
        breadcrumbLabel="Lisboa en 2 días"
        title="Lisboa en 2 días"
        lead="Dos jornadas cerradas: el centro histórico y el tranvía 28 el primer día, Belém y LX Factory el segundo, con fado en Alfama para cerrar. Con la hora de cada parada y el mapa al final."
        image="/images/miradouro-atardecer.jpg"
        imageAlt="Atardecer desde un miradouro de Lisboa, con los tejados del centro al fondo"
        meta={[
          { label: 'Duración', value: '2 días', icon: 'schedule' },
          { label: 'Paradas', value: `${totalParadas}`, icon: 'location_on' },
          { label: 'Horario', value: `${primeraHora}–${ultimaHora}`, icon: 'event' },
          { label: 'Cómo moverse', value: 'A pie y tranvía', icon: 'directions_walk' },
        ]}
      />

      <div className="mx-auto max-w-4xl px-6 pt-10 md:px-8 md:pt-14">
        <ItineraryDayOverview dias={dias} />
      </div>

      <div className="mx-auto max-w-4xl space-y-12 px-6 pt-12 md:space-y-16 md:px-8 md:pt-16">
        {dias.map((dia) => (
          <ItineraryDay key={dia.day} dia={dia} totalDias={dias.length} itinerarySlug={SLUG} />
        ))}
      </div>

      <ItineraryMapSection
        dias={dias}
        mapTitle="Mapa del itinerario"
        mapDescription="Las paradas de los dos días, numeradas en el mismo orden en que aparecen aquí arriba."
        guideTitle="Lisboa en 2 días"
      />

      <ItineraryPersonalizeCTA currentSlug={SLUG} currentDays={2} />
    </main>
  );
}
