import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin('./src/i18n/request.ts');

/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      // Commerce legacy routes now point to the free guide collection.
      { source: '/checkout/:path*', destination: '/itinerarios', permanent: true },
      { source: '/exito', destination: '/itinerarios', permanent: true },
      { source: '/mis-guias', destination: '/itinerarios', permanent: true },
      { source: '/:locale(en|ko|es)/checkout/:path*', destination: '/itinerarios', permanent: true },
      { source: '/:locale(en|ko|es)/exito', destination: '/itinerarios', permanent: true },
      { source: '/:locale(en|ko|es)/mis-guias', destination: '/itinerarios', permanent: true },
      // Default locale (no prefix)
      { source: '/transporte', destination: '/blog/como-moverse-por-lisboa', permanent: true },
      // Los dos artículos de transporte cubrían lo mismo y competían entre sí
      // por las mismas búsquedas. Se fusionan en la guía general, que era la
      // más completa y la que ya recibía el doble de enlaces internos.
      { source: '/blog/transporte-publico-lisboa', destination: '/blog/como-moverse-por-lisboa', permanent: true },
      { source: '/:locale(en|ko|es)/blog/transporte-publico-lisboa', destination: '/blog/como-moverse-por-lisboa', permanent: true },
      // El itinerario «Lisboa romántica» era un recorrido cerrado de dos días
      // con horas fijas para un viaje que casi nadie hace así. Su sustituto,
      // /blog/lisboa-en-pareja, resuelve la misma intención de búsqueda como
      // guía de planes elegibles. La página antigua deja de existir como
      // documento: este redirect se resuelve antes que el enrutado, así que la
      // URL ya no sirve HTML propio ni canonical propio.
      { source: '/itinerarios/lisboa-romantica', destination: '/blog/lisboa-en-pareja', permanent: true },
      { source: '/:locale(en|ko|es)/itinerarios/lisboa-romantica', destination: '/blog/lisboa-en-pareja', permanent: true },
      // Mismo caso que el de romántica: el itinerario cerrado de cuatro días
      // se sustituye por una guía de planes elegibles.
      { source: '/itinerarios/lisboa-familiar', destination: '/blog/lisboa-con-ninos', permanent: true },
      { source: '/:locale(en|ko|es)/itinerarios/lisboa-familiar', destination: '/blog/lisboa-con-ninos', permanent: true },
      // El itinerario fotográfico daba ajustes de cámara por parada. Su
      // sustituto ordena la ciudad por luz y encuadre, que es lo que no caduca.
      { source: '/itinerarios/lisboa-fotografia', destination: '/blog/donde-fotografiar-lisboa', permanent: true },
      { source: '/:locale(en|ko|es)/itinerarios/lisboa-fotografia', destination: '/blog/donde-fotografiar-lisboa', permanent: true },
      { source: '/presupuesto', destination: '/blog/presupuesto-viajar-lisboa', permanent: true },
      { source: '/guia-gratis', destination: '/itinerarios', permanent: true },
      { source: '/tours', destination: '/itinerarios', permanent: true },
      { source: '/guia-practica', destination: '/planifica-tu-viaje', permanent: true },
      { source: '/info-util', destination: '/planifica-tu-viaje', permanent: true },
      // `/apps` se borró en el rediseño y se quedó sin redirección, devolviendo
      // 404 pese a ser la página con más clics según Search Console. Ahora
      // apunta al artículo que sustituye a aquella lista.
      { source: '/apps', destination: '/blog/mejores-apps-lisboa', permanent: true },
      { source: '/:locale(en|ko|es)/apps', destination: '/blog/mejores-apps-lisboa', permanent: true },
      // `/donde-dormir` tuvo redirección en su día, se perdió en el rediseño
      // y volvió a quedar en 404.
      { source: '/donde-dormir', destination: '/blog/donde-alojarse-en-lisboa', permanent: true },
      { source: '/:locale(en|ko|es)/donde-dormir', destination: '/blog/donde-alojarse-en-lisboa', permanent: true },
      { source: '/mapa', destination: '/itinerarios', permanent: true },
      // La foto se renombró para que el nombre diga qué se ve en ella; la ruta
      // anterior puede estar indexada en Google Imágenes.
      { source: '/images/IMG_1880.jpg', destination: '/images/tranvia-turistico-tuktuk-baixa.jpg', permanent: true },
      { source: '/app/lisboa-1-dia', destination: '/itinerarios/lisboa-1-dia-lo-esencial', permanent: true },
      // Sintra slug antiguo → premium actual
      { source: '/itinerarios/lisboa-3-dias-sintra', destination: '/itinerarios/lisboa-3-dias-premium', permanent: true },
      // Fusiones editoriales: el contenido único del absorbido se trasladó al
      // destino antes de redirigir, así que no se pierde nada.
      { source: '/blog/barrios-lisboa-donde-alojarse', destination: '/blog/donde-alojarse-en-lisboa', permanent: true },
      { source: '/:locale(en|ko|es)/blog/barrios-lisboa-donde-alojarse', destination: '/blog/donde-alojarse-en-lisboa', permanent: true },
      { source: '/blog/miradores-atardecer-lisboa', destination: '/blog/mejores-miradores-lisboa', permanent: true },
      { source: '/:locale(en|ko|es)/blog/miradores-atardecer-lisboa', destination: '/blog/mejores-miradores-lisboa', permanent: true },
      { source: '/blog/lisboa-en-invierno', destination: '/blog/mejor-epoca-visitar-lisboa', permanent: true },
      { source: '/:locale(en|ko|es)/blog/lisboa-en-invierno', destination: '/blog/mejor-epoca-visitar-lisboa', permanent: true },
      // Apuntaba a /itinerarios/lisboa-familiar, que a su vez ya redirige al
      // artículo: eso habría creado una cadena de dos saltos. Se reapunta al
      // destino final para que cualquier entrada llegue en uno solo.
      { source: '/blog/viajar-ninos-lisboa', destination: '/blog/lisboa-con-ninos', permanent: true },
      { source: '/:locale(en|ko|es)/blog/viajar-ninos-lisboa', destination: '/blog/lisboa-con-ninos', permanent: true },
      // El artículo de Semana Santa pierde el año para dejar de caducar.
      { source: '/blog/semana-santa-lisboa-2026', destination: '/blog/semana-santa-lisboa', permanent: true },
      { source: '/:locale(en|ko|es)/blog/semana-santa-lisboa-2026', destination: '/blog/semana-santa-lisboa', permanent: true },
      // Blog stubs → artículos completos
      { source: '/blog/tarjeta-lisboa-card-vale-pena', destination: '/blog/lisboa-card-vale-la-pena', permanent: true },
      { source: '/blog/como-ir-sintra-desde-lisboa', destination: '/blog/sintra-desde-lisboa', permanent: true },
      // La versión en español faltaba: /en y /ko sí redirigían y la ruta sin
      // prefijo seguía sirviendo el borrador de 2024.
      { source: '/blog/mejores-pasteles-nata-lisboa', destination: '/blog/pasteles-de-belem', permanent: true },
      // Legacy en/ko known redirects without chains
      { source: '/en/info-util', destination: '/planifica-tu-viaje', permanent: true },
      { source: '/ko/info-util', destination: '/planifica-tu-viaje', permanent: true },
      { source: '/en/mapa', destination: '/itinerarios', permanent: true },
      { source: '/ko/mapa', destination: '/itinerarios', permanent: true },
      { source: '/en/app/lisboa-1-dia', destination: '/itinerarios/lisboa-1-dia-lo-esencial', permanent: true },
      { source: '/ko/app/lisboa-1-dia', destination: '/itinerarios/lisboa-1-dia-lo-esencial', permanent: true },
      { source: '/en/itinerarios/lisboa-3-dias-sintra', destination: '/itinerarios/lisboa-3-dias-premium', permanent: true },
      { source: '/ko/itinerarios/lisboa-3-dias-sintra', destination: '/itinerarios/lisboa-3-dias-premium', permanent: true },
      { source: '/en/blog/como-ir-sintra-desde-lisboa', destination: '/blog/sintra-desde-lisboa', permanent: true },
      { source: '/ko/blog/como-ir-sintra-desde-lisboa', destination: '/blog/sintra-desde-lisboa', permanent: true },
      { source: '/en/blog/tarjeta-lisboa-card-vale-pena', destination: '/blog/lisboa-card-vale-la-pena', permanent: true },
      { source: '/ko/blog/tarjeta-lisboa-card-vale-pena', destination: '/blog/lisboa-card-vale-la-pena', permanent: true },
      { source: '/en/blog/mejores-pasteles-nata-lisboa', destination: '/blog/pasteles-de-belem', permanent: true },
      { source: '/ko/blog/mejores-pasteles-nata-lisboa', destination: '/blog/pasteles-de-belem', permanent: true },
      // Redirecciones de versiones en/ko a español (sitio monoidioma)
      { source: '/en', destination: '/', permanent: true },
      { source: '/ko', destination: '/', permanent: true },
      { source: '/en/:path((?!presupuesto$|transporte$|tours$|guia-practica$|blog/tarjeta-lisboa-card-vale-pena$).*)', destination: '/:path', permanent: true },
      { source: '/ko/:path((?!presupuesto$|transporte$|tours$|guia-practica$|blog/tarjeta-lisboa-card-vale-pena$).*)', destination: '/:path', permanent: true },
    ];
  },
  typescript: {
    ignoreBuildErrors: false,
  },
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production' ? {
      exclude: ['error', 'warn'],
    } : false,
  },
  images: {
    deviceSizes: [640, 750, 828, 1080, 1200, 1280, 1920, 2048, 3840],
    qualities: [75, 90],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'lh3.googleusercontent.com',
      },
      {
        protocol: 'https',
        hostname: 'estabaenlisboa.com',
      },
    ],
  },
  async headers() {
    return [
      {
        source: '/admin/:path*',
        headers: [
          {
            key: 'X-Robots-Tag',
            value: 'noindex, nofollow',
          },
        ],
      },
      {
        source: '/itinerarios/:path*',
        headers: [
          {
            key: 'X-Robots-Tag',
            value: 'index, follow',
          },
        ],
      },
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on',
          },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=63072000; includeSubDomains; preload',
          },
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin',
          },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=()',
          },
        ],
      },
    ];
  },
};

export default withNextIntl(nextConfig);
