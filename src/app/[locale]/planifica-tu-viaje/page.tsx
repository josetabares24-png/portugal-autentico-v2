'use client';

import { useState } from 'react';
import Link from 'next/link';
import { isFreeAccessActive } from '@/lib/guide-config';
import { guidePacks } from '@/data/guide-packs';
import { activities } from '@/data/activities';
import { ActivityCard } from '@/components/actividades/ActivityCard';

type BudgetType = 'low' | 'mid' | 'high';

const RECOMMENDED_ACTIVITY_SLUGS: Record<BudgetType, string[]> = {
  low: ['miradouro-santa-luzia', 'free-walking-tour-centro', 'tasca-tradicional'],
  mid: ['castelo-sao-jorge', 'tranvia-28', 'pasteis-de-belem'],
  high: ['sintra-dia-completo', 'crucero-atardecer-tajo', 'fado-en-alfama'],
};

const BUDGET_OPTIONS: Array<{ id: BudgetType; label: string; desc: string }> = [
  { id: 'low', label: 'Mochilero', desc: 'Hostales y tascas locales' },
  { id: 'mid', label: 'Medio', desc: 'Hoteles céntricos y restaurantes' },
  { id: 'high', label: 'Confort', desc: 'Hoteles boutique y gourmet' },
];

const BUDGETS: Record<BudgetType, { alojamiento: number; comida: number; transporte: number; actividades: number }> = {
  low: { alojamiento: 20, comida: 25, transporte: 7, actividades: 10 },
  mid: { alojamiento: 60, comida: 40, transporte: 7, actividades: 25 },
  high: { alojamiento: 120, comida: 80, transporte: 15, actividades: 50 },
};

function getRecommendedGuideSlug(dias: number): string {
  if (dias === 1) return 'lisboa-1-dia-lo-esencial';
  if (dias === 2) return 'lisboa-2-dias-completo';
  if (dias === 3) return 'lisboa-3-dias-premium';
  return 'lisboa-full-week';
}

const RITMOS = ['Relajado', 'Equilibrado', 'Intenso'];

