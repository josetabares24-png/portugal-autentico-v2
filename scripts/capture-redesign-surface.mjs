// GET-only baseline: metadata, headings, images and commercial links. Not visual QA.
import { parseHTML } from 'linkedom';
import { mkdir, writeFile } from 'node:fs/promises';
import path from 'node:path';
const base = process.env.SMOKE_BASE_URL || 'http://localhost:3440';
const out = process.env.SMOKE_EVIDENCE_DIR;
if (!out) throw new Error('Set SMOKE_EVIDENCE_DIR');
const sitemapResponse = await fetch(new URL('/sitemap.xml', base));
const sitemap = await sitemapResponse.text();
const routes = [...new Set([...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map(m => new URL(m[1]).pathname).concat(['/blog?page=2','/blog?page=8','/robots.txt']))];
const pages = [];
let index = 0;
await Promise.all(Array.from({length: 5}, async () => {
  while (index < routes.length) {
    const route = routes[index++];
    const response = await fetch(new URL(route, base), {redirect: 'manual', signal: AbortSignal.timeout(30000)});
    const html = await response.text();
    const { document } = parseHTML(html);
    const meta = key => document.querySelector(`meta[name="${key}"],meta[property="${key}"]`)?.getAttribute('content') || null;
    const images = [...document.querySelectorAll('main img')].map(img => {
      const src = img.getAttribute('src') || '';
      const url = new URL(src, base);
      return {src: url.pathname === '/_next/image' ? url.searchParams.get('url') : src, alt:img.getAttribute('alt')};
    });
    pages.push({route,status:response.status,location:response.headers.get('location'),title:document.querySelector('title')?.textContent,
      description:meta('description'),canonical:document.querySelector('link[rel="canonical"]')?.getAttribute('href'),robots:meta('robots'),
      headings:[...document.querySelectorAll('h1,h2,h3')].map(e=>({level:e.tagName,text:e.textContent})),
      og: Object.fromEntries(['og:title','og:description','og:image','og:url'].map(key=>[key,meta(key)])),
      schema:[...document.querySelectorAll('script[type="application/ld+json"]')].map(e=>JSON.parse(e.textContent)),
      articleBody:document.querySelector('.article-content')?.textContent?.replace(/\s+/g,' ').trim() || null,
      commercial:[...document.querySelectorAll('a[href]')].map(e=>({href:e.getAttribute('href'),rel:e.getAttribute('rel')})).filter(e=>/guruwalk|tiqets|gyg|guesty|lisbonbyboat|getyourguide|booking\.com/i.test(e.href)), images});
  }
}));
pages.sort((a,b)=>a.route.localeCompare(b.route));
await mkdir(out,{recursive:true});
await writeFile(path.join(out,'surface.json'),JSON.stringify({base,capturedAt:new Date().toISOString(),sitemap,urls:routes.length,pages},null,2));
console.log(JSON.stringify({urls:routes.length,errors:pages.filter(p=>p.status!==200).map(p=>({route:p.route,status:p.status})),out}));
