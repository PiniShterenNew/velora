"use client";

import { createContext, useContext, type ReactNode } from "react";
import type { SiteCopy } from "@/lib/data";
import type { Direction, Locale } from "./config";

export interface I18nValue {
  locale: Locale;
  dir: Direction;
  copy: SiteCopy;
}

const I18nContext = createContext<I18nValue | null>(null);

export function I18nProvider({ value, children }: { value: I18nValue; children: ReactNode }) {
  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useI18n(): I18nValue {
  const value = useContext(I18nContext);

  if (!value) {
    throw new Error("useI18n must be used within an I18nProvider");
  }

  return value;
}
