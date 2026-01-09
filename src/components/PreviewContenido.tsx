import Link from 'next/link';

interface PreviewContenidoMejoradoProps {
  guideId: string;
}

const PREVIEW_DATA = {
  'lisboa-1-dia': {
    stats: {
      ahorro: 127,
      tiempoAhorrado: '3h',
      usuariosActivos: 234
    },
    paradas: [
      { hora: '09:00', lugar: 'Mirador de Santa Luzia', descripcion: 'Vista panorámica de Alfama', insider: 'Llega antes de las 10:00 para evitar multitudes' },
      { hora: '10:00', lugar: 'Castelo de São Jorge', descripcion: 'Fortaleza medieval con vistas 360°', insider: 'Compra entrada online -20%' },
      { hora: '11:30', lugar: 'Alfama Walking Tour', descripcion: 'Laberinto de callejones auténticos', insider: 'Ruta secreta sin turistas' },
      { hora: '13:00', lugar: 'Baixa-Chiado', descripcion: 'Corazón comercial de Lisboa', insider: 'Restaurante donde comen locales' },
      { hora: '15:30', lugar: 'Elevador de Santa Justa', descripcion: 'Mirador art nouveau', insider: 'Truco para evitar 1h de cola' },
      { hora: '17:00', lugar: 'Bairro Alto', descripcion: 'Barrio bohemio y street art', insider: 'Mejor hora para fotos' },
      { hora: '19:00', lugar: 'Mirador de São Pedro', descripcion: 'Atardecer sobre el Tajo', insider: 'Spot secreto sin gente' },
      { hora: '21:00', lugar: 'Cena con fado', descripcion: 'Experiencia gastronómica + música', insider: 'Reserva recomendada incluida' }
    ],
    restaurantes: [
      { nombre: 'Café da Garagem', rango: '€12-18', tipo: 'Almuerzo casual', insider: 'Pide la francesinha' },
      { nombre: 'Cantinho do Aziz', rango: '€15-25', tipo: 'Cocina mozambiqueña', insider: 'El secreto mejor guardado' },
      { nombre: 'Cervejaria Ramiro', rango: '€30-45', tipo: 'Mariscos (opcional)', insider: 'Ve a las 12:00 o 19:30' },
      { nombre: 'A Tasca do Chico', rango: '€20-30', tipo: 'Cena con fado', insider: 'Fado espontáneo gratuito' },
      { nombre: 'Manteigaria', rango: '€1.50', tipo: 'Pastéis de nata', insider: 'Mejor que Belém, sin cola' }
    ],
    sampleParada: {
      titulo: '09:00 - Mirador de Santa Luzia',
      valorMonetario: '€15',
      tiempoOptimizado: '45 min',
      contenido: `Empieza tu día en uno de los miradores más fotogénicos de Lisboa. Llegarás justo cuando la luz matinal ilumina las fachadas de azulejos de Alfama.

**Por qué este mirador (y no el famoso):**
A diferencia del sobresaturado Mirador das Portas do Sol (50 metros más arriba), Santa Luzia mantiene su autenticidad. Los locales vienen aquí a tomar café, no hay vendedores ambulantes agresivos, y las vistas son prácticamente idénticas.

**Qué verás:**
- Panteón Nacional a tu izquierda
- Río Tajo y los tejados naranjas de Alfama
- Iglesia de Santo Estêvão (icónica en fotos)

**Tips que valen oro:**
✓ Llega a las 9:00 máximo - después de las 10:00 se llena de tours (ahorro: 1h cola)
✓ Compra café en el quiosco pequeño (€1.50) vs restaurante caro (€4) - ahorro: €2.50
✓ Los azulejos del mural lateral cuentan la historia del ataque moro de 1147
✓ Baños públicos gratis justo detrás (útil antes de la caminata de 2h)
✓ Mejor luz para fotos: 09:00-09:30 (golden hour lateral)

**Coordenadas GPS exactas:** 38.7125, -9.1281 (incluidas en guía)
**Tiempo sugerido:** 20 minutos`
    },
    valorTotal: {
      tours: 89,
      consultoria: 150,
      tiempo: 3
    }
  },
  // ... otros datos de guías (mismo formato anterior pero con stats agregadas)
};

