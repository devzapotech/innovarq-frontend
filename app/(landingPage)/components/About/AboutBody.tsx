import { motion } from 'motion/react';

export const AboutBody = () => (
  <motion.p
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: 0.4, duration: 0.8 }}
    style={{
      fontFamily: "'Inter', sans-serif",
      fontSize: '0.9rem',
      fontWeight: 300,
      color: 'rgba(17,17,16,0.65)',
      lineHeight: 1.9,
      maxWidth: '480px',
      marginBottom: '3rem',
    }}
  >
    Desde 2012, Innovarq ha sido el estudio detrás de proyectos que transforman la arquitectura en experiencias únicas.
    Nos especializamos en crear espacios que fusionan estética, funcionalidad y emoción.
  </motion.p>
);
