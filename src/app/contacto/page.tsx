'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

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

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitted(true);
        setFormData({ nombre: '', email: '', asunto: '', mensaje: '' });
        setTimeout(() => {
          setSubmitted(false);
        }, 5000);
      } else {
        alert(data.message || 'Error al enviar el mensaje. Por favor, intenta de nuevo.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Error de conexión. Por favor, intenta de nuevo.');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <main className="bg-background-light">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/images/fabio-vilhena-2FIcT5nHlLo-unsplash.jpg"
            alt="Lisboa panorama"
            fill
            className="object-cover scale-110"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900/70 via-slate-900/60 to-slate-900/80"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-6xl mx-auto px-4 py-20 text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-5 py-2.5 rounded-full text-white border border-white/20 mb-8">
            <span className="material-symbols-outlined text-yellow-400">mail</span>
            <span className="text-sm font-bold tracking-wide">CONTACTO</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-8xl font-black leading-tight mb-6 text-white tracking-tight drop-shadow-2xl">
            Contáctanos
          </h1>

          {/* Subheading */}
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto mb-12 leading-relaxed font-medium drop-shadow-lg">
            ¿Tienes dudas sobre nuestras guías? Estamos aquí para ayudarte
          </p>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <span className="material-symbols-outlined text-white text-4xl opacity-70">expand_more</span>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-24 bg-white">
        <div className="max-w-3xl mx-auto px-4">
          <div className="bg-white rounded-3xl shadow-lg p-8 md:p-12 border border-slate-200">
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
                  className="w-full bg-gradient-to-r from-primary to-orange-500 hover:from-primary-dark hover:to-orange-600 text-white font-bold py-5 rounded-2xl shadow-2xl hover:shadow-primary/50 hover:scale-105 transition-all flex items-center justify-center gap-3 text-lg"
                >
                  <span className="material-symbols-outlined text-2xl">send</span>
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
          <div className="mt-12 bg-background-cream rounded-3xl p-8 border border-slate-200">
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
