'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function ContactoPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    
    // Simular envío (aquí integrarías con tu backend o servicio de email)
    setTimeout(() => {
      setStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      
      // Reset después de 3 segundos
      setTimeout(() => setStatus('idle'), 3000);
    }, 1500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <main className="min-h-screen bg-background-light">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-slate-900 via-primary to-slate-900 overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-azulejo-pattern"></div>
        <div className="relative max-w-4xl mx-auto px-4 text-center">
          <span className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm text-white rounded-full text-sm font-bold uppercase tracking-wide mb-6 border border-white/20">
            <span className="material-symbols-outlined text-base align-middle mr-2">chat</span>
            Estamos aquí para ti
          </span>
          <h1 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tight">
            Hablemos de tu viaje<br />
            <span className="text-amber-300">a Lisboa</span>
          </h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto leading-relaxed">
            ¿Dudas sobre qué itinerario elegir? ¿Preguntas sobre la ciudad? Escríbenos y te respondemos en menos de 24 horas.
          </p>
        </div>
      </section>

      {/* Quick Contact Cards */}
      <section className="py-12 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-6">
            {/* WhatsApp */}
            <a 
              href="https://wa.me/351912345678" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group bg-gradient-to-br from-green-50 to-green-100 border-2 border-green-200 rounded-2xl p-6 hover:shadow-xl transition-all hover:-translate-y-2"
            >
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 bg-green-500 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                  <span className="material-symbols-outlined text-white text-3xl">chat</span>
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-slate-900 text-lg mb-1">WhatsApp</h3>
                  <p className="text-slate-600 text-sm mb-2">Respuesta instantánea</p>
                  <p className="text-green-700 font-semibold">+351 912 345 678</p>
                </div>
                <span className="material-symbols-outlined text-green-600 group-hover:translate-x-1 transition-transform">arrow_forward</span>
              </div>
            </a>

            {/* Email */}
            <a 
              href="mailto:hola@estabaenlisboa.com"
              className="group bg-gradient-to-br from-primary/10 to-orange-100 border-2 border-primary/20 rounded-2xl p-6 hover:shadow-xl transition-all hover:-translate-y-2"
            >
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 bg-primary rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                  <span className="material-symbols-outlined text-white text-3xl">mail</span>
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-slate-900 text-lg mb-1">Email</h3>
                  <p className="text-slate-600 text-sm mb-2">Respuesta en 24h</p>
                  <p className="text-primary font-semibold">hola@estabaenlisboa.com</p>
                </div>
                <span className="material-symbols-outlined text-primary group-hover:translate-x-1 transition-transform">arrow_forward</span>
              </div>
            </a>

            {/* Instagram */}
            <a 
              href="https://instagram.com/estabaenlisboa" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group bg-gradient-to-br from-pink-50 to-purple-100 border-2 border-pink-200 rounded-2xl p-6 hover:shadow-xl transition-all hover:-translate-y-2"
            >
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 bg-gradient-to-br from-pink-500 to-purple-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                  <span className="material-symbols-outlined text-white text-3xl">photo_camera</span>
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-slate-900 text-lg mb-1">Instagram</h3>
                  <p className="text-slate-600 text-sm mb-2">Síguenos para tips</p>
                  <p className="text-pink-700 font-semibold">@estabaenlisboa</p>
                </div>
                <span className="material-symbols-outlined text-pink-600 group-hover:translate-x-1 transition-transform">arrow_forward</span>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* Main Contact Form Section */}
      <section className="py-20 bg-background-cream">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left Column - Info */}
            <div>
              <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-6 tracking-tight">
                Cuéntanos, ¿en qué te podemos ayudar?
              </h2>
              <p className="text-slate-600 text-lg mb-10 leading-relaxed">
                Ya sea que tengas dudas sobre qué pack elegir, necesites recomendaciones personalizadas, o simplemente quieras saber más sobre Lisboa, estamos aquí para ti.
              </p>

              {/* FAQs Preview */}
              <div className="bg-white rounded-2xl p-6 border border-slate-200 mb-8">
                <div className="flex items-center gap-3 mb-4">
                  <span className="material-symbols-outlined text-primary text-3xl">help</span>
                  <h3 className="text-xl font-bold text-slate-900">Preguntas Frecuentes</h3>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-green-500 text-sm mt-0.5">check_circle</span>
                    <Link href="/faq" className="text-slate-600 hover:text-primary transition-colors">
                      ¿Cuándo recibiré mi itinerario?
                    </Link>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-green-500 text-sm mt-0.5">check_circle</span>
                    <Link href="/faq" className="text-slate-600 hover:text-primary transition-colors">
                      ¿Puedo personalizar el itinerario?
                    </Link>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-green-500 text-sm mt-0.5">check_circle</span>
                    <Link href="/faq" className="text-slate-600 hover:text-primary transition-colors">
                      ¿Hay descuento para grupos?
                    </Link>
                  </li>
                </ul>
                <Link 
                  href="/faq" 
                  className="inline-flex items-center gap-2 mt-4 text-primary font-semibold hover:gap-3 transition-all"
                >
                  Ver todas las preguntas
                  <span className="material-symbols-outlined text-lg">arrow_forward</span>
                </Link>
              </div>

              {/* Image */}
              <div className="relative h-64 rounded-2xl overflow-hidden shadow-xl hidden lg:block">
                <Image
                  src="https://images.unsplash.com/photo-1548707309-dcebeab9ea9b?w=800"
                  alt="Lisboa"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Right Column - Form */}
            <div className="bg-white rounded-3xl p-8 md:p-10 shadow-2xl border border-slate-200">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                  <span className="material-symbols-outlined text-primary text-2xl">edit_note</span>
                </div>
                <h3 className="text-2xl font-bold text-slate-900">Envíanos un mensaje</h3>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">
                    Nombre completo *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-4 border-2 border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                    placeholder="Tu nombre"
                  />
                </div>

                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-4 border-2 border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                    placeholder="tu@email.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">
                    ¿Sobre qué quieres hablar? *
                  </label>
                  <select
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-4 border-2 border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all appearance-none bg-white"
                  >
                    <option value="">Selecciona una opción</option>
                    <option value="itinerario">Ayuda para elegir itinerario</option>
                    <option value="personalizado">Itinerario personalizado</option>
                    <option value="colaboracion">Colaboración / Prensa</option>
                    <option value="soporte">Soporte técnico</option>
                    <option value="otro">Otro</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">
                    Mensaje *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-4 border-2 border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent resize-none transition-all"
                    placeholder="Cuéntanos con el máximo detalle posible..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className={`w-full flex items-center justify-center gap-3 py-5 rounded-xl font-bold text-lg transition-all ${
                    status === 'sending'
                      ? 'bg-slate-400 cursor-not-allowed'
                      : status === 'success'
                      ? 'bg-green-500 hover:bg-green-600'
                      : 'bg-primary hover:bg-primary-dark hover:scale-105 shadow-lg hover:shadow-primary/50'
                  } text-white`}
                >
                  {status === 'sending' && (
                    <>
                      <span className="material-symbols-outlined animate-spin">progress_activity</span>
                      Enviando...
                    </>
                  )}
                  {status === 'success' && (
                    <>
                      <span className="material-symbols-outlined">check_circle</span>
                      ¡Mensaje enviado!
                    </>
                  )}
                  {status === 'idle' && (
                    <>
                      <span className="material-symbols-outlined">send</span>
                      Enviar mensaje
                    </>
                  )}
                  {status === 'error' && 'Error - Intenta de nuevo'}
                </button>

                <p className="text-xs text-slate-500 text-center">
                  Normalmente respondemos en menos de 24 horas (días laborables)
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Alternate Contact Methods */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h3 className="text-2xl font-bold text-slate-900 mb-4">
            ¿Prefieres otro método de contacto?
          </h3>
          <p className="text-slate-600 mb-8">
            Estamos activos en varias plataformas. Elige la que prefieras.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a 
              href="https://wa.me/351912345678" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 bg-green-500 hover:bg-green-600 text-white rounded-xl font-semibold transition-all hover:scale-105"
            >
              <span className="material-symbols-outlined">chat</span>
              WhatsApp
            </a>
            <a 
              href="https://t.me/estabaenlisboa" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-xl font-semibold transition-all hover:scale-105"
            >
              <span className="material-symbols-outlined">send</span>
              Telegram
            </a>
            <a 
              href="https://instagram.com/estabaenlisboa" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white rounded-xl font-semibold transition-all hover:scale-105"
            >
              <span className="material-symbols-outlined">photo_camera</span>
              Instagram DM
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
