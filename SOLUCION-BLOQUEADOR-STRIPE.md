# 🔧 Solución: Error de Bloqueador de Anuncios con Stripe

## 🐛 Problema

Los errores que ves en la consola:
```
Failed r.stripe.com/b:1 to load resource: net::ERR_BLOCKED_BY_CLIENT
```

Estos errores son causados por **bloqueadores de anuncios** (AdBlock, uBlock Origin, etc.) que bloquean recursos de Stripe.

## ✅ Solución Inmediata (Para Probar)

### Opción 1: Desactivar Bloqueador Temporalmente
1. **Click en el icono del bloqueador** (AdBlock, uBlock Origin, etc.) en la barra de herramientas
2. **Desactiva el bloqueador** para `estabaenlisboa.com`
3. **Recarga la página** (F5)
4. **Intenta el checkout nuevamente**

### Opción 2: Agregar Excepción para Stripe
1. **Click en el icono del bloqueador**
2. **Busca opciones de "Whitelist" o "Permitir"**
3. **Agrega `stripe.com` y `r.stripe.com` a las excepciones**
4. **Recarga la página**

## 🎯 Buenas Noticias

**El checkout puede funcionar incluso con estos errores** porque:
- El checkout se hace mediante **redirección del servidor**
- No depende de que Stripe.js se cargue en el cliente
- Solo necesitas que la API `/api/checkout` funcione (y esa está en el servidor)

## 📋 Pasos para Probar

1. **Abre tu sitio**: https://estabaenlisboa.com
2. **Desactiva el bloqueador** (si está activo)
3. **Inicia sesión** (con Clerk)
4. **Ve a una guía** (ej: `/itinerarios/lisboa-1-dia-lo-esencial`)
5. **Click en "Comprar ahora"**
6. **Deberías ser redirigido a Stripe Checkout**

Si funciona **sin** desactivar el bloqueador, entonces los errores en la consola son solo advertencias y no afectan el funcionamiento.

## 🔍 Cómo Verificar que Funciona

1. **Intenta hacer una compra**
2. Si te **redirige a Stripe Checkout** → ✅ Funciona (los errores son solo advertencias)
3. Si **no te redirige** o ves un error → Necesitas desactivar el bloqueador

## ⚠️ Importante

**Esto solo afecta a usuarios que tengan bloqueadores de anuncios activos.** La mayoría de usuarios no tendrán este problema.

## 🛠️ Optimización Realizada

He optimizado el código para que **no cargue Stripe.js innecesariamente** en el cliente, ya que el checkout funciona mediante redirección del servidor. Esto debería reducir los errores en la consola.

## 📝 Nota para Usuarios

Si un usuario tiene un bloqueador de anuncios activo, los errores aparecerán en la consola pero **el checkout debería funcionar igual** porque la redirección se hace desde el servidor.
