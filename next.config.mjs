import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin('./src/i18n/request.ts');

/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      // Default locale (no prefix)
      { source: '/tours', destination: '/itinerarios', permanent: true },
      { source: '/guia-practica', destination: '/planifica-tu-viaje', permanent: true },
      { source: '/info-util', destination: '/planifica-tu-viaje', permanent: true },
      { source: '/mapa', destination: '/itinerarios', permanent: true },
      { source: '/app/lisboa-1-dia', destination: '/itinerarios/lisboa-1-dia-lo-esencial', permanent: true },
      // Sintra slug antiguo → premium actual
      { source: '/itinerarios/lisboa-3-dias-sintra', destination: '/itinerarios/lisboa-3-dias-premium', permanent: true },
      // Blog stubs → artículos completos
      { source: '/blog/como-ir-sintra-desde-lisboa', destination: '/blog/sintra-desde-lisboa', permanent: true },
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
      { source: '/en/blog/mejores-pasteles-nata-lisboa', destination: '/blog/pasteles-de-belem', permanent: true },
      { source: '/ko/blog/mejores-pasteles-nata-lisboa', destination: '/blog/pasteles-de-belem', permanent: true },
      // Redirecciones de versiones en/ko a español (sitio monoidioma)
      { source: '/en', destination: '/', permanent: true },
      { source: '/ko', destination: '/', permanent: true },
      { source: '/en/:path((?!presupuesto$|transporte$|tours$|guia-practica$).*)', destination: '/:path', permanent: true },
      { source: '/ko/:path((?!presupuesto$|transporte$|tours$|guia-practica$).*)', destination: '/:path', permanent: true },
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
        source: '/checkout/:path*',
        headers: [
          {
            key: 'X-Robots-Tag',
            value: 'noindex, follow',
          },
        ],
      },
      {
        source: '/exito',
        headers: [
          {
            key: 'X-Robots-Tag',
            value: 'noindex, follow',
          },
        ],
      },
      {
        source: '/mis-guias',
        headers: [
          {
            key: 'X-Robots-Tag',
            value: 'noindex, nofollow',
          },
        ],
      },
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
