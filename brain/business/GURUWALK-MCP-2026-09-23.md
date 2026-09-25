# GuruWalk MCP capability — 2026-09-23

## Capability

GuruWalk exposes an official affiliate MCP server:

- repository: `guruwalk/affiliates-mcp`
- endpoint: `POST https://back.guruwalk.com/mcp/affiliates`
- transport: Streamable HTTP
- authentication: API key via `Authorization: Bearer <api_key>` or `Api-Key: <api_key>`

Available tools:
- `discover_destination`
- `browse_category`
- `check_availability`

Returned tour/category/booking URLs automatically include the affiliate `?ref=<username>` parameter.

## Security rule

**Never store the API key in GitHub, Mente Lisboa, source code or chat-derived notes.**

The key must live only in secret configuration, preferably Vercel Environment Variables.

Recommended variable:
`GURUWALK_MCP_API_KEY`

If a key is ever pasted into chat or otherwise exposed outside the secret store, treat it as compromised and rotate/regenerate it before production use.

## Product rule

The MCP does NOT replace the current static GuruWalk affiliate funnel yet.

Current static flow already has measurable evidence:
- /free-tours-lisboa
- 23 recorded affiliate_click events / 90-day baseline.

Therefore:
1. keep the current static affiliate links;
2. use MCP first as a data/enrichment capability;
3. do not replace a proven funnel until MCP-based discovery/availability is tested.

## Potential use cases

### 1. Fresh availability
On /free-tours-lisboa, show current dates/times only when it materially helps the visitor.

### 2. Better matching
Use destination/category/tour data to map:
- first visit
- Alfama
- Belém
- night tours
- mystery/legends

to actual available GuruWalk inventory.

### 3. Date-aware CTAs
If a user is already choosing a date, surface bookable slots rather than a generic destination link.

### 4. Commercial intelligence
Use GuruWalk inventory to understand:
- which categories have supply;
- languages;
- tour depth;
- availability patterns.

Do not confuse inventory with conversion data.

## Guardrails

- no API calls directly from the browser;
- API key stays server-side;
- cache responses where appropriate;
- do not expose raw secret values;
- do not turn /free-tours-lisboa into a marketplace;
- preserve editorial explanation before inventory;
- keep current static affiliate fallback if MCP is unavailable;
- measure any MCP-based CTA separately.

## Runtime validation completed — 2026-09-25

The server-side proof of concept was validated in Vercel Preview before merge.

Observed in the real GuruWalk MCP response:
- destination: Lisboa, Portugal;
- free tours available: yes;
- categories returned: 19;
- featured products reported: 25;
- category/tour URLs preserved affiliate attribution;
- availability test: 8 dates with events and 44 events in the tested window;
- booking URLs preserved affiliate attribution.

Operational cleanup:
- the temporary Preview-only validation endpoint was removed before merge;
- the final Preview returned 404 for that endpoint;
- both Vercel checks passed;
- PR #79 was merged to `main` at `5312dfb26198d832b7750d8636966182b1a6b7e2`;
- the resulting production deployment reached READY.

The reusable client lives server-side; no raw API key or public test surface was committed.

## Next product step

Do not replace the proven static GuruWalk funnel yet.

When the commercial baseline is mature:
1. choose one narrow MCP use case (date-aware availability or category-aware matching);
2. keep static links as fallback/control;
3. track the MCP CTA separately;
4. compare click quality and partner conversion before increasing prominence.

Do not ship dynamic inventory merely because the client is now validated.
