import routes from '@/data/english-pilot-routes.json';

const SITE = 'https://estabaenlisboa.com';
/** Only completed, explicitly reviewed counterparts enter this registry. */
export function languageAlternates(path: string) {
  const route = routes.find((item) => item.es === path || item.path === path);
  return route ? { es: SITE + route.es, en: SITE + route.path, 'x-default': SITE + route.es } : undefined;
}
export function englishCounterpart(path: string) {
  return routes.find((item) => item.es === path)?.path;
}
export { routes as englishPilotRoutes };
