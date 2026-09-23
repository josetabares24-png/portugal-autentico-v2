# Newsletter funnel — 2026-09-23

## DIAGNÓSTICO

The site already asks for email addresses on `/blog`, but the subscriber asset was not measurable and the unsubscribe promise was not backed by a working route.

The repository also contained old welcome-email copy from a previous product strategy.

## HECHOS

### Acquisition surface
- `/blog` has a newsletter form that POSTs to `/api/subscribe`.
- GA4 90-day baseline before this change contains no `sign_up` event.
- `/blog` baseline in the 90-day analysis: 55 sessions, 81.82% engagement rate, 27 s average engagement time.

### Subscription backend
`/api/subscribe`:
- attempts Brevo template delivery first when `BREVO_SUBSCRIPTION_TEMPLATE_ID` exists;
- otherwise can send a code-controlled Brevo HTML email;
- can fall back to SMTP;
- adds/updates the contact in Brevo list ID 5 by default.

### Problem found
The repository fallback emails still promised:
- a free 15-page guide;
- “guías premium”;
- “lugares secretos”;
- “vivir Lisboa como un verdadero local”;
- “experiencias auténticas”.

Those claims no longer match the product.

### Unsubscribe problem
Email headers pointed to `https://estabaenlisboa.com/unsubscribe`, but the repository had no unsubscribe page or API route.

The code also declared `List-Unsubscribe-Post: List-Unsubscribe=One-Click` without implementing a compliant one-click endpoint.

## EXTERNAL VERIFICATION

Brevo's current contact-update API supports:
- `emailBlacklisted: true`;
- `unlinkListIds`.

That allows us to stop newsletter email and remove the address from the newsletter list without deleting the contact record.

Reference checked: Brevo API documentation, 2026-09-23.

## CAMBIO

### Measurement
After a successful `/api/subscribe` response, the blog form emits:

- event: `sign_up`
- method: `newsletter`
- content_type: `blog_newsletter`
- placement: `blog_index`

Important:
This measures successful subscription requests that occur with analytics consent. It does **not** equal unique subscriber count.

### Unsubscribe
New:
- `/unsubscribe` form;
- `POST /api/unsubscribe`;
- validates and rate-limits requests;
- uses Brevo update-contact with `emailBlacklisted: true` and `unlinkListIds: [5]`;
- returns the same success response for missing contacts to avoid email enumeration;
- emits `newsletter_unsubscribe` after successful client response, subject to analytics consent.

The route is `noindex, follow` and is not added to the sitemap.

### Email fallback cleanup
Repository-controlled welcome emails now say only:
- thanks for subscribing;
- new guides / important updates will be emailed;
- link to `/blog`;
- link to functional `/unsubscribe`.

Removed:
- free-guide/PDF promise;
- premium-guide promise;
- local/authentic/secret language.

### Header correctness
Keep:
- `List-Unsubscribe: <https://estabaenlisboa.com/unsubscribe>`

Remove:
- `List-Unsubscribe-Post: List-Unsubscribe=One-Click`

Reason:
The implemented unsubscribe page is an interactive preference route, not a tokenized RFC-style one-click POST endpoint.

## EXTERNAL TEMPLATE LIMITATION

If production has `BREVO_SUBSCRIPTION_TEMPLATE_ID` configured, Brevo can send a template whose visible body is stored outside this repository.

We pass:
- `name`;
- `guides_url`;
- `unsubscribe_url`;

but we cannot claim the external template itself is clean until it is inspected in Brevo.

Treat this as a pending verification, not a completed fix.

## METRICS

Primary:
- `sign_up` events per 100 `/blog` sessions.

Health:
- subscription API errors;
- unsubscribe success;
- newsletter_unsubscribe events.

Business truth:
- unique active contacts in Brevo remains the authoritative subscriber count when available.

## DECISIÓN

Do not add more newsletter boxes, popups or lead magnets yet.

First prove the existing form can produce measurable successful subscriptions.
