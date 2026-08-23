import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Sobre Estaba en Lisboa | El proyecto',
  description: 'Quién está detrás de Estaba en Lisboa y cómo se escriben las guías: experiencia propia, investigación, fuentes oficiales y revisión periódica.',
  alternates: {
    canonical: 'https://estabaenlisboa.com/sobre-nosotros',
  },
};

export default function SobreNosotrosLayout({ children }: { children: React.ReactNode }) {
  return children;
}
