import Link from 'next/link';
import FadeIn from '@/components/FadeIn';

export default function Home() {
  return (
    <main>
      <section className="relative min-h-screen flex items-center justify-center">
        <div className="absolute inset-0">
          <img src="https://images.unsplash.com/photo-1585208798174-6cedd86e019a?w=1920&q=80" alt="Lisboa" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900/70 via-slate-900/50 to-slate-900/80"></div>
        </div>
        <div className="relative z-10 max-w-5xl mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium mb-8 bg-white/10 text-white backdrop-blur-sm border border-white/20">
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
            +2,800 viajeros han usado nuestros itinerarios
          </div>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-tight">
            Lisboa como la viven
            <span className="block" style={{color: 'var(--color-accent)'}}>los portugueses</span>
          </h1>
          <p className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto mb-10 leading-relaxed">
            Itinerarios completos con restaurantes donde comemos nosotros, spots de fotos que no salen en las guias, y tips para evitar colas y turistas.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link href="/itinerarios" className="group inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-semibold text-lg transition-all hover:scale-105 hover:shadow-2xl text-white" style={{background: 'var(--color-accent)'}}>
              Ver packs desde 5.99 EUR
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </Link>
            <Link href="/preview" className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-semibold text-lg bg-white/10 text-white backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all">
              Ver preview gratis
            </Link>
          </div>
          <div className="flex flex-wrap justify-center gap-8 text-white/70 text-sm">
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
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <svg className="w-6 h-6 text-white/50" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" /></svg>
        </div>
      </section>

      <section className="py-6 bg-white border-b">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-12 text-slate-400 text-sm">
            <span>Recomendado por:</span>
            <div className="flex flex-wrap justify-center gap-8 font-semibold text-slate-600">
              <span>Lonely Planet</span>
              <span>El Viajero</span>
              <span>Traveler</span>
              <span>Conde Nast</span>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-sm font-semibold tracking-wider uppercase mb-4 block" style={{color: 'var(--color-accent)'}}>El problema</span>
              <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{color: 'var(--color-primary)'}}>Planificar un viaje es agotador</h2>
              <div className="space-y-4 text-slate-600">
                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-red-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                  <p>Horas buscando en blogs, TripAdvisor, Instagram...</p>
                </div>
                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-red-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                  <p>Restaurantes turisticos con precios inflados</p>
                </div>
                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-red-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                  <p>Colas eternas por no saber los horarios correctos</p>
                </div>
                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-red-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                  <p>Perderte lo mejor por no conocer los secretos locales</p>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-3xl p-8 shadow-xl">
              <span className="text-sm font-semibold tracking-wider uppercase mb-4 block" style={{color: 'var(--color-accent)'}}>La solucion</span>
              <h3 className="text-2xl md:text-3xl font-bold mb-6" style={{color: 'var(--color-primary)'}}>Todo organizado por locales</h3>
              <div className="space-y-4 text-slate-600">
                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  <p>Itinerario hora por hora listo para seguir</p>
                </div>
                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  <p>Restaurantes donde comemos nosotros (con precios)</p>
                </div>
                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  <p>Tips para evitar colas y turistas</p>
                </div>
                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  <p>Mapas offline con todos los puntos marcados</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-sm font-semibold tracking-wider uppercase mb-4 block" style={{color: 'var(--color-accent)'}}>Nuestros packs</span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{color: 'var(--color-primary)'}}>Elige segun tus dias en Lisboa</h2>
            <p className="text-slate-600 text-lg max-w-2xl mx-auto">Desde escapadas de un dia hasta aventuras de una semana. Todo incluido.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border border-slate-100">
              <div className="h-48 relative overflow-hidden">
                <img src="https://images.unsplash.com/photo-1548707309-dcebeab9ea9b?w=800" alt="Lisboa 1 dia" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4">
                  <span className="px-3 py-1 rounded-full text-sm font-medium bg-white/90 text-slate-800">1 dia</span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2" style={{color: 'var(--color-primary)'}}>Lisboa Esencial</h3>
                <p className="text-slate-600 text-sm mb-4">Lo mejor de Lisboa en un dia perfectamente organizado.</p>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold" style={{color: 'var(--color-primary)'}}>5.99 <span className="text-sm font-normal text-slate-400">EUR</span></span>
                  <Link href="/itinerarios/lisboa-1-dia-lo-esencial" className="text-sm font-semibold hover:underline" style={{color: 'var(--color-accent)'}}>Ver pack</Link>
                </div>
              </div>
            </div>
            <div className="group bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border-2 relative" style={{borderColor: 'var(--color-accent)'}}>
              <div className="absolute top-0 left-0 right-0 text-center py-2 text-sm font-bold text-white z-10" style={{background: 'var(--color-accent)'}}>MAS VENDIDO</div>
              <div className="h-48 relative overflow-hidden mt-8">
                <img src="https://images.unsplash.com/photo-1569959220744-ff553533f492?w=800" alt="Lisboa 2 dias" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4">
                  <span className="px-3 py-1 rounded-full text-sm font-medium text-white" style={{background: 'var(--color-accent)'}}>2 dias</span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2" style={{color: 'var(--color-primary)'}}>Lisboa Completa</h3>
                <p className="text-slate-600 text-sm mb-4">El favorito. Fin de semana perfecto con todo incluido.</p>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold" style={{color: 'var(--color-primary)'}}>8.99 <span className="text-sm font-normal text-slate-400">EUR</span></span>
                  <Link href="/itinerarios/lisboa-2-dias-completo" className="text-sm font-semibold hover:underline" style={{color: 'var(--color-accent)'}}>Ver pack</Link>
                </div>
              </div>
            </div>
            <div className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border border-slate-100">
              <div className="h-48 relative overflow-hidden">
                <img src="https://images.unsplash.com/photo-1536663815808-535e2280d2c2?w=800" alt="Lisboa 3 dias" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4">
                  <span className="px-3 py-1 rounded-full text-sm font-medium bg-purple-500 text-white">3 dias + Sintra</span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2" style={{color: 'var(--color-primary)'}}>Lisboa + Alrededores</h3>
                <p className="text-slate-600 text-sm mb-4">Lisboa, Sintra, Cascais y Cabo da Roca.</p>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold" style={{color: 'var(--color-primary)'}}>11.99 <span className="text-sm font-normal text-slate-400">EUR</span></span>
                  <Link href="/itinerarios/lisboa-3-dias-premium" className="text-sm font-semibold hover:underline" style={{color: 'var(--color-accent)'}}>Ver pack</Link>
                </div>
              </div>
            </div>
          </div>
          <div className="text-center mt-12">
            <Link href="/itinerarios" className="inline-flex items-center gap-2 text-lg font-semibold hover:underline" style={{color: 'var(--color-accent)'}}>
              Ver todos los packs
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20" style={{background: 'var(--color-secondary)'}}>
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-sm font-semibold tracking-wider uppercase mb-4 block" style={{color: 'var(--color-accent)'}}>Que incluye</span>
            <h2 className="text-3xl md:text-4xl font-bold" style={{color: 'var(--color-primary)'}}>Todo lo que necesitas para tu viaje</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 rounded-2xl bg-white shadow-sm flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8" style={{color: 'var(--color-accent)'}} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" /></svg>
              </div>
              <h3 className="font-bold text-lg mb-2" style={{color: 'var(--color-primary)'}}>Itinerario completo</h3>
              <p className="text-slate-600 text-sm">Hora por hora, que ver, donde ir, cuanto tiempo dedicar.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 rounded-2xl bg-white shadow-sm flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8" style={{color: 'var(--color-accent)'}} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>
              </div>
              <h3 className="font-bold text-lg mb-2" style={{color: 'var(--color-primary)'}}>Restaurantes locales</h3>
              <p className="text-slate-600 text-sm">Con precios, que pedir, y como evitar las trampas turisticas.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 rounded-2xl bg-white shadow-sm flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8" style={{color: 'var(--color-accent)'}} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
              </div>
              <h3 className="font-bold text-lg mb-2" style={{color: 'var(--color-primary)'}}>Spots de fotos</h3>
              <p className="text-slate-600 text-sm">Los mejores angulos, horarios de luz, lugares secretos.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 rounded-2xl bg-white shadow-sm flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8" style={{color: 'var(--color-accent)'}} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
              </div>
              <h3 className="font-bold text-lg mb-2" style={{color: 'var(--color-primary)'}}>Mapas offline</h3>
              <p className="text-slate-600 text-sm">Google Maps con todos los puntos marcados. Sin internet.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-sm font-semibold tracking-wider uppercase mb-4 block" style={{color: 'var(--color-accent)'}}>Testimonios</span>
            <h2 className="text-3xl md:text-4xl font-bold" style={{color: 'var(--color-primary)'}}>Lo que dicen nuestros viajeros</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-slate-50 rounded-2xl p-6">
              <div className="flex gap-1 mb-4">
                {[1,2,3,4,5].map(i => (<svg key={i} className="w-5 h-5 text-amber-400" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>))}
              </div>
              <p className="text-slate-600 mb-4">"El restaurante que recomendaban en Alfama fue el mejor de todo el viaje. Jamas lo hubieramos encontrado solos."</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-slate-300"></div>
                <div>
                  <p className="font-semibold text-sm" style={{color: 'var(--color-primary)'}}>Maria G.</p>
                  <p className="text-slate-400 text-xs">Madrid, Espana</p>
                </div>
              </div>
            </div>
            <div className="bg-slate-50 rounded-2xl p-6">
              <div className="flex gap-1 mb-4">
                {[1,2,3,4,5].map(i => (<svg key={i} className="w-5 h-5 text-amber-400" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>))}
              </div>
              <p className="text-slate-600 mb-4">"Gracias al tip de ir al castillo despues de las 15h, no hicimos ni un minuto de cola. Genios."</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-slate-300"></div>
                <div>
                  <p className="font-semibold text-sm" style={{color: 'var(--color-primary)'}}>Carlos R.</p>
                  <p className="text-slate-400 text-xs">Buenos Aires, Argentina</p>
                </div>
              </div>
            </div>
            <div className="bg-slate-50 rounded-2xl p-6">
              <div className="flex gap-1 mb-4">
                {[1,2,3,4,5].map(i => (<svg key={i} className="w-5 h-5 text-amber-400" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>))}
              </div>
              <p className="text-slate-600 mb-4">"Los spots de fotos estan increibles. Volvi con las mejores fotos que he tenido en cualquier viaje."</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-slate-300"></div>
                <div>
                  <p className="font-semibold text-sm" style={{color: 'var(--color-primary)'}}>Laura M.</p>
                  <p className="text-slate-400 text-xs">Mexico DF, Mexico</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16" style={{background: 'var(--color-primary)'}}>
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white/10 mb-6">
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Garantia de 14 dias</h2>
          <p className="text-xl text-white/80 mb-2">Si no estas 100% satisfecho, te devolvemos el dinero.</p>
          <p className="text-white/60">Sin preguntas. Sin complicaciones. Cero riesgo para ti.</p>
        </div>
      </section>

      <section className="py-24" style={{background: 'var(--color-accent)'}}>
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Listo para vivir Lisboa como un local?</h2>
          <p className="text-xl text-white/90 mb-10">Por menos de lo que cuesta un cafe tienes todo tu viaje organizado.</p>
          <Link href="/itinerarios" className="inline-flex items-center justify-center gap-2 px-10 py-5 rounded-xl font-bold text-xl transition-all hover:scale-105 hover:shadow-2xl bg-white" style={{color: 'var(--color-primary)'}}>
            Ver todos los packs
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
          </Link>
          <p className="text-white/70 text-sm mt-6">Descarga inmediata - Acceso de por vida - 14 dias de garantia</p>
        </div>
      </section>
    </main>
  );
}
