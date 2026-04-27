# Learn Bengali for Rachel

Conversation-first Bengali learning app for an English-speaking beginner.

## Stack
- Next.js (App Router) + TypeScript
- Tailwind CSS
- Supabase (Auth + Postgres)
- Vercel deployment target

## MVP scope
- Lesson path (4 units)
- Flashcards
- Quiz (multiple choice, translation, matching)
- Progress tracking (XP, streak, completed lessons)
- Mistake review queue

## Run locally
1. Install dependencies: `npm install`
2. Start dev server: `npm run dev`
3. Type-check: `npm run typecheck`

## Notes
- Content currently loads from JSON in `content/units/*`.
- API routes are scaffolded and ready for Supabase persistence wiring.
