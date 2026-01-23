'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

type BudgetStyle = 'smart' | 'premium' | 'luxury';
type TravelPace = 'relajado' | 'intenso';
type Accommodation = 'boutique' | 'lujo' | 'local';

interface FormData {
  // Bloque 1: Logística
  fechaInicio?: string;
  fechaFin?: string;
  personas: number;
  ritmo?: TravelPace;
  
  // Bloque 2: Estilo
  presupuesto?: BudgetStyle;
  alojamiento?: Accommodation;
  presupuestoNoche?: number;
  
  // Bloque 3: Alma
  intereses: string[];
  nombre?: string;
  email?: string;
}

const BUDGET_OPTIONS: Array<{ id: BudgetStyle; label: string; desc: string; icon: string; color: string }> = [
  { id: 'smart', label: 'Smart & Local', desc: 'Hostales boutique y tabernas secretas', icon: '🏠', color: 'from-slate-600 to-slate-700' },
  { id: 'premium', label: 'Premium Experience', desc: 'Hoteles 4/5* y experiencias exclusivas', icon: '✨', color: 'from-amber-600 to-amber-700' },
  { id: 'luxury', label: 'Ultra-Luxury', desc: 'Palacios, transfers privados y Michelin', icon: '👑', color: 'from-[#FF6B35] to-[#F7931E]' },
];

const ACCOMMODATION_OPTIONS: Array<{ id: Accommodation; label: string; desc: string; icon: string }> = [
  { id: 'boutique', label: 'Boutique', desc: 'Hoteles con carácter y diseño único', icon: '🏛️' },
  { id: 'lujo', label: 'Lujo', desc: '5 estrellas con todas las comodidades', icon: '⭐' },
  { id: 'local', label: 'Local Auténtico', desc: 'Casas de locales y guesthouses', icon: '🏡' },
];

const INTERESTS = [
  { id: 'gastronomia', label: 'Gastronomía', icon: '🍷' },
  { id: 'historia', label: 'Historia Oculta', icon: '🏛️' },
  { id: 'naturaleza', label: 'Naturaleza Salvaje', icon: '🌊' },
  { id: 'cultura', label: 'Cultura Local', icon: '🎭' },
  { id: 'fiesta', label: 'Vida Nocturna', icon: '🎉' },
  { id: 'fotografia', label: 'Fotografía', icon: '📸' },
];

