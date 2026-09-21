import type { Metadata } from 'next';
import { ClerkProvider } from '@clerk/nextjs';

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: 'Admin',
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
  return <ClerkProvider>{children}</ClerkProvider>;
}
