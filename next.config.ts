import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,
  // Plain HTML in out/, deployable to any static host.
  output: "export",
  trailingSlash: true,
  images: { unoptimized: true },
};

export default nextConfig;
