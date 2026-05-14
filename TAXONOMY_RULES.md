# TAXONOMY_RULES.md
# Calgary Council Values — VoteType Taxonomy Governance

---

## 1. Canonical VoteType List

Only the following VoteType values are supported by the scoring engine.
All other values fall back silently to weight 0.5 — a known integrity risk.

| VoteType | Score Weight | Description |
|---|---|---|
| Substantive | 1.0 | Policy decisions with direct civic impact not better described by a more specific canonical type |
| Budget / Finance | 1.0 | Budget approvals, financial allocations, reserve fund draws, funding programs |
| Land Use | 0.9 | Redesignation bylaws, area redevelopment plans, land use amendments |
| Governance | 0.7 | Ethics policies, procedural governance reform, accountability mechanisms, transparency rules |
| Committee / Internal | 0.4 | Formal committee process votes that carry civic weight but are below full council level |
| Administrative | 0.2 | Operational approvals, contract awards, routine administrative decisions |
| Procedural | 0.0 | Points of order, referrals, tabling, calling the question, time extensions |

---

## 2. Meaning of Each VoteType

### Substantive
Used for policy votes with clear, direct civic impact that don't fall cleanly into Budget/Finance, Land Use, or Governance.

Examples:
- Climate accountability frameworks
- Transit safety strategy approvals
- Public health program direction
- Housing policy frameworks (use instead of "Housing Policy")
- Public safety strategy approvals (use instead of "Public Safety")
- Climate policy decisions (use instead of "Climate Policy")

### Budget / Finance
Used for votes about public money — where it is allocated, how much, and from which fund.

Examples:
- Annual service plans and budgets
- Reserve fund draws with specific allocations
- Capital budget approvals
- Tax rate approvals
- Revenue allocation programs

Use instead of: "Budget Approval," "Tax Policy," "Budget Review"

### Land Use
Used for votes that change or establish how land can be used, including redesignation bylaws and area plans.

Examples:
- Bylaw redesignations (RES to COM, S-FUD to DC, etc.)
- Area redevelopment plan amendments
- Municipal development plan amendments
- Land use bylaw changes
- Growth-related planning decisions

Use instead of: "Land Use Policy," "Growth Management" (when the dominant impact is physical land use)

### Governance
Used for votes about how the institution of council governs itself or oversees administration — not what the city does, but how.

Examples:
- Ethics and conflict of interest policies
- Business case review processes
- Accountability and reporting requirements
- Transparency and oversight mechanisms
- Development approval governance reform

Use instead of: "Growth Management" (when the dominant impact is governance process, not land use)

### Committee / Internal
Used for committee-level votes that carry civic weight but are not full council decisions.

Apply sparingly. Most committee votes should be excluded entirely. Use this only for meaningful committee-level decisions that are worth retaining in the dataset.

### Administrative
Used for votes about how the city manages its own operations, contracts, or logistics — not civic policy.

Examples:
- Contract awards within approved budgets
- Routine bylaw housekeeping
- Administrative report approvals

### Procedural
Used for votes with zero substantive civic content.

Examples:
- Motions to extend time
- Motions to refer to committee
- Motions to call the question
- Receiving items for information only
- Points of order

Procedural votes have weight 0.0 and contribute nothing to scoring. In most cases, procedural votes should be excluded entirely rather than classified.

---

## 3. Current Known Fallback Values (Active Integrity Risk)

The following VoteType values are currently in use in GOLD_STANDARD_REVIEW.csv but are NOT in VOTE_TYPE_WEIGHTS. They fall back silently to weight 0.5.

| Current Value | Count | Canonical Replacement | Weight Change |
|---|---|---|---|
| Tax Policy | 6 | Budget / Finance | 0.5 → 1.0 |
| Growth Management | 4 | Land Use OR Governance | 0.5 → 0.9 or 0.7 |
| Public Safety | 4 | Substantive | 0.5 → 1.0 |
| Housing Policy | 2 | Substantive | 0.5 → 1.0 |
| Land Use Policy | 2 | Land Use | 0.5 → 0.9 |
| Climate Policy | 2 | Substantive | 0.5 → 1.0 |
| Budget Approval | 1 | Budget / Finance | 0.5 → 1.0 |

