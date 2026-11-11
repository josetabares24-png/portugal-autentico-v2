# QOSQO — dirección editorial para revisión (11/11/2026)

**Estado: PROPUESTA / NO APROBADA VISUALMENTE / NO IMPLEMENTADA.**  
**Rama existente:** `colaboracion-previa-qosqo-2026-11-08`.  
**PR existente:** #141.  
**No fusionar, indexar, publicar, reenviar al restaurante ni modificar la web en producción sin autorización.**

## 1. Autoprompt operativo recuperable

Actúa como director editorial y de arte de Estaba en Lisboa, experto en UX de lectura, comercio editorial y Next.js, con el criterio de Sinchi y Lisbon ByBoat. Antes de editar: recupera las reglas LOCKED de Mente Lisboa; inspecciona la página actual, sus 9 fotos y el contenido enviado por QOSQO; preserva todos los datos verificados y la intención de búsqueda. Rediseña **únicamente** la vista previa actual, sin copiar un template genérico de IA ni tocar la identidad o páginas globales. Una pieza patrocinada debe ser útil, atractiva, claramente etiquetada, honesta sobre la fuente de su información y fácil de reservar. Aplica la menor intervención que mejore materialmente jerarquía, fotografía, tono, coherencia, legibilidad y CTA. Entrega QA móvil/escritorio, cambios contrastables, métricas y límites antes de pedir aprobación visual.

**Test editorial:** «¿Leerías este artículo aunque no fuera patrocinado?».  
**Test comercial:** «¿Puedes decidir qué pedir, dónde está y cómo contactar sin buscar otro sitio?».  
**Test visual:** «¿Se nota que es Estaba en Lisboa y, a la vez, que QOSQO es distinto de Sinchi?».  
**Test de verdad:** «¿Qué viene de QOSQO, de fuente externa o de una visita personal?». Nunca fingir visita o degustación.

## 2. Hallazgo de la PR #141

Archivo: `src/app/[locale]/colaboraciones/previa-qosqo/page.tsx`. Estado funcional: HTML Next.js nativo, 9 imágenes webp, datos/contacto/mapa; `noindex,nofollow,noarchive`; fuera de sitemap y blog. La composición actual abre con aviso/bloque de revisión, H1 genérico, fotografía muy contrastada, recuadro grande de ficha y una galería de 6 fotos consecutivas. Links con `rel=sponsored`. El documento actual confunde la experiencia editorial con indicaciones de borrador (p. ej., precios no disponibles) y no tiene jerarquía de reservas suficiente.

## 3. Aprendizajes previos: Sinchi y Lisbon ByBoat

- **Sinchi:** portada editorial potente, fotografía protagonista y buen uso de espacio en blanco; lectura cálida; verde oscuro en CTAs; fotos reales y contenido preservado. No duplicar la misma plantilla: QOSQO debe diferenciarse por su fotografía, ritmo y relato. No usar iframe para la versión final; conservar HTML Next.js nativo.
- **Lisbon ByBoat:** integración con el blog y la marca, tipografía recta (no cursiva decorativa), CTA claros sin flechas ni iconos innecesarios, fotografías relevantes, sección comercial discreta, footer editorial coherente. La revisión final debe convivir con navegación, relacionados y autor, no parecer micrositio aislado.
- **Mente Lisboa:** voz humana sin clichés, marca crema/azul noche/terracota; ningún dato sin fundamento ni nueva URL indexable hasta aprobación.

## 4. Identidad local: cocina peruana editorial

**Concepto:** «Perú en el corazón de Lisboa», sin bandera de Perú como decorado ni grafismos folclóricos falsos.

- Base crema cálida `#F6F1E8`; texto carbón `#262524`; CTA verde profundo `#203C38`; acento terracota de marca `#B8472E`; maíz tostado `#D5B375` como acento muy puntual. Evitar usar todos los acentos a la vez.
- Mantener fuentes de la web: `var(--font-display)` para titulares y `var(--font-article)` / `var(--font-body)` para lectura. Titulares **no cursivos**, no añadir nuevas fuentes ni CSS global.
- Imágenes grandes, aire, líneas sutiles, márgenes generosos. Máximo un bloque de datos compacto y un cierre de reserva; evitar seis tarjetas, bordes redondeados por defecto y sombras decorativas.

