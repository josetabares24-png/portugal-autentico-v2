import { GetYourGuideWidget } from '@/components/afiliados/GetYourGuideWidget';
import type { BookableProduct } from '@/data/bookings';

/*
 * Producto que se reserva a través del widget del proveedor.
 *
 * Hoy sólo lo usa la excursión completa de Sintra, porque es el único de los
 * seis que no tiene enlace directo exacto: su widget es su único mecanismo de
 * reserva. Los demás llevan tarjeta nativa (`BookingCard`), que convierte
 * mejor porque el widget no muestra precio ni botón.
 *
 * No dibuja tarjeta propia: el widget ya trae su fondo, su borde y su sombra,
 * y envolverlo pintaría un marco alrededor de otro. Tampoco repite nombre ni
 * valoración, que las pone él.
 */
export function BookingProductBlock({ product }: { product: BookableProduct }) {
  return (
    /*
     * Mismo marco que `BookingCard`: radio, borde, sombra y fondo blanco. Con
     * eso el bloque pertenece a la misma familia aunque dentro lleve el
     * módulo del proveedor en lugar de nuestra foto y nuestro botón.
     *
     * Sin `overflow-hidden`: el widget se dimensiona solo y recortarlo sería
     * arriesgarse a cortarle algo.
     */
    <article className="flex h-full min-w-0 flex-col rounded-xl border border-border-soft/70 bg-white p-5 shadow-card">
      {/* Sin repetir el nombre: el widget ya lo pinta dentro, y ponerlo
          también fuera dejaba el mismo título dos veces seguidas. Aquí sólo
          va lo que el widget no dice: qué tipo de plan es y por qué lo
          recomendamos. Mismas clases que en la tarjeta nativa. */}
      <p className="mb-1.5 font-article text-[11px] font-semibold uppercase tracking-widest text-terracotta">
        {product.kind}
      </p>
      <p className="mb-5 font-article text-sm leading-relaxed text-text-secondary">
        {product.blurb}
      </p>

      {/* `mt-auto` alinea el arranque de los widgets de una misma fila aunque
          las frases tengan distinto número de líneas. */}
      <div className="mt-auto">
        {product.provider === 'getyourguide' && product.widget && (
          <GetYourGuideWidget
            campaign={product.widget.campaign}
            tourIds={product.widget.tourId}
            fallbackHref={product.widget.fallbackHref}
          />
        )}
        {/* Cuando entre Tiqets, su mecanismo de reserva se añade aquí como
            otra rama. El resto de la página no se entera. */}
      </div>
    </article>
  );
}
