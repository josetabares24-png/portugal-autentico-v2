#!/usr/bin/env node
/**
 * Estaba en Lisboa — convierte salidas de Linkinator y Unlighthouse en
 * un resumen legible. No modifica URLs, artículos ni la web.
 */
import fs from 'node:fs';
import path from 'node:path';

const ORIGIN = 'https://estabaenlisboa.com';

function flag(name, fallback = '') {
  const index = process.argv.indexOf('--' + name);
  return index < 0 ? fallback : (process.argv[index + 1] ?? fallback);
}

function readJson(file) {
  if (!file || !fs.existsSync(file)) {
    return { data: null, error: 'No se generó el archivo de resultados.' };
  }
  try {
    return { data: JSON.parse(fs.readFileSync(file, 'utf8')), error: null };
  } catch (error) {
    return { data: null, error: 'El resultado no es JSON válido: ' + error.message };
  }
}

function linkRows(payload) {
  if (Array.isArray(payload)) return payload;
  if (Array.isArray(payload?.links)) return payload.links;
  if (Array.isArray(payload?.results?.links)) return payload.results.links;
  return null;
}

function classifyLinks(payload) {
  const rows = linkRows(payload);
  if (!rows) return null;
  const bad = rows.filter((item) => /BROKEN|ERROR|FAILED/i.test(String(item.state ?? '')));
  const redirects = rows.filter((item) => /REDIRECT/i.test(String(item.state ?? ''))
    || (item.redirects && (Array.isArray(item.redirects) ? item.redirects.length : true)));
  const skipped = rows.filter((item) => /SKIP|UNKNOWN/i.test(String(item.state ?? '')));
  const status = (item) => Number(item.status ?? item.statusCode);
  const notFound = bad.filter((item) => [404, 410].includes(status(item)));
  const blocked = bad.filter((item) => [403, 429].includes(status(item)));
  const unstable = bad.filter((item) => !notFound.includes(item) && !blocked.includes(item));
  const own = bad.filter((item) => {
    try {
      const host = new URL(item.url ?? item.href).hostname;
      return host === 'estabaenlisboa.com' || host === 'www.estabaenlisboa.com';
    } catch {
      return false;
    }
  });
  return { reported: rows.length, bad, redirects, skipped, notFound, blocked, unstable, own };
}

function findLighthouseJson(dir, depth = 0) {
  if (!dir || !fs.existsSync(dir) || depth > 7) return null;
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  const report = entries.find((item) => item.isFile() && item.name === 'ci-result.json');
  if (report) return path.join(dir, report.name);
  for (const entry of entries) {
    if (entry.isDirectory() && entry.name !== 'node_modules') {
      const nested = findLighthouseJson(path.join(dir, entry.name), depth + 1);
      if (nested) return nested;
    }
  }
  return null;
}

function score(value) {
  if (value === null || value === undefined || value === '') return null;
  const numeric = typeof value === 'number' ? value : Number(value);
  if (!Number.isFinite(numeric)) return null;
  return numeric > 1 ? numeric / 100 : numeric;
}

function classifyLighthouse(payload) {
  const rows = Array.isArray(payload) ? payload
    : (Array.isArray(payload?.results) ? payload.results : null);
  if (!rows) return null;
  const measured = rows.map((item) => ({
    path: String(item.path ?? item.url ?? 'URL desconocida'),
    device: String(item.device ?? 'mobile'),
    performance: score(item.performance),
    accessibility: score(item.accessibility),
    seo: score(item.seo),
    practices: score(item['best-practices'] ?? item.bestPractices),
  }));
  const severity = (item) => {
    if (item.seo === null && item.accessibility === null && item.performance === null) return 'sin-datos';
    if ((item.seo !== null && item.seo < 0.8)
      || (item.accessibility !== null && item.accessibility < 0.8)
      || (item.performance !== null && item.performance < 0.5)) return 'critica';
    if ((item.seo !== null && item.seo < 0.9)
      || (item.accessibility !== null && item.accessibility < 0.9)
      || (item.performance !== null && item.performance < 0.75)) return 'mejorable';
    return 'correcta';
  };
  const categories = measured.map((item) => ({ ...item, severity: severity(item) }));
  const priority = { critica: 0, mejorable: 1, 'sin-datos': 2, correcta: 3 };
  categories.sort((a, b) => priority[a.severity] - priority[b.severity]
    || (a.performance ?? 1) - (b.performance ?? 1));
  return {
    rows: categories,
    critical: categories.filter((item) => item.severity === 'critica').length,
    warning: categories.filter((item) => item.severity === 'mejorable').length,
    okay: categories.filter((item) => item.severity === 'correcta').length,
    unknown: categories.filter((item) => item.severity === 'sin-datos').length,
  };
}

