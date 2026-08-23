import Link from 'next/link';
import { cadenaDeZonas, type ItineraryDay } from '@/lib/itinerary-days';

/*
 * «Tu viaje de un vistazo».
 *
 * Es la sección que cambia la percepción de la página. Antes de bajar por
 * veinte paradas, en tres líneas se ve la forma del viaje: qué se hace cada
 * día, por dónde se pasa y cuántas paradas tiene. Quien ya sabe que le
 * interesa el día de Sintra, salta directo.
 *
 * Cada fila enlaza a su capítulo con un ancla normal (`#dia-2`). Sin pestañas
 * ni acordeones: el contenido entero sigue en el HTML, que es lo que hace que
 * Google lo lea igual que antes y que el enlace funcione con JavaScript
 * desactivado.
 *
 * La cadena de zonas no está escrita a mano: sale de los títulos reales de las
 * paradas, así que no puede contradecir al itinerario si mañana se edita uno.
 */

interface ItineraryDayOverviewProps {
  dias: ItineraryDay[];
}

export function ItineraryDayOverview({ dias }: ItineraryDayOverviewProps) {
  /*
   * Con una sola jornada esto no es un índice de días, es el resumen del día:
   * cambia el encabezado y desaparece la etiqueta «Día 1», que no distingue
   * nada cuando no hay un día 2. La estructura no se infla para que se parezca
   * a la del itinerario de tres días.
   */
  const unSoloDia = dias.length === 1;

  return (
    <section id="resumen" className="scroll-mt-20">
      <h2 className="mb-1.5 font-display text-2xl font-semibold not-italic leading-tight text-text-main md:text-[1.75rem]">
        {unSoloDia ? 'Tu día de un vistazo' : 'Tu viaje de un vistazo'}
      </h2>
      <p className="mb-6 font-body text-[15px] leading-relaxed text-text-secondary">
        {unSoloDia
          ? 'Por dónde pasa la ruta, en orden. Toca para ir directo a ella.'
          : `Los ${dias.length} días, en orden. Toca uno para ir directo a su ruta.`}
      </p>

      <ol className="border-t border-border-soft">
        {dias.map((dia) => (
          <li key={dia.day} className="border-b border-border-soft">
            <Link
              href={`#dia-${dia.day}`}
              className={`group grid items-baseline gap-x-3 py-4 transition-colors hover:bg-white/60 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-terracotta sm:gap-x-5 ${
                unSoloDia
                  ? 'grid-cols-1'
                  : 'grid-cols-[3.25rem,minmax(0,1fr)] sm:grid-cols-[4.5rem,minmax(0,1fr)]'
              }`}
            >
              {!unSoloDia && (
                <span className="font-body text-[11px] font-semibold uppercase tracking-widest text-terracotta">
                  Día {dia.day}
                </span>
              )}

              <span className="min-w-0">
                <span className="block font-display text-lg font-semibold not-italic leading-snug text-text-main transition-colors group-hover:text-terracotta">
                  {dia.title}
                </span>
                {/*
                  La cadena de zonas puede ser larga en un día de siete
                  paradas, así que se deja envolver en vez de recortarla con
                  puntos suspensivos: en móvil se lee en dos líneas y no se
                  pierde ninguna.
                */}
                <span className="mt-1 block font-body text-sm leading-relaxed text-text-secondary">
                  {cadenaDeZonas(dia.stops)}
                </span>
                <span className="mt-1 block font-body text-xs text-text-secondary">
                  {dia.stops.length} {dia.stops.length === 1 ? 'parada' : 'paradas'}
                  <span aria-hidden="true"> · </span>
                  {dia.stops[0].time}–{dia.stops[dia.stops.length - 1].time}
                </span>
              </span>
            </Link>
          </li>
        ))}
      </ol>
    </section>
  );
}
