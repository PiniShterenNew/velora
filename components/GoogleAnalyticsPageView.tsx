"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

export function GoogleAnalyticsPageView({ measurementId }: { measurementId: string }) {
  const pathname = usePathname();

  useEffect(() => {
    window.gtag?.("config", measurementId, {
      page_path: pathname,
    });
  }, [measurementId, pathname]);

  return null;
}