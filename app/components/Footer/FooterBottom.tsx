import { motion } from 'motion/react';
import { ArrowUp } from 'lucide-react';
import { FooterBottomProps } from '@/app/props';


export const FooterBottom = ({ onScrollTop }: FooterBottomProps) => (
  <div
    className="py-6 flex flex-col md:flex-row items-center justify-between gap-4"
    style={{ borderTop: '1px solid rgba(130,134,111,0.08)' }}
  >
    <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.65rem', fontWeight: 300, color: 'rgba(241,237,228,0.25)', letterSpacing: '0.05em' }}>
      © 2026 Innovarq. Todos los derechos reservados.
    </p>
    <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.65rem', fontWeight: 300, color: 'rgba(241,237,228,0.2)', letterSpacing: '0.05em' }}>
      Diseño & Arquitectura de Alto Estándar
    </p>
    <motion.button
      onClick={onScrollTop}
      whileHover={{ y: -3 }}
      className="flex items-center gap-2 cursor-pointer"
      style={{ background: 'none', border: 'none', color: 'rgba(130,134,111,0.5)' }}
    >
      <span style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase' }}>
        Volver arriba
      </span>
      <ArrowUp size={12} />
    </motion.button>
  </div>
);
