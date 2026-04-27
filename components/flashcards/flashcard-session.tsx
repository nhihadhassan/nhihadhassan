"use client";

import { useState } from "react";
import type { Lesson } from "@/lib/validators/schemas";

export function FlashcardSession({ lesson }: { lesson: Lesson }) {
  const [index, setIndex] = useState(0);
  const current = lesson.vocabulary[index];

  return (
    <div className="space-y-4 rounded border border-slate-200 bg-white p-4">
      <p className="text-sm text-slate-500">Card {index + 1} of {lesson.vocabulary.length}</p>
      <h2 className="text-2xl font-bold">{current.bengaliRomanized}</h2>
      <p><strong>Meaning:</strong> {current.englishMeaning}</p>
      <p><strong>Pronunciation:</strong> {current.pronunciationHint}</p>
      <div className="flex gap-2">
        <button
          className="rounded border border-slate-300 px-3 py-2"
          onClick={() => setIndex((value) => Math.max(0, value - 1))}
        >
          Previous
        </button>
        <button
          className="rounded bg-indigo-600 px-3 py-2 text-white"
          onClick={() => setIndex((value) => Math.min(lesson.vocabulary.length - 1, value + 1))}
        >
          Next
        </button>
      </div>
    </div>
  );
}
