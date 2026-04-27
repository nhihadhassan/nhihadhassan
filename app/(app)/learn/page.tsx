import Link from "next/link";
import { getUnits } from "@/lib/content";

export default function LearnPage() {
  const units = getUnits();

  return (
    <section className="space-y-4">
      <h1 className="text-2xl font-bold">Lesson Path</h1>
      <ul className="space-y-3">
        {units.map((unit) => (
          <li key={unit.id} className="rounded border border-slate-200 bg-white p-4">
            <h2 className="font-semibold">Unit {unit.unitNumber}: {unit.title}</h2>
            <div className="mt-3">
              <Link className="text-indigo-600 underline" href={`/learn/unit/${unit.id}`}>
                Open unit
              </Link>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
