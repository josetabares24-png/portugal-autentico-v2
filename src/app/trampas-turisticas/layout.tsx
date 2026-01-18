import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '10 Trampas Turísticas en Lisboa (y Cómo Evitarlas) | Portugal Auténtico',
  description: 'Descubre las 10 trampas turísticas más comunes en Lisboa y cómo evitarlas como lo haría un local. Ahorra más de 150€ en tu viaje con consejos insider actualizados 2025.',
  keywords: [
    'trampas turísticas lisboa',
    'consejos lisboa',
    'evitar turistadas lisboa',
    'guía lisboa local',
    'lisboa auténtica',
    'ahorrar dinero lisboa',
    'tranvía 28 lisboa',
    'pasteis de belem cola',
    'restaurantes turísticos lisboa',
    'lisboa insider tips'
  ],
  authors: [{ name: 'Portugal Auténtico' }],
  openGraph: {
    title: '🚫 10 Trampas Turísticas en Lisboa (y Cómo Evitarlas)',
    description: 'Ahorra 150€+ en tu viaje a Lisboa. Consejos de locales para evitar las trampas turísticas más comunes. Actualizado 2025.',
    url: 'https://portugalautentico.com/trampas-turisticas',
    siteName: 'Portugal Auténtico',
    locale: 'es_ES',
    type: 'article',
    images: [
      {
        url: '/og-trampas-turisticas.jpg',
        width: 1200,
        height: 630,
        alt: '10 Trampas Turísticas en Lisboa',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: '🚫 10 Trampas Turísticas en Lisboa',
    description: 'Ahorra 150€+ en tu viaje. Consejos insider para evitar las turistadas más comunes.',
    images: ['/og-trampas-turisticas.jpg'],
  },
  alternates: {
    canonical: 'https://portugalautentico.com/trampas-turisticas',
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

export default function TrampasLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
