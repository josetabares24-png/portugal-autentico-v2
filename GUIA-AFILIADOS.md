# 💰 Guía Completa de Afiliados - Monetización

## 📊 Resumen del Modelo de Negocio

Tu web ahora es **100% GRATIS** con contenido de calidad brutal. ¿Cómo ganas dinero? **Afiliados**.

### Proyección Realista de Ingresos

| Mes | Visitas/mes | Ingresos Esperados |
|-----|-------------|-------------------|
| **Mes 1-3** | 100-1000 | 50-200€ |
| **Mes 4-6** | 1000-5000 | 300-800€ |
| **Mes 9-12** | 5000-15000 | 1500-3000€ |
| **Año 2** | 15000-50000 | 3000-8000€ |

---

## 🎯 Plataformas de Afiliados Principales

### 1. BOOKING.COM (PRIORIDAD #1)

**Por qué es la mejor:**
- 25-40% de comisión sobre lo que Booking cobra al hotel
- Cookie de 30 días (si hacen click hoy y reservan en 30 días, cobras)
- Casi todos los turistas usan Booking

**Cómo registrarte:**

1. **Ve a:** https://www.booking.com/affiliate-program/v2/index.html
2. **Click:** "Join Now"
3. **Completa:**
   - Email: josetabares24@gmail.com
   - Web: estabaenlisboa.com
   - Tipo: Travel Blog / Content Site
   - Tráfico: "Menos de 1,000" (no importa)
   - Método: "Guías de viaje y recomendaciones"

4. **Verificación:** 1-3 días (aprueban casi todo)

5. **Dashboard:** Te dan acceso y TUS LINKS DE AFILIADO

**Cómo funcionan las comisiones:**

```
Hotel 100€/noche → Booking cobra 15€ al hotel
→ Tú recibes 25% de 15€ = 3.75€

10 reservas/mes × 3 noches = 30 noches × 3.75€ = 112.50€/mes
```

**Dónde poner los links:**

En tu web ya tienes el componente `BookingWidget.tsx`. Solo necesitas:

1. **Conseguir tu link de afiliado** del dashboard Booking
2. **Buscar en tu código** donde dice:
```typescript
bookingUrl = 'https://www.booking.com/searchresults.html?ss=Lisboa'
```

3. **Reemplazar con tu link de afiliado:**
```typescript
bookingUrl = 'https://www.booking.com/searchresults.html?aid=TU_AID&ss=Lisboa'
```

El `aid=TU_AID` es tu ID de afiliado que te dan en el dashboard.

---

### 2. CIVITATIS (Tours y Actividades)

**Por qué es buena:**
- 8-12% comisión del valor del tour
- Tours de Lisboa, Sintra, excursiones, fado, etc.
- En español (más fácil que GetYourGuide)

**Registro:**

1. **Ve a:** https://www.civitatis.com/es/programa-afiliados/
2. **Registrate:** josetabares24@gmail.com
3. **Aprobación:** 2-5 días

**Tours para promocionar en tu web:**

- **Tour gratis de Lisboa**: 0€ (ganás comisión por propinas, 8%)
- **Excursión Sintra + Cascais**: 45€ → 3.60€ comisión/persona
- **Espectáculo de Fado**: 20€ → 1.60€ comisión
- **Lisboa Card**: 21€ → 1.68€ comisión

**Dónde ponerlos:**

En cada guía, después de mencionar una atracción:

```markdown
**¿Prefieres un tour guiado?**
[Reserva excursión a Sintra con guía en español](TU_LINK_CIVITATIS)
```

---

### 3. GETYOURGUIDE (Alternativa Civitatis)

**Registro:**
- https://partner.getyourguide.com/
- Comisión: 8%
- Similar a Civitatis pero en inglés

---

### 4. RENTALCARS.COM (Coches de alquiler)

**Por qué:**
- Para Sintra, muchos alquilan coche
- Comisión: 25% (muy buena)
- Cookie 30 días

