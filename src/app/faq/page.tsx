import Link from 'next/link';

const faqs = [
  {
    question: "Como recibo el itinerario despues de comprar?",
    answer: "Inmediatamente despues del pago recibiras un email con acceso a tu itinerario. Puedes verlo online o descargarlo en PDF para usarlo offline. El acceso es permanente."
  },
  {
    question: "Puedo usar el itinerario sin internet?",
    answer: "Si. Puedes descargar el PDF completo y los mapas para usarlos sin conexion. Recomendamos descargar todo antes de viajar."
  },
  {
    question: "Los precios de restaurantes son exactos?",
    answer: "Los precios son aproximados basados en nuestra ultima visita. Pueden variar ligeramente, pero te damos una idea muy cercana de lo que gastaras."
  },
  {
    question: "Que pasa si llueve durante mi viaje?",
    answer: "Cada itinerario incluye alternativas para dias de lluvia: museos, mercados cubiertos y experiencias bajo techo."
  },
  {
    question: "Como funciona la garantia de 14 dias?",
    answer: "Si no estas satisfecho por cualquier motivo, escribenos dentro de los primeros 14 dias y te devolvemos el 100% del dinero. Sin preguntas."
  },
  {
    question: "Los itinerarios estan actualizados?",
    answer: "Si. Actualizamos los itinerarios cada 3 meses con nuevos restaurantes, horarios y tips. Si algo cambia, te avisamos por email."
  },
  {
    question: "Puedo modificar el itinerario a mi gusto?",
    answer: "Por supuesto. El itinerario es una guia, no una obligacion. Puedes saltarte paradas, cambiar el orden o anadir lugares que te interesen."
  },
  {
    question: "Incluye entradas a monumentos?",
    answer: "No, el itinerario no incluye entradas. Pero te indicamos precios exactos y donde comprarlas online para evitar colas."
  },
  {
    question: "Es adecuado para familias con ninos?",
    answer: "Si, aunque algunos tramos tienen cuestas. Te indicamos donde son y alternativas mas faciles. Alfama y Sintra pueden ser cansados para ninos pequenos."
  },
  {
    question: "Que metodos de pago aceptan?",
    answer: "Aceptamos tarjeta de credito/debito (Visa, Mastercard, Amex) y PayPal. El pago es 100% seguro."
  }
];

export default function FAQPage() {
  return (
    <main className="min-h-screen bg-slate-50">
      <section className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 py-20">
        <div className="relative max-w-4xl mx-auto px-4 text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Preguntas Frecuentes</h1>
          <p className="text-xl text-slate-300">Todo lo que necesitas saber sobre nuestros itinerarios</p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-3xl mx-auto px-4">
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 shadow-sm">
                <h3 className="text-lg font-bold text-slate-900 mb-3">{faq.question}</h3>
                <p className="text-slate-600">{faq.answer}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-8 text-center text-white">
            <h3 className="text-2xl font-bold mb-4">Tienes otra pregunta?</h3>
            <p className="text-blue-100 mb-6">Escribenos y te respondemos en menos de 24 horas</p>
            <Link href="/contacto" className="inline-block bg-white text-blue-600 px-8 py-3 rounded-xl font-bold hover:shadow-lg transition-all">
              Contactar
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
