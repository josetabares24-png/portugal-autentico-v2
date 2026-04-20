'use client';

import { useState } from 'react';
import Link from 'next/link';

const faqs = [
  {
    category: 'Compra y Acceso',
    questions: [
      {
        question: '¿Cómo recibo el itinerario después de comprar?',
        answer: 'Inmediatamente después del pago recibirás acceso instantáneo a tu Guía Digital Interactiva. Puedes verla online desde cualquier dispositivo con conexión a internet. El acceso es permanente y podrás consultarla cuando quieras.',
      },
      {
        question: '¿Puedo usar el itinerario sin internet?',
        answer: 'Sí. Puedes descargar mapas offline, coordenadas GPS y un checklist en formato PNG para usarlo sin conexión. Recomendamos descargar estos recursos antes de viajar para tenerlos disponibles siempre.',
      },
      {
        question: '¿Qué métodos de pago aceptan?',
        answer: 'Aceptamos tarjeta de crédito/débito (Visa, Mastercard, Amex) y PayPal. El pago es 100% seguro a través de Stripe.',
      },
    ],
  },
  {
    category: 'Contenido',
    questions: [
      {
        question: '¿Los precios de restaurantes son exactos?',
        answer: 'Los precios son aproximados basados en nuestra última visita. Pueden variar ligeramente, pero te damos una idea muy cercana de lo que gastarás en cada lugar.',
      },
      {
        question: '¿Los itinerarios están actualizados?',
        answer: 'Sí. Actualizamos los itinerarios cada 3 meses con nuevos restaurantes, horarios y tips. Si algo cambia, te avisamos por email automáticamente.',
      },
      {
        question: '¿Incluye entradas a monumentos?',
        answer: 'No, el itinerario no incluye entradas. Pero te indicamos precios exactos y dónde comprarlas online para evitar colas y ahorrar tiempo.',
      },
    ],
  },
  {
    category: 'Uso y Personalización',
    questions: [
      {
        question: '¿Puedo modificar el itinerario a mi gusto?',
        answer: 'Por supuesto. El itinerario es una guía, no una obligación. Puedes saltarte paradas, cambiar el orden o añadir lugares que te interesen. Es 100% flexible.',
      },
      {
        question: '¿Es adecuado para familias con niños?',
        answer: 'Sí, aunque algunos tramos tienen cuestas. Te indicamos dónde son y alternativas más fáciles. Alfama y Sintra pueden ser cansados para niños pequeños. Tenemos una guía familiar específica.',
      },
      {
        question: '¿Cómo funciona la garantía de 48 horas?',
        answer: 'Si no estás satisfecho por cualquier motivo, escríbenos dentro de las primeras 48 horas después de tu compra y te devolvemos el 100% del dinero. Sin preguntas.',
      },
    ],
  },
];

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.flatMap((cat) =>
    cat.questions.map((q) => ({
      '@type': 'Question',
      name: q.question,
      acceptedAnswer: { '@type': 'Answer', text: q.answer },
    }))
  ),
};

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<string | null>(null);

  const toggleFAQ = (catIndex: number, qIndex: number) => {
    const key = `${catIndex}-${qIndex}`;
    setOpenIndex(openIndex === key ? null : key);
  };

  return (
    <main id="main-content">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      {/* Cabecera */}
      <section className="bg-background-light pt-20 pb-12 border-b border-border-soft">
        <div className="max-w-3xl mx-auto px-6">
          <p className="text-xs text-text-secondary uppercase tracking-widest mb-3">Ayuda</p>
          <h1 className="font-display italic text-text-main text-4xl md:text-5xl leading-tight">
            Preguntas frecuentes
          </h1>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-background-light py-16">
        <div className="max-w-3xl mx-auto px-6">
          <div className="space-y-14">
            {faqs.map((category, catIndex) => (
              <div key={catIndex}>
                <p className="text-xs uppercase tracking-widest text-primary font-semibold mb-6 pb-3 border-b border-border-soft">
                  {category.category}
                </p>
                <div className="space-y-0">
                  {category.questions.map((faq, qIndex) => {
                    const isOpen = openIndex === `${catIndex}-${qIndex}`;
                    return (
                      <div key={qIndex} className="border-b border-border-soft">
                        <button
                          onClick={() => toggleFAQ(catIndex, qIndex)}
                          className="w-full py-5 flex items-start justify-between gap-4 text-left"
                          aria-expanded={isOpen}
                        >
                          <span className="font-semibold text-text-main text-sm md:text-base leading-snug">
                            {faq.question}
                          </span>
                          <span className={`text-text-secondary flex-shrink-0 text-lg leading-none transition-transform ${isOpen ? 'rotate-45' : ''}`}>
                            +
                          </span>
                        </button>
                        {isOpen && (
                          <div className="pb-5">
                            <p className="text-text-secondary text-sm leading-relaxed">
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

      {/* CTA */}
      <section className="bg-[#1a2b4a] py-16">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <h2 className="font-display italic text-white text-2xl md:text-3xl mb-4">
            ¿Tienes otra pregunta?
          </h2>
          <p className="text-white/60 mb-8">
            Escríbenos y te respondemos en menos de 24 horas.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contacto"
              className="px-8 py-3 bg-primary hover:bg-primary-dark text-white font-semibold transition-colors"
            >
              Contactar
            </Link>
            <Link
              href="/itinerarios"
              className="px-8 py-3 border border-white/20 hover:border-white/40 text-white font-semibold transition-colors"
            >
              Ver guías
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
