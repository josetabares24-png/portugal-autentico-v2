import { Metadata } from 'next';
import LegalPageLayout from '@/components/LegalPageLayout';

export const metadata: Metadata = {
  title: 'Aviso Legal | Estaba en Lisboa',
  description: 'Información legal sobre Estaba en Lisboa - Guías turísticas digitales de Lisboa',
  alternates: {
    canonical: 'https://estabaenlisboa.com/aviso-legal',
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: 'Aviso Legal | Estaba en Lisboa',
    description: 'Información legal sobre Estaba en Lisboa y sus guías digitales de Lisboa.',
    url: 'https://estabaenlisboa.com/aviso-legal',
    siteName: 'Estaba en Lisboa',
    locale: 'es_ES',
    type: 'website',
  },
};

async function getLegalContent() {
  const content = `# Aviso Legal

**Última actualización:** 5 de agosto de 2026

## 1. Datos del Responsable

De conformidad con lo dispuesto en la legislación portuguesa y europea aplicable, se informa de los siguientes datos del responsable de este sitio web:

- **Nombre:** Jose Tabares
- **Dirección:** Lisboa, Portugal
- **Email de contacto:** contacto@estabaenlisboa.com
- **Sitio web:** https://estabaenlisboa.com

## 2. Objeto y Actividad

Este sitio web tiene como finalidad la venta de guías turísticas digitales interactivas accesibles online sobre Lisboa y alrededores.

**No se ofrecen tours presenciales, ni reservas, ni servicios guiados en persona.** Solo se venden productos digitales para uso autónomo del viajero.

## 3. Afiliados

Este sitio web participa en programas de afiliados de terceros (entre otros, plataformas de reserva de actividades, tours y alojamiento). Esto significa que algunos enlaces del sitio son enlaces de afiliado: si el usuario reserva o compra a través de ellos, Estaba en Lisboa puede recibir una comisión, **sin coste adicional para el usuario**.

La selección de qué actividades, tours o servicios se recomiendan se basa en criterio editorial propio y experiencia local, no en el importe de la comisión ofrecida por cada proveedor.

## 4. Condiciones de Uso

El acceso y uso de este sitio web implica la aceptación expresa de estas condiciones de uso. El usuario se compromete a:

- Utilizar el sitio web de forma lícita y conforme a la buena fe
- No realizar actividades contrarias a la ley o que puedan dañar los derechos del responsable
- No utilizar los contenidos digitales con fines comerciales o de reventa

## 5. Propiedad Intelectual

Todos los contenidos de este sitio web (textos, imágenes, diseño, logotipos, guías digitales interactivas) son propiedad de Jose Tabares o se utilizan con la debida autorización.

Queda prohibida la reproducción, distribución, comunicación pública o transformación de cualquier contenido sin autorización expresa del titular.

## 6. Responsabilidad

El responsable no se hace responsable de:

- Interrupciones o errores en el acceso al sitio web
- Contenidos o servicios de terceros enlazados desde este sitio
- Daños derivados del uso inadecuado de las guías digitales

Las recomendaciones en las guías son orientativas. El usuario es responsable de verificar horarios, precios y disponibilidad de establecimientos mencionados.

## 7. Resolución de Litigios

De conformidad con la legislación europea sobre resolución alternativa de litigios en materia de consumo, se informa que existe una plataforma de resolución de litigios en línea disponible en:

**https://www.rll.pt/**

En caso de controversia, el consumidor puede acudir a esta plataforma.

## 8. Autoridad de Control

La autoridad de protección de datos competente es:

**CNPD - Comissão Nacional de Proteção de Dados**
https://www.cnpd.pt

## 9. Legislación Aplicable

Estas condiciones se rigen por la legislación portuguesa y europea aplicable.`;

  return content;
}

export default async function AvisoLegalPage() {
  const content = await getLegalContent();
  return <LegalPageLayout content={content} />;
}
