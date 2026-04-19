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
    <main>
      {/* Cabecera */}
      <section className="bg-background-light pt-20 pb-12 border-b border-border-soft">
        <div className="max-w-3xl mx-auto px-6">
          <p className="text-xs text-text-secondary uppercase tracking-widest mb-3">Contacto</p>
          <h1 className="font-display italic text-text-main text-4xl md:text-5xl leading-tight">
            Escríbenos
          </h1>
        </div>
      </section>

      {/* Formulario */}
      <section className="bg-background-light py-16">
        <div className="max-w-3xl mx-auto px-6">
          <div className="grid md:grid-cols-[2fr,1fr] gap-16 items-start">
            {/* Form */}
            <div>
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
                      className="w-full px-4 py-3 border border-border-soft bg-white text-text-main focus:outline-none focus:border-text-secondary transition-colors text-sm"
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
                      className="w-full px-4 py-3 border border-border-soft bg-white text-text-main focus:outline-none focus:border-text-secondary transition-colors text-sm"
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
                      className="w-full px-4 py-3 border border-border-soft bg-white text-text-main focus:outline-none focus:border-text-secondary transition-colors text-sm"
                    >
                      <option value="">Selecciona un asunto</option>
                      <option value="duda-guia">Duda sobre una guía</option>
                      <option value="problema-pago">Problema con el pago</option>
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
                      className="w-full px-4 py-3 border border-border-soft bg-white text-text-main focus:outline-none focus:border-text-secondary transition-colors resize-none text-sm"
                      placeholder="Cuéntanos cómo podemos ayudarte..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 bg-primary hover:bg-primary-dark text-white font-semibold transition-colors text-sm"
                  >
                    Enviar mensaje
                  </button>

                  {error && (
                    <p className="text-xs text-red-600">{error}</p>
                  )}

                  <p className="text-xs text-text-secondary">
                    Responderemos en menos de 24 horas.
                  </p>
                </form>
              ) : (
                <div className="py-12">
                  <p className="font-display italic text-text-main text-2xl mb-4">Mensaje enviado.</p>
                  <p className="text-text-secondary mb-8">
                    Gracias por contactarnos. Te responderemos pronto a tu email.
                  </p>
                  <Link href="/itinerarios" className="text-sm text-primary hover:underline underline-offset-2">
                    ← Volver a las guías
                  </Link>
                </div>
              )}
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              <div className="border-t-2 border-primary pt-5">
                <h3 className="font-semibold text-text-main text-sm mb-2">Preguntas frecuentes</h3>
                <p className="text-text-secondary text-xs leading-relaxed mb-3">
                  Antes de escribirnos, revisa si ya tenemos respuesta para tu duda.
                </p>
                <Link href="/faq" className="text-xs text-primary hover:underline underline-offset-2">
                  Ver FAQ →
                </Link>
              </div>
              <div className="border-t border-border-soft pt-5">
                <h3 className="font-semibold text-text-main text-sm mb-2">Garantía</h3>
                <p className="text-text-secondary text-xs leading-relaxed">
                  48 horas de devolución sin preguntas. Si no te funciona, te devolvemos el dinero.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
