import type { Config } from "tailwindcss";
export default { content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"], theme: { extend: {
  colors: {
    void: "var(--color-text)",
    cloud: "var(--color-bg)",
    ink: "var(--color-border)",
    signal: "var(--color-primary)",
    ember: "var(--color-mustard)",
    mist: "var(--color-muted)",
    surface: "var(--color-surface)",
    soft: "var(--color-soft)",
    olive: "var(--color-olive)",
    peach: "var(--color-peach)",
  },
  fontFamily: { sans: ["var(--font-heebo)"], display: ["var(--font-frank)"] },
  boxShadow: { mockup: "0 30px 90px color-mix(in srgb, var(--color-text) 45%, transparent)", glow: "0 0 45px color-mix(in srgb, var(--color-primary) 18%, transparent)" },
  animation: {
    "hero-bg-reveal": "hero-bg-reveal 1200ms cubic-bezier(0.16, 1, 0.3, 1) both",
    "hero-header-reveal": "hero-fade-down 520ms cubic-bezier(0.16, 1, 0.3, 1) both",
    "hero-fade-up": "hero-fade-up 620ms cubic-bezier(0.16, 1, 0.3, 1) both",
    "hero-title-reveal": "hero-title-reveal 900ms cubic-bezier(0.16, 1, 0.3, 1) both",
    "hero-chip-reveal": "hero-fade-up 460ms cubic-bezier(0.16, 1, 0.3, 1) both",
    "primary-cta-pulse": "primary-cta-pulse 4200ms ease-in-out infinite",
    "marquee-rtl": "marquee-rtl 26s linear infinite",
  },
  keyframes: {
    "hero-bg-reveal": { "0%": { opacity: "0", transform: "scale(1.025)" }, "100%": { opacity: "1", transform: "scale(1)" } },
    "hero-fade-down": { "0%": { opacity: "0", transform: "translateY(-10px)" }, "100%": { opacity: "1", transform: "translateY(0)" } },
    "hero-fade-up": { "0%": { opacity: "0", transform: "translateY(14px)" }, "100%": { opacity: "1", transform: "translateY(0)" } },
    "hero-title-reveal": { "0%": { opacity: "0", transform: "translateY(18px)", clipPath: "inset(0 0 100% 0)" }, "100%": { opacity: "1", transform: "translateY(0)", clipPath: "inset(0 0 0 0)" } },
    "primary-cta-pulse": { "0%, 100%": { boxShadow: "4px 4px 0 0 rgba(0,0,0,1), 0 0 0 0 rgba(181,106,66,0)" }, "50%": { boxShadow: "4px 4px 0 0 rgba(0,0,0,1), 0 0 0 8px rgba(181,106,66,0.16)" } },
    "marquee-rtl": { "0%": { transform: "translateX(0)" }, "100%": { transform: "translateX(-50%)" } },
  }
}}, plugins: [] } satisfies Config;
