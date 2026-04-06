import { usStates, countries, continents } from "./questions";

export type Question = {
  prompt: string;
  correct: string;
  options: string[]; // 4 shuffled options
};

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function pickRandom<T>(arr: T[]): T {
  return arr[Math.floor(Math.random() * arr.length)];
}

function getWrongAnswers(correct: string, pool: string[], count = 3): string[] {
  const others = pool.filter((x) => x !== correct);
  return shuffle(others).slice(0, count);
}

export function generateQuestion(): Question {
  const type = Math.floor(Math.random() * 3); // 0, 1, or 2

  if (type === 0) {
    // US State → Capital
    const item = pickRandom(usStates);
    const pool = usStates.map((s) => s.capital);
    const wrong = getWrongAnswers(item.capital, pool);
    return {
      prompt: `What is the capital of ${item.state}?`,
      correct: item.capital,
      options: shuffle([item.capital, ...wrong]),
    };
  } else if (type === 1) {
    // Country → Capital
    const item = pickRandom(countries);
    const pool = countries.map((c) => c.capital);
    const wrong = getWrongAnswers(item.capital, pool);
    return {
      prompt: `What is the capital of ${item.country}?`,
      correct: item.capital,
      options: shuffle([item.capital, ...wrong]),
    };
  } else {
    // Country → Continent
    const item = pickRandom(continents);
    const pool = ["Africa", "Asia", "Europe", "North America", "South America", "Oceania"];
    const wrong = getWrongAnswers(item.continent, pool);
    return {
      prompt: `What continent is ${item.country} in?`,
      correct: item.continent,
      options: shuffle([item.continent, ...wrong]),
    };
  }
}
