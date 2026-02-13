import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Guía Práctica Lisboa 2026: Transporte, Presupuesto y Consejos',
  description: 'Info útil para viajar a Lisboa: transporte público, presupuesto real, barrios, seguridad y consejos de local. Todo lo que necesitas antes de ir.',
  keywords: ['guia lisboa', 'info lisboa', 'consejos lisboa', 'transporte lisboa', 'presupuesto lisboa', 'barrios lisboa'],
  openGraph: {
    title: 'Guía Práctica Lisboa 2026',
    description: 'Transporte, presupuesto y consejos reales para viajar a Lisboa.',
    url: 'https://estabaenlisboa.com/info-util',
  },
  alternates: { canonical: 'https://estabaenlisboa.com/info-util' },
};

export default function InfoUtilLayout({ children }: { children: React.ReactNode }) {
  return children;
}
