import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Preguntas Frecuentes sobre las Guías de Lisboa',
  description: 'Respuestas a dudas sobre compra, acceso, contenido y uso de las guías de Lisboa. Garantía, métodos de pago y descargas offline.',
  keywords: ['faq lisboa', 'preguntas guías lisboa', 'comprar guía lisboa'],
  openGraph: {
    title: 'FAQ Guías de Lisboa',
    description: 'Preguntas frecuentes sobre nuestras guías e itinerarios.',
    url: 'https://estabaenlisboa.com/faq',
  },
  alternates: { canonical: 'https://estabaenlisboa.com/faq' },
};

export default function FAQLayout({ children }: { children: React.ReactNode }) {
  return children;
}
