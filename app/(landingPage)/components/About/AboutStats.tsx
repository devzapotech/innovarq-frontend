import { STATS } from '@/app/constants';
import { motion } from 'motion/react';


export const AboutStats = () => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: 0.3, duration: 0.9 }}
    className="mt-10 md:mt-36 flex flex-wrap justify-around gap-y-8 pt-10 md:pt-12"
    style={{ borderTop: '1px solid rgba(17,17,16,0.15)' }}
  >
    {STATS.map((stat) => (
      <div key={stat.label} className="text-center md:text-left">
        <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '3rem', fontWeight: 300, color: '#111110', lineHeight: 1 }}>
          {stat.num}
        </p>
        <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.65rem', color: 'rgba(17,17,16,0.6)', letterSpacing: '0.15em', textTransform: 'uppercase', marginTop: '8px' }}>
          {stat.label}
        </p>
      </div>
    ))}
  </motion.div>
);
