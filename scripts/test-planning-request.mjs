import assert from 'node:assert/strict';
import { test } from 'node:test';
import { parsePlanningRequest, planningMessages, deliverPlanningRequest } from '../src/lib/planning-request.ts';
import { PLANNING_EMAIL } from '../src/lib/planning-contact.ts';

const data = parsePlanningRequest({ nombre: 'Ana', email: 'visitor@example.invalid', comentarios: 'Tres días en Lisboa' });
function transport(outcomes) {
  const calls = [];
  return { calls, send: async message => {
    calls.push(message);
    const outcome = outcomes.shift();
    if (outcome instanceof Error) throw outcome;
    return { success: outcome === true };
  } };
}

test('rejects malformed/oversized input and header injection; keeps older numeric clients', () => {
  for (const body of [null, [], 'text', {}, { nombre: {}, email: data.email },
    { nombre: ' ', email: data.email }, { nombre: 'Ana\nBCC: other', email: data.email },
    { nombre: 'Ana', email: 'bad' }, { ...data, comentarios: 'a'.repeat(5001) },
    { ...data, personas: Infinity }]) assert.equal(parsePlanningRequest(body), null);
  const parsed = parsePlanningRequest({ ...data, nombre: ' Ana ', dias: 3, personas: 2 });
  assert.equal(parsed.nombre, 'Ana');
  assert.equal(parsed.dias, '3');
  assert.equal(parsed.personas, '2');
});

test('emails escape visitor HTML; reply addresses support direct conversation without an SLA', () => {
  const messages = planningMessages({ ...data, nombre: '<b>Ana</b>', comentarios: '<img src=x>\n& "hola"' });
  assert.equal(messages.notification.to[0].email, PLANNING_EMAIL);
  assert.equal(messages.notification.replyTo.email, data.email);
  assert.equal(messages.confirmation.replyTo.email, PLANNING_EMAIL);
  assert.ok(messages.notification.htmlContent.includes('&lt;img src=x&gt;<br>&amp; &quot;hola&quot;'));
  for (const message of Object.values(messages)) {
    assert.doesNotMatch(message.htmlContent, /<b>Ana|<img/);
    assert.doesNotMatch(message.textContent, /24.?48|newsletter|suscri/i);
    assert.equal(message.templateId, undefined);
  }
});

test('owner success then visitor failure still succeeds without duplicating the lead', async () => {
  const primary = transport([true, false]);
  const fallback = transport([false]);
  assert.deepEqual(await deliverPlanningRequest(data, { primary: primary.send, fallback: fallback.send }), { success: true, confirmationSent: false });
  assert.deepEqual(primary.calls.map(m => m.to[0].email), [PLANNING_EMAIL, data.email]);
  assert.deepEqual(fallback.calls.map(m => m.to[0].email), [data.email]);
});

test('failed owner notification never sends visitor confirmation or claims success', async () => {
  const primary = transport([false, true]);
  assert.deepEqual(await deliverPlanningRequest(data, { primary: primary.send }), { success: false, confirmationSent: false });
  assert.equal(primary.calls.length, 1);
  assert.equal(primary.calls[0].to[0].email, PLANNING_EMAIL);
});

test('primary failure retries owner with fallback before acknowledging visitor', async () => {
  const primary = transport([new Error('offline')]);
  const fallback = transport([true, true]);
  assert.deepEqual(await deliverPlanningRequest(data, { primary: primary.send, fallback: fallback.send }), { success: true, confirmationSent: true });
  assert.deepEqual(fallback.calls.map(m => m.to[0].email), [PLANNING_EMAIL, data.email]);
});

test('both transports fail: no acknowledgement; missing transports also fail', async () => {
  const primary = transport([false]);
  const fallback = transport([new Error('offline')]);
  assert.deepEqual(await deliverPlanningRequest(data, { primary: primary.send, fallback: fallback.send }), { success: false, confirmationSent: false });
  assert.equal(primary.calls.length + fallback.calls.length, 2);
  assert.deepEqual(await deliverPlanningRequest(data, {}), { success: false, confirmationSent: false });
});

test('normal delivery and SMTP-only delivery each notify owner before visitor', async () => {
  for (const key of ['primary', 'fallback']) {
    const sender = transport([true, true]);
    assert.deepEqual(await deliverPlanningRequest(data, { [key]: sender.send }), { success: true, confirmationSent: true });
    assert.deepEqual(sender.calls.map(m => m.to[0].email), [PLANNING_EMAIL, data.email]);
  }
});

test('actual API adapter with intercepted Brevo HTTP: no real network or contact-list writes', async () => {
  const originalFetch = globalThis.fetch;
  const keys = ['BREVO_API_KEY', 'BREVO_SENDER_EMAIL', 'SMTP_HOST', 'SMTP_USER', 'SMTP_PASS', 'UPSTASH_REDIS_REST_URL', 'UPSTASH_REDIS_REST_TOKEN'];
  const saved = Object.fromEntries(keys.map(key => [key, process.env[key]]));
  for (const key of keys) delete process.env[key];
  process.env.BREVO_API_KEY = 'offline-test';
  process.env.BREVO_SENDER_EMAIL = 'sender@example.invalid';
  const calls = [];
  let outcomes = [201, 201];
  globalThis.fetch = async (url, options) => {
    assert.equal(url, 'https://api.brevo.com/v3/smtp/email');
    const body = JSON.parse(options.body);
    calls.push(body);
    assert.equal(body.templateId, undefined);
    return new Response('{}', { status: outcomes.shift() ?? 500 });
  };
  try {
    const { POST } = await import('../src/app/api/planifica-tu-viaje/route.ts');
    const request = body => new Request('https://example.invalid/api/planifica-tu-viaje', { method: 'POST', body: JSON.stringify(body) });
    assert.equal((await POST(request(data))).status, 200);
    assert.deepEqual(calls.map(m => m.to[0].email), [PLANNING_EMAIL, data.email]);
    calls.length = 0;
    outcomes = [500, 201];
    assert.equal((await POST(request(data))).status, 503);
    assert.equal(calls.length, 1);
    calls.length = 0;
    outcomes = [201, 500];
    assert.equal((await POST(request(data))).status, 200);
    assert.equal(calls.length, 2);
    assert.equal((await POST(request({ nombre: [], email: data.email }))).status, 400);
    assert.equal(calls.length, 2);
    const malformed = new Request('https://example.invalid/api/planifica-tu-viaje', { method: 'POST', body: '{' });
    assert.equal((await POST(malformed)).status, 400);
  } finally {
    globalThis.fetch = originalFetch;
    for (const key of keys) {
      if (saved[key] === undefined) delete process.env[key]; else process.env[key] = saved[key];
    }
  }
});
