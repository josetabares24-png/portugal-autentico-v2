import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Transporte en Lisboa: Metro, Bus, Tranvía y Tren 2025 | Portugal Auténtico',
  description: 'Guía completa del transporte público en Lisboa: metro, autobuses, tranvías, funiculares y trenes. Precios actualizados 2025, horarios, mapas y consejos para moverse como un local.',
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
  authors: [{ name: 'Portugal Auténtico' }],
  openGraph: {
    title: '🚇 Guía Completa del Transporte en Lisboa 2025',
    description: 'Todo sobre el transporte público en Lisboa: metro, buses, tranvías, funiculares y trenes. Precios, horarios y consejos de locales.',
    url: 'https://portugalautentico.com/transporte',
    siteName: 'Portugal Auténtico',
    locale: 'es_ES',
    type: 'article',
    images: [
      {
        url: '/og-transporte-lisboa.jpg',
        width: 1200,
        height: 630,
        alt: 'Guía del Transporte en Lisboa 2025',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: '🚇 Transporte en Lisboa: Guía Completa 2025',
    description: 'Metro, buses, tranvías y trenes. Precios actualizados, horarios y consejos insider.',
    images: ['/og-transporte-lisboa.jpg'],
  },
  alternates: {
    canonical: 'https://portugalautentico.com/transporte',
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
