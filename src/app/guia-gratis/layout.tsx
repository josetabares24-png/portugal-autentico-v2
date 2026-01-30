import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Guía Gratis de Lisboa - Descarga PDF',
  description: 'Descarga gratis la guía esencial de Lisboa: transporte, presupuesto, barrios y consejos prácticos. Todo lo básico para planificar tu viaje.',
  openGraph: {
    title: 'Guía Gratis de Lisboa',
    description: 'Guía práctica con transporte, presupuesto y consejos. Descarga gratuita.',
    url: 'https://estabaenlisboa.com/guia-gratis',
  },
  alternates: { canonical: 'https://estabaenlisboa.com/guia-gratis' },
};

export default function GuiaGratisLayout({ children }: { children: React.ReactNode }) {
  return children;
}
