# 🔧 Cómo Agregar Registros DNS en Vercel para Evitar Spam

## 📍 Link Directo de Vercel

**Link exacto para gestionar DNS:**
```
https://vercel.com/[tu-usuario]/domains/estabaenlisboa.com/dns
```

O ve a:
1. **https://vercel.com/dashboard**
2. Click en **"Domains"** (en el menú lateral)
3. Busca `estabaenlisboa.com`
4. Click en el dominio
5. Ve a la pestaña **"DNS"**

---

## 📋 Registros DNS que Necesitas Agregar

Basándote en lo que Brevo te muestra, necesitas agregar estos **4 registros** en Vercel:

### 1. **Código Brevo (TXT Record)**

**En Vercel:**
- **Tipo:** `TXT`
- **Name:** `@` (o deja en blanco)
- **Value:** `brevo-code:ec1b83e2a0462d5f77761f8f148d155d`
- **TTL:** `Automatic` (o 3600)

---

### 2. **Registro DKIM 1 (CNAME Record)**

**En Vercel:**
- **Tipo:** `CNAME`
- **Name:** `brevo1._domainkey`
- **Value:** `b1.estabaenlisboa-com.dkim.brevo.com`
- **TTL:** `Automatic` (o 3600)

---

### 3. **Registro DKIM 2 (CNAME Record)**

**En Vercel:**
- **Tipo:** `CNAME`
- **Name:** `brevo2._domainkey`
- **Value:** `b2.estabaenlisboa-com.dkim.brevo.com`
- **TTL:** `Automatic` (o 3600)

---

### 4. **Registro DMARC (TXT Record)**

**En Vercel:**
- **Tipo:** `TXT`
- **Name:** `_dmarc`
- **Value:** `v=DMARC1; p=none; rua=mailto:rua@dmarc.brevo.com`
- **TTL:** `Automatic` (o 3600)

---

## 📝 Pasos Detallados en Vercel

### Paso 1: Acceder a DNS en Vercel

1. Ve a: **https://vercel.com/dashboard**
2. Inicia sesión con tu cuenta
3. En el menú lateral, click en **"Domains"**
4. Busca y click en `estabaenlisboa.com`
5. Ve a la pestaña **"DNS"** (o "DNS Records")

### Paso 2: Agregar los Registros

**Para cada registro (4 en total):**

1. En la sección **"DNS Records"**, click en **"Add Record"** o el botón **"+"**
2. Selecciona el **Type** (TXT o CNAME según corresponda)
3. Completa los campos:
   - **Name:** (el valor de "Nombre" de Brevo)
   - **Value:** (el valor de "Valor" de Brevo)
   - **TTL:** Deja en "Automatic" o selecciona 3600
4. Click en **"Save"** o **"Add Record"**

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
   - **Nombre:** (lo que va en "Name" en Vercel)
   - **Valor:** (lo que va en "Value" en Vercel)
5. Copia exactamente estos valores

---

## ⚠️ Problemas Comunes

### Problema 1: Vercel no acepta "@" en Name

**Solución:** 
- Deja el campo **Name vacío** (en blanco)
- O usa: `estabaenlisboa.com` (sin el @)

### Problema 2: El registro no se verifica después de agregarlo

**Soluciones:**
- Espera **24-48 horas** (la propagación DNS puede tardar)
- Verifica que copiaste el valor **exactamente** (sin espacios extra)
- Asegúrate de que el **Type** sea correcto (TXT vs CNAME)
- Verifica que no hay **registros duplicados** (elimina los antiguos si los hay)

### Problema 3: No encuentro dónde agregar registros en Vercel

**Solución:**
1. Ve a: **https://vercel.com/dashboard**
2. Click en **"Domains"** → `estabaenlisboa.com` → **"DNS"**
3. O usa el link directo: **https://vercel.com/[tu-usuario]/domains/estabaenlisboa.com/dns**

---

## ✅ Verificación Final

Una vez agregados todos los registros:

1. **En Brevo:** Todos los registros deben mostrar ✅ verde
2. **En Vercel:** Debes ver los 4 registros listados en la sección DNS
3. **Espera 24-48 horas** para propagación completa
4. **Prueba enviar un email** y verifica que no va a spam

---

## 🔗 Links Útiles

- **Vercel Dashboard:** https://vercel.com/dashboard
- **Vercel Domains:** https://vercel.com/dashboard/domains
- **Brevo Domains:** https://app.brevo.com/settings/senders/domains
- **Verificar DNS (herramienta externa):** https://mxtoolbox.com/SuperTool.aspx

---

## 📝 Nota Importante

Si tu dominio está gestionado por Vercel, **NO necesitas** agregar los registros en Namecheap. Vercel gestiona los DNS directamente, así que agrega los registros en el panel de Vercel.
