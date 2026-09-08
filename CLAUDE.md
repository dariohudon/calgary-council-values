@AGENTS.md

# Calgary Council Values
**What it is:** Civic transparency site: residents rank 7 civic domains, then see how current Calgary councillors' reviewed public voting records align with those priorities, with a vote-receipt drawer and confidence tiers. Non-partisan; "truth before politics".
**Live at:** https://civic.brightening.ca · port 3000 (Next default; no -p flag) · pm2 `calgary-council-values` (status online, started as `npm start`) · code in /var/www/calgary-council-values · repo git@github.com:dariohudon/calgary-council-values.git (main)

## Stack
Next.js 16.2.4 (App Router), React 19, TypeScript, Tailwind 4, csv-parser. No database: scores are precomputed JSON. No external APIs and no AI at runtime; classification is manual review.

## Run and deploy
```
cd /var/www/calgary-council-values && npm install
npm run build
pm2 restart calgary-council-values && pm2 save      # per DEPLOYMENT_PLAN.md
node scripts/calculate-alignment-score.mjs           # regenerates data/councillor_alignment_scores.json
```
Other scripts: scripts/create-gold-standard-review.mjs, scripts/fill-gold-standard.mjs. No .env file and no env vars referenced; no ecosystem.config.js. Dir is dario:dario under root-owned /var/www.

## Data
- `data/GOLD_STANDARD_REVIEW.csv` — the hand-reviewed vote classifications; this IS the truth engine. `GOLD_STANDARD_REVIEW_FILLED.csv`, `*_BATCH_REVIEW.csv`, `.bak.*` / `.backup-*` files are review checkpoints — keep them.
- `data/Council_and_Committee_Votes_20260425.csv` raw city export; `data/current_council_roster.json`; `data/councillor_alignment_scores.json` (generated).
- No cron jobs.

## Gotchas
- Binds the Next default port 3000; anything else that grabs 3000 takes the site down (EADDRINUSE appears in the pm2 error log).
- "Failed to find Server Action" errors after a rebuild are stale browser tabs from the previous build — expected, not a bug.
- The markdown docs are binding governance, not decoration: PROJECT_INDEX.md (start here), ARCHITECTURE.md, SCORING_MODEL.md, TAXONOMY_RULES.md, REVIEW_GUIDELINES.md, REVIEW_CHECKLIST.md, CLASSIFICATION_EXAMPLES.md. UI must never outrun the truth engine; only reviewed votes with civic impact are scored.
- Known limitation documented in commits 384fe6d/fcb1289: vote identity hardening; homepage filtered to the current council only.
- Global header lives in components/SiteHeader.tsx — no page-level menus (DESIGN_STANDARD.md).
- Docker / DigitalOcean move is planned in DEPLOYMENT_PLAN.md but deliberately deferred; containerizing must not touch scoring logic, data files or trust language.
- AGENTS.md (included above) warns this Next.js differs from training data: read node_modules/next/dist/docs before writing code.

## Conventions
Follow ~/.claude memory 'feedback-app-styling': square corners, Apple system font at standard sizes, 1380px desktop container with 32px gutters, visuals left / text right on desktop, no horizontal scroll.
Repo-specific (DESIGN_STANDARD.md): dark civic background, restrained Calgary red accents, generous spacing, quiet hierarchy, plain-language labels; no hype, flashy animation, campaign urgency or winner/loser framing. Where the two conflict, confirm with Dario.
