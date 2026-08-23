import Image from 'next/image';
import Icon from '@/components/Icon';
import { Breadcrumbs } from '@/components/Breadcrumbs';

/*
 * Cabecera de un itinerario.
 *
 * No usa `EditorialPageHero` a propósito, aunque sea el hero del sistema. Ese
 * ocupa `min(56vh, 35rem)` con el título encima de la foto, y funciona en un
 * índice, donde la foto ES el argumento. En el detalle de un itinerario obliga
 * a pasar por delante de una imagen antes de leer de qué va, y lo primero que
 * alguien quiere saber aquí es cuántos días son y qué se ve.
 *
 * Así que sigue el orden del blog: migas, título, entradilla, datos y DESPUÉS
 * la foto. En un móvil de 390 px eso deja el h1, la frase y las cuatro cifras
 * del viaje dentro de la primera pantalla.
 *
 * La tipografía sí es la del sistema: `page-eyebrow`, `page-title` y
 * `page-description`, los mismos tokens que usan `PageIntro` y el resto de
 * páginas. Lo que cambia es la composición, no el lenguaje.
 */

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
      <header className="border-b border-border-soft bg-background-light pt-6 md:pt-10">
        <div className="mx-auto max-w-4xl px-6 md:px-8">
          {/* El componente compartido, que además emite el `BreadcrumbList`
              de schema.org. Antes esto era un `nav` a mano sin datos
              estructurados. */}
          <Breadcrumbs
            items={[
              { label: 'Inicio', href: '/' },
              { label: 'Itinerarios', href: '/itinerarios' },
              { label: breadcrumbLabel },
            ]}
          />

          <p className="page-eyebrow">{eyebrow}</p>
          <h1 className="page-title">{title}</h1>
          <p className="page-description mb-7 md:mb-8">{lead}</p>

          {/*
            `dl` y no una fila de `div`: son pares dato-valor de verdad, y así
            un lector de pantalla los anuncia como tales. A dos columnas en
            móvil, que es lo que cabe sin que el valor se parta.
          */}
          <dl className="grid grid-cols-2 gap-x-4 gap-y-4 border-t border-border-soft py-5 sm:grid-cols-4">
            {meta.map((m) => (
              <div key={m.label} className="min-w-0">
                <dt className="mb-1 flex items-center gap-1.5 font-body text-[11px] font-semibold uppercase tracking-widest text-text-secondary">
                  {m.icon && <Icon name={m.icon} size={13} aria-hidden="true" className="flex-shrink-0" />}
                  {m.label}
                </dt>
                <dd className="font-body text-sm font-semibold leading-snug text-text-main">
                  {m.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </header>

      {/* La foto de portada es el LCP, y por eso lleva `priority`. */}
      <figure className="mx-auto mt-7 max-w-4xl px-6 md:mt-9 md:px-8">
        <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl sm:aspect-[16/9]">
          <Image
            src={image}
            alt={imageAlt}
            fill
            className="object-cover"
            sizes="(max-width: 896px) 100vw, 832px"
            priority
            fetchPriority="high"
          />
        </div>
      </figure>
    </>
  );
}