## 5. Fotografía — inspección de 9 archivos de QOSQO existentes

- **Portada recomendada:** `qosqo-tiradito-leche-de-tigre-aji-amarillo.webp` — plato claro, fondo de madera, amarillo luminoso, sirve para hero vertical de escritorio/móvil sin excesos. La fotografía actual `qosqo-plato-principal.webp` tiene sombras duras y un contraste menos favorable para apertura.
- `qosqo-plato-con-mantel-andino.webp`: horizontal, muy identitaria por el mantel y la composición; usar como foto contextual de ancho generoso, sabiendo que contiene información de contacto impresa.
- `qosqo-bebidas.webp`: momento con manos/personas y cócteles, aporta humanidad y transición hacia bebidas.
- `qosqo-pisco-sour.webp`: fotografía dramática, pero fondo negro abundante; situarla en bloque pequeño y no como portada.
- `qosqo-sala-y-postre.webp`: realmente predomina el postre y el mural desenfocado, no documenta toda la sala; no usar como panorámica de interior.
- `qosqo-plato-pescado.webp`, `qosqo-plato-salsa-amarilla.webp`, `qosqo-aji-de-gallina.webp`: usar intercaladas con el texto; evitar secuencias de platos visualmente parecidos.
- Reservar las nueve fotos si son útiles y el restaurante confirma permiso, pero **no obligarse a mostrar las nueve** por mera completitud. No reutilizar fotos de TheFork/Fever/Instagram sin permiso del titular. Validar los nombres de platos frente a los metadatos recibidos.
- Las imágenes aportadas por restaurante no equivalen a cesión explícita; permiso escrito y créditos antes de publicación definitiva.

## 6. Composición propuesta

**Desktop:** hero partido 44% texto / 56% fotografía vertical; eyebrow «Gastronomía · Campo das Cebolas», H1 humano y concreto; lead de 2 frases, CTA «Reservar mesa» usando contacto proporcionado y secundario «Ver los platos». A continuación, contenido en columna legible (68–74 caracteres) y posible índice discreto en lateral, no otro recuadro comercial.

**Móvil:** fotografía protagonista arriba, seguida de título y subtítulo sin texto superpuesto; CTA ≥48px; ancho de lectura 320–430px; galería sin carruseles innecesarios y sin overflow. No repetir header propio si ya existe el navbar general.

**Secuencia:**
1. Portada/lead: QOSQO junto a la Sé/Campo das Cebolas; autor y aviso «Publicidad · Colaboración con QOSQO» como texto discreto bajo el título.
2. Contexto breve de cocina peruana y localización. No decir «probamos» ni «visitamos».
3. Platos que QOSQO destacó: tiradito, ceviche, causa, ají de gallina, lomo saltado, pulpo y corvina, en grupos naturales con fotografías intercaladas. No aparentar que todos se probaron.
4. La experiencia en mesa y pisco sour; fotos humanas/de ambiente. Una historia corta del negocio solo con afirmaciones atribuibles y verificadas.
5. Ubicación junto al Campo das Cebolas, contacto, reserva y mapa clic-para-cargar.
6. CTA final claro a correo/teléfono/Instagram según facilidad real de reserva. Pie editorial/autor/relacionados siguiendo patrones del blog.

**Título editorial candidato:** «QOSQO: cocina peruana junto a la Sé de Lisboa».  
**SEO title candidato:** «Dónde comer peruano cerca de la Sé de Lisboa: QOSQO».  
No usar «el primer restaurante peruano de Portugal» como hecho sin resolver contradicciones de fuentes y antigüedad.

## 7. Riesgos, hechos y pendientes

