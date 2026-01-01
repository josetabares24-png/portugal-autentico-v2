import { Metadata } from 'next';
import LegalPageLayout from '@/components/LegalPageLayout';

export const metadata: Metadata = {
  title: 'Términos y Condiciones | Estaba en Lisboa',
  description: 'Términos y condiciones de compra de guías digitales de Lisboa',
};

async function getLegalContent() {
  const content = `# Términos y Condiciones de Compra

**Última actualización:** 1 de enero de 2026

## 1. Partes Contratantes

Estas condiciones regulan la compra de productos digitales entre:

- **Vendedor:** Jose Manuel Tabares Vergara, NIF 319862160, Rua Almada Negreiros, Lote J, 1800-014 Lisboa, Portugal
- **Comprador:** La persona que realiza la compra en https://estabaenlisboa.com

## 2. Objeto del Contrato

El vendedor ofrece **guías turísticas digitales en formato PDF** sobre Lisboa y alrededores.

**No se ofrecen:**
- Tours presenciales
- Reservas de alojamiento o restaurantes
- Servicios de guía turístico en persona
- Productos físicos

## 3. Proceso de Compra

### 3.1. Selección y pago
1. El comprador selecciona la guía deseada
2. Proporciona email y datos de facturación
3. Realiza el pago mediante Stripe (tarjeta de crédito/débito)
4. Recibe confirmación por email

### 3.2. Entrega del producto
- La entrega es **inmediata** tras confirmar el pago
- El PDF se envía al email proporcionado
- El comprador puede descargar el archivo las veces que necesite

## 4. Precios

- Todos los precios incluyen **IVA al 23%** (tipo aplicable a productos digitales en Portugal)
- Los precios pueden cambiar sin previo aviso, pero se respeta el precio vigente al momento de la compra
- No hay costes de envío (producto digital)

## 5. Métodos de Pago

El pago se procesa mediante **Stripe**, plataforma certificada PCI-DSS.

Métodos aceptados:
- Tarjetas de crédito (Visa, Mastercard, American Express)
- Tarjetas de débito
- Otros métodos habilitados por Stripe

**No guardamos datos de tarjeta.** Todo el procesamiento lo realiza Stripe de forma segura.

## 6. Derecho de Desistimiento

**IMPORTANTE:** Según el artículo 9 del Decreto-Ley n.º 24/2014 de Portugal sobre contratos celebrados a distancia:

> "El consumidor renuncia al derecho de desistimiento si acepta la descarga inmediata del contenido digital."

**Al completar la compra, aceptas expresamente:**
- La entrega inmediata del producto digital
- Que renuncias a tu derecho de desistimiento de 14 días
- Que no se realizarán reembolsos una vez descargado el PDF

Esta renuncia es necesaria para poder entregarte el producto inmediatamente.

## 7. Garantías y Responsabilidades

### 7.1. Garantía del producto
- Las guías contienen información verificada y actualizada
- Las recomendaciones se basan en experiencias reales
- Nos comprometemos a corregir errores significativos notificados

### 7.2. Limitaciones de responsabilidad
El vendedor **NO se responsabiliza de:**
- Cambios en horarios, precios o disponibilidad de establecimientos mencionados
- Cierres temporales o permanentes de lugares recomendados
- Experiencias personales del usuario que no coincidan con las expectativas
- Problemas técnicos ajenos al vendedor (cliente de email, conexión, etc.)

### 7.3. Uso del producto
El comprador se compromete a:
- Usar la guía para uso personal y privado
- No revender, redistribuir o compartir públicamente el PDF
- No modificar o alterar el contenido
- No utilizar el contenido con fines comerciales

## 8. Propiedad Intelectual

El PDF y todo su contenido (textos, imágenes, diseño) están protegidos por derechos de autor.

La compra otorga una **licencia de uso personal, no exclusiva e intransferible**.

## 9. Facturación

- Se emite factura electrónica para cada compra
- La factura se envía al email proporcionado
- Incluye todos los datos fiscales necesarios
- Se conserva según obligaciones legales (10 años)

## 10. Soporte y Atención al Cliente

Para cualquier consulta o problema:

**Email:** contacto@estabaenlisboa.com

Nos comprometemos a responder en un plazo máximo de 48 horas laborables.

## 11. Modificaciones

Nos reservamos el derecho de modificar estos términos. Los cambios se publicarán en el sitio web con la fecha de actualización.

Las compras realizadas se rigen por los términos vigentes en ese momento.

## 12. Resolución de Litigios

Puedes acudir a la plataforma europea de resolución de litigios en línea:

**https://www.rll.pt/**

## 13. Legislación Aplicable

Estos términos se rigen por la legislación portuguesa y europea aplicable en materia de comercio electrónico y protección de consumidores.`;

  return content;
}

export default async function TerminosCondicionesPage() {
  const content = await getLegalContent();
  return <LegalPageLayout content={content} />;
}
