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
  '/presupuesto',
  '/transporte',
  '/donde-dormir',
  '/tours',
  '/blog(.*)',
  '/contacto',
  '/info-util',
  '/seguridad',
  '/apps',
  '/guia-gratis',
  '/checkout(.*)',
  '/exito',
  '/quiz',
  '/free-tours',
  '/pack-completo',
  '/sobre-nosotros',
  '/faq',
  '/aviso-legal',
  '/politica-privacidad',
  '/politica-cookies',
  '/terminos-condiciones',
  '/servicios(.*)',
]);

export default clerkMiddleware(async (auth, req) => {
  // Solo proteger rutas que no son publicas
  if (!isPublicRoute(req)) {
    await auth.protect();
  }

  // Aplicar i18n middleware
  return intlMiddleware(req);
});

export const config = {
  matcher: [
    '/((?!_next|api|trpc|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
  ],
};
