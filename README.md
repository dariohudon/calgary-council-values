## Tech Stack

![Next.js](https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![React](https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwindcss&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![PM2](https://img.shields.io/badge/PM2-2B037A?style=for-the-badge&logo=pm2&logoColor=white)
![Nginx](https://img.shields.io/badge/Nginx-009639?style=for-the-badge&logo=nginx&logoColor=white)
![Cloudflare](https://img.shields.io/badge/Cloudflare-F38020?style=for-the-badge&logo=cloudflare&logoColor=white)

# Calgary Council Values

A civic transparency project that visualizes Calgary council voting records through explainable public-interest scoring.

Calgary Council Values helps residents compare elected officials using reviewed public voting records — not campaign promises, speeches, interviews, or political branding.

The platform asks a simple question first:

> What matters most to you?

Residents rank 7 civic domains based on personal priorities. Those priorities are then compared against reviewed public council voting records to visualize alignment between civic values and actual voting behaviour.

---

## Preview

[![Calgary Council Values Preview](https://i.imgur.com/buRe8FV.png)](https://imgur.com/buRe8FV)

---

# Why This Exists

Calgary’s council voting records are public — but public does not always mean understandable.

Most voting data exists across legislative records, meeting minutes, amendments, procedural motions, committee reports, and raw voting exports that are difficult for residents to navigate in practice without significant civic-process familiarity.

This project exists to help organize, classify, and visualize that information in a more understandable and transparent way.

The goal is not to tell people what to believe.

The goal is to help residents better understand how elected officials vote once they are in office.

---

# Core Principles

## Actions over promises

The system evaluates public voting behaviour — not campaign messaging.

## Receipts-first transparency

Every score should eventually connect back to:
- the original motion
- meeting dates
- recorded votes
- domain classifications
- confidence tiers

## Explainable methodology

Scores are intentionally built using visible, inspectable logic rather than black-box political scoring.

## Conservative classification

Only reviewed public votes with meaningful civic impact are included in scoring.

## Independent civic analysis

The project is independent and non-partisan.

---

# Current Methodology

The current scoring framework includes:

- 7 civic domains
- weighted user priorities
- reviewed public voting records
- manual vote classification
- directional vote analysis
- confidence tiers
- receipt-based transparency

The system currently classifies reviewed council decisions into:

1. Community
2. Economy
3. Education
4. Wellness
5. Natural Environment
6. Resource Use
7. Governance

Votes are manually reviewed before entering the scoring system.

Procedural noise, duplicate records, and low-signal administrative motions are generally excluded.

---

# Score Confidence Tiers

Public scores are displayed using confidence tiers based on reviewed matched vote history.

| Tier | Meaning |
|---|---|
| Verified Score | 15+ reviewed matched votes |
| Preliminary Signal | 5–14 reviewed matched votes |
| Insufficient Data | Fewer than 5 reviewed matched votes |

Preliminary signals are intentionally displayed with reduced visual confidence because newer councillors have limited reviewed voting history available so far.

---

# Current Scope & Limitations

The project currently focuses on reviewed Calgary council voting records from the available dataset.

Additional votes continue to be reviewed and classified over time.

Some civic domains currently contain fewer reviewed votes than others. For example, Education-related municipal votes are presently underrepresented due to the limited role municipalities play in education governance compared to provincial governments.

The methodology intentionally prioritizes:
- transparency
- explainability
- auditability
- conservative classification

over aggressive political scoring.

---

# Independence

Calgary Council Values is an independent civic visualization project.

It is not affiliated with:
- The City of Calgary
- Sustainable Calgary
- any political party
- any campaign
- any elected official
- any advocacy organization

The domain framework used in this project is an independent adaptation designed specifically for transparent civic analysis and public accountability visualization.

---

# Technology Stack

- Next.js 16
- React
- TypeScript
- Tailwind CSS
- PM2
- Static JSON scoring pipeline

---

# Local Development

Clone the repository:

\`\`\`bash
git clone https://github.com/dariohudon/calgary-council-values
cd calgary-council-values
\`\`\`

Install dependencies:

\`\`\`bash
npm install
\`\`\`

Run locally:

\`\`\`bash
npm run dev
\`\`\`

---

# Production Deployment

Build production assets:

\`\`\`bash
npm run build
\`\`\`

Restart PM2:

\`\`\`bash
pm2 restart calgary-council-values
pm2 save
\`\`\`

---

# Repository Purpose

This repository documents the ongoing development of a public civic transparency tool focused on explainable council voting analysis.

The project is built around one principle:

> Public accountability should be understandable.
