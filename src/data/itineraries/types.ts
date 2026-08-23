export interface Itinerary {
  id: string;
  slug?: string;
  title: string;
  description: string;
  duration: string;
  image: string;
  features: string[];
  href: string;
  featured?: boolean;
  badge?: {
    text: string;
    color: string;
  };
}

export interface TimelineStop {
  time: string;
  title: string;
  description: string;
  tip: string;
  type: 'visit' | 'food';
  image?: string;
  coordinates?: {
    lat: number;
    lng: number;
  };
  googleMapsUrl?: string;
  /**
   * Día del itinerario al que pertenece la parada, empezando en 1.
   *
   * Existe porque antes el día viajaba escondido dentro de `time`
   * (`'09:00 - Día 1'`), y con el día metido en una cadena de texto no hay
   * forma de agrupar las paradas ni de titular cada jornada: la página sólo
   * podía pintar una lista seguida.
   *
   * Es opcional a propósito. Los itinerarios de un solo día no lo necesitan,
   * y los que todavía no se han migrado siguen funcionando sin él.
   */
  day?: number;
  /**
   * `id` del producto de `bookings.ts` que corresponde EXACTAMENTE a esta
   * parada, si lo hay.
   *
   * Es una relación explícita, no una detección por el nombre: que una parada
   * se llame «Castillo de San Jorge» no basta para venderle una entrada, y un
   * emparejamiento automático acabaría ofreciendo el producto equivocado el
   * día que alguien edite un título. Sin este campo, la parada no lleva CTA.
   */
  productId?: string;
}

/**
 * Cabecera de una jornada. Es lo único que se añade como contenido nuevo:
 * un título y una frase por día, para que el itinerario se lea como tres
 * capítulos y no como veinte paradas seguidas.
 */
export interface ItineraryDayMeta {
  day: number;
  /** Título descriptivo de la jornada. Sin promesas ni superlativos. */
  title: string;
  /** Una frase: qué se hace ese día y a qué ritmo. */
  summary: string;
  /** Foto editorial que abre el día, de las que ya están en `/public`. */
  image?: string;
  imageAlt?: string;
}
