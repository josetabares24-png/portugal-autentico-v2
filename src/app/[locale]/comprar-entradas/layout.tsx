import type { Metadata } from 'next';

export const metadata: Metadata = {
  // Sin sufijo de marca: la plantilla del layout raíz ya añade
  // «| Estaba en Lisboa», y ponerlo aquí lo duplicaría. Hay una suite
  // (`smoke:titles`) que vigila justo eso.
  title: 'Comprar Entradas en Lisboa',
  description:
    'Entradas para monumentos, atracciones, experiencias y excursiones desde Lisboa, seleccionadas una a una por Estaba en Lisboa. Con nuestro criterio sobre cuándo merece la pena reservar por adelantado.',
  keywords: [
    'comprar entradas lisboa',
    'entradas monumentos lisboa',
    'reservar actividades lisboa',
    'entradas atracciones lisboa',
    'excursiones desde lisboa',
  ],
  authors: [{ name: 'Estaba en Lisboa' }],
  openGraph: {
    title: 'Comprar Entradas en Lisboa',
    description:
      'Monumentos, atracciones, experiencias y excursiones desde Lisboa que merecen reservarse por adelantado, con el criterio de un local.',
    url: 'https://estabaenlisboa.com/comprar-entradas',
    siteName: 'Estaba en Lisboa',
    locale: 'es_ES',
    type: 'website',
  },
  alternates: {
    canonical: 'https://estabaenlisboa.com/comprar-entradas',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function ComprarEntradasLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
