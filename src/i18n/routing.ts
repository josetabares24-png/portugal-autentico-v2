import { defineRouting } from 'next-intl/routing';

export const routing = defineRouting({
  locales: ['es', 'en', 'ko'],
  defaultLocale: 'es',
  localePrefix: 'as-needed', // No prefix for default locale (es)
});
