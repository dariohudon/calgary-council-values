# REVIEW_GUIDELINES.md
# Calgary Council Values — Vote Review Governance

---

## 1. Purpose of the Review System

The review system exists to translate raw public council voting records into a form that can be meaningfully compared against civic priorities.

Raw voting records are public, but they are not inherently interpretable. A motion number, a meeting date, and a Yes or No vote carry no meaning without context. The reviewer's job is to supply that context in a way that is:

- transparent
- reproducible
- defensible
- politically neutral
- traceable back to the original public record

The review system is not editorial. It is not analytical journalism. It is civic interpretation applied through a consistent, documented process.

If a classification cannot be defended to a member of the public, it should not exist in the dataset.

---

## 2. Civic Trust Principles

Every classified row in GOLD_STANDARD_REVIEW.csv is a public assertion.

That assertion has consequences: it affects how councillors are scored, ranked, and compared. It influences what residents see and believe about their elected officials.

This responsibility requires:

**Truth before speed.**
A correctly classified dataset that grows slowly is more valuable than a large dataset with classification errors.

**Consistency before completeness.**
It is better to classify fewer votes correctly than to classify many votes inconsistently.

**Receipts before scores.**
The votes, their contexts, and their classifications must be publicly auditable. A score that cannot be traced to a reviewable receipt should not exist.

**Transparency before convenience.**
When classification is uncertain, the correct response is to document the uncertainty — not to guess, not to default, and not to skip.

---

## 3. What Qualifies for Scoring

A vote qualifies for scoring if ALL of the following are true:

- It is a vote of the full City Council or a committee with meaningful civic authority
- It concerns a substantive civic decision — something that affects city services, residents, public spending, land use, or governance
- It has a clear, identifiable report number or motion reference that can be traced in public records
- It can be reasonably classified as either Support or Oppose without requiring assumptions the reviewer cannot support with evidence
- It is not a duplicate of an already-classified vote (same resolution text, same or near-same date)
- It is not procedural, ceremonial, or purely administrative in nature

If any of these conditions is not met, the vote should be excluded.

---

## 4. What Should Be Excluded

The following categories of votes should be excluded from scoring:

**Procedural motions.**
Motions to refer, to table, to receive for information, to amend the order of business, to call the question, or to extend time. These do not reflect substantive civic judgment.

**Ceremonial or administrative items.**
Appointments, dedications, congratulatory resolutions, and housekeeping items do not represent meaningful civic decisions.

**Committee-level votes that are too low-signal.**
Committee of the Whole and Calgary Planning Commission votes often reflect early deliberation rather than final council positions. Small voter counts (typically fewer than 10 members) may also indicate non-full-council proceedings.

**Duplicate resolutions.**
If the same resolution text appears with a different date — typically from a multi-session budget or policy process — only one date should be scored. Use the composite key (resolution + date) to identify duplicates. Exclude later occurrences unless the later vote represents a materially different decision.

**Sub-motions that are fully covered by a primary motion.**
Amendments and procedural sub-votes on the same report as a scored primary motion should generally be excluded to avoid double-counting the same underlying decision.

**Votes whose direction cannot be responsibly determined.**
If the reviewer cannot identify what a Yes vote means in civic terms — without making assumptions the source record does not support — the vote should be classified as Context Required, not scored.

---

## 5. Single-Domain Classification Philosophy

Every reviewed vote receives exactly one primary domain classification.

This is a deliberate architectural constraint. It exists to:

- prevent subjective multi-weighting of the same vote
- ensure consistent, comparable scoring across councillors
- maintain explainability and auditability

A council decision typically affects multiple areas of city life. Approving a transit budget affects Resource Use, Economy, Wellness, and Community simultaneously. The single-domain rule does not deny this reality — it constrains the scoring system to a single defensible primary classification rather than a subjective multi-factor allocation.

**How to choose the primary domain:**

Ask: what is the dominant direct civic impact of this decision?

A transit fare reduction primarily affects Resource Use (transit infrastructure), even if it also affects economic affordability and personal wellness. Classify by dominant direct impact, not by every downstream effect.

A housing zoning framework primarily affects Community (neighbourhood and housing policy), even if it also affects the Natural Environment or Economy.

When two domains are genuinely close, record the secondary domain in SecondaryDomain for traceability, but commit to a single primary. Document the reasoning in ReviewNotes.

---

## 6. How Ambiguity Is Handled

Ambiguity is expected. Council decisions are complex. The review process must handle ambiguity consistently.

**Domain ambiguity:**
When multiple domains are plausible, choose the primary domain based on the dominant direct impact. Record the alternative in SecondaryDomain. Note the reasoning in ReviewNotes. Do not attempt to split the vote across domains — the architecture does not support this and it would make scores incomparable.

**Directional ambiguity:**
When the direction of a Yes vote cannot be clearly identified, use Context Required. Context Required is not a failure — it is honest acknowledgment that a vote is too context-dependent to simplify responsibly.

Never force a Support or Oppose classification where the direction is genuinely ambiguous. A Context Required classification is more trustworthy than an incorrect directional claim.