**Registro:**
- https://www.rentalcars.com/Affiliates.do
- Pagan bien y la conversión es alta

**Dónde:**
En tu guía de Sintra, añade:

```markdown
**¿Prefieres ir en coche propio?**
[Alquila coche desde 15€/día](TU_LINK_RENTALCARS)
Recoge en el aeropuerto o Lisboa centro.
```

---

### 5. AMAZON ASSOCIATES (Opcional)

**Para qué:**
- Libros de viaje
- Guías Lonely Planet
- Mochilas, cámaras, etc.

**Comisión:** 3-10% dependiendo categoría

**Registro:** https://affiliate-program.amazon.com/

---

## 🛠️ Cómo Integrar en Tu Web

### Paso 1: Conseguir Tus Links

Una vez aprobado en cada plataforma, te dan un **link de afiliado único**:

**Ejemplo Booking:**
```
https://www.booking.com/searchresults.html?aid=123456&ss=Lisboa&dest_id=-2167973&dest_type=city
```

El `aid=123456` es TU ID único.

### Paso 2: Actualizar BookingWidget Component

Abre: `src/components/BookingWidget.tsx`

Busca la línea:
```typescript
bookingUrl = 'https://www.booking.com/searchresults.html?ss=Lisboa'
```

Cámbiala por:
```typescript
bookingUrl = 'https://www.booking.com/searchresults.html?aid=TU_AID&ss=Lisboa&dest_id=-2167973&dest_type=city'
```

**IMPORTANTE:** Reemplaza `TU_AID` con el número que te dé Booking.

### Paso 3: Usar el Widget en las Guías

Ya está creado el componente. Solo necesitas importarlo y usarlo.

**Ejemplo en cualquier página:**

```tsx
import BookingWidget from '@/components/BookingWidget';

// Dentro de tu página:
<BookingWidget
  zone="Alfama"
  description="Hoteles boutique en el corazón histórico de Lisboa. Despierta con las vistas de los azulejos y el sonido del tranvía 28."
  bookingUrl="https://www.booking.com/searchresults.html?aid=TU_AID&ss=Alfama%2C+Lisboa"
/>
```

---

## 📍 Dónde Poner Links de Afiliados

### En cada Guía:

**1. Al final de cada Timeline (después de las paradas):**

```tsx
<BookingWidget
  zone="Lisboa"
  description="Los mejores hoteles en el centro histórico. Cancela gratis en la mayoría."
/>
```

**2. En párrafos de texto donde mencionas servicios:**

Ejemplo en la guía de Sintra:

```markdown
Para ir a Sintra, la opción más cómoda es **[alquilar un coche](TU_LINK_RENTALCARS)**
desde Lisboa. Cuesta desde 15€/día y te da total libertad para moverte.
```

**3. En secciones de "Tips Prácticos":**

```markdown
### 💳 Lisboa Card
La [Lisboa Card](TU_LINK_CIVITATIS) incluye transporte ilimitado +
entrada gratis a 30+ atracciones. Vale la pena si haces 3+ museos al día.
```

---

## 📊 Tracking y Analytics

### Cómo Saber Si Está Funcionando

**Booking.com Dashboard:**
- Clicks: cuánta gente hace click en tus links
- Conversión: % que reservan
- Comisiones: cuánto ganaste

**Civitatis:**
- Similar, dashboard con clicks y conversiones

**Google Analytics:**
- Instala GA4 en tu web
- Ve qué páginas tienen más clicks en tus afiliados
- Optimiza las que mejor convierten

---

## 🚀 Estrategia de Optimización

### Mes 1-3: Setup

- ✅ Regístrate en Booking, Civitatis, Rentalcars
- ✅ Consigue tus links de afiliado
- ✅ Actualiza BookingWidget con tu AID
- ✅ Añade widgets al final de cada guía

### Mes 4-6: Optimización

