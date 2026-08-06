import Link from 'next/link';

interface AffiliateDisclosureProps {
  className?: string;
  /**
   * `default` — tarjeta con borde dorado, para bloques de reserva.
   * `compact` — una sola línea de texto, para colocarla junto al primer CTA
   *   sin cortar el ritmo visual de la página. Hereda el color del
   *   contenedor, así que sirve igual sobre fondo claro y sobre fondo
   *   oscuro. La transparencia se mantiene: cambia el peso visual, no el
   *   hecho de que el aviso esté ahí.
   */
  variant?: 'default' | 'compact';
}

const LEGAL_HREF = '/aviso-legal#3-afiliados-y-enlaces-a-terceros';

export default function AffiliateDisclosure({
  className = '',
  variant = 'default',
}: AffiliateDisclosureProps) {
  if (variant === 'compact') {
    return (
      <p
        role="note"
        aria-label="Divulgación de enlaces de afiliados"
        className={`text-[13px] leading-relaxed ${className}`}
      >
        Algunos enlaces son afiliados. Reservar desde ellos apoya este proyecto
        sin coste adicional para ti.{' '}
        <Link href={LEGAL_HREF} className="underline underline-offset-2 hover:no-underline">
          Más información
        </Link>
        .
      </p>
    );
  }

  return (
    <div
      role="note"
      aria-label="Divulgación de enlaces de afiliados"
      className={`card-surface border-l-2 border-gold px-4 py-3 text-xs leading-relaxed text-text-secondary ${className}`}
    >
      <span className="text-terracotta font-semibold">Divulgación: </span>
      Esta página puede incluir enlaces de afiliados a actividades, tours o reservas. Si
      compras a través de ellos, podemos recibir una pequeña comisión sin coste adicional
      para ti. Elegimos qué recomendar solo por su calidad, no por la comisión.{' '}
      <Link href={LEGAL_HREF} className="underline underline-offset-2 hover:text-terracotta">
        Más información
      </Link>
      .
    </div>
  );
}
