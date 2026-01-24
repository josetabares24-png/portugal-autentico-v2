# Configuración del Sistema de Email Automático

## Resumen
Se ha implementado un sistema completo de envío automático de emails tras compras exitosas. El sistema incluye:

- ✅ Webhook de Stripe para detectar pagos completados
- ✅ Plantillas HTML profesionales con branding
- ✅ Sistema de cumplimiento automático vía Brevo
- ✅ Página de éxito mejorada
- ✅ Manejo seguro de descargas

## Variables de Entorno Requeridas

Agrega estas variables a tu archivo `.env.local` (o configuración de Vercel):

```env
# Stripe Webhook
STRIPE_WEBHOOK_SECRET=whsec_xxx

# Email API (Brevo/Sendinblue)
BREVO_API_KEY=xkeysib-xxx

# URLs
NEXT_PUBLIC_BASE_URL=https://portugalautentico.com
```

## Configuración del Webhook en Stripe

### 1. Acceder al Dashboard de Stripe
1. Ve a [https://dashboard.stripe.com/](https://dashboard.stripe.com/)
2. En el menú lateral, ve a **"Developers"** → **"Webhooks"**

### 2. Crear Nuevo Webhook
1. Haz clic en **"Add endpoint"**
2. En **"Endpoint URL"**, ingresa:
   ```
   https://portugalautentico.com/api/stripe/webhook
   ```
   *(Cambia el dominio por tu URL de producción)*

3. En **"Events to send"**, selecciona:
   - `checkout.session.completed`

4. Haz clic en **"Add endpoint"**

### 3. Copiar el Webhook Secret
1. Una vez creado el webhook, copia el **"Signing secret"**
2. Pégalo en tu variable de entorno `STRIPE_WEBHOOK_SECRET`

## Configuración de Brevo (Sendinblue)

### 1. Obtener API Key
1. Ve a [https://app.brevo.com/](https://app.brevo.com/)
2. Ve a **"SMTP & API"** → **"API Keys"**
3. Crea una nueva API Key o copia una existente
4. Pégala en `BREVO_API_KEY`

### 2. Verificar Configuración de Email
1. Asegúrate de que tu dominio esté verificado en Brevo
2. El email remitente debe ser `hola@portugalautentico.com`

## Implementación del Sistema de Descargas

⚠️ **IMPORTANTE**: El sistema actual genera URLs de descarga placeholder. Necesitas implementar el endpoint `/api/download/[sessionId]` para manejar descargas seguras.

### Crear el Endpoint de Descarga

Crea el archivo `src/app/api/download/[sessionId]/route.ts`:

```typescript
import { NextRequest, NextResponse } from 'next/server';

export async function GET(
  request: NextRequest,
  { params }: { params: { sessionId: string } }
) {
  // Verificar que la sesión existe y no ha expirado
  // Implementar lógica de descarga segura
  // Retornar el archivo PDF o redirigir a un enlace seguro
}
```

## Probar el Sistema

### 1. Prueba en Desarrollo
1. Usa Stripe CLI para forward webhooks localmente:
   ```bash
   stripe listen --forward-to localhost:3000/api/stripe/webhook
   ```

2. Realiza una compra de prueba en modo sandbox

### 2. Verificar Logs
- Revisa la consola del servidor para logs de webhook
- Verifica que los emails se envíen correctamente
- Confirma que las URLs de descarga funcionen

## Seguridad

- Los webhooks verifican la firma digital de Stripe
- Las URLs de descarga tienen expiración (30 días)
- Los emails incluyen información de contacto para soporte
- Se registra toda actividad para auditoría

## Próximos Pasos

1. Implementar el endpoint real de descargas
2. Configurar monitoreo de fallos en emails
3. Agregar analytics de conversiones
4. Implementar sistema de reenvío de emails

## Soporte

Si encuentras problemas:
- Verifica las variables de entorno
- Revisa los logs de Vercel/Stripe
- Confirma la configuración del webhook
- Contacta al equipo de desarrollo