import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Tours en Lisboa 2026: Free Tours, Sintra y Experiencias | Estaba en Lisboa',
  description: 'Tours en Lisboa verificados por locales: free tours, Sintra, Cascais, gastronomía y más. Rutas claras, precios reales y cancelación gratis.',
  keywords: [
    'tours lisboa',
    'excursiones lisboa',
    'free tour lisboa',
    'tour sintra',
    'tour cascais',
    'tour belem',
    'visita guiada lisboa',
    'excursion sintra desde lisboa',
    'tour gastronomico lisboa',
    'paseo barco lisboa',
    'tour alfama',
    'civitatis lisboa',
    'experiencias lisboa'
  ],
  authors: [{ name: 'Estaba en Lisboa' }],
  openGraph: {
    title: 'Tours en Lisboa 2026: Free Tours, Sintra y Experiencias',
    description: 'Tours verificados por locales: free tours, Sintra, Cascais y gastronomía. Itinerarios claros y recomendaciones reales.',
    url: 'https://estabaenlisboa.com/tours',
    siteName: 'Estaba en Lisboa',
    locale: 'es_ES',
    type: 'article',
    images: [
      {
        url: 'https://estabaenlisboa.com/images/hero-lisboa.jpg',
        width: 1200,
        height: 630,
        alt: 'Mejores Tours y Excursiones en Lisboa 2026',
      },
    ],
  },
  alternates: {
    canonical: 'https://estabaenlisboa.com/tours',
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

export default function ToursLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
