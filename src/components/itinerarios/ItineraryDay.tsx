import Image from 'next/image';
import { ItineraryStop } from '@/components/itinerarios/ItineraryStop';
import type { ItineraryDay as ItineraryDayData } from '@/lib/itinerary-days';

/*
 * Una jornada del itinerario, como capítulo.
 *
 * El problema que resuelve: veinte paradas seguidas se leen como una lista
 * interminable, por muy bien maquetada que esté cada una. Partirlas en tres
 * capítulos con nombre convierte «20 sitios» en «3 días», que es como la gente
 * piensa un viaje.
 *
 * La separación es editorial, no de color: una foto a ancho de columna, un
 * número de día en versalitas, un título en serif y una frase. Ni bloques de
 * color, ni tarjetas dentro de tarjetas.
 *
 * La foto abre el día en lugar de repetirse en cada parada. Veinte fotos
 * alargarían la página y pesarían; tres la marcan igual de bien y dan el
 * respiro editorial justo donde cambia la zona de la ciudad.
 */

interface ItineraryDayProps {
  dia: ItineraryDayData;
  /** Total de jornadas, para decir «Día 2 de 3» sin contarlo a mano. */
  totalDias: number;
  itinerarySlug: string;
  /** La primera es la que compite por ser el LCP. */
  prioridad?: boolean;
}

export function ItineraryDay({ dia, totalDias, itinerarySlug, prioridad = false }: ItineraryDayProps) {
  return (
    <section
      id={`dia-${dia.day}`}
      className="scroll-mt-20 border-t border-border-soft pt-10 first:border-t-0 first:pt-0 md:pt-14"
    >
      {dia.image && dia.imageAlt && (
        <div className="relative mb-7 aspect-[16/10] w-full overflow-hidden rounded-xl sm:aspect-[21/9] md:mb-9">
          <Image
            src={dia.image}
            alt={dia.imageAlt}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 768px"
            priority={prioridad}
            loading={prioridad ? undefined : 'lazy'}
          />
        </div>
      )}

      <header className="mb-8 md:mb-10">
        {/* Con una sola jornada, «Día 1 de 1» no informa de nada: se dice
            sólo cuántas paradas hay y en qué horario. */}
        <p className="mb-2 font-body text-[11px] font-semibold uppercase tracking-[0.2em] text-terracotta">
          {totalDias > 1 && (
            <>
              Día {dia.day} de {totalDias}
              <span className="sr-only">.</span>
              <span aria-hidden="true" className="mx-2 text-border-soft">·</span>
            </>
          )}
          <span className={totalDias > 1 ? 'text-text-secondary' : undefined}>
            {dia.stops.length} {dia.stops.length === 1 ? 'parada' : 'paradas'}
            <span aria-hidden="true" className="mx-2 text-border-soft">·</span>
            {dia.stops[0].time}–{dia.stops[dia.stops.length - 1].time}
          </span>
        </p>

        <h2 className="mb-3 font-display text-[1.75rem] font-semibold not-italic leading-tight text-text-main md:text-[2.125rem]">
          {dia.title}
        </h2>

        <p className="max-w-[62ch] font-body text-[16px] leading-relaxed text-text-secondary md:text-[17px]">
          {dia.summary}
        </p>
      </header>

      <div>
        {dia.stops.map((stop, i) => (
          <ItineraryStop
            key={`${dia.day}-${stop.time}-${i}`}
            stop={stop}
            numero={dia.firstStopIndex + i + 1}
            esUltima={i === dia.stops.length - 1}
            itinerarySlug={itinerarySlug}
          />
        ))}
      </div>
    </section>
  );
}
