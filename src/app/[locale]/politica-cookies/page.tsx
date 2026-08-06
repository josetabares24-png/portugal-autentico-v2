import { Metadata } from 'next';
import LegalPageLayout from '@/components/LegalPageLayout';

export const metadata: Metadata = {
  title: 'Política de Cookies',
  description: 'Información sobre el uso de cookies en Estaba en Lisboa',
  alternates: {
    canonical: 'https://estabaenlisboa.com/politica-cookies',
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: 'Política de Cookies | Estaba en Lisboa',
    description: 'Información sobre el uso de cookies, analítica y preferencias en Estaba en Lisboa.',
    url: 'https://estabaenlisboa.com/politica-cookies',
    siteName: 'Estaba en Lisboa',
    locale: 'es_ES',
    type: 'website',
  },
};

async function getLegalContent() {
  const content = `# Política de Cookies

**Última actualización:** 5 de agosto de 2026

## 1. ¿Qué son las Cookies?

Las cookies son pequeños archivos de texto que se almacenan en tu dispositivo cuando visitas un sitio web. Permiten recordar tus preferencias y mejorar tu experiencia de navegación. En este documento también incluimos, para que la información sea completa, otro almacenamiento del navegador equivalente que usamos con el mismo propósito.

## 2. Cookies y Almacenamiento que Utilizamos

### 2.1. Preferencia de cookies (almacenamiento técnico, no cookie)
Cuando aceptas o rechazas las cookies en el aviso de este sitio, tu elección se guarda en el almacenamiento local del navegador (localStorage), no en una cookie. Es necesario para no volver a mostrarte el aviso en cada visita y para respetar tu elección.

**Duración:** Hasta que borres los datos de navegación de tu navegador para este sitio, o cambies tu elección desde el propio aviso.

### 2.2. Autenticación (Clerk)
El sitio usa Clerk para gestionar el acceso al panel de administración. Clerk puede establecer cookies técnicas necesarias para mantener una sesión iniciada. Solo son relevantes para quien accede al panel de administración, no para la navegación pública del sitio.

**Requieren consentimiento:** no, son necesarias para el funcionamiento del panel al que están asociadas.

### 2.3. Cookies Analíticas (Google Analytics)
**Requieren tu consentimiento explícito**, que pedimos mediante el aviso de cookies. Si no aceptas, no se activa el almacenamiento de analítica (usamos el modo de consentimiento de Google, que por defecto deniega el almacenamiento analítico hasta que aceptas).

- **Qué mide:** páginas visitadas, tiempo de permanencia, origen del tráfico, tipo de dispositivo, con la IP anonimizada.
- **Proveedor:** Google LLC.
- **Duración exacta:** la determina Google según su propia configuración para GA4; no fijamos nosotros esos plazos. Consulta la [política de privacidad de Google](https://policies.google.com/privacy) para el detalle actualizado.

### 2.4. Google Maps (mapas incrustados)
Algunas guías e itinerarios incluyen un mapa de Google Maps incrustado directamente en la página. Al cargarse, Google puede establecer sus propias cookies de terceros, igual que si visitaras maps.google.com directamente. Esto ocurre al abrir una página con mapa, independientemente de tu elección en el aviso de cookies de este sitio, porque es un contenido embebido de Google, no una cookie que gestionemos nosotros.

## 3. Servicios de Terceros que Pueden Establecer Cookies

- **Google Analytics:** análisis de tráfico web, solo si aceptas las cookies analíticas.
- **Google Maps:** mapas incrustados en guías e itinerarios (ver punto 2.4).
- **Clerk:** autenticación del panel de administración.
- **Vercel:** alojamiento y ejecución del sitio web; puede usar cookies técnicas propias de su infraestructura.

Estos terceros tienen sus propias políticas de privacidad y cookies, que no controlamos.

## 4. Gestión de Cookies

### 4.1. Aviso de cookies
Al acceder por primera vez a nuestro sitio web, te mostramos un aviso donde puedes aceptar o rechazar las cookies analíticas. Puedes cambiar tu elección en cualquier momento desde el propio aviso ("Cambiar", visible tras rechazar) o borrando los datos de navegación de tu navegador para este sitio.

### 4.2. Configuración del navegador
También puedes gestionar las cookies desde tu navegador:

**Chrome:**
Configuración > Privacidad y seguridad > Cookies y otros datos de sitios

**Firefox:**
Opciones > Privacidad y seguridad > Cookies y datos del sitio

**Safari:**
Preferencias > Privacidad > Gestionar datos de sitios web

**Edge:**
Configuración > Privacidad, búsqueda y servicios > Cookies y datos del sitio

### 4.3. Consecuencias de rechazar cookies

Si rechazas las cookies analíticas:
- El sitio web seguirá funcionando correctamente.
- No se activará Google Analytics, así que no analizaremos el uso agregado del sitio.
- Los mapas de Google incrustados en guías e itinerarios seguirán cargándose igual (ver 2.4), porque no dependen de esta elección.

## 5. Nombres y Duración Exactos de las Cookies

Los nombres exactos de cookie y su duración concreta los define cada proveedor (Google, Clerk, Vercel) y pueden cambiar sin que dependa de nosotros. En vez de listar aquí valores que no controlamos y podrían quedar desactualizados, te remitimos a la documentación oficial de cada proveedor: la [política de privacidad de Google](https://policies.google.com/privacy) para Analytics y Maps, y la documentación de [Clerk](https://clerk.com/privacy) para las cookies de autenticación.

## 6. Actualizaciones

Esta política de cookies puede actualizarse periódicamente. Te recomendamos revisarla de vez en cuando.

## 7. Más Información

Para cualquier consulta sobre nuestro uso de cookies:

**Email:** contacto@estabaenlisboa.com

**Política de Privacidad:** [/politica-privacidad](/politica-privacidad)

**CNPD (Autoridad de Protección de Datos):** https://www.cnpd.pt`;

  return content;
}

export default async function PoliticaCookiesPage() {
  const content = await getLegalContent();
  return <LegalPageLayout content={content} />;
}
