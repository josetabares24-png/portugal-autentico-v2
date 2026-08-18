'use client';

import Image from 'next/image';
import { GetYourGuideWidget } from '@/components/afiliados/GetYourGuideWidget';
import { TiqetsWidget } from '@/components/afiliados/TiqetsWidget';
import { BookingCard } from '@/components/afiliados/BookingCard';
import { useCookieConsent } from '@/lib/consent';
import { resolveBookingLink, type BookableProduct } from '@/data/bookings';

/*
 * Decide con qué mecanismo se pinta un producto del catálogo.
 *
 * Es la frontera entre nuestra página y los proveedores. Por encima de esta
 * línea todo es nuestro: el buscador, los filtros, las categorías y el orden.
 * Por debajo, cada producto pinta lo que su `hub` declara. Por eso no existe
 * un componente «marketplace de un proveedor»: la página no es de nadie, y
 * añadir un partner no la reescribe, sólo añade una rama aquí.
 *
 * El `switch` es exhaustivo a propósito. Si mañana se añade a `bookings.ts`
 * una rama `provider: 'tiqets'` y nadie escribe su componente, el `never` del
 * final deja de compilar. Es la forma barata de que la preparación no se
 * quede en una intención.
 */

interface BookingProductRendererProps {
  product: BookableProduct;
  /** Sólo el primero: es el que compite por ser el LCP. */
  priority?: boolean;
}

export function BookingProductRenderer({ product, priority = false }: BookingProductRendererProps) {
  const consent = useCookieConsent();
  const { hub } = product;
  if (!hub) return null;

  switch (hub.render) {
    case 'widget':
      /*
       * Sin consentimiento el script del proveedor no carga, y su `<div>` se
       * queda vacío. Ocho huecos vacíos parecen una página rota, así que ahí
       * se pinta lo nuestro, que no necesita cookies de nadie.
       */
      if (!consent) return <SinConsentimiento product={product} priority={priority} />;

      switch (hub.provider) {
        case 'getyourguide':
          return (
            /*
             * Envoltorio mínimo, a propósito: ni borde, ni sombra, ni
             * padding. El widget ya dibuja su propia tarjeta, y meterla
             * dentro de otra deja dos marcos y dos sombras concéntricas.
             * Lo único que resuelve este `div` es la celda del grid.
             *
             * `min-w-0` impide el desbordamiento horizontal: sin él la celda
             * se niega a encoger por debajo del ancho del iframe.
             *
             * Sin altura mínima reservada, y es deliberado. Reservar sitio
             * suavizaría el salto al aceptar cookies, pero la cifra correcta
             * es el alto real del iframe, que lo decide el proveedor y aquí
             * no se puede medir. Un número inventado que se quede corto no
             * evita el salto, y uno que se pase deja un hueco blanco fijo
             * debajo de cada tarjeta, todo el rato. Es peor pagar siempre por
             * ahorrar una vez.
             */
            <div className="flex h-full min-w-0 flex-col">
              {/*
               * El nombre, sólo para quien no ve el widget: lectores de
               * pantalla y buscadores. Visualmente no se pinta porque el
               * widget ya lo trae dentro, y repetirlo fuera dejaba el mismo
               * título dos veces seguidas.
               */}
              <h3 className="sr-only">{product.name}</h3>
              <GetYourGuideWidget
                campaign={hub.widget.campaign}
                tourIds={hub.widget.tourId}
                fallbackHref={hub.widget.fallbackHref}
              />
            </div>
          );

        case 'tiqets':
          return (
            <div className="flex h-full min-w-0 flex-col">
              <h3 className="sr-only">{product.name}</h3>
              <TiqetsWidget
                productId={hub.widget.productId}
                partner={hub.widget.partner}
                campaign={hub.widget.campaign}
                layout={hub.widget.layout}
                orientation={hub.widget.orientation}
              />
            </div>
          );
      }

    case 'native-card':
      return (
        <BookingCard
          product={product}
          placement="activities"
          placementLabel="comprar-entradas"
          priority={priority}
        />
      );

    default: {
      const mecanismoSinRenderer: never = hub;
      void mecanismoSinRenderer;
      return null;
    }
  }
}

/*
 * Lo que se ve cuando el visitante todavía no ha aceptado cookies.
 *
 * No es una versión degradada: para los productos que tienen enlace
 * directo es la tarjeta nativa entera, con nuestra foto, nuestro texto y un
 * botón que funciona. Un enlace no necesita permiso de nadie, así que ahí no
 * se pierde ni la venta ni la comisión.
 */
function SinConsentimiento({ product, priority }: { product: BookableProduct; priority: boolean }) {
  const link = resolveBookingLink(product, 'activities');

  if (link) {
    return (
      <BookingCard
        product={product}
        placement="activities"
        placementLabel="comprar-entradas-sin-consentimiento"
        priority={priority}
      />
    );
  }

  return (
    <article className="flex h-full min-w-0 flex-col overflow-hidden rounded-xl border border-border-soft/70 bg-white shadow-card">
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={product.image}
          alt={product.imageAlt}
          fill
          className="object-cover"
          sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 33vw"
          priority={priority}
          loading={priority ? undefined : 'lazy'}
        />
      </div>

      <div className="flex flex-1 flex-col p-5">
        <p className="mb-1.5 font-article text-[11px] font-semibold uppercase tracking-widest text-terracotta">
          {product.kind}
        </p>
        <h3 className="mb-2 font-display text-lg font-semibold not-italic leading-snug text-text-main">
          {product.name}
        </h3>
        <p className="mb-4 font-article text-sm leading-relaxed text-text-secondary">
          {product.blurb}
        </p>
        <p className="mt-auto rounded-lg bg-background-light p-3 font-article text-xs leading-relaxed text-text-secondary">
          Esta opción sólo se reserva desde el módulo del proveedor, que usa sus
          propias cookies. Acepta las cookies para ver aquí precio y disponibilidad.
        </p>
      </div>
    </article>
  );
}
