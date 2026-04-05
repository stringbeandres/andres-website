---
title: "The 5% Bucket: How I built this site using Claude"
date: "2026-04-02"
description: "A strategy & ops professional runs a one-person sprint to ship a custom website — using AI as the engineering team."
slug: "how-i-built-this"
---

Most of my work is high-stakes, carefully planned, and cross-functional. There's a lot of alignment, a lot of stakeholders, and a lot of execution — north stars, OKRs, roadmaps, and PowerPoint slides.

But I protect a small slice of my time for something different: experiments. Projects with potentially outsized but unclear benefit. Ideas that don't have a business mandate yet. Things worth a few hours to check or validate before you'd ever write a proper plan for them.

I call it the 5% bucket.

<BucketChart />

---

## 1. The 5% Bucket

The 5% bucket has a few qualifying attributes:

- **No present business need** — this isn't a huge needle-mover right now
- **Low cost to explore** — a weekend, not a quarter
- **Asymmetric upside** — if it works, the return is disproportionate to the investment
- **Fast feedback loop** — you ship something real, not a slide deck

The explicit business case for a personal website was thin: I already have a job. I don't need a website to get one. But the implicit case was interesting — a custom site that documents what I build could serve as a live work sample. And if the act of building it was itself part of the story, even better.

That was enough to greenlight it.

---

## 2. The Brief — and Why Claude Code

The constraint was time. I'm not an engineer, I've rarely written a line of code, and I wasn't going to spend weeks learning.

I looked at three approaches:

**Website builders (Squarespace, Webflow):** Fast and polished, but templated. The site would look like a site. That's exactly what I was trying to avoid — a site that doesn't feel custom defeats the purpose.

**Hiring a developer:** Expensive ($5,000–$10,000), slow, and the output wouldn't carry the same signal. The story I wanted to tell requires that *I* built it.

**AI coding tools:** This is the unlock. Tools like GitHub Copilot and Cursor are strong, but they're primarily designed for engineers who already know what they're doing — they autocomplete and suggest, but they don't *drive*. Claude Code is different. It operates more like a senior engineer you can brief. You describe the problem, the constraints, the aesthetic — it generates complete, working files. You make decisions; it executes.

One AI. No standups. No Jira tickets. Let's go.

---

## 3. Sprint Planning as Execution

Like my work as a product owner at Accenture, I started by writing a prioritized list of requirements and presented it to Claude. The difference here was pace — building with Claude is so fast that I could:

1. Run a sprint review after 15 minutes of programming, shortening sprint timelines from weeks to less than a day.
2. Priority mattered less from the perspective of resources. I could ask for 5 varied tasks and Claude runs them simultaneously.

Some of the requirements I brought in:

- Four pages: About, Work, Writing, Contact
- Clean, editorial aesthetic — strong typography, lots of whitespace, one accent color
- Markdown-based content (write posts in plain text, the site renders them automatically)
- Deployed on Vercel, connected to a custom domain

Claude also acted as a design collaborator. I shared a few personal sites I admired as references, and it synthesized a direction that I then refined into the current version.

On the tech stack — Next.js, Tailwind CSS — I deferred to Claude entirely. That's a trust I've built over time, knowing it picks tools with good reason. My job was to evaluate the output, not to second-guess the implementation.

Our rhythm looked like this:

1. Andres sets the next requirement or reviews the current output
2. Claude generates complete files, flags trade-offs, asks clarifying questions
3. Repeat

---

## 4. What Shipped

- A live site at [meetandres.ai](https://meetandres.ai)
- 4 pages, fully responsive on mobile
- Markdown-powered blog and case study system
- Vercel Analytics for tracking (added last — ship first, measure second)
- Deployed to a custom domain in the same session

---

## 5. What Went Wrong

**Technical issues:** Things I know little about. Claude Code caught and fixed each one without losing momentum.

**Stylistic issues:**

- *Orphan text* — a single word left dangling at the bottom of a paragraph, visually abandoned. ← Like this.
- Text blending into the background color on certain elements, and a handful of other small UI fixes caught during mobile QA.

None of these were blockers. All of them were fixable.

---

## 6. Investment

**Velocity:** One session. Approximately 4–5 hours from first command to live URL.

**Cost:**
- Domain (`meetandres.ai` on Namecheap): ~$91/yr — I really wanted the `.ai` TLD
- Hosting (Vercel free tier): $0
- Engineering (Claude Code subscription): already paying for it
- **Total new spend: ~$91**

**What went fast:** Everything after environment setup. Once the scaffold was in place, each page took minutes. Deployment was genuinely instant — push to GitHub, Vercel picks it up automatically.

**What I'd do differently:** Buy the domain before building. I deployed to a Vercel URL first and connected the domain afterward — which works fine, but having the real URL from the start would have felt cleaner.

---

## 7. What's Next — The Backlog

The site is live, but it's not done. The backlog:

- **Write the case studies** — two placeholder projects waiting to become real ones
- **Write more** — marketplace ops insights, tools I've built, things I've learned
- **World Trivia game** — geography is a passion of mine and I love the idea of creating fun around it
- **Test and iterate** — Vercel Analytics will tell me which pages people actually read; that shapes what I write next

The 5% project is shipped. Maybe what I write here opens me to opportunities that I didn't expect.

---

*Built with [Claude Code](https://claude.ai/code), Next.js, Tailwind CSS, and Vercel. Total engineering cost: $0.*
