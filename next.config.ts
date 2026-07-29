import type { NextConfig } from "next";

const removedPages = ["services", "work", "process", "faq", "contact"];

const nextConfig: NextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  async redirects() {
    return removedPages.map((page) => ({
      source: `/${page}`,
      destination: `/#${page}`,
      permanent: true,
    }));
  },
};

export default nextConfig;
