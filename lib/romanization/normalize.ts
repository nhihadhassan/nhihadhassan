export function normalizeRomanizedBengali(value: string) {
  return value.trim().toLowerCase().replace(/\s+/g, " ");
}
