import { getLessonById } from "@/lib/content";

export default async function LessonPage({ params }: { params: Promise<{ lessonId: string }> }) {
  const { lessonId } = await params;
  const lesson = getLessonById(lessonId);

  if (!lesson) {
    return <p>Lesson not found.</p>;
  }

  return (
    <section>
      <h1 className="text-2xl font-bold">{lesson.title}</h1>
      <p className="text-slate-700">Difficulty: {lesson.difficulty}</p>
    </section>
  );
}
