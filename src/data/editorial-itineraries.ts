import type { EditorialPilot } from './editorial-pilot';

/** Phase 6E: three reviewed overviews. Daily routes and their order are retained.
 * Core 1/2/3-day routes and Portugal in a week already have initial overviews;
 * no duplicate summary is added there. Source indices refer to blog article data.
 */
export const EDITORIAL_ITINERARIES: Record<string, EditorialPilot> = {
  'lisboa-en-4-dias': {
    type: 'itinerary', title: 'Cuatro días de un vistazo', sourceBlocks: [0, 2, 3, 6, 7, 9, 12, 13, 16],
    rows: [
      { label: 'Día 1', value: 'Baixa, Chiado y Alfama, con los miradores al final si tienes energía.' },
      { label: 'Día 2', value: 'Belém y el Tajo; Alcântara como extensión opcional.' },
      { label: 'Día 3', value: 'Sintra en una jornada propia, eligiendo dos visitas y dejando margen entre ellas.' },
      { label: 'Día 4', value: 'Parque das Nações primero y Graça después; Oceanário si te interesa.' },
      { label: 'Ritmo', value: 'Agrupa cada día por zonas para evitar cruzar la ciudad varias veces.' },
      { label: 'Si llueve o te cansas', value: 'Mueve miradores y añade un museo o mercado; el orden se puede adaptar.' },
    ],
  },
  'lisboa-en-5-dias': {
    type: 'itinerary', title: 'Cinco días de un vistazo', sourceBlocks: [0, 2, 5, 7, 10, 13, 16],
    rows: [
      { label: 'Día 1', value: 'Baixa, Chiado y Alfama en un recorrido continuo por el centro histórico.' },
      { label: 'Día 2', value: 'Belém y el paseo junto al Tajo, sin mezclarlo con otra colina.' },
      { label: 'Día 3', value: 'Graça, Mouraria y miradores; puedes subir en transporte y bajar después.' },
      { label: 'Día 4', value: 'Oriente y Parque das Nações; Oceanário si lo eliges y telecabina opcional.' },
      { label: 'Día 5', value: 'Sintra: dos visitas importantes y tiempo para el centro, sin correr entre cuatro palacios.' },
      { label: 'Flexibilidad', value: 'Si llueve, adelanta una visita cubierta y mueve la jornada de miradores.' },
    ],
  },
  'lisboa-en-7-dias': {
    type: 'itinerary', title: 'Una semana de un vistazo', sourceBlocks: [4, 7, 17, 18, 23, 24, 27, 35, 44, 53],
    rows: [
      { label: 'Días 1 y 2', value: 'Centro histórico: Alfama, castillo, Baixa, Chiado y miradores, repartidos en dos jornadas.' },
      { label: 'Día 3', value: 'Belém y el río, después de los días de cuestas.' },
      { label: 'Día 4', value: 'Sintra como día completo, sin encajar otro plan a la vuelta.' },
      { label: 'Día 5', value: 'Barrio y calma después de Sintra; deja espacio para descansar.' },
      { label: 'Día 6', value: 'La costa o Parque das Nações según el tiempo y el plan que prefieras.' },
      { label: 'Día 7', value: 'Mercado, despedida o lo que quedó pendiente; mantenlo abierto para imprevistos.' },
    ],
  },
};
