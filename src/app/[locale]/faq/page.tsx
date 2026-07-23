'use client';

import { useState } from 'react';
import Link from 'next/link';

const faqs = [
  {
    category: 'Acceso y uso',
    questions: [
      {
        question: '¿Cómo accedo a los itinerarios?',
        answer: 'Todas las guías públicas son gratuitas. Puedes abrirlas directamente desde la sección de itinerarios y consultarlas online desde cualquier dispositivo con conexión a internet.',
      },
      {
        question: '¿Puedo usar el itinerario sin internet?',
        answer: 'Sí. Puedes descargar mapas offline, coordenadas GPS y un checklist en formato PNG para usarlo sin conexión. Recomendamos descargar estos recursos antes de viajar para tenerlos disponibles siempre.',
      },
      {
        question: '¿Necesito crear una cuenta?',
        answer: 'No necesitas iniciar sesión para leer las guías públicas. El acceso con cuenta se mantiene solo para funciones internas de administración.',
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
        answer: 'Sí. Actualizamos los itinerarios con nuevos restaurantes, horarios y consejos locales cuando detectamos cambios relevantes.',
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
        question: '¿Puedo pedir ayuda personalizada?',
        answer: 'Sí. Si necesitas adaptar una ruta a tus fechas, ritmo o intereses, puedes escribirnos desde contacto o desde Planifica tu viaje.',
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
      <section className="bg-background-light py-20">
        <div className="max-w-3xl mx-auto px-6">
          <div className="space-y-14">
            {faqs.map((category, catIndex) => (
              <div key={catIndex}>
                <span className="badge-pill inline-flex bg-terracotta/10 text-terracotta mb-6">
                  {category.category}
                </span>
                <div className="card-surface divide-y divide-border-soft overflow-hidden">
                  {category.questions.map((faq, qIndex) => {
                    const isOpen = openIndex === `${catIndex}-${qIndex}`;
                    return (
                      <div key={qIndex}>
                        <button
                          onClick={() => toggleFAQ(catIndex, qIndex)}
                          className="w-full py-5 px-6 flex items-start justify-between gap-4 text-left"
                          aria-expanded={isOpen}
                        >
                          <span className="font-semibold text-text-main text-sm md:text-base leading-snug">
                            {faq.question}
                          </span>
                          <span className={`text-terracotta flex-shrink-0 text-lg leading-none transition-transform ${isOpen ? 'rotate-45' : ''}`}>
                            +
                          </span>
                        </button>
                        {isOpen && (
                          <div className="pb-5 px-6">
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
      <section className="relative bg-night bg-azulejo-pattern-gold py-20 overflow-hidden">
        <div className="relative max-w-2xl mx-auto px-6 text-center">
          <h2 className="font-display italic text-white text-3xl md:text-4xl mb-4">
            ¿Tienes otra pregunta?
          </h2>
          <p className="text-white/60 mb-8">
            Escríbenos y te respondemos en menos de 24 horas.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contacto"
              className="btn-primary px-8 py-3"
            >
              Contactar
            </Link>
            <Link
              href="/itinerarios"
              className="btn-ghost-light px-8 py-3"
            >
            Ver guías
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
