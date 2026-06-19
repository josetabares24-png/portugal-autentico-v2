import Link from 'next/link';

export default function NotFound() {
  return (
    <main className="bg-background-light py-32 text-center">
      <div className="max-w-md mx-auto px-6">
        <p className="text-8xl font-bold text-border-soft mb-4">404</p>
        <h1 className="font-display italic text-text-main text-2xl mb-4">Página no encontrada</h1>
        <p className="text-text-secondary text-sm mb-8">Esta página no existe. Volvamos al inicio.</p>
        <Link
          href="/"
          className="btn-primary inline-flex px-6 py-3 text-sm"
        >
          Volver al inicio
        </Link>
      </div>
    </main>
  );
}
