export function getSiteUrl(): string {
  const rawUrl = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  if (!rawUrl) {
    return "https://www.vrfreshcreamery.co.in";
  }

  const withProtocol =
    rawUrl.startsWith("http://") || rawUrl.startsWith("https://")
      ? rawUrl
      : `https://${rawUrl}`;

  return withProtocol.replace(/\/+$/, "");
}
