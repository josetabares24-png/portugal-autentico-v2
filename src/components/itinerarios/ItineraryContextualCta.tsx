'use client';

import { useEffect, useRef } from 'react';
import Icon from '@/components/Icon';
import { trackAffiliateClick } from '@/lib/affiliate-analytics';
import { trackEvent } from '@/lib/analytics';
import type {
  BookableProduct,
  BookingLinkResolved,
  BookingProvider,
} from '@/data/bookings';
import type { ItineraryBookingAdvice } from '@/data/itineraries';

const STATUS_LABELS: Record<ItineraryBookingAdvice['status'], string> = {
  'conviene-reservar': 'Conviene reservar',
  'puedes-comprar-alli': 'Puedes comprar allí',
  'reserva-anticipada-recomendada': 'Reserva anticipada recomendada',
  'no-necesitas-entrada': 'No necesitas entrada',
  'solo-merece-pagar-si': 'Solo merece pagar si…',
};

const PROVIDER_LABELS: Record<BookingProvider, string> = {
  getyourguide: 'GetYourGuide',
  tiqets: 'Tiqets',
};

interface ItineraryContextualCtaProps {
  advice: ItineraryBookingAdvice;
  product?: BookableProduct;
  link?: BookingLinkResolved | null;
  itinerarySlug: string;
  stopTitle: string;
  position: number;
}

/**
 * Consejo de reserva dentro de una parada.
 *
 * No intenta parecer una tienda: primero explica la decisión y sólo después,
 * cuando existe una correspondencia exacta en el catálogo, ofrece el enlace.
 */
export function ItineraryContextualCta({
  advice,
  product,
  link,
  itinerarySlug,
  stopTitle,
  position,
}: ItineraryContextualCtaProps) {
  const ref = useRef<HTMLElement>(null);
  const viewTracked = useRef(false);

  const analyticsParams = {
    page_path: typeof window !== 'undefined' ? window.location.pathname : '',
    itinerary: itinerarySlug,
    activity: product?.id ?? stopTitle,
    provider: link?.provider ?? 'none',
    cta_position: position,
    cta_status: advice.status,
  };

  useEffect(() => {
    const node = ref.current;
    if (!node || viewTracked.current) return;

    if (typeof IntersectionObserver === 'undefined') {
      viewTracked.current = true;
      trackEvent('itinerary_cta_view', analyticsParams);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || viewTracked.current) return;
        viewTracked.current = true;
        trackEvent('itinerary_cta_view', analyticsParams);
        observer.disconnect();
      },
      { threshold: 0.35 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [itinerarySlug, stopTitle, position, advice.status, product?.id, link?.provider]);

  const canBook = Boolean(product && link);

  return (
    <aside
      ref={ref}
      className="mt-5 max-w-[68ch] rounded-xl border border-gold/55 bg-[#fffdf9] p-4 shadow-sm"
      aria-label="Consejo de reserva"
    >
      <div className="flex flex-wrap items-center gap-2">
        <span className="inline-flex items-center rounded-full bg-gold/15 px-2.5 py-1 font-body text-[11px] font-semibold text-night">
          {STATUS_LABELS[advice.status]}
        </span>
        {advice.label && (
          <span className="font-body text-[11px] font-medium text-text-secondary">
            {advice.label}
          </span>
        )}
      </div>

      <h4 className="mt-3 font-body text-[15px] font-semibold leading-snug text-text-main">
        {advice.title}
      </h4>
      <p className="mt-1.5 font-body text-sm leading-relaxed text-text-secondary">
        {advice.description}
      </p>

      {canBook && product && link && (
        <div className="mt-4 border-t border-border-soft pt-3">
          <p className="mb-2 font-body text-[11px] leading-relaxed text-text-secondary">
            {product.name} · {PROVIDER_LABELS[link.provider]}
          </p>
          <a
            href={link.url}
            target="_blank"
            rel="sponsored noopener noreferrer"
            className="btn-primary"
            onClick={() => {
              trackEvent('itinerary_cta_click', analyticsParams);
              trackAffiliateClick({
                affiliate_partner: link.provider,
                affiliate_campaign: link.campaign,
                affiliate_content: product.id,
                affiliate_placement: `itinerario-${itinerarySlug}`,
                affiliate_link_placement: link.usedPlacement,
                destination: 'lisboa',
                itinerary_stop: stopTitle,
                cta_position: String(position),
                page_path: typeof window !== 'undefined' ? window.location.pathname : '',
              });
            }}
          >
            <Icon
              name="confirmation_number"
              size={15}
              aria-hidden="true"
              className="flex-shrink-0"
            />
            {advice.buttonLabel ?? product.ctaLabel}
            <Icon
              name="open_in_new"
              size={13}
              aria-hidden="true"
              className="flex-shrink-0"
            />
            <span className="sr-only"> (enlace de afiliado, se abre en una pestaña nueva)</span>
          </a>
        </div>
      )}
    </aside>
  );
}
