import Link from 'next/link';
import { redirect } from 'next/navigation';
import { isAdmin } from '@/lib/auth-utils';
import { getGuideList } from '@/lib/guide-store';
import { supabaseAdmin, validateSupabaseConfig } from '@/lib/supabase';

async function getReviewCount(): Promise<number | null> {
  try {
    validateSupabaseConfig();
    const { count, error } = await supabaseAdmin
      .from('guide_reviews')
      .select('id', { count: 'exact', head: true });

    if (error) return null;
    return count ?? 0;
  } catch {
    return null;
  }
}

export default async function AdminEstadisticasPage() {
  const admin = await isAdmin();
  if (!admin) {
    redirect('/');
  }

  const [{ main, special }, reviewCount] = await Promise.all([
    getGuideList(),
    getReviewCount(),
  ]);
  const totalGuides = main.length + special.length;
  const featuredGuides = [...main, ...special].filter((guide) => guide.featured).length;

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
          <p className="text-xl text-slate-600">Resumen editorial de guías y reseñas</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white rounded-2xl border-2 border-slate-200 p-6">
            <p className="text-slate-500 text-sm">Guías públicas</p>
            <p className="text-3xl font-black text-orange-600">{totalGuides}</p>
          </div>
          <div className="bg-white rounded-2xl border-2 border-slate-200 p-6">
            <p className="text-slate-500 text-sm">Guías principales</p>
            <p className="text-3xl font-black text-blue-600">{main.length}</p>
          </div>
          <div className="bg-white rounded-2xl border-2 border-slate-200 p-6">
            <p className="text-slate-500 text-sm">Guías especiales</p>
            <p className="text-3xl font-black text-purple-600">{special.length}</p>
          </div>
          <div className="bg-white rounded-2xl border-2 border-slate-200 p-6">
            <p className="text-slate-500 text-sm">Reseñas</p>
            <p className="text-3xl font-black text-slate-900">
              {reviewCount === null ? 'No disponible' : reviewCount}
            </p>
          </div>
          <div className="bg-white rounded-2xl border-2 border-slate-200 p-6">
            <p className="text-slate-500 text-sm">Destacadas</p>
            <p className="text-3xl font-black text-green-600">{featuredGuides}</p>
          </div>
        </div>
      </div>
    </main>
  );
}
