'use client';

import { useState } from 'react';
import Link from 'next/link';
import Icon from '@/components/Icon';
import { PageIntro } from '@/components/PageIntro';

/*
 * Esta página fue durante mucho tiempo una segunda calculadora de presupuesto:
 * tres perfiles (Mochilero / Medio / Confort), dos sliders y un número único
 * del tipo «792 €». Se ha retirado por dos razones.
 *
 * La primera es que había dos calculadoras distintas en el mismo sitio, con
 * modelos de coste distintos, y podían contradecirse. La de verdad vive en
 * /calculadora-presupuesto-lisboa, trabaja con rangos y explica de dónde sale
 * cada partida. Ésta daba una cifra cerrada que no tenía cómo sostener.
 *
 * La segunda es que un número único con dos decimales de aparente precisión es
 * la clase de dato que la gente apunta y luego reclama. Un rango no.
 *
 * Lo que queda aquí es lo que esta URL debería haber sido siempre: un punto de
 * partida que reparte a los tres caminos reales —presupuesto, itinerario y
 * actividades— y, debajo, el servicio 1:1, que sigue igual porque nunca
 * dependió de la calculadora.
 */

const CAMINOS = [
  {
    icono: 'calculate',
    titulo: 'Calcula tu presupuesto',
    descripcion:
      'Cuántos días, cuántas noches, cuántos sois y qué pensáis visitar. Devuelve un rango, no un precio cerrado, y dice de dónde sale cada partida.',
    cta: 'Calcular mi presupuesto',
    href: '/calculadora-presupuesto-lisboa',
  },
  {
    icono: 'route',
    titulo: 'Elige tu itinerario',
    descripcion:
      'Rutas hora a hora según los días que tengas, de uno a siete. Con las distancias reales de una ciudad que sube y baja más de lo que parece en el mapa.',
    cta: 'Ver itinerarios',
    href: '/itinerarios',
  },
  {
    icono: 'confirmation_number',
    titulo: 'Actividades y entradas',
    descripcion:
      'Qué merece la pena, qué se puede ver sin pagar y qué conviene reservar con antelación para no quedarte fuera.',
    cta: 'Ver actividades',
    href: '/actividades',
  },
] as const;

const RITMOS = ['Relajado', 'Equilibrado', 'Intenso'];

