import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'José Tabares: autor y guía local en Lisboa',
  description: 'Soy José Tabares y escribo Estaba en Lisboa. Cómo preparo las guías: datos de fuentes oficiales con fecha, opinión cuando la hay y las pegas de cada plan.',
  alternates: {
    canonical: 'https://estabaenlisboa.com/sobre-nosotros',
  },
  openGraph: {
    type: 'profile',
    title: 'José Tabares: autor de Estaba en Lisboa',
    description: 'Quién escribe las guías de Estaba en Lisboa y cómo las prepara.',
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
