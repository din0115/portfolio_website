import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/"
    },
    sitemap: "https://prashant-shrestha.vercel.app/sitemap.xml",
    host: "https://prashant-shrestha.vercel.app"
  };
}