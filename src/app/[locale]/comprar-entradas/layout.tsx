import type { Metadata } from 'next';

export const metadata: Metadata = {
  // Sin sufijo de marca: la plantilla del layout raíz ya añade
  // «| Estaba en Lisboa», y ponerlo aquí lo duplicaría. Hay una suite
  // (`smoke:titles`) que vigila justo eso.
  title: 'Comprar entradas en Lisboa: precios y reservas',
  description:
    'Compra entradas para el Oceanário, Castelo de São Jorge, Palacio da Pena y Lisboa Card. Compara qué reservar antes, precios y disponibilidad.',
  keywords: [
    'comprar entradas lisboa',
    'entradas monumentos lisboa',
    'reservar actividades lisboa',
    'entradas atracciones lisboa',
    'excursiones desde lisboa',
  ],
  authors: [{ name: 'Estaba en Lisboa' }],
  openGraph: {
    title: 'Comprar entradas en Lisboa: precios y reservas',
    description:
      'Diez reservas útiles, con criterio local, precio y disponibilidad en el proveedor antes de pagar.',
    url: 'https://estabaenlisboa.com/comprar-entradas',
    siteName: 'Estaba en Lisboa',
    locale: 'es_ES',
    type: 'website',
    images: [
      {
        url: 'https://estabaenlisboa.com/images/lisboa-originales/alfama-lisboa-tejados-rio-tejo.jpg',
        width: 3840,
        height: 2160,
        alt: 'Tejados de Alfama y el río Tajo en Lisboa',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Comprar entradas en Lisboa',
    description:
      'Qué conviene reservar antes y dónde comprar cada entrada o experiencia.',
    images: ['https://estabaenlisboa.com/images/lisboa-originales/alfama-lisboa-tejados-rio-tejo.jpg'],
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
