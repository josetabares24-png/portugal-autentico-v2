import type { ItineraryDayMeta, TimelineStop } from '@/data/itineraries';

/*
 * Agrupar las paradas de un itinerario por jornada.
 *
 * Vive aquí y no dentro de un componente porque es cálculo, no pintura: la
 * página lo resuelve en servidor y los componentes reciben la estructura ya
 * hecha, sin llevarse ni una línea de esto al navegador.
 */

export interface ItineraryDay extends ItineraryDayMeta {
  stops: TimelineStop[];
  /** Índice global de la primera parada del día, para numerar 1..N seguido. */
  firstStopIndex: number;
}

/**
 * Devuelve las jornadas en orden, cada una con sus paradas.
 *
 * Sólo entran los días que tienen cabecera Y paradas: si alguien añade una
 * cabecera para un día que todavía no existe, no se pinta un capítulo vacío.
 */
export function agruparPorDia(stops: TimelineStop[], dias: ItineraryDayMeta[]): ItineraryDay[] {
  const resultado: ItineraryDay[] = [];
  let recorridas = 0;

  for (const meta of dias) {
    const delDia = stops.filter((s) => s.day === meta.day);
    if (delDia.length === 0) continue;

    resultado.push({ ...meta, stops: delDia, firstStopIndex: recorridas });
    recorridas += delDia.length;
  }

  return resultado;
}

/**
 * Cadena de zonas de una jornada, para el resumen de un vistazo:
 * «Alfama → Castelo → Baixa → Chiado».
 *
 * Se saca de los títulos reales de las paradas, no de una lista escrita a
 * mano: así el resumen no puede contradecir al itinerario. El título de cada
 * parada suele venir como «Lugar — coletilla» o «Lugar - coletilla», y de ahí
 * se toma sólo la parte de delante.
 */
export function cadenaDeZonas(stops: TimelineStop[], maximo = 4): string {
  const nombres = stops
    .map((s) => s.title.split(/\s+[—-]\s+/)[0].trim())
    .filter(Boolean);

  // Sin repetir: dos paradas del mismo barrio no tienen que salir dos veces.
  const unicos = [...new Set(nombres)];

  if (unicos.length <= maximo) return unicos.join(' → ');

  /*
   * Con más paradas que huecos se conservan las primeras y la última: el
   * principio y el final del día son lo que sitúa, y lo de en medio se
   * entiende leyendo el capítulo.
   */
  return [...unicos.slice(0, maximo - 1), unicos[unicos.length - 1]].join(' → ');
}
