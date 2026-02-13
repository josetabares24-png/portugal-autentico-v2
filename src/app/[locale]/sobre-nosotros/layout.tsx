import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Sobre Estaba en Lisboa | Guías hechas por locales',
  description: 'Quiénes somos y cómo creamos guías reales de Lisboa, actualizadas y verificadas por locales.',
  alternates: {
    canonical: 'https://estabaenlisboa.com/sobre-nosotros',
  },
};

export default function SobreNosotrosLayout({ children }: { children: React.ReactNode }) {
  return children;
}
