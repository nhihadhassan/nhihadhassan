import { NextResponse } from "next/server";
import { z } from "zod";
import { calculateXp, nextStreak } from "@/lib/scoring/xp";

const ProgressPayload = z.object({
  correctAnswers: z.number().int().min(0),
  currentStreak: z.number().int().min(0).default(0),
  lastActiveDate: z.string().datetime().nullable().default(null)
});

export async function POST(request: Request) {
  const body = await request.json();
  const payload = ProgressPayload.safeParse(body);

  if (!payload.success) {
    return NextResponse.json({ error: "Invalid progress payload." }, { status: 400 });
  }

  const { correctAnswers, currentStreak, lastActiveDate } = payload.data;

  return NextResponse.json({
    xpEarned: calculateXp(correctAnswers),
    updatedStreak: nextStreak(currentStreak, lastActiveDate ? new Date(lastActiveDate) : null),
    note: "Supabase persistence will be wired in the next step."
  });
}
