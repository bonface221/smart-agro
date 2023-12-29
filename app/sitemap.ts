import { BASE_URL as BaseUrl } from "@app/config/config";

export default async function sitemap() {
  const date = new Date().toISOString();
  return [
    {
      url: `${BaseUrl}/`,
      lastModified: date,
      changefreq: "daily",
      priority: 1.0,
    },
  ];
}
