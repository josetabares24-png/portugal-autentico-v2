// PR #134 — invariantes del rediseño. No necesita red ni variables privadas.
// Separa el contrato del diseño de las pruebas de producción ya existentes.
import { existsSync, readFileSync } from 'node:fs';
import { join } from 'node:path';

const root = process.cwd();
const load = (name) => readFileSync(join(root, name), 'utf8');
const checks = [];
function assert(name, passed) {
  checks.push({ name, passed: Boolean(passed) });
}

const home = load('src/components/home/GrokHome.tsx');
const search = load('src/components/home/GrokQuickSearch.tsx');
const homeCSS = load('src/components/home/GrokHome.module.css');
const brandCSS = load('src/app/grok-redesign.css');
const page = load('src/app/[locale]/page.tsx');
const shell = load('src/components/DocumentShell.tsx');
const navbar = load('src/components/Navbar.tsx');
const bookingHero = load('src/components/booking/TourismBookingHero.tsx');
const footer = load('src/components/Footer.tsx');
const posts = load('src/data/blog-posts.ts');

assert('Home único H1 y nuevo titular', home.includes('Todo para planear tu viaje a ') && home.includes('>Lisboa</span>') && (home.match(/<h1\b/g)||[]).length === 1);
assert('metadatos originales siguen definidos en página real', page.includes('canonical: HOME_URL') && page.includes("languageAlternates('/')"));
assert('Home conserva JSON-LD de CollectionPage', page.includes("'@type': 'CollectionPage'") && page.includes("'@id': HOME_URL + '/#webpage'"));
assert('Home usa datos recientes del blog', home.includes('blogPostsByDate.slice(0, 5)') && home.includes('recentImages.get(post.id)') && home.includes('post.excerpt'));
assert('buscador interactivo con etiquetas y destino', search.includes('role="search"') && search.includes('aria-live="polite"') && search.includes('router.push') && search.includes('type="submit"'));
assert('Home conserva free tours, entradas, itinerarios y colaboración', ['/free-tours-lisboa','/comprar-entradas','/itinerarios','/blog/monasterio-jeronimos-entradas'].every(x=>home.includes(x)));
assert('Home conserva autoría y lecturas estacionales', ['/sobre-nosotros','/blog/lisboa-cuando-llueve','/blog/lisboa-en-navidad','/blog/nochevieja-lisboa'].every(x=>home.includes(x)));
assert('Home limpia: solo botón de acceso a artículos, sin cinco cuadros extra',
  home.includes('Ver todos los artículos') && !home.includes('Artículos editoriales recomendados') &&
  ['time-out-market-lisboa','estacion-oriente-lisboa','estacion-olaias-lisboa','paseo-en-velero-lisboa-lisbon-byboat'].every(x => posts.includes("id: '" + x + "'")));
assert('Home siempre ordenada por publicaciones', home.includes('blogPostsByDate.slice(0, 5)') && posts.includes('export const blogPostsByDate: BlogPost[]') && !home.includes('const picks ='));
const blogArchive = load('src/app/[locale]/blog/BlogClient.tsx');
const blogPageSource = load('src/app/[locale]/blog/page.tsx');
assert('Home y blog comparten cronología, destacando Lisbon ByBoat',
  posts.includes("id: 'paseo-en-velero-lisboa-lisbon-byboat'") &&
  blogArchive.includes('blogPostsByDate.filter') &&
  blogArchive.includes('Últimos artículos') &&
  blogPageSource.includes('blogPostsByDate.map((post)'));

