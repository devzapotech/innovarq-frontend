"use client";

import { useEffect } from 'react';
import { motion } from 'motion/react';
import { X } from 'lucide-react';
import type { ProjectsAllModalProps } from '@/app/props';
import { ProjectCard } from './ProjectCard';

export const ProjectsAllModal = ({ projects, onClose, onSelectProject }: ProjectsAllModalProps) => {
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = ''; };
  }, []);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose(); };
    document.addEventListener('keydown', handler);
    return () => document.removeEventListener('keydown', handler);
  }, [onClose]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="fixed inset-0 z-[110] flex items-start md:items-center justify-center p-4 md:p-8"
      style={{ backgroundColor: 'rgba(17,17,16,0.85)', backdropFilter: 'blur(8px)' }}
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label="Todos los proyectos"
    >
      <motion.div
        initial={{ opacity: 0, y: 30, scale: 0.97 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 20, scale: 0.97 }}
        transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
        className="relative w-full max-w-6xl max-h-[90vh] overflow-y-auto"
        style={{ backgroundColor: '#f1ede4' }}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 flex items-center justify-center w-8 h-8"
          style={{ backgroundColor: 'rgba(17,17,16,0.08)', border: '1px solid rgba(17,17,16,0.15)' }}
          aria-label="Cerrar modal"
        >
          <X size={14} color="#111110" />
        </button>

        <div className="p-8 md:p-12">
          <h2
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontWeight: 400,
              fontSize: '2rem',
              color: '#111110',
              marginBottom: '2rem',
            }}
          >
            Todos los proyectos
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
            {projects.map((project, i) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={i}
                onClick={() => onSelectProject(project)}
              />
            ))}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};
