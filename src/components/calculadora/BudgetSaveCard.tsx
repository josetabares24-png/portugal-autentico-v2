'use client';

import { useState } from 'react';
import Icon from '@/components/Icon';
import type { BudgetInput } from '@/lib/budget-calculator';

/*
 * «Guardar mi presupuesto»: descargar el PDF o recibirlo por email.
 *
 * Este componente no sabe cuánto cuesta el viaje y es a propósito. Manda el
 * `BudgetInput` —las decisiones— y el servidor recalcula y dibuja. Si aquí
 * viajara un total, habría que creerse el total que manda un navegador.
 *
 * Sobre el email: se pide la dirección y nada más. Ni nombre, ni teléfono, ni
 * cuenta, ni una casilla de newsletter premarcada escondida debajo. Es un
 * envío transaccional: llega el PDF y ahí termina la relación. Decirlo en voz
 * alta bajo el campo no es un formalismo legal, es lo que hace que alguien
 * escriba su dirección de verdad en vez de una de usar y tirar.
 */

type Estado = 'idle' | 'descargando' | 'enviando' | 'enviado' | 'error';

export function BudgetSaveCard({ input }: { input: BudgetInput }) {
  const [estado, setEstado] = useState<Estado>('idle');
  const [error, setError] = useState<string | null>(null);
  const [panelEmail, setPanelEmail] = useState(false);
  const [email, setEmail] = useState('');

  const ocupado = estado === 'descargando' || estado === 'enviando';

  async function descargar() {
    setError(null);
    setEstado('descargando');
    try {
      const res = await fetch('/api/presupuesto', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ input }),
      });
      if (!res.ok) throw new Error('respuesta no válida');

      const blob = await res.blob();
      const url = URL.createObjectURL(blob);
      const enlace = document.createElement('a');
      enlace.href = url;
      enlace.download = 'presupuesto-lisboa.pdf';
      document.body.appendChild(enlace);
      enlace.click();
      enlace.remove();
      URL.revokeObjectURL(url);
      setEstado('idle');
    } catch {
      setEstado('error');
      setError('No hemos podido generar el PDF. Inténtalo de nuevo en un momento.');
    }
  }

  async function enviar(evento: React.FormEvent) {
    evento.preventDefault();
    setError(null);
    setEstado('enviando');
    try {
      const res = await fetch('/api/presupuesto', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ input, email }),
      });
      const datos = await res.json().catch(() => ({}));
      if (res.ok && datos.success) {
        setEstado('enviado');
        return;
      }
      setEstado('error');
      setError(datos.error || 'No hemos podido enviarlo. Inténtalo de nuevo.');
    } catch {
      setEstado('error');
      setError('Error de conexión. Inténtalo de nuevo.');
    }
  }

  return (
    <section
      aria-labelledby="guardar-presupuesto"
      className="rounded-xl border border-border-soft bg-white p-4 md:p-5"
    >
      <h3
        id="guardar-presupuesto"
        className="mb-1 font-display text-base font-semibold text-text-main"
      >
        Guardar mi presupuesto
      </h3>
      <p className="mb-4 font-body text-[13px] leading-relaxed text-text-secondary">
        Un PDF con el desglose completo, para tenerlo a mano mientras reservas.
      </p>

      <div className="flex flex-col gap-2 sm:flex-row">
        <button
          type="button"
          onClick={descargar}
          disabled={ocupado}
          className="btn-primary min-h-11 flex-1 justify-center px-4 py-2.5 text-sm disabled:opacity-60"
        >
          <Icon name="download" size={16} />
          {estado === 'descargando' ? 'Generando…' : 'Descargar PDF'}
        </button>
        <button
          type="button"
          onClick={() => {
            setPanelEmail((abierto) => !abierto);
            setError(null);
          }}
          aria-expanded={panelEmail}
          aria-controls="panel-email-presupuesto"
          disabled={ocupado}
          className="btn-outline min-h-11 flex-1 justify-center px-4 py-2.5 text-sm disabled:opacity-60"
        >
          <Icon name="mail" size={16} />
          Enviármelo por email
        </button>
      </div>

      {panelEmail && (
        <div
          id="panel-email-presupuesto"
          className="mt-4 rounded-lg border border-border-soft bg-background-light p-4"
        >
          {estado === 'enviado' ? (
            <p className="flex items-center gap-2 font-body text-sm font-semibold text-text-main">
              <Icon name="check" size={16} />
              Presupuesto enviado
            </p>
          ) : (
            <form onSubmit={enviar}>
              <label
                htmlFor="email-presupuesto"
                className="mb-2 block font-body text-[11px] font-semibold uppercase tracking-[0.12em] text-text-secondary"
              >
                Tu email
              </label>
              <input
                id="email-presupuesto"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="tu@email.com"
                autoComplete="email"
                className="form-input mb-3 text-sm"
              />
              <button
                type="submit"
                disabled={ocupado}
                className="btn-primary min-h-11 w-full justify-center px-4 py-2.5 text-sm disabled:opacity-60"
              >
                {estado === 'enviando' ? 'Enviando…' : 'Enviar mi presupuesto'}
              </button>
              <p className="mt-3 font-body text-xs leading-relaxed text-text-secondary">
                Te enviaremos este presupuesto en PDF. No te suscribiremos a ninguna newsletter.
              </p>
            </form>
          )}
        </div>
      )}

      {error && (
        <p role="alert" className="mt-3 font-body text-xs leading-relaxed text-terracotta">
          {error}
        </p>
      )}
    </section>
  );
}
