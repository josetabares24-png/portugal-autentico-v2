# Configuración SEO - Próximos Pasos

## Archivos y configuraciones pendientes

- **og-image.jpg**: Crear imagen 1200x630px para redes sociales en `public/og-image.jpg` (actualmente se usa hero-lisboa.jpg)
- **guia-lisboa-gratis.pdf**: Colocar el PDF en `public/downloads/guia-lisboa-gratis.pdf` para la descarga tras suscripción

## 1. Google Search Console

1. Entra en [search.google.com/search-console](https://search.google.com/search-console)
2. Añade tu propiedad con la URL: `https://estabaenlisboa.com`
3. Verifica la propiedad (opciones: archivo HTML, meta tag, DNS o Google Analytics)
4. Una vez verificada, envía el sitemap: `https://estabaenlisboa.com/sitemap.xml`
5. Revisa la cobertura y errores periódicamente

## 2. Bing Webmaster Tools

1. Entra en [bing.com/webmasters](https://www.bing.com/webmasters)
2. Añade tu sitio
3. Verifica con el código que te den
4. Importa desde Google Search Console si ya está configurado (más rápido)

## 3. Códigos de verificación

Cuando Google o Bing te den un código de verificación, añádelo en `src/app/layout.tsx`:

```ts
export const metadata: Metadata = {
  // ... resto de metadata
  verification: {
    google: 'tu-codigo-google',
    // yandex: 'tu-codigo',  // opcional para Yandex
  },
};
```

## 4. Google Analytics 4

Ya configurado con ID: `G-8F54LQ5862`. Verifica en GA4 que:
- El flujo de datos recibe visitas
- Los eventos se registran correctamente
- La conversión de compras está configurada (si usas Stripe)
