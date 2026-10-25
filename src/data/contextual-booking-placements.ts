/** D-067 candidate: move one existing offer after the section which answers
 * the booking decision. No automatic category activation or new destinations.
 * A missing heading/content ID leaves the conservative final fallback intact.
 *
 * D-075 (25/10/2026, «soluciona todo» de José tras la auditoría de conversión):
 * mismo mecanismo en Navegante y en los itinerarios de 4, 5 y 7 días. Sigue
 * siendo UN bloque en el cuerpo y uno al final por artículo.
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
  // Lisboa Card al cerrar «¿Y la Lisboa Card?» (antes, al final del artículo).
  'tarjeta-navegante-lisboa': {
    contentId: 'blog-tarjeta-navegante-lisboa-lisboa-card-arriba',
    beforeHeading: 'donde-comprar-y-recargar-la-navegante',
  },
  // Pena al cerrar el día o el bloque de Sintra.
  'lisboa-en-4-dias': {
    contentId: 'blog-lisboa-en-4-dias-pena-tiqets',
    beforeHeading: 'dia-4-graca-y-parque-das-nacoes',
  },
  'lisboa-en-5-dias': {
    contentId: 'blog-lisboa-en-5-dias-pena-tiqets',
    beforeHeading: 'si-llueve-cambia-el-orden-no-el-viaje',
  },
  'lisboa-en-7-dias': {
    contentId: 'blog-lisboa-en-7-dias-pena-tiqets',
    // Al cerrar «Las escapadas» entera: el cuerpo solo admite un h2 como ancla.
    beforeHeading: 'lo-que-solo-cabe-en-una-semana',
  },
};
