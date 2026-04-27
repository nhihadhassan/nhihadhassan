export type MistakeItem = {
  exerciseId: string;
  wrongAnswer: string;
  retryStatus: "pending" | "completed";
};

export function queueMistake(mistakes: MistakeItem[], next: MistakeItem) {
  return [...mistakes, next];
}
