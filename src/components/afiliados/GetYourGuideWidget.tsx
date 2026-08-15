'use client';

import { memo } from 'react';

/*
 * PRUEBA TEMPORAL — widget de actividad de GetYourGuide.
 *
 * Este componente no dibuja nada: sólo coloca en el DOM el `<div>` que
 * GetYourGuide publica en su generador, con sus `data-*` tal cual. Quien lo
 * convierte en un iframe con foto, estrellas, precio y botón es el script
 * global que se carga en `src/app/layout.tsx`.
 *
 * Deliberadamente no lleva estilos de tarjeta propios. El widget ya viene
 * con su fondo blanco, su borde y su sombra; envolverlo en `card-surface`
 * pintaría un segundo marco alrededor del primero. El contenedor sólo
 * resuelve el ancho.
 */

/** Cuenta de partner. No se toca: de ella depende la atribución. */
const PARTNER_ID = 'J2Z24GU';

interface GetYourGuideWidgetProps {
  /** `data-gyg-tour-ids`, tal y como lo entrega GetYourGuide. */
  tourIds: string;
  /** `data-gyg-cmp`. Es lo que permite medir cada actividad por separado. */
  campaign: string;
  /** `data-gyg-number-of-items`. Una sola actividad por tarjeta. */
  numberOfItems?: string;
  /** `data-gyg-locale-code`. El idioma en el que el widget se pinta. */
  localeCode?: string;
  className?: string;
}

function GetYourGuideWidgetImpl({
  tourIds,
  campaign,
  numberOfItems = '1',
  localeCode = 'es-ES',
  className = '',
}: GetYourGuideWidgetProps) {
  return (
    // `min-w-0` es lo que impide el desbordamiento horizontal: sin él una
    // celda de grid se niega a encogerse por debajo del ancho de su
    // contenido, y el iframe de GetYourGuide empujaría la página a lo ancho.
    <div className={`w-full min-w-0 ${className}`}>
      <div
        // El script sustituye el contenido de este div después de la
        // hidratación. `suppressHydrationWarning` evita que React se queje
        // si alguna vez llega a comparar lo que había con lo que hay.
        suppressHydrationWarning
        data-gyg-href="https://widget.getyourguide.com/default/activities.frame"
        data-gyg-locale-code={localeCode}
        data-gyg-widget="activities"
        data-gyg-number-of-items={numberOfItems}
        data-gyg-cmp={campaign}
        data-gyg-partner-id={PARTNER_ID}
        data-gyg-tour-ids={tourIds}
      >
        {/* Repliegue oficial de GetYourGuide: es lo único que se ve si el
            script no llega a cargar (bloqueador de anuncios, red caída).
            Se le baja el tono para que no parezca un error de la página,
            pero el enlace y su `rel` quedan como los entrega el partner. */}
        <span className="text-xs text-text-secondary">
          Powered by{' '}
          <a
            target="_blank"
            rel="sponsored"
            href="https://www.getyourguide.com/lisbon-l42/"
            className="underline underline-offset-2"
          >
            GetYourGuide
          </a>
        </span>
      </div>
    </div>
  );
}

/*
 * Memoizado a propósito. `/actividades` es un componente de cliente con
 * estado: cada clic en un filtro vuelve a renderizar la página entera. El
 * widget no depende de ese estado, y su contenido real lo ha puesto un
 * script de terceros, no React. Cortar aquí la reconciliación garantiza que
 * un clic en «Gratis» no pueda llevarse por delante el iframe ya montado.
 */
export const GetYourGuideWidget = memo(GetYourGuideWidgetImpl);
