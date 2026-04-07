"use client";

import { useEffect, useRef, useState } from "react";
import { Paytone_One } from "next/font/google";
import { generateQuestion, Question } from "@/lib/gameLogic";

const paytone = Paytone_One({ weight: "400", subsets: ["latin"] });

type GameState = "landing" | "playing" | "end";

export default function GeoGamePage() {
  const [gameState, setGameState] = useState<GameState>("landing");
  const [question, setQuestion] = useState<Question | null>(null);
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(30);
  const [selected, setSelected] = useState<string | null>(null);
  const [averageScore, setAverageScore] = useState<number | null>(null);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  function startGame() {
    setScore(0);
    setTimeLeft(30);
    setSelected(null);
    setQuestion(generateQuestion());
    setGameState("playing");
  }

  useEffect(() => {
    if (gameState !== "playing") return;
    timerRef.current = setInterval(() => {
      setTimeLeft((t) => {
        if (t <= 1) {
          clearInterval(timerRef.current!);
          setGameState("end");
          setScore((currentScore) => {
            fetch("/api/scores", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({ score: currentScore }),
            });
            fetch("/api/scores")
              .then((r) => r.json())
              .then((data) => setAverageScore(data.average));
            return currentScore;
          });
          return 0;
        }
        return t - 1;
      });
    }, 1000);
    return () => clearInterval(timerRef.current!);
  }, [gameState]);

  function handleAnswer(option: string) {
    if (selected !== null || !question) return;
    setSelected(option);
    const correct = option === question.correct;
    setScore((s) => s + (correct ? 1 : -1));

    setTimeout(() => {
      setSelected(null);
      setQuestion(generateQuestion());
    }, correct ? 400 : 800);
  }

  function getButtonStyle(option: string) {
    if (selected === null) {
      return "border-2 border-[#1B2A4A] text-[#1B2A4A] hover:bg-[#1B2A4A] hover:text-white transition-colors";
    }
    if (option === question?.correct) {
      return "border-4 border-green-600 bg-green-100 text-green-900 font-semibold";
    }
    if (option === selected && option !== question?.correct) {
      return "border-4 border-red-500 bg-red-100 text-red-800 font-semibold";
    }
    return "border-2 border-[#E5E4E0] text-[#aaaaaa]";
  }

  // Landing view
  if (gameState === "landing") {
    return (
      <div className="min-h-[calc(100vh-80px)] flex items-center justify-center px-6">
        <div className="max-w-[720px] w-full">
          <h1 className={`${paytone.className} text-4xl text-[#111111] mb-8`}>GeoGame</h1>
          <p className="text-[#444444] text-lg mb-8 leading-relaxed">
            30 seconds. US state capitals, world capitals, and continents. +1 for
            correct, −1 for wrong. How high can you score?
          </p>
          <button
            onClick={startGame}
            className="border border-[#1B2A4A] text-[#1B2A4A] px-6 py-3 text-sm rounded-lg hover:bg-[#1B2A4A] hover:text-white transition-colors"
          >
            Start Game
          </button>
          <a href="/writing/building-geogame" className="block mt-8 pl-1 text-sm text-[#1B2A4A] hover:underline underline-offset-4 transition-colors">
            How I built this →
          </a>
        </div>
      </div>
    );
  }

  // End screen view
  if (gameState === "end") {
    return (
      <div className="max-w-[720px] mx-auto px-6 py-20">
        <h1 className={`${paytone.className} text-4xl text-[#111111] mb-6`}>Time&apos;s up!</h1>
        <div className="space-y-3 mb-10">
          <p className="text-[#111111] text-2xl">
            Your score: <span className="font-semibold">{score}</span>
          </p>
          <p className="text-[#444444]">
            Average score across all games:{" "}
            <span className="text-[#111111]">
              {averageScore !== null ? averageScore : "…"}
            </span>
          </p>
        </div>
        <button
          onClick={() => setGameState("landing")}
          className="border-2 border-[#1B2A4A] text-[#1B2A4A] px-6 py-3 text-sm hover:bg-[#1B2A4A] hover:text-white transition-colors"
        >
          Play Again
        </button>
      </div>
    );
  }

  // Playing view
  return (
    <div className="max-w-[720px] mx-auto px-6 py-20">
      {/* Header row */}
      <div className="flex items-center justify-between mb-12">
        <span className="text-5xl font-serif text-[#111111] tabular-nums">
          {timeLeft}
        </span>
        <span className="text-lg text-[#444444]">
          Score: <span className="text-[#111111] font-medium">{score}</span>
        </span>
      </div>

      {/* Question */}
      <p className="text-xl text-[#111111] mb-8 leading-snug">
        {question?.prompt}
      </p>

      {/* Answer buttons */}
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
        {question?.options.map((option) => (
          <button
            key={option}
            onClick={() => handleAnswer(option)}
            disabled={selected !== null}
            className={`px-5 py-4 text-left text-sm ${getButtonStyle(option)}`}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
}
