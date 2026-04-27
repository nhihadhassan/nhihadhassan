import unit1 from "@/content/units/unit-1-greetings.json";
import unit2 from "@/content/units/unit-2-family.json";
import unit3 from "@/content/units/unit-3-food.json";
import unit4 from "@/content/units/unit-4-questions.json";
import { UnitSchema, type Unit } from "@/lib/validators/schemas";

const units = [unit1, unit2, unit3, unit4].map((unit) => UnitSchema.parse(unit)) as Unit[];

export function getUnits() {
  return units;
}

export function getUnitById(unitId: string) {
  return units.find((unit) => unit.id === unitId);
}

export function getLessonById(lessonId: string) {
  for (const unit of units) {
    const lesson = unit.lessons.find((item) => item.id === lessonId);
    if (lesson) return lesson;
  }
  return null;
}
