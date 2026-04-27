"use client";

import { useMemo, useState } from "react";
import type { Lesson } from "@/lib/validators/schemas";

export function QuizSession({ lesson }: { lesson: Lesson }) {
  const [index, setIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [selected, setSelected] = useState<string | null>(null);

  const question = lesson.exercises[index];
  const options = useMemo(() => {
    const values = [question.correctAnswer, ...question.wrongOptions];
    return values.sort();
  }, [question]);

  function submit(answer: string) {
    setSelected(answer);
    if (answer === question.correctAnswer) {
      setScore((value) => value + 1);
    }
  }

  function next() {
    if (index < lesson.exercises.length - 1) {
      setIndex((value) => value + 1);
      setSelected(null);
    }
  }

  return (
    <div className="space-y-4 rounded border border-slate-200 bg-white p-4">
      <p className="text-sm text-slate-500">Question {index + 1} of {lesson.exercises.length}</p>
      <h2 className="text-xl font-semibold">{question.prompt}</h2>
      <ul className="space-y-2">
        {options.map((option) => (
          <li key={option}>
            <button
              className="w-full rounded border border-slate-300 px-3 py-2 text-left"
              disabled={selected !== null}
              onClick={() => submit(option)}
            >
              {option}
            </button>
          </li>
        ))}
      </ul>
      {selected && (
        <p className="text-sm">
          {selected === question.correctAnswer ? "Correct!" : `Not quite. Correct answer: ${question.correctAnswer}`}
        </p>
      )}
      <div className="flex items-center justify-between">
        <p className="text-sm">Score: {score}</p>
        <button className="rounded bg-indigo-600 px-3 py-2 text-white" onClick={next} disabled={!selected}>
          Next
        </button>
      </div>
    </div>
  );
}
