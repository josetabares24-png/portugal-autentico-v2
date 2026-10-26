/** Ayuda editorial del catálogo; no cambia productos, precios ni atribución. */
export interface TicketDecisionGuide {
  includes?: string;
  check?: string;
  guide: { href: string; label: string };
}

// Inclusiones contrastadas en las fichas Tiqets el 24/10/2026.
// Fuentes y límites: docs/entries-mobile-editorial-polish.md.
export const TICKET_DECISION_GUIDES: Record<string, TicketDecisionGuide> = {
  oceanario: {
    includes: 'Acuario y exposiciones permanentes y temporales.',
    guide: {
      href: '/actividades/oceanario-lisboa',
      label: 'Guía práctica del Oceanário',
    },
  },
  'castelo-sao-jorge': {
    guide: {
      href: '/actividades/castelo-sao-jorge',
      label: 'Guía práctica del Castelo',
    },
  },
  'sintra-palacio-pena': {
    includes: 'Palacio da Pena y parque.',
    check: 'Elige modalidad y hora. Es una entrada, no una excursión desde Lisboa.',
    guide: {
      href: '/blog/palacio-da-pena-entradas',
      label: 'Guía práctica de Pena',
    },
  },
  jeronimos: {
    includes: 'Claustro y antiguo refectorio.',
    check: 'Sin acceso rápido ni entrada al Museo de Arqueología. Puede haber cola.',
    guide: {
      href: '/blog/monasterio-jeronimos-entradas',
      label: 'Guía práctica de los Jerónimos',
    },
  },
  'lisboa-card': {
    guide: {
      href: '/blog/lisboa-card-vale-la-pena',
      label: 'Cuándo compensa la Lisboa Card',
    },
  },
};
