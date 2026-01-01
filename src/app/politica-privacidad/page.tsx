import { Metadata } from 'next';
import LegalPageLayout from '@/components/LegalPageLayout';

export const metadata: Metadata = {
  title: 'Política de Privacidad | Estaba en Lisboa',
  description: 'Política de privacidad y protección de datos de Estaba en Lisboa',
};

async function getLegalContent() {
  const content = `# Política de Privacidad

**Última actualización:** 1 de enero de 2026

## 1. Responsable del Tratamiento

- **Nombre:** Jose Manuel Tabares Vergara
- **NIF:** 319862160
- **Dirección:** Rua Almada Negreiros, Lote J, 1800-014 Lisboa, Portugal
- **Email:** contacto@estabaenlisboa.com

## 2. Datos que Recopilamos

### 2.1. Datos de compra
Cuando realizas una compra, recopilamos:
- Nombre y apellidos
- Dirección de email
- Datos de facturación (procesados por Stripe)
- Información de la transacción

### 2.2. Datos de navegación
Recopilamos automáticamente:
- Dirección IP
- Tipo de navegador
- Páginas visitadas
- Fecha y hora de acceso

### 2.3. Cookies y tecnologías similares
Utilizamos cookies para mejorar tu experiencia. Consulta nuestra [Política de Cookies](/politica-cookies) para más información.

## 3. Finalidad del Tratamiento

Tus datos se utilizan para:

- **Gestión de compras:** Procesar tu pedido y enviar la guía digital
- **Comunicación:** Enviar confirmación de compra y soporte
- **Facturación:** Cumplir obligaciones fiscales
- **Mejora del servicio:** Analizar el uso del sitio web (Google Analytics)
- **Marketing (opcional):** Enviar novedades si das tu consentimiento

## 4. Base Legal

Tratamos tus datos basándonos en:

- **Ejecución de contrato:** Para procesar tu compra
- **Obligación legal:** Para cumplir con obligaciones fiscales
- **Consentimiento:** Para cookies analíticas y comunicaciones de marketing
- **Interés legítimo:** Para mejorar nuestros servicios

## 5. Conservación de Datos

- **Datos de compra:** Se conservan durante el plazo legal exigido para obligaciones fiscales (actualmente 10 años en Portugal)
- **Datos de navegación:** Se conservan durante 12 meses
- **Datos de marketing:** Hasta que retires tu consentimiento

## 6. Destinatarios de los Datos

Tus datos pueden ser compartidos con:

- **Stripe:** Procesador de pagos (con sede en la UE, cumple RGPD)
- **Vercel:** Alojamiento web (con medidas de seguridad adecuadas)
- **Google Analytics:** Análisis de tráfico web (con IP anonimizada)

No vendemos ni compartimos tus datos con terceros para fines de marketing.

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

Implementamos medidas técnicas y organizativas para proteger tus datos contra acceso no autorizado, pérdida o destrucción. Utilizamos conexión HTTPS y procesadores de pago certificados.

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
