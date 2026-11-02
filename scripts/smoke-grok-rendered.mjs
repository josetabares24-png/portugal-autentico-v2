// Checks the actual Next routes. A source component can exist without being served.
import assert from 'node:assert/strict';
import { readFile, mkdir, writeFile } from 'node:fs/promises';
import { parseHTML } from 'linkedom';
import { blogPostsByDate } from '../src/data/blog-posts.ts';
import { lisboa2DiasTimeline } from '../src/data/itineraries/index.ts';
import { editorialPhotoReview } from '../src/lib/editorial-photo-policy.ts';
const base = process.env.SMOKE_BASE_URL || 'http://localhost:3440';
const evidence = process.env.SMOKE_EVIDENCE_DIR;
const checks=[];
async function page(route) {
  const response=await fetch(new URL(route,base),{redirect:'manual'});
  assert.equal(response.status,200,route);
  return parseHTML(await response.text()).document;
}
function check(name,test) { try {test();checks.push({name,pass:true});}catch(error){checks.push({name,pass:false,detail:error.message});} }
const home=await page('/');
const archive=await page('/blog');
const two=await page('/itinerarios/lisboa-2-dias-completo');
const headlineLinks = doc => [...doc.querySelectorAll('main article h3 a,main article a h3')].map(a=>a.closest('a')?.getAttribute('href'));
check('Home: latest five publications in date order',()=>assert.deepEqual(headlineLinks(home).slice(0,5),blogPostsByDate.slice(0,5).map(p=>'/blog/'+p.id)));
check('Blog: same publication order',()=>assert.deepEqual(headlineLinks(archive).slice(0,4),blogPostsByDate.slice(0,4).map(p=>'/blog/'+p.id)));
const galleryLinks = two.querySelectorAll('section[aria-labelledby="grok-two-day-stops"] a[href^="#"]');
check('Real two-day route serves six gallery links',()=>assert.equal(galleryLinks.length,6));
check('Two-day gallery anchors exist',()=>{for(const a of galleryLinks){assert.ok(two.getElementById(a.getAttribute('href').slice(1)));assert.ok(a.textContent.trim());}});
check('Two-day detailed itinerary preserves every original stop',()=>{const route=two.querySelector('#recorrido-completo');assert.ok(route);for(const stop of lisboa2DiasTimeline)assert.ok(route.textContent.includes(stop.title),stop.title);assert.ok(route.querySelector('#mapa'));});
check('Two-day original booking destinations retained',()=>assert.ok(two.querySelector('#recorrido-completo a[href*="tiqets"],#recorrido-completo a[href*="getyourguide"],#recorrido-completo a[href*="comprar-entradas"]')));
for(const route of ['/itinerarios/lisboa-1-dia-lo-esencial','/itinerarios/lisboa-3-dias-premium']){
  const doc=await page(route);
  check(route+' uses shared photographic header',()=>{assert.ok(doc.querySelector('.grok-pack-hero img'));assert.equal(doc.querySelectorAll('h1').length,1);assert.equal(doc.querySelectorAll('.grok-pack-facts dt').length,4);assert.ok(doc.querySelector('#mapa'));});
}
for(const [slug,review] of Object.entries(editorialPhotoReview)){
  const doc=await page('/blog/'+slug);
  const og=doc.querySelector('meta[property="og:image"]')?.getAttribute('content')||null;
  check(slug+' photo matches editorial decision',()=>{
    if(review.image){assert.ok(og?.endsWith(review.image));if(review.image.includes('/commons/'))assert.ok(doc.querySelector('.photo-attribution'));}
    else {assert.equal(og,null);assert.equal(doc.querySelectorAll('.article-hero img').length,0);}
  });
}
check('Home cards have unique photographs',()=>{
  const section=home.getElementById('home-articles-heading').closest('section');
  const sources=[...section.querySelectorAll('img')].map(img=>new URL(img.getAttribute('src'),base).searchParams.get('url'));
  assert.equal(new Set(sources).size,sources.length);
});
check('Spanish document preloads only three font families',()=>assert.equal(home.querySelectorAll('link[rel="preload"][as="font"]').length,3));
for(const [name,doc] of [['home',home],['blog',archive],['two days',two]]){
  check(name+' single main and H1',()=>{assert.equal(doc.querySelectorAll('main').length,1);assert.equal(doc.querySelectorAll('h1').length,1);});
}
if(process.env.REDESIGN_BASELINE){
  const before=JSON.parse(await readFile(process.env.REDESIGN_BASELINE,'utf8'));
  const after=JSON.parse(await readFile(process.env.REDESIGN_AFTER,'utf8'));
  check('Sitemap byte-for-byte preserved',()=>assert.equal(after.sitemap,before.sitemap));
  for(const old of before.pages){
    const current=after.pages.find(p=>p.route===old.route);
    check(old.route+' metadata, article text and affiliate links preserved',()=>{
      assert.ok(current);for(const field of ['status','location','title','description','canonical','robots','commercial','articleBody'])assert.deepEqual(current[field],old[field],field);
    });
  }
}
const failures=checks.filter(c=>!c.pass);
if(evidence){await mkdir(evidence,{recursive:true});await writeFile(evidence+'/rendered-checks.json',JSON.stringify(checks,null,2));}
for(const failure of failures)console.error('FAIL',failure.name,failure.detail);
console.log(JSON.stringify({checks:checks.length,failures:failures.length}));
if(failures.length)process.exitCode=1;
