# Fase 1 — Comparación completa del blog

**Fecha:** 17/10/2026. Se comparan las capturas `.snapshots/editorial-phase1-base.json` y `editorial-phase1-after.json`. Esta revisión no modificó código, pruebas ni contenido.

## Resultado

**69 HTML 200 mantienen sus 25 campos capturados bajo comparación: 1,725 comparaciones, 1,700 iguales y 25 diferentes.** En 13 artículos cambia el enlazado; en 12 de ellos también desaparece texto de navegación. Los otros 56 HTML son idénticos en todos los campos.

**Precisión del total:** «16 rutas / 28 campos» incluye 13 artículos HTML / 25 campos y tres aliases de blog / tres cambios de estado HTTP. No significa que se hayan reescrito 16 cuerpos. La captura completa contiene 74 rutas: 69 HTML y cinco redirecciones. Se mantienen los mismos slugs y estados 200; una de las 69 piezas es el cuerpo noindex fuera del catálogo, no una publicación nueva.

**No hay inserciones ni sustituciones de texto visible en la captura. Hay 14 eliminaciones textuales normalizadas en 12 artículos.** Incluyen dos frases de enlace del cuerpo, por lo que no se afirma que todo el texto permanezca idéntico. No hay diferencias en los campos de títulos, metas, canonical, encabezados, IDs, anclas, schemas o imágenes.

## Cobertura de todos los campos

| Campo | Iguales / 69 | Diferentes |
|---|---:|---:|
| `estado` | 69 | 0 |
| `esV2` | 69 | 0 |
| `tieneHero` | 69 | 0 |
| `title` | 69 | 0 |
| `metaDescription` | 69 | 0 |
| `canonical` | 69 | 0 |
| `robots` | 69 | 0 |
| `keywords` | 69 | 0 |
| `ogTitle` | 69 | 0 |
| `ogDescription` | 69 | 0 |
| `ogUrl` | 69 | 0 |
| `ogImage` | 69 | 0 |
| `ogImageAlt` | 69 | 0 |
| `h1` | 69 | 0 |
| `h2` | 69 | 0 |
| `h3` | 69 | 0 |
| `idsDeEncabezados` | 69 | 0 |
| `anclasDelIndice` | 69 | 0 |
| `enlacesInternos` | 56 | 13 |
| `enlacesExternos` | 69 | 0 |
| `tiposDeSchema` | 69 | 0 |
| `schemas` | 69 | 0 |
| `numeroDeImagenes` | 69 | 0 |
| `imagenes` | 69 | 0 |
| `textoVisible` | 57 | 12 |

Se compararon estructuras JSON completas de schema, incluido cada valor `datePublished`/`dateModified`. Las fechas estructuradas coinciden en las 69 piezas. También coincide, en orden, la extracción de importes con moneda del texto visible; es una comprobación de conservación, no verificación de que sus precios sigan vigentes.

El campo `textoVisible` abarca el `<main>` con HTML eliminado y espacios colapsados. `imagenes` conserva `src`, `alt`, `loading`, `fetchpriority` y `sizes`; no captura `srcset`, width/height ni el archivo binario. No se comparan metadatos no capturados (por ejemplo Twitter/googlebot específicos), HTML bruto, header/footer global fuera del main, estilos ni apariencia responsive. Esos contratos requieren sus checks propios.

## Artículos con cambios

| Artículo | Campos distintos | Naturaleza |
|---|---|---|
| `/blog/aeropuerto-lisboa-al-centro` | `enlacesInternos`, `textoVisible` | Hrefs finales y/o eliminación de navegación repetida/autorreferente |
| `/blog/como-moverse-por-lisboa` | `enlacesInternos`, `textoVisible` | Hrefs finales y/o eliminación de navegación repetida/autorreferente |
| `/blog/estacion-olaias-lisboa` | `enlacesInternos`, `textoVisible` | Hrefs finales y/o eliminación de navegación repetida/autorreferente |
| `/blog/estacion-oriente-lisboa` | `enlacesInternos`, `textoVisible` | Hrefs finales y/o eliminación de navegación repetida/autorreferente |
| `/blog/lisboa-card-vale-la-pena` | `enlacesInternos`, `textoVisible` | Hrefs finales y/o eliminación de navegación repetida/autorreferente |
| `/blog/metro-lisboa-guia` | `enlacesInternos`, `textoVisible` | Hrefs finales y/o eliminación de navegación repetida/autorreferente |
| `/blog/monasterio-jeronimos-entradas` | `enlacesInternos`, `textoVisible` | Hrefs finales y/o eliminación de navegación repetida/autorreferente |
| `/blog/palacio-da-pena-entradas` | `enlacesInternos` | Hrefs finales y/o eliminación de navegación repetida/autorreferente |
| `/blog/patinetes-electricos-lisboa` | `enlacesInternos`, `textoVisible` | Hrefs finales y/o eliminación de navegación repetida/autorreferente |
| `/blog/que-ver-cascais-desde-lisboa` | `enlacesInternos`, `textoVisible` | Hrefs finales y/o eliminación de navegación repetida/autorreferente |
| `/blog/sintra-desde-lisboa` | `enlacesInternos`, `textoVisible` | Hrefs finales y/o eliminación de navegación repetida/autorreferente |
| `/blog/tarjeta-navegante-lisboa` | `enlacesInternos`, `textoVisible` | Hrefs finales y/o eliminación de navegación repetida/autorreferente |
| `/blog/tram-28-historia-guia` | `enlacesInternos`, `textoVisible` | Hrefs finales y/o eliminación de navegación repetida/autorreferente |

