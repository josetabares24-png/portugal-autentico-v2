import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Sobre Estaba en Lisboa | Guías hechas por locales',
  description: 'Quiénes somos y cómo escribimos las guías de Lisboa: cómo elegimos las rutas, qué incluimos y con qué frecuencia las revisamos.',
  alternates: {
    canonical: 'https://estabaenlisboa.com/sobre-nosotros',
  },
};

export default function SobreNosotrosLayout({ children }: { children: React.ReactNode }) {
  return children;
}
