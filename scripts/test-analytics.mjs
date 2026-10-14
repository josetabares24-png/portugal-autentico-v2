import assert from 'node:assert/strict';
import { test, afterEach } from 'node:test';
import { isProductionAnalyticsHost, syncAnalyticsConsent, GA_MEASUREMENT_ID } from '../src/lib/analytics-runtime.ts';
import { trackEvent } from '../src/lib/analytics.ts';

afterEach(() => { delete globalThis.window; });

function browser(hostname = 'estabaenlisboa.com', accepted = true, explicit = true) {
  const values = new Map([
    ['cookieConsent', accepted ? 'accepted' : 'rejected'],
    ['cookieConsentExplicit', String(explicit)],
  ]);
  globalThis.window = {
    location: { hostname },
    localStorage: { getItem: key => values.get(key) ?? null },
  };
  return { values, window: globalThis.window };
}

test('only the exact public hostnames are allowed', () => {
  for (const host of ['estabaenlisboa.com', 'www.estabaenlisboa.com']) {
    assert.equal(isProductionAnalyticsHost(host), true);
  }
  for (const host of ['localhost', '127.0.0.1', '::1', 'preview.vercel.app',
    'estabaenlisboa.com.vercel.app', 'preview.estabaenlisboa.com', '']) {
    assert.equal(isProductionAnalyticsHost(host), false);
    browser(host);
    assert.equal(syncAnalyticsConsent(true), false);
    assert.equal(window.gtag, undefined);
    assert.equal(window.dataLayer, undefined);
    assert.equal(window['ga-disable-G-8F54LQ5862'], true);
  }
});

test('no consent, implicit acceptance and blocked storage do not initialize GA', () => {
  browser();
  assert.equal(syncAnalyticsConsent(false), false);
  browser('estabaenlisboa.com', false);
  assert.equal(syncAnalyticsConsent(true), false);
  browser('estabaenlisboa.com', true, false);
  assert.equal(syncAnalyticsConsent(true), false);
  window.localStorage.getItem = () => { throw new Error('blocked'); };
  assert.equal(syncAnalyticsConsent(true), false);
  assert.equal(window.gtag, undefined);
  assert.equal(window.dataLayer, undefined);
});

test('accept, revoke and reaccept update GA without duplicate config/pageviews', () => {
  const { values } = browser();
  assert.equal(syncAnalyticsConsent(true), true);
  const queue = window.dataLayer;
  assert.equal(queue.filter(args => args[0] === 'config').length, 1);
  assert.equal(queue.find(args => args[0] === 'config')[1], GA_MEASUREMENT_ID);
  assert.equal(window['ga-disable-G-8F54LQ5862'], false);
  values.set('cookieConsent', 'rejected');
  assert.equal(syncAnalyticsConsent(false), false);
  assert.equal(window.disableAnalytics, true);
  assert.equal(window['ga-disable-G-8F54LQ5862'], true);
  assert.equal(queue.at(-1)[2].analytics_storage, 'denied');
  values.set('cookieConsent', 'accepted');
  assert.equal(syncAnalyticsConsent(true), true);
  assert.equal(window.disableAnalytics, false);
  assert.equal(window['ga-disable-G-8F54LQ5862'], false);
  assert.deepEqual(Array.from(queue.at(-1)), ['consent', 'update', {
    analytics_storage: 'granted', ad_storage: 'denied',
    ad_user_data: 'denied', ad_personalization: 'denied',
  }]);
  assert.equal(queue.filter(args => args[0] === 'config').length, 1);
});

test('product events require a production host even if gtag already exists', () => {
  browser('localhost');
  const calls = [];
  window.gtag = (...args) => calls.push(args);
  trackEvent('affiliate_click');
  assert.equal(calls.length, 0);
  window.location.hostname = 'estabaenlisboa.com';
  trackEvent('affiliate_click', { value: 0, optional: undefined });
  assert.deepEqual(calls, [['event', 'affiliate_click', { value: 0 }]]);
  window.localStorage.getItem = () => 'rejected';
  trackEvent('affiliate_click');
  assert.equal(calls.length, 1);
});

test('revocation suppresses product events after initialization', () => {
  const { values } = browser();
  syncAnalyticsConsent(true);
  values.set('cookieConsent', 'rejected');
  syncAnalyticsConsent(false);
  trackEvent('sign_up');
  assert.equal(window.dataLayer.filter(args => args[0] === 'event').length, 0);
});

test('server rendering does not initialize or track', () => {
  delete globalThis.window;
  assert.equal(syncAnalyticsConsent(true), false);
  assert.doesNotThrow(() => trackEvent('affiliate_click'));
});
