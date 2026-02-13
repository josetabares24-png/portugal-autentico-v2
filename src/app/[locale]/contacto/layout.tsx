import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contacto',
  description: 'Escríbenos dudas sobre Lisboa, guías o itinerarios. Respuesta rápida. Estaba en Lisboa.',
  keywords: ['contacto estaba en lisboa', 'dudas guías lisboa'],
  openGraph: {
    title: 'Contacto - Estaba en Lisboa',
    url: 'https://estabaenlisboa.com/contacto',
  },
  alternates: { canonical: 'https://estabaenlisboa.com/contacto' },
};

export default function ContactoLayout({ children }: { children: React.ReactNode }) {
  return children;
}
