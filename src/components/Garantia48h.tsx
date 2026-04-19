interface Garantia48hEditorialProps {
  className?: string;
}

export default function Garantia48hEditorial({ className = '' }: Garantia48hEditorialProps) {
  return (
    <div className={`bg-background-light border-t border-b border-border-soft py-12 md:py-16 ${className}`}>
      <div className="max-w-3xl mx-auto px-6">
        <div className="mb-6">
          <h3 className="font-display italic text-text-main text-2xl md:text-3xl mb-4">
            Garantía de Satisfacción
          </h3>
          <div className="w-12 h-px bg-primary"></div>
        </div>
        <div className="space-y-4">
          <p className="text-text-secondary text-sm leading-relaxed">
            Si esta guía no cumple tus expectativas en las siguientes 48 horas, te devolvemos el 100% de tu dinero. Sin preguntas, sin complicaciones.
          </p>
          <p className="text-text-secondary text-sm leading-relaxed">
            Creemos en la calidad de nuestro trabajo y queremos que pruebes la guía con total tranquilidad.
          </p>
          <p className="text-text-secondary text-xs italic">
            Contacta con nosotros en cualquier momento a través de contacto@estabaenlisboa.com y procesaremos tu devolución en menos de 24 horas.
          </p>
        </div>
      </div>
    </div>
  );
}