export default function PlanificaTuViajePage() {
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
      <PageIntro
        eyebrow="Planificación"
        title="Planifica tu viaje"
        description="Tres formas de empezar, según lo que tengas por decidir. Y si prefieres no decidir nada, te preparo el plan yo."
      />

      {/* Los tres caminos */}
      <section className="border-b border-border-soft bg-background-light py-20">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="mb-8 border-b border-border-soft pb-3 text-xs uppercase tracking-widest text-text-secondary">
            Por dónde empezar
          </h2>

          <div className="grid gap-6 md:grid-cols-3">
            {CAMINOS.map((camino) => (
              <div
                key={camino.href}
                className="card-surface flex flex-col p-6 transition-shadow duration-200 hover:shadow-card"
              >
                <span
                  aria-hidden="true"
                  className="mb-4 flex h-11 w-11 items-center justify-center rounded-lg bg-night text-gold"
                >
                  <Icon name={camino.icono} size={20} />
                </span>
                <h3 className="mb-2 font-display text-xl font-semibold text-text-main">
                  {camino.titulo}
                </h3>
                <p className="mb-6 flex-1 text-sm leading-relaxed text-text-secondary">
                  {camino.descripcion}
                </p>
                <Link
                  href={camino.href}
                  className="btn-outline w-full justify-center py-2.5 text-sm"
                >
                  {camino.cta}
                </Link>
              </div>
            ))}
          </div>

          {/*
            Estos dos enlaces venían de la página anterior y no dependían de la
            calculadora retirada, así que se conservan. Uno evita perder dinero
            en comisiones antes de salir; el otro es la alternativa gratis a
            pagar por orientarse el primer día.
          */}
          <p className="mt-10 text-sm leading-relaxed text-text-secondary">
            Antes de viajar, repasa{' '}
            <Link
              href="/blog/como-pagar-en-portugal"
              className="text-terracotta underline underline-offset-2 hover:no-underline"
            >
              cómo pagar en Portugal
            </Link>{' '}
            para no dejarte parte del presupuesto en comisiones evitables. Y si es tu primer
            día y quieres situarte antes de gastar en entradas, puedes{' '}
            <Link
              href="/free-tours-lisboa"
              className="text-terracotta underline underline-offset-2 hover:no-underline"
            >
              comparar free tours por zona
            </Link>
            .
          </p>
        </div>
      </section>

      {/* Plan a medida 1:1 */}
      <section className="bg-background-light py-20">
        <div className="mx-auto max-w-3xl px-6">
          <p className="mb-3 text-xs uppercase tracking-widest text-text-secondary">Servicio 1:1</p>
          <h2 className="mb-4 font-display text-3xl italic text-text-main">Un plan a medida, hecho por mí</h2>
          <p className="mb-10 text-text-secondary">
            Si tienes pocos días en Lisboa y no quieres perder ni uno organizando, cuéntame cómo es tu viaje y te preparo personalmente
            un plan hora a hora: rutas exactas, reservas recomendadas y alternativas según tus gustos. Te lo envío en 24-48 horas.
          </p>

          {status !== 'success' ? (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid gap-6 sm:grid-cols-2">
                <div>
                  <label htmlFor="nombre" className="mb-2 block text-xs uppercase tracking-widest text-text-secondary">Nombre</label>
                  <input
                    type="text" id="nombre" name="nombre" value={formData.nombre} onChange={handleChange} required
                    className="form-input text-sm"
                    placeholder="Tu nombre"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="mb-2 block text-xs uppercase tracking-widest text-text-secondary">Email</label>
                  <input
                    type="email" id="email" name="email" value={formData.email} onChange={handleChange} required
                    className="form-input text-sm"
                    placeholder="tu@email.com"
                  />
                </div>
              </div>

              <div className="grid gap-6 sm:grid-cols-3">
                <div>
                  <label htmlFor="fechas" className="mb-2 block text-xs uppercase tracking-widest text-text-secondary">Fechas</label>
                  <input
                    type="text" id="fechas" name="fechas" value={formData.fechas} onChange={handleChange}
                    className="form-input text-sm"
                    placeholder="Ej: 12-15 julio"
                  />
                </div>
                <div>
                  <label htmlFor="dias" className="mb-2 block text-xs uppercase tracking-widest text-text-secondary">Días</label>
                  <input
                    type="number" id="dias" name="dias" min="1" value={formData.dias} onChange={handleChange}
                    className="form-input text-sm"
                    placeholder="3"
                  />
                </div>
                <div>
                  <label htmlFor="personas" className="mb-2 block text-xs uppercase tracking-widest text-text-secondary">Personas</label>
                  <input
                    type="number" id="personas" name="personas" min="1" value={formData.personas} onChange={handleChange}
                    className="form-input text-sm"
                    placeholder="2"
                  />
                </div>
              </div>

              <div>
                <p className="mb-2 block text-xs uppercase tracking-widest text-text-secondary">Ritmo de viaje</p>
                <div className="grid grid-cols-3 gap-4">
                  {RITMOS.map((r) => (
                    <button
                      key={r}
                      type="button"
                      onClick={() => setFormData({ ...formData, ritmo: r })}
                      className={`rounded-lg px-3 py-3 text-sm font-semibold transition-all duration-200 ${
                        formData.ritmo === r
                          ? 'bg-white text-text-main shadow-card ring-2 ring-gold'
                          : 'border border-border-soft text-text-secondary hover:border-taupe hover:shadow-soft'
                      }`}
                    >
                      {r}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label htmlFor="presupuesto" className="mb-2 block text-xs uppercase tracking-widest text-text-secondary">Presupuesto aproximado</label>
                <input
                  type="text" id="presupuesto" name="presupuesto" value={formData.presupuesto} onChange={handleChange}
                  className="form-input text-sm"
                  placeholder="Ej: 100€/día por persona"
                />
              </div>

              <div>
                <label htmlFor="intereses" className="mb-2 block text-xs uppercase tracking-widest text-text-secondary">¿Qué te interesa más?</label>
                <input
                  type="text" id="intereses" name="intereses" value={formData.intereses} onChange={handleChange}
                  className="form-input text-sm"
                  placeholder="Ej: gastronomía, fotografía, historia, vida nocturna..."
                />
              </div>

              <div>
                <label htmlFor="comentarios" className="mb-2 block text-xs uppercase tracking-widest text-text-secondary">Algo más que deba saber</label>
                <textarea
                  id="comentarios" name="comentarios" value={formData.comentarios} onChange={handleChange}
                  rows={4}
                  className="form-input resize-none text-sm"
                  placeholder="Movilidad reducida, viajas con niños, alergias, alojamiento ya reservado..."
                />
              </div>

              {error && <p className="text-xs text-red-600">{error}</p>}

              <button
                type="submit"
                disabled={status === 'loading'}
                className="btn-primary btn-lg w-full"
              >
                {status === 'loading' ? 'Enviando…' : 'Solicitar mi plan a medida'}
              </button>

              <p className="text-xs text-text-secondary">
                Respondo personalmente en 24-48 horas con tu plan y los detalles para confirmarlo.
              </p>
            </form>
          ) : (
            <div className="card-surface border-l-2 border-gold p-8">
              <p className="mb-4 font-display text-2xl font-semibold not-italic text-text-main">Solicitud enviada.</p>
              <p className="mb-8 text-text-secondary">
                Gracias. Voy a revisar tus respuestas y te escribo en 24-48 horas con tu plan a medida.
              </p>
              <Link href="/itinerarios" className="text-sm text-terracotta underline-offset-2 hover:underline">
                ← Ver guías mientras tanto
              </Link>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
