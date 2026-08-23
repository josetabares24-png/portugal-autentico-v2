import Link from 'next/link';

/*
 * Cierre del itinerario: adaptarlo a tu viaje.
 *
 * Es la preparación visual de «Mi viaje a Lisboa», pero NO finge que esa
 * funcionalidad ya existe. El botón lleva a `/planifica-tu-viaje`, que es una
 * página real y en funcionamiento: recomienda según los días y el tipo de
 * viaje, y ofrece un plan a medida.
 *
 * Por eso el texto habla de lo que hoy pasa de verdad al pulsar. Un «Crear mi
 * viaje» que abriera un formulario de contacto sería exactamente la falsa
 * herramienta que no queremos: promete un generador y entrega otra cosa. El
 * día que exista el generador, cambia el destino y el texto; el bloque ya
 * está.
 */

export function ItineraryPersonalizeCTA() {
  return (
    <section className="border-t border-border-soft bg-background-light py-14 md:py-16">
      <div className="mx-auto max-w-4xl px-6 md:px-8">
        <div className="max-w-[58ch]">
          <p className="mb-2 font-body text-[11px] font-semibold uppercase tracking-[0.2em] text-terracotta">
            Adáptalo a tu viaje
          </p>
          <h2 className="mb-3 font-display text-2xl font-semibold not-italic leading-tight text-text-main md:text-[1.75rem]">
            ¿Vienes menos días, o más?
          </h2>
          <p className="mb-6 font-body text-[16px] leading-relaxed text-text-secondary md:text-[17px]">
            Este itinerario está pensado para tres días completos. Si tu viaje es más corto,
            más largo o va con niños, dinos cuántos días tienes y qué te apetece hacer y te
            decimos por dónde recortar o qué añadir.
          </p>
          <Link
            href="/planifica-tu-viaje"
            /* `btn-lg` del sistema en vez de mis tamaños a mano: el cierre de
               una página merece el botón grande, y el sistema ya lo define. */
            className="btn-primary btn-lg"
          >
            Planificar mi viaje
            <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
