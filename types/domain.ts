export type UserProgress = {
  userId: string;
  completedLessonIds: string[];
  currentUnit: number;
  xp: number;
  streak: number;
};

export type MistakeRecord = {
  userId: string;
  exerciseId: string;
  wrongAnswer: string;
  retryStatus: "pending" | "completed";
};
