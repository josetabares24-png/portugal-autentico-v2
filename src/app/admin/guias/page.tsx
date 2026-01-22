import { redirect } from 'next/navigation';
import Link from 'next/link';
import { isAdmin } from '@/lib/auth-utils';
import { getGuideList } from '@/lib/guide-store';

export const metadata = {
  title: 'Gestión de Guías | Admin',
  description: 'Administrar todas las guías de itinerarios',
};

export default async function AdminGuiasPage() {
  const admin = await isAdmin();

  if (!admin) {
    redirect('/');
  }

  const { main: mainItineraries, special: specialItineraries } = await getGuideList();
  const allGuides = [...mainItineraries, ...specialItineraries];

  return (
    <main className="min-h-screen bg-[#FFFDF7] pt-24 pb-16">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Header */}
        <div className="mb-8 flex items-center justify-between">
          <div>
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
              Gestión de Guías
            </h1>
            <p className="text-xl text-slate-600">
              {allGuides.length} guías disponibles
            </p>
          </div>
          <Link
            href="/admin/guias/nueva"
          className="inline-flex items-center gap-2 bg-primary hover:bg-primary-dark text-white font-bold px-6 py-3 rounded-xl hover:scale-105 transition-all duration-300 shadow-lg"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
            </svg>
            Nueva Guía
          </Link>
        </div>

        {/* Guías Principales */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">Guías Principales</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {mainItineraries.map((guide) => (
              <Link
                key={guide.id}
                href={`/admin/guias/${guide.slug || guide.id}`}
                className="bg-white rounded-2xl border-2 border-slate-200 p-6 hover:border-orange-500 hover:shadow-xl transition-all group"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <h3 className="text-xl font-bold text-slate-900 group-hover:text-orange-600 transition-colors">
                        {guide.title}
                      </h3>
                      {guide.featured && (
                        <span className="text-xs font-bold bg-orange-100 text-orange-700 px-2 py-1 rounded">
                          DESTACADA
                        </span>
                      )}
                    </div>
                    <p className="text-slate-600 text-sm mb-3 line-clamp-2">
                      {guide.description}
                    </p>
                    <div className="flex items-center gap-4 text-sm">
                      <span className="text-slate-500">{guide.duration}</span>
                      <span className="font-bold text-orange-600">€{guide.price.toFixed(2)}</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-sm text-slate-500">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                  Editar guía
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Guías Especiales */}
        <div>
          <h2 className="text-2xl font-bold text-slate-900 mb-6">Guías Especiales</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {specialItineraries.map((guide) => (
              <Link
                key={guide.id}
                href={`/admin/guias/${guide.slug || guide.id}`}
                className="bg-white rounded-2xl border-2 border-slate-200 p-6 hover:border-orange-500 hover:shadow-xl transition-all group"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <h3 className="text-xl font-bold text-slate-900 group-hover:text-orange-600 transition-colors">
                        {guide.title}
                      </h3>
                      {guide.badge && (
                        <span className={`text-xs font-bold px-2 py-1 rounded ${guide.badge.color} text-white`}>
                          {guide.badge.text}
                        </span>
                      )}
                    </div>
                    <p className="text-slate-600 text-sm mb-3 line-clamp-2">
                      {guide.description}
                    </p>
                    <div className="flex items-center gap-4 text-sm">
                      <span className="text-slate-500">{guide.duration}</span>
                      <span className="font-bold text-orange-600">€{guide.price.toFixed(2)}</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-sm text-slate-500">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                  Editar guía
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Estadísticas rápidas */}
        <div className="mt-12 bg-white rounded-2xl border-2 border-slate-200 p-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">Estadísticas</h2>
          <div className="grid md:grid-cols-4 gap-6">
            <div>
              <div className="text-3xl font-black text-orange-600 mb-2">{allGuides.length}</div>
              <div className="text-slate-600">Total de Guías</div>
            </div>
            <div>
              <div className="text-3xl font-black text-blue-600 mb-2">{mainItineraries.length}</div>
              <div className="text-slate-600">Guías Principales</div>
            </div>
            <div>
              <div className="text-3xl font-black text-purple-600 mb-2">{specialItineraries.length}</div>
              <div className="text-slate-600">Guías Especiales</div>
            </div>
            <div>
              <div className="text-3xl font-black text-green-600 mb-2">
                {mainItineraries.filter(g => g.featured).length}
              </div>
              <div className="text-slate-600">Destacadas</div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
