'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, ArrowUpRight, Compass, Ticket, Ship, MapPinned, MoveRight, MousePointer2, Eye, Sparkles } from 'lucide-react';
import s from './HumanWebLab.module.css';

type FontPair = 'editorial' | 'expressive' | 'classic';
type Category = 'Todos' | 'Paseos en barco' | 'Free tours' | 'Entradas' | 'Excursiones';
type Props = { fontClasses: string };

const experiences: {
  title: string; description: string; image: string; alt: string;
  category: Exclude<Category, 'Todos'>; tag: string; href: string;
}[] = [
  { title:'Lisboa desde el Tajo', description:'Una forma distinta de ver sus colinas, su luz y la ciudad desde el agua.',image:'/images/actividades/passeio-barco-rio-tejo-lisboa.webp',alt:'Barco turístico en el río Tajo de Lisboa',category:'Paseos en barco',tag:'Al atardecer',href:'/actividades/crucero-atardecer-tajo' },
  { title:'Free tours por Lisboa',description:'Recorre el centro con un guía y descubre la historia detrás de sus calles.',image:'/images/lisboa-originales/rua-augusta-arco-lisboa.webp',alt:'Rua Augusta en la Baixa de Lisboa',category:'Free tours',tag:'Primera visita',href:'/free-tours-lisboa' },
  { title:'La Torre de Belém',description:'Consejos para organizar tu visita a uno de los símbolos de la ciudad.',image:'/images/actividades/torre-de-belem-lisboa.webp',alt:'Torre de Belém a orillas del Tajo',category:'Entradas',tag:'Monumento',href:'/actividades/torre-de-belem' },
  { title:'Una escapada a Sintra',description:'Palacios, jardines y una excursión que merece planear con tiempo.',image:'/images/sintra-palacio-turistas.jpg',alt:'Palacio da Pena en Sintra',category:'Excursiones',tag:'Fuera de Lisboa',href:'/actividades/sintra-dia-completo' },
];

const pairs:{id:FontPair;label:string;fonts:string;detail:string}[]=[
  {id:'editorial',label:'Editorial Lisboa',fonts:'Newsreader + DM Sans',detail:'Expresiva en títulos, muy legible al reservar. Preferida.'},
  {id:'expressive',label:'Cultural',fonts:'Fraunces + Instrument Sans',detail:'Más personalidad y ritmo, ideal en secciones especiales.'},
  {id:'classic',label:'Continuidad',fonts:'Playfair + Plus Jakarta Sans',detail:'Una evolución moderada a partir de fuentes que ya usa tu proyecto.'}
];

