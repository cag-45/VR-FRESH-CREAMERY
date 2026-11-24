export default function imageLoader({
  src,
  width,
  quality,
}: {
  src: string;
  width: number;
  quality?: number;
}): string {
  // Determine basePath for GitHub Pages (/VR-FRESH-CREAMERY) vs local/Vercel ("")
  const basePath =
    process.env.NEXT_PUBLIC_BASE_PATH !== undefined
      ? process.env.NEXT_PUBLIC_BASE_PATH
      : process.env.GITHUB_ACTIONS === "true" || process.env.DEPLOY_TARGET === "gh-pages"
      ? "/VR-FRESH-CREAMERY"
      : "";

  // If already absolute URL (http/https) or relative without leading slash
  if (!src.startsWith("/")) {
    return src;
  }

  // Prevent double-prefixing if already prefixed
  if (basePath && src.startsWith(basePath)) {
    return src;
  }

  return `${basePath}${src}`;
}
