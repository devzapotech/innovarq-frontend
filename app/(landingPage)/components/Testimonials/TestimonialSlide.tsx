import { motion } from 'motion/react';
import type { TestimonialSlideProps } from '@/app/props';

export function TestimonialSlide({ testimonial: t, direction, current, total }: TestimonialSlideProps) {
  return (
    <motion.div
      key={t.id}
      custom={direction}
      initial={{ opacity: 0, x: direction * 60 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: direction * -60 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16 items-start"
    >
      {/* Large quote mark */}
      <div className="md:col-span-1 hidden md:block">
        <span style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '6rem', color: 'rgba(17,17,16,0.15)', lineHeight: 1, display: 'block', marginTop: '-1rem' }}>
          &ldquo;
        </span>
      </div>

      {/* Quote */}
      <div className="md:col-span-8">
        <blockquote style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 300, fontStyle: 'italic', fontSize: 'clamp(1.5rem, 3vw, 2.5rem)', color: '#111110', lineHeight: 1.45, marginBottom: '2.5rem' }}>
          &ldquo;{t.quote}&rdquo;
        </blockquote>
        <div style={{ borderTop: '1px solid rgba(17,17,16,0.2)', paddingTop: '1.5rem' }}>
          <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.85rem', fontWeight: 400, color: '#111110', letterSpacing: '0.03em' }}>
            {t.author}
          </p>
          <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.7rem', fontWeight: 300, color: 'rgba(17,17,16,0.65)', marginTop: '4px', letterSpacing: '0.05em' }}>
            {t.role}
          </p>
          <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.65rem', fontWeight: 300, color: 'rgba(17,17,16,0.45)', marginTop: '3px', letterSpacing: '0.08em' }}>
            Proyecto: {t.project}
          </p>
        </div>
      </div>

      {/* Counter */}
      <div className="md:col-span-3 md:text-right hidden md:block">
        <span style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '5rem', fontWeight: 300, color: 'rgba(17,17,16,0.12)', lineHeight: 1 }}>
          0{current + 1}
        </span>
        <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.6rem', color: 'rgba(17,17,16,0.4)', letterSpacing: '0.2em' }}>
          / 0{total}
        </p>
      </div>
    </motion.div>
  );
}
