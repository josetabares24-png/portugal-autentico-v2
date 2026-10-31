#!/usr/bin/env node
/**
 * Smoke verificable del laboratorio aislado.
 * Inspecciona código y activos; NO demuestra estética, capturas ni URLs públicas accesibles.
 */
import assert from 'node:assert/strict';
import { readFileSync, existsSync } from 'node:fs';
import { resolve } from 'node:path';

const root=process.cwd();
const read = path => readFileSync(resolve(root,path),'utf8');
const must = (condition, message) => assert.ok(condition,message);
const component=read('src/components/human-web/HumanWebLab.tsx');
const css=read('src/components/human-web/HumanWebLab.module.css');
const page=read('src/app/[locale]/human-web-system/page.tsx');
const activities=read('src/data/activities.ts');
const failures=[],checks=[];
function check(name,fn) {
 try { fn();checks.push({name,status:'passed'}); }
 catch(e) {failures.push({name,error:e.message});checks.push({name,status:'failed'}); }
}
function values(re) {return [...component.matchAll(re)].map(m=>m[1]);}
const imagePaths=[...new Set([...values(/image:\s*['"]([^'"]+)['"]/g),...values(/<Image\s+src=['"]([^'"]+)['"]/g)])];
const staticLinks=[...new Set([...values(/href:\s*['"]([^'"]+)['"]/g),...values(/href=['"]([^'"]+)['"]/g)])];

check('route-private-noindex',()=>{
 must(page.includes('robots:')&&page.includes('index: false')&&page.includes('follow: false'),'La ruta experimental debe ser noindex/nofollow');
 must(page.includes('HumanWebLab'),'La ruta no monta el laboratorio');
});
check('real-image-assets',()=>{
 must(imagePaths.length>=5,'No se detectaron las cinco imágenes previstas');
 for(const path of imagePaths) {
  must(path.startsWith('/images/') && !path.includes('..'),'Imagen fuera de public/images: '+path);
  must(existsSync(resolve(root,'public'+path)),'Imagen ausente: '+path);
 }
});
check('working-route-contract',()=>{
 must(staticLinks.length>=5,'Faltan destinos internos');
 for(const href of staticLinks) {
  if(href.startsWith('#')){must(component.includes('id="'+href.slice(1)+'"'),'Ancla sin destino: '+href);continue;}
  must(href.startsWith('/') && !href.includes('..'),'Href no permitido: '+href);
  const activity=href.match(/^\/actividades\/([a-z0-9-]+)$/);
  if(activity) must(activities.includes("slug: '"+activity[1]+"'"),'Actividad no existe: '+href);
  else must(existsSync(resolve(root,'src/app/[locale]'+href+'/page.tsx')),'Ruta no existe: '+href);
 }
});
check('no-ornamental-arrows',()=>{
 must(!/(?:ArrowRight|ArrowUpRight|MoveRight|arrowCircle|cardArrow|↗|→)/.test(component+css),'Quedan flechas o estilos ornamentales');
});
check('interaction-and-keyboard-basics',()=>{
 for(const field of ['setPair','setMotion','setCategory','aria-pressed','type="button"','aria-label'])
  must(component.includes(field),'Falta estado o etiqueta: '+field);
 must(css.includes(':focus-visible'),'No hay focus visible');
 must(css.includes('prefers-reduced-motion'),'No respeta reduced motion');
 must(css.includes('@media(max-width:680px)'),'No hay estilos mobile explícitos');
});
check('avoid-fake-quality-claims',()=>{
 must(!component.includes('100/100')&&!component.includes('Lighthouse 100'),'El laboratorio presume de QA no demostrado');
});
const report={status:failures.length?'failed':'source_checks_passed_not_visual_qa',checkedAt:new Date().toISOString(),branch:'preview/human-web-design-system-2026-10-31',images:imagePaths.length,staticLinks:staticLinks.length,checks,limitations:['Sin screenshot móvil/escritorio','Sin navegación real en preview protegido por Vercel SSO','No acredita mejoría estética ni SEO']};
console.log(JSON.stringify(report,null,2));
if(failures.length) process.exitCode=1;
