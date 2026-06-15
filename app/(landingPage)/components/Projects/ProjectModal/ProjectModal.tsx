"use client";

import { useEffect } from 'react';
import { motion } from 'motion/react';
import { X } from 'lucide-react';
import type { ProjectModalProps } from '@/app/props';
import { ProjectModalInfo } from './ProjectModalInfo';
import { ProjectModalCarousel } from './ProjectModalCarousel';

export const ProjectModal = ({ project, onClose }: ProjectModalProps) => {
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
      className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8"
      style={{ backgroundColor: 'rgba(17,17,16,0.85)', backdropFilter: 'blur(8px)' }}
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={project.name}
    >
      <motion.div
        initial={{ opacity: 0, y: 30, scale: 0.97 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 20, scale: 0.97 }}
        transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
        className="relative w-full max-w-5xl max-h-[90vh] overflow-y-auto grid grid-cols-1 md:grid-cols-2"
        style={{ backgroundColor: '#1a1a19' }}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 flex items-center justify-center w-8 h-8"
          style={{ backgroundColor: 'rgba(241,237,228,0.08)', border: '1px solid rgba(241,237,228,0.15)' }}
          aria-label="Cerrar modal"
        >
          <X size={14} color="#f1ede4" />
        </button>

        {/* Carousel — top on mobile, right on desktop */}
        <div className="w-full order-1 md:order-2" style={{ backgroundColor: '#111110' }}>
          <ProjectModalCarousel photos={project.photos} projectName={project.name} showBeforeAfter={project.showBeforeAfter ?? true} />
        </div>

        {/* Info — bottom on mobile, left on desktop */}
        <div className="p-8 order-2 md:order-1">
          <ProjectModalInfo
            name={project.name}
            description={project.description}
            location={project.location}
            year={project.year}
            category={project.category}
          />
        </div>
      </motion.div>
    </motion.div>
  );
};
