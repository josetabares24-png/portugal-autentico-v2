# 🔗 Link Exacto para Verificar Dominio en Brevo

## 📍 URL Directa

**Link exacto para verificar dominio:**
```
https://app.brevo.com/settings/senders/domains
```

## 📋 Pasos Detallados

### Paso 1: Acceder a la Configuración de Dominios
1. Ve a: **https://app.brevo.com/settings/senders/domains**
2. Inicia sesión con tu cuenta de Brevo
3. Verás una lista de dominios (si ya tienes alguno) o un botón para añadir uno nuevo

### Paso 2: Añadir tu Dominio
1. Haz clic en **"Add a domain"** o **"Añadir dominio"**
2. Escribe: `estabaenlisboa.com`
3. Haz clic en **"Add"** o **"Añadir"**

### Paso 3: Obtener los Registros DNS
Brevo te mostrará **3 registros DNS** que debes añadir en Namecheap:

1. **SPF Record** (TXT)
   - Nombre: `@` o `estabaenlisboa.com`
   - Valor: Algo como `v=spf1 include:spf.brevo.com ~all`

2. **DKIM Record** (TXT)
   - Nombre: `brevo._domainkey` o similar
   - Valor: Una cadena larga con claves públicas

3. **DMARC Record** (TXT)
   - Nombre: `_dmarc`
   - Valor: Algo como `v=DMARC1; p=none; rua=mailto:...`

### Paso 4: Añadir Registros en Namecheap
1. Ve a tu panel de Namecheap: **https://ap.www.namecheap.com/Domains/DomainControlPanel/estabaenlisboa.com/advancedns**
2. O ve a: **https://ap.www.namecheap.com** → My Account → Domain List → Manage → Advanced DNS
3. En la sección **"Host Records"** o **"Advanced DNS"**, añade los 3 registros TXT que Brevo te dio
4. Guarda los cambios

### Paso 5: Verificar en Brevo
1. Vuelve a: **https://app.brevo.com/settings/senders/domains**
2. Haz clic en **"Verify"** o **"Verificar"** junto a tu dominio
3. Espera 24-48 horas para que los DNS se propaguen
4. Cuando esté verificado, verás ✅ junto a cada registro

## ⚠️ Nota Importante

**No puedo hacer esto por ti** porque:
- Requiere acceso a tu cuenta de Brevo (credenciales privadas)
- Requiere acceso a tu panel de Namecheap (credenciales privadas)
- Es un proceso que DEBES hacer tú por seguridad

## 🔗 Links Útiles

- **Brevo Domains:** https://app.brevo.com/settings/senders/domains
- **Brevo Senders (verificar email):** https://app.brevo.com/settings/senders
- **Namecheap DNS:** https://ap.www.namecheap.com/Domains/DomainControlPanel/estabaenlisboa.com/advancedns

## 📄 Documento de Referencia Completo

Para más detalles, consulta: `MEJORAR-DELIVERABILIDAD-EMAILS.md`