function clean(value) {
  return String(value ?? '—').replaceAll('|', '\\|').replaceAll('\n', ' ').slice(0, 180);
}

function percent(value) {
  return value === null ? '—' : String(Math.round(value * 100));
}

function linkSource(item) {
  const source = item.parent ?? item.parents ?? item.source ?? item.sourceUrl;
  if (Array.isArray(source)) return source.slice(0, 2).join(', ');
  return String(source ?? '—');
}

function markdown({ links, linkError, lighthouse, lighthouseError, mode, linkExit, lighthouseExit }) {
  const lines = [
    '# Estaba en Lisboa — Web Quality Bot',
    '',
    '- Fecha (UTC): ' + new Date().toISOString(),
    '- Dominio auditado: ' + ORIGIN,
    '- Commit auditado: ' + (process.env.GITHUB_SHA ?? 'ejecución local'),
    '- Modalidad: ' + (mode === 'full' ? 'enlaces + Lighthouse móvil por muestras' : 'enlaces'),
    '',
    '## Enlaces (Linkinator)',
    '',
  ];
  if (!links) {
    lines.push('⚠️ Sin resultado verificable. ' + (linkError ?? 'Formato desconocido.'));
  } else {
    lines.push('- Registros devueltos por Linkinator: **' + links.reported + '** (no equivalen al total de enlaces comprobados).');
    lines.push('- Incidencias detectadas: **' + links.bad.length + '**');
    lines.push('- Respuestas 404/410: **' + links.notFound.length + '** (verificar en navegador).');
    lines.push('- Respuestas 403/429: **' + links.blocked.length + '** (posibles bloqueos anti-bot).');
    lines.push('- Sin respuesta/servidor/otras: **' + links.unstable.length + '**.');
    lines.push('- Incidencias con destino en nuestra propia web: **' + links.own.length + '**.');
    lines.push('- Redirecciones identificadas: **' + links.redirects.length + '**');
    lines.push('- Enlaces omitidos/no verificables: **' + links.skipped.length + '**');
    lines.push('');
    if (links.bad.length) {
      lines.push('### Primeros enlaces problemáticos');
      lines.push('');
      lines.push('| Destino | Origen | Estado |');
      lines.push('|---|---|---|');
      const ordered = [...links.bad].sort((a, b) => {
        const rank = (item) => [404, 410].includes(Number(item.status ?? item.statusCode)) ? 0
          : [403, 429].includes(Number(item.status ?? item.statusCode)) ? 2 : 1;
        return rank(a) - rank(b);
      });
      for (const item of ordered.slice(0, 25)) {
        lines.push('| ' + clean(item.url ?? item.href) + ' | ' + clean(linkSource(item))
          + ' | ' + clean(item.status ?? item.statusCode ?? item.state) + ' |');
      }
    }
  }
  if (linkExit && linkExit !== '0') {
    lines.push('', '⚠️ Linkinator terminó con código ' + clean(linkExit)
      + '. Revisar el JSON y el log adjuntos; puede haber errores de red o enlaces rotos.');
  }

  lines.push('', '## Lighthouse (Unlighthouse)', '');
  if (mode !== 'full') {
    lines.push('No se ejecutó en esta revisión semanal de enlaces.');
  } else if (!lighthouse) {
    lines.push('⚠️ Sin resultado verificable. ' + (lighthouseError ?? 'Formato desconocido.'));
  } else {
    lines.push('- Páginas/dispositivos medidos: **' + lighthouse.rows.length + '**');
    lines.push('- 🔴 Críticas: **' + lighthouse.critical + '**');
    lines.push('- 🟠 Mejorables: **' + lighthouse.warning + '**');
    lines.push('- 🟢 Correctas: **' + lighthouse.okay + '**');
    lines.push('- ⚪ Sin puntuaciones legibles: **' + lighthouse.unknown + '**');
    lines.push('');
    lines.push('### Páginas que requieren revisión');
    lines.push('');
    lines.push('| URL | Dispositivo | Rendimiento | Accesibilidad | SEO | Prioridad |');
    lines.push('|---|---|---:|---:|---:|---|');
    for (const item of lighthouse.rows.filter((x) => x.severity !== 'correcta').slice(0, 25)) {
      lines.push('| ' + clean(item.path) + ' | ' + clean(item.device)
        + ' | ' + percent(item.performance) + ' | ' + percent(item.accessibility)
        + ' | ' + percent(item.seo) + ' | ' + clean(item.severity) + ' |');
    }
    if (lighthouse.rows.every((x) => x.severity === 'correcta')) {
      lines.push('No hay páginas bajo los umbrales de clasificación en la muestra auditada.');
    }
  }
  if (mode === 'full' && lighthouseExit && lighthouseExit !== '0') {
    lines.push('', '⚠️ Unlighthouse terminó con código ' + clean(lighthouseExit)
      + '. Revisar su log; los resultados parciales no demuestran cobertura completa.');
  }
  lines.push('', '## Interpretación y límites', '');
  lines.push('- Linkinator parte del sitemap y comprueba enlaces salientes; no implica que todas las URLs noindex estén cubiertas.');
  lines.push('- Unlighthouse agrupa plantillas y muestrea páginas: el número medido no equivale al total indexable.');
  lines.push('- Los scores de Lighthouse son **pruebas sintéticas**, no métricas reales de usuarios (CrUX / Search Console).');
  lines.push('- Redirecciones, 403, 429, enlaces externos y anclas dinámicas requieren verificación antes de corregir.');
  lines.push('- Esta ejecución **no cambia la web** ni decide redirecciones, indexación o eliminaciones automáticamente.');
  lines.push('');
  return lines.join('\n');
}

