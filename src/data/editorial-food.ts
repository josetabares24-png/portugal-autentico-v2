import type { EditorialPilot } from './editorial-pilot';

/** Phase 6C: two reviewed presentation changes, never a category-wide rollout.
 * Source indices refer to the unchanged articles object. Consolidations remain
 * pending; the Pastéis article keeps its history, intent and existing URL.
 */
export const EDITORIAL_FOOD: Record<string, EditorialPilot> = {
  'donde-comer-barato-lisboa': {
    type: 'food', sourceBlocks: [0, 1, 4, 12, 15, 16, 18, 23, 25],
    rows: [
      { label: 'Referencia de gasto', value: 'Platos o almuerzos alrededor de 15 € o menos: es el filtro de esta guía, no un precio garantizado.' },
      { label: 'Qué buscar', value: 'Prato do dia o menu do dia; comprueba si incluye bebida y café.' },
      { label: 'Primero tu zona', value: 'Elige cerca de tu recorrido: sumar transporte y tiempo puede borrar el ahorro.' },
      { label: 'Menú publicado', value: 'Mama Shelter: 13,50 € por plato, bebida y café; de lunes a viernes al mediodía, excepto festivos. Confirma la carta del día.' },
      { label: 'En un mercado', value: 'Compara la carta de cada puesto; estar en un mercado no garantiza comer más barato.' },
      { label: 'Antes de ir', value: 'Revisa el precio vigente y lo que incluye; las referencias fechadas no son una promesa para tu visita.' },
    ],
  },
  'pasteles-de-belem': {
    type: 'food', sourceBlocks: [0, 9, 10, 11, 13, 24, 25],
    rows: [
      { label: 'Dónde', value: 'Rua de Belém, 84–92, en Belém.' },
      { label: 'Precio', value: '1,60 € por pastel; comprueba la carta vigente al pedir.' },
      { label: 'Horario', value: '08:00–21:00; julio–septiembre hasta las 22:00. El 24, 25 y 31 de diciembre y el 1 de enero, hasta las 19:00.' },
      { label: 'Mesa o para llevar', value: 'La cola de la calle es para llevar; si quieres sentarte, dirígete a las salas interiores.' },
      { label: 'Cuántos pedir', value: 'Dos pueden bastar para empezar; decide según tu apetito.' },
      { label: 'Si los llevas', value: 'Cómpralos cerca del momento de consumirlos: el hojaldre pierde su textura con el tiempo.' },
    ],
  },
};