export default function PresupuestoPage() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<FormData>({
    personas: 2,
    intereses: [],
  });
  const [emailStatus, setEmailStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [emailError, setEmailError] = useState<string | null>(null);

  const handleInterestToggle = (interestId: string) => {
    setFormData(prev => ({
      ...prev,
      intereses: prev.intereses.includes(interestId)
        ? prev.intereses.filter(id => id !== interestId)
        : [...prev.intereses, interestId],
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.nombre || !formData.email) {
      setEmailError('Completa todos los campos.');
      setEmailStatus('error');
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email!)) {
      setEmailError('Email no válido.');
      setEmailStatus('error');
      return;
    }

    setEmailStatus('loading');
    setEmailError(null);

    // Calcular presupuesto estimado
    const budgetMap = {
      smart: { alojamiento: 20, comida: 25, transporte: 7, actividades: 10 },
      premium: { alojamiento: 60, comida: 40, transporte: 7, actividades: 25 },
      luxury: { alojamiento: 120, comida: 80, transporte: 15, actividades: 50 },
    };

    const selectedBudget = budgetMap[formData.presupuesto || 'premium'];
    const dias = formData.fechaInicio && formData.fechaFin
      ? Math.ceil((new Date(formData.fechaFin).getTime() - new Date(formData.fechaInicio).getTime()) / (1000 * 60 * 60 * 24))
      : 3;

    const totalPersonaDia = Object.values(selectedBudget).reduce((a, b) => a + b, 0);
    const totalViaje = totalPersonaDia * dias * formData.personas;

    const desglose = [
      { label: 'Alojamiento', value: selectedBudget.alojamiento, icon: '🏨' },
      { label: 'Comida', value: selectedBudget.comida, icon: '🍽️' },
      { label: 'Transporte', value: selectedBudget.transporte, icon: '🚇' },
      { label: 'Actividades', value: selectedBudget.actividades, icon: '🎯' },
    ];

    try {
      const response = await fetch('/api/presupuesto', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email: formData.email,
          nombre: formData.nombre,
          tipo: formData.presupuesto || 'premium',
          dias,
          personas: formData.personas,
          totalViaje,
          totalPersonaDia,
          desglose,
          presupuesto: formData.presupuesto,
          alojamiento: formData.alojamiento,
          ritmo: formData.ritmo,
          intereses: formData.intereses,
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
      {/* Fondo con textura de azulejos portugueses */}
      <div className="fixed inset-0 opacity-[0.02] pointer-events-none">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-serif italic text-slate-900 mb-4 tracking-tight">
            Diseñemos tu viaje perfecto
          </h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Cuéntame cómo imaginas Portugal y crearé una propuesta a medida que supere tus expectativas.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Formulario Principal */}
          <div className="lg:col-span-2">
            <form onSubmit={handleSubmit}>
              {/* Indicador de progreso */}
              <div className="mb-8">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm font-semibold text-slate-500">
                    Paso {step} de 3
                  </span>
                  <span className="text-sm font-semibold text-slate-500">
                    {Math.round((step / 3) * 100)}%
                  </span>
                </div>
                <div className="h-1.5 bg-slate-100 rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-gradient-to-r from-[#FF6B35] to-[#F7931E] rounded-full"
                    initial={{ width: 0 }}
                    animate={{ width: `${(step / 3) * 100}%` }}
                    transition={{ duration: 0.3 }}
                  />
                </div>
              </div>

              <AnimatePresence mode="wait">
                {/* BLOQUE 1: La Logística */}
                {step === 1 && (
                  <motion.div
                    key="step1"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                    className="space-y-8"
                  >
                    <div>
                      <h2 className="text-2xl font-bold text-slate-900 mb-2">1. La Logística</h2>
                      <p className="text-slate-600 mb-6">Cuándo y quiénes viajan</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-semibold text-slate-700 mb-2">
                          Fecha de inicio
                        </label>
                        <input
                          type="date"
                          value={formData.fechaInicio || ''}
                          onChange={(e) => setFormData({ ...formData, fechaInicio: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl border-2 border-slate-200 bg-white focus:border-[#FF6B35] focus:ring-4 focus:ring-[#FF6B35]/10 outline-none transition-all"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-slate-700 mb-2">
                          Fecha de fin
                        </label>
                        <input
                          type="date"
                          value={formData.fechaFin || ''}
                          onChange={(e) => setFormData({ ...formData, fechaFin: e.target.value })}
                          min={formData.fechaInicio}
                          className="w-full px-4 py-3 rounded-xl border-2 border-slate-200 bg-white focus:border-[#FF6B35] focus:ring-4 focus:ring-[#FF6B35]/10 outline-none transition-all"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-slate-700 mb-2">
                        Número de viajeros
                      </label>
                      <div className="flex items-center gap-4">
                        <input
                          type="number"
                          min="1"
                          max="20"
                          value={formData.personas}
                          onChange={(e) => setFormData({ ...formData, personas: Math.max(1, parseInt(e.target.value) || 1) })}
                          className="w-24 px-4 py-3 rounded-xl border-2 border-slate-200 bg-white text-center font-bold text-lg focus:border-[#FF6B35] focus:ring-4 focus:ring-[#FF6B35]/10 outline-none transition-all"
                        />
                        <span className="text-slate-600 font-medium">personas</span>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-slate-700 mb-4">
                        Ritmo de viaje
                      </label>
                      <div className="grid grid-cols-2 gap-4">
                        {(['relajado', 'intenso'] as TravelPace[]).map((ritmo) => (
                          <motion.button
                            key={ritmo}
                            type="button"
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            onClick={() => setFormData({ ...formData, ritmo })}
                            className={`p-6 rounded-2xl border-2 transition-all text-left ${
                              formData.ritmo === ritmo
                                ? 'border-[#FF6B35] bg-[#FFF8F6] shadow-lg'
                                : 'border-slate-200 bg-white hover:border-slate-300'
                            }`}
                          >
                            <div className="text-2xl mb-2">{ritmo === 'relajado' ? '🌅' : '⚡'}</div>
                            <div className="font-bold text-lg capitalize">{ritmo}</div>
                            <div className="text-sm text-slate-600 mt-1">
                              {ritmo === 'relajado' ? 'Sin prisas, disfrutando cada momento' : 'Aprovechando al máximo cada día'}
                            </div>
                          </motion.button>
                        ))}
                      </div>
                    </div>

                    <motion.button
                      type="button"
                      onClick={() => setStep(2)}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full py-4 bg-slate-900 text-white rounded-xl font-bold hover:bg-slate-800 transition-all shadow-lg"
                    >
                      Continuar →
                    </motion.button>
                  </motion.div>
                )}

                {/* BLOQUE 2: El Estilo */}
                {step === 2 && (
                  <motion.div
                    key="step2"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                    className="space-y-8"
                  >
                    <div>
                      <h2 className="text-2xl font-bold text-slate-900 mb-2">2. El Estilo</h2>
                      <p className="text-slate-600 mb-6">Cómo quieres vivir Portugal</p>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-slate-700 mb-4">
                        Presupuesto estimado
                      </label>
                      <div className="space-y-4">
                        {BUDGET_OPTIONS.map((opt) => (
                          <motion.button
                            key={opt.id}
                            type="button"
                            whileHover={{ scale: 1.01, y: -2 }}
                            whileTap={{ scale: 0.99 }}
                            onClick={() => setFormData({ ...formData, presupuesto: opt.id })}
                            className={`w-full p-6 rounded-2xl border-2 transition-all text-left ${
                              formData.presupuesto === opt.id
                                ? 'border-[#FF6B35] bg-[#FFF8F6] shadow-lg'
                                : 'border-slate-200 bg-white hover:border-slate-300'
                            }`}
                          >
                            <div className="flex justify-between items-center">
                              <div className="flex-1">
                                <div className="flex items-center gap-3 mb-2">
                                  <span className="text-3xl">{opt.icon}</span>
                                  <p className="font-bold text-xl">{opt.label}</p>
                                </div>
                                <p className="text-sm text-slate-600">{opt.desc}</p>
                              </div>
                              {formData.presupuesto === opt.id && (
                                <motion.div
                                  initial={{ scale: 0 }}
                                  animate={{ scale: 1 }}
                                  className="w-6 h-6 rounded-full bg-[#FF6B35] flex items-center justify-center"
                                >
                                  <span className="text-white text-xs">✓</span>
                                </motion.div>
                              )}
                            </div>
                          </motion.button>
                        ))}
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-slate-700 mb-4">
                        Tipo de alojamiento
                      </label>
                      <div className="grid grid-cols-3 gap-4">
                        {ACCOMMODATION_OPTIONS.map((opt) => (
                          <motion.button
                            key={opt.id}
                            type="button"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => setFormData({ ...formData, alojamiento: opt.id })}
                            className={`p-5 rounded-xl border-2 transition-all text-center ${
                              formData.alojamiento === opt.id
                                ? 'border-[#FF6B35] bg-[#FFF8F6] shadow-lg'
                                : 'border-slate-200 bg-white hover:border-slate-300'
                            }`}
                          >
                            <div className="text-3xl mb-2">{opt.icon}</div>
                            <div className="font-bold text-sm">{opt.label}</div>
                            <div className="text-xs text-slate-600 mt-1">{opt.desc}</div>
                          </motion.button>
                        ))}
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <motion.button
                        type="button"
                        onClick={() => setStep(1)}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="flex-1 py-4 bg-white border-2 border-slate-300 text-slate-700 rounded-xl font-bold hover:bg-slate-50 transition-all"
                      >
                        ← Atrás
                      </motion.button>
                      <motion.button
                        type="button"
                        onClick={() => setStep(3)}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="flex-1 py-4 bg-slate-900 text-white rounded-xl font-bold hover:bg-slate-800 transition-all shadow-lg"
                      >
                        Continuar →
                      </motion.button>
                    </div>
                  </motion.div>
                )}

                {/* BLOQUE 3: El Alma */}
                {step === 3 && (
                  <motion.div
                    key="step3"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                    className="space-y-8"
                  >
                    <div>
                      <h2 className="text-2xl font-bold text-slate-900 mb-2">3. El Alma</h2>
                      <p className="text-slate-600 mb-6">Qué te emociona de Portugal</p>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-slate-700 mb-4">
                        Intereses (selecciona todos los que apliquen)
                      </label>
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                        {INTERESTS.map((interest) => (
                          <motion.button
                            key={interest.id}
                            type="button"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => handleInterestToggle(interest.id)}
                            className={`p-4 rounded-xl border-2 transition-all text-center ${
                              formData.intereses.includes(interest.id)
                                ? 'border-[#FF6B35] bg-[#FFF8F6] shadow-lg'
                                : 'border-slate-200 bg-white hover:border-slate-300'
                            }`}
                          >
                            <div className="text-2xl mb-2">{interest.icon}</div>
                            <div className="font-semibold text-sm">{interest.label}</div>
                            {formData.intereses.includes(interest.id) && (
                              <motion.div
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                className="mt-2 text-[#FF6B35] text-xs font-bold"
                              >
                                ✓ Seleccionado
                              </motion.div>
                            )}
                          </motion.button>
                        ))}
                      </div>
                    </div>

                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-semibold text-slate-700 mb-2">
                          Tu nombre
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.nombre || ''}
                          onChange={(e) => setFormData({ ...formData, nombre: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl border-2 border-slate-200 bg-white focus:border-[#FF6B35] focus:ring-4 focus:ring-[#FF6B35]/10 outline-none transition-all"
                          placeholder="Ej: María"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-slate-700 mb-2">
                          Tu email
                        </label>
                        <input
                          type="email"
                          required
                          value={formData.email || ''}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl border-2 border-slate-200 bg-white focus:border-[#FF6B35] focus:ring-4 focus:ring-[#FF6B35]/10 outline-none transition-all"
                          placeholder="tu@email.com"
                        />
                      </div>
                    </div>

                    {emailError && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="p-4 bg-red-50 border-2 border-red-200 rounded-xl text-red-700 text-sm"
                      >
                        {emailError}
                      </motion.div>
                    )}

                    {emailStatus === 'success' ? (
                      <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="p-8 bg-green-50 border-2 border-green-200 rounded-2xl text-center"
                      >
                        <div className="text-4xl mb-4">✅</div>
                        <h3 className="text-xl font-bold text-green-800 mb-2">¡Propuesta enviada!</h3>
                        <p className="text-green-700">
                          Revisa tu email. Tu presupuesto personalizado está en camino.
                        </p>
                      </motion.div>
                    ) : (
                      <div className="flex gap-4">
                        <motion.button
                          type="button"
                          onClick={() => setStep(2)}
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          className="flex-1 py-4 bg-white border-2 border-slate-300 text-slate-700 rounded-xl font-bold hover:bg-slate-50 transition-all"
                        >
                          ← Atrás
                        </motion.button>
                        <motion.button
                          type="submit"
                          disabled={emailStatus === 'loading'}
                          whileHover={{ scale: emailStatus === 'loading' ? 1 : 1.02 }}
                          whileTap={{ scale: emailStatus === 'loading' ? 1 : 0.98 }}
                          className="flex-1 py-4 bg-gradient-to-r from-[#FF6B35] to-[#F7931E] text-white rounded-xl font-bold hover:shadow-xl transition-all shadow-lg disabled:opacity-70"
                        >
                          {emailStatus === 'loading' ? (
                            <span className="flex items-center justify-center gap-2">
                              <span className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                              Enviando...
                            </span>
                          ) : (
                            'Solicitar mi propuesta de autor →'
                          )}
                        </motion.button>
                      </div>
                    )}
                  </motion.div>
                )}
              </AnimatePresence>
            </form>
          </div>

          {/* Sidebar de Valor */}
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="sticky top-8 bg-slate-50 p-8 rounded-3xl border border-slate-200 shadow-lg"
            >
              <h4 className="font-bold text-lg mb-6 flex items-center gap-2 text-slate-900">
                <span className="w-2 h-2 bg-[#FF6B35] rounded-full"></span>
                ¿Qué incluye tu propuesta?
              </h4>
              <ul className="space-y-4 text-sm text-slate-700 mb-8">
                <li className="flex items-start gap-3">
                  <span className="text-[#FF6B35] font-bold text-lg">✓</span>
                  <span>Itinerario día a día (mañana, tarde y noche)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#FF6B35] font-bold text-lg">✓</span>
                  <span>Reserva de restaurantes locales "no turísticos"</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#FF6B35] font-bold text-lg">✓</span>
                  <span>Logística de transporte optimizada</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#FF6B35] font-bold text-lg">✓</span>
                  <span>Asistencia vía WhatsApp durante el viaje</span>
                </li>
              </ul>

              {/* Social Proof */}
              <div className="pt-6 border-t border-slate-200">
                <p className="text-xs text-slate-500 italic mb-2">
                  "No vendemos tours, diseñamos memorias que duran toda la vida."
                </p>
                <p className="text-xs text-slate-400 mt-4">
                  <span className="font-semibold text-slate-600">4 itinerarios</span> diseñados esta semana para viajeros de México y España
                </p>
              </div>

              {/* Transparencia de Precio */}
              {formData.presupuesto && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="mt-6 pt-6 border-t border-slate-200"
                >
                  <p className="text-xs text-slate-500 mb-2">Fee de Diseño Local</p>
                  <p className="text-2xl font-bold text-slate-900">150€</p>
                  <p className="text-xs text-slate-400 mt-1">Incluye planificación completa y asistencia</p>
                </motion.div>
              )}
            </motion.div>
          </div>
        </div>
      </div>
    </main>
  );
}
