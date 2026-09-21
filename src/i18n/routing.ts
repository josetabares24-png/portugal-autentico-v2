import { defineRouting } from 'next-intl/routing';

export const routing = defineRouting({
  locales: ['es'],
  defaultLocale: 'es',
  localePrefix: 'never',
  // El sitio es monoidioma. No necesitamos escribir NEXT_LOCALE en cada
  // respuesta pública; evitar esa cookie ayuda a que el HTML sea cacheable.
  localeCookie: false,
});
