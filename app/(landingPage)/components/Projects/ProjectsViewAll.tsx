import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';
import type { ProjectsViewAllProps } from '@/app/props';

export const ProjectsViewAll = ({ onClick }: ProjectsViewAllProps) => (
  <motion.div
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    viewport={{ once: true }}
    transition={{ delay: 0.3, duration: 0.7 }}
    className="mt-16 flex justify-center"
  >
    <button
      onClick={onClick}
      className="group flex items-center gap-3 py-3 transition-all duration-300"
      style={{
        fontFamily: "'Inter', sans-serif",
        fontSize: '0.7rem',
        letterSpacing: '0.2em',
        textTransform: 'uppercase',
        color: '#111110',
        background: 'none',
        border: 'none',
        cursor: 'pointer',
        borderBottom: '1px solid rgba(17,17,16,0.3)',
      }}
    >
      Ver todos los proyectos
      <ArrowUpRight size={14} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
    </button>
  </motion.div>
);
