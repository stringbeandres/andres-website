# Design Document: Geography Trivia Game

**Date:** 2026-04-05  
**Status:** Pending Approval

---

## Problem Statement

Andres wants a geography trivia game hosted at `meetandres.ai/geogame`. It should be fun, fast, and add personality to the site. It also serves as a learning project — specifically to learn SQL through Vercel Postgres.

---

## Proposed Solution

A single-page trivia game built in Next.js with a Vercel Postgres database for score storage. No user accounts — fully anonymous. The game presents questions with 4 multiple choice answers, a 30-second countdown timer, and tracks a running score. When time runs out, the player sees their score compared to all previously saved scores.

---

## Question Types

| Given | Player answers |
|---|---|
| US State | Capital city |
| Country | Capital city |
| Country | Continent |

Questions are randomly drawn from a mix of all three types. Wrong answers are generated from the same pool (e.g. other capitals, other continents).

---

## Game Flow

1. **Landing screen** — brief description, "Start Game" button
2. **Game screen** — question displayed, 4 answer buttons, 30-second countdown timer, running score (+1 / −1)
3. **End screen** — final score, comparison to average of all saved scores, "Play Again" button

---

## Scoring & Database

- +1 for correct answer, −1 for wrong answer
- Score saved to Vercel Postgres at end of game (anonymous — no name)
- End screen shows: your score, average score across all games
- Schema:
```sql
CREATE TABLE scores (
  id SERIAL PRIMARY KEY,
  score INTEGER NOT NULL,
  played_at TIMESTAMP DEFAULT NOW()
);
```

---

## Nav Entry Point

A distinct game button in the Nav, visually separated from the main links (Work · Writing · Contact). Not a plain text link — a small outlined pill button in navy, sitting to the right of the nav links. On hover it fills with navy.

```
Andres Rabellino    Work  Writing  Contact  [▶ GeoGame]
```

---

## Visual Design

- Consistent with the site: off-white background, near-black text, navy accent
- Clean, minimal — no animations for animation's sake
- Timer displayed as a countdown number (large, prominent)
- Score displayed in the corner throughout
- Answer buttons: bordered rectangles, highlight green on correct / red on wrong before advancing

---

## Risks & Mitigations

| Risk | Mitigation |
|---|---|
| Vercel Postgres setup complexity | Well-documented — follow Vercel's official guide |
| Question data management | Store questions as a static TypeScript array — no DB needed for questions |
| Timer edge cases (answer on last second) | Disable buttons when timer hits 0 |

---

## Out of Scope (Phase 1)

- Leaderboard with names
- Difficulty levels
- Question categories toggle
- Mobile-optimized timer animations
