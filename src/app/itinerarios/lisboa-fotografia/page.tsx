import Link from 'next/link';

export default function LisboaFotografiaPage() {
  return (
    <main>
      <section className="relative min-h-[60vh] flex items-center justify-center">
        <div className="absolute inset-0">
          <img src="https://images.unsplash.com/photo-1548707309-dcebeab9ea9b?w=1920&q=80" alt="Lisboa Fotografía" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900/60 to-slate-900/80"></div>
        </div>
        <div className="relative z-10 text-center px-4 py-16">
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full text-sm font-semibold mb-6 text-white bg-violet-500">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
            PARA FOTÓGRAFOS
          </div>
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-4 italic" style={{fontFamily: 'Georgia, serif'}}>
            Lisboa Fotografía
          </h1>
          <p className="text-base md:text-lg text-white/80 max-w-xl mx-auto">
            Los mejores spots, horas doradas y rincones secretos para fotos increíbles.
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-sm font-semibold tracking-wider uppercase mb-4 block" style={{color: 'var(--color-accent)'}}>Para amantes de la fotografía</span>
              <h2 className="text-3xl font-bold mb-6" style={{color: 'var(--color-primary)'}}>Captura Lisboa</h2>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-violet-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                  <div>
                    <span className="font-semibold" style={{color: 'var(--color-primary)'}}>30+ spots fotogénicos</span>
                    <p className="text-slate-600 text-sm">Miradores, calles con azulejos, tranvías, escaleras icónicas</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-violet-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" /></svg>
                  <div>
                    <span className="font-semibold" style={{color: 'var(--color-primary)'}}>Horarios de luz perfecta</span>
                    <p className="text-slate-600 text-sm">Golden hour, blue hour y mejores momentos para cada spot</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-violet-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                  <div>
                    <span className="font-semibold" style={{color: 'var(--color-primary)'}}>Ubicaciones exactas</span>
                    <p className="text-slate-600 text-sm">Coordenadas GPS y direcciones precisas de cada punto</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-violet-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                  <div>
                    <span className="font-semibold" style={{color: 'var(--color-primary)'}}>Evita multitudes</span>
                    <p className="text-slate-600 text-sm">Mejores horas para spots populares sin turistas</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-violet-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" /></svg>
                  <div>
                    <span className="font-semibold" style={{color: 'var(--color-primary)'}}>Rutas fotográficas</span>
                    <p className="text-slate-600 text-sm">Itinerarios optimizados para capturar lo mejor</p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-violet-50 to-purple-50 rounded-3xl p-8 border border-violet-100">
              <div className="text-center mb-6">
                <span className="text-sm text-slate-500">Pack fotografía</span>
                <div className="text-5xl font-bold mt-2" style={{color: 'var(--color-primary)'}}>9.99 <span className="text-xl font-normal text-slate-500">EUR</span></div>
              </div>
              <ul className="space-y-3 mb-8 text-sm">
                <li className="flex items-center gap-2 text-slate-600">
                  <svg className="w-4 h-4 text-violet-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  Guía de 30+ spots con fotos
                </li>
                <li className="flex items-center gap-2 text-slate-600">
                  <svg className="w-4 h-4 text-violet-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  Coordenadas GPS exactas
                </li>
                <li className="flex items-center gap-2 text-slate-600">
                  <svg className="w-4 h-4 text-violet-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  Mapas con rutas fotográficas
                </li>
                <li className="flex items-center gap-2 text-slate-600">
                  <svg className="w-4 h-4 text-violet-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  Tips de composición
                </li>
              </ul>
              <button className="w-full py-4 rounded-xl font-semibold text-white text-lg hover:scale-105 transition-all bg-violet-500 hover:bg-violet-600">
                Comprar ahora
              </button>
              <p className="text-center text-xs text-slate-400 mt-4">Pago seguro con Stripe</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8 text-center" style={{color: 'var(--color-primary)'}}>Spots destacados</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { titulo: "Miradouro da Senhora do Monte", desc: "La mejor panorámica de Lisboa al atardecer", tipo: "Golden Hour" },
              { titulo: "Rua da Bica de Duarte Belo", desc: "El icónico funicular amarillo", tipo: "Clásico" },
              { titulo: "Alfama al amanecer", desc: "Calles vacías y luz mágica", tipo: "Blue Hour" },
              { titulo: "Arco da Rua Augusta", desc: "El arco triunfal con la plaza", tipo: "Arquitectura" },
              { titulo: "Tranvía 28 en movimiento", desc: "Long exposure del tranvía histórico", tipo: "Movimiento" },
              { titulo: "LX Factory", desc: "Street art y ambiente industrial", tipo: "Urbano" }
            ].map((item, i) => (
              <div key={i} className="bg-white rounded-xl p-5 shadow-sm">
                <span className="text-xs font-semibold px-2 py-1 rounded-full bg-violet-100 text-violet-700">{item.tipo}</span>
                <h3 className="font-bold mt-3 mb-1" style={{color: 'var(--color-primary)'}}>{item.titulo}</h3>
                <p className="text-slate-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="bg-violet-50 rounded-2xl p-6 md:p-8 border border-violet-200">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-violet-100 flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-violet-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              </div>
              <div>
                <h3 className="font-bold text-lg mb-2 text-violet-900">Tip de fotógrafo</h3>
                <p className="text-violet-800">La luz en Lisboa es especial por su cercanía al mar. Los mejores momentos son 30 minutos después del amanecer y 1 hora antes del atardecer. En el pack incluimos los horarios exactos según la época del año.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold mb-4" style={{color: 'var(--color-primary)'}}>¿Quieres el itinerario completo?</h2>
          <p className="text-slate-600 mb-8">Combina este pack con nuestros itinerarios para una experiencia completa.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/itinerarios/lisboa-2-dias-completo" className="px-6 py-3 rounded-xl font-medium border-2 hover:scale-105 transition-all" style={{borderColor: 'var(--color-primary)', color: 'var(--color-primary)'}}>
              Lisboa 2 días
            </Link>
            <Link href="/itinerarios/lisboa-3-dias-sintra" className="px-6 py-3 rounded-xl font-medium border-2 hover:scale-105 transition-all" style={{borderColor: 'var(--color-primary)', color: 'var(--color-primary)'}}>
              Lisboa 3 días + Sintra
            </Link>
            <Link href="/itinerarios/lisboa-romantica" className="px-6 py-3 rounded-xl font-medium border-2 hover:scale-105 transition-all" style={{borderColor: 'var(--color-primary)', color: 'var(--color-primary)'}}>
              Lisboa Romántica
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
