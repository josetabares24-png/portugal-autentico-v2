import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Presupuesto Lisboa 2026: Calculadora y Costes Reales | Estaba en Lisboa',
  description: 'Calcula cuánto cuesta viajar a Lisboa según tu estilo: mochilero, medio o confort. Incluye alojamiento, comida, transporte y actividades.',
  keywords: [
    'presupuesto lisboa',
    'cuánto cuesta lisboa',
    'viajar lisboa barato',
    'precio viaje lisboa',
    'calculadora viaje lisboa',
    'gastos lisboa 2026',
    'presupuesto portugal',
    'cuánto dinero llevar lisboa',
    'viaje lisboa económico',
    'backpacking lisboa'
  ],
  authors: [{ name: 'Estaba en Lisboa' }],
  openGraph: {
    title: 'Presupuesto Lisboa 2025: Calculadora y Costes Reales',
    description: 'Calcula tu presupuesto de viaje a Lisboa con precios reales y consejos locales.',
    url: 'https://estabaenlisboa.com/presupuesto',
    siteName: 'Estaba en Lisboa',
    locale: 'es_ES',
    type: 'website',
    images: [
      {
        url: 'https://estabaenlisboa.com/images/hero-lisboa.jpg',
        width: 1200,
        height: 630,
        alt: 'Calculadora de Presupuesto Lisboa 2026',
      },
    ],
  },
  alternates: {
    canonical: 'https://estabaenlisboa.com/presupuesto',
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
