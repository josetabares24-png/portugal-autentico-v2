'use client';

import { memo } from 'react';
import type { TiqetsWidgetConfig } from '@/data/bookings';

/**
 * Widget de disponibilidad de Tiqets.
 *
 * Los `data-*` se mantienen como los entrega Tiqets. El componente sólo
 * controla el contenedor para que el grid pueda encoger sin provocar
 * overflow; el contenido lo hidrata su loader cuando hay consentimiento.
 */
function TiqetsWidgetImpl({
  productId,
  partner,
  campaign,
  layout,
  orientation,
}: TiqetsWidgetConfig) {
  return (
    <div className="h-full min-w-0 overflow-hidden">
      <div
        className="min-w-0"
        data-tiqets-widget="availability"
        data-layout={layout}
        data-orientation={orientation}
        data-product-id={productId}
        data-partner={partner}
        data-tq-campaign={campaign}
        suppressHydrationWarning
      />
    </div>
  );
}

export const TiqetsWidget = memo(TiqetsWidgetImpl);
