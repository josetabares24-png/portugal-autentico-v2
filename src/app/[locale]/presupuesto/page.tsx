'use client';

import { useState } from 'react';
import Link from 'next/link';
import { isFreeAccessActive } from '@/lib/guide-config';

type BudgetType = 'low' | 'mid' | 'high';

const BUDGET_OPTIONS: Array<{ id: BudgetType; label: string; desc: string }> = [
  { id: 'low', label: 'Mochilero', desc: 'Hostales y tascas locales' },
  { id: 'mid', label: 'Medio', desc: 'Hoteles céntricos y restaurantes' },
  { id: 'high', label: 'Confort', desc: 'Hoteles boutique y gourmet' },
];

const getRecommendedGuide = (dias: number): { slug: string; price: string; name: string } => {
  if (dias === 1) return { slug: 'lisboa-1-dia-lo-esencial', price: '1.99', name: 'Lisboa Express: 1 Día' };
  if (dias === 2) return { slug: 'lisboa-2-dias-completo', price: '2.99', name: 'Lisboa Fin de Semana: 2 Días' };
  if (dias === 3) return { slug: 'lisboa-3-dias-premium', price: '3.99', name: 'Lisboa + Sintra: 3 Días' };
  if (dias >= 7) return { slug: 'lisboa-full-week', price: '5.99', name: 'Lisboa 7 Días: Semana Completa' };
  return { slug: 'lisboa-2-dias-completo', price: '2.99', name: 'Lisboa Fin de Semana: 2 Días' };
};

