import type { EditorialPilot } from './editorial-pilot';

/** Phase 6A: individually reviewed additions, not automatic category rollout.
 * Source indices refer to the unchanged articles object in the blog page.
 * The national transport guide already has an immediate comparison: KEEP.
 */
export const EDITORIAL_TRANSPORT: Record<string, EditorialPilot> = {
  'aeropuerto-lisboa-al-centro': {
    type: 'transport', sourceBlocks: [0, 2, 5, 7, 12, 15, 17, 22],
    rows: [
      { label: 'Metro al centro', value: 'Línea Roja; cambia en Alameda a la Verde para Rossio, Baixa-Chiado o Cais do Sodré.' },
      { label: 'Billete Metro', value: '1,90 € + 0,50 € si necesitas tarjeta; contactless bancario: 1,92 € por persona.' },
      { label: 'Oriente', value: 'Línea Roja directa, sin transbordo.' },
      { label: 'Con maletas', value: 'Compara taxi y Uber/Bolt hasta la dirección exacta, incluida la cuesta final.' },
      { label: 'Llegada de noche', value: 'Metro normalmente 06:30–01:00; después, 208 con equipaje pequeño o taxi/TVDE. Revisa el servicio del día.' },
      { label: 'Recogida por app', value: 'P2, nivel 2; confirma el punto que indique la aplicación al aterrizar.' },
    ],
  },
  'tram-28-historia-guia': {
    type: 'transport', sourceBlocks: [1, 3, 4, 8, 11, 14],
    rows: [
      { label: 'Recorrido', value: 'Martim Moniz–Campo de Ourique (Prazeres), sujeto a alteraciones del servicio.' },
      { label: 'Pago a bordo', value: '3,30 € por viaje en 2026.' },
      { label: 'Con título previo', value: 'Carris/Metro: 1,90 €; zapping: 1,72 €; 24 h Carris/Metro: 7,25 €.' },
      { label: 'Cómo usarlo', value: 'Elige el tramo que encaje con tus visitas; no necesitas hacer todo el recorrido.' },
      { label: 'Si hay cola', value: 'Compara caminar u otra conexión si la espera desordena el día; no hay asiento garantizado.' },
      { label: 'Antes de salir', value: 'Comprueba el recorrido, horario y avisos del día en la ficha oficial de CARRIS.' },
    ],
  },
  'patinetes-electricos-lisboa': {
    type: 'transport', sourceBlocks: [0, 3, 4, 9, 13, 16, 17, 19, 20],
    rows: [
      { label: 'Precio', value: 'Desbloqueo + minutos y cargos indicados en tu app; no hay una tarifa única de Lisboa.' },
      { label: 'Antes de alquilar', value: 'Comprueba batería, recorrido permitido y aparcamiento en el destino.' },
      { label: 'Cuándo encaja', value: 'Un desplazamiento concreto con firme adecuado y aparcamiento permitido cerca.' },
      { label: 'Cuándo evitarlo', value: 'Si vas a parar continuamente, el suelo está mojado o no te sientes seguro.' },
      { label: 'Al terminar', value: 'Sigue las instrucciones de la app y espera confirmación del cierre; dejarlo parado no cierra el alquiler.' },
    ],
  },
};
