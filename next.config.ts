import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/bofstudio-landing",
  images: { unoptimized: true },
};

export default nextConfig;
