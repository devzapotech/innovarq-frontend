import fs from "node:fs";
import path from "node:path";
import type { Project } from "@/app/types";

const MAX_DESCRIPTION_LENGTH = 155;

// Meta description por proyecto, derivada de datos reales (category,
// location, year, description) — no es copy inventado, es una
// combinación/recorte de los campos que ya existen en projects.ts.
export function buildProjectDescription(project: Project): string {
  const base = `${project.category} en ${project.location} (${project.year}). ${project.description}`;
  if (base.length <= MAX_DESCRIPTION_LENGTH) return base;

  const truncated = base.slice(0, MAX_DESCRIPTION_LENGTH);
  const lastSpace = truncated.lastIndexOf(" ");
  return `${truncated.slice(0, lastSpace)}…`;
}

// Los proyectos viven en un único archivo estático sin campo de fecha
// propio. Como proxy real de "última modificación" usamos la fecha de
// modificación de ese archivo en disco (cambia cada vez que se agrega o
// edita una obra), en vez de hardcodear o inventar una fecha.
export function getProjectsContentLastModified(): Date {
  const filePath = path.join(process.cwd(), "app", "constants", "projects.ts");
  return fs.statSync(filePath).mtime;
}