export default function PlanificaTuViajePage() {
  const [tipo, setTipo] = useState<BudgetType>('mid');
  const [dias, setDias] = useState(3);
  const [personas, setPersonas] = useState(2);

  const budget = BUDGETS[tipo];
  const totalPersonaDia = Object.values(budget).reduce((a, b) => a + b, 0);
  const totalViaje = totalPersonaDia * dias * personas;
  const isFree = isFreeAccessActive();
  const recommendedSlug = getRecommendedGuideSlug(dias);
  const recommendedGuide = guidePacks[recommendedSlug];
  const recommendedActivities = RECOMMENDED_ACTIVITY_SLUGS[tipo]
    .map((slug) => activities.find((a) => a.slug === slug))
    .filter((a): a is NonNullable<typeof a> => Boolean(a));

  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    fechas: '',
    dias: '',
    personas: '',
    ritmo: '',
    presupuesto: '',
    intereses: '',
    comentarios: '',
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [error, setError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setStatus('loading');
    try {
      const response = await fetch('/api/planifica-tu-viaje', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      if (response.ok && data.success) {
        setStatus('success');
      } else {
        setStatus('error');
        setError(data.error || 'Error al enviar la solicitud. Inténtalo de nuevo.');
      }
    } catch {
      setStatus('error');
      setError('Error de conexión. Inténtalo de nuevo.');
    }
  };

  return (
    <main id="main-content">
      {/* Cabecera */}
      <section className="bg-background-light pt-20 pb-12 border-b border-border-soft">
        <div className="max-w-3xl mx-auto px-6">
          <p className="text-xs text-text-secondary uppercase tracking-widest mb-3">Planificación</p>
          <h1 className="font-display italic text-text-main text-4xl md:text-5xl leading-tight mb-3">
            Planifica tu viaje
          </h1>
          <p className="text-text-secondary">
            Recomendación al instante, o si tienes pocos días y quieres aprovecharlos al máximo, te preparo un plan a medida.
          </p>
        </div>
      </section>

      {/* Recomendación instantánea */}
      <section className="bg-background-light py-16 border-b border-border-soft">
        <div className="max-w-5xl mx-auto px-6">
          <p className="text-xs uppercase tracking-widest text-text-secondary mb-8 pb-3 border-b border-border-soft">
            Recomendación al instante
          </p>
          <div className="grid lg:grid-cols-[2fr,1fr] gap-12 items-start">
            <div className="space-y-10">
              <div>
                <p className="text-xs uppercase tracking-widest text-text-secondary mb-4">Tipo de viaje</p>
                <div className="grid grid-cols-3 gap-4">
                  {BUDGET_OPTIONS.map((opt) => (
                    <button
                      key={opt.id}
                      onClick={() => setTipo(opt.id)}
                      className={`py-4 px-3 border-t-2 text-left transition-colors ${
                        tipo === opt.id ? 'border-primary' : 'border-border-soft hover:border-text-secondary'
                      }`}
                    >
                      <p className="font-semibold text-text-main text-sm mb-1">{opt.label}</p>
                      <p className="text-text-secondary text-xs">{opt.desc}</p>
                    </button>
                  ))}
                </div>
              </div>

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

              <div className="border-t-2 border-primary pt-6">
                <p className="text-xs uppercase tracking-widest text-text-secondary mb-1">Presupuesto estimado</p>
                <p className="text-5xl font-bold text-text-main mb-1">{totalViaje} €</p>
                <p className="text-text-secondary text-sm">{totalPersonaDia} € por persona al día</p>
              </div>

              {recommendedGuide && (
                <div className="border-t border-border-soft pt-6">
                  <p className="text-sm text-text-secondary mb-3">
                    Ruta recomendada para {dias} {dias === 1 ? 'día' : 'días'}:
                  </p>
                  <Link
                    href={`/itinerarios/${recommendedGuide.slug}`}
                    className="text-sm text-primary hover:underline underline-offset-2"
                  >
                    {isFree
                      ? `Ver ${recommendedGuide.title} (Gratis) →`
                      : `Ver ${recommendedGuide.title} (${recommendedGuide.price} €) →`}
                  </Link>
                </div>
              )}
            </div>

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

      {/* Actividades recomendadas según presupuesto */}
      <section className="bg-background-light py-16 border-b border-border-soft">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-center justify-between mb-8 pb-3 border-b border-border-soft">
            <p className="text-xs uppercase tracking-widest text-text-secondary">
              Actividades para perfil &quot;{BUDGET_OPTIONS.find((o) => o.id === tipo)?.label}&quot;
            </p>
            <Link href="/actividades" className="text-sm text-primary hover:underline underline-offset-2">
              Ver todas →
            </Link>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
            {recommendedActivities.map((activity) => (
              <ActivityCard key={activity.slug} activity={activity} />
            ))}
          </div>
        </div>
      </section>

      {/* Plan a medida 1:1 */}
      <section className="bg-background-light py-16">
        <div className="max-w-3xl mx-auto px-6">
          <p className="text-xs uppercase tracking-widest text-text-secondary mb-3">Servicio 1:1</p>
          <h2 className="font-display italic text-text-main text-3xl mb-4">Un plan a medida, hecho por mí</h2>
          <p className="text-text-secondary mb-10">
            Si tienes pocos días en Lisboa y no quieres perder ni uno organizando, cuéntame cómo es tu viaje y te preparo personalmente
            un plan hora a hora: rutas exactas, reservas recomendadas y alternativas según tus gustos. Te lo envío en 24-48 horas.
          </p>

          {status !== 'success' ? (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="nombre" className="block text-xs uppercase tracking-widest text-text-secondary mb-2">Nombre</label>
                  <input
                    type="text" id="nombre" name="nombre" value={formData.nombre} onChange={handleChange} required
                    className="w-full px-4 py-3 border border-border-soft bg-white text-text-main focus:outline-none focus:border-text-secondary text-sm"
                    placeholder="Tu nombre"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-xs uppercase tracking-widest text-text-secondary mb-2">Email</label>
                  <input
                    type="email" id="email" name="email" value={formData.email} onChange={handleChange} required
                    className="w-full px-4 py-3 border border-border-soft bg-white text-text-main focus:outline-none focus:border-text-secondary text-sm"
                    placeholder="tu@email.com"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-3 gap-6">
                <div>
                  <label htmlFor="fechas" className="block text-xs uppercase tracking-widest text-text-secondary mb-2">Fechas</label>
                  <input
                    type="text" id="fechas" name="fechas" value={formData.fechas} onChange={handleChange}
                    className="w-full px-4 py-3 border border-border-soft bg-white text-text-main focus:outline-none focus:border-text-secondary text-sm"
                    placeholder="Ej: 12-15 julio"
                  />
                </div>
                <div>
                  <label htmlFor="dias" className="block text-xs uppercase tracking-widest text-text-secondary mb-2">Días</label>
                  <input
                    type="number" id="dias" name="dias" min="1" value={formData.dias} onChange={handleChange}
                    className="w-full px-4 py-3 border border-border-soft bg-white text-text-main focus:outline-none focus:border-text-secondary text-sm"
                    placeholder="3"
                  />
                </div>
                <div>
                  <label htmlFor="personas" className="block text-xs uppercase tracking-widest text-text-secondary mb-2">Personas</label>
                  <input
                    type="number" id="personas" name="personas" min="1" value={formData.personas} onChange={handleChange}
                    className="w-full px-4 py-3 border border-border-soft bg-white text-text-main focus:outline-none focus:border-text-secondary text-sm"
                    placeholder="2"
                  />
                </div>
              </div>

              <div>
                <p className="block text-xs uppercase tracking-widest text-text-secondary mb-2">Ritmo de viaje</p>
                <div className="grid grid-cols-3 gap-4">
                  {RITMOS.map((r) => (
                    <button
                      key={r}
                      type="button"
                      onClick={() => setFormData({ ...formData, ritmo: r })}
                      className={`py-3 px-3 border-t-2 text-sm font-semibold transition-colors ${
                        formData.ritmo === r ? 'border-primary text-text-main' : 'border-border-soft text-text-secondary hover:border-text-secondary'
                      }`}
                    >
                      {r}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label htmlFor="presupuesto" className="block text-xs uppercase tracking-widest text-text-secondary mb-2">Presupuesto aproximado</label>
                <input
                  type="text" id="presupuesto" name="presupuesto" value={formData.presupuesto} onChange={handleChange}
                  className="w-full px-4 py-3 border border-border-soft bg-white text-text-main focus:outline-none focus:border-text-secondary text-sm"
                  placeholder="Ej: 100€/día por persona"
                />
              </div>

              <div>
                <label htmlFor="intereses" className="block text-xs uppercase tracking-widest text-text-secondary mb-2">¿Qué te interesa más?</label>
                <input
                  type="text" id="intereses" name="intereses" value={formData.intereses} onChange={handleChange}
                  className="w-full px-4 py-3 border border-border-soft bg-white text-text-main focus:outline-none focus:border-text-secondary text-sm"
                  placeholder="Ej: gastronomía, fotografía, historia, vida nocturna..."
                />
              </div>

              <div>
                <label htmlFor="comentarios" className="block text-xs uppercase tracking-widest text-text-secondary mb-2">Algo más que deba saber</label>
                <textarea
                  id="comentarios" name="comentarios" value={formData.comentarios} onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-3 border border-border-soft bg-white text-text-main focus:outline-none focus:border-text-secondary resize-none text-sm"
                  placeholder="Movilidad reducida, viajas con niños, alergias, alojamiento ya reservado..."
                />
              </div>

              {error && <p className="text-xs text-red-600">{error}</p>}

              <button
                type="submit"
                disabled={status === 'loading'}
                className="w-full py-4 bg-primary hover:bg-primary-dark text-white font-semibold transition-colors text-sm disabled:opacity-50"
              >
                {status === 'loading' ? 'Enviando…' : 'Solicitar mi plan a medida'}
              </button>

              <p className="text-xs text-text-secondary">
                Respondo personalmente en 24-48 horas con tu plan y los detalles para confirmarlo.
              </p>
            </form>
          ) : (
            <div className="py-12 border-t-2 border-primary">
              <p className="font-display italic text-text-main text-2xl mb-4">Solicitud enviada.</p>
              <p className="text-text-secondary mb-8">
                Gracias. Voy a revisar tus respuestas y te escribo en 24-48 horas con tu plan a medida.
              </p>
              <Link href="/itinerarios" className="text-sm text-primary hover:underline underline-offset-2">
                ← Ver guías mientras tanto
              </Link>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
