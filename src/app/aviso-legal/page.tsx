import { Metadata } from 'next';
import LegalPageLayout from '@/components/LegalPageLayout';

export const metadata: Metadata = {
  title: 'Aviso Legal | Estaba en Lisboa',
  description: 'Información legal sobre Estaba en Lisboa - Guías turísticas digitales de Lisboa',
};

async function getLegalContent() {
  const content = `# Aviso Legal

**Última actualización:** 8 de enero de 2026

## 1. Datos del Responsable

De conformidad con lo dispuesto en la legislación portuguesa y europea aplicable, se informa de los siguientes datos del responsable de este sitio web:

- **Nombre:** José Tabares
- **Dirección:** Lisboa, Portugal
- **Email de contacto:** contacto@estabaenlisboa.com
- **Sitio web:** https://estabaenlisboa.com

## 2. Objeto y Actividad

Este sitio web tiene como finalidad la venta de guías turísticas digitales interactivas accesibles online sobre Lisboa y alrededores.

**No se ofrecen tours presenciales, ni reservas, ni servicios guiados en persona.** Solo se venden productos digitales para uso autónomo del viajero.

## 3. Condiciones de Uso

El acceso y uso de este sitio web implica la aceptación expresa de estas condiciones de uso. El usuario se compromete a:

- Utilizar el sitio web de forma lícita y conforme a la buena fe
- No realizar actividades contrarias a la ley o que puedan dañar los derechos del responsable
- No utilizar los contenidos digitales con fines comerciales o de reventa

## 4. Propiedad Intelectual

Todos los contenidos de este sitio web (textos, imágenes, diseño, logotipos, guías digitales interactivas) son propiedad de José Tabares o se utilizan con la debida autorización.

Queda prohibida la reproducción, distribución, comunicación pública o transformación de cualquier contenido sin autorización expresa del titular.

## 5. Responsabilidad

El responsable no se hace responsable de:

- Interrupciones o errores en el acceso al sitio web
- Contenidos o servicios de terceros enlazados desde este sitio
- Daños derivados del uso inadecuado de las guías digitales

Las recomendaciones en las guías son orientativas. El usuario es responsable de verificar horarios, precios y disponibilidad de establecimientos mencionados.

## 6. Resolución de Litigios

De conformidad con la legislación europea sobre resolución alternativa de litigios en materia de consumo, se informa que existe una plataforma de resolución de litigios en línea disponible en:

**https://www.rll.pt/**

En caso de controversia, el consumidor puede acudir a esta plataforma.

## 7. Autoridad de Control

La autoridad de protección de datos competente es:

**CNPD - Comissão Nacional de Proteção de Dados**
https://www.cnpd.pt

## 8. Legislación Aplicable

Estas condiciones se rigen por la legislación portuguesa y europea aplicable.`;

  return content;
}

export default async function AvisoLegalPage() {
  const content = await getLegalContent();
  return <LegalPageLayout content={content} />;
}
