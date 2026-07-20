"use client";

import { useRouter } from "next/navigation";
import { useTransition } from "react";
import { LOCALE_COOKIE, directionForLocale, otherLocale } from "@/lib/i18n/config";
import { useI18n } from "@/lib/i18n/context";

const ONE_YEAR_SECONDS = 60 * 60 * 24 * 365;

export function LanguageSwitcher({ className }: { className?: string }) {
  const { locale, copy } = useI18n();
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  const target = otherLocale(locale);

  const switchLanguage = () => {
    document.cookie = `${LOCALE_COOKIE}=${target}; path=/; max-age=${ONE_YEAR_SECONDS}; samesite=lax`;
    document.documentElement.lang = target;
    document.documentElement.dir = directionForLocale(target);
    startTransition(() => router.refresh());
  };

  return (
    <button
      type="button"
      className={`lang-switch${className ? ` ${className}` : ""}`}
      onClick={switchLanguage}
      aria-label={copy.languageSwitch.aria}
      lang={target}
      disabled={isPending}
    >
      {copy.languageSwitch.short}
    </button>
  );
}
