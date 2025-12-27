import Link from 'next/link';

export const metadata = {
  title: 'Lisboa 2 Dias - Itinerario Completo | Estaba en Lisboa',
  description: 'El favorito. Fin de semana perfecto en Lisboa con Alfama, Belem, LX Factory, vida nocturna y todos los secretos locales.',
};

export default function Lisboa2DiasPage() {
  return (
    <main className="min-h-screen">
      <section className="relative py-20 bg-gradient-to-br from-slate-900 via-amber-900 to-slate-900">
        <div className="absolute inset-0 bg-cover bg-center opacity-20" style={{backgroundImage: 'url(https://images.unsplash.com/photo-1569959220744-ff553533f492?w=1920)'}}></div>
        <div className="relative max-w-4xl mx-auto px-4">
          <Link href="/itinerarios" className="inline-flex items-center gap-2 text-white/70 hover:text-white mb-6 text-sm">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
            Volver a itinerarios
          </Link>
          <div className="flex items-center gap-3 mb-4">
            <span className="px-3 py-1 rounded-full text-sm font-medium text-white" style={{background: 'var(--color-accent)'}}>MAS VENDIDO</span>
            <span className="text-white/60 text-sm">2 dias completos</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">Lisboa Completa</h1>
          <p className="text-xl text-white/80 mb-8">El pack favorito. Fin de semana perfecto con Belem, LX Factory, vida nocturna y todos los secretos que solo conocen los locales.</p>
          <div className="flex flex-wrap gap-4">
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur px-4 py-2 rounded-full">
              <span className="text-white text-sm">15 paradas</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur px-4 py-2 rounded-full">
              <span className="text-white text-sm">6 restaurantes</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur px-4 py-2 rounded-full">
              <span className="text-white text-sm">15 spots de fotos</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur px-4 py-2 rounded-full">
              <span className="text-white text-sm">Guia nocturna</span>
            </div>
          </div>
        </div>
      </section>

      <section className="py-6 bg-white border-b sticky top-16 z-40 shadow-sm">
        <div className="max-w-4xl mx-auto px-4">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div className="flex items-center gap-4">
              <div>
                <span className="text-3xl font-bold text-slate-900">8.99 EUR</span>
              </div>
              <span className="text-green-600 text-sm font-medium">Descarga inmediata</span>
            </div>
            <div className="flex gap-3">
              <Link href="#preview" className="px-6 py-3 rounded-xl font-semibold border-2 border-slate-200 hover:border-slate-300 transition-colors">
                Ver preview
              </Link>
              <button className="px-6 py-3 rounded-xl font-semibold text-white transition-all hover:scale-105" style={{background: 'var(--color-accent)'}}>
                Comprar ahora
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4">
          <div className="bg-amber-50 border border-amber-200 rounded-2xl p-6 mb-8">
            <h3 className="font-bold text-amber-800 mb-2">DIA 1: Centro historico + Belem</h3>
            <p className="text-amber-700 text-sm">Alfama, miradores, Castillo, Belem y los mejores atardeceres</p>
          </div>
          
          <div className="space-y-6 mb-12">
            <div className="bg-white rounded-2xl p-6 shadow-sm border-l-4 border-amber-500">
              <div className="flex items-center gap-3 mb-3">
                <span className="px-3 py-1 rounded-full text-sm font-bold bg-amber-100 text-amber-700">09:00</span>
                <h3 className="text-xl font-bold" style={{color: 'var(--color-primary)'}}>Alfama por la manana</h3>
              </div>
              <p className="text-slate-600 text-sm">El barrio mas autentico de Lisboa. Empieza temprano cuando solo hay vecinos. Callejuelas medievales, azulejos, ropa tendida.</p>
              <p className="text-amber-600 text-xs font-medium mt-2">Tip: Entra por la Catedral Se y pierdete subiendo sin mapa</p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-sm border-l-4 border-amber-500">
              <div className="flex items-center gap-3 mb-3">
                <span className="px-3 py-1 rounded-full text-sm font-bold bg-amber-100 text-amber-700">10:30</span>
                <h3 className="text-xl font-bold" style={{color: 'var(--color-primary)'}}>Miradores de Alfama</h3>
              </div>
              <p className="text-slate-600 text-sm">Santa Luzia (el mas bonito), Portas do Sol (el mas famoso), y Graca (el mas panoramico). Ve a los tres, estan cerca.</p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-sm border-l-4 border-amber-500">
              <div className="flex items-center gap-3 mb-3">
                <span className="px-3 py-1 rounded-full text-sm font-bold bg-amber-100 text-amber-700">12:00</span>
                <h3 className="text-xl font-bold" style={{color: 'var(--color-primary)'}}>Castelo de Sao Jorge</h3>
              </div>
              <p className="text-slate-600 text-sm">Vistas 360 de toda Lisboa. Pasea por las murallas, ve los pavos reales en los jardines.</p>
              <p className="text-amber-600 text-xs font-medium mt-2">Entrada: 15 EUR | Compra online para evitar cola</p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-sm border-l-4 border-green-500">
              <div className="flex items-center gap-3 mb-3">
                <span className="px-3 py-1 rounded-full text-sm font-bold bg-green-100 text-green-700">13:30</span>
                <h3 className="text-xl font-bold" style={{color: 'var(--color-primary)'}}>Almuerzo: Taberna da Rua das Flores</h3>
              </div>
              <p className="text-slate-600 text-sm">Cocina portuguesa moderna espectacular. Pide las croquetas de alheira y el pulpo. Reserva o ve temprano.</p>
              <p className="text-green-600 text-xs font-medium mt-2">~25 EUR/persona | Alternativa: Tasca do Chico (mas economico)</p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-sm border-l-4 border-amber-500">
              <div className="flex items-center gap-3 mb-3">
                <span className="px-3 py-1 rounded-full text-sm font-bold bg-amber-100 text-amber-700">15:30</span>
                <h3 className="text-xl font-bold" style={{color: 'var(--color-primary)'}}>Belem</h3>
              </div>
              <p className="text-slate-600 text-sm">Torre de Belem, Monasterio de los Jeronimos (UNESCO), MAAT. Toma tranvia 15E o Uber.</p>
              <p className="text-amber-600 text-xs font-medium mt-2">Tip: La iglesia del Monasterio es gratis y espectacular</p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-sm border-l-4 border-green-500">
              <div className="flex items-center gap-3 mb-3">
                <span className="px-3 py-1 rounded-full text-sm font-bold bg-green-100 text-green-700">17:00</span>
                <h3 className="text-xl font-bold" style={{color: 'var(--color-primary)'}}>Pasteis de Belem</h3>
              </div>
              <p className="text-slate-600 text-sm">Los originales desde 1837. La cola avanza rapido. Pidelos calientes con canela y azucar.</p>
              <p className="text-green-600 text-xs font-medium mt-2">1.30 EUR cada uno | El salon de atras tiene menos cola</p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-sm border-l-4 border-amber-500">
              <div className="flex items-center gap-3 mb-3">
                <span className="px-3 py-1 rounded-full text-sm font-bold bg-amber-100 text-amber-700">18:30</span>
                <h3 className="text-xl font-bold" style={{color: 'var(--color-primary)'}}>Atardecer en Mirador Santa Catarina</h3>
              </div>
              <p className="text-slate-600 text-sm">El mejor sitio para ver el atardecer. Ambiente joven, cerveza barata en los kioscos. Vistas al puente 25 de Abril.</p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-sm border-l-4 border-green-500">
              <div className="flex items-center gap-3 mb-3">
                <span className="px-3 py-1 rounded-full text-sm font-bold bg-green-100 text-green-700">20:30</span>
                <h3 className="text-xl font-bold" style={{color: 'var(--color-primary)'}}>Cena + Noche en Bairro Alto</h3>
              </div>
              <p className="text-slate-600 text-sm">Cena en Cervejaria Trindade (edificio historico, mariscos) y luego copas por las calles de Bairro Alto.</p>
              <p className="text-green-600 text-xs font-medium mt-2">Los bares cierran a las 2:00, la fiesta sigue en Cais do Sodre</p>
            </div>
          </div>

          <div className="bg-purple-50 border border-purple-200 rounded-2xl p-6 mb-8">
            <h3 className="font-bold text-purple-800 mb-2">DIA 2: LX Factory + Principe Real + Fado</h3>
            <p className="text-purple-700 text-sm">El lado mas trendy y alternativo de Lisboa</p>
          </div>

          <div className="space-y-6">
            <div className="bg-white rounded-2xl p-6 shadow-sm border-l-4 border-purple-500">
              <div className="flex items-center gap-3 mb-3">
                <span className="px-3 py-1 rounded-full text-sm font-bold bg-purple-100 text-purple-700">10:00</span>
                <h3 className="text-xl font-bold" style={{color: 'var(--color-primary)'}}>Brunch en LX Factory</h3>
              </div>
              <p className="text-slate-600 text-sm">Antigua fabrica convertida en espacio creativo. Brunch en Landeau (el mejor chocolate cake de Lisboa) o en la terraza de Rio Maravilha.</p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-sm border-l-4 border-purple-500">
              <div className="flex items-center gap-3 mb-3">
                <span className="px-3 py-1 rounded-full text-sm font-bold bg-purple-100 text-purple-700">12:00</span>
                <h3 className="text-xl font-bold" style={{color: 'var(--color-primary)'}}>Explora LX Factory</h3>
              </div>
              <p className="text-slate-600 text-sm">Tiendas vintage, galerias, street art. No te pierdas Ler Devagar (libreria increible) y el mercado de domingo si coincide.</p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-sm border-l-4 border-purple-500">
              <div className="flex items-center gap-3 mb-3">
                <span className="px-3 py-1 rounded-full text-sm font-bold bg-purple-100 text-purple-700">14:00</span>
                <h3 className="text-xl font-bold" style={{color: 'var(--color-primary)'}}>Principe Real</h3>
              </div>
              <p className="text-slate-600 text-sm">El barrio mas trendy de Lisboa. Tiendas de diseno, cafes con encanto, el jardin botanico. Ambiente LGBT-friendly.</p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-sm border-l-4 border-green-500">
              <div className="flex items-center gap-3 mb-3">
                <span className="px-3 py-1 rounded-full text-sm font-bold bg-green-100 text-green-700">15:30</span>
                <h3 className="text-xl font-bold" style={{color: 'var(--color-primary)'}}>Almuerzo tardio: A Cevicheria</h3>
              </div>
              <p className="text-slate-600 text-sm">Del chef Kiko Martins. Ceviche espectacular, pulpo con aire de bonito. Reserva obligatoria.</p>
              <p className="text-green-600 text-xs font-medium mt-2">~35 EUR/persona | Alternativa: Cervejaria Ramiro (mariscos epicos)</p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-sm border-l-4 border-purple-500">
              <div className="flex items-center gap-3 mb-3">
                <span className="px-3 py-1 rounded-full text-sm font-bold bg-purple-100 text-purple-700">17:30</span>
                <h3 className="text-xl font-bold" style={{color: 'var(--color-primary)'}}>Time Out Market</h3>
              </div>
              <p className="text-slate-600 text-sm">El mercado gastronomico mas famoso de Lisboa. Perfecto para picotear y probar diferentes cosas antes de la cena.</p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-sm border-l-4 border-green-500">
              <div className="flex items-center gap-3 mb-3">
                <span className="px-3 py-1 rounded-full text-sm font-bold bg-green-100 text-green-700">21:00</span>
                <h3 className="text-xl font-bold" style={{color: 'var(--color-primary)'}}>Fado en Alfama</h3>
              </div>
              <p className="text-slate-600 text-sm">Experiencia imprescindible. Tasca do Chico o Mesa de Frades para algo mas autentico. Reserva con antelacion.</p>
              <p className="text-green-600 text-xs font-medium mt-2">Tip: Evita los sitios de Baixa, son turisticos. Alfama es donde esta el fado real</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8" style={{color: 'var(--color-primary)'}}>Que incluye este pack</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="flex items-start gap-4 p-4 bg-slate-50 rounded-xl">
              <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
              </div>
              <div>
                <h4 className="font-semibold" style={{color: 'var(--color-primary)'}}>Itinerario de 2 dias completos</h4>
                <p className="text-sm text-slate-600">Hora a hora, perfectamente organizado</p>
              </div>
            </div>
            <div className="flex items-start gap-4 p-4 bg-slate-50 rounded-xl">
              <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
              </div>
              <div>
                <h4 className="font-semibold" style={{color: 'var(--color-primary)'}}>6 restaurantes + bares</h4>
                <p className="text-sm text-slate-600">Donde comemos nosotros, con precios</p>
              </div>
            </div>
            <div className="flex items-start gap-4 p-4 bg-slate-50 rounded-xl">
              <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
              </div>
              <div>
                <h4 className="font-semibold" style={{color: 'var(--color-primary)'}}>15 spots de fotos</h4>
                <p className="text-sm text-slate-600">Miradores, calles, atardeceres</p>
              </div>
            </div>
            <div className="flex items-start gap-4 p-4 bg-slate-50 rounded-xl">
              <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
              </div>
              <div>
                <h4 className="font-semibold" style={{color: 'var(--color-primary)'}}>Guia de vida nocturna</h4>
                <p className="text-sm text-slate-600">Bairro Alto, Cais do Sodre, rooftops</p>
              </div>
            </div>
            <div className="flex items-start gap-4 p-4 bg-slate-50 rounded-xl">
              <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
              </div>
              <div>
                <h4 className="font-semibold" style={{color: 'var(--color-primary)'}}>Mapas offline</h4>
                <p className="text-sm text-slate-600">Google Maps con todos los puntos</p>
              </div>
            </div>
            <div className="flex items-start gap-4 p-4 bg-slate-50 rounded-xl">
              <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
              </div>
              <div>
                <h4 className="font-semibold" style={{color: 'var(--color-primary)'}}>Tips de transporte</h4>
                <p className="text-sm text-slate-600">Como moverte y ahorrar dinero</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16" style={{background: 'var(--color-accent)'}}>
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">El pack mas vendido por algo</h2>
          <p className="text-white/90 text-lg mb-8">Descarga inmediata. Acceso de por vida. Garantia de 14 dias.</p>
          <button className="px-10 py-4 rounded-xl font-bold text-lg transition-all hover:scale-105 bg-white" style={{color: 'var(--color-primary)'}}>
            Comprar por 8.99 EUR
          </button>
        </div>
      </section>
    </main>
  );
}
