import { Metadata } from 'next';
import LegalPageLayout from '@/components/LegalPageLayout';

export const metadata: Metadata = {
  title: 'Términos y Condiciones',
  description: 'Términos y condiciones de uso de Estaba en Lisboa, medio editorial gratuito con guías e itinerarios de Lisboa.',
  alternates: {
    canonical: 'https://estabaenlisboa.com/terminos-condiciones',
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: 'Términos y Condiciones | Estaba en Lisboa',
    description: 'Condiciones de uso del contenido editorial gratuito de Estaba en Lisboa.',
    url: 'https://estabaenlisboa.com/terminos-condiciones',
    siteName: 'Estaba en Lisboa',
    locale: 'es_ES',
    type: 'website',
  },
};

async function getLegalContent() {
  const content = `# Términos y Condiciones de Uso

**Última actualización:** 5 de agosto de 2026

## 1. Naturaleza del Sitio

Estaba en Lisboa es un medio editorial gratuito sobre Lisboa: itinerarios, guías, artículos de blog y recomendaciones de actividades. Todo el contenido actualmente publicado en este sitio es de acceso gratuito y no requiere compra ni registro.

Este sitio no vende actualmente guías ni ningún otro producto digital. Si en el futuro se lanzara algún producto de pago, estas condiciones se actualizarían antes de activarlo, con una sección propia sobre precio, entrega y derechos del comprador.

## 2. Uso del Contenido

El acceso y uso de este sitio web implica la aceptación de estas condiciones. Al usar el sitio, el usuario acepta:

- Utilizarlo de forma lícita y conforme a la buena fe.
- No utilizar los contenidos (textos, itinerarios, mapas, fotografías) con fines comerciales, de reventa o redistribución pública sin autorización.
- Verificar por su cuenta horarios, precios, disponibilidad y condiciones de acceso de los lugares, actividades y establecimientos mencionados antes de viajar, ya que pueden cambiar en cualquier momento.

## 3. Enlaces a Terceros y Afiliados

Este sitio puede enlazar a plataformas externas (por ejemplo, de reserva de actividades, tours o alojamiento), incluyendo enlaces de afiliado: si el usuario reserva o compra a través de ellos, Estaba en Lisboa puede recibir una comisión del proveedor, sin coste adicional para el usuario.

**Estaba en Lisboa no procesa ni gestiona esas reservas.** Cuando el usuario reserva o compra en una plataforma externa, el contrato correspondiente (pago, cancelación, garantías, atención al cliente) se formaliza directamente entre el usuario y esa plataforma o proveedor, no con Estaba en Lisboa. Más detalle en el [Aviso Legal](/aviso-legal).

## 4. Propiedad Intelectual

Los textos, itinerarios, mapas, fotografías propias y el diseño de este sitio son propiedad de Jose Tabares o se utilizan con la debida autorización, y están protegidos por derechos de autor.

Se permite el uso personal del contenido (leerlo, guardarlo para consulta propia, imprimirlo para uso privado durante un viaje). No se permite su reproducción, distribución o publicación en otro sitio o medio sin autorización expresa.

## 5. Responsabilidad

Las recomendaciones de este sitio son orientativas y se basan en experiencia personal y verificación propia en el momento de escribirlas. Estaba en Lisboa no se responsabiliza de:

- Cambios posteriores en horarios, precios, aforos o condiciones de acceso de lugares o actividades mencionados.
- Cierres temporales o permanentes de establecimientos recomendados.
- Actuaciones, cancelaciones o incidencias de plataformas externas enlazadas desde este sitio.
- Interrupciones o errores técnicos en el acceso al sitio web.

Este documento no sustituye asesoramiento legal, fiscal o profesional específico; ante dudas sobre un caso concreto, conviene consultar a un profesional cualificado.

## 6. Contacto

Para cualquier consulta sobre estas condiciones: **contacto@estabaenlisboa.com**

## 7. Modificaciones

Estas condiciones pueden actualizarse para reflejar cambios reales en el funcionamiento del sitio. Los cambios se publicarán en esta página con su fecha de actualización.

## 8. Resolución de Litigios

De conformidad con la legislación europea sobre resolución alternativa de litigios en materia de consumo, existe una plataforma de resolución de litigios en línea disponible en **https://www.rll.pt/**.

## 9. Legislación Aplicable

Estas condiciones se rigen por la legislación portuguesa y europea aplicable.`;

  return content;
}

export default async function TerminosCondicionesPage() {
  const content = await getLegalContent();
  return <LegalPageLayout content={content} />;
}
