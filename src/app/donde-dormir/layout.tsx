import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Dónde Dormir en Lisboa: Mejores Barrios y Hoteles 2025 | Portugal Auténtico',
  description: 'Descubre los mejores barrios para alojarse en Lisboa: Alfama, Baixa, Chiado, Belém y más. Guía completa con recomendaciones de hoteles, hostales y apartamentos verificados.',
  keywords: [
    'donde dormir lisboa',
    'mejores barrios lisboa',
    'hoteles lisboa',
    'alojamiento lisboa',
    'alfama lisboa',
    'baixa lisboa',
    'chiado lisboa',
    'belem lisboa',
    'hostales lisboa',
    'apartamentos lisboa',
    'donde alojarse lisboa',
    'mejores zonas lisboa',
    'barrios lisboa turismo'
  ],
  authors: [{ name: 'Portugal Auténtico' }],
  openGraph: {
    title: '🏨 Dónde Dormir en Lisboa: Mejores Barrios y Hoteles 2025',
    description: 'Guía completa de los mejores barrios y alojamientos en Lisboa. Recomendaciones verificadas por locales con precios, pros y contras de cada zona.',
    url: 'https://portugalautentico.com/donde-dormir',
    siteName: 'Portugal Auténtico',
    locale: 'es_ES',
    type: 'article',
    images: [
      {
        url: '/og-donde-dormir-lisboa.jpg',
        width: 1200,
        height: 630,
        alt: 'Mejores Barrios para Dormir en Lisboa 2025',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: '🏨 Dónde Dormir en Lisboa: Mejores Barrios 2025',
    description: 'Descubre los mejores barrios para alojarse en Lisboa con recomendaciones de locales.',
    images: ['/og-donde-dormir-lisboa.jpg'],
  },
  alternates: {
    canonical: 'https://portugalautentico.com/donde-dormir',
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

export default function DondeDormirLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
