import Link from 'next/link';
import { redirect } from 'next/navigation';
import { isAdmin } from '@/lib/auth-utils';
import { getSalesStats } from '@/lib/supabase';

export default async function AdminEstadisticasPage() {
  const admin = await isAdmin();
  if (!admin) {
    redirect('/');
  }

  const stats = await getSalesStats();

  return (
    <main className="min-h-screen bg-[#FFFDF7] pt-24 pb-16">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="mb-8">
          <Link
            href="/admin"
            className="inline-flex items-center gap-2 text-slate-600 hover:text-orange-600 mb-4 transition-colors"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Volver al Panel
          </Link>
          <h1 className="text-4xl sm:text-5xl font-black text-slate-900 mb-2" style={{ fontFamily: 'Georgia, serif' }}>
            Estadísticas
          </h1>
          <p className="text-xl text-slate-600">Resumen de ventas y rendimiento</p>
        </div>

        {stats ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white rounded-2xl border-2 border-slate-200 p-6">
              <p className="text-slate-500 text-sm">Ventas completadas</p>
              <p className="text-3xl font-black text-green-600">{stats.completed_sales}</p>
            </div>
            <div className="bg-white rounded-2xl border-2 border-slate-200 p-6">
              <p className="text-slate-500 text-sm">Ventas pendientes</p>
              <p className="text-3xl font-black text-orange-600">{stats.pending_sales}</p>
            </div>
            <div className="bg-white rounded-2xl border-2 border-slate-200 p-6">
              <p className="text-slate-500 text-sm">Ingresos totales</p>
              <p className="text-3xl font-black text-slate-900">€{stats.total_revenue.toFixed(2)}</p>
            </div>
            <div className="bg-white rounded-2xl border-2 border-slate-200 p-6">
              <p className="text-slate-500 text-sm">Ventas totales</p>
              <p className="text-3xl font-black text-slate-900">{stats.total_sales}</p>
            </div>
            <div className="bg-white rounded-2xl border-2 border-slate-200 p-6">
              <p className="text-slate-500 text-sm">Ticket promedio</p>
              <p className="text-3xl font-black text-slate-900">€{stats.avg_sale_amount.toFixed(2)}</p>
            </div>
          </div>
        ) : (
          <div className="bg-white rounded-2xl border-2 border-slate-200 p-8 text-center">
            <p className="text-slate-600">
              No hay datos disponibles. Revisa la configuración de Supabase o espera nuevas ventas.
            </p>
          </div>
        )}
      </div>
    </main>
  );
}
