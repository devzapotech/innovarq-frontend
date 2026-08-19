import { motion } from 'motion/react';

export const ProjectsHeader = () => (
  <div>
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      className="flex items-center gap-4 mb-5"
    >
      <div style={{ width: '40px', height: '1px', backgroundColor: '#82866f' }} />
      <span style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.6rem', color: '#82866f', letterSpacing: '0.35em', textTransform: 'uppercase' }}>
        Portfolio
      </span>
    </motion.div>
    <motion.h2
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.1, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
      style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 300, fontSize: 'clamp(2.5rem, 5vw, 5rem)', color: '#111110', lineHeight: 1.05 }}
    >
      Proyectos y obras<br />
      <span style={{ fontStyle: 'italic', color: '#82866f' }}>seleccionadas</span>
    </motion.h2>
  </div>
);
