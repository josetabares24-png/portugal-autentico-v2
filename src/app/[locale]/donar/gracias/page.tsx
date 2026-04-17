import Link from 'next/link';
import type { Metadata } from 'next';
import Icon from '@/components/Icon';

export const metadata: Metadata = {
  title: 'Gracias por tu donativo | Estaba en Lisboa',
  robots: { index: false, follow: false },
};

export default function GraciasPage() {
  return (
    <main className="bg-background-light py-32">
      <div className="max-w-lg mx-auto px-6 text-center">
        <div className="border-t-2 border-primary pt-8 mb-8">
          <div className="w-10 h-10 bg-primary flex items-center justify-center mx-auto mb-6">
            <Icon name="favorite" size={20} className="text-white" />
          </div>
          <h1 className="font-display italic text-text-main text-3xl md:text-4xl mb-4">
            Muchas gracias
          </h1>
          <p className="text-text-secondary text-sm leading-relaxed">
            Tu donativo nos ayuda a seguir creando y actualizando guías gratuitas para viajeros como tú. De verdad, gracias.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            href="/itinerarios"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary hover:bg-primary-dark text-white font-semibold text-sm transition-colors"
          >
            Ver guías
          </Link>
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-border-soft text-text-main font-semibold text-sm hover:border-primary transition-colors"
          >
            Volver al inicio
          </Link>
        </div>
      </div>
    </main>
  );
}
