import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

export const ProcessHeader = () => {
  return (
    <div className="mb-10 md:mb-28">
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="flex items-center gap-4 mb-5"
      >
        <div style={{ width: '40px', height: '1px', backgroundColor: '#111110' }} />
        <span style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.6rem', color: '#111110', letterSpacing: '0.35em', textTransform: 'uppercase' }}>
          Proceso
        </span>
      </motion.div>
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 300, fontSize: 'clamp(2.5rem, 5vw, 5rem)', color: '#111110', lineHeight: 1.05 }}
      >
        Cómo <span style={{ fontStyle: 'italic', color: '#f1ede4' }}>trabajamos</span>
      </motion.h2>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="flex items-center gap-2 mt-6 md:hidden"
      >
        <span style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.65rem', fontWeight: 400, color: '#f1ede4', letterSpacing: '0.25em', textTransform: 'uppercase' }}>
          Deslizá
        </span>
        <ArrowRight size={14} color="#f1ede4" />
      </motion.div>
    </div>
  );
}
