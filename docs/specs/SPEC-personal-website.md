# Technical Specification: Andres Rabellino Personal Website

**Date:** 2026-04-02  
**Status:** Pending Approval  
**Design doc:** `docs/design/DESIGN-personal-website.md`

---

## How This Build Works

Claude generates complete, ready-to-use files. Andres places them in the project folder. The design appears in the browser. Every meaningful decision gets logged to `docs/build-log/CONVERSATION-LOG.md` for the "How I Built This" post.

---

## Environment

All prerequisites confirmed:
- VS Code (code editor)
- GitHub account (code hosting + Vercel integration)
- Node.js LTS (powers Next.js)

---

## Tech Stack

| Layer | Choice | Why |
|---|---|---|
| Framework | Next.js 14 (App Router) | Industry standard, Vercel-native, file-based routing is easy to understand |
| Styling | Tailwind CSS v3 | Style in-file, no separate CSS management, fast iteration |
| Fonts | next/font/google | Loads fonts optimally, no external requests |
| Content | Markdown files + gray-matter | Write posts in plain text, no CMS needed, lives in the repo |
| Markdown renderer | next-mdx-remote | Renders Markdown in Next.js cleanly |
| Deployment | Vercel (GitHub integration) | Zero-config, instant preview URLs, free tier |
| Domain | .vercel.app initially → custom domain later | Build first, buy domain when ready |

---

## Design System

```
Colors:
  Background:  #F8F7F4  (warm off-white)
  Text:        #111111  (near-black)
  Accent:      #1B2A4A  (deep navy)
  Muted:       #888888  (secondary text, dates, labels)
  Border:      #E5E4E0  (subtle dividers)

Fonts:
  Headings:  Cormorant Garamond (serif, editorial)
  Body:      Inter (sans-serif, clean)
  Mono:      JetBrains Mono (code blocks in blog posts)

Spacing:
  Max content width: 720px, centered
  Section padding: 80px vertical
  Mobile: full-width with 24px horizontal padding

Borders:  Square corners throughout (no border-radius)
Shadows:  None — use border and whitespace instead
```

---

## File Structure

```
andres-website/
├── app/
│   ├── layout.tsx          ← Root layout (Nav + Footer on every page)
│   ├── page.tsx            ← Home / About
│   ├── work/
│   │   ├── page.tsx        ← Work index
│   │   └── [slug]/
│   │       └── page.tsx    ← Individual case study
│   ├── writing/
│   │   ├── page.tsx        ← Writing index
│   │   └── [slug]/
│   │       └── page.tsx    ← Individual post
│   └── contact/
│       └── page.tsx        ← Contact page
│
├── components/
│   ├── Nav.tsx             ← Top navigation
│   ├── Footer.tsx          ← Simple footer
│   ├── CaseStudyCard.tsx   ← Work section card
│   └── PostListItem.tsx    ← Writing section list row
│
├── content/
│   ├── work/
│   │   ├── placeholder-project-1.md
│   │   └── placeholder-project-2.md
│   └── writing/
│       └── how-i-built-this.md  ← Placeholder, filled in after site ships
│
├── lib/
│   └── content.ts          ← Utility functions: read markdown files, parse frontmatter
│
├── public/
│   └── (images, favicon)
│
├── tailwind.config.ts      ← Custom colors, fonts
├── next.config.ts
└── package.json
```

---

## Pages

### `/` — Home / About
- Nav
- Bold positioning statement (large Cormorant Garamond heading)
- 2–3 paragraph About section (first-person, direct)
- Two link blocks: "Work →" and "Writing →"
- Footer

**Placeholder positioning statement:**
> "I work at the intersection of strategy, operations, and building things."

### `/work` — Work Index
- Heading: "Work"
- 2–3 `CaseStudyCard` components (title, one-line summary, outcome metric, "Read →" link)
- Placeholder cards until Andres fills in real content

### `/work/[slug]` — Case Study
- Title
- Metadata row: industry, role, year
- Long-form content rendered from Markdown
- Structure: **Context** → **Problem** → **Approach** → **Outcome**
- Back link: "← Work"

### `/writing` — Writing Index
- Heading: "Writing"
- Chronological list of posts: date · title · one-line description
- One placeholder post: "How I Built This" (to be written after site ships)

### `/writing/[slug]` — Post
- Title
- Date
- Long-form Markdown content
- Back link: "← Writing"

### `/contact` — Contact
- Heading: "Get in touch"
- Short sentence
- Email link
- LinkedIn link
- No form

---

## Markdown Frontmatter Format

**Case studies (`content/work/*.md`):**
```yaml
---
title: "Project Title"
summary: "One-line description of what you did"
outcome: "Key result or metric"
industry: "Marketplace / E-commerce / etc."
year: "2024"
slug: "project-slug"
---
```

**Blog posts (`content/writing/*.md`):**
```yaml
---
title: "Post Title"
date: "2026-04-02"
description: "One-line summary shown in the list"
slug: "post-slug"
---
```

---

## Implementation Steps (Ordered)

### Step 1: Scaffold the project
```bash
npx create-next-app@latest andres-website --typescript --tailwind --app --no-src-dir
cd andres-website
npm install gray-matter next-mdx-remote
```

### Step 2: Configure Tailwind + fonts
- Update `tailwind.config.ts` with custom colors and font families
- Add Google Fonts (Cormorant Garamond + Inter) via `next/font/google` in `app/layout.tsx`

### Step 3: Build shared components
- `Nav.tsx` — logo/name left, links right
- `Footer.tsx` — minimal: name + year + LinkedIn link

### Step 4: Build Home page (`app/page.tsx`)
- Positioning statement
- About paragraphs (placeholder text)
- Links to Work and Writing

### Step 5: Build content utilities (`lib/content.ts`)
- Function to read all markdown files from a directory
- Function to read one markdown file by slug
- Returns parsed frontmatter + body content

### Step 6: Create placeholder content files
- 2 placeholder case studies in `content/work/`
- 1 placeholder blog post in `content/writing/`

### Step 7: Build Work pages
- `app/work/page.tsx` — reads all case studies, renders `CaseStudyCard` list
- `app/work/[slug]/page.tsx` — renders one case study from Markdown

### Step 8: Build Writing pages
- `app/writing/page.tsx` — reads all posts, renders `PostListItem` list
- `app/writing/[slug]/page.tsx` — renders one post from Markdown

### Step 9: Build Contact page
- `app/contact/page.tsx` — email + LinkedIn links

### Step 10: Polish + mobile QA
- Check every page on mobile width
- Verify typography scale looks right
- Check spacing consistency

### Step 11: Deploy to Vercel
- Push to GitHub
- Connect repo to Vercel
- Confirm live URL

---

## Dependencies

```json
{
  "dependencies": {
    "next": "^14",
    "react": "^18",
    "react-dom": "^18",
    "gray-matter": "^4",
    "next-mdx-remote": "^4"
  },
  "devDependencies": {
    "typescript": "^5",
    "@types/node": "^20",
    "@types/react": "^18",
    "tailwindcss": "^3",
    "autoprefixer": "^10",
    "postcss": "^8"
  }
}
```

---

## What's NOT in scope (Phase 1)

- Contact form (just links)
- Dark mode
- Analytics
- Search
- RSS feed
- CMS integration
- Authentication
- Comments

---

## Test Strategy

Manual verification after each step:
- Run `npm run dev` and check in browser at `localhost:3000`
- Check each page renders without errors
- Check mobile layout (browser DevTools → responsive mode)
- Check all internal links work

No automated tests for Phase 1 — manual QA is sufficient for a static personal site.
