'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

export default function ItinerariosPage() {
  const [filtro, setFiltro] = useState<string>('todos');

  const guias = [
    {
      id: 'lisboa-1-dia-lo-esencial',
      titulo: 'Lisboa 1 Día',
      descripcion: 'Lo esencial de Lisboa en un día',
      dias: 1,
      paradas: 8,
      imagen: 'https://images.unsplash.com/photo-1585208798174-6cedd86e019a?q=80&w=800',
      categoria: 'clasicos',
      badge: 'Más Popular'
    },
    {
      id: 'lisboa-2-dias-completo',
      titulo: 'Lisboa 2 Días',
      descripcion: 'Experiencia completa con tiempo',
      dias: 2,
      paradas: 15,
      imagen: 'https://images.unsplash.com/photo-1588668214407-6ea9a6d8c272?q=80&w=800',
      categoria: 'clasicos'
    },
    {
      id: 'lisboa-3-dias-premium',
      titulo: 'Lisboa 3 Días + Sintra',
      descripcion: 'Incluye excursión a Sintra y Cascais',
      dias: 3,
      paradas: 20,
      imagen: 'https://images.unsplash.com/photo-1555881400-74d7acaacd8b?q=80&w=800',
      categoria: 'clasicos'
    },
    {
      id: 'lisboa-fotografia',
      titulo: 'Lisboa Fotográfica',
      descripcion: 'Mejores spots para fotografía',
      dias: 1,
      paradas: 12,
      imagen: 'https://images.unsplash.com/photo-1626447857058-2ef5a6739b85?q=80&w=800',
      categoria: 'tematicos'
    },
    {
      id: 'lisboa-familiar',
      titulo: 'Lisboa con Niños',
      descripcion: 'Actividades para toda la familia',
      dias: 2,
      paradas: 10,
      imagen: 'https://images.unsplash.com/photo-1511895426328-dc8714191300?q=80&w=800',
      categoria: 'tematicos'
    },
    {
      id: 'lisboa-romantica',
      titulo: 'Lisboa Romántica',
      descripcion: 'Para parejas y luna de miel',
      dias: 2,
      paradas: 12,
      imagen: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=800',
      categoria: 'tematicos'
    },
    {
      id: 'lisboa-full-week',
      titulo: 'Lisboa 1 Semana Completa',
      descripcion: 'Guía completa + excursiones',
      dias: 7,
      paradas: 35,
      imagen: 'https://images.unsplash.com/photo-1590242896367-b0ab632f0b67?q=80&w=800',
      categoria: 'clasicos',
      badge: 'Completa'
    }
  ];

  const categorias = [
    { id: 'todos', label: 'Todas' },
    { id: 'clasicos', label: 'Clásicos' },
    { id: 'tematicos', label: 'Temáticos' }
  ];

  const guiasFiltradas = filtro === 'todos'
    ? guias
    : guias.filter(g => g.categoria === filtro);

  return (
    <main className="min-h-screen bg-white">

      {/* Header simple */}
      <section className="pt-24 pb-12 bg-slate-50">
        <div className="container mx-auto px-4 max-w-6xl text-center">
          <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-3">
            Guías de Lisboa
          </h1>
          <p className="text-slate-600 text-lg">
            Itinerarios detallados con horarios y GPS
          </p>
        </div>
      </section>

      {/* Filtros simples */}
      <section className="border-b bg-white sticky top-16 z-30">
        <div className="container mx-auto px-4 max-w-6xl py-4">
          <div className="flex gap-3 justify-center flex-wrap">
            {categorias.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setFiltro(cat.id)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-colors ${
                  filtro === cat.id
                    ? 'bg-orange-500 text-white'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Grid de guías - limpio */}
      <section className="py-12">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {guiasFiltradas.map((guia) => (
              <Link
                key={guia.id}
                href={`/itinerarios/${guia.id}`}
                className="group bg-white rounded-xl border border-slate-200 overflow-hidden hover:shadow-lg hover:border-orange-300 transition-all"
              >
                {/* Imagen */}
                <div className="relative h-48 overflow-hidden bg-slate-100">
                  <Image
                    src={guia.imagen}
                    alt={guia.titulo}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  {guia.badge && (
                    <div className="absolute top-3 right-3 bg-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                      {guia.badge}
                    </div>
                  )}
                </div>

                {/* Contenido */}
                <div className="p-5">
                  <h3 className="text-xl font-bold text-slate-900 mb-2">
                    {guia.titulo}
                  </h3>
                  <p className="text-sm text-slate-600 mb-4">
                    {guia.descripcion}
                  </p>

                  {/* Meta info */}
                  <div className="flex items-center gap-4 mb-4 text-xs text-slate-500">
                    <span className="flex items-center gap-1">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                      </svg>
                      {guia.dias} {guia.dias === 1 ? 'día' : 'días'}
                    </span>
                    <span className="flex items-center gap-1">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                      </svg>
                      {guia.paradas} paradas
                    </span>
                  </div>

                  {/* CTA */}
                  <div className="flex items-center justify-between pt-4 border-t">
                    <span className="text-sm font-semibold text-green-600 bg-green-50 px-3 py-1 rounded-full">
                      100% Gratuita
                    </span>
                    <span className="text-orange-500 font-medium text-sm group-hover:text-orange-600 flex items-center gap-1">
                      Ver guía
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Beneficios - simple */}
      <section className="py-12 bg-slate-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="grid sm:grid-cols-3 gap-6 text-center">
            <div className="p-6">
              <div className="w-12 h-12 rounded-full bg-orange-100 flex items-center justify-center mx-auto mb-3">
                <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-bold text-slate-900 mb-1">100% Gratuito</h3>
              <p className="text-sm text-slate-600">Sin registro ni pagos</p>
            </div>

            <div className="p-6">
              <div className="w-12 h-12 rounded-full bg-orange-100 flex items-center justify-center mx-auto mb-3">
                <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-bold text-slate-900 mb-1">Actualizado 2025</h3>
              <p className="text-sm text-slate-600">Precios y horarios verificados</p>
            </div>

            <div className="p-6">
              <div className="w-12 h-12 rounded-full bg-orange-100 flex items-center justify-center mx-auto mb-3">
                <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                </svg>
              </div>
              <h3 className="font-bold text-slate-900 mb-1">Mapas Interactivos</h3>
              <p className="text-sm text-slate-600">Con GPS y coordenadas exactas</p>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}
