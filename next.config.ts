import type { NextConfig } from "next";

const removedPages = ["services", "work", "process", "faq", "contact"];

const nextConfig: NextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  async redirects() {
    return [
      {
        source: "/",
        destination: "/he",
        permanent: true,
      },
      ...removedPages.map((page) => ({
        source: `/${page}`,
        destination: `/he/#${page}`,
        permanent: true,
      })),
    ];
  },
};

export default nextConfig;
