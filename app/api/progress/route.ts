import { NextResponse } from "next/server";
import { calculateXp } from "@/lib/scoring/xp";

export async function POST(request: Request) {
  const body = await request.json();
  const correctAnswers = Number(body.correctAnswers ?? 0);

  return NextResponse.json({
    xpEarned: calculateXp(correctAnswers),
    note: "Supabase persistence will be wired in the next step."
  });
}
