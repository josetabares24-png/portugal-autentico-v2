import type { Metadata } from 'next';

/**
 * Vista de revisión editorial de Sinchi, no indexada ni incluida en el blog.
 * La propuesta visual HTML contiene únicamente imágenes facilitadas y
 * autorizadas para el artículo por el propio restaurante.
 *
 * Para publicar definitivamente, preparar una nueva ruta de artículo y
 * retirar noindex solo tras aprobación expresa del restaurante.
 */
export const metadata: Metadata = {
  title: 'Sinchi, restaurante peruano en Lisboa: ceviche en Alcântara',
  description:
    'Conoce Sinchi, restaurante peruano en Alcântara, la cocina de Joseph Ríos, sus ceviches, platos al wok y cómo reservar directamente.',
  robots: {
    index: false,
    follow: false,
    noarchive: true,
    googleBot: { index: false, follow: false, noarchive: true },
  },
};

export default function SinchiEditorialPreview() {
  return (
    <main id="main-content" className="w-full bg-[#f8f6f1]">
      <iframe
        title="Propuesta editorial de Sinchi, con fotografías autorizadas, para revisión antes de publicar"
        src="/sinchi-propuesta-editorial.html"
        className="block w-full border-0"
        style={{ height: '6800px', minHeight: '1200px' }}
        loading="eager"
        scrolling="no"
      />
    </main>
  );
}
