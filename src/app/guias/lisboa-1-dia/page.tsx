'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function Lisboa1DiaPage() {
  return (
    <div className="min-h-screen bg-background-light">
      {/* HERO */}
      <section className="relative min-h-[70vh] flex items-center justify-center">
        <div className="absolute inset-0">
          <Image 
            src="https://images.unsplash.com/photo-1585208798174-6cedd86e019a?w=1200" 
            alt="Lisboa en 1 Día"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900/70 via-slate-900/60 to-slate-900/80"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center text-white">
          <div className="inline-flex items-center gap-2 bg-green-500/20 backdrop-blur-md px-6 py-3 rounded-full mb-6 border border-green-300/30">
            <span className="material-symbols-outlined text-green-300">trending_up</span>
            <span className="text-sm font-bold">✓ MÁS VENDIDA</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-black mb-6" style={{ fontFamily: 'Georgia, serif' }}>
            Lisboa en 1 Día:<br />
            <span className="text-primary">Lo Esencial</span>
          </h1>

          <p className="text-xl md:text-2xl mb-8 text-white/90 leading-relaxed">
            Descubre lo imprescindible de Lisboa en un día perfectamente organizado. Alfama, Castillo, Belém y los lugares que no puedes perderte.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <button 
              onClick={() => alert('Próximamente: Checkout Stripe')}
              className="group bg-gradient-to-r from-primary to-orange-500 hover:from-primary-dark hover:to-orange-600 text-white font-black py-5 px-10 rounded-2xl text-xl shadow-2xl hover:scale-105 transition-all inline-flex items-center gap-2"
            >
              <span>Comprar por 3.99€</span>
              <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
            </button>
            <Link href="/pack-completo" className="text-white/80 hover:text-white text-sm underline">
              O ahorra 60% con el Pack Completo →
            </Link>
          </div>

          <div className="flex items-center justify-center gap-6 text-sm text-white/70">
            <div className="flex items-center gap-1">
              <span className="material-symbols-outlined text-sm">schedule</span>
              <span>1 día completo</span>
            </div>
            <div className="flex items-center gap-1">
              <span className="material-symbols-outlined text-sm">location_on</span>
              <span>8 paradas clave</span>
            </div>
            <div className="flex items-center gap-1">
              <span className="material-symbols-outlined text-sm">restaurant</span>
              <span>3 restaurantes</span>
            </div>
          </div>
        </div>
      </section>

      {/* QUÉ INCLUYE */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-black text-center text-slate-900 mb-12" style={{ fontFamily: 'Georgia, serif' }}>
              Qué Incluye Esta Guía
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              {[
                'Itinerario hora por hora optimizado',
                'Coordenadas GPS de cada parada',
                'Restaurantes verificados con precios reales',
                'Mejor momento para visitar cada lugar',
                'Consejos de transporte y tickets',
                'Tips para evitar colas y turistas',
                'Mapa offline descargable',
                'Presupuesto estimado completo',
                'Horarios actualizados 2026',
                'Alternativas por si llueve',
                'Dónde comprar souvenirs auténticos',
                'Actualizaciones gratuitas de por vida'
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-3 bg-slate-50 p-5 rounded-xl">
                  <span className="material-symbols-outlined text-primary text-2xl flex-shrink-0">check_circle</span>
                  <span className="text-slate-700 font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ITINERARIO */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-black text-center text-slate-900 mb-12" style={{ fontFamily: 'Georgia, serif' }}>
              Itinerario del Día
            </h2>

            <div className="space-y-6">
              {[
                { hora: '09:00', lugar: 'Alfama', desc: 'Barrio más antiguo de Lisboa. Calles estrechas y miradores impresionantes', duracion: '2h' },
                { hora: '11:00', lugar: 'Mirador Santa Luzia', desc: 'Las mejores vistas de Alfama y el río Tajo', duracion: '30min' },
                { hora: '11:30', lugar: 'Castillo de São Jorge', desc: 'Fortaleza medieval con vistas panorámicas de Lisboa', duracion: '1.5h' },
                { hora: '13:30', lugar: 'Almuerzo en Baixa', desc: 'Restaurante típico portugués (incluye recomendaciones)', duracion: '1h' },
                { hora: '14:30', lugar: 'Praça do Comércio', desc: 'La plaza más emblemática de Lisboa junto al río', duracion: '30min' },
                { hora: '15:30', lugar: 'Belém', desc: 'Torre de Belém y Monasterio de los Jerónimos (UNESCO)', duracion: '2h' },
                { hora: '17:30', lugar: 'Pastéis de Belém', desc: 'Prueba los pasteles de nata originales desde 1837', duracion: '30min' },
                { hora: '18:30', lugar: 'Mirador Portas do Sol', desc: 'Atardecer perfecto sobre Alfama', duracion: '1h' }
              ].map((parada, idx) => (
                <div key={idx} className="bg-white rounded-2xl p-6 shadow-lg border-l-4 border-primary">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-orange-500 flex items-center justify-center text-white font-black text-xl">
                        {idx + 1}
                      </div>
                      <div className="mt-2 text-center text-sm font-bold text-primary">{parada.hora}</div>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="font-black text-xl text-slate-900">{parada.lugar}</h3>
                        <span className="text-xs font-bold text-slate-500 bg-slate-100 px-3 py-1 rounded-full">
                          {parada.duracion}
                        </span>
                      </div>
                      <p className="text-slate-600">{parada.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="py-20 bg-gradient-to-br from-primary to-orange-500">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h2 className="text-4xl md:text-5xl font-black mb-6" style={{ fontFamily: 'Georgia, serif' }}>
              Aprovecha Tu Día al Máximo
            </h2>
            <p className="text-xl mb-8 text-white/90">
              Guía completa por solo 3.99€
            </p>

            <button 
              onClick={() => alert('Próximamente: Checkout Stripe')}
              className="group bg-white text-primary hover:bg-gray-50 font-black py-6 px-12 rounded-2xl text-2xl shadow-2xl hover:scale-105 transition-all inline-flex items-center gap-3 mb-6"
            >
              <span className="material-symbols-outlined text-3xl">shopping_cart</span>
              <span>Comprar Guía</span>
              <span className="material-symbols-outlined text-2xl group-hover:translate-x-1 transition-transform">arrow_forward</span>
            </button>

            <p className="text-white/80 text-sm mb-6">
              ✓ Descarga inmediata · ✓ Actualizaciones gratis · ✓ Garantía 48h
            </p>

            <div className="text-white/80 text-sm">
              <Link href="/pack-completo" className="underline hover:text-white">
                O lleva el Pack Completo (8 guías) por 24.99€ y ahorra 60%
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
