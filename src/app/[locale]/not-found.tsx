import Link from 'next/link';

export default function NotFound() {
  return (
    <main className="min-h-screen bg-slate-50 flex items-center justify-center">
      <div className="max-w-md mx-auto px-4 text-center">
        <div className="text-8xl font-bold text-slate-200 mb-4">404</div>
        <h1 className="text-2xl font-bold text-slate-900 mb-4">Pagina no encontrada</h1>
        <p className="text-slate-600 mb-8">Esta pagina no existe. Volvamos al inicio.</p>
        <Link href="/" className="inline-block bg-blue-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-blue-700">
          Volver al inicio
        </Link>
      </div>
    </main>
  );
}
