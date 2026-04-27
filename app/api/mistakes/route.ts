import { NextResponse } from "next/server";
import { z } from "zod";

const MistakePayload = z.object({
  exerciseId: z.string().min(1),
  wrongAnswer: z.string().min(1),
  retryStatus: z.enum(["pending", "completed"]).default("pending")
});

export async function POST(request: Request) {
  const body = await request.json();
  const payload = MistakePayload.safeParse(body);

  if (!payload.success) {
    return NextResponse.json({ error: "Invalid mistake payload." }, { status: 400 });
  }

  return NextResponse.json({
    saved: true,
    payload: payload.data,
    note: "Server endpoint scaffolded; DB write comes next."
  });
}
