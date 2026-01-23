# 🔧 Cómo Agregar Registros DNS en Namecheap para Evitar Spam

## ⚠️ IMPORTANTE

Si en Brevo ves que los registros están **verificados ✅**, significa que **YA ESTÁN en tus DNS**. Pero si quieres verificar o agregarlos manualmente, sigue estos pasos.

## 📋 Registros DNS que Necesitas Agregar

Basándote en lo que Brevo te muestra, necesitas agregar estos **4 registros** en Namecheap:

### 1. **Código Brevo (TXT Record)**

**En Namecheap:**
- **Tipo:** `TXT Record`
- **Host:** `@` (o deja en blanco si Namecheap no acepta @)
- **Value:** `brevo-code:ec1b83e2a0462d5f77761f8f148d155d`
- **TTL:** `Automatic` (o 3600)

**Nota:** Si Namecheap no acepta `@`, usa:
- **Host:** `estabaenlisboa.com` (sin el @)

---

### 2. **Registro DKIM 1 (CNAME Record)**

**En Namecheap:**
- **Tipo:** `CNAME Record`
- **Host:** `brevo1._domainkey`
- **Value:** `b1.estabaenlisboa-com.dkim.brevo.com`
- **TTL:** `Automatic` (o 3600)

---

### 3. **Registro DKIM 2 (CNAME Record)**

**En Namecheap:**
- **Tipo:** `CNAME Record`
- **Host:** `brevo2._domainkey`
- **Value:** `b2.estabaenlisboa-com.dkim.brevo.com`
- **TTL:** `Automatic` (o 3600)

---

### 4. **Registro DMARC (TXT Record)**

**En Namecheap:**
- **Tipo:** `TXT Record`
- **Host:** `_dmarc`
- **Value:** `v=DMARC1; p=none; rua=mailto:rua@dmarc.brevo.com`
- **TTL:** `Automatic` (o 3600)

---

## 📝 Pasos Detallados en Namecheap

### Paso 1: Acceder a DNS Management

1. Ve a: **https://ap.www.namecheap.com**
2. Inicia sesión con tu cuenta
3. Ve a **"Domain List"** → Busca `estabaenlisboa.com`
4. Click en **"Manage"** (o el botón de gestión)
5. Ve a la pestaña **"Advanced DNS"** (o "DNS Management")

### Paso 2: Agregar los Registros

**Para cada registro (4 en total):**

1. Busca la sección **"Host Records"** o **"DNS Records"**
2. Click en **"Add New Record"** o el botón **"+"**
3. Selecciona el **Tipo** (TXT o CNAME según corresponda)
4. Completa los campos:
   - **Host:** (el valor de la columna "Nombre" de Brevo)
   - **Value:** (el valor de la columna "Valor" de Brevo)
   - **TTL:** Deja en "Automatic" o selecciona 3600
5. Click en **"Save"** o el checkmark ✅

### Paso 3: Verificar en Brevo

1. Espera **5-10 minutos** para que los DNS se propaguen
2. Ve a: **https://app.brevo.com/settings/senders/domains**
3. Click en **"Verify"** o **"Verificar"** junto a tu dominio
4. Deberías ver ✅ verde junto a cada registro

---

## 🔍 Cómo Ver los Valores Exactos en Brevo

Si necesitas ver los valores exactos que debes copiar:

1. Ve a: **https://app.brevo.com/settings/senders/domains**
2. Click en tu dominio `estabaenlisboa.com`
3. Verás una página con todos los registros DNS
4. Para cada registro, verás:
   - **Tipo:** TXT o CNAME
   - **Nombre:** (lo que va en "Host" en Namecheap)
   - **Valor:** (lo que va en "Value" en Namecheap)
5. Copia exactamente estos valores

---

## ⚠️ Problemas Comunes

### Problema 1: Namecheap no acepta "@" en Host

**Solución:** 
- Deja el campo **Host vacío** (en blanco)
- O usa: `estabaenlisboa.com` (sin el @)

### Problema 2: El registro no se verifica después de agregarlo

**Soluciones:**
- Espera **24-48 horas** (la propagación DNS puede tardar)
- Verifica que copiaste el valor **exactamente** (sin espacios extra)
- Asegúrate de que el **Tipo** sea correcto (TXT vs CNAME)
- Verifica que no hay **registros duplicados** (elimina los antiguos si los hay)

### Problema 3: No encuentro dónde agregar registros en Namecheap

**Solución:**
1. Ve a: **https://ap.www.namecheap.com/Domains/DomainControlPanel/estabaenlisboa.com/advancedns**
2. O: Domain List → Manage → Advanced DNS
3. Busca la sección **"Host Records"** o **"DNS Records"**

---

## ✅ Verificación Final

Una vez agregados todos los registros:

1. **En Brevo:** Todos los registros deben mostrar ✅ verde
2. **En Namecheap:** Debes ver los 4 registros listados
3. **Espera 24-48 horas** para propagación completa
4. **Prueba enviar un email** y verifica que no va a spam

---

## 📞 Si Necesitas Ayuda

Si después de 48 horas los registros no se verifican:
1. Revisa que los valores están copiados **exactamente** como en Brevo
2. Verifica que no hay **espacios extra** al inicio o final
3. Contacta al soporte de Namecheap si persiste el problema

---

## 🔗 Links Útiles

- **Namecheap DNS:** https://ap.www.namecheap.com/Domains/DomainControlPanel/estabaenlisboa.com/advancedns
- **Brevo Domains:** https://app.brevo.com/settings/senders/domains
- **Verificar DNS (herramienta externa):** https://mxtoolbox.com/SuperTool.aspx
