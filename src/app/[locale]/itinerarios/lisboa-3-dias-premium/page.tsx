import { ItineraryHero } from '@/components/itinerarios/ItineraryHero';
import { ItineraryDayOverview } from '@/components/itinerarios/ItineraryDayOverview';
import { ItineraryDay } from '@/components/itinerarios/ItineraryDay';
import { ItineraryMapSection } from '@/components/itinerarios/ItineraryMapSection';
import { ItineraryPersonalizeCTA } from '@/components/itinerarios/ItineraryPersonalizeCTA';
import { lisboa3DiasDays, lisboa3DiasSintraTimeline } from '@/data/itineraries';
import { agruparPorDia } from '@/lib/itinerary-days';

/*
 * Lisboa en 3 días. Página piloto del sistema visual de itinerarios.
 *
 * Lo que cambia respecto a la versión anterior no es el aspecto, es la
 * estructura: antes eran veinte paradas seguidas, numeradas del 1 al 20, sin
 * un solo `h2` y con el día escondido dentro del campo de la hora. Ahora son
 * tres capítulos con nombre, cada uno con su encabezado, su foto y sus
 * paradas, y el día vive en su propio campo (ver `data/itineraries/types.ts`).
 *
 * Sigue siendo un Server Component: el itinerario entero se pinta en servidor
 * y llega en el HTML. Lo único que se hidrata son el mapa (que ya era así) y
 * los dos enlaces de reserva.
 *
 * Metadata, canonical, Open Graph, JSON-LD y URL: sin tocar.
 */

/*
 * La descripción prometía restaurantes contrastados uno a uno y un horario
 * infalible para Sintra. Ninguna de las dos se sostiene: no hay proceso de
 * verificación detrás de las recomendaciones, y el horario de Sintra depende
 * del tren, de la cola y del día. Se sustituyen por lo que la página sí
 * entrega.
 *
 * Vive junto al JSON-LD de más abajo en una constante compartida para que no
 * puedan volver a divergir: antes eran dos cadenas iguales copiadas a mano, y
 * corregir una sin la otra habría dejado el structured data contradiciendo al
 * `<meta>`.
 */
const DESCRIPCION = '3 días en Lisboa y Sintra con rutas por jornadas, más de 20 paradas, consejos prácticos y planificación para visitar los principales puntos de Sintra.';

export const metadata = {
  title: 'Lisboa en 3 Días con Sintra 2026',
  description: DESCRIPCION,
  keywords: ['lisboa 3 dias', 'sintra itinerario', 'lisboa sintra', 'tres dias lisboa'],
  openGraph: { url: 'https://estabaenlisboa.com/itinerarios/lisboa-3-dias-premium' },
  alternates: { canonical: 'https://estabaenlisboa.com/itinerarios/lisboa-3-dias-premium' },
};

const SLUG = 'lisboa-3-dias-premium';

/*
 * Consejos de logística de Sintra que ya estaban en la página anterior, en un
 * bloque lateral. Se conservan tal cual: son información real y útil, y
 * borrarla por rediseñar sería perder contenido. Cambia dónde van —al final
 * del recorrido, que es cuando toca decidir la excursión— y cómo se presentan.
 */
const CONSEJOS_SINTRA = [
  {
    titulo: 'Sal temprano',
    texto: 'Primer tren desde Rossio a las 8:00. Llegas antes que los grupos y entras sin cola.',
  },
  {
    titulo: 'Entradas online',
    texto: 'Palacio da Pena y Quinta da Regaleira: compra online. En taquilla pueden estar agotadas.',
  },
  {
    titulo: 'Orden óptimo',
    texto: 'Bus 434 desde el centro: Pena primero (frío, niebla matinal), Castelo dos Mouros, Regaleira al final.',
  },
];

