import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Apoya nuestro proyecto | Estaba en Lisboa',
  description: 'Deja un donativo voluntario para ayudarnos a mantener nuestras guías de Lisboa gratuitas y actualizadas.',
  alternates: {
    canonical: 'https://estabaenlisboa.com/donar',
  },
  robots: { index: true, follow: true },
};

export default function DonarLayout({ children }: { children: React.ReactNode }) {
  return children;
}
