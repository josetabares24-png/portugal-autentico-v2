import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contacto',
  description: 'Escríbenos dudas sobre Lisboa, guías o itinerarios. Respuesta rápida. Estaba en Lisboa.',
  keywords: ['contacto estaba en lisboa', 'dudas guías lisboa'],
  openGraph: {
    title: 'Contacto - Estaba en Lisboa',
    url: 'https://estabaenlisboa.com/contacto',
    images: [{ url: 'https://estabaenlisboa.com/og-default.jpg', width: 1200, height: 630, alt: 'Estaba en Lisboa — guías prácticas sobre Lisboa' }],
  },
  alternates: { canonical: 'https://estabaenlisboa.com/contacto' },
};

export default function ContactoLayout({ children }: { children: React.ReactNode }) {
  return children;
}
