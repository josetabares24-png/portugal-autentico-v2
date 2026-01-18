import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Calculadora de Presupuesto Lisboa 2025 | Cuánto Cuesta Viajar a Portugal',
  description: 'Calcula cuánto necesitas para tu viaje a Lisboa según tu estilo: mochilero (35€/día), medio (60€/día) o confort (120€+/día). Incluye alojamiento, comida, transporte y actividades.',
  keywords: [
    'presupuesto lisboa',
    'cuánto cuesta lisboa',
    'viajar lisboa barato',
    'precio viaje lisboa',
    'calculadora viaje lisboa',
    'gastos lisboa 2025',
    'presupuesto portugal',
    'cuánto dinero llevar lisboa',
    'viaje lisboa económico',
    'backpacking lisboa'
  ],
  authors: [{ name: 'Portugal Auténtico' }],
  openGraph: {
    title: '💰 Calculadora de Presupuesto Lisboa 2025',
    description: 'Descubre cuánto necesitas para tu viaje a Lisboa. Desde 35€/día (mochilero) hasta 120€+/día (confort). Calcula tu presupuesto personalizado.',
    url: 'https://portugalautentico.com/presupuesto',
    siteName: 'Portugal Auténtico',
    locale: 'es_ES',
    type: 'website',
    images: [
      {
        url: '/og-presupuesto-lisboa.jpg',
        width: 1200,
        height: 630,
        alt: 'Calculadora de Presupuesto Lisboa 2025',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: '💰 Calculadora de Presupuesto Lisboa 2025',
    description: 'Calcula cuánto necesitas para tu viaje a Lisboa según tu estilo de viaje. Desde 35€/día hasta 120€+/día.',
    images: ['/og-presupuesto-lisboa.jpg'],
  },
  alternates: {
    canonical: 'https://portugalautentico.com/presupuesto',
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

export default function PresupuestoLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
