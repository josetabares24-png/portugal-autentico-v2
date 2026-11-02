import Image from 'next/image';
import { Breadcrumbs } from '@/components/Breadcrumbs';

/** Cabecera compartida de las rutas reales de uno y tres días.
 * Conserva los datos, las migas y su schema; solo cambia la composición. */

export interface ItineraryHeroMeta {
  label: string;
  value: string;
  /** Nombre de icono de `Icon`. Opcional: sin él, el dato va sin adorno. */
  icon?: string;
}

interface ItineraryHeroProps {
  title: string;
  eyebrow: string;
  lead: string;
  image: string;
  imageAlt: string;
  meta: ItineraryHeroMeta[];
  /** Última miga, la de la página actual. */
  breadcrumbLabel: string;
}

export function ItineraryHero({
  title,
  eyebrow,
  lead,
  image,
  imageAlt,
  meta,
  breadcrumbLabel,
}: ItineraryHeroProps) {
  return (
    <>
      <header className="grok-pack-hero">
        <Image src={image} alt={imageAlt} fill className="grok-pack-hero-image" sizes="100vw" priority fetchPriority="high" />
        <div className="grok-pack-hero-shade" aria-hidden="true" />
        <div className="grok-pack-hero-content">
          {/* El componente compartido, que además emite el `BreadcrumbList`
              de schema.org. Antes esto era un `nav` a mano sin datos
              estructurados. */}
          <div className="grok-hero-breadcrumb"><Breadcrumbs
            items={[
              { label: 'Inicio', href: '/' },
              { label: 'Itinerarios', href: '/itinerarios' },
              { label: breadcrumbLabel },
            ]}
          /></div>

          <p className="grok-pack-script">{eyebrow}</p>
          <h1>{title}</h1>
          <p className="grok-pack-summary">{lead}</p>

          {/*
            `dl` y no una fila de `div`: son pares dato-valor de verdad, y así
            un lector de pantalla los anuncia como tales. A dos columnas en
            móvil, que es lo que cabe sin que el valor se parta.
          */}
        </div>
      </header>
          <dl className="grok-pack-facts">
            {meta.map((m) => (
              <div key={m.label} className="min-w-0">
                <dt>
                  {m.label}
                </dt>
                <dd>
                  {m.value}
                </dd>
              </div>
            ))}
          </dl>
    </>
  );
}
