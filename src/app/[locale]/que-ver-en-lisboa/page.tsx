import type { Metadata } from 'next';
import { TravelPillarPage } from '@/components/traveler/TravelPillarPage';
import TravelerGuideGetYourGuide from '@/components/traveler/TravelerGuideGetYourGuide';
import { whatToSeeGuide } from '@/data/travel-pillar-guides';
import { ArticleBookingBlock } from '@/components/blog/ArticleBookingBlock';
import type { BlogBookingPlacement } from '@/data/blog-booking-placements';
import { resolveBookingBlocks, type ResolvedBookingBlock } from '@/lib/booking-blocks';

const PAGE_URL = 'https://estabaenlisboa.com/que-ver-en-lisboa';
const IMAGE_URL = `https://estabaenlisboa.com${whatToSeeGuide.heroImage}`;
const AUTHOR_URL = 'https://estabaenlisboa.com/sobre-nosotros';
const PUBLISHED_TIME = `${whatToSeeGuide.datePublished}T09:00:00+01:00`;
const MODIFIED_TIME = `${whatToSeeGuide.dateModified}T09:00:00+01:00`;

export const metadata: Metadata = {
  title: { absolute: 'Qué ver en Lisboa: imprescindibles y ruta por días' },
  description: whatToSeeGuide.description,
  alternates: { canonical: PAGE_URL },
  authors: [{ name: 'José Tabares', url: AUTHOR_URL }],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  openGraph: {
    title: 'Qué ver en Lisboa: imprescindibles y ruta por días',
    description: whatToSeeGuide.description,
    url: PAGE_URL,
    type: 'article',
    publishedTime: PUBLISHED_TIME,
    modifiedTime: MODIFIED_TIME,
    authors: [AUTHOR_URL],
    section: 'Guías de Lisboa',
    images: [{
      url: IMAGE_URL,
      width: whatToSeeGuide.heroWidth,
      height: whatToSeeGuide.heroHeight,
      alt: whatToSeeGuide.heroAlt,
    }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Qué ver en Lisboa: imprescindibles y ruta por días',
    description: whatToSeeGuide.description,
    images: [IMAGE_URL],
  },
};

const reservationSection = {
  eyebrow: 'Cuando una reserva sí ayuda',
  title: 'Dos planes que pueden ordenar el día',
  intro:
    'El widget oficial muestra disponibilidad y condiciones actuales para el Castelo de São Jorge y un paseo por el Tajo. Úsalo sólo si uno de esos planes ya encaja en tu ruta.',
  tourIds: '424720,410732',
  numberOfItems: '2',
  campaign: 'que_ver_lisboa_widget',
  fallbackHref: 'https://www.getyourguide.es/lisboa-l42/?partner_id=J2Z24GU&cmp=que_ver_lisboa_widget',
};

const PAGE_SLUG = 'que-ver-en-lisboa';

/**
 * Bloques de reserva de la guía (acción 1 de la auditoría, aprobada por José
 * el 9/10/2026). Solo planes que la propia guía ya recomienda: el paseo por
 * el centro para el primer día y las dos entradas de pago de los
 * imprescindibles.
 */
const PLACEMENTS: Record<'arriba' | 'imprescindibles', BlogBookingPlacement[]> = {
  arriba: [
    {
      offer: { type: 'free-tour', categoryId: 'imprescindible' },
      position: 'after-summary',
      intro:
        'Si es tu primera vez en Lisboa, un free tour por Baixa, Chiado y Rossio el primer día te ayuda a situarte. Luego vuelves por tu cuenta a lo que más te guste. Al final pagas lo que te parezca justo.',
    },
  ],
  imprescindibles: [
    {
      offer: { type: 'product', productId: 'castelo-sao-jorge' },
      intro:
        'El castillo es de los pocos imprescindibles del centro que se pagan. Con la entrada comprada te saltas la cola de la taquilla.',
    },
    {
      offer: { type: 'product', productId: 'jeronimos-torre-belem' },
      intro:
        'Si en Belém vas a entrar en el claustro de los Jerónimos y en la Torre el mismo día, puedes llevar las dos entradas en una sola compra.',
    },
  ],
};

function renderBlocks(blocks: ResolvedBookingBlock[]) {
  if (blocks.length === 0) return null;
  return blocks.map(({ beforeHeading: _beforeHeading, position: _position, ...block }) => (
    <ArticleBookingBlock key={block.contentId} {...block} />
  ));
}

export default function WhatToSeeInLisbonPage() {
  const topBlocks = resolveBookingBlocks(PAGE_SLUG, PLACEMENTS.arriba, 'guia');
  const mustSeeBlocks = resolveBookingBlocks(PAGE_SLUG, PLACEMENTS.imprescindibles, 'guia');
  return (
    <TravelPillarPage
      guide={whatToSeeGuide}
      afterShortAnswer={renderBlocks(topBlocks)}
      afterSection={{ imprescindibles: renderBlocks(mustSeeBlocks) }}
      reservation={<TravelerGuideGetYourGuide section={reservationSection} variant="article" />}
    />
  );
}