- 📊 Revisa qué páginas convierten mejor
- 🎯 Añade más CTAs en esas páginas
- 📝 Escribe artículos sobre hoteles en barrios específicos
- 🔗 Añade links internos entre guías

### Mes 7-12: Escala

- 📧 Captura emails con lead magnet
- 💌 Newsletter semanal con ofertas de hoteles
- 📱 Redes sociales (Pinterest funciona brutal para viajes)
- 🎥 Videos YouTube con links en descripción

---

## 💡 Tips Pro para Aumentar Conversiones

### 1. Contexto Natural

❌ MAL:
> "Haz click aquí para reservar hotel"

✅ BIEN:
> "Después de un día explorando Alfama, necesitas un hotel cerca.
> Los **hoteles en Graça** tienen las mejores vistas y están a 10 min andando.
> [Ver hoteles en Graça →](link)"

### 2. Soluciona Problemas Reales

La gente busca:
- "¿Dónde dormir cerca del aeropuerto de Lisboa?"
- "Hotel barato en el centro de Lisboa"
- "Hotel romántico con vistas en Lisboa"

Crea páginas específicas para estas búsquedas con tus links de afiliado.

### 3. Urgencia (Sin Presionar)

✅ BIEN:
> "Los hoteles en Belém se llenan rápido en verano.
> La mayoría tienen cancelación gratis, así que reserva ya y cancela si cambias de planes."

### 4. Trust Signals

- ✅ "Cancelación gratis en la mayoría"
- ✅ "Sin tarjeta de crédito para reservar"
- ✅ "Mejor precio garantizado"

---

## 📈 Caso de Éxito Real

**Blog:** The Blonde Abroad
**Tráfico:** 100,000 visitas/mes
**Ingresos Afiliados:** $15,000-20,000/mes

**Qué hace:**
- Contenido gratis detallado (como el tuyo)
- Booking.com links en TODAS las guías
- Lead magnet (checklists de viaje) para capturar emails
- Newsletter con ofertas de hoteles

**Tu ventaja:**
- Nicho específico (Lisboa)
- Menos competencia en español
- Contenido MUY detallado (mejor que la mayoría)

---

## ⚠️ Importante Legal

### Divulgación de Afiliados

En tu footer y en páginas con afiliados, añade:

```markdown
**Divulgación:** Esta web contiene links de afiliados. Si reservas a través de
nuestros links, recibimos una pequeña comisión sin costo adicional para ti.
Esto nos ayuda a mantener las guías gratuitas y actualizadas.
```

### Impuestos

- Guarda todos los comprobantes de pago
- Declara los ingresos en tu IRPF anual
- Cuando superes 1,000€/mes consistente, considera darte de alta como autónomo

---

## 🎯 Acción Inmediata

**HOY:**
1. Regístrate en Booking.com Partner Program
2. Regístrate en Civitatis Afiliados
3. Espera aprobación (1-3 días)

**ESTA SEMANA:**
1. Consigue tus links de afiliado
2. Actualiza `BookingWidget.tsx` con tu AID
3. Añade el widget al final de las 3 guías principales

**ESTE MES:**
1. Instala Google Analytics
2. Empieza a trackear conversiones
3. Escribe 1-2 artículos más sobre hoteles en barrios específicos

---

## 📞 Contactos de Soporte

**Booking.com:**
- Dashboard: https://dashboard.booking.com
- Soporte: partners@booking.com

**Civitatis:**
- Dashboard: https://afiliados.civitatis.com
- Soporte: afiliados@civitatis.com

---

## 🚀 ¿Preguntas?

Si tienes dudas:
1. Revisa el dashboard de cada plataforma (tienen FAQs)
2. Escríbeme los problemas que tengas
3. Grupos de Facebook de afiliados de viajes (mucha info)

---

**Última actualización:** Enero 2025

**Próximos pasos:** Una vez tengas tus primeros links, te ayudo a integrarlos en las páginas específicas de cada guía.
