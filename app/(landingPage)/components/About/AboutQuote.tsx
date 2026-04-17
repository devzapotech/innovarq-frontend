import { useRef } from 'react';
import { motion, useInView } from 'motion/react';

interface RevealTextProps {
  children: React.ReactNode;
  delay?: number;
}

const RevealText = ({ children, delay = 0 }: RevealTextProps) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-10% 0px' });
  return (
    <div ref={ref} style={{ overflow: 'hidden' }}>
      <motion.div
        initial={{ y: '100%', opacity: 0 }}
        animate={inView ? { y: '0%', opacity: 1 } : {}}
        transition={{ duration: 1, delay, ease: [0.22, 1, 0.36, 1] }}
      >
        {children}
      </motion.div>
    </div>
  );
};

export const AboutQuote = () => (
  <>
    <RevealText delay={0.1}>
      <h2
        style={{
          fontFamily: "'Cormorant Garamond', serif",
          fontWeight: 300,
          color: '#111110',
          lineHeight: 1.2,
          fontSize: 'clamp(2rem, 4vw, 3.5rem)',
          marginBottom: '1.5rem',
        }}
      >
        Cada proyecto es una oportunidad para crear valor
      </h2>
    </RevealText>
    <RevealText delay={0.2}>
      <h2
        style={{
          fontFamily: "'Cormorant Garamond', serif",
          fontWeight: 300,
          fontStyle: 'italic',
          color: '#f1ede4',
          lineHeight: 1.2,
          fontSize: 'clamp(2rem, 4vw, 3.5rem)',
          marginBottom: '2.5rem',
        }}
      >
        conectar con el entorno y redefinir la experiencia del espacio
      </h2>
    </RevealText>
  </>
);
