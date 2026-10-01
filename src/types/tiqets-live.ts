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
}

export type TiqetsSnapshotMap = Partial<Record<string, TiqetsProductSnapshot>>;
