/**
 * Enlaces de alojamiento de Stay22 (Allez).
 *
 * Formato comprobado en la documentación (dev.stay22.com/docs/allez, 9/10/2026)
 * y en la práctica: `/allez/roam?aid=…&address=…` redirige a Booking u otra
 * web de reservas, ya filtrada por el barrio, con nuestro aid en la
 * etiqueta. Roam elige el proveedor; no hace falta fijarlo.
 *
 * Son búsquedas por barrio, no hoteles concretos: José vive en Lisboa y no
 * ha dormido en estos alojamientos, así que el texto nunca recomienda uno.
 *
 * `campaign` con guion bajo: Stay22 parte la campaña por guiones.
 */
export const STAY22_AID = 'estabaenlisboa';

export interface Stay22Barrio {
  id: string;
  /** Texto del botón. */
  label: string;
  /** Lo que se le pasa a Stay22 para situar la búsqueda. */
  address: string;
  /**
   * Coordenadas, cuando la dirección sola no cae en el barrio: «Graça»
   * devolvía todo Lisboa y «Belém» una ciudad que no era Lisboa (comprobado
   * el 9/10/2026). Stay22 las prefiere a la dirección.
   */
  latLng?: [number, number];
}

export const STAY22_BARRIOS: Record<string, Stay22Barrio> = {
  baixa: { id: 'baixa', label: 'Baixa', address: 'Baixa, Lisboa, Portugal' },
  chiado: { id: 'chiado', label: 'Chiado', address: 'Chiado, Lisboa, Portugal' },
  alfama: { id: 'alfama', label: 'Alfama', address: 'Alfama, Lisboa, Portugal' },
  graca: { id: 'graca', label: 'Graça', address: 'Graça, Lisboa, Portugal', latLng: [38.7166, -9.1305] },
  avenida: { id: 'avenida', label: 'Avenida da Liberdade', address: 'Avenida da Liberdade, Lisboa, Portugal' },
  'principe-real': { id: 'principe-real', label: 'Príncipe Real', address: 'Príncipe Real, Lisboa, Portugal' },
  saldanha: { id: 'saldanha', label: 'Saldanha', address: 'Saldanha, Lisboa, Portugal' },
  'parque-nacoes': { id: 'parque-nacoes', label: 'Parque das Nações', address: 'Parque das Nações, Lisboa, Portugal' },
  intendente: { id: 'intendente', label: 'Intendente', address: 'Intendente, Lisboa, Portugal' },
  belem: { id: 'belem', label: 'Belém', address: 'Belém, Lisboa, Portugal', latLng: [38.6977, -9.2063] },
};

export type Stay22BarrioId = keyof typeof STAY22_BARRIOS;

/** Campaña de Stay22 sin guiones: `blog_donde_alojarse_en_lisboa_baixa`. */
export function stay22Campaign(...parts: string[]): string {
  return parts
    .join('_')
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9]+/g, '_')
    .replace(/^_+|_+$/g, '');
}

export function buildStay22Url(barrio: Stay22Barrio, campaign: string): string {
  const params = new URLSearchParams({ aid: STAY22_AID, address: barrio.address });
  if (barrio.latLng) {
    params.set('lat', String(barrio.latLng[0]));
    params.set('lng', String(barrio.latLng[1]));
  }
  params.set('campaign', campaign);
  params.set('lang', 'es');
  return `https://www.stay22.com/allez/roam?${params.toString()}`;
}
