import { FlashcardSession } from "@/components/flashcards/flashcard-session";
import { getLessonById } from "@/lib/content";

export default async function FlashcardPage({ params }: { params: Promise<{ lessonId: string }> }) {
  const { lessonId } = await params;
  const lesson = getLessonById(lessonId);

  if (!lesson) return <p>Lesson not found.</p>;

  return (
    <section className="space-y-4">
      <h1 className="text-2xl font-bold">Flashcards: {lesson.title}</h1>
      <FlashcardSession lesson={lesson} />
    </section>
  );
}
