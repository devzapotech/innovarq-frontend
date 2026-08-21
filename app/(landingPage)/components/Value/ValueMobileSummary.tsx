import { motion } from 'motion/react';
import { Check } from 'lucide-react';
import { MINI_STATS } from '@/app/constants';

const MOBILE_VALUES = [
  { title: 'Diseño centrado en el cliente', desc: 'Entendemos a las personas que habitarán el espacio.' },
  { title: 'Optimización de costos', desc: 'Recursos gestionados sin comprometer la visión creativa.' },
  { title: 'Arquitectura que trasciende', desc: 'Obras que perduran y definen el carácter de un lugar.' },
];

export const ValueMobileSummary = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="md:hidden p-8"
      style={{ backgroundColor: '#f1ede4' }}
    >
      <div className="flex justify-between mb-6">
        {MINI_STATS.map((s) => (
          <div key={s.label}>
            <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '2.2rem', fontWeight: 300, color: '#111110', lineHeight: 1 }}>
              {s.num}
            </p>
            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.6rem', color: '#82866f', letterSpacing: '0.2em', textTransform: 'uppercase', marginTop: '4px' }}>
              {s.label}
            </p>
          </div>
        ))}
      </div>

      <div className="flex flex-col gap-6 pt-6" style={{ borderTop: '1px solid rgba(17,17,16,0.15)' }}>
        {MOBILE_VALUES.map((v) => (
          <div key={v.title}>
            <div className="flex items-center gap-2 mb-1">
              <Check size={16} style={{ color: '#82866f' }} />
              <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 400, fontSize: '1.3rem', color: '#111110', lineHeight: 1.2 }}>
                {v.title}
              </h3>
            </div>
            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.8rem', fontWeight: 300, color: 'rgba(17,17,16,0.55)', lineHeight: 1.7 }}>
              {v.desc}
            </p>
          </div>
        ))}
      </div>
    </motion.div>
  );
}
