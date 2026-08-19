'use client';

import { useState, useEffect, useCallback, useMemo } from 'react';
import { AnimatePresence } from 'motion/react';
import { TESTIMONIALS } from '@/app/constants';
import { TestimonialsHeader } from './TestimonialsHeader';
import { TestimonialSlide } from './TestimonialSlide';
import { TestimonialsDots } from './TestimonialsDots';

const PER_PAGE = 3;

export function TestimonialsSection() {
  const pages = useMemo(() => {
    const chunks = [];
    for (let i = 0; i < TESTIMONIALS.length; i += PER_PAGE) {
      chunks.push(TESTIMONIALS.slice(i, i + PER_PAGE));
    }
    return chunks;
  }, []);

  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);

  const next = useCallback(() => {
    setDirection(1);
    setCurrent((c) => (c + 1) % pages.length);
  }, [pages.length]);

  const prev = useCallback(() => {
    setDirection(-1);
    setCurrent((c) => (c - 1 + pages.length) % pages.length);
  }, [pages.length]);

  useEffect(() => {
    const id = setInterval(next, 6000);
    return () => clearInterval(id);
  }, [next]);

  return (
    <section style={{ backgroundColor: '#82866f' }}>
      <div className="max-w-350 mx-auto px-6 md:px-12 lg:px-24 py-28 md:py-40">
        <TestimonialsHeader onPrev={prev} onNext={next} />
        <div className="relative overflow-hidden" style={{ minHeight: '360px' }}>
          <AnimatePresence mode="wait" custom={direction}>
            <TestimonialSlide
              key={current}
              testimonials={pages[current]}
              direction={direction}
              current={current}
              total={pages.length}
            />
          </AnimatePresence>
        </div>
        <TestimonialsDots
          total={pages.length}
          current={current}
          onDotClick={(i) => { setDirection(i > current ? 1 : -1); setCurrent(i); }}
          onPrev={prev}
          onNext={next}
        />
      </div>
    </section>
  );
}
