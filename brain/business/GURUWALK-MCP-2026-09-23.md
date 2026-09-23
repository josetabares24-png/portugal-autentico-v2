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

## Next test

Create a server-side proof of concept ONLY after the current CTA baseline matures.

Test goal:
- query Lisbon;
- retrieve current categories/tours;
- verify affiliate attribution in returned URLs;
- compare whether date-aware/real inventory improves click quality.

Do not ship dynamic inventory to production merely because the API exists.
