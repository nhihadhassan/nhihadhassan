export type MistakeItem = {
  exerciseId: string;
  wrongAnswer: string;
  retryStatus: "pending" | "completed";
};

export function queueMistake(mistakes: MistakeItem[], next: MistakeItem) {
  const existing = mistakes.find((item) => item.exerciseId === next.exerciseId && item.retryStatus === "pending");
  if (existing) {
    return mistakes.map((item) =>
      item.exerciseId === next.exerciseId && item.retryStatus === "pending"
        ? { ...item, wrongAnswer: next.wrongAnswer }
        : item
    );
  }

  return [...mistakes, next];
}

export function markMistakeCompleted(mistakes: MistakeItem[], exerciseId: string) {
  return mistakes.map((item) =>
    item.exerciseId === exerciseId ? { ...item, retryStatus: "completed" as const } : item
  );
}

export function pendingMistakes(mistakes: MistakeItem[]) {
  return mistakes.filter((item) => item.retryStatus === "pending");
}
