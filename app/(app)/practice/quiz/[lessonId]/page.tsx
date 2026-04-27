import { QuizSession } from "@/components/quiz/quiz-session";
import { getLessonById } from "@/lib/content";

export default async function QuizPage({ params }: { params: Promise<{ lessonId: string }> }) {
  const { lessonId } = await params;
  const lesson = getLessonById(lessonId);

  if (!lesson) return <p>Lesson not found.</p>;

  return (
    <section className="space-y-4">
      <h1 className="text-2xl font-bold">Quiz: {lesson.title}</h1>
      <QuizSession lesson={lesson} />
    </section>
  );
}
