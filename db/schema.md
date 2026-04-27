# MVP Database Schema (Supabase/Postgres)

## users
- id (uuid, primary key)
- email (text, unique)
- display_name (text)

## lessons
- id (text, primary key)
- unit_number (int)
- title (text)
- difficulty (text)

## vocabulary
- id (text, primary key)
- lesson_id (text, fk lessons.id)
- bengali_romanized (text)
- english_meaning (text)
- pronunciation_hint (text)
- category (text)

## exercises
- id (text, primary key)
- lesson_id (text, fk lessons.id)
- exercise_type (text)
- prompt (text)
- correct_answer (text)
- wrong_options (jsonb)

## user_progress
- user_id (uuid, primary key)
- completed_lessons (text[])
- current_unit (int)
- xp (int)
- streak (int)
- last_active_at (timestamptz)

## mistakes
- id (uuid, primary key)
- user_id (uuid, fk users.id)
- exercise_id (text, fk exercises.id)
- wrong_answer (text)
- retry_status (text)
- created_at (timestamptz)
