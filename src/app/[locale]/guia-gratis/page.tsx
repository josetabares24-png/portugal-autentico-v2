'use client';

import React, { useState } from 'react';
import Link from 'next/link';

const tips = [
  'Las cuestas y cómo evitarlas',
  'La verdad sobre el tranvía 28',
  'Señales de trampas turísticas',
  'Fado auténtico vs show turístico',
  'Mejores horarios para visitar',
  'Miradores secretos',
  'Usa el metro inteligentemente',
  'Qué "típico" vale la pena',
  'Cómo descubrir Alfama',
  'Barrios más allá del centro',
  'La magia del atardecer',
  'Calzado adecuado (en serio)',
  'Por qué NO alquilar coche',
  'Lisboa Card: ¿vale la pena?',
  'Deja espacios en blanco',
];

const beneficios = [
  { titulo: 'Cómo moverte inteligentemente', desc: 'Evita las cuestas que te destrozan y ahorra tiempo usando el transporte como un local.' },
  { titulo: 'Dónde comer de verdad', desc: 'Restaurantes auténticos donde comen los lisboetas, lejos de trampas turísticas.' },
  { titulo: 'El mejor momento para cada cosa', desc: 'Cuándo visitar cada sitio para evitar aglomeraciones y disfrutar al máximo.' },
  { titulo: 'Secretos que nadie cuenta', desc: 'Miradores escondidos, barrios auténticos y experiencias que no salen en Google.' },
  { titulo: 'Ahorra dinero sin sacrificar calidad', desc: 'Tips para no tirar el dinero en cosas innecesarias o mal planificadas.' },
];

export default function GuiaGratisPage() {
  const [formData, setFormData] = useState({ name: '', email: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');
    try {
      const response = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        setShowSuccess(true);
        setFormData({ name: '', email: '' });
        setTimeout(() => { window.location.href = '/downloads/guia-lisboa-gratis.pdf'; }, 1000);
      } else {
        setError('Hubo un error. Por favor intenta de nuevo.');
      }
    } catch {
      setError('Error de conexión. Por favor intenta de nuevo.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <main id="main-content">
      {/* Cabecera */}
      <section className="bg-[#1a2b4a] py-20">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <p className="text-white/50 text-sm tracking-widest uppercase mb-3">Descarga gratuita</p>
          <h1 className="font-display italic text-white text-4xl md:text-5xl leading-tight mb-4">
            15 consejos que solo los locales conocen
          </h1>
          <p className="text-white/60 leading-relaxed">
            La guía gratuita que te hará vivir Lisboa como un verdadero lisboeta.
          </p>
        </div>
      </section>

      {/* Contenido */}
      <section className="bg-background-light py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-[2fr,3fr] gap-16 items-start">
            {/* Formulario */}
            <div className="lg:sticky lg:top-24">
              <div className="border-t-2 border-primary pt-6">
                <h2 className="font-display italic text-text-main text-2xl mb-1">Descarga gratis</h2>
                <p className="text-text-secondary text-sm mb-6">Recibe la guía en tu email en menos de 1 minuto.</p>

                {showSuccess ? (
                  <div className="py-6">
                    <p className="font-display italic text-text-main text-xl mb-2">Enviado.</p>
                    <p className="text-text-secondary text-sm">Revisa tu email para descargar la guía.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-3">
                    <div>
                      <label htmlFor="name" className="block text-xs uppercase tracking-widest text-text-secondary mb-2">Nombre</label>
                      <input
                        type="text" id="name" name="name" placeholder="Tu nombre"
                        value={formData.name} onChange={handleChange} required
                        className="w-full px-4 py-3 border border-border-soft bg-white text-text-main focus:outline-none focus:border-text-secondary text-sm"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-xs uppercase tracking-widest text-text-secondary mb-2">Email</label>
                      <input
                        type="email" id="email" name="email" placeholder="tu@email.com"
                        value={formData.email} onChange={handleChange} required
                        className="w-full px-4 py-3 border border-border-soft bg-white text-text-main focus:outline-none focus:border-text-secondary text-sm"
                      />
                    </div>
                    {error && <p className="text-red-500 text-xs">{error}</p>}
                    <button
                      type="submit" disabled={isSubmitting}
                      className="w-full py-3 bg-primary hover:bg-primary-dark text-white font-semibold text-sm transition-colors disabled:opacity-50"
                    >
                      {isSubmitting ? 'Enviando…' : 'Descargar guía gratis'}
                    </button>
                    <p className="text-text-secondary text-xs">
                      Sin spam. Al descargar aceptas recibir emails ocasionales.{' '}
                      <Link href="/politica-privacidad" className="underline underline-offset-2">Privacidad</Link>
                    </p>
                  </form>
                )}
              </div>
            </div>

            {/* Contenido */}
            <div className="space-y-14">
              {/* Beneficios */}
              <div>
                <p className="text-xs uppercase tracking-widest text-text-secondary mb-6 pb-3 border-b border-border-soft">
                  Qué vas a descubrir
                </p>
                <div className="space-y-6">
                  {beneficios.map((b) => (
                    <div key={b.titulo} className="border-t border-border-soft pt-4">
                      <h3 className="font-semibold text-text-main text-sm mb-1">{b.titulo}</h3>
                      <p className="text-text-secondary text-sm leading-relaxed">{b.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Los 15 consejos */}
              <div>
                <p className="text-xs uppercase tracking-widest text-text-secondary mb-6 pb-3 border-b border-border-soft">
                  Los 15 consejos
                </p>
                <ol className="space-y-3">
                  {tips.map((tip, i) => (
                    <li key={i} className="flex items-start gap-4 text-sm">
                      <span className="text-primary font-bold w-5 flex-shrink-0 text-right">{i + 1}</span>
                      <span className="text-text-secondary">{tip}</span>
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
