import { motion } from 'motion/react';
import { ArrowDown } from 'lucide-react';
import type { HeroScrollIndicatorProps } from '@/app/props';

export const HeroScrollIndicator = ({ onNav }: HeroScrollIndicatorProps) => (
  <motion.button
    onClick={() => onNav('#nosotros')}
    className="absolute bottom-8 right-8 md:right-16 z-10 flex flex-col items-center gap-2 cursor-pointer"
    style={{ background: 'none', border: 'none' }}
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ delay: 1.5, duration: 0.8 }}
  >
    <span
      style={{
        fontFamily: "'Inter', sans-serif",
        fontSize: '0.55rem',
        letterSpacing: '0.3em',
        color: 'rgba(255,255,255,0.5)',
        writingMode: 'vertical-rl',
        textTransform: 'uppercase',
      }}
    >
      Scroll
    </span>
    <motion.div
      animate={{ y: [0, 6, 0] }}
      transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
    >
      <ArrowDown size={14} color="rgba(255,255,255,0.5)" />
    </motion.div>
  </motion.button>
);
