'use client';

import Link from 'next/link';
import Icon from '@/components/Icon';
import { trackAffiliateClick } from '@/lib/affiliate-analytics';

/*
 * Bloque de reserva dentro de un artículo.
 *
 * Mismo marco que `BookingCta` en las fichas de actividad (filete
 * terracota→oro, botón primario), en versión más contenida porque aparece
 * dentro de la lectura. La URL llega ya resuelta desde el servidor: los
 * free tours necesitan leer el ref de GuruWalk del entorno, que no existe en
 * el cliente. Sin URL, no se pinta nada.
 */

export interface ArticleBookingBlockProps {
  intro: string;
  /** Tipo visible: «Entrada», «Excursión», «Free tour»… */
  kind: string;
  name: string;
  ctaLabel: string;
  url: string;
  partner: 'getyourguide' | 'tiqets' | 'guruwalk' | 'stay22';
  campaign: string;
  /** `blog-<slug>-<producto>`: identifica artículo y oferta en la medición. */
  contentId: string;
  linkPlacement: string;
  articleSlug: string;
  /**
   * `full`: nota de afiliado completa, en primera persona. Va una sola vez por
   * página, en el primer bloque. `short`: solo dice dónde se reserva; la nota
   * ya se ha leído más arriba. Por defecto `full`, para que una página con un
   * único bloque nunca se quede sin aviso.
   */
  disclosure?: 'full' | 'short';
  /**
   * Varias opciones en un mismo bloque (alojamiento por barrio). Si viene,
   * sustituye al botón único: un botón por opción, mismo marco.
   */
  options?: { id: string; label: string; url: string; campaign: string }[];
}

const PARTNER_LABEL: Record<ArticleBookingBlockProps['partner'], string> = {
  getyourguide: 'GetYourGuide',
  tiqets: 'Tiqets',
  guruwalk: 'GuruWalk',
  stay22: 'Stay22',
};

export function ArticleBookingBlock({
  intro,
  kind,
  name,
  ctaLabel,
  url,
  partner,
  campaign,
  contentId,
  linkPlacement,
  articleSlug,
  disclosure = 'full',
  options,
}: ArticleBookingBlockProps) {
  let linkDomain = '';
  try {
    linkDomain = new URL(url).hostname;
  } catch {
    // Medición best-effort.
  }

  return (
    <aside id={`reserva-${contentId}`} className="article-booking not-prose my-8 scroll-mt-28 overflow-hidden rounded-xl border border-border-soft/70 bg-white shadow-card">
      <span aria-hidden="true" className="block h-1 w-full bg-gradient-to-r from-terracotta to-gold" />
      <div className="p-5">
        <p className="article-booking-label flex items-center gap-2 font-semibold uppercase tracking-widest">
          <Icon name="confirmation_number" size={15} className="flex-shrink-0 text-gold" />
          {kind} · {name}
        </p>
        <p className="article-booking-intro">{intro}</p>
        {options && options.length > 0 ? (
          <ul className="article-booking-options grid grid-cols-2 gap-2" role="list">
            {options.map((option) => (
              <li key={option.id} className="h-full">
                <a
                  href={option.url}
                  target="_blank"
                  rel="sponsored nofollow noopener noreferrer"
                  className="article-booking-option btn-outline h-full w-full px-3 py-2.5 text-sm"
                  onClick={() =>
                    trackAffiliateClick({
                      affiliate_partner: partner,
                      affiliate_campaign: option.campaign,
                      affiliate_content: `${contentId}-${option.id}`,
                      affiliate_placement: 'article-body',
                      affiliate_link_placement: linkPlacement,
                      destination: 'lisboa',
                      link_url: option.url,
                      link_domain: 'www.stay22.com',
                      outbound: 'true',
                      article_slug: articleSlug,
                      page_path: typeof window !== 'undefined' ? window.location.pathname : '',
                    })
                  }
                >
                  {option.label}
                  <span aria-hidden="true"> ↗</span>
                  <span className="sr-only"> (enlace de afiliado, se abre en una pestaña nueva)</span>
                </a>
              </li>
            ))}
          </ul>
        ) : (
          <a
            href={url}
            target="_blank"
            rel="sponsored noopener noreferrer"
            className="article-booking-button btn-primary w-full px-6 py-3 text-base sm:w-auto"
            onClick={() =>
              trackAffiliateClick({
                affiliate_partner: partner,
                affiliate_campaign: campaign,
                affiliate_content: contentId,
                affiliate_placement: 'article-body',
                affiliate_link_placement: linkPlacement,
                destination: 'lisboa',
                link_url: url,
                link_domain: linkDomain,
                outbound: 'true',
                article_slug: articleSlug,
                page_path: typeof window !== 'undefined' ? window.location.pathname : '',
              })
            }
          >
            {ctaLabel}
            <span aria-hidden="true"> ↗</span>
            <span className="sr-only"> (enlace de afiliado, se abre en una pestaña nueva)</span>
          </a>
        )}
        {partner === 'stay22' ? (
          <p className="article-booking-disclosure">
            Cada botón abre la búsqueda de alojamiento en ese barrio en Booking u otra web de
            reservas, a través de Stay22. Si reservas desde aquí, me llevo una pequeña comisión
            y a ti te cuesta lo mismo. Son búsquedas por zona, no hoteles en los que haya
            dormido: vivo en Lisboa.{' '}
            <Link
              href="/aviso-legal#3-afiliados-y-enlaces-a-terceros"
              className="underline underline-offset-2 hover:text-terracotta"
            >
              Cómo funciona
            </Link>
            .
          </p>
        ) : disclosure === 'full' ? (
          <p className="article-booking-disclosure">
            Reservas en {PARTNER_LABEL[partner]}. Si lo haces desde aquí, me llevo una pequeña
            comisión y a ti te cuesta lo mismo. Solo enlazo lo que le recomendaría a un amigo.{' '}
            <Link
              href="/aviso-legal#3-afiliados-y-enlaces-a-terceros"
              className="underline underline-offset-2 hover:text-terracotta"
            >
              Cómo funciona
            </Link>
            .
          </p>
        ) : (
          <p className="article-booking-disclosure">Reservas en {PARTNER_LABEL[partner]}.</p>
        )}
      </div>
    </aside>
  );
}
