# 🚨 Solución: Emails Siguen Llegando a Spam

## ⚠️ Problema

Aunque los registros DNS están correctos en Vercel, los emails siguen llegando a spam.

## 🔍 Posibles Causas y Soluciones

### 1. ❌ Falta Registro SPF de Brevo

**Problema:** Veo que tienes un SPF de `privateemail.com` pero puede faltar el SPF de Brevo.

**Solución:**
1. Ve a: **https://app.brevo.com/settings/senders/domains**
2. Click en `estabaenlisboa.com`
3. Busca el **registro SPF** (no solo el código Brevo)
4. Debe ser algo como: `v=spf1 include:spf.brevo.com ~all`
5. Si tienes múltiples SPF, **consolídalos en uno solo**:
   ```
   v=spf1 include:spf.brevo.com include:spf.privateemail.com ~all
   ```

**En Vercel:**
- Busca el registro TXT con `v=spf1`
- Si hay dos SPF separados, elimina uno y consolida ambos en un solo registro

---

### 2. ❌ Email Remitente No Verificado

**Problema:** El email `contacto@estabaenlisboa.com` puede no estar verificado en Brevo.

**Solución:**
1. Ve a: **https://app.brevo.com/settings/senders**
2. Busca `contacto@estabaenlisboa.com`
3. Debe estar:
   - ✅ **Verificado** (Verified)
   - ✅ **Activo** (Active)
   - ✅ Con estado "Validated"

**Si no está verificado:**
- Brevo te enviará un email de verificación
- Haz click en el link del email
- O verifica manualmente en el panel

---

### 3. ❌ Dominio Necesita "Calentarse" (Warm-up)

**Problema:** Si es un dominio nuevo o acabas de configurar los DNS, necesita tiempo para ganar reputación.

**Solución - Estrategia de Warm-up:**
- **Semana 1:** Envía 10-20 emails/día
- **Semana 2:** Aumenta a 30-50 emails/día
- **Semana 3:** Aumenta a 50-100 emails/día
- **Semana 4+:** Puedes enviar más según tu necesidad

**Tips:**
- Empieza enviando a usuarios que te conocen
- Pídeles que marquen como "No spam" si llega a spam
- Responde rápidamente a los emails que recibas
- No envíes a listas compradas

---

### 4. ❌ Contenido del Email Tiene Palabras Spam

**Problema:** El contenido puede tener palabras que activan filtros spam.

**Palabras a EVITAR:**
- ❌ "Gratis", "Oferta", "Descuento", "Urgente"
- ❌ "Actúa ahora", "Oferta limitada", "Gana dinero"
- ❌ Muchas mayúsculas, muchos signos de exclamación
- ❌ Demasiados enlaces
- ❌ Solo imágenes sin texto

**Mejores Prácticas:**
- ✅ Usa lenguaje natural y personal
- ✅ Incluye texto plano además de HTML
- ✅ No uses solo mayúsculas
- ✅ Máximo 2-3 enlaces por email
- ✅ Incluye siempre enlace de baja

---

### 5. ❌ Reputación del Remitente Baja

**Problema:** Si muchos usuarios marcan como spam, la reputación baja.

**Solución:**
1. **Revisa en Brevo:**
   - Ve a: **https://app.brevo.com/dashboard**
   - Revisa tasa de rebote (debe ser < 2%)
   - Revisa tasa de quejas (debe ser < 0.1%)
   - Revisa tasa de apertura

2. **Mejora la reputación:**
   - Solo envía a usuarios que se suscribieron
   - Incluye siempre opción de baja clara
   - Responde rápidamente a emails
   - No compres listas de emails
   - Mantén lista limpia (elimina rebotes)

---

### 6. ❌ Falta Verificación en Brevo

**Problema:** Los registros DNS están en Vercel pero no están verificados en Brevo.

