import type { Metadata } from "next";
import { PROJECTS } from "@/app/constants";
import { ProjectCard } from "@/app/(landingPage)/components/Projects/ProjectCard";

export const metadata: Metadata = {
  title: "Proyectos",
  description: "Conocé las obras de Innovarq Studio: reformas integrales, diseño arquitectónico e interiorismo realizados en Buenos Aires y Capital Federal.",
  alternates: {
    canonical: "/proyectos",
  },
};

export default function ProyectosPage() {
  return (
    <main style={{ backgroundColor: "#f1ede4" }}>
      <div className="max-w-350 mx-auto px-6 md:px-12 lg:px-24 py-[35px] md:py-40">
        <h1
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontWeight: 400,
            fontSize: "clamp(2rem, 4vw, 3rem)",
            color: "#111110",
            marginBottom: "2.5rem",
          }}
        >
          Proyectos
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {PROJECTS.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>
      </div>
    </main>
  );
}
