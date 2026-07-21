import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Admin | Estaba en Lisboa',
  description: 'Área privada de administración de Estaba en Lisboa.',
  alternates: {
    canonical: 'https://estabaenlisboa.com/admin',
  },
  robots: {
    index: false,
    follow: false,
  },
};

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
