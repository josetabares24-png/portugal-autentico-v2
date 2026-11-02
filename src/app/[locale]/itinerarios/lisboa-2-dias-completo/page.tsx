import GrokTwoDayItinerary from '@/components/itinerarios/GrokTwoDayItinerary';
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

/*
 * La descripción prometía restaurantes contrastados uno a uno. Ese proceso no
 * existe: son recomendaciones editoriales. La promesa se cae también de aquí,
 * como ya se cayó de la tarjeta del hub.
 *
 * La cadena vive en una constante compartida con el JSON-LD de más abajo. Eran
 * dos copias idénticas escritas a mano, y corregir una sin la otra habría
 * dejado el structured data contradiciendo al `<meta>`.
 */
const DESCRIPCION = '2 días completos en Lisboa con Belém, Alfama, Chiado y más. Rutas por jornadas, restaurantes recomendados y consejos prácticos.';

export const metadata = {
  title: 'Lisboa en 2 días: itinerario completo',
  description: DESCRIPCION,
  keywords: ['lisboa 2 dias', 'itinerario lisboa dos dias', 'belem alfama chiado'],
  openGraph: {
    url: 'https://estabaenlisboa.com/itinerarios/lisboa-2-dias-completo',
    images: [{ url: 'https://estabaenlisboa.com/images/tranvia-28.jpg', alt: 'El tranvía 28 en Lisboa' }],
  },
  alternates: { canonical: 'https://estabaenlisboa.com/itinerarios/lisboa-2-dias-completo' },
};

const SLUG = 'lisboa-2-dias-completo';

export default function Lisboa2DiasCompletoPage() {
  const dias = agruparPorDia(lisboa2DiasTimeline, lisboa2DiasDays);
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'Lisboa en 2 Días: Itinerario Completo 2026',
    description: DESCRIPCION,
    url: 'https://estabaenlisboa.com/itinerarios/lisboa-2-dias-completo',
    isAccessibleForFree: true,
  };

  return (
    <main id="main-content" className="grok-itinerary-page">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <GrokTwoDayItinerary>
      <details className="grok-original-route" id="recorrido-completo">
        <summary>Recorrido detallado: las {lisboa2DiasTimeline.length} paradas, mapa y reservas</summary>
        <p className="px-6 pt-6 text-base leading-relaxed">El resumen de arriba es flexible. Aquí conservamos la ruta editorial completa, con sus recomendaciones y enlaces de reserva. Las horas son orientativas; elige las visitas que encajen en tu viaje.</p>
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
      </details>
      </GrokTwoDayItinerary>
    </main>
  );
}
