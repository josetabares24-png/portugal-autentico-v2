interface Garantia48hEditorialProps {
  className?: string;
}

export default function Garantia48hEditorial({ className = '' }: Garantia48hEditorialProps) {
  return (
    <div className={`bg-slate-50 border-t border-b border-slate-200 py-12 md:py-16 ${className}`}>
      <div className="max-w-3xl mx-auto px-4">
        
        {/* Header simple */}
        <div className="mb-8">
          <h3 className="text-2xl md:text-3xl font-normal text-slate-900 mb-4" style={{ fontFamily: 'Georgia, serif' }}>
            Garantía de Satisfacción
          </h3>
          <div className="w-12 h-px bg-slate-900"></div>
        </div>

        {/* Contenido editorial limpio */}
        <div className="prose prose-lg max-w-none" style={{ fontFamily: 'Georgia, serif' }}>
          <p className="text-slate-700 leading-relaxed mb-6">
            Si esta guía no cumple tus expectativas en las siguientes 48 horas, te devolvemos el 100% de tu dinero. Sin preguntas, sin complicaciones.
          </p>

          <p className="text-slate-700 leading-relaxed mb-6">
            Creemos en la calidad de nuestro trabajo. Más de 500 viajeros han usado estas guías, y solo hemos procesado 8 devoluciones en los últimos seis meses — la mayoría por compras accidentales, no por insatisfacción con el contenido.
          </p>

          <p className="text-sm text-slate-600 italic">
            Contacta con nosotros en cualquier momento a través de contacto@estabaenlisboa.com y procesaremos tu devolución en menos de 24 horas.
          </p>
        </div>

      </div>
    </div>
  );
}
