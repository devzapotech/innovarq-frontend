"use client";

import { motion } from 'motion/react';
import Image from 'next/image';
import type { ProjectModalCarouselImageProps } from '@/app/props';

const variants = {
  enter: (direction: number) => ({ x: direction > 0 ? '100%' : '-100%', opacity: 0 }),
  center: { x: 0, opacity: 1 },
  exit: (direction: number) => ({ x: direction > 0 ? '-100%' : '100%', opacity: 0 }),
};

export const ProjectModalCarouselImage = ({ src, alt, direction, label }: ProjectModalCarouselImageProps) => (
  <motion.div
    key={src}
    custom={direction}
    variants={variants}
    initial="enter"
    animate="center"
    exit="exit"
    transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
    className="absolute inset-0"
  >
    <Image
      src={src}
      alt={alt}
      fill
      className="object-contain"
      sizes="(max-width: 768px) 100vw, 50vw"
    />
    {label && (
      <div
        className="absolute top-3 left-3"
        style={{
          fontFamily: "'Inter', sans-serif",
          fontSize: '0.6rem',
          letterSpacing: '0.25em',
          textTransform: 'uppercase',
          color: label === 'Antes' ? '#f1ede4' : '#82866f',
          backgroundColor: label === 'Antes' ? 'rgba(17,17,16,0.6)' : 'rgba(130,134,111,0.25)',
          padding: '4px 10px',
          backdropFilter: 'blur(4px)',
          border: '1px solid rgba(241,237,228,0.15)',
        }}
      >
        {label}
      </div>
    )}
  </motion.div>
);
