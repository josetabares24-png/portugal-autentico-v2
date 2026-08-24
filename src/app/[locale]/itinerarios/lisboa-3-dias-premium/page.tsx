import Link from 'next/link';
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
 * Sigue siendo un Server Component: el itinerario entero se pinta en servidor
 * y llega en el HTML. Lo único que se hidrata son el mapa (que ya era así) y
 * los dos enlaces de reserva.
 *
 * CONSOLIDACIÓN DE /blog/que-hacer-en-lisboa-en-3-dias
 *
 * Esta página y aquel artículo competían por la misma intención de búsqueda
 * («lisboa en 3 días», «qué hacer en lisboa en 3 días», «itinerario lisboa 3
 * días»), que resuelve una sola SERP. No había duplicación literal —eran dos
 * textos escritos por separado—, pero sí semántica: los días 1 y 2 coincidían
 * en zona, en orden y hasta en el mirador de cierre.
 *
 * Peor todavía, el día 3 se contradecía: el artículo desaconsejaba Sintra en
 * una primera visita de tres días y esta página la daba por hecha, con Sintra
 * hasta en el title.
 *
 * De aquel artículo se absorbe aquí lo que sólo él tenía —cuánto tiempo pide
 * cada zona, qué cambiar si llueve, criterio para comer, errores frecuentes y
 * la decisión Lisboa/Sintra— y su URL pasa a redirigir aquí.
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
 *
 * Fuera el año: era una fecha que caducaba sola en el title y en el meta.
 * Y Sintra deja de encabezar la promesa: la intención principal de la página
 * es Lisboa en 3 días, y Sintra es la variante del tercer día.
 */
const DESCRIPCION = 'Ruta de 3 días por Lisboa con el casco histórico, Belém y el río, más de 20 paradas con horas, mapa, y un tercer día que puedes dedicar a Sintra o a seguir en la ciudad.';

const OG_TITLE = 'Lisboa en 3 días: itinerario completo';
const OG_IMAGE = 'https://estabaenlisboa.com/images/alfama-panoramica.jpg';

export const metadata = {
  title: OG_TITLE,
  description: DESCRIPCION,
  keywords: ['lisboa 3 dias', 'que hacer en lisboa en 3 dias', 'itinerario lisboa 3 dias', 'lisboa sintra'],
  /*
   * Open Graph sólo declaraba la URL, así que el título y la descripción que
   * salían al compartir eran los genéricos del layout —los del sitio entero— y
   * no había imagen propia. Ahora los tres son de esta página.
   */
  openGraph: {
    title: OG_TITLE,
    description: DESCRIPCION,
    url: 'https://estabaenlisboa.com/itinerarios/lisboa-3-dias-premium',
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: 'Los tejados de Alfama y el río Tajo, en Lisboa' }],
  },
  /*
   * Mismo problema y misma solución que en el hub de itinerarios: sin este
   * bloque, Twitter heredaba el `twitter:title` y el `twitter:description`
   * globales del layout y mostraba una tarjeta genérica mientras Open Graph
   * enseñaba el texto correcto.
   *
   * `card` e `images` se repiten aquí a propósito: Next.js no fusiona el
   * objeto `twitter` con el del layout, lo sustituye entero. Declarar sólo
   * título y descripción habría dejado la página sin `summary_large_image` y
   * sin imagen.
   */
  twitter: {
    card: 'summary_large_image',
    title: OG_TITLE,
    description: DESCRIPCION,
    images: [OG_IMAGE],
  },
  alternates: { canonical: 'https://estabaenlisboa.com/itinerarios/lisboa-3-dias-premium' },
};

const SLUG = 'lisboa-3-dias-premium';

/*
 * Cuánto tiempo pide cada zona. Viene del artículo consolidado y es lo que más
 * echaba en falta esta página: el itinerario da la hora de cada parada, pero no
 * decía cuánto ocupa un bloque si uno se sale del guion.
 */
const TIEMPOS_POR_ZONA = [
  { zona: 'Baixa y Chiado', tiempo: 'entre 2,5 y 4 horas', nota: 'según las pausas y si entras en algún interior.' },
  { zona: 'Alfama y los miradores de al lado', tiempo: 'entre 3 y 5 horas', nota: 'si lo haces subiendo y bajando sin correr.' },
  { zona: 'Belém', tiempo: 'media jornada amplia', nota: 'más si entras en varios monumentos.' },
  { zona: 'Un barrio tranquilo: Príncipe Real, Estrela o Graça', tiempo: 'una mañana o una tarde', nota: 'no encaja como relleno de media hora.' },
];

