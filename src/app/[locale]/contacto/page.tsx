'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function ContactoPage() {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    asunto: '',
    mensaje: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      if (response.ok) {
        setSubmitted(true);
        setFormData({ nombre: '', email: '', asunto: '', mensaje: '' });
        setTimeout(() => setSubmitted(false), 5000);
      } else {
        setError(data.message || 'Error al enviar el mensaje. Por favor, intenta de nuevo.');
      }
    } catch {
      setError('Error de conexión. Por favor, intenta de nuevo.');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <main id="main-content">
      {/* Cabecera */}
      <section className="bg-background-light pt-20 pb-10 border-b border-border-soft">
        <div className="max-w-3xl mx-auto px-6">
          <p className="text-xs text-text-secondary uppercase tracking-widest mb-3">Contacto</p>
          <h1 className="font-display italic text-text-main text-4xl md:text-5xl leading-tight">
            Escríbenos
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-text-secondary">
            ¿Tienes una duda sobre Lisboa, una propuesta o quieres colaborar? Cuéntanos y te responderemos con una orientación concreta.
          </p>
        </div>
      </section>

      {/* Formulario */}
      <section className="bg-background-light py-12 md:py-14">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid gap-10 md:grid-cols-[minmax(0,2.2fr),minmax(260px,1fr)] md:items-start">
            {/* Form */}
            <div className="card-surface p-5 sm:p-7">
              {!submitted ? (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="nombre" className="block text-xs uppercase tracking-widest text-text-secondary mb-2">
                      Nombre
                    </label>
                    <input
                      type="text"
                      id="nombre"
                      name="nombre"
                      value={formData.nombre}
                      onChange={handleChange}
                      required
                      className="form-input text-sm"
                      placeholder="Tu nombre"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-xs uppercase tracking-widest text-text-secondary mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="form-input text-sm"
                      placeholder="tu@email.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="asunto" className="block text-xs uppercase tracking-widest text-text-secondary mb-2">
                      Asunto
                    </label>
                    <select
                      id="asunto"
                      name="asunto"
                      value={formData.asunto}
                      onChange={handleChange}
                      required
                      className="form-input text-sm"
                    >
                      <option value="">Selecciona un asunto</option>
                      <option value="duda-guia">Duda sobre una guía</option>
                      <option value="sugerencia">Sugerencia o feedback</option>
                      <option value="colaboracion">Propuesta de colaboración</option>
                      <option value="otro">Otro</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="mensaje" className="block text-xs uppercase tracking-widest text-text-secondary mb-2">
                      Mensaje
                    </label>
                    <textarea
                      id="mensaje"
                      name="mensaje"
                      value={formData.mensaje}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="form-input resize-none text-sm"
                      placeholder="Cuéntanos cómo podemos ayudarte..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="btn-primary w-full py-4 text-sm"
                  >
                    Enviar mensaje
                  </button>

                  {error && (
                    <p className="text-xs font-medium text-red-600">{error}</p>
                  )}

                  <p className="text-xs text-text-secondary">
                    Responderemos en menos de 24 horas.
                  </p>
                </form>
              ) : (
                <div className="card-surface p-8 border-l-2 border-gold">
                  <p className="font-display italic text-text-main text-2xl mb-4">Mensaje enviado.</p>
                  <p className="text-text-secondary mb-8">
                    Gracias por contactarnos. Te responderemos pronto a tu email.
                  </p>
                  <Link href="/itinerarios" className="text-sm text-terracotta hover:underline underline-offset-2">
                    ← Volver a las guías
                  </Link>
                </div>
              )}
            </div>

            {/* Sidebar */}
            <div className="space-y-5 md:pt-1">
              <div className="card-surface p-5 border-l-2 border-gold">
                <h3 className="font-semibold text-text-main text-sm mb-2">Preguntas frecuentes</h3>
                <p className="text-text-secondary text-sm leading-relaxed mb-3">
                  Antes de escribirnos, revisa si ya tenemos respuesta para tu duda.
                </p>
                <Link href="/faq" className="text-sm font-semibold text-terracotta hover:underline underline-offset-2">
                  Ver FAQ →
                </Link>
              </div>
              <div className="card-surface p-5">
                <h3 className="font-semibold text-text-main text-sm mb-2">Respuesta cercana</h3>
                <p className="text-text-secondary text-sm leading-relaxed">
                  Si tu duda necesita contexto, te responderemos con una recomendación concreta.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
