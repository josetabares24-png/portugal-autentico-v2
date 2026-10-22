'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { PageIntro } from '@/components/PageIntro';
import { trackEvent } from '@/lib/analytics';
import { PLANNING_EMAIL, PLANNING_MAILTO } from '@/lib/planning-contact';

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
        eyebrow="Planificación personal"
        title="Planifica tu viaje"
        description="Cuéntame cuándo vienes y qué te apetece hacer. Soy José y puedo ayudarte a preparar tu viaje a Lisboa personalmente."
      />

      <section ref={planSectionRef} className="bg-background-light py-8 md:py-12" aria-labelledby="contacto-personal">
        <div className="site-container grid items-start gap-8 lg:grid-cols-[0.8fr,1.2fr] lg:gap-16">
          <div>
            <h2 id="contacto-personal" className="font-display text-2xl font-semibold not-italic text-text-main md:text-3xl">
              Hablemos de tu viaje
            </h2>
            <p className="mt-4 font-body text-base leading-relaxed text-text-secondary">
              Me escribes tú, te respondo yo. Podemos organizar los días, las zonas,
              los desplazamientos y las reservas según lo que necesites.
            </p>
            <p className="mt-3 font-body text-sm leading-relaxed text-text-secondary">
              Primero hablamos de tu idea de viaje. Antes de preparar el plan,
              acordamos qué incluye y el precio.
            </p>
            <div className="mt-6 border-t border-border-soft pt-5">
              <p className="font-body text-sm text-text-secondary">¿Prefieres escribirme desde tu correo?</p>
              <a href={PLANNING_MAILTO} className="mt-2 inline-flex min-h-11 items-center break-all font-body text-sm font-semibold text-terracotta underline underline-offset-4">
                {PLANNING_EMAIL}
              </a>
            </div>
            <Link href="/sobre-nosotros" className="mt-3 inline-flex min-h-11 items-center font-body text-sm text-text-secondary underline underline-offset-4">
              Quién está detrás de Estaba en Lisboa
            </Link>
          </div>

          <div id="solicitar-plan" className="scroll-mt-24 border-t border-border-soft pt-6 lg:border-t-0 lg:pt-0">
            <h2 className="font-display text-2xl font-semibold not-italic text-text-main">Escríbeme aquí</h2>
            <p id="form-ayuda" className="mt-2 mb-6 font-body text-sm leading-relaxed text-text-secondary">
              Con tu nombre, email y una idea del viaje podemos empezar. Las fechas y las personas son opcionales.
            </p>
            {status !== 'success' ? (
              <form onSubmit={handleSubmit} onFocusCapture={markPlanStart} aria-describedby="form-ayuda" aria-busy={status === 'loading'} className="space-y-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label htmlFor="nombre" className="mb-2 block font-body text-sm font-semibold text-text-main">Tu nombre</label>
                    <input type="text" id="nombre" name="nombre" autoComplete="given-name" maxLength={120} value={formData.nombre} onChange={handleChange} required className="form-input text-sm" />
                  </div>
                  <div>
                    <label htmlFor="email" className="mb-2 block font-body text-sm font-semibold text-text-main">Tu email</label>
                    <input type="email" id="email" name="email" autoComplete="email" maxLength={254} value={formData.email} onChange={handleChange} required className="form-input text-sm" />
                  </div>
                </div>
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label htmlFor="fechas" className="mb-2 block font-body text-sm text-text-main">Fechas aproximadas <span className="text-text-secondary">(opcional)</span></label>
                    <input type="text" id="fechas" name="fechas" maxLength={200} value={formData.fechas} onChange={handleChange} className="form-input text-sm" placeholder="Si aún no lo sabes, no pasa nada" />
                  </div>
                  <div>
                    <label htmlFor="personas" className="mb-2 block font-body text-sm text-text-main">¿Cuántos sois? <span className="text-text-secondary">(opcional)</span></label>
                    <input type="number" id="personas" name="personas" min="1" max="9999" step="1" value={formData.personas} onChange={handleChange} className="form-input text-sm" />
                  </div>
                </div>
                <div>
                  <label htmlFor="comentarios" className="mb-2 block font-body text-sm font-semibold text-text-main">Cuéntame qué tienes en mente</label>
                  <textarea id="comentarios" name="comentarios" maxLength={5000} value={formData.comentarios} onChange={handleChange} required rows={5} className="form-input resize-y text-sm" placeholder="Cuántos días tienes, qué te interesa o en qué te gustaría que te ayudara…" />
                </div>
                <p className="font-body text-xs leading-relaxed text-text-secondary">
                  Usaré estos datos para responderte sobre el viaje. <Link href="/politica-privacidad" className="underline underline-offset-2">Política de privacidad</Link>.
                </p>
                {error && <div role="alert" className="font-body text-sm text-red-700"><p>{error}</p><a href={PLANNING_MAILTO} className="inline-flex min-h-11 items-center underline underline-offset-2">Escribirme por email</a></div>}
                <button type="submit" disabled={status === 'loading'} className="btn-primary btn-lg w-full sm:w-auto">
                  {status === 'loading' ? 'Enviando…' : 'Enviar mensaje a José'}
                </button>
                <p className="font-body text-xs leading-relaxed text-text-secondary">Enviar el mensaje no supone ningún pago ni reserva.</p>
              </form>
            ) : (
              <div className="border-l-2 border-terracotta py-3 pl-5" role="status" aria-live="polite">
                <h3 className="font-display text-xl font-semibold not-italic text-text-main">Tu mensaje se ha enviado.</h3>
                <p className="mt-3 font-body text-sm leading-relaxed text-text-secondary">Gracias por contarme tu viaje. Lo revisaré personalmente y te responderé al email que has indicado para hablar de los siguientes pasos.</p>
                <Link href="/itinerarios" className="mt-4 inline-flex min-h-11 items-center text-sm text-terracotta underline underline-offset-2">Ver las rutas de la web</Link>
              </div>
            )}
          </div>
        </div>
      </section>

      <section className="border-t border-border-soft bg-background-light py-8 md:py-10" aria-labelledby="por-tu-cuenta">
        <div className="site-container">
          <h2 id="por-tu-cuenta" className="font-display text-xl font-semibold not-italic text-text-main">Para ir preparando el viaje</h2>
          <div className="mt-3 flex flex-wrap gap-x-6 gap-y-1 font-body text-sm text-text-secondary">
            {[
              ['/itinerarios', 'Itinerarios gratuitos'],
              ['/calculadora-presupuesto-lisboa', 'Calculadora de presupuesto'],
              ['/actividades', 'Actividades'],
              ['/free-tours-lisboa', 'Free tours'],
              ['/blog/como-pagar-en-portugal', 'Cómo pagar en Portugal'],
            ].map(([href, label]) => <Link key={href} href={href} className="inline-flex min-h-11 items-center underline underline-offset-4 hover:text-terracotta">{label}</Link>)}
          </div>
        </div>
      </section>
    </main>
  );
}
