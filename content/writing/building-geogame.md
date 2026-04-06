---
title: "I Built a Geography Trivia Game Into My Personal Site"
date: "2026-04-05"
description: "A side project born from airplane seatback screens, the geography bee, and a good excuse to ship something fun."
slug: "building-geogame"
---

I made it far in the geography bee. Elementary school, middle school — world trivia was always my jam.

On planes, I'm the person ignoring the movie and playing the trivia game on the seatback screen. On Jeopardy, geography is where I mentally buzz in before the contestant finishes reading.

So when I was looking for the next thing to build on this site, a geography trivia game was an obvious choice.

---

## What it is

[GeoGame](/geogame) is a 30-second trivia sprint. US state capitals, world capitals, and continents — 176 countries in the question bank. +1 for correct, −1 for wrong. When time runs out, you see your score against the running average of everyone who's played.

Simple premise. Surprisingly hard to put down.

---

## Why I built it this way

The game needed a database — scores had to persist somewhere, and the end screen comparison only means something if it's pulling from real data. I used Vercel Postgres (Neon under the hood) for the storage layer, which fit cleanly into the existing stack.

The schema is intentionally minimal: one table, one row per game played.

```sql
CREATE TABLE scores (
  id SERIAL PRIMARY KEY,
  score INTEGER NOT NULL,
  played_at TIMESTAMP DEFAULT NOW()
);
```

Two API routes handle everything. A `POST` writes the score when the timer expires. A `GET` returns the average across all games. No auth, no user accounts — anonymous by design. The friction of signing in would kill the impulse to play.

---

## What I focused on

The technical infrastructure was straightforward. What took more thought was the game feel — the decisions that determine whether it's actually fun to play.

A few that mattered:

- **Timer at 30 seconds.** Long enough to get into a rhythm, short enough to stay urgent.
- **Score penalty for wrong answers.** −1 creates real stakes. Without it, the optimal strategy is just to guess fast.
- **800ms delay on wrong answers.** You see the correct answer highlighted before the next question loads. Informative without being punishing.
- **Question mix across three categories.** Rotating between state capitals, world capitals, and continents keeps it from feeling repetitive.

The question bank started at ~100 countries. I expanded it to 176 — essentially full global coverage — because getting asked the same capital twice in a 30-second run breaks the illusion.

---

## Try it

[🌎 GeoGame](/geogame)

My personal best is 11. Let me know if you beat it.
