# 📦 PRODUCTOS PARA STRIPE - Portugal Auténtico

## 🎯 INSTRUCCIONES PARA CREAR PRODUCTOS EN STRIPE

### Paso 1: Accede a Stripe Dashboard
1. Ve a https://dashboard.stripe.com/
2. Inicia sesión con tu cuenta
3. Ve a **"Productos"** en el menú lateral

### Paso 2: Crea cada producto
Para cada producto abajo, haz click en **"+ Añadir producto"** y usa exactamente estos datos:

---

## 📋 LISTA DE PRODUCTOS

### 1. Lisboa 1 Día - Lo Esencial
**Información del Producto:**
- **Nombre**: Lisboa 1 Día - Lo Esencial
- **Descripción**:
  ```
  Itinerario completo paso a paso para ver lo esencial de Lisboa en 1 día. Incluye:
  • Ruta optimizada hora por hora
  • Restaurantes verificados por locales
  • Mapa interactivo descargable
  • Consejos insider para evitar colas
  • GPS de cada ubicación
  • Mejor momento para visitar cada lugar
  ```
- **Precio**: €1.99 EUR
- **Tipo de facturación**: Pago único (One-time)
- **Imagen**: (Opcional) Sube una imagen de Lisboa/Alfama
- **Metadata**:
  - `product_id`: `lisboa-1-dia-lo-esencial`
  - `guide_type`: `itinerary`
  - `duration`: `1-day`

**⚠️ IMPORTANTE:** Después de crear, copia el **Price ID** (empieza con `price_`) y reemplázalo en `src/lib/stripe-products.ts` línea 3

---

### 2. Lisboa 2 Días - Completo
**Información del Producto:**
- **Nombre**: Lisboa 2 Días - Completo
- **Descripción**:
  ```
  Guía completa de 2 días en Lisboa con itinerarios detallados. Incluye:
  • Día 1: Centro histórico (Alfama, Baixa, Chiado)
  • Día 2: Belém + barrios auténticos
  • 20+ restaurantes locales verificados
  • Mapa interactivo con todos los puntos
  • Horarios optimizados para evitar multitudes
  • Transporte público paso a paso
  • Vida nocturna recomendada
  ```
- **Precio**: €2.99 EUR
- **Tipo de facturación**: Pago único (One-time)
- **Metadata**:
  - `product_id`: `lisboa-2-dias-completo`
  - `guide_type`: `itinerary`
  - `duration`: `2-days`

**⚠️ IMPORTANTE:** Copia el **Price ID** y reemplázalo en `src/lib/stripe-products.ts` línea 8

---

### 3. Lisboa 3 Días - Premium
**Información del Producto:**
- **Nombre**: Lisboa 3 Días - Premium
- **Descripción**:
  ```
  Guía premium de 3 días: Lisboa + Alrededores. Incluye:
  • Día 1: Lisboa Centro (Alfama, Baixa, Chiado)
  • Día 2: Belém + barrios locales
  • Día 3: Excursión a Sintra + Cascais
  • 30+ restaurantes y tascas auténticas
  • Mapas interactivos para cada día
  • Transporte optimizado
  • Playas secretas en Cascais
  • Rutas de senderismo en Sintra
  ```
- **Precio**: €3.99 EUR
- **Tipo de facturación**: Pago único (One-time)
- **Metadata**:
  - `product_id`: `lisboa-3-dias-premium`
  - `guide_type`: `itinerary`
  - `duration`: `3-days`

**⚠️ IMPORTANTE:** Copia el **Price ID** y reemplázalo en `src/lib/stripe-products.ts` línea 13

---

### 4. Lisboa Full Week - 7 Días
**Información del Producto:**
- **Nombre**: Lisboa Full Week
- **Descripción**:
  ```
  Guía completa de una semana en Lisboa y alrededores. Incluye:
  • 7 días de itinerarios detallados
  • Lisboa + Sintra + Cascais + Óbidos + Setúbal
  • 50+ restaurantes verificados
  • Playas, viñedos y pueblos medievales
  • Rutas de senderismo
  • Vida nocturna completa
  • Mapas interactivos para cada día
  • Transporte optimizado
  • Excursiones de día completo planificadas
  ```
- **Precio**: €5.99 EUR
- **Tipo de facturación**: Pago único (One-time)
- **Metadata**:
  - `product_id`: `lisboa-full-week`
  - `guide_type`: `itinerary`
  - `duration`: `7-days`

**⚠️ IMPORTANTE:** Copia el **Price ID** y reemplázalo en `src/lib/stripe-products.ts` línea 18

---

### 5. Lisboa Romántica - Parejas
**Información del Producto:**
- **Nombre**: Lisboa Romántica
- **Descripción**:
  ```
  Guía especial para parejas y lunas de miel. Incluye:
  • Miradores al atardecer con champagne
  • Restaurantes románticos íntimos
  • Paseo en tranvía privado
  • Cena con espectáculo de fado
  • Hoteles boutique recomendados
  • Rutas románticas a pie
  • Playas secretas para dos
  • Ideas para propuesta de matrimonio
  • Fotógrafos profesionales contactos
  ```
