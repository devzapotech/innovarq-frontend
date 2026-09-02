import type { MetadataRoute } from "next";
import { getProjectSlug } from "@/app/lib/slug";
import { getProjectsContentLastModified } from "@/app/lib/seo";
import { PROJECTS } from "@/app/constants";

const SITE_URL = "https://studioinnovarq.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = getProjectsContentLastModified();

  const projectEntries: MetadataRoute.Sitemap = PROJECTS.map((project) => ({
    url: `${SITE_URL}/proyectos/${getProjectSlug(project)}`,
    lastModified,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [
    {
      url: SITE_URL,
      lastModified,
      changeFrequency: "monthly",
      priority: 1,
    },
    ...projectEntries,
  ];
}
