# Sinchi Lisboa — expediente editorial, 2 noviembre 2026

## Estado
- Artículo preparado **solo como borrador de revisión**, ruta `/[locale]/colaboraciones/previa-sinchi`, con `noindex,nofollow`.
- Sin alta en `blog-posts.ts`, sin indexación, sin cambios en la navegación, home, blog o sitemap.
- Colaboración comercial ofrecida por **50 €**. El restaurante dijo que le interesa; **no consta aceptación final del texto ni pago**. El primer correo prometía coordinar pago/publicación después de la aprobación.
- No atribuir visita, prueba personal de platos o testimonio propio.
- El objetivo SEO al publicar sería «ceviche peruano en Alcântara / Sinchi Lisboa», como artículo propio, no un post descontextualizado.

## Fuentes primarias
- Email del restaurante del 2-11-2026: +351 924 385 110, llamadas y WhatsApp.
- Archivo `SINCHI CARTA.docx`, recibido 2-11-2026: ceviche clásico 22 €, lomo saltado 26 €, pulpo al olivo 20 €, yuquitas huancaína 8 €, etc. La carta está en Gmail, no en el repositorio por ser documento del colaborador.
- Archivo `CARTA DE VINOS SINCHI.pdf` recibido 2-11-2026: vinos Intipalka del Valle de Ica y selección portuguesa.
- Ficha TheFork: https://www.thefork.pt/restaurante/sinchi-cozinha-peruana-r831205 (consultado el 2-11-2026, 9,7/10 >330 valoraciones; cifra dinámica).
- Web del restaurante: https://sinchi.eatbu.com/?lang=pt
- Registro del Consulado peruano: https://www.consulado.pe/es/Lisboa/Lists/RestaurantesPeruanos/DispForm.aspx?ContentTypeId=0x0100E1004E32DD4B264D8928886040921D86&ID=16

## Fotos candidatas — solo investigación, NO autorizadas para republicación
TheFork contiene una galería amplia de Sinchi. Para componer el artículo se ha definido esta secuencia, pendiente de autorización por escrito del titular de los derechos:
1. **Hero**: ceviche clásico, plano de plato con camote/maíz y buena luz. Referencia de galería: https://www.thefork.com/restaurant/sinchi-cozinha-peruana-r831205
2. **Detalle de carta**: lomo saltado, solo si existe foto inequívocamente correspondiente al plato del menú real.
3. **Atmósfera**: fotografía real del interior del restaurante (no usar cualquier restaurante peruano como sustituto).
4. **Detalle secundario**: pulpo al olivo o un tiradito, evitando imágenes repetidas.

Las fotografías mostradas en TheFork pueden pertenecer a fotógrafos, clientes, plataforma o restaurante. No hay licencia implícita para descargarlas y publicarlas en estabaenlisboa.com. Solicitar al restaurante que identifique **cuáles son suyas** y confirme que podemos descargarlas y reproducirlas en la web, incluso en un artículo comercial; alternativamente pedir archivos originales o licencia de los fotógrafos.

### Mensaje breve propuesto (NO enviado)
«¡Hola! Ya revisé las cartas, gracias. Encontré fotos bonitas del restaurante en TheFork y su Instagram. Para que el artículo quede bien, ¿me autorizan a usar las fotos de esas galerías que sean de ustedes? Si algunas son de clientes o fotógrafos ajenos, prefiero que me indiquen cuáles podemos utilizar. Les compartiré el borrador para revisar los datos antes de publicarlo. ¡Gracias!»

## Antes de publicar
- [ ] Confirmar autorización de fotografías con titular de derechos; descargar, optimizar, acreditar y usar ALT específicos.
- [ ] Confirmar platos/valores actuales y horarios exactos (la web oficial y agregadores no siempre coinciden).
- [ ] Pedir confirmación de corrección editorial de Sinchi.
- [ ] Confirmar condiciones y cobro de 50 € antes de publicación.
- [ ] Migrar a ruta definitiva `/blog/donde-comer-ceviche-peruano-alcantara-sinchi`; añadir entrada al catálogo con imagen autorizada, fecha correcta y enlaces.
- [ ] Añadir metadata indexable, OG, breadcrumbs/structured data adecuados al artículo, enlaces comerciales `rel=sponsored` y aviso visible.
- [ ] Ejecutar `npm run typecheck`, `npm run smoke:blog`, `npm run test:blog-chronology`, `npm run smoke:sitemap` y revisar móvil/escritorio antes de merge.