export default function PresupuestoPage() {
  const [tipo, setTipo] = useState<BudgetType>('mid');
  const [dias, setDias] = useState(3);
  const [personas, setPersonas] = useState(2);
  const [email, setEmail] = useState('');
  const [nombre, setNombre] = useState('');
  const [emailStatus, setEmailStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [emailError, setEmailError] = useState<string | null>(null);

  const budgets: Record<BudgetType, { alojamiento: number; comida: number; transporte: number; actividades: number }> = {
    low:  { alojamiento: 20,  comida: 25, transporte: 7,  actividades: 10 },
    mid:  { alojamiento: 60,  comida: 40, transporte: 7,  actividades: 25 },
    high: { alojamiento: 120, comida: 80, transporte: 15, actividades: 50 },
  };

  const budget = budgets[tipo];
  const totalPersonaDia = Object.values(budget).reduce((a, b) => a + b, 0);
  const totalViaje = totalPersonaDia * dias * personas;
  const isFree = isFreeAccessActive();
  const recommendedGuide = getRecommendedGuide(dias);

  const desglose = [
    { label: 'Alojamiento', value: budget.alojamiento },
    { label: 'Comida', value: budget.comida },
    { label: 'Transporte', value: budget.transporte },
    { label: 'Actividades', value: budget.actividades },
  ];

  const handleEmailSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!nombre || !email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setEmailError('Introduce nombre y email válidos.');
      setEmailStatus('error');
      return;
    }
    setEmailStatus('loading');
    setEmailError(null);
    try {
      const response = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, name: nombre }),
      });
      const data = await response.json();
      if (!response.ok || !data.success) {
        setEmailStatus('error');
        setEmailError(data.error || 'Error al enviar. Inténtalo de nuevo.');
        return;
      }
      setEmailStatus('success');
    } catch {
      setEmailStatus('error');
      setEmailError('Error de conexión. Inténtalo de nuevo.');
    }
  };

  return (
    <main id="main-content">
      {/* Cabecera */}
      <section className="bg-background-light pt-20 pb-12 border-b border-border-soft">
        <div className="max-w-3xl mx-auto px-6">
          <p className="text-xs text-text-secondary uppercase tracking-widest mb-3">Planificación</p>
          <h1 className="font-display italic text-text-main text-4xl md:text-5xl leading-tight mb-3">
            Calculadora de presupuesto
          </h1>
          <p className="text-text-secondary">Precios reales y actualizados para tu viaje a Lisboa.</p>
        </div>
      </section>

      {/* Calculadora */}
      <section className="bg-background-light py-16">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid lg:grid-cols-[2fr,1fr] gap-12 items-start">
            {/* Main */}
            <div className="space-y-10">
              {/* Tipo */}
              <div>
                <p className="text-xs uppercase tracking-widest text-text-secondary mb-4">Tipo de viaje</p>
                <div className="grid grid-cols-3 gap-4">
                  {BUDGET_OPTIONS.map((opt) => (
                    <button
                      key={opt.id}
                      onClick={() => setTipo(opt.id)}
                      className={`py-4 px-3 border-t-2 text-left transition-colors ${
                        tipo === opt.id
                          ? 'border-primary'
                          : 'border-border-soft hover:border-text-secondary'
                      }`}
                    >
                      <p className="font-semibold text-text-main text-sm mb-1">{opt.label}</p>
                      <p className="text-text-secondary text-xs">{opt.desc}</p>
                    </button>
                  ))}
                </div>
              </div>

              {/* Días */}
              <div>
                <p className="text-xs uppercase tracking-widest text-text-secondary mb-3">
                  Días en Lisboa: <span className="text-primary font-bold">{dias}</span>
                </p>
                <input
                  type="range" min="1" max="14" value={dias}
                  onChange={(e) => setDias(Number(e.target.value))}
                  className="w-full h-1 appearance-none cursor-pointer accent-primary bg-border-soft"
                />
                <div className="flex justify-between text-xs text-text-secondary mt-1">
                  <span>1 día</span><span>14 días</span>
                </div>
              </div>

              {/* Personas */}
              <div>
                <p className="text-xs uppercase tracking-widest text-text-secondary mb-3">
                  Personas: <span className="text-primary font-bold">{personas}</span>
                </p>
                <input
                  type="range" min="1" max="10" value={personas}
                  onChange={(e) => setPersonas(Number(e.target.value))}
                  className="w-full h-1 appearance-none cursor-pointer accent-primary bg-border-soft"
                />
                <div className="flex justify-between text-xs text-text-secondary mt-1">
                  <span>1 persona</span><span>10 personas</span>
                </div>
              </div>

              {/* Total */}
              <div className="border-t-2 border-primary pt-6">
                <p className="text-xs uppercase tracking-widest text-text-secondary mb-1">Presupuesto total</p>
                <p className="text-5xl font-bold text-text-main mb-1">{totalViaje} €</p>
                <p className="text-text-secondary text-sm">{totalPersonaDia} € por persona al día</p>
              </div>

              {/* Desglose */}
              <div className="border-t border-border-soft pt-6">
                <p className="text-xs uppercase tracking-widest text-text-secondary mb-5">Desglose diario / persona</p>
                <div className="space-y-3">
                  {desglose.map((item) => (
                    <div key={item.label} className="flex items-center justify-between">
                      <span className="text-sm text-text-secondary">{item.label}</span>
                      <span className="font-semibold text-text-main text-sm">{item.value} €</span>
                    </div>
                  ))}
                  <div className="border-t border-border-soft pt-3 flex items-center justify-between">
                    <span className="font-semibold text-text-main text-sm">Total por día</span>
                    <span className="font-bold text-primary">{totalPersonaDia} €</span>
                  </div>
                </div>
              </div>

              {/* Email */}
              {emailStatus !== 'success' ? (
                <form onSubmit={handleEmailSubmit} className="border-t border-border-soft pt-6 space-y-3">
                  <p className="text-xs uppercase tracking-widest text-text-secondary mb-4">Recibir presupuesto por email</p>
                  <input
                    type="text" placeholder="Tu nombre" value={nombre}
                    onChange={(e) => setNombre(e.target.value)}
                    className="w-full px-4 py-3 border border-border-soft bg-white text-text-main focus:outline-none focus:border-text-secondary text-sm"
                    required
                  />
                  <input
                    type="email" placeholder="tu@email.com" value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-3 border border-border-soft bg-white text-text-main focus:outline-none focus:border-text-secondary text-sm"
                    required
                  />
                  {emailError && <p className="text-red-500 text-xs">{emailError}</p>}
                  <button
                    type="submit"
                    disabled={emailStatus === 'loading'}
                    className="w-full py-3 bg-[#1a2b4a] hover:bg-[#152239] text-white font-semibold text-sm transition-colors disabled:opacity-50"
                  >
                    {emailStatus === 'loading' ? 'Enviando…' : 'Enviar por email (gratis)'}
                  </button>
                </form>
              ) : (
                <div className="border-t border-border-soft pt-6">
                  <p className="font-display italic text-text-main">Email enviado.</p>
                  <p className="text-text-secondary text-sm mt-1">Tu presupuesto está en camino.</p>
                </div>
              )}

              {/* Upsell */}
              <div className="border-t border-border-soft pt-6">
                <p className="text-sm text-text-secondary mb-3">
                  ¿Quieres un itinerario completo para {dias} {dias === 1 ? 'día' : 'días'}?
                </p>
                <Link
                  href={`/itinerarios/${recommendedGuide.slug}`}
                  className="text-sm text-primary hover:underline underline-offset-2"
                >
                  {isFree
                    ? `Ver ${recommendedGuide.name} (Gratis) →`
                    : `Ver ${recommendedGuide.name} (${recommendedGuide.price} €) →`}
                </Link>
              </div>
            </div>

            {/* Sidebar tips */}
            <div className="border-t-2 border-primary pt-6 lg:sticky lg:top-24">
              <p className="text-xs uppercase tracking-widest text-text-secondary mb-5">Tips de ahorro</p>
              <ul className="space-y-4 text-sm text-text-secondary">
                {[
                  'Compra entradas online para evitar colas',
                  'Usa transporte público (muy económico)',
                  'Come en tascas locales (mejor precio-calidad)',
                  'Evita restaurantes turísticos en la Baixa',
                ].map((tip) => (
                  <li key={tip} className="flex items-start gap-2">
                    <span className="text-primary mt-0.5 flex-shrink-0">&#10003;</span>
                    <span>{tip}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