/*
 * Consejos de logística de Sintra que ya estaban en la página anterior. Se
 * conservan: son información real y útil. Cambia dónde van —dentro de la
 * sección que decide si Sintra toca o no— y cómo se presentan.
 */
const CONSEJOS_SINTRA = [
  {
    titulo: 'Sal temprano',
    texto: 'Coge uno de los primeros trenes desde Rossio. Llegas antes que los grupos organizados y la mañana cunde el doble.',
  },
  {
    titulo: 'Entradas con hora',
    texto: 'La Pena se entra con día y hora reservados, y en la Regaleira el billete vale sólo para el momento que indica. Cómpralas online con antelación.',
  },
  {
    titulo: 'Orden óptimo',
    texto: 'Bus 434 desde el centro: Pena primero (frío, niebla matinal), Castelo dos Mouros, Regaleira al final.',
  },
];

const ERRORES = [
  'Meter Alfama, Belém y LX Factory el mismo día. Son extremos opuestos de la ciudad y el día se va en trayectos.',
  'Dormir lejos del metro dando por hecho que en Lisboa todo queda cerca. Las cuestas cambian la escala real del mapa.',
  'Subirse al tranvía 28 en hora punta esperando que sea transporte rápido. No lo es: va lleno y para en todas partes.',
  'Elegir restaurantes concretos por toda la ciudad y acabar cruzándola para comer, reorganizando la tarde entera.',
  'No dejar margen para descansar. En una ciudad de escaleras, la pausa es parte de la logística, no un lujo.',
];

/*
 * FAQ. Cada respuesta se corresponde con algo que está escrito y visible en
 * esta misma página: la de los días con el reparto por jornadas, la de Sintra
 * con la sección del tercer día, y la de la lluvia con su propio bloque. Si
 * alguna deja de tener respaldo arriba, hay que quitarla también de aquí.
 */