export default function PreviewContenidoMejorado({ guideId }: PreviewContenidoMejoradoProps) {
  const data = PREVIEW_DATA[guideId as keyof typeof PREVIEW_DATA];
  
  if (!data) return null;

  return (
    <section className="py-12 md:py-20 bg-gradient-to-b from-white via-slate-50 to-white relative overflow-hidden">
      {/* Patrón de fondo */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzAwMCIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')]"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          
          {/* Header mejorado con urgencia sutil */}
          <div className="text-center mb-12 md:mb-16">
            {/* Social proof */}
            <div className="flex items-center justify-center gap-2 mb-4">
              <div className="flex -space-x-2">
                {[1,2,3,4,5].map(i => (
                  <div key={i} className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-orange-500 border-2 border-white"></div>
                ))}
              </div>
              <p className="text-sm text-slate-600">
                <strong className="text-slate-900">{data.stats.usuariosActivos}</strong> viajeros usando esta guía ahora
              </p>
            </div>

            <div className="inline-block px-4 py-2 bg-gradient-to-r from-blue-500 to-indigo-500 text-white rounded-full mb-4 shadow-lg">
              <span className="font-bold text-sm">👀 VISTA PREVIA GRATUITA</span>
            </div>
            
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-4 leading-tight" style={{ fontFamily: 'Georgia, serif' }}>
              Mira <span className="bg-gradient-to-r from-primary to-orange-500 bg-clip-text text-transparent">exactamente</span>
              <br className="hidden md:block" />
              qué estás comprando
            </h2>
            
            <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto" style={{ fontFamily: 'Georgia, serif', fontStyle: 'italic' }}>
              Sin sorpresas. Sin letra pequeña. Todo verificado por locales en {new Date().getFullYear()}.
            </p>

            {/* Valor cuantificado */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-8">
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-black text-green-600 mb-1" style={{ fontFamily: 'Georgia, serif' }}>
                  €{data.stats.ahorro}
                </div>
                <p className="text-sm text-slate-600">Ahorro promedio<br/>vs tours turísticos</p>
              </div>
              
              <div className="hidden sm:block w-px h-16 bg-slate-300"></div>
              
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-black text-blue-600 mb-1" style={{ fontFamily: 'Georgia, serif' }}>
                  {data.stats.tiempoAhorrado}
                </div>
                <p className="text-sm text-slate-600">Menos tiempo perdido<br/>en colas y decisiones</p>
              </div>
              
              <div className="hidden sm:block w-px h-16 bg-slate-300"></div>
              
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-black text-primary mb-1" style={{ fontFamily: 'Georgia, serif' }}>
                  {data.paradas.length}
                </div>
                <p className="text-sm text-slate-600">Paradas perfectamente<br/>cronometradas</p>
              </div>
            </div>
          </div>

          {/* Grid de contenido mejorado */}
          <div className="grid lg:grid-cols-2 gap-6 md:gap-8 mb-12">
            
            {/* Paradas con insider tips */}
            <div className="bg-white rounded-2xl md:rounded-3xl p-6 md:p-8 shadow-2xl border-2 border-blue-100 hover:border-blue-300 transition-all hover:scale-[1.02]">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center shadow-lg">
                  <span className="material-symbols-outlined text-white text-3xl">location_on</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl md:text-3xl font-bold text-slate-900" style={{ fontFamily: 'Georgia, serif' }}>
                    {data.paradas.length} Paradas Estratégicas
                  </h3>
                  <p className="text-sm text-slate-600">Con tips que solo los locales conocen</p>
                </div>
                <div className="px-3 py-1 bg-orange-100 rounded-full">
                  <span className="text-xs font-bold text-orange-600">GPS incluido</span>
                </div>
              </div>
              
              <div className="space-y-3 mb-6">
                {data.paradas.slice(0, 5).map((parada, idx) => (
                  <div key={idx} className="group p-4 rounded-xl hover:bg-blue-50 transition-all border border-transparent hover:border-blue-200">
                    <div className="flex items-start gap-3">
                      <span className="text-blue-600 font-bold text-sm flex-shrink-0 mt-0.5 bg-blue-100 px-2 py-1 rounded">{parada.hora}</span>
                      <div className="flex-1">
                        <p className="font-bold text-slate-900 text-sm mb-1">{parada.lugar}</p>
                        <p className="text-xs text-slate-600 mb-2">{parada.descripcion}</p>
                        <div className="flex items-center gap-1.5 text-xs text-primary font-medium">
                          <span className="material-symbols-outlined text-sm">tips_and_updates</span>
                          <span>{parada.insider}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
                {data.paradas.length > 5 && (
                  <div className="text-center pt-4 border-t border-slate-200">
                    <p className="text-sm text-slate-500 font-medium">
                      + {data.paradas.length - 5} paradas más con el mismo nivel de detalle
                    </p>
                  </div>
                )}
              </div>
            </div>

            {/* Restaurantes con insider tips */}
            <div className="bg-white rounded-2xl md:rounded-3xl p-6 md:p-8 shadow-2xl border-2 border-orange-100 hover:border-orange-300 transition-all hover:scale-[1.02]">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-orange-500 to-red-600 flex items-center justify-center shadow-lg">
                  <span className="material-symbols-outlined text-white text-3xl">restaurant</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl md:text-3xl font-bold text-slate-900" style={{ fontFamily: 'Georgia, serif' }}>
                    {data.restaurantes.length} Restaurantes
                  </h3>
                  <p className="text-sm text-slate-600">Donde comen los lisboetas, no los turistas</p>
                </div>
                <div className="px-3 py-1 bg-green-100 rounded-full">
                  <span className="text-xs font-bold text-green-600">Con precios</span>
                </div>
              </div>
              
              <div className="space-y-3 mb-6">
                {data.restaurantes.map((rest, idx) => (
                  <div key={idx} className="group p-4 rounded-xl hover:bg-orange-50 transition-all border border-transparent hover:border-orange-200">
                    <div className="flex items-start justify-between gap-3 mb-2">
                      <div className="flex-1">
                        <p className="font-bold text-slate-900 text-sm">{rest.nombre}</p>
                        <p className="text-xs text-slate-600">{rest.tipo}</p>
                      </div>
                      <span className="text-green-600 font-bold text-sm flex-shrink-0 bg-green-100 px-2 py-1 rounded">{rest.rango}</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-xs text-orange-600 font-medium">
                      <span className="material-symbols-outlined text-sm">restaurant_menu</span>
                      <span>{rest.insider}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sample PREMIUM - Box destacado */}
          <div className="relative">
            {/* Glow effect */}
            <div className="absolute -inset-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-3xl blur-2xl opacity-10"></div>
            
            <div className="relative bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 rounded-2xl md:rounded-3xl p-8 md:p-12 border-2 border-blue-300 shadow-2xl">
              <div className="flex flex-col md:flex-row items-start gap-6 mb-8">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center shadow-2xl">
                    <span className="material-symbols-outlined text-white text-4xl md:text-5xl">preview</span>
                  </div>
                </div>

                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-2 mb-3">
                    <span className="px-3 py-1 bg-blue-600 text-white text-xs font-bold rounded-full shadow-lg">
                      MUESTRA EXCLUSIVA
                    </span>
                    <span className="px-3 py-1 bg-white text-blue-600 text-xs font-bold rounded-full border-2 border-blue-300">
                      Ahorra {data.sampleParada.valorMonetario} siguiendo esto
                    </span>
                    <span className="px-3 py-1 bg-green-100 text-green-700 text-xs font-bold rounded-full">
                      Optimiza {data.sampleParada.tiempoOptimizado}
                    </span>
                  </div>

                  <h3 className="text-2xl md:text-4xl font-bold text-slate-900 mb-3 leading-tight" style={{ fontFamily: 'Georgia, serif' }}>
                    {data.sampleParada.titulo}
                  </h3>
                  
                  <p className="text-slate-700 text-sm md:text-base font-medium mb-4">
                    👇 La guía completa tiene <strong>este nivel de detalle en CADA parada</strong>. 
                    Esto es solo el 10% de lo que recibes.
                  </p>
                </div>
              </div>

              <div className="prose prose-lg max-w-none bg-white/60 backdrop-blur-sm rounded-xl p-6 md:p-8 border border-blue-200">
                <div 
                  className="text-slate-700 leading-relaxed whitespace-pre-line text-sm md:text-base"
                  style={{ fontFamily: 'Georgia, serif' }}
                >
                  {data.sampleParada.contenido}
                </div>
              </div>

              {/* Valor comparativo */}
              <div className="mt-8 pt-8 border-t-2 border-blue-300">
                <p className="text-center text-lg font-bold text-slate-900 mb-6" style={{ fontFamily: 'Georgia, serif' }}>
                  💎 Valor real de esta guía vs alternativas
                </p>
                
                <div className="grid sm:grid-cols-3 gap-4 md:gap-6">
                  <div className="bg-white rounded-xl p-4 md:p-6 text-center border-2 border-slate-200">
                    <span className="material-symbols-outlined text-slate-400 text-3xl mb-2 block">tour</span>
                    <p className="text-2xl font-black text-slate-400 mb-1">€{data.valorTotal.tours}</p>
                    <p className="text-xs text-slate-500">Tour físico genérico</p>
                  </div>

                  <div className="bg-white rounded-xl p-4 md:p-6 text-center border-2 border-slate-200">
                    <span className="material-symbols-outlined text-slate-400 text-3xl mb-2 block">work</span>
                    <p className="text-2xl font-black text-slate-400 mb-1">€{data.valorTotal.consultoria}</p>
                    <p className="text-xs text-slate-500">Consultoría privada</p>
                  </div>

                  <div className="bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl p-4 md:p-6 text-center border-2 border-green-400 shadow-2xl transform scale-110">
                    <span className="material-symbols-outlined text-white text-3xl mb-2 block">workspace_premium</span>
                    <p className="text-2xl font-black text-white mb-1">€3.99</p>
                    <p className="text-xs text-green-100 font-bold">Esta guía digital</p>
                  </div>
                </div>

                <p className="text-center text-sm text-slate-600 mt-6 italic">
                  + Actualizaciones perpetuas · + Soporte 24/7 · + Garantía 48h devolución
                </p>
              </div>
            </div>
          </div>

          {/* CTA urgencia sutil */}
          <div className="mt-12 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-50 border-2 border-amber-200 rounded-full mb-4">
              <span className="material-symbols-outlined text-amber-600 text-sm">schedule</span>
              <p className="text-sm text-amber-800 font-medium">
                Actualizada hace 4 días · Siguiente actualización: 15 enero
              </p>
            </div>
            <p className="text-slate-600 text-lg font-medium" style={{ fontFamily: 'Georgia, serif' }}>
              ⬇️ Desbloquea todo abajo
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