- No publicar precios que no procedan de carta oficial vigente. TheFork/Fever muestran cartas/ofertas intermediadas; no asumir igualdad con mesa.
- Dirección comunicada por restaurante: Rua dos Bacalhoeiros 26A. Teléfono y horario en PR con contraste externo; comprobar condiciones para definitiva. No exhibir en el texto al lector el proceso interno («faltan fotos», «no tenemos carta»), sino omitir elemento hasta validación.
- Permiso por escrito de fotografías y crédito preferido por restaurante pendiente.
- No convertir la nota de preview/noindex en párrafo del artículo final.
- Evitar repetir datos de contacto tres veces; CTA principal temprano, datos completos al final.
- Titulares `font-style:normal` en scope local, evitando cursivas por CSS global.
- Un solo H1; responsive de portada, alt descriptivos, tamaños de imagen correctos, imágenes secundarias lazy, foco teclado y enlaces `sponsored` donde corresponda; privacidad del mapa.
- Antes de publicar: artículo final en ruta de blog con canonical real, JSON-LD BlogPosting editorial apropiado, derechos verificados, sitemap y fecha verdaderos; no hacer este paso todavía.

## 8. Definición de terminado para el 10/10

[ ] Diseño escritorio 1440px y 1024px con imagen de portada sin recortes indeseables.  
[ ] Móvil 320/390/430px, botones 48px, sin overflow ni saltos de carga; foco, contraste y alt adecuados.  
[ ] Comprobación de 9 fotos, selección y pies correctos, permisos del proveedor verificados.  
[ ] Texto informativo humano y fiel a fuentes, sin inventar visita, historia o precios.  
[ ] Una CTA útil al principio y reserva clara al final, clics instrumentados.  
[ ] Aviso patrocinado discreto pero inequívoco y enlaces etiquetados.  
[ ] Noindex + sitemap fuera de producción de revisión conservados.  
[ ] `npm run typecheck` y smokes relevantes; Vercel Preview READY verificado en el SHA.  
[ ] Revisión visual del usuario antes de merge/publicación; revisión del restaurante y acuerdo comercial después.

**La propuesta inicial de este documento fue replanteada por petición expresa de José: QOSQO no debe parecerse a Sinchi. La versión de diseño aplicada en la rama se detalla en el apartado siguiente; no se ha fusionado ni publicado.**


## 9. Giro de dirección artística aplicado: QOSQO no debe copiar Sinchi (11/11/2026)

**Solicitud de José:** «que no sea igual al otro peruano que hicimos; tenemos que ser profesionales y hacerlo de otra manera».

**Decisión de diseño implementada en la rama de preview y aún pendiente de aprobación visual:**

- Sinchi sigue siendo la referencia positiva, pero **no se reutiliza su estructura** de hero dividido, índice lateral, galería en rejilla y bloque final de reserva.
- Nuevo concepto «reportaje gastronómico de QOSQO»: cabecera tipográfica centrada con el nombre QOSQO en gran formato, fondo vino `#37232e`, subtítulo de ubicación y patrocinio legible.
- Apertura panorámica en dos fotos: plato sobre mantel identitario QOSQO + escena humana de cócteles. Móvil muestra únicamente la foto horizontal para no forzar recortes ni duplicar imágenes.
- Navegación corta de anclas, capítulos numerados, primer capítulo en editorial de columnas con texto largo, plato destacado en fotografía + texto y otras especialidades en índice tipográfico sin tarjetas.
- Apartado pisco sour como capítulo oscuro propio, postre/contexto en bloque fotográfico separado, contacto y mapa en cierre utilitario.
- Paleta del restaurante derivada de sus fotos: vino, crema, ocre. El sitio principal conserva su marca; estilos locales CSS Modules, sin añadir fuentes ni alterar la home, Sinchi o Lisbon ByBoat.
- Se conservaron noindex/noarchive, enlaces comerciales `rel=sponsored nofollow`, fuente de los datos explícita, ausencia de precios sin carta y no atribuir visita propia.
- Cambios acotados a `src/app/[locale]/colaboraciones/previa-qosqo/page.tsx` y `QosqoEditorial.module.css` de PR #141. Se requiere verificar el deploy del commit exacto, revisar móvil y escritorio y obtener aprobación de José.
- No fusionar a `main`, no indexar, no enviar al restaurante, no considerar el pago cerrado.

**Control importante:** la promesa de «formato Brisa» es un requisito de presentación visual, no una razón para generar nuevas imágenes de platos que aparenten provenir del restaurante. Solo se usan fotografías existentes de QOSQO.
