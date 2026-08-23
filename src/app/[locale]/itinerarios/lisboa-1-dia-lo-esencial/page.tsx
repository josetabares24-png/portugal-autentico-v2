import { ItineraryHero } from '@/components/itinerarios/ItineraryHero';
import { ItineraryDayOverview } from '@/components/itinerarios/ItineraryDayOverview';
import { ItineraryDay } from '@/components/itinerarios/ItineraryDay';
import { ItineraryMapSection } from '@/components/itinerarios/ItineraryMapSection';
import { ItineraryPersonalizeCTA } from '@/components/itinerarios/ItineraryPersonalizeCTA';
import { lisboa1DiaDays, lisboa1DiaTimeline } from '@/data/itineraries';
import { agruparPorDia } from '@/lib/itinerary-days';

/*
 * Lisboa en 1 día, migrado al sistema del piloto.
 *
 * Es un solo día y se pinta como un solo día: una jornada, sin partirla en
 * capítulos que no existen. Los componentes ya lo contemplan —el resumen se
 * titula «Tu día de un vistazo» y la cabecera no dice «Día 1 de 1»—, así que
 * la simetría con el itinerario de tres días es de lenguaje, no de estructura.
 *
 * Server Component: el itinerario entero llega en el HTML. Sólo se hidratan el
 * mapa, que ya era así, y el enlace de reserva del castillo.
 *
 * Metadata, canonical, Open Graph, JSON-LD y URL: sin tocar.
 */

export const metadata = {
  title: 'Lisboa en 1 Día: Lo Esencial 2026',
  description: '8 paradas imprescindibles en Lisboa en un solo día. Alfama, Castillo, Belém y más. Itinerario optimizado con horarios y consejos locales.',
  keywords: ['lisboa 1 dia', 'itinerario lisboa un dia', 'que ver lisboa'],
  openGraph: { url: 'https://estabaenlisboa.com/itinerarios/lisboa-1-dia-lo-esencial' },
  alternates: { canonical: 'https://estabaenlisboa.com/itinerarios/lisboa-1-dia-lo-esencial' },
};

const SLUG = 'lisboa-1-dia-lo-esencial';

/*
 * Lo que conviene llevar resuelto antes de salir. Estaba en la versión
 * anterior como «Antes de empezar» y se conserva: es información real y útil,
 * y borrarla por rediseñar sería perder contenido.
 */
const ANTES_DE_SALIR = [
  'Empieza a las 09:00 en la Catedral Sé y sube caminando hacia el castillo.',
  'Lleva calzado cómodo: la calçada portuguesa puede ser resbaladiza.',
  'Para ir a Belém después de comer, usa el tranvía 15E desde Praça da Figueira o un Uber.',
  'En el castillo hay calor y poca sombra: lleva agua, gorra y algo ligero.',
];

export default function Lisboa1DiaPage() {
  const dias = agruparPorDia(lisboa1DiaTimeline, lisboa1DiaDays);
  const totalParadas = lisboa1DiaTimeline.length;

  const horas = dias.flatMap((d) => d.stops.map((s) => s.time)).sort();
  const primeraHora = horas[0] ?? '';
  const ultimaHora = horas[horas.length - 1] ?? '';

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'Lisboa en 1 Día: Lo Esencial 2026',
    description: '8 paradas imprescindibles en Lisboa en un solo día. Alfama, Castillo, Belém y más. Itinerario optimizado con horarios y consejos locales.',
    url: 'https://estabaenlisboa.com/itinerarios/lisboa-1-dia-lo-esencial',
    isAccessibleForFree: true,
  };

  return (
    <main id="main-content" className="bg-background-light">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <ItineraryHero
        eyebrow="Itinerario"
        breadcrumbLabel="Lisboa en 1 día"
        title="Lisboa en 1 día"
        lead="La ruta más eficiente para ver lo esencial sin correr: Alfama y el castillo por la mañana, Belém y LX Factory por la tarde, y Bairro Alto de noche. Con la hora de cada parada y el mapa al final."
        image="/images/alfama-panoramica.jpg"
        imageAlt="Vista panorámica de los tejados de Alfama y el río Tajo, en Lisboa"
        meta={[
          { label: 'Duración', value: '1 día', icon: 'schedule' },
          { label: 'Paradas', value: `${totalParadas}`, icon: 'location_on' },
          { label: 'Horario', value: `${primeraHora}–${ultimaHora}`, icon: 'event' },
          { label: 'Cómo moverse', value: 'A pie y tranvía', icon: 'directions_walk' },
        ]}
      />

      <div className="mx-auto max-w-4xl px-6 pt-10 md:px-8 md:pt-14">
        <ItineraryDayOverview dias={dias} />
      </div>

      <section className="mx-auto max-w-4xl scroll-mt-20 px-6 pt-12 md:px-8 md:pt-14" id="antes-de-salir">
        <h2 className="mb-1.5 font-display text-2xl font-semibold not-italic leading-tight text-text-main md:text-[1.75rem]">
          Antes de salir
        </h2>
        <p className="mb-5 max-w-[62ch] font-body text-[15px] leading-relaxed text-text-secondary">
          Cuatro cosas que ahorran tiempo si las dejas resueltas antes de empezar.
        </p>
        <ul className="grid gap-3 sm:grid-cols-2">
          {ANTES_DE_SALIR.map((linea) => (
            <li
              key={linea}
              className="border-l-2 border-gold bg-white/70 px-4 py-3.5 font-body text-sm leading-relaxed text-text-secondary"
            >
              {linea}
            </li>
          ))}
        </ul>
      </section>

      <div className="mx-auto max-w-4xl px-6 pt-12 md:px-8 md:pt-16">
        {dias.map((dia) => (
          <ItineraryDay key={dia.day} dia={dia} totalDias={dias.length} itinerarySlug={SLUG} />
        ))}
      </div>

      <ItineraryMapSection
        dias={dias}
        mapTitle="Mapa del itinerario"
        mapDescription="Las paradas del día, numeradas en el mismo orden en que aparecen aquí arriba."
        guideTitle="Lisboa en 1 día"
      />

      <ItineraryPersonalizeCTA currentSlug={SLUG} currentDays={1} />
    </main>
  );
}
