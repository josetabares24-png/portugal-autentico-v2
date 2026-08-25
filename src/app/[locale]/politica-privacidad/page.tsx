import { Metadata } from 'next';
import LegalPageLayout from '@/components/LegalPageLayout';

export const metadata: Metadata = {
  title: 'Política de Privacidad',
  description: 'Política de privacidad y protección de datos de Estaba en Lisboa',
  alternates: {
    canonical: 'https://estabaenlisboa.com/politica-privacidad',
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: 'Política de Privacidad | Estaba en Lisboa',
    description: 'Información sobre privacidad, protección de datos y tratamiento de información personal.',
    url: 'https://estabaenlisboa.com/politica-privacidad',
    siteName: 'Estaba en Lisboa',
    locale: 'es_ES',
    type: 'website',
  },
};

async function getLegalContent() {
  const content = `# Política de Privacidad

**Última actualización:** 5 de agosto de 2026

## 1. Responsable del Tratamiento

- **Nombre:** Jose Tabares
- **Dirección:** Lisboa, Portugal
- **Email:** contacto@estabaenlisboa.com

## 2. Datos que Recopilamos

Este sitio no tiene actualmente tienda ni checkout: no recopilamos datos de compra, facturación ni de pago porque no se procesan.

### 2.1. Datos que envías voluntariamente
Cuando usas el formulario de contacto, el de planifica-tu-viaje, o te suscribes a novedades por email, recopilamos los datos que introduces en ese formulario (por ejemplo, nombre y correo electrónico, y el contenido de tu mensaje o consulta). Se usan solo para responderte o, si te suscribes, para enviarte las comunicaciones que hayas solicitado.

### 2.2. Envío de tu presupuesto por email
Si pides que te enviemos el presupuesto de la calculadora en PDF, usamos tu dirección de correo solo para ese envío. No guardamos ni el PDF ni el presupuesto: se generan en el momento de la petición y no quedan almacenados en ningún sitio. Tampoco te damos de alta en ninguna lista de correo: es un envío puntual y transaccional, y para recibir novedades hay que suscribirse aparte y a propósito. Descargar el PDF directamente no requiere email ni deja ningún dato.

### 2.3. Cuentas de administración
El panel de administración del sitio usa Clerk para el inicio de sesión. Esto solo afecta a quienes acceden a ese panel (el equipo del sitio), no a la navegación pública.

### 2.4. Datos de navegación
Si aceptas las cookies analíticas, recopilamos de forma automática datos de uso del sitio (páginas visitadas, origen del tráfico, tipo de dispositivo) a través de Google Analytics, con la IP anonimizada.

### 2.5. Cookies y tecnologías similares
Consulta la [Política de Cookies](/politica-cookies) para el detalle de qué se activa y bajo qué condiciones.

## 3. Finalidad del Tratamiento

Tus datos se utilizan para:

- **Atención al usuario:** Responder a tu mensaje de contacto o solicitud a través de planifica-tu-viaje.
- **Comunicaciones que solicitas:** Enviarte novedades si te suscribes voluntariamente.
- **Envío de tu presupuesto:** Mandarte por email, una sola vez, el PDF que has pedido desde la calculadora.
- **Administración del sitio:** Autenticar a quien gestiona el contenido a través de Clerk.
- **Mejora del servicio:** Analizar el uso del sitio web de forma agregada, si aceptas las cookies analíticas (Google Analytics).

## 4. Base Legal

Tratamos tus datos basándonos en:

- **Consentimiento:** Para responder a tu formulario de contacto, para las comunicaciones que solicitas, y para las cookies analíticas.
- **Interés legítimo:** Para el funcionamiento técnico y de seguridad del sitio.

## 5. Conservación de Datos

- **Mensajes de contacto:** Se conservan el tiempo necesario para atender tu consulta y un periodo razonable posterior por si hay seguimiento.
- **Suscripción a novedades:** Hasta que te des de baja o retires tu consentimiento.
- **Presupuesto enviado por email:** No se conserva. Ni el PDF ni los datos del cálculo se guardan; la dirección se usa para ese envío y no se añade a ninguna lista.
- **Datos de navegación (analítica):** Según la configuración por defecto de Google Analytics para esta propiedad; consulta la política de privacidad de Google para el detalle exacto, ya que ese plazo lo determina el proveedor, no nosotros.

## 6. Destinatarios de los Datos

Según el tipo de dato, puede ser tratado por:

- **Brevo:** Envío de emails de contacto, del presupuesto en PDF que pidas desde la calculadora, y de la newsletter si te suscribes.
- **Clerk:** Autenticación del panel de administración.
- **Google Analytics:** Análisis de tráfico web (con IP anonimizada), solo si aceptas las cookies analíticas.
- **GetYourGuide y Tiqets:** Módulos de reserva de actividades incrustados en algunas páginas, solo si aceptas las cookies. Al cargarse reciben tu dirección IP y los datos de navegación propios de cualquier contenido incrustado, y registran que la visita llega desde este sitio para atribuir la reserva.
- **Vercel:** Alojamiento y ejecución del sitio web.

No vendemos tus datos a terceros con fines de marketing.

## 7. Transferencias Internacionales

Algunos proveedores pueden procesar datos fuera del Espacio Económico Europeo. En estos casos, garantizamos medidas de seguridad adecuadas (cláusulas contractuales tipo aprobadas por la UE).

## 8. Tus Derechos

Tienes derecho a:

- **Acceso:** Saber qué datos tenemos sobre ti
- **Rectificación:** Corregir datos inexactos
- **Supresión:** Solicitar la eliminación de tus datos
- **Oposición:** Oponerte al tratamiento de tus datos
- **Limitación:** Solicitar la limitación del tratamiento
- **Portabilidad:** Recibir tus datos en formato estructurado
- **Retirar consentimiento:** En cualquier momento, sin que afecte a tratamientos anteriores

Para ejercer estos derechos, contacta: **contacto@estabaenlisboa.com**

## 9. Reclamaciones

Si consideras que tus derechos no han sido atendidos, puedes presentar una reclamación ante:

**CNPD - Comissão Nacional de Proteção de Dados**
https://www.cnpd.pt

## 10. Seguridad

Implementamos medidas técnicas y organizativas para proteger tus datos contra acceso no autorizado, pérdida o destrucción, incluyendo conexión HTTPS en todo el sitio.

## 11. Menores de Edad

Este sitio web no está dirigido a menores de 18 años. No recopilamos intencionadamente datos de menores.

## 12. Actualizaciones

Podemos actualizar esta política periódicamente. Te notificaremos cambios sustanciales por email o mediante aviso en el sitio web.`;

  return content;
}

export default async function PoliticaPrivacidadPage() {
  const content = await getLegalContent();
  return <LegalPageLayout content={content} />;
}
