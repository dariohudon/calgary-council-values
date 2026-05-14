# CLASSIFICATION_EXAMPLES.md
# Calgary Council Values — Canonical Classification Examples

These examples are drawn from actual reviewed votes in GOLD_STANDARD_REVIEW.csv.
Use them to calibrate classification judgment and understand how ambiguity is handled.

---

## HOW TO READ THESE EXAMPLES

Each example shows:
- What the vote was about
- Why the domain was chosen over alternatives
- Why the direction was assigned
- Why the confidence was set
- What was documented in notes

These are not rules. They are demonstrations of the thinking process that produces defensible, consistent classification.

---

## EXAMPLE 1 — High Confidence, Budget / Finance, Support
**Report:** C2022-1051 | **Date:** 2022/11/25

**What it was:** Council approved the 2023–2026 City Service Plans and Budgets, a major omnibus budget including transit funding, housing capital, cultural organizations, mental health strategy, and infrastructure.

**Domain assigned:** Economy (Primary), Community (Secondary)

**Why Economy:** The dominant decision is a multi-year budget allocation — how the city spends public money across all services. The financial governance of city priorities is the primary civic act, even though many individual line items touch other domains.

**Why not Community or Wellness:** The budget contains Community and Wellness investments, but this vote is fundamentally about fiscal direction. If the primary motion were specifically about mental health funding in isolation, Wellness would be primary.

**Direction:** Support — a Yes vote approves the budget, advancing the civic interest of funding city services.

**Confidence:** High — the civic direction of a budget adoption vote is unambiguous. Yes = adopted. No = rejected.

**Notes:** "Major city budget including transit, services, housing, and infrastructure funding"

---

## EXAMPLE 2 — High Confidence, Substantive, Support (Climate)
**Report:** EC2021-1698 | **Date:** 2021/12/20

**What it was:** Council directed administration to develop a framework to measure and report on the Climate Strategy and achieve net-zero emissions — a climate accountability motion.

**Domain assigned:** Natural Environment (Primary), Governance (Secondary)

**Why Natural Environment:** The motion is explicitly about climate accountability — net-zero emissions, climate strategy measurement. This is a direct environmental governance decision.

**Why not Governance:** Governance is secondary because the mechanism is a governance accountability framework, but the subject is environmental. Subject outweighs mechanism.

**VoteType assigned:** Climate Policy → should be Substantive (taxonomy correction pending)

**Direction:** Support — a Yes vote directs climate accountability work, advancing environmental stewardship.

**Confidence:** High — the motion's civic direction is explicit.

**Notes:** "Net-zero emissions and climate accountability framework"

---

## EXAMPLE 3 — High Confidence, Budget / Finance, Oppose
**Report:** C2023-1148 | **Date:** 2023/11/07

**What it was:** An amendment motion to permanently defund the $6M Mental Health and Addictions Strategy. The motion was defeated 4–11, meaning 11 councillors voted No (opposing the elimination of the program).

**Domain assigned:** Wellness (Primary)

**Why Oppose direction:** A Yes vote on this amendment would eliminate mental health funding — working against the civic interest in public health investment. A No vote (the majority outcome) preserved the funding.

**Why not Context Required:** This is not ambiguous. Eliminating a dedicated mental health program has a clear, defensible directional interpretation within the Wellness domain.

**Confidence:** High — the civic stakes and direction are explicit in the motion text.

**Notes:** "Amendment to permanently defund $6M Mental Health and Addictions Strategy; defeated 4-11; identifies 4 councillors who voted to eliminate mental health investment"

**Important:** The vote split (4-11) is informative and documented. The 4 councillors who voted Yes are the minority and voted to eliminate the program.

---

## EXAMPLE 4 — High Confidence, Budget / Finance, Support (Transit)
**Report:** C2024-0760 | **Date:** 2024/07/30

**What it was:** A motion to make the Low-Income Transit Pass permanent at a $14M base operating budget. The motion tied 7–7, meaning it was defeated by tie.

**Domain assigned:** Wellness (Primary), Resource Use (Secondary)

**Why Wellness over Resource Use:** While transit is operationally a Resource Use matter, this specific vote is about transit equity and affordability for low-income residents — a Wellness/accessibility question. The "$14M to maintain affordable transit access" framing is predominantly about resident wellbeing.

**Why Resource Use as Secondary:** Transit infrastructure and operations are the mechanism, making Resource Use a strong secondary domain.

**Direction:** Support — a Yes vote would have made affordable transit access permanent.

**Confidence:** High — the civic direction of extending a subsidized program is clear.

**Notes:** "Motion to make Low-Income Transit Pass permanent at $14M base operating budget; tied 7-7 (defeated); perfect ideological split on transit equity and affordability"

---

## EXAMPLE 5 — Medium Confidence, Multi-Domain Ambiguity
**Report:** IP2022-0340 | **Date:** 2022/05/10 (two separate classified rows)

**What it was:** A complex land use motion that involved both abandoning a proposed Municipal Development Plan bylaw and separately approving redesignation bylaws for new development.

**Why two rows exist:** The same report generated two meaningfully different substantive votes on the same date. The first motion (abandoning the MDP amendment) is about environmental land stewardship. The second (approving redesignation) is about community development planning.

