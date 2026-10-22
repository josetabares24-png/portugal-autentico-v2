import assert from 'node:assert/strict';
import { test } from 'node:test';
import { loadLiveTours, isAllowedBookingUrl } from '../src/lib/live-free-tours.ts';
import { freeTourBookingOptions } from '../src/lib/free-tour-booking-options.ts';
const url='https://www.guruwalk.com/walks/1?ref=offline&beginsAt=2026-10-23';
function provider(events) {
 const calls=[];
 return {calls,client:{
  discover:async p=>{calls.push(['discover',p.language]);return {featured_products:[{id:1,name:'A walk',url,rating_out_of_5:4.5,reviews_count:5,image_url:null}]};},
  availability:async p=>{calls.push(['availability',p.language]);return {dates:{'2026-10-23':events}};},
 }};
}
test('English discovery and availability are requested separately; other-language slots cannot leak',async()=>{
 const p=provider([{event_id:1,start_time:'09:30',language:'es',booking_url:url},{event_id:2,start_time:'10:30',language:'en',booking_url:url}]);
 const result=await loadLiveTours('2026-10-23','en',p.client);
 assert.deepEqual(p.calls,[['discover','en'],['availability','en']]);
 assert.equal(result[0].slots.length,1); assert.equal(result[0].slots[0].eventId,2); assert.equal(result[0].slots[0].url,url);
 const options=freeTourBookingOptions(result[0],'en'); assert.equal(options[0].label,'Choose a time and book'); assert.ok(options[0].accessibleLabel.startsWith(options[0].label));
});
test('English list does not claim availability when only Spanish slots are confirmed',async()=>{
 const p=provider([{event_id:1,start_time:'09:30',language:'es',booking_url:url}]);
 assert.deepEqual(await loadLiveTours('2026-10-23','en',p.client),[]);
});
test('Spanish request retains its previous fallback when detailed availability is missing',async()=>{
 const p=provider([]); const result=await loadLiveTours('2026-10-23','es',p.client);
 assert.equal(result.length,1); assert.equal(result[0].url,url); assert.deepEqual(result[0].slots,[]);
 assert.deepEqual(p.calls,[['discover','es'],['availability','es']]);
});
test('outbound destinations require HTTPS, exact GuruWalk host and referral',()=>{
 for(const bad of ['http://www.guruwalk.com/walks/1?ref=offline','https://guruwalk.com.evil.invalid/?ref=offline','https://www.guruwalk.com/walks/1','javascript:alert(1)'])assert.equal(isAllowedBookingUrl(bad),false);
 assert.equal(isAllowedBookingUrl(url),true);
});
