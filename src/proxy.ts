import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server';
import createMiddleware from 'next-intl/middleware';
import type { NextFetchEvent, NextRequest } from 'next/server';
import { NextResponse } from 'next/server';
import { routing } from '@/i18n/routing';

const intlMiddleware = createMiddleware(routing);

const legacyLocaleRedirects: Record<string, string> = {
  '/en/tours': '/itinerarios',
  '/ko/tours': '/itinerarios',
  '/en/guia-practica': '/planifica-tu-viaje',
  '/ko/guia-practica': '/planifica-tu-viaje',
};

const isProtectedRoute = createRouteMatcher(['/admin(.*)', '/app/(.*)', '/api/admin(.*)']);
const isClerkRoute = createRouteMatcher([
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

  // English pilot has its own root layout. Do not rewrite it into Spanish.
  if (req.nextUrl.pathname === '/en' || req.nextUrl.pathname.startsWith('/en/')) {
    return NextResponse.next();
  }

  if (isClerkRoute(req)) {
    return clerkOnlyMiddleware(req, event);
  }

  return intlMiddleware(req);
}

export const config = {
  matcher: [
    '/api/admin/:path*',
    '/api/reviews/:path*',
    '/((?!_next|api|trpc|robots\\.txt|sitemap\\.xml|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|pdf|docx?|xlsx?|zip|webmanifest)).*)',
  ],
};
