import type { MetadataRoute } from "next";

const baseUrl = "https://www.springofvirtue.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/about-us",
    "/contact-us",
    "/services",
    "/projects",
    "/news-and-events",
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
  }));
}
