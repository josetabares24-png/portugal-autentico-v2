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
      social: '473 personas lo compraron en diciembre',
      color: 'orange'
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
      social: 'Popular para parejas y foodies',
      color: 'orange'
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
      social: 'La experiencia más completa',
      color: 'orange'
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
      social: 'Ideal para fotógrafos y creadores',
      color: 'purple'
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
      social: 'Pensado por padres para padres',
      color: 'blue'
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
      social: 'Perfecto para aniversarios y luna de miel',
      color: 'pink'
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
      social: 'La guía más completa disponible',
      color: 'yellow'
    }
  ];

  const categorias = [
    { id: 'todos', label: 'Todas las Guías', icon: '🗺️' },
    { id: 'clasicos', label: 'Clásicos', icon: '🏛️' },
    { id: 'tematicos', label: 'Temáticos', icon: '🎨' }
  ];

  const guiasFiltradas = filtro === 'todos' 
    ? guias 
    : guias.filter(g => g.categoria === filtro);

  return (
    <main className="min-h-screen bg-[#FFFDF7]">
      
      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          HERO - Diseño humano coherente con home
      ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="relative py-24 overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-black">
        {/* Background Image */}
        <div className="absolute inset-0 z-0 opacity-30">
          <Image
            src="https://images.unsplash.com/photo-1555881400-74d7acaacd8b?q=80&w=2400"
            alt="Lisboa Itinerarios"
            fill
            className="object-cover"
            priority
            quality={85}
          />
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900/80 via-slate-800/70 to-orange-900/40"></div>
        </div>

        {/* Decorative organic shapes */}
        <div className="absolute top-20 right-10 w-64 h-64 bg-orange-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-orange-400/5 rounded-full blur-3xl"></div>

        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          
          {/* Badge artesanal */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#FF6B35] to-[#F7931E] text-white font-bold text-sm uppercase tracking-wider px-6 py-3 rounded-full mb-8 shadow-xl">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
              </svg>
              <span>Todos los Itinerarios</span>
            </div>

            {/* Headline Typography artesanal */}
            <h1 className="mb-8">
              <span className="block text-5xl sm:text-6xl lg:text-7xl font-black text-white leading-[1.1] mb-3" style={{ fontFamily: 'Georgia, serif' }}>
                Elige tu experiencia
              </span>
              <span className="block text-4xl sm:text-5xl lg:text-6xl font-black leading-[1.1]" style={{ 
                background: 'linear-gradient(135deg, #FF6B35 0%, #F7931E 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}>
                en Lisboa
              </span>
            </h1>

            {/* Subheadline con underline hand-drawn */}
            <div className="relative inline-block">
              <svg className="absolute -bottom-2 left-0 w-full h-3 opacity-50" viewBox="0 0 300 12" fill="none">
                <path d="M2 6 Q 75 10, 150 6 T 298 6" stroke="#FF6B35" strokeWidth="3" strokeLinecap="round" />
              </svg>
              
              <p className="text-xl sm:text-2xl text-gray-200 leading-relaxed px-6">
                Horarios exactos, coordenadas GPS y tips que solo un local conoce
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          FILTROS - Diseño orgánico discreto
      ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="py-12 bg-gradient-to-b from-orange-50/30 to-white sticky top-0 z-20 backdrop-blur-sm border-b border-orange-200/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          
          <div className="flex flex-wrap items-center justify-center gap-4">
            {categorias.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setFiltro(cat.id)}
                className={`
                  group relative inline-flex items-center gap-3 px-6 py-3 rounded-full font-semibold text-sm transition-all
                  ${filtro === cat.id 
                    ? 'bg-gradient-to-r from-[#FF6B35] to-[#F7931E] text-white shadow-lg scale-105' 
                    : 'bg-white text-gray-700 border-2 border-gray-200 hover:border-orange-300 hover:shadow-md'
                  }
                `}
              >
                <span className="text-lg">{cat.icon}</span>
                <span>{cat.label}</span>
                
                {/* Shine effect on active */}
                {filtro === cat.id && (
                  <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-700 rounded-full"></span>
                )}
              </button>
            ))}
          </div>

          {/* Counter badge artesanal */}
          <div className="text-center mt-6">
            <span className="inline-flex items-center gap-2 bg-orange-100 text-orange-700 px-4 py-2 rounded-full text-sm font-bold">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path d="M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z" />
              </svg>
              {guiasFiltradas.length} {guiasFiltradas.length === 1 ? 'guía disponible' : 'guías disponibles'}
            </span>
          </div>

        </div>
      </section>

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          GRID GUÍAS - Cards diseño artesanal
      ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {guiasFiltradas.map((guia, index) => (
              <div 
                key={guia.id}
                className="group bg-white rounded-3xl overflow-hidden border-3 border-gray-200 hover:border-orange-400 hover:shadow-2xl transition-all duration-300 relative"
                style={{ 
                  animationDelay: `${index * 100}ms`,
                  animation: 'fadeInUp 0.6s ease-out forwards',
                  opacity: 0
                }}
              >
                
                {/* Badge si existe - diseño orgánico */}
                {guia.badge && (
                  <div className={`absolute top-6 left-6 z-10 bg-gradient-to-r ${guia.badgeColor} text-white text-xs font-black uppercase px-4 py-2 rounded-full shadow-lg transform -rotate-2`}>
                    {guia.badge}
                  </div>
                )}

                {/* Image con overlay gradiente */}
                <div className="relative h-72 overflow-hidden">
                  <Image
                    src={guia.imagen}
                    alt={guia.titulo}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                  
                  {/* Stats floating badge artesanal */}
                  <div className="absolute bottom-4 right-4 bg-white/95 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg">
                    <div className="flex items-center gap-3 text-xs font-semibold text-gray-700">
                      <span className="flex items-center gap-1">
                        <svg className="w-4 h-4 text-orange-500" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                        </svg>
                        {guia.dias}d
                      </span>
                      <span className="flex items-center gap-1">
                        <svg className="w-4 h-4 text-orange-500" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                        </svg>
                        {guia.paradas}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8">
                  <h3 className="text-3xl font-black text-gray-900 mb-3" style={{ fontFamily: 'Georgia, serif' }}>
                    {guia.titulo}
                  </h3>

                  <p className="text-gray-600 mb-5 leading-relaxed">
                    {guia.descripcion}
                  </p>

                  {/* Beneficio box - diseño warm coherente */}
                  <div className="bg-gradient-to-br from-orange-50 to-orange-100/50 border-l-4 border-orange-400 p-4 rounded-r-2xl mb-5 shadow-sm">
                    <p className="text-sm text-gray-800 leading-snug">
                      {guia.beneficio}
                    </p>
                  </div>

                  {/* Social proof discreto con icon */}
                  <p className="text-xs text-gray-500 italic mb-6 flex items-center gap-2">
                    <svg className="w-4 h-4 text-orange-400" fill="currentColor" viewBox="0 0 20 20">
                      {guia.id.includes('fotografia') ? (
                        <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
                      ) : guia.id.includes('parejas') ? (
                        <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                      ) : guia.id.includes('familias') ? (
                        <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
                      ) : (
                        <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
                      )}
                    </svg>
                    {guia.social}
                  </p>

                  {/* Pricing artesanal */}
                  <div className="flex items-baseline gap-3 mb-6">
                    <span className="text-5xl font-black text-gray-900">€{guia.precio}</span>
                    <span className="text-sm text-gray-500 font-medium">una vez</span>
                  </div>

                  {/* CTA diseño orgánico coherente */}
                  <Link
                    href={`/guias/${guia.id}`}
                    className="block w-full bg-gradient-to-r from-[#FF6B35] to-[#F7931E] hover:from-[#F7931E] hover:to-[#FF6B35] text-white font-bold py-4 rounded-2xl transition-all text-center shadow-lg hover:shadow-xl group relative overflow-hidden"
                  >
                    <span className="relative z-10">Ver guía completa</span>
                    <span className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
                  </Link>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          PACK CTA - Diseño premium coherente
      ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="py-24 bg-gradient-to-br from-orange-500 via-[#FF6B35] to-orange-600 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-black/5 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl relative z-10">
          
          <div className="bg-white/10 backdrop-blur-xl rounded-[3rem] p-12 md:p-16 text-center border-2 border-white/20 shadow-2xl">
            
            <div className="inline-flex items-center gap-2 bg-black/90 text-orange-400 text-sm font-black uppercase tracking-wider px-6 py-3 rounded-full mb-8 shadow-xl border-2 border-orange-400/50">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              <span>Ahorra 60%</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-black text-white mb-6" style={{ fontFamily: 'Georgia, serif' }}>
              Pack Completo Lisboa
            </h2>

            <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto leading-relaxed">
              Las 7 guías + actualizaciones perpetuas
            </p>

            <div className="mb-10">
              <div className="text-xl text-white/70 line-through mb-2">€42.00</div>
              <div className="flex items-center justify-center gap-4 mb-2">
                <span className="text-7xl md:text-8xl font-black text-white" style={{ textShadow: '0 4px 20px rgba(0,0,0,0.3)' }}>€24.99</span>
                <div className="bg-black text-orange-400 px-5 py-2 rounded-2xl font-black text-xl shadow-2xl transform rotate-3">
                  -60%
                </div>
              </div>
            </div>

            <Link
              href="/pack-completo"
              className="inline-flex items-center gap-3 bg-black hover:bg-gray-900 text-orange-400 font-black px-12 py-6 rounded-[2rem] text-xl transition-all shadow-2xl hover:scale-105 border-2 border-orange-400/50"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M8 11V7a4 4 0 118 0m-4 8v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2z" />
              </svg>
              <span>Desbloquear Todo</span>
            </Link>

            <p className="text-sm text-white/70 mt-6">
              ✓ Ahorra €17 · ✓ Acceso perpetuo · ✓ Garantía 48h
            </p>

          </div>

        </div>
      </section>

      {/* CSS Animations */}
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
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
