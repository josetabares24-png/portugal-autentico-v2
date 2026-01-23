# 📧 Guía para Mejorar la Deliverabilidad de Emails (Evitar Spam)

## ❓ ¿Por qué van a spam?

Es normal que los emails vayan a spam cuando:
- El dominio no está verificado correctamente
- Falta autenticación SPF/DKIM/DMARC
- El contenido tiene palabras "spam trigger"
- La tasa de apertura es baja
- El remitente es nuevo o tiene poca reputación
- Los usuarios marcan como spam

## ✅ Soluciones Inmediatas

### 1. Verificar Dominio en Brevo (CRÍTICO)

**Pasos:**
1. Ve a **https://app.brevo.com/settings/senders/domains**
2. Añade tu dominio: `estabaenlisboa.com`
3. Brevo te dará registros DNS para añadir:
   - **SPF**: Autentica que Brevo puede enviar desde tu dominio
   - **DKIM**: Firma criptográfica de los emails
   - **DMARC**: Política de autenticación

**En Namecheap (o tu proveedor DNS):**
1. Ve a tu panel de DNS
2. Añade los registros TXT que Brevo te proporciona
3. Espera 24-48 horas para que se propaguen
4. Verifica en Brevo que todo esté "Verificado ✅"

**Beneficio:** Los emails aparecerán como enviados desde `contacto@estabaenlisboa.com` en vez de `contacto@estabaenlisboa.com via brevo.com`

### 2. Usar Email Verificado como Remitente

**Actual:**
- `contacto@estabaenlisboa.com` (debe estar verificado en Brevo)

**Verificar en Brevo:**
1. Ve a **https://app.brevo.com/settings/senders**
2. Asegúrate de que `contacto@estabaenlisboa.com` esté:
   - ✅ Verificado
   - ✅ Activo
   - ✅ Con estado "Validated"

### 3. Mejorar el Contenido de los Emails

**Evitar palabras spam:**
- ❌ "Gratis", "Oferta", "Descuento", "Urgente", "Actúa ahora"
- ✅ Usar: "Guía", "Consejos", "Recomendaciones", "Tips"

**Mejores prácticas:**
- ✅ Incluir texto plano además de HTML
- ✅ Evitar demasiadas imágenes
- ✅ Incluir enlace de baja clara
- ✅ No usar solo mayúsculas
- ✅ Evitar muchos enlaces

### 4. Calentar el Dominio (Warm-up)

Si es un dominio nuevo:
- Empieza enviando pocos emails (10-20/día)
- Aumenta gradualmente durante 2-4 semanas
- Envía primero a usuarios que te conocen
- Pide que marquen como "No spam" si llega a spam

### 5. Mejorar la Reputación del Remitente

**Acciones:**
- ✅ Responder rápidamente a los emails
- ✅ No enviar a listas compradas
- ✅ Solo enviar a usuarios que se suscribieron
- ✅ Incluir siempre opción de baja
- ✅ Monitorear tasa de rebote (mantener < 2%)

## 🔧 Configuración Técnica

### Variables de Entorno en Vercel

Asegúrate de tener configurado:
```
BREVO_API_KEY=tu_api_key
BREVO_SENDER_EMAIL=contacto@estabaenlisboa.com
BREVO_SENDER_NAME=Estaba en Lisboa
BREVO_LIST_ID=5
BREVO_WELCOME_TEMPLATE_ID=6
BREVO_SUBSCRIPTION_TEMPLATE_ID=7
BREVO_CONTACT_NOTIFICATION_TEMPLATE_ID=10
BREVO_CONTACT_CONFIRMATION_TEMPLATE_ID=11
```

### Verificar Estado en Brevo

1. **Dashboard de Brevo:**
   - Ve a **https://app.brevo.com/dashboard**
   - Revisa la tasa de entrega
   - Monitorea rebotes y quejas

2. **Reputación del Remitente:**
   - Ve a **https://app.brevo.com/settings/senders**
   - Verifica el "Sender Score"
   - Debe estar en verde (buena reputación)

## 📊 Monitoreo

### Herramientas para Verificar

1. **Mail-Tester.com:**
   - Envía un email a la dirección que te dan
   - Obtienes puntuación de 0-10
   - Te dice qué mejorar

2. **MXToolbox:**
   - Verifica SPF/DKIM/DMARC
   - https://mxtoolbox.com/spf.aspx

3. **Google Postmaster Tools:**
   - Si muchos usuarios usan Gmail
   - Verifica reputación con Google
   - https://postmaster.google.com/

## 🎯 Mejoras en el Código

### 1. Añadir Texto Plano a los Emails

Los emails deben incluir versión texto además de HTML para mejor deliverabilidad.

### 2. Mejorar Headers de Email

Añadir headers personalizados puede ayudar:
- `List-Unsubscribe` (obligatorio en algunos países)
- `Precedence: bulk` (para emails masivos)
- `X-Mailer` con información del remitente

### 3. Rate Limiting

No enviar demasiados emails muy rápido - Brevo ya lo gestiona, pero es bueno saberlo.

## ⚠️ Errores Comunes

1. **No verificar el dominio** → Emails van a spam
2. **Usar email no verificado** → Brevo puede bloquear
3. **Contenido muy "promocional"** → Filtros de spam lo detectan
4. **Enviar a listas no opt-in** → Baja reputación
5. **No incluir unsubscribe** → Violación GDPR/legal

## 📈 Resultados Esperados

Después de implementar estas mejoras:
- ✅ Tasa de entrega: 95%+ (en inbox, no spam)
- ✅ Tasa de apertura: 20-30% (normal para newsletters)
- ✅ Tasa de rebote: < 2%
- ✅ Tasa de quejas: < 0.1%

## 🚀 Acción Inmediata Recomendada

**Prioridad 1 (Hacer YA):**
1. Verificar dominio `estabaenlisboa.com` en Brevo
2. Añadir registros SPF/DKIM/DMARC en DNS
3. Verificar que `contacto@estabaenlisboa.com` esté validado

**Prioridad 2 (Esta semana):**
1. Revisar contenido de emails (evitar palabras spam)
2. Añadir versión texto a los emails
3. Configurar Google Postmaster Tools

**Prioridad 3 (Este mes):**
1. Monitorear métricas de deliverabilidad
2. Calentar el dominio si es nuevo
3. Mejorar tasa de apertura con mejores asuntos

## 📞 Soporte Brevo

Si sigues teniendo problemas:
- **Soporte Brevo:** https://help.brevo.com/
- **Documentación:** https://developers.brevo.com/
- **Chat en vivo:** Disponible en el panel de Brevo

---

**Nota:** La deliverabilidad mejora con el tiempo. Un dominio nuevo puede tardar 2-4 semanas en ganar buena reputación. Sé paciente y sigue las mejores prácticas.
