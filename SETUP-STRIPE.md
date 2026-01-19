# 🚀 Setup Rápido de Stripe - Portugal Auténtico

## Opción 1: Script Automatizado (RECOMENDADO - 5 minutos)

### Paso 1: Conseguir tu API Key de Stripe

1. Ve a https://dashboard.stripe.com/apikeys
2. Copia tu **Secret key** (empieza con `sk_test_...`)
3. Guárdala temporalmente

### Paso 2: Configurar variables de entorno

Crea un archivo `.env.local` en la raíz del proyecto:

```bash
# .env.local
STRIPE_SECRET_KEY=sk_test_TU_KEY_AQUI
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_TU_PUBLISHABLE_KEY_AQUI
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

### Paso 3: Instalar dependencias (si no lo has hecho)

```bash
npm install stripe
```

### Paso 4: Ejecutar el script

```bash
node scripts/create-stripe-products.js
```

El script:
- ✅ Creará automáticamente los 7 productos en Stripe
- ✅ Te mostrará los Price IDs para copiar
- ✅ Te dará el código listo para pegar en `stripe-products.ts`

### Paso 5: Actualizar stripe-products.ts

El script te mostrará algo como esto:

```typescript
export const STRIPE_PRODUCTS = {
  "lisboa-1-dia-lo-esencial": {
    priceId: "price_ABC123...",
    name: "Lisboa 1 Día - Lo Esencial",
    price: 1.99,
  },
  // ... resto
}
```

Copia ese código y reemplázalo en `src/lib/stripe-products.ts`

---

## Opción 2: Manual desde Dashboard (15 minutos)

Si prefieres hacerlo manualmente, sigue las instrucciones en `PRODUCTOS-STRIPE.md`.

---

## Verificar que todo funciona

### 1. Iniciar el servidor de desarrollo

```bash
npm run dev
```

### 2. Ir a una guía

Abre http://localhost:3000/itinerarios/lisboa-1-dia-lo-esencial

### 3. Click en "Comprar ahora"

### 4. Usar tarjeta de prueba

```
Número: 4242 4242 4242 4242
Fecha: Cualquier fecha futura
CVC: 123
```

### 5. Verificar redirección a página de éxito

Deberías llegar a `/exito?session_id=...`

---

## Configurar en Producción (Vercel)

### 1. Cambiar a modo LIVE en Stripe

1. Ve a https://dashboard.stripe.com/
2. Cambia de "Test mode" a "Live mode" (toggle arriba a la derecha)
3. Copia las nuevas API keys (sk_live_... y pk_live_...)

### 2. Actualizar variables en Vercel

```bash
# En Vercel Dashboard > Settings > Environment Variables
STRIPE_SECRET_KEY=sk_live_...
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_live_...
NEXT_PUBLIC_SITE_URL=https://tudominio.com
```

### 3. Re-deploy

Vercel auto-deploya, o fuerza un nuevo deploy:

```bash
git commit --allow-empty -m "Update Stripe to production"
git push origin main
```

---

## Webhook (Opcional pero Recomendado)

Para entregar guías automáticamente después del pago:

### 1. Crear endpoint en Stripe

1. Ve a https://dashboard.stripe.com/webhooks
2. Click "+ Add endpoint"
3. URL: `https://tudominio.com/api/webhooks/stripe`
4. Eventos a escuchar:
   - `checkout.session.completed`
   - `payment_intent.succeeded`

### 2. Copiar Webhook Secret

Verás algo como `whsec_...`

### 3. Agregar a variables de entorno

```env
STRIPE_WEBHOOK_SECRET=whsec_...
```

### 4. Crear handler (opcional - para después)

El webhook te permitirá:
- Guardar la compra en base de datos
- Enviar email con la guía
- Actualizar estado del usuario

---

## Troubleshooting

### Error: "Product not found"

**Solución**: Verifica que el `product_id` en metadata de Stripe coincida con el key en `stripe-products.ts`

### Error: "Invalid API key"

**Solución**:
1. Verifica que `STRIPE_SECRET_KEY` esté en `.env.local`
2. Verifica que empiece con `sk_test_` (test) o `sk_live_` (producción)
3. Reinicia el servidor: `npm run dev`

### Error: "Price ID not found"

**Solución**: Verifica que copiaste el Price ID correcto (empieza con `price_`)

### Checkout redirige pero no funciona

**Solución**: Verifica que `NEXT_PUBLIC_SITE_URL` sea correcto:
- Local: `http://localhost:3000`
- Producción: `https://tudominio.com`

---

## Checklist Final

Antes de lanzar en producción:

- [ ] Productos creados en Stripe (modo LIVE)
- [ ] Price IDs actualizados en `stripe-products.ts`
- [ ] `STRIPE_SECRET_KEY` en Vercel (sk_live_...)
- [ ] `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY` en Vercel (pk_live_...)
- [ ] `NEXT_PUBLIC_SITE_URL` en Vercel (tu dominio real)
- [ ] Compra test exitosa con tarjeta 4242 4242 4242 4242
- [ ] Webhook configurado (opcional)
- [ ] Página de éxito funcionando
- [ ] Emails de confirmación activados en Stripe

---

## Revenue esperado

Con la configuración actual:

**Mes 1-3:**
- 1000 visitantes/mes
- 2% conversión = 20 ventas
- €3.50 precio promedio
- **= €70/mes** en ventas de guías
- **+ €50/mes** en afiliados Booking
- **+ €30/mes** en afiliados Civitatis
- **TOTAL: €150/mes**

**Mes 6:**
- 5000 visitantes/mes
- 2% conversión = 100 ventas
- **= €350/mes** en ventas de guías
- **+ €200/mes** en afiliados
- **TOTAL: €550/mes**

---

**Última actualización:** 18 Enero 2026

¡Todo listo para empezar a vender! 🚀
