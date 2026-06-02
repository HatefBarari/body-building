export type CoachGender = "male" | "female";

/** Persian first names commonly used for female coaches in this locale. */
const FEMALE_FIRST_NAMES = new Set([
  "سارا",
  "مینا",
  "نیلوفر",
  "الهام",
  "فاطمه",
  "زهرا",
  "مریم",
  "لیلا",
  "شیدا",
  "پریسا",
]);

export function genderFromPersianName(fullName: string): CoachGender {
  const first = fullName.trim().split(/\s+/)[0] ?? "";
  return FEMALE_FIRST_NAMES.has(first) ? "female" : "male";
}
