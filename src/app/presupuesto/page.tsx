'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { submitQuizLead } from '@/lib/brevo';

export default function PresupuestoPage() {
  const [tipo, setTipo] = useState<'low' | 'mid' | 'high'>('mid');
  const [dias, setDias] = useState(2);
  const [personas, setPersonas] = useState(2);
  const [emailCaptured, setEmailCaptured] = useState(false);
  const [email, setEmail] = useState('');
  const [nombre, setNombre] = useState('');
  const [emailStatus, setEmailStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [emailError, setEmailError] = useState<string | null>(null);

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

    if (!nombre || nombre.trim().length === 0) {
      setEmailError('Ingresa tu nombre.');
      setEmailStatus('error');
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setEmailError('Ingresa un email válido.');
      setEmailStatus('error');
      return;
    }

    setEmailStatus('loading');
    setEmailError(null);

    // Preparar desglose para el email
    const desglose = [
      { label: 'Alojamiento', value: budget.alojamiento, icon: '🏨' },
      { label: 'Desayuno', value: budget.desayuno, icon: '☕' },
      { label: 'Almuerzo', value: budget.almuerzo, icon: '🍽️' },
      { label: 'Cena', value: budget.cena, icon: '🍷' },
      { label: 'Transporte', value: budget.transporte, icon: '🚇' },
      { label: 'Actividades', value: budget.actividades, icon: '🎯' },
      { label: 'Extras', value: budget.extras, icon: '🛍️' },
    ];

    try {
      // Enviar presupuesto detallado por email
      const response = await fetch('/api/presupuesto', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          nombre,
          tipo,
          dias,
          personas,
          totalViaje,
          totalPersonaDia,
          desglose,
        }),
      });

      const data = await response.json();

      if (!response.ok || !data.success) {
        setEmailStatus('error');
        setEmailError(data.error || 'No pudimos enviar el presupuesto. Inténtalo otra vez.');
        return;
      }

      // También agregar a Brevo como lead
      try {
        await submitQuizLead({
          email,
          name: nombre,
          profile: 'presupuesto',
          companion: `${personas} personas`,
          interest: 'presupuesto-detallado',
          duration: `${dias} dias`,
          budget: tipo,
          experience: '',
        });
      } catch (brevoError) {
        console.warn('Error agregando a Brevo:', brevoError);
        // No es crítico, el email ya se envió
      }

      setEmailCaptured(true);
      setEmailStatus('success');
    } catch (error) {
      console.error('Error enviando presupuesto:', error);
      setEmailStatus('error');
      setEmailError('Error de conexión. Por favor, intenta de nuevo.');
    }
  };

  const faqItems = [
    {
      question: '¿Cuánto cuesta un viaje medio a Lisboa?',
      answer: 'Entre 60€ y 90€ por día incluyendo alojamiento, comidas y transporte.',
    },
    {
      question: '¿Cuál es el mayor gasto en Lisboa?',
      answer: 'El alojamiento suele ser el gasto más alto, sobre todo en temporada alta.',
    },
    {
      question: '¿Cómo ahorrar en comida?',
      answer: 'Busca el menú del día al mediodía y evita zonas muy turísticas.',
    },
  ];

  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqItems.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
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
    <main className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-50 relative overflow-hidden">
      {/* Fondo premium con efectos */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-br from-primary/20 to-[#F7931E]/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-tr from-primary/15 to-[#F7931E]/15 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      {/* Hero Section Premium */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/julie-ricard-DuzIBO_11SI-unsplash.jpg"
            alt="Presupuesto Lisboa"
            fill
            className="object-cover"
            priority
            fetchPriority="high"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/75"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-transparent to-[#F7931E]/10"></div>
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-6 py-16 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2.5 bg-white/20 backdrop-blur-md px-6 py-3 rounded-full text-white border-2 border-white/30 mb-8 shadow-2xl"
          >
            <span className="material-symbols-outlined text-lg">calculate</span>
            <span className="text-sm font-bold tracking-wide uppercase">Calculadora interactiva</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black leading-tight mb-6 text-white tracking-tight"
          >
            ¿Cuánto cuesta<br />
            <span className="bg-gradient-to-r from-[#FF6B35] to-[#F7931E] bg-clip-text text-transparent">
              viajar a Lisboa?
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl md:text-2xl text-white/95 max-w-3xl mx-auto mb-12 leading-relaxed font-medium"
          >
            Calcula tu presupuesto real según tu estilo de viaje. Precios verificados y actualizados 2025.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap justify-center gap-6 md:gap-8 text-white/90 text-sm md:text-base"
          >
            {[
              { icon: 'check_circle', text: 'Precios reales 2025', color: 'text-green-400' },
              { icon: 'verified', text: 'Verificado por locales', color: 'text-yellow-400' },
              { icon: 'calculate', text: 'Calculadora interactiva', color: 'text-blue-400' },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-2.5 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-xl border border-white/20">
                <span className={`material-symbols-outlined ${item.color} text-lg`}>{item.icon}</span>
                <span className="font-semibold">{item.text}</span>
              </div>
            ))}
          </motion.div>
        </div>

        <motion.div
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <span className="material-symbols-outlined text-white text-5xl opacity-70">expand_more</span>
        </motion.div>
      </section>

      {/* Calculator Section Premium */}
      <section className="relative py-24 md:py-32 bg-gradient-to-b from-white via-slate-50/50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-8 lg:gap-12">
            {/* Controls Premium - Formulario Completo */}
            <div className="lg:col-span-2 space-y-6">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 border-2 border-slate-200/80 shadow-2xl sticky top-24"
              >
                <h2 className="text-3xl font-black text-slate-900 mb-8 flex items-center gap-3">
                  <span className="material-symbols-outlined text-primary text-3xl">tune</span>
                  Calculadora de Presupuesto
                </h2>

                <form className="space-y-6">
                  {/* Tipo de Viajero Premium */}
                  <div>
                    <label className="block text-sm font-black text-slate-900 mb-4 uppercase tracking-wide">
                      Tipo de viajero
                    </label>
                    <div className="grid grid-cols-3 gap-3">
                      {(['low', 'mid', 'high'] as const).map((t) => (
                        <motion.button
                          key={t}
                          type="button"
                          whileHover={{ scale: 1.05, y: -2 }}
                          whileTap={{ scale: 0.95 }}
                          onClick={() => setTipo(t)}
                          className={`relative p-5 rounded-2xl font-black text-sm transition-all duration-300 border-2 ${
                            tipo === t
                              ? 'bg-gradient-to-br from-primary to-[#F7931E] text-white border-primary shadow-xl shadow-primary/30 scale-105'
                              : 'bg-white text-slate-700 border-slate-200 hover:border-primary/50 hover:shadow-lg'
                          }`}
                        >
                          <div className="text-3xl mb-2">{budgets[t].emoji}</div>
                          <div className="font-bold">{budgets[t].nombre}</div>
                          {tipo === t && (
                            <motion.div
                              className="absolute -top-2 -right-2 w-6 h-6 bg-white rounded-full flex items-center justify-center shadow-lg"
                              initial={{ scale: 0 }}
                              animate={{ scale: 1 }}
                              transition={{ type: 'spring', stiffness: 200 }}
                            >
                              <span className="material-symbols-outlined text-primary text-sm">check</span>
                            </motion.div>
                          )}
                        </motion.button>
                      ))}
                    </div>
                  </div>

                  {/* Días Premium - Con Input Numérico */}
                  <div>
                    <label htmlFor="dias" className="block text-sm font-black text-slate-900 mb-4 uppercase tracking-wide">
                      Número de días
                    </label>
                    <div className="space-y-3">
                      <div className="flex items-center gap-4">
                        <input
                          type="number"
                          id="dias"
                          min="1"
                          max="30"
                          value={dias}
                          onChange={(e) => {
                            const val = Math.max(1, Math.min(30, Number(e.target.value) || 1));
                            setDias(val);
                          }}
                          className="w-24 px-4 py-3 rounded-xl border-2 border-slate-300 focus:border-primary focus:ring-4 focus:ring-primary/20 text-center font-black text-xl text-slate-900 transition-all"
                        />
                        <span className="text-slate-600 font-semibold">días</span>
                      </div>
                      <div className="relative">
                        <input
                          type="range"
                          min="1"
                          max="7"
                          value={Math.min(dias, 7)}
                          onChange={(e) => setDias(Number(e.target.value))}
                          className="w-full h-3 bg-gradient-to-r from-slate-200 to-slate-300 rounded-full appearance-none cursor-pointer accent-primary"
                          style={{
                            background: `linear-gradient(to right, #FF6B35 0%, #FF6B35 ${((Math.min(dias, 7) - 1) / 6) * 100}%, #E2E8F0 ${((Math.min(dias, 7) - 1) / 6) * 100}%, #E2E8F0 100%)`
                          }}
                        />
                        <div className="flex justify-between text-xs text-slate-500 mt-2 font-semibold">
                          <span>1 día</span>
                          <span>7+ días</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Personas Premium - Con Input Numérico */}
                  <div>
                    <label htmlFor="personas" className="block text-sm font-black text-slate-900 mb-4 uppercase tracking-wide">
                      Número de personas
                    </label>
                    <div className="space-y-3">
                      <div className="flex items-center gap-4">
                        <input
                          type="number"
                          id="personas"
                          min="1"
                          max="20"
                          value={personas}
                          onChange={(e) => {
                            const val = Math.max(1, Math.min(20, Number(e.target.value) || 1));
                            setPersonas(val);
                          }}
                          className="w-24 px-4 py-3 rounded-xl border-2 border-slate-300 focus:border-primary focus:ring-4 focus:ring-primary/20 text-center font-black text-xl text-slate-900 transition-all"
                        />
                        <span className="text-slate-600 font-semibold">personas</span>
                      </div>
                      <div className="relative">
                        <input
                          type="range"
                          min="1"
                          max="6"
                          value={Math.min(personas, 6)}
                          onChange={(e) => setPersonas(Number(e.target.value))}
                          className="w-full h-3 bg-gradient-to-r from-slate-200 to-slate-300 rounded-full appearance-none cursor-pointer accent-primary"
                          style={{
                            background: `linear-gradient(to right, #FF6B35 0%, #FF6B35 ${((Math.min(personas, 6) - 1) / 5) * 100}%, #E2E8F0 ${((Math.min(personas, 6) - 1) / 5) * 100}%, #E2E8F0 100%)`
                          }}
                        />
                        <div className="flex justify-between text-xs text-slate-500 mt-2 font-semibold">
                          <span>1 persona</span>
                          <span>6+ personas</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Fechas del viaje (opcional) */}
                  <div>
                    <label htmlFor="fecha-inicio" className="block text-sm font-black text-slate-900 mb-4 uppercase tracking-wide">
                      Fecha del viaje (opcional)
                    </label>
                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <label htmlFor="fecha-inicio" className="block text-xs text-slate-600 mb-2 font-semibold">
                          Fecha inicio
                        </label>
                        <input
                          type="date"
                          id="fecha-inicio"
                          className="w-full px-4 py-3 rounded-xl border-2 border-slate-300 focus:border-primary focus:ring-4 focus:ring-primary/20 text-slate-900 font-semibold transition-all"
                        />
                      </div>
                      <div>
                        <label htmlFor="fecha-fin" className="block text-xs text-slate-600 mb-2 font-semibold">
                          Fecha fin
                        </label>
                        <input
                          type="date"
                          id="fecha-fin"
                          className="w-full px-4 py-3 rounded-xl border-2 border-slate-300 focus:border-primary focus:ring-4 focus:ring-primary/20 text-slate-900 font-semibold transition-all"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Presupuesto personalizado (opcional) */}
                  <div>
                    <label htmlFor="presupuesto-max" className="block text-sm font-black text-slate-900 mb-4 uppercase tracking-wide">
                      Presupuesto máximo (opcional)
                    </label>
                    <div className="relative">
                      <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 font-bold">€</span>
                      <input
                        type="number"
                        id="presupuesto-max"
                        min="0"
                        placeholder="Ej: 500"
                        className="w-full pl-10 pr-4 py-3 rounded-xl border-2 border-slate-300 focus:border-primary focus:ring-4 focus:ring-primary/20 text-slate-900 font-semibold transition-all"
                      />
                    </div>
                    <p className="text-xs text-slate-500 mt-2">
                      Si tienes un presupuesto máximo, lo ajustaremos automáticamente
                    </p>
                  </div>

                  {/* Tip Premium */}
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-gradient-to-br from-primary/15 via-primary/10 to-[#F7931E]/10 rounded-2xl p-5 border-2 border-primary/30 shadow-lg"
                  >
                    <div className="flex items-start gap-3">
                      <span className="material-symbols-outlined text-primary text-2xl">lightbulb</span>
                      <p className="text-sm font-bold text-slate-800 leading-relaxed flex-1">{getTip()}</p>
                    </div>
                  </motion.div>
                </form>
              </motion.div>
            </div>

            {/* Results Premium */}
            <div className="lg:col-span-3 space-y-6">
              {/* Total destacado premium */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="relative bg-gradient-to-br from-primary via-primary to-[#F7931E] rounded-3xl p-10 text-white text-center shadow-2xl shadow-primary/30 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0 animate-shimmer" />
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-white/30 to-transparent" />
                
                <p className="text-white/90 text-sm font-black uppercase tracking-wider mb-3">PRESUPUESTO TOTAL</p>
                <motion.div
                  key={totalViaje}
                  initial={{ scale: 1.2, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  className="text-7xl md:text-8xl font-black mb-3 drop-shadow-lg"
                >
                  {totalViaje.toFixed(0)}€
                </motion.div>
                <p className="text-white/90 text-base font-semibold mb-6">
                  {personas} {personas === 1 ? 'persona' : 'personas'} × {dias} {dias === 1 ? 'día' : 'días'}
                </p>
                <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-4 border border-white/30 shadow-lg">
                  <p className="text-white/95 text-base font-bold">
                    <span className="text-2xl">{totalPersonaDia.toFixed(0)}€</span> por persona al día
                  </p>
                </div>
              </motion.div>

              {/* Desglose Premium */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 border-2 border-slate-200/80 shadow-2xl"
              >
                <h3 className="text-2xl font-black text-slate-900 mb-6 flex items-center gap-3">
                  <span className="material-symbols-outlined text-primary text-2xl">pie_chart</span>
                  Desglose por persona/día
                </h3>

                <div className="space-y-4">
                  {[
                    { label: 'Alojamiento', value: budget.alojamiento, icon: 'hotel', color: 'from-blue-500 to-blue-600' },
                    { label: 'Desayuno', value: budget.desayuno, icon: 'coffee', color: 'from-amber-500 to-amber-600' },
                    { label: 'Almuerzo', value: budget.almuerzo, icon: 'lunch_dining', color: 'from-green-500 to-green-600' },
                    { label: 'Cena', value: budget.cena, icon: 'restaurant', color: 'from-purple-500 to-purple-600' },
                    { label: 'Transporte', value: budget.transporte, icon: 'directions_subway', color: 'from-red-500 to-red-600' },
                    { label: 'Actividades', value: budget.actividades, icon: 'tour', color: 'from-orange-500 to-orange-600' },
                    { label: 'Extras', value: budget.extras, icon: 'shopping_bag', color: 'from-pink-500 to-pink-600' },
                  ].map((item, i) => {
                    const percentage = (item.value / totalDia) * 100;
                    return (
                      <motion.div
                        key={item.label}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.05 }}
                        className="group"
                      >
                        <div className="flex items-center justify-between mb-2">
                          <div className="flex items-center gap-3">
                            <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform`}>
                              <span className="material-symbols-outlined text-white text-lg">{item.icon}</span>
                            </div>
                            <span className="text-base font-bold text-slate-800">{item.label}</span>
                          </div>
                          <span className="font-black text-xl text-slate-900">{item.value}€</span>
                        </div>
                        <div className="w-full bg-slate-100 rounded-full h-3 overflow-hidden shadow-inner">
                          <motion.div
                            className={`bg-gradient-to-r ${item.color} h-3 rounded-full shadow-lg`}
                            initial={{ width: 0 }}
                            whileInView={{ width: `${percentage}%` }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: i * 0.1 }}
                          />
                        </div>
                      </motion.div>
                    );
                  })}
                </div>

                <div className="mt-8 pt-6 border-t-2 border-slate-200">
                  <div className="flex items-center justify-between">
                    <span className="font-black text-lg text-slate-900 uppercase tracking-wide">TOTAL POR DÍA</span>
                    <span className="text-4xl font-black bg-gradient-to-r from-primary to-[#F7931E] bg-clip-text text-transparent">
                      {totalPersonaDia}€
                    </span>
                  </div>
                </div>
              </motion.div>

              {/* Qué incluye cada presupuesto Premium */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 border-2 border-slate-200/80 shadow-2xl"
              >
                <h3 className="text-xl font-black text-slate-900 mb-6 flex items-center gap-3">
                  <span className="text-3xl">{budget.emoji}</span>
                  <span>¿Qué incluye el presupuesto {budget.nombre}?</span>
                </h3>

                {tipo === 'low' && (
                  <ul className="space-y-3 text-base text-slate-700">
                    {[
                      { text: 'Hostels en habitación compartida (18-25€/noche)', icon: '🏠' },
                      { text: 'Tascas locales con menú del día (7-10€)', icon: '🍽️' },
                      { text: 'Metro/tranvía con pase de 24h (6.80€)', icon: '🚇' },
                      { text: 'Free tours y monumentos gratuitos', icon: '🎯' },
                    ].map((item, i) => (
                      <motion.li
                        key={i}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 }}
                        className="flex items-start gap-3"
                      >
                        <span className="text-2xl">{item.icon}</span>
                        <span className="font-semibold pt-1">{item.text}</span>
                      </motion.li>
                    ))}
                  </ul>
                )}

                {tipo === 'mid' && (
                  <ul className="space-y-3 text-base text-slate-700">
                    {[
                      { text: 'Hoteles 3⭐ céntricos (50-70€/noche)', icon: '🏨' },
                      { text: 'Restaurantes normales locales (15-20€/comida)', icon: '🍷' },
                      { text: 'Mix transporte: metro + Uber ocasional', icon: '🚕' },
                      { text: 'Tours pagados (Sintra 49€, fado 65€)', icon: '🎭' },
                    ].map((item, i) => (
                      <motion.li
                        key={i}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 }}
                        className="flex items-start gap-3"
                      >
                        <span className="text-2xl">{item.icon}</span>
                        <span className="font-semibold pt-1">{item.text}</span>
                      </motion.li>
                    ))}
                  </ul>
                )}

                {tipo === 'high' && (
                  <ul className="space-y-3 text-base text-slate-700">
                    {[
                      { text: 'Hoteles 4-5⭐ boutique (100-150€/noche)', icon: '⭐' },
                      { text: 'Restaurantes gourmet y rooftops (30-50€/comida)', icon: '🍾' },
                      { text: 'Uber/taxis para todo, sin preocupaciones', icon: '🚗' },
                      { text: 'Tours privados y experiencias premium', icon: '👑' },
                    ].map((item, i) => (
                      <motion.li
                        key={i}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 }}
                        className="flex items-start gap-3"
                      >
                        <span className="text-2xl">{item.icon}</span>
                        <span className="font-semibold pt-1">{item.text}</span>
                      </motion.li>
                    ))}
                  </ul>
                )}
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Email Capture Premium */}
      <section className="relative py-24 md:py-32 bg-gradient-to-br from-primary via-primary to-[#F7931E] overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent animate-shimmer" />
        </div>

        <div className="relative max-w-4xl mx-auto px-4 text-center">
          {!emailCaptured ? (
            <>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="inline-block mb-8"
              >
                <div className="w-24 h-24 bg-white/20 backdrop-blur-sm rounded-3xl flex items-center justify-center mx-auto shadow-2xl border-2 border-white/30">
                  <span className="material-symbols-outlined text-white text-5xl">download</span>
                </div>
              </motion.div>
              
              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-4xl md:text-6xl font-black text-white mb-6"
              >
                📊 Recibe tu Presupuesto Detallado
              </motion.h2>
              
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-xl md:text-2xl text-white/95 mb-10 max-w-2xl mx-auto leading-relaxed"
              >
                Desglose completo + lista de restaurantes recomendados por rango de precio + cupón 20% en guías
              </motion.p>

              <motion.form
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                onSubmit={handleEmailSubmit}
                className="max-w-lg mx-auto space-y-4"
              >
                <div className="relative group">
                  <span className="absolute left-5 top-1/2 -translate-y-1/2 text-white/70 group-focus-within:text-white transition-colors">
                    <span className="material-symbols-outlined text-xl">person</span>
                  </span>
                  <input
                    type="text"
                    value={nombre}
                    onChange={(e) => setNombre(e.target.value)}
                    placeholder="Tu nombre"
                    required
                    className="w-full pl-14 pr-5 py-5 rounded-2xl text-slate-900 font-bold text-lg focus:outline-none focus:ring-4 focus:ring-white/50 shadow-2xl border-2 border-white/30 bg-white"
                  />
                </div>
                
                <div className="relative group">
                  <span className="absolute left-5 top-1/2 -translate-y-1/2 text-white/70 group-focus-within:text-white transition-colors">
                    <span className="material-symbols-outlined text-xl">mail</span>
                  </span>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="tu@email.com"
                    required
                    className="w-full pl-14 pr-5 py-5 rounded-2xl text-slate-900 font-bold text-lg focus:outline-none focus:ring-4 focus:ring-white/50 shadow-2xl border-2 border-white/30 bg-white"
                  />
                </div>

                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  disabled={emailStatus === 'loading'}
                  className="w-full py-5 bg-white text-primary font-black text-lg rounded-2xl transition-all shadow-2xl disabled:opacity-70 disabled:hover:scale-100 border-2 border-white flex items-center justify-center gap-3"
                >
                  {emailStatus === 'loading' ? (
                    <span className="flex items-center gap-2">
                      <span className="material-symbols-outlined animate-spin text-2xl">sync</span>
                      Enviando presupuesto...
                    </span>
                  ) : (
                    <span className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-2xl">send</span>
                      Enviar presupuesto detallado
                      <span className="material-symbols-outlined text-xl">arrow_forward</span>
                    </span>
                  )}
                </motion.button>
                
                {emailError && (
                  <motion.p
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-white text-sm bg-red-500/30 px-4 py-3 rounded-xl border-2 border-red-300/50 backdrop-blur-sm"
                  >
                    {emailError}
                  </motion.p>
                )}
                
                <div className="pt-4 space-y-2">
                  <p className="text-white/90 text-sm font-semibold mb-3">Recibirás:</p>
                  <div className="space-y-2 text-left bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                    {[
                      '📊 Presupuesto completo con desglose detallado',
                      '🍽️ Lista de restaurantes por rango de precio',
                      '🏨 Recomendaciones de alojamiento',
                      '🎁 Cupón 20% OFF en guías premium',
                    ].map((item, i) => (
                      <div key={i} className="flex items-start gap-3 text-white/95 text-sm">
                        <span className="material-symbols-outlined text-green-400 text-lg mt-0.5">check_circle</span>
                        <span className="font-medium">{item}</span>
                      </div>
                    ))}
                  </div>
                  <p className="text-white/70 text-xs mt-4 text-center">
                    ✅ Sin spam · ✅ 100% gratis · ✅ Envío inmediato
                  </p>
                </div>
              </motion.form>
            </>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: 'spring', stiffness: 200 }}
                className="w-24 h-24 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-8 shadow-2xl"
              >
                <span className="material-symbols-outlined text-white text-6xl">check_circle</span>
              </motion.div>
              <h3 className="text-4xl font-black text-white mb-4">
                ¡Presupuesto enviado! 📧
              </h3>
              <p className="text-xl text-white/95 mb-4">
                ¡Perfecto, <strong>{nombre}</strong>! Tu presupuesto de <strong className="text-2xl">{totalViaje}€</strong> para {dias} {dias === 1 ? 'día' : 'días'} está en tu email.
              </p>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 mb-10 max-w-md mx-auto">
                <p className="text-white/90 text-base mb-3 font-semibold">📧 Revisa tu bandeja de entrada:</p>
                <div className="space-y-2 text-sm text-white/90 text-left">
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-green-400">check_circle</span>
                    <span>Presupuesto completo con desglose</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-green-400">check_circle</span>
                    <span>Lista de restaurantes por precio</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-green-400">check_circle</span>
                    <span>Cupón 20% OFF: <strong>PRESUPUESTO20</strong></span>
                  </div>
                </div>
              </div>
              <Link
                href="/itinerarios"
                className="inline-flex items-center gap-3 px-10 py-5 bg-white text-primary font-black text-lg rounded-2xl hover:scale-105 transition-all shadow-2xl"
              >
                <span className="material-symbols-outlined text-2xl">map</span>
                Ver Guías Premium
              </Link>
            </motion.div>
          )}
        </div>
      </section>

      {/* Tips Section Premium */}
      <section className="relative py-24 md:py-32 bg-gradient-to-b from-white via-slate-50/50 to-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-black text-slate-900 mb-12 text-center"
          >
            💡 Cómo ahorrar en Lisboa
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
            {[
              {
                icon: 'savings',
                title: 'Alojamiento',
                tips: [
                  'Reserva con 2+ meses: ahorra 30-40%',
                  'Parque das Nações: 40% más barato que Baixa',
                  'Lunes-jueves: 20% menos que fin de semana',
                ],
                color: 'from-blue-500 to-blue-600',
              },
              {
                icon: 'restaurant',
                title: 'Comida',
                tips: [
                  'Menú del día (12:00-14:00): 7-10€ completo',
                  'Mercados: Ribeira, Campo de Ourique',
                  'Evita Baixa turística: +30% más caro',
                ],
                color: 'from-green-500 to-green-600',
              },
              {
                icon: 'directions_subway',
                title: 'Transporte',
                tips: [
                  'Pase 24h (6.80€) vs 5 viajes sueltos (8.25€)',
                  'Camina centro histórico (gratis + ejercicio)',
                  'Uber split con otros viajeros',
                ],
                color: 'from-purple-500 to-purple-600',
              },
              {
                icon: 'tour',
                title: 'Actividades',
                tips: [
                  'Free tours (propina 10-15€ vs 25€ pagados)',
                  'Museos gratis: domingos 10:00-14:00',
                  'Miradores: 100% gratis y espectaculares',
                ],
                color: 'from-orange-500 to-orange-600',
              },
            ].map((category, i) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 border-2 border-slate-200/80 shadow-xl hover:shadow-2xl transition-all hover:scale-[1.02]"
              >
                <div className={`w-14 h-14 bg-gradient-to-br ${category.color} rounded-2xl flex items-center justify-center mb-6 shadow-lg`}>
                  <span className="material-symbols-outlined text-white text-3xl">{category.icon}</span>
                </div>
                <h3 className="font-black text-xl text-slate-900 mb-4">{category.title}</h3>
                <ul className="space-y-3 text-base text-slate-700">
                  {category.tips.map((tip, j) => (
                    <li key={j} className="flex items-start gap-3">
                      <span className="text-primary font-black mt-1">•</span>
                      <span className="font-semibold leading-relaxed">{tip}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-12 text-center"
          >
            <Link
              href="/itinerarios"
              className="inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-primary to-[#F7931E] hover:from-primary-dark hover:to-[#E55A28] text-white font-black text-lg rounded-2xl transition-all hover:scale-105 shadow-2xl shadow-primary/30"
            >
              <span className="material-symbols-outlined text-2xl">explore</span>
              Ver Guías Auténticas
            </Link>
          </motion.div>
        </div>
      </section>

      {/* FAQ Premium */}
      <section className="relative py-24 md:py-32 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-black text-slate-900 mb-12 text-center"
          >
            Preguntas frecuentes sobre presupuesto en Lisboa
          </motion.h2>
          <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
            {faqItems.map((item, i) => (
              <motion.div
                key={item.question}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 border-2 border-slate-200/80 shadow-xl hover:shadow-2xl transition-all"
              >
                <h3 className="font-black text-xl text-slate-900 mb-4 flex items-start gap-3">
                  <span className="material-symbols-outlined text-primary text-2xl mt-1">help</span>
                  {item.question}
                </h3>
                <p className="text-base text-slate-700 font-medium leading-relaxed">{item.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final Premium */}
      <section className="relative py-24 md:py-32 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#F7931E]/20 rounded-full blur-3xl"></div>
        </div>
        <div className="relative max-w-5xl mx-auto px-4 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-black text-white mb-6"
          >
            ¿Listo para planificar tu viaje?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl md:text-2xl text-white/90 mb-10 max-w-3xl mx-auto leading-relaxed"
          >
            Nuestras guías incluyen presupuesto día a día + restaurantes por rango de precio + trucos para ahorrar
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <Link
              href="/itinerarios"
              className="inline-flex items-center gap-4 px-12 py-6 bg-gradient-to-r from-primary to-[#F7931E] hover:from-primary-dark hover:to-[#E55A28] text-white font-black text-xl rounded-2xl shadow-2xl hover:shadow-primary/50 hover:scale-105 transition-all"
            >
              <span className="material-symbols-outlined text-3xl">explore</span>
              Ver Guías desde 1.99€
              <span className="material-symbols-outlined text-3xl">arrow_forward</span>
            </Link>
          </motion.div>
        </div>
      </section>
      
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
    </main>
  );
}
