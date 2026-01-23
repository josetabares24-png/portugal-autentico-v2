import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Transporte en Lisboa 2026: Metro, Tranvía y Trenes | Estaba en Lisboa',
  description: 'Guía completa del transporte en Lisboa: metro, tranvías, buses y trenes. Precios 2026, horarios y consejos locales.',
  keywords: [
    'transporte lisboa',
    'metro lisboa',
    'tranvía 28 lisboa',
    'autobuses lisboa',
    'carris lisboa',
    'tarjeta navegante lisboa',
    'aeropuerto lisboa centro',
    'funicular lisboa',
    'tren cascais',
    'tren sintra',
    'moverse lisboa',
    'transporte público lisboa precios'
  ],
  authors: [{ name: 'Estaba en Lisboa' }],
  openGraph: {
    title: 'Transporte en Lisboa 2025: Metro, Tranvía y Trenes',
    description: 'Todo sobre transporte público en Lisboa con precios, horarios y consejos locales.',
    url: 'https://estabaenlisboa.com/transporte',
    siteName: 'Estaba en Lisboa',
    locale: 'es_ES',
    type: 'article',
    images: [
      {
        url: 'https://estabaenlisboa.com/images/tranvia-28.jpg',
        width: 1200,
        height: 630,
        alt: 'Guía del Transporte en Lisboa 2026',
      },
    ],
  },
  alternates: {
    canonical: 'https://estabaenlisboa.com/transporte',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function TransporteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