**Confidence ambiguity:**
When the reviewer is uncertain about domain, direction, or civic significance, assign Medium confidence. Reserve Low confidence for cases where the classification is defensible but the vote's civic signal is weak.

**Exclusion ambiguity:**
When unsure whether a vote qualifies for scoring, default to exclusion. The threshold for inclusion is: can this vote be publicly defended as a meaningful civic signal with a clear directional interpretation? If the answer is not clearly yes, exclude.

---

## 7. Confidence Assignment Philosophy

Confidence reflects the reviewer's certainty in the classification, not the importance of the vote.

| Level | Meaning |
|---|---|
| High | The classification is clear. The civic domain and direction are obvious from the resolution text and public context. The result would be the same regardless of who reviewed it. |
| Medium | The classification is reasonable but involves some judgment. A thoughtful reviewer might reasonably classify it differently. |
| Low | The classification is defensible but uncertain. The vote's civic signal is weak, ambiguous, or highly context-dependent. |

**Confidence affects score weight**, not the score itself. High confidence votes carry full scoring weight. Medium confidence votes carry 60% weight. Low confidence votes carry 30% weight. This is deliberate — uncertain classifications should influence scores less.

Assign confidence honestly. Do not assign High to a classification that required significant interpretation. Do not assign Low to avoid accountability for a judgment that was actually clear.

---

## 8. Directionality Determination

Directionality classifies what a Yes vote on a given motion represents in civic terms.

**Support** means: a Yes vote advances the civic interest associated with the classified domain.

Example: A motion to fund $14M for a Low-Income Transit Pass — a Yes vote Supports transit equity and public service investment (Resource Use / Wellness).

**Oppose** means: a Yes vote works against the civic interest associated with the classified domain.

Example: A motion to permanently eliminate $6M in Mental Health and Addictions funding — a Yes vote Opposes public health investment (Wellness).

**Context Required** means: the civic direction of a Yes vote cannot be determined without making assumptions the reviewer cannot responsibly make.

Example: A motion to freeze property tax increases — a Yes vote could represent fiscal responsibility (supporting residents) or could represent a cut to public services. Both interpretations are defensible. Use Context Required.

Context Required votes are retained in the dataset for public receipt visibility but do not contribute to alignment scoring.

---

## 9. Why Conservative Classification Matters

An overclassified dataset is more dangerous than a sparse dataset.

If a vote is incorrectly classified:
- scores are wrong
- residents see misleading comparisons
- councillors may be unfairly represented
- the project's credibility is damaged

If a vote is conservatively excluded or held at Context Required:
- scores are more cautious
- no false signal is introduced
- the dataset remains trustworthy
- the vote can be reclassified later when context is clearer

The system is designed to grow conservatively. Score confidence tiers (Verified / Preliminary) explicitly communicate data maturity to the public. A slower, more defensible dataset is correct.

---

## 10. Receipts-First Philosophy

Every vote that enters scoring must be publicly traceable.

The receipt for each vote includes:
- original resolution text
- meeting date
- report identifier
- domain classification
- directional classification
- confidence level
- reviewer notes

These receipts are shown publicly. The reviewer's classification is publicly visible. This is intentional.

If a classification cannot withstand public scrutiny, it should not be made.

Reviewers should write ReviewNotes as if they will be read by a member of the public asking: "Why was this vote classified this way?"

---

## 11. Human Review Responsibility

The review system is intentionally human-driven.

Automated classification of council votes creates black-box scoring that cannot be publicly defended. Machine-learning classification of political meaning is not appropriate for civic accountability infrastructure.

Human reviewers are responsible for:
- reading the full resolution text, not just the header
- tracing the motion to its source report
- understanding what the vote was actually about
- making a defensible classification based on public evidence
- documenting their reasoning in ReviewNotes
- following the exclusion rules consistently

When in doubt, reviewers should ask: "Can I explain this classification to a skeptical member of the public?" If not, revise the classification or use Context Required.

---

## 12. What Reviewers Must Never Do

- Do not classify a vote based on party affiliation, councillor reputation, or media framing
- Do not force a Support or Oppose direction when the motion is genuinely ambiguous
- Do not introduce new VoteType values without following the taxonomy governance process in TAXONOMY_RULES.md
- Do not assign High confidence to a classification that required significant subjective judgment
- Do not delete rows from the review file — use ReviewStatus to mark exclusions explicitly
- Do not change an existing reviewed classification without incrementing ReviewVersion and documenting the reason in ReviewNotes
- Do not classify based on what result "feels right" politically
- Do not skip the exclusion checklist for votes that seem obviously important

---

## 13. Why Transparency Matters More Than Volume

It may seem that a larger dataset is always better. It is not.

A large dataset with inconsistent classification is harder to trust than a small dataset with consistent, documented classification. Every incorrectly classified vote adds noise. Every undocumented exclusion creates invisible gaps. Every undocumented confidence judgment makes the system less auditable.

The public-facing product displays a score confidence tier. That tier communicates to users: here is how much data exists, and how much weight to give this score. The tier system only works if the underlying data is trustworthy.

Volume serves trust. Volume without trust destroys it.

Grow the dataset slowly, correctly, and explicitly.
