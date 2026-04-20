import Link from 'next/link';
import Icon from '@/components/Icon';

export default function ExitoPage() {
  return (
    <main id="main-content" className="bg-background-light py-24">
      <div className="max-w-2xl mx-auto px-6">
        <div className="border-t-2 border-primary pt-8 text-center mb-10">
          <div className="w-10 h-10 bg-primary flex items-center justify-center mx-auto mb-6">
            <Icon name="check_circle" size={20} className="text-white" />
          </div>
          <h1 className="font-display italic text-text-main text-3xl md:text-4xl mb-4">
            ¡Pago completado!
          </h1>
          <p className="text-text-secondary text-sm leading-relaxed max-w-md mx-auto">
            Tu guía está lista. Hemos enviado automáticamente un email con el enlace de descarga, instrucciones y acceso completo.
          </p>
        </div>

        <div className="space-y-4 mb-10">
          <div className="border-t border-border-soft pt-5">
            <div className="flex items-start gap-3">
              <Icon name="info" size={16} className="text-primary mt-0.5 flex-shrink-0" />
              <div>
                <p className="font-semibold text-text-main text-sm mb-1">¿No recibes el email?</p>
                <p className="text-text-secondary text-xs leading-relaxed">
                  Los emails se envían automáticamente al completar el pago. Revisa spam o promociones,
                  espera hasta 5 minutos, o escríbenos a{' '}
                  <a href="mailto:hola@estabaenlisboa.com" className="text-primary hover:underline">hola@estabaenlisboa.com</a>
                </p>
              </div>
            </div>
          </div>

          <div className="border-t border-border-soft pt-5">
            <div className="flex items-start gap-3">
              <Icon name="email" size={16} className="text-primary mt-0.5 flex-shrink-0" />
              <div>
                <p className="font-semibold text-text-main text-sm mb-1">¿Qué incluye el email?</p>
                <p className="text-text-secondary text-xs leading-relaxed">
                  Enlace seguro de descarga (válido 30 días) · Acceso completo a tu guía premium · Instrucciones detalladas · Información de soporte
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            href="/mis-guias"
            className="inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary-dark text-white font-semibold px-6 py-3 text-sm transition-colors"
          >
            Ver mis guías
          </Link>
          <Link
            href="/itinerarios"
            className="inline-flex items-center justify-center gap-2 border border-border-soft hover:border-primary text-text-main font-semibold px-6 py-3 text-sm transition-colors"
          >
            Ver más guías
          </Link>
        </div>
      </div>
    </main>
  );
}
