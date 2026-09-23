'use client';

import { FormEvent, useState } from 'react';
import Link from 'next/link';
import { PageIntro } from '@/components/PageIntro';
import { trackEvent } from '@/lib/analytics';

export default function UnsubscribePage() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError(null);
    setStatus('loading');

    try {
      const response = await fetch('/api/unsubscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });
      const data = await response.json();

      if (!response.ok || !data.success) {
        setStatus('error');
        setError(data.message || 'No pudimos procesar la baja. Inténtalo de nuevo.');
        return;
      }

      setStatus('success');
      trackEvent('newsletter_unsubscribe', {
        placement: 'unsubscribe_page',
      });
      setEmail('');
    } catch {
      setStatus('error');
      setError('No pudimos procesar la baja. Inténtalo de nuevo.');
    }
  }

  return (
    <main id="main-content">
      <PageIntro
        eyebrow="Correo"
        title="Darse de baja"
        description="Escribe el email con el que te suscribiste y lo quitaremos de la lista de correos."
      />

      <section className="bg-background-light py-12 md:py-16">
        <div className="mx-auto max-w-xl px-6">
          {status === 'success' ? (
            <div className="card-surface border-l-2 border-gold p-7" role="status">
              <h2 className="font-display text-2xl font-semibold not-italic text-text-main">
                Baja procesada
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-text-secondary">
                Ese email ya no recibirá los correos de la lista de Estaba en Lisboa.
              </p>
              <Link href="/blog" className="mt-6 inline-block text-sm text-terracotta underline-offset-2 hover:underline">
                Volver a las guías
              </Link>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="card-surface space-y-5 p-6 md:p-7">
              <div>
                <label htmlFor="unsubscribe-email" className="mb-2 block text-xs uppercase tracking-widest text-text-secondary">
                  Email
                </label>
                <input
                  id="unsubscribe-email"
                  type="email"
                  autoComplete="email"
                  required
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  className="form-input text-sm"
                  placeholder="tu@email.com"
                />
              </div>

              {error && <p role="alert" className="text-sm text-red-700">{error}</p>}

              <button type="submit" disabled={status === 'loading'} className="btn-primary btn-lg w-full">
                {status === 'loading' ? 'Procesando…' : 'Darme de baja'}
              </button>

              <p className="text-xs leading-relaxed text-text-secondary">
                La respuesta es la misma aunque ese email ya no esté en la lista.
              </p>
            </form>
          )}
        </div>
      </section>
    </main>
  );
}
