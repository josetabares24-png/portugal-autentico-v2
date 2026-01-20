import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Dónde Dormir en Lisboa 2025: Barrios, Hoteles y Consejos | Estaba en Lisboa',
  description: 'Guía real de alojamiento en Lisboa: mejores barrios, hoteles y hostales con pros, contras y precios. Recomendado por locales.',
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
  authors: [{ name: 'Estaba en Lisboa' }],
  openGraph: {
    title: 'Dónde Dormir en Lisboa 2025: Barrios y Hoteles',
    description: 'Mejores zonas para alojarse en Lisboa con recomendaciones reales, precios y pros/contras.',
    url: 'https://estabaenlisboa.com/donde-dormir',
    siteName: 'Estaba en Lisboa',
    locale: 'es_ES',
    type: 'article',
    images: [
      {
        url: 'https://estabaenlisboa.com/images/hero-lisboa.jpg',
        width: 1200,
        height: 630,
        alt: 'Mejores Barrios para Dormir en Lisboa 2025',
      },
    ],
  },
  alternates: {
    canonical: 'https://estabaenlisboa.com/donde-dormir',
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
