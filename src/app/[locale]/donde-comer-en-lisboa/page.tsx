import type { Metadata } from 'next';
import { TravelPillarPage } from '@/components/traveler/TravelPillarPage';
import { whereToEatGuide } from '@/data/travel-pillar-guides';

const PAGE_URL = 'https://estabaenlisboa.com/donde-comer-en-lisboa';
const IMAGE_URL = `https://estabaenlisboa.com${whereToEatGuide.heroImage}`;
const AUTHOR_URL = 'https://estabaenlisboa.com/sobre-nosotros';
const PUBLISHED_TIME = `${whereToEatGuide.datePublished}T09:00:00+01:00`;
const MODIFIED_TIME = `${whereToEatGuide.dateModified}T09:00:00+01:00`;

export const metadata: Metadata = {
  title: 'Dónde comer en Lisboa: zonas, platos y sitios concretos',
  description: whereToEatGuide.description,
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
    title: 'Dónde comer en Lisboa: zonas, platos y sitios concretos',
    description: whereToEatGuide.description,
    url: PAGE_URL,
    type: 'article',
    publishedTime: PUBLISHED_TIME,
    modifiedTime: MODIFIED_TIME,
    authors: [AUTHOR_URL],
    section: 'Guías de Lisboa',
    images: [{
      url: IMAGE_URL,
      width: whereToEatGuide.heroWidth,
      height: whereToEatGuide.heroHeight,
      alt: whereToEatGuide.heroAlt,
    }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dónde comer en Lisboa: zonas, platos y sitios concretos',
    description: whereToEatGuide.description,
    images: [IMAGE_URL],
  },
};

export default function WhereToEatInLisbonPage() {
  return <TravelPillarPage guide={whereToEatGuide} />;
}
