import DocumentShell from '@/components/DocumentShell';
import { spanishSiteMetadata } from '@/lib/spanish-site-metadata';
import type { Metadata } from 'next';
import { ClerkProvider } from '@clerk/nextjs';

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  ...spanishSiteMetadata,
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
  return <DocumentShell><ClerkProvider>{children}</ClerkProvider></DocumentShell>;
}