assert('ruta de 2 días se mantiene fuera del listado cronológico', home.includes('Ver itinerario completo') && home.includes('/itinerarios/lisboa-2-dias-completo'));
const twoDays = load('src/components/itinerarios/GrokTwoDayItinerary.tsx');
const packRoute = load('src/app/[locale]/itinerarios/lisboa-2-dias-completo/page.tsx');
const routeStops = [...twoDays.matchAll(/^\s*id: '([^']+)',/gm)].map(m=>m[1]);
assert('itinerario visual contiene seis paradas distintas', routeStops.length === 6 && new Set(routeStops).size === 6);
assert('galería y jornadas de la maqueta conectadas', twoDays.includes('styles.photoGrid') && twoDays.includes('styles.dayRows') && twoDays.includes('styles.actionButton'));
assert('ruta 2 días conserva el canonical', packRoute.includes('https://estabaenlisboa.com/itinerarios/') && packRoute.includes('<GrokTwoDayItinerary>'));
assert('no hay precios inventados en la ruta de 2 días', !/€|EUR|Desde \d+\s*€/.test(twoDays));
assert('enlaces del itinerario apuntan a rutas propias', !/href:\s*'https?:/.test(twoDays));
assert('la ruta especial no crea un main anidado', !/<main\b/.test(twoDays));
assert('la ruta pública conserva las once paradas y el mapa reales', packRoute.includes('lisboa2DiasTimeline') && packRoute.includes('<ItineraryDay ') && packRoute.includes('<ItineraryMapSection') && packRoute.includes('<GrokTwoDayItinerary>'));
const dayImages = [...new Set([...twoDays.matchAll(/(?:src|photo):?\s*=?\s*['"]([^'"]+\.(?:webp|jpg|jpeg|png))['"]/gi)].map(m => m[1]))].filter(p => p.startsWith('/'));
assert('las seis fotografías del itinerario existen', dayImages.length >= 6 && dayImages.every(p => existsSync(join(root,'public',p.slice(1)))));
const stopLinks = [...twoDays.matchAll(/^\s*href: '([^']+)'/gm)].map(m => m[1]);
const activities = load('src/data/activities.ts');
assert('las seis paradas abren destinos reales', stopLinks.length === 6 && stopLinks.every(href => {
  if (href.startsWith('/blog/')) return posts.includes("id: '" + href.slice('/blog/'.length) + "'");
  if (href.startsWith('/actividades/')) return activities.includes("slug: '" + href.slice('/actividades/'.length) + "'");
  return false;
}));
const packRouteSource = load('src/app/[locale]/itinerarios/[slug]/page.tsx');
assert('los otros itinerarios también usan el diseño Grok', packRouteSource.includes('grok-pack-hero') && packRouteSource.includes('grok-pack-facts'));
const blogCover = load('src/components/blog/BlogEditorialCover.tsx');
assert('portada del blog conserva guías por temas, sin tapar la cronología', !blogCover.includes('grok-blog-feature-layout') && blogCover.includes('grok-blog-reading-image') && blogCover.includes('uniqueArticleImages('));
const cardSource = load('src/components/blog/EditorialArticleCard.tsx');
const catalogSource = load('src/app/[locale]/blog/BlogClient.tsx');
const mediaSource = load('src/lib/media.ts');
const articleSource = load('src/app/[locale]/blog/[slug]/page.tsx');
const azulejoImage = '/images/lisboa-originales/azulejo-terreiro-do-paco-siglo-xviii.png';
assert('foto de azulejos coherente en artículo, catálogo y OG',
  posts.includes("imagen: '" + azulejoImage + "'") &&
  mediaSource.includes("'azulejos-portugueses-historia': '" + azulejoImage + "'") &&
  articleSource.includes("'azulejos-portugueses-historia': '" + azulejoImage + "'") &&
  existsSync(join(root, 'public', azulejoImage.slice(1))));
assert('los listados no repiten imágenes visibles ni inventan otras',
  cardSource.includes('uniqueArticleImages(') &&
  blogCover.includes('reservedImages={[getArticleImage(lead)]}') &&
  blogCover.includes('ids={selection.transport} columns={3}') &&
  blogCover.includes('grok-blog-reading-item--text') &&
  catalogSource.includes('imageOverride={visibleImages.get(post.id)}'));

assert('navbar y CTAs utilizan turquesa con contraste', navbar.includes('bg-[#016d6f]') && brandCSS.includes('--eel-sea: #016d6f'));
assert('no se importaron rutas HTML estáticas a Next', !/href=["'](?:\/[^"']+)?\.html["']/.test(home+navbar));
assert('fuentes Abril y Heebo compartidas', shell.includes('Abril_Fatface') && shell.includes('Heebo') && shell.includes('grok-redesign.css'));
assert('el sistema visual tiene adaptaciones móviles', homeCSS.includes('@media(max-width:640px)') && brandCSS.includes('@media (max-width:640px)'));
assert('la capa visual aplica a artículos reales', brandCSS.includes('.article-page .article-title') && brandCSS.includes('.article-page .article-booking'));
assert('las reservas mantienen su componente original', bookingHero.includes('primaryHref') && bookingHero.includes('data-grok-booking-primary'));
assert('siguen los enlaces legales del footer', ['/politica-privacidad','/politica-cookies','/aviso-legal','/terminos-condiciones'].every(x=>footer.includes(x)));
const cookieBanner = load('src/components/CookieBanner.tsx');
assert('cookies usan blanco, turquesa y amarillo del nuevo diseño',
  cookieBanner.includes('border-t-[#016d6f]') && cookieBanner.includes('bg-[#fcc603]') &&
  cookieBanner.includes('bg-white') && !cookieBanner.includes('bg-terracotta'));
assert('cookies mantienen aceptar, rechazar y preferencias',
  cookieBanner.includes('onClick={rejectCookies}') && cookieBanner.includes('onClick={acceptCookies}') &&
  cookieBanner.includes('onClick={openPreferences}') && cookieBanner.includes('onClick={closeBanner}'));
assert('consentimiento solo con elección explícita y notificación',
  cookieBanner.includes("localStorage.setItem('cookieConsentExplicit', 'true')") &&
  cookieBanner.includes("window.dispatchEvent(new CustomEvent('cookie-consent'"));
assert('footer compacto en móvil conserva identidad',
  footer.includes('w-[104px]') && footer.includes('py-5') && !footer.includes('pb-24'));

assert('navegación móvil identificable', navbar.includes('aria-expanded') && navbar.includes('main-mobile-menu'));

assert('el botón Buscar siempre abre el primer resultado disponible',
  search.includes('results.length > 0') && search.includes('router.push(results[0].href)'));
assert('el menú se cierra con Escape y recupera el foco',
  navbar.includes("event.key === 'Escape'") && navbar.includes('mobileMenuToggle.current?.focus()'));
assert('el logo conserva su relación de aspecto original',
  navbar.includes('width={1200} height={500}') && footer.includes('width={1200}') && footer.includes('height={500}'));
const activitiesCatalog = load('src/data/activities.ts');
const itineraryCatalog = load('src/data/guide-packs.ts');
const policy = JSON.parse(load('src/data/seo-url-policy.json'));
const curatedLinks = [...new Set([home, search, navbar, footer, twoDays].flatMap(source =>
  [...source.matchAll(/\bhref\s*(?:=|:)\s*['"](\/[^'"]+)['"]/g)].map(match => match[1])
))].filter(href => href !== '/blog/'); // Prefijo concatenado del índice; destinos completos comprobados en smoke:grok-rendered.
const catalogHasDestination = (href) => {
  if (href.startsWith('/blog/')) return posts.includes("id: '" + href.slice('/blog/'.length) + "'");
  if (href.startsWith('/actividades/')) return activitiesCatalog.includes("slug: '" + href.slice('/actividades/'.length) + "'");
  if (href.startsWith('/itinerarios/')) return itineraryCatalog.includes("'" + href.slice('/itinerarios/'.length) + "':");
  return true;
};
assert('las tarjetas y búsquedas no enlazan slugs inexistentes',
  curatedLinks.length >= 30 && curatedLinks.every(catalogHasDestination));
assert('no hay redirecciones innecesarias en los enlaces nuevos',
  !curatedLinks.some(href => policy.redirects.some(item => item.source === href)));

const required = [
  'src/app/[locale]/blog/BlogClient.tsx',
  'src/app/[locale]/free-tours-lisboa/page.tsx',
  'src/app/[locale]/comprar-entradas/ComprarEntradasClient.tsx',
  'src/app/[locale]/itinerarios/page.tsx',
  'src/app/[locale]/itinerarios/[slug]/page.tsx',
  'src/app/[locale]/actividades/page.tsx',
];
assert('todas las superficies clave están conectadas', required.every(p=>load(p).includes('grok-')));
const imagePaths = [...new Set([...home.matchAll(/(?:src|photo):?\s*=?\s*['"]([^'"]+\.(?:webp|jpg|jpeg|png))['"]/gi)].map(x=>x[1]))]
  .filter(p=>p.startsWith('/'));
assert('las fotografías explícitas de Home existen', imagePaths.length >= 5 && imagePaths.every(p=>existsSync(join(root,'public',p.slice(1)))));
const failed = checks.filter(c=>!c.passed);
for(const check of checks) console.log((check.passed?'OK   ':'FAIL ')+check.name);
console.log(JSON.stringify({total:checks.length,failures:failed.length,checkedImages:imagePaths.length}));
if(failed.length) process.exitCode=1;
