import { motion } from 'motion/react';

export const AboutSectionLabel = () => (
  <motion.div
    initial={{ opacity: 0, x: -20 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.7 }}
    className="flex items-center gap-4 mb-12"
  >
    <div style={{ width: '40px', height: '1px', backgroundColor: '#111110' }} />
    <span
      style={{
        fontFamily: "'Inter', sans-serif",
        fontSize: '0.6rem',
        color: '#111110',
        letterSpacing: '0.35em',
        textTransform: 'uppercase',
      }}
    >
      Filosofía
    </span>
  </motion.div>
);
