import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Actividades en Lisboa sin Gastar Mucho | Estaba en Lisboa',
  description: 'Catálogo de actividades en Lisboa con precio real, duración y un tip de ahorro para cada una: miradouros gratis, cultura, gastronomía, excursiones y más.',
  keywords: [
    'que hacer en lisboa barato',
    'actividades gratis lisboa',
    'lisboa low cost',
    'miradouros lisboa gratis',
    'excursiones desde lisboa',
  ],
  authors: [{ name: 'Estaba en Lisboa' }],
  openGraph: {
    title: 'Actividades en Lisboa sin Gastar Mucho',
    description: 'Catálogo de actividades con precio real y un tip de ahorro para cada una, para armar tu propio plan en Lisboa.',
    url: 'https://estabaenlisboa.com/actividades',
    siteName: 'Estaba en Lisboa',
    locale: 'es_ES',
    type: 'website',
  },
  alternates: {
    canonical: 'https://estabaenlisboa.com/actividades',
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

export default function ActividadesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
