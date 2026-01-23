# 🔧 Cómo Mejorar Templates en Brevo para Evitar SpamAssassin

## ⚠️ Problema Actual

Mail-Tester muestra **6.5/10** con estos problemas:
- **SpamAssassin: -3 puntos** (problema principal)
- **Errores en el cuerpo: -0.5 puntos**

## ✅ Soluciones en Brevo

### 1. Añadir Texto Plano a los Templates

**En Brevo:**
1. Ve a: **https://app.brevo.com/templates/email**
2. Click en el template que quieres mejorar (ID 11: Contacto - Confirmación Usuario)
3. En la sección **"Text Version"** o **"Versión Texto"**, añade el texto plano equivalente

**Ejemplo para Template ID 11:**
```
Hola {{params.NOMBRE}},

Hemos recibido tu mensaje sobre {{params.ASUNTO}} y te responderemos en menos de 24 horas.

Resumen de tu mensaje:
{{params.MENSAJE}}

Si tienes alguna urgencia, puedes escribirnos directamente a contacto@estabaenlisboa.com

Explorar nuestras guías: https://estabaenlisboa.com/itinerarios

Política de privacidad: https://estabaenlisboa.com/politica-privacidad

© 2025 Estaba en Lisboa. Todos los derechos reservados.
```

**Haz lo mismo para:**
- Template ID 6: Quiz Lisboa - Bienvenida
- Template ID 7: Suscripción - Confirmación
- Template ID 10: Contacto - Notificación Admin
- Template ID 11: Contacto - Confirmación Usuario

---

### 2. Mejorar Headers del Email

**En Brevo, para cada template:**
1. Ve a la sección **"Headers"** o **"Encabezados"**
2. Añade estos headers:

```
List-Unsubscribe: <https://estabaenlisboa.com/unsubscribe>
List-Unsubscribe-Post: List-Unsubscribe=One-Click
X-Mailer: Estaba en Lisboa
Precedence: bulk
```

**Nota:** Si Brevo no permite añadir headers directamente en templates, se añaden automáticamente cuando usas la API (ya está implementado en el código).

---

### 3. Asegurar Proporción Texto/Imagen

**Problema:** Si hay mucha imagen y poco texto, SpamAssassin lo marca como spam.

**Solución:**
- Asegúrate de que hay **más texto que imágenes** en cada template
- El logo está bien, pero añade suficiente texto descriptivo
- Evita usar solo imágenes sin texto alternativo

---

### 4. Mejorar Estructura HTML

**Problemas comunes que SpamAssassin detecta:**
- ❌ Tablas anidadas excesivamente
- ❌ Estilos inline muy largos
- ❌ Falta de DOCTYPE
- ❌ Meta tags incorrectos

**Ya tienes esto correcto en los templates**, pero verifica:
- ✅ DOCTYPE HTML5 presente
- ✅ Meta charset UTF-8
- ✅ Viewport configurado
- ✅ Estilos bien estructurados

---

### 5. Evitar Palabras Spam en Subject

**Subject actual:** "Hemos recibido tu mensaje - Estaba en Lisboa"

**Está bien**, pero evita:
- ❌ "URGENTE", "ACCIÓN INMEDIATA"
- ❌ Muchos signos de exclamación: "¡¡¡"
- ❌ Solo mayúsculas
- ❌ Palabras como "Gratis", "Oferta", "Descuento"

---

## 📝 Pasos Inmediatos

### Paso 1: Añadir Texto Plano en Brevo

1. Ve a: **https://app.brevo.com/templates/email/edit/11**
2. Busca la sección **"Text Version"** o **"Versión Texto"**
3. Pega el texto plano equivalente al HTML
4. Guarda el template
5. Repite para templates 6, 7, 10

### Paso 2: Verificar en Mail-Tester

1. Ve a: **https://www.mail-tester.com**
2. Obtén una nueva dirección de prueba
3. Envía un email de contacto desde tu web
4. Revisa la nueva puntuación (debe mejorar a 8+/10)

### Paso 3: Monitorear

- Revisa la puntuación después de cada cambio
- Ajusta según las recomendaciones de Mail-Tester

---

## 🔍 Qué Revisar en Mail-Tester

Después de hacer los cambios, Mail-Tester te dirá específicamente qué mejorar. Busca:

1. **"SpamAssassin piensa que puedes mejorar"** → Añade texto plano
2. **"El cuerpo de tu mensaje contiene errores"** → Revisa HTML
3. **"Falta List-Unsubscribe"** → Añade header (ya implementado en código)
4. **"Muchas imágenes"** → Añade más texto

---

## 📊 Resultado Esperado

Después de estos cambios:
- **Puntuación objetivo:** 8-10/10
- **SpamAssassin:** Sin penalizaciones
- **Deliverabilidad:** Mejorada significativamente

---

## 🔗 Links Útiles

- **Brevo Templates:** https://app.brevo.com/templates/email
- **Template ID 11:** https://app.brevo.com/templates/email/edit/11
- **Mail-Tester:** https://www.mail-tester.com
