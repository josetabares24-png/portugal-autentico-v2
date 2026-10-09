import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Preguntas Frecuentes sobre las Guías de Lisboa',
  description: 'Respuestas a dudas sobre acceso gratuito, contenido y uso de las guías de Lisboa.',
  keywords: ['faq lisboa', 'preguntas guías lisboa', 'guías gratuitas lisboa'],
  openGraph: {
    title: 'FAQ Guías de Lisboa',
    description: 'Preguntas frecuentes sobre nuestras guías e itinerarios.',
    url: 'https://estabaenlisboa.com/faq',
    images: [{ url: 'https://estabaenlisboa.com/og-default.jpg', width: 1200, height: 630, alt: 'Estaba en Lisboa — guías prácticas sobre Lisboa' }],
  },
  alternates: {
    canonical: 'https://estabaenlisboa.com/faq',
  },
};

export default function FAQLayout({ children }: { children: React.ReactNode }) {
  return children;
}
