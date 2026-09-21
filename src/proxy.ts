import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server';
import createMiddleware from 'next-intl/middleware';
import { NextFetchEvent, NextRequest, NextResponse } from 'next/server';
import { routing } from '@/i18n/routing';

const intlMiddleware = createMiddleware(routing);

const legacyLocaleRedirects: Record<string, string> = {
  '/en/presupuesto': '/blog/presupuesto-viajar-lisboa',
  '/ko/presupuesto': '/blog/presupuesto-viajar-lisboa',
  '/en/transporte': '/blog/como-moverse-por-lisboa',
  '/ko/transporte': '/blog/como-moverse-por-lisboa',
  '/en/tours': '/itinerarios',
  '/ko/tours': '/itinerarios',
  '/en/guia-practica': '/planifica-tu-viaje',
  '/ko/guia-practica': '/planifica-tu-viaje',
};

// Solo estas rutas necesitan contexto de Clerk. Las páginas editoriales
// públicas pasan directamente por next-intl y no cargan una sesión en cada
// request, lo que permite a Vercel tratarlas como contenido cacheable.
const isProtectedRoute = createRouteMatcher(['/admin(.*)', '/app/(.*)', '/api/admin(.*)']);
const isClerkRoute = createRouteMatcher([
  '/admin(.*)',
  '/app/(.*)',
  '/api/admin(.*)',
  '/api/reviews(.*)',
]);
const isNonIntlRoute = createRouteMatcher([
  '/admin(.*)',
  '/app/(.*)',
  '/api/admin(.*)',
  '/api/reviews(.*)',
]);

const clerkOnlyMiddleware = clerkMiddleware(async (auth, req) => {
  if (isProtectedRoute(req)) {
    await auth.protect();
  }

  return NextResponse.next();
});

export default async function proxy(req: NextRequest, event: NextFetchEvent) {
  const legacyDestination = legacyLocaleRedirects[req.nextUrl.pathname];

  if (legacyDestination) {
    const redirectUrl = req.nextUrl.clone();
    redirectUrl.pathname = legacyDestination;
    return NextResponse.redirect(redirectUrl, 308);
  }

  if (isClerkRoute(req)) {
    return clerkOnlyMiddleware(req, event);
  }

  if (isNonIntlRoute(req)) {
    return NextResponse.next();
  }

  return intlMiddleware(req);
}

export const config = {
  matcher: [
    '/api/admin/:path*',
    '/api/reviews/:path*',
    '/((?!_next|api|trpc|robots\\.txt|sitemap\\.xml|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
  ],
};
