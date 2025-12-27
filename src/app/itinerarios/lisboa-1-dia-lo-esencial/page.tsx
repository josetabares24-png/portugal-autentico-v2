import Link from 'next/link';

export const metadata = {
  title: 'Lisboa 1 Dia - Itinerario Esencial | Estaba en Lisboa',
  description: 'Lo mejor de Lisboa en un dia perfectamente organizado. Alfama, Belem, miradores y los mejores restaurantes locales.',
};

export default function Lisboa1DiaPage() {
  return (
    <main className="min-h-screen">
      <section className="relative py-20 bg-gradient-to-br from-slate-900 via-sky-900 to-slate-900">
        <div className="absolute inset-0 bg-cover bg-center opacity-20" style={{backgroundImage: 'url(https://images.unsplash.com/photo-1548707309-dcebeab9ea9b?w=1920)'}}></div>
        <div className="relative max-w-4xl mx-auto px-4">
          <Link href="/itinerarios" className="inline-flex items-center gap-2 text-white/70 hover:text-white mb-6 text-sm">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
            Volver a itinerarios
          </Link>
          <div className="flex items-center gap-3 mb-4">
            <span className="px-3 py-1 rounded-full text-sm font-medium bg-sky-500 text-white">ESENCIAL</span>
            <span className="text-white/60 text-sm">1 dia completo</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">Lisboa Esencial</h1>
          <p className="text-xl text-white/80 mb-8">Perfecto si tienes escala o poco tiempo. Lo mejor de Lisboa perfectamente organizado para que no pierdas ni un minuto.</p>
          <div className="flex flex-wrap gap-4">
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur px-4 py-2 rounded-full">
              <span className="text-white text-sm">8 paradas</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur px-4 py-2 rounded-full">
              <span className="text-white text-sm">3 restaurantes</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur px-4 py-2 rounded-full">
              <span className="text-white text-sm">8 spots de fotos</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur px-4 py-2 rounded-full">
              <span className="text-white text-sm">Mapa offline</span>
            </div>
          </div>
        </div>
      </section>

      <section className="py-6 bg-white border-b sticky top-16 z-40 shadow-sm">
        <div className="max-w-4xl mx-auto px-4">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div className="flex items-center gap-4">
              <div>
                <span className="text-3xl font-bold text-slate-900">5.99 EUR</span>
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
          <h2 className="text-2xl font-bold mb-8" style={{color: 'var(--color-primary)'}}>Tu dia en Lisboa, hora a hora</h2>
          
          <div className="space-y-6">
            <div className="bg-white rounded-2xl p-6 shadow-sm border-l-4 border-sky-500">
              <div className="flex items-center gap-3 mb-3">
                <span className="px-3 py-1 rounded-full text-sm font-bold bg-sky-100 text-sky-700">09:00</span>
                <h3 className="text-xl font-bold" style={{color: 'var(--color-primary)'}}>Alfama - El barrio mas autentico</h3>
              </div>
              <p className="text-slate-600 text-sm">Empieza temprano antes de que lleguen los turistas. Callejuelas medievales, ropa tendida, fado sonando desde las ventanas. Es la Lisboa real.</p>
              <p className="text-sky-600 text-xs font-medium mt-2">Tip: Entra por la Catedral Se y pierdete subiendo hacia el castillo</p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-sm border-l-4 border-sky-500">
              <div className="flex items-center gap-3 mb-3">
                <span className="px-3 py-1 rounded-full text-sm font-bold bg-sky-100 text-sky-700">10:30</span>
                <h3 className="text-xl font-bold" style={{color: 'var(--color-primary)'}}>Mirador Santa Luzia</h3>
              </div>
              <p className="text-slate-600 text-sm">Las mejores vistas de Alfama y el rio Tajo. Azulejos preciosos, buganvillas, perfecto para fotos. Hay un kiosco para tomar un cafe.</p>
              <p className="text-sky-600 text-xs font-medium mt-2">Tip: El mirador de al lado (Portas do Sol) tiene mas gente pero vistas diferentes</p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-sm border-l-4 border-sky-500">
              <div className="flex items-center gap-3 mb-3">
                <span className="px-3 py-1 rounded-full text-sm font-bold bg-sky-100 text-sky-700">11:30</span>
                <h3 className="text-xl font-bold" style={{color: 'var(--color-primary)'}}>Castelo de Sao Jorge</h3>
              </div>
              <p className="text-slate-600 text-sm">Vistas 360 de Lisboa. Pasea por las murallas, ve los pavos reales. Vale la pena subir aunque la entrada sea de pago.</p>
              <p className="text-sky-600 text-xs font-medium mt-2">Entrada: 15 EUR | Tip: Despues de las 15:00 hay menos gente</p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-sm border-l-4 border-amber-500">
              <div className="flex items-center gap-3 mb-3">
                <span className="px-3 py-1 rounded-full text-sm font-bold bg-amber-100 text-amber-700">13:00</span>
                <h3 className="text-xl font-bold" style={{color: 'var(--color-primary)'}}>Almuerzo en Tasca do Chico</h3>
              </div>
              <p className="text-slate-600 text-sm">Tasca autentica donde comen los locales. Menu del dia por 8-10 EUR. Pide lo que tengan ese dia. Fado en vivo por las noches.</p>
              <p className="text-amber-600 text-xs font-medium mt-2">Alternativa: Taberna da Rua das Flores (un poco mas caro pero espectacular)</p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-sm border-l-4 border-sky-500">
              <div className="flex items-center gap-3 mb-3">
                <span className="px-3 py-1 rounded-full text-sm font-bold bg-sky-100 text-sky-700">15:00</span>
                <h3 className="text-xl font-bold" style={{color: 'var(--color-primary)'}}>Belem - Torre y Monasterio</h3>
              </div>
              <p className="text-slate-600 text-sm">Toma el tranvia 15E o Uber (15 min). La Torre de Belem y el Monasterio de los Jeronimos son patrimonio UNESCO. Imprescindibles.</p>
              <p className="text-sky-600 text-xs font-medium mt-2">Tip: Compra entradas online para el Monasterio. La iglesia es gratis y espectacular</p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-sm border-l-4 border-amber-500">
              <div className="flex items-center gap-3 mb-3">
                <span className="px-3 py-1 rounded-full text-sm font-bold bg-amber-100 text-amber-700">16:30</span>
                <h3 className="text-xl font-bold" style={{color: 'var(--color-primary)'}}>Pasteis de Belem</h3>
              </div>
              <p className="text-slate-600 text-sm">Los pasteis de nata originales desde 1837. La cola parece larga pero avanza rapido. Pidelos calientes con canela.</p>
              <p className="text-amber-600 text-xs font-medium mt-2">1.30 EUR cada uno | Tip: El salon de atras tiene menos cola que la tienda</p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-sm border-l-4 border-sky-500">
              <div className="flex items-center gap-3 mb-3">
                <span className="px-3 py-1 rounded-full text-sm font-bold bg-sky-100 text-sky-700">18:00</span>
                <h3 className="text-xl font-bold" style={{color: 'var(--color-primary)'}}>LX Factory</h3>
              </div>
              <p className="text-slate-600 text-sm">Antigua fabrica convertida en espacio creativo. Tiendas, galerias, street art, restaurantes. Ambiente muy cool para el atardecer.</p>
              <p className="text-sky-600 text-xs font-medium mt-2">Tip: Ler Devagar es una libreria increible dentro de la fabrica</p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-sm border-l-4 border-amber-500">
              <div className="flex items-center gap-3 mb-3">
                <span className="px-3 py-1 rounded-full text-sm font-bold bg-amber-100 text-amber-700">20:00</span>
                <h3 className="text-xl font-bold" style={{color: 'var(--color-primary)'}}>Cena en Bairro Alto</h3>
              </div>
              <p className="text-slate-600 text-sm">Vuelve al centro para cenar en Bairro Alto. Ambiente animado, muchos restaurantes. Despues puedes pasear por las calles con vida nocturna.</p>
              <p className="text-amber-600 text-xs font-medium mt-2">Recomendado: Cafe Buenos Aires (carnes) o Cervejaria Trindade (mariscos, edificio historico)</p>
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
                <h4 className="font-semibold" style={{color: 'var(--color-primary)'}}>Itinerario hora a hora</h4>
                <p className="text-sm text-slate-600">Cada minuto optimizado para que no pierdas tiempo</p>
              </div>
            </div>
            <div className="flex items-start gap-4 p-4 bg-slate-50 rounded-xl">
              <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
              </div>
              <div>
                <h4 className="font-semibold" style={{color: 'var(--color-primary)'}}>3 restaurantes locales</h4>
                <p className="text-sm text-slate-600">Con precios, que pedir y como llegar</p>
              </div>
            </div>
            <div className="flex items-start gap-4 p-4 bg-slate-50 rounded-xl">
              <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
              </div>
              <div>
                <h4 className="font-semibold" style={{color: 'var(--color-primary)'}}>8 spots de fotos</h4>
                <p className="text-sm text-slate-600">Los mejores angulos y horarios de luz</p>
              </div>
            </div>
            <div className="flex items-start gap-4 p-4 bg-slate-50 rounded-xl">
              <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
              </div>
              <div>
                <h4 className="font-semibold" style={{color: 'var(--color-primary)'}}>Mapa offline</h4>
                <p className="text-sm text-slate-600">Google Maps con todos los puntos marcados</p>
              </div>
            </div>
            <div className="flex items-start gap-4 p-4 bg-slate-50 rounded-xl">
              <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
              </div>
              <div>
                <h4 className="font-semibold" style={{color: 'var(--color-primary)'}}>Tips para evitar colas</h4>
                <p className="text-sm text-slate-600">Horarios secretos que usan los locales</p>
              </div>
            </div>
            <div className="flex items-start gap-4 p-4 bg-slate-50 rounded-xl">
              <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
              </div>
              <div>
                <h4 className="font-semibold" style={{color: 'var(--color-primary)'}}>Alternativas si llueve</h4>
                <p className="text-sm text-slate-600">Plan B para cada momento del dia</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16" style={{background: 'var(--color-accent)'}}>
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Listo para tu dia perfecto en Lisboa?</h2>
          <p className="text-white/90 text-lg mb-8">Descarga inmediata. Acceso de por vida. Garantia de 14 dias.</p>
          <button className="px-10 py-4 rounded-xl font-bold text-lg transition-all hover:scale-105 bg-white" style={{color: 'var(--color-primary)'}}>
            Comprar por 5.99 EUR
          </button>
        </div>
      </section>
    </main>
  );
}
