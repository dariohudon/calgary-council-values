cd /var/www/calgary-council-values

cat > SCORING_MODEL.md <<'EOF'
# Calgary Council Values Matcher — Scoring Model

## Purpose

This document defines how councillor alignment scores are calculated.

The scoring model must be:

- transparent
- explainable
- auditable
- publicly defensible
- based on real voting records
- tied to the 7 sustainability domains

This model must not become a black-box political opinion engine.

The goal is not to decide who is “good” or “bad.”

The goal is to show which councillors voted most similarly to a user’s stated civic priorities.

---

# Methodological Foundation

The scoring model is based on:

## Multi-Criteria Decision Analysis (MCDA)

MCDA is commonly used when decisions involve multiple criteria that cannot be reduced to one simple measure. It is used in policy evaluation, sustainability assessment, planning, and public-sector decision support.

## Weighted Sum Model (WSM)

The Weighted Sum Model is one of the simplest and most transparent MCDA methods.

It calculates an overall score by multiplying each criterion score by its assigned weight and summing the results.

In this project:

- the criteria are the 7 sustainability domains
- the user provides the domain priority weights
- councillor performance is calculated from classified council votes
- every score must be traceable to actual votes

This gives us a standard, explainable basis rather than an invented political formula.

---

# External Methodology References

This model should be publicly described as being informed by:

- Multi-Criteria Decision Analysis (MCDA)
- Weighted Sum Model (WSM)
- composite indicator methodology
- sustainability assessment frameworks
- public voting-record transparency

Useful references:

- OECD/JRC Handbook on Constructing Composite Indicators
- UK Government Analysis Function — Introductory Guide to MCDA
- academic literature on MCDA for sustainability assessment

---

# Core Formula

For each councillor:

```text
Alignment Score =
Σ (Domain Weight × Vote Alignment Score × Confidence Weight × Vote Type Weight)
/
Σ (Eligible Domain Weight × Confidence Weight × Vote Type Weight)
× 100

EOF
