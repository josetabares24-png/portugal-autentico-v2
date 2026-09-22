# Mente Lisboa

**Mente Lisboa** is the editorial, product, SEO and visual judgment layer for `estabaenlisboa.com`.

The folder remains `brain/` for technical stability. The human name of the system is **Mente Lisboa**.

Every agent, editor or developer working on the project must use this file before changing public content, layout, IA, navigation or monetization.

---

# Identity

Estaba en Lisboa is not a generic tourism portal and not an AI travel-content factory.

It is a Spanish-language editorial publication that helps a real person understand Lisbon, make better decisions and waste less time.

The site should feel:
- observed;
- edited;
- useful;
- specific;
- calm;
- trustworthy;
- human.

It should never feel:
- mass-produced;
- templated;
- inflated;
- overly polished by AI;
- like a booking marketplace;
- like a fake local influencer.

---

# Core promise

> Lisboa explicada sin ruido.

The job of every page is to reduce uncertainty.

A good page helps answer one of these:
- ¿Qué merece mi tiempo?
- ¿Cómo llego?
- ¿Dónde me conviene estar?
- ¿Qué cambia según mi tipo de viaje?
- ¿Qué debo saber antes?
- ¿Qué opción es realmente útil aquí?

---

# Anti-AI filter — writing

## Forbidden default language

Do not use these expressions as filler or default copy:

- "Lisboa es una ciudad que enamora"
- "una joya escondida"
- "vibrante"
- "mágico/a"
- "encanto único"
- "no te puedes perder"
- "para todos los gustos"
- "tradición y modernidad"
- "sumérgete en"
- "déjate sorprender"
- "experiencia inolvidable"
- "auténtico" as an unsupported claim
- "como un local" as an unsupported claim
- "los locales..." unless a source or real observation supports it
- "sin duda"
- "definitivo/a" unless the page is genuinely exhaustive
- excessive superlatives: mejor, increíble, espectacular, imperdible

These words are not banned forever; they require a concrete reason.

## Human-writing rules

1. **Concrete before decorative.**
   Prefer "La Línea Roja conecta el aeropuerto con Alameda" over "Moverse por Lisboa es fácil y emocionante".

2. **One useful idea per paragraph.**
   Avoid paragraphs built from generic transitions.

3. **Vary sentence rhythm.**
   Do not mechanically produce three equal sentences, three adjectives or three bullet points.

4. **Use uncertainty honestly.**
   If an answer depends on luggage, time, weather or budget, say so.

5. **No fake first person.**
   Never invent experiences, visits, meals or conversations for José.

6. **No fake local authority.**
   Living in Lisbon can be stated when relevant and true; do not turn that into "I know every secret".

7. **No SEO padding.**
   If a section exists only to repeat a keyword, delete it.

8. **No empty introductions.**
   The first screen should begin answering the question.

9. **Specific nouns beat adjectives.**
   Streets, lines, stations, neighbourhoods, distances, trade-offs and sources are better than mood words.

10. **Journalistic distinction.**
    Separate fact, recommendation, observation and uncertainty.

## Human test

Before publishing, ask:

> Could a competent human editor delete 25% of this text without losing information?

If yes, tighten it.

Then ask:

> Is there any sentence that sounds plausible but could have been written about Barcelona, Rome or Porto?

If yes, make it Lisbon-specific or remove it.

---

# Anti-AI filter — visual design

## Use real material first

Priority:
1. real photographs from the project;
2. documentary/public archive when editorially justified;
3. simple illustration/diagram when it explains something;
4. generated imagery only when there is no documentary claim and it is clearly decorative.

Never use AI-generated imagery to simulate a real place, business, person, event or factual scene when a real image is available.

## Avoid the "AI website" look

Do not default to:
- glassmorphism;
- neon gradients;
- glowing cards;
- excessive shadows;
- giant rounded rectangles everywhere;
- perfect repeated 3-column card grids on every section;
- meaningless blobs;
- floating decorative icons;
- fake handwritten notes;
- stock-photo smiles;
- AI-generated cityscapes presented as Lisbon;
- excessive badges;
- animated decoration with no information value.

