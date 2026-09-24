import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Startsidan visar den statiska sidan i public/index.html (roterande jord).
  async rewrites() {
    return {
      beforeFiles: [{ source: "/", destination: "/index.html" }],
      afterFiles: [],
      fallback: [],
    };
  },
};

export default nextConfig;