Los hrefs posteriores son una subsecuencia ordenada de los hrefs anteriores tras aplicar **solo** el mapa de redirects autorizado. Se verificó para los 13 artículos afectados: no aparecen nuevos destinos ajenos al mapa ni se reordenan los supervivientes. Se eliminan enlaces ya servidos por cuerpo/relacionados o duplicados después de resolver su URL. El rótulo «También te puede servir» desaparece en Aeropuerto y Patinetes porque ese bloque queda sin enlaces.

## Texto eliminado: diferencias exactas

Los fragmentos siguientes son exactos respecto al texto normalizado de la captura; cada uno tiene adición vacía. Rangos de palabras, contexto y hashes completos están en el JSON.

### `/blog/aeropuerto-lisboa-al-centro`

```diff
- También te puede servir Transporte en Lisboa: billetes y precios
```

### `/blog/como-moverse-por-lisboa`

```diff
- Transporte en Lisboa: billetes y precios
```

### `/blog/estacion-olaias-lisboa`

```diff
- Transporte en Lisboa: billetes y precios
```

### `/blog/estacion-oriente-lisboa`

```diff
- Transporte en Lisboa: billetes y precios
```

### `/blog/lisboa-card-vale-la-pena`

```diff
- Transporte en Lisboa: billetes y precios
```

### `/blog/metro-lisboa-guia`

```diff
- Transporte en Lisboa: billetes y precios
```

### `/blog/monasterio-jeronimos-entradas`

```diff
- Ficha rápida del Mosteiro dos Jerónimos
```

### `/blog/patinetes-electricos-lisboa`

```diff
- También te puede servir Transporte en Lisboa: billetes y precios
```

### `/blog/que-ver-cascais-desde-lisboa`

```diff
- Transporte en Lisboa: billetes y precios
```

### `/blog/sintra-desde-lisboa`

```diff
- En la ficha de Sintra tienes el resumen del día: qué ver, cuánto tiempo pide y el error que más se repite con la hora de la Pena. Ficha de Sintra: Pena y Regaleira →
```
```diff
- Cómo moverse por Lisboa
```

### `/blog/tarjeta-navegante-lisboa`

```diff
- Transporte en Lisboa: billetes y precios
```

### `/blog/tram-28-historia-guia`

```diff
- En la ficha del tranvía 28 tienes lo rápido: precio del billete, dónde subirte para ir sentado y a qué horas evitarlo. Ficha del tranvía 28 →
```
```diff
- Transporte en Lisboa: billetes y precios
```

## Las cuatro autorreferencias retiradas del código

| Artículo | Registro retirado | Motivo |
|---|---|---|
| `/blog/como-moverse-por-lisboa` | `/transporte-lisboa` — Transporte en Lisboa: billetes y precios | El destino autorizado es el propio artículo. |
| `/blog/monasterio-jeronimos-entradas` | `/actividades/mosteiro-jeronimos` — Ficha rápida del Mosteiro dos Jerónimos | La ficha redirige al propio artículo. |
| `/blog/sintra-desde-lisboa` | `/actividades/sintra-dia-completo` — Ficha de Sintra: Pena y Regaleira | La ficha redirige al propio artículo. |
| `/blog/tram-28-historia-guia` | `/actividades/tranvia-28` — Ficha del tranvía 28 | La ficha redirige al propio artículo. |

Dos son registros `article.links`; dos son bloques `contenido` de tipo `enlace` con una frase y su etiqueta. Las dos frases completas figuran arriba. No se trasladó automáticamente contenido de las fichas al destino; esta evidencia acredita retirar navegación que terminaría en la misma página. El diff de código también cambia hrefs y añade resolución/deduplicación en los componentes compartidos; no cambia los datos de autoría, fechas, fuentes, tablas o metadata de estas piezas.

## Redirecciones capturadas

