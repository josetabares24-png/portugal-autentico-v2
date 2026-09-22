'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import Icon from '@/components/Icon';
import { PageIntro } from '@/components/PageIntro';
import { trackEvent } from '@/lib/analytics';
import { PLAN_PRICE_FROM } from '@/lib/commercial-config';

const CAMINOS = [
  {
    icono: 'calculate',
    titulo: 'Calcula tu presupuesto',
    descripcion:
      'Cuántos días, cuántas noches, cuántos sois y qué pensáis visitar. Devuelve un rango y explica de dónde sale cada partida.',
    cta: 'Calcular mi presupuesto',
    href: '/calculadora-presupuesto-lisboa',
  },
  {
    icono: 'route',
    titulo: 'Elige tu itinerario',
    descripcion:
      'Rutas hora a hora según los días que tengas, con el orden de las paradas y una lógica pensada para caminar Lisboa sin ir y volver sin sentido.',
    cta: 'Ver itinerarios',
    href: '/itinerarios',
  },
  {
    icono: 'confirmation_number',
    titulo: 'Actividades y entradas',
    descripcion:
      'Qué merece la pena, qué se puede ver sin pagar y qué conviene revisar con antelación antes de decidir.',
    cta: 'Ver actividades',
    href: '/actividades',
  },
] as const;

const RITMOS = ['Relajado', 'Equilibrado', 'Intenso'];

