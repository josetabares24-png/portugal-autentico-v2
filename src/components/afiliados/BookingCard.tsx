'use client';

import Image from 'next/image';
import { useState } from 'react';
import { ArrowUpRight, Landmark } from 'lucide-react';
import { trackAffiliateClick } from '@/lib/affiliate-analytics';
import { resolveBookingLink, type BookableProduct, type BookingPlacement } from '@/data/bookings';
import type { TiqetsProductSnapshot } from '@/types/tiqets-live';
import { formatPhotoCreditShort, getPhotoCredit } from '@/data/photo-credits';

/*
 * Tarjeta comercial de Estaba en Lisboa.
 *
 * Por qué existe, en vez de dejar que el widget de GetYourGuide haga de
 * tarjeta: su formato `activities` pinta foto, título, duración y valoración,
 * y ahí se acaba. Ni precio ni botón. Un visitante que quiere reservar se
 * queda sin saber dónde pulsar, y encima el widget mete su propia tipografía
 * y su enlace de «únase a nuestro programa de afiliados» dentro de un iframe
 * que no podemos tocar.
 *
 * Con enlace directo exacto podemos hacerlo mejor: nuestra foto, nuestra
 * tipografía, una frase nuestra y un botón que dice lo que hace. El precio no
 * se copia —cambia por temporada y no tenemos fuente fiable—, así que el CTA
 * lleva a verlo donde es verdad.
 *
 * Los productos SIN enlace directo siguen usando su widget: es su único
 * mecanismo de reserva y no se sustituye por una tarjeta que no llevaría a
 * ninguna parte.
 */

interface BookingCardProps {
  product: BookableProduct;
  placement: BookingPlacement;
  /** Nombre de la página, para poder separar los clics por ubicación. */
  placementLabel: string;
  /** Sólo la primera tarjeta: es la que compite por ser el LCP. */
  priority?: boolean;
  /** Información pública y saneada por el servidor. */
  tiqetsProduct?: TiqetsProductSnapshot;
}

const priceFormatter = new Intl.NumberFormat('es-ES', {
  style: 'currency',
  currency: 'EUR',
  minimumFractionDigits: 0,
  maximumFractionDigits: 2,
});

function formatPrice(price: number, currency: string): string {
  try {
    return new Intl.NumberFormat('es-ES', {
      style: 'currency',
      currency,
      minimumFractionDigits: Number.isInteger(price) ? 0 : 2,
      maximumFractionDigits: 2,
    }).format(price);
  } catch {
    return priceFormatter.format(price);
  }
}

/**
 * «Foto: Tiqets», o «Foto: Nombre / Tiqets» cuando Tiqets da el nombre del
 * fotógrafo. Nunca se atribuye a José.
 */
function tiqetsCredit(credit?: string): string {
  const name = credit?.replace(/^(photo|foto)\s*(by|de|:)?\s*/i, '').trim();
  if (!name || /^tiqets$/i.test(name)) return 'Foto: Tiqets';
  return `Foto: ${name} / Tiqets`;
}

/** «2026-10-09» → «9/10/2026», tal y como se lee en España. */
function formatVerified(date: string): string {
  const [year, month, day] = date.split('-');
  if (!year || !month || !day) return date;
  return `${Number(day)}/${Number(month)}/${year}`;
}