const FAQ = [
  {
    question: '¿Son suficientes 3 días para ver Lisboa?',
    answer: 'Sí, si agrupas la ruta por zonas en lugar de perseguir monumentos sueltos: casco histórico y Alfama el primer día, Belém y el río el segundo, y un tercero para barrios y miradores o para una excursión a Sintra.',
  },
  {
    question: '¿Merece la pena ir a Sintra en un viaje de 3 días?',
    answer: 'Depende de a qué vengas. Sintra ocupa el día entero, así que sumarla significa ver menos Lisboa. Si Sintra es una prioridad para ti, encaja bien en el tercer día. Si es tu primera vez y lo que quieres es conocer la ciudad, ese día rinde más quedándote en Lisboa.',
  },
  {
    question: '¿Qué día conviene dedicar a Belém?',
    answer: 'El segundo funciona mejor. Llegas con el centro ya entendido, es zona llana y descansa después de un primer día de cuestas. Además Belém se disfruta más por la mañana, antes del calor y de los grupos.',
  },
  {
    question: '¿Cuánto tiempo hay que dedicar a cada zona de Lisboa?',
    answer: 'Baixa y Chiado piden entre 2,5 y 4 horas; Alfama y sus miradores, entre 3 y 5 si lo haces sin correr; Belém, media jornada amplia. Un barrio tranquilo como Príncipe Real o Estrela ocupa una mañana o una tarde entera, no un hueco de media hora.',
  },
  {
    question: '¿Qué hacer en Lisboa en 3 días si llueve?',
    answer: 'Bajar a lo llano y tirar de interiores: la Baixa, los cafés históricos, los mercados cubiertos y los museos. Los miradores conviene dejarlos para una ventana seca, porque sin vista no compensan la subida y la calzada portuguesa mojada resbala bastante.',
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
    name: 'Lisboa en 3 días: itinerario completo',
    description: DESCRIPCION,
    url: 'https://estabaenlisboa.com/itinerarios/lisboa-3-dias-premium',
    isAccessibleForFree: true,
  };

  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: FAQ.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: { '@type': 'Answer', text: item.answer },
    })),
  };

  return (
    <main id="main-content" className="bg-background-light">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      <ItineraryHero
        eyebrow="Itinerario"
        breadcrumbLabel="Lisboa en 3 días"
        title="Lisboa en 3 días"
        lead="Dos jornadas por la ciudad —el casco histórico a pie, y Belém con el Tajo— y un tercer día que puedes dedicar a Sintra o a seguir en Lisboa. Con las horas de cada parada, los consejos de siempre y el mapa al final."
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

      <section className="mx-auto max-w-4xl scroll-mt-20 px-6 pt-12 md:px-8 md:pt-16" id="cuanto-tiempo">
        <h2 className="mb-1.5 font-display text-2xl font-semibold not-italic leading-tight text-text-main md:text-[1.75rem]">
          Cuánto tiempo pide cada zona
        </h2>
        <p className="mb-6 max-w-[62ch] font-body text-[15px] leading-relaxed text-text-secondary">
          Las horas de más abajo son una propuesta, no una obligación. Si te sales del guion,
          esto es lo que ocupa cada bloque en la práctica. Lisboa castiga los planes que sobre
          el mapa parecen eficientes pero obligan a cruzar colinas.
        </p>

        <ul className="grid gap-4 sm:grid-cols-2">
          {TIEMPOS_POR_ZONA.map((t) => (
            <li key={t.zona} className="border-l-2 border-gold bg-white/70 px-4 py-4">
              <h3 className="mb-1 font-body text-sm font-semibold not-italic text-text-main">{t.zona}</h3>
              <p className="font-body text-sm leading-relaxed text-text-secondary">
                <span className="text-text-main">{t.tiempo}</span>, {t.nota}
              </p>
            </li>
          ))}
        </ul>
      </section>

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

      {/*
        La sección que resuelve la contradicción. Antes esta página daba Sintra
        por hecha desde el title, y el artículo que ahora redirige aquí decía lo
        contrario. Ni una cosa ni la otra: Sintra es una variante buena para
        quien la tenga como prioridad, y una mala idea para quien viene a
        conocer Lisboa por primera vez. La página lo dice y ofrece las dos.
      */}
      <section className="mx-auto max-w-4xl scroll-mt-20 px-6 pb-6 pt-12 md:px-8 md:pt-16" id="tercer-dia">
        <h2 className="mb-1.5 font-display text-2xl font-semibold not-italic leading-tight text-text-main md:text-[1.75rem]">
          El tercer día: Sintra o seguir en Lisboa
        </h2>
        <p className="mb-4 max-w-[62ch] font-body text-[15px] leading-relaxed text-text-secondary">
          El itinerario de arriba dedica el tercer día a Sintra porque es la combinación que
          más gente busca, pero conviene decir en voz alta lo que cuesta: Sintra se lleva la
          jornada entera contando el tren, y eso significa ver menos Lisboa. No es una parada
          más del recorrido, es un cambio de ciudad.
        </p>
        <p className="mb-6 max-w-[62ch] font-body text-[15px] leading-relaxed text-text-secondary">
          Merece la pena si Sintra era una de las razones del viaje, si ya conocías Lisboa, o
          si aceptas de antemano dejar barrios sin ver. Si es tu primera vez y lo que quieres
          es conocer la ciudad, ese tercer día rinde más quedándote: Príncipe Real, Estrela,
          Mouraria o Graça con calma, más miradores sin repetir los del primer día, o cruzar
          el Tajo en barco para verla entera desde la otra orilla. Lisboa tiene capas de
          sobra para llenar tres días sin salir de ella.
        </p>

        <h3 className="mb-3 font-body text-base font-semibold not-italic text-text-main">
          Si eliges Sintra, tres cosas que conviene dejar resueltas la noche anterior
        </h3>
        <ul className="grid gap-4 sm:grid-cols-3">
          {CONSEJOS_SINTRA.map((c) => (
            <li key={c.titulo} className="border-l-2 border-gold bg-white/70 px-4 py-4">
              <h4 className="mb-1 font-body text-sm font-semibold not-italic text-text-main">{c.titulo}</h4>
              <p className="font-body text-sm leading-relaxed text-text-secondary">{c.texto}</p>
            </li>
          ))}
        </ul>
        <p className="mt-5 max-w-[62ch] font-body text-[15px] leading-relaxed text-text-secondary">
          El orden de visita, cómo moverse por la sierra y qué palacios elegir están
          desarrollados en{' '}
          <Link href="/blog/sintra-desde-lisboa" className="text-terracotta underline underline-offset-2 hover:no-underline">
            la guía de Sintra
          </Link>
          .
        </p>
      </section>

      <section className="mx-auto max-w-4xl scroll-mt-20 px-6 pt-10 md:px-8 md:pt-12" id="si-llueve">
        <h2 className="mb-1.5 font-display text-2xl font-semibold not-italic leading-tight text-text-main md:text-[1.75rem]">
          Qué cambiar si llueve
        </h2>
        <p className="max-w-[62ch] font-body text-[15px] leading-relaxed text-text-secondary">
          Lisboa con lluvia pide menos mirador y más interior. Cambia Santa Luzia por el
          Convento do Carmo, un museo o un café largo; deja Belém para una ventana seca si
          puedes permitírtelo; y baja a la Baixa, que es la zona llana. La calzada portuguesa
          es bonita y, mojada, resbala de verdad: en una cuesta de Alfama eso importa más que
          el paraguas.
        </p>
      </section>

      <section className="mx-auto max-w-4xl scroll-mt-20 px-6 pt-10 md:px-8 md:pt-12" id="donde-comer">
        <h2 className="mb-1.5 font-display text-2xl font-semibold not-italic leading-tight text-text-main md:text-[1.75rem]">
          Comer sin montar una ruta gastronómica
        </h2>
        <p className="mb-4 max-w-[62ch] font-body text-[15px] leading-relaxed text-text-secondary">
          En tres días no compensa perseguir restaurantes por toda la ciudad. Come cerca de
          donde ya estés: en Baixa y Chiado, saliendo de las calles más obvias; en Alfama,
          evitando los locales con la carta en cinco idiomas a la puerta; en Belém, asumiendo
          que la oferta es más turística y compensando con una cena de barrio.
        </p>
        <p className="max-w-[62ch] font-body text-[15px] leading-relaxed text-text-secondary">
          Un consejo que ahorra más tiempo del que parece: elige una comida al día como pausa
          de verdad y deja las otras flexibles. Lo que descoloca un itinerario no es comer
          mal, es cruzar media ciudad para llegar a un sitio concreto y tener que rehacer la
          tarde entera.
        </p>
      </section>

      <section className="mx-auto max-w-4xl scroll-mt-20 px-6 pt-10 md:px-8 md:pt-12" id="errores">
        <h2 className="mb-1.5 font-display text-2xl font-semibold not-italic leading-tight text-text-main md:text-[1.75rem]">
          Errores frecuentes en una ruta de 3 días
        </h2>
        <ul className="mt-4 space-y-3">
          {ERRORES.map((e) => (
            <li key={e} className="flex gap-3 font-body text-[15px] leading-relaxed text-text-secondary">
              <span aria-hidden="true" className="mt-[0.45rem] h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
              <span className="max-w-[62ch]">{e}</span>
            </li>
          ))}
        </ul>
        <p className="mt-5 max-w-[62ch] font-body text-[15px] leading-relaxed text-text-secondary">
          Para encadenar las zonas sin perder el día en trayectos, conviene tener claro qué
          transporte toca en cada caso:{' '}
          <Link href="/blog/como-moverse-por-lisboa" className="text-terracotta underline underline-offset-2 hover:no-underline">
            cómo moverse por Lisboa
          </Link>
          . Y si aún estás eligiendo dónde dormir,{' '}
          <Link href="/blog/donde-alojarse-en-lisboa" className="text-terracotta underline underline-offset-2 hover:no-underline">
            la zona de alojamiento
          </Link>{' '}
          es la decisión que más minutos te ahorra o te cuesta cada día.
        </p>
      </section>

      <ItineraryMapSection
        dias={dias}
        mapTitle="Mapa del itinerario"
        mapDescription="Lisboa y Sintra con todas las paradas. Haz click en los marcadores numerados para ver cada parada."
        guideTitle="Lisboa 3 Días + Sintra"
      />

      <section className="mx-auto max-w-4xl scroll-mt-20 px-6 pb-4 pt-4 md:px-8" id="preguntas-frecuentes">
        <h2 className="mb-6 font-display text-2xl font-semibold not-italic leading-tight text-text-main md:text-[1.75rem]">
          Preguntas frecuentes
        </h2>
        <div className="space-y-6">
          {FAQ.map((item) => (
            <div key={item.question} className="border-t border-border-soft pt-5">
              <h3 className="mb-1.5 font-body text-base font-semibold not-italic text-text-main">
                {item.question}
              </h3>
              <p className="max-w-[70ch] font-body text-[15px] leading-relaxed text-text-secondary">
                {item.answer}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-6 pb-12 pt-8 md:px-8">
        <p className="max-w-[70ch] border-l-2 border-border-soft pl-4 font-body text-sm leading-relaxed text-text-secondary">
          Las entradas y los horarios de monumentos y museos cambian, y algunos elementos de
          la ciudad pueden estar cerrados por obras durante temporadas largas. Antes de
          organizar un día alrededor de un sitio concreto, comprueba su estado y su tarifa en
          la web oficial del propio monumento o del operador de transporte.
        </p>
      </section>

      <ItineraryPersonalizeCTA currentSlug={SLUG} currentDays={3} />
    </main>
  );
}
