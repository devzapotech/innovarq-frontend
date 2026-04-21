import { motion } from 'motion/react';

export const ValueLabel = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      className="flex items-center gap-4 mb-12"
    >
      <div style={{ width: '40px', height: '1px', backgroundColor: '#82866f' }} />
      <span style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.6rem', color: '#82866f', letterSpacing: '0.35em', textTransform: 'uppercase' }}>
        Por qué elegirnos
      </span>
    </motion.div>
  );
}