export function BookingCard({
  product,
  placement,
  placementLabel,
  priority = false,
  tiqetsProduct,
}: BookingCardProps) {
  const [imageFailed, setImageFailed] = useState(false);
  const baseLink = resolveBookingLink(product, placement);
  if (!baseLink) return null;

  const link = tiqetsProduct?.bookingUrl
    ? { ...baseLink, url: tiqetsProduct.bookingUrl }
    : baseLink;
  const isUnavailable = tiqetsProduct?.saleStatus === 'unavailable';
  const livePrice =
    typeof tiqetsProduct?.price === 'number' && tiqetsProduct.currency
      ? formatPrice(tiqetsProduct.price, tiqetsProduct.currency)
      : null;
  const officialPrice = !livePrice ? product.officialPrice : undefined;
  const hasLiveDetails = Boolean(
    tiqetsProduct &&
      (livePrice || tiqetsProduct.smartphoneTicket || tiqetsProduct.saleStatus === 'unavailable')
  );

  const ctaLabel = isUnavailable
    ? 'Consultar otras fechas'
    : product.ctaLabel;

  const providerName = link.provider === 'tiqets' ? 'Tiqets' : 'GetYourGuide';

  /*
   * Foto de la tarjeta, por orden: la del sitio (de José o, si no hay, una de
   * Wikimedia Commons con licencia libre); la de producto de Tiqets si no hay
   * ninguna (o si la del sitio es un apaño, `preferProviderImage`); y si no
   * hay ninguna o no carga, el hueco de color. Toda foto que no es de José
   * lleva su crédito encima.
   */
  const providerImage = tiqetsProduct?.image;
  const sitePhotoCredit = getPhotoCredit(product.image);
  const ownVisual = product.image
    ? {
        src: product.image,
        alt: product.imageAlt ?? product.name,
        credit: sitePhotoCredit ? formatPhotoCreditShort(sitePhotoCredit) : undefined,
      }
    : null;
  const providerVisual = providerImage
    ? {
        src: providerImage.url,
        alt: providerImage.alt || `${product.name}, foto de producto de Tiqets`,
        credit: tiqetsCredit(providerImage.credit),
      }
    : null;
  const visual =
    product.preferProviderImage && providerVisual ? providerVisual : ownVisual ?? providerVisual;

  let linkDomain = '';
  try {
    linkDomain = new URL(link.url).hostname;
  } catch {
    // La navegación sigue funcionando aunque la dimensión no pueda parsearse.
  }

  return (
    /*
     * En móvil la tarjeta es compacta: miniatura a la izquierda del título y
     * el resto debajo, a todo el ancho. Así cada producto ocupa la mitad de
     * alto y la página no se hace eterna. Desde `sm` vuelve a ser la tarjeta
     * vertical de siempre, con la foto arriba.
     */
    <article
      id={product.id}
      className="group grid h-full min-w-0 scroll-mt-24 grid-cols-[5.5rem_minmax(0,1fr)] gap-x-4 overflow-hidden rounded-lg border border-border-soft bg-white p-4 shadow-card transition-transform duration-300 motion-safe:hover:-translate-y-1 sm:flex sm:flex-col sm:p-0"
    >
      <div className="relative h-[5.5rem] w-[5.5rem] overflow-hidden rounded-md bg-background-light sm:aspect-[16/10] sm:h-auto sm:w-full sm:rounded-none">
        {visual && !imageFailed ? (
          <>
            <Image
              src={visual.src}
              alt={visual.alt}
              fill
              className="object-cover transition-transform duration-500 motion-safe:group-hover:scale-[1.03]"
              sizes="(max-width: 640px) 88px, (max-width: 1024px) 50vw, 33vw"
              priority={priority}
              loading={priority ? undefined : 'lazy'}
              onError={() => setImageFailed(true)}
            />
            {visual.credit ? (
              <span className="absolute bottom-2 right-2 hidden max-w-[calc(100%-1rem)] rounded-sm bg-night/65 px-1.5 py-0.5 text-right font-body text-[10px] leading-tight text-white/95 sm:block">
                {visual.credit}
              </span>
            ) : null}
          </>
        ) : (
          /*
           * Sin foto (o si la de Tiqets no carga): mismo hueco, mismo
           * recorte, en los colores de la tarjeta. No se rellena con la foto
           * de otro sitio ni con una de banco de imágenes.
           */
          <div
            aria-hidden="true"
            className="flex h-full w-full items-center justify-center bg-[#EFE6D8] bg-azulejo-pattern-gold"
          >
            <Landmark className="h-7 w-7 text-terracotta/70 sm:h-10 sm:w-10" strokeWidth={1.4} />
          </div>
        )}

        {product.badge ? (
          <span className="absolute left-3 top-3 hidden rounded-sm bg-white/95 px-2.5 py-1 font-body text-[10px] font-bold uppercase tracking-[0.11em] text-night shadow-sm sm:inline">
            {product.badge}
          </span>
        ) : null}
      </div>

      <div className="self-center sm:self-auto sm:px-5 sm:pt-5">
        <p className="mb-1.5 font-body text-[10px] font-bold uppercase tracking-[0.16em] text-terracotta sm:mb-2">
          {product.kind}
          {product.badge ? <span className="font-semibold text-text-secondary sm:hidden"> · {product.badge}</span> : null}
        </p>

        <h4 className="font-display text-lg font-semibold not-italic leading-snug text-text-main sm:mb-2 sm:text-xl">
          {product.name}
        </h4>

        {/* En móvil la miniatura es demasiado pequeña para llevar el crédito
            encima: va debajo del título, igual de visible. */}
        {visual?.credit && !imageFailed ? (
          <p className="mt-1 font-body text-[10px] leading-tight text-text-secondary sm:hidden">
            {visual.credit}
          </p>
        ) : null}
      </div>

      <div className="col-span-2 mt-3 flex flex-1 flex-col sm:mt-0 sm:px-5 sm:pb-5">
        <p className="mb-4 font-article text-sm leading-[1.6] text-text-secondary sm:mb-5">
          {product.blurb}
        </p>

        <div className="mt-auto">
          {officialPrice ? (
            <div className="mb-3 border-t border-border-soft pt-3 font-body">
              <p className="text-xs text-text-secondary">
                Taquilla oficial{' '}
                <strong className="text-sm font-bold text-night">{officialPrice.amount}</strong>
              </p>
              <p className="mt-1 text-[11px] leading-snug text-text-secondary">
                {officialPrice.note ? `${officialPrice.note} ` : null}
                <a
                  href={officialPrice.sourceUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline underline-offset-2 hover:text-terracotta"
                >
                  Precio de la web oficial, {formatVerified(officialPrice.verified)}
                  <span className="sr-only"> (se abre en una pestaña nueva)</span>
                </a>
              </p>
            </div>
          ) : null}

          {hasLiveDetails ? (
            <div className="mb-3 flex min-h-10 flex-wrap items-center justify-between gap-x-3 gap-y-1 border-t border-border-soft pt-3 font-body">
              {livePrice ? (
                <p className="text-xs text-text-secondary">
                  Desde{' '}
                  <strong className="text-sm font-bold text-night">{livePrice}</strong>
                </p>
              ) : (
                <span className="text-xs font-semibold text-night">
                  {isUnavailable ? 'Sin fechas abiertas ahora' : 'Disponible para reservar'}
                </span>
              )}
              {tiqetsProduct?.smartphoneTicket ? (
                <span className="text-[11px] font-semibold text-text-secondary">Entrada móvil</span>
              ) : null}
            </div>
          ) : null}

          {/* Sin precio que enseñar, la fila no desaparece: así todas las
              tarjetas tienen la misma estructura y queda claro dónde se paga. */}
          {!officialPrice && !hasLiveDetails ? (
            <p className="mb-3 flex min-h-10 items-center border-t border-border-soft pt-3 font-body text-xs text-text-secondary">
              Precio y horarios en {providerName}
            </p>
          ) : null}

          {product.terms ? (
            <p className="-mt-1 mb-3 font-body text-[11px] leading-snug text-text-secondary">
              {product.terms}
            </p>
          ) : null}

          <a
            href={link.url}
            target="_blank"
            rel="sponsored noopener noreferrer"
            className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-md bg-terracotta px-4 py-2 text-center font-body text-sm font-bold leading-snug text-white transition-colors hover:bg-primary-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-terracotta"
            onClick={() =>
              trackAffiliateClick({
                affiliate_partner: link.provider,
                affiliate_campaign: link.campaign,
                affiliate_content: product.id,
                affiliate_placement: placementLabel,
                // Qué enlace se usó de verdad: mientras no existan los propios
                // de cada ubicación, esto deja visible que se recurrió a otro.
                affiliate_link_placement: link.usedPlacement,
                destination: 'lisboa',
                link_url: link.url,
                link_domain: linkDomain,
                outbound: 'true',
                page_path: typeof window !== 'undefined' ? window.location.pathname : '',
              })
            }
          >
            {ctaLabel}
            <ArrowUpRight size={16} strokeWidth={2} aria-hidden="true" />
            <span className="sr-only"> (se abre en una pestaña nueva)</span>
          </a>
        </div>
      </div>
    </article>
  );
}
