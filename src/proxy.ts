import createMiddleware from 'next-intl/middleware';
import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';
import { routing } from '@/i18n/routing';

const intlMiddleware = createMiddleware(routing);

const legacyLocaleRedirects: Record<string, string> = {
  '/en/tours': '/itinerarios',
  '/ko/tours': '/itinerarios',
  '/en/guia-practica': '/planifica-tu-viaje',
  '/ko/guia-practica': '/planifica-tu-viaje',
};

export default async function proxy(req: NextRequest) {
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

  return intlMiddleware(req);
}

export const config = {
  matcher: [
    '/((?!_next|api|trpc|robots\\.txt|sitemap\\.xml|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|pdf|docx?|xlsx?|zip|webmanifest)).*)',
  ],
};
