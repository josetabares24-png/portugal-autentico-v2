'use client';

import { trackAffiliateClick } from '@/lib/affiliate-analytics';
import { findProductById, resolveBookingLink } from '@/data/bookings';

/*
 * Enlace de entradas para una atracción marcada en la calculadora.
 *
 * Es deliberadamente discreto: una línea de texto debajo del resultado, no
 * una tarjeta ni un botón. Quien está calculando un presupuesto está
 * decidiendo, no comprando, y la página no debe cambiar de registro a mitad.
 *
 * Tres reglas que lo mantienen honesto:
 *
 *   - Sólo aparece si la atracción tiene un producto EXACTO en
 *     `src/data/bookings.ts`. Sin producto no hay botón; nunca se enlaza al
 *     producto parecido de al lado.
 *   - No lleva ninguna URL escrita aquí. La URL, la cuenta y la campaña
 *     salen del registro central, que es el único sitio donde viven.
 *   - No dice «mejor precio», «oferta» ni «ahorra X €». No tenemos datos
 *     para sostener ninguna de las tres.
 *
 * Se mide con `placement: 'article'` porque el enlace que existe para estos
 * productos es el de artículo y esta página es editorial, no el hub de
 * compra. `affiliate_content` distingue el origen dentro de esa campaña.
 */

interface AttractionTicketLinkProps {
  /** `id` del producto en `src/data/bookings.ts`. */
  productId: string;
  /** Nombre de la atracción tal y como se llama en la calculadora. */
  nombre: string;
}

export function AttractionTicketLink({ productId, nombre }: AttractionTicketLinkProps) {
  const product = findProductById(productId);
  const link = product ? resolveBookingLink(product, 'article') : null;

  if (!product || !link) return null;

  return (
    <a
      href={link.url}
      target="_blank"
      rel="sponsored noopener noreferrer"
      className="font-body text-sm font-semibold text-terracotta underline-offset-4 hover:underline"
      onClick={() =>
        trackAffiliateClick({
          affiliate_partner: link.provider,
          affiliate_campaign: link.campaign,
          affiliate_content: `calculadora-${productId}`,
          affiliate_placement: 'calculadora',
          affiliate_link_placement: link.usedPlacement,
          destination: 'lisboa',
          page_path: typeof window !== 'undefined' ? window.location.pathname : '',
        })
      }
    >
      Ver entradas para {nombre}
      <span aria-hidden="true"> ↗</span>
      <span className="sr-only"> (enlace de afiliado, se abre en una pestaña nueva)</span>
    </a>
  );
}
