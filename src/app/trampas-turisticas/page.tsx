'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

// TODO: Mover metadata a layout.tsx o crear versión server component

export default function TrampasPage() {
  const [emailCaptured, setEmailCaptured] = useState(false);
  const [email, setEmail] = useState('');

  const handleEmailSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Integrar con ConvertKit/Resend
    console.log('Email captured:', email);
    setEmailCaptured(true);
  };

  const trampas = [
    {
      id: 1,
      title: "El Tranvía 28 a las 11:00",
      icon: "🚋",
      severity: "high",
      trampa: "Hacer cola 45 minutos bajo el sol + ir como sardina enlatada. Los carteristas adoran este tranvía lleno.",
      solucion: "Tómalo a las 8:00 AM (casi vacío) o después de las 19:00. O mejor: hazlo en sentido contrario (Campo Ourique → Alfama). Mismas vistas, cero colas.",
      ahorras: "45 min de cola + riesgo de robo",
      image: "/images/trampa-tram28.jpg"
    },
    {
      id: 2,
      title: "Comer en Restaurante da Baixa",
      icon: "🍽️",
      severity: "high",
      trampa: "Menú turístico 15€: arroz seco, bacalao congelado, vino malo. Camareros insistentes en la puerta. Comida hecha hace 3 días.",
      solucion: "Camina 2 calles hacia Mouraria o Martim Moniz. Tascas auténticas con menú del día 8-10€. Comida casera del día. Locales comiendo ahí.",
      ahorras: "5-7€ por persona + indigestión",
      image: "/images/trampa-restaurante.jpg"
    },
    {
      id: 3,
      title: "Tuk-tuks sin Precio Fijo",
      icon: "🛺",
      severity: "medium",
      trampa: "\"Tour personalizado\" sin acordar precio = 80-120€ por 30 minutos. Te llevan a tiendas donde tienen comisión.",
      solucion: "SIEMPRE acuerda precio ANTES de subir. Precio justo: 40-50€/hora. O mejor: Uber/Bolt + camina. Lisboa es pequeña.",
      ahorras: "30-70€ por tour",
      image: "/images/trampa-tuktuk.jpg"
    },
    {
      id: 4,
      title: "Pastéis de Belém con 2 Horas de Cola",
      icon: "🥐",
      severity: "medium",
      trampa: "Esperar 2 horas en el sol para un pastel de nata que puedes conseguir igual de bueno en 5 minutos.",
      solucion: "Manteigaria (Baixa o Chiado): 0 min cola, mismo nivel. Nata Lisboa (Baixa): receta tradicional, 5€ por 6 unidades. Los locales van a estos.",
      ahorras: "2 horas de tu vida",
      image: "/images/trampa-pasteis.jpg"
    },
    {
      id: 5,
      title: "Comprar Lisboa Card sin Hacer Cuentas",
      icon: "🎫",
      severity: "low",
      trampa: "Pagar 21€ por 24h pensando que ahorras dinero, pero solo visitas 1 museo (6€) y usas el metro 3 veces (5€). Pérdida: 10€.",
      solucion: "Solo vale si visitas 3+ museos/monumentos. Si solo quieres callejear y ver barrios: pase de 24h por 6.80€ es mejor.",
      ahorras: "10-14€",
      image: "/images/trampa-lisboacard.jpg"
    },
    {
      id: 6,
      title: "Mirador de Santa Luzia Lleno a las 12:00",
      icon: "👁️",
      severity: "low",
      trampa: "Llegar al mirador y no poder hacer fotos. 50 personas apretadas. Imposible disfrutar las vistas.",
      solucion: "Ve a las 8:00-9:00 (luz perfecta, casi solo) o al atardecer (18:00-19:00). O sube más: Mirador da Graça o Senhora do Monte (menos gente, mejores vistas).",
      ahorras: "Frustración + fotos arruinadas",
      image: "/images/trampa-mirador.jpg"
    },
    {
      id: 7,
      title: "Comprar Souvenirs en Baixa",
      icon: "🎁",
      severity: "low",
      trampa: "Imanes a 5€, azulejos falsos a 20€, camisetas de mala calidad a 15€. Made in China con \"Lisboa\" pegado.",
      solucion: "Azulejos auténticos: Fábrica Sant'Anna (desde 8€, artesanales). Conservas: Loja das Conservas (auténticas portuguesas). O Mercado da Ribeira (productos locales reales).",
      ahorras: "5-10€ por souvenir",
      image: "/images/trampa-souvenirs.jpg"
    },
    {
      id: 8,
      title: "Tomar Ginjinha en Copas Chocolate (Turistada)",
      icon: "🍒",
      severity: "low",
      trampa: "Pagar 3€ por ginjinha en copa de chocolate que no sabe a nada. Instagram-trap total.",
      solucion: "Ginjinha auténtica en A Ginjinha (Largo de São Domingos) - 1.40€. Sin copas de chocolate pero es la receta original de 1840. Llena de locales.",
      ahorras: "1.60€ + experiencia auténtica",
      image: "/images/trampa-ginjinha.jpg"
    },
    {
      id: 9,
      title: "Cambiar Dinero en el Aeropuerto",
      icon: "💱",
      severity: "high",
      trampa: "Comisión del 8-12%. Cambias 200€ y pierdes 16-24€ en comisiones abusivas.",
      solucion: "Saca efectivo en ATM con tarjeta sin comisiones (N26, Revolut, Wise). O paga con tarjeta directamente (Lisboa acepta tarjeta en todos lados).",
      ahorras: "15-25€ en comisiones",
      image: "/images/trampa-cambio.jpg"
    },
    {
      id: 10,
      title: "Hotel \"Vista al Castillo\" (Ventana Minúscula)",
      icon: "🏨",
      severity: "medium",
      trampa: "Pagar 30€ extra por \"vista al castillo\". Llegas y es una ventanita de 30cm donde apenas se ve una torre lejana.",
      solucion: "Lee reseñas CON FOTOS en Booking/Google. Busca \"vista parcial\" o \"vista lejana\". Mejor: ahorra esos 30€ y cena en un rooftop con vista total.",
      ahorras: "30€ por noche",
      image: "/images/trampa-vista.jpg"
    }
  ];

  return (
    <main className="min-h-screen bg-background-light">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-red-900 to-orange-700 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-96 h-96 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-yellow-500 rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-6xl mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-5 py-2.5 rounded-full text-white border border-white/20 mb-8">
            <span className="material-symbols-outlined text-yellow-400">warning</span>
            <span className="text-sm font-bold tracking-wide">GUÍA INSIDER - ACTUALIZADO 2025</span>
          </div>

          <h1 className="text-4xl md:text-6xl font-black text-white mb-4 tracking-tight">
            🚫 10 Trampas Turísticas<br/>en Lisboa
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto mb-8">
            (Y cómo evitarlas como lo haría un local)
          </p>

          {/* Stats */}
          <div className="flex flex-wrap justify-center gap-8 text-white/90 text-sm mb-8">
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-green-400">savings</span>
              <span><strong>Ahorra 150€+</strong> en tu viaje</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-yellow-400">verified</span>
              <span><strong>Por locales</strong> que viven en Lisboa</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-blue-400">schedule</span>
              <span><strong>Lectura:</strong> 8 minutos</span>
            </div>
          </div>

          {/* Severity Legend */}
          <div className="inline-flex items-center gap-4 bg-white/10 backdrop-blur-md px-6 py-3 rounded-xl text-white text-sm">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-red-500 rounded-full"></div>
              <span>Alta prioridad</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
              <span>Medio</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
              <span>Bajo</span>
            </div>
          </div>
        </div>
      </section>

      {/* Traps List */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="space-y-8">
            {trampas.map((trampa) => (
              <div
                key={trampa.id}
                className={`bg-white rounded-2xl overflow-hidden border-2 hover:shadow-2xl transition-all ${
                  trampa.severity === 'high'
                    ? 'border-red-300'
                    : trampa.severity === 'medium'
                    ? 'border-orange-300'
                    : 'border-yellow-300'
                }`}
              >
                {/* Header */}
                <div className={`p-6 ${
                  trampa.severity === 'high'
                    ? 'bg-gradient-to-r from-red-50 to-red-100'
                    : trampa.severity === 'medium'
                    ? 'bg-gradient-to-r from-orange-50 to-orange-100'
                    : 'bg-gradient-to-r from-yellow-50 to-yellow-100'
                }`}>
                  <div className="flex items-start gap-4">
                    <div className="text-5xl">{trampa.icon}</div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                          trampa.severity === 'high'
                            ? 'bg-red-600 text-white'
                            : trampa.severity === 'medium'
                            ? 'bg-orange-600 text-white'
                            : 'bg-yellow-600 text-white'
                        }`}>
                          TRAMPA #{trampa.id}
                        </span>
                        <span className={`text-xs font-bold ${
                          trampa.severity === 'high'
                            ? 'text-red-700'
                            : trampa.severity === 'medium'
                            ? 'text-orange-700'
                            : 'text-yellow-700'
                        }`}>
                          {trampa.severity === 'high' ? '🔥 ALTA PRIORIDAD' : trampa.severity === 'medium' ? '⚠️ MEDIO' : '💡 INFO ÚTIL'}
                        </span>
                      </div>
                      <h2 className="text-2xl font-black text-slate-900">
                        {trampa.title}
                      </h2>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  {/* Image Placeholder */}
                  <div className="mb-6 relative h-64 bg-gradient-to-br from-slate-200 to-slate-300 rounded-xl flex items-center justify-center overflow-hidden">
                    <span className="material-symbols-outlined text-slate-400 text-8xl">photo_camera</span>
                    <div className="absolute bottom-0 left-0 right-0 bg-black/70 backdrop-blur-sm text-white text-xs p-2 text-center">
                      📸 Foto: {trampa.title.toLowerCase()} (1200x600px)
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    {/* La Trampa */}
                    <div className="bg-red-50 rounded-xl p-5 border-2 border-red-200">
                      <div className="flex items-center gap-2 mb-3">
                        <span className="material-symbols-outlined text-red-600 text-2xl">cancel</span>
                        <h3 className="font-bold text-red-900">❌ LA TRAMPA</h3>
                      </div>
                      <p className="text-sm text-red-800">{trampa.trampa}</p>
                    </div>

                    {/* La Solución */}
                    <div className="bg-green-50 rounded-xl p-5 border-2 border-green-200">
                      <div className="flex items-center gap-2 mb-3">
                        <span className="material-symbols-outlined text-green-600 text-2xl">check_circle</span>
                        <h3 className="font-bold text-green-900">✅ LA SOLUCIÓN</h3>
                      </div>
                      <p className="text-sm text-green-800">{trampa.solucion}</p>
                    </div>
                  </div>

                  {/* Savings */}
                  <div className="bg-blue-50 rounded-xl p-4 border-2 border-blue-200">
                    <div className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-blue-600">savings</span>
                      <p className="font-bold text-blue-900">
                        💰 TE AHORRAS: <span className="text-blue-600">{trampa.ahorras}</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Email Capture - Lead Magnet */}
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
                📥 Guía Completa PDF Gratis
              </h2>
              <p className="text-xl text-white/90 mb-8">
                <strong>20 trampas turísticas completas</strong> + mapa de restaurantes locales + código de descuento 20% en nuestras guías
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
                  ✅ Sin spam · ✅ Desuscríbete cuando quieras · ✅ 100% gratis
                </p>
              </form>
            </>
          ) : (
            <div>
              <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="material-symbols-outlined text-white text-5xl">check_circle</span>
              </div>
              <h3 className="text-3xl font-bold text-white mb-4">
                ¡Email recibido! 📧
              </h3>
              <p className="text-xl text-white/90 mb-8">
                Revisa tu bandeja de entrada. El PDF con las <strong>20 trampas completas</strong> está llegando ahora.
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

      {/* CTA to Guides */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-black text-slate-900 mb-4">
            ¿Quieres evitar TODAS las trampas?
          </h2>
          <p className="text-lg text-slate-600 mb-8">
            Nuestras guías incluyen solo sitios verificados por locales. Sin turistadas, solo experiencias auténticas.
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

      {/* Social Sharing */}
      <section className="py-12 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-slate-600 mb-4 font-medium">
            ¿Te ha sido útil? Comparte para ayudar a otros viajeros:
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <button
              onClick={() => {
                const text = "🚫 10 Trampas Turísticas en Lisboa que debes evitar (y cómo hacerlo)";
                const url = window.location.href;
                window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`, '_blank');
              }}
              className="flex items-center gap-2 px-6 py-3 bg-black text-white rounded-xl font-bold hover:scale-105 transition-all"
            >
              <span>𝕏</span>
              Twitter
            </button>
            <button
              onClick={() => {
                const url = window.location.href;
                window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`, '_blank');
              }}
              className="flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-xl font-bold hover:scale-105 transition-all"
            >
              📘 Facebook
            </button>
            <button
              onClick={() => {
                navigator.clipboard.writeText(window.location.href);
                alert('✅ Link copiado al portapapeles');
              }}
              className="flex items-center gap-2 px-6 py-3 bg-slate-200 text-slate-900 rounded-xl font-bold hover:scale-105 transition-all"
            >
              <span className="material-symbols-outlined">link</span>
              Copiar link
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
