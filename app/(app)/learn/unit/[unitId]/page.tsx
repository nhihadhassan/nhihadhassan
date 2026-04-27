import Link from "next/link";
import { getUnitById } from "@/lib/content";

export default async function UnitPage({ params }: { params: Promise<{ unitId: string }> }) {
  const { unitId } = await params;
  const unit = getUnitById(unitId);

  if (!unit) {
    return <p>Unit not found.</p>;
  }

  return (
    <section className="space-y-4">
      <h1 className="text-2xl font-bold">Unit {unit.unitNumber}: {unit.title}</h1>
      <ul className="space-y-3">
        {unit.lessons.map((lesson) => (
          <li key={lesson.id} className="rounded border border-slate-200 bg-white p-4">
            <h2 className="font-semibold">{lesson.title}</h2>
            <div className="mt-3 flex gap-4 text-sm">
              <Link className="text-indigo-600 underline" href={`/practice/flashcards/${lesson.id}`}>
                Flashcards
              </Link>
              <Link className="text-indigo-600 underline" href={`/practice/quiz/${lesson.id}`}>
                Quiz
              </Link>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
