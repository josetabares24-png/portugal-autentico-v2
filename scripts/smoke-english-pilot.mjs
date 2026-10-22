import fs from "node:fs/promises";
import path from "node:path";
import { parseHTML } from "linkedom";
const routes = JSON.parse(
  await fs.readFile("src/data/english-pilot-routes.json", "utf8"),
);
const base = (process.env.SMOKE_BASE_URL || "http://127.0.0.1:5220").replace(
  /\/$/,
  "",
);
const site = "https://estabaenlisboa.com";
const alternate = (d, lang) =>
  [...d.querySelectorAll("link[rel=alternate]")]
    .find(
      (e) =>
        (e.getAttribute("hreflang") || e.getAttribute("hrefLang")) === lang,
    )
    ?.getAttribute("href");
const sameUrl = (a, b) => Boolean(a) && new URL(a).href === new URL(b).href;
const checks = [];
const pages = [];
const check = (url, name, pass, detail = "") =>
  checks.push({ url, name, pass: Boolean(pass), detail });
const get = async (url) => {
  const response = await fetch(base + url, { redirect: "manual" });
  return { response, document: parseHTML(await response.text()).document };
};
const links = new Set();
for (const route of routes) {
  const { response, document: d } = await get(route.path);
  check(
    route.path,
    "200 without redirect",
    response.status === 200,
    String(response.status),
  );
  check(
    route.path,
    "server-rendered English document",
    d.documentElement.lang === "en",
  );
  check(route.path, "one H1", d.querySelectorAll("h1").length === 1);
  check(
    route.path,
    "canonical self",
    d.querySelector('link[rel="canonical"]')?.getAttribute("href") ===
      site + route.path,
  );
  check(
    route.path,
    "indexable HTML",
    ![...d.querySelectorAll('meta[name="robots"],meta[name="googlebot"]')].some(
      (m) => /noindex/.test(m.getAttribute("content") || ""),
    ),
  );
  check(
    route.path,
    "title and description",
    Boolean(d.title) &&
      Boolean(
        d.querySelector('meta[name="description"]')?.getAttribute("content"),
      ),
  );
  for (const lang of ["es", "en", "x-default"]) {
    const target = site + (lang === "en" ? route.path : route.es);
    check(
      route.path,
      "English hreflang " + lang,
      sameUrl(alternate(d, lang), target),
      target,
    );
  }
  const es = await get(route.es);
  for (const lang of ["es", "en", "x-default"]) {
    const target = site + (lang === "en" ? route.path : route.es);
    check(
      route.path,
      "Spanish reciprocal hreflang " + lang,
      sameUrl(alternate(es.document, lang), target),
      target,
    );
  }
  check(
    route.es,
    "Spanish HTML language preserved",
    es.document.documentElement.lang === "es",
  );
  const main = d.querySelector("main");
  const words = (main?.textContent || "").trim().split(/\s+/).length;
  check(
    route.path,
    "substantive visible guide",
    words > (route.path === "/en" ? 100 : 350),
    String(words),
  );
  let schema = [];
  let parseable = true;
  for (const s of d.querySelectorAll('script[type="application/ld+json"]')) {
    try {
      schema.push(JSON.parse(s.textContent));
    } catch {
      parseable = false;
    }
  }
  check(route.path, "schema parseable", parseable && schema.length > 0);
  if (route.path !== "/en")
    check(
      route.path,
      "article in English",
      schema.some(
        (s) =>
          s["@type"] === "BlogPosting" &&
          s.inLanguage === "en" &&
          s.mainEntityOfPage === site + route.path,
      ),
    );
  check(
    route.path,
    "no invented review/offer schema",
    !schema.some((s) =>
      ["Offer", "Review", "AggregateRating"].includes(s["@type"]),
    ),
  );
  check(
    route.path,
    "all images have ALT",
    [...d.querySelectorAll("img")].every((i) => i.getAttribute("alt")),
  );
  const image = d.querySelector("main img");
  if (image) {
    let src = image.getAttribute("src");
    if (src.startsWith("/_next/image"))
      src = new URL(src, site).searchParams.get("url");
    const r = await fetch(base + src);
    check(route.path, "hero source loads", r.status === 200, src);
  }
  const unnamed = [...d.querySelectorAll("button")].filter(
    (e) => !(e.getAttribute("aria-label") || e.textContent.trim()),
  );
  check(route.path, "buttons named", unnamed.length === 0);
  for (const a of d.querySelectorAll("a[href]")) {
    const href = a.getAttribute("href");
    if (href.startsWith("/") && !href.startsWith("//"))
      links.add(href.split("#")[0]);
  }
  for (const a of d.querySelectorAll('a[rel~="sponsored"]')) {
    let u = new URL(a.getAttribute("href"));
    check(
      route.path,
      "affiliate destination retains provider ID",
      u.hostname.endsWith("guruwalk.com")
        ? Boolean(u.searchParams.get("ref"))
        : u.hostname.endsWith("tiqets.com") &&
            Boolean(u.searchParams.get("partner")),
    );
    check(
      route.path,
      "outbound protected",
      a.getAttribute("rel").includes("noopener") &&
        a.getAttribute("rel").includes("noreferrer"),
    );
  }
  pages.push({
    path: route.path,
    words,
    title: d.title,
    schemas: schema.map((s) => s["@type"]),
  });
}
for (const href of links) {
  const r = await fetch(base + href, { redirect: "manual" });
  check(
    href,
    "internal link points directly to 200",
    r.status === 200,
    String(r.status),
  );
}
for (const bad of ["/en/unpublished-pilot-guide", "/no-existe-english-pilot"]) {
  const r = await fetch(base + bad);
  check(
    bad,
    "unknown page ends in real404",
    r.status === 404,
    String(r.status),
  );
}
const xml = await (await fetch(base + "/sitemap.xml")).text();
const sitemap = [...xml.matchAll(/<loc>(.*?)<\/loc>/g)].map((m) => m[1]);
check(
  "/sitemap.xml",
  "98 Spanish plus6 English URLs",
  sitemap.length === 104,
  String(sitemap.length),
);
for (const route of routes)
  check(
    "/sitemap.xml",
    "includes " + route.path,
    sitemap.filter((u) => u === site + route.path).length === 1,
  );
const unsupported = await fetch(
  base + "/api/free-tours?date=2099-01-01&language=de",
);
check(
  "/api/free-tours",
  "unsupported language rejected before provider",
  unsupported.status === 400,
);
const report = {
  base,
  pages,
  checks,
  summary: {
    pages: pages.length,
    checks: checks.length,
    failures: checks.filter((c) => !c.pass),
  },
};
if (process.env.SMOKE_EVIDENCE_DIR) {
  await fs.mkdir(process.env.SMOKE_EVIDENCE_DIR, { recursive: true });
  await fs.writeFile(
    path.join(process.env.SMOKE_EVIDENCE_DIR, "english-pilot-report.json"),
    JSON.stringify(report, null, 2),
  );
}
console.log(JSON.stringify(report.summary));
process.exitCode = report.summary.failures.length ? 1 : 0;
