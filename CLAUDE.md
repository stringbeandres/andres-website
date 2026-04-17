@AGENTS.md

# Andres Personal Website

Personal website built with Next.js 16 + Tailwind CSS v4, deployed on Vercel.

## Commands
- Dev server: `npm run dev` (runs on localhost:3000)
- Build: `npm run build`
- Lint: `npm run lint`

## Stack
- Next.js 16 (App Router) — file-based routing in `/app`
- Tailwind CSS v4 — config in `globals.css` via `@theme {}` (no tailwind.config.ts)
- TypeScript
- Vercel Postgres — used for GeoGame score storage
- gray-matter + next-mdx-remote — Markdown content rendering

## Project Structure
- `/app` — Next.js pages and API routes
- `/components` — shared UI components (Nav, Footer, CaseStudyCard, etc.)
- `/content` — Markdown files for Work case studies and Writing posts
- `/lib` — utilities (content.ts, gameLogic.ts, questions.ts, workData.ts)
- `/docs` — design docs, specs, and build log for this project

## Key Conventions
- Content is Markdown files in `/content/work/` and `/content/writing/`
- Frontmatter delimiters (`---`) must be flush to the left margin (no leading spaces)
- File names use PascalCase for components (Nav.tsx not nav.tsx) — Windows won't catch the difference but TypeScript will
- `params` in dynamic routes is a Promise — must be awaited (Next.js 16 change)

## Design System
- Background: #F8F7F4, Text: #111111, Accent: #1B2A4A
- Fonts: Cormorant Garamond (headings), Inter (body)
- No animations, no gradients, no stock photos
