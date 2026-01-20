import Link from 'next/link';
import { redirect } from 'next/navigation';
import { isAdmin } from '@/lib/auth-utils';
import { getAllPurchases } from '@/lib/supabase';

export default async function AdminComprasPage() {
  const admin = await isAdmin();
  if (!admin) {
    redirect('/');
  }

  const purchases = await getAllPurchases(100, 0);

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
            Compras
          </h1>
          <p className="text-xl text-slate-600">Últimas compras registradas</p>
        </div>

        <div className="bg-white rounded-2xl border-2 border-slate-200 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="min-w-full text-sm">
              <thead className="bg-slate-50 border-b border-slate-200">
                <tr>
                  <th className="text-left px-4 py-3 font-semibold text-slate-600">Fecha</th>
                  <th className="text-left px-4 py-3 font-semibold text-slate-600">Email</th>
                  <th className="text-left px-4 py-3 font-semibold text-slate-600">Guía</th>
                  <th className="text-left px-4 py-3 font-semibold text-slate-600">Monto</th>
                  <th className="text-left px-4 py-3 font-semibold text-slate-600">Estado</th>
                </tr>
              </thead>
              <tbody>
                {purchases.length > 0 ? (
                  purchases.map((purchase) => (
                    <tr key={purchase.id} className="border-b border-slate-100">
                      <td className="px-4 py-3 text-slate-700">
                        {new Date(purchase.created_at).toLocaleDateString('es-ES')}
                      </td>
                      <td className="px-4 py-3 text-slate-700">{purchase.email}</td>
                      <td className="px-4 py-3 text-slate-700">{purchase.itinerary_title}</td>
                      <td className="px-4 py-3 font-semibold text-slate-900">
                        €{purchase.amount.toFixed(2)}
                      </td>
                      <td className="px-4 py-3">
                        <span className={`inline-flex px-2 py-1 rounded-full text-xs font-semibold ${
                          purchase.status === 'completed'
                            ? 'bg-green-100 text-green-700'
                            : purchase.status === 'pending'
                              ? 'bg-orange-100 text-orange-700'
                              : 'bg-red-100 text-red-700'
                        }`}>
                          {purchase.status}
                        </span>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan={5} className="px-4 py-10 text-center text-slate-500">
                      No hay compras registradas todavía.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </main>
  );
}
