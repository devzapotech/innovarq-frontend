'use client';

import { useState, useEffect, useCallback } from 'react';
import { AnimatePresence } from 'motion/react';
import { TESTIMONIALS } from '@/app/constants';
import { TestimonialsHeader } from './TestimonialsHeader';
import { TestimonialSlide } from './TestimonialSlide';
import { TestimonialsDots } from './TestimonialsDots';

export function TestimonialsSection() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);

  const next = useCallback(() => {
    setDirection(1);
    setCurrent((c) => (c + 1) % TESTIMONIALS.length);
  }, []);

  const prev = useCallback(() => {
    setDirection(-1);
    setCurrent((c) => (c - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  }, []);

  useEffect(() => {
    const id = setInterval(next, 6000);
    return () => clearInterval(id);
  }, [next]);

  return (
    <section style={{ backgroundColor: '#82866f' }}>
      <div className="max-w-350 mx-auto px-6 md:px-12 lg:px-24 py-28 md:py-40">
        <TestimonialsHeader onPrev={prev} onNext={next} />
        <div className="relative overflow-hidden" style={{ minHeight: '280px' }}>
          <AnimatePresence mode="wait" custom={direction}>
            <TestimonialSlide
              key={TESTIMONIALS[current].id}
              testimonial={TESTIMONIALS[current]}
              direction={direction}
              current={current}
              total={TESTIMONIALS.length}
            />
          </AnimatePresence>
        </div>
        <TestimonialsDots
          total={TESTIMONIALS.length}
          current={current}
          onDotClick={(i) => { setDirection(i > current ? 1 : -1); setCurrent(i); }}
          onPrev={prev}
          onNext={next}
        />
      </div>
    </section>
  );
}
