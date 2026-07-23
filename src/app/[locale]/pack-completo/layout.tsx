import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Todas las Guías de Lisboa | Estaba en Lisboa',
  description: 'Todas las guías gratuitas de Lisboa: 1 día, 2 días, 3 días, semana completa, romántica, familiar y fotografía. Elige la ruta que encaja con tu viaje.',
  keywords: ['guías lisboa', 'itinerarios lisboa', 'rutas lisboa', 'viajar lisboa'],
  openGraph: {
    title: 'Todas las Guías de Lisboa',
    description: 'Elige entre las guías gratuitas de Lisboa según tus días, compañía y estilo de viaje.',
    url: 'https://estabaenlisboa.com/pack-completo',
  },
  alternates: { canonical: 'https://estabaenlisboa.com/pack-completo' },
};

export default function PackCompletoLayout({ children }: { children: React.ReactNode }) {
  return children;
}
