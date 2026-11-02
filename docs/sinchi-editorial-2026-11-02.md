# Sinchi Lisboa — expediente editorial, 2 noviembre 2026

## Estado
- Artículo preparado **solo como borrador de revisión**, ruta `/[locale]/colaboraciones/previa-sinchi`, con `noindex,nofollow`.
- Sin alta en `blog-posts.ts`, sin indexación, sin cambios en la navegación, home, blog o sitemap.
- Colaboración comercial ofrecida por **50 €**. El restaurante dijo que le interesa; **no consta aceptación final del texto ni pago**. El primer correo prometía coordinar pago/publicación después de la aprobación.
- No atribuir visita, prueba personal de platos o testimonio propio.
- Actualización visual de preview del 2-11-2026: tres imágenes **enlazadas directamente** desde la ficha Sinchi en TheFork, con atribución visible y aviso de autorización pendiente. No se ha subido ninguna al repositorio ni a producción. Las 2 fotos de clientes no deben pasar al artículo público sin permiso específico.
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

## URLs de imágenes usadas en la previsualización (no reutilizar automáticamente en producción)
- **Portada, ceviche (apartado `restaurant` de TheFork):** https://cdn.thefork.com/tf-lab/image/upload/w_1080%2Cc_fill%2Cq_auto%2Cf_auto/restaurant/5286bdc1-93df-489f-a2d7-cc8e788114ef/ff878f4c-8a6c-4471-bb3e-a807cf7061e3.jpg
- **Mesa de platos, foto de cliente (`customer`):** https://cdn.thefork.com/tf-lab/image/upload/w_1080%2Cc_fill%2Cq_auto%2Cf_auto/customer/5286bdc1-93df-489f-a2d7-cc8e788114ef/43402a42-c0af-419f-bd57-e04d34b0ddba.jpg
- **Lomo saltado, foto de cliente (`customer`):** https://cdn.thefork.com/tf-lab/image/upload/w_640%2Cc_fill%2Cq_auto%2Cf_auto/customer/5286bdc1-93df-489f-a2d7-cc8e788114ef/f9365665-d858-4dee-ac6f-047542243aa0.jpg

El servidor puede bloquear hotlinks de terceros o cambiar las URLs. Antes de publicar, solicitar originales/fotografías autorizadas del restaurante, optimizarlas a WebP/AVIF y sustituir los vínculos remotos. Las fotos se muestran solo en la rama de prueba noindex para evaluar la composición editorial.


## Actualización de galería y horarios de la web oficial · 2 noviembre 2026
- Se han reemplazado las imágenes de TheFork (incluidas las publicadas por clientes) por **las seis fotografías enlazadas de la galería oficial** de https://sinchi.eatbu.com/?lang=pt . No se descargaron ni copiaron al repositorio. Se mantiene pendiente la autorización expresa para el uso editorial definitivo.
- Fuente de galería y sus URLs: `https://cdn.website.dish.co/media/ce/3c/8383499/Sinchi-SC1-jpg.jpg`, `https://cdn.website.dish.co/media/7f/f8/8383508/Sinchi-SC2-jpg.jpg`, `https://cdn.website.dish.co/media/a6/b4/8383514/Sinchi-SC3-jpg.jpg`, `https://cdn.website.dish.co/media/f8/33/8383519/Sinchi-SC4-jpg.jpg`, `https://cdn.website.dish.co/media/8f/4b/8383524/Sinchi-SC5-jpg.jpg` y `https://cdn.website.dish.co/media/9b/c4/8383529/Sinchi-SC6-jpg.jpg`.
- Según la página oficial consultada el 02-11-2026: lunes 12–16 y 19–23; martes cerrado; miércoles 12–16; jueves y viernes 12–16 y 19–23; sábado 13–16 y 19–23; domingo cerrado. **Google Maps sigue siendo la primera referencia para horarios especiales o cambios**, con confirmación por WhatsApp ante cualquier contradicción. No atribuir estos horarios a Google Maps porque proceden de la web oficial.
- La vista de revisión debe comprobarse en móvil. Si el CDN bloquea enlaces de imágenes (hotlinking), pedir imágenes originales al restaurante y sustituir URLs externas. No publicar sin permiso de derechos ni la aprobación comercial.
