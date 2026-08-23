import Link from 'next/link';
import { CORE_ITINERARIES } from '@/data/itineraries';

/*
 * Cierre del itinerario: los hermanos y, si nada encaja, ayuda.
 *
 * Antes esto sólo llevaba a `/planifica-tu-viaje`. Le faltaba lo obvio: quien
 * llega a «Lisboa en 3 días» y se da cuenta de que sólo tiene dos, lo que
 * necesita es el de dos días, no un formulario. Los tres itinerarios se
 * enlazan entre sí desde aquí, que es donde la pregunta aparece de verdad:
 * al final, cuando ya se ha visto lo que da de sí el que estás leyendo.
 *
 * Es también la preparación visual de «Mi viaje a Lisboa», pero NO finge que
 * esa funcionalidad exista. El botón lleva a `/planifica-tu-viaje`, que es una
 * página real y en funcionamiento: recomienda según los días y el tipo de
 * viaje, y ofrece un plan a medida. Un «Crear mi viaje» que abriera otra cosa
 * sería exactamente la falsa herramienta que no queremos.
 */

interface ItineraryPersonalizeCTAProps {
  /** Slug del itinerario actual: se excluye de los enlaces hermanos. */
  currentSlug: string;
  /** Días que cubre el itinerario actual, para la frase de arriba. */
  currentDays: number;
}

export function ItineraryPersonalizeCTA({ currentSlug, currentDays }: ItineraryPersonalizeCTAProps) {
  const hermanos = CORE_ITINERARIES.filter((it) => it.slug !== currentSlug);

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
          <p className="mb-5 font-body text-[16px] leading-relaxed text-text-secondary md:text-[17px]">
            Este itinerario está pensado para {currentDays === 1 ? 'un día' : `${currentDays} días`}.
            Si tu viaje es más corto o más largo, tenemos la misma ruta ajustada a otro
            calendario.
          </p>

          <ul className="mb-7 flex flex-wrap gap-3">
            {hermanos.map((it) => (
              <li key={it.slug}>
                <Link href={`/itinerarios/${it.slug}`} className="btn-secondary">
                  {it.label}
                </Link>
              </li>
            ))}
          </ul>

          <p className="mb-4 font-body text-[15px] leading-relaxed text-text-secondary">
            ¿Y si ninguno encaja del todo? Dinos cuántos días tienes y qué te apetece hacer y
            te decimos por dónde recortar o qué añadir.
          </p>
          <Link href="/planifica-tu-viaje" className="btn-primary btn-lg">
            Planificar mi viaje
            <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
