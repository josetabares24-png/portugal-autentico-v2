import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Darse de baja',
  description: 'Gestiona tu suscripción a los correos de Estaba en Lisboa.',
  alternates: {
    canonical: 'https://estabaenlisboa.com/unsubscribe',
  },
  robots: {
    index: false,
    follow: true,
  },
};

export default function UnsubscribeLayout({ children }: { children: React.ReactNode }) {
  return children;
}
