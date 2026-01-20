import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Free Tours en Lisboa 2025: Horarios y Rutas | Estaba en Lisboa',
  description: 'Mejores free tours en Lisboa con horarios, puntos de salida y qué ver. Guías locales en español.',
  alternates: {
    canonical: 'https://estabaenlisboa.com/free-tours',
  },
};

export default function FreeToursLayout({ children }: { children: React.ReactNode }) {
  return children;
}
