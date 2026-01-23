import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Guía práctica de Lisboa 2026: Consejos y Trucos | Estaba en Lisboa',
  description: 'Info útil para viajar a Lisboa: transporte, presupuesto, seguridad, barrios y recomendaciones locales.',
  alternates: {
    canonical: 'https://estabaenlisboa.com/info-util',
  },
};

export default function InfoUtilLayout({ children }: { children: React.ReactNode }) {
  return children;
}