**Row 1:**
- Domain: Natural Environment (Primary), Community (Secondary)
- Direction: Oppose — voting Yes to abandon the MDP amendment works against holistic land use planning
- Confidence: Medium — the direction requires interpretation of what "abandoning" the bylaw means civically

**Row 2:**
- Domain: Community (Primary), Natural Environment (Secondary)
- Direction: Support — voting Yes to approve the redesignation advances community development
- Confidence: Medium — the motion is complex; reasonable reviewers might weight Community vs. Natural Environment differently

**Lesson:** When a single report contains genuinely distinct votes with different civic directions, both may be classified — but only if they can each be independently defended. Document the relationship in ReviewNotes.

---

## EXAMPLE 6 — Context Required (Tax Policy)
**Report:** C2025-0901 | **Date:** 2025/12/03

**What it was:** A motion to freeze the proposed property tax increase at 0% for 2026.

**Domain assigned:** Economy

**Why Context Required:** A Yes vote on a property tax freeze could represent:
- Fiscal responsibility and affordability protection for residents (Support direction for affordability)
- A cut to city service funding (Oppose direction for public services)

Both interpretations are equally defensible from the resolution text alone. The civic direction depends on which value the reviewer prioritizes — which is exactly what the scoring system is supposed to leave to the user, not impose through classification.

**Why not forced Support or Oppose:** Forcing a direction would embed the reviewer's political judgment into the scoring system. Tax policy is among the most contested areas of civic values precisely because the trade-offs are real and reasonable people disagree.

**Confidence note:** Context Required rows do not receive Confidence levels and do not contribute to scoring. They remain visible as public receipts.

**Notes:** "Tax burden balancing requires context between affordability and service delivery"

---

## EXAMPLE 7 — Context Required (Spending Restraint)
**Report:** EC2025-0774 | **Date:** 2025/09/16

**What it was:** A motion regarding spending restraint, balancing fiscal discipline against service delivery.

**Why Context Required:** This is the classic tension in municipal finance. Fiscal restraint can mean responsible stewardship or harmful cuts, depending on which services are affected and what one values. The resolution text does not provide enough specificity to determine civic direction without the reviewer making a political assumption.

**Lesson:** Budget motions are not automatically Support or Oppose. If the motion is about financial discipline in the abstract rather than specific funding decisions, Context Required is often correct.

---

## EXAMPLE 8 — Excluded: Committee Vote
**Report:** CPC2022-0338 | **Date:** 2022/03/24

**Why excluded:** CPC (Calgary Planning Commission / Committee) prefix indicates a committee-level vote rather than a full council decision. Committee votes are excluded from scoring to ensure that only full council positions are reflected in alignment scores.

**ReviewNotes:** "Committee-level vote (CPC prefix or low voter count); below full council threshold for public scoring."

**Lesson:** Do not attempt to classify committee votes. Check for CPC prefix and voter count before proceeding with classification.

---

## EXAMPLE 9 — Excluded: Near-Duplicate
**Report:** C2023-1148 | **Date:** 2023/11/22 (unclassified) vs. **Date:** 2023/11/07 (classified)

**Why excluded:** The same resolution text appeared on both November 7 and November 22. The November 7 vote is classified (Domain: Wellness, Direction: Oppose, Confidence: High). The November 22 occurrence of the same resolution text is excluded as a near-duplicate.

**Why this matters:** Including both would double-count this vote in every councillor's score. The composite key (normalize(resolution) + '|' + MeetingDate) is designed to prevent this — but the exclusion must still be explicitly documented.

**ReviewNotes:** "Duplicate or near-duplicate of classified row (Domain:Wellness Date:2023/11/07). Same resolution text on different date; excluded to prevent double-scoring."

---

## EXAMPLE 10 — Excluded: Amendment on Already-Scored Report
**Report:** C2022-1051 | **Date:** 2022/11/25 (multiple amendment rows)

**Why excluded:** Several amendment sub-motions on Report C2022-1051 appear in the file alongside the primary budget adoption motion. These amendments are procedural sub-votes within the same budget process — the substantive civic decision is captured by the primary motion.

**Lesson:** When a report generates both a primary substantive motion and several amendments or sub-votes, score the primary motion only. Amendments that represent genuinely distinct civic decisions (with their own domain and direction) may be considered separately, but only if they can be independently defended as having civic signal value beyond the primary vote.

---

## GUIDE — Common Domain Ambiguity Resolutions

| Motion type | Common tension | Resolution |
|---|---|---|
| Transit funding | Resource Use vs. Wellness | Operational transit → Resource Use; transit equity/access → Wellness |
| Housing investment | Community vs. Wellness | Zoning/supply → Community; affordability supports/housing stability → Wellness |
| Budget adoption | Economy vs. everything | Use Economy for budget governance; use specific domain only for isolated funding items |
| Climate policy | Natural Environment vs. Governance | Use Natural Environment; governance mechanism is secondary |
| Growth management | Land Use vs. Governance | Physical land use → Land Use; oversight/process reform → Governance |
| Tax motions | Economy | Use Context Required when civic direction is genuinely contested |
