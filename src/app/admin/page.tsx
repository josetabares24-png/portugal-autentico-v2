import { redirect } from 'next/navigation';
import Link from 'next/link';
import { isAdmin } from '@/lib/auth-utils';

export const metadata = {
  title: 'Panel de Administración | Estaba en Lisboa',
  description: 'Panel de administración para gestionar guías y contenido',
};

export default async function AdminPage() {
  const admin = await isAdmin();

  if (!admin) {
    redirect('/');
  }

  return (
    <main className="min-h-screen bg-[#FFFDF7] pt-24 pb-16">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl sm:text-5xl font-black text-slate-900 mb-4" style={{ fontFamily: 'Georgia, serif' }}>
            Panel de Administración
          </h1>
          <p className="text-xl text-slate-600">
            Gestiona todas las guías y contenido de la plataforma
          </p>
        </div>

        {/* Admin Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Gestión de Guías */}
          <Link
            href="/admin/guias"
            className="bg-white rounded-2xl border-2 border-slate-200 p-8 hover:border-orange-500 hover:shadow-xl transition-all group"
          >
            <div className="w-16 h-16 rounded-full bg-orange-100 flex items-center justify-center mb-4 group-hover:bg-orange-200 transition-colors">
              <svg className="w-8 h-8 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            </div>
            <h2 className="text-2xl font-bold text-slate-900 mb-2">Gestión de Guías</h2>
            <p className="text-slate-600">
              Ver, editar y gestionar todas las guías de itinerarios
            </p>
          </Link>

          {/* Estadísticas */}
          <Link
            href="/admin/estadisticas"
            className="bg-white rounded-2xl border-2 border-slate-200 p-8 hover:border-blue-500 hover:shadow-xl transition-all group"
          >
            <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mb-4 group-hover:bg-blue-200 transition-colors">
              <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            </div>
            <h2 className="text-2xl font-bold text-slate-900 mb-2">Estadísticas</h2>
            <p className="text-slate-600">
              Ver ventas, usuarios y métricas de la plataforma
            </p>
          </Link>

          {/* Compras */}
          <Link
            href="/admin/compras"
            className="bg-white rounded-2xl border-2 border-slate-200 p-8 hover:border-green-500 hover:shadow-xl transition-all group"
          >
            <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mb-4 group-hover:bg-green-200 transition-colors">
              <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg>
            </div>
            <h2 className="text-2xl font-bold text-slate-900 mb-2">Compras</h2>
            <p className="text-slate-600">
              Ver y gestionar todas las compras realizadas
            </p>
          </Link>
        </div>

        {/* Quick Actions */}
        <div className="mt-12 bg-white rounded-2xl border-2 border-slate-200 p-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">Acciones Rápidas</h2>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/admin/guias"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-[#FF6B35] to-[#F7931E] text-white font-bold px-6 py-3 rounded-xl hover:scale-105 transition-all shadow-lg"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
              </svg>
              Nueva Guía
            </Link>
            <Link
              href="/itinerarios"
              className="inline-flex items-center gap-2 bg-primary hover:bg-primary-dark text-white font-semibold px-6 py-3 rounded-xl shadow-lg hover:shadow-xl transition-all"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
              Ver Guías Públicas
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
