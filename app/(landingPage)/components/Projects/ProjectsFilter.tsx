import { motion } from 'motion/react';
import type { ProjectsFilterProps } from '@/app/props';

export const ProjectsFilter = ({ filters, activeFilter, onFilter }: ProjectsFilterProps) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: 0.3, duration: 0.7 }}
    className="flex flex-wrap gap-2"
  >
    {filters.map((f) => (
      <button
        key={f}
        onClick={() => onFilter(f)}
        className="px-5 py-2 transition-all duration-300 cursor-pointer"
        style={{
          fontFamily: "'Inter', sans-serif",
          fontSize: '0.65rem',
          letterSpacing: '0.18em',
          textTransform: 'uppercase',
          fontWeight: 400,
          backgroundColor: activeFilter === f ? '#111110' : 'transparent',
          color: activeFilter === f ? '#f1ede4' : '#82866f',
          border: `1px solid ${activeFilter === f ? '#111110' : 'rgba(130,134,111,0.3)'}`,
        }}
      >
        {f}
      </button>
    ))}
  </motion.div>
);
