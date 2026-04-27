const XP_PER_CORRECT_ANSWER = 10;

export function calculateXp(correctAnswers: number) {
  if (correctAnswers <= 0) {
    return 0;
  }

  return Math.floor(correctAnswers) * XP_PER_CORRECT_ANSWER;
}

export function nextStreak(currentStreak: number, lastActiveDate: Date | null, today = new Date()) {
  if (!lastActiveDate) return 1;

  const oneDay = 24 * 60 * 60 * 1000;
  const diffDays = Math.floor((today.getTime() - lastActiveDate.getTime()) / oneDay);

  if (diffDays <= 0) return Math.max(1, currentStreak);
  if (diffDays === 1) return Math.max(1, currentStreak) + 1;
  return 1;
}
