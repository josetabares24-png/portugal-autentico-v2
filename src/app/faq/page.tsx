'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const faqs = [
  {
    category: 'Compra y Acceso',
    questions: [
      {
        question: "¿Cómo recibo el itinerario después de comprar?",
        answer: "Inmediatamente después del pago recibirás un email con acceso a tu itinerario. Puedes verlo online o descargarlo en PDF para usarlo offline. El acceso es permanente y podrás acceder cuando quieras."
      },
      {
        question: "¿Puedo usar el itinerario sin internet?",
        answer: "Sí. Puedes descargar el PDF completo y los mapas para usarlos sin conexión. Recomendamos descargar todo antes de viajar para tenerlo disponible siempre."
      },
      {
        question: "¿Qué métodos de pago aceptan?",
        answer: "Aceptamos tarjeta de crédito/débito (Visa, Mastercard, Amex) y PayPal. El pago es 100% seguro a través de Stripe."
      },
    ]
  },
  {
    category: 'Contenido',
    questions: [
      {
        question: "¿Los precios de restaurantes son exactos?",
        answer: "Los precios son aproximados basados en nuestra última visita. Pueden variar ligeramente, pero te damos una idea muy cercana de lo que gastarás en cada lugar."
      },
      {
        question: "¿Qué pasa si llueve durante mi viaje?",
        answer: "Cada itinerario incluye alternativas para días de lluvia: museos, mercados cubiertos y experiencias bajo techo para que disfrutes Lisboa con cualquier clima."
      },
      {
        question: "¿Los itinerarios están actualizados?",
        answer: "Sí. Actualizamos los itinerarios cada 3 meses con nuevos restaurantes, horarios y tips. Si algo cambia, te avisamos por email automáticamente."
      },
      {
        question: "¿Incluye entradas a monumentos?",
        answer: "No, el itinerario no incluye entradas. Pero te indicamos precios exactos y dónde comprarlas online para evitar colas y ahorrar tiempo."
      },
    ]
  },
  {
    category: 'Uso y Personalización',
    questions: [
      {
        question: "¿Puedo modificar el itinerario a mi gusto?",
        answer: "Por supuesto. El itinerario es una guía, no una obligación. Puedes saltarte paradas, cambiar el orden o añadir lugares que te interesen. Es 100% flexible."
      },
      {
        question: "¿Es adecuado para familias con niños?",
        answer: "Sí, aunque algunos tramos tienen cuestas. Te indicamos dónde son y alternativas más fáciles. Alfama y Sintra pueden ser cansados para niños pequeños. Tenemos una guía familiar específica."
      },
      {
        question: "¿Cómo funciona la garantía de 14 días?",
        answer: "Si no estás satisfecho por cualquier motivo, escríbenos dentro de los primeros 14 días y te devolvemos el 100% del dinero. Sin preguntas."
      },
    ]
  }
];

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<string | null>(null);

  const toggleFAQ = (catIndex: number, qIndex: number) => {
    const key = `${catIndex}-${qIndex}`;
    setOpenIndex(openIndex === key ? null : key);
  };

  return (
    <main className="min-h-screen bg-[#FFFDF7]">
      {/* HERO - Diseño unificado con el home */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1555881424-ddc427c28ce4?q=80&w=2400"
            alt="Preguntas frecuentes sobre Lisboa"
            fill
            className="object-cover"
            priority
            quality={85}
          />
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900/85 via-slate-800/75 to-orange-900/40"></div>
        </div>

        {/* Decorative shapes */}
        <div className="absolute top-20 right-10 w-64 h-64 bg-orange-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-orange-400/5 rounded-full blur-3xl"></div>

        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-orange-50/10 backdrop-blur-md border-2 border-orange-400/30 rounded-full px-5 py-2.5 mb-10 shadow-lg">
            <svg className="w-4 h-4 text-orange-400" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
            </svg>
            <span className="text-sm font-bold text-orange-100 tracking-wide">SOPORTE Y AYUDA</span>
          </div>

          <h1 className="mb-8">
            <span className="block text-5xl sm:text-6xl lg:text-7xl font-black text-white leading-[1.1] mb-3" style={{ fontFamily: 'Georgia, serif' }}>
              Preguntas Frecuentes
            </span>
            <span className="block text-3xl sm:text-4xl lg:text-5xl font-medium leading-[1.1]" style={{
              background: 'linear-gradient(135deg, #FF6B35 0%, #F7931E 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}>
              Todo lo que necesitas saber
            </span>
          </h1>

          <p className="text-xl sm:text-2xl text-white/90 leading-relaxed max-w-3xl mx-auto">
            Respuestas claras sobre nuestros itinerarios, garantías y cómo funciona todo
          </p>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <svg className="w-6 h-6 text-white/70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </section>

      {/* FAQ Sections */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="space-y-12">
            {faqs.map((category, catIndex) => (
              <div key={catIndex}>
                {/* Category Title */}
                <div className="mb-8">
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-orange-50 rounded-full mb-3">
                    <svg className="w-4 h-4 text-orange-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-sm font-bold text-orange-800">{category.category}</span>
                  </div>
                </div>

                {/* Questions */}
                <div className="space-y-4">
                  {category.questions.map((faq, qIndex) => {
                    const isOpen = openIndex === `${catIndex}-${qIndex}`;
                    return (
                      <div
                        key={qIndex}
                        className="bg-white border-2 border-slate-200 rounded-2xl overflow-hidden hover:border-orange-300 transition-all"
                      >
                        <button
                          onClick={() => toggleFAQ(catIndex, qIndex)}
                          className="w-full px-6 sm:px-8 py-6 flex items-start justify-between gap-4 text-left hover:bg-slate-50 transition-colors"
                        >
                          <h3 className="text-lg sm:text-xl font-bold text-slate-900 flex-1" style={{ fontFamily: 'Georgia, serif' }}>
                            {faq.question}
                          </h3>
                          <svg
                            className={`w-6 h-6 text-orange-500 flex-shrink-0 transition-transform ${isOpen ? 'rotate-180' : ''}`}
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                          </svg>
                        </button>
                        {isOpen && (
                          <div className="px-6 sm:px-8 pb-6 pt-2">
                            <p className="text-slate-600 leading-relaxed text-base sm:text-lg">
                              {faq.answer}
                            </p>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - Diseño unificado */}
      <section className="py-24 bg-gradient-to-br from-[#FF6B35] to-[#F7931E] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-96 h-96 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-4xl mx-auto px-4 text-center">
          <div className="w-20 h-20 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center mx-auto mb-8 shadow-2xl">
            <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z" clipRule="evenodd" />
            </svg>
          </div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-6 tracking-tight" style={{ fontFamily: 'Georgia, serif' }}>
            ¿Tienes otra pregunta?
          </h2>

          <p className="text-xl sm:text-2xl text-white/90 mb-10 max-w-2xl mx-auto leading-relaxed">
            Escríbenos por WhatsApp y te respondemos al instante.<br className="hidden sm:block" />
            Estamos aquí para ayudarte.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://wa.me/351910000000"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-3 bg-white text-orange-600 font-bold px-10 py-5 rounded-2xl shadow-2xl hover:scale-105 transition-all w-full sm:w-auto"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              <span className="text-lg">WhatsApp</span>
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>

            <Link
              href="/itinerarios"
              className="inline-flex items-center justify-center gap-3 bg-white/10 hover:bg-white/20 backdrop-blur-md border-2 border-white/30 text-white font-semibold px-10 py-5 rounded-2xl transition-all w-full sm:w-auto"
            >
              <span className="text-lg">Ver Itinerarios</span>
            </Link>
          </div>

          <p className="text-white/80 text-sm mt-6">✅ Respuesta en minutos · ✅ Soporte 7 días/semana</p>
        </div>
      </section>
    </main>
  );
}
