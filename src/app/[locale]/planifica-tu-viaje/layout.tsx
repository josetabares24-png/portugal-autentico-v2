import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Planifica tu Viaje a Lisboa',
  description: 'Contacta directamente con José para preparar tu viaje a Lisboa personalmente, según tus días, intereses y presupuesto.',
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
    description: 'Escribe a José y habla con él para preparar tu viaje a Lisboa personalmente.',
    url: 'https://estabaenlisboa.com/planifica-tu-viaje',
    siteName: 'Estaba en Lisboa',
    locale: 'es_ES',
    type: 'website',
    images: [{ url: 'https://estabaenlisboa.com/og-default.jpg', width: 1200, height: 630, alt: 'Estaba en Lisboa — guías prácticas sobre Lisboa' }],
  },
  alternates: {
    canonical: 'https://estabaenlisboa.com/planifica-tu-viaje',
  },
  robots: {
    index: false,
    follow: true,
    googleBot: {
      index: false,
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
