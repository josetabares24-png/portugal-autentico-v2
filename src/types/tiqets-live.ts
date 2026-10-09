export type TiqetsSaleStatus = 'available' | 'unavailable' | 'unknown';

/**
 * Datos de Tiqets que pueden cruzar con seguridad la frontera servidor/cliente.
 * La clave de API y la respuesta completa nunca salen del servidor.
 */
export interface TiqetsProductSnapshot {
  productId: string;
  saleStatus: TiqetsSaleStatus;
  price?: number;
  currency?: string;
  smartphoneTicket: boolean;
  instantDelivery: boolean;
  bookingUrl?: string;
  /**
   * Foto del producto que publica Tiqets en su API. Sólo llega si la cuenta
   * tiene las imágenes activadas y sólo se acepta de su CDN. Se pinta con el
   * crédito «Foto: Tiqets»: no es una foto de José.
   */
  image?: TiqetsProductImage;
}

export interface TiqetsProductImage {
  url: string;
  alt?: string;
  credit?: string;
}

export type TiqetsSnapshotMap = Partial<Record<string, TiqetsProductSnapshot>>;
