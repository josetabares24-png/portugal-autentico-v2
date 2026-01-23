'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

type BudgetType = 'low' | 'mid' | 'high';

const BUDGET_OPTIONS: Array<{ id: BudgetType; label: string; desc: string; icon: string }> = [
  { id: 'low', label: 'Mochilero', desc: 'Hostales y tascas locales', icon: '🏠' },
  { id: 'mid', label: 'Medio', desc: 'Hoteles céntricos y restaurantes locales', icon: '✨' },
  { id: 'high', label: 'Confort', desc: 'Hoteles boutique y restaurantes gourmet', icon: '👑' },
];

// Mapeo de días a guías premium
const getRecommendedGuide = (dias: number): { slug: string; price: string; name: string } => {
  if (dias === 1) {
    return { slug: 'lisboa-1-dia-lo-esencial', price: '1.99', name: 'Guía Lisboa Express: Lo Mejor en 1 Día' };
  }
  if (dias === 2) {
    return { slug: 'lisboa-2-dias-completo', price: '2.99', name: 'Guía Lisboa Fin de Semana: 2 Días Perfectos' };
  }
  if (dias === 3) {
    return { slug: 'lisboa-3-dias-premium', price: '3.99', name: 'Guía Lisboa + Sintra: 3 Días de Experiencia Completa' };
  }
  if (dias >= 7) {
    return { slug: 'lisboa-full-week', price: '5.99', name: 'Guía Lisboa 7 Días: Semana Completa + Alrededores' };
  }
  // Default para 4-6 días
  return { slug: 'lisboa-2-dias-completo', price: '2.99', name: 'Guía Lisboa Fin de Semana: 2 Días Perfectos' };
};

