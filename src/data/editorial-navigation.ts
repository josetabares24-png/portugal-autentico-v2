export const lisboaNavigation = [
  { href: '/blog/como-moverse-por-lisboa', label: 'Moverse' },
  { href: '/donde-comer-en-lisboa', label: 'Comer' },
  { href: '/blog#barrios', label: 'Barrios' },
  { href: '/que-ver-en-lisboa', label: 'Qué ver' },
  { href: '/itinerarios', label: 'Rutas' },
  { href: '/blog', label: 'Guías e historias' },
] as const;

export const editorialNavigation = [
  { href: '/portugal', label: 'Escapadas' },
  { href: '/planifica-tu-viaje', label: 'Planifica' },
];

export const bookingNavigation = [
  { href: '/comprar-entradas', label: 'Entradas' },
  { href: '/free-tours-lisboa', label: 'Free tours' },
] as const;

export const primaryNavigation = [
  { kind: 'group', id: 'lisboa', label: 'Lisboa', links: lisboaNavigation },
  ...editorialNavigation.map((link) => ({ kind: 'link' as const, ...link })),
  { kind: 'group', id: 'experiencias', label: 'Entradas y tours', links: bookingNavigation },
] as const;
