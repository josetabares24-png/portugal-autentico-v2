# Estaba en Lisboa — Brain

This folder is the operating brain of `estabaenlisboa.com`.

It is designed to be opened directly in Obsidian, but it is deliberately plain Markdown so GitHub, Codex, Claude, Cursor and other agents can read the same source of truth.

## Start here

1. [[00-MISSION]]
2. [[01-CURRENT-STATE]]
3. [[02-METRICS]]
4. [[03-SEO-DECISION-ENGINE]]
5. [[07-NEXT-ACTIONS]]

Then use:
- [[04-CONTENT-STRATEGY]] for editorial decisions.
- [[05-EXPERIMENTS]] for hypotheses and tests.
- [[06-DECISIONS]] for decisions that should survive future sessions.
- `data/` for dated evidence snapshots.
- `templates/` for repeatable operating formats.

## Source-of-truth hierarchy

When information conflicts, use this order:

1. **Live Search Console / GA4 / production evidence**
2. Latest dated snapshot in `brain/data/`
3. Current files in `brain/`
4. Existing project docs in `docs/` and root Markdown files
5. Assumptions

Never promote an assumption above measured evidence.

## Operating rule

Every meaningful change should answer four questions:

1. What metric/problem are we trying to improve?
2. What evidence says this is the right page or problem?
3. What is the smallest change that tests the hypothesis?
4. When and how will we know whether it helped?

If those questions cannot be answered, do not make the change yet.

## Strategic direction

The public product is moving toward a **focused editorial publication**, with the blog as the growth engine.

Existing non-blog URLs are not deleted merely because the direction changed. They are frozen, measured and then either:
- retained because they earn demand;
- converted into a more editorial format;
- redirected to the strongest relevant article;
- or retired only after evidence shows it is safe.

That distinction protects accumulated search equity while simplifying the product.
