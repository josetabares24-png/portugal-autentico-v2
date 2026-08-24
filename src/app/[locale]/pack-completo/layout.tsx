import type { Metadata } from 'next';

/*
 * La descripción anterior enumeraba «semana completa, romántica, familiar y
 * fotografía», que son los nombres de cuatro itinerarios temáticos ya
 * retirados: describía un catálogo que dejó de existir. Y llamaba «ruta» a
 * todo, cuando la mitad de lo que reúne la página son guías editoriales.
 *
 * Twitter, además, no estaba declarado aquí y heredaba el título global
 * —«Guías de Lisboa 2026 - Itinerarios y Rutas»—, que llevaba año y no
 * coincidía con el de Open Graph. Se declaran los dos con el texto de esta
 * página. `card` e `images` se repiten en el bloque de Twitter a propósito:
 * Next.js no fusiona ese objeto con el del layout raíz, lo sustituye entero.
 *
 * La intención de la página es de hub: ayudar a elegir. No se busca
 * posicionarla por «qué hacer en Lisboa» ni por «Lisboa en 3 días», que son de
 * las páginas destino.
 */
const TITULO = 'Guías de Lisboa: itinerarios y guías por tipo de viaje';
const DESCRIPCION = 'Los itinerarios de 1, 2 y 3 días y las guías para una semana, viajar en pareja, con niños o fotografiar Lisboa. Elige según los días que tengas y cómo viajes.';
const IMAGEN = 'https://estabaenlisboa.com/images/mirador-tajo-amarras-atardecer.jpg';

export const metadata: Metadata = {
  title: TITULO,
  description: DESCRIPCION,
  keywords: ['guias lisboa', 'itinerarios lisboa', 'que ver en lisboa', 'organizar viaje lisboa'],
  openGraph: {
    title: TITULO,
    description: DESCRIPCION,
    url: 'https://estabaenlisboa.com/pack-completo',
    images: [{ url: IMAGEN, width: 1200, height: 630, alt: 'El río Tajo a su paso por Lisboa, al atardecer' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: TITULO,
    description: DESCRIPCION,
    images: [IMAGEN],
  },
  alternates: { canonical: 'https://estabaenlisboa.com/pack-completo' },
};

export default function PackCompletoLayout({ children }: { children: React.ReactNode }) {
  return children;
}
