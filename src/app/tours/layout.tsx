import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Tours y Excursiones en Lisboa 2025 | Mejores Experiencias | Portugal Auténtico',
  description: 'Descubre los mejores tours y excursiones en Lisboa verificados por locales: free tours, visitas guiadas, excursiones a Sintra, Cascais, Óbidos y más. Sin turistadas, solo experiencias auténticas.',
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
  authors: [{ name: 'Portugal Auténtico' }],
  openGraph: {
    title: '🎯 Mejores Tours y Excursiones en Lisboa 2025',
    description: 'Tours verificados por locales: free tours, Sintra, Cascais, gastronomía y más. Sin turistadas, solo experiencias auténticas.',
    url: 'https://portugalautentico.com/tours',
    siteName: 'Portugal Auténtico',
    locale: 'es_ES',
    type: 'article',
    images: [
      {
        url: '/og-tours-lisboa.jpg',
        width: 1200,
        height: 630,
        alt: 'Mejores Tours y Excursiones en Lisboa 2025',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: '🎯 Mejores Tours y Excursiones en Lisboa 2025',
    description: 'Tours verificados por locales: free tours, Sintra, Cascais y más. Sin turistadas.',
    images: ['/og-tours-lisboa.jpg'],
  },
  alternates: {
    canonical: 'https://portugalautentico.com/tours',
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
