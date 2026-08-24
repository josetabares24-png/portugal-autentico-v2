import type { Metadata } from 'next';

/*
 * Metadata de la calculadora.
 *
 * Va en el layout porque la página es un componente de cliente —necesita
 * estado para reaccionar a cada cambio— y un componente de cliente no puede
 * exportar `metadata`.
 *
 * `card` e `images` se repiten en el bloque de Twitter a propósito: Next.js
 * no fusiona ese objeto con el del layout raíz, lo sustituye entero, así que
 * omitirlos aquí significaría perderlos.
 *
 * La intención de búsqueda es «cuánto cuesta un viaje a Lisboa». No se busca
 * competir con el artículo de presupuesto, que explica el porqué: esta página
 * es la herramienta, y las dos se enlazan entre sí.
 */
const TITULO = 'Calculadora de presupuesto para Lisboa';
const DESCRIPCION = 'Calcula cuánto puede costarte tu viaje a Lisboa: días, noches, personas, qué piensas visitar y, si ya lo sabes, tu alojamiento y tus vuelos. Da un rango orientativo, no un precio cerrado, y explica de dónde sale cada cifra.';
const IMAGEN = 'https://estabaenlisboa.com/images/bica-cafe-mapa.jpg';

export const metadata: Metadata = {
  title: TITULO,
  description: DESCRIPCION,
  keywords: [
    'presupuesto lisboa',
    'cuanto cuesta viajar a lisboa',
    'calculadora presupuesto lisboa',
    'precio viaje lisboa',
  ],
  openGraph: {
    title: TITULO,
    description: DESCRIPCION,
    url: 'https://estabaenlisboa.com/calculadora-presupuesto-lisboa',
    images: [
      {
        url: IMAGEN,
        width: 1200,
        height: 630,
        alt: 'Un mapa de Lisboa y un café sobre la mesa de una terraza',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: TITULO,
    description: DESCRIPCION,
    images: [IMAGEN],
  },
  alternates: {
    canonical: 'https://estabaenlisboa.com/calculadora-presupuesto-lisboa',
  },
};

export default function CalculadoraLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
