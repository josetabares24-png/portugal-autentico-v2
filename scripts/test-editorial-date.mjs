import assert from 'node:assert/strict';
import { toIsoEditorialDate } from '../src/lib/editorial-date.ts';
const months = ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'];
months.forEach((month, i) => assert.equal(toIsoEditorialDate(`9 ${month} 2026`), `2026-${String(i + 1).padStart(2, '0')}-09`));
assert.equal(toIsoEditorialDate('29 Feb 2024'), '2024-02-29');
assert.equal(toIsoEditorialDate(' 14 Oct 2026 '), '2026-10-14');
assert.equal(toIsoEditorialDate('2026-10-10'), '2026-10-10');
for (const value of [undefined, '', 'today', '29 Feb 2026', '31 Abr 2026', '0 Ene 2026', '1 Foo 2026', '2026-02-31', '2026-13-01']) assert.equal(toIsoEditorialDate(value), undefined);
console.log('Editorial dates: 24 cases passed; invalid or missing dates are omitted.');
