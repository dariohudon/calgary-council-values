# Calgary Council Values Matcher

A civic transparency platform that helps Calgarians compare elected officials by actual voting records instead of campaign promises.

This project uses Calgary City Council voting records and the 7 sustainability domains from Sustainable Calgary’s *State of Our City* framework to show which councillors align most closely with a user's values.

## Core Idea

Users rank the following 7 sustainability domains based on personal importance:

1. Economy
2. Education
3. Natural Environment
4. Resource Use
5. Wellness
6. Governance
7. Community

The platform then compares those priorities against council voting behavior to answer one question:

**Which politician aligns most closely with your values through their voting record?**

## Philosophy

This project is built around one principle:

**Actions over promises.**

No campaign slogans.
No political spin.
Just public voting records and transparent civic accountability.

## Current Stack

* Next.js 16
* React
* TypeScript
* Tailwind CSS
* PM2 (production process management)
* Hosted on Ubuntu server

## Preview

[![Calgary Council Values Matcher Preview](https://i.imgur.com/buRe8FV.png)](https://imgur.com/buRe8FV)

## Current Features (V1)

* Hero landing page
* Ranked values interface
* Drag-to-prioritize domain cards
* Step-based user flow
* Results section with councillor alignment preview
* PM2 production deployment

## Planned Features

### Phase 2

* Real councillor dataset (full council roster)
* Dynamic scoring based on ranked priorities
* Domain-based alignment engine
* Individual councillor vote breakdowns

### Phase 3

* Vote receipt drawer (“show me the votes”)
* Full council voting record integration
* Domain classification engine for council motions
* Better transparency reporting

### Phase 4

* Ward map + councillor profiles
* Shareable values profile
* Public-facing production deployment
* Open civic transparency dashboard

## Project Structure

```text
app/
  page.tsx          Main homepage and values matcher UI
public/
README.md
package.json
```

## Local Development

```bash
cd /var/www/calgary-council-values
npm install
npm run dev
```

App runs locally at:

```text
http://localhost:3000
```

## Production Deployment

Build production:

```bash
npm run build
```

Restart PM2:

```bash
pm2 restart calgary-council-values
pm2 save
```

## Repository Purpose

This is not a campaign tool.

It is a public civic utility designed to help residents make clearer decisions using public information and transparent governance data.

The goal is simple:

**Help people vote with evidence.**
