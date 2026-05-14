# REVIEW_CHECKLIST.md
# Calgary Council Values — Reviewer Operational Checklist

Use this checklist before marking any row as ReviewStatus: reviewed.
Complete every step. Do not skip steps for votes that seem "obvious."

---

## STEP 1 — Source Verification

- [ ] Locate the source record. Can you find the original meeting agenda, minutes, or report for this vote?
- [ ] Confirm the report ID. Does the SourceReportID extracted from the resolution text match the public record?
- [ ] Confirm the meeting date. Does the MeetingDate in the row match the date in the public record?
- [ ] Confirm the vote split. Do YesCount and NoCount match the public record?
- [ ] Confirm the result. Does Result (MOTION CARRIED / MOTION DEFEATED) match the public record?

If any of these do not match: stop, investigate, and correct before proceeding.

---

## STEP 2 — Duplicate Detection

- [ ] Search the existing GOLD_STANDARD_REVIEW.csv for the same SourceReportID.
      Are there other rows with the same report number?
- [ ] If yes: does the new row have identical or near-identical resolution text?
      If identical: exclude as duplicate. Do not add.
- [ ] Check the composite key: normalize(Resolution) + '|' + MeetingDate.
      Does this key already exist in the review file?
      If yes: this is a confirmed duplicate. Exclude.
- [ ] If the report ID appears in multiple rows with genuinely different resolution text
      (e.g. an amendment and a primary motion): document both with clear ReviewNotes.

---

## STEP 3 — Exclusion Evaluation

Ask these questions in order. If the answer to any is YES, exclude the vote.

- [ ] Is this a procedural motion? (referral, tabling, receiving for information, extending time, calling the question)
- [ ] Is this a ceremonial or administrative item? (appointment, dedication, housekeeping)
- [ ] Is this a committee-level vote below full council authority? (CPC prefix, vote count ≤ 8 members)
- [ ] Is the resolution a sub-motion or amendment on a report that is already scored?
- [ ] Is this a near-duplicate of an existing scored row on a different meeting date?
- [ ] Does this motion lack a traceable public record?

If excluding: set ReviewStatus = excluded and record the specific reason in ReviewNotes.

---

## STEP 4 — Domain Selection

- [ ] Read the full resolution text. Not just the first line — the full text.
- [ ] Identify the dominant direct civic impact.
      What is this motion primarily about? Housing? Transit? Tax rates? Governance?
- [ ] Assign PrimaryDomain from the canonical seven:
      Community, Economy, Education, Wellness, Natural Environment, Resource Use, Governance
- [ ] Consider whether any other domain is a strong competitor:
      - If one domain is clearly dominant: assign it as PrimaryDomain.
      - If two domains are close: assign the stronger as PrimaryDomain, the other as SecondaryDomain.
      - Document your reasoning in ReviewNotes.
- [ ] Is this domain assignment one that a different reviewer would likely reach independently?
      If not: lower your confidence level and document the reasoning.

Do NOT assign a domain based on who voted for or against the motion.

---

## STEP 5 — VoteType Assignment

- [ ] Assign VoteType from the canonical list in TAXONOMY_RULES.md.
      Do NOT introduce new VoteType values without following the taxonomy governance process.
- [ ] Confirm the VoteType matches the weight you intend. Refer to TAXONOMY_RULES.md for weight table.
- [ ] If no canonical VoteType fits cleanly: use the closest canonical type and note the mapping in ReviewNotes.
      Do not create a new VoteType to achieve a specific weight outcome.

---

## STEP 6 — Directionality Determination

- [ ] Ask: what does a Yes vote on this motion mean in civic terms?
- [ ] Can you state the direction clearly without making assumptions the resolution text does not support?
      If yes: assign Support or Oppose.
      If no: assign Context Required.
- [ ] Test the opposite: if a councillor you disagreed with politically voted Yes, would you still
      classify the direction the same way? If no, your classification may be politically influenced.
- [ ] For Oppose direction: confirm that a Yes vote works AGAINST the domain interest — not merely
      that it reduces spending or rejects something. The direction must be defensible from the text.

---

## STEP 7 — Confidence Assignment

- [ ] High: Would any reasonable reviewer classify this identically? Domain and direction are both clear.
- [ ] Medium: The classification is sound but required judgment. Another reviewer might reasonably differ.
- [ ] Low: The classification is defensible but the civic signal is weak or context-dependent.
- [ ] Do not inflate confidence. High is reserved for votes where the classification is not a judgment call.
- [ ] If confidence is Medium or Low: explain why in ReviewNotes.

---

## STEP 8 — Notes Quality Check

- [ ] Does the Notes field describe what the vote was about in plain language?
- [ ] Does it avoid political framing? (Do not use: "progressive," "conservative," "left," "right")
- [ ] Does it include the vote split if the split is informative? (e.g., "defeated 4-11", "7-7 tied")
- [ ] Does it explain the civic context a future reviewer would need to understand the classification?
- [ ] Is it short enough to display as a public receipt without overwhelming a user?
      Target: 1–2 sentences. Maximum: 3 sentences.

---

## STEP 9 — ReviewNotes

- [ ] Does ReviewNotes document any classification judgment calls?
- [ ] If domain was ambiguous: does ReviewNotes explain why PrimaryDomain was chosen over alternatives?
- [ ] If confidence is Medium or Low: does ReviewNotes explain the uncertainty?
- [ ] If direction required significant interpretation: does ReviewNotes explain the reasoning?
- [ ] For Context Required: does ReviewNotes explain what context would be needed and why direction cannot be assigned?

---

## STEP 10 — Final Checklist

Before setting ReviewStatus = reviewed:

- [ ] All five core fields are complete: PrimaryDomain, VoteType, DirectionOfYes, Confidence, Notes
- [ ] SourceReportID is populated
- [ ] ReviewNotes documents any judgment calls
- [ ] ReviewedBy is set to your identifier
- [ ] ReviewedAt is set to today's date (YYYY-MM-DD format)
- [ ] The row does not duplicate an existing reviewed row
- [ ] The classification can be explained publicly without political framing
- [ ] The scoring engine will not silently fall back on this row (VoteType is canonical)

If all boxes are checked: set ReviewStatus = reviewed.

---

## REFERENCE — Exclusion Status Values

| Status | When to use |
|---|---|
| `reviewed` | Classification complete and confirmed |
| `excluded` | Deliberately excluded; reason in ReviewNotes |
| `queued` | Not yet reviewed; identified for future review |
| `contested` | Classification flagged as disputed; frozen pending resolution |

Do not leave rows with blank ReviewStatus.
