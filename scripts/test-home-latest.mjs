import assert from 'node:assert/strict';
import test from 'node:test';
import policy from '../src/data/seo-url-policy.json' with { type: 'json' };
import { latestHomeArticles } from '../src/lib/home-latest-articles.ts';

const post = (id, fecha, dateModified) => ({ id, fecha, dateModified, titulo: id, excerpt: '', categoria: 'Guías', autor: 'José Tabares', imagen: '/logo.png' });
const today = '2026-10-28';

test('new articles enter by publication date, regardless of catalog order or update date', () => {
  const input = Object.freeze([
    post('old-updated', '1 Oct 2026', '2026-10-28'),
    post('second', '26 Oct 2026'),
    post('newest', '27 Oct 2026'),
    post('third', '25 Oct 2026'),
  ]);
  assert.deepEqual(latestHomeArticles(input, { today }).map((item) => item.id), ['newest', 'second', 'third']);
  assert.deepEqual(input.map((item) => item.id), ['old-updated', 'second', 'newest', 'third']);
});

test('future, invalid, noindex and redirected articles cannot displace published articles', () => {
  const excluded = [...policy.noindexPaths, ...policy.redirects.map((item) => item.source)]
    .filter((value) => value.startsWith('/blog/')).map((value) => post(value.slice(6), '28 Oct 2026'));
  const input = [post('published', '27 Oct 2026'), post('future', '29 Oct 2026'), post('invalid', '31 Feb 2026'), ...excluded];
  assert.deepEqual(latestHomeArticles(input, { today }).map((item) => item.id), ['published']);
});

test('same-day order is stable and the requested limit is respected', () => {
  const input = [post('first', '27 Oct 2026'), post('second', '27 Oct 2026'), post('older', '26 Oct 2026')];
  assert.deepEqual(latestHomeArticles(input, { today, limit: 2 }).map((item) => item.id), ['first', 'second']);
  assert.deepEqual(latestHomeArticles(input, { today, limit: 0 }), []);
  assert.deepEqual(latestHomeArticles([], { today }), []);
});
