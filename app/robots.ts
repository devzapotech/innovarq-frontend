import type { MetadataRoute } from "next";

const SITE_URL = "https://studioinnovarq.com";
const isIndexable = process.env.NEXT_PUBLIC_SITE_ENV !== "preview";

export default function robots(): MetadataRoute.Robots {
  if (!isIndexable) {
    return {
      rules: {
        userAgent: "*",
        disallow: "/",
      },
    };
  }

  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/api/"],
    },
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
