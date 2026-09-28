import { defineRouting } from "next-intl/routing";

// 唯一真相源：最终语言集合（与 src/locales/*.json、request.ts、language-switcher.tsx 保持一致）
export const locales = ["en", "es", "pt", "de"] as const;

export const routing = defineRouting({
  locales,
  defaultLocale: "en",
  localePrefix: "always",
  localeDetection: false,
});

export type Locale = (typeof locales)[number];
