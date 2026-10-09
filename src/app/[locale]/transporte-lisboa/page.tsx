import type { Metadata } from 'next';
import { ArticleBookingBlock } from '@/components/blog/ArticleBookingBlock';
import { TravelPillarPage } from '@/components/traveler/TravelPillarPage';
import type { BlogBookingPlacement } from '@/data/blog-booking-placements';
import { transportGuide } from '@/data/transport-guide';
import { resolveBookingBlocks } from '@/lib/booking-blocks';

const PAGE_URL = `https://estabaenlisboa.com${transportGuide.url}`;
const IMAGE_URL = `https://estabaenlisboa.com${transportGuide.heroImage}`;
const AUTHOR_URL = 'https://estabaenlisboa.com/sobre-nosotros';
const TITLE = 'Transporte en Lisboa: billetes y precios oficiales 2026';

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: transportGuide.description,
  alternates: { canonical: PAGE_URL },
  authors: [{ name: 'José Tabares', url: AUTHOR_URL }],
  robots: { index: true, follow: true },
  openGraph: {
    title: TITLE,
    description: transportGuide.description,
    url: PAGE_URL,
    type: 'article',
    publishedTime: `${transportGuide.datePublished}T09:00:00+01:00`,
    modifiedTime: `${transportGuide.dateModified}T09:00:00+01:00`,
    authors: [AUTHOR_URL],
    section: 'Guías de Lisboa',
    images: [{
      url: IMAGE_URL,
      width: transportGuide.heroWidth,
      height: transportGuide.heroHeight,
      alt: transportGuide.heroAlt,
    }],
  },
  twitter: {
    card: 'summary_large_image',
    title: TITLE,
    description: transportGuide.description,
    images: [IMAGE_URL],
  },
};

/**
 * Un solo bloque de reserva, el de la Lisboa Card. El resto de la página no
 * vende nada: el transporte se paga en la taquilla o en la máquina y no hay
 * comisión que ganar ahí.
 *
 * Desde el 9/10/2026 va justo después de la respuesta corta, no al final de
 * la sección «Lisboa Card» (pantalla 9-10 del móvil). Por eso el texto
 * recuerda que la cuenta está más abajo y que para moverse basta la Navegante.
 */
const LISBOA_CARD: BlogBookingPlacement[] = [
  {
    offer: { type: 'product', productId: 'lisboa-card' },
    position: 'after-summary',
    intro:
      'Para moverte por la ciudad basta la Navegante. La Lisboa Card solo compensa si en los mismos días vas a entrar en varios museos o monumentos; más abajo tienes la cuenta. Si te sale a favor, te llega un bono por email que cambias por la tarjeta en un mostrador Ask Me Lisboa. Hasta tener la tarjeta física no puedes reservar hora en los Jerónimos ni en la Torre.',
  },
];

export default function TransportInLisbonPage() {
  const cardBlocks = resolveBookingBlocks('transporte-lisboa', LISBOA_CARD, 'guia');
  return (
    <TravelPillarPage
      guide={transportGuide}
      afterShortAnswer={cardBlocks.map(({ beforeHeading: _beforeHeading, position: _position, ...block }) => (
        <ArticleBookingBlock key={block.contentId} {...block} />
      ))}
    />
  );
}
