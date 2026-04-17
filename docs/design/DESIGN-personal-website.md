# Design Document: Andres Rabellino Personal Website

**Date:** 2026-04-02  
**Status:** Pending Approval

---

## Problem Statement

Andres needs a personal website that functions as a professional placement tool — implicitly communicating that he is a strategy & ops professional in the marketplace space who can (1) tackle ambiguous problems with data and cross-functional execution, and (2) prototype solutions, automate workflows, and work well alongside engineering teams. The site should feel custom and intentional, not template-derived. Crucially, the act of *building* this site from scratch (as a non-engineer) is itself part of the story, and will be documented and shared on LinkedIn.

---

## Proposed Solution

A clean, editorial personal site built with **Next.js + Tailwind CSS**, deployed on **Vercel**. Four sections: About, Work, Writing, Contact.

The site's design should do the talking. The positioning is *implicit* — communicated through the quality of the work shown, the specificity of the writing, and the fact that it was built by hand.

---

## Tech Stack Decision: Next.js + Tailwind CSS

**Why Next.js:**
- Industry-standard React framework. Building with it is itself a signal.
- Made by Vercel — native, zero-config deployment to the hosting platform you've chosen.
- File-based routing is intuitive to learn and document.
- Massive community = tons of beginner resources when you get stuck.
- The learning curve is real but tractable with AI assistance, which is part of the story.

**Why Tailwind CSS:**
- Utility-first CSS — you style directly in HTML/JSX without writing separate style files.
- Eliminates the "blank CSS file" problem for beginners.
- Fast to iterate visually.
- Produces professional results quickly.

**Alternatives considered:**
- *Astro*: Excellent for content-heavy static sites, but smaller community and less name recognition as a signal.
- *Vanilla HTML/CSS*: Maximum craft signal but doesn't scale to a blog well and is harder to maintain.

---

## Site Architecture

```
/                        → Hero + About
/work                    → Work index (2–3 case study cards)
/work/[slug]             → Individual case study deep-dive
/writing                 → Blog/Writing index (list of posts)
/writing/[slug]          → Individual post
/contact                 → Contact page
```

---

## Visual Design Direction

**Aesthetic:** Clean & editorial  
**Inspiration:** Strong typographic hierarchy, intentional whitespace, restrained color palette

**Typography:**
- Headings: A serif font (e.g., *Playfair Display* or *DM Serif Display*) — gives weight and editorial credibility
- Body: *Inter* — clean, professional, highly readable
- Code/monospace snippets in posts: *JetBrains Mono* or *Fira Code*

**Color palette:**
- Background: Off-white (#FAFAF8)
- Text: Near-black (#111111)
- Accent: One deliberate color — leaning toward a muted deep blue (#1D3557) or warm amber (#C8872A)
- No gradients, no hero images, no stock photography

**Layout principles:**
- Max content width ~700–800px, centered
- Heavy use of whitespace — nothing crammed
- No carousels, no animations for animation's sake
- Mobile-first and fully responsive

---

## Page-by-Page Breakdown

### `/` — Home / About
- Bold positioning statement (not "Hi I'm Andres" — something with a point of view)
- Short paragraph: who you are, what you do, what you're about
- Navigation to Work and Writing
- Possibly a small headshot (optional — depends on preference)

Example positioning statement direction:
> "I work at the intersection of strategy, operations, and building things — usually in that order."

### `/work` — Work
- 2–3 case study cards with: title, one-line summary, key metric/outcome
- Each links to a full case study page
- Case studies follow a consistent structure: Context → Problem → Approach → Outcome
- Content built from Andres's rough material

### `/writing` — Writing
- Chronological list of posts, no complex card grid
- First post: **"How I Built This"** — the build log of this very website
- Future posts: marketplace ops insights, tools/automations built

### `/contact` — Contact
- Simple page: email link + LinkedIn URL
- No contact form (unnecessary complexity for now)

---

## Domain Recommendation

**Top pick: `andres.io`**  
Short, clean, memorable. The `.io` extension is tech-adjacent without being try-hard. If your name is distinctive enough to own a single-name domain, own it.

**Backup: `meetandres.com`**  
Most professionally safe. The "meet" framing is warm and intentional.

**On the `.ai` domains:** Tempting, but `.ai` domains are trending heavily right now and may date the site. They also carry an implicit claim (that AI is central to what you do) — only commit to that if it's genuinely part of your story.

---

## The Meta-Strategy: One "How I Built This" Post

One comprehensive blog post in the `/writing` section documenting the entire build — modeled after [joseandgoose.com/writing/how-i-built-this](https://www.joseandgoose.com/writing/how-i-built-this).

**Format:** Recipe-style with sections for tools used, what I was trying to solve, session-by-session narrative (setup → design → content → shipping), and reflective lessons. Real details: actual errors hit, decisions made, time spent.

**The key framing:** Claude generates complete code files; Andres makes design and content decisions, moves files into place, sees results in the browser. AI as co-creator, not replacement.

**Raw material for this post:** A `docs/build-log/CONVERSATION-LOG.md` file captures key moments from every Claude session — decisions made, problems solved, things tried. This feeds the final post without needing to reconstruct it from memory.

**LinkedIn:** One post linking to the published "How I Built This" essay when the site ships.

**Ongoing writing:** After the site is live, the `/writing` section continues with marketplace ops insights and tool walkthroughs.

---

## Key Risks & Mitigations

| Risk | Mitigation |
|------|------------|
| Learning curve overwhelms progress | Build incrementally — ship a live site fast (even with placeholder content), then iterate |
| Content paralysis on Work section | Start with structure; fill one case study first before worrying about the others |
| Over-engineering | Resist adding features. Ship the simplest version that looks good. |
| Domain availability | Check all five options immediately; buy first, build second |

---

## Files / Components to Create

- Next.js project scaffold (`npx create-next-app@latest`)
- `components/`: Nav, Footer, CaseStudyCard, PostList, Layout
- `app/` (App Router): page files for each route
- `content/` or `_posts/`: Markdown files for writing posts
- Tailwind config + custom font setup
- Vercel deployment (connected to GitHub repo)

---

## Decisions Confirmed (Design Phase)

- No headshot for now
- No dark mode
- No analytics initially
- Case studies: full pages (not modals)
- One "How I Built This" blog post, not an ongoing series

## Open Questions (for Spec Phase)

1. Should case studies be full pages or long-form modals? → Full pages (confirmed above)
2. What accent color — deep blue or warm amber? (Decide with reference screenshots)
3. Serif font choice — present 2–3 options for Andres to pick visually
