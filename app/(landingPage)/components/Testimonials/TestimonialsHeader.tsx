import { motion } from 'motion/react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import type { TestimonialsHeaderProps } from '@/app/props';

export function TestimonialsHeader({ onPrev, onNext }: TestimonialsHeaderProps) {
  return (
    <div className="flex items-center justify-between mb-16 md:mb-24">
      <div>
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="flex items-center gap-4 mb-5"
        >
          <div style={{ width: '40px', height: '1px', backgroundColor: '#111110' }} />
          <span style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.6rem', color: '#111110', letterSpacing: '0.35em', textTransform: 'uppercase' }}>
            Testimonios
          </span>
        </motion.div>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.8 }}
          style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 300, fontSize: 'clamp(2rem, 4vw, 4rem)', color: '#111110', lineHeight: 1.1 }}
        >
          Lo que dicen{' '}
          <span style={{ fontStyle: 'italic', color: '#f1ede4' }}>nuestros clientes</span>
        </motion.h2>
      </div>

      {/* Nav buttons */}
      <div className="hidden md:flex gap-3">
        <button
          onClick={onPrev}
          className="flex items-center justify-center transition-all duration-300 cursor-pointer hover:bg-[#111110]"
          style={{ width: '48px', height: '48px', border: '1px solid rgba(17,17,16,0.3)', background: 'transparent', color: '#111110' }}
        >
          <ChevronLeft size={18} />
        </button>
        <button
          onClick={onNext}
          className="flex items-center justify-center transition-all duration-300 cursor-pointer hover:bg-[#111110]"
          style={{ width: '48px', height: '48px', border: '1px solid rgba(17,17,16,0.3)', background: 'transparent', color: '#111110' }}
        >
          <ChevronRight size={18} />
        </button>
      </div>
    </div>
  );
}
