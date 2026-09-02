import { PROJECTS } from "@/app/constants";
import type { Project } from "@/app/types";

export function slugify(text: string): string {
  return text
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

// El slug se deriva del nombre del proyecto (decisión: no agregar un campo
// 'slug' manual a projects.ts). Si dos proyectos terminan con el mismo
// nombre, van a generar el mismo slug y se pisan entre sí — usar nombres
// únicos en projects.ts.
export function getProjectSlug(project: Project): string {
  return slugify(project.name);
}

export function getAllProjectSlugs(): string[] {
  return PROJECTS.map(getProjectSlug);
}

export function getProjectBySlug(slug: string): Project | undefined {
  return PROJECTS.find((project) => getProjectSlug(project) === slug);
}
