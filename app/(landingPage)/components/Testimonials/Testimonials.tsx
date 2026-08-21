'use client';

import { useState, useEffect, useCallback, useMemo, useRef } from 'react';
import { AnimatePresence } from 'motion/react';
import { TESTIMONIALS } from '@/app/constants';
import { TestimonialsHeader } from './TestimonialsHeader';
import { TestimonialSlide } from './TestimonialSlide';
import { TestimonialsDots } from './TestimonialsDots';

const PER_PAGE_DESKTOP = 3;
const PER_PAGE_MOBILE = 1;
const AUTOPLAY_DELAY = 4000;
const RESUME_DELAY = 8000;

export function TestimonialsSection() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mql = window.matchMedia('(max-width: 767px)');
    setIsMobile(mql.matches);
    const onChange = (e: MediaQueryListEvent) => setIsMobile(e.matches);
    mql.addEventListener('change', onChange);
    return () => mql.removeEventListener('change', onChange);
  }, []);

  const perPage = isMobile ? PER_PAGE_MOBILE : PER_PAGE_DESKTOP;

  const pages = useMemo(() => {
    const chunks = [];
    for (let i = 0; i < TESTIMONIALS.length; i += perPage) {
      chunks.push(TESTIMONIALS.slice(i, i + perPage));
    }
    return chunks;
  }, [perPage]);

  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);

  useEffect(() => {
    setCurrent(0);
  }, [perPage]);

  const next = useCallback(() => {
    setDirection(1);
    setCurrent((c) => (c + 1) % pages.length);
  }, [pages.length]);

  const prev = useCallback(() => {
    setDirection(-1);
    setCurrent((c) => (c - 1 + pages.length) % pages.length);
  }, [pages.length]);

  const [isPaused, setIsPaused] = useState(false);
  const resumeTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const pauseAutoplay = useCallback(() => {
    setIsPaused(true);
    if (resumeTimeoutRef.current) clearTimeout(resumeTimeoutRef.current);
    resumeTimeoutRef.current = setTimeout(() => setIsPaused(false), RESUME_DELAY);
  }, []);

  useEffect(() => {
    return () => {
      if (resumeTimeoutRef.current) clearTimeout(resumeTimeoutRef.current);
    };
  }, []);

  const goNext = useCallback(() => { next(); pauseAutoplay(); }, [next, pauseAutoplay]);
  const goPrev = useCallback(() => { prev(); pauseAutoplay(); }, [prev, pauseAutoplay]);

  const handleSwipe = useCallback((dir: 1 | -1) => {
    if (dir === 1) goNext(); else goPrev();
  }, [goNext, goPrev]);

  const handleDotClick = useCallback((i: number) => {
    setDirection(i > current ? 1 : -1);
    setCurrent(i);
    pauseAutoplay();
  }, [current, pauseAutoplay]);

  useEffect(() => {
    if (isPaused) return;
    const id = setInterval(next, AUTOPLAY_DELAY);
    return () => clearInterval(id);
  }, [next, isPaused]);

  return (
    <section style={{ backgroundColor: '#82866f' }}>
      <div className="max-w-350 mx-auto px-6 md:px-12 lg:px-24 pt-[35px] pb-[35px] md:py-40">
        <TestimonialsHeader onPrev={goPrev} onNext={goNext} />
        <div className="relative overflow-hidden md:min-h-[360px]">
          <AnimatePresence mode="wait" custom={direction}>
            <TestimonialSlide
              key={current}
              testimonials={pages[current]}
              direction={direction}
              current={current}
              total={pages.length}
              onSwipe={handleSwipe}
            />
          </AnimatePresence>
        </div>
        <TestimonialsDots
          total={pages.length}
          current={current}
          onDotClick={handleDotClick}
        />
      </div>
    </section>
  );
}
