import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'José Tabares: autor y guía local en Lisboa',
  description: 'Quién escribe Estaba en Lisboa y cómo se preparan las guías: criterio local, fuentes oficiales, revisión periódica y recomendaciones transparentes.',
  alternates: {
    canonical: 'https://estabaenlisboa.com/sobre-nosotros',
  },
  openGraph: {
    type: 'profile',
    title: 'José Tabares: autor de Estaba en Lisboa',
    description: 'El método y la persona detrás de las guías de Estaba en Lisboa.',
    url: 'https://estabaenlisboa.com/sobre-nosotros',
    images: [{
      url: 'https://estabaenlisboa.com/images/lisboa-originales/alfama-lisboa-tejados-rio-tejo.jpg',
      alt: 'Tejados de Alfama y el río Tajo en Lisboa',
    }],
  },
};

export default function SobreNosotrosLayout({ children }: { children: React.ReactNode }) {
  return children;
}
