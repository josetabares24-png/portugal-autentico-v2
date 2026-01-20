import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contacto | Estaba en Lisboa',
  description: 'Escríbenos para dudas sobre Lisboa, guías, itinerarios o colaboraciones. Respuesta rápida.',
  alternates: {
    canonical: 'https://estabaenlisboa.com/contacto',
  },
};

export default function ContactoLayout({ children }: { children: React.ReactNode }) {
  return children;
}
