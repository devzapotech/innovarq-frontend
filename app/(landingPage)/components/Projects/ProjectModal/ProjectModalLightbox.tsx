"use client";

import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'motion/react';
import { X } from 'lucide-react';
import type { ProjectModalLightboxProps } from '@/app/props';
import { ProjectModalCarouselImage } from './ProjectModalCarouselImage';
import { ProjectModalCarouselControls } from './ProjectModalCarouselControls';

export const ProjectModalLightbox = ({
  photos,
  projectName,
  current,
  direction,
  onPrev,
  onNext,
  onClose,
}: ProjectModalLightboxProps) => {
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') { e.stopPropagation(); onClose(); }
      if (e.key === 'ArrowLeft') onPrev();
      if (e.key === 'ArrowRight') onNext();
    };
    document.addEventListener('keydown', handler, true);
    return () => document.removeEventListener('keydown', handler, true);
  }, [onClose, onPrev, onNext]);

  if (typeof document === 'undefined') return null;

  return createPortal(
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
      className="fixed inset-0 z-[130] flex items-center justify-center p-4 md:p-10"
      style={{ backgroundColor: 'rgba(10,10,9,0.97)' }}
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={`${projectName} — vista completa`}
    >
      <button
        onClick={(e) => { e.stopPropagation(); onClose(); }}
        className="absolute top-4 right-4 z-20 flex items-center justify-center w-10 h-10"
        style={{ backgroundColor: 'rgba(241,237,228,0.08)', border: '1px solid rgba(241,237,228,0.15)' }}
        aria-label="Cerrar vista completa"
      >
        <X size={18} color="#f1ede4" />
      </button>

      <div className="relative w-full h-full" onClick={(e) => e.stopPropagation()}>
        <AnimatePresence initial={false} custom={direction}>
          <ProjectModalCarouselImage
            key={photos[current].src}
            src={photos[current].src}
            alt={`${projectName} — foto ${current + 1}`}
            direction={direction}
            label={photos[current].label}
          />
        </AnimatePresence>
        {photos.length > 1 && (
          <ProjectModalCarouselControls onPrev={onPrev} onNext={onNext} />
        )}
        <div
          className="absolute bottom-4 right-4"
          style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.65rem', color: 'rgba(241,237,228,0.6)', letterSpacing: '0.15em' }}
        >
          {current + 1} / {photos.length}
        </div>
      </div>
    </motion.div>,
    document.body
  );
};
