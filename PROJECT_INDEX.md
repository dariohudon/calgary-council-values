# Calgary Council Values Matcher — Project Index

This project is civic infrastructure.

It is not a political campaign tool.

Its purpose is to help Calgarians compare public voting records against their own civic values using transparent methodology and defensible public records.

The system must prioritize:

# Truth before politics

Every score must be explainable.

Every score must be traceable.

Every score must be challengeable.

This file exists to help future developers, auditors, and AI collaborators understand where truth lives in the system.

---

# Core Project Files

---

## README.md

High-level public-facing overview of the project.

Includes:

- project purpose
- why it exists
- public positioning
- GitHub overview
- basic setup

Use this first for orientation.

---

## ARCHITECTURE.md

Primary system architecture document.

Defines:

- the 7-domain framework
- truth engine philosophy
- what must never be broken
- system priorities
- audit-first development workflow
- protected foundation systems

This is the most important file.

Read this before implementation.

Architecture overrides convenience.

---

## SCORING_MODEL.md

Defines how councillor alignment scores are calculated.

Includes:

- MCDA foundation
- Weighted Sum Model (WSM)
- domain weighting logic
- vote classification rules
- minimum vote thresholds
- withheld score policy
- transparency requirements

This protects scoring defensibility.

Never invent scoring logic outside this file.

---

## DESIGN_STANDARD.md

Defines UI and trust design standards.

Includes:

- visual tone
- header rules
- layout standards
- language restrictions
- civic trust design principles

This protects the product from becoming political theatre.

Design must support trust.

Not hype.

---

## AGENTS.md

Developer workflow and implementation guardrails.

Defines:

- how implementation work should be approached
- safe development expectations
- architectural caution
- workflow expectations for agents and collaborators

Used primarily for implementation discipline.

---

## CLAUDE.md

Claude-specific operational context.

Helps Claude understand:

- project expectations
- development behavior
- how to work safely inside this system

This supports AI consistency.

---

# Data Layer

---

## data/Council_and_Committee_Votes_20260425.csv

Raw imported council voting records.

Source dataset.

Never manually edit for scoring logic.

This is source evidence.

---

## data/GOLD_STANDARD_REVIEW.csv

The truth engine.

Manually reviewed high-signal civic decisions.

Includes:

- domain classification
- vote direction
- confidence level
- vote type
- civic interpretation notes

This file drives public scoring.

Protect this carefully.

Never overwrite casually.

Never bulk-edit blindly.

---

## data/GOLD_STANDARD_BATCH_REVIEW.csv

Temporary audit layer.

Used for:

- staged review
- Claude batch output
- safe audit before merge

Never trust blindly.

Review first.

Merge second.

---

## data/councillor_alignment_scores.json

Generated output from the scoring engine.

This is a result file.

Never manually edit.

Always regenerate from source.

---

# Scripts

---

## scripts/calculate-alignment-score.mjs

Primary scoring engine.

Calculates:

- councillor alignment score
- eligibility threshold checks
- withheld score logic
- public ranking output

This script must remain explainable.

No black-box scoring.

---

# Critical Rules

---

## Never optimize for political persuasion

This is not a campaign tool.

---

## Never hide methodology

Transparency is required.

---

## Never rank low-data councillors publicly

Use:

Score withheld pending sufficient reviewed vote history

---

## Never prioritize UI over truth

Receipts first.

Score second.

Design third.

---

# Build Order

Correct order:

1. Data integrity
2. Scoring defensibility
3. Methodology transparency
4. Frontend score display
5. Visual refinement

Never reverse this.

---

# Final Rule

If a future change makes the system feel easier but less defensible:

Reject it.

Trust is the product.
