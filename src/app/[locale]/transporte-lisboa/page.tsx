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
 * Un solo bloque de reserva, y solo en la sección que hace la cuenta de la
 * Lisboa Card. El resto de la página no vende nada: el transporte se paga
 * en la taquilla o en la máquina y no hay comisión que ganar ahí.
 */
const LISBOA_CARD: BlogBookingPlacement[] = [
  {
    offer: { type: 'product', productId: 'lisboa-card' },
    intro:
      'Si después de hacer la cuenta te sale a favor, aquí la puedes comprar antes del viaje. Te llega un bono por email que cambias por la tarjeta en un mostrador Ask Me Lisboa. Hasta que no tengas la tarjeta física no puedes reservar hora en los Jerónimos ni en la Torre.',
  },
];

export default function TransportInLisbonPage() {
  const cardBlocks = resolveBookingBlocks('transporte-lisboa', LISBOA_CARD, 'guia');
  return (
    <TravelPillarPage
      guide={transportGuide}
      afterSection={{
        'lisboa-card': cardBlocks.map(({ beforeHeading: _beforeHeading, position: _position, ...block }) => (
          <ArticleBookingBlock key={block.contentId} {...block} />
        )),
      }}
    />
  );
}