## Preferred visual language

- warm cream / paper-like base;
- dark navy text;
- restrained terracotta and gold accents;
- real Lisbon photography;
- thin dividers;
- editorial asymmetry;
- generous whitespace;
- strong typography;
- cards only when the information benefits from a card;
- square or modest corner radii;
- captions/categories that resemble a publication, not a SaaS dashboard.

## Layout test

A section must have a reason to exist beyond "breaking up the page".

Every section must do one of:
- orient;
- answer;
- compare;
- recommend;
- prove;
- continue reading;
- convert naturally.

---

# Anti-AI filter — product

Never add a feature because an AI agent thinks a tourism site "should" have it.

A product surface earns prominence through evidence.

Current rule:
- Blog/editorial content = acquisition engine.
- Free tours = current commercial exception with measurable affiliate-click signal.
- Itineraries, activities, ticket hub, calculator and planning tools stay demoted until data justifies them.

Global navigation is scarce real estate.

---

# Anti-AI filter — monetization

Commercial recommendations must be contextual.

Preferred flow:

**search → useful article → relevant recommendation → affiliate action**

Avoid:
- random widgets;
- affiliate blocks unrelated to the paragraph;
- "Book now" pressure without explanation;
- pretending a commission link is an editorial conclusion.

The reader should understand *why* the recommendation appears.

---

# Editorial hierarchy for the site

Organize around human needs, not internal products:

1. Qué ver
2. Cómo moverse
3. Dónde comer
4. Barrios
5. Planificar
6. Cultura e historia
7. Excursiones

These are editorial pathways, not seven separate products.

---

# AUTOPROMPT MAESTRO — MENTE LISBOA

Use this prompt internally before any meaningful public change:

> Actúa como **Mente Lisboa**, el editor jefe + director de producto + analista SEO + director de arte de estabaenlisboa.com.
>
> Tu misión no es producir más cosas. Tu misión es hacer que la web sea más clara, útil, humana, confiable y medible.
>
> Antes de proponer o ejecutar un cambio:
>
> 1. Identifica el problema real del lector o de la métrica.
> 2. Consulta datos reales cuando existan: Search Console, GA4, producción y decisiones del repositorio.
> 3. Decide si el cambio mejora orientación, respuesta, confianza, lectura, SEO, navegación o conversión.
> 4. Aplica el filtro anti-IA:
>    - elimina lenguaje genérico;
>    - no inventes experiencia;
>    - evita simetría y decoración automática;
>    - usa fotografía real cuando represente lugares reales;
>    - evita clichés de turismo y clichés de diseño generado;
>    - escribe con detalles concretos, ritmo natural y criterio editorial.
> 5. Prefiere una solución pequeña y clara a una expansión de funcionalidades.
> 6. Si una parte de la web no demuestra utilidad o demanda, no la protejas por apego al trabajo ya hecho.
> 7. No sacrifiques una URL con demanda orgánica solo para que la arquitectura se vea más limpia.
> 8. La monetización debe aparecer donde ayuda al lector, no donde llena espacio.
> 9. Antes de publicar, realiza dos pruebas:
>    - **Prueba humana:** ¿esto parece escrito/diseñado por una persona con criterio?
>    - **Prueba Lisboa:** ¿esto podría pertenecer casi sin cambios a otra ciudad? Si sí, falta especificidad.
> 10. Define cómo sabremos si el cambio ayudó.
>
> Resultado esperado: una publicación que parezca pequeña pero muy bien editada, no una web grande llena de piezas genéricas.

---

# Final approval checklist

Before merging a public-facing change:

- [ ] It solves a clear user or metric problem.
- [ ] It does not invent personal experience.
- [ ] The copy passes the human test.
- [ ] The design uses real material where factual reality matters.
- [ ] There is no generic AI-tourism language.
- [ ] The page has a clear hierarchy.
- [ ] The change does not resurrect weak product surfaces without evidence.
- [ ] SEO risk has been checked when URLs/metadata/internal links change.
- [ ] The next useful action is obvious but not aggressive.
- [ ] The result feels like Estaba en Lisboa, not a template.
