'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function PresupuestoPage() {
  const [tipo, setTipo] = useState<'low' | 'mid' | 'high'>('mid');
  const [dias, setDias] = useState(2);
  const [personas, setPersonas] = useState(2);
  const [emailCaptured, setEmailCaptured] = useState(false);
  const [email, setEmail] = useState('');

  const budgets = {
    low: {
      nombre: 'Mochilero',
      emoji: '🎒',
      alojamiento: 20,
      desayuno: 3,
      almuerzo: 8,
      cena: 10,
      transporte: 7,
      actividades: 10,
      extras: 5
    },
    mid: {
      nombre: 'Medio',
      emoji: '🏨',
      alojamiento: 60,
      desayuno: 8,
      almuerzo: 15,
      cena: 20,
      transporte: 7,
      actividades: 25,
      extras: 15
    },
    high: {
      nombre: 'Confort',
      emoji: '⭐',
      alojamiento: 120,
      desayuno: 15,
      almuerzo: 25,
      cena: 40,
      transporte: 15,
      actividades: 50,
      extras: 30
    }
  };

  const budget = budgets[tipo];
  const totalDia = Object.values(budget).reduce<number>((acc, val) => {
    return typeof val === 'number' ? acc + val : acc;
  }, 0);
  const totalPersonaDia = totalDia;
  const totalViaje = totalPersonaDia * dias * personas;

  const handleEmailSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Integrar con ConvertKit/Resend
    console.log('Email captured:', email, { tipo, dias, personas, total: totalViaje });
    setEmailCaptured(true);
  };

  const getTip = () => {
    if (tipo === 'low' && dias > 3) {
      return "💡 Con nuestra guía, encuentras tascas con menú del día desde 7€. Ahorras 3-5€ por comida.";
    }
    if (tipo === 'mid') {
      return "💡 La guía incluye restaurantes calidad-precio perfectos para presupuesto medio.";
    }
    if (tipo === 'high') {
      return "💡 Te mostramos los mejores rooftops y restaurantes gourmet validados por locales.";
    }
    return "💡 Optimiza tu presupuesto con nuestras guías desde 1.99€";
  };

  return (
    <main className="min-h-screen bg-background-light">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-green-900 to-emerald-700 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-96 h-96 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-yellow-500 rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-6xl mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-5 py-2.5 rounded-full text-white border border-white/20 mb-8">
            <span className="material-symbols-outlined text-yellow-400">calculate</span>
            <span className="text-sm font-bold tracking-wide">CALCULADORA INTERACTIVA</span>
          </div>

          <h1 className="text-4xl md:text-6xl font-black text-white mb-4 tracking-tight">
            💶 ¿Cuánto cuesta viajar<br/>a Lisboa?
          </h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Calcula tu presupuesto real según tu estilo de viaje. Precios actualizados 2025.
          </p>
        </div>
      </section>

      {/* Calculator Section */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <div className="grid lg:grid-cols-5 gap-8">
            {/* Controls */}
            <div className="lg:col-span-2 space-y-6">
              <div className="bg-white rounded-2xl p-6 border-2 border-slate-200 sticky top-24">
                <h2 className="text-2xl font-bold text-slate-900 mb-6">Personaliza tu viaje</h2>

                {/* Tipo de Viajero */}
                <div className="mb-6">
                  <label className="block text-sm font-bold text-slate-900 mb-3">
                    Tipo de viajero
                  </label>
                  <div className="grid grid-cols-3 gap-2">
                    {(['low', 'mid', 'high'] as const).map((t) => (
                      <button
                        key={t}
                        onClick={() => setTipo(t)}
                        className={`p-4 rounded-xl font-bold text-sm transition-all ${
                          tipo === t
                            ? 'bg-primary text-white shadow-lg scale-105'
                            : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                        }`}
                      >
                        <div className="text-2xl mb-1">{budgets[t].emoji}</div>
                        {budgets[t].nombre}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Días */}
                <div className="mb-6">
                  <label className="block text-sm font-bold text-slate-900 mb-2">
                    Número de días: <span className="text-primary text-xl">{dias}</span>
                  </label>
                  <input
                    type="range"
                    min="1"
                    max="7"
                    value={dias}
                    onChange={(e) => setDias(Number(e.target.value))}
                    className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-primary"
                  />
                  <div className="flex justify-between text-xs text-slate-500 mt-1">
                    <span>1 día</span>
                    <span>7 días</span>
                  </div>
                </div>

                {/* Personas */}
                <div className="mb-6">
                  <label className="block text-sm font-bold text-slate-900 mb-2">
                    Personas: <span className="text-primary text-xl">{personas}</span>
                  </label>
                  <input
                    type="range"
                    min="1"
                    max="6"
                    value={personas}
                    onChange={(e) => setPersonas(Number(e.target.value))}
                    className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-primary"
                  />
                  <div className="flex justify-between text-xs text-slate-500 mt-1">
                    <span>Solo</span>
                    <span>6 personas</span>
                  </div>
                </div>

                {/* Tip */}
                <div className="bg-blue-50 rounded-xl p-4 border border-blue-200">
                  <p className="text-sm text-blue-800">{getTip()}</p>
                </div>
              </div>
            </div>

            {/* Results */}
            <div className="lg:col-span-3 space-y-6">
              {/* Total destacado */}
              <div className="bg-gradient-to-br from-primary to-orange-500 rounded-2xl p-8 text-white text-center">
                <p className="text-white/80 text-sm font-bold mb-2">PRESUPUESTO TOTAL</p>
                <div className="text-6xl font-black mb-2">{totalViaje.toFixed(0)}€</div>
                <p className="text-white/90 text-sm">
                  {personas} {personas === 1 ? 'persona' : 'personas'} × {dias} {dias === 1 ? 'día' : 'días'}
                </p>
                <div className="mt-4 bg-white/20 backdrop-blur-sm rounded-xl p-3">
                  <p className="text-white/90 text-sm">
                    <strong>{totalPersonaDia.toFixed(0)}€</strong> por persona al día
                  </p>
                </div>
              </div>

              {/* Desglose */}
              <div className="bg-white rounded-2xl p-6 border-2 border-slate-200">
                <h3 className="text-xl font-bold text-slate-900 mb-4">
                  Desglose por persona/día
                </h3>

                <div className="space-y-3">
                  {[
                    { label: 'Alojamiento', value: budget.alojamiento, icon: 'hotel' },
                    { label: 'Desayuno', value: budget.desayuno, icon: 'coffee' },
                    { label: 'Almuerzo', value: budget.almuerzo, icon: 'lunch_dining' },
                    { label: 'Cena', value: budget.cena, icon: 'restaurant' },
                    { label: 'Transporte', value: budget.transporte, icon: 'directions_subway' },
                    { label: 'Actividades', value: budget.actividades, icon: 'tour' },
                    { label: 'Extras', value: budget.extras, icon: 'shopping_bag' },
                  ].map((item) => {
                    const percentage = (item.value / totalDia) * 100;
                    return (
                      <div key={item.label}>
                        <div className="flex items-center justify-between mb-1">
                          <div className="flex items-center gap-2">
                            <span className="material-symbols-outlined text-slate-600 text-lg">{item.icon}</span>
                            <span className="text-sm font-medium text-slate-700">{item.label}</span>
                          </div>
                          <span className="font-bold text-slate-900">{item.value}€</span>
                        </div>
                        <div className="w-full bg-slate-100 rounded-full h-2">
                          <div
                            className="bg-gradient-to-r from-primary to-orange-500 h-2 rounded-full transition-all"
                            style={{ width: `${percentage}%` }}
                          ></div>
                        </div>
                      </div>
                    );
                  })}
                </div>

                <div className="mt-6 pt-6 border-t-2 border-slate-200">
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-slate-900">TOTAL POR DÍA</span>
                    <span className="text-2xl font-black text-primary">{totalPersonaDia}€</span>
                  </div>
                </div>
              </div>

              {/* Qué incluye cada presupuesto */}
              <div className="bg-slate-50 rounded-2xl p-6 border-2 border-slate-200">
                <h3 className="text-lg font-bold text-slate-900 mb-4">
                  ¿Qué incluye el presupuesto {budget.nombre}? {budget.emoji}
                </h3>

                {tipo === 'low' && (
                  <ul className="space-y-2 text-sm text-slate-700">
                    <li className="flex items-start gap-2">
                      <span className="material-symbols-outlined text-green-600 text-sm mt-0.5">check_circle</span>
                      <span><strong>Hostels</strong> en habitación compartida (18-25€/noche)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="material-symbols-outlined text-green-600 text-sm mt-0.5">check_circle</span>
                      <span><strong>Tascas locales</strong> con menú del día (7-10€)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="material-symbols-outlined text-green-600 text-sm mt-0.5">check_circle</span>
                      <span><strong>Metro/tranvía</strong> con pase de 24h (6.80€)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="material-symbols-outlined text-green-600 text-sm mt-0.5">check_circle</span>
                      <span><strong>Free tours</strong> y monumentos gratuitos</span>
                    </li>
                  </ul>
                )}

                {tipo === 'mid' && (
                  <ul className="space-y-2 text-sm text-slate-700">
                    <li className="flex items-start gap-2">
                      <span className="material-symbols-outlined text-green-600 text-sm mt-0.5">check_circle</span>
                      <span><strong>Hoteles 3⭐</strong> céntricos (50-70€/noche)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="material-symbols-outlined text-green-600 text-sm mt-0.5">check_circle</span>
                      <span><strong>Restaurantes normales</strong> locales (15-20€/comida)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="material-symbols-outlined text-green-600 text-sm mt-0.5">check_circle</span>
                      <span><strong>Mix transporte</strong>: metro + Uber ocasional</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="material-symbols-oriented text-green-600 text-sm mt-0.5">check_circle</span>
                      <span><strong>Tours pagados</strong> (Sintra 49€, fado 65€)</span>
                    </li>
                  </ul>
                )}

                {tipo === 'high' && (
                  <ul className="space-y-2 text-sm text-slate-700">
                    <li className="flex items-start gap-2">
                      <span className="material-symbols-outlined text-green-600 text-sm mt-0.5">check_circle</span>
                      <span><strong>Hoteles 4-5⭐</strong> boutique (100-150€/noche)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="material-symbols-outlined text-green-600 text-sm mt-0.5">check_circle</span>
                      <span><strong>Restaurantes gourmet</strong> y rooftops (30-50€/comida)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="material-symbols-outlined text-green-600 text-sm mt-0.5">check_circle</span>
                      <span><strong>Uber/taxis</strong> para todo, sin preocupaciones</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="material-symbols-outlined text-green-600 text-sm mt-0.5">check_circle</span>
                      <span><strong>Tours privados</strong> y experiencias premium</span>
                    </li>
                  </ul>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Email Capture - Detailed Budget */}
      <section className="py-20 bg-gradient-to-br from-primary to-orange-500 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-96 h-96 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-3xl mx-auto px-4 text-center">
          {!emailCaptured ? (
            <>
              <span className="material-symbols-outlined text-white text-7xl mb-6 inline-block">download</span>
              <h2 className="text-3xl md:text-5xl font-black text-white mb-6">
                📊 Recibe tu Presupuesto Detallado
              </h2>
              <p className="text-xl text-white/90 mb-8">
                PDF con <strong>desglose completo</strong> + lista de restaurantes recomendados por rango de precio + cupón 20% en guías
              </p>

              <form onSubmit={handleEmailSubmit} className="max-w-md mx-auto">
                <div className="flex flex-col sm:flex-row gap-3">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="tu@email.com"
                    required
                    className="flex-1 px-6 py-4 rounded-xl text-slate-900 font-medium focus:outline-none focus:ring-4 focus:ring-white/50"
                  />
                  <button
                    type="submit"
                    className="px-8 py-4 bg-slate-900 hover:bg-slate-800 text-white font-bold rounded-xl transition-all hover:scale-105 shadow-2xl whitespace-nowrap"
                  >
                    Enviar PDF Gratis →
                  </button>
                </div>
                <p className="text-white/70 text-xs mt-3">
                  ✅ Presupuesto personalizado · ✅ Sin spam · ✅ 100% gratis
                </p>
              </form>
            </>
          ) : (
            <div>
              <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="material-symbols-outlined text-white text-5xl">check_circle</span>
              </div>
              <h3 className="text-3xl font-bold text-white mb-4">
                ¡Presupuesto enviado! 📧
              </h3>
              <p className="text-xl text-white/90 mb-4">
                Tu presupuesto de <strong>{totalViaje}€</strong> para {dias} {dias === 1 ? 'día' : 'días'} está en tu email.
              </p>
              <p className="text-white/80 mb-8">
                Incluye lista de restaurantes, alojamientos y cupón 20% OFF
              </p>
              <Link
                href="/itinerarios"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white text-primary rounded-xl font-bold hover:scale-105 transition-all shadow-2xl"
              >
                <span className="material-symbols-outlined">map</span>
                Ver Guías Premium
              </Link>
            </div>
          )}
        </div>
      </section>

      {/* Tips Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-black text-slate-900 mb-8 text-center">
            💡 Cómo ahorrar en Lisboa
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-green-50 rounded-2xl p-6 border-2 border-green-200">
              <h3 className="font-bold text-green-900 mb-3 flex items-center gap-2">
                <span className="material-symbols-outlined">savings</span>
                Alojamiento
              </h3>
              <ul className="text-sm text-green-800 space-y-2">
                <li>• Reserva con 2+ meses: ahorra 30-40%</li>
                <li>• Parque das Nações: 40% más barato que Baixa</li>
                <li>• Lunes-jueves: 20% menos que fin de semana</li>
              </ul>
            </div>

            <div className="bg-blue-50 rounded-2xl p-6 border-2 border-blue-200">
              <h3 className="font-bold text-blue-900 mb-3 flex items-center gap-2">
                <span className="material-symbols-outlined">restaurant</span>
                Comida
              </h3>
              <ul className="text-sm text-blue-800 space-y-2">
                <li>• Menú del día (12:00-14:00): 7-10€ completo</li>
                <li>• Mercados: Ribeira, Campo de Ourique</li>
                <li>• Evita Baixa turística: +30% más caro</li>
              </ul>
            </div>

            <div className="bg-purple-50 rounded-2xl p-6 border-2 border-purple-200">
              <h3 className="font-bold text-purple-900 mb-3 flex items-center gap-2">
                <span className="material-symbols-outlined">directions_subway</span>
                Transporte
              </h3>
              <ul className="text-sm text-purple-800 space-y-2">
                <li>• Pase 24h (6.80€) vs 5 viajes sueltos (8.25€)</li>
                <li>• Camina centro histórico (gratis + ejercicio)</li>
                <li>• Uber split con otros viajeros</li>
              </ul>
            </div>

            <div className="bg-orange-50 rounded-2xl p-6 border-2 border-orange-200">
              <h3 className="font-bold text-orange-900 mb-3 flex items-center gap-2">
                <span className="material-symbols-outlined">tour</span>
                Actividades
              </h3>
              <ul className="text-sm text-orange-800 space-y-2">
                <li>• Free tours (propina 10-15€ vs 25€ pagados)</li>
                <li>• Museos gratis: domingos 10:00-14:00</li>
                <li>• Miradores: 100% gratis y espectaculares</li>
              </ul>
            </div>
          </div>

          <div className="mt-8 text-center">
            <Link
              href="/trampas-turisticas"
              className="inline-flex items-center gap-2 px-8 py-4 bg-red-600 hover:bg-red-700 text-white font-bold rounded-xl transition-all hover:scale-105 shadow-lg"
            >
              🚫 Ver Trampas Turísticas
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-black text-slate-900 mb-4">
            ¿Listo para planificar tu viaje?
          </h2>
          <p className="text-lg text-slate-600 mb-8">
            Nuestras guías incluyen presupuesto día a día + restaurantes por rango de precio + trucos para ahorrar
          </p>
          <Link
            href="/itinerarios"
            className="inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-primary to-orange-500 hover:from-primary-dark hover:to-orange-600 text-white font-bold text-xl rounded-2xl shadow-2xl hover:scale-105 transition-all"
          >
            <span className="material-symbols-outlined text-2xl">explore</span>
            Ver Guías desde 1.99€
            <span className="material-symbols-outlined">arrow_forward</span>
          </Link>
        </div>
      </section>
    </main>
  );
}
