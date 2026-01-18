'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function ContactoPage() {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    asunto: '',
    mensaje: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // TODO: Integrar con tu servicio de email (ConvertKit, Resend, etc.)
    console.log('Form submitted:', formData);

    // Simular envío
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ nombre: '', email: '', asunto: '', mensaje: '' });
    }, 5000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <main className="min-h-screen bg-background-light">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-slate-900 to-slate-800 overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-azulejo-pattern"></div>

        <div className="relative max-w-4xl mx-auto px-4 text-center">
          <span className="material-symbols-outlined text-primary text-6xl mb-6 inline-block">mail</span>
          <h1 className="text-4xl md:text-6xl font-black text-white mb-4 tracking-tight">
            Contáctanos
          </h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            ¿Tienes dudas sobre nuestras guías? Estamos aquí para ayudarte
          </p>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20">
        <div className="max-w-3xl mx-auto px-4">
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 border border-slate-200">
            {!submitted ? (
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Nombre */}
                <div>
                  <label htmlFor="nombre" className="block text-sm font-bold text-slate-900 mb-2">
                    Nombre *
                  </label>
                  <input
                    type="text"
                    id="nombre"
                    name="nombre"
                    value={formData.nombre}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border-2 border-slate-200 rounded-xl focus:border-primary focus:outline-none transition-colors"
                    placeholder="Tu nombre"
                  />
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-sm font-bold text-slate-900 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border-2 border-slate-200 rounded-xl focus:border-primary focus:outline-none transition-colors"
                    placeholder="tu@email.com"
                  />
                </div>

                {/* Asunto */}
                <div>
                  <label htmlFor="asunto" className="block text-sm font-bold text-slate-900 mb-2">
                    Asunto *
                  </label>
                  <select
                    id="asunto"
                    name="asunto"
                    value={formData.asunto}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border-2 border-slate-200 rounded-xl focus:border-primary focus:outline-none transition-colors"
                  >
                    <option value="">Selecciona un asunto</option>
                    <option value="duda-guia">Duda sobre una guía</option>
                    <option value="problema-pago">Problema con el pago</option>
                    <option value="sugerencia">Sugerencia o feedback</option>
                    <option value="colaboracion">Propuesta de colaboración</option>
                    <option value="otro">Otro</option>
                  </select>
                </div>

                {/* Mensaje */}
                <div>
                  <label htmlFor="mensaje" className="block text-sm font-bold text-slate-900 mb-2">
                    Mensaje *
                  </label>
                  <textarea
                    id="mensaje"
                    name="mensaje"
                    value={formData.mensaje}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border-2 border-slate-200 rounded-xl focus:border-primary focus:outline-none transition-colors resize-none"
                    placeholder="Cuéntanos cómo podemos ayudarte..."
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-primary to-orange-500 hover:from-primary-dark hover:to-orange-600 text-white font-bold py-4 rounded-xl shadow-lg hover:scale-105 transition-all flex items-center justify-center gap-2"
                >
                  <span className="material-symbols-outlined">send</span>
                  Enviar mensaje
                </button>

                <p className="text-xs text-slate-500 text-center">
                  Responderemos en menos de 24 horas
                </p>
              </form>
            ) : (
              <div className="text-center py-12">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="material-symbols-outlined text-green-500 text-5xl">check_circle</span>
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-3">
                  ¡Mensaje enviado!
                </h3>
                <p className="text-slate-600 mb-6">
                  Gracias por contactarnos. Te responderemos pronto a tu email.
                </p>
                <Link
                  href="/itinerarios"
                  className="inline-flex items-center gap-2 text-primary hover:text-primary-dark font-bold"
                >
                  <span className="material-symbols-outlined">arrow_back</span>
                  Volver a guías
                </Link>
              </div>
            )}
          </div>

          {/* FAQ Quick Links */}
          <div className="mt-12 bg-slate-50 rounded-2xl p-8 border border-slate-200">
            <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
              <span className="material-symbols-outlined text-primary">help</span>
              Preguntas Frecuentes
            </h3>
            <div className="space-y-3">
              <Link
                href="/faq"
                className="block p-4 bg-white rounded-xl hover:shadow-md transition-shadow border border-slate-100"
              >
                <p className="font-semibold text-slate-900 mb-1">¿Cómo accedo a mi guía?</p>
                <p className="text-sm text-slate-600">Después del pago, recibirás acceso instantáneo a tu Guía Digital Interactiva</p>
              </Link>
              <Link
                href="/faq"
                className="block p-4 bg-white rounded-xl hover:shadow-md transition-shadow border border-slate-100"
              >
                <p className="font-semibold text-slate-900 mb-1">¿Qué incluyen las guías?</p>
                <p className="text-sm text-slate-600">Itinerarios detallados, restaurantes, GPS, horarios y mapas offline</p>
              </Link>
              <Link
                href="/faq"
                className="block p-4 bg-white rounded-xl hover:shadow-md transition-shadow border border-slate-100"
              >
                <p className="font-semibold text-slate-900 mb-1">¿Tienen garantía de reembolso?</p>
                <p className="text-sm text-slate-600">Sí, 48 horas de garantía sin preguntas</p>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
