import { calculateXp, nextStreak } from "@/lib/scoring/xp";

describe("scoring", () => {
  it("calculates xp", () => {
    expect(calculateXp(3)).toBe(30);
  });

  it("increments streak when active next day", () => {
    const yesterday = new Date(Date.now() - 24 * 60 * 60 * 1000);
    expect(nextStreak(4, yesterday)).toBe(5);
  });
});