**Solución:**
1. Ve a: **https://app.brevo.com/settings/senders/domains**
2. Click en `estabaenlisboa.com`
3. Click en **"Verify"** o **"Verificar"** para cada registro
4. Espera 5-10 minutos
5. Deben mostrar ✅ verde

**Si no se verifican:**
- Espera 24-48 horas (propagación DNS)
- Verifica que los valores están exactamente iguales
- Usa herramienta: https://mxtoolbox.com/SuperTool.aspx para verificar DNS

---

### 7. ❌ Lista Negra (Blacklist)

**Problema:** Tu dominio o IP puede estar en una lista negra.

**Solución:**
1. Verifica en: **https://mxtoolbox.com/blacklists.aspx**
2. Introduce `estabaenlisboa.com`
3. Si aparece en alguna lista, solicita la eliminación

---

## ✅ Checklist Completo

Marca cada punto cuando lo completes:

- [ ] **SPF consolidado** (incluye Brevo + otros servicios)
- [ ] **DKIM 1 verificado** ✅ en Brevo
- [ ] **DKIM 2 verificado** ✅ en Brevo
- [ ] **DMARC verificado** ✅ en Brevo
- [ ] **Código Brevo verificado** ✅ en Brevo
- [ ] **Email remitente verificado** en Brevo (`contacto@estabaenlisboa.com`)
- [ ] **Dominio verificado** completamente en Brevo
- [ ] **Contenido sin palabras spam**
- [ ] **Warm-up del dominio** (si es nuevo)
- [ ] **Tasa de rebote < 2%**
- [ ] **Tasa de quejas < 0.1%**
- [ ] **No estás en lista negra**

---

## 🔧 Acción Inmediata Recomendada

### Paso 1: Añadir Texto Plano en Brevo (CRÍTICO - 5 minutos)

**Esto mejorará tu puntuación de 6.5 a 8-9/10:**

1. Ve a: **https://app.brevo.com/templates/email/edit/11**
2. Busca la sección **"Text Version"** o **"Versión Texto"**
3. Pega el texto plano equivalente (ver `SOLUCION-RAPIDA-SPAMASSASSIN.md`)
4. Guarda y repite para templates 6, 7, 10

**📄 Guía detallada:** `SOLUCION-RAPIDA-SPAMASSASSIN.md`

### Paso 2: Verificar SPF
1. Ve a Vercel DNS
2. Busca registros TXT con `v=spf1`
3. Si hay múltiples, consolídalos en uno:
   ```
   v=spf1 include:spf.brevo.com include:spf.privateemail.com ~all
   ```

### Paso 3: Verificar Email en Brevo
1. Ve a: **https://app.brevo.com/settings/senders**
2. Verifica que `contacto@estabaenlisboa.com` esté verificado

### Paso 4: Probar con Mail-Tester
1. Ve a: **https://www.mail-tester.com**
2. Envía un email de prueba a la dirección que te dan
3. Revisa la puntuación (debe ser > 8/10 después de añadir texto plano)
4. Corrige los problemas que te indique

### Paso 5: Monitorear
1. Revisa tasas en Brevo después de cada envío
2. Ajusta según resultados
3. Pide a usuarios que marquen como "No spam" si llega a spam

---

## 📊 Herramientas de Verificación

- **Mail-Tester:** https://www.mail-tester.com (envía email de prueba)
- **MXToolbox:** https://mxtoolbox.com/SuperTool.aspx (verifica DNS)
- **Blacklist Check:** https://mxtoolbox.com/blacklists.aspx (verifica listas negras)
- **SPF Check:** https://mxtoolbox.com/spf.aspx (verifica SPF)

---

## 💡 Nota Final

Incluso con todo configurado correctamente, algunos emails pueden ir a spam temporalmente. Esto es normal y mejora con el tiempo si:
- Mantienes buena reputación
- Envías contenido relevante
- Los usuarios interactúan positivamente (abren, hacen click)
- No tienes quejas de spam

**Paciencia y monitoreo constante son clave.**
