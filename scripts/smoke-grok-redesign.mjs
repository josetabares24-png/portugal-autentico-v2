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

assert('Home único H1 y nuevo titular', home.includes('Todo para planear tu viaje a Lisboa') && (home.match(/<h1\b/g)||[]).length === 1);
assert('metadatos originales siguen definidos en página real', page.includes('canonical: HOME_URL') && page.includes("languageAlternates('/')"));
assert('Home conserva JSON-LD de CollectionPage', page.includes("'@type': 'CollectionPage'") && page.includes("'@id': HOME_URL + '/#webpage'"));
assert('Home usa datos reales del blog', home.includes("from '@/data/blog-posts'") && home.includes('post.imagen') && home.includes('post.excerpt'));
assert('buscador interactivo con etiquetas y destino', search.includes('role="search"') && search.includes('aria-live="polite"') && search.includes('router.push') && search.includes('type="submit"'));
assert('Home conserva free tours, entradas, itinerarios y colaboración', ['/free-tours-lisboa','/comprar-entradas','/itinerarios','/blog/monasterio-jeronimos-entradas'].every(x=>home.includes(x)));
assert('Home conserva autoría y lecturas estacionales', ['/sobre-nosotros','/blog/lisboa-cuando-llueve','/blog/lisboa-en-navidad','/blog/nochevieja-lisboa'].every(x=>home.includes(x)));
assert('Home conserva artículos editoriales SEO', ['time-out-market-lisboa','estacion-oriente-lisboa','estacion-olaias-lisboa'].every(x=>home.includes(x)));
const picked = [...home.matchAll(/^\s*'([\w-]+)',\s*$/gm)].map(x=>x[1]);
assert('todos los artículos destacados existen en catálogo', picked.length >= 5 && picked.every(id=>posts.includes("id: '" + id + "'")));
assert('no se importaron rutas HTML estáticas a Next', !/href=["'](?:\/[^"']+)?\.html["']/.test(home+navbar));
assert('fuentes Abril y Heebo compartidas', shell.includes('Abril_Fatface') && shell.includes('Heebo') && shell.includes('grok-redesign.css'));
assert('el sistema visual tiene adaptaciones móviles', homeCSS.includes('@media(max-width:640px)') && brandCSS.includes('@media (max-width:640px)'));
assert('la capa visual aplica a artículos reales', brandCSS.includes('.article-page .article-title') && brandCSS.includes('.article-page .article-booking'));
assert('las reservas mantienen su componente original', bookingHero.includes('primaryHref') && bookingHero.includes('data-grok-booking-primary'));
assert('siguen los enlaces legales del footer', ['/politica-privacidad','/politica-cookies','/aviso-legal','/terminos-condiciones'].every(x=>footer.includes(x)));
assert('navegación móvil identificable', navbar.includes('aria-expanded') && navbar.includes('main-mobile-menu'));
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