export default function Lisboa3DiasPremiumPage() {
  const dias = agruparPorDia(lisboa3DiasSintraTimeline, lisboa3DiasDays);
  const totalParadas = lisboa3DiasSintraTimeline.length;

  /*
   * Los datos de cabecera salen del itinerario, no de una lista escrita a
   * mano: si mañana se añade una parada, el número y el horario se corrigen
   * solos en vez de quedarse mintiendo.
   */
  const horas = dias.flatMap((d) => d.stops.map((s) => s.time)).sort();
  const primeraHora = horas[0] ?? '';
  const ultimaHora = horas[horas.length - 1] ?? '';

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'Lisboa en 3 Días con Sintra 2026',
    description: DESCRIPCION,
    url: 'https://estabaenlisboa.com/itinerarios/lisboa-3-dias-premium',
    isAccessibleForFree: true,
  };

  return (
    <main id="main-content" className="bg-background-light">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <ItineraryHero
        eyebrow="Itinerario"
        breadcrumbLabel="Lisboa en 3 días"
        title="Lisboa en 3 días"
        lead="Tres jornadas cerradas: el casco histórico a pie, Belém y el Tajo, y un día completo de excursión a Sintra. Con las horas de cada parada, los consejos de siempre y el mapa al final."
        image="/images/alfama-panoramica.jpg"
        imageAlt="Vista panorámica de los tejados de Alfama y el río Tajo, en Lisboa"
        meta={[
          { label: 'Duración', value: '3 días', icon: 'schedule' },
          { label: 'Paradas', value: `${totalParadas}`, icon: 'location_on' },
          { label: 'Horario', value: `${primeraHora}–${ultimaHora}`, icon: 'event' },
          { label: 'Cómo moverse', value: 'A pie, metro y tren', icon: 'directions_walk' },
        ]}
      />

      <div className="mx-auto max-w-4xl px-6 pt-10 md:px-8 md:pt-14">
        <ItineraryDayOverview dias={dias} />
      </div>

      <div className="mx-auto max-w-4xl space-y-12 px-6 pt-12 md:space-y-16 md:px-8 md:pt-16">
        {/*
          Ninguna foto de jornada lleva `priority`, ni siquiera la del día 1.
          La única imagen que compite por el LCP es la de la cabecera, y
          precargar una segunda que está por debajo del pliegue le robaría
          ancho de banda justo cuando más falta hace.
        */}
        {dias.map((dia) => (
          <ItineraryDay key={dia.day} dia={dia} totalDias={dias.length} itinerarySlug={SLUG} />
        ))}
      </div>

      <section className="mx-auto max-w-4xl scroll-mt-20 px-6 pb-14 pt-12 md:px-8 md:pt-16" id="antes-de-sintra">
        <h2 className="mb-1.5 font-display text-2xl font-semibold not-italic leading-tight text-text-main md:text-[1.75rem]">
          Antes de ir a Sintra
        </h2>
        <p className="mb-6 max-w-[62ch] font-body text-[15px] leading-relaxed text-text-secondary">
          El tercer día es el que más se puede torcer por logística. Tres cosas que conviene
          dejar resueltas la noche anterior.
        </p>

        <ul className="grid gap-4 sm:grid-cols-3">
          {CONSEJOS_SINTRA.map((c) => (
            <li key={c.titulo} className="border-l-2 border-gold bg-white/70 px-4 py-4">
              <h3 className="mb-1 font-body text-sm font-semibold not-italic text-text-main">{c.titulo}</h3>
              <p className="font-body text-sm leading-relaxed text-text-secondary">{c.texto}</p>
            </li>
          ))}
        </ul>
      </section>

      <ItineraryMapSection
        dias={dias}
        mapTitle="Mapa del itinerario"
        mapDescription="Lisboa y Sintra con todas las paradas. Haz click en los marcadores numerados para ver cada parada."
        guideTitle="Lisboa 3 Días + Sintra"
      />

      <ItineraryPersonalizeCTA currentSlug={SLUG} currentDays={3} />
    </main>
  );
}
