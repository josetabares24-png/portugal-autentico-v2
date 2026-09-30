import type { Metadata } from 'next';
import { TravelPillarPage } from '@/components/traveler/TravelPillarPage';
import { whereToEatGuide } from '@/data/travel-pillar-guides';

const PAGE_URL = 'https://estabaenlisboa.com/donde-comer-en-lisboa';
const IMAGE_URL = `https://estabaenlisboa.com${whereToEatGuide.heroImage}`;

export const metadata: Metadata = {
  title: 'Dónde comer en Lisboa: zonas, platos y consejos',
  description: whereToEatGuide.description,
  alternates: { canonical: PAGE_URL },
  robots: { index: true, follow: true },
  openGraph: {
    title: 'Dónde comer en Lisboa: zonas, platos y consejos',
    description: whereToEatGuide.description,
    url: PAGE_URL,
    type: 'article',
    images: [{ url: IMAGE_URL, alt: whereToEatGuide.heroAlt }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dónde comer en Lisboa: zonas, platos y consejos',
    description: whereToEatGuide.description,
    images: [IMAGE_URL],
  },
};

export default function WhereToEatInLisbonPage() {
  return <TravelPillarPage guide={whereToEatGuide} />;
}
