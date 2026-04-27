export function calculateXp(correctAnswers: number) {
  return correctAnswers * 10;
}

export function nextStreak(currentStreak: number, lastActiveDate: Date | null, today = new Date()) {
  if (!lastActiveDate) return 1;

  const oneDay = 24 * 60 * 60 * 1000;
  const diffDays = Math.floor((today.getTime() - lastActiveDate.getTime()) / oneDay);

  if (diffDays === 0) return currentStreak;
  if (diffDays === 1) return currentStreak + 1;
  return 1;
}