export default function PresupuestoPage() {
  const [tipo, setTipo] = useState<BudgetType>('mid');
  const [dias, setDias] = useState(3);
  const [personas, setPersonas] = useState(2);
  const [email, setEmail] = useState('');
  const [nombre, setNombre] = useState('');
  const [emailStatus, setEmailStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [emailError, setEmailError] = useState<string | null>(null);

  // Calcular presupuesto
  const budgets = {
    low: { alojamiento: 20, comida: 25, transporte: 7, actividades: 10 },
    mid: { alojamiento: 60, comida: 40, transporte: 7, actividades: 25 },
    high: { alojamiento: 120, comida: 80, transporte: 15, actividades: 50 },
  };

  const budget = budgets[tipo];
  const totalPersonaDia = Object.values(budget).reduce((a, b) => a + b, 0);
  const totalViaje = totalPersonaDia * dias * personas;

  const desglose = [
    { label: 'Alojamiento', value: budget.alojamiento, icon: '🏨' },
    { label: 'Comida', value: budget.comida, icon: '🍽️' },
    { label: 'Transporte', value: budget.transporte, icon: '🚇' },
    { label: 'Actividades', value: budget.actividades, icon: '🎯' },
  ];

  const recommendedGuide = getRecommendedGuide(dias);

  const handleEmailSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!nombre || !email) {
      setEmailError('Completa todos los campos.');
      setEmailStatus('error');
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setEmailError('Email no válido.');
      setEmailStatus('error');
      return;
    }

    setEmailStatus('loading');
    setEmailError(null);

    try {
      const response = await fetch('/api/presupuesto', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
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
        setEmailError(data.error || 'Error al enviar. Inténtalo de nuevo.');
        return;
      }

      setEmailStatus('success');
    } catch (error) {
      setEmailStatus('error');
      setEmailError('Error de conexión. Por favor, intenta de nuevo.');
    }
  };

  return (
    <main className="min-h-screen bg-[#FFFDF7] relative overflow-hidden">
      {/* Fondo con textura sutil */}
      <div className="fixed inset-0 opacity-[0.02] pointer-events-none">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-serif italic text-slate-900 mb-4 tracking-tight">
            Calculadora de Presupuesto Lisboa
          </h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Calcula tu presupuesto de viaje a Lisboa con precios reales y actualizados
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Calculadora Principal */}
          <div className="lg:col-span-2 space-y-8">
            {/* Tipo de Presupuesto */}
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-4">
                Tipo de presupuesto
              </label>
              <div className="grid grid-cols-3 gap-4">
                {BUDGET_OPTIONS.map((opt) => (
                  <motion.button
                    key={opt.id}
                    type="button"
                    whileHover={{ scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => setTipo(opt.id)}
                    className={`p-5 rounded-xl border-2 transition-all text-center ${
                      tipo === opt.id
                        ? 'border-[#FF6B35] bg-[#FFF8F6] shadow-lg'
                        : 'border-slate-200 bg-white hover:border-slate-300'
                    }`}
                  >
                    <div className="text-3xl mb-2">{opt.icon}</div>
                    <div className="font-bold text-sm mb-1">{opt.label}</div>
                    <div className="text-xs text-slate-600">{opt.desc}</div>
                  </motion.button>
                ))}
              </div>
            </div>

            {/* Slider de Días */}
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-4">
                Días en Lisboa: <span className="text-[#FF6B35] font-bold text-lg">{dias}</span>
              </label>
              <input
                type="range"
                min="1"
                max="14"
                value={dias}
                onChange={(e) => setDias(Number(e.target.value))}
                className="w-full h-3 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#FF6B35]"
                style={{
                  background: `linear-gradient(to right, #FF6B35 0%, #FF6B35 ${((dias - 1) / 13) * 100}%, #e2e8f0 ${((dias - 1) / 13) * 100}%, #e2e8f0 100%)`
                }}
              />
              <div className="flex justify-between text-xs text-slate-500 mt-2">
                <span>1 día</span>
                <span>14 días</span>
              </div>
            </div>

            {/* Slider de Personas */}
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-4">
                Número de personas: <span className="text-[#FF6B35] font-bold text-lg">{personas}</span>
              </label>
              <input
                type="range"
                min="1"
                max="10"
                value={personas}
                onChange={(e) => setPersonas(Number(e.target.value))}
                className="w-full h-3 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#FF6B35]"
                style={{
                  background: `linear-gradient(to right, #FF6B35 0%, #FF6B35 ${((personas - 1) / 9) * 100}%, #e2e8f0 ${((personas - 1) / 9) * 100}%, #e2e8f0 100%)`
                }}
              />
              <div className="flex justify-between text-xs text-slate-500 mt-2">
                <span>1 persona</span>
                <span>10 personas</span>
              </div>
            </div>

            {/* Resultados */}
            <motion.div
              key={totalViaje}
              initial={{ scale: 1.05 }}
              animate={{ scale: 1 }}
              className="bg-gradient-to-r from-[#FF6B35] to-[#F7931E] p-8 rounded-2xl text-white shadow-xl"
            >
              <p className="text-sm opacity-90 mb-2 uppercase tracking-wide">Presupuesto Total</p>
              <p className="text-5xl md:text-6xl font-bold mb-2">{totalViaje}€</p>
              <p className="text-lg opacity-90">
                {totalPersonaDia}€ por persona al día
              </p>
            </motion.div>

            {/* Desglose */}
            <div className="bg-white p-6 rounded-xl border-2 border-slate-200">
              <h3 className="font-bold text-lg text-slate-900 mb-4">Desglose por persona/día</h3>
              <div className="space-y-3">
                {desglose.map((item) => (
                  <div key={item.label} className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <span className="text-2xl">{item.icon}</span>
                      <span className="text-slate-700 font-medium">{item.label}</span>
                    </div>
                    <span className="text-slate-900 font-bold">{item.value}€</span>
                  </div>
                ))}
                <div className="pt-3 border-t-2 border-slate-200 flex items-center justify-between">
                  <span className="text-slate-900 font-bold">Total por día</span>
                  <span className="text-[#FF6B35] font-bold text-xl">{totalPersonaDia}€</span>
                </div>
              </div>
            </div>

            {/* Email Capture */}
            {emailStatus !== 'success' ? (
              <form onSubmit={handleEmailSubmit} className="space-y-4">
                <div className="bg-white p-6 rounded-xl border-2 border-slate-200">
                  <h3 className="font-bold text-lg text-slate-900 mb-4">📧 Enviar presupuesto por email</h3>
                  <div className="space-y-4">
                    <input
                      type="text"
                      placeholder="Tu nombre"
                      value={nombre}
                      onChange={(e) => setNombre(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl border-2 border-slate-200 bg-white focus:border-[#FF6B35] focus:ring-4 focus:ring-[#FF6B35]/10 outline-none transition-all"
                      required
                    />
                    <input
                      type="email"
                      placeholder="tu@email.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl border-2 border-slate-200 bg-white focus:border-[#FF6B35] focus:ring-4 focus:ring-[#FF6B35]/10 outline-none transition-all"
                      required
                    />
                    {emailError && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="p-3 bg-red-50 border-2 border-red-200 rounded-xl text-red-700 text-sm"
                      >
                        {emailError}
                      </motion.div>
                    )}
                    <motion.button
                      type="submit"
                      disabled={emailStatus === 'loading'}
                      whileHover={{ scale: emailStatus === 'loading' ? 1 : 1.02 }}
                      whileTap={{ scale: emailStatus === 'loading' ? 1 : 0.98 }}
                      className="w-full py-4 bg-slate-900 text-white rounded-xl font-bold hover:bg-slate-800 transition-all shadow-lg disabled:opacity-70"
                    >
                      {emailStatus === 'loading' ? (
                        <span className="flex items-center justify-center gap-2">
                          <span className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                          Enviando...
                        </span>
                      ) : (
                        '📧 Enviar presupuesto por email (gratis)'
                      )}
                    </motion.button>
                  </div>
                </div>
              </form>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="p-8 bg-green-50 border-2 border-green-200 rounded-2xl text-center"
              >
                <div className="text-4xl mb-4">✅</div>
                <h3 className="text-xl font-bold text-green-800 mb-2">¡Email enviado!</h3>
                <p className="text-green-700">
                  Revisa tu email. Tu presupuesto detallado está en camino.
                </p>
              </motion.div>
            )}

            {/* Upsell a Guías Premium */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="p-6 bg-blue-50 rounded-xl border-2 border-blue-200"
            >
              <p className="text-sm text-blue-900 mb-2">
                💡 <strong>¿Quieres un itinerario completo?</strong>
              </p>
              <p className="text-xs text-blue-700 mb-4">
                Nuestra guía de {dias} {dias === 1 ? 'día' : 'días'} incluye restaurantes con precios reales, 
                rutas optimizadas y tips locales. Ahorra tiempo y dinero.
              </p>
              <Link
                href={`/itinerarios/${recommendedGuide.slug}`}
                className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 hover:text-blue-700 hover:underline"
              >
                Ver {recommendedGuide.name} ({recommendedGuide.price}€) →
              </Link>
            </motion.div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="sticky top-8 bg-slate-50 p-6 rounded-2xl border border-slate-200 shadow-lg"
            >
              <h4 className="font-bold text-lg mb-4 text-slate-900">
                💡 Tips de Ahorro
              </h4>
              <ul className="space-y-3 text-sm text-slate-700 mb-6">
                <li className="flex items-start gap-2">
                  <span className="text-[#FF6B35]">✓</span>
                  <span>Compra entradas online para evitar colas</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#FF6B35]">✓</span>
                  <span>Usa transporte público (muy económico)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#FF6B35]">✓</span>
                  <span>Come en tascas locales (mejor precio/calidad)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#FF6B35]">✓</span>
                  <span>Evita restaurantes turísticos en Baixa</span>
                </li>
              </ul>

              <div className="pt-4 border-t border-slate-200">
                <p className="text-xs text-slate-500 italic">
                  "No vendemos tours, diseñamos memorias que duran toda la vida."
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </main>
  );
}
