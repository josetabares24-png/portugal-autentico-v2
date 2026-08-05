import Link from 'next/link';

interface AffiliateDisclosureProps {
  className?: string;
}

export default function AffiliateDisclosure({ className = '' }: AffiliateDisclosureProps) {
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
      <Link href="/aviso-legal#3-afiliados-y-enlaces-a-terceros" className="underline underline-offset-2 hover:text-terracotta">
        Más información
      </Link>
      .
    </div>
  );
}
