import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { getAllProjectSlugs, getProjectBySlug, getProjectSlug } from "@/app/lib/slug";
import { buildProjectDescription } from "@/app/lib/seo";
import { ProjectModalInfo } from "@/app/(landingPage)/components/Projects/ProjectModal/ProjectModalInfo";
import { ProjectModalCarousel } from "@/app/(landingPage)/components/Projects/ProjectModal/ProjectModalCarousel";

const SITE_URL = "https://studioinnovarq.com";

type ProjectPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getAllProjectSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return {};

  const description = buildProjectDescription(project);

  return {
    title: project.name,
    description,
    alternates: {
      canonical: `/proyectos/${slug}`,
    },
    openGraph: {
      title: project.name,
      description,
      images: [project.img],
    },
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Inicio", item: `${SITE_URL}/` },
      { "@type": "ListItem", position: 2, name: "Proyectos", item: `${SITE_URL}/#proyectos` },
      { "@type": "ListItem", position: 3, name: project.name, item: `${SITE_URL}/proyectos/${getProjectSlug(project)}` },
    ],
  };

  return (
    <main style={{ backgroundColor: "#1a1a19" }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <div className="max-w-350 mx-auto px-6 md:px-12 lg:px-24 py-[35px] md:py-40">
        <nav aria-label="breadcrumb" className="mb-8">
          <ol
            className="flex flex-wrap items-center gap-2"
            style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.7rem", color: "rgba(241,237,228,0.5)", letterSpacing: "0.05em" }}
          >
            <li>
              <Link href="/" style={{ color: "rgba(241,237,228,0.5)" }}>Inicio</Link>
            </li>
            <li aria-hidden="true">/</li>
            <li>
              <Link href="/#proyectos" style={{ color: "rgba(241,237,228,0.5)" }}>Proyectos</Link>
            </li>
            <li aria-hidden="true">/</li>
            <li aria-current="page" style={{ color: "#f1ede4" }}>{project.name}</li>
          </ol>
        </nav>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="order-2 md:order-1">
            <ProjectModalInfo
              name={project.name}
              description={project.description}
              location={project.location}
              year={project.year}
              category={project.category}
            />
          </div>
          <div className="order-1 md:order-2">
            <ProjectModalCarousel photos={project.photos} projectName={project.name} />
          </div>
        </div>
      </div>
    </main>
  );
}
