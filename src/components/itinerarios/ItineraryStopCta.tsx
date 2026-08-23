'use client';

import Icon from '@/components/Icon';
import { trackAffiliateClick } from '@/lib/affiliate-analytics';
import type { BookableProduct, BookingLinkResolved } from '@/data/bookings';

/*
 * Enlace de reserva dentro de una parada del itinerario.
 *
 * Es lo único de la página que se ejecuta en el navegador, y sólo porque hay
 * que medir el clic. Todo lo demás —el itinerario entero— se pinta en
 * servidor.
 *
 * De diseño: un botón del sistema, no un bloque comercial. Comparte fila y
 * tamaño con el enlace al mapa, porque en un itinerario dónde sacar la entrada
 * es un dato de planificación más, al lado de dónde está el sitio. La tarjeta,
 * el borde de color y el precio grande son de una tienda, y esto no lo es.
 *
 * Nunca se pinta solo: la parada sólo lo monta si declara un `productId` con
 * enlace resuelto.
 */

interface ItineraryStopCtaProps {
  product: BookableProduct;
  link: BookingLinkResolved;
  /** Slug del itinerario, para separar en la medición de dónde vino el clic. */
  itinerarySlug: string;
  /** Título de la parada, para saber cuál convierte. */
  stopTitle: string;
}

export function ItineraryStopCta({ product, link, itinerarySlug, stopTitle }: ItineraryStopCtaProps) {
  return (
    <a
      href={link.url}
      target="_blank"
      rel="sponsored noopener noreferrer"
      className="btn-primary"
      onClick={() =>
        trackAffiliateClick({
          /*
           * El proveedor lo dice el ENLACE, no el producto.
           *
           * Desde que un producto puede tener enlaces de partners distintos
           * según la ubicación, los dos campos ya no coinciden: el Palacio da
           * Pena figura como producto de Tiqets, pero su enlace de artículo
           * —el que usa esta página— es de GetYourGuide. Etiquetarlo con el
           * proveedor del producto mandaría a Analytics una atribución falsa.
           */
          affiliate_partner: link.provider,
          affiliate_campaign: link.campaign,
          affiliate_content: product.id,
          affiliate_placement: `itinerario-${itinerarySlug}`,
          // Qué ubicación se usó de verdad: mientras no exista una propia de
          // itinerarios, esto deja visible que se recurrió a la de artículo.
          affiliate_link_placement: link.usedPlacement,
          destination: 'lisboa',
          itinerary_stop: stopTitle,
          page_path: typeof window !== 'undefined' ? window.location.pathname : '',
        })
      }
    >
      <Icon name="confirmation_number" size={15} aria-hidden="true" className="flex-shrink-0" />
      {product.ctaLabel}
      <Icon name="open_in_new" size={13} aria-hidden="true" className="flex-shrink-0" />
      <span className="sr-only"> (se abre en una pestaña nueva)</span>
    </a>
  );
}
