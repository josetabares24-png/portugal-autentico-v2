import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server';
import createMiddleware from 'next-intl/middleware';
import { NextResponse } from 'next/server';
import { routing } from '@/i18n/routing';

const intlMiddleware = createMiddleware(routing);

const legacyLocaleRedirects: Record<string, string> = {
  '/en/presupuesto': '/blog/presupuesto-viajar-lisboa',
  '/ko/presupuesto': '/blog/presupuesto-viajar-lisboa',
  '/en/transporte': '/blog/transporte-publico-lisboa',
  '/ko/transporte': '/blog/transporte-publico-lisboa',
  '/en/tours': '/itinerarios',
  '/ko/tours': '/itinerarios',
  '/en/guia-practica': '/planifica-tu-viaje',
  '/ko/guia-practica': '/planifica-tu-viaje',
};

// Rutas publicas que no requieren autenticacion
const isPublicRoute = createRouteMatcher([
  '/',
  '/(es|en|ko)',
  '/(es|en|ko)/(.*)',
  '/itinerarios(.*)',
  '/actividades(.*)',
  '/blog(.*)',
  '/contacto',
  '/seguridad',
  '/planifica-tu-viaje',
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
  const legacyDestination = legacyLocaleRedirects[req.nextUrl.pathname];

  if (legacyDestination) {
    const redirectUrl = req.nextUrl.clone();
    redirectUrl.pathname = legacyDestination;

    return NextResponse.redirect(redirectUrl, 308);
  }

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
