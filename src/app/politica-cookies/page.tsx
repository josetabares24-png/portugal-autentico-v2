import { Metadata } from 'next';
import LegalPageLayout from '@/components/LegalPageLayout';

export const metadata: Metadata = {
  title: 'Política de Cookies | Estaba en Lisboa',
  description: 'Información sobre el uso de cookies en Estaba en Lisboa',
};

async function getLegalContent() {
  const content = `# Política de Cookies

**Última actualización:** 1 de enero de 2026

## 1. ¿Qué son las Cookies?

Las cookies son pequeños archivos de texto que se almacenan en tu dispositivo cuando visitas un sitio web. Permiten recordar tus preferencias y mejorar tu experiencia de navegación.

## 2. Cookies que Utilizamos

### 2.1. Cookies Técnicas (Necesarias)
**No requieren consentimiento**

- **Cookies de sesión:** Mantienen tu sesión activa mientras navegas
- **Cookies de carrito:** Recuerdan los productos seleccionados
- **Cookies de seguridad:** Protegen contra accesos no autorizados

**Duración:** Sesión (se eliminan al cerrar el navegador)

### 2.2. Cookies Analíticas
**Requieren consentimiento**

- **Google Analytics 4:** Analizamos cómo los usuarios utilizan el sitio web para mejorarlo

**Información recopilada:**
- Páginas visitadas
- Tiempo de permanencia
- Origen del tráfico
- Dispositivo y navegador utilizado
- IP anonimizada

**Duración:** Hasta 24 meses

**Proveedores:** Google LLC (cumple con RGPD)

### 2.3. Cookies de Marketing
**Requieren consentimiento**

Si utilizamos Facebook Pixel o similares (actualmente no):
- Seguimiento de conversiones
- Remarketing
- Análisis de audiencias

## 3. Cookies de Terceros

Utilizamos servicios de terceros que pueden establecer sus propias cookies:

- **Stripe:** Procesamiento seguro de pagos
- **Google Analytics:** Análisis de tráfico web
- **Vercel:** Alojamiento web

Estos terceros tienen sus propias políticas de privacidad y cookies.

## 4. Gestión de Cookies

### 4.1. Panel de consentimiento
Al acceder por primera vez a nuestro sitio web, te mostramos un banner donde puedes:
- Aceptar todas las cookies
- Rechazar cookies no esenciales
- Configurar tus preferencias

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

Si rechazas las cookies no esenciales:
- El sitio web seguirá funcionando correctamente
- No podremos analizar el uso del sitio para mejorarlo
- Algunos contenidos de terceros pueden no mostrarse correctamente

Las cookies técnicas necesarias no pueden desactivarse sin afectar el funcionamiento del sitio.

## 5. Cookies Utilizadas - Detalle Técnico

| Nombre | Tipo | Propósito | Duración |
|--------|------|-----------|----------|
| _ga | Analítica | Google Analytics - ID único | 2 años |
| _gid | Analítica | Google Analytics - ID sesión | 24 horas |
| _gat | Analítica | Google Analytics - Limitación peticiones | 1 minuto |
| session_id | Técnica | Identificador de sesión | Sesión |

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
