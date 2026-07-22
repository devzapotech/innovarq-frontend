import { motion } from 'motion/react';
import Image from 'next/image';

export const AboutImage = () => (
  <motion.div
    initial={{ opacity: 0, scale: 0.96 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
    className="relative"
  >
    <div className="relative overflow-hidden" style={{ aspectRatio: '4/5' }}>
      <Image
        fill
        src="/about.webp"
        alt="Filosofía Innovarq"
        className="w-full h-full object-cover"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 66vw"
      />
      <div
        className="absolute inset-0"
        style={{ background: 'linear-gradient(to top, rgba(130,134,111,0.4) 0%, transparent 60%)' }}
      />
    </div>

    {/* Floating stat — years */}
    <motion.div
      initial={{ opacity: 0, x: 20, y: 20 }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.6, duration: 0.8 }}
      className="absolute -bottom-8 -left-8 md:-left-12 p-6"
      style={{ backgroundColor: '#111110', minWidth: '160px' }}
    >
      <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '3rem', fontWeight: 300, color: '#f1ede4', lineHeight: 1 }}>
        10+
      </p>
      <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.6rem', color: 'rgba(241,237,228,0.7)', letterSpacing: '0.2em', textTransform: 'uppercase', marginTop: '4px' }}>
        Años de experiencia
      </p>
    </motion.div>

    {/* Floating stat — projects */}
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.7, duration: 0.8 }}
      className="absolute -top-6 -right-4 md:-right-8 p-5"
      style={{ border: '1px solid rgba(17,17,16,0.2)', backgroundColor: 'rgba(241,237,228,0.85)', backdropFilter: 'blur(8px)' }}
    >
      <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '2.2rem', fontWeight: 300, color: '#111110', lineHeight: 1 }}>
        100+
      </p>
      <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.58rem', color: 'rgba(17,17,16,0.6)', letterSpacing: '0.18em', textTransform: 'uppercase', marginTop: '3px' }}>
        Proyectos
      </p>
    </motion.div>
  </motion.div>
);
