import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Gracias por tu donativo | Estaba en Lisboa',
  robots: { index: false, follow: false },
};

export default function GraciasPage() {
  return (
    <main className="bg-gradient-to-b from-green-50 to-white min-h-screen flex items-center justify-center">
      <div className="max-w-lg mx-auto px-4 py-20 text-center">
        <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-8">
          <span className="material-symbols-outlined text-green-600 text-5xl">volunteer_activism</span>
        </div>

        <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
          Muchas gracias
        </h1>

        <p className="text-lg text-slate-600 mb-8">
          Tu donativo nos ayuda a seguir creando y actualizando guias gratuitas para viajeros como tu. De verdad, gracias.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/itinerarios"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary text-white font-semibold rounded-xl hover:bg-primary/90 transition-colors"
          >
            <span className="material-symbols-outlined">explore</span>
            Ver guias
          </Link>
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 border-2 border-slate-200 text-slate-700 font-semibold rounded-xl hover:bg-slate-50 transition-colors"
          >
            Volver al inicio
          </Link>
        </div>
      </div>
    </main>
  );
}
