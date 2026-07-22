"use client";

import { useState } from 'react';
import { AnimatePresence } from 'motion/react';
import { PROJECTS, PROJECT_FILTERS } from '@/app/constants';
import type { Project } from '@/app/types';
import { ProjectsHeader } from './ProjectsHeader';
import { ProjectsFilter } from './ProjectsFilter';
import { ProjectsGrid } from './ProjectsGrid';
import { ProjectsViewAll } from './ProjectsViewAll';
import { ProjectModal } from './ProjectModal/ProjectModal';

export function ProjectsSection() {
  const [activeFilter, setActiveFilter] = useState('Todos');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filtered = activeFilter === 'Todos'
    ? PROJECTS
    : PROJECTS.filter(p => p.type === activeFilter);

  return (
    <>
      <section id="proyectos" style={{ backgroundColor: '#f1ede4' }}>
        <div className="max-w-350 mx-auto px-6 md:px-12 lg:px-24 py-28 md:py-40">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
            <ProjectsHeader />
            <ProjectsFilter
              filters={PROJECT_FILTERS}
              activeFilter={activeFilter}
              onFilter={setActiveFilter}
            />
          </div>
          <ProjectsGrid
            projects={filtered}
            activeFilter={activeFilter}
            onCardClick={setSelectedProject}
          />
          <ProjectsViewAll />
        </div>
      </section>
      <AnimatePresence>
        {selectedProject && (
          <ProjectModal
            key={selectedProject.id}
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </AnimatePresence>
    </>
  );
}
