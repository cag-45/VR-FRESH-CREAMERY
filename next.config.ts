import type { NextConfig } from "next";

// When deployed to GitHub Pages (https://<username>.github.io/VR-FRESH-CREAMERY/)
const isVercel = process.env.VERCEL === "1";
const isGithub = process.env.GITHUB_ACTIONS === "true" || process.env.DEPLOY_TARGET === "gh-pages";
const repoName = "VR-FRESH-CREAMERY";

const basePath = isVercel
  ? ""
  : process.env.NEXT_PUBLIC_BASE_PATH !== undefined
  ? process.env.NEXT_PUBLIC_BASE_PATH
  : isGithub
  ? `/${repoName}`
  : "";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    loader: "custom",
    loaderFile: "./src/lib/image-loader.ts",
  },
  trailingSlash: true,
  basePath: basePath,
  assetPrefix: basePath ? `${basePath}/` : undefined,
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
