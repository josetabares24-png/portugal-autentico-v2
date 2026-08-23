import Icon from '@/components/Icon';
import { ItineraryStopCta } from '@/components/itinerarios/ItineraryStopCta';
import { findProductById, resolveBookingLink } from '@/data/bookings';
import type { TimelineStop } from '@/data/itineraries';

/*
 * Una parada del itinerario.
 *
 * Evoluciona `EditorialTimelineStop`, que ya iba por el buen camino, con tres
 * cambios de fondo:
 *
 * 1. El título es `h3` y cuelga del `h2` de su jornada. Antes era `h2` suelto
 *    o `h3` sin `h2` por encima, según la página; ahora la jerarquía dice la
 *    verdad: itinerario > día > parada.
 *
 * 2. La línea de tiempo es una línea de un píxel, no un carril. Conecta las
 *    paradas sin competir con ellas, que es lo único que tiene que hacer.
 *
 * 3. Los datos prácticos (hora, tipo, mapa, reserva) viven juntos, separados
 *    del texto editorial. Se lee la historia o se consulta el dato, sin
 *    tropezar el uno con el otro.
 *
 * Es un Server Component: no lleva ni un byte de JavaScript al navegador. Lo
 * único que se hidrata es el enlace de reserva, cuando lo hay.
 */

/**
 * Parte una descripción larga en párrafos.
 *
 * Las descripciones vienen del CMS como un bloque de ocho o diez frases, y a
 * 17 px eso es un muro. Se agrupan de tres en tres frases, que es donde deja
 * de leerse como telegrama y todavía respira.
 *
 * No se toca ni una palabra: sólo se decide dónde cae el punto y aparte. Si la
 * expresión no encuentra frases (por una abreviatura rara, por ejemplo), el
 * texto sale entero de una pieza, que es el peor caso aceptable.
 */
function enParrafos(texto: string, porParrafo = 3): string[] {
  const frases = texto
    .match(/[^.!?]+[.!?]+(?=\s+[A-ZÁÉÍÓÚÑ¿¡«"(]|$)|[^.!?]+$/g)
    ?.map((f) => f.trim())
    .filter(Boolean) ?? [texto];

  const parrafos: string[] = [];
  for (let i = 0; i < frases.length; i += porParrafo) {
    parrafos.push(frases.slice(i, i + porParrafo).join(' '));
  }
  return parrafos;
}

interface ItineraryStopProps {
  stop: TimelineStop;
  /** Número correlativo en el itinerario completo, empezando en 1. */
  numero: number;
  /** Última del día: sin ella la línea seguiría hasta el borde de la sección. */
  esUltima: boolean;
  /** Slug del itinerario, sólo para la medición del enlace de reserva. */
  itinerarySlug: string;
}

export function ItineraryStop({ stop, numero, esUltima, itinerarySlug }: ItineraryStopProps) {
  const parrafos = enParrafos(stop.description);
  const etiqueta = stop.type === 'food' ? 'Comer' : 'Visita';

  /*
   * Reserva sólo con producto exacto declarado. Sin `productId` no hay CTA, y
   * el emparejamiento no se adivina nunca por el nombre de la parada.
   */
  const producto = stop.productId ? findProductById(stop.productId) : undefined;
  const enlace = producto ? resolveBookingLink(producto, 'article') : null;

  return (
    <article className="relative scroll-mt-24 pb-9 last:pb-0 md:pb-11">
      {/* La línea: 1 px, discreta, y no se pinta bajo la última parada. */}
      {!esUltima && (
        <span
          aria-hidden="true"
          className="absolute left-[0.9375rem] top-9 bottom-0 w-px bg-border-soft md:left-[1.0625rem]"
        />
      )}

      <div className="grid grid-cols-[2rem,minmax(0,1fr)] gap-x-4 gap-y-3 md:grid-cols-[2.25rem,minmax(0,1fr)] md:gap-x-6">
        {/* Marca de la parada. Pequeña: el número orienta, no manda. */}
        <span
          aria-hidden="true"
          className="relative z-10 mt-1 flex h-8 w-8 items-center justify-center rounded-full border border-border-soft bg-white font-body text-xs font-semibold text-text-secondary md:h-[2.125rem] md:w-[2.125rem]"
        >
          {numero}
        </span>

        <div className="min-w-0">
          {/* Hora y tipo: el dato práctico va antes del nombre, porque en un
              itinerario lo primero que se busca es cuándo. */}
          <p className="mb-1 flex flex-wrap items-center gap-x-2 gap-y-1 font-body text-xs font-semibold uppercase tracking-widest text-text-secondary">
            <span className="text-terracotta">{stop.time}</span>
            <span aria-hidden="true" className="text-border-soft">·</span>
            <span>{etiqueta}</span>
          </p>

          <h3 className="mb-3 font-display text-xl font-semibold not-italic leading-snug text-text-main md:text-2xl">
            {stop.title}
          </h3>

          {/*
            `overflow-wrap: anywhere` no es un adorno: en la descripción del
            MAAT hay un «contemporáneo/instalaciones/arquitectura» de 39
            caracteres sin un solo espacio, y el navegador no parte por la
            barra. En una columna de 294 px eso desbordaba la página 24 px a
            lo ancho en móvil. Es la misma defensa que ya lleva el cuerpo de
            los artículos, y aquí hace falta más todavía porque la columna es
            más estrecha: la comparte con la línea de tiempo.
          */}
          <div className="max-w-[68ch] space-y-4 [overflow-wrap:anywhere]">
            {parrafos.map((p, i) => (
              <p key={i} className="font-body text-[16px] leading-[1.72] text-text-secondary md:text-[17px]">
                {p}
              </p>
            ))}
          </div>

          {/* Consejo. Caja discreta, sin color de fondo saturado: se distingue
              del texto por el filete y la etiqueta, no por gritar. */}
          {stop.tip && (
            <aside className="mt-5 max-w-[68ch] border-l-2 border-gold bg-white/70 px-4 py-3.5 [overflow-wrap:anywhere]">
              <p className="mb-1 font-body text-[11px] font-semibold uppercase tracking-widest text-text-secondary">
                Consejo
              </p>
              <p className="font-body text-sm leading-relaxed text-text-secondary">
                {stop.tip}
              </p>
            </aside>
          )}

          {/* Acciones. Mapa y reserva en la misma fila y con el mismo peso: en
              la planificación de un día son dos datos del mismo orden. */}
          {(stop.googleMapsUrl || enlace) && (
            <div className="mt-5 flex flex-wrap items-center gap-2.5">
              {stop.googleMapsUrl && (
                <a
                  href={stop.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  /* `btn-secondary` del sistema: mismo alto, mismo radio y
                     mismos estados que el resto de botones del sitio. Antes
                     esto era una píldora con estilos propios, de cuando el
                     sistema de botones todavía no existía. */
                  className="btn-secondary"
                >
                  <Icon name="map" size={15} aria-hidden="true" className="flex-shrink-0" />
                  Ver en el mapa
                  <span className="sr-only"> {stop.title} (se abre en una pestaña nueva)</span>
                </a>
              )}

              {producto && enlace && (
                <ItineraryStopCta
                  product={producto}
                  link={enlace}
                  itinerarySlug={itinerarySlug}
                  stopTitle={stop.title}
                />
              )}
            </div>
          )}
        </div>
      </div>
    </article>
  );
}
