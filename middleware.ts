import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server'

// Rutas públicas que no requieren autenticación
const isPublicRoute = createRouteMatcher([
  '/',
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
]);

export default clerkMiddleware(async (auth, req) => {
  // Solo proteger rutas que no son públicas
  if (!isPublicRoute(req)) {
    await auth.protect();
  }
});

export const config = {
  matcher: [
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    '/(api|trpc)(.*)',
  ],
};
