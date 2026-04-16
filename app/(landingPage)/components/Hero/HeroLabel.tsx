import { motion } from 'motion/react';

export const HeroLabel = () => (
  <motion.p
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.3, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
    style={{
      fontFamily: "'Inter', sans-serif",
      fontSize: '0.65rem',
      fontWeight: 400,
      color: '#82866f',
      letterSpacing: '0.35em',
      textTransform: 'uppercase',
      marginBottom: '1.5rem',
    }}
  >
    ✦ &nbsp; Estudio de Arquitectura &nbsp; ✦
  </motion.p>
);