| Alias bajo `/blog/` | Antes | Después | Destino |
|---|---:|---:|---|
| `barrios-lisboa-donde-alojarse` | 308 | 301 | `/blog/donde-alojarse-en-lisboa` |
| `como-ir-sintra-desde-lisboa` | 308 | 301 | `/blog/sintra-desde-lisboa` |
| `mejores-pasteles-nata-lisboa` | 308 | 308 | `/blog/pasteles-de-belem` |
| `miradores-atardecer-lisboa` | 308 | 308 | `/blog/mejores-miradores-lisboa` |
| `viajar-ninos-lisboa` | 308 | 301 | `/blog/lisboa-con-ninos` |

Solo cambian 308→301 `barrios-lisboa-donde-alojarse`, `como-ir-sintra-desde-lisboa` y `viajar-ninos-lisboa`; sus destinos permanecen idénticos. Los otros dos redirects capturados conservan estado y destino. Esta tabla cubre los aliases presentes en las capturas del blog; no sustituye la matriz HTTP de las 16 reglas y sus variantes de locale.

**WAIT protegido:** `restaurantes-romanticos-lisboa` y `novedades-lisboa-2026` siguen 200 y son idénticos en los 25 campos. La comparación incluye también las páginas protegidas de Volta, Óbidos, Nochevieja y Navidad; no hay cambios en ellas.

## Evidencia conservada y reproducción

El [JSON completo](editorial-phase1-blog-comparison.json) contiene las huellas originales de todas las rutas, un patch de cada campo distinto, los 69 inventarios de campos iguales/diferentes y los diffs exactos. Así se puede reconstruir la captura posterior sin depender de `.snapshots/`, que está ignorado por Git. No se limita a un resumen de checks verdes.

- SHA-256 del archivo base: `9b493b0c4da79d30727da33a8fde58d2732f701f9c0cf3a9879cd45faf5b84e8`.
- SHA-256 del archivo posterior: `ec70296c5b145c0344d017bca8c50b5c6e9cd770ad3aa7266100797df5be28c9`.

La reproducción siguiente usa solo Python estándar y lectura. Puede ejecutarse con el Python disponible en el equipo desde la raíz del repo. Verifica reconstrucción, los 1.725 pares de campos, conservación estructural y que todas las diferencias de texto sean eliminaciones de navegación:

```python
import copy, hashlib, json, difflib
from pathlib import Path

r = json.loads(Path("docs/editorial-phase1-blog-comparison.json").read_text(encoding="utf-8"))
b = r["reconstructibleBaseline"]
a = copy.deepcopy(b)
for p in r["patches"]:
    a[p["slug"]][p["field"]] = p["afterValue"]
def digest(v):
    raw = json.dumps(v, ensure_ascii=False, sort_keys=True, separators=(",", ":"))
    return hashlib.sha256(raw.encode("utf-8")).hexdigest()
assert digest(b) == r["inputs"]["before"]["canonicalValueSha256"]
assert digest(a) == r["inputs"]["after"]["canonicalValueSha256"]
html = [s for s in b if b[s]["estado"] == a[s]["estado"] == 200]
fields = r["allComparedHtmlFields"]
assert len(html) == 69 and len(fields) == 25
differences = [(s, k) for s in html for k in fields if b[s][k] != a[s][k]]
assert len(differences) == 25
assert all(k in ("enlacesInternos", "textoVisible") for s, k in differences)
for s in html:
    for k in fields:
        assert (b[s][k] == a[s][k]) == (k in r["htmlArticles"][s]["equalFields"])
for d in r["exactVisibleTextDiffs"]:
    s = d["slug"]; bw = b[s]["textoVisible"].split(" "); aw = a[s]["textoVisible"].split(" ")
    ops = difflib.SequenceMatcher(None, bw, aw, autojunk=False).get_opcodes()
    assert all(op in ("equal", "delete") for op, *_ in ops)
    saved = d["operations"]
    actual = [(i, j, " ".join(bw[i:j])) for op,i,j,x,y in ops if op == "delete"]
    assert actual == [(o["beforeWordRange"][0], o["beforeWordRange"][1], o["removedExactNormalizedText"]) for o in saved]
assert b["novedades-lisboa-2026"] == a["novedades-lisboa-2026"]
assert b["restaurantes-romanticos-lisboa"] == a["restaurantes-romanticos-lisboa"]
print("69 HTML, 1725 pares de campos, 25 diferencias explicadas; reconstrucción verificada")
```

## Riesgos y regresiones

**Cero diferencias inesperadas dentro de los campos capturados.** No es una garantía de ausencia de regresiones en todo el sitio. La igualdad de datos no acredita la verdad de cada precio/horario ni resultados futuros de Search Console. Los enlaces que aún dicen «ficha» pero ahora llevan al artículo conservan su etiqueta por el alcance de Fase 1; una mejora editorial del rótulo queda para revisión, no se ha generado texto nuevo.

La presente revisión no añade artículos, no fusiona los WAIT, no escala el nuevo sistema editorial ni autoriza merge/producción.