function selfTest() {
  const links = classifyLinks({ links: [
    { url: ORIGIN + '/ok', state: 'OK' },
    { url: ORIGIN + '/falta', state: 'BROKEN', status: 404, parent: ORIGIN + '/blog' },
    { url: ORIGIN + '/salto', state: 'REDIRECT' },
  ] });
  const lighthouse = classifyLighthouse([
    { path: '/', performance: 0.4, accessibility: 1, seo: 1 },
    { path: '/blog', performance: 0.88, accessibility: 1, seo: 1 },
  ]);
  if (!links || links.reported !== 3 || links.bad.length !== 1 || links.notFound.length !== 1 || links.redirects.length !== 1
    || !lighthouse || lighthouse.critical !== 1 || lighthouse.okay !== 1) {
    throw new Error('Self-test falló: clasificación de resultados.');
  }
  const summary = markdown({ links, lighthouse, mode: 'full', linkExit: '1', lighthouseExit: '0' });
  if (!summary.includes('Incidencias detectadas: **1**') || !summary.includes('Críticas: **1**')) {
    throw new Error('Self-test falló: Markdown de salida.');
  }
  console.log('Quality Bot: self-test OK');
}

if (process.argv.includes('--self-test')) {
  selfTest();
} else {
  const mode = flag('mode', 'links');
  const linkRead = readJson(flag('links'));
  const links = linkRead.data ? classifyLinks(linkRead.data) : null;
  const lighthouseFile = mode === 'full' ? findLighthouseJson(flag('lighthouse')) : null;
  const lighthouseRead = mode === 'full'
    ? readJson(lighthouseFile) : { data: null, error: null };
  const lighthouse = lighthouseRead.data ? classifyLighthouse(lighthouseRead.data) : null;
  const output = markdown({
    links,
    linkError: linkRead.error ?? (!links ? 'Estructura JSON no reconocida.' : null),
    lighthouse,
    lighthouseError: lighthouseRead.error ?? (!lighthouse ? 'Estructura JSON no reconocida.' : null),
    mode,
    linkExit: flag('link-exit'),
    lighthouseExit: flag('lighthouse-exit'),
  });
  const destination = flag('out');
  if (destination) {
    fs.mkdirSync(path.dirname(destination), { recursive: true });
    fs.writeFileSync(destination, output + '\n', 'utf8');
  } else {
    console.log(output);
  }
  if (!links || (mode === 'full' && !lighthouse)) process.exitCode = 1;
}
