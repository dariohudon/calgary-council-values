# Calgary Council Values Matcher — Design Standard

## Core Design Principle

The interface must feel civic, calm, transparent, and evidence-led.

This is not a campaign website.
This is not political theatre.
This is civic infrastructure.

Design must support:

- clarity
- trust
- explainability
- calm confidence
- public accountability

## Visual Tone

Use:

- dark civic background
- restrained Calgary red accents
- generous spacing
- clean typography
- quiet hierarchy
- subtle borders
- plain-language labels

Avoid:

- hype
- aggressive political colours
- flashy animation
- overly bold navigation
- campaign-style urgency
- gamified winner/loser framing

## Header Rules

The site header is global and lives in:

`components/SiteHeader.tsx`

Do not create separate page-level menus.

Header title:

- uppercase
- letter-spaced
- Calgary red
- not bold
- aligned to main page content width

Navigation:

- not bold
- small
- calm grey
- white on hover
- shared across all pages

## Layout Rules

Use consistent page width:

`max-w-7xl px-8`

for main landing-page sections and global header alignment.

Use narrower widths only for article-style pages when readability matters.

## Language Rules

Use:

- “alignment”
- “reviewed votes”
- “public voting record”
- “methodology”
- “receipts”
- “score withheld pending sufficient reviewed vote history”

Avoid:

- “best councillor”
- “worst councillor”
- “good politician”
- “bad politician”
- “winner”
- “loser”

## Trust Rules

Every score must eventually be explainable.

Every score must connect back to:

- vote text
- date
- councillor vote
- domain classification
- confidence level
- methodology version

The design must never make the score feel more certain than the data supports.
