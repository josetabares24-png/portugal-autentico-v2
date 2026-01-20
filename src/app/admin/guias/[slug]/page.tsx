import { redirect, notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { isAdmin } from '@/lib/auth-utils';
import { type TimelineStop } from '@/data/itineraries';
import { getGuideEditData } from '@/lib/guide-store';
import { GuideAdminActions } from './GuideAdminActions';
import {
  lisboa1DiaTimeline,
  lisboa2DiasDia1Timeline,
  lisboa2DiasDia2Timeline,
  lisboa3DiasSintraTimeline,
  lisboaRomanticaTimeline,
  lisboaFamiliarTimeline,
  lisboaFotografiaTimeline,
  lisboaFullWeekTimeline,
} from '@/data/itineraries';

export const metadata = {
  title: 'Editar Guía | Admin',
  description: 'Editar guía de itinerario',
};

// Mapeo de slugs a timelines
const timelineMap: Record<string, TimelineStop[]> = {
  'lisboa-1-dia-lo-esencial': lisboa1DiaTimeline,
  'lisboa-1-dia': lisboa1DiaTimeline,
  'lisboa-2-dias-completo': [...lisboa2DiasDia1Timeline, ...lisboa2DiasDia2Timeline],
  'lisboa-2-dias': [...lisboa2DiasDia1Timeline, ...lisboa2DiasDia2Timeline],
  'lisboa-3-dias-premium': lisboa3DiasSintraTimeline,
  'lisboa-3-dias': lisboa3DiasSintraTimeline,
  'lisboa-romantica': lisboaRomanticaTimeline,
  'lisboa-familiar': lisboaFamiliarTimeline,
  'lisboa-fotografia': lisboaFotografiaTimeline,
  'lisboa-full-week': lisboaFullWeekTimeline,
};

export default async function AdminGuiaEditPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const admin = await isAdmin();
  if (!admin) {
    redirect('/');
  }

  const { slug } = await params;

  const guide = await getGuideEditData(slug);

  if (!guide) {
    notFound();
  }

  // Obtener timeline si existe
  const timeline = timelineMap[slug] || [];

  return (
    <main className="min-h-screen bg-[#FFFDF7] pt-24 pb-16">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Header */}
        <div className="mb-8">
          <Link
            href="/admin/guias"
            className="inline-flex items-center gap-2 text-slate-600 hover:text-orange-600 mb-4 transition-colors"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Volver a Guías
          </Link>
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-4xl sm:text-5xl font-black text-slate-900 mb-2" style={{ fontFamily: 'Georgia, serif' }}>
                {guide.title}
              </h1>
              <p className="text-xl text-slate-600">{guide.description}</p>
            </div>
            <div className="flex gap-4">
              <Link
                href={`/admin/guias/${slug}/edit`}
                className="inline-flex items-center gap-2 bg-gradient-to-r from-[#FF6B35] to-[#F7931E] text-white font-bold px-6 py-3 rounded-xl hover:scale-105 transition-all shadow-lg"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                </svg>
                Editar Guía
              </Link>
              <Link
                href={`/itinerarios/${guide.slug}`}
                target="_blank"
                className="inline-flex items-center gap-2 bg-white border-2 border-slate-300 text-slate-700 font-semibold px-6 py-3 rounded-xl hover:border-orange-500 transition-all"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
                Ver Pública
              </Link>
            </div>
          </div>
        </div>

        {/* Información Básica */}
        <div className="bg-white rounded-2xl border-2 border-slate-200 p-8 mb-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">Información Básica</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">Slug</label>
              <div className="bg-slate-50 rounded-lg p-3 text-slate-900 font-mono text-sm">{guide.slug}</div>
            </div>
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">Título</label>
              <div className="bg-slate-50 rounded-lg p-3 text-slate-900">{guide.title}</div>
            </div>
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">Duración</label>
              <div className="bg-slate-50 rounded-lg p-3 text-slate-900">{guide.duration}</div>
            </div>
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">Precio</label>
              <div className="bg-slate-50 rounded-lg p-3 text-slate-900 font-bold text-orange-600">€{guide.price.toFixed(2)}</div>
            </div>
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">Imagen</label>
              <div className="bg-slate-50 rounded-lg p-3 text-slate-900 font-mono text-sm break-all">{guide.image}</div>
            </div>
            <div className="md:col-span-2">
              <label className="block text-sm font-semibold text-slate-700 mb-2">Descripción</label>
              <div className="bg-slate-50 rounded-lg p-3 text-slate-900">{guide.description}</div>
            </div>
            <div className="md:col-span-2">
              <label className="block text-sm font-semibold text-slate-700 mb-2">Características</label>
              <div className="bg-slate-50 rounded-lg p-4">
                <ul className="list-disc list-inside space-y-2">
                  {guide.features.map((feature, idx) => (
                    <li key={idx} className="text-slate-900">{feature}</li>
                  ))}
                </ul>
              </div>
            </div>
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">Destacada</label>
              <div className="bg-slate-50 rounded-lg p-3">
                {guide.featured ? (
                  <span className="inline-flex items-center gap-2 text-green-600 font-semibold">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Sí
                  </span>
                ) : (
                  <span className="text-slate-500">No</span>
                )}
              </div>
            </div>
            {guide.badgeText && (
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">Badge</label>
                <div className="bg-slate-50 rounded-lg p-3">
                  <span className={`inline-block px-3 py-1 rounded text-sm font-bold text-white ${guide.badgeColor || 'bg-orange-500'}`}>
                    {guide.badgeText}
                  </span>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Timeline */}
        {timeline.length > 0 && (
          <div className="bg-white rounded-2xl border-2 border-slate-200 p-8 mb-8">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-slate-900">
                Timeline ({timeline.length} paradas)
              </h2>
              <Link
                href={`/admin/guias/${slug}/edit#timeline`}
                className="inline-flex items-center gap-2 bg-gradient-to-r from-[#FF6B35] to-[#F7931E] text-white font-bold px-6 py-3 rounded-xl hover:scale-105 transition-all shadow-lg"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                </svg>
                Editar Timeline
              </Link>
            </div>
            <div className="space-y-6">
              {timeline.map((stop, idx) => (
                <div key={idx} className="border-l-4 border-orange-500 pl-6 pb-6">
                  <div className="flex items-start gap-4 mb-3">
                    <div className="flex-shrink-0 w-20 text-right">
                      <div className="text-sm font-bold text-orange-600">{stop.time}</div>
                      <div className={`text-xs px-2 py-1 rounded mt-1 inline-block ${
                        stop.type === 'food' ? 'bg-green-100 text-green-700' : 'bg-blue-100 text-blue-700'
                      }`}>
                        {stop.type === 'food' ? '🍽️ Comida' : '📍 Visita'}
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-slate-900 mb-2">{stop.title}</h3>
                      <p className="text-slate-700 mb-3 leading-relaxed">{stop.description}</p>
                      <div className="bg-orange-50 border-l-4 border-orange-400 p-3 rounded mb-3">
                        <p className="text-sm text-slate-800">
                          <span className="font-semibold">💡 Tip:</span> {stop.tip}
                        </p>
                      </div>
                      {stop.coordinates && (
                        <div className="flex items-center gap-4 text-sm text-slate-600">
                          <span>📍 {stop.coordinates.lat}, {stop.coordinates.lng}</span>
                          {stop.googleMapsUrl && (
                            <a
                              href={stop.googleMapsUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-orange-600 hover:underline"
                            >
                              Ver en Google Maps
                            </a>
                          )}
                        </div>
                      )}
                      {stop.image && (
                        <div className="mt-3">
                          <Image
                            src={stop.image}
                            alt={stop.title}
                            width={512}
                            height={192}
                            loading="lazy"
                            decoding="async"
                            sizes="(max-width: 768px) 100vw, 512px"
                            className="rounded-lg w-full max-w-md h-48 object-cover"
                          />
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Acciones */}
        <div className="bg-white rounded-2xl border-2 border-slate-200 p-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">Acciones</h2>
          <div className="flex flex-wrap gap-4">
            <Link
              href={`/admin/guias/${slug}/edit`}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-[#FF6B35] to-[#F7931E] text-white font-bold px-6 py-3 rounded-xl hover:scale-105 transition-all shadow-lg"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
              </svg>
              Editar Guía
            </Link>
            <GuideAdminActions slug={slug} />
            <Link
              href={`/itinerarios/${guide.slug}`}
              target="_blank"
              className="inline-flex items-center gap-2 bg-white border-2 border-slate-300 text-slate-700 font-semibold px-6 py-3 rounded-xl hover:border-orange-500 transition-all"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
              Ver en Público
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
