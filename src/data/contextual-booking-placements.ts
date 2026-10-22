/** D-067 candidate: move one existing offer after the section which answers
 * the booking decision. No automatic category activation or new destinations.
 * A missing heading/content ID leaves the conservative final fallback intact.
 */
export const CONTEXTUAL_BOOKING_PLACEMENTS: Record<string, { contentId: string; beforeHeading: string }> = {
  'palacio-da-pena-entradas': {
    contentId: 'blog-palacio-da-pena-entradas-pena-tiqets-arriba',
    beforeHeading: 'horarios-y-dias-de-cierre',
  },
  'monasterio-jeronimos-entradas': {
    contentId: 'blog-monasterio-jeronimos-entradas-jeronimos-arriba',
    beforeHeading: 'horarios-y-cierres',
  },
  'alfama-historia-guia': {
    contentId: 'blog-alfama-historia-guia-free-tour-alfama',
    beforeHeading: 'miradores-de-alfama-santa-luzia-y-portas-do-sol',
  },
};
