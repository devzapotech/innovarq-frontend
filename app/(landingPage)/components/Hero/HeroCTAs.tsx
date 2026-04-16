import { motion } from 'motion/react';
import type { HeroCTAsProps } from '@/app/props';

export const HeroCTAs = ({ onNav }: HeroCTAsProps) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 1.1, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
    className="flex flex-col md:flex-row items-start md:items-end gap-6 md:gap-12"
  >
    <p
      style={{
        fontFamily: "'Inter', sans-serif",
        fontSize: '0.85rem',
        fontWeight: 300,
        color: 'rgba(241,237,228,0.75)',
        letterSpacing: '0.05em',
        maxWidth: '340px',
        lineHeight: 1.8,
      }}
    >
      Arquitectura contemporánea,<br />funcional y emocional
    </p>

    <div className="flex gap-4">
      <button
        onClick={() => onNav('#proyectos')}
        className="px-7 py-3 transition-all duration-300 hover:opacity-80"
        style={{
          fontFamily: "'Inter', sans-serif",
          fontSize: '0.65rem',
          fontWeight: 400,
          letterSpacing: '0.2em',
          textTransform: 'uppercase',
          backgroundColor: '#82866f',
          color: '#f1ede4',
          border: 'none',
          cursor: 'pointer',
        }}
      >
        Ver proyectos
      </button>
      <button
        onClick={() => onNav('#contacto')}
        className="px-7 py-3 transition-all duration-300 hover:bg-white/10"
        style={{
          fontFamily: "'Inter', sans-serif",
          fontSize: '0.65rem',
          fontWeight: 400,
          letterSpacing: '0.2em',
          textTransform: 'uppercase',
          backgroundColor: 'transparent',
          color: '#ffffff',
          border: '1px solid rgba(255,255,255,0.4)',
          cursor: 'pointer',
        }}
      >
        Comenzar proyecto
      </button>
    </div>
  </motion.div>
);
