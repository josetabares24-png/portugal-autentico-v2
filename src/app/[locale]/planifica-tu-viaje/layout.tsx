import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Planifica tu Viaje a Lisboa | Estaba en Lisboa',
  description: 'Recomendación instantánea de itinerario y presupuesto, o un plan a medida 1:1 si tienes pocos días y quieres aprovecharlos al máximo.',
  keywords: [
    'planificar viaje lisboa',
    'itinerario personalizado lisboa',
    'plan de viaje lisboa',
    'consultor de viajes lisboa',
    'que hacer en lisboa pocos dias',
  ],
  authors: [{ name: 'Estaba en Lisboa' }],
  openGraph: {
    title: 'Planifica tu Viaje a Lisboa',
    description: 'Recomendación instantánea o plan a medida 1:1 para aprovechar al máximo tus días en Lisboa.',
    url: 'https://estabaenlisboa.com/planifica-tu-viaje',
    siteName: 'Estaba en Lisboa',
    locale: 'es_ES',
    type: 'website',
  },
  alternates: {
    canonical: 'https://estabaenlisboa.com/planifica-tu-viaje',
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

export default function PlanificaTuViajeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
