// src/lib/i18n.ts
import zh from "@/content/ui.zh.json";
import en from "@/content/ui.en.json";

export type Locale = "zh" | "en";

export function getDict(locale: Locale) {
  return locale === "zh" ? zh : en;
}

export const locales: Locale[] = ["zh", "en"];
export const defaultLocale: Locale = "zh";