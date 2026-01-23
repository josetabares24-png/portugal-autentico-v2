# ⚡ Solución Rápida: Mejorar Puntuación Mail-Tester (6.5 → 9+/10)

## 🎯 Problema Actual

**Puntuación:** 6.5/10
- ❌ SpamAssassin: **-3 puntos** (problema principal)
- ❌ Errores en el cuerpo: **-0.5 puntos**

## ✅ Solución Inmediata (5 minutos)

### Paso 1: Añadir Texto Plano en Brevo

**Para Template ID 11 (Contacto - Confirmación Usuario):**

1. Ve a: **https://app.brevo.com/templates/email/edit/11**
2. Busca la sección **"Text Version"** o **"Versión Texto"** (abajo del editor HTML)
3. Pega este texto:

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

4. **Guarda** el template
5. **Repite** para los otros templates (6, 7, 10)

---

### Paso 2: Verificar Resultado

1. Ve a: **https://www.mail-tester.com**
2. Obtén una **nueva dirección** de prueba
3. Envía un email de contacto desde tu web
4. Revisa la nueva puntuación

**Resultado esperado:** 8-9/10 (mejora de +2-3 puntos)

---

## 🔍 Por Qué Funciona

**SpamAssassin penaliza cuando:**
- ❌ Solo hay HTML, sin texto plano
- ❌ Proporción imagen/texto desbalanceada
- ❌ Falta List-Unsubscribe header
- ❌ HTML mal estructurado

**Al añadir texto plano:**
- ✅ SpamAssassin ve contenido legible
- ✅ Mejora la puntuación automáticamente
- ✅ Los clientes de email que no soportan HTML pueden leerlo

---

## 📋 Checklist Rápido

- [ ] Template ID 11: Texto plano añadido
- [ ] Template ID 7: Texto plano añadido
- [ ] Template ID 6: Texto plano añadido
- [ ] Template ID 10: Texto plano añadido
- [ ] Probado en Mail-Tester
- [ ] Puntuación mejorada a 8+/10

---

## 🔗 Links Directos

- **Template ID 11:** https://app.brevo.com/templates/email/edit/11
- **Template ID 7:** https://app.brevo.com/templates/email/edit/7
- **Template ID 6:** https://app.brevo.com/templates/email/edit/6
- **Template ID 10:** https://app.brevo.com/templates/email/edit/10
- **Mail-Tester:** https://www.mail-tester.com

---

## 💡 Nota

El código ya está actualizado para añadir headers automáticamente. Solo necesitas añadir el **texto plano en Brevo** para cada template.
