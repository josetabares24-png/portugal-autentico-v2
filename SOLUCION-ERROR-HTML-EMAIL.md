# 🔧 Solución: HTML se muestra como texto plano en emails

## Problema

Cuando se envía el correo de conserjería, el HTML de los parámetros `ALOJAMIENTO_ROW`, `RITMO_ROW` e `INTERESES_SECTION` se mostraba como texto plano en lugar de renderizarse correctamente.

## Causa

Brevo escapa automáticamente el HTML en los parámetros por seguridad. Además, Brevo **no soporta** triple llave `{{{ }}}` ni condicionales `{{#if}}` para insertar HTML sin escapar.

## Solución Implementada

Se cambió el enfoque: en lugar de enviar HTML como parámetros, ahora:

1. **Se envían solo datos de texto** como parámetros:
   - `ALOJAMIENTO_NOMBRE` (texto: "Boutique", "Lujo", etc.)
   - `RITMO_NOMBRE` (texto: "Relajado", "Intenso")
   - `INTERESES_TEXTO` (texto: "🍷 Gastronomía, 🏛️ Historia Oculta")

2. **El HTML se construye directamente en la plantilla de Brevo** usando estos parámetros de texto.

3. **La plantilla ya ha sido actualizada** automáticamente con el script.

### Verificación

La plantilla se actualizó correctamente. Para verificar:

1. Ve a: https://app.brevo.com/templates/email/edit/13
2. Busca las secciones que usan:
   - `{{params.ALOJAMIENTO_NOMBRE}}`
   - `{{params.RITMO_NOMBRE}}`
   - `{{params.INTERESES_TEXTO}}`

3. Verifica que el HTML esté construido directamente en la plantilla (no como parámetros HTML)

## Verificación

Después de actualizar la plantilla:

1. Envía un correo de prueba desde tu aplicación
2. Verifica que el HTML se renderice correctamente
3. Si aún se muestra como texto plano, verifica:
   - Que la plantilla esté guardada correctamente
   - Que estés usando el template ID correcto (13)
   - Que la variable `BREVO_CONSERJERIA_TEMPLATE_ID=13` esté configurada en Vercel

## Cambios realizados

✅ **Script actualizado**: `scripts/create-brevo-templates.js` ahora construye el HTML directamente en la plantilla
✅ **Código actualizado**: `src/app/api/presupuesto/route.ts` ahora envía solo datos de texto (no HTML)
✅ **Plantilla actualizada**: La plantilla ID 13 en Brevo ya está actualizada con el nuevo formato

## Notas importantes

- Brevo no soporta HTML sin escapar en parámetros
- El HTML debe construirse directamente en la plantilla de Brevo
- Solo se envían datos de texto como parámetros
- Las secciones se mostrarán siempre (incluso si están vacías). Si quieres ocultarlas cuando están vacías, puedes agregar lógica CSS adicional
