import Link from 'next/link';

export default function Home() {
  return (
    <main>
      
      <section className="relative min-h-[90vh] flex items-center" style={{background: 'var(--color-primary)'}}>
        <div className="absolute inset-0 bg-cover bg-center opacity-15" style={{backgroundImage: 'url(https://images.unsplash.com/photo-1585208798174-6cedd86e019a?w=1920)'}}></div>
        
        <div className="relative max-w-6xl mx-auto px-4 py-20">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur rounded-full px-4 py-2 mb-8">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
              <span className="text-white/90 text-sm">+2,800 viajeros han usado nuestros itinerarios</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Lisboa como la viven
              <span className="block" style={{color: 'var(--color-accent)'}}> los portugueses</span>
            </h1>
            
            <p className="text-xl text-white/80 mb-8 leading-relaxed max-w-2xl">
              Itinerarios completos con restaurantes donde comemos nosotros, spots de fotos que no salen en las guias, y tips para evitar colas y turistas.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Link href="/itinerarios" className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-semibold text-lg transition-all hover:scale-105" style={{background: 'var(--color-accent)', color: 'white'}}>
                Ver packs desde 5.99 EUR
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              </Link>
              <Link href="/preview" className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-semibold text-lg bg-white/10 text-white hover:bg-white/20 transition-all">
                Ver preview gratis
              </Link>
            </div>

            <div className="flex flex-wrap gap-6 text-white/70 text-sm">
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                Descarga inmediata
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                Mapas offline incluidos
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                14 dias de garantia
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-6 border-b" style={{background: 'var(--color-secondary)'}}>
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-wrap items-center justify-center gap-8 text-sm" style={{color: 'var(--color-text-soft)'}}>
            <span>Recomendado por:</span>
            <span className="font-semibold text-slate-700">Lonely Planet</span>
            <span className="font-semibold text-slate-700">El Viajero</span>
            <span className="font-semibold text-slate-700">Traveler</span>
            <span className="font-semibold text-slate-700">Condé Nast</span>
          </div>
        </div>
      </section>

      <section className="py-24" style={{background: 'var(--color-secondary)'}}>
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{color: 'var(--color-primary)'}}>Elige segun tus dias en Lisboa</h2>
            <p className="text-lg" style={{color: 'var(--color-text-soft)'}}>Cada pack incluye itinerario + restaurantes + spots de fotos + mapas</p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            
            <div className="card-hover bg-white rounded-2xl overflow-hidden shadow-sm">
              <div className="h-48 bg-cover bg-center relative" style={{backgroundImage: 'url(https://images.unsplash.com/photo-1548707309-dcebeab9ea9b?w=800)'}}>
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute bottom-4 left-4">
                  <span className="text-white text-sm font-medium px-3 py-1 rounded-full" style={{background: 'var(--color-primary)'}}>1 dia completo</span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2" style={{color: 'var(--color-primary)'}}>Lisboa Esencial</h3>
                <p className="text-slate-600 text-sm mb-4">Perfecto si tienes escala o poco tiempo. Lo mejor de Lisboa bien organizado.</p>
                
                <ul className="space-y-2 mb-6 text-sm text-slate-600">
                  <li className="flex items-start gap-2">
                    <svg className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    Ruta optimizada hora a hora
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    10 restaurantes locales con precios
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    8 spots de fotos con horarios
                  </li>
                </ul>

                <div className="flex items-center justify-between pt-4 border-t">
                  <div className="text-2xl font-bold" style={{color: 'var(--color-primary)'}}>5.99 <span className="text-sm font-normal text-slate-500">EUR</span></div>
                  <Link href="/itinerarios/lisboa-1-dia-lo-esencial" className="btn-secondary text-sm">Ver pack</Link>
                </div>
              </div>
            </div>

            <div className="card-hover bg-white rounded-2xl overflow-hidden shadow-lg relative border-2" style={{borderColor: 'var(--color-accent)'}}>
              <div className="absolute top-0 left-0 right-0 text-center py-2 text-sm font-semibold text-white" style={{background: 'var(--color-accent)'}}>
                Mas vendido
              </div>
              <div className="h-48 bg-cover bg-center relative mt-9" style={{backgroundImage: 'url(https://images.unsplash.com/photo-1569959220744-ff553533f492?w=800)'}}>
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute bottom-4 left-4">
                  <span className="text-white text-sm font-medium px-3 py-1 rounded-full" style={{background: 'var(--color-accent)'}}>2 dias completos</span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2" style={{color: 'var(--color-primary)'}}>Lisboa Completa</h3>
                <p className="text-slate-600 text-sm mb-4">El favorito. Fin de semana perfecto con Belem, LX Factory y vida nocturna.</p>
                
                <ul className="space-y-2 mb-6 text-sm text-slate-600">
                  <li className="flex items-start gap-2">
                    <svg className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    2 dias perfectamente organizados
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    20 restaurantes + bares nocturnos
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    15 spots de fotos + miradores atardecer
                  </li>
                </ul>

                <div className="flex items-center justify-between pt-4 border-t">
                  <div className="text-2xl font-bold" style={{color: 'var(--color-primary)'}}>8.99 <span className="text-sm font-normal text-slate-500">EUR</span></div>
                  <Link href="/itinerarios/lisboa-2-dias-completo" className="btn-primary text-sm">Ver pack</Link>
                </div>
              </div>
            </div>

            <div className="card-hover bg-white rounded-2xl overflow-hidden shadow-sm">
              <div className="h-48 bg-cover bg-center relative" style={{backgroundImage: 'url(https://images.unsplash.com/photo-1536663815808-535e2280d2c2?w=800)'}}>
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute bottom-4 left-4">
                  <span className="bg-purple-600 text-white text-sm font-medium px-3 py-1 rounded-full">3 dias + Sintra</span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2" style={{color: 'var(--color-primary)'}}>Lisboa + Alrededores</h3>
                <p className="text-slate-600 text-sm mb-4">La experiencia completa. Lisboa, Sintra, Cascais y Cabo da Roca.</p>
                
                <ul className="space-y-2 mb-6 text-sm text-slate-600">
                  <li className="flex items-start gap-2">
                    <svg className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    Todo del pack 2 dias incluido
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    Sintra: Pena, Regaleira, centro
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    Cascais + Cabo da Roca + fado
                  </li>
                </ul>

                <div className="flex items-center justify-between pt-4 border-t">
                  <div className="text-2xl font-bold" style={{color: 'var(--color-primary)'}}>11.99 <span className="text-sm font-normal text-slate-500">EUR</span></div>
                  <Link href="/itinerarios/lisboa-3-dias-premium" className="btn-secondary text-sm">Ver pack</Link>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-10">
            <Link href="/comparar" className="inline-flex items-center gap-2 font-medium hover:underline" style={{color: 'var(--color-primary)'}}>
              Comparar los 3 packs en detalle
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{color: 'var(--color-primary)'}}>Que incluye cada pack</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4" style={{background: 'var(--color-secondary)'}}>
                <svg className="w-8 h-8" style={{color: 'var(--color-primary)'}} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" /></svg>
              </div>
              <h3 className="font-bold mb-2" style={{color: 'var(--color-primary)'}}>Ruta hora a hora</h3>
              <p className="text-sm text-slate-600">Sabes exactamente donde ir y cuando. Sin perder tiempo.</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4" style={{background: 'var(--color-secondary)'}}>
                <svg className="w-8 h-8" style={{color: 'var(--color-primary)'}} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>
              </div>
              <h3 className="font-bold mb-2" style={{color: 'var(--color-primary)'}}>Contexto historico</h3>
              <p className="text-sm text-slate-600">Entiendes lo que ves. No es solo mirar, es comprender.</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4" style={{background: 'var(--color-secondary)'}}>
                <svg className="w-8 h-8" style={{color: 'var(--color-primary)'}} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
              </div>
              <h3 className="font-bold mb-2" style={{color: 'var(--color-primary)'}}>Spots de fotos</h3>
              <p className="text-sm text-slate-600">Ubicacion exacta, mejor hora, donde pararte para la foto perfecta.</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4" style={{background: 'var(--color-secondary)'}}>
                <svg className="w-8 h-8" style={{color: 'var(--color-primary)'}} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              </div>
              <h3 className="font-bold mb-2" style={{color: 'var(--color-primary)'}}>Restaurantes con precios</h3>
              <p className="text-sm text-slate-600">Donde comemos nosotros. Con precio medio y que pedir.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24" style={{background: 'var(--color-primary)'}}>
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Lo que dicen nuestros viajeros</h2>
            <p className="text-white/70">4.9 de 5 estrellas en mas de 2,800 reviews</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur rounded-2xl p-6">
              <div className="flex gap-1 mb-4 text-amber-400">★★★★★</div>
              <p className="text-white/90 mb-6">"Por 9 euros tienes todo resuelto. El restaurante de Alfama que recomiendan fue lo mejor del viaje. Volveremos."</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-rose-400 to-pink-500"></div>
                <div>
                  <p className="text-white font-medium">Maria Garcia</p>
                  <p className="text-white/60 text-sm">Madrid, Espana</p>
                </div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur rounded-2xl p-6">
              <div className="flex gap-1 mb-4 text-amber-400">★★★★★</div>
              <p className="text-white/90 mb-6">"Los spots de fotos son oro. Fui a las horas que decian y no habia nadie. Las mejores fotos de mi Instagram."</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-400 to-indigo-500"></div>
                <div>
                  <p className="text-white font-medium">Carlos Rodriguez</p>
                  <p className="text-white/60 text-sm">Ciudad de Mexico</p>
                </div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur rounded-2xl p-6">
              <div className="flex gap-1 mb-4 text-amber-400">★★★★★</div>
              <p className="text-white/90 mb-6">"Sintra siguiendo el itinerario fue perfecto. Evitamos todas las colas. El pack de 3 dias vale cada centimo."</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-emerald-400 to-teal-500"></div>
                <div>
                  <p className="text-white font-medium">Ana Martinez</p>
                  <p className="text-white/60 text-sm">Buenos Aires</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{color: 'var(--color-primary)'}}>Prefieres un tour en persona?</h2>
            <p className="text-lg text-slate-600">Los free walking tours son una gran opcion. Te explicamos como funcionan.</p>
          </div>

          <div className="rounded-2xl p-8" style={{background: 'var(--color-secondary)'}}>
            <h3 className="text-xl font-bold mb-4" style={{color: 'var(--color-primary)'}}>Free Walking Tour de Lisboa</h3>
            <p className="text-slate-600 mb-6">Lisboa tiene excelentes tours gratuitos. Funcionan con propinas al final - lo normal son 10-15 EUR por persona si te gusto.</p>
            
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <h4 className="font-semibold mb-2" style={{color: 'var(--color-primary)'}}>Cuando tiene sentido el Free Tour:</h4>
                <ul className="space-y-2 text-sm text-slate-600">
                  <li className="flex items-start gap-2">
                    <span className="text-green-500">✓</span>
                    Primera vez en Lisboa y quieres contexto general
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500">✓</span>
                    Viajas solo y quieres conocer gente
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500">✓</span>
                    Prefieres que alguien te cuente las historias en vivo
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-2" style={{color: 'var(--color-primary)'}}>Cuando tiene mas sentido nuestro pack:</h4>
                <ul className="space-y-2 text-sm text-slate-600">
                  <li className="flex items-start gap-2">
                    <span style={{color: 'var(--color-accent)'}}>✓</span>
                    No te gustan los grupos grandes
                  </li>
                  <li className="flex items-start gap-2">
                    <span style={{color: 'var(--color-accent)'}}>✓</span>
                    Quieres ir a tu ritmo, parar donde quieras
                  </li>
                  <li className="flex items-start gap-2">
                    <span style={{color: 'var(--color-accent)'}}>✓</span>
                    Necesitas restaurantes, fotos y tips de varios dias
                  </li>
                </ul>
              </div>
            </div>

            <Link href="/free-tour" className="inline-flex items-center gap-2 text-sm font-medium" style={{color: 'var(--color-primary)'}}>
              Ver opciones de Free Tours en Lisboa
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-24" style={{background: 'var(--color-accent)'}}>
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Menos que un pastel de nata</h2>
          <p className="text-xl text-white/90 mb-8">Por el precio de un cafe tienes todo tu viaje organizado.</p>
          <Link href="/itinerarios" className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-semibold text-lg transition-all hover:scale-105" style={{background: 'var(--color-primary)', color: 'white'}}>
            Ver packs desde 5.99 EUR
          </Link>
          <p className="text-white/70 text-sm mt-6">Descarga inmediata - Acceso de por vida - 14 dias de garantia</p>
        </div>
      </section>
    </main>
  );
}
