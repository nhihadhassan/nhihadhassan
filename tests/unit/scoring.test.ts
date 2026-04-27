import test from "node:test";
import assert from "node:assert/strict";
import { calculateXp, nextStreak } from "@/lib/scoring/xp";

test("calculateXp returns zero for invalid counts", () => {
  assert.equal(calculateXp(0), 0);
  assert.equal(calculateXp(-3), 0);
});

test("calculateXp scales by 10 XP per correct answer", () => {
  assert.equal(calculateXp(3), 30);
});

test("nextStreak increments when active on consecutive days", () => {
  const today = new Date("2026-04-27T00:00:00.000Z");
  const yesterday = new Date("2026-04-26T00:00:00.000Z");
  assert.equal(nextStreak(4, yesterday, today), 5);
});

test("nextStreak resets after a missed day", () => {
  const today = new Date("2026-04-27T00:00:00.000Z");
  const old = new Date("2026-04-24T00:00:00.000Z");
  assert.equal(nextStreak(7, old, today), 1);
});
