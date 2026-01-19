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
        answer: "Inmediatamente después del pago recibirás acceso instantáneo a tu Guía Digital Interactiva. Puedes verla online desde cualquier dispositivo con conexión a internet. El acceso es permanente y podrás consultarla cuando quieras."
      },
      {
        question: "¿Puedo usar el itinerario sin internet?",
        answer: "Sí. Puedes descargar mapas offline, coordenadas GPS y un checklist en formato PNG para usarlo sin conexión. Recomendamos descargar estos recursos antes de viajar para tenerlos disponibles siempre."
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
        question: "¿Cómo funciona la garantía de 48 horas?",
        answer: "Si no estás satisfecho por cualquier motivo, escríbenos dentro de las primeras 48 horas después de tu compra y te devolvemos el 100% del dinero. Sin preguntas."
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
    <main className="bg-background-light">
      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/images/veronika-jorjobert-mR_AxcbVivg-unsplash.jpg"
            alt="FAQ Lisboa"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-6xl mx-auto px-6 py-16 text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-md px-5 py-2.5 rounded-full text-white border border-white/25 mb-8">
            <span className="material-symbols-outlined text-base">help</span>
            <span className="text-sm font-semibold tracking-wide">Preguntas frecuentes</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-display font-black leading-tight mb-6 text-white tracking-tight drop-shadow-lg">
            Preguntas<br />
            <span className="text-accent">Frecuentes</span>
          </h1>

          {/* Subheading */}
          <p className="text-lg md:text-xl text-white/95 max-w-3xl mx-auto mb-10 leading-relaxed font-normal">
            Respuestas claras sobre nuestros itinerarios, garantías y cómo funciona todo
          </p>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <span className="material-symbols-outlined text-white text-4xl opacity-70">expand_more</span>
        </div>
      </section>

      {/* FAQ Sections */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="space-y-12">
            {faqs.map((category, catIndex) => (
              <div key={catIndex}>
                {/* Category Title */}
                <div className="mb-8">
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-3">
                    <span className="material-symbols-outlined text-primary text-lg">check_circle</span>
                    <span className="text-sm font-bold text-primary">{category.category}</span>
                  </div>
                </div>

                {/* Questions */}
                <div className="space-y-4">
                  {category.questions.map((faq, qIndex) => {
                    const isOpen = openIndex === `${catIndex}-${qIndex}`;
                    return (
                      <div
                        key={qIndex}
                        className="bg-white border-2 border-slate-200 rounded-3xl overflow-hidden hover:border-primary transition-all shadow-lg hover:shadow-xl"
                      >
                        <button
                          onClick={() => toggleFAQ(catIndex, qIndex)}
                          className="w-full px-6 sm:px-8 py-6 flex items-start justify-between gap-4 text-left hover:bg-slate-50 transition-colors"
                        >
                          <h3 className="text-lg sm:text-xl font-bold text-slate-900 flex-1">
                            {faq.question}
                          </h3>
                          <span className={`material-symbols-outlined text-primary flex-shrink-0 transition-transform ${isOpen ? 'rotate-180' : ''}`}>
                            expand_more
                          </span>
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

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-primary to-orange-500 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-azulejo-pattern"></div>
        <div className="relative max-w-5xl mx-auto px-4 text-center">
          <span className="material-symbols-outlined text-white text-7xl mb-6 inline-block">chat</span>
          <h2 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tight">
            ¿Tienes otra pregunta?
          </h2>
          <p className="text-xl md:text-2xl text-white/90 mb-10 max-w-2xl mx-auto leading-relaxed">
            Escríbenos y te respondemos al instante. Estamos aquí para ayudarte.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contacto"
              className="group flex items-center justify-center gap-3 px-10 py-5 bg-white text-primary rounded-2xl font-bold text-xl shadow-2xl hover:scale-105 transition-all"
            >
              <span className="material-symbols-outlined text-2xl">mail</span>
              Contactar
              <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
            </Link>
            <Link
              href="/itinerarios"
              className="flex items-center justify-center gap-3 px-10 py-5 bg-white/10 backdrop-blur-md hover:bg-white/20 text-white rounded-2xl font-bold text-xl border-2 border-white/30 transition-all"
            >
              <span className="material-symbols-outlined text-2xl">map</span>
              Ver Guías
            </Link>
          </div>
          <p className="text-white/80 text-sm mt-6">✅ Respuesta en menos de 24h · ✅ Soporte 7 días/semana</p>
        </div>
      </section>
    </main>
  );
}
