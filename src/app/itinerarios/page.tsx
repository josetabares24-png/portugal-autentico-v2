import Link from 'next/link';

export default function ItinerariosPage() {
  return (
    <main className="min-h-screen bg-slate-50">
      <section className="bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 py-20 text-white">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <span className="inline-block bg-amber-500 text-black px-4 py-1 rounded-full text-sm font-bold mb-6">PACKS COMPLETOS</span>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Elige tu experiencia</h1>
          <p className="text-xl text-slate-300">Itinerario + Restaurantes + Spots de fotos + Mapas offline</p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-8">
            
            <div className="bg-white rounded-3xl shadow-lg overflow-hidden border border-slate-100 hover:shadow-xl transition-all">
              <div className="h-48 bg-cover bg-center" style={{backgroundImage: 'url(https://images.unsplash.com/photo-1548707309-dcebeab9ea9b?w=800)'}}></div>
              <div className="p-6">
                <span className="bg-blue-100 text-blue-700 text-xs font-bold px-3 py-1 rounded-full">1 DIA COMPLETO</span>
                <h2 className="text-2xl font-bold text-slate-900 mt-3 mb-2">Lisboa 1 Dia</h2>
                <p className="text-slate-500 mb-4">Perfecto para escalas o visitas express. Lo esencial bien organizado.</p>
                
                <ul className="space-y-2 mb-6 text-sm text-slate-600">
                  <li>• Itinerario hora a hora</li>
                  <li>• 10 restaurantes locales</li>
                  <li>• 8 spots de fotos</li>
                  <li>• Mapa offline</li>
                </ul>

                <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                  <div className="text-3xl font-bold text-slate-900">5.99 <span className="text-sm font-normal text-slate-500">EUR</span></div>
                  <Link href="/itinerarios/lisboa-1-dia-lo-esencial" className="bg-blue-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-blue-700">
                    Ver pack
                  </Link>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-3xl shadow-lg overflow-hidden border-2 border-amber-400 hover:shadow-xl transition-all relative">
              <div className="absolute top-0 left-0 right-0 bg-amber-500 text-white text-center py-2 text-sm font-bold z-10">
                MAS VENDIDO
              </div>
              <div className="h-48 bg-cover bg-center mt-9" style={{backgroundImage: 'url(https://images.unsplash.com/photo-1569959220744-ff553533f492?w=800)'}}></div>
              <div className="p-6">
                <span className="bg-amber-100 text-amber-700 text-xs font-bold px-3 py-1 rounded-full">2 DIAS COMPLETO</span>
                <h2 className="text-2xl font-bold text-slate-900 mt-3 mb-2">Lisboa 2 Dias</h2>
                <p className="text-slate-500 mb-4">El favorito. Fin de semana perfecto con Belem y vida nocturna.</p>
                
                <ul className="space-y-2 mb-6 text-sm text-slate-600">
                  <li>• Itinerario 2 dias completo</li>
                  <li>• 20 restaurantes + bares</li>
                  <li>• 15 spots de fotos + atardeceres</li>
                  <li>• Belem, LX Factory, Bairro Alto</li>
                </ul>

                <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                  <div className="text-3xl font-bold text-slate-900">8.99 <span className="text-sm font-normal text-slate-500">EUR</span></div>
                  <Link href="/itinerarios/lisboa-2-dias-completo" className="bg-amber-500 text-white px-6 py-3 rounded-xl font-semibold hover:bg-amber-600">
                    Ver pack
                  </Link>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-3xl shadow-lg overflow-hidden border border-slate-100 hover:shadow-xl transition-all">
              <div className="h-48 bg-cover bg-center" style={{backgroundImage: 'url(https://images.unsplash.com/photo-1536663815808-535e2280d2c2?w=800)'}}></div>
              <div className="p-6">
                <span className="bg-purple-100 text-purple-700 text-xs font-bold px-3 py-1 rounded-full">3 DIAS + SINTRA</span>
                <h2 className="text-2xl font-bold text-slate-900 mt-3 mb-2">Lisboa 3 Dias</h2>
                <p className="text-slate-500 mb-4">Experiencia completa. Lisboa + Sintra + Cascais como un local.</p>
                
                <ul className="space-y-2 mb-6 text-sm text-slate-600">
                  <li>• Todo del pack 2 dias</li>
                  <li>• Sintra completo (Pena, Regaleira)</li>
                  <li>• Cascais + Cabo da Roca</li>
                  <li>• Casas de fado autenticas</li>
                </ul>

                <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                  <div className="text-3xl font-bold text-slate-900">11.99 <span className="text-sm font-normal text-slate-500">EUR</span></div>
                  <Link href="/itinerarios/lisboa-3-dias-premium" className="bg-purple-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-purple-700">
                    Ver pack
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-16">
            <h2 className="text-2xl font-bold text-slate-900 mb-8 text-center">Guias especiales</h2>
            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 flex items-center gap-4">
                <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-rose-500 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-2xl font-bold">N</span>
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-slate-900">Lisboa con Ninos</h3>
                  <p className="text-slate-500 text-sm">Rutas adaptadas, parques, restaurantes kid-friendly</p>
                </div>
                <div className="text-right">
                  <div className="text-xl font-bold text-slate-900">5.99</div>
                  <Link href="/guias/lisboa-con-ninos" className="text-rose-600 text-sm font-semibold">Ver</Link>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 flex items-center gap-4">
                <div className="w-16 h-16 bg-gradient-to-br from-violet-500 to-purple-600 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-2xl font-bold">F</span>
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-slate-900">Pack Fotografo Pro</h3>
                  <p className="text-slate-500 text-sm">50+ spots, horarios de luz, settings</p>
                </div>
                <div className="text-right">
                  <div className="text-xl font-bold text-slate-900">7.99</div>
                  <Link href="/guias/pack-fotografo" className="text-purple-600 text-sm font-semibold">Ver</Link>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <Link href="/comparar" className="inline-flex items-center gap-2 text-blue-600 font-semibold">
              Comparar todos los packs en detalle
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
