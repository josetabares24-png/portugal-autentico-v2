import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server';
import createMiddleware from 'next-intl/middleware';
import { routing } from '@/i18n/routing';

const intlMiddleware = createMiddleware(routing);

// Rutas publicas que no requieren autenticacion
const isPublicRoute = createRouteMatcher([
  '/',
  '/(es|en|ko)',
  '/(es|en|ko)/(.*)',
  '/itinerarios(.*)',
  '/blog(.*)',
  '/contacto',
  '/seguridad',
  '/planifica-tu-viaje',
  '/checkout(.*)',
  '/exito',
  '/pack-completo',
  '/sobre-nosotros',
  '/faq',
  '/aviso-legal',
  '/politica-privacidad',
  '/politica-cookies',
  '/terminos-condiciones',
]);

// Rutas que no deben pasar por el middleware de i18n
const isNonIntlRoute = createRouteMatcher(['/admin(.*)', '/app/(.*)']);

export default clerkMiddleware(async (auth, req) => {
  // Solo proteger rutas que no son publicas
  if (!isPublicRoute(req)) {
    await auth.protect();
  }

  // No aplicar i18n a rutas admin y legacy app
  if (isNonIntlRoute(req)) {
    return;
  }

  // Aplicar i18n middleware
  return intlMiddleware(req);
});

export const config = {
  matcher: [
    '/((?!_next|api|trpc|robots\\.txt|sitemap\\.xml|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
  ],
};
