'use client';

import { FormEvent, useState } from 'react';

export default function HomeNewsletter() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setStatus('error');
      return;
    }

    setStatus('loading');

    try {
      const response = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, name: email.split('@')[0] }),
      });

      if (!response.ok) {
        setStatus('error');
        return;
      }

      setEmail('');
      setStatus('success');
    } catch {
      setStatus('error');
    }
  }

  if (status === 'success') {
    return (
      <p role="status" className="font-body text-sm text-night">
        Listo. Revisa tu correo para completar la suscripción.
      </p>
    );
  }

  return (
    <form onSubmit={onSubmit} className="flex w-full max-w-xl flex-col gap-3 sm:flex-row">
      <label htmlFor="home-newsletter-email" className="sr-only">Tu email</label>
      <input
        id="home-newsletter-email"
        type="email"
        autoComplete="email"
        required
        value={email}
        onChange={(event) => {
          setEmail(event.target.value);
          if (status === 'error') setStatus('idle');
        }}
        placeholder="Tu email"
        className="min-h-12 flex-1 border border-night/15 bg-white px-4 font-body text-base text-night outline-none transition-colors placeholder:text-taupe focus:border-terracotta"
      />
      <button
        type="submit"
        disabled={status === 'loading'}
        className="min-h-12 bg-gold px-6 font-body text-sm font-semibold text-night transition-colors hover:bg-terracotta hover:text-white disabled:cursor-not-allowed disabled:opacity-60"
      >
        {status === 'loading' ? 'Enviando…' : 'Suscribirme'}
      </button>
      {status === 'error' && (
        <p role="alert" className="font-body text-sm text-terracotta sm:basis-full">
          Revisa el email e inténtalo otra vez.
        </p>
      )}
    </form>
  );
}
