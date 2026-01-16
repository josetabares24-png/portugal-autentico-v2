'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

export default function ItinerariosPage() {
  const [filtro, setFiltro] = useState<string>('todos');

  const guias = [
    {
      id: 'lisboa-1-dia',
      titulo: 'Lisboa en 1 Día',
      descripcion: 'Lo esencial sin prisas ni turistadas',
      dias: 1,
      paradas: 8,
      precio: 3.99,
      imagen: 'https://images.unsplash.com/photo-1585208798174-6cedd86e019a?q=80&w=800',
      categoria: 'clasicos',
      badge: '🔥 Más Popular',
      badgeColor: 'from-[#FF6B35] to-[#F7931E]',
      beneficio: 'Ahorra 3+ horas de investigación y evita las 2 trampas turísticas más caras',
      social: '473 personas lo compraron en diciembre'
    },
    {
      id: 'lisboa-2-dias',
      titulo: 'Lisboa en 2 Días',
      descripcion: 'Con tiempo para respirar la ciudad',
      dias: 2,
      paradas: 15,
      precio: 5.99,
      imagen: 'https://images.unsplash.com/photo-1588668214407-6ea9a6d8c272?q=80&w=800',
      categoria: 'clasicos',
      beneficio: 'Incluye 3 restaurantes verificados en 2025 (sin trampas turísticas)',
      social: 'Popular para parejas y foodies'
    },
    {
      id: 'lisboa-3-dias',
      titulo: 'Lisboa en 3 Días',
      descripcion: 'Inmersión completa como residente',
      dias: 3,
      paradas: 20,
      precio: 7.99,
      imagen: 'https://images.unsplash.com/photo-1555881400-74d7acaacd8b?q=80&w=800',
      categoria: 'clasicos',
      beneficio: 'Incluye Sintra con timing para evitar las multitudes de turistas',
      social: 'La experiencia más completa'
    },
    {
      id: 'lisboa-fotografia',
      titulo: 'Lisboa Fotográfica',
      descripcion: 'Los mejores spots para fotografía',
      dias: 1,
      paradas: 12,
      precio: 4.99,
      imagen: 'https://images.unsplash.com/photo-1626447857058-2ef5a6739b85?q=80&w=800',
      categoria: 'tematicos',
      badge: '📸 Especial',
      badgeColor: 'from-purple-500 to-purple-600',
      beneficio: 'Golden hour timing + ángulos secretos que los instagramers no conocen',
      social: 'Ideal para fotógrafos y creadores'
    },
    {
      id: 'lisboa-familias',
      titulo: 'Lisboa con Niños',
      descripcion: 'Aventura familiar sin aburrimiento',
      dias: 2,
      paradas: 10,
      precio: 5.99,
      imagen: 'https://images.unsplash.com/photo-1511895426328-dc8714191300?q=80&w=800',
      categoria: 'tematicos',
      beneficio: 'Actividades kid-friendly + restaurantes con espacios para niños',
      social: 'Pensado por padres para padres'
    },
    {
      id: 'lisboa-parejas',
      titulo: 'Lisboa Romántica',
      descripcion: 'Para parejas que buscan momentos especiales',
      dias: 2,
      paradas: 12,
      precio: 6.99,
      imagen: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=800',
      categoria: 'tematicos',
      beneficio: 'Atardeceres privados + restaurantes íntimos verificados',
      social: 'Perfecto para aniversarios y luna de miel'
    },
    {
      id: 'lisboa-semana',
      titulo: 'Lisboa Una Semana',
      descripcion: 'Inmersión total viviendo como local',
      dias: 7,
      paradas: 35,
      precio: 12.99,
      imagen: 'https://images.unsplash.com/photo-1590242896367-b0ab632f0b67?q=80&w=800',
      categoria: 'clasicos',
      badge: '⭐ Premium',
      badgeColor: 'from-yellow-500 to-yellow-600',
      beneficio: 'Incluye excursiones a Sintra, Cascais, Óbidos + vida nocturna local',
      social: 'La guía más completa disponible'
    }
  ];

  const categorias = [
    { id: 'todos', label: 'Todas', icon: '🗺️', count: guias.length },
    { id: 'clasicos', label: 'Clásicos', icon: '🏛️', count: guias.filter(g => g.categoria === 'clasicos').length },
    { id: 'tematicos', label: 'Temáticos', icon: '🎨', count: guias.filter(g => g.categoria === 'tematicos').length }
  ];

  const guiasFiltradas = filtro === 'todos' 
    ? guias 
    : guias.filter(g => g.categoria === filtro);

  return (
    <main className="min-h-screen bg-[#FFFDF7]">
      
      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          HERO FULLSCREEN - Impactante
      ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="relative min-h-[75vh] flex items-center justify-center overflow-hidden">
        {/* Background Image fullscreen */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1588668214407-6ea9a6d8c272?q=80&w=2400"
            alt="Lisboa"
            fill
            className="object-cover"
            priority
            quality={95}
          />
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900/85 via-slate-800/75 to-orange-900/50"></div>
        </div>

        {/* Decorative organic shapes */}
        <div className="absolute top-20 right-10 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-[600px] h-[600px] bg-orange-400/5 rounded-full blur-3xl"></div>

        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl text-center">
          
          {/* Badge artesanal con shine */}
          <div className="inline-flex items-center gap-3 bg-gradient-to-r from-[#FF6B35] to-[#F7931E] text-white font-black text-sm uppercase tracking-wider px-8 py-4 rounded-full mb-12 shadow-2xl relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-700"></div>
            <svg className="w-6 h-6 relative z-10" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
            </svg>
            <span className="relative z-10">Todas las Guías</span>
          </div>

          {/* Headline Typography artesanal */}
          <h1 className="mb-10">
            <span className="block text-6xl sm:text-7xl lg:text-8xl font-black text-white leading-[1.05] mb-4" style={{ fontFamily: 'Georgia, serif', textShadow: '0 4px 30px rgba(0,0,0,0.5)' }}>
              Elige tu experiencia
            </span>
            <span className="block text-5xl sm:text-6xl lg:text-7xl font-black leading-[1.05]" style={{ 
              background: 'linear-gradient(135deg, #FF6B35 0%, #F7931E 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              textShadow: 'none'
            }}>
              en Lisboa
            </span>
          </h1>

          {/* Subheadline con underline hand-drawn */}
          <div className="relative inline-block mb-16">
            <svg className="absolute -bottom-3 left-0 w-full h-4 opacity-60" viewBox="0 0 400 16" fill="none">
              <path d="M3 8 Q 100 14, 200 8 T 397 8" stroke="#FF6B35" strokeWidth="4" strokeLinecap="round" />
            </svg>
            
            <p className="text-2xl sm:text-3xl text-gray-200 leading-relaxed px-8 font-medium" style={{ textShadow: '0 2px 10px rgba(0,0,0,0.3)' }}>
              Horarios exactos, coordenadas GPS y tips que solo un local conoce
            </p>
          </div>

          {/* Stats badges artesanales */}
          <div className="flex flex-wrap items-center justify-center gap-6">
            <div className="flex items-center gap-3 bg-white/10 backdrop-blur-md px-6 py-4 rounded-full border-2 border-white/20 shadow-xl">
              <svg className="w-6 h-6 text-orange-400" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              <span className="font-bold text-white text-lg">500+ viajeros</span>
            </div>
            <div className="flex items-center gap-3 bg-white/10 backdrop-blur-md px-6 py-4 rounded-full border-2 border-white/20 shadow-xl">
              <svg className="w-6 h-6 text-orange-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
              </svg>
              <span className="font-bold text-white text-lg">{guias.length} guías</span>
            </div>
          </div>

        </div>
      </section>

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          FILTROS MEJORADOS - Más visuales
      ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="py-16 bg-gradient-to-b from-white to-orange-50/30 sticky top-0 z-30 backdrop-blur-lg border-b-2 border-orange-100 shadow-lg">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          
          <div className="flex flex-wrap items-center justify-center gap-5">
            {categorias.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setFiltro(cat.id)}
                className={`
                  group relative inline-flex items-center gap-4 px-8 py-5 rounded-2xl font-bold text-base transition-all transform
                  ${filtro === cat.id 
                    ? 'bg-gradient-to-r from-[#FF6B35] to-[#F7931E] text-white shadow-2xl scale-110 -translate-y-1' 
                    : 'bg-white text-gray-700 border-3 border-gray-200 hover:border-orange-300 hover:shadow-xl hover:scale-105'
                  }
                `}
              >
                <span className="text-2xl">{cat.icon}</span>
                <div className="text-left">
                  <div className="font-black">{cat.label}</div>
                  <div className={`text-xs font-semibold ${filtro === cat.id ? 'text-white/80' : 'text-gray-500'}`}>
                    {cat.count} {cat.count === 1 ? 'guía' : 'guías'}
                  </div>
                </div>
                
                {/* Shine effect */}
                {filtro === cat.id && (
                  <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/25 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-700 rounded-2xl"></span>
                )}
              </button>
            ))}
          </div>

        </div>
      </section>

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          GRID GUÍAS - Cards visuales impactantes
      ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="py-28 bg-gradient-to-b from-orange-50/30 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {guiasFiltradas.map((guia, index) => (
              <div 
                key={guia.id}
                className="group bg-white rounded-[2rem] overflow-hidden border-3 border-gray-200 hover:border-orange-400 hover:shadow-[0_20px_60px_rgba(255,107,53,0.3)] transition-all duration-500 transform hover:-translate-y-3"
                style={{ 
                  animationDelay: `${index * 100}ms`,
                  animation: 'fadeInUp 0.7s ease-out forwards',
                  opacity: 0
                }}
              >
                
                {/* Image con overlay gradiente fuerte */}
                <div className="relative h-80 overflow-hidden">
                  <Image
                    src={guia.imagen}
                    alt={guia.titulo}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                    quality={90}
                  />
                  {/* Gradiente overlay más fuerte para legibilidad */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                  
                  {/* Badge floating si existe */}
                  {guia.badge && (
                    <div className={`absolute top-6 left-6 bg-gradient-to-r ${guia.badgeColor} text-white text-sm font-black uppercase px-5 py-3 rounded-full shadow-2xl transform -rotate-2 border-2 border-white/30`}>
                      {guia.badge}
                    </div>
                  )}

                  {/* Stats overlay bottom */}
                  <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-2 bg-white/95 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg">
                        <svg className="w-5 h-5 text-orange-500" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                        </svg>
                        <span className="text-sm font-black text-gray-900">{guia.dias} {guia.dias === 1 ? 'día' : 'días'}</span>
                      </div>
                      <div className="flex items-center gap-2 bg-white/95 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg">
                        <svg className="w-5 h-5 text-orange-500" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                        </svg>
                        <span className="text-sm font-black text-gray-900">{guia.paradas} paradas</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Content con spacing generoso */}
                <div className="p-10">
                  <h3 className="text-3xl font-black text-gray-900 mb-4 leading-tight" style={{ fontFamily: 'Georgia, serif' }}>
                    {guia.titulo}
                  </h3>

                  <p className="text-gray-600 mb-6 leading-relaxed text-lg">
                    {guia.descripcion}
                  </p>

                  {/* Beneficio box más destacado */}
                  <div className="bg-gradient-to-br from-orange-50 to-orange-100/60 border-l-[6px] border-orange-400 p-5 rounded-r-2xl mb-6 shadow-md">
                    <p className="text-sm text-gray-800 leading-relaxed font-medium">
                      {guia.beneficio}
                    </p>
                  </div>

                  {/* Social proof más integrado */}
                  <div className="flex items-start gap-3 mb-8 p-4 bg-gray-50 rounded-xl border border-gray-200">
                    <svg className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
                    </svg>
                    <p className="text-sm text-gray-600 italic leading-relaxed">
                      {guia.social}
                    </p>
                  </div>

                  {/* Pricing con mejor balance */}
                  <div className="flex items-center justify-between mb-8 pb-6 border-b-2 border-gray-100">
                    <div className="flex items-baseline gap-3">
                      <span className="text-6xl font-black text-gray-900">€{guia.precio}</span>
                      <span className="text-lg text-gray-500 font-bold">una vez</span>
                    </div>
                  </div>

                  {/* CTA con más depth */}
                  <Link
                    href={`/guias/${guia.id}`}
                    className="block w-full bg-gradient-to-r from-[#FF6B35] to-[#F7931E] hover:from-[#F7931E] hover:to-[#FF6B35] text-white font-black py-5 rounded-2xl transition-all text-center text-lg shadow-xl hover:shadow-2xl group relative overflow-hidden transform hover:-translate-y-1"
                  >
                    <span className="relative z-10">Ver guía completa</span>
                    {/* Shine effect */}
                    <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-700"></span>
                  </Link>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          TRUST SIGNALS - Garantías y confianza
      ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <div className="grid md:grid-cols-3 gap-8 text-center">

            {/* Garantía de devolución */}
            <div className="p-8 rounded-3xl bg-gradient-to-br from-orange-50 to-orange-100/50 border-2 border-orange-200 hover:shadow-xl transition-shadow">
              <div className="w-20 h-20 rounded-full bg-gradient-to-r from-[#FF6B35] to-[#F7931E] flex items-center justify-center mx-auto mb-6 shadow-lg">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="font-black text-xl text-gray-900 mb-3" style={{ fontFamily: 'Georgia, serif' }}>
                Garantía 48h
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Si no te sirve, te devolvemos el dinero. Sin preguntas.
              </p>
            </div>

            {/* Actualizado 2025 */}
            <div className="p-8 rounded-3xl bg-gradient-to-br from-orange-50 to-orange-100/50 border-2 border-orange-200 hover:shadow-xl transition-shadow">
              <div className="w-20 h-20 rounded-full bg-gradient-to-r from-[#FF6B35] to-[#F7931E] flex items-center justify-center mx-auto mb-6 shadow-lg">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-black text-xl text-gray-900 mb-3" style={{ fontFamily: 'Georgia, serif' }}>
                Actualizado Enero 2025
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Precios verificados, horarios confirmados. Nada obsoleto.
              </p>
            </div>

            {/* Descarga instantánea */}
            <div className="p-8 rounded-3xl bg-gradient-to-br from-orange-50 to-orange-100/50 border-2 border-orange-200 hover:shadow-xl transition-shadow">
              <div className="w-20 h-20 rounded-full bg-gradient-to-r from-[#FF6B35] to-[#F7931E] flex items-center justify-center mx-auto mb-6 shadow-lg">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
              </div>
              <h3 className="font-black text-xl text-gray-900 mb-3" style={{ fontFamily: 'Georgia, serif' }}>
                Descarga Instantánea
              </h3>
              <p className="text-gray-600 leading-relaxed">
                PDF al email en menos de 2 minutos. Listo para usar.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          PACK CTA - Premium coherente
      ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="py-32 bg-gradient-to-br from-orange-500 via-[#FF6B35] to-orange-600 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-white/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-black/5 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl relative z-10">
          
          <div className="bg-white/10 backdrop-blur-xl rounded-[3rem] p-16 md:p-24 text-center border-2 border-white/20 shadow-2xl">
            
            <div className="inline-flex items-center gap-3 bg-black/90 text-orange-400 text-sm font-black uppercase tracking-wider px-8 py-4 rounded-full mb-10 shadow-2xl border-2 border-orange-400/50">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              <span>Ahorra 60% Hoy</span>
            </div>

            <h2 className="text-5xl md:text-6xl font-black text-white mb-8" style={{ fontFamily: 'Georgia, serif' }}>
              Pack Completo Lisboa
            </h2>

            <p className="text-2xl text-white/90 mb-12 max-w-2xl mx-auto leading-relaxed font-medium">
              Las 7 guías + actualizaciones perpetuas + soporte directo
            </p>

            <div className="mb-14">
              <div className="text-2xl text-white/70 line-through mb-3">€42.00</div>
              <div className="flex items-center justify-center gap-6 mb-3">
                <span className="text-8xl md:text-9xl font-black text-white" style={{ textShadow: '0 6px 30px rgba(0,0,0,0.4)' }}>€24.99</span>
                <div className="bg-black text-orange-400 px-8 py-4 rounded-2xl font-black text-3xl shadow-2xl transform rotate-3 border-2 border-orange-400/50">
                  -60%
                </div>
              </div>
              <p className="text-white/80 font-bold text-xl">Ahorras €17 · Acceso perpetuo</p>
            </div>

            <Link
              href="/pack-completo"
              className="inline-flex items-center gap-4 bg-black hover:bg-gray-900 text-orange-400 font-black px-16 py-8 rounded-[2rem] text-2xl transition-all shadow-2xl hover:scale-105 border-3 border-orange-400/50 group relative overflow-hidden"
            >
              <svg className="w-8 h-8 relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M8 11V7a4 4 0 118 0m-4 8v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2z" />
              </svg>
              <span className="relative z-10">Desbloquear Todo</span>
              <span className="absolute inset-0 bg-gradient-to-r from-transparent via-orange-400/20 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-700 rounded-[2rem]"></span>
            </Link>

            <p className="text-base text-white/70 mt-8 font-semibold">
              ✓ Descarga inmediata · ✓ Garantía 48h · ✓ Sin renovaciones
            </p>

          </div>

        </div>
      </section>

      {/* CSS Animations */}
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>

    </main>
  );
}
