# Pendientes reales — 24 octubre 2026

Revisión de repositorio, Mente Lisboa, manifiesto, PR abiertos y producción. Solo lectura de aplicación; no cambios de contenido, URL, configuración o campañas. Producción confirmada: PR116, merge `ffe27e6ae5ae24338aa8becfa521daff5d59fdd8`, Vercel `dpl_5kX4uJor2dbtbBEU6JZRv4J3YF8U`, READY/production.

## Qué está terminado y publicado

- Auditoría inicial, arquitectura SEO y sistema editorial reusable; aplicación controlada y rollout por grupos documentado. No todas las páginas requieren una caja nueva para considerar completada su revisión de presentación.
- Navegación, portada editorial del blog, Home y Planifica como contacto personal. La prueba funcional del formulario fue comunicada por José; no se ha repetido un envío ni inspeccionado su bandeja.
- Correcciones puntuales de Cascais, Festivales, Monumentos, Vinos y Gastronomía incorporadas al lote publicado de PR113. Algunos informes y notas del manifiesto todavía dicen Preview: esa descripción histórica no significa que esas correcciones sigan sin publicar. Las dudas residuales de esas URLs sí permanecen.
- Entradas y Free tours comerciales de PR115; piloto de seis URLs inglesas de PR116, con cinco recorridos ingleses seleccionados. No son fases pendientes de construir desde cero.
- Manifest, documentación, controles SEO y QA posterior a publicación. Última QA de despliegue: inglés222, conservación española1659/72, migración1490/104URLs/16redirects, Free tours66, cero fallos. No constituye certificación de todos los hechos ni de todo dispositivo.

GET repetidos en esta revisión: Home, /en, Entradas, Free tours, sitemap y robots200; sitemap104 URLs, seis inglesas; declaración de sitemap presente. Admin/APIadmin500. El host de Clerk sigue200 JSON con X-Robots-Tag noindex,nofollow; falta comprobar su estado real en el índice de Google. Evidencia fuera del repo: audit-evidence/remaining-work-2026-10-24/public-status.json.

## Trabajo priorizado

| Prioridad | Pendiente / evidencia | Cierre concreto | Esfuerzo |
|---|---|---|---|
| P0 | Ruta de campañas Brevo sin autenticación en código desplegado | Proteger creación de campañas con autorización administrativa en servidor, anterior a cualquier llamada externa; rechazar anónimos y usuarios no administradores. QA con proveedor simulado, sin campañas reales. | Bajo–medio |
| P1 | /admin y /api/admin/guides siguen500; clave Clerk privada ausente según inspección de nombres anterior | Restaurar la clave de la instancia correcta desde paneles oficiales, redeploy y validar anónimo/sesión autorizada sin debilitar autenticación ni copiar claves a chat/Git. | Bajo, depende de acceso a configuración |
| P1 | Reservas/comisiones desconocidas; clics son solo paso previo | Reconciliar GuruWalk/Tiqets/GetYourGuide por periodo y campaña, separando reservas, cancelaciones y comisión neta. Mantener consentimiento analítico y no simular compras. | Bajo–medio, depende de paneles |
| P1 | QA móvil reciente del inglés no certificado | Verificar viewport que realmente cambie: iPhone, Android, tablet y desktop en seis páginas, menú, calendario, tarjetas, fuentes y cookies; añadir Entradas y formulario. Sin overflow, controles accesibles y fecha/idioma correctos. | Medio |
| P1 | Elección de Entradas todavía mejorable; aviso fechado de Castelo ya vencido y descuento Oceanário en REVIEW | Lote pequeño en Preview: guía práctica junto a la tarjeta, inclusiones verificadas para Pena/Jerónimos/Oceanário y revisión de avisos/precios/condiciones sensibles a fecha. No más productos por defecto. | Medio |
| P1 | Falta lectura posterior a los últimos despliegues | Restablecer acceso de lectura a GSC/Windsor sin cambiar plan ni desconectar fuentes automáticamente; comparar ventanas cerradas por página/consulta y separar D0 español/inglés. Priorizar CTR de Metro solo con consultas actuales. | Bajo–medio, depende de fuente |
| P2 | 17 URLs REVIEW y dos consolidaciones reales WAIT; parte de las notas está desactualizada | Resolver dudas específicas con fuentes primarias y actualizar estado por URL. WAIT no es trabajo ejecutable pendiente: Restaurantes/Pareja y Novedades/Festivales siguen separadas por decisión D055. /quiz es la tercera fila WAIT y es404 deliberado. | Gradual por grupos |
| P2 | Performance/accesibilidad/schema no equivalen a una certificación total | Repetir laboratorio móvil consistente tras publicación, verificar accesibilidad manual y revisar que Offer refleje hechos actuales. No hay medición INP/CrUX completa ni mejora causal acreditada. | Medio |
| P2 | Cierre documental y ramas antiguas | PR114 y117 son borradores documentales; incorporar/reconciliar memoria cuando corresponda. Revisar divergencia de PR110/103/100 antes de cualquier fusión; no mezclar candidatos viejos con main actual. Revisar además Stay22 Spark en español antes de decidir si desvía intención. | Bajo–medio |

### Alcance del hallazgo Brevo

`src/app/api/brevo/campaign/route.ts` implementa POST con limitación de solicitudes, pero no comprueba sesión ni rol. Acepta contenido, listas y scheduledAt y llama a emailCampaigns con credencial de servidor. `src/proxy.ts` solo incluye /api/admin y /api/reviews en los matchers API: no protege esta ruta. GET devuelve405 porque no hay handler GET; eso no demuestra protección del POST.

El hallazgo es de control de acceso en código; no es evidencia de abuso, correos enviados o exposición del valor de la clave. No se ha ejecutado POST ni creado/programado una campaña. Requiere una reparación separada y Preview; no se implementa dentro de esta revisión.

## Límites de contenido y de métricas

Las17 filas REVIEW representan revisión editorial residual, no17 errores técnicos o páginas rotas. Varias ya recibieron correcciones parciales. La prioridad inmediata de contenido es resolver avisos/campañas cambiantes y después los grupos de barrios/cultura/comida según evidencia; no hacer reescritura masiva ni tocar slugs protegidos. Mantener las dos fusiones aplazadas y los clusters Cascais/Pastéis sin migración automática.

Último snapshot utilizable: capturado20/10, datos hasta17/10, anterior a los últimos despliegues. Ventana28d:125clics/10023impresiones/CTR1,247%/posición9,479. No es rendimiento medido de lo publicado hoy. La lectura7d no muestra subida uniforme y no debe usarse para atribuir éxito al rediseño. Windsor bloqueado por límite de cuentas; GSC Wizard por suscripción según diagnóstico anterior. No se ha reintentado ni modificado ninguna suscripción en esta revisión.

E019 inglés inicia24/10; indexación, clics y reservas necesitan tiempo y muestra. No traducir otras100páginas ni abrir otro dominio antes de aprender del piloto. Las1.000impresiones/día sostenidas se evalúan con28.000impresiones/28d, junto a clics/CTR/posición; no con un día aislado.

## Decisión de secuencia

Cerrar primero la autorización del endpoint de campañas y la configuración Clerk; a continuación QA móvil y medición comercial; después pulido acotado de Entradas en Preview. Mantener observación SEO y correcciones factuales pequeñas en paralelo al trabajo de producto. No nuevo rediseño, migración masiva ni publicación automática.
