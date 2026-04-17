# Build Log: Andres Rabellino Personal Website

This file captures key decisions, moments, and details from every Claude session building this site.
It is the raw material for the "How I Built This" blog post.

---

## Session 1 — 2026-04-02: Requirements, Design & Full Build

### What I was trying to do
Build a personal website that functions as a professional placement — implicitly signaling that I'm a strategy & ops professional in the marketplace space who can both (1) tackle ambiguous problems with data and get cross-functional buy-in, and (2) prototype solutions, automate workflows, and speak fluently with engineering teams.

### The key insight from the first conversation
The website doesn't *say* I'm technical — it *demonstrates* it. Building it from scratch (as someone who has never written a line of code before) is itself the proof point. The act of building is the message.

---

### Tools / Ingredients

- **Next.js 16** — the framework that powers the site
- **Tailwind CSS v4** — handles all the styling
- **Vercel** — where the site is hosted (free tier)
- **GitHub** — where the code lives
- **VS Code** — the code editor
- **Node.js** — the runtime that makes it all work
- **gray-matter** — reads the frontmatter from Markdown files
- **next-mdx-remote** — renders Markdown content in Next.js pages
- **Claude** — wrote every line of code; I made every design decision

---

### Decisions made

**Tech stack: Next.js + Tailwind CSS**
Claude recommended this because it's the industry-standard React framework, natively supported by Vercel, and the fact that I built with it is itself a signal worth putting on LinkedIn. Tailwind CSS handles styling by letting you write style attributes directly in the code — no separate style files to manage as a beginner.

**Design direction: Clean & editorial**
- Off-white background `#F8F7F4`, near-black text `#111111`, deep navy accent `#1B2A4A`
- Cormorant Garamond for headings (editorial serif), Inter for body text
- No stock photos, no animations, lots of whitespace
- Reference sites: joseandgoose.com, mershin.org, sarahychen.com ("this but less feminine")

**Pages: About · Work · Writing · Contact**

**Content approach:** Markdown files in a `/content` folder. No CMS. Write in plain text, the site renders it automatically.

**Domain strategy:** Deploy to Vercel URL first, connect custom domain when purchased. Top pick: `andres.io`.

**One "How I Built This" post** — not an ongoing series. Written after the site ships.

---

### What actually happened (session narrative)

**Environment setup (~30 min)**
Started in PowerShell — immediately hit the classic Windows error: `npx.ps1 cannot be loaded because running scripts is disabled on this system`. Switched to Git Bash (comes with Git, which was already installed). First real lesson: web development tools assume a Unix environment, not Windows.

Ran `npx create-next-app@latest andres-website --typescript --tailwind --app --no-src-dir`. The newer version of the tool skipped the interactive questions entirely and just showed a summary of what it chose — slightly disorienting the first time.

Node.js asked for firewall permissions at a coworking space. Learned to allow private networks only, not public.

**Design system (Tailwind v4 surprise)**
Went to edit `tailwind.config.ts` — the file didn't exist. Turns out Next.js 16 ships with Tailwind v4, which moved all configuration into `globals.css` using an `@theme {}` block instead of a JavaScript config file. VS Code flagged `@theme` as an unknown CSS rule — suppressed it with a one-line settings change (`css.lint.unknownAtRules: ignore`).

**Building the pages**
Claude wrote every file. The workflow: Claude generates complete code → I create the file in VS Code → paste it in → save → browser auto-refreshes. No typing code by hand.

Pages built in order: Nav + Footer → Home → content utilities → placeholder Markdown files → Work pages → Writing pages → Contact page.

**Errors hit along the way**
- File casing issue: created `nav.tsx` (lowercase) but the import expected `Nav.tsx` (capital N). Windows treats them as the same file; TypeScript does not. Fixed by renaming via terminal: `mv nav.tsx temp.tsx && mv temp.tsx Nav.tsx`.
- `lib/content.ts` got cut off mid-file — missing closing braces. Build error caught it immediately.
- Markdown frontmatter not parsing: the `---` delimiters had a leading space (` ---` instead of `---`). gray-matter requires them flush to the left margin. Fixed by rewriting the content files directly.
- 404 on case study pages: Next.js 16 changed how URL parameters work — `params` is now a Promise that needs to be awaited. One-line fix per page.

**Deployment**
- Pushed to GitHub via Git Bash
- Connected GitHub to Vercel (through the "Add New Project" flow, not the integrations page)
- Left all Vercel build settings as default — it auto-detects Next.js
- Site live in under 2 minutes

---

### What went fast
- Scaffolding the project (one command)
- Building each page once the pattern was established
- Deployment (Vercel + GitHub = genuinely seamless)
- Design decisions — having clear references (joseandgoose, mershin) made choices easy

### What needed patience
- Windows environment quirks (PowerShell vs Git Bash, firewall, script permissions)
- Tailwind v4's new config approach (no documentation warned me it changed)
- File casing on Windows — a subtle trap that breaks TypeScript
- Markdown frontmatter whitespace — invisible character, non-obvious error

### Time
Approximately one full session. Most of the time was environment setup and debugging — not writing code.

### What's still to do
- Add real email and LinkedIn URL to Contact page and Footer
- Buy and connect custom domain (top pick: `andres.io`)
- Write real case studies in `/content/work/`
- Write the "How I Built This" post after the domain is live

---

*Session 1 complete. Site is live at Vercel URL.*