export default function HumanWebLab({fontClasses}:Props){
  const [pair,setPair]=useState<FontPair>('editorial');
  const [motion,setMotion]=useState(true);
  const [category,setCategory]=useState<Category>('Todos');
  const shown=experiences.filter(e=>category==='Todos'||e.category===category);
  const button=`${s.button} ${s.primary}`;
  return <main id="main-content" className={`${s.lab} ${fontClasses}`} data-pair={pair} data-motion={motion?'on':'off'}>
    <div className={s.workbar}><div className={`${s.container} ${s.workbarInner}`}>
      <div className={s.workbarTitle}>Human Web · Laboratorio visual <small>Rama privada · selección de tipografías, botones y movimientos</small></div>
      <div className={s.controls}>
        <div className={s.segmented} aria-label="Elegir combinación tipográfica">
          {pairs.map(p=><button key={p.id} type="button" onClick={()=>setPair(p.id)} aria-pressed={pair===p.id}>{p.label}</button>)}
        </div>
        <button className={s.motionButton} type="button" onClick={()=>setMotion(v=>!v)} aria-pressed={motion}>{motion?'Movimiento: sí':'Movimiento: no'}</button>
      </div>
    </div></div>
    <section className={s.hero} aria-labelledby="hw-hero">
      <div className={s.heroPhoto}><Image src="/images/lisboa-originales/alfama-lisboa-tejados-rio-tejo.jpg" alt="Tejados y callejuelas de Alfama sobre el río Tajo" fill sizes="100vw" priority /></div>
      <div className={s.heroOverlay} aria-hidden="true"/>
      <div className={`${s.container} ${s.heroInner}`}>
        <div className={`${s.eyebrow} ${s.heroEyebrow}`}>La guía de Lisboa en español</div>
        <h1 id="hw-hero" className={s.heroTitle}>La Lisboa<br/>de <em>verdad.</em></h1>
        <p className={s.heroBody}>Tours, entradas y rincones recomendados desde la ciudad. Para que descubras Lisboa a tu ritmo, con consejos que te ayudan a elegir.</p>
        <div className={s.ctaRow}>
          <a className={`${button} ${s.pill}`} href="#experiencias">Ver tours y actividades <ArrowRight size={17}/></a>
          <Link className={`${s.button} ${s.cream}`} href="/itinerarios">Preparar mi viaje <ArrowUpRight size={17}/></Link>
        </div>
      </div>
      <div className={s.heroAside} aria-hidden="true">Lisboa siempre tiene<br/>otra historia.</div>
    </section>
    <div className={s.strip}><div className={`${s.container} ${s.stripGrid}`}>
      <a href="#experiencias" className={s.stripItem} onClick={()=>setCategory('Paseos en barco')}><span className={s.stripIcon}><Ship size={20}/></span>Paseos en barco</a>
      <a href="#experiencias" className={s.stripItem} onClick={()=>setCategory('Free tours')}><span className={s.stripIcon}><Compass size={20}/></span>Free tours</a>
      <a href="#experiencias" className={s.stripItem} onClick={()=>setCategory('Entradas')}><span className={s.stripIcon}><Ticket size={20}/></span>Entradas</a>
      <a href="#experiencias" className={s.stripItem} onClick={()=>setCategory('Excursiones')}><span className={s.stripIcon}><MapPinned size={20}/></span>Excursiones</a>
    </div></div>
    <section id="experiencias" className={s.section} aria-labelledby="experiencias-title"><div className={s.container}>
      <div className={s.sectionHeader}>
        <div><div className={s.eyebrow} style={{color:'var(--hw-clay)'}}>Elige bien qué reservar</div>
          <h2 id="experiencias-title" className={s.sectionTitle}>Experiencias para vivir Lisboa.</h2>
          <p className={s.sectionCopy}>Menos listas interminables. Más recomendaciones claras sobre qué compensa, qué visitar y cómo organizarlo.</p></div>
        <Link className={s.sectionLink} href="/actividades">Explorar todas las actividades ↗</Link>
      </div>
      <div className={s.tabs} aria-label="Categorías de experiencias">{(['Todos','Paseos en barco','Free tours','Entradas','Excursiones'] as Category[]).map(c=>
        <button key={c} type="button" aria-pressed={category===c} className={s.tab} onClick={()=>setCategory(c)}>{c}</button>
      )}</div>
      <div className={s.cards}>
        {shown.map(e=><Link href={e.href} className={s.card} key={e.title} aria-label={`Ver guía: ${e.title}`}>
          <div className={s.cardPhoto}><Image src={e.image} alt={e.alt} fill sizes="(max-width: 680px) 50vw, (max-width: 990px) 50vw, 25vw" /><span className={s.chip}>{e.tag}</span></div>
          <div className={s.cardBody}><h3 className={s.cardTitle}>{e.title}</h3><p className={s.cardDesc}>{e.description}</p><div className={s.cardFoot}><span>Ver guía y opciones</span><span className={s.cardArrow} aria-hidden="true">↗</span></div></div>
        </Link>)}
      </div>
    </div></section>
    <section className={s.editorial} aria-labelledby="editorial-title"><div className={`${s.container} ${s.editorialGrid}`}>
      <div className={s.editorialImage}><Image src="/images/alfama-panoramica.jpg" fill sizes="(max-width: 680px) 100vw, 50vw" alt="Panorámica real de Alfama en Lisboa"/></div>
      <div className={s.editorialCopy}>
        <div className={s.eyebrow}>Una guía con criterio propio</div><h2 id="editorial-title">Consejos de alguien que vive aquí.</h2>
        <p>No quiero que reserves por reservar. Prefiero ayudarte a saber qué vale la pena, cuándo conviene ir y cuáles son las alternativas gratuitas.</p>
        <Link className={`${s.button} ${s.cream}`} href="/sobre-nosotros">Conoce la historia <ArrowUpRight size={17}/></Link>
      </div>
    </div></section>
    <section id="biblioteca" className={`${s.section} ${s.library}`} aria-labelledby="biblioteca-title"><div className={s.container}>
      <div className={s.libraryIntro}><div className={s.eyebrow} style={{color:'var(--hw-clay)'}}>Sistema de diseño reutilizable</div><h2 id="biblioteca-title" className={s.sectionTitle}>Tipografías, botones y movimiento.</h2><p>Elige un estilo arriba y observa cómo cambia la misma página, no tres plantillas distintas. Las fuentes de este laboratorio se descargan y alojan con Next.js; solo se usará una pareja en la versión final.</p></div>
      <div className={s.specimens}>{pairs.map(p=><div key={p.id} className={`${s.specimen} ${pair===p.id?s.specimenCurrent:''}`} data-specimen={p.id}>
        <div className={s.specimenLabel}>{p.label}{pair===p.id?' · Activa':''}</div>
        <h3 className={s.sampleTitle}>Lisboa, sin prisa.</h3>
        <p className={s.sampleText}>Descubre sus barrios, encuentra un buen tour y reserva únicamente lo que te apetezca de verdad.</p>
        <span className={s.samplePair}>{p.fonts}</span>
        <button type="button" className={`${s.button} ${s.textBtn}`} onClick={()=>setPair(p.id)}>Probar combinación <ArrowRight size={15}/></button>
      </div>)}</div>
      <div className={s.libraryGrid}>
        <div><h3 className={s.componentTitle}>Botones que invitan a actuar.</h3><p className={s.componentSubtitle}>Cuatro jerarquías reales: principal, secundaria, editorial y puntual. El texto debe decir qué pasa al tocar, nunca prometer algo no disponible.</p>
          <div className={s.label}>Acción principal</div><div className={s.buttonGrid}><a className={`${s.button} ${s.primary}`} href="#experiencias">Ver experiencias <ArrowRight size={17}/></a><Link className={`${s.button} ${s.primary} ${s.pill}`} href="/free-tours-lisboa">Explorar free tours <ArrowUpRight size={17}/></Link></div>
          <div className={s.label}>Acción secundaria y editorial</div><div className={s.buttonGrid}><Link className={`${s.button} ${s.outline}`} href="/itinerarios">Ver itinerarios <ArrowRight size={17}/></Link><Link className={`${s.button} ${s.textBtn}`} href="/blog">Leer la guía <ArrowUpRight size={17}/></Link></div>
          <div className={s.label}>Destacado puntual</div><div className={s.buttonGrid}><Link className={`${s.button} ${s.dark}`} href="/que-ver-en-lisboa">Qué ver en Lisboa <MoveRight size={17}/></Link><Link className={`${s.button} ${s.gold}`} href="/actividades">Elegir actividad <ArrowRight size={17}/></Link></div>
        </div>
        <div><h3 className={s.componentTitle}>Movimiento, sin ruido.</h3><p className={s.componentSubtitle}>Las transiciones se apoyan principalmente en opacidad y transformaciones; se desactivan cuando la persona prefiere menos movimiento.</p>
          <div className={s.motionList}>
            <div className={s.motionTile}><span className={s.motionIcon}><MoveRight size={22}/></span><span><strong>Hover con intención</strong><small>El icono avanza unos píxeles para reforzar la dirección.</small></span></div>
            <div className={s.motionTile}><span className={s.motionIcon}><MousePointer2 size={22}/></span><span><strong>Tarjetas con elevación discreta</strong><small>Movimiento corto; sin saltos ni zoom agresivo.</small></span></div>
            <div className={s.motionTile}><span className={s.motionIcon}><Eye size={22}/></span><span><strong>Entrada editorial suave</strong><small>Aparece solo al cargar la portada, sin parallax continuo.</small></span></div>
            <div className={s.motionTile}><span className={s.motionIcon}><Sparkles size={22}/></span><span><strong>Menos movimiento, misma experiencia</strong><small>Respeta el sistema operativo y el botón de este laboratorio.</small></span></div>
          </div><p className={s.note}>La biblioteca es una prueba aislada. Se validarán contraste, tamaños, CLS, LCP e interacción móvil antes de trasladar estilos a producción.</p>
        </div>
      </div>
    </div></section>
    <div className={s.footerNote}><div className={s.container}><strong>Human Web · diseño de prueba</strong> · Sin precios ni puntuaciones inventados. Las fichas enlazan a páginas existentes de Estaba en Lisboa. Sin modificaciones en producción.</div></div>
  </main>;
}
