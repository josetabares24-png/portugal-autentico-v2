# 🔍 Verificar Price IDs: Código vs Stripe

## 📋 Price IDs en el Código (src/lib/stripe-products.ts)

Actualmente tienes estos Price IDs configurados:

1. **Lisboa 1 Día**: `price_1SrQdzJglPw4zh36crmeVMh8` (€1.99)
2. **Lisboa 2 Días**: `price_1SrQdzJglPw4zh36k0f3ry7E` (€2.99)
3. **Lisboa 3 Días**: `price_1SrQe0JglPw4zh36sSQFZuPM` (€3.99)
4. **Lisboa 7 Días**: `price_1SrQe0JglPw4zh36X9fEZreG` (€5.99)
5. **Lisboa Romántica**: `price_1SrQe1JglPw4zh36n3T893Ce` (€2.99)
6. **Lisboa Familiar**: `price_1SrQe2JglPw4zh361zLoS8HK` (€2.99)
7. **Lisboa Fotografía**: `price_1SrQe2JglPw4zh36lWx5sCvp` (€2.99)

## ✅ Verificación en Stripe Dashboard

### Paso 1: Verificar Modo en Stripe
1. En Stripe Dashboard, verifica el **toggle arriba a la derecha**
2. **DEBE estar en "Live mode"** (modo LIVE)
3. Si está en "Test mode", cámbialo a LIVE

### Paso 2: Verificar Price IDs de cada Producto

**Para cada producto en Stripe:**

1. **Click en el producto** (ej: "Lisboa 1 Día - Lo Esencial")
2. Verás la página de detalles del producto
3. Busca la sección **"Precios"** o **"Prices"**
4. **Copia el Price ID** (empieza con `price_`)
5. **Compáralo con el Price ID en el código**

**Ejemplo:**

**En Stripe:**
- Producto: "Lisboa 1 Día - Lo Esencial"
- Price ID: `price_?????` (copia este)

**En el código:**
- Producto: "lisboa-1-dia-lo-esencial"
- Price ID: `price_1SrQdzJglPw4zh36crmeVMh8`

**Si NO coinciden:**
- Actualiza el Price ID en `src/lib/stripe-products.ts`
- O crea un nuevo producto en Stripe con el Price ID correcto

### Paso 3: Verificar que los Productos están Activos

En la lista de productos de Stripe:
- Cada producto debe tener el **toggle verde** (activo)
- Si está gris, click para activarlo

## 🐛 Problema Más Común

**Los Price IDs están en modo TEST pero Vercel usa claves LIVE**

**Síntoma:**
- Error: "Price ID no existe" en los logs
- Stripe dice que el Price ID no existe

**Solución:**
1. Verifica que estés en **modo LIVE** en Stripe
2. Verifica que los Price IDs en el código sean de **modo LIVE** (empiezan con `price_1...`)
3. Si los Price IDs son de modo TEST, necesitas crear nuevos en modo LIVE

## 📝 Checklist

- [ ] Modo Stripe Dashboard: **LIVE** (no TEST)
- [ ] Price IDs en código coinciden con Stripe (modo LIVE)
- [ ] Todos los productos están **activos** en Stripe
- [ ] Variables en Vercel usan claves **LIVE** (sk_live_... y pk_live_...)
