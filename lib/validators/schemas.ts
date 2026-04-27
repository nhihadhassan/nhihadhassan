import { z } from "zod";

export const VocabularySchema = z.object({
  id: z.string(),
  bengaliRomanized: z.string(),
  englishMeaning: z.string(),
  pronunciationHint: z.string(),
  category: z.string()
});

export const ExerciseSchema = z.object({
  id: z.string(),
  type: z.enum(["multiple_choice", "translation", "matching"]),
  prompt: z.string(),
  correctAnswer: z.string(),
  wrongOptions: z.array(z.string()).default([])
});

export const LessonSchema = z.object({
  id: z.string(),
  title: z.string(),
  difficulty: z.enum(["beginner", "easy", "medium"]),
  vocabulary: z.array(VocabularySchema),
  exercises: z.array(ExerciseSchema)
});

export const UnitSchema = z.object({
  id: z.string(),
  title: z.string(),
  unitNumber: z.number().int().positive(),
  lessons: z.array(LessonSchema)
});

export type Unit = z.infer<typeof UnitSchema>;
export type Lesson = z.infer<typeof LessonSchema>;
export type Exercise = z.infer<typeof ExerciseSchema>;
