# Technical Specification: Geography Trivia Game

**Date:** 2026-04-05  
**Status:** Pending Approval  
**Design doc:** `docs/design/DESIGN-geogame.md`

---

## How This Works

Client-side React game with a 30-second countdown. Questions are generated randomly from a static TypeScript dataset. Score is saved to Vercel Postgres via a server API route at game end. End screen fetches the average score from the same API.

---

## File Structure

```
app/
  geogame/
    page.tsx              ← Game page (client component)
  api/
    scores/
      route.ts            ← POST (save score) + GET (fetch average)

lib/
  questions.ts            ← Full question bank: states, countries, continents
  gameLogic.ts            ← generateQuestion() function

components/
  GameButton.tsx          ← Reusable nav pill button for GeoGame
```

---

## Question Bank (`lib/questions.ts`)

Three static datasets:

```ts
// US States → Capitals (50 entries)
export const usStates = [
  { state: "Alabama", capital: "Montgomery" },
  { state: "Alaska", capital: "Juneau" },
  // ... all 50
];

// Countries → Capitals (~100 entries)
export const countries = [
  { country: "France", capital: "Paris" },
  { country: "Japan", capital: "Tokyo" },
  // ... ~100 countries
];

// Countries → Continents (~100 entries, same countries)
export const continents = [
  { country: "France", continent: "Europe" },
  { country: "Japan", continent: "Asia" },
  // ...
];
```

---

## Question Generation (`lib/gameLogic.ts`)

```ts
type Question = {
  prompt: string;       // "What is the capital of France?"
  correct: string;      // "Paris"
  options: string[];    // ["Paris", "Berlin", "Madrid", "Rome"] (shuffled)
};

export function generateQuestion(): Question
```

Logic:
1. Randomly pick a question type (state capital / country capital / continent)
2. Pick a random item from that dataset
3. Generate 3 wrong answers from the same pool (e.g. other capitals)
4. Shuffle all 4 options
5. Return the Question object

---

## Game Page (`app/geogame/page.tsx`)

Client component (`"use client"`). Three views controlled by a `gameState` variable:

### View 1: Landing
- Heading: "GeoGame"
- Brief description of the game
- "Start Game" button

### View 2: Playing
- Timer: counts down from 30, large and prominent
- Score: displayed in corner (starts at 0)
- Question prompt: large text
- 4 answer buttons: bordered rectangles
- On correct answer: button flashes green, score +1, next question immediately
- On wrong answer: button flashes red, correct answer highlighted green, score −1, next question after 800ms
- When timer hits 0: transition to View 3, save score to DB

### View 3: End Screen
- "Time's up!"
- Your score: [n]
- Average score across all games: [n] (fetched from API)
- "Play Again" button (resets to View 1)

---

## API Route (`app/api/scores/route.ts`)

**POST** — save a score
```ts
// Request body: { score: number }
// Inserts into scores table, returns 200
```

**GET** — fetch stats
```ts
// Returns: { average: number, count: number }
// SELECT AVG(score), COUNT(*) FROM scores
```

---

## Database Setup (Vercel Postgres)

**Step 1:** In Vercel dashboard → Storage → Create Database → Postgres  
**Step 2:** Copy the `DATABASE_URL` environment variable  
**Step 3:** Install package: `npm install @vercel/postgres`  
**Step 4:** Run migration (once):
```sql
CREATE TABLE scores (
  id SERIAL PRIMARY KEY,
  score INTEGER NOT NULL,
  played_at TIMESTAMP DEFAULT NOW()
);
```

---

## Nav Button (`components/GameButton.tsx`)

A small outlined pill button added to `Nav.tsx`, visually separated from the main links.

```tsx
// Renders: [▶ GeoGame]
// Style: border border-[#1B2A4A] text-[#1B2A4A] px-3 py-1 text-sm
//        hover: bg-[#1B2A4A] text-white
//        transition-colors
```

---

## Implementation Steps (Ordered)

1. Install `@vercel/postgres`
2. Set up Vercel Postgres database + run migration
3. Build `lib/questions.ts` — full question bank
4. Build `lib/gameLogic.ts` — `generateQuestion()` function
5. Build `app/api/scores/route.ts` — POST + GET endpoints
6. Build `app/geogame/page.tsx` — landing + game + end screen
7. Add `GameButton` to `Nav.tsx`
8. Test end-to-end locally
9. Deploy

---

## Test Strategy

Manual testing:
- Play a full game, verify score increments/decrements correctly
- Let timer expire, verify score saves to DB
- Verify end screen shows correct average
- Check mobile layout
- Verify "Play Again" resets correctly

---

## Dependencies

```json
"@vercel/postgres": "latest"
```

---

## Out of Scope

- Named leaderboard
- Difficulty settings
- Question categories toggle
- Animations beyond color flash
