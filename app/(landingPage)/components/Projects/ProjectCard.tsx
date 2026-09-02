import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import type { ProjectCardProps } from '@/app/props';
import { getProjectSlug } from '@/app/lib/slug';

export const ProjectCard = ({ project, index, onClick }: ProjectCardProps) => {
  const [hovered, setHovered] = useState(false);
  const isLarge = project.size === 'large';

  // Navega a /proyectos/[slug] (para que Google la rastree e indexe) salvo
  // que sea un click simple, en cuyo caso se abre el modal como hasta
  // ahora — ctrl/cmd/shift/click-medio siguen abriendo la página real.
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
    e.preventDefault();
    onClick();
  };

  return (
    <Link
      href={`/proyectos/${getProjectSlug(project)}`}
      onClick={handleClick}
      className={`relative overflow-hidden cursor-pointer group block ${isLarge ? 'md:col-span-2' : ''}`}
      style={{ aspectRatio: isLarge ? '16/9' : '4/5' }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-10%' }}
        transition={{ duration: 0.8, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
        className="absolute inset-0"
      >
      {/* Image */}
      <motion.div
        className="absolute inset-0"
        animate={{ scale: hovered ? 1.06 : 1 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      >
        <Image
          src={project.img}
          alt={project.name}
          className="w-full h-full object-cover"
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 66vw"
        />
      </motion.div>

      {/* Base overlay */}
      <div
        className="absolute inset-0 transition-all duration-500"
        style={{ background: hovered ? 'rgba(17,17,16,0.65)' : 'linear-gradient(to top, rgba(17,17,16,0.5) 0%, transparent 60%)' }}
      />

      {/* Bottom info */}
      <div className="absolute bottom-0 left-0 right-0 p-6 flex items-end justify-between">
        <div>
          <motion.p
            animate={{ y: hovered ? -8 : 0, opacity: hovered ? 0 : 1 }}
            transition={{ duration: 0.4 }}
            style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.6rem', color: 'white', letterSpacing: '0.25em', textTransform: 'uppercase', marginBottom: '4px' }}
          >
            {project.category} — {project.year}
          </motion.p>
          <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 400, fontSize: '1.5rem', color: '#f1ede4', lineHeight: 1.1 }}>
            {project.name}
          </h3>
          <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.7rem', color: 'rgba(241,237,228,0.6)', marginTop: '3px' }}>
            {project.location}
          </p>
        </div>
      </div>

      {/* Hover CTA */}
      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.35 }}
            className="absolute inset-0 flex items-center justify-center"
          >
            <div
              className="flex items-center gap-3 px-6 py-3"
              style={{ border: '1px solid rgba(241,237,228,0.4)', backgroundColor: 'rgba(241,237,228,0.08)', backdropFilter: 'blur(4px)' }}
            >
              <span style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.65rem', color: '#f1ede4', letterSpacing: '0.2em', textTransform: 'uppercase' }}>
                Ver proyecto
              </span>
              <ArrowUpRight size={14} color="#f1ede4" />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
    </Link>
  );
};
