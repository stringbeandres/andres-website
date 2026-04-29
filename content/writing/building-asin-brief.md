---
title: "I Built a Research Tool for Amazon Brand Managers"
date: "2026-04-29"
description: "Hours of competitive research compressed into under 3 minutes — built by a seller, for sellers."
slug: "building-asin-brief"
---

I've been selling on Amazon for four years. In that time, I've learned something that isn't obvious from the outside: a lot of what separates serious sellers from casual ones isn't sourcing or logistics. It's information.

Who's selling this product. What their margins look like. Whether their listing has a claim that violates Amazon's policies. Whether the seller on your ASIN is authorized to be there. This information exists — inside Amazon's systems, in public business registries, across the data Amazon makes available to developers. The problem is that pulling it together manually takes hours, and most brand managers don't have hours. Especially when managing portfolios with hundreds of SKUs.

I built a tool to close that gap.

![ASIN Brief — the New Brief inputs form](/asin-brief-inputs.png)

---

## 1. What you'd actually want to know

Before I describe the tool, it's worth being specific about what ASIN and seller research is actually for. The use cases I had in mind:

**Compliance and enforcement**

A competitor's listing contains a prohibited health claim — "clinically proven to reduce inflammation," say, or drug language that Amazon explicitly bans. You know it's there, but you need to document it quickly and flag it to Amazon. Or you've found a seller making a false "Made in USA" claim on a product that ships direct from Shenzhen. These are reportable. But before you file anything, you need specifics: the exact seller, their entity name, ideally their registered business address if you're sending a cease and desist.

None of that should take more than a few minutes to surface.

**Competitive positioning**

Which search queries are actually driving traffic to a competitor's ASIN? What products do customers buy alongside it? Where is their listing weak — thin bullet points, no A+ content, three images instead of seven — and is that a competitive advantage?

This is the research that shapes PPC bids, listing rewrites, and pricing decisions. When it takes two hours per product, the final approach is lacking. When it takes three minutes, strategy becomes the priority.

**Listing hijacking and brand protection**

Unauthorized sellers appearing on your ASIN are one of the most common and damaging problems in Amazon 3P. The questions you need answered fast: Who are they? Where are they located? Are they pricing below your floor, suggesting gray market sourcing or outright counterfeits? Do they have brand registry status, or are they operating without it?

The faster you can characterize a hijacker, the faster you can escalate — whether that's an IP complaint to Amazon, a cease and desist, or a direct message to the seller.

---

## 2. What the tool does

The tool takes three inputs: an ASIN, a seller identifier, and a marketplace. It pulls from Amazon's Selling Partner API and other publicly available data sources, runs everything through Claude, and returns a structured intelligence brief.

The whole process takes under 3 minutes.

The brief covers the product, the seller, the competitive position, the listing quality, available demand signals, and specific flags — things that look wrong, gaps that weaken the listing, anomalies worth investigating. It ends with recommended next steps.

It's not a dashboard. It doesn't track trends or send alerts. It's a fast, opinionated read on the state of an ASIN right now — the kind of thing you want before a client call, before filing a complaint, or before deciding whether a competitor is worth worrying about.

The tool is private. It's not for sale.

---

## 3. How it was built

I started with a written brief — everything the tool needed to do, in plain English. Inputs, outputs, the structure of what the brief should cover, the edge cases. I handed it to Claude Code and we worked through it phase by phase.

The stack is a React frontend streaming results in real time from an Express backend, with all the SP-API calls running in parallel so nothing waits on anything it doesn't have to. Deployed on Vercel (frontend) and Railway (backend).

A few things I didn't expect:

**The API setup is the hard part.** Writing the code took hours. Getting approved for SP-API access, configuring OAuth, connecting a developer account to a real seller account — that paperwork took longer than the build. Amazon's developer process is not designed for people who just want to ship something.

**Streaming makes the wait disappear.** Pulling from multiple data sources takes a few seconds. Generating the brief from Claude takes a few more. Watching the data sources check in one by one, then watching the brief write itself in real time, makes the whole process feel fast. A spinner would have felt broken by comparison.

**Some errors are invisible until deployment.** The code worked perfectly locally. On Railway, it failed twice — once because of a TypeScript version conflict between packages, once because a GitHub permission I hadn't explicitly granted was blocking the deployment. Neither was hard to fix. Both would have been very confusing without the build logs.

---

## 4. Investment

**Time:** One extended session, roughly 6–8 hours from blank repo to live URL.

**Cost:**
- Hosting (Vercel + Railway free tiers): $0
- Claude Code subscription: already paying for it
- SP-API access: free with an approved Amazon developer account
- **Total new spend: $0**

The only ongoing cost is Claude API usage — charged per token, fractions of a cent per brief.

---

## 5. What's next

The current version uses Amazon's own data. Phase 2 adds third-party sources: historical pricing trends, estimated sales velocity, external signals that give a longer view of a product's trajectory -- plus online research sources like LLC lookup.

The bigger unlock is scale. A brand manager with 300 SKUs could run this across an entire catalog and triage the output by risk or opportunity — compliance flags first, then competitive gaps, then growth signals. That's the version that would be useful.

---

*Built with [Claude Code](https://claude.ai/code), React, Express, and TypeScript. Deployed on Vercel and Railway.*
