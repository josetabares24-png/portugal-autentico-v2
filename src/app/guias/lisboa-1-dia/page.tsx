'use client';

import { useEffect, useState } from 'react';
import { useUser } from '@clerk/nextjs';
import Image from 'next/image';
import Link from 'next/link';
import Paywall from '@/components/Paywall';
import { hasAccessToGuide } from '@/lib/access';

export default function Lisboa1DiaPage() {
  const { user, isLoaded } = useUser();
  const [hasAccess, setHasAccess] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function checkAccess() {
      if (!isLoaded) return;
      
      if (!user) {
        setHasAccess(false);
        setLoading(false);
        return;
      }

      const access = await hasAccessToGuide(user.id, 'lisboa-1-dia');
      setHasAccess(access);
      setLoading(false);
    }

    checkAccess();
  }, [user, isLoaded]);

  // Paradas de la guía
  const allStops = [
    {
      numero: 1,
      lugar: 'Alfama',
      hora: '09:00',
      duracion: '2h',
      gps: '38.7126, -9.1284',
      descripcion: 'El barrio más antiguo de Lisboa. Calles estrechas, laberínticas y llenas de historia. Aquí nacieron el fado y las tradiciones más auténticas de la ciudad.',
      tips: [
        'Empieza temprano para evitar multitudes',
        'Lleva calzado cómodo (muchas cuestas)',
        'Las mejores fotos desde Mirador Santa Luzia',
        'Prueba ginjinha en un bar local (1€)'
      ],
      restaurantes: [
        { nombre: 'Cruzes Credo', tipo: 'Típico portugués', precio: '12-18€' }
      ]
    },
    {
      numero: 2,
      lugar: 'Mirador de Santa Luzia',
      hora: '11:00',
      duracion: '30min',
      gps: '38.7126, -9.1284',
      descripcion: 'Las mejores vistas panorámicas de Alfama y el río Tajo. Paneles de azulejos históricos adornan las paredes, contando la historia de Lisboa.',
      tips: [
        'Mejor luz para fotos: 09:00-11:00',
        'Banco de azulejos perfecto para descansar',
        'Vendedores ambulantes de agua/snacks',
        'Baños públicos cercanos (0.50€)'
      ]
    },
    {
      numero: 3,
      lugar: 'Castillo de São Jorge',
      hora: '11:30',
      duracion: '1.5h',
      gps: '38.7139, -9.1334',
      descripcion: 'Fortaleza medieval con vistas de 360° sobre toda Lisboa. Murallas, torres, jardines y pavos reales. Imprescindible para entender la historia de la ciudad.',
      tips: [
        'Entrada: 15€ (comprar online 10% descuento)',
        'Audio guía incluida en precio',
        'Evitar 12:00-15:00 (mucho sol y turistas)',
        'Restaurante dentro con vistas (caro)'
      ],
      restaurantes: [
        { nombre: 'Casa do Leão', tipo: 'Vista panorámica', precio: '25-35€' }
      ]
    },
    // Paradas PROTEGIDAS (solo con acceso)
    {
      numero: 4,
      lugar: 'Baixa Pombalina',
      hora: '13:30',
      duracion: '1h',
      gps: '38.7119, -9.1396',
      descripcion: 'El corazón comercial de Lisboa. Calles peatonales en cuadrícula perfecta reconstruidas después del terremoto de 1755. Arquitectura neoclásica impresionante.',
      tips: [
        'Almuerzo aquí: más opciones económicas',
        'Calle Augusta es la principal (peatonal)',
        'Tiendas de souvenirs (comparar precios)',
        'Conserveira de Lisboa: conservas gourmet'
      ],
      restaurantes: [
        { nombre: 'Restaurante Leão de Ouro', tipo: 'Menú del día', precio: '8-12€' },
        { nombre: 'Martinho da Arcada', tipo: 'Histórico (1782)', precio: '15-25€' }
      ]
    },
    {
      numero: 5,
      lugar: 'Praça do Comércio',
      hora: '14:30',
      duracion: '30min',
      gps: '38.7077, -9.1366',
      descripcion: 'La plaza más emblemática de Lisboa frente al río Tajo. Arco da Rua Augusta, estatua ecuestre de José I y vistas infinitas del río.',
      tips: [
        'Subir al Arco da Rua Augusta: 3€ (vistas 360°)',
        'Café Martinho da Arcada (histórico)',
        'Atardecer aquí es mágico',
        'Ferry a Cacilhas: 1.30€ (vistas desde río)'
      ]
    },
    {
      numero: 6,
      lugar: 'Belém',
      hora: '15:30',
      duracion: '2h',
      gps: '38.6978, -9.2062',
      descripcion: 'Zona monumental UNESCO. Torre de Belém (símbolo de Lisboa) y Monasterio de los Jerónimos (obra maestra manuelina). Aquí partieron las carabelas al Nuevo Mundo.',
      tips: [
        'Tranvía 15E desde Praça do Comércio: 3€',
        'Torre + Monasterio: ticket combinado 18€',
        'Monasterio cierra 18:00 (llegar antes 17:00)',
        'Área grande, planea 2-3 horas mínimo'
      ],
      restaurantes: [
        { nombre: 'Pastéis de Belém', tipo: 'Los originales desde 1837', precio: '1.20€/pastel' }
      ]
    },
    {
      numero: 7,
      lugar: 'Pastéis de Belém',
      hora: '17:30',
      duracion: '30min',
      gps: '38.6976, -9.2033',
      descripcion: 'La fábrica original de pastéis de nata desde 1837. Receta secreta guardada por pocos. OBLIGATORIO probar aquí los auténticos pastéis de Belém.',
      tips: [
        'Precio: 1.20€ por pastel',
        'SIEMPRE hay cola (vale la pena)',
        'Para llevar: más rápido',
        'Sentarse dentro: experiencia completa',
        'Pedir con canela y azúcar glass'
      ]
    },
    {
      numero: 8,
      lugar: 'Mirador Portas do Sol (Atardecer)',
      hora: '18:30',
      duracion: '1h',
      gps: '38.7130, -9.1277',
      descripcion: 'Cierra el día con el mejor atardecer sobre Alfama. Bar en el mirador para disfrutar con una bebida mientras el sol se pone sobre el río Tajo.',
      tips: [
        'Llegar 30min antes del sunset',
        'Cerveja: 3€, vino: 4€',
        'Tranvía 28 pasa aquí (icónico)',
        'Cena en Alfama después (10min caminando)'
      ],
      restaurantes: [
        { nombre: 'Portas do Sol Bar', tipo: 'Vista + bebidas', precio: '3-8€' }
      ]
    }
  ];

  const freeStops = allStops.slice(0, 3);
  const premiumStops = allStops.slice(3);

  if (!isLoaded || loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
      </div>
    );
  }

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
            Descubre lo imprescindible de Lisboa en un día perfectamente organizado
          </p>

          <div className="flex items-center justify-center gap-6 text-sm text-white/70">
            <div className="flex items-center gap-1">
              <span className="material-symbols-outlined text-sm">schedule</span>
              <span>1 día completo</span>
            </div>
            <div className="flex items-center gap-1">
              <span className="material-symbols-outlined text-sm">location_on</span>
              <span>8 paradas</span>
            </div>
            <div className="flex items-center gap-1">
              <span className="material-symbols-outlined text-sm">restaurant</span>
              <span>5 restaurantes</span>
            </div>
          </div>

          {hasAccess && (
            <div className="mt-6 inline-flex items-center gap-2 bg-green-500 text-white px-6 py-3 rounded-full font-bold">
              <span className="material-symbols-outlined">check_circle</span>
              <span>Tienes acceso completo a esta guía</span>
            </div>
          )}
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

      {/* PREVIEW GRATUITO - Primeras 3 paradas */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <span className="inline-block px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-bold mb-4">
                PREVIEW GRATUITO
              </span>
              <h2 className="text-4xl font-black text-slate-900 mb-4" style={{ fontFamily: 'Georgia, serif' }}>
                Primeras 3 Paradas
              </h2>
              <p className="text-slate-600">
                Prueba la calidad de nuestras guías gratis. {!hasAccess && 'Desbloquea las 5 paradas restantes por solo 3.99€'}
              </p>
            </div>

            <div className="space-y-6">
              {freeStops.map((parada) => (
                <div key={parada.numero} className="bg-white rounded-2xl p-6 shadow-lg border-l-4 border-green-500">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 rounded-full bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center text-white font-black text-xl">
                        {parada.numero}
                      </div>
                      <div className="mt-2 text-center text-sm font-bold text-green-600">{parada.hora}</div>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="font-black text-xl text-slate-900">{parada.lugar}</h3>
                        <span className="text-xs font-bold text-slate-500 bg-slate-100 px-3 py-1 rounded-full">
                          {parada.duracion}
                        </span>
                      </div>
                      <p className="text-slate-600 mb-4">{parada.descripcion}</p>
                      
                      {/* GPS */}
                      <div className="flex items-center gap-2 text-sm text-slate-500 mb-3">
                        <span className="material-symbols-outlined text-sm">location_on</span>
                        <span className="font-mono">{parada.gps}</span>
                      </div>

                      {/* Tips */}
                      <div className="bg-blue-50 rounded-xl p-4 mb-3">
                        <p className="font-bold text-blue-900 text-sm mb-2 flex items-center gap-1">
                          <span className="material-symbols-outlined text-sm">lightbulb</span>
                          Tips de Local:
                        </p>
                        <ul className="space-y-1">
                          {parada.tips.map((tip, idx) => (
                            <li key={idx} className="text-sm text-blue-800 flex items-start gap-2">
                              <span className="text-blue-400">•</span>
                              <span>{tip}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Restaurantes */}
                      {parada.restaurantes && parada.restaurantes.length > 0 && (
                        <div className="bg-orange-50 rounded-xl p-4">
                          <p className="font-bold text-orange-900 text-sm mb-2 flex items-center gap-1">
                            <span className="material-symbols-outlined text-sm">restaurant</span>
                            Dónde Comer:
                          </p>
                          {parada.restaurantes.map((rest, idx) => (
                            <div key={idx} className="text-sm text-orange-800">
                              <strong>{rest.nombre}</strong> · {rest.tipo} · {rest.precio}
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PAYWALL o CONTENIDO PREMIUM */}
      {!hasAccess ? (
        <Paywall 
          guideId="lisboa-1-dia"
          guideName="Lisboa en 1 Día"
          price="3.99€"
          remainingStops={premiumStops.length}
        />
      ) : (
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-bold mb-4">
                  CONTENIDO PREMIUM
                </span>
                <h2 className="text-4xl font-black text-slate-900 mb-4" style={{ fontFamily: 'Georgia, serif' }}>
                  Resto del Itinerario
                </h2>
              </div>

              <div className="space-y-6">
                {premiumStops.map((parada) => (
                  <div key={parada.numero} className="bg-white rounded-2xl p-6 shadow-lg border-l-4 border-primary">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0">
                        <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-orange-500 flex items-center justify-center text-white font-black text-xl">
                          {parada.numero}
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
                        <p className="text-slate-600 mb-4">{parada.descripcion}</p>
                        
                        <div className="flex items-center gap-2 text-sm text-slate-500 mb-3">
                          <span className="material-symbols-outlined text-sm">location_on</span>
                          <span className="font-mono">{parada.gps}</span>
                        </div>

                        <div className="bg-blue-50 rounded-xl p-4 mb-3">
                          <p className="font-bold text-blue-900 text-sm mb-2 flex items-center gap-1">
                            <span className="material-symbols-outlined text-sm">lightbulb</span>
                            Tips de Local:
                          </p>
                          <ul className="space-y-1">
                            {parada.tips.map((tip, idx) => (
                              <li key={idx} className="text-sm text-blue-800 flex items-start gap-2">
                                <span className="text-blue-400">•</span>
                                <span>{tip}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {parada.restaurantes && parada.restaurantes.length > 0 && (
                          <div className="bg-orange-50 rounded-xl p-4">
                            <p className="font-bold text-orange-900 text-sm mb-2 flex items-center gap-1">
                              <span className="material-symbols-outlined text-sm">restaurant</span>
                              Dónde Comer:
                            </p>
                            {parada.restaurantes.map((rest, idx) => (
                              <div key={idx} className="text-sm text-orange-800">
                                <strong>{rest.nombre}</strong> · {rest.tipo} · {rest.precio}
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* CTA FINAL */}
      {!hasAccess && (
        <section className="py-20 bg-gradient-to-br from-primary to-orange-500">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center text-white">
              <h2 className="text-4xl md:text-5xl font-black mb-6" style={{ fontFamily: 'Georgia, serif' }}>
                Aprovecha Tu Día al Máximo
              </h2>
              <p className="text-xl mb-8 text-white/90">
                Acceso completo por solo 3.99€
              </p>

              <button 
                onClick={() => alert('Próximamente: Checkout Stripe')}
                className="group bg-white text-primary hover:bg-gray-50 font-black py-6 px-12 rounded-2xl text-2xl shadow-2xl hover:scale-105 transition-all inline-flex items-center gap-3 mb-6"
              >
                <span className="material-symbols-outlined text-3xl">shopping_cart</span>
                <span>Desbloquear Guía Completa</span>
              </button>

              <p className="text-white/80 text-sm mb-6">
                ✓ Acceso de por vida · ✓ Actualizaciones gratis · ✓ Garantía 48h
              </p>

              <div className="text-white/80 text-sm">
                <Link href="/pack-completo" className="underline hover:text-white">
                  O lleva el Pack Completo (8 guías) por 24.99€ y ahorra 60%
                </Link>
              </div>
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
