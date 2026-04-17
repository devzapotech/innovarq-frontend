"use client";

import { useRef } from 'react';
import { useScroll, useTransform } from 'motion/react';
import { HeroBackground } from './HeroBackground';
import { HeroContent } from './HeroContent';
import { HeroScrollIndicator } from './HeroScrollIndicator';
import { HeroProjectIndicator } from './HeroProjectIndicator';

export const HeroSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ['start start', 'end start'] });
  const imgY = useTransform(scrollYProgress, [0, 1], ['0%', '25%']);
  const textY = useTransform(scrollYProgress, [0, 1], ['0%', '15%']);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  const handleNav = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="inicio" ref={containerRef} className="relative w-full overflow-hidden" style={{ height: '100svh', minHeight: '600px' }}>
      <HeroBackground imgY={imgY} />
      <HeroContent textY={textY} opacity={opacity} onNav={handleNav} />
      <HeroScrollIndicator onNav={handleNav} />
      <HeroProjectIndicator />
    </section>
  );
}
