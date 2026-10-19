import type { EditorialPilot } from './editorial-pilot';

/** Phase 6G: two individually reviewed cultural reading guides.
 * No ticket facts or forced practical table; source indices point to the
 * unchanged article bodies. Protected guides keep their existing openings.
 */
export const EDITORIAL_CULTURE: Record<string, EditorialPilot> = {
  'historia-de-lisboa': {
    type: 'culture', sourceBlocks: [6, 7, 9, 10, 15, 16, 19, 20, 26, 29, 32],
    rows: [
      { label: 'Olisipo', value: 'El Teatro Romano y los restos bajo el centro muestran una ciudad anterior a las fachadas actuales.' },
      { label: 'Ciudad medieval', value: 'Alfama y el entorno del Castelo ayudan a leer el trazado; no todas sus casas son medievales.' },
      { label: 'Expansión marítima', value: 'Belém refleja la riqueza imperial, vinculada también a conquista, explotación y esclavitud.' },
      { label: 'Reconstrucción', value: 'La cuadrícula de la Baixa responde a la destrucción del terremoto de 1755.' },
      { label: '25 de Abril', value: 'El Largo do Carmo conserva la memoria de la revolución de 1974.' },
      { label: 'Expo 98', value: 'Oriente y Parque das Nações muestran la transformación del frente oriental de Lisboa.' },
    ],
  },
  'fado-historia-origen': {
    type: 'culture', sourceBlocks: [0, 1, 6, 7, 12, 13, 15, 16, 18, 19],
    rows: [
      { label: 'Origen', value: 'Lisboa popular del siglo XIX; no hay un fundador ni una teoría única demostrada.' },
      { label: 'Sonido', value: 'Voz, guitarra portuguesa y guitarra; el texto y la interpretación son centrales.' },
      { label: 'Temas', value: 'Amor, pérdida, vida cotidiana e ironía: no se limita a tristeza o saudade.' },
      { label: 'Evolución', value: 'Maria Severa forma parte de su memoria; Amália impulsó su difusión internacional y hoy sigue cambiando.' },
    ],
  },
};
