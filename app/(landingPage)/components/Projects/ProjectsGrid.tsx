import { motion, AnimatePresence } from 'motion/react';
import type { ProjectsGridProps } from '@/app/props';
import { ProjectCard } from './ProjectCard';

export const ProjectsGrid = ({ projects, activeFilter, onCardClick }: ProjectsGridProps) => (
  <AnimatePresence mode="wait">
    <motion.div
      key={activeFilter}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
      className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6"
    >
      {projects.map((project, i) => (
        <ProjectCard key={project.id} project={project} index={i} onClick={() => onCardClick(project)} />
      ))}
    </motion.div>
  </AnimatePresence>
);
