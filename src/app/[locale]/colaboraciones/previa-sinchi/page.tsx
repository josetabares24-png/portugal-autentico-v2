import type { Metadata } from 'next';
import { SinchiPdfCards, SinchiPreviewFrame } from './SinchiPreviewExperience';

/**
 * Vista de revisión editorial de Sinchi, no indexada ni incluida en el blog.
 * Conserva la propuesta visual y los materiales del restaurante; la altura
 * del iframe se adapta al contenido para evitar huecos en dispositivos móviles.
 * La versión final indexable debe convertirse a contenido HTML nativo.
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
      <SinchiPreviewFrame />
      <SinchiPdfCards />
    </main>
  );
}
