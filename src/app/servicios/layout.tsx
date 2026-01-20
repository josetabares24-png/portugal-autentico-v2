import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Servicios premium en Lisboa | Estaba en Lisboa',
  description: 'Servicios privados en Lisboa: fotógrafo personal, tours privados y transfers. Atención local y experiencias a medida.',
  alternates: {
    canonical: 'https://estabaenlisboa.com/servicios',
  },
};

export default function ServiciosLayout({ children }: { children: React.ReactNode }) {
  return children;
}
