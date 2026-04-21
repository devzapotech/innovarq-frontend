import { motion } from 'motion/react';

export const ProcessCTA = () => {
  const scrollToContact = () => {
    const el = document.querySelector('#contacto');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.4, duration: 0.8 }}
      className="mt-24 pt-16 flex flex-col md:flex-row items-start md:items-center justify-between gap-8"
      style={{ borderTop: '1px solid rgba(17,17,16,0.15)' }}
    >
      <p style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 300, fontStyle: 'italic', fontSize: 'clamp(1.5rem, 3vw, 2.5rem)', color: '#111110', maxWidth: '500px', lineHeight: 1.3 }}>
        &ldquo;Del concepto al espacio habitable, cada paso está diseñado para superar expectativas.&rdquo;
      </p>
      <button
        onClick={scrollToContact}
        className="px-8 py-4 transition-all duration-300 hover:bg-[#111110] hover:text-[#f1ede4] hover:border-[#111110] shrink-0 cursor-pointer"
        style={{
          fontFamily: "'Inter', sans-serif",
          fontSize: '0.65rem',
          fontWeight: 400,
          letterSpacing: '0.2em',
          textTransform: 'uppercase',
          backgroundColor: 'transparent',
          color: '#111110',
          border: '1px solid rgba(17,17,16,0.4)',
        }}
      >
        Iniciar mi proyecto
      </button>
    </motion.div>
  );
}
