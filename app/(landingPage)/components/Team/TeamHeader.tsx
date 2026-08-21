import { motion } from 'motion/react';

export function TeamHeader() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-10 md:gap-8 md:mb-20">
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
            Equipo
          </span>
        </motion.div>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 300, fontSize: 'clamp(2.5rem, 5vw, 5rem)', color: '#111110', lineHeight: 1.05 }}
        >
          Las personas<br />
          <span style={{ fontStyle: 'italic', color: '#82866f' }}>detrás del diseño</span>
        </motion.h2>
      </div>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2, duration: 0.8 }}
        className="self-end"
        style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.88rem', fontWeight: 300, color: 'rgba(17,17,16,0.55)', lineHeight: 1.9, maxWidth: '380px' }}
      >
        Un equipo multidisciplinario unido por la pasión de crear espacios que transforman la vida de las personas.
      </motion.p>
    </div>
  );
}
