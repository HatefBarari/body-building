export const BRAND = {
  name: "BANDGYM",
  tagline: "Premium Performance Lab",
};

export const COLORS = {
  background: "#030303",
  primaryRed: "#ff1744",
  primaryBlue: "#00d9ff",
  secondaryGlow: "#ff4d6d",
  white: "#ffffff",
  muted: "#9ca3af",
  darkSurface: "#0b0b0b",
  cardSurface: "#111111",
} as const;

export const NAV_LINKS = [
  { href: "#hero", label: "خانه" },
  { href: "#statistics", label: "آمار" },
  { href: "#services", label: "خدمات" },
  { href: "#programs", label: "برنامه‌ها" },
  { href: "#supplements", label: "مکمل‌ها" },
  { href: "#apparel", label: "تجهیزات" },
  { href: "#trainers", label: "مربیان" },
  { href: "#contact", label: "تماس" },
] as const;
