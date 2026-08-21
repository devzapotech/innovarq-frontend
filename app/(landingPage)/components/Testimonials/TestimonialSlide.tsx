import { motion } from 'motion/react';
import type { TestimonialSlideProps } from '@/app/props';

const SWIPE_THRESHOLD = 60;

export function TestimonialSlide({ testimonials, direction, current, total, onSwipe }: TestimonialSlideProps) {
  return (
    <motion.div
      custom={direction}
      initial={{ opacity: 0, x: direction * 60 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: direction * -60 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      drag="x"
      dragConstraints={{ left: 0, right: 0 }}
      dragElastic={0.2}
      dragSnapToOrigin
      onDragEnd={(_, info) => {
        if (info.offset.x < -SWIPE_THRESHOLD) onSwipe(1);
        else if (info.offset.x > SWIPE_THRESHOLD) onSwipe(-1);
      }}
      className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8 items-start cursor-grab active:cursor-grabbing touch-pan-y"
    >
      {testimonials.map((t) => (
        <div key={t.id} className="relative flex flex-col h-full bg-[#f1ede4] md:bg-transparent p-8 md:p-0">
          {/* Quote mark: corner accent on mobile, leading mark on desktop */}
          <span
            className="absolute top-5 right-6 md:hidden"
            style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '2.5rem', color: 'rgba(17,17,16,0.15)', lineHeight: 1 }}
          >
            &rdquo;
          </span>
          <span
            className="hidden md:block"
            style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '3.5rem', color: 'rgba(17,17,16,0.15)', lineHeight: 1 }}
          >
            &ldquo;
          </span>
          <blockquote
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontWeight: 300,
              fontStyle: 'italic',
              fontSize: 'clamp(1.1rem, 1.6vw, 1.4rem)',
              color: '#111110',
              lineHeight: 1.5,
              marginTop: '0.5rem',
              marginBottom: '2rem',
              flexGrow: 1,
            }}
          >
            &ldquo;{t.quote}&rdquo;
          </blockquote>
          <div
            className="flex items-center gap-3 md:block md:gap-0"
            style={{ borderTop: '1px solid rgba(17,17,16,0.2)', paddingTop: '1.25rem' }}
          >
            <div
              className="md:hidden flex items-center justify-center shrink-0"
              style={{
                width: '40px',
                height: '40px',
                borderRadius: '50%',
                backgroundColor: '#82866f',
                color: '#f1ede4',
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: '1.1rem',
              }}
            >
              {t.author.charAt(0)}
            </div>
            <div>
              <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.8rem', fontWeight: 400, color: '#111110', letterSpacing: '0.03em' }}>
                {t.author}
              </p>
              <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.65rem', fontWeight: 300, color: 'rgba(17,17,16,0.45)', marginTop: '3px', letterSpacing: '0.08em' }}>
                Proyecto: {t.project}
              </p>
            </div>
          </div>
        </div>
      ))}

      {/* Counter */}
      <div className="hidden md:flex md:col-span-3 justify-end">
        <span style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '2.5rem', fontWeight: 300, color: 'rgba(17,17,16,0.12)', lineHeight: 1 }}>
          0{current + 1}
        </span>
        <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.6rem', color: 'rgba(17,17,16,0.4)', letterSpacing: '0.2em', alignSelf: 'flex-end', marginLeft: '6px', marginBottom: '4px' }}>
          / 0{total}
        </p>
      </div>
    </motion.div>
  );
}
