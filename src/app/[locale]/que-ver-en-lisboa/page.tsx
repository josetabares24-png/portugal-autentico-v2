import type { Metadata } from 'next';
import { TravelPillarPage } from '@/components/traveler/TravelPillarPage';
import { whatToSeeGuide } from '@/data/travel-pillar-guides';
import { ArticleBookingRecommendations } from '@/components/blog/ArticleBookingRecommendations';
import type { BlogBookingPlacement } from '@/data/blog-booking-placements';
import { resolveBookingBlocks } from '@/lib/booking-blocks';

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

const PAGE_SLUG = 'que-ver-en-lisboa';

/** Fase 2: solo dos opciones exactas, al final de la respuesta completa. */
const PLACEMENTS: BlogBookingPlacement[] = [
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
];

// Fase 2: las entradas solo se ofrecen tras responder la guía completa.
// El buscador/widget genérico y el free tour temprano dejan de ser automáticos.
export default function WhatToSeeInLisbonPage() {
  const blocks = resolveBookingBlocks(PAGE_SLUG, PLACEMENTS, 'guia');
  return (
    <TravelPillarPage
      guide={whatToSeeGuide}
      reservation={<ArticleBookingRecommendations bookings={blocks} />}
    />
  );
}
