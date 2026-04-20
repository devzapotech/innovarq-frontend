import { motion } from 'motion/react';

export const ContactHeader = () => {
  return (
    <div className="text-center mb-20">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="flex items-center justify-center gap-4 mb-5"
      >
        <div style={{ width: '40px', height: '1px', backgroundColor: '#111110' }} />
        <span style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.6rem', color: '#111110', letterSpacing: '0.35em', textTransform: 'uppercase' }}>
          Contacto
        </span>
        <div style={{ width: '40px', height: '1px', backgroundColor: '#111110' }} />
      </motion.div>
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.15, duration: 1, ease: [0.22, 1, 0.36, 1] }}
        style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 300, fontSize: 'clamp(3rem, 7vw, 7rem)', color: '#111110', lineHeight: 1.0, letterSpacing: '-0.01em' }}
      >
        Transformemos
      </motion.h2>
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.25, duration: 1, ease: [0.22, 1, 0.36, 1] }}
        style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 300, fontStyle: 'italic', fontSize: 'clamp(3rem, 7vw, 7rem)', color: '#f1ede4', lineHeight: 1.0, letterSpacing: '-0.01em' }}
      >
        tu espacio
      </motion.h2>
    </div>
  );
}
