import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Apps útiles para viajar a Lisboa 2026 | Estaba en Lisboa',
  description: 'Apps imprescindibles para Lisboa: transporte, mapas offline, reservas y finanzas. Lista práctica actualizada.',
  alternates: {
    canonical: 'https://estabaenlisboa.com/apps',
  },
};

export default function AppsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
