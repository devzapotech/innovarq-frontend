"use client";

import { useState } from 'react';
import { PROJECTS, PROJECT_FILTERS } from '@/app/constants';
import { ProjectsHeader } from './ProjectsHeader';
import { ProjectsFilter } from './ProjectsFilter';
import { ProjectsGrid } from './ProjectsGrid';
import { ProjectsViewAll } from './ProjectsViewAll';

export function ProjectsSection() {
  const [activeFilter, setActiveFilter] = useState('Todos');

  const filtered = activeFilter === 'Todos'
    ? PROJECTS
    : PROJECTS.filter(p => p.category === activeFilter);

  return (
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
        <ProjectsGrid projects={filtered} activeFilter={activeFilter} />
        <ProjectsViewAll />
      </div>
    </section>
  );
}
