import { GetYourGuideWidget } from '@/components/afiliados/GetYourGuideWidget';
import type { BookableProduct } from '@/data/bookings';

/*
 * Un producto del hub: nuestro criterio arriba, la reserva del proveedor
 * abajo.
 *
 * Deliberadamente no dibuja tarjeta. El widget ya viene con su fondo blanco,
 * su borde y su sombra; envolverlo en `card-surface` pintaría un marco
 * alrededor de otro marco. Y tampoco repite nombre, precio, valoración ni
 * duración: eso lo pone el widget, cambia con el tiempo, y duplicarlo aquí
 * sería crear una copia que se desactualiza sola.
 *
 * Lo único que aportamos es el contexto: para quién es y cuándo merece la
 * pena. El nombre va como encabezado porque es lo que da estructura a la
 * página y permite enlazar a cada categoría, no para repetir al widget.
 */
export function BookingProductBlock({ product }: { product: BookableProduct }) {
  return (
    <div className="flex h-full min-w-0 flex-col">
      <h3 className="font-display italic text-text-main text-lg leading-snug mb-2">
        {product.name}
      </h3>
      <p className="mb-4 text-sm leading-relaxed text-text-secondary">{product.blurb}</p>

      {/* `mt-auto` alinea abajo el arranque de los widgets de una misma fila,
          aunque las microdescripciones tengan distinto número de líneas. */}
      <div className="mt-auto">
        {product.provider === 'getyourguide' && product.widget && (
          <GetYourGuideWidget
            campaign={product.widget.campaign}
            tourIds={product.widget.tourId}
            fallbackHref={product.widget.fallbackHref}
          />
        )}
        {/* Cuando entre Tiqets, su forma de reservar se añade aquí como otra
            rama. El resto de la página no se entera. */}
      </div>
    </div>
  );
}