- **Precio**: €2.99 EUR
- **Tipo de facturación**: Pago único (One-time)
- **Metadata**:
  - `product_id`: `lisboa-romantica`
  - `guide_type`: `themed`
  - `theme`: `romantic`

**⚠️ IMPORTANTE:** Copia el **Price ID** y reemplázalo en `src/lib/stripe-products.ts` línea 23

---

### 6. Lisboa Familiar - Con Niños
**Información del Producto:**
- **Nombre**: Lisboa Familiar
- **Descripción**:
  ```
  Guía especializada para familias con niños. Incluye:
  • Itinerarios adaptados para niños
  • Restaurantes family-friendly
  • Parques y áreas de juego
  • Oceanario de Lisboa (mejor del mundo)
  • Playas aptas para niños
  • Actividades interactivas
  • Museos con secciones infantiles
  • Transporte público con cochecito
  • Baños y cambiadores ubicaciones
  • Rutas cortas para niños pequeños
  ```
- **Precio**: €2.99 EUR
- **Tipo de facturación**: Pago único (One-time)
- **Metadata**:
  - `product_id`: `lisboa-familiar`
  - `guide_type`: `themed`
  - `theme`: `family`

**⚠️ IMPORTANTE:** Copia el **Price ID** y reemplázalo en `src/lib/stripe-products.ts` línea 28

---

### 7. Lisboa Fotografía - Mejores Spots
**Información del Producto:**
- **Nombre**: Lisboa Fotografía
- **Descripción**:
  ```
  Guía definitiva para fotógrafos en Lisboa. Incluye:
  • 50+ spots fotográficos con GPS exacto
  • Mejor hora del día para cada ubicación
  • Golden hour spots
  • Blue hour spots
  • Miradores secretos sin turistas
  • Calles fotogénicas de Alfama
  • Arquitectura y azulejos únicos
  • Mercados y vida local auténtica
  • Técnicas de fotografía urbana
  • Permisos y restricciones
  ```
- **Precio**: €2.99 EUR
- **Tipo de facturación**: Pago único (One-time)
- **Metadata**:
  - `product_id`: `lisboa-fotografia`
  - `guide_type`: `themed`
  - `theme`: `photography`

**⚠️ IMPORTANTE:** Copia el **Price ID** y reemplázalo en `src/lib/stripe-products.ts` línea 33

---

## 🔧 PASO 3: ACTUALIZAR EL CÓDIGO

Después de crear los 7 productos, abre el archivo:
`src/lib/stripe-products.ts`

Y reemplaza cada `priceId` con el que Stripe te dio:

```typescript
export const STRIPE_PRODUCTS = {
  "lisboa-1-dia-lo-esencial": {
    priceId: "price_ABC123...", // ← REEMPLAZAR con tu Price ID real
    name: "Lisboa 1 Día - Lo Esencial",
    price: 1.99,
  },
  // ... etc
}
```

---

## 💡 TIPS PARA STRIPE

### Modo Test vs Live
- **Modo Test**: Usa para probar (price_test_...)
- **Modo Live**: Usa para vender de verdad (price_live_...)
- Cambia el toggle en el top de Stripe Dashboard

### Tarjetas de Prueba (Modo Test)
- **Éxito**: 4242 4242 4242 4242
- **Fallo**: 4000 0000 0000 0002
- **3D Secure**: 4000 0025 0000 3155
- **CVV**: Cualquier 3 dígitos
- **Fecha**: Cualquier fecha futura
- **ZIP**: Cualquier código postal

### Webhooks (Opcional pero Recomendado)
1. Ve a **"Developers" > "Webhooks"**
2. Click **"+ Add endpoint"**
3. URL: `https://tudominio.com/api/webhooks/stripe`
4. Eventos:
   - `checkout.session.completed`
   - `payment_intent.succeeded`
5. Copia el **Webhook Secret** para tu `.env`

---

## ✅ CHECKLIST DE SETUP

- [ ] Crear 7 productos en Stripe Dashboard
- [ ] Copiar los 7 Price IDs
- [ ] Actualizar `stripe-products.ts` con los IDs reales
- [ ] Agregar `STRIPE_SECRET_KEY` en Vercel
- [ ] Agregar `NEXT_PUBLIC_SITE_URL` en Vercel
- [ ] Probar compra en modo test
- [ ] Cambiar a modo Live cuando estés listo
- [ ] Configurar webhook (opcional)

---

## 🚨 ERRORES COMUNES

### Error: "Product not found"
**Solución**: Verifica que el `product_id` en metadata coincida exactamente con el key en `stripe-products.ts`

### Error: "Invalid API key"
**Solución**: Verifica que `STRIPE_SECRET_KEY` en Vercel esté configurado y sea correcto

### Error: "Price ID not found"
**Solución**: Verifica que copiaste el Price ID correcto (empieza con `price_`)

### Error: "Checkout session failed"
**Solución**: Verifica que `NEXT_PUBLIC_SITE_URL` esté configurado en Vercel

---

## 📞 SOPORTE

Si algo no funciona:
1. Revisa los logs en Stripe Dashboard > Logs
2. Revisa los logs en Vercel > Deployment > Function Logs
3. Verifica que usaste exactamente los nombres y metadata indicados

---

**Última actualización:** 18 Enero 2026
