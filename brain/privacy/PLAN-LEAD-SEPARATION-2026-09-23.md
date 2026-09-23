# Plan lead / newsletter separation — 2026-09-23

## DIAGNÓSTICO

The personalized-plan form and newsletter were treated as two different things in the public privacy policy, but not in the backend.

A user requesting a personalized plan was automatically added to the same Brevo list used by the blog newsletter.

## HECHOS

### Public promise
The privacy policy states that data from `planifica-tu-viaje` is used to answer the request and that email updates are sent when a user subscribes voluntarily.

### Backend behavior before change
`POST /api/planifica-tu-viaje` sent the service emails and then called `addBrevoContact(... listIds: [5])` with `FUENTE: planifica-tu-viaje`.

The plan form has no newsletter opt-in. List 5 is also the default list used by `/api/subscribe`.

## EXTERNAL CHECK

GDPR purpose limitation requires personal data to be collected for specified purposes and not silently reused for a different purpose.

Portugal's CNPD guidance on electronic direct marketing says marketing consent must be demonstrable in its concrete context, subject to limited customer-relationship exceptions.

This records a product/privacy alignment decision, not individualized legal advice.

## CHANGE

Removed automatic newsletter-list enrollment from `/api/planifica-tu-viaje`.

Unchanged:
- visible Planifica page;
- form fields;
- admin notification;
- transactional user confirmation;
- `personal_plan_submit` measurement;
- current CTA experiments.

## HISTORICAL DATA RISK

Some existing contacts may already have entered list 5 from plan requests.

The repository cannot establish whether those people later subscribed separately. Do not mass-remove them from code and do not assume they consented to marketing.

Audit Brevo before a marketing send if possible.

## DECISIÓN

Service leads and newsletter subscribers are separate populations.

If a future service form also offers newsletter subscription, it must be a separate voluntary opt-in.
