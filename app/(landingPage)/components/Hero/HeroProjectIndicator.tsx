import { motion } from 'motion/react';

export const HeroProjectIndicator = () => (
  <motion.div
    className="absolute top-1/2 right-6 md:right-12 -translate-y-1/2 z-10 flex flex-col items-center gap-3"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ delay: 1.3, duration: 0.8 }}
  >
    <div style={{ width: '1px', height: '60px', backgroundColor: 'rgba(255,255,255,0.2)' }} />
    <span style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.6rem', color: 'rgba(255,255,255,0.4)', letterSpacing: '0.1em' }}>
      01
    </span>
    <div style={{ width: '1px', height: '20px', backgroundColor: 'rgba(255,255,255,0.1)' }} />
  </motion.div>
);
