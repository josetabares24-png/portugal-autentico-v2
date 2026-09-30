import type { Metadata } from 'next';
import { TravelPillarPage } from '@/components/traveler/TravelPillarPage';
import TravelerGuideGetYourGuide from '@/components/traveler/TravelerGuideGetYourGuide';
import { whatToSeeGuide } from '@/data/travel-pillar-guides';

const PAGE_URL = 'https://estabaenlisboa.com/que-ver-en-lisboa';
const IMAGE_URL = `https://estabaenlisboa.com${whatToSeeGuide.heroImage}`;

export const metadata: Metadata = {
  title: 'Qué ver en Lisboa: lugares, barrios y ruta práctica',
  description: whatToSeeGuide.description,
  alternates: { canonical: PAGE_URL },
  robots: { index: true, follow: true },
  openGraph: {
    title: 'Qué ver en Lisboa: lugares, barrios y ruta práctica',
    description: whatToSeeGuide.description,
    url: PAGE_URL,
    type: 'article',
    images: [{ url: IMAGE_URL, alt: whatToSeeGuide.heroAlt }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Qué ver en Lisboa: lugares, barrios y ruta práctica',
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

export default function WhatToSeeInLisbonPage() {
  return (
    <TravelPillarPage
      guide={whatToSeeGuide}
      reservation={<TravelerGuideGetYourGuide section={reservationSection} />}
    />
  );
}