**These must be normalized in a dedicated taxonomy sprint.**

Normalizing these values will change scores for 21 rows and require a full scoring diff audit before deployment.

---

## 4. Rules for Introducing New VoteType Values

New VoteType values MUST NOT be added without completing all of the following:

1. **Document the gap.** Explain why no existing canonical type fits the vote class.
2. **Propose the weight.** Specify what weight the new type should carry and why.
3. **Update VOTE_TYPE_WEIGHTS in the scoring engine** at the same time the first row using the new type is added.
4. **Run a full scoring diff** to identify which councillors' scores change and by how much.
5. **Document the change** in a taxonomy update entry (date, new type, weight, rationale, score impact).
6. **Review the scoring diff** before deploying to production. Confirm the change is intentional.

Do not introduce new VoteType values as a shortcut for domain nuance. Domain nuance belongs in PrimaryDomain and ReviewNotes — not in VoteType proliferation.

---

## 5. Score-Change Governance

VoteType changes are score-changing events.

Any change to:
- a row's VoteType value
- the VOTE_TYPE_WEIGHTS mapping
- the addition of a new canonical type

...will change alignment scores for one or more councillors.

These changes must be:
- deliberate
- documented
- reviewed before deployment
- announced in the scoring engine output (e.g. via the validation warning system)

Do not make taxonomy changes casually. Do not make them as part of a larger feature sprint. Taxonomy changes should be isolated, audited, and explicitly communicated.

---

## 6. Why Silent Fallbacks Are Dangerous

The scoring engine currently applies `VOTE_TYPE_WEIGHTS[row.VoteType] || 0.5` when a VoteType is not found.

This means:
- A reviewer adds a new VoteType value (e.g. "Housing Policy")
- The engine silently applies weight 0.5 instead of the intended weight
- Scores are wrong — but there is no error, no warning, no visibility into what happened
- The error compounds with every new row using the same VoteType

The validation warning system added in Phase 3E now surfaces these fallbacks to stderr on each scoring run. But the fix requires canonical normalization — not just detection.

Silent fallbacks are not a minor issue. They represent undocumented, unintended weighting of civic decisions.

---

## 7. VoteType vs. Domain — The Distinction

These two classification fields serve different purposes.

| Field | Purpose | Determines |
|---|---|---|
| PrimaryDomain | What area of civic life is most affected | Domain weight applied in scoring |
| VoteType | What kind of decision is this | Vote type weight applied in scoring |

A vote can be:
- Domain: Wellness / VoteType: Budget / Finance → funding decision about health programs
- Domain: Resource Use / VoteType: Substantive → policy direction about transit infrastructure
- Domain: Governance / VoteType: Governance → ethics rule change

VoteType does NOT tell you what the vote is about. Domain does. VoteType tells you what form the decision takes. Both contribute independently to the final score weight.

---

## 8. Taxonomy Stability Philosophy

The canonical VoteType list should be stable.

Stability means: a reviewer in 2027 should be able to apply the same taxonomy to new votes as a reviewer in 2025. Consistency over time is what makes scores comparable across terms of council.

Taxonomy growth is permitted when:
- a genuinely new category of decision cannot be mapped to any existing type
- the category will recur across multiple votes and multiple terms
- the weight rationale is documented and defensible

Taxonomy growth is NOT permitted when:
- a reviewer wants more granularity than the current taxonomy provides
- a vote is politically important and the reviewer wants it to carry more weight
- the existing taxonomy fits but the reviewer prefers a different label

When in doubt: use the canonical type that fits most closely, document the mapping in ReviewNotes, and flag the taxonomy question for future governance review.
