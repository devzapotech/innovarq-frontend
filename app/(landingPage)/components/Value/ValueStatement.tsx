import { MINI_STATS } from '@/app/constants';
import { motion } from 'motion/react';



export const ValueStatement = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 mb-20 items-end">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
      >
        <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 300, fontSize: 'clamp(2.8rem, 6vw, 6rem)', color: '#111110', lineHeight: 1.02, letterSpacing: '-0.01em' }}>
          La arquitectura es más que{' '}
          <span style={{ fontStyle: 'italic', color: '#82866f' }}>construir</span>
          <span> — es crear experiencias.</span>
        </h2>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="lg:self-end"
      >
        <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.9rem', fontWeight: 300, color: 'rgba(17,17,16,0.55)', lineHeight: 1.9, marginBottom: '2rem' }}>
          En Innovarq, combinamos rigor técnico, creatividad genuina y un profundo entendimiento del espacio habitado para entregar proyectos que transforman vidas.
        </p>
        <div className="flex gap-8">
          {MINI_STATS.map((s) => (
            <div key={s.label}>
              <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '2.5rem', fontWeight: 300, color: '#111110', lineHeight: 1 }}>{s.num}</p>
              <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.6rem', color: '#82866f', letterSpacing: '0.2em', textTransform: 'uppercase', marginTop: '4px' }}>{s.label}</p>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
