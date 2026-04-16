"use client";

import { useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { KEYWORDS } from '@/app/constants';


export const AboutKeywords = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-10% 0px' });

  return (
    <motion.div
      ref={ref}
      className="flex flex-wrap gap-3"
      initial={{ opacity: 0 }}
      animate={inView ? { opacity: 1 } : {}}
      transition={{ delay: 0.5, duration: 0.8 }}
    >
      {KEYWORDS.map((kw, i) => (
        <motion.span
          key={kw}
          initial={{ opacity: 0, y: 10 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5 + i * 0.1, duration: 0.5 }}
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: '0.65rem',
            fontWeight: 400,
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            color: '#111110',
            border: '1px solid rgba(17,17,16,0.3)',
            padding: '6px 16px',
          }}
        >
          {kw}
        </motion.span>
      ))}
    </motion.div>
  );
};