const ENTREGABLES = [
  'Ruta organizada por días y por zonas.',
  'Orden de paradas y desplazamientos para evitar vueltas innecesarias.',
  'Reservas que conviene dejar resueltas y cuáles no hacen falta.',
  'Alternativas según ritmo, presupuesto e intereses.',
] as const;

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

  const planSectionRef = useRef<HTMLElement>(null);
  const planViewTracked = useRef(false);
  const planStartTracked = useRef(false);

  useEffect(() => {
    const node = planSectionRef.current;
    if (!node || planViewTracked.current) return;

    const sendView = () => {
      if (planViewTracked.current) return;
      planViewTracked.current = true;
      trackEvent('personal_plan_view', {
        page_path: typeof window !== 'undefined' ? window.location.pathname : '',
      });
    };

    if (typeof IntersectionObserver === 'undefined') {
      sendView();
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        sendView();
        observer.disconnect();
      },
      { threshold: 0.25 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  const markPlanStart = () => {
    if (planStartTracked.current) return;
    planStartTracked.current = true;
    trackEvent('personal_plan_start', {
      page_path: typeof window !== 'undefined' ? window.location.pathname : '',
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    markPlanStart();
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    markPlanStart();
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
        trackEvent('personal_plan_submit', {
          page_path: typeof window !== 'undefined' ? window.location.pathname : '',
          days: formData.dias ? Number(formData.dias) : undefined,
          travelers: formData.personas ? Number(formData.personas) : undefined,
          has_dates: Boolean(formData.fechas.trim()),
          has_budget: Boolean(formData.presupuesto.trim()),
          pace: formData.ritmo || undefined,
        });
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
        description="Puedes organizar Lisboa con las herramientas gratuitas de la web o contarme tu viaje y recibir una ruta preparada para ti."
      />

      {/* El servicio aparece primero: quien llega buscando ayuda entiende qué
          recibe antes de encontrarse con tres salidas distintas. */}
      <section ref={planSectionRef} className="border-b border-border-soft bg-background-light py-14 md:py-18">
        <div className="mx-auto max-w-5xl px-6">
          <div className="grid gap-10 lg:grid-cols-[1.05fr,0.95fr] lg:items-start">
            <div>
              <p className="mb-3 font-body text-[11px] font-semibold uppercase tracking-[0.2em] text-terracotta">
                Plan personalizado de Lisboa
              </p>
              <h2 className="max-w-[17ch] font-display text-3xl font-semibold not-italic leading-tight text-text-main md:text-4xl">
                Te preparo una ruta adaptada a tus días, ritmo, presupuesto e intereses.
              </h2>
              <p className="mt-4 max-w-[60ch] font-body text-base leading-relaxed text-text-secondary">
                Tiene sentido si quieres aprovechar pocos días sin dedicar horas a encajar barrios,
                transportes, reservas y horarios por tu cuenta.
              </p>

              <div className="mt-7 grid gap-4 sm:grid-cols-2">
                <div className="rounded-xl border border-border-soft bg-white p-4">
                  <p className="font-body text-[11px] font-semibold uppercase tracking-[0.14em] text-text-secondary">
                    Para quién es
                  </p>
                  <p className="mt-2 font-body text-sm leading-relaxed text-text-main">
                    Para quien tiene fechas concretas y quiere una ruta coherente con su forma de viajar,
                    no una lista genérica de lugares.
                  </p>
                </div>

                <div className="rounded-xl border border-border-soft bg-white p-4">
                  <p className="font-body text-[11px] font-semibold uppercase tracking-[0.14em] text-text-secondary">
                    Entrega
                  </p>
                  <p className="mt-2 font-body text-sm leading-relaxed text-text-main">
                    Reviso tu solicitud personalmente y te respondo en 24-48 horas.
                  </p>
                </div>
              </div>

              <div className="mt-4 rounded-xl border border-gold/55 bg-white p-5">
                <p className="font-body text-[11px] font-semibold uppercase tracking-[0.14em] text-text-secondary">
                  Qué recibes
                </p>
                <ul className="mt-3 grid gap-2.5">
                  {ENTREGABLES.map((item) => (
                    <li key={item} className="flex items-start gap-2.5 font-body text-sm leading-relaxed text-text-main">
                      <Icon name="check" size={15} aria-hidden="true" className="mt-0.5 flex-shrink-0 text-terracotta" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-3">
                <a href="#solicitar-plan" className="btn-primary btn-lg">
                  Contarme mi viaje
                </a>
                <p className="font-body text-sm text-text-secondary">
                  {PLAN_PRICE_FROM
                    ? <>Desde <strong className="font-semibold text-text-main">{PLAN_PRICE_FROM}</strong></>
                    : 'Te confirmo el importe antes de empezar. No se cobra ni se reserva nada desde este formulario.'}
                </p>
              </div>
            </div>

            <aside className="rounded-xl border border-border-soft bg-white p-5 shadow-card md:p-6">
              <p className="font-body text-[11px] font-semibold uppercase tracking-[0.14em] text-text-secondary">
                Cómo funciona
              </p>
              <ol className="mt-4 space-y-5">
                {[
                  ['1', 'Me cuentas el viaje', 'Fechas, días, personas, ritmo, presupuesto e intereses.'],
                  ['2', 'Yo lo ordeno', 'Cruzo tus prioridades con una ruta realista por zonas y tiempos.'],
                  ['3', 'Recibes el plan', 'Te escribo en 24-48 horas con la propuesta y los detalles para confirmarla.'],
                ].map(([numero, titulo, texto]) => (
                  <li key={numero} className="grid grid-cols-[2rem,1fr] gap-3">
                    <span
                      aria-hidden="true"
                      className="flex h-8 w-8 items-center justify-center rounded-full bg-night font-body text-xs font-semibold text-white"
                    >
                      {numero}
                    </span>
                    <div>
                      <p className="font-body text-sm font-semibold text-text-main">{titulo}</p>
                      <p className="mt-0.5 font-body text-[13px] leading-relaxed text-text-secondary">{texto}</p>
                    </div>
                  </li>
                ))}
              </ol>

              <p className="mt-6 border-t border-border-soft pt-4 font-body text-[12px] leading-relaxed text-text-secondary">
                Si sólo necesitas una ruta general, probablemente no necesitas pagar por esto:
                los itinerarios de la web siguen siendo gratuitos.
              </p>
            </aside>
          </div>

          <div id="solicitar-plan" className="scroll-mt-24 pt-14 md:pt-16">
            <div className="mb-7">
              <p className="font-body text-[11px] font-semibold uppercase tracking-[0.16em] text-text-secondary">
                Solicitud
              </p>
              <h3 className="mt-2 font-display text-2xl font-semibold not-italic text-text-main">
                Cuéntame cómo es tu viaje
              </h3>
              <p className="mt-2 max-w-2xl font-body text-sm leading-relaxed text-text-secondary">
                El formulario no te compromete a comprar nada. Lo uso para saber si el servicio encaja y poder responderte con una propuesta concreta.
              </p>
            </div>

            {status !== 'success' ? (
              <form
                onSubmit={handleSubmit}
                onFocusCapture={markPlanStart}
                className="space-y-6 rounded-xl border border-border-soft bg-white p-5 shadow-card md:p-7"
              >
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
                  <div className="grid grid-cols-3 gap-2 sm:gap-4">
                    {RITMOS.map((r) => (
                      <button
                        key={r}
                        type="button"
                        onClick={() => {
                          markPlanStart();
                          setFormData({ ...formData, ritmo: r });
                        }}
                        aria-pressed={formData.ritmo === r}
                        className={`min-h-11 rounded-lg px-2 py-3 text-sm font-semibold transition-all duration-200 sm:px-3 ${
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

                {error && <p role="alert" className="text-sm text-red-700">{error}</p>}

                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="btn-primary btn-lg w-full"
                >
                  {status === 'loading' ? 'Enviando…' : 'Solicitar mi plan a medida'}
                </button>

                <p className="font-body text-xs leading-relaxed text-text-secondary">
                  Respondo personalmente en 24-48 horas. No enviamos tu nombre ni tu email a Analytics.
                </p>
              </form>
            ) : (
              <div className="card-surface border-l-2 border-gold p-8" role="status">
                <p className="mb-4 font-display text-2xl font-semibold not-italic text-text-main">Solicitud enviada.</p>
                <p className="mb-8 text-text-secondary">
                  Gracias. Voy a revisar tus respuestas y te escribo en 24-48 horas con los siguientes pasos.
                </p>
                <Link href="/itinerarios" className="text-sm text-terracotta underline-offset-2 hover:underline">
                  ← Ver guías mientras tanto
                </Link>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Las herramientas gratuitas quedan como alternativa, no compiten con
          el servicio personalizado en el primer pantallazo. */}
      <section className="bg-background-light py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="mb-3 font-display text-2xl font-semibold not-italic text-text-main">
            Si prefieres organizarlo tú
          </h2>
          <p className="mb-8 max-w-2xl font-body text-sm leading-relaxed text-text-secondary">
            Estas tres herramientas siguen siendo gratuitas y cubren la mayor parte de lo que necesitas para montar el viaje por tu cuenta.
          </p>

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
                <Link href={camino.href} className="btn-outline w-full justify-center py-2.5 text-sm">
                  {camino.cta}
                </Link>
              </div>
            ))}
          </div>

          <p className="mt-10 text-sm leading-relaxed text-text-secondary">
            Antes de viajar, repasa{' '}
            <Link
              href="/blog/como-pagar-en-portugal"
              className="text-terracotta underline underline-offset-2 hover:no-underline"
            >
              cómo pagar en Portugal
            </Link>{' '}
            para evitar comisiones innecesarias. Y si es tu primer día y quieres situarte antes de gastar en entradas, puedes{' '}
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
    </main>
  );
}
