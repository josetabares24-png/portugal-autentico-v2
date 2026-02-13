import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Pack Completo Lisboa - 8 Guías al Mejor Precio',
  description: 'Todas las guías de Lisboa en un pack: 1 día, 2 días, 3 días, semana, romántica, familiar, fotografía. Ahorra 60% con acceso de por vida.',
  keywords: ['pack lisboa', 'todas guías lisboa', 'comprar guías lisboa'],
  openGraph: {
    title: 'Pack Completo Lisboa',
    description: '8 guías + bonus. Todo Lisboa al mejor precio.',
    url: 'https://estabaenlisboa.com/pack-completo',
  },
  alternates: { canonical: 'https://estabaenlisboa.com/pack-completo' },
};

export default function PackCompletoLayout({ children }: { children: React.ReactNode }) {
  return children;
}
